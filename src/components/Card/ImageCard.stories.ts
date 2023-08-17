import type {Meta, StoryObj} from "@storybook/react";

import {ImageCard} from "./ImageCard";

const meta = {
	title: "Components/Card",

	component: ImageCard,
	parameters: {
		layout: "centered",
	},

	tags: ["autodocs"],

	argTypes: {},
} satisfies Meta<typeof ImageCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		description: "This is a card",
	},
};
