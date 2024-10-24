import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { MapContext } from "./MapContext";
import { getLocal } from "../../helpers/getLocal";
import { AuthContext } from "../auth/AuthContext";
import { useLocation } from "react-router-dom";

export const MapProvider = ({ children }) => {
  const [localCoordinates, setLocalCoordinates] = useState(null);
  const [deliveryPhoneNumber, setDeliveryPhoneNumber] = useState(null);
  const [nameLocal, setNameLocal] = useState("");
  const [repartidor, setRepartidor] = useState("");
  const [destination, setDestination] = useState("");
  const [renderRoute, setRenderRoute] = useState(false);
  const [dataRoute, setDataRoute] = useState([]);
  const [local, setLocal] = useState(null);
  const [errorDB, setErrorDB] = useState(null);

  const { user } = useContext(AuthContext);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!user) return;
    const fetchLocal = async () => {
      try {
        const localData = await getLocal();
        if (!localData) {
          setTimeout(() => fetchLocal(), 1000);
        }
        setLocal(localData);
        setLocalCoordinates(localData.locales[0].cordenadasLocal);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchLocal();
  }, [user]);

  useEffect(() => {
    setErrorDB(null);
  }, [pathname]);

  const contextValue = {
    localCoordinates,
    setLocalCoordinates,
    deliveryPhoneNumber,
    setDeliveryPhoneNumber,
    repartidor,
    nameLocal,
    setNameLocal,
    setRepartidor,
    destination,
    setDestination,
    renderRoute,
    setRenderRoute,
    dataRoute,
    setDataRoute,
    local,
    setLocal,
    errorDB,
    setErrorDB,
  };

  return (
    <MapContext.Provider value={contextValue}>{children}</MapContext.Provider>
  );
};

MapProvider.propTypes = {
  children: PropTypes.any,
};
