FROM node

USER node

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node ["package*.json", "*.lock", "./"]

RUN yarn

COPY --chown=node:node ./lib .
COPY --chown=node:node ./config/default.json .
COPY --chown=node:node ./config/production.json .
COPY --chown=node:node ./config/test.json .

EXPOSE 3030

CMD node ./src/app.js
