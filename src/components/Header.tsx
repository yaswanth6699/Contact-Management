import { useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  const isGraphsPage = pathname.includes("/graphs");
  return (
    <h2 className="hidden sm:flex text-3xl  justify-center p-5 bg-blue-500 text-white">
      {isGraphsPage ? "Dashboard" : "Contact Form"}
    </h2>
  );
};

export default Header;
