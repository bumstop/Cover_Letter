import { Button } from "./Button";
import { closeIconBlack, closeIconWhite } from "../../assets/images";

interface CloseButtonProps {
  size?: "xs" | "s" | "m" | "l" | "xl";
  theme?: "dark" | "bright";
  onClick?: () => void;
}

export function CloseButton({ size = "m", theme = "dark", onClick }: CloseButtonProps) {
  let buttonWidth = "";
  let buttonHeight = "";
  let bgColor = theme === "dark" ? "#373737" : "#ffffff";
  let closeIcon = theme === "dark" ? closeIconWhite : closeIconBlack;

  switch (size) {
    case "xs":
      buttonWidth = "2rem";
      buttonHeight = "2rem";
      break;
    case "s":
      buttonWidth = "3rem";
      buttonHeight = "3rem";
      break;
    case "m":
      buttonWidth = "4rem";
      buttonHeight = "4rem";
      break;
    case "l":
      buttonWidth = "5rem";
      buttonHeight = "5rem";
      break;
    case "xl":
      buttonWidth = "6rem";
      buttonHeight = "6rem";
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
      <img width="35%" height="35%" src={closeIcon} alt="closeIcon" />
    </Button>
  );
}
