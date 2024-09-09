import { useState } from "react";
import { Amenities, Properties } from "../database/db";
import BottomNavigationBar from "./BottomNavigationBar";
import Property from "./Property";
import SearchBar from "./SearchBar";
import FilterPopup from "./FilterPopUp";

type PropertyListProps = {
  dataList: Properties[];
};

export type Filter = {
  amenities: Amenities;
  price: number;
};

const PropertyList = ({ dataList }: PropertyListProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  const [searchText, setSearchText] = useState("");
  const handelSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchText(e.target.value);

  const [filters, setFilters] = useState<Filter>({
    amenities: {
      rooms: 0,
      beds: 0,
      bathroom: 0,
    },
    price: 0,
  });

  const handleApplyFilters = (filters: Filter) => {
    setFilters(filters);
  };

  const handelResetFilters = () => {
    setFilters({
      amenities: {
        rooms: 0,
        beds: 0,
        bathroom: 0,
      },
      price: 0,
    });
  };

  let propertyList = dataList.filter((property) => {
    const matcheAminities =
      (filters.amenities.rooms === 0 ||
        filters.amenities.rooms === property.aminities.rooms) &&
      (filters.amenities.beds === 0 ||
        filters.amenities.beds === property.aminities.beds) &&
      (filters.amenities.bathroom === 0 ||
        filters.amenities.bathroom === property.aminities.bathroom);

    const matchSearch = property.title
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const matchPrice = filters.price === 0 || property.price <= filters.price;

    return matcheAminities && matchSearch && matchPrice;
  });

  return (
    <div>
      <div className="flex justify-evenly fixed top-[5.8rem] left-0 w-full bg-white z-10 py-8 border-b-2">
        <SearchBar
          onSearchTextChange={handelSearchTextChange}
          searchText={searchText}
        />
        <button
          className="border-2 border-black rounded-full bg-black text-white px-4 py-2 w-[20%]"
          onClick={handleOpenPopup}
        >
          Filters
        </button>
      </div>
      {propertyList.length > 0 ? (
        <div className="mt-[12rem]">
          {propertyList.map((property) => (
            <Property
              key={property.id}
              id={property.id}
              title={property.title}
              description={property.description}
              aminities={property.aminities}
              price={property.price}
              rating={property.rating}
              fav={property.fav}
            />
          ))}
        </div>
      ) : (
        <div>No Property!</div>
      )}
      <BottomNavigationBar />
      {isPopupOpen && (
        <FilterPopup
          onClose={handleClosePopup}
          onApply={handleApplyFilters}
          filters={filters}
          onReset={handelResetFilters}
        />
      )}
    </div>
  );
};

export default PropertyList;
