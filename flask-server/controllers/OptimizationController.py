from sympy import *
from flask import jsonify, request

print(eval("dir()", {}))
from controllers.ErrorController import not_found

class OptimizationController:
    def newtonMethod():
      if request.method == "POST":
        data = request.json
        function = data["function"]
        x0 = data["x0"]
        es = data["es"]

        def functionInput(x):
          return eval(function)

        def firstDeri(x_input):
          x = Symbol("x")
          f = functionInput(x)
          return eval(str(diff(f, x, 1).subs(x, x_input)))

        def secondDeri(x_input):
          x = Symbol("x")
          f = functionInput(x)
          return eval(str(diff(f, x, 2).subs(x, x_input)))

        def newtonMethod(x_input, first, second):
          return x_input - (first / second)

        obj = []

        i = 0
        while (i < 100):
          if i == 0:
            originFunc = functionInput(x0)
            firstDeriFunc = firstDeri(x0)
            secondDeriFunc = secondDeri(x0)
            x_next = newtonMethod(x0, firstDeriFunc, secondDeriFunc)
            element = {
              "iteration": i,
              "x0": x0,
              "originFunc": originFunc,
              "firstDeri": firstDeriFunc,
              "secondDeri": secondDeriFunc,
              "Es": 100,
            }
            obj.append(element)
          else:
            originFunc = functionInput(x_next)
            firstDeriFunc = firstDeri(x_next)
            secondDeriFunc = secondDeri(x_next)
            x_next = newtonMethod(x0, firstDeriFunc, secondDeriFunc)
            ea = abs((x_next - x0) / x_next)
            element = {
              "iteration": i,
              "x0": x_next,
              "originFunc": originFunc,
              "firstDeri": firstDeriFunc,
              "secondDeri": secondDeriFunc,
              "Es": ea,
            }
            obj.append(element)
          if (element["Es"] < es): break
          i += 1
          
        return jsonify(obj)

