# Step 1: Use official Node image
FROM node:18-alpine

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application
COPY . .

# Step 6: Build the application
RUN npm run build

# Step 7: Use a lightweight web server for serving static files
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html

# Optional: Copy custom Nginx config if needed
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
