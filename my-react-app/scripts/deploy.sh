#!/bin/bash
# Deploy the built React app to NGINX web root

NGINX_WEB_ROOT="/opt/homebrew/var/www"
BUILD_DIR="./dist"

# Ensure the build exists
if [ ! -d "$BUILD_DIR" ]; then
  echo "⚠️ Build folder not found. Please do "npm run build" first."
  exit 1
fi

# Copy files to NGINX docroot
sudo cp -r $BUILD_DIR/* $NGINX_WEB_ROOT/

echo "Visit http://localhost:8080 to view site."
