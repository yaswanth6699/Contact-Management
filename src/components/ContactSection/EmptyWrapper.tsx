import { ImCross } from "react-icons/im";
import { BUTTON_STYLE_CLASSNAME } from "../../contants";
import { useGetContacts } from "../../hooks/useGetContacts";
const EmptyWrapper = () => {
  const { updateScreenToCreate } = useGetContacts();
  return (
    <div className="flex flex-col items-center justify-center gap-10 h-[90vh]">
      <button className={BUTTON_STYLE_CLASSNAME} onClick={updateScreenToCreate}>
        Create Contact
      </button>
      <div className="text-xl flex items-center w-[90%] sm:w-[50%] gap-5 border-2 border-black-500 p-2 sm:p-10 bg-slate-300 rounded-lg">
        <ImCross fontSize={50} />
        <h3 className="text-center text-sm sm:text-2xl">
          No Contact Found Please add contact from Create Contact Button
        </h3>
      </div>
    </div>
  );
};

export default EmptyWrapper;
