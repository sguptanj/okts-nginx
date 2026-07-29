#!/bin/sh

# Start Flask
gunicorn \
  --workers 2 \
  --bind 127.0.0.1:5000 \
  backend.app:app &

# Start nginx
nginx -g "daemon off;"
