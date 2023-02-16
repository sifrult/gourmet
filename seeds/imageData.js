const { Image } = require('../models');

const imageData = [
    {
        url: 'https://media.istockphoto.com/id/953664964/photo/roasted-chicken-fillet-breast-with-lemon-tomato-rosemary-mustard-seeds-honey.jpg?s=612x612&w=0&k=20&c=hXWApkIkz5t76FlgHMYrK1qOmuFEe58UO6wiGCmwN9w=',
        recipe_id: 1
    },
    {
        url: 'https://cdn-uploads.mealime.com/uploads/recipe/thumbnail/1200/presentation_ec6d060e-9a5a-4225-9746-5dc1c46b840b.jpeg',
        recipe_id: 2
    }
]


const seedImage = () => Image.bulkCreate(imageData);

module.exports = seedImage;
