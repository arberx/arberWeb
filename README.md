# arberweb
Current Website! : https://www.arberx.com/

Super Simple Website made with Python-Flask. Utilizes flask-bootstrap (mobile optimized), particles.js running on an nginx server.  

SSL layer added with https://letsencrypt.org/!

# Tutor

### Setup env's
```shellsession
$ python3.6 -m venv env
$ source env/bin/activate
$ pip3.6 install nodeenv
$ nodeenv --python-virtualenv
$ source env/bin/activate
```

### Install dependencies
```shellsession
$ pip3.6 install -e .
$ npm install .
```

### Run watcher
``` ./arberweb/bin/arberwebrun.sh```
