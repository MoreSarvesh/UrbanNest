import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/UserContext";
import PropertyList from "../components/PropertyList";
import { propertyContext } from "../context/PropertiesContext";

const Favourites = () => {
  const { user } = useContext(userContext);
  const { properties } = useContext(propertyContext);

  const favProperties = properties.filter((property) => property.fav === true);

  return (
    <>
      {user ? (
        <div className="p-4 py-6">
          <PropertyList dataList={favProperties} />
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

export default Favourites;
