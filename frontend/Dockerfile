FROM node:alpine as builder

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

####################

FROM nginx

EXPOSE 3000

# 프론트단을 위한 nginx 설정 파일을 컨테이너 속의 파일로 COPY
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# 빌드된 파일을 컨테이너 속의 파일 위치로 COPY
COPY /app/build /usr/share/nginx/html 