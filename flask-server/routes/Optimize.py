from flask import Blueprint

from controllers.OptimizationController import OptimizationController

Optimize = Blueprint("Optimize", __name__)

Optimize.route("/newtonMethod", methods=["POST"])(OptimizationController.newtonMethod)
Optimize.route("/goldenSectionSearch", methods=["POST"])(OptimizationController.goldenSectionSearch)

