import { useContext } from "react";
import { userContext } from "../context/UserContext";

const Checkout = () => {
  const { cart } = useContext(userContext);

  const totalPrice = cart.reduce((acc, property) => acc + property.price, 0);
  return (
    <div className="p-4 py-28">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {/* Cart Summary */}
      {cart.length > 0 ? (
        cart.map((property) => (
          <div
            key={property.id}
            className="bg-white shadow-md rounded-lg p-4 mb-6"
          >
            <h2 className="text-xl font-semibold mb-2">{property.title}</h2>
            <p className="text-gray-700 mb-2">{property.description}</p>
            <ul className="text-gray-600">
              <li>Rooms: {property.aminities.rooms}</li>
              <li>Beds: {property.aminities.beds}</li>
              <li>Bathrooms: {property.aminities.bathroom}</li>
            </ul>
            <p className="text-xl font-bold mt-4">${property.price} / night</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}

      {/* Booking Form */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Your Details</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>
        </form>
      </div>

      {/* Payment Form */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Payment Information</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="cardNumber" className="block text-gray-700">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="expiryDate" className="block text-gray-700">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>

            <div className="w-1/2">
              <label htmlFor="cvc" className="block text-gray-700">
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="billingAddress" className="block text-gray-700">
              Billing Address
            </label>
            <input
              type="text"
              id="billingAddress"
              name="billingAddress"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded mt-4 hover:bg-blue-600"
          >
            Complete Booking
          </button>
        </form>
      </div>

      {/* Booking Summary */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
        <p className="text-gray-700">Total: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default Checkout;
