#!/usr/bin/env python3
###
# arberweb
# Arber Xhindoli github:@arberx
###

import flask
import flask_talisman
import arberweb.config

# app is a single object used by all the code modules in this package
app = flask.Flask(__name__)  # pylint: disable=invalid-name

# enforce https, currently allow fetching of all external resources
# TODO: stricter csp: https://github.com/GoogleCloudPlatform/flask-talisman
flask_talisman.Talisman(app, content_security_policy=None)

# Read settings from config module (arberweb/config.py)
app.config.from_object('arberweb.config')

# Overlay settings read from file specified by environment variable. This is
# useful for using different on development and production machines.
# Reference: http://flask.pocoo.org/docs/0.12/config/
app.config.from_envvar('ARBERWEB_SETTINGS', silent=True)

app.config["TEMPLATES_AUTO_RELOAD"] = True

# (Reference http://flask.pocoo.org/docs/0.12/patterns/packages/)
import arberweb.views  # noqa: E402  pylint: disable=wrong-import-position
