import { default as ActionButton } from "@spectrum-css/actionbutton/stories/actionbutton.stories.js";
import { default as CloseButton } from "@spectrum-css/closebutton/stories/closebutton.stories.js";
import { default as Popover } from "@spectrum-css/popover/stories/popover.stories.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isOpen } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { ActionBarGroup } from "./actionbar.test";
import { Template } from "./template";

/**
 * The action bar component is a floating full width bar that appears upon selection.
 */
export default {
	title: "Action bar",
	component: "ActionBar",
	argTypes: {
		isOpen,
		isEmphasized: {
			name: "Emphasized styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isSticky: {
			name: "Sticky",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
		isFixed: {
			name: "Fixed position",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
		isFlexible: {
			name: "Flexible width",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Advanced",
			},
			control: "boolean",
		},
		customPopoverStyles: { table: { disable: true } }
	},
	args: {
		rootClass: "spectrum-ActionBar",
		isOpen: true,
		isEmphasized: false,
		isSticky: false,
		isFixed: false,
		isFlexible: false,
	},
	parameters: {
		layout: "fullscreen",
		docs: {
			story: {
				inline: false,
			}
		},
		actions: {
			handles: [
				...(Popover?.parameters?.actions?.handles ?? []),
				...(CloseButton?.parameters?.actions?.handles ?? []),
				...(ActionButton?.parameters?.actions?.handles ?? []),
			],
		},
		// Getting the Figma link: https://help.figma.com/hc/en-us/articles/360045003494-Storybook-and-Figma
		design: {
			type: "figma",
			url: "https://www.figma.com/file/MPtRIVRzPp2VHiEplwXL2X/S-%2F-Manual?node-id=465%3A3127&t=xbooxCWItOFgG2xM-1",
		},
		componentVersion: version,
	},
};

export const Default = ActionBarGroup.bind({});
Default.args = {};

// ********* VRT ONLY ********* //
export const WithForcedColors = ActionBarGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};

// ********* DOCS ONLY ********* //
export const Emphasized = Template.bind({});
Emphasized.tags = ["autodocs", "!dev"];
Emphasized.args = {
	isEmphasized: true,
};
Emphasized.parameters = {
	chromatic: { disableSnapshot: true },
};
