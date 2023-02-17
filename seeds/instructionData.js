const { Instruction } = require('../models');

const instructionData = [
    {
        instruction: [
            'Breadcrumb topping: combine lemon zest, 4 TBSP grated parmesan cheese, fresh herbs. Mix these together then chop the mixture to further combine. Combine this mixture in a bowl w/ equal part breadcrumbs, stir together',
            'Grate all of the mozarella, set aside',
            'Prepare brussels sprouts by cutting off stem end and cutting into quarters. Set aside',
            'Slice carrots into approx. same size as brussels sprouts',
            'Bring a large pot of water to a boil, add pasta and cook 2-3 minutes less than box instructions -- it will soften more in the oven. Drain pasta',
            'Add vegetables to a sheet pan, salt and toss with oil. Add sheet pan to oven under broiler on high for about 5 mins',
            'Drain pasta, peel and dice shallots. Removed sheet pan from oven and add the shallots to the other vegetables.',
            'When vegetables look nearly done (test with fork) removed from oven. Add about 1/3 of the grated mozarella and the drained pasta to sheet pan. Toss to combine.',
            'Add dollops of ricotta cheese on top of the mixture, top with mozarella and bread crumbs. Drizzle with olive oil.',
            'Add back under broiler, cook until top is browned. Squeeze on juice of lemon. '

        ],
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
    {
        instruction: [
            'Wash and dry all produce.',
            'Peel and mince 2 cloves of garlic; place in a medium bowl.',
            'Juice lemon into the bowl, add 4t oil and spices. Whisk to combine the marinade.',
            'Pat pork chops dry with paper towels and place in a baking dish. Pour marinade over the chops, turn to coat, and set chops a side on a plate. Keep the bowl for following instructions.',
            'Peel and mince additional garlic; place in the bowl along with 2 t oil, 1T vinegar, and spices. Whisk to combine.',
            'Peel, halve, and thinly slice shallots. Trim and medium dice cucumber. Medium dice tomatoes. Thinly slice olives. Add all to the bowl and stir to combine. Set aside',
            'Preheat large skillet over medium-high heat.',
            'Once skillet is hot, add chops; pan-fry until golden brown on one side, 3-4 minutes.',
            'Flip chops and sprinkle the top side with half of the feta. Continue to pan-fry until cheese has softened and chops are cooked through, 3-4 minutes more. Remove from heat.',
            'Divide chops and salad between plates; top salad with reserved feta.'
        ],
        recipe_id: 4
    },
    {
        instruction: [
            'Wash and dry all produce.',
            'Trim zucchini and use a julienne peeler to make noodles; place in a medium bowl and set aside.',
            'Peel, halve, and thinly slice shallot; peel and micne garlic. Place both in a small bowl.',
            'Cut mushrooms in half, then slice crosswise into 1/4 inch thick pieces; add to the bowl with the shallot and garlic. Set aside.',
            'Preheat a large skillet over medium-high heat.',
            'While the skillet heats up, pat steak dry with paper towels, then slice crosswise into thin strips. Season with salt and pepper.',
            'Once skillet is hot, add 4 t butter and swirl to coat the bottom. Add steak strips and cook, stirring occasionally, until just cooked through, 3-4 minutes. Using tongs, transfer the steak to a plate and loosely cover with aluminum foil. Reserve skillet with juices for next step.',
            'Return the skillet  to medium heat, add 4 t butter, and swirl to coat the bottom. Add shallot, garlic, and mushrooms to the skillet; cook, stirring occasionally, until softened, 3-4 minutes.',
            'Meanwhile, cut cream cheese into small pieces.',
            'One the veggies are soft, add cream cheese, broth, Dijon, and spices to the skillet; stir to combine and bring the sauce to a simmer over medium-high heat. Once simmering, reduce heat to low and continue to cook, stirring occasionally, until sauce thickens, about 5 minutes.',
            'While the sauce simmers, preheat another large skillet over medium-high heat.',
            'Once the skillet is hot, add 2t butter and swirl to coat the bottom; add zucchini and 1/2 c water. Cook, stirring frequently, until just tender, 2-3 minutes. Remove from heat.',
            'Meanwhile, shave parsley leaves off the stems; discard stems and mince the leaves.',
            'When the sauce is done, return steak (and any accumulated juices) to the skillet; add parsley and stir to combine the beef stroganoff. Remove from heat.',
            'To serve, divide zucchini noodles and beef stroganoff between plates or bowls.'
        ],
        recipe_id: 5
    },
    {
        instruction: [
            'Blot the chicken thighs dry with a paper towel, then season both sides liberally with lemon pepper seasoning.',
            'Heat a large deep skillet over medium. Once hot, add the cooking oil. Add the seasoned chicken thighs, skin side down, and let them cook undisturbed until browned. Flip the chicken thighs and cook until browned on the second side. The chicken will be cooked most of the way through at this point, but will finish cooking when simmered with the orzo. Remove the chicken to a clean plate.',
            'While chicken is browning, mince carlic. After removing chicken from the skillet, turn the heat down to low, and add the garlic. Saute for about a minute.',
            'Add broth to the skillet and stir to dissolve the crispy browned bits from the bottom of the pan.',
            'Add the orzo and half of the chopped parsley. Stir to combine. Return the chicken to the skillet, skin side up.',
            'Place a lid on the skillet, turn the heat up to high, and let the broth come to a full boil, then turn the heat down to low. Let the skillet simmer on low for about 15 minutes, or until most of the broth has been absorbed.',
            'Fluff the orzo around the chicken a bit with a fork, then top with remaining parsley and feta.'
        ],
        recipe_id: 6
    },
    {
        instruction: [
            'Adjust racks to top and middle positions and preheat oven to 450 degrees.',
            'Cut potatoes into ½-inch-thick wedges. Halve, peel, and thinly slice onion. Halve, core, and thinly slice green pepper into strips.',
            'Toss potatoes on a baking sheet with a large drizzle of oil, salt, and pepper. Roast on top rack until golden brown and crispy, 20-25 minutes.',
            'In a small bowl, combine mayonnaise, sour cream, and half the garlic powder (you’ll use the rest later). Season with salt and pepper',
            'Heat a large drizzle of oil in a large pan over medium-high heat. Add onion and green pepper; cook, stirring occasionally, until softened and lightly browned, 5-7 minutes. Season with salt and pepper. Turn off heat; transfer to a plate.',
            'Slice baguettes lengthwise, stopping before you get all the way through; spread garlic butter onto cut sides. Place cut sides up on a second baking sheet. • Toast on middle rack until golden, 2-3 minutes.',
            'While veggies cook, in a second small microwave-safe bowl, combine 2 TBSP butter (4 TBSP for 4 servings) and remaining garlic powder; microwave until butter is just softened, 10-15 seconds. Stir to combine and season with salt and pepper; set aside. ',
            'While garlic buns toast, pat chicken dry with paper towels; season generously with salt and pepper.',
            'Heat a large drizzle of oil in pan used for veggies over medium-high heat. Add chicken and Italian Seasoning; cook, stirring, until chicken is browned and cooked through, 4-6 minutes.',
            'Stir in stock concentrate and 2 TBSP water (4 TBSP for 4 servings). Season with salt and pepper. Return cooked veggies to pan; stir to combine. Turn off heat.',
            'Spread bottom halves of toasted garlic buns with half the garlic sauce. Top with chicken and veggie mixture, then sprinkle with mozzarella. Return to middle rack until cheese melts, 2-3 minutes.',
            'Divide sandos and potatoes between plates. Serve with remaining garlic sauce on the side.'
        ],
        recipe_id: 7
    },
    {
        instruction: [
            'Preheat the oven to 400 degrees. Steam the cauliflower rice according to package directions in the microwave. Do the same for the quinoa so it’s warm and soft.',
            'Pulse the cauliflower and quinoa through a food processor until semi-smooth. Transfer mixture to a large mixing bowl and combine with all other ingredients.',
            'Stir until everything is incorporated. Roll into small balls (about one heaping tablespoon per ball was best).',
            'Brush generously with olive oil and bake for 20 minutes. Serve with yummy sauces, salads, bowls, or freeze for later!'
        ],
        recipe_id: 8
    },
    {
        instruction: [
            'Cook pasta according to package directions. Meanwhile, in a Dutch oven over medium heat, cook and stir chicken and onion in oil for 5 minutes or until chicken is no longer pink.',
            'Stir in soup and cream. Bring to a boil over medium heat. Reduce heat; simmer, uncovered, for 2 minutes. Stir in the spinach, cheese and pepper; cook for 1-2 minutes or until spinach is wilted and cheese is melted.',
            'Drain pasta; add to chicken mixture and toss to coat. If desired, sprinkle with parmesan and red pepper flakes.'
        ],
        recipe_id: 9
    },
    {
        instruction: [
            'Heat 2 teaspoons oil in a large nonstick skillet over medium heat; add onion and jalapeno. Cook and stir until tender, 3-5 minutes. Add shrimp, cumin and pepper; cook and stir until shrimp turn pink, 2-3 minutes. Transfer to a small bowl; stir in tomato.',
            'Add 1 teaspoon oil to the same skillet; add 1 tortilla. Top with half the cheese, half the shrimp mixture and 1 tortilla. Cook over medium heat until lightly browned, 2-3 minutes on each side; remove. Repeat with remaining 1 teaspoon oil, tortillas, cheese and shrimp mixture. Cut into wedges.'
        ],
        recipe_id: 10
    },
    {
        instruction: [
            'Add the halved corn to the side of the slow cooker.',
            'Add the potatoes to the other side.',
            'Next, add the cubed steak in the middle.',
            'In a small bowl melt the butter in the microwave, this will take about 30 seconds.',
            'Add the chopped garlic, salt, pepper, paprika, thyme, rosemary, and onion powder. Mix.',
            "Spoon this over the steak and potatoes. It's better to spoon it over instead of puring for the garlic cloves will all end up in one place if you pour.",
            'Place the lid on the slow cooker and cook on LOW for 5-6 hours or until the potatoes are tender. Serve with the garlic butter sauce from the slow cooker over everything.'
        ],
        recipe_id: 11
    },
    {
        instruction: [
            'In a jar with a tight-fitting lid, combine oil, lemon juice, garlic, salt and pepper; cover and shake well. Chill.',
            'In a large serving bowl, toss romaine, tomatoes, Swiss cheese, tuna, and Parmesan cheese.',
            'Shake dressing; pour over salad and toss. Add bacon and croutons, if desired; serve immediately.'
        ],
        recipe_id: 12
    },
    {
        instruction: [
            'PREP: Preheat the oven to 400 degrees F. Line a very large sheet pan (I use this 15x21 inch sheet pan) or 2 smaller pans with parchment paper and set aside.',
            'PREP VEGGIES: It is important to prep the veggies according to directions to ensure they all cook at the same rate. Wash and chop the unpeeled baby red potatoes. You want the pieces quite small. I halve the baby potatoes and then dice each half. This yields a total of 10-12 pieces per potato. Trim the green beans and then cut in half, chop the broccoli into florets, chop the peppers into 1-inch pieces, and coin the sausage in thick (1/2-inch) slices.',
            "OLIVE OIL AND SEASONINGS: Place all the veggies and sausage on the prepared sheet pan. Pour the olive oil and all the seasonings on top. Season to taste with salt and pepper (I add 1/2 teaspoon of salt and 1/4 teaspoon pepper to start with). Use your hands to toss and evenly coat all the veggies and sausage with seasonings. Space everything out so it has plenty of space to cook. If veggies are crammed/overlapping they'll steam instead of roast and will take longer to cook.",
            "BAKE: Bake 15 minutes, remove from the oven and flip/stir all the veggies around. Return to the oven and bake for another 10-15 minutes or until vegetables are crisp-tender.",
            "ENJOY: If desired, sprinkle freshly grated Parmesan cheese over the veggies and sausage as soon as they come out of the oven. (If you aren't adding the cheese, you'll likely need to add some more salt to the dish.) Add fresh parsley if desired and enjoy immediately. Serve over cooked rice or quinoa if desired."
        ],
        recipe_id: 13
    },
    {
        instruction: ['Set stove to medium heat with a wok and add oil'
        ,'Put the chicken in and cook for 5 mins'
        ,'add red onion and green onion (whites) and cook for 5 mins'
        ,'add tomatoes with salt and pepper and cook for 5 mins'
        ,'add ginger and soy sauce and cook for 5 mins', 'add chopped green onions and stir'
        ,'add boiled spaghetti, cook and stir for 3 mins'],
        recipe_id: 14
    },
    {
        instruction: ['Heat a pan, Fry potato slices in vegatable oil and set to the side until needed'
        , 'Cut steak into strips or cubes and marinate with cumin, garlic paste and salt for 10 mins before cooking'
        , 'Put a table spoon of olive oil to a wok with high heat and cook for 5 mins'
        , 'Add onion and fry for 1 min continously moving the wok'
        , 'add tomato and fry for 30 secs and then add the oregano and french fries for another 10 secs'
        , 'serve with white rice and decorate cilantro leaves'],
        recipe_id: 15
    },
    {
        instruction: ['Heat 1 tbsp of oil in a skillet over medium heat'
        ,'add onion and cook for 4 mins'
        ,'Boil water over high and add spinach and basil for 30 secs'
        ,'add spinach, basil with queso blanco and galric paste into food processor until smooth'
        ,' Cook spaghetti in the salted pot until soft'
        , 'drain water and mix cooked spaghetti with spinach mixture'],
        recipe_id: 16
    },
    {
        instruction: ['Heat a pan on medium heat'
        , 'Cut slices of queso blanco and cut pita open'
        , 'Put slices into the pita bread'
        , 'Add cooking spray to pan'
        , 'heat pita until desired result and flip until fully cooked'],
        recipe_id: 17
    },
    {
        instruction: ['Whisk eggs together and fry a bit of oil to make an omelet'
        , 'Boil the rice and put to the side'
        , 'Chop red peppers and spring onions'
        , 'Chop chicken into cubes'
        , 'Stir fry the chicken seasoned with grated ginger in a large frying pan'
        , 'Add chopped red pepper, green onion, and omelet squares and more grated ginger'
        , 'Add cooked rice and soy sauce, Stir-fry at a high heat until mixed evenly no longer than 5 mins'],
        recipe_id: 18
    },
    {
        instruction: [
            'Heat oil in a large pan over medium heat',
            'Add sausages to hot pan, cook on both sides until browned all over an almost cooked through in the middle',
            'Remove sausages from pan, slide them in half lengthwise',
            'Return to the pan, cut-side down, and cook until the cut-side is browned and done. Remove and set aside',
            'De-seed and slice peppers into strips, slice onion into strips approx. same size as the peppers',
            'Turn up heat to med-high, add peppers and onions into pan, saute the vegetables until tender, stirring constantly',
            'Pour in 1/4 cup vinegar and 1 TBSP sugar, stir to combine and coat all vegetables',
            'Add salt and pepper to taste',
            'Return sausages to pan to re-heat and coat with the oil/vinegar. Add fresh herbs (thyme). Stir to combine'

        ],
        recipe_id: 19
    },
    {
        instruction: [
            'Cover potatoes in water, bring to a boil, then heat and simmer until easily pierced with fork',
            'Heat oil in a pan over medium heat, saute shallots, stirring constantly, until carmelized',
            'Once shallots are done, remove from the pan and set aside',
            'Add sausages in to hot pan, cooking on medium until browned and cooked through (approx 7 minutes)',
            'Make a slurry with 2 TBSP corn starch and equal parts water, combining in small bowl and stirring',
            'Deglaze pan with 1/2 c water',
            'Add in 1.5 TBSP marmite, stir to combine',
            'Add the corn starch to the water in the pan, stirring constantly. Add onions back in. Stir gravy until it reduces and thickens up',
            'Once gravy is desired thickness, grind in black pepper and add in a splash of vinegar, stir',
            'Reduce heat to low and allow sausages and gravy to simmer until ready to serve',
            'Once potatoes are soft enough to pierce with a fork, drain them, then add 4 TBSP butter and splash of milk to the pot, and a pinch of salt',
            'Mash the potatoes all together, then add green onion and stir to combine',
            'Ready to serve'
        ],
        recipe_id: 20
    },
]

const seedInstruction = () => Instruction.bulkCreate(instructionData);

module.exports = seedInstruction;
