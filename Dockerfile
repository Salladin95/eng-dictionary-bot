FROM denoland/deno:latest

WORKDIR /usr/src/app

COPY . .

RUN deno cache deps.ts
RUN deno cache ./src/bot.ts

EXPOSE ${PORT}

CMD ["deno", "task", "prod"]