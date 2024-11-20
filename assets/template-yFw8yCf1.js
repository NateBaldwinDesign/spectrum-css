import{T as h}from"./template-3_GwNtJp.js";import{T as z}from"./template-dLdKE6bV.js";import{T as I}from"./template-YMy-Jbg4.js";import{g as c,R as l,n as v}from"./decorator-B_b3GAa1.js";import{T as L}from"./template-BS9HHlDf.js";import{k as b}from"./lit-element-C96egxJg.js";import{t as i}from"./if-defined-B5hOZ0d5.js";const E=({rootClass:e="spectrum-FieldGroup",customClasses:T=[],layout:o="vertical",inputType:p="radio",name:k=c(),isReadOnly:r=!1,isRequired:d=!1,label:$,labelPosition:u,isInvalid:f,helpText:n,items:s=[]}={},t={})=>{const g=c("group-label");return b`
		<div
			class=${l({[e]:!0,[`${e}--${u}label`]:typeof u<"u",[`${e}--${o}`]:typeof o<"u",...T.reduce((a,m)=>({...a,[m]:!0}),{})})}
			role=${p=="radio"?"radiogroup":"group"}
			aria-invalid=${i(f?"true":void 0)}
			aria-readonly=${i(r&&p=="radio"?"true":void 0)}
			aria-required=${i(d?"true":void 0)}
			aria-labelledby=${i($?g:void 0)}
		>
			${v($,()=>z({size:"m",label:$,isRequired:d,alignment:u==="side"?"right":"top",id:g},t))}
			<div
				class=${l({[`${e}InputLayout`]:!0})}
			>
				${p==="radio"?s.map((a,m)=>L({...a,isReadOnly:r,isRequired:d,name:`field-group-example-${k}`,customClasses:[`${e}-item`],...r?{isChecked:m===1}:{}},t)):s.map((a,m)=>h({...a,isReadOnly:r,isRequired:d,customClasses:[`${e}-item`],...r?{isChecked:m===1}:{}},t))}
				${v(n,()=>I({size:"m",text:n,variant:f?"negative":"neutral"},t))}
			</div>
		</div>
	`};export{E as T};
