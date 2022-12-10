
from routes.Optimize import Optimize

class Router:
  def run(app):
    app.register_blueprint(Optimize, url_prefix='/optimize')