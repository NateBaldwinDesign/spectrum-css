import{k as c}from"./lit-element-C96egxJg.js";import{R as f}from"./decorator-B_b3GAa1.js";import{t as k}from"./if-defined-B5hOZ0d5.js";import{T as y}from"./template-CBWtDg95.js";import"./capitalize-D60SaZ2R.js";import"./v4-CQkTLCs1.js";import"./template-BOh7f2NE.js";const h="@spectrum-css/quickaction",x="3.1.1",v="The Spectrum CSS quickaction component",$="Apache-2.0",q="Adobe",z="https://opensource.adobe.com/spectrum-css/quickaction",C={type:"git",url:"https://github.com/adobe/spectrum-css.git",directory:"components/quickaction"},O={url:"https://github.com/adobe/spectrum-css/issues"},A="dist/index-vars.css",Q={"@spectrum-css/actionbutton":">=5","@spectrum-css/checkbox":">=8","@spectrum-css/vars":">=9"},w={"@spectrum-css/commons":"^9.1.1"},D={access:"public"},S="21308ac4b92a5637eebea3e2a6611aab34a7a7b8",N={name:h,version:x,description:v,license:$,author:q,homepage:z,repository:C,bugs:O,main:A,peerDependencies:Q,devDependencies:w,publishConfig:D,gitHead:S},U={title:"Quick actions",component:"QuickAction",argTypes:{content:{table:{disable:!0}},isOpen:{name:"Open",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Component"},control:"boolean"},position:{name:"Position",type:{name:"string"},table:{type:{summary:"string"},category:"Component"},control:"select",options:["left","right"]},textOnly:{name:"Text only action buttons",type:{name:"boolean"},table:{type:{summary:"boolean"},category:"Advanced"},control:"boolean"}},args:{rootClass:"spectrum-QuickActions",isOpen:!0,textOnly:!1,content:[{iconName:"Edit",iconSet:"workflow",label:"Edit"},{iconName:"Copy",iconSet:"workflow",label:"Copy"},{iconName:"Delete",iconSet:"workflow",label:"Delete"}]},parameters:{chromatic:{disableSnapshot:!0},status:{type:"deprecated"},packageJson:{...N,spectrum:[{guidelines:"https://spectrum.adobe.com/page/quick-actions/",rootClass:"spectrum-QuickActions"}]},docs:{description:{component:"**This component is deprecated.** Please use an action bar to allow users to perform actions on either a single or multiple items at the same time, instead."}}}},T=({rootClass:t="spectrum-QuickActions",size:n="m",isOpen:l=!1,textOnly:r=!1,position:i,content:o=[],id:m,customClasses:d=[]}={},b={})=>o.length?(o.some(e=>e.icon)||(r=!0),c`
        <!-- Note: Only values that differ in express theme are included -->
        <style>
            :root {
                --spectrum-alias-border-radius-regular: var(--spectrum-global-dimension-size-50);
                --spectrum-alias-background-color-quickactions-overlay: rgba(0,0,0,0.2);
            }
            :root, .spectrum--light {
                --spectrum-alias-background-color-quickactions: rgba(248,248,248,0.9);
            }
            .spectrum--dark {
                --spectrum-alias-background-color-quickactions: rgba(50,50,50,0.9);
            }
            .spectrum--darkest {
                --spectrum-alias-background-color-quickactions: rgba(29,29,29,0.9);
            }
            :root, .spectrum--medium {
                --spectrum-global-dimension-size-50: 4px;
                --spectrum-global-dimension-size-100: 8px;
                --spectrum-global-dimension-size-500: 40px;
            }
            .spectrum--large {
                --spectrum-global-dimension-size-50: 5px;
                --spectrum-global-dimension-size-100: 10px;
                --spectrum-global-dimension-size-500: 50px;
            }
            .spectrum--express {
                --spectrum-alias-border-radius-regular: var(--spectrum-global-dimension-size-75);
            }
        </style>
        <div
            class="${f({[t]:!0,[`${t}--size${n==null?void 0:n.toUpperCase()}`]:typeof n<"u","is-open":l,[`${t}--${i}`]:typeof i<"u",[`${t}--textOnly`]:r,...d.reduce((e,g)=>({...e,[g]:!0}),{})})}"
            id=${k(m)}
        >
            ${o.map(e=>typeof e=="object"&&e.iconName||e.label?y({...e,isQuiet:!0},b):e)}
        </div>
    `):(console.warn("QuickActions: requires content be passed in to render."),c``),s=T.bind({});s.args={};var a,p,u;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`({
  rootClass = "spectrum-QuickActions",
  size = "m",
  isOpen = false,
  textOnly = false,
  position,
  // noOverlay = false,
  content = [],
  id,
  customClasses = []
} = {}, context = {}) => {
  if (!content.length) {
    console.warn("QuickActions: requires content be passed in to render.");
    return html\`\`;
  }
  if (!content.some(c => c.icon)) textOnly = true;
  return html\`
        <!-- Note: Only values that differ in express theme are included -->
        <style>
            :root {
                --spectrum-alias-border-radius-regular: var(--spectrum-global-dimension-size-50);
                --spectrum-alias-background-color-quickactions-overlay: rgba(0,0,0,0.2);
            }
            :root, .spectrum--light {
                --spectrum-alias-background-color-quickactions: rgba(248,248,248,0.9);
            }
            .spectrum--dark {
                --spectrum-alias-background-color-quickactions: rgba(50,50,50,0.9);
            }
            .spectrum--darkest {
                --spectrum-alias-background-color-quickactions: rgba(29,29,29,0.9);
            }
            :root, .spectrum--medium {
                --spectrum-global-dimension-size-50: 4px;
                --spectrum-global-dimension-size-100: 8px;
                --spectrum-global-dimension-size-500: 40px;
            }
            .spectrum--large {
                --spectrum-global-dimension-size-50: 5px;
                --spectrum-global-dimension-size-100: 10px;
                --spectrum-global-dimension-size-500: 50px;
            }
            .spectrum--express {
                --spectrum-alias-border-radius-regular: var(--spectrum-global-dimension-size-75);
            }
        </style>
        <div
            class="\${classMap({
    [rootClass]: true,
    [\`\${rootClass}--size\${size?.toUpperCase()}\`]: typeof size !== "undefined",
    "is-open": isOpen,
    [\`\${rootClass}--\${position}\`]: typeof position !== "undefined",
    [\`\${rootClass}--textOnly\`]: textOnly,
    ...customClasses.reduce((a, c) => ({
      ...a,
      [c]: true
    }), {})
  })}"
            id=\${ifDefined(id)}
        >
            \${content.map(c => {
    if (typeof c === "object" && c.iconName || c.label) {
      return ActionButton({
        ...c,
        isQuiet: true
      }, context);
    } else return c;
  })}
        </div>
    \`;
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const B=["Default"];export{s as Default,B as __namedExportsOrder,U as default};
