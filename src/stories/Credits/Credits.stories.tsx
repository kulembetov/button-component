import { Meta, StoryObj } from "@storybook/react";
import { Credits } from "./Credits";

const meta: Meta<typeof Credits> = {
  title: "Components/Credits",
  component: Credits,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Credits>;

export const Default: Story = {
  args: {},
};
