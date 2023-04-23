import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavoritesState = {
  ids: string[];
};

type AddFavoritePayload = {
  id: string;
};

type RemoveFavoritePayload = {
  id: string;
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  } as FavoritesState,
  reducers: {
    addFavorite: (state, action: PayloadAction<AddFavoritePayload>) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action: PayloadAction<RemoveFavoritePayload>) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
