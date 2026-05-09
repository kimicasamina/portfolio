# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# copy package files first (for caching)
COPY package*.json ./

RUN npm install

# copy all source code
COPY . .

# build React app
RUN npm run build


# Production stage (nginx)
FROM nginx:alpine

# remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# copy built files
COPY --from=builder /app/dist /usr/share/nginx/html

# expose port
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

