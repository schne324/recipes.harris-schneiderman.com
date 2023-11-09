import croquettes from './img/croquettes.png';
import carbonara from './img/carbonara.jpg';
import peanutChicken from './img/peanut-chicken.jpg';

export default [
  {
    name: "Nonna's Croquettes",
    image: croquettes,
    tags: ['italian'],
    description: "Nonna's potato croquettes",
    ingredients: [
      { amount: '2 lbs', value: 'old potatoes' },
      { amount: '4', value: 'egg yolks' },
      { amount: '4', value: 'egg whites' },
      { amount: '1/8 t', value: 'ground nutmeg' },
      { amount: 'to taste', value: 'salt + freshly ground pepper' },
      { amount: '4 cups', value: 'flour' },
      { value: 'fine dry breadcrumbs' }
    ],
    directions: [
      'Peel potatoes and cut into pieces',
      'Cook in boiling salted water (cover) until tender, but not mushy.',
      'Drain potatoes',
      'Over medium heat, shake the potatoes vigorously until all moisture has evaporated and they are very dry.',
      'Mash the potatoes',
      'Add egg yolks, salt, pepper, and nutmeg',
      'Mix well, until smooth',
      'Form oblong shaped pieces',
      'Dip each in flour, then egg whites, then roll in breadcrumbs',
      'Fry at 375&deg;',
      'Serve hot (eat before Harris eats all of them)'
    ]
  },
  {
    name: "Nonna's Carbonara",
    image: carbonara,
    tags: ['italian'],
    description:
      "Nonna's carbonara with bacon. So simple, so easy, so delicous.",
    ingredients: [
      { amount: '1 lb', value: 'pasta' },
      { amount: '1 lb', value: 'bacon' },
      { amount: '4', value: 'eggs' },
      { amount: 'to taste', value: 'butter' },
      { amount: 'to taste', value: 'salt' },
      { amount: 'to taste', value: 'pepper' },
      { amount: 'to taste', value: 'parmesan cheese' }
    ],
    directions: [
      'Cook pasta in boiling water (duh)',
      'Cook the bacon and save the grease',
      'Drain pasta and set aside',
      'In same pot, scramble eggs in butter and/or bacon grease',
      'Add pasta back in pot and add bacon, salt, pepper, and parmesan'
    ]
  },
  {
    name: 'Beef Tacos',
    tags: ['pressure cooker', 'mexican'],
    description: 'Simple classic beef tacos',
    ingredients: [
      { amount: '1 Tablespoon', value: 'Extra Virgin Olive Oil Extra Virgin' },
      { amount: '1lb', value: 'Ground beef' },
      { amount: '1 Tablespoon', value: 'Worcestershire Sauce' },
      { amount: '1.25 Cups', value: 'Beef Broth' },
      { amount: '2 teaspoons', value: 'Maseca Corn Flour' },
      { amount: '1 Tablespoon', value: 'Chili Powder mild' },
      { amount: '1 / 4 teaspoon', value: 'Garlic Powder' },
      { amount: '1 / 4 teaspoon', value: 'Onion Powder' },
      { amount: '1 / 4 teaspoon', value: 'Minced Onions dried' },
      { amount: '1 1 / 2 teaspoons', value: 'Ground Cumin ground' },
      { amount: '1 / 4 teaspoon', value: 'Dried Oregano' },
      { amount: '1 / 2 teaspoon', value: 'Paprika' },
      { amount: '1 / 16 teaspoon', value: 'Cayenne Pepper ground' },
      { amount: '3 / 4 teaspoon', value: 'Sea Salt or to taste' },
      {
        amount: '1 / 2 teaspoon',
        value: 'Freshly Ground Black Pepper or to taste'
      }
    ],
    directions: [
      'Select Sauté or Browning on your Pressure Cooker cooking pot and allow to fully heat.',
      'Add Olive Oil, ground Beef and 1 / 2 cup of broth / water. Break apart meat and Sauté until browned.',
      'Turn off Pressure Cooker and pour out excess water from meat.Scrape bits from bottom.',
      'Add all seasonings, Worcestershire Sauce and 3 / 4 cup of Broth or water and mix through.',
      'Lock on Lid and close Pressure Valve.',
      'Cook at High Pressure for 3 minutes.',
      'When Beep sounds, allow a 10 minute Natural Pressure Release.',
      'Open Lid and sprinkle Masa over meat mixture.Mix, while simmering until water has evaporated.'
    ]
  },
  {
    name: 'Chili',
    tags: ['pressure cooker', 'american'],
    description: 'Classic beef chili',
    ingredients: [
      { amount: '1', value: 'sweet onion, chopped' },
      { amount: '1', value: 'small green bell pepper, finely chopped' },
      { amount: '1', value: 'jalapeno pepper, seeded and finely chopped' },
      { amount: '2', value: 'cloves garlic, minced' },
      {
        amount: '2',
        value: '(14.5 ounce) cans dark red kidney beans, drained and rinsed'
      },
      { amount: '2', value: '(14.5 ounce) cans diced tomatoes, undrained' },
      { amount: '3 tablespoons', value: 'tomato paste' },
      { amount: '1 tablespoon', value: 'dark brown sugar' },
      { amount: '2 teaspoons', value: 'unsweetened cocoa powder' },
      {
        amount: '1 / 4 teaspoon',
        value: 'crushed red pepper flakes, or to taste'
      },
      { amount: '2 tablespoons', value: 'chili powder' },
      { amount: '2 teaspoons', value: 'ground cumin' },
      { amount: '1 / 2 teaspoon', value: 'kosher salt, or to taste' },
      { amount: '2 cups', value: 'water' }
    ],
    directions: [
      'Place the ground beef in the pressure cooker over medium high heat; cook until brown and crumbly, 8 to 10 minutes.Remove the ground beef, and drain off the excess fat.',
      'Return the open pressure cooker to the burner over medium heat, pour in the olive oil, and stir in the onion, green pepper, and jalapeno pepper.Cook and stir for 3 to 4 minutes, until the onion is translucent.Add the garlic, and cook and stir for about 30 more seconds.Return the meat to the pressure cooker; mix in the kidney beans, diced tomatoes, tomato paste, brown sugar, cocoa powder, red pepper flakes, chili powder, cumin, salt, and water.',
      'Lock the lid, bring the cooker up to pressure, reduce heat to maintain pressure, and cook for 8 minutes.Remove cooker from the heat, and let the pressure reduce on its own, 5 to 10 minutes.',
      'When the pressure is fully released, remove the lid, stir the chili, and serve.'
    ]
  },
  {
    name: 'Chili Meatballs',
    description: "Pete's chili balls",
    tags: ['american'],
    ingredients: [
      { type: 'heading', value: 'Meatballs' },
      { amount: '1/2 lb', value: 'ground beef' },
      { amount: '1/2 lb', value: 'ground lean pork' },
      { amount: '1', value: 'egg' },
      { amount: '1/4 cup', value: 'milk' },
      { amount: '1/3 cup', value: 'rice (uncooked)' },
      { amount: '1/4 cup', value: 'chopped onion' },
      { amount: '1/2 teaspoon', value: 'salt' },
      { amount: '1 1/2 teaspoon', value: 'chili powder' },
      { type: 'heading', value: 'Sauce' },
      { amount: '1 1-lb can (two cups)', value: 'canned tomatoes' },
      { amount: '1/4 cup', value: 'chopped onion' },
      { amount: '1/2 teaspoon', value: 'salt' },
      { amount: '1 1/2 teaspoon', value: 'chili powder' },
      { amount: '1/2 teaspoon', value: 'worcestershire sauce' }
    ],
    directions: [
      'Mix meats: Add egg, milk, rice, chopped onion, salt, and chili powder',
      'Form mixture into meatballs of desired size',
      'Brown meatballs in fat',
      'Set meatballs aside...',
      'Combine remaining ingredients in pot and heat to boil',
      'Drop meatballs in',
      'Reduce heat, cover and slowly cook for 1 hour'
    ]
  },
  {
    name: 'Garlic Sauce',
    description: 'Bomb ass garlic sauce for kebabs/gyros/whatever',
    tags: ['mediterranean'],
    ingredients: [
      { amount: '6ish', value: 'garlic cloves(just peel - no need to chop)' },
      { amount: '½ - 1', value: 'Lemon juice' },
      { amount: '½ teaspoon', value: 'salt' },
      { amount: '1', value: 'egg white' },
      { amount: '1 tablespoon', value: 'of oil' }
    ],
    directions: [
      'Pour all of the above shit into a blender',
      'Run blender until its starts getting thicker (once emulsion starts, you are in the clear!)',
      'Keep adding oil until it is just right'
    ]
  },
  {
    name: 'Tzatziki Sauce',
    description:
      'Tzatziki sauce for gyros and gyro accessories (pita bread, veggies, etc). Lasts about 4-5 days in tightly sealed bowl (refridgerator)',
    tags: ['greek'],
    ingredients: [
      { amount: '1 cup', value: 'Greek yogurt' },
      { amount: '1 cup', value: 'Shredded english cucumber' },
      { amount: '2', value: 'Garlic cloves' },
      { amount: '1', value: 'lemon, zested + 1 tablespoon juice' },
      { amount: '1 tablespoon', value: 'Olive oil' },
      { amount: '1 tablespoon', value: 'Fresh chopped dill' },
      { amount: '1/4 teaspoon', value: 'Salt' },
      { amount: '1/4 teaspoon', value: 'Pepper' }
    ],
    directions: [
      'Shred the cucumber with a cheese grater. Zest and juice the lemon. Then chop the dill and garlic.',
      'Set out a medium-sized mixing bowl. Add the yogurt, shredded cucumber, lemon zest, 1 tablespoon lemon juice, chopped dill, garlic, salt, and pepper.',
      'Mix well. Then salt and pepper as needed. You can also add additional lemon juice if you so desire.'
    ]
  },
  {
    name: 'Shredded Chicken Tacos',
    tags: ['pressure cooker', 'mexican'],
    description: 'Citrusy awesome shredded chicken tacos',
    ingredients: [
      { amount: '1 tbsp.', value: 'canola, vegetable or avocado oil' },
      {
        amount: '2 lbs.',
        value: 'boneless skinless chicken, cubed and lightly seasoned'
      },
      { amount: '1 / 2', value: 'yellow onion, thinly sliced' },
      { amount: '4', value: 'cloves garlic, minced' },
      { amount: '1 tsp.', value: 'chili powder' },
      { amount: '1 tsp.', value: 'cumin' },
      { amount: '1 / 2 tsp.', value: 'coriander' },
      { amount: '1 / 2 tsp.', value: 'paprika' },
      { amount: '1 / 2 tsp.', value: 'kosher sea salt' },
      { amount: '1 / 4 tsp.', value: 'oregano' },
      { amount: '2', value: 'oranges (juiced)' },
      { amount: '2', value: 'limes (juiced)' },
      {
        amount: '1 / 2',
        value:
          'jalapeño, minced (or a whole pepper if you prefer slightly spicier)'
      },
      { amount: '1/2 c.', value: 'fresh cilantro' }
    ],
    directions: [
      'Turn the pressure cooker on the SAUTE setting. Add oil and sear the chicken until golden brown.You will need to do this in two batches. Transfer chicken to a plate and set aside. Add the onions and cook until translucent, about 2-3 minutes, then add the garlic and cook for an additional minute.',
      'Add the chicken back into the pot. Season with chili powder, cumin, coriander, paprika, salt, and oregano. Add the orange juice, lime juice, jalapeño, and cilantro.',
      'Place the lid on the pressure cooker and cook on the high pressure setting for 12 minutes. After the chicken has fully cooked, carefully turn the steam release vent (or let it happen naturally) and let the pressure come down. Once the valve pops, remove the lid and turn the pressure cooker on SAUTE.',
      'Cook the chicken until the almost all of the remaining liquid is gone, or for crispy chicken, cook until the liquid is gone, then stir every 2-3 minutes for 6 minutes, taking care to not let the chicken burn.',
      'Using two forks, shred the chicken and toss with extra lime juice, if desired. Serve immediately.'
    ]
  },
  {
    name: 'Yellow Curry',
    tags: ['asian'],
    ingredients: [
      { amount: '1 tablespoon', value: 'oil' },
      { amount: '1 / 2', value: 'a yellow onion, sliced thinly' },
      {
        amount: '1 pound',
        value: 'boneless skinless chicken breasts, cut into bite - sized pieces'
      },
      { amount: '1 / 3 cup', value: 'yellow curry paste' },
      {
        amount: '10',
        value: 'baby golden yukon potatoes, cut into bite - sized pieces'
      },
      {
        amount: '1 14 - ounce can',
        value: 'coconut cream(it’s like coconut milk, but even more luscious)'
      },
      { amount: '1 / 2 – 1 cup', value: 'water' },
      { amount: '2 teaspoons', value: 'fish sauce(optional)' },
      { amount: '1–2 tablespoons', value: 'brown sugar(optional)' },
      { amount: 'cilantro and rice for serving' }
    ],
    directions: [
      'Heat the oil in a large pot over medium low heat. Add the onions and saute for a few minutes until the onions are fragrant and softened.Add the chicken and curry paste; saute for 3 - 5 minutes. Add the potatoes and stir to coat with the curry paste.',
      'Add the coconut cream and 1/2 cup water to the pot – simmer for 20-30 minutes or until the chicken and potatoes are fully cooked, adding more water depending on the consistency you want for the sauce.',
      'Stir in the fish sauce and brown sugar to really take it up a notch.Seriously – so good. Serve over rice.'
    ]
  },
  {
    name: 'Peanut Chicken',
    tags: ['pressure cooker', 'asian'],
    image: peanutChicken,
    ingredients: [
      '1 ½  lbs chicken breast, cut into 1 inch cubes, sprinkled with pinch of salt',
      '3 fat cloves garlic, rough chopped',
      '1 tablespoon fresh ginger, chopped(or use ginger paste)',
      '1 teaspoon oil',
      '1  x 13.5 ounce can coconut milk(liquid and solids)',
      '3 tablespoons soy sauce(or  use GF liquid amino acids)',
      '3 tablespoons honey(or coconut sugar or brown sugar)',
      '2 tablespoons fresh lime juice, more to taste',
      '1 tablespoon chili garlic paste(or sriracha, or sambal olek)',
      '½ cup peanut butter(or sub almond butter)'
    ],
    directions: [
      'Cut the chicken into 1 inch cubes, sprinkle with salt and set aside.',
      'If using an Instant Pot, set it to the sauté function, and sauté the ginger and garlic in a teaspoon of oil for 1-2 minutes, until fragrant. Add the coconut milk, soy sauce, honey, lime juice, chili paste and the chicken, everything except the peanut butter in the pot, and stir.  Drop the peanut butter in spoonfuls over top of the chicken (don’t stir it in).',
      'Set to HIGH Pressure, for 9 minutes. Naturally release. See notes. (If using thigh meat pressure cook for 12 minutes.)',
      'Once chicken is done cooking, taste a spoonful of the sauce. Adjust salt, lime, sweetness and spice level according to your taste. Some of you will want it sweeter. I usually add  more chili paste and lime. If the sauce seems too thin, reduce a bit using the sauté function ( while constantly stirring, to prevent burning the bottom). See notes.',
      'Serve over a bed of rice.'
    ]
  },
  {
    name: 'Salsa Verde Chicken',
    tags: ['pressure cooker', 'mexican'],
    ingredients: ['3/4 cup onion', '1 cup salsa verde', '2lb chicken breast'],
    directions: [
      'Add the onion, salsa verde and chicken to the Instant Pot. Cook thawed chicken on high pressure for 12 minutes. (Cook frozen chicken on high pressure for 20 minutes.) Turn the pressure valve to "Vent" to release all of the pressure.',
      'Remove the chicken breasts from the pot and place on a plate or cutting board. Shred the chicken using two forks',
      'Remove 2/3 cup of liquid from the pot. (Reserve the liquid for cooking rice.) Return the shredded chicken to pot and stir until well combined. Top chicken with green onions'
    ]
  },
  {
    name: 'Honey Teriyaki Chicken',
    tags: ['pressure cooker', 'asian'],
    ingredients: [
      '2/3 cup Teriyaki sauce',
      '1 Tbsp. honey',
      '1/4 cup chicken broth',
      '2 lb chicken breasts',
      'Green onions chopped'
    ],
    directions: [
      'Add the Teriyaki sauce and honey to the Instant Pot and whisk until well combined. Add the chicken broth and chicken. Cook thawed chicken on high pressure for 12 minutes. (Cook frozen chicken on high pressure for 20 minutes.) Turn the pressure valve to "Vent" to release all of the pressure.',
      'Remove the chicken breasts from the pot and place on a plate or cutting board. Shred the chicken using two forks.',
      'Remove 1/2 cup of liquid from the pot. (Reserve the liquid for cooking rice.) Return the shredded chicken to pot and stir until well combined. Top chicken with green onions.'
    ]
  },
  {
    name: 'Pulled pork',
    tags: ['slow cooker', 'bbq'],
    ingredients: [
      '1 teaspoon vegetable oil',
      '1 (4 pound) pork shoulder roast',
      '1 cup bbq sauce',
      '1/2 cup apple cider vinegar',
      '1/2 cup chicken broth',
      '1/4 cup light brown sugar',
      '1 tablespoon prepared yellow mustard',
      '1 tablespoon Worcestershire sauce',
      '1 tablespoon chili powder',
      '1 extra large onion, chopped',
      '2 large cloves garlic, crushed',
      '1 1⁄2 teaspoons dried thyme',
      '8 hamburger buns, split',
      '2 tablespoons butter, or as needed'
    ],
    directions: [
      'Pour the vegetable oil into the bottom of a slow cooker. Place the pork roast into the slow cooker; pour in the barbecue sauce, apple cider vinegar, and chicken broth. Stir in the brown sugar, yellow mustard, Worcestershire sauce, chili powder, onion, garlic, and thyme. Cover and cook on High until the roast shreds easily with a fork, 5 to 6 hours.',
      'Remove the roast from the slow cooker, and shred the meat using two forks. Return the shredded pork to the slow cooker, and stir the meat into the juices.',
      'Spread the inside of both halves of hamburger buns with butter. Toast the buns, butter side down, in a skillet over medium heat until golden brown. Spoon pork into the toasted buns.'
    ]
  },
  {
    name: 'Beef brisket',
    tags: ['pressure cooker', 'bbq'],
    ingredients: [
      '1.5 - 2 pounds (766g) beef brisket (2 inches thick)',
      '3 – 5 drops liquid smoke',
      '2 tablespoons (26g) brown sugar',
      '2 teaspoons (5g) chili powder',
      '2 teaspoons (4g) black pepper',
      '1 teaspoon (2.4g) onion powder',
      '1 teaspoon (2.8g) garlic powder',
      '1 teaspoon (3g) cinnamon powder',
      '1 teaspoon (6g) coarse kosher salt',
      '½ teaspoon (1g) cumin seed , ground',
      '½ teaspoon (1g) fennel seed , ground',
      '¼ teaspoon (0.5g) cayenne pepper',
      '1 (205g) medium onion , sliced',
      '3 garlic cloves , minced',
      '1 cup (250ml) ketchup',
      '½ cup (125ml) unsalted chicken stock or water',
      '1 tablespoon (15ml) maple syrup',
      '1 tablespoon (15ml) honey',
      '2 tablespoons (30ml) apple cider vinegar',
      '2 tablespoons (30ml) Dijon mustard',
      '1 tablespoon (13g) brown sugar'
    ],
    directions: [
      'Dry Rub Brisket: In a glass mixing bowl, mix dry rub ingredients together. Rub the dry rub mixture on the brisket, then let it marinate for at least 2 hours (preferably overnight, so the salt can penetrate into the meat).',
      'Pressure Cook Beef Brisket: Add sliced onion, minced garlic, 1 tbsp (15ml) maple syrup, 1 tbsp (15ml) honey, 2 tbsp (30ml) apple cider vinegar, 3 - 5 drops liquid smoke, and ½ cup (125ml) unsalted chicken stock to Instant Pot. Mix well. Add marinated brisket in Instant Pot. Pressure Cook at High Pressure for 75 minute and Natural Release for 15 minutes. Remove the lid carefully.',
      'Thicken Homemade BBQ Sauce: Carefully place cooked brisket on a chopping board and let it rest. If desired, use a fat separator to remove the oil from the BBQ sauce. Bring the BBQ sauce back to a simmer by pressing the "Cancel" button, then "Saute" button. Mix in 1 cup (250ml) ketchup, 2 tbsp (30g) Dijon mustard, and 1 tbsp (13g) brown sugar in Instant Pot. Let the BBQ sauce thicken by simmering for 8 - 15 minutes. Stir occasionally. Taste and adjust the seasoning with more salt if necessary.',
      'Serve Instant Pot Brisket with Yummy BBQ Sauce: Generously brush the addictively yummy BBQ sauce all over the brisket. If desired, use a blowtorch or oven (broil) to slightly caramelize the BBQ sauce on the brisket. Slice your brisket against the grain to maximize tenderness. If you didnt marinate the brisket long enough, sprinkle some salt on the sliced briskets to season them better. Serve with the awesome BBQ sauce. Your delicious & beautiful BBQ Brisket is ready to serve!'
    ]
  }
];
