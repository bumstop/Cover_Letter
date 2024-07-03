import { ReactNode, RefObject } from "react";
import { Button, ButtonStyle } from "./Button";

interface CloseButtonProps extends ButtonStyle {
  children: ReactNode;
  closeTarget: RefObject<HTMLElement>;
}

export function CloseButton({
  $width,
  $height,
  $bgColor,
  $hasBorder,
  $borderColor,
  $borderRadius,
  $fontSize,
  $fontColor,
  children,
  closeTarget,
}: CloseButtonProps) {
  const targetClose = () => {
    if (closeTarget.current) {
      console.log(closeTarget.current);
			closeTarget.current.style.cssText = `
				display: none;
			`;
    }

    // closeTarget.current.
  };

  return (
    <Button
      $width={$width}
      $height={$height}
      $bgColor={$bgColor}
      $hasBorder={$hasBorder}
      $borderColor={$borderColor}
      $borderRadius={$borderRadius}
      $fontSize={$fontSize}
      $fontColor={$fontColor}
      onClick={targetClose}
    >
      {children}
    </Button>
  );
}
