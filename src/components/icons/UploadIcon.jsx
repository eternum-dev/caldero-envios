/**
 * icon upload file
 * @component
 * @returns {JSX.Element} component  upload icon
 *
 * @example
 * return (
 *  <UploadIcon />
 * )
 */

export const UploadIcon = () => {
  return (
    <div
      style={{
        background: "var(--red-300)",
        width: "46px",
        height: "46px",
        padding: ".5rem",
        borderRadius: "50%",
        display: "grid",
        placeContent: "center",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        fill="none"
        strokeWidth="1.5"
        color="#ffdada"
        viewBox="0 0 24 24"
      >
        <path
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 20h12M12 16V4m0 0l3.5 3.5M12 4L8.5 7.5"
        ></path>
      </svg>
    </div>
  );
};
