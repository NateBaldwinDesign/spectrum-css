import{d as p}from"./index-BL42WGY7.js";import{i as u,b as h}from"./variants-YiDXN7gG.js";import{V as l}from"./decorator-B_b3GAa1.js";import{T as s,A as d}from"./template-BS_ooYDM.js";import"./lit-element-C96egxJg.js";import"./capitalize-D60SaZ2R.js";import"./v4-CQkTLCs1.js";const g="index.css",b=[".spectrum-CoachIndicator",".spectrum-CoachIndicator--dark .spectrum-CoachIndicator-ring",".spectrum-CoachIndicator--light .spectrum-CoachIndicator-ring",".spectrum-CoachIndicator--quiet",".spectrum-CoachIndicator--staticWhite .spectrum-CoachIndicator-ring",".spectrum-CoachIndicator-ring",".spectrum-CoachIndicator-ring:first-child",".spectrum-CoachIndicator-ring:nth-child(2)",".spectrum-CoachIndicator-ring:nth-child(3)","0%","50%","to"],f=["--mod-coach-animation-indicator-ring-center-delay-multiple","--mod-coach-animation-indicator-ring-duration","--mod-coach-animation-indicator-ring-outer-delay-multiple","--mod-coach-indicator-animation-name","--mod-coach-indicator-block-size","--mod-coach-indicator-gap","--mod-coach-indicator-inline-size","--mod-coach-indicator-inner-animation-delay-multiple","--mod-coach-indicator-left","--mod-coach-indicator-min-block-size","--mod-coach-indicator-min-inline-size","--mod-coach-indicator-quiet-animation-ring-inner-delay-multiple","--mod-coach-indicator-quiet-ring-diameter","--mod-coach-indicator-ring-block-size","--mod-coach-indicator-ring-border-size","--mod-coach-indicator-ring-dark-color","--mod-coach-indicator-ring-default-color","--mod-coach-indicator-ring-inline-size","--mod-coach-indicator-ring-light-color","--mod-coach-indicator-top"],y=["--spectrum-coach-indicator-animation-keyframe-0-opacity","--spectrum-coach-indicator-animation-keyframe-0-scale","--spectrum-coach-indicator-animation-keyframe-100-opacity","--spectrum-coach-indicator-animation-keyframe-100-scale","--spectrum-coach-indicator-animation-keyframe-50-opacity","--spectrum-coach-indicator-animation-keyframe-50-scale","--spectrum-coach-indicator-animation-name","--spectrum-coach-indicator-block-size","--spectrum-coach-indicator-gap","--spectrum-coach-indicator-inline-size","--spectrum-coach-indicator-inner-animation-delay-multiple","--spectrum-coach-indicator-left","--spectrum-coach-indicator-min-block-size","--spectrum-coach-indicator-min-inline-size","--spectrum-coach-indicator-quiet-animation-keyframe-0-scale","--spectrum-coach-indicator-quiet-animation-ring-inner-delay-multiple","--spectrum-coach-indicator-quiet-ring-diameter","--spectrum-coach-indicator-ring-block-size","--spectrum-coach-indicator-ring-border-size","--spectrum-coach-indicator-ring-dark-color","--spectrum-coach-indicator-ring-default-color","--spectrum-coach-indicator-ring-diameter","--spectrum-coach-indicator-ring-inline-size","--spectrum-coach-indicator-ring-light-color","--spectrum-coach-indicator-ring-static-white-color","--spectrum-coach-indicator-top"],k=["--spectrum-animation-duration-6000","--spectrum-border-width-200","--spectrum-coach-animation-indicator-ring-center-delay-multiple","--spectrum-coach-animation-indicator-ring-duration","--spectrum-coach-animation-indicator-ring-inner-delay-multiple","--spectrum-coach-animation-indicator-ring-outer-delay-multiple"],C=[],v={sourceFile:g,selectors:b,modifiers:f,component:y,global:k,"system-theme":[],passthroughs:C,"high-contrast":[]},w="@spectrum-css/coachindicator",I="2.2.0",D="The Spectrum CSS Coach Indicator component ",z="Apache-2.0",S="Adobe",x="https://opensource.adobe.com/spectrum-css/coachindicator",A={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/coachindicator"},Q={url:"https://github.com/adobe/spectrum-css/issues"},V={".":"./dist/index.css","./*.md":"./*.md","./dist/*":"./dist/*","./index-*.css":"./dist/index-*.css","./index.css":"./dist/index.css","./metadata.json":"./metadata/metadata.json","./metadata/*":"./metadata/*","./package.json":"./package.json"},W="dist/index.css",T=["dist/*","*.md","package.json","metadata/*"],q={"@spectrum-css/tokens":">=14.6.0"},j={"@spectrum-css/tokens":"workspace:^"},H=["spectrum","css","design system","adobe"],F={access:"public"},E=[{guidelines:"https://spectrum-contributions.corp.adobe.com/page/coach-indicator-beta",rootClass:"spectrum-CoachIndicator",swc:"https://opensource.adobe.com/spectrum-web-components/components/coach-indicator/"}],M={name:w,version:I,description:D,license:z,author:S,homepage:x,repository:A,bugs:Q,exports:V,main:W,files:T,peerDependencies:q,devDependencies:j,keywords:H,publishConfig:F,spectrum:E},m=l({Template:s,skipBorders:!1,testData:[{testHeading:"Default",variant:"default"},{testHeading:"Dark",variant:"dark",wrapperStyles:{"background-color":"rgba(248 248 248 / 80%)","border-radius":"4px"}},{testHeading:"Light",variant:"light",wrapperStyles:{"background-color":"rgba(0 0 0 / 80%)","border-radius":"4px"}},{testHeading:"Static White",staticColor:"white"}],stateData:[{testHeading:"Quiet",isQuiet:!0}]}),O={title:"Coach indicator",component:"CoachIndicator",argTypes:{isQuiet:u,variant:{name:"Variant",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},options:["default","dark","light"],control:"select"},staticColor:{...h,options:["white"]}},args:{rootClass:"spectrum-CoachIndicator",isQuiet:!1,variant:"default"},parameters:{packageJson:M,metadata:v,docs:{description:{component:`The coach indicator component can be used to bring added attention to specific parts of a page.

Coach indicator is primarily used along with the [coach mark](/docs/components-coach-mark--docs) component.

**Deprecation notice for S2**: The "dark" variant will be deprecated entirely, and "light" variant will be deprecated in favor of "static white".`}}}},a=m.bind({});a.args={};a.parameters={chromatic:{prefersReducedMotion:"reduce",pauseAnimationAtEnd:!0,modes:{"Dark | RTL":{disable:!0}}}};a.tags=["!autodocs"];const o=d.bind({});o.tags=["!dev"];o.storyName="Default";o.parameters={chromatic:{disableSnapshot:!0}};const i=d.bind({});i.tags=["!dev"];i.storyName="Quiet";i.args={isQuiet:!0};i.parameters={chromatic:{disableSnapshot:!0}};const t=s.bind({});t.args={staticColor:"white"};t.tags=["!dev"];t.storyName="Static White";t.parameters={chromatic:{disableSnapshot:!0}};const c=m.bind({});c.args=a.args;c.tags=["!autodocs","!dev"];c.parameters={chromatic:{forcedColors:"active",prefersReducedMotion:"reduce",pauseAnimationAtEnd:!0,modes:p}};var e,r,n;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,description:{story:"When an indicator needs to be placed on top of a visual, use the static white option. Static white does not change values depending upon the color theme.",...(n=(r=t.parameters)==null?void 0:r.docs)==null?void 0:n.description}}};const K=["Default","DefaultVariants","QuietVariants","StaticWhite","WithForcedColors"];export{a as Default,o as DefaultVariants,i as QuietVariants,t as StaticWhite,c as WithForcedColors,K as __namedExportsOrder,O as default};
