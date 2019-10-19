const Sequelize = require('sequelize');
const User = require('./User')
const Meeting = require('./Meeting')
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
    maxCount: {
      type: Sequelize.INTEGER,
      field: 'max_count'
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
