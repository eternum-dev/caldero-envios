import { forwardRef } from "react";
import PropTypes from "prop-types";
import { printTemplateData } from "../data";

const PrintTemplate = forwardRef(({ data }, ref) => {
  const { delivery, details, direction, orderStatus, title } =
    printTemplateData;

  return (
    <div ref={ref} className="print-template">
      <h1>
        {title}
        {data.orderId}
      </h1>
      <p>
        <strong>{delivery}</strong> {data.nombreRepatidor}
      </p>
      <p>
        <strong>{direction}</strong> {data.direccion}
      </p>

      <p>
        <strong>{orderStatus} </strong>
        {data.status}
      </p>
      {data.status === "por pagar" && (
        <p>
          <strong>por pagar: </strong>
          {data.cost}
        </p>
      )}

      {data.detalles && (
        <p>
          <strong>{details}</strong>
          {data.detalles}
        </p>
      )}
    </div>
  );
});

export default PrintTemplate;
PrintTemplate.displayName = PrintTemplate;

PrintTemplate.propTypes = {
  data: PropTypes.any,
};
