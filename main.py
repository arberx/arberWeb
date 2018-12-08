###
# arberweb
# Arber Xhindoli github:@arberx
##

from flask import *
from flask_bootstrap import Bootstrap

app = Flask('app')
app = Flask(__name__)
Bootstrap(app)

# $ export FLASK_APP=main.py
# $ python -m flask run

@app.route('/')
def main_led_route():
    """ Main route, serves index.html """ 
    return render_template('index.html')

@app.route('/.well-known/acme-challenge/<token_value>')
def letsencrpyt(tmp):
    """ Letsencrypt server challenge. """
    with open('.well-known/acme-challenge/{}'.format(token_value)) as f:
        answer = f.readline().strip()
    return answer
