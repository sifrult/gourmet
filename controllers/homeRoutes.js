const router = require('express').Router();
const { Recipe, Ingredient, Tag } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const recipeData = await Recipe.findAll()
    // Serialize data so the template can read it
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('homepage', {
      recipes,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/recipe/:id', withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id, {
      include: [{ model: Ingredient}, { model: Tag}]
    });
    const recipe = recipeData.get({ plain: true });
    console.log(recipe);
    res.render('recipe', {
      recipe,
      loggedIn: req.session.loggedIn
    });
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login')
});

router.get('/signUp', async (req, res) => {
  try {
    res.render('signUp');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
