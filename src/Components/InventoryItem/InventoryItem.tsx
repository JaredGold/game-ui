import { Box, Text } from "@chakra-ui/react";
import { Item, ItemRarity } from "../../utils/Types";

interface InventoryItemProps {
  item: Item;
  amount: number;
}

const InventoryItem: React.FC<InventoryItemProps> = ({ item, amount }) => {
  const { itemName, description, value, rarity } = item;

  let rarityColor = "white";
  let amountColor = "gray.600";

  switch (rarity) {
    case ItemRarity.Trash:
      rarityColor = "gray.500";
      break;
    case ItemRarity.Common:
      rarityColor = "white";
      break;
    case ItemRarity.Uncommon:
      rarityColor = "green.500";
      break;
    case ItemRarity.Rare:
      rarityColor = "blue.500";
      break;
    case ItemRarity.Epic:
      rarityColor = "purple.500";
      break;
    case ItemRarity.Master:
      rarityColor = "pink.500";
      break;
    case ItemRarity.Legendary:
      rarityColor = "yellow.500";
      break;
    case ItemRarity.Divine:
      rarityColor = "rainbow.500";
      break;
    default:
      break;
  }

  return (
    <Box
      borderRadius="md"
      bg="gray.700"
      p={3}
      position="relative"
      textAlign="center"
    >
      <Text
        fontSize="xl"
        color="white"
        fontWeight="bold"
        mb={1}
        px={2}
        lineHeight="short"
      >
        {itemName}
      </Text>
      <Text fontSize="sm" color={rarityColor} fontStyle="italic" mb={1} px={2}>
        {rarity}
      </Text>
      <Text fontSize="xs" color="white" mb={2} px={2}>
        {description}
      </Text>
      <Box
        position="absolute"
        top={1}
        left={1}
        width="20px"
        height="20px"
        bg={amountColor}
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="50%"
      >
        <Text fontSize="xs" fontWeight="bold" color="white">
          {amount}
        </Text>
      </Box>
      <Box
        position="absolute"
        top={1}
        right={1}
        width="20px"
        height="20px"
        bg="yellow.500"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="50%"
      >
        <Text fontSize="xs" fontWeight="bold">
          {value}
        </Text>
      </Box>
    </Box>
  );
};

export default InventoryItem;
