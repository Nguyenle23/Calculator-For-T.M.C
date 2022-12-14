
from routes.Optimize import Optimize
from routes.ODE import ODE

class Router:
  def run(app):
    app.register_blueprint(Optimize, url_prefix='/optimize')
    app.register_blueprint(ODE, url_prefix='/ODE')