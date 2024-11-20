import{R as c,s as f,C as t}from"./decorator-B_b3GAa1.js";import{k as r}from"./lit-element-C96egxJg.js";const n=({rootClass:e="spectrum-CoachIndicator",isQuiet:i=!1,staticColor:d,variant:a,customClasses:o=[],customStyles:h={}})=>r`
	<div
		class=${c({[`${e}`]:!0,[`${e}--quiet`]:i,[`${e}--${a}`]:typeof a<"u"||a!=="default",[`${e}--overBackground`]:d==="white",[`${e}--staticWhite`]:d==="white",...o.reduce((u,$)=>({...u,[$]:!0}),{})})}
		style=${f(h)}
	>
		${Array.from({length:3}).map(()=>r`
			<div class=${c({[`${e}-ring`]:!0})}></div>
		`)}
	</div>
`,s=(e,i)=>t({withBorder:!1,content:r`
		${t({direction:"column",withBorder:!1,heading:"Default",content:n({...e,variant:"default"})},i)}
		${t({direction:"column",withBorder:!1,heading:"Dark",content:n({...e,variant:"dark"})},i)}
		${t({direction:"column",withBorder:!1,heading:"Light",content:n({...e,variant:"light"})},i)}
	`},i);export{s as A,n as T};
