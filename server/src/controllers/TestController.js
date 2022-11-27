
module.exports = {
  test: (req, res) => {
    const x_u = req.query.x;
    const x_l = req.query.y;
    var equation = (x) => {
      return -(x ** 4 + 2 * x ** 3 + 8 * x ** 2 + 5 * x);
    }
    var d_constant = (x_u, x_l) => {
      return (Math.sqrt(5) - 1) / 2 * (x_u - x_l);
    }
    var x1 = parseFloat(x_l) + d_constant(x_u, x_l);
    var x2 = parseFloat(x_u) - d_constant(x_u, x_l);
    var f1 = equation(x1);
    var f2 = equation(x2);

    // return res.status(200).json({
    //   d_constant: d_constant(x_u, x_l),
    //   x1: x1,
    //   x2: x2,
    //   f1: f1,
    //   f2: f2,
    // });
    console.log("i", "---x1---", "---x2---", "---f1---", "---f2---");
    for (i = 0; i < 3; i++) {
      if (f1 > f2) {
        // x_u = x2;
        // x2 = x1;
        // f2 = f1;
        // x1 = parseFloat(x_l) + d_constant(x_u, x_l);
        // f1 = equation(x1);
        console.log(i, x1, x2, f1, f2);
      } 
      // else {
      //   x_l = x1;
      //   x1 = x2;
      //   f1 = f2;
      //   x2 = parseFloat(x_u) - d_constant(x_u, x_l);
      //   f2 = equation(x2);
      //   console.log(i, x1, x2, f1, f2);
      // }
    }


  }
}