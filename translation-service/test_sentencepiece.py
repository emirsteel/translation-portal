# test_sentencepiece.py

from transformers import MarianTokenizer

tokenizer = MarianTokenizer.from_pretrained('Helsinki-NLP/opus-mt-en-fr')
print("Tokenizer loaded successfully!")
