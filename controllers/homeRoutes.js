const router = require('express').Router();
const { Recipe } = require('../models');

router.get('/', async (req, res) => {
    try {
      // Get all projects and JOIN with user data
  const recipeData = await Recipe.findAll()
      // Serialize data so the template can read it
      const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
  
      // Pass serialized data and session flag into template
      res.render('homepage', { 
        recipes, 
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;