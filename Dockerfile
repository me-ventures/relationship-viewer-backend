FROM node:6-slim
COPY . /src
EXPOSE 3000
WORKDIR /src
ENV NODE_ENV production
CMD ["node", "/src/index.js"]