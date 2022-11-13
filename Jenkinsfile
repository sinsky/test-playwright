pipeline {
  agent {
    docker {
      image "node:slim"
    }
  }

  stages {
    stage('Install') {
      steps {
        sh "yarn"
      }
    }
    stage('Test') {
      steps {
        sh "yarn test"
      }
    }
  }

  post {
    always {
      juint "playwright-report/index.html"
    }
  }
}
