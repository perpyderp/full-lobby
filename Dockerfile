FROM node:20-alpine

WORKDIR /app

COPY . /app/

RUN npm i

EXPOSE 3000

CMD [ "npm", "run", "dev" ]