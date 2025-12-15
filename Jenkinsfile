pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                echo "Iniciando tests..."

		sh '''
		for test int test/*.sh do
			echo "Ejecuntando $test..."
			bash "$test"
		done
		'''
            }
        }
	stage('Build'){
		steps{
		echo "Compilando..."
		sh 'echo hello > build.txt'			
		}
		}
	stage('Archivo'){
		steps{
		archiveArtifacts artifacts: 'build.txt', fingerprint: true
}
}

    }	
}

