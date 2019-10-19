const Sequelize = require('sequelize');
const database = require('../database');

const Group = database.define(
  'groups',
  {
    name: {
      type: Sequelize.TEXT
    },
    description: {
      type: Sequelize.TEXT
    },
    max_count: {
      type: Sequelize.INTEGER
    }
  },
  { timestamps: false }
);

Group.readAll = async (req, res) => {
  try {
    const groups = await Group.findAll();
    return res.send({ groups });
  } catch (error) {
    return res.send(error);
  }
};

module.exports = Group;
