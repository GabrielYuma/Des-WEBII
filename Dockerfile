FROM node:14

WORKDIR /src

COPY package.json /src

RUN npm install

COPY . /src

EXPOSE 8080

CMD ["node", "./src/server.js"]