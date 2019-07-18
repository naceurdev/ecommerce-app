# User Microservice

This service provides APIs to manage users and is built with koa framework.

## Env variable

```
APPLICATION_NAME=user
APPLICATION_PORT=3010
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/user <- The Mongo database URL
```

## How to use -- Developer edition

```
git clone https://bitbucket.org/oyez/users && \
cd user && \
yarn && \
cp .env.example .env

# Modify .env file for you !!

yarn dev
```

