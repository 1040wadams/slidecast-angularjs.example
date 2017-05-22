pipeline {
    agent any

    stages {
        stage('Load Jenkinsfile'){
            steps {
                script{
                    if ( fileExists('src/main/scripts/Jenkinsfile') ){
                        load 'src/main/scripts/Jenkinsfile'
                    }else{
                        scm checkout
                        load 'src/main/scripts/Jenkinsfile'
                    }
                }
            }
        }
    }
}