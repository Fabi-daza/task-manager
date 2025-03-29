pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        // Clonar repositorio desde GitHub
        git 'https://github.com/tamybl/task-manager.git'
      }
    }

    stage('Install dependencies') {
      steps {
        // Instalar dependencias con npm
        sh 'npm install'
      }
    }

    stage('Run tests') {
      steps {
        // Ejecutar pruebas automatizadas
        sh 'npm test'
      }
    }
 stage('Build Docker image') {
      steps {
        // Crear imagen Docker
        sh 'docker build -t task-api .'
      }
    }
  }
}    