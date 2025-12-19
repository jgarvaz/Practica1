pipeline {
    agent any

    stages {
        stage('Archive') {
            steps {
                archiveArtifacts artifacts: 'build/**'
            }
        }
    }
}
