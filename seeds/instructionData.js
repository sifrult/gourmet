const { Instruction } = require('../models');

const instructionData = [
    {
        instruction: 'Set oven to 350',
        recipe_id: 1
    },

]

const seedInstruction = () => Instruction.bulkCreate(instructionData);

module.exports = seedInstruction;
