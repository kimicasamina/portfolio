# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Install 'serve' globally to run the static server
RUN npm install -g serve

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


# Start 'serve' pointing to the build output folder (usually 'dist' for Vite)
# -s flag handles Single Page Application (SPA) routing
CMD ["serve", "-s", "dist", "-l", "3000"]