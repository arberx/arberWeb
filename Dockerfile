###
# arberweb
# Arber Xhindoli github:@arberx
###

# 5MB linux image
# https://hub.docker.com/_/alpine
FROM alpine:3.7

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
    python3

# copy cwd
ENV APP_HOME /arberweb
WORKDIR $APP_HOME
COPY . .

# clean
RUN find . | grep -E "(__pycache__|env|.egg-info|\.pyc|\.pyo$)" | xargs rm -rf

# install dependencies and build
RUN make install

# docker run -p 8000:8000 -e PORT=8000 arberweb
# exec gunicorn server
CMD exec gunicorn --bind :$PORT --workers 4 --threads 8 arberweb:app
