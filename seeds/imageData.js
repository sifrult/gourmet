const { Image } = require('../models');

const imageData = [
    {
        url: 'https://www.twopeasandtheirpod.com/wp-content/uploads/2019/01/Sheet-Pan-Pasta-Bake-5.jpg',
        recipe_id: 1
    },
    {
        url: 'https://cdn-uploads.mealime.com/uploads/recipe/thumbnail/1200/presentation_ec6d060e-9a5a-4225-9746-5dc1c46b840b.jpeg',
        recipe_id: 2
    },
    {
        url: 'https://cdn-uploads.mealime.com/uploads/recipe_variant/thumbnail/2272/presentation_7547932d-be51-4f4b-9365-2adb80795311.jpg',
        recipe_id: 3
    },
    {
        url: 'https://cdn-uploads.mealime.com/uploads/recipe/thumbnail/2082/presentation_5ec65b3c-c341-48ed-bf56-e739b06ae8fb.jpeg',
        recipe_id: 4
    },
    {
        url: 'https://cdn-uploads.mealime.com/uploads/recipe/thumbnail/547/presentation_a463699f-c125-4195-b6a5-380a397c9ccf.jpg',
        recipe_id: 5
    },
    {
        url: 'https://www.budgetbytes.com/wp-content/uploads/2022/07/One-Pot-Lemon-Pepper-Chicken-and-Orzo-bowl-768x576.jpg',
        recipe_id: 6
    },
    {
        url: 'https://img.hellofresh.com/c_fit,f_auto,fl_lossy,h_1100,q_auto,w_2600/hellofresh_s3/image/6075d61c38625b79a415ba8b-77fffbc9.jpg',
        recipe_id: 7
    },
    {
        url: 'https://pinchofyum.com/wp-content/uploads/vegetarian-meatballs-2-768x1152.jpg',
        recipe_id: 8
    },
    {
        url: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Creamy-Spinach-Chicken-Dinner_EXPS_FT21_40982_F_0713_1-15.jpg?resize=522,522',
        recipe_id: 9
    },
    {
        url: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Shrimp-Quesadilla_EXPS_FT21_36291_F_1012_1-16.jpg?fit=700,1024',
        recipe_id: 10
    },
    {
        url: 'https://www.themagicalslowcooker.com/wp-content/uploads/2022/08/steak-potatoes-and-corn-7.jpg.webp',
        recipe_id: 11
    },
    {
        url: 'https://www.tasteofhome.com/wp-content/uploads/2022/12/That-Good-Tuna-Salad_EXPS_DIYD22_271506_DR_11_14_8b-5.jpg?fit=700,1024',
        recipe_id: 12
    },
    {
        url: 'https://www.chelseasmessyapron.com/wp-content/uploads/2016/09/Sausage-and-Veggies-2.jpg.webp',
        recipe_id: 13
    },
    {
        url: 'https://s3-media3.fl.yelpcdn.com/bphoto/iZDXVKebIrw3gQRUGQ7eyg/o.jpg',
        recipe_id: 14
    },
    {
        url: 'https://www.eatperu.com/wp-content/uploads/2019/06/lomo-saltado-with-rice-and-cilantro-recipe.webp',
        recipe_id: 15
    },
    {
        url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2017%2F08%2F03%2Ftallarinesverdes.jpg',
        recipe_id: 16
    },
    {
        url: 'https://thehappypita.com/wp-content/uploads/2016/07/cheese-quesadilla.png',
        recipe_id: 17
    },
    {
        url: 'https://www.eatperu.com/wp-content/uploads/2019/09/arroz-chaufa-recipe-peruvian-chinese-rice-dish.jpg',
        recipe_id: 18
    },
    {
        url: 'https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/05/Sausage-and-Peppers-Recipe1.jpg',
        recipe_id: 19
    },
    {
        url: 'https://www.daringgourmet.com/wp-content/uploads/2019/09/Bangers-and-Mash-3-square-2.jpg',
        recipe_id: 20
    },

]


const seedImage = () => Image.bulkCreate(imageData);

module.exports = seedImage;
