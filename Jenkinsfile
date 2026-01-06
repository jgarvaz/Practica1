pipeline {
    agent any

    environment {
        NVM_DIR = "$HOME/.nvm"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Setup Node') {
            steps {
                sh '''
                export NVM_DIR="$HOME/.nvm"
                [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                nvm install 24
                nvm use 24
                node -v
                npm -v
                '''
            }
        }

        stage('Install dependencies') {
            steps {
                sh '''
                export NVM_DIR="$HOME/.nvm"
                [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                nvm use 24
                npm install
                '''
            }
        }

        stage('Build') {
            steps {
                sh '''
                export NVM_DIR="$HOME/.nvm"
                [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                nvm use 24
                npm run build
                '''
            }
        }
    }

    post {
        success {
            archiveArtifacts artifacts: 'build/**', fingerprint: true
            echo '✅ Build completado correctamente'
        }
        failure {
            echo '❌ El build ha fallado'
        }
    }
}

