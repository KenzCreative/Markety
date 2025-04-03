
# Markety – AI Campaign Assistant

## 🧠 Overview
Markety is an AI-powered tool that analyzes campaign performance data and auto-generates content like Slack updates, summaries, and social posts.

## 🚀 Project Structure
- `frontend/` – React + Tailwind UI
- `backend/` – Flask API with Pandas analysis

## 🛠️ Setup & Run Locally

### Backend
```bash
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## 🌐 Deployment (Render)
- Create two services:
  - **Backend**: Flask Web Service (build: `pip install -r requirements.txt`, start: `python app.py`)
  - **Frontend**: Static Site (build: `npm install && npm run build`, publish: `dist/`)

