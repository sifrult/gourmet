const router = require('express').Router();
const { Recipe, Ingredient, User, Instruction, Image, RecipeTag} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      where: {user_id: 1},
      include: [ {model: Image} ],
    })

    const recipe = recipeData.map((recipe) => recipe.get({ plain: true }));

    res.render('homepage', {
      recipe,
      loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/myRecipes', withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      where: {user_id: req.session.user_id},

      include: [{model: User, attributes: {exclude: ['password']}}, {model: Image}]
    })

    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    console.log(recipes)
    res.render('myRecipes', {
      recipes,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/recipe/:recipe_name', withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.findOne(
      {
        where: { recipe_name: req.params.recipe_name },


      include: [{model: Ingredient}, {model: Instruction}, {model: Image}]
    });

    if (!recipeData) {
      res.sendStatus(404);
      return;
    }

    const recipe = recipeData.get({ plain: true });
    console.log(recipe)
    res.render('recipe', {
      recipe,
      loggedIn: req.session.loggedIn,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/recipeInput', async (req, res) => {
  try {
    res.render('recipeInput');
  } catch (err) {
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
