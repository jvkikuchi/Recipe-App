import React, {useEffect, useState} from 'react';
import {NativeBaseProvider} from 'native-base';

import {RecipeList} from './src/components/RecipeList';
import {Form} from './src/components/Form';
import {recipesData, RecipeType} from './data';

function App(): JSX.Element {
  const [recipes, setRecipes] = useState<RecipeType[]>([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <NativeBaseProvider>
      <Form recipesData={recipesData} setRecipes={setRecipes} />
      <RecipeList recipes={recipes} />
    </NativeBaseProvider>
  );
}

export default App;
