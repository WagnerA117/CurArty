import type {Meta, StoryObj} from "@storybook/react";

import {NavBar} from "./NavBar";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: "Components/NavBar",
	component: NavBar,
	parameters: {
		layout: "centered",
	},

	tags: ["autodocs"],

	argTypes: {},
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		color: "primary",
	},
};
