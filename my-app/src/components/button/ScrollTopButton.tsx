import { Button } from "./Button";
import { BRIGHT_BTN_COLOR, DARK_BTN_COLOR } from "../../util/constant/constant";
import { blackUpIcon, whiteUpIcon } from "../../assets/images";
import { smoothScrollToTop } from "../../util/func/scroll";
import { useEffect, useRef } from "react";
import { useHandleButtonEvent } from "../../util/hooks/useHandleButtonEvent";

interface ScrollTopButtonProps {
  size?: "xs" | "s" | "m" | "l" | "xl";
  theme?: "dark" | "bright";
}

export default function ScrollTopButton({ size = "m", theme = "bright" }: ScrollTopButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  let buttonWidth = "";
  let buttonHeight = "";
  let bgColor = theme === "dark" ? DARK_BTN_COLOR : BRIGHT_BTN_COLOR;
  let upIcon = theme === "dark" ? whiteUpIcon : blackUpIcon;

  switch (size) {
    case "xs":
      buttonWidth = "20px";
      buttonHeight = "20px";
      break;
    case "s":
      buttonWidth = "30px";
      buttonHeight = "30px";
      break;
    case "m":
      buttonWidth = "40px";
      buttonHeight = "40px";
      break;
    case "l":
      buttonWidth = "50px";
      buttonHeight = "50px";
      break;
    case "xl":
      buttonWidth = "60px";
      buttonHeight = "60px";
      break;
  }

  useHandleButtonEvent({ ref: buttonRef, theme: theme });

  return (
    <Button
      ref={buttonRef}
      $width={buttonWidth}
      $height={buttonHeight}
      $bgColor={bgColor}
      $borderRadius="50%"
      onClick={smoothScrollToTop}
    >
      <img width="45%" height="45%" src={upIcon} alt="up-icon" />
    </Button>
  );
}
