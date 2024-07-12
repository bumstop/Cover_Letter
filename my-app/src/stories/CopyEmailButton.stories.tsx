import type { Meta, StoryObj } from "@storybook/react";
import CopyEmailButton from "../components/button/CopyEmailButton";

const meta = {
  title: "button/CopyEmailButton",
  component: CopyEmailButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CopyEmailButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CopyEmailButton_xs: Story = {
  args: {
    size: "xs",
  },
};
export const CopyEmailButton_s: Story = {
  args: {
    size: "s",
  },
};
export const CopyEmailButton_m: Story = {
  args: {
    size: "m",
  },
};
export const CopyEmailButton_l: Story = {
  args: {
    size: "l",
  },
};
export const CopyEmailButton_xl: Story = {
  args: {
    size: "xl",
  },
};