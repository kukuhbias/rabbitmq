FROM node:lts

WORKDIR /app

COPY . .

RUN npm install -g pnpm@latest
RUN pnpm install

EXPOSE 8010

CMD [ "pnpm","dev" ]