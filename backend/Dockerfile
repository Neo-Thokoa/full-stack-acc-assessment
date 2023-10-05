FROM node:20-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

ARG NODE_ENV
RUN if [ "$NODE_ENV" = "development" ]; \
    then yarn install; \
    else yarn install ---production; \
    fi 

COPY . ./
# COPY .env.production .env

CMD ["node", "build/server.js"]