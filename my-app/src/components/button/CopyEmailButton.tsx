import React, { useRef } from "react";
import { Button } from "./Button";
import { BRIGHT_BTN_COLOR, DARK_BTN_COLOR, EMAIL_TEXT } from "../../util/constant/constant";
import { blackEmailIcon, whiteEmailIcon } from "../../assets/images";
import { useHandleButtonEvent } from "../../util/hooks/useHandleButtonEvent";

interface CloseButtonProps {
  size?: "xs" | "s" | "m" | "l" | "xl";
  theme?: "dark" | "bright";
}

export default function CopyEmailButton({ size = "m", theme = "dark" }: CloseButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  let buttonWidth = "";
  let buttonHeight = "";
  let bgColor = theme === "dark" ? DARK_BTN_COLOR : BRIGHT_BTN_COLOR;
  let emailIcon = theme === "dark" ? whiteEmailIcon : blackEmailIcon;

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

  const cilpboardEmail = () => {
    window.navigator.clipboard.writeText(EMAIL_TEXT).then(() => {
      alert("이메일이 복사되었습니다!");
    });
  };

  useHandleButtonEvent({ ref: buttonRef, theme: theme });

  return (
    <Button
      ref={buttonRef}
      $width={buttonWidth}
      $height={buttonHeight}
      $bgColor={bgColor}
      $borderRadius="50%"
      onClick={cilpboardEmail}
    >
      <img width="40%" height="40%" src={emailIcon} alt="email-icon" />
    </Button>
  );
}
