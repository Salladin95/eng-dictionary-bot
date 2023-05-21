FROM denoland/deno:1.33.3

WORKDIR /usr/src/app

COPY deps.ts .

RUN deno cache deps.ts

ADD . .

RUN deno cache ./src/bot.ts

EXPOSE ${PORT}

CMD ["deno", "task", "prod"]