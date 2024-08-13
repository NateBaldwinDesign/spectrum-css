import { html } from "lit";
import { classMap } from "lit/directives/class-map.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";

import "../index.css";
import "../themes/express.css";
import "../themes/spectrum-two.css";
import "../themes/spectrum.css";

export const Template = ({
	rootClass = "spectrum-DropIndicator",
	customClasses = [],
	customStyles = {},
	direction = "vertical",
	size = "300px",
} = {}) => {
	return html`
		<div
			class=${classMap({
				[rootClass]: true,
				[`${rootClass}--${direction}`]: typeof direction !== "undefined",
				...customClasses.reduce((a, c) => ({ ...a, [c]: true }), {}),
			})}
			style=${ifDefined(styleMap({
				"block-size": direction == "vertical" ? size : undefined,
				"inline-size": direction == "horizontal" ? size : undefined,
				...customStyles,
			}))}
		></div>
	`;
};

export const DocsDropIndicatorGroup = (args, context) => html`
	<div style=${styleMap({
		"display": "flex",
		"align-items": "center",
		"gap": "16px",
		"justify-content": "space-evenly",
	})}>
	${Template({
			...args,
		}, context)}
		${Template({
			...args,
			direction: "horizontal",
		}, context)}
	</div>
`;
