"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[2242],{5002:function(e,t,n){n.d(t,{C:function(){return i}});const i='<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M9.70687 6L8.29688 7.41L12.8769 12L8.29688 16.59L9.70687 18L15.7069 12L9.70687 6Z" fill="currentColor"/>\n</svg>\n'},2242:function(e,t,n){n.r(t),n.d(t,{ic_accordion:function(){return d}});var i=n(9917),o=n(577),a=n(5002);n(6040);let s=0;const d=class{constructor(e){(0,i.r)(this,e),this.accordionClicked=(0,i.c)(this,"accordionClicked",7),this.accordionId="ic-accordion-"+s++,this.CONTENT_VISIBILITY_PROPERTY="--ic-expanded-content-visibility",this.toggleExpanded=()=>{this.expanded=!this.expanded,this.accordionClicked.emit({id:this.accordionId})},this.setAccordionAnimation=(e,t,n,i)=>{e.style.transitionDuration=`${t}ms`,e.style.transitionProperty=n,e.style.transitionDelay=i},this.setExpandedContentStyle=(e,t)=>{"height"===e.propertyName&&t.clientHeight>0&&(t.classList.add("expanded-content-opened"),t.style.height="auto")},this.hideExpandedContent=(e,t)=>{"height"===e.propertyName&&0===t.clientHeight&&t.style.setProperty(this.CONTENT_VISIBILITY_PROPERTY,"hidden")},this.animateExpandedContent=()=>{const e=this.expandedContentEl.scrollHeight;e>0&&this.expanded?(this.expandedContentEl.style.setProperty(this.CONTENT_VISIBILITY_PROPERTY,"visible"),this.expandedContentEl.style.height=`${e}px`,this.setAccordionAnimation(this.expandedContentEl,"300","height","ease-out"),this.expandedContentEl.addEventListener("transitionend",(e=>{this.setExpandedContentStyle(e,this.expandedContentEl)}))):this.expanded||(this.expandedContentEl.style.height=`${this.expandedContentEl.scrollHeight}px`,this.expandedContentEl.scrollHeight>0&&!this.expanded&&(this.expandedContentEl.style.height="0",this.setAccordionAnimation(this.expandedContentEl,"300","height","ease-in"),this.expandedContentEl.classList.remove("expanded-content-opened")),this.expandedContentEl.addEventListener("transitionend",(e=>{this.hideExpandedContent(e,this.expandedContentEl)})))},this.appearance="default",this.disabled=!1,this.expanded=!1,this.heading="",this.message="",this.size="default"}handleExpandedWatch(){this.animateExpandedContent()}async setFocus(){this.accordionBtnHeading&&this.accordionBtnHeading.focus()}disconnectedCallback(){this.expandedContentEl&&(this.expandedContentEl.removeEventListener("transitionend",(e=>this.setExpandedContentStyle(e,this.expandedContentEl)),!0),this.expandedContentEl.removeEventListener("transitionend",(e=>this.hideExpandedContent(e,this.expandedContentEl)),!0))}componentDidLoad(){this.expanded&&(this.expandedContentEl.style.height="auto",this.expandedContentEl.style.setProperty(this.CONTENT_VISIBILITY_PROPERTY,"visible"))}render(){const{appearance:e,size:t,disabled:n,expanded:s}=this;return(0,i.h)(i.H,{id:this.accordionId,class:{[`${e}`]:!0,disabled:n},"aria-disabled":n?"true":"false"},(0,i.h)("button",{ref:e=>this.accordionBtnHeading=e,id:`${this.accordionId}-button`,disabled:n,tabindex:n?-1:0,class:{[`${t}`]:!0,"section-button":!0,"section-button-open":s&&!n},"aria-expanded":`${s}`,"aria-controls":"expanded-content-area",onClick:this.toggleExpanded},(0,o.i)(this.el,"icon")&&(0,i.h)("div",{class:"icon-container"},(0,i.h)("slot",{name:"icon"})),(0,i.h)("ic-typography",{variant:"subtitle-large",class:"section-header"},(0,o.i)(this.el,"heading")?(0,i.h)("slot",{name:"heading"}):this.heading),(0,i.h)("span",{class:{"expand-chevron":!0,"content-expanded-chevron":s&&!n},"aria-hidden":"true",innerHTML:a.C})),(0,i.h)("div",{class:{"expanded-content":!0},"aria-labelledby":`${this.accordionId}-button`,role:"region","aria-hidden":`${!s}`,id:"expanded-content-area",ref:e=>this.expandedContentEl=e},(0,i.h)("div",{class:"expanded-content-inner"},this.message?(0,i.h)("ic-typography",{variant:"body"},this.message):(0,i.h)("slot",null))))}get el(){return(0,i.g)(this)}static get watchers(){return{expanded:["handleExpandedWatch"]}}};d.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;border-bottom:var(--ic-border-default)}:host ic-typography,:host .expand-chevron{color:var(--ic-color-primary-text)}:host(.light) ic-typography,:host(.light) .expanded-content,:host(.light) .icon-container,:host(.light) .expand-chevron{color:var(--ic-color-white-text)}:host(.disabled) ic-typography,:host(.disabled) .icon-container,:host(.disabled) .expand-chevron{color:var(--ic-architectural-500)}.section-button.small{padding:var(--ic-space-xxs) var(--ic-space-xs)}.section-button.large{padding:var(--ic-space-sm) var(--ic-space-xs)}:host(:first-of-type){border-top:var(--ic-border-default)}:focus{outline:none}.section-button{background-color:transparent;display:flex;align-items:center;width:100%;padding:var(--ic-space-xs);font-weight:var(--ic-font-weight-bold);border:none}.section-header{text-align:left;flex:1 0}button:hover:enabled{background-color:var(--ic-action-dark-bg-hover);cursor:pointer}button:active{background-color:var(--ic-action-dark-bg-active)}button:focus{box-shadow:var(--ic-border-focus);border-radius:var(--ic-border-radius);transition:var(--ic-transition-duration-fast)}button:disabled{pointer-events:none}.icon-container{margin:0 var(--ic-space-xs) 0 0;display:flex;align-items:center;width:var(--ic-space-lg);height:var(--ic-space-lg)}::slotted(svg){width:var(--ic-space-md);height:var(--ic-space-md)}.expand-chevron{width:var(--ic-space-lg);height:var(--ic-space-lg);margin-left:calc(var(--ic-space-xl) + var(--ic-space-xs));transform:rotate(90deg);justify-self:end}.content-expanded-chevron{transform:rotate(-90deg)}.expanded-content{height:0;overflow:hidden;display:flex;flex-direction:column;visibility:var(--ic-expanded-content-visibility, hidden)}.expanded-content-inner{padding:var(--ic-space-xs)}.expanded-content-opened{overflow:visible}'}}]);