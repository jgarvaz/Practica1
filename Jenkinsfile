pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Obtiene el código desde tu repositorio
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                // Instala dependencias de npm
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Ejecuta el build de React
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            // Archiva la carpeta build generada como artefacto
            archiveArtifacts artifacts: 'build/**', fingerprint: true
            echo '✅ Build completado correctamente'
        }
        failure {
            // Mensaje de fallo
            echo '❌ El build ha fallado'
        }
    }
}

