const { User, Revenue } = require("../models");
const { comparePass } = require("../helper/bcryptjs");
const { createToken, verifyToken } = require("../helper/jwt");

class Controllers {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email) throw { name: "invalidEmail" };
      if (!password) throw { name: "invalidPassword" };

      const users = await User.findOne({
        where: {
          email: email,
        },
      });
      if (!users) throw { name: "Unauthenticated" };

      const compare = comparePass(password, users.password);
      if (!compare) throw { name: "Unauthenticated" };

      const token = createToken({ id: users.id });
      res.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }

  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body;
      if (!username) throw { name: "invalidUsername" };
      if (!email) throw { name: "invalidEmail" };
      if (!password) throw { name: "invalidPassword" };
      await User.create({ username, email, password });
      res.status(201).json({ message: "success add new user" });
    } catch (error) {
      next(error);
    }
  }

  static async dashboard(req, res, next) {
    try {
      const data = await Revenue.findAll({
        order: [["transactionDate", "DESC"]],
      });
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Controllers;
