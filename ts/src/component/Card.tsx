import React from "react";

export enum CardVariant {
  outlined = "outlined",
  primary = "primary",
}

interface CardProps {
  width?: string; //делаем пропсы необязательными
  height?: string;
  children?: React.ReactNode;
  variant: CardVariant;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({
  width,
  height,
  children,
  variant,
  onClick,
}) => {
  return (
    <div
      style={{
        width,
        height,
        border: variant === CardVariant.outlined ? "1px solid gray" : "",
        background: variant === CardVariant.primary ? "lightgary" : "",
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
