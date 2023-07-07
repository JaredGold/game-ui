import { ItemRarity, Item } from "./Types";

const { Common, Trash } = ItemRarity;

type ItemDatabase = {
  [itemId: number]: Item;
};

const itemDatabase: ItemDatabase = {
  1: {
    itemId: 1,
    itemName: "Leaves",
    category: "trash",
    description: "A couple loose leaves, not much you can do with these.",
    value: 1,
    rarity: Trash,
    seed: 500,
  },
  2: {
    itemId: 2,
    itemName: "Rock",
    category: "crafting",
    description: "A plain grey rock",
    value: 3,
    rarity: Common,
    seed: 750,
  },
  3: {
    itemId: 3,
    itemName: "Stick",
    category: "crafting",
    description: "Just another stick",
    value: 3,
    rarity: Common,
    seed: 1000,
  },
  4: {
    itemId: 4,
    itemName: "Wood",
    category: "crafting",
    description: "It was once a tree",
    value: 5,
    rarity: Common,
  },
};

export default itemDatabase;
