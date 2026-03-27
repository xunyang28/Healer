FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY src ./src

USER node

EXPOSE 3000

ENV NODE_ENV=development
ENV PORT=3000

CMD ["npm", "start"]