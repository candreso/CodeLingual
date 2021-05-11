# Base image
FROM node:14


# Create app directory
WORKDIR /usr/src/app


# Install all app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
# COPY **/package*.json ./
# Bundle app source
COPY . .
# RUN echo $(ls -1 /usr/src/app)

WORKDIR /usr/src/app/client
RUN npm install && npm run build
# RUN echo $PWD && echo $(ls)

WORKDIR /usr/src/app/server
RUN npm install
# RUN npm install
# If you are building your code for production
# RUN npm ci --only=production


# Install pm2 globally
RUN npm install pm2 -g


# Bundle app source
# COPY . .


EXPOSE 8080
CMD ["pm2-runtime", "server.js"]
