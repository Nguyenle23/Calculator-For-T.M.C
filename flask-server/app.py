from flask import Flask
from config import DEBUG, HOST, PORT
from routes.Router import Router
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

@app.route("/")
def index():
    return "Rest API with Python Flask"

Router.run(app)

if __name__ == "__main__":
    app.run(host=HOST, port=PORT, debug=DEBUG)
