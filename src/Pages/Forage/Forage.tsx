import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Item, nullItem } from "../../Utils/Types";
import { foragingItems } from "./foragingItems";

const Forage = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const startDisableTimeout = (time: number) => {
    // Enable the button after the specified time
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, time * 1000);

    setIsButtonDisabled(true);
  };

  const forageButtonClick = () => {
    if (!isButtonDisabled) {
      // Roll a random number between 1-1000
      const rolledNumber = Math.floor(Math.random() * 1000) + 1;

      let foundItem: Item = nullItem;

      for (const item of foragingItems) {
        if (rolledNumber <= item.seed) {
          foundItem = item;
          break; // Exit the loop after finding the item
        }
      }

      console.log(`Item Found: ${foundItem?.itemName}`);
      setItems([...items, foundItem]);

      startDisableTimeout(1);
    }
  };

  return (
    <Box p="4">
      <Heading>Forage</Heading>
      <Card maxW="48" mt="4">
        <CardBody>
          <Center>
            <Button
              maxW="44"
              colorScheme={isButtonDisabled ? "red" : "purple"}
              onClick={forageButtonClick}
            >
              Look around
            </Button>
          </Center>
        </CardBody>
      </Card>
      {items.length > 0 && (
        <>
          {/** remove this when inventory is working */}
          <Heading as="h4" size="md">
            Items Found:
          </Heading>
          {items.map((item, index) => (
            <Text key={index}>{item.itemName}</Text>
          ))}
        </>
      )}
    </Box>
  );
};

export default Forage;
