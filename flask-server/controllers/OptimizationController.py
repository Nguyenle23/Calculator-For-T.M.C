from sympy import *
from flask import jsonify, request

print(eval("dir()", {}))
from controllers.ErrorController import error_handling

class OptimizationController:
    def newtonMethod():
      if request.method == "POST":
        data = request.json
        function = data["equationInput"]
        x0 = float(data["x0"])
        es = float(data["es"])

        if (function == ""):
          return error_handling(400)
        
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
                  "x0": '{:.4f}'.format(x0),
                  "fx": '{:.4f}'.format(originFunc),
                  "f_1st": '{:.4f}'.format(firstDeriFunc),
                  "f_2nd": '{:.4f}'.format(secondDeriFunc),
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
                  "x0": '{:.4f}'.format(x0),
                  "fx": '{:.4f}'.format(originFunc),
                  "f_1st": '{:.4f}'.format(firstDeriFunc),
                  "f_2nd": '{:.4f}'.format(secondDeriFunc),
                  "ea": '{:.4f}'.format(ea),
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

    def goldenSectionSearch():
      if request.method == "POST":
        data = request.json
        function = data["equationInput"]
        xl = float(data["xl"])
        xu = float(data["xu"])
        es = float(data["es"])
        type = str(data["type"])

        try:
          if (function == ""):
            return error_handling(400)
        
          def functionInput(x):
            functionReplace = function.replace("^", "**")
            return eval(functionReplace)

          R_constant = float((sqrt(5) - 1) / 2)

          def D_constant(xl, xu):
            return float(R_constant * (xu - xl))

          def calX1(xl, xu):
            return xl + D_constant(xl, xu)

          def calX2(xl, xu):
            return xu - D_constant(xl, xu)

          def calF1(x1):
            return functionInput(x1)

          def calF2(x2):
            return functionInput(x2)

          obj = []
          d_constant = D_constant(xl, xu)
          x1 = calX1(xl, xu)
          x2 = calX2(xl, xu)
          f1 = calF1(calX1(xl, xu))
          f2 = calF2(calX2(xl, xu))

          switch = {
            "maximum": 1,
            "minimum": 2
          }

          def goldenSectionSearchFunction(xl, xu, d_constant, x1, x2, f1, f2, es, type):
            i = 0
            while (i < 100):
              if i == 0:
                element = {
                  "iterator": i,
                  "xl": '{:.4f}'.format(xl),
                  "xu": '{:.4f}'.format(xu),
                  "d": '{:.4f}'.format(d_constant),
                  "x1": '{:.4f}'.format(x1),
                  "x2": '{:.4f}'.format(x2),
                  "f1": '{:.4f}'.format(f1),
                  "f2": '{:.4f}'.format(f2),
                  "ea": '{:.4f}'.format(((1 - R_constant) * ((xu - xl) / x2) * 100)),
                }
                obj.append(element)
              else:
                if switch.get(type) == 1:
                  if f1 < f2:
                    xl = x1
                    x1 = x2
                    x2 = xu - R_constant * (xu - xl)
                    f1 = f2
                    f2 = functionInput(x2)
                    ea = (1 - R_constant) * ((xu - xl) / x1) * 100
                  else:
                    xu = x2
                    x2 = x1
                    x1 = xl + R_constant * (xu - xl)
                    f2 = f1
                    f1 = functionInput(x1)
                    ea = (1 - R_constant) * ((xu - xl) / x1) * 100
                elif switch.get(type) == 2:
                  if f1 < f2:
                    xu = x1
                    x1 = x2
                    x2 = xu - R_constant * (xu - xl)
                    f1 = f2
                    f2 = functionInput(x2)
                    ea = (1 - R_constant) * ((xu - xl) / x2) * 100
                  else:
                    xl = x2
                    x2 = x1
                    x1 = xl + R_constant * (xu - xl)
                    f2 = f1
                    f1 = functionInput(x1)
                    ea = (1 - R_constant) * ((xu - xl) / x2) * 100

                d_constant = D_constant(xl, xu)
                element = {
                  "iterator": i,
                  "xl": '{:.5f}'.format(xl),
                  "x2": '{:.5f}'.format(x2),
                  "f2": '{:.5f}'.format(f2),
                  "x1": '{:.5f}'.format(x1),
                  "f1": '{:.5f}'.format(f1),
                  "xu": '{:.5f}'.format(xu),
                  "d": '{:.5f}'.format(d_constant),
                  "ea": '{:.5f}'.format(ea),
                }
                obj.append(element)
              if (d_constant < es): break
              i += 1
            return jsonify({
              "formula": function,
              "data": obj,
            })
          return goldenSectionSearchFunction(xl, xu, d_constant, x1, x2, f1, f2, es, type)
          
        except:
          return error_handling(500)

