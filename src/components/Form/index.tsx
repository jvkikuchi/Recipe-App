import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {
  VStack,
  FormControl,
  Heading,
  Input,
  Button,
  Text,
  HStack,
} from 'native-base';
import {RecipeType} from '../../../data';

type FormProps = {
  recipesData: RecipeType[];
  setRecipes: React.Dispatch<React.SetStateAction<RecipeType[]>>;
};

export const Form: React.FC<FormProps> = ({recipesData, setRecipes}) => {
  const [nameFilter, setNameFilter] = useState('');

  const handleFilter = () => {
    setRecipes(
      recipesData.filter(recipe =>
        recipe.name.toLowerCase().includes(nameFilter.toLowerCase()),
      ),
    );

    Keyboard.dismiss();
  };

  const handleReset = () => {
    setNameFilter('');
    setRecipes(recipesData);
  };

  return (
    <VStack
      borderBottomStyle={'solid'}
      borderBottomWidth={2}
      borderBottomColor={'coolGray.400'}
      alignItems="center">
      <Heading>Wonderful Recipes App</Heading>
      <FormControl marginBottom={5}>
        <VStack alignItems="center" width="100%" space={5}>
          <FormControl.Label>Filter by name</FormControl.Label>
          <Input
            maxWidth={200}
            placeholder="Name"
            value={nameFilter}
            onChangeText={setNameFilter}
          />
          <HStack space={5}>
            <Button onPress={handleFilter} variant="outline">
              <Text>Filter</Text>
            </Button>
            <Button onPress={handleReset} variant="outline">
              <Text>Reset</Text>
            </Button>
          </HStack>
        </VStack>
      </FormControl>
    </VStack>
  );
};
