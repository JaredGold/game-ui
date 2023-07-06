import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InventoryState {
  [key: string]: number;
}

const initialState: InventoryState = {};

const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    addItem: (
      state: InventoryState,
      {
        payload: { itemId, amount = 1 },
      }: PayloadAction<{ itemId: number; amount?: number }>
    ) => {
      return {
        ...state,
        [itemId]: (state[itemId] || 0) + amount,
      };
    },
    removeItem: (
      state: InventoryState,
      {
        payload: { itemId, amount = 1 },
      }: PayloadAction<{ itemId: number; amount?: number }>
    ) => {
      if (state[itemId]) {
        if (state[itemId] - amount <= 0) {
          delete state[itemId];
        } else {
          state[itemId] -= amount;
        }
      }
    },
  },
});

export const { addItem, removeItem } = inventorySlice.actions;

export default inventorySlice.reducer;
