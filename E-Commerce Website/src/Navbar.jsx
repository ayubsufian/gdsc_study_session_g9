import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center p-1 bg-blue-500">
      <div className="flex items-center justify-center bg-red-900 text-md w-20 mr-4 ml-auto">
        <NavLink
          to="/cart"
          activeclassname="text-yellow-300 font-bold"
          className="text-white hover:text-yellow-300"
        >
          Cart
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
