# Netflix Clone

A Netflix Clone application built using the MERN stack (MongoDB, Express, React, Node.js) and TMDB API. The app allows users to browse movies, view movie details, also search the movie and see the search history.

## Features
- Movie browsing and search functionality using TMDB API
- User authentication (sign up, login, JWT token management)
- Responsive and modern UI

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [MongoDB](https://www.mongodb.com/) (Local or MongoDB Atlas for cloud-based databases)

## Technologies Used

- **Frontend**:
  - React
  - Tailwind CSS
  - Axios for API calls
- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (for storing user information and preferences)
- **Third-party APIs**:
  - [TMDB API](https://www.themoviedb.org/) for movie and TV show data
- **Authentication**:
  - JWT (JSON Web Token) for user authentication

## Getting Started

Follow these steps to set up the project on your local machine.

### 1. Clone the Repository

Clone the repository to your local machine:

    git clone https://github.com/DenishaDobariya/NetflixClone.git
    cd NetflixClone
        
### 2.Set Up Environment Variables

Create a .env file in the root of the project directory and add the following environment variables:

    PORT=5000
    MONGO_URI=mongodb_string
    NODE_ENV=development
    JWT_SECRET=your_jwt_secret_key
    TMDB_API_KEY=your_tmbd_key

### 4.Install dependencies and build the project:

    npm run build

### 5.Start the app

    npm run start

 It will run on http://localhost:5000

## Troubleshooting
- **MongoDB Connection Error**:
  - Ensure MongoDB is running locally, or update the MONGO_URI in the .env file to connect to a cloud database like MongoDB Atlas.


- **Missing TMDB API Key**:
  - Replace the placeholder TMDB API key in the .env file with your valid API key. You can obtain it by creating an account on TMDB.


