# URL Shortener Application

This is a full-stack URL Shortener application built with Node.js, TypeScript, Express, MongoDB, and React. The application allows users to shorten long URLs and access them using short URLs.

## Features

- Shorten a given URL.
- Redirect to the original URL when the short URL is accessed.
- Simple and user-friendly frontend interface built with React.

## Tech Stack

- **Backend:** Node.js, Express, TypeScript, MongoDB
- **Frontend:** React, TypeScript, Axios

## Prerequisites

- Node.js and npm installed on your machine.
- MongoDB instance running locally or a MongoDB Atlas account.

## Getting Started

### Backend Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/marshatiisa/url-shortener.git
   cd url-shortener
   ```

2. **Install Backend Dependencies:**
   ```bash
   npm install
   ```

3. **Configure MongoDB Connection:**
   Update the `MONGO_URI` variable in `src/app.ts` with your MongoDB connection string.

4. **Run the Backend Server:**
   ```bash
   npm run dev
   ```

   The server should now be running on `http://localhost:5000`.

### Frontend Setup

1. **Navigate to the Frontend Directory:**
   ```bash
   cd url-shortener-frontend
   ```

2. **Install Frontend Dependencies:**
   ```bash
   npm install
   ```

3. **Run the Frontend Development Server:**
   ```bash
   npm start
   ```

   The frontend should now be running on `http://localhost:3000`.

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Enter a long URL in the input field and click "Shorten".
3. The shortened URL will be displayed. Click the shortened URL to be redirected to the original URL.

## Project Structure

### Backend (url-shortener)

```
src
├── controllers
│   └── urlController.ts
├── models
│   └── url.ts
├── routes
│   └── urlRoutes.ts
└── app.ts
```

### Frontend (url-shortener-frontend)

```
src
├── components
│   └── UrlShortenerForm.tsx
├── App.tsx
├── api.ts
└── index.tsx
```

## API Endpoints

- **POST /api/shorten**
  - Request: `{ "url": "http://example.com" }`
  - Response: `{ "shortUrl": "http://localhost:5000/abc123" }`

- **GET /:urlCode**
  - Redirects to the original long URL associated with the given short code.
