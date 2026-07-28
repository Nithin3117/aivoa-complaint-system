from fastapi import APIRouter, UploadFile, File, HTTPException
from pydantic import BaseModel
import os
import shutil

from services.pdf_parser import (
    extract_text_from_pdf,
    extract_text_from_docx,
)
from services.langgraph_agent import analyse_complaint

router = APIRouter()

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


class ComplaintRequest(BaseModel):
    complaint_text: str


@router.post("/upload")
async def upload_complaint(file: UploadFile = File(...)):

    extension = file.filename.lower().split(".")[-1]

    if extension not in ["pdf", "docx", "txt"]:
        raise HTTPException(
            status_code=400,
            detail="Supported files: PDF, DOCX, TXT"
        )

    file_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    try:

        if extension == "pdf":
            extracted_text = extract_text_from_pdf(file_path)

        elif extension == "docx":
            extracted_text = extract_text_from_docx(file_path)

        else:
            with open(file_path, "r", encoding="utf-8") as f:
                extracted_text = f.read()

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Extraction Error: {str(e)}"
        )

    return {
        "filename": file.filename,
        "text": extracted_text
    }


@router.post("/analyze")
async def analyze(request: ComplaintRequest):

    return analyse_complaint(request.complaint_text)


@router.post("/save")
async def save(data: dict):

    return {
        "status": "success",
        "data": data
    }