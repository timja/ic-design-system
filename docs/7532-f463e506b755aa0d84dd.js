"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[7532],{7532:function(e,t,i){i.r(t),i.d(t,{ic_navigation_button:function(){return s}});var n=i(9290),o=i(1653),a=i(4581);const s=class{constructor(e){(0,n.r)(this,e),this.inheritedAttributes={},this.initialAppearance=(0,o.u)(),this.mode="navbar",this.download=!1,this.href=void 0,this.hreflang=void 0,this.label=void 0,this.referrerpolicy=void 0,this.rel=void 0,this.target=void 0}componentWillLoad(){this.inheritedAttributes=(0,o.w)(this.el,[...o.x,"title"])}componentDidLoad(){(0,o.a)([{prop:this.label,propName:"label"}],"Navigation Button")}componentWillRender(){const e=this.el.querySelector('[slot="icon"]');null!==e&&e.setAttribute("viewBox","0 0 24 24")}navBarMenuOpenHandler(){this.mode="menu"}navBarMenuCloseHandler(){this.mode="navbar"}themeChangeHandler(e){const t=e.detail;this.initialAppearance=t.mode}async setFocus(){this.buttonEl&&this.buttonEl.focus()}render(){const{href:e,target:t,rel:i,download:s,referrerpolicy:r}=this;let l="",d="",u="icon",b=this.initialAppearance,c="large",p=!1,h=!1;"menu"===this.mode&&(l=this.label,u="tertiary",b=a.I.Default,c="default",p=!0,d="popout-menu-button",h=!0);const m={variant:u,appearance:b,size:c,href:e,target:t,rel:i,download:s,referrerpolicy:r,fullWidth:p,disableTooltip:h};return(0,n.h)(n.H,{class:{"in-side-menu":"menu"===this.mode}},(0,n.h)("ic-button",Object.assign({class:d,"aria-label":"icon"==u?this.label:null,ref:e=>this.buttonEl=e},m,this.inheritedAttributes),l,(0,n.h)("slot",{slot:"left-icon",name:"icon"}),(0,o.i)(this.el,"badge")&&"icon"===u&&(0,n.h)("slot",{name:"badge"})))}static get delegatesFocus(){return!0}get el(){return(0,n.g)(this)}};s.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;margin-right:var(--ic-space-xs);list-style:none}:host(.in-side-menu){margin-right:0}:host::part(button){height:100%;min-height:2.5rem}'}}]);