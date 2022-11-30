const math = require('mathjs');

module.exports = {
  goldenSectionSearch: (req, res) => {
    let equationInput = req.body.equation;
    let x_l = req.body.xl;
    let x_u = req.body.xu;
    let es = req.body.es;
    let type = req.body.type;

    try {
      if (equationInput === undefined || x_l === undefined || x_u === undefined || es === undefined) {
        return res.status(400).json('Please fill all the fields');
      }

      if (/([-+*\/=]?)(?:(\d+)(x?)|()(x))/g.test(equationInput) === false) {
        return res.status(400).json('Please enter a valid equation');
      }

      if (type === undefined) {
        return res.status(400).json("Please enter maximum or minimum");
      }

      const converInput = equationInput.replace('**', '^');
      let equationCompile = math.compile(converInput);
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
      let ea = 100;
      let i = 0;

      switch (type) {
        case 'maximum':
          while (ea > Es) {
            if (i == 0) {
              obj[i] = {
                iterator: i,
                xl: parseFloat(x_l).toFixed(4),
                x2: parseFloat(x2).toFixed(4),
                f2: parseFloat(f2).toFixed(4),
                x1: parseFloat(x1).toFixed(4),
                f1: parseFloat(f1).toFixed(4),
                xu: parseFloat(x_u).toFixed(4),
                d: parseFloat(d_constant(x_u, x_l)).toFixed(4),
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
                xl: parseFloat(x_l).toFixed(4),
                x2: parseFloat(x2).toFixed(4),
                f2: parseFloat(f2).toFixed(4),
                x1: parseFloat(x1).toFixed(4),
                f1: parseFloat(f1).toFixed(4),
                xu: parseFloat(x_u).toFixed(4),
                d: parseFloat(d_constant(x_u, x_l)).toFixed(4),
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
                xl: parseFloat(x_l).toFixed(4),
                x2: parseFloat(x2).toFixed(4),
                f2: parseFloat(f2).toFixed(4),
                x1: parseFloat(x1).toFixed(4),
                f1: parseFloat(f1).toFixed(4),
                xu: parseFloat(x_u).toFixed(4),
                d: parseFloat(d_constant(x_u, x_l)).toFixed(4),
                ea: parseFloat((1 - R) * ((x_u - x_l) / x2) * 100).toFixed(4),
              }
              if (obj[i].ea < Es) {
                break;
              }
            }
            i++;
          }
          return res.status(200).json({
            data: obj,
          });
        case 'minimum':
          while (ea > es) {
            if (i == 0) {
              obj[i] = {
                iterator: i,
                xl: parseFloat(x_l).toFixed(4),
                x2: parseFloat(x2).toFixed(4),
                f2: parseFloat(f2).toFixed(4),
                x1: parseFloat(x1).toFixed(4),
                f1: parseFloat(f1).toFixed(4),
                xu: parseFloat(x_u).toFixed(4),
                d: parseFloat(d_constant(x_u, x_l)).toFixed(4),
                ea: parseFloat((1 - R) * ((x_u - x_l) / x1) * 100).toFixed(4),
              }
            } else if (f2 > f1) {
              x_l = x2;
              x2 = x1;
              x1 = parseFloat(x_l) + d_constant(x_u, x_l);
              f1 = equation(x1);
              f2 = equation(x2);
              obj[i] = {
                iterator: i,
                xl: parseFloat(x_l).toFixed(4),
                x2: parseFloat(x2).toFixed(4),
                f2: parseFloat(f2).toFixed(4),
                x1: parseFloat(x1).toFixed(4),
                f1: parseFloat(f1).toFixed(4),
                xu: parseFloat(x_u).toFixed(4),
                d: parseFloat(d_constant(x_u, x_l)).toFixed(4),
                ea: parseFloat((1 - R) * ((x_u - x_l) / x1) * 100).toFixed(4),
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
                xl: parseFloat(x_l).toFixed(4),
                x2: parseFloat(x2).toFixed(4),
                f2: parseFloat(f2).toFixed(4),
                x1: parseFloat(x1).toFixed(4),
                f1: parseFloat(f1).toFixed(4),
                xu: parseFloat(x_u).toFixed(4),
                d: parseFloat(d_constant(x_u, x_l)).toFixed(4),
                ea: parseFloat((1 - R) * ((x_u - x_l) / x1) * 100).toFixed(4),
              }
              if (obj[i].ea < Es) {
                break;
              }
            }
            i++;
          }
          return res.status(200).json({
            data: obj,
          });
      }
    } catch (error) {
      res.status(500).json({
        error: error.message,
        message: "Invalid equation, please refesh and try again"
      });
    }
  }
}