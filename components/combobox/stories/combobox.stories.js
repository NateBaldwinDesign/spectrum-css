import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { Template } from "./template";

/**
 * Comboboxes combine a text entry with a picker menu, allowing users to filter longer lists to only the selections matching a query.
 */
export default {
	title: "Combobox",
	component: "Combobox",
	argTypes: {
		size: {
			name: "Size",
			type: { name: "string", required: true },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["s", "m", "l", "xl"],
			control: "select",
		},
		isOpen: {
			name: "Open",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isQuiet: {
			name: "Quiet styling",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isInvalid: {
			name: "Invalid",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isFocused: {
			name: "Focused",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isKeyboardFocused: {
			name: "Keyboard Focused",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isLoading: {
			name: "Loading",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		isDisabled: {
			name: "Disabled",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		showFieldLabel: {
			name: "Show field label",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		fieldLabelText: {
			name: "Field label text",
			type: { name: "text" },
			table: {
				type: { summary: "text" },
				category: "Component",
			},
			control: "text",
			if: { arg: "showFieldLabel", truthy: true },
		},
		fieldLabelPosition: {
			name: "Field label position",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			options: ["top", "left"],
			control: "select",
			if: { arg: "showFieldLabel", truthy: true },
		},
		content: { table: { disable: true } },
	},
	args: {
		rootClass: "spectrum-Combobox",
		size: "m",
		isOpen: true,
		isQuiet: false,
		isInvalid: false,
		isFocused: false,
		isKeyboardFocused: false,
		isLoading: false,
		isDisabled: false,
		showFieldLabel: false,
		fieldLabelText: "Select location",
		content: [
			Menu({
				role: "listbox",
				subrole: "option",
				isSelectable: true,
				items: [
					{
						label: "Ballard",
						isSelected: true,
						isChecked: true,
					},
					{
						label: "Fremont",
					},
					{
						label: "Greenwood",
					},
					{
						type: "divider",
					},
					{
						label: "United States of America",
						isDisabled: true,
					},
				],
			}),
		],
	},
	parameters: {
		actions: {
			handles: [],
		},
		status: {
			type: "migrated",
		},
		docs: {
			story: {
				height: "200px"
			}
		},
	},
};

const defaultVariants = (args) => html`
	<div style=${args.isOpen && "padding-bottom: 160px;"}>
		${Template({
			...args,
		})}
	</div>
	<div style=${args.isOpen && "padding-bottom: 160px;"}>
		${Template({
			...args,
			isFocused: true,
		})}
	</div>
	<div style=${args.isOpen && "padding-bottom: 160px;"}>
		${Template({
			...args,
			isKeyboardFocused: true,
		})}
	</div>
	<div style=${args.isOpen && "padding-bottom: 160px;"}>
		${Template({
			...args,
			isDisabled: true,
		})}
	</div>
	<div style=${args.isOpen && "padding-bottom: 160px;"}>
		${Template({
			...args,
			isLoading: true,
		})}
	</div>
	<div style=${args.isOpen && "padding-bottom: 160px;"}>
		${Template({
			...args,
			isInvalid: true,
		})}
	</div>
	<div style=${args.isOpen && "padding-bottom: 160px;"}>
		${Template({
			...args,
			showFieldLabel: true,
			fieldLabelText: "Select location, this label should wrap",
		})}
	</div>
	<div style=${args.isOpen && "padding-bottom: 160px;"}>
		${Template({
			...args,
			showFieldLabel: true,
			fieldLabelText: "Select location, this label should wrap",
			fieldLabelPosition: "left",
		})}
	</div>
`;

const ComboboxGroup = (args) => html`
	<div style=${styleMap({
		"display": !window.isTestEnv() ? "none" : "flex",
		"gap": "16px",
		"flex-direction": "column",
	})}>
		${defaultVariants({
			...args,
			isOpen: false
		})}
	</div>
	<div style=${styleMap({
		"display": !window.isTestEnv() ? "none" : "flex",
		"gap": "16px",
		"margin-top": "32px",
		"flex-direction": "column",
	})}>
		${defaultVariants(args)}
	</div>
	${Template({
		...args,
		customStyles: {
			...(args.customStyles ?? {}),
			"display": window.isTestEnv() ? "none" : args?.customStyles?.display,
		},
	})}
`;

export const Default = ComboboxGroup.bind({});
Default.args = {};

export const Quiet = ComboboxGroup.bind({});
Quiet.args = {
	isQuiet: true,
};
