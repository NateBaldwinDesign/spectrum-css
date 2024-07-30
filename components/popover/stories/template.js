import { getRandomId, renderContent } from "@spectrum-css/preview/decorators/utilities.js";
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
	position = "top",
	customClasses = [],
	customStyles = {},
	id = getRandomId("popover"),
	testId,
	triggerId = getRandomId("popover-trigger"),
	trigger,
	content = [],
} = {}, context = {}) => {
	const { globals = {}, updateArgs } = context;
	const textDir = globals.textDirection ?? "ltr";
	const isNestedPopover = id === "popover-nested" || id === "popover-nested-2";

	const offset = "var(--spectrum-popover-animation-distance)";
	const positionParts = position.split("-");
	const anchorPositions = {};

	// [positionParts[0] === "top" ? "bottom": positionParts[0] === "bottom" ? "top" : positionParts[0] === "right" ? "left" : "right"]: `anchor(${positionParts[0]})`,
	// "justify-self": "anchor-center",
	// [positionParts[0] === "top" ? "margin-block-end": "margin-block-start"]: "var(--spectrum-popover-animation-distance)",

	let templateAreas = "'trigger'";
	if (isOpen) {
		templateAreas = "'popover' 'trigger'";
		switch (positionParts[0]) {
			case "top":
				anchorPositions["bottom"] = "anchor(top)";
				anchorPositions["margin-bottom"] = offset;
				templateAreas = "'popover' 'trigger'";
				break;
			case "bottom":
				anchorPositions["top"] = "anchor(bottom)";
				anchorPositions["margin-top"] = offset;
				templateAreas = "'trigger' 'popover'";
				break;
			case "right":
				anchorPositions["left"] = "anchor(right)";
				anchorPositions["margin-left"] = offset;
				templateAreas = "'trigger popover'";
				break;
			case "left":
				anchorPositions["right"] = "anchor(left)";
				anchorPositions["margin-right"] = offset;
				templateAreas = "'popover trigger'";
				break;
			case "start":
				anchorPositions["inset-inline-start"] = "anchor(end)";
				anchorPositions["margin-inline-start"] = offset;
				templateAreas = textDir === "ltr" ? "'popover trigger'" : "'trigger popover'";
				break;
			case "end":
				anchorPositions["inset-inline-end"] = "anchor(start)";
				anchorPositions["margin-inline-end"] = offset;
				templateAreas = textDir === "ltr" ? "'trigger popover'" : "'popover trigger'";
				break;
		}
	}

	let placeItems = "center";
	switch (positionParts[1]) {
		case "left":
			anchorPositions["justify-self"] = "anchor-center";
			placeItems = "flex-start";
			break;
		case "start":
			placeItems = "flex-start";
			break;
		case "top":
			placeItems = "flex-start";
			break;
		case "right":
		case "end":
		case "bottom":
			placeItems = "flex-end";
			break;
		default:
			anchorPositions["justify-self"] = "anchor-center";
	}

	return html`
		<div style=${styleMap({
			"block-size": "400px",
			"inline-size": "400px",
			"display": "grid",
			"place-items": "center",
		})}>
			${when(typeof trigger === "function", (passthroughs) => trigger({
				onclick: function() {
					updateArgs({ isOpen: !isOpen });
				},
				...passthroughs,
				isSelected: isNestedPopover ?? isOpen,
				isOpen: isNestedPopover ?? true,
				id: triggerId,
				popupId: id,
				customStyles: {
					...passthroughs.customStyles,
					"anchor-name": `--${triggerId}`,
				},
			}))}

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
				style=${ifDefined(styleMap({
					"position-anchor": `--${triggerId}`,
					...anchorPositions,
					...customStyles
				}))}
				role="presentation"
				id=${ifDefined(id)}
				data-testid=${ifDefined(testId ?? id)}
				anchor=${ifDefined(triggerId)}
				?popover=${triggerId || trigger}
			>
				${renderContent(content)}
				${withTip
					? position && ["top", "bottom"].some((e) => position.startsWith(e))
						? html`<svg class="${rootClass}-tip" viewBox="0 -0.5 16 9" width="10"><path class="${rootClass}-tip-triangle" d="M-1,-1 8,8 17,-1"></svg>`
						: html`<svg class="${rootClass}-tip" viewBox="0 -0.5 9 16" width="10"><path class="${rootClass}-tip-triangle" d="M-1,-1 8,8 -1,17"></svg>`
					: ""}
			</div>
		</div>
	`;
};
