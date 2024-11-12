export const printTemplateData = {
  title: "Envío # ",
  delivery: "Repatidor: ",
  direction: "Dirección: ",
  orderStatus: "Estado del Pedido: ",
  details: "Detalles: ",
};

export const printComponentData = {
  divPrintContainer: {
    tagName: "div",
    style: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      padding: "20px",
      backgroundColor: "white",
      zIndex: "-1",
    },
  },
  printStyleElement: {
    tagName: "style",
    textContent: `
      @media print {
        body * {
          visibility: hidden;
        }
        #print-section, #print-section * {
           visibility: visible;
        }
        #print-section {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          padding: 20px;
        }
        p, h1{
         color: #000;
         margin-bottom: .5rem
        }

      }
    `,
  },
  id: "print-section",
  buttonPrint: "Imprimir Envío",
};
