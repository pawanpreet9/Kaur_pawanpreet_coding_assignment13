import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Components/Button",
  argTypes: {},
};

type Story = StoryObj<typeof Button>;

export default meta;

export const Primary: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Primary.args = {
  primary: true,
  disabled: false,
  text: "Primary",
  backgroundColor:"#55bd90",
};

export const Secondary: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Secondary.args = {
  primary: false,
  disabled: false,
  text: "Secondary",
};

export const Disabled: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Disabled.args = {
  primary: false,
  disabled: true,
  text: "Disabled",
};

export const Small: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Small.args = {
  primary: true,
  disabled: false,
  size: "small",
  text: "Small",
};

export const Medium: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Medium.args = {
  primary: true,
  disabled: false,
  size: "medium",
  text: "Medium",
};

export const Large: Story = (args) => (
  <Button data-testId="InputField-id" {...args} />
);
Large.args = {
  primary: true,
  disabled: false,
  size: "large",
  text: "Large",
};

// Intentional violations for testing Git hooks
console.log("This is a linting violation")
const invalidVariable = 123;
