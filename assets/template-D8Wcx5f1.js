import{T as P}from"./template-dLdKE6bV.js";import{T as W}from"./template-YMy-Jbg4.js";import{T as X}from"./template-BOh7f2NE.js";import{R as w,s as Y,n as o,g as Z,C as r}from"./decorator-B_b3GAa1.js";import{T as _}from"./template-C4DdnWO9.js";import{k as l}from"./lit-element-C96egxJg.js";import{t}from"./if-defined-B5hOZ0d5.js";const n=({rootClass:a="spectrum-Textfield",size:e="m",customClasses:q=[],customInputClasses:T=[],customIconClasses:E=[],customProgressCircleClasses:H=[],isInvalid:f=!1,isValid:m=!1,multiline:b=!1,grows:L=!1,isQuiet:U=!1,isFocused:G=!1,isDisabled:$=!1,isRequired:F=!1,isReadOnly:h=!1,isKeyboardFocused:Q=!1,isLoading:R=!1,displayLabel:O=!1,labelPosition:j="top",labelText:x,characterCount:v,iconName:p,iconSet:y,pattern:g,placeholder:k,name:B,helpText:K="",id:u=Z("textfield"),value:S="",type:D="text",autocomplete:I=!0,onclick:J,customStyles:M={}}={},c={})=>{const{updateArgs:i}=c;return f?(p="Alert",y="workflow"):m&&(p="Checkmark",y="ui"),l`
		<div
			class=${w({[a]:!0,[`${a}--size${e==null?void 0:e.toUpperCase()}`]:typeof e<"u",[`${a}--multiline`]:b,[`${a}--grows`]:L,[`${a}--quiet`]:U,[`${a}--sideLabel`]:j==="side","is-invalid":f,"is-valid":m,"is-focused":G,"is-keyboardFocused":Q,"is-disabled":$,"is-readOnly":h,...q.reduce((s,d)=>({...s,[d]:!0}),{})})}
			style=${Y(M)}
			@click=${J}
			@focusin=${function(){i==null||i({isFocused:!0})}}
			@keyup=${function(s){var d;s.keyCode===9&&(s.target==this||((d=s.target)==null?void 0:d.parentNode)==this)&&(i==null||i({isKeyboardFocused:!0}),this.classList.add("is-keyboardFocused"))}}
			@focusout=${function(){i==null||i({isFocused:!1,isKeyboardFocused:!1}),this.classList.remove("is-keyboardFocused")}}
			id=${t(u)}
		>
		${o(O,()=>P({size:e,label:x},c))}
		${o(typeof v<"u",()=>l`
			<span class="${a}-characterCount">${v}</span>`)}
		${o(p,()=>X({size:e,iconName:p,setName:y,customClasses:[f||m?`${a}-validationIcon`:`${a}-icon`,...E]},c))}
		${o(b,()=>l`<textarea
				placeholder=${t(k)}
				name=${t(B)}
				id=${t(u?`${u}-input`:void 0)}
				.value=${S}
				autocomplete=${t(I?void 0:"off")}
				?required=${F}
				?disabled=${$}
				?readonly=${h}
				pattern=${t(g)}
				class=${w({[`${a}-input`]:!0,...T.reduce((s,d)=>({...s,[d]:!0}),{})})}
			/>`,()=>l`<input
				type=${t(D)}
				placeholder=${t(k)}
				name=${t(B)}
				id=${t(u?`${u}-input`:void 0)}
				.value=${S}
				autocomplete=${t(I?void 0:"off")}
				?required=${F}
				?disabled=${$}
				?readonly=${h}
				pattern=${t(g)}
				class=${w({[`${a}-input`]:!0,...T.reduce((s,d)=>({...s,[d]:!0}),{})})}
			/>`)}
		${o(R,()=>_({isIndeterminate:!0,size:"s",customClasses:H}))}
		${o(K,()=>W({text:K,variant:f?"negative":"neutral",size:e,hideIcon:!0,isDisabled:$},c))}
	</div>
	`},te=(a,e)=>r({direction:"column",withBorder:!1,withHeading:!1,content:l`
		${r({withBorder:!1,heading:"Description",content:n({...a,isRequired:!0,labelText:"Username",value:"lisawilson24",helpText:"Username must be at least 8 characters."},e)},e)}
		${r({withBorder:!1,heading:"Error message",content:n({...a,isRequired:!0,labelText:"Email address",value:"abc@adobe.com",helpText:"Enter your email address",isInvalid:!0},e)},e)}
	`},e),re=(a,e)=>r({direction:"row",withBorder:!1,wrapperStyles:{rowGap:"12px"},content:l`
		${r({withBorder:!1,containerStyles:{gap:"8px"},heading:"Default",content:n(a,e)},e)}
		${r({withBorder:!1,containerStyles:{gap:"8px"},heading:"Invalid",content:n({...a,isInvalid:!0},e)},e)}
		${r({withBorder:!1,containerStyles:{gap:"8px"},heading:"Focused",content:n({...a,isFocused:!0},e)},e)}
		${r({withBorder:!1,containerStyles:{gap:"8px"},heading:"Invalid, focused",content:n({...a,isInvalid:!0,isFocused:!0},e)},e)}
	`},e),ie=(a,e)=>r({direction:"column",withBorder:!1,wrapperStyles:{rowGap:"12px"},content:l`
		${r({withBorder:!1,containerStyles:{gap:"8px"},heading:"Default",content:n({...a,isKeyboardFocused:!0},e)},e)}
		${r({withBorder:!1,containerStyles:{gap:"8px"},heading:"Quiet",content:n({...a,isKeyboardFocused:!0,isQuiet:!0},e)},e)}
	`},e);export{te as H,ie as K,n as T,re as a};
