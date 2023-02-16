const { Instruction } = require('../models');

const instructionData = [
    {

        instruction: ['Set oven to 350', 'Put the chicken in', 'cook for 50 min'],
        recipe_id: 1
    },

]

const seedInstruction = () => Instruction.bulkCreate(instructionData);

module.exports = seedInstruction;
