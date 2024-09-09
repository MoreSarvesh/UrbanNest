import { useState } from "react";
import { Amenities } from "../database/db";
import { Filter } from "./PropertyList";

type FilterPopupProps = {
  onClose: () => void;
  onReset: () => void;
  onApply: (filters: { amenities: Amenities; price: number }) => void;
  filters: Filter;
};

const FilterPopup = ({
  onClose,
  onApply,
  onReset,
  filters,
}: FilterPopupProps) => {
  const [amenities, setAmenities] = useState<Amenities>(filters.amenities);
  const [price, setPrice] = useState<number>(filters.price);

  const handleApply = () => {
    onApply({ amenities, price });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-4">Filter Options</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Rooms</label>
          <input
            type="number"
            value={amenities.rooms}
            onChange={(e) =>
              setAmenities({ ...amenities, rooms: +e.target.value })
            }
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Beds</label>
          <input
            type="number"
            value={amenities.beds}
            onChange={(e) =>
              setAmenities({ ...amenities, beds: +e.target.value })
            }
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Bathrooms</label>
          <input
            type="number"
            value={amenities.bathroom}
            onChange={(e) =>
              setAmenities({ ...amenities, bathroom: +e.target.value })
            }
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Price</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={onReset}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Reset
          </button>
          <button
            onClick={handleApply}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPopup;
