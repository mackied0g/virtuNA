const Sequelize = require('sequelize');
const database = require('../database');

const Meeting = database.define(
  'meetings',
  {
    groupId: {
      type: Sequelize.INTEGER,
       field: 'group_id'
    },
    dateTime: {
      type: Sequelize.DATE,
      field: 'date_time'
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
