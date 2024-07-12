import { useEffect, useRef } from "react";

interface useHandleButtonEventProps {
  ref: React.MutableRefObject<HTMLButtonElement | null>;
  theme: "dark" | "bright";
}

export function useHandleButtonEvent({ ref, theme }: useHandleButtonEventProps) {
  useEffect(() => {
    const button = ref.current;

    if (!button) return;

    const hoverStyle = theme === "dark" ? "brightness(150%)" : "brightness(80%)";
    const activeStyle = theme === "dark" ? "brightness(80%)" : "brightness(150%)";

    const handleMouseEnter = () => {
      button.style.filter = hoverStyle;
    };

    const handleMouseLeave = () => {
      button.style.filter = "none";
    };

    const handleMouseDown = () => {
      button.style.filter = activeStyle;
    };

    const handleMouseUp = () => {
      button.style.filter = hoverStyle;
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    button.addEventListener("mousedown", handleMouseDown);
    button.addEventListener("mouseup", handleMouseUp);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      button.removeEventListener("mousedown", handleMouseDown);
      button.removeEventListener("mouseup", handleMouseUp);
    };
  }, [ref, theme]);
}
