import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { CloseButton } from "../components/button/CloseButton";

const meta = {
  title: "button/CloseButton",
  component: CloseButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof CloseButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CloseButton_xs: Story = {
  args: {
    size: "xs",
  },
};
export const CloseButton_s: Story = {
  args: {
    size: "s",
  },
};
export const CloseButton_m: Story = {
  args: {
    size: "m",
  },
};
export const CloseButton_l: Story = {
  args: {
    size: "l",
  },
};
export const CloseButton_xl: Story = {
  args: {
    size: "xl",
  },
};
