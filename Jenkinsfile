pipeline {
    agent { docker { image 'node:14-alpine' } }
    stages {
        stage('build') {
            steps {
    dir('client') {
      sh "pwd"
        sh "npm install"
        sh "npm start"
    }
    sh "pwd"
} 
        }
    }
}
