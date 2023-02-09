const router = require('express').Router();
const { Recipe, Ingredient, Tag } = require('../models');

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

router.get('/recipe/:id', async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id, {
      include: [{model:Ingredient},{model:Tag}]
    });
    const recipe = recipeData.get({ plain: true });
    console.log(recipe)
    res.render('recipe', {
      recipe,
    });
  }
  catch (err) {
    res.status(500).json(err);
  }
});
  module.exports = router;