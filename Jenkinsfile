pipeline {
  agent any
  stages {
    stage('SCM checkout') {
      steps {
        echo 'hi in scm stage'
      }
    }

    stage('Build') {
      parallel {
        stage('Build') {
          steps {
            echo 'hi in build stage'
          }
        }

        stage('Build2') {
          steps {
            echo 'hi in build2'
          }
        }

      }
    }

    stage('Test') {
      steps {
        echo 'hi in test'
      }
    }

    stage('Deploy') {
      steps {
        sh 'docker run --name fromblueocean -d  abdoemam/hi2:v2'
      }
    }

  }
}