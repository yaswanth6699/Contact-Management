import { IoIosContact } from "react-icons/io";
import { BUTTON_STYLE_CLASSNAME } from "../../contants";
import { useGetContacts } from "../../hooks/useGetContacts";
import { ContactType } from "../../types";
import { customEllipses } from "../../utils";

const ContactsList = () => {
  const {
    contacts,
    updateScreenToCreate,
    handleDeleteContact,
    handleSelectContact,
  } = useGetContacts();
  return (
    <div className="flex flex-col justify-center items-center gap-10 h-[90vh] sm:p-10 mt-2">
      <button className={BUTTON_STYLE_CLASSNAME} onClick={updateScreenToCreate}>
        Create Contact
      </button>
      <div className="grid grid-flow-row md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 overflow-auto">
        {contacts.map((d: ContactType) => (
          <div className="flex flex-col" key={d.uuid}>
            <div
              key={d.uuid}
              className="flex flex-col gap-1 border-2 p-5 items-center rounded-lg"
            >
              <IoIosContact fontSize={42} />
              <p>
                First Name: <b>{customEllipses(d.firstName)}</b>
              </p>
              <p>
                Last Name: <b>{customEllipses(d.lastName)}</b>
              </p>
              <p>
                Status: <b>{d.status}</b>
              </p>
            </div>
            <div className="flex justify-around mt-2">
              <button
                className="border rounded-md bg-green-400 p-2 w-20"
                onClick={() => handleSelectContact(d.uuid)}
              >
                Edit
              </button>
              <button
                className="border rounded-md bg-red-500 p-2 w-20"
                onClick={() => handleDeleteContact(d.uuid)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactsList;
