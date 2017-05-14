#!/bin/sh -e

docker pull funthomas424242-docker-funthomas424242-container.bintray.io/funthomas424242/jenkins-pipeline
docker run -e "JP_PROJECT_NAME=slidecast-angular.example" -e "JP_SCM_URL=https://github.com/FunThomas424242/slidecast-angularjs.example.git" -p 8080:8080 -p 50000:50000 funthomas424242-docker-funthomas424242-container.bintray.io/funthomas424242/jenkins-pipeline
