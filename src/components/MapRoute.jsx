import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { calculateValueRute, generateWhatsAppLink } from "../helpers";
import { MapContext } from "../context";
import "./resultRoute.css";
import { mapRoute } from "../data";
import { InputField, DisplayInput, PrintComponent, SendWhatsAppIcon } from "./";

export const MapRoute = ({ children }) => {
  const [orderStatus, setOrderStatus] = useState("pagado");
  const [costToPay, setCostToPay] = useState(0);
  const [showDetailsDelivery, setShowDetailsDelivery] = useState(false);

  let orderDistanceKm, deliveryDurationMin, destinationAddress, shippingCost;

  const { dataRoute, repartidorSelected, addressCoordinates } =
    useContext(MapContext);
  const { loading, paragraph, details } = mapRoute;
  const { lat, lng } = addressCoordinates;

  function handleSendMessage() {
    const { telefono, nombre } = repartidorSelected;
    const location = `https://maps.google.com/?q=${lat},${lng}`;
    const status = orderStatus;

    const whatsappLink = generateWhatsAppLink(
      nombre,
      telefono,
      location,
      status,
      shippingCost
    );
    window.open(whatsappLink, "_blank");
  }

  /**
   * Sends a WhatsApp message using the `generateWhatsAppLink` helper.
   *
   * @param {Event} event - The form submit event.
   */
  const sendWhatappMessage = async (event) => {
    event.preventDefault();
    handleSendMessage();
  };

  try {
    if (dataRoute.length > 0) {
      const { legs } = dataRoute[0];
      const { distance, duration, end_address } = legs[0];

      orderDistanceKm = distance;
      deliveryDurationMin = duration;

      destinationAddress = end_address;
    }
  } catch (error) {
    console.log(error);
  }

  if (orderDistanceKm) {
    shippingCost = calculateValueRute(
      orderDistanceKm.value,
      repartidorSelected
    );
  }

  return (
    <div className="result-route">
      {!dataRoute.length > 0 ? (
        <h3>{loading}</h3>
      ) : (
        <div className="result-route__wrapper">
          <div className="result-route__text-container">
            <p className="result-route__p">{paragraph.direction}</p>
            <span className="result-route__span">{destinationAddress}</span>
          </div>
          <div className="result-route__text-container">
            <p className="result-route__p">{paragraph.time}</p>
            <span className="result-route__span">
              ${deliveryDurationMin.text}
            </span>
          </div>

          <div className="result-route__text-container">
            <p className="result-route__p">{paragraph.distance}</p>
            <span className="result-route__span">${orderDistanceKm.text}</span>
          </div>
          <div className="result-route__text-container">
            <p className="result-route__p">{paragraph.value}</p>
            <span className="result-route__span">${shippingCost}</span>
          </div>

          <div className="result-route__order-status">
            <label htmlFor="orderStatus">
              <select
                name="orderStatus"
                onChange={(event) => {
                  setOrderStatus(event.target.value);
                }}
                value={orderStatus}
              >
                <option value="pagado">{"pagado"}</option>
                <option value="por pagar">{"por pagar"}</option>
              </select>
            </label>
            {orderStatus === "por pagar" && (
              <DisplayInput value={costToPay} setInputValue={setCostToPay} />
            )}
          </div>
          <div className="result-route__details">
            <label htmlFor="details">
              <input
                className="result-route__checkbox"
                type="checkbox"
                name="details"
                value={showDetailsDelivery}
                onChange={() => setShowDetailsDelivery((prev) => !prev)}
              />
              {details.label}
            </label>
            {showDetailsDelivery && <InputField placeholder={details.input} />}
          </div>
        </div>
      )}

      <div className="button-reset">{children}</div>
      <SendWhatsAppIcon onClick={sendWhatappMessage} />
      <PrintComponent
        data={{
          orderId: "123",
          nombreRepatidor: repartidorSelected.nombre,
          direccion: destinationAddress,
          detalles: "Pedido especial",
          status: orderStatus,
          cost: costToPay,
        }}
      />
    </div>
  );
};

MapRoute.propTypes = {
  children: PropTypes.object.isRequired,
};
