const { Instruction } = require('../models');

const instructionData = [
    {

        instruction: ['Set oven to 350', 'Put the chicken in', 'cook for 50 min'],
        recipe_id: 1
    },
    {
        instruction: [
            'Wash and dry fresh produce',
            'Pour broth, oil, and sauces(2T soy sauce, 2t chili-garlic sauce) into a large pot and heat over medium-high',
            'Peel and mince garlic. Peel and mince or grate ginger. Add half of each to the pot and transfer the rest to a medium bowl.',
            'Shave cilantro leaves off the stems; discard the stems and mince the leaves. Transfer half to the medium bowl and set the other half aside in a small bowl.',
            'Trim and finely chop green onions. Add half to the medium bowl and half to the small bowl.',
            'Add pork, eggs, sauces (2t soy sauce, 1/2t worcestershire sauce), and pepper to the medium bowl and mix with your hands until well combined.',
            'Using a tablespoon measure, form the pork mixture into rounded meatballs and place on a plate.',
            'Once the broth begins to boil, turn down to a simmer. Carefully add the meatballs (a few at a time, to avoid splashing) to the pot. Simmer until pork is cooked through, 5-6 minutes.',
            'Meanwhile, trim bok choy and slice in half lengthwise. Add to the soup along with the remaining cilantro and green onion.',
            'Return soup to a simmer and cook until bok choy is tender, 4-5 minutes more.'
        ],
        recipe_id: 2
    },
    {
        instruction: [
            'Wash broccoli. Separate into bite-sized florets and cut stems into smaller pieces. Transfer to a plate.',
            'Heat a skillet over medium-high heat.',
            'Peel and thinly slice onion into half rings. Peel and mince garlic. Peel and mince or grate ginger.',
            'Thinly slice steak against the grain into strips.',
            'Coat bottom of skillet with 1T coconut oil. Add steak and stir fry until browned, 2-3 minutes. Transfer to a plate.',
            'Coat skillet with more oil (1T), then add onion, garlic, ginger, and crushed red pepper. Stir fry until onion is softened, 3-4 minutes.',
            'Add broccoli and stir fry until bright green and tender-crisp, 4-5 minutes.',
            'Add steak, 4T soy sauce, 1T sesame oil, and pepper; toss to combine.'
        ],
        recipe_id: 3
    },

]

const seedInstruction = () => Instruction.bulkCreate(instructionData);

module.exports = seedInstruction;
