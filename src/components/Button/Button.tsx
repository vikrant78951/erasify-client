import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
}) => {
  const baseStyles =
    "flex items-center justify-center rounded focus:outline-none  text-text-primary border transition font-semibold hover:scale-[1.1]   ";

  const variantStyles = {
    primary:
      "border-none bg-gradient-to-r from-primary to-secondary text-text-tertiary",
    secondary: "border-none bg-surface text-text-primary ",
    tertiary:
      "border-none bg-tertiary text-text-tertiary rounded-full hover:scale-1",
    success: "",
    danger: "",
    outline:
      "border-text-text-primary rounded-full  hover:bg-text-text-primary hover:text-text-text-tertiary ",
    primaryRounded:
      "border-none bg-gradient-to-r from-primary to-secondary text-text-tertiary rounded-full",
  };

  const sizeStyle = {
    sm: "",
    md: "py-2 px-4 ",
    lg: "py-3 px-6 ",
    xl: "py-4 px-8 ",
    regular: "py-2 px-2",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={` ${baseStyles} ${variantStyles[variant]} ${sizeStyle[size]} ${
        disabled ? "cursor-not-allowed opacity-50" : ""
      } ${className && className} `}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "success",
    "danger",
    "outline",
    "primaryRounded",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "regular"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export const DownloadButton = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  url = "",
}) => {
  const baseStyles =
    "flex items-center justify-center rounded focus:outline-none  text-text-primary border transition font-semibold hover:scale-[1.1]   ";

  const variantStyles = {
    primary:
      "border-none bg-gradient-to-r from-primary to-secondary text-text-tertiary",
    secondary: "border-none bg-surface text-text-primary ",
    tertiary:
      "border-none bg-tertiary text-text-tertiary rounded-full hover:scale-1",
    success: "",
    danger: "",
    outline:
      "border-text-text-primary rounded-full  hover:bg-text-text-primary hover:text-text-text-tertiary ",
    primaryRounded:
      "border-none bg-gradient-to-r from-primary to-secondary text-text-tertiary rounded-full",
  };

  const sizeStyle = {
    sm: "",
    md: "py-2 px-4 ",
    lg: "py-3 px-6 ",
    xl: "py-4 px-8 ",
    regular: "py-2 px-2",
  };

  return (
    <a
      type={type}
      onClick={onClick}
      className={` ${baseStyles} ${variantStyles[variant]} ${sizeStyle[size]} ${disabled ? "cursor-not-allowed opacity-50" : ""} ${className && className} `}
      href={url}
      download
    >
      {children}
    </a>
  );
};

DownloadButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "success",
    "danger",
    "outline",
    "primaryRounded",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "regular"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  url: PropTypes.string,
};

export const LinkButton = ({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  className = "",
  url = "",
}) => {
  const baseStyles =
    "flex items-center justify-center rounded focus:outline-none  text-text-primary border transition font-semibold hover:scale-[1.1]   ";

  const variantStyles = {
    primary:
      "border-none bg-gradient-to-r from-primary to-secondary text-text-tertiary",
    secondary: "border-none bg-surface text-text-primary ",
    tertiary:
      "border-none bg-tertiary text-text-tertiary rounded-full hover:scale-1",
    success: "",
    danger: "",
    outline:
      "border-text-text-primary rounded-full  hover:bg-text-text-primary hover:text-text-text-tertiary ",
    primaryRounded:
      "border-none bg-gradient-to-r from-primary to-secondary text-text-tertiary rounded-full",
  };

  const sizeStyle = {
    sm: "",
    md: "py-2 px-4 ",
    lg: "py-3 px-6 ",
    xl: "py-4 px-8 ",
    regular: "py-2 px-2",
  };

  return (
    <Link
      className={` ${baseStyles} ${variantStyles[variant]} ${sizeStyle[size]} ${disabled ? "cursor-not-allowed opacity-50" : ""} ${className && className} `}
      to={url}
    >
      {children}
    </Link>
  );
};

LinkButton.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "success",
    "danger",
    "outline",
    "primaryRounded",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "regular"]),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  url: PropTypes.string,
};

export default Button;
