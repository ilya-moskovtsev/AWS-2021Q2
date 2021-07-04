#!/usr/bin/env bash

export AWS_ACCESS_KEY_ID=fakeAccessKey
export AWS_SECRET_ACCESS_KEY=fakeSecretAccessKey

aws dynamodb create-table \
    --table-name products \
    --attribute-definitions \
        AttributeName=id,AttributeType=S \
    --key-schema  AttributeName=id,KeyType=HASH \
    --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1 \
    --endpoint-url  http://127.0.0.1:8000

aws dynamodb put-item \
    --table-name products \
    --item '{
  "id": {"S": "PRODUCT-ID"},
  "info": {"M": {
    "name": {"S": "Product Name"},
    "description": {"S": "Product Description"}
  }}
}' \
    --endpoint-url  http://127.0.0.1:8000

# Useful Scripts
# aws dynamodb list-tables --endpoint-url  http://127.0.0.1:8000
# aws dynamodb scan --table-name products --endpoint-url  http://127.0.0.1:8000
# aws dynamodb delete-item --table-name products --key "{\"id\":{\"S\":\"PRODUCT-ID\"}}" --endpoint-url  http://127.0.0.1:8000
