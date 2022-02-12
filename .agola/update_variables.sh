#!/bin/bash

PROJECT_ID=$1
CI_URL=$2
TOKEN=$3
SECRET_NAME=REGISTRY

agola project secret delete --project $PROJECT_ID -u $CI_URL --name $SECRET_NAME-dev --token $TOKEN
agola project secret delete --project $PROJECT_ID -u $CI_URL --name $SECRET_NAME-prod --token $TOKEN
agola project secret create --project $PROJECT_ID -u $CI_URL --name $SECRET_NAME-dev --token $TOKEN -f ./dev-secrets.yml
agola project secret create --project $PROJECT_ID -u $CI_URL --name $SECRET_NAME-prod --token $TOKEN -f ./prod-secrets.yml

function recreate_var {
  agola project variable delete --project $PROJECT_ID -u $CI_URL --name $1 --token $TOKEN
  echo "
  - secret_name: $SECRET_NAME-dev
    secret_var: $1
    when:
      branch: dev
  - secret_name: $SECRET_NAME-prod
    secret_var: $1
    when:
      branch: master
" | agola project variable create --project $PROJECT_ID -u $CI_URL --name $1 --token $TOKEN -f "-"
}

recreate_var registry-url
recreate_var registry-image
recreate_var registry-token
