# Proyecto Grupal 2 – Despliegue de Servicios con Docker

## Descripción del Proyecto

Este proyecto tiene como objetivo diseñar, contenerizar y desplegar múltiples servicios independientes utilizando Docker, aplicando conceptos de arquitectura por servicios y despliegue automatizado.

El sistema está compuesto por varios servicios que se ejecutan en contenedores independientes y se comunican entre sí mediante una red interna de Docker. Todos los servicios se levantan de forma centralizada utilizando Docker Compose.

El proyecto puede ser descargado y ejecutado por el docente usando un único comando, garantizando así la portabilidad y reproducibilidad del entorno.

# Arquitectura del Sistema

El sistema está compuesto por los siguientes servicios:

# Backend – API REST

Tecnología: Node.js + Express

Endpoints:

/health: verifica el estado del servicio

/data: devuelve información en formato JSON

Puerto interno: 3000

# Frontend Web

Tecnología: HTML + CSS + JavaScript

Consume la API REST del backend usando fetch

Servido mediante Nginx

# Reverse Proxy (Nginx)

Tecnología: Nginx

Función:

Redirige / al frontend

Redirige /api al backend

Único servicio con puerto expuesto al exterior

# Servicio de Autenticación

Tecnología: Node.js + Express

Endpoint:

/login: simula una autenticación exitosa

Servicio independiente del backend

# Base de Datos (PostgreSQL)

Motor: PostgreSQL

Imagen oficial desde Docker Hub

Persistencia mediante volúmenes Docker

# Uso de Docker

Cada servicio cuenta con su propio Dockerfile, garantizando independencia y aislamiento.

El archivo docker-compose.yml se encarga de:

Construir las imágenes

Levantar los contenedores

Crear la red interna

Definir volúmenes y dependencias

# Ejecución del Proyecto

## Requisitos:

Docker

Docker Compose

## Pasos para ejecutar

* git clone https://github.com/dmcastillo7/proyecto-docker.git
* cd proyecto-docker
* docker compose up --build

# Acceso a los Servicios

## Frontend:

http://localhost

## Backend – Health:

http://localhost/api/health

## Backend – Data:

http://localhost/api/data

## Servicio de Autenticación:

http://localhost/login

## Pruebas del Backend

Se puede verificar el correcto funcionamiento del backend accediendo a los endpoints /health y /data, los cuales devuelven respuestas en formato JSON confirmando que el servicio está activo.

# Integrantes del Grupo

* Darío Castillo
* Dayra Mosquera
* Evelyn Condoy
* Alejandro Simba

# Conclusiones

Este proyecto permitió aplicar de forma práctica los conceptos de contenerización, despliegue de servicios y uso de Docker Compose.
La arquitectura implementada es modular, escalable y fácilmente replicable en cualquier entorno que cuente con Docker instalado.

