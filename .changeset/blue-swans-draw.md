---
"@spectrum-css/fieldlabel": major
---

**Breaking change:** migrates Field Label to Spectrum 2.

Additionally:

- `medium` size styles are now the default.
  - Removes `.spectrum-FieldLabel--sizeM` class.
- Uses new font sizes (as per S2 design spec & Spectrum Tokens changes).
- Removes deprecated `--mod-` custom properties.
- Updates documentation
  - Clarifies some docs around "left" and "right", and fixes duplicate ID warnings from examples code.
  - Adds migration guide section to "Form", that currently lives within the
    Field label component.
  - Adds information about asterisk icon sizing.
- Adds Storybook examples for `static` colors.
