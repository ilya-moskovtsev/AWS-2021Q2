# Base Node image
FROM node:lts AS base
WORKDIR /app

# Dependencies
FROM base AS dependencies
WORKDIR /app
# Copy package*.json files, install dependencies
COPY ./package*.json ./
# Install packages and clear npm cache
RUN npm install --only=production && npm cache clean --force
# then copy everything else

# Release with Alpine
FROM node:lts-alpine AS release
WORKDIR /app
COPY --from=dependencies /app/package.json ./
# Install app dependencies
RUN npm install --only=production
COPY ./src/main ./dist

USER node
EXPOSE 3000
ENTRYPOINT ["node", "dist/app.js"]
