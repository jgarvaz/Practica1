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

        stage('Deploy') {
            steps {
                sh '''
                  rm -rf /var/www/app/*
                  cp -r build/* /var/www/app/
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Aplicación desplegada correctamente'
        }
        failure {
            echo '❌ Pipeline fallido (tests, build o deploy)'
        }
    }
}

