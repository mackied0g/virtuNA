const Sequelize = require('sequelize');
const database = require('../database');

const Meeting = database.define(
  'meetings',
  {
    group_id: {
      type: Sequelize.INTEGER
    },
    date_time: {
      type: Sequelize.DATE
    },
    location: {
      type: Sequelize.TEXT
    }
  },
  { timestamps: false }
);

Meeting.readAll = async (req, res) => {
  try {
    const meetings = await Meeting.findAll();
    return res.send({ meetings });
  } catch (error) {
    return res.send(error);
  }
};

module.exports = Meeting;
