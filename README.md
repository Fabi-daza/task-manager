# 📝 Task API Project

Este proyecto es una API REST simple construida con **Node.js**, diseñada para gestionar tareas. Incluye integración con **Docker** para facilitar la ejecución en contenedores y con **Jenkins** para automatizar flujos de integración y entrega continua (CI/CD).

> Repositorio original: [DesafioSGT - GitHub](https://github.com/SHuan004/DesafioSGT/)

---

## 🚀 Características

- 📋 Listar todas las tareas  
- 🔍 Obtener tarea por ID  

---

## ⚙️ Principales Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [Jenkins](https://www.jenkins.io/)

---

## 💻 Cómo ejecutar el proyecto localmente

1. Clona el repositorio  
   ```bash
   git clone https://github.com/SHuan004/DesafioSGT.git
   cd DesafioSGT
   ```

2. Instalar dependencias: `npm install`  

3. Inicializar el servidor `npm start`

## 🐳 Ejecutar con Docker

1. Construye la imagen del contenedor: `docker build -t task-api .`  

2. Ejecuta el contenedor: `docker run -p 3000:3000 task-api`

## 📂 Estructura del proyecto

DesafioSGT/  
├── Dockerfile  
├── Jenkinsfile  
├── package.json  
├── Resultados/  
├── src/  
│   └── app.js  
├── test/  
│   ├── routes/  
│   └── app.js  
├── README.md  
└── REPORT.md  

## 👩‍💻 / 👨‍💻 Equipo

- Sebastian
- Carlos Romero
- Sergio
- Tamara Bravo
