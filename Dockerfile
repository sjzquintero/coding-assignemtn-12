# Use an official Node.js image to build the application
FROM node:18 as build

# Set the working directory
WORKDIR /jimenez_santiago_ui_garden

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use an official Node.js image to serve the build files
FROM node:18

# Set the working directory
WORKDIR /jimenez_santiago_ui_garden

# Copy the build files from the previous stage
COPY --from=build /jimenez_santiago_ui_garden/dist .

# Install a simple HTTP server to serve static files
RUN npm install -g serve

# Expose port 8083
EXPOSE 8083

# Start the server
CMD ["serve", "-s", ".", "-l", "8083"]

# To create the container 
#docker build -t Jimenez_santiago_coding_assignment12 .

#docker run -d -p 8083:8083 --name jimenez_santiago_coding_assignment12 jimenez_santiago_coding_assignment12
