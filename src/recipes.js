import croquettes from './img/croquettes.png';
import carbonara from './img/carbonara.jpg';

export default [
  {
    name: 'Croquettes',
    image: croquettes,
    description:
      "Nonna's potato croquettes (my absolute favorite ever since I was little!)",
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
      'Dip each in flour, then eggwhites, then roll in breadcrumbs',
      'Fry at 375&deg;',
      'Serve hot (eat before Harris eats all of them)'
    ]
  },
  {
    name: 'Carbonara',
    image: carbonara,
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
  }
];
