import { createContext, useState } from "react";
import { contextChilder } from "../types/types";
import { Properties } from "../database/db";

type userContextValue = {
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
  cart: Properties[];
  setCart: React.Dispatch<React.SetStateAction<Properties[]>>;
};

export const userContext = createContext<userContextValue>(
  {} as userContextValue
);

const UserContext = ({ children }: contextChilder) => {
  const [user, setUser] = useState<string>("");
  const [cart, setCart] = useState([] as Properties[]);

  return (
    <userContext.Provider value={{ user, setUser, cart, setCart }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContext;
