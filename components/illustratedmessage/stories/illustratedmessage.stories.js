import { html } from "lit";

import { Template as Link } from "@spectrum-css/link/stories/template.js";

import { Template } from "./template";

/**
 * The illustrated message component is used for status and errors. It is also used for calls-to-action, such as within the drop zone component.
 */
export default {
	title: "Components/Illustrated message",
	component: "IllustratedMessage",
	argTypes: {
		useAccentColor: {
			name: "Illustration accent color",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		heading: {
			name: "Heading",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Content",
			},
			control: "text",
		},
		description: {
			name: "Description",
			table: {
				category: "Content",
				disable: true,
			},
		},
		isHorizontal: {
			name: "Horizontal orientation",
			description: "The default content orientation is vertical. Add the horizontal class to align the illustration to the left.",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l"],
			control: "select",
		},
		hasButtons: {
			name: "Show button group",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
	},
	args: {
		rootClass: "spectrum-IllustratedMessage",
		isHorizontal: false,
		size: "m",
		hasButtons: true,
		useAccentColor: false,
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
	},
};

export const Default = Template.bind({});
Default.args = {
	heading: "Error 404: Page not found",
	description: [
		"This page isn't available. Try checking the URL or visit a different page.",
	],
};

/**
 * An accent color class can be used on elements of the illustration SVG.
 */
export const AccentColor = Template.bind({});
AccentColor.tags = ["!dev"];
AccentColor.args = {
	heading: "Drag and drop your file",
	description: [
		() => {
			return html`${Link({ url: "#", text: "Select a file" })} from your computer.`;
		},
	],
	useAccentColor: true,
};
