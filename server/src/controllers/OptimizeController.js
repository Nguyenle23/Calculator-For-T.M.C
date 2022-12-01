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
  },
  parabolicInterpolation: (req, res) => {
    let { equationInput, x0, x1, x2, es, type } = req.body;
    try {
      if (equationInput == undefined || x0 == undefined || x1 == undefined || x2 == undefined || es == undefined) {
        return res.status(400).json('Please fill all the fields');
      }

      if (es == 0) {
        return res.status(400).json('Please choose a value for Es different from 0');
      }

      if (type === undefined) {
        return res.status(400).json("Please enter maximum or minimum");
      }

      if (/([-+*\/=]?)(?:(\d+)(x?)|()(x))/g.test(equationInput) === false) {
        return res.status(400).json('Please enter a valid equation');
      }

      const converInput = equationInput.replace('**', '^');
      let equationCompile = math.compile(converInput);
      let equation = (x) => {
        return equationCompile.evaluate({ x: x });
      };

      const powerTwo = 2;
      let obj = [{}];
      let f0 = parseFloat(equation(x0)).toFixed(4);
      let f1 = parseFloat(equation(x1)).toFixed(4);
      let f2 = parseFloat(equation(x2)).toFixed(4);

      let objNumerator = {
        phase0: f0 * (math.pow(x1, powerTwo) - math.pow(x2, powerTwo)),
        phase1: f1 * (math.pow(x2, powerTwo) - math.pow(x0, powerTwo)),
        phase2: f2 * (math.pow(x0, powerTwo) - math.pow(x1, powerTwo)),
      }

      let objFraction = {
        phase0: powerTwo * (f0 * (x1 - x2)),
        phase1: powerTwo * (f1 * (x2 - x0)),
        phase2: powerTwo * (f2 * (x0 - x1)),
      }

      let numerator = objNumerator.phase0 + objNumerator.phase1 + objNumerator.phase2;
      let fraction = objFraction.phase0 + objFraction.phase1 + objFraction.phase2;
      let x3 = parseFloat(numerator / fraction).toFixed(4);
      let f3 = parseFloat(equation(x3)).toFixed(4);

      switch (type) {
        case 'maximum':
          for (let i = 0; i < 10; i++) {
            if (i == 0) {
              obj[i] = {
                iterator: i,
                x0: parseFloat(x0).toFixed(4),
                f0: parseFloat(f0).toFixed(4),
                x1: parseFloat(x1).toFixed(4),
                f1: parseFloat(f1).toFixed(4),
                x2: parseFloat(x2).toFixed(4),
                f2: parseFloat(f2).toFixed(4),
                x3: parseFloat(x3).toFixed(4),
                f3: parseFloat(f3).toFixed(4),
              }
            }
            else if (f1 <= f3) {
              x0 = x1;
              x1 = x3;
              x2 = x3;
              let f0 = parseFloat(equation(x0)).toFixed(4);
              let f1 = parseFloat(equation(x1)).toFixed(4);
              let f2 = parseFloat(equation(x2)).toFixed(4);
              let objNumerator = {
                phase0: f0 * (math.pow(x1, powerTwo) - math.pow(x2, powerTwo)),
                phase1: f1 * (math.pow(x2, powerTwo) - math.pow(x0, powerTwo)),
                phase2: f2 * (math.pow(x0, powerTwo) - math.pow(x1, powerTwo)),
              }

              let objFraction = {
                phase0: powerTwo * (f0 * (x1 - x2)),
                phase1: powerTwo * (f1 * (x2 - x0)),
                phase2: powerTwo * (f2 * (x0 - x1)),
              }
              let numerator = objNumerator.phase0 + objNumerator.phase1 + objNumerator.phase2;
              let fraction = objFraction.phase0 + objFraction.phase1 + objFraction.phase2;
              x3 = parseFloat(numerator / fraction).toFixed(4);
              f3 = parseFloat(equation(x3)).toFixed(4);
              f0 = equation(x0);
              f1 = equation(x1);
              f2 = equation(x2);
              obj[i] = {
                iterator: i,
                x0: parseFloat(x0).toFixed(4),
                f0: parseFloat(f0).toFixed(4),
                x1: parseFloat(x1).toFixed(4),
                f1: parseFloat(f1).toFixed(4),
                x2: parseFloat(x2).toFixed(4),
                f2: parseFloat(f2).toFixed(4),
                x3: parseFloat(x3).toFixed(4),
                f3: parseFloat(f3).toFixed(4),
              }
            }
            else {
              x2 = x3;
              let f0 = parseFloat(equation(x0)).toFixed(4);
              let f1 = parseFloat(equation(x1)).toFixed(4);
              let f2 = parseFloat(equation(x2)).toFixed(4);
              let objNumerator = {
                phase0: f0 * (math.pow(x1, powerTwo) - math.pow(x2, powerTwo)),
                phase1: f1 * (math.pow(x2, powerTwo) - math.pow(x0, powerTwo)),
                phase2: f2 * (math.pow(x0, powerTwo) - math.pow(x1, powerTwo)),
              }

              let objFraction = {
                phase0: powerTwo * (f0 * (x1 - x2)),
                phase1: powerTwo * (f1 * (x2 - x0)),
                phase2: powerTwo * (f2 * (x0 - x1)),
              }
              let numerator = objNumerator.phase0 + objNumerator.phase1 + objNumerator.phase2;
              let fraction = objFraction.phase0 + objFraction.phase1 + objFraction.phase2;
              x3 = parseFloat(numerator / fraction).toFixed(4);
              f3 = parseFloat(equation(x3)).toFixed(4);
              f0 = equation(x0);
              f1 = equation(x1);
              f2 = equation(x2);
              obj[i] = {
                iterator: i,
                x0: parseFloat(x0).toFixed(4),
                f0: parseFloat(f0).toFixed(4),
                x1: parseFloat(x1).toFixed(4),
                f1: parseFloat(f1).toFixed(4),
                x2: parseFloat(x2).toFixed(4),
                f2: parseFloat(f2).toFixed(4),
                x3: parseFloat(x3).toFixed(4),
                f3: parseFloat(f3).toFixed(4),
              }
            }
          }
          return res.status(200).json({
            data: obj,
          });

        case 'minimum':
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: error.message,
        message: "Invalid equation, please refesh and try again"
      });
    }
  },
}