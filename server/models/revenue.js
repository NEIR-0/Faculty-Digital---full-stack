"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Revenue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Revenue.init(
    {
      transactionDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "transactionDate can't null",
          },
          notEmpty: {
            msg: "transactionDate can't empty",
          },
        },
      },

      source: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "source can't null",
          },
          notEmpty: {
            msg: "source can't empty",
          },
        },
      },

      total_Income: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notNull: {
            msg: "total_Income can't null",
          },
          notEmpty: {
            msg: "total_Income can't empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Revenue",
    }
  );
  return Revenue;
};
