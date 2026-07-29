FROM python:3.12-slim

WORKDIR /app

# Install nginx
RUN apt-get update && \
    apt-get install -y nginx && \
    rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend
COPY backend/ /app/backend/

# Copy frontend
COPY frontend/ /usr/share/nginx/html/

# Copy nginx config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Startup script
COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh

EXPOSE 80

CMD ["/app/start.sh"]
