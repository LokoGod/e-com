# Dockerfile for Next client

# Build react client
FROM node:18-alpine

# Working directory 
WORKDIR /src/app/

COPY package*.json ./

# Intstall dependecies

RUN npm install --production

# Copy local files to app folder
COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]