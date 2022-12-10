from flask import Flask
from flask import Flask, jsonify, request

app = Flask(__name__)  

def not_found(param):
  message = {
      'status': 404,
      'message': 'Not found user with ID: ' + param,
  }
  resp = jsonify(message)
  resp.status_code = 404

  return resp