import{R,s as F,n as c,g as q,C as r}from"./decorator-B_b3GAa1.js";import{k as n}from"./lit-element-C96egxJg.js";import{t as $}from"./if-defined-B5hOZ0d5.js";import{T as w}from"./template-BOh7f2NE.js";import{c as Q}from"./capitalize-D60SaZ2R.js";const i=({rootClass:a="spectrum-ActionButton",size:e="m",iconName:d,iconSet:l="workflow",label:s,isQuiet:S=!1,isSelected:u=!1,isEmphasized:y=!1,isHovered:T=!1,isFocused:B=!1,isActive:D=!1,isDisabled:p=!1,hasPopup:t="false",popupId:g,hideLabel:m=!1,staticColor:b,customClasses:k=[],customStyles:A={},customIconClasses:I=[],onclick:N,id:h=q("actionbutton"),testId:v,role:G="button"}={},o={})=>{const{updateArgs:f}=o;return n`
		<button
			aria-label=${$(m?s:void 0)}
			aria-haspopup=${$(t&&t!=="false"?t:void 0)}
			aria-controls=${t&&t!=="false"?g:void 0}
			aria-pressed=${u?"true":"false"}
			class=${R({[a]:!0,[`${a}--size${e==null?void 0:e.toUpperCase()}`]:typeof e<"u",[`${a}--quiet`]:S,[`${a}--emphasized`]:y,[`${a}--static${Q(b)}`]:typeof b<"u","is-disabled":p,"is-selected":u,"is-hover":T,"is-focus-visible":B,"is-active":D,...k.reduce((L,O)=>({...L,[O]:!0}),{})})}
			id=${h}
			data-testid=${v??h}
			role=${$(G)}
			style=${F(A)}
			?disabled=${p}
			@click=${N??function(){f({isSelected:!u})}}
			@focusin=${function(){f({isFocused:!0})}}
			@focusout=${function(){f({isFocused:!1})}}
		>
			${c(t&&t!=="false",()=>w({size:e,iconName:"CornerTriangle",setName:"ui",customClasses:[`${a}-hold`]},o))}
			${c(d,()=>w({size:e,iconName:d,setName:l,customClasses:[`${a}-icon`,...I]},o))}
			${c(s&&!m,()=>n`<span class="${a}-label">${s}</span>`)}
		</button>
	`},U=(a,e)=>r({withBorder:!1,direction:"row",wrapperStyles:{columnGap:"12px"},content:n`
		${i({...a,iconName:void 0},e)}
		${i({...a},e)}
		${i({...a,hideLabel:!0},e)}
		${i({...a,hideLabel:!0,hasPopup:"true"},e)}
		${i({...a,iconName:void 0,hasPopup:"true"},e)}
	`},e),K=(a,e)=>r({withBorder:!1,direction:"row",wrapperStyles:{columnGap:"12px"},content:n`
		${i({...a,hideLabel:!0,hasPopup:"true"},e)}
		${i({...a,hideLabel:!0,isQuiet:!0,hasPopup:"true"},e)}
	`},e),M=(a,e)=>r({withBorder:!1,direction:"row",wrapperStyles:{rowGap:"12px"},content:n`${[{isSelected:!1,isDisabled:!1,heading:"Default"},{isSelected:!0,isDisabled:!1,heading:"Selected"},{isSelected:!1,isDisabled:!0,heading:"Disabled"},{isSelected:!0,isDisabled:!0,heading:"Selected + disabled"}].map(({isSelected:d,isDisabled:l,heading:s})=>r({withBorder:!1,heading:s,content:U({...a,isSelected:d,isDisabled:l})},e))}`},e);export{U as A,K as I,i as T,M as a};
