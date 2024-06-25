
## Kubernetes

### Pod

Place where containers are placed. Each container has its specific Ip and it is renewed on every build

### Service

Way to connect containers

## Ingress

Way to expose services

## Config Map

Public Envs

## Secrets

Encrypted Secret Envs

## Volumes

Machines HDD needed/installed.
Persist Data

## Deployments

Scale up or down.
Replicate Pods

## StatefulSet

DB deployments

## Cluster

Nodes Groups

### Get all instances

```
kubectl get all
```

### Build

```
kubectl apply -f postgres-config.yml
```

### Watch logs

````
postgres-deployment-66b6655f68-p85ck
```
