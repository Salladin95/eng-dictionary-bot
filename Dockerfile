FROM denoland/deno:alpine

WORKDIR /usr/src/app

COPY . .

RUN deno cache deps.ts

EXPOSE ${PORT}

CMD ["deno", "task", "prod"]