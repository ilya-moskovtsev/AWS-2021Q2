# AWS-2021Q2
CloudX Associate: AWS Developer 2021Q2 RU

## Project description
The project shall consist of a backend application with a REST API. We will emulate a very basic product – an online shop. The sole purpose is to integrate different AWS components to model a real-life situation, without creating a production-ready product. The purpose of this exercise is to study the technologies hands-on.

In this project we will not study each component in detail; the goal is to integrate the components with simple use-cases from where more complex solutions can be delivered. There will be 3 services to work with products, shopping carts, and orders that utilize AWS components. CI/CD and infrastructure should be automated as much as possible.

### Stages of the project
#### 1. Set up a sample rest service (product service)
Acceptance Criteria:
- A simple rest service is implemented and stored in git repository
- Service handles put product/2/add
- Service handles get product/2
- A postman collection for testing is created (Get, Put method)
- A screenshot of the endpoints responses is added to the module.

Optional:
- Data is stored in any in-memory DB

#### 2. Package service to docker
Acceptance Criteria:
- The service is packaged as a docker container
- The service is executed in docker
- Postman requests are executed as in previous step
- A screenshot of docker files is added to the module.

Optional:
- Discover light-weight packaging

#### 3. Set up a billing alert
Acceptance Criteria:
- Billing alerts to carefully track deviations from free tier is created (recommended > 1$)
- A screenshot of alert is added to the module.
