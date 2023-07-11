import { Box, Grid, Heading } from "@chakra-ui/react";
import { useAppSelector } from "../../state/hooks";
import { selectInventory } from "../../state/slices/inventory/selectors/inventory";
import InventoryItem from "../../components/InventoryItem/InventoryItem";
import itemDatabase from "../../utils/itemDatabase";

const Inventory = () => {
  const inventory = useAppSelector(selectInventory);

  return (
    <Box p={4}>
      <Heading mb={4} size="lg">
        Inventory
      </Heading>
      <Grid templateColumns="repeat(auto-fill, minmax(120px, 1fr))" gap={4}>
        {Object.entries(inventory).map(([key, amount]) => {
          const item = itemDatabase[+key];

          return <InventoryItem key={key} item={item} amount={amount} />;
        })}
      </Grid>
    </Box>
  );
};

export default Inventory;
