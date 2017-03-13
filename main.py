from flask import *
from flask_bootstrap import Bootstrap
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
    app.run(debug=True)