FROM node:6
RUN mkdir -p /src/app
WORKDIR /src/app
COPY package.json /src/app/package.json
RUN npm cache clean
RUN npm install
COPY .  /src/app
EXPOSE 3000
CMD ["node", "server.js"]
