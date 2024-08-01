import { useOf } from '@storybook/blocks';
import React from "react";
import "./styles.css";

/**
 * Displays the current version number of the component. The version is read from
 * the component's parameters, where it was sourced from the package.json file.
 *
 * Also displays a component status of "deprecated" if it is set in the story's
 * parameters.
 *
 * Usage of this doc block within MDX template(s):
 *  <ComponentDetails />
 */
const ComponentDetails = ({ of }) => {
	const resolvedOf = useOf(of || 'story', ['story', 'meta']);

    switch (resolvedOf.type) {
        case 'story': {
          return <h1>{resolvedOf.story.name}</h1>;
        }
        case 'meta': {
          return <h1>{resolvedOf.preparedMeta.title}</h1>;
        }
      }

      return null;
};

export default ComponentDetails;
