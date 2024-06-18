---
"@spectrum-css/closebutton": major
---

Migrates Close Button to Spectrum 2 and removes all "static"-specific `--mod-` custom properties as they are no longer needed in this context. Also removes --mod-closebutton-size since we'll be setting rounded border-radius with a single rounding token, to be formally implemented as part of [S2 Corner Rounding](https://github.com/adobe/spectrum-css/pull/2559/files#diff-d6e9caa794bd8e1c659425d223e23ab53a93a254f00fb11a626e1b7563bd0c61R39-R41).

Thanks, [@mdt2](https://github.com/mdt2) for your [contribution](https://github.com/adobe/spectrum-css/pull/2564)!
