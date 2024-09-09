import { createContext, useState } from "react";
import { Properties } from "../database/db";
import { contextChilder } from "../types/types";

type propertyCopntextValue = {
  properties: Properties[];
  setProperties: React.Dispatch<React.SetStateAction<Properties[]>>;
};

export const propertyContext = createContext<propertyCopntextValue>(
  {} as propertyCopntextValue
);

const PropertiesContext = ({ children }: contextChilder) => {
  const [properties, setProperties] = useState([] as Properties[]);
  return (
    <propertyContext.Provider value={{ properties, setProperties }}>
      {children}
    </propertyContext.Provider>
  );
};

export default PropertiesContext;
