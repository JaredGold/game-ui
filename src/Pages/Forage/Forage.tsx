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
import useBottomToast from "../../hooks/useBottomToast";
import { useAppDispatch } from "../../state/hooks";
import { addItem } from "../../state/slices/inventory/inventorySlice";
import { Item, nullItem } from "../../utils/Types";
import { foragingItems } from "./foragingItems";

const Forage = () => {
  const [foundItem, setFoundItem] = useState<Item | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const dispatch = useAppDispatch();
  const { showToast, Toast } = useBottomToast();

  const startDisableTimeout = (time: number) => {
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, time * 1000);

    setIsButtonDisabled(true);
  };

  const forageButtonClick = () => {
    if (!isButtonDisabled) {
      const rolledNumber = Math.floor(Math.random() * 1000) + 1;

      let foundItem: Item = nullItem;

      for (const item of foragingItems) {
        if (!item.seed) {
          throw new Error("Missing an item seed");
        }
        if (rolledNumber <= item.seed) {
          foundItem = item;
          break;
        }
      }

      dispatch(addItem({ itemId: foundItem.itemId }));
      setFoundItem(foundItem);
      showToast({
        title: "Item Found",
        text: foundItem.itemName,
        time: 1,
      });

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
      <Toast />
    </Box>
  );
};

export default Forage;
