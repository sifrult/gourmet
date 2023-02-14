const { Image } = require('../models');

const imageData = [
    {
        url: 'https://media.istockphoto.com/id/953664964/photo/roasted-chicken-fillet-breast-with-lemon-tomato-rosemary-mustard-seeds-honey.jpg?s=612x612&w=0&k=20&c=hXWApkIkz5t76FlgHMYrK1qOmuFEe58UO6wiGCmwN9w=',
        recipe_id: 1
    },
    {
        url: 'https://media.istockphoto.com/id/1352552176/photo/homemade-asian-chicken-wonton-soup.jpg?s=612x612&w=0&k=20&c=Tqy8RCKLH87hxAVxKM-z7KWNSUhMELWB78-1NdsjP5w=',
        recipe_id: 2
    }
]


const seedImage = () => Image.bulkCreate(imageData);

module.exports = seedImage;
