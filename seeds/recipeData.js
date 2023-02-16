const { Recipe } = require('../models');

const recipeData = [
    {
        recipe_name: 'Honey Mustard Chicken',
        time: '30min',
        user_id: 1,
    },
    {
        recipe_name: 'Naked Wonton Soup',
        time: '30 minutes',
        user_id: 1,
    },
    {
        recipe_name: 'Beef & Broccoli Stir Fry',
        time: '40 minutes',
        user_id: 1,
    },
    {
        recipe_name: 'Lemon-Herb Pork Chop with Feta & Greek Salad',
        time: '35 minutes',
        user_id: 1
    },
    {
        recipe_name: 'Beef stroganoff with Portobello Mushrooms, Zucchini Noodles & Parsley',
        time: '35 minutes',
        user_id: 1
    },
    {
        recipe_name: 'One Pot Lemon Pepper Chicken with Orzo',
        time: '45 minutes',
        user_id: 1
    },
    {
        recipe_name: 'Italian Chicken & Pepper Sandos',
        time: '40 minutes',
        user_id: 1
    },
    {
        recipe_name: 'Vegetarian Meatballs',
        time: '30 minutes',
        user_id: 1
    },
    {
        recipe_name: 'Creamy Spinach Chicken',
        time: '30 minutes',
        user_id: 1
    },
    {
        recipe_name: 'Shrimp Quesadilla',
        time: '30 minutes',
        user_id: 1
    },
    {
        recipe_name: 'Slow Cooker Steak, Potatoes, and Corn',
        time: '6 hours 15 minutes',
        user_id: 1
    },
    {
        recipe_name: 'Tuna Salad',
        time: '10 minutes',
        user_id: 1
    },
    {
        recipe_name: 'Sheet Pan Sausage And Veggies',
        time: '50 minutes',
        user_id: 1
    },
    {
        recipe_name: 'Tallarin Saltado (Peruvian Stir-Fry Noodles)',
        time: '30 minutes',
        user_id: 1
    },
    {
        recipe_name: 'Lomo Saltado (Peruvian Beef Stir-Fry)',
        time: '40 minutes',
        user_id: 1
    },
    {
        recipe_name: 'Tallarin Verde (Peruvian Green Spaghetti)',
        time: '40 minutes',
        user_id: 1
    },
    {
        recipe_name: 'Pita with cheese',
        time: '5 minutes',
        user_id: 1
    },
    {
        recipe_name: 'Arroz Chaufa (Chinese-Peruvian Fried Rice)',
        time: '45 minutes',
        user_id: 1
    },
    {
        recipe_name: 'Sweet Vinegar Sausage and Peppers',
        time: '30 minutes',
        user_id: 1
    },
    {
        recipe_name: 'Bangers and Mash (Marmite Gravy)',
        time: '30 minutes',
        user_id: 1
    },
]

const seedRecipe = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipe;
