export enum ItemRarity {
  Trash = "Trash", // Grey
  Common = "Common", // White
  Uncommon = "Uncommon", // Green
  Rare = "Rare", // Blue
  Epic = "Epic", // Purple
  Master = "Master", // Pink
  Legendary = "Legendary", // Yellow
  Divine = "Divine", // Rainbow
}

export const itemCategories = [
  "crafting",
  "trash",
  "equipment",
  "weapon",
  "tool",
  "test",
] as const;
export type ItemCategory = (typeof itemCategories)[number];

export type Item = {
  itemId: number;
  itemName: string;
  category: ItemCategory;
  description: string;
  value: number;
  rarity: ItemRarity;
  seed?: number;
};

export const nullItem: Item = {
  itemId: 0,
  itemName: "null",
  category: "test",
  description: "null",
  value: 0,
  rarity: ItemRarity.Trash,
  seed: 0,
};
