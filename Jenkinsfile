pipeline {
    agent any

    stages {
        stage('Install') {
            steps {
                sh '''
                  export NVM_DIR="$HOME/.nvm"
                  [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
                  nvm install 24
                  nvm use 24
                  node -v
                  npm -v
                  npm install
                '''
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Archive') {
            steps {
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo '✅ Build completado con éxito'
        }
        failure {
            echo '❌ Build fallido'
        }
    }
}

