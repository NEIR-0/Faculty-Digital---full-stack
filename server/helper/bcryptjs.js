const bcryptjs = require("bcryptjs");

const hashingPass = (PlanText) => {
  return bcryptjs.hashSync(PlanText, bcryptjs.genSaltSync(10));
};

const comparePass = (PlanText, hash) => {
  return bcryptjs.compareSync(PlanText, hash);
};

module.exports = {
  hashingPass,
  comparePass,
};
