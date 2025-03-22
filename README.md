# Solar Ai Assistant  
### [Download PDF](https://docs.google.com/document/d/1tF9fU3TEfQFcGSUPdbvcE2GlJ275rlvd6UkS4MynBOQ/edit?usp=sharing)

# AI Assistant with OpenRouter API

## Project Description
This project is an AI-powered chatbot built with **Node.js (Express.js) backend** and **Angular frontend**. It integrates the OpenRouter API to generate AI responses based on user queries.

## Tech Stack
- **Backend:** Node.js, Express.js, Axios, dotenv, CORS, body-parser
- **Frontend:** Angular, TypeScript, FormsModule, HttpClient
- **API:** OpenRouter AI

---

## Project Setup Instructions

### Prerequisites
- Node.js installed (v16+ recommended)
- Angular CLI installed (`npm install -g @angular/cli`)
- OpenRouter API key (store in a `.env` file)

### Backend Setup (Node.js)
1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add your OpenRouter API key:
   ```sh
   OPENROUTER_API_KEY=your_api_key_here
   ```
4. Start the server:
   ```sh
   node server.js
   ```
   The backend will run at `http://localhost:3000`

### Frontend Setup (Angular)
1. Navigate to the Angular project folder:
   ```sh
   cd Solar-Ai-Assistant
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend:
   ```sh
   ng serve --open
   ```
   The application will open in the browser at `http://localhost:4200`

---

## Implementation Details

### Backend (`server.js`)
- Uses Express.js to handle API requests
- Fetches AI-generated responses from OpenRouter API
- Endpoint: `POST /ask` (accepts `{ message: string }` in JSON format)

### Frontend
- **Landing Page (`landing.ts`)**: Redirects users to the chat interface
- **Chat Page (`chat.ts`)**:
  - Users input messages and receive AI responses
  - Uses `HttpClient` to send requests to `http://localhost:3000/ask`
  - Supports light/dark mode toggle

---

## Example Use Cases
1. **Conversational AI:** Users can chat with AI for general queries.
2. **Customer Support Bot:** Can be extended to provide automated customer service.
3. **Educational Assistant:** AI can provide explanations on various topics.

---

## Future Improvements
- **Authentication System:** Secure API usage with user authentication.
- **Database Integration:** Store user queries and responses for analysis.
- **UI Enhancements:** Improve the frontend with animations and chatbot avatars.
- **Deploy on Cloud:** Host the backend on AWS/GCP and frontend on Firebase/Vercel.

---


## Author
Developed by **Rohit Kanaujiya**
- GitHub: [rohitkanaujiya45](https://github.com/rohitkanaujiya45)
- Email: rohitkanaujiy4006@gmail.com

