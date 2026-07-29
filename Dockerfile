FROM python:3.12-alpine

WORKDIR /app

# Install nginx
RUN apk add --no-cache nginx

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application
COPY backend/ /app/backend/
COPY frontend/ /usr/share/nginx/html/
COPY nginx/default.conf /etc/nginx/http.d/default.conf

COPY start.sh /app/start.sh
RUN chmod +x /app/start.sh

EXPOSE 80

CMD ["/app/start.sh"]
