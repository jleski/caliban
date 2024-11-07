# Caliban

A lightweight webhook server built with Hono and Cloudflare Workers.

## Features

- HTTP endpoint for receiving webhooks (`/webhook`)
- JSON payload handling
- Serverless deployment on Cloudflare's edge network

## API Endpoints

- `GET /` - Health check endpoint
- `POST /webhook` - Webhook receiver endpoint that accepts JSON payloads

## Development

Install dependencies:
```bash
npm install
```

Run locally:

```bash
npm run dev
```

## Deployment

Deploy to Cloudflare Workers:

```bash
npm run deploy
```

## Tech Stack

* [Hono](https://hono.dev) - Lightweight web framework
* [Cloudflare Workers](https://workers.cloudflare.com) - Serverless platform
* TypeScript - Type safety and developer experience