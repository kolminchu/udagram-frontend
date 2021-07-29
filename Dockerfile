FROM beevelop/ionic:latest AS ionic

#create the working directory
WORKDIR /usr/src/app

#install app dependencies
COPY package*json  ./
RUN npm ci

COPY . .

RUN ionic build

FROM nginx:latest

COPY --from=ionic /usr/src/app/www /usr/share/nginx/html

# EXPOSE 8100

# CMD ["ionic", "serve"]