# JET Master-Detail Client Demo

This repo contains a basic JET example of a master-detail web application.  It is built using NodeJS and Oracle JET 2.0.  A Dockerfile is also provided for building an Oracle Linux 6.7 image running NodeJS 6.9, and only this application on port 9100.

---

## Node App Installation

From the app directory, with NodeJS already installed, install the modules:
```shell
npm install
```

## Running the Server
Launch the app using default settings:
```shell
node server.js
```

## Building a Docker Image
Using the provided Dockerfile, you can build an image (described above), by running the following from within the app's root folder (where the Dockerfile is):
```shell
docker build -t yourapp:1.0 .
```


## Running a Docker Image
You can run the image you produced with the following:
```shell
docker run -d -p 9100:9100 --name yourapp yourapp:1.0
```

You can verify your container is running by listing the active containers in Docker:
```shell
docker ps
```
