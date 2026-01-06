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
                # Carga nvm
                [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
                # Instala Node 24 si no está
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
                [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
                nvm use 24
                npm install
                '''
            }
        }

        stage('Build') {
            steps {
                sh '''
                [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
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

