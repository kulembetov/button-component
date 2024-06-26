import React, { useState, ReactElement } from "react";
import styles from "./button.module.css";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  children?: React.ReactNode;
  type:
    | "primary"
    | "secondary"
    | "tertiary"
    | "link-color"
    | "link-gray"
    | "destructive";
  size: "small" | "medium" | "large" | "extra-large" | "extra-large-2";
  isDisabled?: boolean;
  onClick?: () => void;
  iconColor?: string;
  iconBefore?: ReactElement;
  iconAfter?: ReactElement;
  iconCenter?: ReactElement;
  isIconOnly?: boolean;
  hoverColor?: string;
  to?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  size,
  isDisabled = false,
  onClick,
  iconColor,
  iconBefore,
  iconAfter,
  iconCenter,
  isIconOnly = false,
  hoverColor = iconColor,
  to,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (isDisabled) return;
    if (to) navigate(to);
    if (onClick) onClick();
  };

  const disabledColor = "#A3A3A3";

  return (
    <button
      className={`${styles.button} ${styles[type]} ${styles["size-" + size]} ${isIconOnly ? styles[`size-${size}-iconOnly`] : ""} ${isDisabled ? styles.disabled : ""}`}
      disabled={isDisabled}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {iconBefore && (
        <span className={styles.icon}>
          {React.cloneElement(iconBefore, {
            color: isDisabled
              ? disabledColor
              : isHovered
                ? hoverColor
                : iconColor,
          })}
        </span>
      )}
      {!isIconOnly && children}
      {iconCenter && (
        <span className={styles.icon}>
          {React.cloneElement(iconCenter, {
            color: isDisabled
              ? disabledColor
              : isHovered
                ? hoverColor
                : iconColor,
          })}
        </span>
      )}
      {iconAfter && (
        <span className={styles.icon}>
          {React.cloneElement(iconAfter, {
            color: isDisabled
              ? disabledColor
              : isHovered
                ? hoverColor
                : iconColor,
          })}
        </span>
      )}
    </button>
  );
};
