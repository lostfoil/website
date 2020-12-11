FROM node:12-alpine

WORKDIR /

ENV PORT 3000
EXPOSE $PORT

RUN yarn global add serve

RUN mkdir /app
COPY ./build /app

CMD [ "serve", "-s", "app", "-l", "3000" ]
