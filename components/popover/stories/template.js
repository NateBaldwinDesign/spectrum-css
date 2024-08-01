import { getRandomId, renderContent } from "@spectrum-css/preview/decorators";
import "@spectrum-web-components/overlay/sp-overlay.js";
import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";

import "../index.css";

export const Template = ({
	rootClass = "spectrum-Popover",
	size = "m",
	isOpen = false,
	withTip = false,
	position = "right-start",
	customClasses = [],
	id = getRandomId("popover"),
	testId,
	triggerId = getRandomId("popover-trigger"),
	triggerEvent = "click",
	customStyles = {},
	trigger,
	offset = 8,
	content = [],
} = {}, context = {}) => {
	const { updateArgs } = context;

	const toggleOpen = () => updateArgs({ isOpen: !isOpen });
	if (withTip) offset += 4;

	return html`
		${when(trigger, () => renderContent(trigger, {
			args: {
				isSelected: isOpen,
				id: triggerId,
				popupId: id,
				onclick: toggleOpen
			},
			context,
		}))}
		<sp-overlay
			trigger=${`${triggerId}@${triggerEvent}`}
			placement=${position}
			receives-focus="auto"
			offset=${offset}
			?open=${isOpen}
			?delayed=${false}
			type="manual"
			onsp-closed=${toggleOpen}
		>
			<div
				class=${classMap({
					[rootClass]: true,
					"is-open": isOpen,
					[`${rootClass}--size${size?.toUpperCase()}`]:
						typeof size !== "undefined",
					[`${rootClass}--withTip`]: withTip,
					[`${rootClass}--${position}`]: typeof position !== "undefined",
					...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
				})}
				style=${styleMap({
					"inline-size": "max-content",
					...customStyles,
					// Force relative positioning to work with sp-overlay
					"position": "static"
				})}
				role="presentation"
				id=${ifDefined(id)}
				data-testid=${ifDefined(testId ?? id)}
			>
				${renderContent(content)}
				${withTip
					? position && ["top", "bottom"].some((e) => position.startsWith(e))
						? html`<svg class="${rootClass}-tip" viewBox="0 -0.5 16 9" width="10"><path class="${rootClass}-tip-triangle" d="M-1,-1 8,8 17,-1"></svg>`
						: html`<svg class="${rootClass}-tip" viewBox="0 -0.5 9 16" width="10"><path class="${rootClass}-tip-triangle" d="M-1,-1 8,8 -1,17"></svg>`
					: ""}
			</div>
		</sp-overlay>
	`;
};
