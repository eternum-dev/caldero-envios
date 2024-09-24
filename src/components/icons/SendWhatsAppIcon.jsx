import PropTypes from "prop-types";
import { useState } from "react";
import "./sendWhatsAppIcon.css";

export const SendWhatsAppIcon = ({ onClick }) => {
  const [showWhatsAppIcon, setShowWhatsAppIcon] = useState(false);
  const sizeIcon = "28";

  return (
    <button
      className="sendIcon"
      onClick={onClick}
      onMouseEnter={() => setShowWhatsAppIcon(true)}
      onMouseLeave={() => setShowWhatsAppIcon(false)}
    >
      {showWhatsAppIcon ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="none"
          strokeWidth="1.5"
          color="#000"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M22 5h-6m0 0l3-3m-3 3l3 3M18.118 14.702L14 15.5c-2.782-1.396-4.5-3-5.5-5.5l.77-4.13L7.815 2H4.064c-1.128 0-2.016.932-1.847 2.047.42 2.783 1.66 7.83 5.283 11.453 3.805 3.805 9.286 5.456 12.302 6.113 1.165.253 2.198-.655 2.198-1.848v-3.584l-3.882-1.479z"
          ></path>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={sizeIcon}
          height={sizeIcon}
          fill="none"
          strokeWidth="1.5"
          color="#000"
          viewBox="0 0 24 24"
        >
          <path
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M22.152 3.553L11.178 21.004l-1.67-8.596L2 7.898l20.152-4.345zM9.456 12.444l12.696-8.89"
          ></path>
        </svg>
      )}
    </button>
  );
};

SendWhatsAppIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
};
