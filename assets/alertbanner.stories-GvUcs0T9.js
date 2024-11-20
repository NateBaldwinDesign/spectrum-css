import{d as q}from"./index-BL42WGY7.js";import{b as V}from"./states-D366RZcH.js";import{R as s,s as S,n as u,g as j,C as i,V as L}from"./decorator-B_b3GAa1.js";import{T as W}from"./template-CPwa5MIl.js";import{T as F}from"./template-CnnmzfUi.js";import{T as M}from"./template-CaVWWigL.js";import{T as R}from"./template-BOh7f2NE.js";import{k as c}from"./lit-element-C96egxJg.js";import{t as _}from"./if-defined-B5hOZ0d5.js";import"./capitalize-D60SaZ2R.js";import"./v4-CQkTLCs1.js";import"./template-C4DdnWO9.js";import"./upperCase-0eNr0WW7.js";import"./_createCompounder-DY9ZW94_.js";const E="index.css",G=[".spectrum-AlertBanner",".spectrum-AlertBanner--info",".spectrum-AlertBanner--negative",".spectrum-AlertBanner-body",".spectrum-AlertBanner-content",".spectrum-AlertBanner-end",".spectrum-AlertBanner-icon",".spectrum-AlertBanner-text",".spectrum-AlertBanner.is-open"],J=["--mod-alert-banner-bottom-text","--mod-alert-banner-close-button-spacing","--mod-alert-banner-edge-to-button","--mod-alert-banner-edge-to-divider","--mod-alert-banner-font-color","--mod-alert-banner-font-size","--mod-alert-banner-icon-size","--mod-alert-banner-icon-to-text","--mod-alert-banner-informative-background","--mod-alert-banner-max-inline-size","--mod-alert-banner-min-height","--mod-alert-banner-negative-background","--mod-alert-banner-netural-background","--mod-alert-banner-size","--mod-alert-banner-start-edge","--mod-alert-banner-text-to-button-horizontal","--mod-alert-banner-text-to-button-vertical","--mod-alert-banner-text-to-divider","--mod-alert-banner-top-icon","--mod-alert-banner-top-text"],U=["--spectrum-alert-banner-bottom-text","--spectrum-alert-banner-bottom-to-text","--spectrum-alert-banner-close-button-spacing","--spectrum-alert-banner-edge-to-button","--spectrum-alert-banner-edge-to-divider","--spectrum-alert-banner-font-color","--spectrum-alert-banner-font-size","--spectrum-alert-banner-icon-size","--spectrum-alert-banner-icon-to-text","--spectrum-alert-banner-informative-background","--spectrum-alert-banner-max-inline-size","--spectrum-alert-banner-min-height","--spectrum-alert-banner-minimum-height","--spectrum-alert-banner-negative-background","--spectrum-alert-banner-netural-background","--spectrum-alert-banner-size","--spectrum-alert-banner-start-edge","--spectrum-alert-banner-text-to-button-horizontal","--spectrum-alert-banner-text-to-button-vertical","--spectrum-alert-banner-text-to-divider","--spectrum-alert-banner-top-icon","--spectrum-alert-banner-top-text","--spectrum-alert-banner-top-to-text","--spectrum-alert-banner-top-to-workflow-icon","--spectrum-alert-banner-width"],K=["--spectrum-border-width-100","--spectrum-font-size-100","--spectrum-informative-background-color-default","--spectrum-negative-background-color-default","--spectrum-neutral-background-color-default","--spectrum-neutral-subdued-background-color-default","--spectrum-spacing-300","--spectrum-text-to-visual-300","--spectrum-white","--spectrum-workflow-icon-size-100"],P=["--mod-button-margin-block","--mod-button-margin-left","--mod-button-margin-right","--mod-closebutton-align-self","--mod-closebutton-margin-inline","--mod-closebutton-margin-top","--mod-divider-vertical-align","--mod-divider-vertical-height","--mod-divider-vertical-margin"],Q={sourceFile:E,selectors:G,modifiers:J,component:U,global:K,"system-theme":["--system-spectrum-alertbanner-spectrum-alert-banner-netural-background"],passthroughs:P,"high-contrast":["--highcontrast-alert-banner-border-color","--highcontrast-alert-banner-border-width"]},X="@spectrum-css/alertbanner",Z="2.3.0",ee="The Spectrum CSS alertbanner component",te="Apache-2.0",ne="Adobe",ae="https://opensource.adobe.com/spectrum-css/alertbanner",re={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/alertbanner"},oe={url:"https://github.com/adobe/spectrum-css/issues"},se={".":"./dist/index.css","./*.md":"./*.md","./dist/*":"./dist/*","./index-*.css":"./dist/index-*.css","./index.css":"./dist/index.css","./metadata.json":"./metadata/metadata.json","./metadata/*":"./metadata/*","./package.json":"./package.json"},ie="dist/index.css",ce=["dist/*","*.md","package.json","metadata/*"],le={"@spectrum-css/button":">=13","@spectrum-css/closebutton":">=5","@spectrum-css/divider":">=3","@spectrum-css/icon":">=7","@spectrum-css/tokens":">=14"},ue={"@spectrum-css/icon":{optional:!0}},de={"@spectrum-css/button":"workspace:^","@spectrum-css/closebutton":"workspace:^","@spectrum-css/divider":"workspace:^","@spectrum-css/icon":"workspace:^","@spectrum-css/tokens":"workspace:^"},me=["spectrum","css","design system","adobe"],pe={access:"public"},be=[{guidelines:"https://spectrum.adobe.com/page/alert-banner",rootClass:"spectrum-AlertBanner",swc:"https://opensource.adobe.com/spectrum-web-components/components/alert-banner/"}],ge={name:X,version:Z,description:ee,license:te,author:ne,homepage:ae,repository:re,bugs:oe,exports:se,main:ie,files:ce,peerDependencies:le,peerDependenciesMeta:ue,devDependencies:de,keywords:me,publishConfig:pe,spectrum:be},n=({rootClass:e="spectrum-AlertBanner",id:t=j("alertbanner"),testId:z,isOpen:I=!0,text:v,variant:l,actionButtonText:f="Action",showCloseButton:D=!0,customClasses:N=[],customStyles:Y={}}={},p={})=>c`
		<div
			class=${s({[e]:!0,"is-open":I,[`${e}--${l}`]:typeof l<"u",...N.reduce((b,H)=>({...b,[H]:!0}),{})})}
			style=${S(Y)}
			id=${t}
			data-testid=${_(z)}
		>
			<div class=${s({[`${e}-body`]:!0})}>
				<div class=${s({[`${e}-content`]:!0})}>
					${u(["negative","info"].some(b=>l===b),()=>R({iconName:l==="negative"?"Alert":"Info",setName:"workflow",customClasses:[`${e}-icon`]},p))}
					${u(v,()=>c`
						<p class=${s({[`${e}-text`]:!0})}>${v}</p>
					`)}
				</div>
				${u(f,()=>W({size:"m",staticColor:"white",treatment:"outline",label:f},p))}
			</div>
			${u(D,()=>c`
				<div class=${s({[`${e}-end`]:!0})}>
					${M({vertical:!0,size:"s",tag:"div"})}
					${F({size:"m",staticColor:"white",onclick},p)}
				</div>
			`)}
		</div>
	`,he=e=>c`
	<div
		style=${S({display:"flex",flexDirection:"column",gap:"12px"})}
	>
		${n({...e,variant:"info",text:"Your trial will expire in 3 days. Once it expires your files will be saved and ready for you to open again once you have purchased the software."})}
		${n({...e,variant:"neutral",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",actionButtonText:""})}
	</div>
`,ve=(e,t)=>i({withBorder:!1,direction:"column",containerStyles:{alignItems:"stretch"},wrapperStyles:{alignItems:"stretch"},content:c`
		${i({withBorder:!1,direction:"column",heading:"Action button and close button",containerStyles:{alignItems:"stretch"},wrapperStyles:{alignItems:"stretch"},content:n({...e,variant:"neutral",text:"Your trial has expired",actionButtonText:"Buy now"},t)},t)}
		${i({withBorder:!1,direction:"column",heading:"Action button only",containerStyles:{alignItems:"stretch"},wrapperStyles:{alignItems:"stretch"},content:n({...e,variant:"neutral",text:"Your trial has expired",actionButtonText:"Buy now",showCloseButton:!1},t)},t)}
		${i({withBorder:!1,direction:"column",heading:"Close button only",containerStyles:{alignItems:"stretch"},wrapperStyles:{alignItems:"stretch"},content:n({...e,variant:"neutral",text:"Your trial has expired",actionButtonText:""})},t)}
		${i({withBorder:!1,direction:"column",heading:"Text only",containerStyles:{alignItems:"stretch"},wrapperStyles:{alignItems:"stretch"},content:n({...e,variant:"neutral",text:"Your trial has expired",actionButtonText:"",showCloseButton:!1},t)},t)}
	`},t),O=L({Template:n,stateDirection:"column",containerStyles:{"inline-size":"100%"},wrapperStyles:{"inline-size":"100%"},testData:[{testHeading:"Default (neutral)"},{testHeading:"Default, with wrapping text",text:"Your trial will expire in 3 days. Once it expires your files will be saved and ready for you to open again once you have purchased the software Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{testHeading:"Informative",variant:"info"},{testHeading:"Informative, with wrapping text",variant:"info",text:"Your trial will expire in 3 days. Once it expires your files will be saved and ready for you to open again once you have purchased the software Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{testHeading:"Negative",variant:"negative"},{testHeading:"Negative, with wrapping text",variant:"negative",text:"Your trial will expire in 3 days. Once it expires your files will be saved and ready for you to open again once you have purchased the software Lorem ipsum dolor sit amet, consectetur adipiscing elit."},{testHeading:"Closed",isOpen:!1}],stateData:[{testHeading:"Action button only",showCloseButton:!1,actionButtonText:"Take action",ignore:["Closed"]},{testHeading:"Close button only",showCloseButton:!0,actionButtonText:"",ignore:["Closed"]},{testHeading:"Text only",showCloseButton:!1,actionButtonText:"",ignore:["Closed"]}]}),De={title:"Alert banner",component:"AlertBanner",argTypes:{isOpen:V,text:{name:"Text",description:"Text of the message displayed within the alert banner.",type:{name:"string",required:!0},table:{type:{summary:"string"},disable:!1,category:"Content"},control:{type:"text"}},variant:{name:"Semantic variants",type:{name:"string"},table:{type:{summary:"string"},category:"Component",defaultValue:{summary:"neutral"}},options:["neutral","info","negative"],control:"radio"},actionButtonText:{name:"Action button text",description:"Label text for the optional action button. When empty, the action button does not display.",type:{name:"string"},table:{type:{summary:"string"},category:"Content"},control:"text"},showCloseButton:{name:"Show close button",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"}},args:{rootClass:"spectrum-AlertBanner",isOpen:!1,variant:"neutral",actionButtonText:"Action",text:"Your trial has expired",showCloseButton:!0},parameters:{layout:"padded",actions:{handles:["click .spectrum-AlertBanner button"]},packageJson:ge,metadata:Q,docs:{description:{component:`The alert banner shows pressing and high-signal messages, such as system alerts. It is meant to be noticed and prompt users to take action.
It should occupy all of the available horizontal space until it reaches its maximum allowed width.`}}}},g=O.bind({});g.tags=["!autodocs"];g.args={isOpen:!0,customStyles:{"flex-grow":"1"}};const h=O.bind({});h.args=g.args;h.tags=["!autodocs","!dev"];h.parameters={chromatic:{forcedColors:"active",modes:q}};const a=n.bind({});a.storyName="Variant: neutral";a.tags=["!dev"];a.args={isOpen:!0,variant:"neutral",text:"Your trial has expired"};a.parameters={chromatic:{disableSnapshot:!0}};const d=n.bind({});d.storyName="Variant: informative";d.tags=["!dev"];d.args={isOpen:!0,variant:"info",text:"Your trial will expire in 3 days"};d.parameters={chromatic:{disableSnapshot:!0}};const m=n.bind({});m.storyName="Variant: negative";m.tags=["!dev"];m.args={isOpen:!0,variant:"negative",text:"Connection interupted. Check your network to continue."};m.parameters={chromatic:{disableSnapshot:!0}};const r=ve.bind({});r.storyName="Actionable and dismissable";r.tags=["!dev"];r.args={isOpen:!0,variant:"negative"};r.parameters={chromatic:{disableSnapshot:!0}};const o=he.bind({});o.storyName="Text overflow behavior";o.tags=["!dev"];o.args={isOpen:!0,variant:"negative"};o.parameters={chromatic:{disableSnapshot:!0}};var y,x,w;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,description:{story:"Neutral is the default semantic variant.",...(w=(x=a.parameters)==null?void 0:x.docs)==null?void 0:w.description}}};var k,B,T;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,description:{story:`The alert banner component can contain both an icon-only close button and a button with a contextual action to
take. Whenever possible, include the in-line action button if there's a way for a user to quickly address the issue
associated with an alert. There should never be more than one button with a contextual action in an alert banner.

The close button is optional, depending on context. Consider adding one to let a user easily dismiss the alert.`,...(T=(B=r.parameters)==null?void 0:B.docs)==null?void 0:T.description}}};var $,A,C;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,description:{story:`When the text is too long for the available horizontal space, it wraps to form another line. In
actionable alert banners, the button moves below the text.`,...(C=(A=o.parameters)==null?void 0:A.docs)==null?void 0:C.description}}};const Ne=["Default","WithForcedColors","Neutral","Informative","Negative","ActionableOptions","TextOverflow"];export{r as ActionableOptions,g as Default,d as Informative,m as Negative,a as Neutral,o as TextOverflow,h as WithForcedColors,Ne as __namedExportsOrder,De as default};
