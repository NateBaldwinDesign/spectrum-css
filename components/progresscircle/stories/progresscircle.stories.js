
import { Template } from "./template";

/**
 * Progress circles show the progression of a system operation such as downloading, uploading, processing, etc. in a visual way. They can represent determinate or indeterminate progress.
 */
export default {
	title: "Components/Progress circle",
	component: "ProgressCircle",
	argTypes: {
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
		isIndeterminate: {
			name: "Indeterminate",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		staticColor: {
			name: "Static color",
			description: "Variants that can be used when the progress circle needs to be placed on top of a colored background or a visual.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Advanced",

			},
			options: ["white", "black"],
			control: "select",
		},
		value: {
			control: {
				type: "range",
				min: 0,
				max: 100
			}
		}
	},
	args: {
		rootClass: "spectrum-ProgressCircle",
		size: "m",
		isIndeterminate: false,
		staticColor: undefined,
		value: 43
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
		layout: "centered"
	},
};

export const Default = Template.bind({});
Default.args = {};
