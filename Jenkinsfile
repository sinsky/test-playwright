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
    stage('Deploy') {
      steps {
        echo 'Deploying....'
      }
    }
  }

  post {
    always {
      juint "playwright-report/index.html"
    }
  }
}