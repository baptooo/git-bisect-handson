from node:10-slim AS base

RUN mkdir /app
WORKDIR /app

COPY package*.json /tmp/
RUN cd /tmp && CI=true npm ci && mv /tmp/node_modules /app && cd /app
ENV PATH /app/node_modules/.bin:$PATH


FROM base AS test
COPY . /app
