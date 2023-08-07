FROM nginx:1.17.1-alpine

COPY nginix.conf /etc/nginx/nginx.conf
COPY build /usr/share/nginx/html