pipeline {
    agent any

    stages {
        stage('Lokaler Testbuild'){
            def exists = fileExists 'target/Jenkinsfile'
            if ( exists ){
                load 'target/Jenkinsfile'
            } 
        }
        stage('Build') {
            steps {
                echo 'Building.. Web App'
                gem install github_changelog_generator
                checkout scm
                github_changelog_generator
            }
            post{
                echo "Build result:" currentBuild.result
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