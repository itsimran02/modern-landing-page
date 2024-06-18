import React from "react";

const Paragraph = ({ children, color }) => {
  const paraColor = color ? `${color}` : "#36485C";
  return (
    <p
      className=" md:text-lg text-base font-inter"
      style={{
        color: paraColor,
      }}
    >
      {children}
    </p>
  );
};

export default Paragraph;
