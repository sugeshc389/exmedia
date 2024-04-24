import React from 'react';

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  onClick?: () => void;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ type, title, icon, onClick, className }) => {
  return (
    <div className="text-center">
      <button type={type} onClick={onClick} className={className}>
        {title} {icon && <img src={icon} alt="Icon" />}
      </button>
    </div>
  );
};

export default Button;
