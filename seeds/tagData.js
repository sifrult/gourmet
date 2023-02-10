const { Tag } = require('../models');

/* because of how index.js is set up, we need to add
recipe_id of the recipe we want to display it on */

const tagData = [
    {
        tag_name: 'Chicken',
    },
    {
        tag_name: 'Pork'
    },
    {
        tag_name: 'Vegetarian',
    },
]

const seedTag = () => Tag.bulkCreate(tagData);

module.exports = seedTag;
