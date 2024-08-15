from transformers import MarianMTModel, MarianTokenizer

def chunk_text(text, max_length=512):
    # This function splits text into chunks of max_length tokens.
    tokens = text.split()
    current_chunk = []
    chunks = []

    for token in tokens:
        if len(current_chunk) + len(token) + 1 > max_length:
            chunks.append(" ".join(current_chunk))
            current_chunk = []
        current_chunk.append(token)

    if current_chunk:
        chunks.append(" ".join(current_chunk))

    return chunks

def translate_text(source_text, source_language, target_language):
    # Load model and tokenizer
    model_name = f'Helsinki-NLP/opus-mt-{source_language}-{target_language}'
    tokenizer = MarianTokenizer.from_pretrained(model_name)
    model = MarianMTModel.from_pretrained(model_name)

    # Split text into chunks if necessary
    chunks = chunk_text(source_text, max_length=tokenizer.model_max_length)

    translated_chunks = []
    for chunk in chunks:
        inputs = tokenizer(chunk, return_tensors="pt", padding=True, truncation=True)
        translated_tokens = model.generate(**inputs)
        translated_chunk = tokenizer.decode(translated_tokens[0], skip_special_tokens=True)
        translated_chunks.append(translated_chunk)

    # Join translated chunks into a single output
    return " ".join(translated_chunks)
