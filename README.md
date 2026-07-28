# AI Customer Complaint Management System

## Project Overview

This project is an AI-powered Customer Complaint Management System developed as part of an internship assignment. The application helps automate the complaint intake process by extracting important information from customer complaint documents and automatically filling a complaint form.

The system accepts PDF, DOCX and TXT complaint files, extracts the text, analyses it using an AI model, and displays the extracted information in a structured complaint form.

---

## Features

- Upload complaint documents (PDF, DOCX, TXT)
- Extract complaint text from uploaded files
- AI-based complaint analysis
- Automatic form filling
- Complaint severity and priority detection
- Save complaint information
- FastAPI REST APIs with Swagger documentation
- Simple and responsive React user interface

---

## Technologies Used

### Frontend
- React.js
- Vite
- Axios
- CSS

### Backend
- Python
- FastAPI
- Uvicorn
- Pydantic

### AI
- OpenRouter API
- LLM for complaint information extraction

### Document Parsing
- PyPDF
- python-docx

---

## Project Structure

```
aivoa-complaint-system
│
├── backend
│   ├── routes
│   ├── services
│   ├── uploads
│   ├── app.py
│   ├── config.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   └── requirements.txt
│
├── frontend
│   ├── public
│   ├── src
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
```

---

## Project Workflow

1. User uploads a complaint document.
2. Backend extracts the complaint text.
3. AI analyses the complaint.
4. AI returns structured complaint information.
5. The complaint form is automatically filled.
6. User reviews the extracted details.
7. Complaint is saved successfully.

---

## API Endpoints

### Upload Complaint

```
POST /complaint/upload
```

Uploads a complaint document and extracts text.

---

### Analyse Complaint

```
POST /complaint/analyze
```

Analyses the extracted complaint text using AI.

---

### Save Complaint

```
POST /complaint/save
```

Saves the complaint information.

---

## How to Run the Project

### Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python -m uvicorn app:app --reload
```

Backend runs on

```
http://127.0.0.1:8000
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

## Sample Workflow

- Upload a complaint document.
- AI extracts important information.
- Complaint form is automatically populated.
- User verifies the details.
- Complaint is saved successfully.

---

## Future Improvements

- Store complaints in a database
- User authentication
- Complaint tracking dashboard
- Email notifications
- Analytics and reporting

---

## Learning Outcomes

Through this project, I learned:

- Building REST APIs using FastAPI
- Developing frontend applications using React
- Connecting frontend and backend
- Working with AI APIs
- Extracting text from PDF and DOCX files
- Handling file uploads
- API testing using Swagger

---

## Author

**Nithin Bollineni**

B.Tech (3rd Year)

AI Customer Complaint Management System
