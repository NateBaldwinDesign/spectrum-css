import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { disableDefaultModes } from "@spectrum-css/preview/modes";
import { isOpen } from "@spectrum-css/preview/types";
import { version } from "../package.json";
import { PopoverGroup } from "./popover.test";
import { Template } from "./template";

/**
 * A popover is used to display transient content (menus, options, additional actions etc.) and appears when clicking/tapping on a source (tools, buttons, etc.). It stands out via its visual style (stroke and drop shadow) and floats on top of the rest of the interface.
 */
export default {
	title: "Popover",
	component: "Popover",
	argTypes: {
		trigger: { table: { disable: true } },
		content: { table: { disable: true } },
		nested: { table: { disable: true } },
		isOpen,
		withTip: {
			name: "Show with tip",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: { type: "boolean" },
			if: { arg: "nested", truthy: false },
		},
		position: {
			name: "Positioning",
			description: "When updating the position, close the popover and reopen it to see the changes in placement.",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "select",
			options: ["top", "top-start", "top-end", "right", "right-start", "right-end", "bottom", "bottom-start", "bottom-end", "left", "left-start", "left-end"],
			if: { arg: "nested", truthy: false },
		},
		offset: {
			name: "Offset",
			description: "The offset in pixels from the trigger.",
			type: { name: "number" },
			table: {
				disable: true,
				type: { summary: "number" },
				category: "Component",
			},
			control: { type: "number" },
		},
	},
	args: {
		rootClass: "spectrum-Popover",
		isOpen: true,
		withTip: false,
		position: "right-start",
		offset: 0,
	},
	parameters: {
		componentVersion: version,
	},
};

export const Default = PopoverGroup.bind({});
Default.args = {
	trigger: (passthroughs) => ActionButton({
		isSelected: true,
		label: "Options",
		...passthroughs,
	}),
	content: [
		(passthroughs) => Menu({
			items: [
				{
					iconName: "Edit",
					label: "Edit",
				},
				{
					iconName: "Copy",
					label: "Copy",
				},
				{
					iconName: "Move",
					label: "Move",
				},
				{
					iconName: "Delete",
					label: "Delete",
				},
			],
			...passthroughs,
		}),
	],
};

export const WithTip = PopoverGroup.bind({});
WithTip.args = {
	withTip: true,
	position: "top",
};

export const Nested = Template.bind({});
Nested.args = {
	isOpen: true,
	trigger: (passthroughs) => ActionButton({
		label: "Options",
		...passthroughs,
	}),
	content: [
		(passthroughs) => Menu({
			items: [
				{
					iconName: "Edit",
					label: "Edit",
				},
			],
			...passthroughs,
		}),
		(passthroughs) => Nested({
			isOpen: true,
			trigger: (passthroughs) => ActionButton({
				label: "More options",
				...passthroughs,
			}),
			content: [
				(passthroughs) => Menu({
					items: [
						{
							iconName: "Edit",
							label: "Edit",
						},
						{
							iconName: "Copy",
							label: "Copy",
						},
						{
							iconName: "Move",
							label: "Move",
						},
						{
							iconName: "Delete",
							label: "Delete",
						},
					],
					...passthroughs
				}),
			],
			...passthroughs,
		}),
	],
};

// ********* VRT ONLY ********* //
export const WithForcedColors = PopoverGroup.bind({});
WithForcedColors.args = Default.args;
WithForcedColors.tags = ["!autodocs", "!dev", "test"];
WithForcedColors.parameters = {
	chromatic: {
		forcedColors: "active",
		modes: disableDefaultModes
	},
};
