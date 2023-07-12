import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Heading,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAppDispatch } from "../../state/hooks";
import { addItem } from "../../state/slices/inventory/inventorySlice";
import { Item, nullItem } from "../../utils/Types";
import { foragingItems } from "./foragingItems";

const Forage = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const dispatch = useAppDispatch();
  const toast = useToast();

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

      toast({
        title: "Item Found",
        description: foundItem.itemName,
        status: "success",
        duration: 3000,
        isClosable: true,
        variant: "solid",
        position: "bottom",
        render: () => (
          <Box
            p={4}
            bg="purple.500"
            color="white"
            borderRadius="xl" // Set the borderRadius to "xl" for rounded corners
            display="flex"
            alignItems="center"
          >
            <Box ml={3}>
              <Heading size="sm" fontWeight="bold">
                Item Found
              </Heading>
              <Box fontSize="sm">{foundItem.itemName}</Box>
            </Box>
          </Box>
        ),
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
    </Box>
  );
};

export default Forage;
