const { User, Revenue } = require("../models");
const { comparePass } = require("../helper/bcryptjs");
const { createToken, verifyToken } = require("../helper/jwt");
const { Op } = require("sequelize");
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

  static async dashboard(req, res, next) {
    try {
      const options = {
        where: {},
        order: [["transactionDate", "DESC"]],
      };

      if (req.query.filter) {
        const filterDate = new Date(req.query.filter);
        options.where.transactionDate = { [Op.eq]: filterDate };
      }

      if (req.query.search) {
        options.where.source = { [Op.iLike]: `%${req.query.search}%` };
      }

      const data = await Revenue.findAll(options);
      res.status(200).json(data);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Controllers;
