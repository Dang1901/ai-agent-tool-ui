# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build the app
RUN echo "Starting build process..." && \
    npm run build && \
    echo "Build completed successfully" && \
    ls -la dist/

# Production stage
FROM node:18-alpine

WORKDIR /app

# Install serve globally
RUN npm install -g serve

# Copy built app from builder stage
COPY --from=builder /app/dist ./dist

# Copy health check script
COPY healthcheck.js ./

# Set default port
ENV PORT=3000

# Expose port
EXPOSE $PORT

# Health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD node healthcheck.js

# Start the app
CMD echo "Starting server on port $PORT" && \
    echo "Contents of dist directory:" && \
    ls -la dist/ && \
    serve -s dist -l $PORT
