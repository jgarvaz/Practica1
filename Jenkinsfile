pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                echo 'Instalando dependencias...'
                sh 'node -v'
                sh 'npm -v'
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

