###
# arberweb
# Arber Xhindoli github:@arberx
###

# 5MB linux image
# https://hub.docker.com/_/alpine
FROM alpine:3.7

# copy cwd
ENV APP_HOME /arberweb
WORKDIR $APP_HOME
COPY . .

# install system dependencies
RUN apk add --no-cache \
    autoconf \
    automake \
    bash \
    g++ \
    libc6-compat \
    libjpeg-turbo-dev \
    libpng-dev \
    make \
    nasm \
    python3 \
    nodejs

# clean
RUN find . | grep -E "(__pycache__|env|.egg-info|node_modules|\.pyc|\.pyo$)" | xargs rm -rf

# install dependencies and build
RUN make install && make build

# export app name
RUN export FLASK_APP=arberweb

# docker run -p 8000:8000 arberweb
# exec gunicorn server
CMD exec gunicorn --bind :$PORT --workers 1 --threads 8 arberweb:app
