"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const dataRevenues = require("../data/dataDummy.json").map((el) => {
      delete el.id;
      el.createdAt = new Date();
      el.updatedAt = new Date();

      return el;
    });

    await queryInterface.bulkInsert("Revenues", dataRevenues);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Revenues", null, {});
  },
};
