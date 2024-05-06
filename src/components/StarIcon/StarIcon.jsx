export const StarIcon = ({ color = "#fff" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill={color || "currentColor"}
    >
      <path
        d="M9.00044 13.3472L4.10221 16.089L5.19619 10.5833L1.07495 6.77209L6.64928 6.11116L9.00044 1.0139L11.3516 6.11116L16.9259 6.77209L12.8047 10.5833L13.8986 16.089L9.00044 13.3472ZM9.00044 11.7556L11.9495 13.4063L11.2909 10.0915L13.7722 7.79682L10.416 7.39886L9.00044 4.32989L7.58485 7.39886L4.22865 7.79682L6.70997 10.0915L6.0513 13.4063L9.00044 11.7556Z"
        fill={color || "currentColor"}
      />
    </svg>
  );
};
