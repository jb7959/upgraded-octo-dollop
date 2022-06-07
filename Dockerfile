FROM node:18.2.0-slim

# 앱 디렉터리 생성
WORKDIR /usr/src/app

COPY package*.json ./
COPY yarn.lock ./

RUN npm install
RUN yarn install

COPY . .

CMD [ "yarn", "start" ]