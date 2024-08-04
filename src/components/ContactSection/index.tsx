import { useGetContacts } from "../../hooks/useGetContacts";
import { ContactScreenEnums } from "../../types";
import ContactsList from "./ContactsList";
import CreateContact from "./CreateContact";
import EmptyWrapper from "./EmptyWrapper";

const ContactSection = () => {
  const { contactScreenStr } = useGetContacts();

  // use Object or Map for faster access of React Elements since object key accessing is super fast, instead of switch cases
  const renderComp: Record<ContactScreenEnums, React.ReactElement> = {
    EMPTY: <EmptyWrapper />,
    CREATE: <CreateContact />,
    EDIT: <CreateContact isEditPage />,
    LIST: <ContactsList />,
  };
  return renderComp[contactScreenStr as ContactScreenEnums] || <EmptyWrapper />;
};

export default ContactSection;
