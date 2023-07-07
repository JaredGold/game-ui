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
import { useAppDispatch } from "../../state/hooks";
import { addItem } from "../../state/slices/inventory/inventorySlice";
import { Item, nullItem } from "../../utils/Types";
import { foragingItems } from "./foragingItems";

const Forage = () => {
  const [foundItem, setFoundItem] = useState<Item>();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const dispatch = useAppDispatch();

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
        // TODO: Make this fail cleaner
        if (!item.seed) {
          throw new Error("Missing an item seed");
        }
        if (rolledNumber <= item.seed) {
          foundItem = item;
          break; // Exit the loop after finding the item
        }
      }

      dispatch(addItem({ itemId: foundItem.itemId }));
      setFoundItem(foundItem);

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
      {foundItem && (
        <>
          <Heading as="h4" size="md">
            Item Found:
          </Heading>
          <Text>{foundItem.itemName}</Text>
        </>
      )}
    </Box>
  );
};

export default Forage;
