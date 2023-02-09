const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'Chicken'
    },
    {
        tag_name: 'Pork'
    },
    {
        tag_name: 'Vegetarian'
    },
]

const seedTag = () => Tag.bulkCreate(tagData);

module.exports = seedTag;
