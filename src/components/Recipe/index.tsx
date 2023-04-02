import React from 'react';
import {
  Box,
  Text,
  AspectRatio,
  Image,
  Center,
  Stack,
  Heading,
  HStack,
  Modal,
  VStack,
} from 'native-base';
import {User, List, Clock} from 'react-native-feather';
import {RecipeType} from '../../../data';

export const RecipeComponent: React.FC<RecipeType> = ({
  name,
  cookTime,
  serves,
  ingredients,
  steps,
  imageUrl,
  category,
}) => {
  const [showModal, setShowModal] = React.useState(false);

  const mapCategoryCollors = {
    seafood: 'blue.500',
    vegetables: 'green.400',
    pasta: 'yellow.400',
    chicken: 'orange.400',
    steak: 'red.400',
  };

  return (
    <Box alignItems="center">
      <Box
        maxW="80"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1">
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: imageUrl,
              }}
              alt={`${name} dish`}
            />
          </AspectRatio>
          <Center
            bg={mapCategoryCollors[category as keyof typeof mapCategoryCollors]}
            position="absolute"
            borderTopRightRadius={5}
            bottom="0"
            px="3"
            py="1.5">
            <HStack>
              <User stroke="black" fill="#030303" width={20} height={21} />
              <Text marginLeft={2} bold color="black">
                {serves}
              </Text>
            </HStack>
          </Center>
        </Box>
        <Stack p="4" space={2}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              {name}
            </Heading>
          </Stack>
          <Heading size="sm">Cooking Steps</Heading>
          {steps.map((step, index) => (
            <Text fontWeight="400" key={step}>
              {index + 1} - {step}
            </Text>
          ))}
          <HStack
            marginTop={4}
            alignItems="center"
            space={4}
            justifyContent="space-between">
            <List
              onPress={() => {
                setShowModal(true);
              }}
              stroke="black"
              fill="#0a0000"
              width={24}
              height={21}
            />
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
              <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header alignItems="center">Ingredients</Modal.Header>
                <Modal.Body>
                  <VStack alignItems="flex-start">
                    {ingredients.map(({ingredient, quantity}) => (
                      <Text key={ingredient} bold>
                        -{' '}
                        {ingredient.charAt(0).toUpperCase() +
                          ingredient.slice(1)}{' '}
                        ({quantity})
                      </Text>
                    ))}
                  </VStack>
                </Modal.Body>
              </Modal.Content>
            </Modal>
            <HStack space={2}>
              <Clock stroke="black" fill="#ffffff" />
              <Text color="black" fontWeight="400" bold>
                {cookTime}
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
  );
};
