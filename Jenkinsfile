pipeline {
    agent any

    tools {
        nodejs 'Node 24'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test -- --watchAll=false'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }

    post {
        success {
            echo '✅ Pipeline completado correctamente'
        }
        failure {
            echo '❌ El pipeline ha fallado (tests o build)'
        }
    }
}

