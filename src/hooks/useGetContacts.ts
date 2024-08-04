import { useDispatch, useSelector } from "react-redux";
import {
  addContactToList,
  toggleContactScreen,
  toggleDeleteContact,
  toggleEditContact,
  toggleSelectContact,
} from "../store/ContactSlice";
import { ContactScreenEnums, ContactType, RootState } from "../types";

export const useGetContacts = () => {
  /*
    This custom hook acts as a middleware or a bridge between actual redux store and the components that are listening.
    instead of using dispatch for every redux action in particular component use this hook to create a new function which can be 
    easily used throughout the app.
    Also get required data from redux and store it here and use this custom hook for better code.
  */

  const dispatch = useDispatch();
  const contactsData = useSelector((state: RootState) => state.contactApp);
  const contactScreenStr: ContactScreenEnums = contactsData.contactScreen;
  const handleUpdateContactScreen = (val: ContactScreenEnums) => {
    dispatch(toggleContactScreen(val));
  };

  const handleAddContact = (val: ContactType) => {
    dispatch(addContactToList(val));
    handleUpdateContactScreen(ContactScreenEnums.LIST);
  };

  const updateScreenToCreate = () => {
    handleUpdateContactScreen(ContactScreenEnums.CREATE);
  };

  const handleDeleteContact = (id: string) => {
    dispatch(toggleDeleteContact(id));
  };

  const handleSelectContact = (id: string) => {
    dispatch(toggleSelectContact(id));
    handleUpdateContactScreen(ContactScreenEnums.EDIT);
  };

  const handleEditContact = (val: ContactType) => {
    dispatch(toggleEditContact(val));
    handleUpdateContactScreen(ContactScreenEnums.LIST);
  };

  return {
    ...contactsData,
    handleUpdateContactScreen,
    contactScreenStr,
    handleAddContact,
    updateScreenToCreate,
    handleDeleteContact,
    handleSelectContact,
    handleEditContact,
  };
};
