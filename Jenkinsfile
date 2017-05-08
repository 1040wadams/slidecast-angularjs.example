pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building.. Web App'
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