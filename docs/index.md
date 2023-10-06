# Neo Thokoa full-stack-acc-assessment

## Description

This project is a full-stack web application with a Node.js backend written in TypeScript using Express.js as an API server, Docker for containerization, and MongoDB as the database. The frontend is developed using React.js and CSS. 

## Getting Started

To run the project locally, follow the instructions below:

### Backend

1. Make sure you have Docker and Docker Compose installed on your system.
2. Clone this repository.
3. Open a terminal and navigate to the project's root directory.
4. Run the following command to start the Docker environment:
```bash
   docker-compose up -d
```
This will launch the backend and MongoDB containers.
5. The backend API will be exposed at http://localhost:4000.

### Frontend

1. Navigate to the frontend directory in your terminal.
2. Run the following command to install the frontend dependencies:
```bash
yarn install
```
3. Start the frontend development server with:

```bash
yarn start
```
4. The frontend will be available at http://localhost:3000 by default.

### API Endpoint

To get brands, you can make a GET request to the following endpoint:
<http://localhost:4000/api/getbrands>
Optionally, you can filter brands by publishedDate by including the publishedDate parameter in your request.

## Technologies Used

*Node.js (TypeScript)
*Express.js
*Docker
*MongoDB
*React.js
*CSS
