import { ReactNode, forwardRef, ForwardedRef } from "react";
import styled, { css } from "styled-components";

export interface ButtonStyle {
  $width?: string;
  $height?: string;
  $bgColor?: string;
  $hasBorder?: boolean;
  $borderColor?: string;
  $borderRadius?: string;
  $fontSize?: string;
  $fontColor?: string;
}

export interface ButtonFunction {
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export interface ButtonProps extends ButtonStyle, ButtonFunction {
  children?: ReactNode;
}

export const Button = forwardRef(function Button(
  {
    $width = "100px",
    $height = "40px",
    $bgColor = "transparent",
    $hasBorder = false,
    $borderColor = "black",
    $borderRadius = "4px",
    $fontSize = "inherit",
    $fontColor = "black",
    onClick,
    onMouseEnter,
    onMouseLeave,
    children,
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <StyledButton
      ref={ref}
      $width={$width}
      $height={$height}
      $bgColor={$bgColor}
      $hasBorder={$hasBorder}
      $borderColor={$borderColor}
      $borderRadius={$borderRadius}
      $fontSize={$fontSize}
      $fontColor={$fontColor}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </StyledButton>
  );
});

export const StyledButton = styled.button<ButtonStyle>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  font-family: inherit;
  line-height: inherit;
  caret-color: transparent;
  cursor: pointer;
  ${({
    $width,
    $height,
    $bgColor,
    $hasBorder,
    $borderColor,
    $borderRadius,
    $fontSize,
    $fontColor,
  }) => css`
    width: ${$width};
    height: ${$height};
    background-color: ${$bgColor};
    border: ${$hasBorder ? `1px solid ${$borderColor}` : "none"};
    border-radius: ${$borderRadius};
    font-size: ${$fontSize};
    color: ${$fontColor};
  `}
`;
