const { User } = require('../models');

const userData = [
    {
        username: 'Fred',
        password: 'password'
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
