const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'Chicken',
        recipe_id: 1
    }
]

const seedTag = () => Tag.bulkCreate(tagData);

module.exports = seedTag;
