"use strict";
const { hashSync } = require("bcryptjs");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "username can't null",
          },
          notEmpty: {
            msg: "username can't empty",
          },
        },
      },

      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          notNull: {
            msg: "email can't null",
          },
          notEmpty: {
            msg: "email can't empty",
          },
          isEmail: {
            msg: "must be email",
          },
        },
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "password can't null",
          },
          notEmpty: {
            msg: "password can't empty",
          },
          len: {
            args: [5],
            msg: "min password 5 lengths",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  // hooks
  User.addHook("beforeCreate", (instance, options) => {
    instance.password = hashSync(instance.password);
  });
  return User;
};
