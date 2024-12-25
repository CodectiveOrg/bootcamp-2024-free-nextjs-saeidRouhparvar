import { ButtonHTMLAttributes, FC } from "react";

import clsx from "clsx";

import "../../styles/button.css";

type ButtonProps = {
  variant?: "fill" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  isDisabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
  children,
  variant = "fill",
  size = "md",
  isDisabled = false,
  className,
  ...rest
}) => {
  const buttonClass =
    `${variant} ${size} ${isDisabled ? "disabled" : ""}`.trim();

  return (
    <button
      className={clsx(buttonClass, className)}
      disabled={isDisabled}
      {...rest}
    >
      {children}
    </button>
  );
};
