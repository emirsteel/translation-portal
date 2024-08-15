# app/routes/translation.py
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.translation_service import translate_text

router = APIRouter()

class TranslationRequest(BaseModel):
    source_text: str
    source_language: str
    target_language: str

@router.post("/translate/")
async def translate(request: TranslationRequest):
    try:
        translated_text = translate_text(request.source_text, request.source_language, request.target_language)
        return {"translated_text": translated_text}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
