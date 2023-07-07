import { Box, Card, CardBody, Center, Heading, Text } from "@chakra-ui/react";
import { useAppSelector } from "../../state/hooks";
import { selectInventory } from "../../state/slices/inventory/selectors/inventory";
import itemDatabase from "../../utils/itemDatabase";

const Inventory = () => {
  const inventory = useAppSelector(selectInventory);

  return (
    <Box p="4">
      <Heading>Inventory</Heading>
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
