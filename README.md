# 📝 Simple Todo App (React + Docker)

A simple Todo web application built with **React** and packaged as a **Docker container**.  
It includes **Add, View, Edit, and Mark as Complete** functionality with unit tests and a GitHub Actions CI/CD pipeline.

---

## 🚀 Features
✅ Add, View, Edit, and Mark as Complete Todos  
✅ Built with **React**  
✅ **Dockerized** for easy deployment  
✅ **GitHub Actions CI/CD** for automated testing and deployment  
✅ Hosted on **Docker Hub**  

---

## 📦 Installation

### 1️⃣ Clone the Repository
```
git clone https://github.com/Martha3001/todo-app.git
cd todo-app
```
### 2️⃣ Install Dependencies
```
npm install
```
### 3️⃣ Run Locally
```
npm start
```
Now open http://localhost:3000 in your browser.

---

🐳 Running with Docker

### 1️⃣ Build Docker Image
```
docker build -t todo-app .
```
### 2️⃣ Run Docker Container
```
docker run -p 3000:3000 todo-app
```
Now, open http://localhost:3000.

### 3️⃣ Pull Image from Docker Hub

If you want to run the pre-built image from Docker Hub, use:
```
docker pull martha3001/todo-app:latest
docker run -p 3000:3000 martha3001/todo-app
```
---

🛠️ Running Tests

To run unit tests:
```
npm test
```
---

### 🔄 CI/CD with GitHub Actions

This project includes a GitHub Actions workflow that:

1. Runs unit tests on every push.

2. Builds a Docker image.

3. Pushes the image to Docker Hub.

📄 Workflow File: .github/workflows/main.yml

---

### 🎯 Tech Stack

Frontend: React.js

Styling: CSS

Containerization: Docker

CI/CD: GitHub Actions

---
