import{T as h}from"./template-BOh7f2NE.js";import{R as I,s as a,n as N,g as A}from"./decorator-B_b3GAa1.js";import{T as r}from"./template-DxaIXWdr.js";import{k as s}from"./lit-element-C96egxJg.js";import{t as B}from"./if-defined-B5hOZ0d5.js";const d=({rootClass:e="spectrum-PickerButton",id:l=A("pickerbutton"),size:t="m",label:n,position:c,iconSet:i="ui",iconName:u="ChevronDown",isDisabled:o=!1,isFocused:f=!1,isOpen:p=!1,isQuiet:$=!1,customClasses:x=[],isRounded:y=!1,customStyles:v={},onclick:w}={},m={})=>{const{updateArgs:g}=m;return s`
		<button
			class=${I({[e]:!0,[`${e}--textuiicon`]:n&&i==="ui",[`${e}--uiicononly`]:!n&&i==="ui",[`${e}--icononly`]:!n&&i!=="ui",[`${e}--${c}`]:typeof c<"u",[`${e}--rounded`]:y,[`${e}--size${t==null?void 0:t.toUpperCase()}`]:typeof t<"u","is-disabled":o,"is-focused":f,"is-open":p&&!o,[`${e}--quiet`]:$,...x.reduce((k,T)=>({...k,[T]:!0}),{})})}
			style=${a(v)}
			id=${B(l)}
			aria-haspopup="listbox"
			?disabled=${o}
			@click=${w??function(){o||g({isOpen:!p})}}
		>
			<div class="${e}-fill">
				${N(n,()=>s`
					<span class="${e}-label is-placeholder">
						${n}
					</span>
				`)}
				${h({iconName:u??"ChevronDown",setName:i,size:t,customClasses:[`${e}-icon`]},m)}
			</div>
		</button>
	`},P=e=>s`
	<div
		style=${a({display:"flex",gap:"24px",flexWrap:"wrap"})}
	>
		<div
			style=${a({display:"flex",gap:"16px",flexDirection:"column",alignItems:"center",flexBasis:"80px"})}
		>
			${r({semantics:"detail",size:"s",content:["UI icon"],customStyles:{"white-space":"nowrap","--mod-detail-font-color":"var(--spectrum-seafoam-900)"}})}
			${d({...e,iconName:"ArrowDown100",iconSet:"ui"})}
		</div>
		<div
			style=${a({display:"flex",gap:"16px",flexDirection:"column",alignItems:"center",flexBasis:"80px"})}
		>
			${r({semantics:"detail",size:"s",content:["Workflow icon"],customStyles:{"white-space":"nowrap","--mod-detail-font-color":"var(--spectrum-seafoam-900)"}})}
			${d({...e,iconName:"Add",iconSet:"workflow"})}
		</div>
	</div>
`;export{P as C,d as T};
