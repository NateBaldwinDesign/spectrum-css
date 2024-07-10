import { Template as FieldLabel } from "@spectrum-css/fieldlabel/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { Template as PickerButton } from "@spectrum-css/pickerbutton/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { Template as TextField } from "@spectrum-css/textfield/stories/template.js";
import { useArgs } from "@storybook/preview-api";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-Combobox",
	id,
	customClasses = [],
	size = "m",
	isOpen = true,
	isInvalid = false,
	isQuiet = false,
	isDisabled = false,
	showFieldLabel = false,
	fieldLabelText = "Select location",
	fieldLabelPosition = "top",
	isFocused = false,
	isKeyboardFocused = false,
	isLoading = false,
	selectedDay,
} = {}, context = {}) => {
	const [, updateArgs] = useArgs();

	const { globals = {} } = context;
	const lang = globals.lang ?? "en-US";

	// If selectedDay is a string, convert it to a Date object
	if (typeof selectedDay === "string" && selectedDay.length > 0) {
		selectedDay = new Date(selectedDay).toLocaleDateString({ language: lang });
	}

	return html`
		<div>
			${when(showFieldLabel, () =>
				FieldLabel({
					size,
					label: fieldLabelText,
					customStyles: { "max-inline-size": "100px"},
					alignment: fieldLabelPosition === "left" && "left",
				}, context)
			)}
			<div
				class=${classMap({
					[rootClass]: true,
					[`${rootClass}--size${size?.toUpperCase()}`]:
						typeof size !== "undefined",
					"is-open": !isDisabled && isOpen,
					[`${rootClass}--quiet`]: isQuiet,
					"is-invalid": !isDisabled && isInvalid,
					"is-focused": !isDisabled && isFocused,
					"is-keyboardFocused": !isDisabled && isKeyboardFocused,
					"is-loading": isLoading,
					"is-disabled": isDisabled,
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
				id=${ifDefined(id)}
			>
				${[
					TextField({
						size,
						isQuiet,
						isDisabled,
						isInvalid,
						isFocused,
						isKeyboardFocused,
						customClasses: [
							`${rootClass}-textfield`,
							...(isLoading ? ["is-loading"] : []),
						],
						customInputClasses: [`${rootClass}-input`],
						isLoading,
						customProgressCircleClasses: ["spectrum-Combobox-progress-circle"],
						placeholder: "Type here this text should truncate",
						name: "field",
						value: selectedDay,
						onclick: function () {
							if (!isOpen) updateArgs({ isOpen: true });
						},
					}, context),
					PickerButton({
						customClasses: [
							`${rootClass}-button`,
							... isInvalid ? ["is-invalid"] : [],
						],
						size,
						iconType: "ui",
						iconName: "ChevronDown",
						isQuiet,
						isOpen,
						isFocused,
						isKeyboardFocused,
						isDisabled,
						position: "right",
						onclick: function () {
							updateArgs({ isOpen: !isOpen });
						},
					}, context),
					Popover({
						isOpen: isOpen && !isDisabled,
						withTip: false,
						position: "bottom",
						isQuiet,
						customStyles: isOpen
							? {
									position: "absolute",
									top: "100%",
									left: "0",
									width: "100%",
							}
							: {},
						content: [
							Menu({
								size,
								items: [
									{
										label: "Ballard",
									},
									{
										label: "Fremont",
									},
									{
										label: "Greenwood",
									},
									{
										label: "United States of America",
										isDisabled: true,
									},
								],
							}, context),
						],
					}, context),
				]}
			</div>
		</div>
	`;
};

const DefaultVariants = (args, context) => html`
	${Template(args, context)}
	${Template({
		...args,
		isFocused: true,
	}, context)}
	${Template({
		...args,
		isKeyboardFocused: true,
	}, context)}
	${Template({
		...args,
		isDisabled: true,
	}, context)}
	${Template({
		...args,
		isLoading: true,
	}, context)}
	${Template({
		...args,
		isInvalid: true,
	}, context)}
	${Template({
		...args,
		showFieldLabel: true,
		fieldLabelText: "Select location, this label should wrap",
	}, context)}
	${Template({
		...args,
		showFieldLabel: true,
		fieldLabelText: "Select location, this label should wrap",
		fieldLabelPosition: "left",
	}, context)}
`;

export const ComboboxGroup = (args, context) => {
	return html`
		<div style=${styleMap({
			"display": window.isChromatic() ? "none" : "contents"
		})}>
			${Template(args, context)}
		</div>
		<div style=${styleMap({
			"display": window.isChromatic() ? "flex" : "none",
			"gap": "16px",
			"flex-direction": "column",
		})}>
			${DefaultVariants({...args, isOpen: false}, context)}
		</div>
		<div style=${styleMap({
			"display": window.isChromatic() ? "flex" : "none",
			"gap": "176px",
			"flex-direction": "column",
			"margin-block-start": "32px",
		})}>
			${DefaultVariants(args, context)}
		</div>
	`;
};
