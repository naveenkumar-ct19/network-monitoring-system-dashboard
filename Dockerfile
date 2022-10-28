FROM node:14.16-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm","start"]