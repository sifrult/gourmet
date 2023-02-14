const router = require('express').Router();
const { Recipe, Ingredient, Tag , User, Instruction, Image} = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const recipeData = await Recipe.findAll({
      where: {user_id: 1},
      include: [ {model: Image}]
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

      include: [{model: User, attributes: {exclude: ['password']}}]
    })

    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));


    res.render('myRecipes', {
      recipes,
      loggedIn: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/recipe/:id', withAuth, async (req, res) => {
  try {
    const recipeData = await Recipe.findByPk(req.params.id, {
      include: [{model: Ingredient}, {model: Tag}, {model: Instruction}, {model: Image}]
    });

    const recipe = recipeData.get({ plain: true });

    console.log(recipe)

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
