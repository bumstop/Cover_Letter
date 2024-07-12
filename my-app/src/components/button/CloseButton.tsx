import { Button } from "./Button";
import { blackCloseIcon, whiteCloseIon } from "../../assets/images";
import { BRIGHT_BTN_COLOR, DARK_BTN_COLOR } from "../../util/constant/constant";

interface CloseButtonProps {
  size?: "xs" | "s" | "m" | "l" | "xl";
  theme?: "dark" | "bright";
  onClick?: () => void;
}

export function CloseButton({ size = "m", theme = "bright", onClick }: CloseButtonProps) {
  let buttonWidth = "";
  let buttonHeight = "";
  let bgColor = theme === "dark" ? DARK_BTN_COLOR : BRIGHT_BTN_COLOR;
  let closeIcon = theme === "dark" ? whiteCloseIon : blackCloseIcon;

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

  return (
    <Button
      $width={buttonWidth}
      $height={buttonHeight}
      $bgColor={bgColor}
      $borderRadius="50%"
      onClick={onClick}
    >
      <img width="45%" height="45%" src={closeIcon} alt="close-icon" />
    </Button>
  );
}
