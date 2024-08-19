import React from "react";

const Button = ({ title, url }) => {
  return (
    <>
      <a href={url} className="flexCenter blurd-effect font-medium text-center">
        {title}
      </a>
    </>
  );
};

export default Button;
