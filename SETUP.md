## Install Required Tools
* Docker: https://www.docker.com/get-started

## Run
Running locally will require a couple of Terminal windows and a REST client such as Postman.

### Start Everything

#### In Terminal A
1. Start up the mock services: `docker-compose up`

You can run everything in a single window by using `docker-compose up -d` instead, which will push Docker into the
background. You will no longer be able to see its logs in real-time and it's easy to forget to stop it when you're
done, but it does work and can conserve some screen space.

#### In Terminal B
1. Set up the DynamoDB tables and basic items: `./localSetup.sh`
2. Make sure all the necessary packages are downloaded: `npm install`

#### In Postman
Make your request at: http://localhost:3000/api/v1/products/PRODUCT-ID

Test PUT body: A sample can be found in `src/test/resources/updateProductById.json`

### Stop Everything
1. Stop Docker: `Ctrl+C` in Terminal A, then `docker-compose down`
