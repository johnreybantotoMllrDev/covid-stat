# base image
FROM node:12.2.0

# set working directory
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package*.json ./
RUN npm install

# add app
COPY . /usr/src/app

# start app
CMD ng serve --host 0.0.0.0
