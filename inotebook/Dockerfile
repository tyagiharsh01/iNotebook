# Use an official Node.js runtime as a base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the backend source code to the container
COPY . .

# Expose the port your backend is running on (usually 5000)
EXPOSE 5000

# Command to start your backend using nodemon
CMD ["npm", "run", "start"]
