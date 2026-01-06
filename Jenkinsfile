pipeline {
    agent any
    stages {
        stage('Checkout') { steps { checkout scm } }
        stage('Install & Build') {
            steps {
                sh '''
                node -v
                npm -v
                npm install
                npm run build
                '''
            }
        }
    }
    post {
        success { archiveArtifacts artifacts: 'build/**', fingerprint: true }
        failure { echo '❌ Build fallido' }
    }
}

