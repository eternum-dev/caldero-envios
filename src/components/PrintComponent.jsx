import { useRef } from "react";
import PropTypes from "prop-types";
import { printComponentData } from "../data";
import PrintTemplate from "./PrintTemplate";
import { PrinterIcon } from "./icons";

export const PrintComponent = ({ data }) => {
  const printRef = useRef();
  const { id, divPrintContainer, printStyleElement } = printComponentData;
  const { style } = divPrintContainer;

  const handlePrint = () => {
    const printContainer = document.createElement(divPrintContainer.tagName);
    printContainer.style.position = style.position;

    printContainer.style.top = style.top;
    printContainer.style.left = style.left;
    printContainer.style.width = style.width;
    printContainer.style.padding = style.padding;
    printContainer.style.backgroundColor = style.backgroundColor;
    printContainer.style.zIndex = style.zIndex;

    printContainer.innerHTML = printRef.current.innerHTML;
    document.body.appendChild(printContainer);

    const printStyle = document.createElement(printStyleElement.tagName);
    printStyle.textContent = printStyleElement.textContent;
    document.head.appendChild(printStyle);

    printContainer.id = id;
    window.print();

    document.body.removeChild(printContainer);
    document.head.removeChild(printStyle);
  };

  return (
    <div className="print-component">
      <button onClick={handlePrint}>{<PrinterIcon />}</button>
      <div style={{ display: "none" }}>
        <PrintTemplate ref={printRef} data={data} />
      </div>
    </div>
  );
};

PrintComponent.propTypes = {
  data: PropTypes.any,
};
