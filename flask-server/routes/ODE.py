from flask import Blueprint

from controllers.ODEController import ODEController

ODE = Blueprint("ODE", __name__)

ODE.route("/eulerMethod", methods=["POST"])(ODEController.eulerMethod)
