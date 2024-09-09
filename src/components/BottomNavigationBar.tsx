import { Link } from "react-router-dom";

const BottomNavigationBar = () => {
  return (
    <div className="flex justify-center gap-4 fixed w-[100%] left-0 bottom-0 z-10 h-16 text-2xl items-center bg-white">
      <Link to="/">Explore</Link>
      <Link to="/favourites">Favourites</Link>
    </div>
  );
};

export default BottomNavigationBar;
