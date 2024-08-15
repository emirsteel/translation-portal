// src/services/apiService.js

export const translateText = async (sourceText, sourceLanguage, targetLanguage) => {
    try {
        const response = await fetch("http://localhost:8000/translate/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                source_text: sourceText,
                source_language: sourceLanguage,
                target_language: targetLanguage,
            }),
        });

        if (!response.ok) {
            throw new Error("Translation failed");
        }

        const data = await response.json();
        return data.translated_text;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
};
