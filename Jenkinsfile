pipeline {
    agent any

    // Esta sección obliga a Jenkins a usar la versión moderna de Node
    tools {
        nodejs "Node 24" 
    }
	
    stages {
        stage('Install') {
            steps {
                echo 'Instalando dependencias...'
                // Ahora estos comandos mostrarán la v24 y npm 11
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
                // Nota: React por defecto genera la carpeta 'build', no 'dist'
                // He ajustado esto para que coincida con lo que suele generar npm run build
                archiveArtifacts artifacts: 'build/**', allowEmptyArchive: true
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

