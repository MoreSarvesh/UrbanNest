import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../context/UserContext";
import PropertyList from "../components/PropertyList";
import { propertyContext } from "../context/PropertiesContext";

const Home = () => {
  const { user } = useContext(userContext);
  const { properties } = useContext(propertyContext);

  return (
    <>
      {user ? (
        <div className="p-4 py-6">
          <PropertyList dataList={properties} />
        </div>
      ) : (
        <div>
          <Link to="login" replace={true}>
            Please Login
          </Link>
        </div>
      )}
    </>
  );
};

export default Home;
