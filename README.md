                                     Building a Simple Blog with Docker Compose
                                     
Step 1: Setup the Project Structure

Create a directory for your project named Assessment_docker. Inside this directory, create three separate directories: front_app, back_app, and db_app.

File structure — names can be of your choice according to your project.

Assessment_docker/
│
├── front_app/
│ ├── index.html
│ └── Dockerfile
│
├── back_app/
│ ├── index.js
│ ├── package.json
│ └── Dockerfile
│
└── db_app/
└── Dockerfile

Step 2: Develop the Frontend

In the front_app directory, create your HTML files (index.html, about.html, etc.) and any necessary assets (CSS, JavaScript).

#front_app/index.html
<!DOCTYPE html>
<html lang=”en”>
<head>
<meta charset=”UTF-8">
<meta name=”viewport” content=”width=device-width, initial-scale=1.0">
<title>My Blog</title>
</head>
<body>
<h1>Welcome to My Blog!</h1>
<! — Your content goes here →
</body>
</html>

Step 3: Develop the Backend

In the back_app directory, create your backend application files (index.js, package.json, etc.).

#back_app/index.js
const express = require(‘express’);
const app = express();

app.get(‘/’, (req, res) => {
res.send(‘Hello from the backend!’);
});

app.listen(3000, () => {
console.log(‘Backend server is running on port 3000’);
});

Create a package.json file in the back_app directory to manage your Node.js dependencies.

#back_app/package.json
{
“dependencies”: {
“express”: “*”
}
}

Step 4: Dockerize the Frontend, Backend, and Database

Create Dockerfiles in the front_app, back_app, and db_app directories to define the Docker images for each service.

# front_app/Dockerfile
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html

# back_app/Dockerfile
FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [“node”, “index.js”]

# db_app/Dockerfile
FROM mongo:latest

Step 5: Configure Docker Compose

Create a docker-compose.yml file in the Assessment_docker directory to define the services and their configurations.

# docker-compose.yml
version: ‘3’

services:
front_app:
build: ./front_app
ports:
— “80:80”

back_app:
build: ./back_app
ports:
— “3000:3000”

db_app:
build: ./db_app
ports:
— “27017:27017”

Step 6: Build and Run the Services

Navigate to your project directory (Assessment_docker) and run docker-compose up to build and start all services defined in the docker-compose.yml file.

docker-compose up

Step 7: Access Your work

Once the services are up and running, you can access your blog’s frontend at http://localhost and interact with the backend at http://localhost:3000.

RESULT:

In summary, Docker Compose simplifies managing multi-container applications like our blog. With Docker’s containerization, we achieve improved isolation and scalability. By following this guide, you’ve efficiently organized, dockerized, and orchestrated your project, empowering you to focus on building and deploying impactful applications with ease.

Dated: 27th of March — 2024
