pipeline {
    agent {
        docker {
            image 'node:24'
           
        }
    }

    stages {

        stage('Install') {
            steps {
                echo "Instalando dependencias..."
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo "Construyendo la aplicación..."
                sh 'npm run build'
            }
        }

        stage('Archive') {
            steps {
                echo "Archivando el build..."
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo "✅ Build completado correctamente"
        }
        failure {
            echo "❌ Build fallido"
        }
    }
}

