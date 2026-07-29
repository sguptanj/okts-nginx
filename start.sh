#!/bin/sh

# Start Flask
python /app/backend/app.py &

# Start nginx
nginx -g "daemon off;"
