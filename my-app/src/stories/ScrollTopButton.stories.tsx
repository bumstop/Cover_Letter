import type { Meta, StoryObj } from "@storybook/react";
import ScrollTopButton from "../components/button/ScrollTopButton";

const meta = {
  title: "button/ScrollTopButton",
  component: ScrollTopButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollTopButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ScrollTopButton_xs: Story = {
  args: {
    size: "xs",
  },
};
export const ScrollTopButton_s: Story = {
  args: {
    size: "s",
  },
};
export const ScrollTopButton_m: Story = {
  args: {
    size: "m",
  },
};
export const ScrollTopButton_l: Story = {
  args: {
    size: "l",
  },
};
export const ScrollTopButton_xl: Story = {
  args: {
    size: "xl",
  },
};