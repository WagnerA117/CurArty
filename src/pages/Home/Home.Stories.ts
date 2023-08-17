import type {Meta, StoryObj} from "@storybook/react";

import {Home} from "./Home";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: "Components/Home",
	component: Home,
	parameters: {
		layout: "centered",
	},

	tags: ["autodocs"],

	argTypes: {},
} satisfies Meta<typeof Home>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		color: "primary",
	},
};
