# PULSE Backend

This is the FastAPI backend for the PULSE project, ready to be deployed to Hugging Face.

## How to run locally

1. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Start the server:
   ```bash
   uvicorn app:app --reload
   ```
   The API will be available at `http://127.0.0.1:8000`.

## Deployment to Hugging Face (Spaces)

This project is configured to run smoothly on Hugging Face Spaces (Docker or Gradio SDK with FastAPI). 

To push to Hugging Face:
1. Create a new Hugging Face Space and choose **Docker** as the Space SDK.
2. Clone your Space repository locally.
3. Copy these backend files (`app.py`, `requirements.txt`) into the repository.
4. Push the changes to the `main` branch. 
Hugging Face will automatically install the requirements and launch the FastAPI app.
