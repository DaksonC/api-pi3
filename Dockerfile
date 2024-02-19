FROM node:18

# Install pnpm
RUN npm install -g pnpm

# Create app directory
WORKDIR /app

COPY . /app

# Install app dependencies
RUN pnpm i

# Build app
RUN pnpm build

# Expose port
EXPOSE 80

# Start app
CMD ["pnpm", "start:dev"]
