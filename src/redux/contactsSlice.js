// === Lib modules ===
import { createSlice } from "@reduxjs/toolkit";

// ===data===
import data from "../data/data.json";

const INITIAL_STATE = {
  items: data,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload,
      );
    },
  },
});

// === Actions creator ===

export const { addContact, deleteContact } = contactsSlice.actions;

// === Reducers ===

export const contactsReducer = contactsSlice.reducer;

// === Selectors ===

export const selectContacts = (state) => state.contacts.items;
