import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  BUTTON_STYLE_CLASSNAME,
  CONTACT_CONTENT_DATA,
  TITLE_STYLE_CLASSNAME,
} from "../../contants";
import { useGetContacts } from "../../hooks/useGetContacts";
import { ContactType, InitialContactTypes } from "../../types";

const CreateContact = ({ isEditPage }: { isEditPage?: boolean }) => {
  const { handleAddContact, selectedData, handleEditContact } =
    useGetContacts();
  const [contactData, toggleContactData] = useState<ContactType>({
    firstName: selectedData.firstName ?? "",
    lastName: selectedData.lastName ?? "",
    status: selectedData.status ?? "",
    uuid: selectedData.uuid ?? "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isEditPage ? handleEditContact(contactData) : handleAddContact(contactData);
  };

  const handleChange = (name: string, val: string) => {
    toggleContactData((prev) => ({
      ...prev,
      [name]: val,
      uuid: contactData.uuid || uuidv4(),
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center gap-5 h-[90vh]"
    >
      <h2 className={TITLE_STYLE_CLASSNAME}>
        {isEditPage ? "Edit" : "Create"} Contact
      </h2>
      <div className="flex flex-col gap-4 border-2 rounded-md p-2 sm:p-10 text-xl border-slate-700">
        {CONTACT_CONTENT_DATA.map((d) => (
          <div
            className="grid sm:grid-cols-[1fr_2fr] grid-cols-[1fr_3fr] gap-2 items-center"
            key={d.name}
          >
            <label className="text-sm sm:text-xl">{d.label}</label>
            {d.isTextField && (
              <input
                className={d.className}
                type={d.type}
                name={d.name}
                required
                defaultValue={
                  selectedData[
                    d.name as keyof InitialContactTypes["selectedData"]
                  ] ?? ""
                }
                onChange={(e) => handleChange(e.target.name, e.target.value)}
              />
            )}
            <div className="flex gap-2">
              {d.children.length > 0 &&
                d.children?.map((child, i) => (
                  <div className="flex gap-2" key={i}>
                    <input
                      required
                      type={child.type}
                      name={child.name}
                      value={child.value}
                      defaultChecked={child.value === selectedData.status}
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    />
                    <label className="text-sm sm:text-xl">{child.label}</label>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      <button type="submit" className={BUTTON_STYLE_CLASSNAME}>
        {isEditPage ? "Save Editted Contact" : "Save Contact"}
      </button>
    </form>
  );
};

export default CreateContact;
