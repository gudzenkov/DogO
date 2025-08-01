#!/bin/bash

# Basic deployment script for DogO
set -e

echo "Starting deployment process..."

# Check if Docker is available
if ! command -v docker &> /dev/null; then
    echo "Error: Docker is not installed or not available"
    exit 1
fi

if ! command -v docker-compose &> /dev/null && ! command -v docker compose &> /dev/null; then
    echo "Error: Docker Compose is not installed or not available"
    exit 1
fi

# Build production images
echo "Building production images..."
docker-compose -f docker-compose.yml -f docker-compose.prod.yml build

# Run database migrations
echo "Running database migrations..."
docker-compose -f docker-compose.yml -f docker-compose.prod.yml run --rm backend npx prisma migrate deploy

# Start services
echo "Starting services..."
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

echo "Deployment completed successfully!"
echo "Frontend should be available at http://localhost:3000"
echo "Backend should be available at http://localhost:3001"