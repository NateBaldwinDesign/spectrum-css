import "@spectrum-css/closebutton";
import "@spectrum-css/icon";
import "@spectrum-css/table";
import "@spectrum-css/toast";

import { useOf } from "@storybook/blocks";
import { ResetWrapper } from "@storybook/components";
import { styled } from "@storybook/theming";
import React from "react";
import { Body, Code, LinkableHeading } from "./Typography.jsx";

export const Table = styled.table`
	padding-block: 10px;
`;

export const Toast = ({ variant = "info", children, ...props }) => {
	const Container = styled.div`
		display: none;
		position: fixed;
		top: 0;
		right: 0;
		margin: 1rem;
		z-index: 1000;
		min-inline-size: 300px;

		&.is-open {
			display: block;
		}

        svg {
            --mod-icon-color: var(--highcontrast-toast-text-and-icon-color, var(--mod-toast-text-and-icon-color, var(--spectrum-toast-text-and-icon-color)));
            fill: var(--mod-icon-color);
        }

        .spectrum-Toast-content em {
            font-style: normal;
            text-decoration: underline;
        }
	`;

	document.addEventListener("DOMContentLoaded", () => {
		// Capture all the toast close buttons and add a click event to close the toast.
		const closeButtons = document.querySelectorAll(".spectrum-CloseButton");
		closeButtons.forEach((button) => {
			button.addEventListener("click", () => {
				const toast = button.closest(".docblock-toast");
				if (toast) toast.classList.remove("is-open");
			});
		});
	});

	return (
		<Container {...props} className="sb-unstyled docblock-toast">
            <div className={`spectrum-Toast spectrum-Toast--${variant}`}>
                <svg
                    className="spectrum-Icon spectrum-Icon--sizeM spectrum-Toast-typeIcon"
                    focusable="false"
                    aria-hidden="true"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 36 36"
                >
                    {variant === "positive" ? (
                        <path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm10.666 9.08L16.018 27.341a1.208 1.208 0 0 1-.875.461c-.024.002-.05.002-.073.002a1.2 1.2 0 0 1-.85-.351l-7.784-7.795a1.2 1.2 0 0 1 0-1.698l1.326-1.325a1.201 1.201 0 0 1 1.695 0l5.346 5.347L25.314 8.473A1.203 1.203 0 0 1 27 8.263l1.455 1.133a1.205 1.205 0 0 1 .211 1.684Z"></path>
                    ) : variant === "negative" ? (
                        <path d="M17.127 2.579.4 32.512A1 1 0 0 0 1.272 34h33.456a1 1 0 0 0 .872-1.488L18.873 2.579a1 1 0 0 0-1.746 0ZM20 29.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Zm0-6a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-12a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5Z"></path>
                    ) : variant === "info" ? (
                        <path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm-.3 4.3a2.718 2.718 0 0 1 2.864 2.824 2.664 2.664 0 0 1-2.864 2.863 2.705 2.705 0 0 1-2.864-2.864A2.717 2.717 0 0 1 17.7 6.3ZM22 27a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-6h-1a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9h1a1 1 0 0 1 1 1Z"></path>
                    ) : null}
                </svg>
                <div className="spectrum-Toast-body">
                    <div className="spectrum-Toast-content">{children}</div>
                </div>
                <div className="spectrum-Toast-buttons">
                    <button
                        aria-label="close"
                        className="spectrum-CloseButton spectrum-CloseButton--sizeM spectrum-CloseButton--staticWhite"
                        label="Close"
                    >
                        <svg
                            className="spectrum-Icon spectrum-UIIcon-Cross100 spectrum-Icon--medium spectrum-CloseButton-UIIcon"
                            focusable="false"
                            aria-hidden="true"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 8 8"
                        >
                            <path d="m5.238 4 2.456-2.457A.875.875 0 1 0 6.456.306L4 2.763 1.543.306A.875.875 0 0 0 .306 1.544L2.763 4 .306 6.457a.875.875 0 1 0 1.238 1.237L4 5.237l2.456 2.457a.875.875 0 1 0 1.238-1.237z"></path>
                        </svg>
                    </button>
                </div>
            </div>
		</Container>
	);
};

/**
 * Write the provided text to the clipboard using the Clipboard API and
 * show a toast message to indicate the operation was successful or not.
 *
 * @param {string} text
 */
export function writeTextToClipboard(text) {
	function updateMessage(toast, content) {
		const container = toast.querySelector(".spectrum-Toast-content");
		if (container) container.innerHTML = content;
		else return;
	}

	function toggleToast(toast, open = true) {
		toast.classList.toggle("is-open", open);
	}

	navigator.clipboard.writeText(text).then(
		() => {
			const toast = document.getElementById("clipboard-success");
			const content = `Copied <em>${text}</em> to clipboard`;

			updateMessage(toast, content);
			toggleToast(toast);
			setTimeout(() => {
				toggleToast(toast, false);
			}, 3000);

			console.log(toast, content);
		},
		() => {
			const toast = document.getElementById("clipboard-failure");
			const content = `Failed to copy <em>${text}</em> to clipboard`;

			updateMessage(toast, content);
			toggleToast(toast);
			setTimeout(() => {
				toggleToast(toast, false);
			}, 3000);
		},
	);
}

/**
 * Displays the current version number of the component. The version is read from
 * the component's parameters, where it was sourced from the package.json file.
 *
 * Also displays a component status of "deprecated" if it is set in the story's
 * parameters.
 *
 * Usage of this doc block within MDX template(s):
 *  <PropertiesTable />
 */
export const PropertiesTable = () => {
	const storyMeta = useOf("meta");

	const packageJson = storyMeta?.csfFile?.meta?.parameters?.packageJson ?? {};
	const metadata = storyMeta?.csfFile?.meta?.parameters?.metadata ?? {};

	if (!packageJson?.name) return;
	if (!metadata?.modifiers) return;

	document.addEventListener("DOMContentLoaded", () => {
		// Capture all the table body cells and add a click event to copy the text to the clipboard.
		const tableBodyCells = document.querySelectorAll(
			".docblock-properties-table tbody td",
		);
		tableBodyCells.forEach((cell) => {
			cell.addEventListener("click", () => {
				if (cell.textContent) writeTextToClipboard(cell.textContent);
			});
		});
	});

	return (
		<ResetWrapper>
			<LinkableHeading id="mods" size="m">
				<a aria-hidden="true" href="#mods" tabIndex="-1" target="_self"></a>
				Modifiable custom properties
			</LinkableHeading>
			<Body>
				These are empty CSS custom property hooks available in this component
				that enable one-off customizations specific to a product implementation.
			</Body>
			<Table className="docblock-properties-table sb-unstyled spectrum-Table spectrum-Table--sizeL spectrum-Table--compact">
				<thead className="spectrum-Table-head">
					<tr>
						<th className="spectrum-Table-headCell">Property</th>
					</tr>
				</thead>
				<tbody className="spectrum-Table-body">
					{metadata?.modifiers.map((propertyName) => (
						<tr key={propertyName} className="spectrum-Table-row">
							<td className="spectrum-Table-cell">
								<Code backgroundColor={"transparent"} size="s">
									{propertyName}
								</Code>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
			<Toast id="clipboard-success" variant="positive"></Toast>
			<Toast id="clipboard-failure" variant="negative"></Toast>
		</ResetWrapper>
	);
};
