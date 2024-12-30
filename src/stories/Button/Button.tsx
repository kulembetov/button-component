import React, { useState, ReactElement } from "react";
import styles from "./button.module.css";

/** Props for the Button component */
export interface ButtonProps {
  /** Child elements to render inside the button */
  children?: React.ReactNode;
  /** Button variant for different styles */
  variant:
    | "primary"
    | "secondary"
    | "tertiary"
    | "link-color"
    | "link-gray"
    | "destructive";
  /** Size of the button */
  size: "small" | "medium" | "large" | "extra-large" | "extra-large-2";
  /** Whether the button is disabled */
  isDisabled?: boolean;
  /** Click handler for the button */
  onClick?: () => void;
  /** Icon color */
  iconColor?: string;
  /** Icon to render before the label */
  iconBefore?: ReactElement;
  /** Icon to render after the label */
  iconAfter?: ReactElement;
  /** Centered icon (used without label text) */
  iconCenter?: ReactElement;
  /** Whether the button is icon-only */
  isIconOnly?: boolean;
  /** Hover color for the button */
  hoverColor?: string;
  /** Navigation link for the button */
  to?: string;
}

/** Button Component */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
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

  const handleClick = () => {
    if (isDisabled) return;
    if (onClick) onClick();
  };

  const disabledColor = "#A3A3A3";

  if (to) {
    return (
      <a
        href={to}
        className={`${styles.button} ${styles[variant]} ${
          styles["size-" + size]
        } ${isIconOnly ? styles[`size-${size}-iconOnly`] : ""} ${
          isDisabled ? styles.disabled : ""
        }`}
        style={isDisabled ? { pointerEvents: "none" } : undefined}
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
      </a>
    );
  }

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${
        styles["size-" + size]
      } ${isIconOnly ? styles[`size-${size}-iconOnly`] : ""} ${
        isDisabled ? styles.disabled : ""
      }`}
      disabled={isDisabled}
      onClick={isDisabled ? undefined : onClick}
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
