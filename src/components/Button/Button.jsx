import React from "react";
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
  to,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (disabled) {
      return;
    }

    if (to) {
      navigate(to);
    }

    if (onClick) {
      onClick();
    }
  };

  const disabledColor = "#A3A3A3";
  const buttonClass = `${styles.button} ${styles[type]} ${styles["size-" + size]} ${iconOnly ? styles[`size-${size}-iconOnly`] : ""} ${disabled ? styles.disabled : ""}`;

  return (
    <button className={buttonClass} disabled={disabled} onClick={handleClick}>
      {iconBefore && (
        <span className={styles.icon}>
          {React.cloneElement(iconBefore, {
            color: disabled ? disabledColor : iconColor,
          })}
        </span>
      )}
      {!iconOnly && children}
      {iconCenter && (
        <span className={styles.icon}>
          {React.cloneElement(iconCenter, {
            color: disabled ? disabledColor : iconColor,
          })}
        </span>
      )}
      {iconAfter && (
        <span className={styles.icon}>
          {React.cloneElement(iconAfter, {
            color: disabled ? disabledColor : iconColor,
          })}
        </span>
      )}
    </button>
  );
};
