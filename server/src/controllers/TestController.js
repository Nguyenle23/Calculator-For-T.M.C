const math = require('mathjs');

module.exports = {
  test: (req, res) => {
    let equationInput = req.body.equation;
    let x_l = req.body.xl;
    let x_u = req.body.xu;
    let es = req.body.es;
    let type = req.body.type;

    let equationCompile = math.compile(equationInput);
    let equation = (x) => {
      return equationCompile.evaluate({ x: x });
    };

    const R = (Math.sqrt(5) - 1) / 2;
    let d_constant = (x_u, x_l) => {
      return R * (x_u - x_l);
    }
    let x1 = parseFloat(x_l) + d_constant(x_u, x_l);
    let x2 = parseFloat(x_u) - d_constant(x_u, x_l);
    let f1 = equation(x1);
    let f2 = equation(x2);

    let obj = [{}];
    let Es = es;

    switch (type) {
      case 'maximum':
        for (i = 0; i < 20; i++) {
          if (i == 0) {
            obj[i] = {
              iterator: i,
              xl: parseFloat(x_l).toFixed(5),
              x2: parseFloat(x2).toFixed(5),
              f2: parseFloat(f2).toFixed(5),
              x1: parseFloat(x1).toFixed(5),
              f1: parseFloat(f1).toFixed(5),
              xu: parseFloat(x_u).toFixed(5),
              xopt: parseFloat(x2).toFixed(5),
              d: parseFloat(d_constant(x_u, x_l)).toFixed(5),
              ea: parseFloat((1 - R) * ((x_u - x_l) / x2) * 100).toFixed(4),
            }
          } else if (f2 < f1) {
            x_l = x2;
            x2 = x1;
            x1 = parseFloat(x_l) + d_constant(x_u, x_l);
            f1 = equation(x1);
            f2 = equation(x2);
            obj[i] = {
              iterator: i,
              xl: parseFloat(x_l).toFixed(5),
              x2: parseFloat(x2).toFixed(5),
              f2: parseFloat(f2).toFixed(5),
              x1: parseFloat(x1).toFixed(5),
              f1: parseFloat(f1).toFixed(5),
              xu: parseFloat(x_u).toFixed(5),
              xopt: parseFloat(x2).toFixed(5),
              d: parseFloat(d_constant(x_u, x_l)).toFixed(5),
              ea: parseFloat((1 - R) * ((x_u - x_l) / x2) * 100).toFixed(4),
            }
            if (obj[i].ea < Es) {
              break;
            }
          } else {
            x_u = x1;
            x1 = x2;
            x2 = parseFloat(x_u) - d_constant(x_u, x_l);
            f1 = equation(x1);
            f2 = equation(x2);
            obj[i] = {
              iterator: i,
              xl: parseFloat(x_l).toFixed(5),
              x2: parseFloat(x2).toFixed(5),
              f2: parseFloat(f2).toFixed(5),
              x1: parseFloat(x1).toFixed(5),
              f1: parseFloat(f1).toFixed(5),
              xu: parseFloat(x_u).toFixed(5),
              xopt: parseFloat(x2).toFixed(5),
              d: parseFloat(d_constant(x_u, x_l)).toFixed(5),
              ea: parseFloat((1 - R) * ((x_u - x_l) / x2) * 100).toFixed(4),
            }
            if (obj[i].ea < Es) {
              break;
            }
          }
        }
        res.status(200).json({
          message: "success",
          data: obj,
        });
        break;
      case 'minimum':
        for (i = 0; i < 20; i++) {
          if (i == 0) {
            obj[i] = {
              iterator: i,
              xl: parseFloat(x_l).toFixed(5),
              x2: parseFloat(x2).toFixed(5),
              f2: parseFloat(f2).toFixed(5),
              x1: parseFloat(x1).toFixed(5),
              f1: parseFloat(f1).toFixed(5),
              xu: parseFloat(x_u).toFixed(5),
              xopt: parseFloat(x2).toFixed(5),
              d: parseFloat(d_constant(x_u, x_l)).toFixed(5),
              ea: parseFloat((1 - R) * ((x_u - x_l) / x2) * 100).toFixed(4),
            }
          } else if (f2 > f1) {
            x_l = x2;
            x2 = x1;
            x1 = parseFloat(x_l) + d_constant(x_u, x_l);
            f1 = equation(x1);
            f2 = equation(x2);
            obj[i] = {
              iterator: i,
              xl: parseFloat(x_l).toFixed(5),
              x2: parseFloat(x2).toFixed(5),
              f2: parseFloat(f2).toFixed(5),
              x1: parseFloat(x1).toFixed(5),
              f1: parseFloat(f1).toFixed(5),
              xu: parseFloat(x_u).toFixed(5),
              xopt: parseFloat(x2).toFixed(5),
              d: parseFloat(d_constant(x_u, x_l)).toFixed(5),
              ea: parseFloat((1 - R) * ((x_u - x_l) / x2) * 100).toFixed(4),
            }
            if (obj[i].ea < Es) {
              break;
            }
          } else {
            x_u = x1;
            x1 = x2;
            x2 = parseFloat(x_u) - d_constant(x_u, x_l);
            f1 = equation(x1);
            f2 = equation(x2);
            obj[i] = {
              iterator: i,
              xl: parseFloat(x_l).toFixed(5),
              x2: parseFloat(x2).toFixed(5),
              f2: parseFloat(f2).toFixed(5),
              x1: parseFloat(x1).toFixed(5),
              f1: parseFloat(f1).toFixed(5),
              xu: parseFloat(x_u).toFixed(5),
              xopt: parseFloat(x2).toFixed(5),
              d: parseFloat(d_constant(x_u, x_l)).toFixed(5),
              ea: parseFloat((1 - R) * ((x_u - x_l) / x2) * 100).toFixed(4),
            }
            if (obj[i].ea < Es) {
              break;
            }
          }
        }
        res.status(200).json({
          message: "success",
          data: obj,
        });
        break;
      default:
        res.status(400).json({
          message: "error",
          data: "Please enter maximum or minimum",
        });
        break;
    }
  }
}