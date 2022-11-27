const math = require('mathjs');

module.exports = {
  test: (req, res) => {
    let x_l = req.body.xl;
    let x_u = req.body.xu;
    let es = req.body.es;
    let equationInput = req.body.equation;

    let equationCompile = math.compile(equationInput);
    let equation = (x) => {
      return equationCompile.evaluate({ x: x });
    };
    
    // let equation = (equation1) => {
    //   // return -(x ** 4 + 2 * x ** 3 + 8 * x ** 2 + 5 * x);
    //   // return (x ** 5 - 5 * x ** 4 + x ** 3 - 6 * x ** 2 + 7 * x + 10);
    //   console.log(equation1);
    //   return equation1;
    // }

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

    for (i = 0; i < 20; i++) {
      if (i == 0) {
        obj[i] = {
          iterator: i,
          xl: x_l,
          x2: x2,
          f2: f2,
          x1: x1,
          f1: f1,
          xu: x_u,
          xopt: x2,
          d: d_constant(x_u, x_l),
          ea: (1 - R) * ((x_u - x_l) / x2) * 100,
        }
      } else if (f2 > f1) {
        x_l = x2;
        x2 = x1;
        x1 = parseFloat(x_l) + d_constant(x_u, x_l);
        f1 = equation(x1);
        f2 = equation(x2);
        obj[i] = {
          iterator: i,
          xl: x_l,
          x2: x2,
          f2: f2,
          x1: x1,
          f1: f1,
          xu: x_u,
          xopt: x2,
          d: d_constant(x_u, x_l),
          ea: (1 - R) * ((x_u - x_l) / x2) * 100,
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
          xl: x_l,
          x2: x2,
          f2: f2,
          x1: x1,
          f1: f1,
          xu: x_u,
          xopt: x1,
          d: d_constant(x_u, x_l),
          ea: (1 - R) * ((x_u - x_l) / x1) * 100,
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
  }
}