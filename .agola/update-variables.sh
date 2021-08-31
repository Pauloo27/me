#!/bin/bash

PROJECT_ID=$1
CI_URL=$2
TOKEN=$3

agola project secret delete --project $PROJECT_ID -u $CI_URL --name DEPLOY --token $TOKEN

agola project secret create --project $PROJECT_ID -u $CI_URL --name DEPLOY --token $TOKEN -f ./deploy-secrets.yml

agola project variable delete --project $PROJECT_ID -u $CI_URL --name deployuser --token $TOKEN
agola project variable delete --project $PROJECT_ID -u $CI_URL --name deployhost --token $TOKEN
agola project variable delete --project $PROJECT_ID -u $CI_URL --name deploypath --token $TOKEN

echo '- secret_name: DEPLOY
  secret_var: USER' | agola project variable create --project $PROJECT_ID -u $CI_URL --name deployuser --token $TOKEN -f "-"
echo '- secret_name: DEPLOY
  secret_var: HOST' | agola project variable create --project $PROJECT_ID -u $CI_URL --name deployhost --token $TOKEN -f "-"
echo '- secret_name: DEPLOY
  secret_var: PATH' | agola project variable create --project $PROJECT_ID -u $CI_URL --name deploypath --token $TOKEN -f "-"
