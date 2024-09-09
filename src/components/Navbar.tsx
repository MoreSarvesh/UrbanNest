import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { userContext } from "../context/UserContext";

type NavbarProps = {
  onOpenCart: () => void;
};

const Navbar = ({ onOpenCart }: NavbarProps) => {
  const { user, cart } = useContext(userContext);

  return (
    <nav className="fixed z-20 bg-white w-full flex justify-between p-4 pt-8 border-b-2">
      <div className="font-mono font-semibold text-3xl">
        <NavLink to="/">UrbanNest</NavLink>
      </div>
      <div className="">
        {user && (
          <div className="flex gap-8">
            <div>{user}</div>
            <button
              className="border-2 rounded-full bg-gray-600 text-white px-4 py-2"
              onClick={onOpenCart}
            >
              C
            </button>
            <div className="absolute bg-black text-white border-2 rounded-full px-2  top-4 right-2 text-xl ">
              {cart.length}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
