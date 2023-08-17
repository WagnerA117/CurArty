import type {Meta, StoryObj} from "@storybook/react";

import {TextInput} from "./TextInput";

const meta = {
	title: "Components/TextInput",

	component: TextInput,
	parameters: {
		layout: "centered",
	},

	tags: ["autodocs"],

	argTypes: {},
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Standard: Story = {
	args: {
		value: "placeholdervalue",
	},
};
