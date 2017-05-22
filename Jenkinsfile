#!groovy

pipeline {
    agent any

    stages {
        stage('Load Jenkinsfile'){
            steps {
                script{
                    if ( fileExists('src/main/scripts/Jenkinsfile') ){
                        load 'src/main/scripts/Jenkinsfile'
                        echo 'Hallo'
                    }else{
                        echo 'Hier Jenkinsfile checkout out später'
                        // load 'src/main/scripts/Jenkinsfile'
                    }
                }
            }
        }
    }
}