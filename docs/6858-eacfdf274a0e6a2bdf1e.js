"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[6858],{6858:function(t,e,o){o.r(e),o.d(e,{ic_tab:function(){return n}});var i=o(9065),a=o(9455),s=o(2608);const n=class{constructor(t){(0,i.r)(this,t),this.tabClick=(0,i.c)(this,"tabClick",7),this.tabFocus=(0,i.c)(this,"tabFocus",7),this.tabCreated=(0,i.c)(this,"tabCreated",7),this.tabRemoved=(0,i.c)(this,"tabRemoved",7),this.isInitialRender=!0,this.focusFromClick=!1,this.handleClick=()=>{this.tabClick.emit({tabId:this.tabId,contextId:this.contextId,position:this.tabPosition}),this.focusFromClick&&(this.tabFocus.emit({tabId:this.tabId,contextId:this.contextId,position:this.tabPosition}),this.focusFromClick=!1)},this.handleFocus=()=>{this.focusFromClick||(this.focusTabId=this.tabId,this.tabFocus.emit({tabId:this.tabId,contextId:this.contextId,position:this.tabPosition}))},this.handleMouseDown=()=>{this.focusFromClick=!0},this.contextId="default",this.disabled=!1,this.selected=!1,this.tabId=void 0,this.tabPosition=void 0,this.appearance="dark"}async setFocus(){this.host&&this.host.focus()}componentWillLoad(){(0,s.r)(this.disabled,this.host)}componentDidUpdate(){this.isInitialRender=!1}connectedCallback(){this.tabCreated.emit(this.host)}disconnectedCallback(){const t=document.querySelector("ic-tab-context[context-id=".concat(this.contextId,"]"));t&&t.tabRemovedHandler(!!this.focusTabId)}render(){const{disabled:t,selected:e,appearance:o}=this;return(0,i.h)(i.H,{class:{"with-transition":!this.isInitialRender,"ic-tab-light":o===a.I.Light,selected:e,disabled:t},role:"tab","aria-selected":e?"true":"false",onClick:this.handleClick,onFocus:this.handleFocus,onMouseDown:this.handleMouseDown,"aria-disabled":t?"true":"false",tabindex:this.selected?0:-1},this.host.querySelector('[slot="icon"]')&&(0,i.h)("slot",{name:"icon"}),(0,i.h)("ic-typography",{class:"ic-tab-label",variant:"label"},(0,i.h)("span",null,(0,i.h)("slot",null))))}get host(){return(0,i.g)(this)}};n.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{--indicator-initial-color:rgba(23 89 188 / 0%);--indicator-color:var(--ic-action-default);--focus-indicator:var(--ic-border-focus);--label-color:var(--ic-color-primary-text);--background-color-hover:var(--ic-action-default-bg-hover);--background-color-active:var(--ic-action-default-bg-active);display:flex;align-items:center;border-radius:0;color:var(--label-color);height:2.5rem;padding:0 var(--ic-space-md);cursor:pointer;position:relative;border-bottom:var(--ic-space-xxs) solid var(--indicator-initial-color);gap:var(--ic-space-xs);transition:all var(--ic-easing-transition-fast)}:host(:focus){box-shadow:var(--focus-indicator);border-radius:var(--ic-border-radius)}:host(:focus-visible){outline:var(--ic-hc-focus-outline)}:host(:hover){background-color:var(--background-color-hover)}:host(:active){background-color:var(--background-color-active)}:host(.ic-tab-light){--indicator-initial-color:rgb(255 255 255 / 0%);--indicator-color:rgb(255 255 255 / 100%);--focus-indicator:var(--ic-border-focus);--label-color:white;--background-color-hover:var(--ic-action-dark-bg-hover);--background-color-active:var(--ic-action-dark-bg-active)}:host(.selected){border-bottom:var(--ic-space-xxs) solid var(--indicator-color)}:host(.disabled){pointer-events:none;color:var(--ic-architectural-300)}:host(.selected.with-transition){transition:all var(--ic-easing-transition-slow),\n    border-color var(--ic-transition-duration-slow)}.ic-tab-label{pointer-events:none}::slotted(svg){fill:currentcolor}@media (forced-colors: active){:host{border-bottom:var(--ic-space-xxs) solid canvas}:host(.disabled){color:GrayText}}'}}]);
//# sourceMappingURL=6858-eacfdf274a0e6a2bdf1e.js.map