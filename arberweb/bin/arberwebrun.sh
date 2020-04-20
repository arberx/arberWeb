#!/bin/bash
###
# arberweb
# Arber Xhindoli github:@arberx
###

# Stop on errors, print commands
set -e
set -x

# Set up environment for Flask debug server
export FLASK_DEBUG=True
export FLASK_APP=arberweb
export ARBERWEB_SETTINGS=config.py

# Run development server
flask run --port 5000
