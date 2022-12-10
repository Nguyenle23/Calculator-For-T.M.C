from sympy import *
from flask import jsonify, request

print(eval("dir()", {}))
from controllers.ErrorController import error_handling

class OptimizationController:
    def newtonMethod():
      if request.method == "POST":
        data = request.json
        function = data["equationInput"]
        x0 = int(data["x0"])
        es = float(data["es"])
      try:
          def functionInput(x):
            functionReplace = function.replace("^", "**")
            return eval(functionReplace)

          def firstDeri(x_input):
            x = Symbol("x")
            f = functionInput(x)
            return eval(str(diff(f, x, 1).subs(x, x_input)))

          def nDerivative(n):
            x = Symbol("x")
            return str((diff(functionInput(x), x, n)))

          def secondDeri(x_input):
            x = Symbol("x")
            f = functionInput(x)
            return eval(str(diff(f, x, 2).subs(x, x_input)))

          def newtonMethod(x_input, first, second):
            return x_input - (first / second)

          obj = []
          originFunc = functionInput(x0)
          firstDeriFunc = firstDeri(x0)
          secondDeriFunc = secondDeri(x0)
          x_next = newtonMethod(x0, firstDeriFunc, secondDeriFunc)
          ea = abs((x_next - x0) / x_next)

          i = 0

          def newtonMethodFunction(i, x0, originFunc, firstDeriFunc, secondDeriFunc, x_next, ea, es):
            while (i < 100):
              if i == 0:
                element = {
                  "iterator": i,
                  "x0": '{:10.4f}'.format(x0),
                  "fx": '{:10.4f}'.format(originFunc),
                  "f_1st": '{:10.4f}'.format(firstDeriFunc),
                  "f_2nd": '{:10.4f}'.format(secondDeriFunc),
                  "ea": 100,
                }
                obj.append(element)
              else:
                x0 = x_next
                originFunc = functionInput(x0)
                firstDeriFunc = firstDeri(x0)
                secondDeriFunc = secondDeri(x0)
                x_next = newtonMethod(x0, firstDeriFunc, secondDeriFunc)
                ea = abs((x_next - x0) / x_next)
                element = {
                  "iterator": i,
                  "x0": '{:10.4f}'.format(x0),
                  "fx": '{:10.4f}'.format(originFunc),
                  "f_1st": '{:10.4f}'.format(firstDeriFunc),
                  "f_2nd": '{:10.4f}'.format(secondDeriFunc),
                  "ea": '{:10.4f}'.format(ea),
                }
                obj.append(element)
              if (ea < es): break
              i += 1
              
            return jsonify({
              "formula": function,
              "firtDeri": nDerivative(1),
              "secondDeri": nDerivative(2),
              "data": obj,
            })

          return newtonMethodFunction(i, x0, originFunc, firstDeriFunc, secondDeriFunc, x_next, ea, es)
      except:
          return error_handling(500)

