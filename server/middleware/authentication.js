const { verifyToken } = require("../helper/jwt");
const { User } = require("../models");
const authentication = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw { name: "invalidToken" };

    const rawToken = authorization.split(" ");
    if (rawToken[0] !== "Bearer" || !rawToken[0])
      throw { name: "invalidToken" };

    const verify = verifyToken(rawToken[1]);

    const user = await User.findByPk(verify.id);
    if (!user) throw { name: "invalidUser" };

    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
