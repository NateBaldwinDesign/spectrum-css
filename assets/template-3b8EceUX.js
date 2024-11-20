import{R as h,g}from"./decorator-B_b3GAa1.js";import{k as f}from"./lit-element-C96egxJg.js";import{t as a}from"./if-defined-B5hOZ0d5.js";import{c as k}from"./capitalize-D60SaZ2R.js";const v=({rootClass:e="spectrum-Link",url:i="#",text:l,variant:t,staticColor:s,isQuiet:m=!1,isHovered:o=!1,isActive:p=!1,isFocused:d=!1,isVisited:r=!1,id:n=g("link"),customClasses:u=[]}={})=>f`
	<a
		class=${h({[e]:!0,[`${e}--quiet`]:m,[`${e}--${t}`]:typeof t<"u",[`${e}--static${k(s)}`]:typeof s<"u","is-hover":o,"is-active":p,"is-focus-visible":d,"is-visited":r,...u.reduce(($,c)=>({...$,[c]:!0}),{})})}
		id=${a(n)}
		href=${a(i)}
	>
		${l}
	</a>
`,R=(e,i)=>f`
	<div>
		Hello, this is a
		${v({...e,context:i})}
		. This is just filler text, but if you keep reading maybe something good will happen.
	</div>
`;export{v as T,R as a};
