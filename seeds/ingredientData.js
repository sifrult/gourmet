const { Ingredient } = require('../models');

/* because of how index.js is set up, we need to add
recipe_id of the recipe we want to display it on */

const ingredientData = [
    {
      ingredient: [
          '(serves four to six)',
          '8oz cascatelli (or any large pasta shape)',
          '1 lemon',
          '2lbs brussels sprouts',
          '2 carrots, sliced',
          '2 shallots',
          '8oz mozarella cheese',
          '8oz ricotta cheese',
          '1 red chili, thinly sliced',
          '2 garlic cloves, minced',
          'panko breadcrumbs',
          'parmesan cheese',
          'thyme, basil, or other fresh herbs'
      ],
      recipe_id: 1
    },
    {
      ingredient: [
        '8 baby bok choy',
        '7 cups chicken or vegetable broth',
        '1 bunch cilantro',
        '2 eggs',
        '4 cloves garlic',
        '2 pieces ginger root',
        '1 bunch green onion',
        '1.5 lb ground pork',
        'black pepper',
        'chili-garlic sauce',
        'soy sauce',
        'toasted sesame oil',
        'worcestershire sauce'
      ],
      recipe_id: 2
    },
    {
      ingredient: [
          '4 crowns broccoli',
          '2 cloves garlic',
          '2 pieces ginger root',
          '1 medium red onion',
          '1.5 lb striploin steak',
          'black pepper',
          'crushed red pepper',
          'soy sauce',
          'toasted sesame oil',
          'virgin coconut oil'
      ],
      recipe_id: 3
    },
    {
      ingredient: [
          '4 oz crumbled feta cheese',
          '1 English cucumber',
          '4 cloves garlic',
          '1/4 c Kalamata olives, pitted',
          '1 lemon',
          '4 pork chops',
          '2 shallots',
          '2 tomatoes',
          '2 yellow bell peppers',
          '1/2 teaspoon basil',
          'black pepper',
          'extra virgin olive oil',
          '1/2 teaspoon oregano',
          'red wine vinegar',
          '1/2 teaspoon rosemary',
          'salt'
      ],
      recipe_id: 4
    },
    {
      ingredient: [
          '1 cup chicken or vegetable broth',
          '4 oz cream cheese',
          '2 cloves garlic',
          '1 bunch italian parsley',
          '4 caps portobello mushrooms',
          '1 shallot',
          '1.5 lb striploin steak',
          '4 medium zucchini',
          'black pepper',
          '10 teaspoons butter',
          '4 teaspoons Dijon mustard',
          'salt',
          ' 1 teaspoon thyme'
      ],
      recipe_id: 5
    },
    {
      ingredient: [
          '4 chicken thighs',
          '2 tablespoons lemon pepper seasoning',
          '1 tablespoon cooking oil',
          '2 cloves garlic',
          '2 cups chicken broth',
          '1/4 cup chopped parsley',
          '1.5 cups orzo',
          '2 oz feta, crumbled'
      ],
      recipe_id: 6
    },
    {
      ingredient: [
          '12 ounce Yukon Gold Potatoes',
          '1 Long Green Pepper',
          '2 tablespoon Sour Cream',
          '10 ounce Chicken Breast Strips',
          '1 cup Chicken Stock Concentrate',
          '1/2 cup Mozzarella Cheese',
          '1 Yellow Onion',
          '2 tablespoon Mayonnaise',
          '1 teaspoon Garlic Powder',
          '1 tablespoon Italian Seasoning',
          '2 Hoagie Rolls',
          '2 tablespoon Cooking Oil',
          '2 tablespoon Butter',
          'Salt & Pepper'
      ],
      recipe_id: 7
    },
    {
      ingredient: [
          '10-12 oz bag of Cauliflower Rice',
          '1 1/2 cups cooked Quinoa',
          '1 cup Panko Breadcrumbs',
          '2 eggs',
          '1-2 teaspoons Paprika',
          '1 teaspoon of Salt',
          'Olive Oil'
      ],
      recipe_id: 8
    },
    {
      ingredient: [
          '1-1/2 cups uncooked penne pasta',
          '1 pound boneless skinless chicken breasts, cut into 1-inch cubes',
          '1/2 cup chopped onion',
          '2 teaspoons olive oil',
          '1 can (10-3/4 ounces) condensed cream of mushroom soup, undiluted',
          '1 cup heavy whipping cream',
          '10 cups coarsely chopped fresh spinach',
          '2 cups shredded part-skim mozzarella cheese',
          '1/8 teaspoon pepper',
          'Optional: crushed red pepper flakes and parmesan cheese'
      ],
      recipe_id: 9
    },
    {
      ingredient: [
          '4 teaspoons canola oil, divided',
          '1/4 cup chopped onion',
          '1 tablespoon finely chopped jalapeno pepper',
          '1/2 pound uncooked shrimp, peeled, deveined and chopped',
          '1/4 teaspoon ground cumin',
          '1/8 teaspoon pepper',
          '1/4 cup chopped tomato',
          '4 flour tortillas (6 inches)',
          '1/2 cup shredded Mexican cheese blend'
      ],
      recipe_id: 10
    },
    {
      ingredient: [
          '1.5 lbs. steak, cubed',
          '1 lbs. gold or baby potatoes',
          '3 corn on the cob',
          '1/2 cup salted butter',
          '4 garlic cloves ',
          '2 tsp. salt',
          '1/2 tsp. pepper',
          '1 tsp. paprika',
          '1 tsp. thyme',
          '1/2 tsp. rosemary',
          '1/2 tsp. onion powder'
      ],
      recipe_id: 11
    },
    {
      ingredient: [
          '3/4 cup canola oil',
          '1/4 cup lemon juice',
          '2 garlic cloves, minced',
          '1/2 teaspoon salt',
          '1/2 teaspoon pepper',
          '2 bunches (1 pound each) romaine, torn',
          '2 cups chopped tomatoes',
          '1/2 cup shredded Swiss cheese',
          '2 cans (5 ounces each) chunk light tuna in water, drained',
          '1/2 cup grated Parmesan cheese',
          'Optional: Crumbled cooked bacon and Caesar salad croutons'
      ],
      recipe_id: 12
    },
    {
      ingredient: [
          '2 cups diced baby red potato',
          '3 cups trimmed and halved green beans',
          '1 large head of broccoli',
          '1 1/2 chopped bell peppers',
          '13 ounces smoked sausage',
          '6 tablespoons olive oil',
          '1/4 teaspoon red pepper flakes, optional ',
          '1 teaspoon paprika',
          '1/2 teaspoon garlic powder',
          '1 tablespoon EACH: dried oregano, dried parsley',
          'Salt & pepper',
          'Serve with: fresh parsley, quinoa/rice, lots of freshly grated Parmesan cheese'
      ],
      recipe_id: 13
    },
    {
      ingredient: ['Sirloin Steak', 'Cooking Oil', 'Red Onion', 'Green Onions'
      , 'Tomato', 'Black Pepper', 'Salt', 'Ginger', 'Soy Sauce', 'Spaghetti'],
      recipe_id: 14
    },
    {
      ingredient: ['Sirloin Steak', 'Vegtable Oil','Olive Oil', 'Red Onion', 'Garlic Paste'
      , 'White Rice', 'Potato Slices', 'Salt', 'Black Pepper', 'Cilantro', 'Soy Sauce', 'Oregano', 'Cumin'],
      recipe_id: 15
    },
    {
      ingredient: ['Olive Oil', 'Red Onion', 'Baby Spinach', 'Basil', 'Queso Blanco'
      , 'Garlic paste', 'Salt', 'Black Pepper', 'Spaghetti'],
      recipe_id: 16
    },
    {
      ingredient: ['Pita Bread', 'Queso Blanco','Cooking Spray'],
      recipe_id: 17
    },
    {
      ingredient: ['Eggs', 'Chicken', 'Ginger', 'Garlic', 'Red Pepper', 'Uncooked Rice'
      ,'Soy Sauce', 'Green Onions', 'Vegtable', 'Salt'],
      recipe_id: 18
    },
    {
      ingredient: [
          '(serves four)',
          '4 large italian sausages',
          '3 large bell peppers (any color), sliced',
          '1 large onion, sliced (approx same size strips as peppers)',
          'oil',
          '1/4 cup balsamic vinegar (or any type)',
          '1 TBSP sugar',
          'pinch salt',
          'pinch pepper',
          'fresh thyme',
      ],
      recipe_id: 19
    },
    {
      ingredient: [
          '(vegetarian option -- use plant-based sausage)',
          '(serves two)',
          '3 medium-sized Yukon gold potatoes, chopped into half-inch chunks',
          '2 sausages',
          '1 large shallot, thinly sliced',
          '1.5 TBSP Marmite (for gravy)',
          '2 TBSP corn starch',
          'splash of vinegar (any type)',
          'black pepper',
          'salt',
          '1 bunch green onions, thinly sliced',
          'butter',
          'milk',
      ],
      recipe_id: 20
    },

]

const seedIngredient = () => Ingredient.bulkCreate(ingredientData);

module.exports = seedIngredient;
