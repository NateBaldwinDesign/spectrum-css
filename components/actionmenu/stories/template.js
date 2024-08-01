import { Template as ActionButton } from "@spectrum-css/actionbutton/stories/template.js";
import { Template as Menu } from "@spectrum-css/menu/stories/template.js";
import { Template as Popover } from "@spectrum-css/popover/stories/template.js";
import { getRandomId } from "@spectrum-css/preview/decorators";
import { html } from "lit";

export const Template = ({
	id = getRandomId("actionmenu"),
	testId,
	triggerId = getRandomId("actionmenu-trigger"),
	customClasses = [],
	customStyles = {},
	items = [],
	isOpen = false,
	label,
	iconName = "More",
	size = "m",
	...popoverArgs
} = {}, context = {}) => {
	return html`
		${ActionButton({
			size,
			label,
			hasPopup: "menu",
			iconName,
			id: triggerId,
			customClasses,
		}, context)}
		${Popover({
			size,
			isOpen,
			withTip: false,
			id,
			testId: testId ?? id,
			triggerId,
			position: "bottom-start",
			customStyles,
			content: [
				(passthroughs) => Menu({
					...passthroughs,
					items,
					isOpen,
					size
				}, context)
			],
			...popoverArgs,
		}, context)}
	`;
};
