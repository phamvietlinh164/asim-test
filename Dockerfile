FROM node:12

RUN mkdir /app
WORKDIR /app
COPY . .

RUN npm install

RUN npm run build:testing

EXPOSE 6700
CMD [ "npm", "run", "start:testing" ]
