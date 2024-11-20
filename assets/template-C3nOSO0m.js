import{T as B}from"./template-CS3kxIjL.js";import{T as D}from"./template-CnnmzfUi.js";import{T as O}from"./template-CaVWWigL.js";import{T as S}from"./template-CJCJlaLR.js";import{R as q,s as u,n as t,r as p,g as w}from"./decorator-B_b3GAa1.js";import{k as r}from"./lit-element-C96egxJg.js";import{t as v}from"./if-defined-B5hOZ0d5.js";const J=({rootClass:e="spectrum-Dialog",isDismissible:l=!1,hasDivider:s=!0,isOpen:$=!0,showModal:g=!1,hasFooter:T=!1,heading:c,content:y=[],footer:a=[],customClasses:k=[],id:b=w("dialog"),size:m="medium",layout:n,heroImageUrl:f,customStyles:h={}}={},i={})=>{const{updateArgs:A}=i,R=()=>A({isOpen:!$}),o=r`
		<div
			class=${q({[e]:!0,[`${e}--dismissable`]:l&&["fullscreen","fullscreenTakeover"].every(d=>n!==d),[`${e}--${n}`]:typeof n<"u",[`${e}--${m}`]:typeof m<"u",[`${e}--noDivider`]:!s,...k.reduce((d,j)=>({...d,[j]:!0}),{})})}
			id=${v(b)}
			role="dialog"
			tabindex="-1"
			aria-modal="true"
			style=${v(u(h))}
		>
			<div class="${e}-grid">
				${t(typeof f<"u",()=>r`
						<div 
							class="spectrum-Dialog-hero"
							style="background-image:url(${f})">
						</div>
					`)}
				${t(c,()=>r`
					<h1 class="${e}-heading">${c}</h1>
				`)}
				${t(s,()=>O({horizontal:!0,customClasses:[`${e}-divider`]}))}
				<section class="${e}-content">
					${p(y)}
				</section>
				${t(T,()=>r`
						<footer class="${e}-footer" style=${u({"justify-content":"flex-end"})}>
							${t(typeof a<"u"&&Array.isArray(a)&&a.length>0,()=>p(a))}
							${t(!l,()=>r`
									${B({items:[{label:"Cancel",treatment:"outline",variant:"secondary"},{label:"Save",treatment:"fill",variant:"accent"}]},i)}
								`)}
						</footer>
					`)}
				${t(l&&n!=="fullscreen"&&n!=="fullscreenTakeover",()=>D({customClasses:[`${e}-closeButton`],onclick:R},i))}
			</div>
		</div>
	`;return g?r`
			${S({isOpen:$,content:[()=>o],variant:n},i)}
		`:o};export{J as T};
