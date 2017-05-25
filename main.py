from flask import *
from flask_bootstrap import Bootstrap
from flask_letsencrypt import LetsEncrypt

responses = {
        'foo': 'bar',
        'baz': 'gak',
    }

def handle_letsencrypt_challenge(challenge):
    return responses.get(challenge, None)

app = Flask('app')
le = LetsEncrypt(app)
le.challenge_loader(handle_letsencrypt_challenge)

app = Flask(__name__)
Bootstrap(app)
'''
$ export FLASK_APP=main.py
$ python -m flask run
'''
@app.route('/')
def main_led_route():
    return render_template('index.html')

if __name__ == '__main__':
   app.run(host='0.0.0.0')
