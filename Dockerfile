FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
COPY src ./
RUN npm install
EXPOSE 8080
CMD [ "node", "./server.js" ]