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

# Compile js in the background
 npm run watch &

# Run development server
flask run --port 8000
