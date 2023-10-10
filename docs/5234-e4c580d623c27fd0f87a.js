"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[5234],{5210:function(e,i,t){t.d(i,{c:function(){return a}});const a='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">\n    <path d="M0 0h24v24H0z" fill="none"/>\n    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>\n    <title>close icon</title>\n</svg>\n'},5234:function(e,i,t){t.r(i),t.d(i,{ic_alert:function(){return o}});var a=t(8434),s=t(5210),n=t(6390),r=t(3077);const o=class{constructor(e){(0,a.r)(this,e),this.dismiss=(0,a.c)(this,"dismiss",7),this.icDismiss=(0,a.c)(this,"icDismiss",7),this.dismissAction=()=>{this.dismiss.emit(),this.icDismiss.emit()},this.alertTitleWrap=!1,this.visible=!0,this.announced=!0,this.dismissible=!1,this.heading="",this.message=void 0,this.titleAbove=!1,this.variant="neutral"}componentDidLoad(){this.alertTitleShouldWrap()}handleClick(){this.visible=!this.visible}alertTitleShouldWrap(){var e;(null===(e=this.el.shadowRoot.querySelector(".alert-title"))||void 0===e?void 0:e.clientHeight)>24&&(this.alertTitleWrap=!0)}render(){const{variant:e,heading:i,message:t,titleAbove:o,dismissible:l,announced:c,visible:d}=this;return d&&(0,a.h)(a.H,{role:c&&"alert",class:{[r.I.Dark]:!0}},(0,a.h)("div",{class:{container:!0,[`container-${e}`]:!0}},(0,a.h)("div",{class:"alert-icon-container"},(0,a.h)("div",{class:{divider:!0,[`divider-${e}`]:!0}}),(0,a.h)("span",{class:{"alert-icon":!0,"svg-container":!0,[`icon-${e}`]:!0},innerHTML:n.V[e].icon})),(0,a.h)("div",{class:"alert-content"},(0,a.h)("div",{class:{"alert-message":!0,"alert-message-title-above":o||this.alertTitleWrap}},i&&(0,a.h)("ic-typography",{class:{"alert-title":!0,"alert-title-above":o||this.alertTitleWrap},variant:"subtitle-large"},(0,a.h)("p",null,i)),(0,a.h)("slot",{name:"message"},(0,a.h)("ic-typography",{variant:"body"},t))),(0,n.i)(this.el,"action")&&(0,a.h)("div",{class:"alert-action-container"},(0,a.h)("slot",{name:"action"}))),(0,a.h)("div",{class:"dismiss-icon-container"},l&&(0,a.h)("ic-button",{class:{"svg-container":!0,"dismiss-icon":!0},innerHTML:s.c,onClick:this.dismissAction,variant:"icon",appearance:r.I.Dark,title:"dismiss"}))))}get el(){return(0,a.g)(this)}};o.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}.container{min-height:3.5rem;border-radius:var(--ic-border-radius);position:relative;display:flex;align-items:center}.container-neutral{background-color:var(--ic-status-unknown-light)}.container-info{background-color:var(--ic-status-info-light)}.container-warning{background-color:var(--ic-status-warning-light)}.container-error{background-color:var(--ic-status-error-light)}.container-success{background-color:var(--ic-status-success-light)}.alert-icon-container{height:100%;display:flex;align-items:center}.divider{height:100%;width:var(--ic-space-xs);border-radius:var(--ic-space-xxxs) 0 0 var(--ic-space-xxxs);position:absolute}.divider-neutral{background-color:var(--ic-status-unknown)}.divider-info{background-color:var(--ic-status-info)}.divider-warning{background-color:var(--ic-status-warning)}.divider-error{background-color:var(--ic-status-error)}.divider-success{background-color:var(--ic-status-success)}.alert-icon{height:var(--ic-space-lg);width:1.375rem;margin-left:1.125rem}.alert-icon>svg{height:var(--ic-space-lg);width:var(--ic-space-lg);display:inline-block}.icon-neutral>svg{fill:var(--ic-status-unknown)}:host([variant="info"]) .alert-icon svg{fill:var(--ic-status-info)}:host([variant="warning"]) .alert-icon svg{fill:var(--ic-status-warning)}:host([variant="error"]) .alert-icon svg{fill:var(--ic-status-error)}:host([variant="success"]) .alert-icon svg{fill:var(--ic-status-success)}.alert-content{display:flex;align-items:center;margin-left:0.625rem;width:100%}.alert-message{display:flex;align-items:center;padding:var(--ic-space-xs) var(--ic-space-xs) var(--ic-space-xs) 0;flex:1}.alert-message-title-above{display:inline;font-size:0}.alert-title{margin-right:var(--ic-space-xs)}.alert-title-above{white-space:normal}.alert-action-container{margin-right:var(--ic-space-xs);display:flex;align-items:center}.dismiss-icon{margin-right:var(--ic-space-xxxs);margin-left:-0.375rem;padding:0.375rem;border:none;border-radius:50%;background-color:inherit;display:flex;align-items:center;justify-content:center}.dismiss-icon:hover{cursor:pointer}@media (max-width: 628px){.alert-content{display:flex;flex-direction:column;align-items:flex-start}.alert-message{display:flex;flex-direction:column;align-items:flex-start}.alert-title{white-space:normal}.alert-action-container{margin-bottom:var(--ic-space-xs)}}@media (forced-colors: active){.container{border:var(--ic-hc-border)}}'}}]);