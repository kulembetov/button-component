import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import React from "react";
import { StarIcon } from "components/StarIcon/StarIcon";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "primary",
          "secondary",
          "tertiary",
          "link-color",
          "link-gray",
          "destructive",
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large", "extra-large", "extra-large-2"],
      },
    },
    iconColor: { control: "color" },
    hoverColor: { control: "color" },
    isDisabled: { control: "boolean" },
    isIconOnly: { control: "boolean" },
    iconBefore: { control: false },
    iconAfter: { control: false },
    iconCenter: { control: false },
    to: { control: "text" },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "primary",
    size: "medium",
    children: "Button",
    isDisabled: false,
  },
};

export const WithIcons: Story = {
  args: {
    variant: "secondary",
    size: "large",
    children: "Button with Icons",
    iconBefore: <StarIcon />,
    iconAfter: <StarIcon />,
    iconColor: "#4338CA",
  },
};

export const IconOnly: Story = {
  args: {
    variant: "tertiary",
    size: "medium",
    isIconOnly: true,
    iconCenter: <StarIcon />,
    iconColor: "#4338CA",
  },
};

export const Disabled: Story = {
  args: {
    variant: "destructive",
    size: "large",
    children: "Disabled Button",
    isDisabled: true,
  },
};

export const LinkButton: Story = {
  args: {
    variant: "link-color",
    size: "medium",
    children: "Go to Page",
    to: "/some-path",
  },
};

export const CustomHover: Story = {
  args: {
    variant: "primary",
    size: "large",
    children: "Hover Me",
    hoverColor: "#4338CA",
  },
};
