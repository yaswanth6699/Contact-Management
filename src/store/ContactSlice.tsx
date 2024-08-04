import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ContactScreenEnums, ContactType, InitialContactTypes } from "../types";

const initialState: InitialContactTypes = {
  contacts: [],
  contactScreen: ContactScreenEnums.EMPTY,
  selectedData: {},
};

export const ContantSlice = createSlice({
  name: "Contact Management",
  initialState,
  reducers: {
    toggleContactScreen: (state, action: PayloadAction<ContactScreenEnums>) => {
      state.contactScreen = action.payload;
    },
    getInitialContactScreen: (state) => {
      state.contactScreen =
        state.contacts.length === 0
          ? ContactScreenEnums.EMPTY
          : ContactScreenEnums.LIST;
    },
    addContactToList: (state, action: PayloadAction<ContactType>) => {
      state.contacts.push(action.payload);
    },
    toggleDeleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter((d) => d.uuid !== action.payload);
      if (state.contacts.length === 0)
        state.contactScreen = ContactScreenEnums.EMPTY;
    },
    toggleSelectContact: (state, action: PayloadAction<string>) => {
      state.selectedData = state.contacts.filter(
        (d) => d.uuid === action.payload
      )?.[0];
    },
    toggleEditContact: (state, action: PayloadAction<ContactType>) => {
      const updatedContact = action.payload;

      state.contacts = state.contacts.map((contact) => {
        if (contact.uuid === updatedContact.uuid) {
          return {
            ...updatedContact,
          };
        }
        return contact;
      });
      state.selectedData = {};
    },
  },
});

export const {
  toggleContactScreen,
  getInitialContactScreen,
  addContactToList,
  toggleDeleteContact,
  toggleSelectContact,
  toggleEditContact,
} = ContantSlice.actions;

export default ContantSlice.reducer;
