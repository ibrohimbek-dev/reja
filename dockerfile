FROM node:20.15.0

COPY . /mini-crud-project
WORKDIR /mini-crud-project
CMD npm install && node server.js


# DOCKERFILE => DOCKER IMAGE => direct docker: CONTAINER
# DOCKERFILE => DOCKER IMAGE => direct-compose: CONTAINER