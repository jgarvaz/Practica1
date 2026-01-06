pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                // Ejecutar npm install dentro de un contenedor node:24
                sh 'docker run --rm -v $PWD:/app -w /app node:24 npm install'
            }
        }

        stage('Build') {
            steps {
                // Ejecutar npm run build dentro de un contenedor node:24
                sh 'docker run --rm -v $PWD:/app -w /app node:24 npm run build'
            }
        }

        stage('Archive') {
            steps {
                // Guardar el build generado
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }
    }

    post {
        success { echo "✅ Build completado correctamente" }
        failure { echo "❌ El build ha fallado" }
    }
}

