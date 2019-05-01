#!/usr/bin/env python3
###
# arberweb
# Arber Xhindoli github:@arberx
###

import arberweb
import flask
import os
import json
import flask_bootstrap
from flask_mail import Mail, Message

# get EMAIL and PASS from environment
EMAIL = os.environ.get("EMAIL")
PASS = os.environ.get("PASS")

arberweb.app.config['MAIL_SERVER'] = 'smtp.gmail.com'
arberweb.app.config['MAIL_PORT'] = 465
arberweb.app.config['MAIL_USERNAME'] = EMAIL
arberweb.app.config['MAIL_PASSWORD'] = PASS
arberweb.app.config['MAIL_USE_TLS'] = False
arberweb.app.config['MAIL_USE_SSL'] = True

# set up bootstap for main route
flask_bootstrap.Bootstrap(arberweb.app)

# set up Flask Mail
mail = Mail(arberweb.app)


@arberweb.app.route('/')
def main_led_route():
    """ Main route, serves index.html """
    return flask.render_template('index.html')


@arberweb.app.route('/tutor', methods=["GET"])
def tutor_route():
    """ Route is the entry point for REACT app """
    return flask.render_template('tutor.html')


@arberweb.app.route('/form_submission', methods=["POST"])
def form_submission():
    """ Handles form data. """
    if flask.request.is_json:
        form_content = flask.request.get_json()
        form_name = form_content["name"]
        msg = Message(form_name + " contacted you through arberweb/tutor.", sender=EMAIL, recipients=[
                      EMAIL])
        msg.body = json.dumps(form_content)
        mail.send(msg)
        return "Okay", 200
    else:
        print("Recieved none json POST.")
        return "Not okay", 404


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
    arberweb.app.run(debug=True, host='0.0.0.0',
                     port=int(os.environ.get('PORT', 8080)))
