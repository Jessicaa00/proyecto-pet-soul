# Usar imagen oficial de nginx ligera
FROM nginx:alpine

# Eliminar contenido default de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copiar el frontend al contenedor
COPY ./ /usr/share/nginx/html

# Exponer el puerto 3000 para Docker
EXPOSE 3000

# Cambiar puerto en nginx a 3000 (por defecto es 80)
RUN sed -i 's/listen       80;/listen       3000;/' /etc/nginx/conf.d/default.conf

# Comando por defecto para mantener nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
