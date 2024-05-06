import React, { useState } from "react";
import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";

export const Button = ({
  children,
  type,
  size,
  disabled,
  onClick,
  iconColor,
  iconBefore,
  iconAfter,
  iconCenter,
  iconOnly,
  hoverColor = iconColor,
  to,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (disabled) return;
    if (to) navigate(to);
    if (onClick) onClick();
  };

  const disabledColor = "#A3A3A3";

  return (
    <button
      className={`${styles.button} ${styles[type]} ${styles["size-" + size]} ${iconOnly ? styles[`size-${size}-iconOnly`] : ""} ${disabled ? styles.disabled : ""}`}
      disabled={disabled}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {iconBefore && (
        <span className={styles.icon}>
          {React.cloneElement(iconBefore, {
            color: disabled
              ? disabledColor
              : isHovered
                ? hoverColor
                : iconColor,
          })}
        </span>
      )}
      {!iconOnly && children}
      {iconCenter && (
        <span className={styles.icon}>
          {React.cloneElement(iconCenter, {
            color: disabled
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
            color: disabled
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
