FROM node:lts

WORKDIR /app

COPY . .

RUN npm install -g pnpm@latest
RUN npm i -g typescript
RUN pnpm install
RUN tsc

EXPOSE 8012

CMD [ "pnpm","start" ]