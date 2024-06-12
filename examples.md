### Download image
```
docker pull mongo
```

### Download specific image
```
docker pull mongo:5.0.0
```

### Run Container
```
docker container run -d docker/getting-started
```

### Run Container Flags
```
docker container run \
--name world-db \ -----------------------------> container name
-e MARIADB_USER=example-user \
-e MARIADB_PASSWORD=user-password \
-e MARIADB_ROOT_PASSWORD=root-secret-password \
-e MARIADB_DATABASE=world-db \
-dp 3306:3306 \ ------------------------------> port assigned and detached mode
--volume world-db:/var/lib/mysql \ -----------> volume assigned
mariadb:jammy -> image
```

### Remove Container
```
docker container rm docker/getting-started
```

### Create Volume
```
docker volume create world-db
```

### Create Network
```
docker network create world-app
```

### Link Network to container
```
docker network connect world-app container-name
```

### Run project inside container
```
docker container run \
--name nest-app \
-w /app \
-dp 80:3000 \
-v "$(pwd)":/app \
node:18 \
sh -c "yarn install && yarn start:dev"
```

### Build Image
```
docker build --tag cron-ticket .
```

### Rename Image with Tag
```
docker image tag cron-ticket cron-ticket:buffalo
```

### Run Container Terminal
```
docker exec -it nest-app /bin/sh
```

### Build Image
```
docker build -t eamzea/cron-ticket:tiger .
```

### Add tag to Image
```
docker image tag eamzea/cron-ticket:tiger eamzea/cron-ticket
```

### Push Image
```
docker push eamzea/cron-ticket
```

### Build Image with specific archs and push
```
docker buildx build --platform linux/amd64,linux/arm64,linux/arm/v7,linux/arm64/v8 \
-t eamzea/cron-ticket --push .
```
