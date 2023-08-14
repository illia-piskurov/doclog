FROM node:alpine

WORKDIR /app

COPY /app .

RUN npm install

CMD node src/index.js
