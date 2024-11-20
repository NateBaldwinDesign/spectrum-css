import{d as D}from"./index-BL42WGY7.js";import{h as V,a as j,l as A}from"./states-D366RZcH.js";import _ from"./radio.stories-gJ_bfj3-.js";import{V as M}from"./decorator-B_b3GAa1.js";import{T as e}from"./template-yFw8yCf1.js";const U="index.css",W=[".spectrum-FieldGroup",".spectrum-FieldGroup--horizontal .spectrum-FieldGroupInputLayout",".spectrum-FieldGroup--horizontal .spectrum-FieldGroupInputLayout .spectrum-FieldGroup-item:not(:last-child)",".spectrum-FieldGroup--horizontal .spectrum-FieldGroupInputLayout .spectrum-HelpText",".spectrum-FieldGroup--sidelabel",".spectrum-FieldGroup--toplabel",".spectrum-FieldGroup--vertical .spectrum-FieldGroupInputLayout",".spectrum-FieldGroupInputLayout"],B=[],E=["--spectrum-fieldgroup-margin"],J=["--spectrum-spacing-300"],K=[],N={sourceFile:U,selectors:W,modifiers:B,component:E,global:J,"system-theme":[],passthroughs:K,"high-contrast":[]},Q="@spectrum-css/fieldgroup",X="5.3.0",Y="The Spectrum CSS fieldgroup component",Z="Apache-2.0",$="Adobe",ee="https://opensource.adobe.com/spectrum-css/fieldgroup",te={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/fieldgroup"},oe={url:"https://github.com/adobe/spectrum-css/issues"},ae={".":"./dist/index.css","./*.md":"./*.md","./dist/*":"./dist/*","./index-*.css":"./dist/index-*.css","./index.css":"./dist/index.css","./metadata.json":"./metadata/metadata.json","./metadata/*":"./metadata/*","./package.json":"./package.json"},se="dist/index.css",ie=["dist/*","*.md","package.json","metadata/*"],re={"@spectrum-css/checkbox":">=9","@spectrum-css/helptext":">=5","@spectrum-css/radio":">=9","@spectrum-css/tokens":">=14"},ne={"@spectrum-css/checkbox":{optional:!0},"@spectrum-css/helptext":{optional:!0},"@spectrum-css/radio":{optional:!0}},le={"@spectrum-css/checkbox":"workspace:^","@spectrum-css/helptext":"workspace:^","@spectrum-css/radio":"workspace:^","@spectrum-css/tokens":"workspace:^"},ce=["spectrum","css","design system","adobe"],de={access:"public"},pe=[{rootClass:"spectrum-FieldGroup",swc:"https://opensource.adobe.com/spectrum-web-components/components/field-group/"}],ue={name:Q,version:X,description:Y,license:Z,author:$,homepage:ee,repository:te,bugs:oe,exports:ae,main:se,files:ie,peerDependencies:re,peerDependenciesMeta:ne,devDependencies:le,keywords:ce,publishConfig:de,spectrum:pe},P=M({Template:e,testData:[{testHeading:"Default"},{testHeading:"Vertical checkboxes",inputType:"checkbox"},{testHeading:"Horizontal radios",layout:"horizontal"},{testHeading:"Horizontal checkboxes",layout:"horizontal",inputType:"checkbox",helpText:"Make a selection."},{testHeading:"Radios label position: side",label:"Pick one:",labelPosition:"side"},{testHeading:"Checkboxes label position: side",labelPosition:"side",inputType:"checkbox"},{testHeading:"Horizontal radios label position: side",label:"Pick one:",labelPosition:"side",layout:"horizontal",inputType:"radio"},{testHeading:"Horizontal checkboxes label position: side",label:"Pick one:",labelPosition:"side",layout:"horizontal",inputType:"checkbox"}],stateData:[{testHeading:"Invalid",isInvalid:!0},{testHeading:"Read-only",isReadOnly:!0},{testHeading:"Required: asterisk",isRequired:!0},{testHeading:"Optional",helpText:""}]});var k,x;const me={title:"Field group",component:"FieldGroup",argTypes:{label:{name:"Label",description:"The label for the field group component.",type:{name:"string"}},inputType:{name:"Input type",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},options:["checkbox","radio"],control:"select"},layout:{name:"Layout",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},options:["vertical","horizontal"],control:"select"},labelPosition:{name:"Label Position",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},options:["top","side"],control:"select"},isInvalid:V,items:{table:{disable:!0}},fieldLabel:{table:{disable:!0}},helpText:{table:{disable:!0}},isRequired:j,isReadOnly:A},args:{rootClass:"spectrum-FieldGroup",inputType:"radio",labelPosition:"top",layout:"vertical",label:"Field group label",helpText:"Select an option.",items:[{label:"Apples are best",customClasses:["spectrum-FieldGroup-item"]},{label:"Bananas forever",customClasses:["spectrum-FieldGroup-item"]},{label:"Pears or bust",customClasses:["spectrum-FieldGroup-item"]}],isInvalid:!1,isRequired:!1,isReadOnly:!1},parameters:{actions:{handles:[...((x=(k=_.parameters)==null?void 0:k.actions)==null?void 0:x.handles)??[]]},packageJson:ue,metadata:N,docs:{description:{component:`A field group is a group of fields which are usually radios (also known as a radio group) or checkboxes
(also known as a checkbox group). A field group is composed of a field label, a group of radio
inputs or checkboxes, and an optional help text component.

## Usage notes

- **Markup:** The field group items other than the label must be wrapped in a nested \`div\` with the \`spectrum-FieldGroupInputLayout\`
class to control their layout separately from the label. The class \`spectrum-FieldGroup-item\` should also be applied to each checkbox or radio.
- **Roles:** For radio groups, the attribute \`role="radiogroup"\` should be used. For a checkbox group, use \`role="group"\`.
- **Field label:** The field label within the field group can be used to mark a field group as [optional or required](#required-or-optional).
- **Help text:** Help text may or may not appear below a field group and is necessary when denoting invalid
checkbox fields, invalid radio button fields, and required fields.`}}},tags:["!autodocs"]},y=P.bind({});y.args={};const r=P.bind({});r.args=y.args;r.tags=["!autodocs","!dev"];r.parameters={chromatic:{forcedColors:"active",modes:D}};const n=e.bind({});n.tags=["!dev"];n.args={layout:"vertical",inputType:"radio"};n.parameters={chromatic:{disableSnapshot:!0}};const l=e.bind({});l.tags=["!dev"];l.args={layout:"vertical",inputType:"checkbox"};l.parameters={chromatic:{disableSnapshot:!0}};const c=e.bind({});c.tags=["!dev"];c.args={layout:"horizontal",inputType:"radio"};c.parameters={chromatic:{disableSnapshot:!0}};const d=e.bind({});d.tags=["!dev"];d.args={layout:"horizontal",inputType:"checkbox"};d.parameters={chromatic:{disableSnapshot:!0}};const p=e.bind({});p.tags=["!dev"];p.args={layout:"horizontal",inputType:"radio",isInvalid:!0};p.parameters={chromatic:{disableSnapshot:!0}};const u=e.bind({});u.tags=["!dev"];u.args={layout:"horizontal",inputType:"checkbox",isInvalid:!0};u.parameters={chromatic:{disableSnapshot:!0}};const t=e.bind({});t.tags=["!dev"];t.args={inputType:"radio",fieldLabel:"Radio group label (required)"};t.parameters={chromatic:{disableSnapshot:!0}};const m=e.bind({});m.tags=["!dev"];m.args={fieldLabel:"Checkbox group label",inputType:"checkbox",isRequired:!0};m.parameters={chromatic:{disableSnapshot:!0}};const o=e.bind({});o.tags=["!dev"];o.args={fieldLabel:"Checkbox group label (optional)",helpText:"",inputType:"checkbox"};o.parameters={chromatic:{disableSnapshot:!0}};const a=e.bind({});a.tags=["!dev"];a.args={labelPosition:"side",inputType:"radio",layout:"vertical"};a.parameters={chromatic:{disableSnapshot:!0}};const b=e.bind({});b.tags=["!dev"];b.args={labelPosition:"side",inputType:"radio",layout:"horizontal"};b.parameters={chromatic:{disableSnapshot:!0}};const h=e.bind({});h.tags=["!dev"];h.args={labelPosition:"side",inputType:"checkbox",layout:"vertical"};h.parameters={chromatic:{disableSnapshot:!0}};const g=e.bind({});g.tags=["!dev"];g.args={labelPosition:"side",inputType:"checkbox",layout:"horizontal"};g.parameters={chromatic:{disableSnapshot:!0}};const s=e.bind({});s.tags=["!dev"];s.args={isReadOnly:!0,inputType:"checkbox",helpText:void 0};s.parameters={chromatic:{disableSnapshot:!0}};const i=e.bind({});i.tags=["!dev"];i.args={isReadOnly:!0,inputType:"radio"};i.parameters={chromatic:{disableSnapshot:!0}};var f,v,T;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,description:{story:`Field groups can be marked as optional or required, depending on the situation.
If required, the field group must either contain a "(required)" label or an asterisk. If an asterisk is used, help text must explain what the asterisk means.`,...(T=(v=t.parameters)==null?void 0:v.docs)==null?void 0:T.description}}};var F,R,S;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,description:{story:'Optional field groups can be denoted with text added to the end of the label "(optional)" or have no indication at all.',...(S=(R=o.parameters)==null?void 0:R.docs)==null?void 0:S.description}}};var C,H,z;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,description:{story:"The field group label has two layout options: the label can be top aligned with `spectrum-FieldGroup spectrum-FieldGroup--toplabel`, or side aligned with `spectrum-FieldGroup spectrum-FieldGroup--sidelabel`.",...(z=(H=a.parameters)==null?void 0:H.docs)==null?void 0:z.description}}};var G,w,I;s.parameters={...s.parameters,docs:{...(G=s.parameters)==null?void 0:G.docs,description:{story:`Implementations should include the following behavior for read-only checkboxes:
- Read-only checkboxes are immutable, i.e. their checked state cannot be changed.
- Unlike disabled checkbox groups, the normally focusable elements of a checkbox group should remain focusable.`,...(I=(w=s.parameters)==null?void 0:w.docs)==null?void 0:I.description}}};var L,q,O;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,description:{story:`A group of read-only radio buttons.

Review the individual story for more features of [read-only radio buttons](?path=/docs/components-radio--docs#read-only).`,...(O=(q=i.parameters)==null?void 0:q.docs)==null?void 0:O.description}}};const be=["Default","WithForcedColors","VerticalRadio","VerticalCheckbox","HorizontalRadio","HorizontalCheckbox","InvalidRadio","InvalidCheckbox","Required","RequiredAsterisk","Optional","VerticalSideLabelRadio","HorizontalSideLabelRadio","VerticalSideLabelCheckbox","HorizontalSideLabelCheckbox","ReadOnlyCheckbox","ReadOnlyRadio"],fe=Object.freeze(Object.defineProperty({__proto__:null,Default:y,HorizontalCheckbox:d,HorizontalRadio:c,HorizontalSideLabelCheckbox:g,HorizontalSideLabelRadio:b,InvalidCheckbox:u,InvalidRadio:p,Optional:o,ReadOnlyCheckbox:s,ReadOnlyRadio:i,Required:t,RequiredAsterisk:m,VerticalCheckbox:l,VerticalRadio:n,VerticalSideLabelCheckbox:h,VerticalSideLabelRadio:a,WithForcedColors:r,__namedExportsOrder:be,default:me},Symbol.toStringTag,{value:"Module"}));export{fe as F,c as H,p as I,o as O,t as R,n as V,l as a,d as b,u as c,m as d,a as e,b as f,h as g,g as h,s as i,i as j};
