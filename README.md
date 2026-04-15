**API Deployment (DevOps)**

**Overview**

    This project is a simple backend API built and deployed as part of a DevOps learning exercise.
    
    It demonstrates building a minimal backend service and deploying it on a Linux VPS using Nginx as a reverse proxy, secured with HTTPS using Let's Encrypt SSL. The application runs on a private port and is exposed publicly through Nginx.

It demonstrates:

    Building a minimal backend service
    Running it on a Linux VPS
    Configuring Nginx as a reverse proxy
    Securing the service with HTTPS (Let’s Encrypt SSL)
    Keeping the service alive using a process manager

**Tech Stack**

    Node.js (NestJS)
    Nginx (Reverse Proxy)
    PM2 (Process Manager)
    Ubuntu Linux Server
    Let's Encrypt (SSL Certificate)
    UFW Firewall

**Live API**

Base URL:

    https://omoblaq.duckdns.org

**Request**

**Endpoint**

    GET /

**Response**

**Success (200 OK)**

    {
      "message": "API is running"
    }

    GET /health

**Response**

**Success (200 OK)**

    {
      "message": "healthy"
    }

    GET /me

**Response**

**Success (200 OK)**

    {
        "name": "Taiwo Omobolanle",
        "email": "taiwovictor510@gmail.com",
        "github": "https://github.com/BlaqKulture"
    }

**Performance**

  . Optimized to respond under 500ms (excluding external API latency)

**Running Locally**

**1. Clone the repo**

    git clone https://github.com/BlaqKulture/hng-stage1-task
    cd hng-stage1-task

**2. Install dependencies**

    npm install

**3. Start the server**

    npm run start

Server runs on:

    http://localhost:3000

**Deployment Architecture**

    Client Request
         ↓
    HTTPS (SSL via Let's Encrypt)
         ↓
    Nginx Reverse Proxy
         ↓
    Node.js Application (Port 3000)

**Author**

Name: Taiwo Omobolanle

Email: taiwovictor510@gmail.com
