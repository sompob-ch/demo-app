# NodeJS

- nodeJs
- npm

docker build -t NAME:TAG .
docker images
docker run -d -p 8080:80 nginx:alpine 
docker run -d -p 3000:3000 hero-api:01

docker run -d -p 3000:3000 --name hero-api hero-api:01
docker run -d -p 27017:27017 --name hero-database mongo:6

docker ps
docker stop NAME or CONTAINER_ID
docker start NAME or CONTAINER_ID

docker rm CONTAINER_NAME or CONTAINER_ID
docker rmi IMAGE_ID

docker compose up --build