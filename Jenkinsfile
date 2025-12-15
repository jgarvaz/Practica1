pipeline {
    agent any

    stages {

        stage('Test') {
            steps {
                echo "Iniciando tests..."

                sh '''
                for test in test/*.sh; do
                    echo "Ejecutando $test..."
                    bash "$test"
                done
                '''
            }
        }

        stage('Build') {
            steps {
                echo "Compilando..."
                sh 'echo hello > build.txt'
            }
        }

        stage('Archivo') {
            steps {
                archiveArtifacts artifacts: 'build.txt', fingerprint: true
            }
        }

        stage('Deploy') {
            steps {
                echo "Desplegando..."
                sh 'cp build.txt /var/www/app/'
            }
        }

    }
}
