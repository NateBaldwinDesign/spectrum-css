import{d as _}from"./index-BL42WGY7.js";import{T as M}from"./template-CPwa5MIl.js";import{T as O}from"./template-CnnmzfUi.js";import{T as J}from"./template-BOh7f2NE.js";import{R as K,s as Q,n as b,g as X,C as F,V as Y}from"./decorator-B_b3GAa1.js";import{k as l}from"./lit-element-C96egxJg.js";import{t as Z}from"./if-defined-B5hOZ0d5.js";import"./template-C4DdnWO9.js";import"./capitalize-D60SaZ2R.js";import"./upperCase-0eNr0WW7.js";import"./_createCompounder-DY9ZW94_.js";import"./v4-CQkTLCs1.js";const tt="index.css",et=[".spectrum-Toast",".spectrum-Toast--info",".spectrum-Toast--info .spectrum-Toast-closeButton:focus-visible:not(:active)",".spectrum-Toast--negative",".spectrum-Toast--negative .spectrum-Toast-closeButton:focus-visible:not(:active)",".spectrum-Toast--positive",".spectrum-Toast--positive .spectrum-Toast-closeButton:focus-visible:not(:active)",".spectrum-Toast-body",".spectrum-Toast-body + .spectrum-Toast-buttons",".spectrum-Toast-body .spectrum-Button",".spectrum-Toast-body .spectrum-Button:dir(rtl)",".spectrum-Toast-buttons",".spectrum-Toast-buttons .spectrum-CloseButton",".spectrum-Toast-content",".spectrum-Toast-content:lang(ja)",".spectrum-Toast-content:lang(ko)",".spectrum-Toast-content:lang(zh)",".spectrum-Toast-typeIcon",'[dir="rtl"] .spectrum-Toast-body .spectrum-Button'],st=["--mod-toast-background-color-default","--mod-toast-block-size","--mod-toast-border-width","--mod-toast-corner-radius","--mod-toast-divider-color","--mod-toast-font-size","--mod-toast-font-weight","--mod-toast-informative-background-color-default","--mod-toast-line-height","--mod-toast-line-height-cjk","--mod-toast-max-inline-size","--mod-toast-negative-background-color-default","--mod-toast-positive-background-color-default","--mod-toast-spacing-block-end","--mod-toast-spacing-block-start","--mod-toast-spacing-bottom-edge-to-divider","--mod-toast-spacing-bottom-edge-to-text","--mod-toast-spacing-close-button","--mod-toast-spacing-icon-to-text","--mod-toast-spacing-start-edge-to-text-and-icon","--mod-toast-spacing-text-and-action-button-to-divider","--mod-toast-spacing-text-to-action-button-horizontal","--mod-toast-spacing-top-edge-to-divider","--mod-toast-spacing-top-edge-to-icon","--mod-toast-spacing-top-edge-to-text","--mod-toast-text-and-icon-color"],ot=["--spectrum-toast-background-color-default","--spectrum-toast-block-size","--spectrum-toast-border-width","--spectrum-toast-bottom-to-text","--spectrum-toast-corner-radius","--spectrum-toast-divider-color","--spectrum-toast-font-size","--spectrum-toast-font-weight","--spectrum-toast-height","--spectrum-toast-informative-background-color-default","--spectrum-toast-line-height","--spectrum-toast-line-height-cjk","--spectrum-toast-max-inline-size","--spectrum-toast-maximum-width","--spectrum-toast-negative-background-color-default","--spectrum-toast-positive-background-color-default","--spectrum-toast-spacing-block-end","--spectrum-toast-spacing-block-start","--spectrum-toast-spacing-bottom-edge-to-divider","--spectrum-toast-spacing-bottom-edge-to-text","--spectrum-toast-spacing-close-button","--spectrum-toast-spacing-icon-to-text","--spectrum-toast-spacing-start-edge-to-text-and-icon","--spectrum-toast-spacing-text-and-action-button-to-divider","--spectrum-toast-spacing-text-to-action-button-horizontal","--spectrum-toast-spacing-top-edge-to-divider","--spectrum-toast-spacing-top-edge-to-icon","--spectrum-toast-spacing-top-edge-to-text","--spectrum-toast-text-and-icon-color","--spectrum-toast-top-to-text","--spectrum-toast-top-to-workflow-icon"],at=["--spectrum-border-width-100","--spectrum-cjk-line-height-100","--spectrum-corner-radius-100","--spectrum-font-size-100","--spectrum-informative-background-color-default","--spectrum-line-height-100","--spectrum-negative-background-color-default","--spectrum-neutral-background-color-default","--spectrum-neutral-subdued-background-color-default","--spectrum-positive-background-color-default","--spectrum-regular-font-weight","--spectrum-spacing-100","--spectrum-spacing-300","--spectrum-text-to-visual-100","--spectrum-transparent-white-300","--spectrum-white"],nt=[],it={sourceFile:tt,selectors:et,modifiers:st,component:ot,global:at,"system-theme":["--system-spectrum-toast-background-color-default"],passthroughs:nt,"high-contrast":["--highcontrast-toast-background-color-default","--highcontrast-toast-border-color","--highcontrast-toast-informative-background-color-default","--highcontrast-toast-negative-background-color-default","--highcontrast-toast-positive-background-color-default","--highcontrast-toast-text-and-icon-color"]},rt="@spectrum-css/toast",ct="10.3.0",dt="The Spectrum CSS toast component",pt="Apache-2.0",mt="Adobe",ut="https://opensource.adobe.com/spectrum-css/toast",lt={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/toast"},gt={url:"https://github.com/adobe/spectrum-css/issues"},ht={".":"./dist/index.css","./*.md":"./*.md","./dist/*":"./dist/*","./index-*.css":"./dist/index-*.css","./index.css":"./dist/index.css","./metadata.json":"./metadata/metadata.json","./metadata/*":"./metadata/*","./package.json":"./package.json"},bt="dist/index.css",vt=["dist/*","*.md","package.json","metadata/*"],ft={"@spectrum-css/button":">=13","@spectrum-css/closebutton":">=5","@spectrum-css/icon":">=7","@spectrum-css/tokens":">=14"},wt={"@spectrum-css/button":"workspace:^","@spectrum-css/closebutton":"workspace:^","@spectrum-css/icon":"workspace:^","@spectrum-css/tokens":"workspace:^"},kt=["spectrum","css","design system","adobe"],yt={access:"public"},Tt=[{guidelines:"https://spectrum.adobe.com/page/toast",rootClass:"spectrum-Toast",swc:"https://opensource.adobe.com/spectrum-web-components/components/toast/"}],xt={name:rt,version:ct,description:dt,license:pt,author:mt,homepage:ut,repository:lt,bugs:gt,exports:ht,main:bt,files:vt,peerDependencies:ft,devDependencies:wt,keywords:kt,publishConfig:yt,spectrum:Tt},s=({rootClass:t="spectrum-Toast",message:e,inlineButtonLabel:h,variant:r,customClasses:N=[],customStyles:q={},id:G=X("toast")}={},u={})=>{let m="Info";return r==="negative"&&(m="Alert"),r==="positive"&&(m="CheckmarkCircle"),r==="neutral"&&(m=void 0),l`
		<div
			class=${K({[t]:!0,[`${t}--${r}`]:typeof r<"u",...N.reduce((P,R)=>({...P,[R]:!0}),{})})}
			id=${Z(G)}
			style=${Q(q)}
		>
			${b(r,()=>J({iconName:m,setName:"workflow",size:"m",customClasses:[`${t}-typeIcon`]},u))}
			<div class="${t}-body">
				<div class="${t}-content">${e}</div>
				${b(h,()=>M({variant:"secondary",size:"m",staticColor:"white",treatment:"outline",label:h},u))}
			</div>
			<div class="${t}-buttons">
				${O({size:"m",staticColor:"white",onclick},u)}
			</div>
		</div>
	`},Bt=(t,e)=>F({withBorder:!1,direction:"column",wrapperStyles:{columnGap:"12px"},content:l`
		${s({...t,message:"A new version of Lightroom Classic is now available",variant:"info",inlineButtonLabel:"Update"},e)}
		${s({...t,message:"A new version of Lightroom Classic is now available. Use the Update button below to start using the new version.",variant:"info",inlineButtonLabel:"Update"},e)}
		${s({...t,message:"A new version of Lightroom Classic is now available",variant:"info"},e)}
		${s({...t,message:"An update is available",variant:"info",customStyles:{"max-inline-size":"240px"}},e)}`},e),Lt=(t,e)=>F({withBorder:!1,direction:"column",wrapperStyles:{columnGap:"12px"},content:l`
		${s({...t,message:"All files archived",variant:"neutral",inlineButtonLabel:"Undo"},e)}
		${s({...t,message:"Analysis complete",variant:"positive",inlineButtonLabel:"View"},e)}
		${s({...t,message:"An update is available",variant:"info",inlineButtonLabel:"Update"},e)}
		${s({...t,message:"2 assets missing",variant:"negative",inlineButtonLabel:"Show"},e)}`},e),V=Y({Template:s,testData:[{testHeading:"Default"},{testHeading:"Info",variant:"info",message:"A new version of Lightroom Classic is now available",inlineButtonLabel:"Update"},{testHeading:"Negative",variant:"negative",message:"Unable to delete file",inlineButtonLabel:"Eject"},{testHeading:"Positive",variant:"positive",message:"Copied to clipboard",inlineButtonLabel:"Eject"},{testHeading:"Wrapping with button",variant:"info",message:"A new version of Lightroom Classic is now available. Use the Update button below to start using the new version.",inlineButtonLabel:"Update"},{testHeading:"Wrapping without button",variant:"info",message:"A new version of Lightroom Classic is now available. Use the Update button below to start using the new version.",inlineButtonLabel:void 0},{testHeading:"Short message, no required action",variant:"neutral",message:"The toast is done.",inlineButtonLabel:void 0}]}),Ft={title:"Toast",component:"Toast",argTypes:{variant:{name:"Variant",table:{type:{summary:"string"},defaultValue:{summary:"neutral"},category:"Component"},control:"select",options:["neutral","info","negative","positive"]},message:{name:"Message",type:{name:"string",required:!0},table:{type:{summary:"string"},category:"Component"},control:"text"},inlineButtonLabel:{name:"Inline button label",description:"Label for the inline button; if blank, no button is shown",type:{name:"string"},table:{category:"Advanced",type:{summary:"string"}},control:"text"}},args:{rootClass:"spectrum-Toast"},parameters:{actions:{handles:["click .spectrum-Toast button"]},packageJson:xt,metadata:it,docs:{description:{component:"Toasts display brief, temporary notifications. They are noticeable but do not disrupt the user experience and do not require an action to be taken."}}}},c=V.bind({});c.args={message:"File has been archived",inlineButtonLabel:"Undo",variant:"neutral"};const o=s.bind({});o.tags=["!dev"];o.args={variant:"info",message:"A new version of Lightroom Classic is now available",inlineButtonLabel:"Update"};o.parameters={chromatic:{disableSnapshot:!0}};const a=s.bind({});a.tags=["!dev"];a.args={variant:"negative",message:"Unable to delete file",inlineButtonLabel:"Eject"};a.parameters={chromatic:{disableSnapshot:!0}};const n=s.bind({});n.tags=["!dev"];n.args={variant:"positive",message:"Copied to clipboard",inlineButtonLabel:"Eject"};n.parameters={chromatic:{disableSnapshot:!0}};const i=s.bind({});i.tags=["!dev"];i.args={message:"All files archived",inlineButtonLabel:void 0};i.parameters={chromatic:{disableSnapshot:!0}};const d=Bt.bind({});d.tags=["!dev"];d.parameters={chromatic:{disableSnapshot:!0}};const p=Lt.bind({});p.tags=["!dev"];p.parameters={chromatic:{disableSnapshot:!0}};const g=V.bind({});g.args=c.args;g.tags=["!autodocs","!dev"];g.parameters={chromatic:{forcedColors:"active",modes:_}};var v,f,w;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,description:{story:"The neutral toast is the default variant. It is gray and does not have an icon. This is used when the message is neutral in tone or when its semantics do not fit in any of the other variants.",...(w=(f=c.parameters)==null?void 0:f.docs)==null?void 0:w.description}}};var k,y,T;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,description:{story:"The informative toast uses the informative semantic color (blue) and has an info icon to help those with color vision deficiency discern the message tone. Similar to the accent button, this should be used when the message should call extra attention compared to the neutral variant.",...(T=(y=o.parameters)==null?void 0:y.docs)==null?void 0:T.description}}};var x,B,L;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,description:{story:"The negative toast uses the negative semantic color (red) and has an alert icon to help those with color vision deficiency to discern the message tone. This is used to show an error or failure.",...(L=(B=a.parameters)==null?void 0:B.docs)==null?void 0:L.description}}};var $,C,A;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,description:{story:"The positive toast uses the positive semantic color (green) and has a checkmark icon to help those with color vision deficiency discern the message tone. This is used to inform about a successful action or completion of a task.",...(A=(C=n.parameters)==null?void 0:C.docs)==null?void 0:A.description}}};var z,U,S;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,description:{story:`Toasts must include text to communicate a message. Write the text as concisely as possible while still being clear about what has happened or is happening.

Writing for toasts depends on the nature of the message, whether it’s communicating confirmation, information, or an error. For all kinds of toasts, keep the text to fewer than 2 lines in English, since it will become longer when localized. View the [toast content standards](https://spectrum.adobe.com/page/toast/#Content-standards) for writing guidelines.`,...(S=(U=i.parameters)==null?void 0:U.docs)==null?void 0:S.description}}};var j,W,D;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,description:{story:"When the message text is too long for the horizontal space available, it wraps to form another line.",...(D=(W=d.parameters)==null?void 0:W.docs)==null?void 0:D.description}}};var I,H,E;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,description:{story:"A toast can have up to one action: [a static white, secondary, outline button](?path=/docs/components-button--docs#static-white---secondary). This label should be kept concise, and it should only be used when there’s a direct action available that is related to the toast text.",...(E=(H=p.parameters)==null?void 0:H.docs)==null?void 0:E.description}}};const Vt=["Default","Info","Negative","Positive","Text","Wrapping","Action","WithForcedColors"];export{p as Action,c as Default,o as Info,a as Negative,n as Positive,i as Text,g as WithForcedColors,d as Wrapping,Vt as __namedExportsOrder,Ft as default};
