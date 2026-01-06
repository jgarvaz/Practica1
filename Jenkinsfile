pipeline {
    agent any

    tools {
        // Usa el NodeJS tool que hayas configurado en Jenkins
        nodejs "NodeJS24"
    }

    stages {
        stage('Install') {
            steps {
                echo 'Instalando dependencias...'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Compilando el proyecto...'
                sh 'npm run build'
            }
        }

        stage('Archive') {
            steps {
                echo 'Archivando artefactos...'
                archiveArtifacts artifacts: '**/dist/**', allowEmptyArchive: true
            }
        }
    }

    post {
        success {
            echo '✅ Build completado correctamente'
        }
        failure {
            echo '❌ Build fallido'
        }
    }
}

