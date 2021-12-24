#!/bin/bash

PROJECT_ID=$1
CI_URL=$2
TOKEN=$3
SECRET_NAME=REGISTRY


agola project secret delete --project $PROJECT_ID -u $CI_URL --name $SECRET_NAME --token $TOKEN
agola project secret create --project $PROJECT_ID -u $CI_URL --name $SECRET_NAME --token $TOKEN -f ./secrets.yml

function recreate_var {
  agola project variable delete --project $PROJECT_ID -u $CI_URL --name $1 --token $TOKEN
  echo "- secret_name: $SECRET_NAME
  secret_var: $1" | agola project variable create --project $PROJECT_ID -u $CI_URL --name $1 --token $TOKEN -f "-"
}

recreate_var registry-url
recreate_var registry-image
recreate_var registry-token
