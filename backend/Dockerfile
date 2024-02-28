FROM node:alpine3.18

RUN apk add --update --no-cache curl

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]
