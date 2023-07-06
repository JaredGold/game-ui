import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { addItem } from "../../state/slices/inventory/inventorySlice";
import { selectInventory } from "../../state/slices/inventory/selectors/inventory";
import itemDatabase from "../../utils/itemDatabase";

const Inventory = () => {
  const inventory = useAppSelector(selectInventory);
  const dispatch = useAppDispatch();

  const onClickHandler = (itemId: number) => {
    dispatch(addItem({ itemId }));
  };

  return (
    <Box p="4">
      <Heading>Inventory</Heading>
      <Button onClick={() => onClickHandler(1)}>Add Leaves</Button>
      <Button onClick={() => onClickHandler(2)}>Add Rock</Button>
      <Button onClick={() => onClickHandler(3)}>Add Stick</Button>
      {Object.entries(inventory).map(([key, ammount]) => {
        const { itemName, description, value, rarity } = itemDatabase[+key];
        return (
          <Card key={key} mt="4">
            <CardBody>
              <Center>
                <Text>Total: {ammount}</Text>
                <Text>Item Name: {itemName}</Text>
                <Text>Item Description: {description}</Text>
                <Text>Item Value:{value}</Text>
                <Text>Rarity: {rarity}</Text>
              </Center>
            </CardBody>
          </Card>
        );
      })}
    </Box>
  );
};

export default Inventory;
