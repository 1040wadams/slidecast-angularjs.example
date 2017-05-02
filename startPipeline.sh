#!/bin/sh -e

docker run -e "SCM_URL_ENV=https://github.com/FunThomas424242/slidecast-angularjs.example.git" -p 8080:8080 -p 50000:50000 funthomas424242/jenkins-pipeline 