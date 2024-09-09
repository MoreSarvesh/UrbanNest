import { useContext } from "react";
import { Properties } from "../database/db";
import { propertyContext } from "../context/PropertiesContext";
import { userContext } from "../context/UserContext";

const Property = ({
  id,
  title,
  description,
  aminities,
  price,
  rating,
  fav,
}: Properties) => {
  const { properties, setProperties } = useContext(propertyContext);
  const { setCart } = useContext(userContext);

  const handelAddFavourite = () => {
    const updatedList = properties.filter((property) => property.id !== id);

    const newList = [
      ...updatedList,
      {
        id,
        title,
        description,
        aminities,
        price,
        rating,
        fav: !fav,
      },
    ];

    setProperties(newList);
    localStorage.setItem("properties", JSON.stringify(newList));
  };

  const handelPropertyBooking = () => {
    const newItem = {
      id,
      title,
      description,
      aminities,
      price,
      rating,
      fav,
    };

    setCart((prev) => {
      localStorage.setItem("cart", JSON.stringify([...prev, newItem]));
      return [...prev, newItem];
    });
  };

  return (
    <div className="p-4 border-2 rounded flex flex-col gap-4 my-8 text-lg">
      <div className="relative">
        <div className="bg-gray-500 h-[40vh]">img</div>
        <button
          className="absolute top-5 right-10"
          onClick={handelAddFavourite}
        >
          {fav ? <p>true</p> : <p>false</p>}
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          <span>{rating}/5</span>
        </div>
        <div className="">
          {/* <h2 className="font-bold text-xl">Aminities:</h2> */}
          <ul className="flex flex-wrap justify-evenly">
            <li>Rooms: {aminities.rooms}</li>
            <li>Beds: {aminities.beds}</li>
            <li>Bathrooms: {aminities.bathroom}</li>
          </ul>
        </div>
        <p>{description}</p>
      </div>
      <div className="flex flex-row flex-nowrap justify-between items-center">
        <h3 className="font-bold text-lg">{price}</h3>
        <button
          className="border-2 border-gray-800 rounded px-4 py-2 w-[40%] bg-black text-white"
          onClick={handelPropertyBooking}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Property;
