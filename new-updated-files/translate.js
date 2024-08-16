import React, { useState } from 'react';
import { translateText } from '../../services/apiService';
import { FaExchangeAlt, FaClipboard } from 'react-icons/fa';

function Translate() {
    const [sourceText, setSourceText] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    const [sourceLanguage, setSourceLanguage] = useState("en");
    const [targetLanguage, setTargetLanguage] = useState("tr");
    const [error, setError] = useState(null);
    const [copyStatus, setCopyStatus] = useState("Copy Text");

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'tr', name: 'Turkish' },
        { code: 'de', name: 'German' },
        { code: 'es', name: 'Spanish' },
        { code: 'fr', name: 'French' },
        // Add more languages as needed
    ];

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

    const handleCopy = () => {
        navigator.clipboard.writeText(translatedText);
        setCopyStatus("Text is copied.");
        setTimeout(() => setCopyStatus("Copy Text"), 2000);
    };

    const swapLanguages = () => {
        setSourceLanguage(targetLanguage);
        setTargetLanguage(sourceLanguage);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white p-6 lg:p-8">
            <div className="bg-white shadow-lg rounded-lg p-6 lg:p-8 max-w-4xl w-full">
                <div className="flex items-center justify-between mb-6">
                    <div className="flex-1">
                        <label className="block text-gray-700 font-medium mb-2">Source Language:</label>
                        <select
                            value={sourceLanguage}
                            onChange={(e) => setSourceLanguage(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D4E89]"
                        >
                            {languages.map((lang) => (
                                <option key={lang.code} value={lang.code}>{lang.name}</option>
                            ))}
                        </select>
                    </div>
                    <button
                        onClick={swapLanguages}
                        className="mx-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition"
                    >
                        <FaExchangeAlt className="text-gray-600 w-6 h-6" />
                    </button>
                    <div className="flex-1">
                        <label className="block text-gray-700 font-medium mb-2">Target Language:</label>
                        <select
                            value={targetLanguage}
                            onChange={(e) => setTargetLanguage(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D4E89]"
                        >
                            {languages.map((lang) => (
                                <option key={lang.code} value={lang.code}>{lang.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <form onSubmit={handleTranslate} className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
                    <div className="flex-1">
                        <label className="block text-gray-700 font-medium mb-2">Source Text:</label>
                        <textarea
                            placeholder="Enter text to translate"
                            className="w-full h-48 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1D4E89] resize-none"
                            value={sourceText}
                            onChange={(e) => setSourceText(e.target.value)}
                        />
                    </div>
                    <div className={`flex-1 ${translatedText ? 'block' : 'hidden lg:block'}`}>
                        <label className="block text-gray-700 font-medium mb-2">Translated Text:</label>
                        <div className="relative">
                            <textarea
                                readOnly
                                placeholder="Translation will appear here"
                                className="w-full h-48 p-3 border border-gray-300 rounded-md bg-gray-100 focus:outline-none resize-none"
                                value={translatedText}
                            />
                            <div className="absolute top-2 right-2 flex items-center space-x-2 text-[#1D4E89] hover:text-[#163D68] cursor-pointer" onClick={handleCopy}>
                                <FaClipboard className="w-5 h-5" />
                                <span className="text-sm">{copyStatus}</span>
                            </div>
                        </div>
                    </div>
                </form>
                {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
                <div className="flex justify-end mt-6">
                    <button
                        type="submit"
                        onClick={handleTranslate}
                        className="bg-[#1D4E89] text-white font-semibold py-3 px-6 rounded-md hover:bg-[#163D68] transition duration-200"
                    >
                        Translate
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Translate;
