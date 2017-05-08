#!/bin/sh -e

docker run -e "JP_SCM_URL=https://github.com/FunThomas424242/slidecast-angularjs.example.git" -p 8080:8080 -p 50000:50000 funthomas424242/jenkins-pipeline 