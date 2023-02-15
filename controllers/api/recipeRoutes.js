const router = require('express').Router();
const { Recipe, Ingredient, Instruction, Image} = require('../../models/');
const withAuth = require('../../utils/auth');

router.post('/favorite', withAuth, async (req, res) => {
    try{
        const newRecipe = await Recipe.create({
            ...req.body,
            user_id: req.session.user_id
        })
        res.status(200).json(newRecipe);
    } catch (err) {
        res.status(400).json(err)
    }
})

router.post('/newRecipe', withAuth, async (req, res) => {
  try {
    const newRecipe = await Recipe.create({
      ...req.body,
      user_id: req.session.user_id
    });
    const newIngredient = await Ingredient.create({
      ...req.body,
      recipe_id : newRecipe.id
    });
    const newInstruction = await Instruction.create({
      ...req.body,
      recipe_id: newRecipe.id
    })
    const newImage = await Image.create({
      ...req.body,
      recipe_id: newRecipe.id
    })
    res.status(200).json(newRecipe, newIngredient, newImage);
  } catch (err) {
    res.status(400).json(err)
  }
})

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const recipeData = await Recipe.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });

      if (!recipeData) {
        res.status(404).json({ message: 'No recipe found with this id!' });
        return;
      }

      res.status(200).json(recipeData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;
