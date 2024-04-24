import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ type, title, className }) => {
  return (
    <div className="text-center">
      <button type={type} className={className}>
        {title}
      </button>
    </div>
  );
};

export default Button;
