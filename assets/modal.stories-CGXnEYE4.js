import{V as r,w as m}from"./decorator-B_b3GAa1.js";import"./lit-element-C96egxJg.js";import{d as c}from"./index-BL42WGY7.js";import{b as d}from"./states-D366RZcH.js";import{T as l}from"./template-DxaIXWdr.js";import{T as u}from"./template-CJCJlaLR.js";import"./capitalize-D60SaZ2R.js";import"./v4-CQkTLCs1.js";import"./if-defined-B5hOZ0d5.js";const p="index.css",g=[".spectrum-Modal",".spectrum-Modal--fullscreen",".spectrum-Modal--fullscreenTakeover",".spectrum-Modal--fullscreenTakeover.is-open",".spectrum-Modal--responsive",".spectrum-Modal-wrapper",".spectrum-Modal-wrapper .spectrum-Modal--responsive",".spectrum-Modal-wrapper.is-open",".spectrum-Modal.is-open"],f=["--mod-modal-background-color","--mod-modal-confirm-border-radius","--mod-modal-confirm-entry-animation-delay","--mod-modal-confirm-entry-animation-distance","--mod-modal-confirm-entry-animation-duration","--mod-modal-confirm-exit-animation-delay","--mod-modal-confirm-exit-animation-duration","--mod-modal-fullscreen-margin","--mod-modal-max-height","--mod-modal-max-width","--mod-modal-transition-animation-duration","--mod-overlay-animation-duration","--mod-overlay-animation-duration-opened"],h=["--spectrum-modal-background-color","--spectrum-modal-confirm-border-radius","--spectrum-modal-confirm-entry-animation-delay","--spectrum-modal-confirm-entry-animation-distance","--spectrum-modal-confirm-entry-animation-duration","--spectrum-modal-confirm-exit-animation-delay","--spectrum-modal-confirm-exit-animation-duration","--spectrum-modal-fullscreen-margin","--spectrum-modal-max-height","--spectrum-modal-max-width","--spectrum-modal-transition-animation-duration"],b=["--spectrum-animation-duration-0","--spectrum-animation-duration-100","--spectrum-animation-duration-200","--spectrum-animation-duration-500","--spectrum-animation-ease-in","--spectrum-animation-ease-out","--spectrum-corner-radius-100","--spectrum-gray-100"],v=[],y={sourceFile:p,selectors:g,modifiers:f,component:h,global:b,"system-theme":[],passthroughs:v,"high-contrast":[]},x="@spectrum-css/modal",k="5.2.0",w="The Spectrum CSS modal component",M="Apache-2.0",T="Adobe",C="https://opensource.adobe.com/spectrum-css/modal",D={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/modal"},q={url:"https://github.com/adobe/spectrum-css/issues"},F={".":"./dist/index.css","./*.md":"./*.md","./dist/*":"./dist/*","./index-*.css":"./dist/index-*.css","./index.css":"./dist/index.css","./metadata.json":"./metadata/metadata.json","./metadata/*":"./metadata/*","./package.json":"./package.json"},j="dist/index.css",S=["dist/*","*.md","package.json","metadata/*"],A={"@spectrum-css/tokens":">=14"},W={"@spectrum-css/commons":"workspace:^","@spectrum-css/tokens":"workspace:^"},L=["spectrum","css","design system","adobe"],O={access:"public"},V=[{rootClass:"spectrum-Modal"}],_={name:x,version:k,description:w,license:M,author:T,homepage:C,repository:D,bugs:q,exports:F,main:j,files:S,peerDependencies:A,devDependencies:W,keywords:L,publishConfig:O,spectrum:V},o=r({Template:u,skipBorders:!0,testData:[{testHeading:"Standard",skipWrapper:!1}]}),P={title:"Modal",component:"Modal",argTypes:{isOpen:d,variant:{name:"Sizing preference",description:'Controls how the modal fills the available space. <ul><li>"responsive" will fill the screen on small viewports.</li><li>"fullscreen" will fill almost all of the available screen space. Includes an outer margin.</li><li>"fullscreenTakeover" will fill all of the available screen space.</li></ul>',table:{type:{summary:"string"},category:"Component"},options:["responsive","fullscreen","fullscreenTakeover"],control:{type:"select"}},content:{table:{disable:!0}}},args:{rootClass:"spectrum-Modal",isOpen:!0,variant:"responsive",customStyles:{padding:"20px"},showUnderlay:!1},parameters:{layout:"fullscreen",docs:{story:{height:"400px",width:"800px"},description:{component:"A modal component is a dialog box/popup window that is displayed on top of the current page using `position: fixed`.\nThis is a base component used by other components, and should not be used on its own. If you\nneed a full-featured modal for displaying content, take a look at the [Dialog](?path=/docs/components-dialog--docs) component instead."}},packageJson:_,metadata:y},decorators:[m]},e=o.bind({});e.args={content:[(n,i)=>l({semantics:"heading",customClasses:["chromatic-ignore"],size:"m",content:["Lorem ipsum dolor sit amet, consectetur adipiscing elit",{semantics:"body",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Auctor augue mauris augue neque gravida. Libero volutpat sed ornare arcu. Quisque egestas diam in arcu cursus euismod quis viverra. Posuere ac ut consequat semper viverra nam libero justo laoreet. Enim ut tellus elementum sagittis vitae et leo duis ut. Neque laoreet suspendisse interdum consectetur libero id faucibus nisl. Diam volutpat commodo sed egestas egestas. Dolor magna eget est lorem ipsum dolor. Vitae suscipit tellus mauris a diam maecenas sed. Turpis in eu mi bibendum neque egestas congue. Rhoncus est pellentesque elit ullamcorper dignissim cras lobortis."}],...n},i)]};e.parameters={docs:{story:{inline:!1}}};const t=o.bind({});t.tags=["!dev"];t.args={...e.args,variant:"fullscreen"};const a=o.bind({});a.tags=["!dev"];a.args={...e.args,variant:"fullscreenTakeover"};const s=o.bind({});s.args=e.args;s.tags=["!autodocs","!dev"];s.parameters={chromatic:{forcedColors:"active",modes:c}};const Q=["Default","Fullscreen","FullscreenTakeover","WithForcedColors"];export{e as Default,t as Fullscreen,a as FullscreenTakeover,s as WithForcedColors,Q as __namedExportsOrder,P as default};
