pipeline {
    agent { docker { image 'node:16.17.1-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'cd client'
                sh 'npm install'
                sh 'npm start'
            }
        }
    }
}
