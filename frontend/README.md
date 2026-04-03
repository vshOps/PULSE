# PULSE Frontend

This is the front-end interface for the PULSE project, styled according to the Care OS Design System.

## How to run locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

## How to deploy

1. Push this `frontend` code repository to **GitHub**.
2. Go to **Vercel** and connect your GitHub repository to create a new project.
3. In Vercel's Environment Variables settings, define `REACT_APP_API_URL`.
4. **Set `REACT_APP_API_URL` to your Hugging Face backend URL** (e.g., `https://your-username-pulse-backend.hf.space`).
5. Deploy! Vercel will automatically detect Vite and build the site.
