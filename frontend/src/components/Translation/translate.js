// src/components/Translation/Translate.js
import React, { useState } from 'react';
import { translateText } from '../../services/apiService';

function Translate() {
    const [sourceText, setSourceText] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    const [sourceLanguage, setSourceLanguage] = useState("en");
    const [targetLanguage, setTargetLanguage] = useState("tr");
    const [error, setError] = useState(null);

    const handleTranslate = async (e) => {
        e.preventDefault();
        try {
            setTranslatedText(""); // Clear previous translation
            setError(null); // Clear previous errors
    
            const translation = await translateText(sourceText, sourceLanguage, targetLanguage);
            setTranslatedText(translation);
        } catch (err) {
            setError("Failed to translate text.");
            console.error("Translation Error:", err);
        }
    };
    
    
    return (
        <div>
            <form onSubmit={handleTranslate}>
                <div>
                    <label>Source Text:</label>
                    <input
                        type="text"
                        value={sourceText}
                        onChange={(e) => setSourceText(e.target.value)}
                    />
                </div>
                <div>
                    <label>Source Language:</label>
                    <input
                        type="text"
                        value={sourceLanguage}
                        onChange={(e) => setSourceLanguage(e.target.value)}
                    />
                </div>
                <div>
                    <label>Target Language:</label>
                    <input
                        type="text"
                        value={targetLanguage}
                        onChange={(e) => setTargetLanguage(e.target.value)}
                    />
                </div>
                <button type="submit">Translate</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {translatedText && (
                <div>
                    <h3>Translated Text:</h3>
                    <p>{translatedText}</p>
                </div>
            )}
        </div>
    );
}

export default Translate;
