import React from 'react';

import {ScrollView, VStack} from 'native-base';

import {recipesData} from '../../../data';

import {RecipeComponent} from '../Recipe';

type RecipeListProps = {
  recipes: typeof recipesData;
};

export const RecipeList: React.FC<RecipeListProps> = ({recipes}) => {
  return (
    <ScrollView>
      <VStack space={10} marginTop={5} marginBottom={5}>
        {recipes.map(recipe => (
          <RecipeComponent
            key={recipe.imageUrl}
            name={recipe.name}
            cookTime={recipe.cookTime}
            serves={recipe.serves}
            ingredients={recipe.ingredients}
            steps={recipe.steps}
            category={recipe.category}
            imageUrl={recipe.imageUrl}
          />
        ))}
      </VStack>
    </ScrollView>
  );
};
