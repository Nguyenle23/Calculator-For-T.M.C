from flask import request, jsonify
import numpy as np

from controllers.ErrorController import error_handling

class ODEController:
    def eulerMethod():
      if request.method == "POST":
        data = request.json
        function = data["equationInput"]
        xi = float(data["xi"])
        y = float(data["y"])
        xf = float(data["xf"])
        n = float(data["h"])
        condition = int(data["conditionalVariable"])
        
        try:
          if (function == ""):
            return error_handling(400)
          
          if (condition == 1):
            return error_handling(2308)
          elif (condition == 2):
            def functionInput(x, y):
              functionReplace = function.replace("^", "**")
              return eval(functionReplace)

            def showFunctionInput():
              functionReplace = function.replace("^", "**")
              return str(functionReplace)

            def calFunctionInput(x_input, y_input):
              return functionInput(x_input, y_input)
            obj = []

            def euler(xi, y, xf, n):
              h = int(abs(xi - xf) / n + 1)
              array = np.linspace(xi, xf, h)
              slope = calFunctionInput(xi, y)
              for i in range(len(array)):
                if i == 0:
                  obj.append({
                    "iterator": 0,
                    "x": array[i],
                    "y_euler": '{:.4f}'.format(y),
                    "slope": '{:.4f}'.format(slope),
                    "h": h, 
                  })
                else:
                  y_next = y + (slope * n)
                  slope = calFunctionInput(array[i], y_next)
                  y = y_next
                  obj.append({
                    "iterator": i,
                    "x": array[i],
                    "y_euler": '{:.4f}'.format(y),
                    "slope": '{:.4f}'.format(slope)
                  })
              return jsonify({
                "formula": showFunctionInput(),
                "data": obj,
              })
            return euler(xi, y, xf, n)
        except:
          return error_handling(500)
