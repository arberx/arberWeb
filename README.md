# arber-web
Current Website! : https://www.arberx.com/

## The Stack

`Flask` application serving `/`.

`/` - Utilizes pure CSS, and HTML to create the content.

## Deployment

Currently relies on `google-cloud run` for automated deployment. A cool service that always you to build and deploy stateless docker contianer web applications, and handles network and management for you.

Before finding this service, I was handrolling nginx configs and running the server off of my own `DigitalOcean` machine.

## Setup
**Assumes using python3.6**

### Setup env's
```shellsession
$ python3.6 -m venv env
$ source env/bin/activate
$ pip3.6 install nodeenv
$ nodeenv --python-virtualenv
$ source env/bin/activate
```

### Install Dependencies
```make install```

### Run
``` make run```

App will be running on localhost:5000
