import { Link } from "react-router-dom";
import { SIDEBAR_CONTENT } from "../contants";
const Sidebar = () => {
  return (
    <div className="sm:pt-10 p-2 sm:p-5 place-content-center sm:justify-start h-20 sm:h-[100%] flex sm:flex-col gap-5 bg-slate-700 text-white ">
      {SIDEBAR_CONTENT.map((d) => (
        <Link to={d.path} key={d.name} className="flex items-center gap-2">
          {d.icon}
          <p className="text-sm sm:text-xl">{d.name}</p>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
