FROM node:10-alpine
RUN mkdir -p /src/app
WORKDIR /src/app
COPY package.json /src/app/package.json
RUN npm install
RUN npm install -g @angular/cli
RUN npm i -g rxjs
COPY .  /src/app
EXPOSE 4200
#CMD $(npm bin)/ng serve --host 0.0.0.0
#RUN npm link @angular/cli
#CMD ng serve --host 0.0.0.0

#CMD [ "npm", "start" ]
CMD ng serve --host 0.0.0.0
