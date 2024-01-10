const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

const createToken = (PlanText) => {
  return jwt.sign(PlanText, secret);
};

const verifyToken = (PlanText) => {
  return jwt.verify(PlanText, secret);
};

module.exports = {
  createToken,
  verifyToken,
};
