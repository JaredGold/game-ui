import { Item, ItemRarity } from "../../Utils/Types";

const { Common, Trash } = ItemRarity;

// Order is important, filter goes through looking at the seed.
export const foragingItems: Item[] = [
  {
    itemNumber: 1,
    itemName: "Leaves",
    category: "trash",
    description: "A couple loose leaves, not much you can do with these.",
    value: 1,
    rarity: Trash,
    seed: 500,
  },
  {
    itemNumber: 2,
    itemName: "Rock",
    category: "crafting",
    description: "A plain grey rock",
    value: 3,
    rarity: Common,
    seed: 750,
  },
  {
    itemNumber: 3,
    itemName: "Stick",
    category: "crafting",
    description: "Just another stick",
    value: 3,
    rarity: Common,
    seed: 1000,
  },
];
