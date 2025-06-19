FROM node:22

COPY . /todo

WORKDIR /todo

RUN npm install

RUN npm run build

CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0"]