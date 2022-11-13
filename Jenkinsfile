pipeline {
  agent {
    docker {
      image "mcr.microsoft.com/playwright:v1.27.1-focal"
    }
  }

  stages {
    stage('Install') {
      steps {
        sh "yarn"
        sh "yarn playwright install"
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
