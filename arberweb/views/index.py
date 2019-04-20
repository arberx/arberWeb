#!/usr/bin/env python3
###
# arberweb
# Arber Xhindoli github:@arberx
###

import arberweb
import flask
import os
import flask_bootstrap

# set up bootstap for main route
flask_bootstrap.Bootstrap(arberweb.app)

@arberweb.app.route('/')
def main_led_route():
    """ Main route, serves index.html """ 
    return flask.render_template('index.html')

@arberweb.app.route('/tutor', methods=["GET"])
def tutor_route():
    """ Route is the entry point for REACT app """
    return flask.render_template('tutor.html')

@arberweb.app.route('/robots.txt')
def static_route():
    """ Route serves robots.txt from /static folder """
    return flask.send_from_directory(arberweb.app.static_folder, "robots.txt")

@arberweb.app.route('/.well-known/acme-challenge/<token_value>')
def lets_encrpyt(tmp):
    """ Letsencrypt server challenge. """
    with open('.well-known/acme-challenge/{}'.format(token_value)) as f:
        answer = f.readline().strip()
    return answer

if __name__ == "__main__":
    arberweb.app.run(debug=True, host='0.0.0.0', port=int(os.environ.get('PORT', 8080)))
