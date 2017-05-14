pipeline {
    agent any

    stages {
        stage('Lokaler Testbuild'){
            steps {
                script{
                    if ( fileExists('target/Jenkinsfile') ){
                        load 'target/Jenkinsfile'
                    } 
                }
            }
        }
        stage('Build') {
            steps {
                echo 'Building.. Web App'
                checkout scm
                script{
                    gem install github_changelog_generator                    
                    github_changelog_generator
                }
            }
            post{
                failure{
                    steps{
                        echo "Build result:" currentBuild.result
                    }
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}