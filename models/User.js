const Sequelize = require('sequelize');
const Group = require('./Group')
const Meeting = require('./Meeting')
const database = require('../database');

const User = database.define(
  'users',
  {
    username: {
      type: Sequelize.TEXT
    },
    password_digest: {
      type: Sequelize.TEXT
    },
    role: {
      type: Sequelize.TEXT
    },
    groupId: {
      type: Sequelize.INTEGER,
       field: 'group_id'
    },
    veiled: {
      type: Sequelize.BOOLEAN
    },
    fb_id: {
      type: Sequelize.INTEGER
    }
  },
  { timestamps: false }
);

User.readAll = async (req, res) => {
  try {
    const users = await User.findAll();
    return res.send({ users });
  } catch (error) {
    return res.send(error);
  }
};

User.findByFb = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {fb_id: req.params.fb_id},
      include: [{
        model: Group,
        include: [{
          model: Meeting
        }]
      }]
    });
    return res.send( user );
  } catch (error) {
    return res.send(error);
  }
};

module.exports = User;
