import { ReactNode } from "react";
import styled, { css } from "styled-components";

export interface ButtonStyle {
  $width: string;
  $height: string;
  $bgColor?: string;
  $hasBorder?: boolean;
  $borderColor?: string;
  $borderRadius?: string;
  $fontSize?: string;
  $fontColor?: string;
}

export interface ButtonFunction {
  onClick: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export interface ButtonProps extends ButtonStyle, ButtonFunction {
  children: ReactNode;
}

export function Button(props: ButtonProps) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}

const StyledButton = styled.button<ButtonStyle>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  font-family: inherit;
  line-height: inherit;
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
    background-color: ${$bgColor ? $bgColor : "transparent"};
    border: ${$hasBorder ? `1px solid ${$borderColor}` : "none"};
    border-radius: ${$borderRadius};
    font-size: ${$fontSize ? $fontSize : "inherit"};
    color: ${$fontColor};
  `}
`;
