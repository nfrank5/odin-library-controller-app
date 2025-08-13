# odin-library-controller-app

Practice project for **The Odin Project – Node.js (Controllers lesson)**.  
Routes are defined in Express and the request logic lives in separate **controllers** for clarity and testability.

## Tech Stack
- Node.js + Express
- Controllers pattern
- Custom error class (NotFoundError) + error middleware

## Getting Started
```bash
npm install
npm start
# or: node app.js


## Project Structure
.
├─ controllers/
│  └─ indexController.js
├─ routes/
│  └─ indexRouter.js
├─ errors/
│  └─ CustomNotFoundError.js
├─ app.js
├─ package.json
└─ README.md