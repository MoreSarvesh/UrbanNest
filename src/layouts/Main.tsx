import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../context/UserContext";
import { Properties } from "../database/db";
import { propertyContext } from "../context/PropertiesContext";
import Cart from "../components/Cart";

type loaderData = {
  user: string;
  properties: Properties[];
  cart: Properties[];
};

export const mainLoader = () => {
  const data: loaderData = {
    user: localStorage.getItem("username") as string,
    properties: JSON.parse(localStorage.getItem("properties") as string),
    cart: JSON.parse(localStorage.getItem("cart") as string),
  };

  return data;
};

const Main = () => {
  const { user, properties, cart } = useLoaderData() as loaderData;

  const { setUser, setCart } = useContext(userContext);
  const { setProperties } = useContext(propertyContext);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);

  useEffect(() => {
    setUser(user);
  }, [user]);

  useEffect(() => {
    setCart(cart);
  }, [cart]);

  useEffect(() => {
    setProperties(properties);
  }, [properties]);

  return (
    <div>
      <Navbar onOpenCart={handleOpenCart} />
      <Cart isCartOpen={isCartOpen} onCartClose={handleCloseCart} />
      <Outlet />
    </div>
  );
};

export default Main;
