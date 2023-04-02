interface Ingredient {
  ingredient: string;
  quantity: string;
}

export type RecipeType = {
  name: string;
  serves: string;
  ingredients: Ingredient[];
  cookTime: string;
  steps: string[];
  imageUrl: string;
  category: string;
};

export const recipesData: RecipeType[] = [
  {
    name: 'Pan-Seared Salmon',
    category: 'seafood',
    imageUrl:
      'https://www.healthyseasonalrecipes.com/wp-content/uploads/2022/11/crispy-seared-salmon-hero-sq-32-640x480.jpg',
    serves: '4',
    ingredients: [
      {ingredient: 'salmon fillets', quantity: '4, 6 oz each'},
      {ingredient: 'salt', quantity: '1 tsp'},
      {ingredient: 'black pepper', quantity: '1/2 tsp'},
      {ingredient: 'paprika', quantity: '1/2 tsp'},
      {ingredient: 'garlic powder', quantity: '1/2 tsp'},
      {ingredient: 'olive oil', quantity: '2 tbsp'},
      {ingredient: 'lemon, cut into wedges', quantity: '1'},
    ],
    cookTime: '15 min',
    steps: [
      'In a small bowl, combine the salt, black pepper, paprika, and garlic powder',
      'Season both sides of the salmon fillets with the spice mixture',
      'Heat the olive oil in a large skillet over medium-high heat',
      'Once the oil is hot, add the salmon fillets to the skillet, skin-side up',
      'Cook for 4-5 minutes on one side, then flip and cook for an additional 3-4 minutes on the other side',
      'Remove the salmon from the skillet and serve hot, garnished with lemon wedges',
    ],
  },
  {
    name: 'Grilled Steak with Chimichurri Sauce',
    category: 'steak',
    imageUrl:
      'https://i1.wp.com/www.sweetteaandthyme.com/wp-content/uploads/2016/05/Churrasco-social-hero.jpg?resize=720%2C720&ssl=1',
    serves: '4',
    ingredients: [
      {ingredient: 'ribeye steaks', quantity: '4 (1 inch thick)'},
      {ingredient: 'olive oil', quantity: '3 tbsp'},
      {ingredient: 'garlic, minced', quantity: '3 cloves'},
      {ingredient: 'red wine vinegar', quantity: '2 tbsp'},
      {ingredient: 'fresh parsley, finely chopped', quantity: '1/4 cup'},
      {ingredient: 'fresh oregano, finely chopped', quantity: '1 tbsp'},
      {ingredient: 'fresh basil, finely chopped', quantity: '1 tbsp'},
      {ingredient: 'crushed red pepper flakes', quantity: '1/4 tsp'},
      {ingredient: 'salt', quantity: 'to taste'},
      {ingredient: 'black pepper', quantity: 'to taste'},
    ],
    cookTime: '20 min',
    steps: [
      'Preheat the grill to medium-high heat',
      'Season the steaks with salt and black pepper on both sides',
      'Grill the steaks for 4-5 minutes on each side, or until desired doneness',
      'Remove the steaks from the grill and let them rest for 5 minutes',
      'Meanwhile, in a small bowl, whisk together olive oil, garlic, red wine vinegar, parsley, oregano, basil, red pepper flakes, salt, and black pepper to make the chimichurri sauce',
      'Slice the steaks and serve them with the chimichurri sauce on top',
    ],
  },
  {
    name: 'Spaghetti Carbonara',
    serves: '4',
    category: 'pasta',
    imageUrl:
      'https://realfood.tesco.com/media/images/1400x919-SpaghettiCarbonara-557b6ff5-c4f3-4565-ae8e-a506f7dcc415-0-1400x919.jpg',
    ingredients: [
      {ingredient: 'spaghetti', quantity: '400g'},
      {ingredient: 'pancetta', quantity: '150g'},
      {ingredient: 'eggs', quantity: '4'},
      {ingredient: 'pecorino cheese', quantity: '100g'},
      {ingredient: 'salt', quantity: 'to taste'},
      {ingredient: 'black pepper', quantity: 'to taste'},
    ],
    cookTime: '20 min',
    steps: [
      'Cook spaghetti according to package instructions',
      'Cut pancetta into small pieces and fry in a pan over medium heat until crispy',
      'Beat eggs and mix in grated pecorino cheese',
      'Drain cooked spaghetti and add to the pan with pancetta',
      'Remove from heat and add egg and cheese mixture, stirring constantly',
      'Season with salt and black pepper to taste',
      'Serve immediately',
    ],
  },
  {
    name: 'Chicken Curry',
    serves: '6',
    category: 'chicken',
    imageUrl:
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/easy-chicken-curry-aa22a0b.jpg?quality=90&webp=true&resize=440,400',
    ingredients: [
      {ingredient: 'chicken breast', quantity: '1kg'},
      {ingredient: 'onion', quantity: '1'},
      {ingredient: 'garlic', quantity: '3 cloves'},
      {ingredient: 'ginger', quantity: '1 knob'},
      {ingredient: 'tomatoes', quantity: '4'},
      {ingredient: 'coconut milk', quantity: '400ml'},
      {ingredient: 'curry powder', quantity: '2 tbsp'},
      {ingredient: 'salt', quantity: 'to taste'},
      {ingredient: 'vegetable oil', quantity: '2 tbsp'},
      {ingredient: 'water', quantity: '1 cup'},
    ],
    cookTime: '30 min',
    steps: [
      'Cut chicken into small pieces and season with salt',
      'Chop onion, garlic, and ginger',
      'Heat vegetable oil in a large pan over medium heat',
      'Add chicken and cook until browned on all sides',
      'Remove chicken from pan and set aside',
      'Add onion, garlic, and ginger to the pan and cook until onion is translucent',
      'Add curry powder and cook for 1-2 minutes, stirring constantly',
      'Add chopped tomatoes and cook for 5 minutes',
      'Add coconut milk and water, and bring to a simmer',
      'Add chicken back to the pan and cook for 15-20 minutes, until chicken is cooked through',
      'Season with salt to taste',
      'Serve over rice',
    ],
  },
  {
    name: 'Roasted Chicken',
    category: 'chicken',
    serves: '4',
    imageUrl:
      'https://www.foodandwine.com/thmb/bpqN1qN41Fe5jSfDGQnjQHQIhEc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/200804-r-herb-roasted-chicken-d02d649f6e60441b8baf0bb5ef28fcdf.jpg',
    ingredients: [
      {ingredient: 'whole chicken', quantity: '1'},
      {ingredient: 'garlic', quantity: '1 head'},
      {ingredient: 'lemon', quantity: '1'},
      {ingredient: 'thyme', quantity: '5-6 sprigs'},
      {ingredient: 'rosemary', quantity: '3-4 sprigs'},
      {ingredient: 'olive oil', quantity: '2 tbsp'},
      {ingredient: 'salt', quantity: 'to taste'},
      {ingredient: 'black pepper', quantity: 'to taste'},
    ],
    cookTime: '1h 30 min',
    steps: [
      'Preheat oven to 425°F (220°C)',
      'Pat chicken dry with paper towels',
      'Season chicken inside and out with salt and black pepper',
      'Cut lemon in half and stuff inside chicken cavity with garlic, thyme, and rosemary',
      'Tie legs together with kitchen twine',
      'Rub olive oil all over chicken',
      'Place chicken in a roasting pan breast side up',
      'Roast in the oven for 1 hour 15 minutes or until internal temperature reaches 165°F (75°C)',
      'Let chicken rest for 10-15 minutes before carving',
    ],
  },
  {
    name: 'Vegetable Stir Fry',
    category: 'vegetables',
    imageUrl:
      'https://khinskitchen.com/wp-content/uploads/2022/05/Thai-stir-fry-vegetables-07.jpg',
    serves: '4',
    ingredients: [
      {ingredient: 'vegetable oil', quantity: '2 tbsp'},
      {ingredient: 'ginger', quantity: '1 tbsp, grated'},
      {ingredient: 'garlic', quantity: '2 cloves, minced'},
      {ingredient: 'broccoli florets', quantity: '2 cups'},
      {ingredient: 'carrots, sliced', quantity: '1 cup'},
      {ingredient: 'red bell pepper, sliced', quantity: '1'},
      {ingredient: 'green onions, sliced', quantity: '4'},
      {ingredient: 'soy sauce', quantity: '2 tbsp'},
      {ingredient: 'cornstarch', quantity: '2 tsp'},
      {ingredient: 'sesame oil', quantity: '1 tsp'},
      {ingredient: 'rice, cooked', quantity: '4 cups'},
    ],
    cookTime: '20 min',
    steps: [
      'In a wok or large skillet, heat vegetable oil over high heat',
      'Add grated ginger and minced garlic, and stir-fry for 30 seconds',
      'Add broccoli, carrots, and red bell pepper, and stir-fry for 2-3 minutes',
      'In a small bowl, whisk together soy sauce, cornstarch, and 1/4 cup of water',
      'Add the soy sauce mixture to the wok, and stir-fry for 1-2 minutes, until the sauce thickens',
      'Stir in sliced green onions and sesame oil',
      'Serve hot over cooked rice',
    ],
  },
  {
    name: 'Shrimp Scampi',
    category: 'seafood',
    imageUrl:
      'https://static01.nyt.com/images/2022/06/02/dining/ShrimpScampi_thumb/ShrimpScampi_thumb-master768.jpg',
    serves: '4',
    ingredients: [
      {ingredient: 'linguine', quantity: '1 pound'},
      {ingredient: 'butter', quantity: '4 tbsp'},
      {ingredient: 'olive oil', quantity: '2 tbsp'},
      {ingredient: 'garlic, minced', quantity: '4 cloves'},
      {ingredient: 'red pepper flakes', quantity: '1/4 tsp'},
      {ingredient: 'large shrimp, peeled and deveined', quantity: '1 pound'},
      {ingredient: 'salt', quantity: 'to taste'},
      {ingredient: 'black pepper', quantity: 'to taste'},
      {ingredient: 'fresh lemon juice', quantity: '1/4 cup'},
      {ingredient: 'fresh parsley, chopped', quantity: '1/4 cup'},
    ],
    cookTime: '20 min',
    steps: [
      'Cook linguine in a large pot of boiling salted water according to package instructions',
      'Meanwhile, in a large skillet, heat butter and olive oil over medium heat',
      'Add minced garlic and red pepper flakes, and sauté for 1-2 minutes',
      'Add shrimp to the skillet, and sauté for 2-3 minutes, until pink',
      'Season with salt and black pepper to taste',
      'Stir in fresh lemon juice and chopped parsley',
      'Drain linguine and add it to the skillet, tossing to coat with the sauce',
      'Serve hot, garnished with additional chopped parsley',
    ],
  },
];
