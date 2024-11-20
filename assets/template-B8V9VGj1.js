import{T as o}from"./template-3_GwNtJp.js";import{T as p}from"./template-BOh7f2NE.js";import{R as d,r as g,g as h,n as e}from"./decorator-B_b3GAa1.js";import{k as r}from"./lit-element-C96egxJg.js";import{t as k}from"./if-defined-B5hOZ0d5.js";const R=({rootClass:s="spectrum-AssetList-item",image:t,iconName:a,iconSet:l="workflow",label:m,checkboxId:i,ariaLabelledby:$,isNavigated:f=!1,isSelectable:c=!1,isSelected:n=!1,isBranch:u=!1,onclick:T=()=>{}})=>r`
	<li
		class=${d({[s]:!0,"is-selectable":c,"is-selected":n,"is-branch":u,"is-navigated":f})}
		@click=${T}
		tabindex="0"
	>
		${e(c,()=>o({size:"m",isChecked:n,ariaLabelledby:$,id:i,customClasses:[`${s}Selector`]}))}
		${e(t,()=>r`<img src=${t} class="${s}Thumbnail" alt="asset image thumbnail" />`)}
		${e(a,()=>p({iconName:a,setName:l,customClasses:[`${s}Thumbnail`]}))}
		${e(m,()=>r`<span class="${s}Label">${m}</span>`)}
		${e(!c&&!u,()=>o({size:"m",isChecked:n,ariaLabelledby:$,id:i,customClasses:[`${s}Selector`]}))}
		${e(u,()=>p({iconName:"ChevronRight100",setName:"ui",customClasses:[`${s}ChildIndicator`]}))}
	</li>
`,w=({rootClass:s="spectrum-AssetList",items:t=[],customClasses:a=[],id:l=h("assetlist")}={},m={})=>r`
		<ul
			class=${d({[s]:!0,...a.reduce((i,$)=>({...i,[$]:!0}),{})})}
			id=${k(l)}
		>
			${g(t,{callback:R,args:{rootClass:`${s}-item`},context:m})}
		</ul>
	`;export{w as T};
