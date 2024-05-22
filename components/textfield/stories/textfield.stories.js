import { html } from "lit";
import { Template } from "./template";

/**
 * Text fields are text boxes that allow users to input custom text entries with a keyboard. Various decorations can be displayed around the field to communicate the entry requirements.
 */
export default {
	title: "Text field",
	component: "TextField",
	argTypes: {
		isValid: {
			name: "Valid",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		displayLabel: {
			name: "Display field label",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		labelPosition: {
			name: "Label position",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			options: ["top", "side"],
			control: "select",
			if: { arg: "displayLabel", truthy: true },
		},
		labelText: {
			name: "Label text",
			type: { name: "text" },
			table: {
				type: { summary: "text" },
				category: "Component",
			},
			control: "text",
			if: { arg: "displayLabel", truthy: true },
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
			name: "Keyboard focused",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "State",
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
			options: ["s", "m", "l", "xl"],
			control: "select",
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
		multiline: {
			name: "Multiline",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		grows: {
			name: "Grows",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
			if: { arg: "multiline", truthy: true },
		},
		iconName: {
			table: { disable: true },
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
		isRequired: {
			name: "Required",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isReadOnly: {
			name: "Read only",
			type: { name: "boolean" },
			table: {
				type: { summary: "boolean" },
				category: "Component",
			},
			control: "boolean",
		},
		isLoading: {
			name: "Loading",
			type: { name: "boolean" },
			table: {
				disable: true,
				type: { summary: "boolean" },
				category: "State",
			},
			control: "boolean",
		},
		pattern: {
			name: "Pattern",
			type: { name: "string" },
			table: {
				type: { summary: "string" },
				category: "Component",
			},
			control: "text",
		},
		value: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		rootClass: "spectrum-Textfield",
		isValid: false,
		isInvalid: false,
		isDisabled: false,
		isRequired: false,
		isReadOnly: false,
		isFocused: false,
		isKeyboardFocused: false,
		isLoading: false,
		displayLabel: false,
		labelPosition: "top",
		labelText: "Username",
		size: "m",
		multiline: false,
		grows: false,
		isQuiet: false,
	},
	parameters: {
		actions: {
			handles: [
				"click .spectrum-Textfield",
				"focusin .spectrum-Textfield",
				"focusout .spectrum-Textfield"
			],
		},
		status: {
			type: "migrated",
		},
	},
};

const TextFieldGroup = ({ customStyles, ...args }) => html`
	<div style="display: flex; flex-direction: column; gap: 32px;">
		${Template({ customStyles, ...args })}
		${Template({
			displayLabel: true,
			labelText: "Username",
			customStyles: {
				...customStyles,
				"display": !window.isTestEnv() ? "none" : customStyles.display,
			}
		})}
		${Template({
			displayLabel: true,
			labelText: "Username that is really long and wraps onto a second line",
			isInvalid: true,
			customStyles: {
				...customStyles,
				"display": !window.isTestEnv() ? "none" : customStyles.display,
			}
		})}
		${Template({
			displayLabel: true,
			labelText: "Username",
			labelPosition: "side",
			isValid: true,
			value: "username@reallylongemail.com",
			customStyles: {
				...customStyles,
				"display": !window.isTestEnv() ? "none" : customStyles.display,
			}
		})}
	</div>
`;

const TextAreaGroup = ({ customStyles, ...args}) => html`
	<div style="display: flex; flex-direction: column; gap: 32px;">
		${Template({
			customStyles,
			...args,
			multiline: true,
			value: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
		})}
		${Template({
			...args,
			displayLabel: true,
			labelText: "Username",
			multiline: true,
			value: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
			customStyles: {
				...customStyles,
				"display": !window.isTestEnv() ? "none" : customStyles.display,
			}
		})}
		${Template({
			...args,
			displayLabel: true,
			labelText: "Username that is really long and wraps onto a second line",
			isInvalid: true,
			multiline: true,
			value: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
			customStyles: {
				...customStyles,
				"display": !window.isTestEnv() ? "none" : customStyles.display,
			}
		})}
		${Template({
			...args,
			displayLabel: true,
			labelText: "Username",
			labelPosition: "side",
			isValid: true,
			multiline: true,
			value: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
			customStyles: {
				...customStyles,
				"display": !window.isTestEnv() ? "none" : customStyles.display,
			}
		})}
	</div>
`;

export const Default = TextFieldGroup.bind({});
Default.args = {};

export const TextArea = TextAreaGroup.bind({});
TextArea.args = {
	multiline: true,
	grows: true,
	value: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
};
