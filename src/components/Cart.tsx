import { useContext } from "react";
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

type CartProps = {
  isCartOpen: boolean;
  onCartClose: () => void;
};
const Cart = ({ isCartOpen, onCartClose }: CartProps) => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(userContext);

  const handelRemoveProperty = (id: number) => {
    setCart((prev) => prev.filter((property) => property.id != id));
  };
  return (
    <div
      className={`fixed inset-0 z-20 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 h-[100vh] ${
        isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed top-0 right-0 h-full w-[70%] bg-white shadow-lg  transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 h-full flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          <button
            className="absolute top-2 right-2 text-gray-600 text-3xl"
            onClick={onCartClose}
          >
            &times;
          </button>

          <div className="flex flex-col justify-between flex-grow">
            <div>
              {cart.length > 0 ? (
                <div>
                  {cart.map((property) => (
                    <div
                      key={property.id}
                      className="flex justify-between my-4 border-2 px-2 py-4 "
                    >
                      <div className="w-[30%] bg-black text-white mr-2">
                        img
                      </div>
                      <div>
                        <h3 className="text-lg font-bold">{property.title}</h3>
                        <h4 className="text-lg font-bold">{property.price}</h4>
                      </div>
                      <button
                        className="text-gray-600 font-bold text-2xl flex items-start"
                        onClick={() => handelRemoveProperty(property.id)}
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xl font-bold text-center">
                  Your cart is empty!
                </p>
              )}
            </div>
            <div className="flex p-4 justify-between border-t-2">
              <h3 className="text-lg font-bold">
                Total: {cart.reduce((acc, curr) => acc + curr.price, 0)}
              </h3>
              <button
                className="border-2 border-gray-800 rounded px-4 py-2 bg-black text-white"
                onClick={() => navigate("checkout")}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
