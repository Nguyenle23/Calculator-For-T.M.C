from flask import Flask
from flask import Flask, jsonify

app = Flask(__name__)  

def error_handling(code):
  if code == 400:
    return jsonify({"message": "Please fill in the following fields"}), 400
  elif code == 500:
    return jsonify({"message": "Please checking the input equaiton"}), 500
  elif code == 2308:
    return jsonify({"message": "Features are in developing"}), 500