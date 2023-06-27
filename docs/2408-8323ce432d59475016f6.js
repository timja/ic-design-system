"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[2408],{5088:function(e,t,i){i.r(t),i.d(t,{ic_radio_group:function(){return s}});var o=i(9065),a=i(2608);i(9455);const s=class{constructor(e){(0,o.r)(this,e),this.icChange=(0,o.c)(this,"icChange",7),this.handleKeyDown=e=>{switch(e.key){case"ArrowDown":case"ArrowRight":this.radioOptions[this.getNextItemToSelect(this.selectedChild,!0)].click(),e.preventDefault();break;case"ArrowUp":case"ArrowLeft":this.radioOptions[this.getNextItemToSelect(this.selectedChild,!1)].click(),e.preventDefault()}},this.getNextItemToSelect=(e,t)=>{const i=this.radioOptions.length-1;e<1&&(e=0);let o=t?e+1:e-1;return o<0?o=i:o>i&&(o=0),this.radioOptions[o].disabled&&(o=this.getNextItemToSelect(o,t)),o},this.label=void 0,this.name=void 0,this.required=!1,this.orientation="vertical",this.hideLabel=!1,this.disabled=!1,this.helperText=void 0,this.small=!1,this.validationStatus="",this.validationText="",this.checkedValue="",this.selectedChild=-1}selectHandler(e){var t;this.checkedValue=e.detail.value;const i=e.target;this.icChange.emit({value:this.checkedValue,selectedOption:{radio:i,textFieldValue:null===(t=null==i?void 0:i.querySelector("ic-text-field"))||void 0===t?void 0:t.value}}),void 0!==this.radioOptions&&(this.radioOptions.forEach(((e,t)=>{e.selected=this.checkedValue===e.value,e.selected&&(this.selectedChild=t)})),this.radioOptions[0].shadowRoot.querySelector("input").tabIndex=this.selectedChild>0?-1:0)}componentWillLoad(){(0,a.r)(this.disabled,this.host)}componentDidLoad(){this.radioOptions=Array.from(this.host.querySelectorAll("ic-radio-option")),this.radioOptions.forEach(((e,t)=>{e.selected||(e.selected=this.checkedValue===e.value),e.name=this.name,e.groupLabel=this.label,e.selected&&(this.selectedChild=t,this.checkedValue=e.value)})),this.radioOptions[0].shadowRoot.querySelector("input").tabIndex=this.selectedChild>0?-1:0,"horizontal"===this.orientation&&void 0!==this.radioOptions&&(this.radioOptions.length>2||2===this.radioOptions.length&&((0,a.i)(this.radioOptions[0],"additional-field")||(0,a.i)(this.radioOptions[1],"additional-field")))&&(this.orientation="vertical"),(0,a.a)([{prop:this.label,propName:"label"},{prop:this.name,propName:"name"}],"Radio Group")}render(){return(0,a.f)(!0,this.host,this.name,this.checkedValue,this.disabled),(0,o.h)(o.H,{onKeyDown:this.handleKeyDown,class:{small:this.small}},(0,o.h)("div",{role:"radiogroup","aria-label":"".concat(this.label).concat(this.required?", required":"")},!this.hideLabel&&(0,o.h)("ic-input-label",{class:{["".concat(this.validationStatus)]:!0},label:this.label,helperText:this.helperText,required:this.required,disabled:this.disabled}),(0,o.h)("div",{class:"radio-buttons-container"},(0,o.h)("slot",null))),(0,a.k)(this.validationStatus,this.disabled)&&(0,o.h)("ic-input-validation",{ariaLiveMode:"polite",status:this.validationStatus,message:this.validationText}))}get host(){return(0,o.g)(this)}};s.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block}ic-input-label.error{color:var(--ic-status-error)}ic-input-validation{margin-top:var(--ic-space-sm)}:host(.small) ic-input-validation{margin-top:calc(var(--ic-space-sm) / 2)}ic-input-label ic-typography{margin-bottom:var(--ic-space-sm)}:host(.small) ic-input-label ic-typography{margin-bottom:calc(var(--ic-space-sm) / 2)}.radio-buttons-container{display:flex;flex-direction:column;gap:var(--ic-space-xxs)}:host(.small) .radio-buttons-container{gap:var(--ic-space-xxxs)}:host([orientation="horizontal"]) .radio-buttons-container{display:flex;flex-direction:row;gap:calc(var(--ic-space-xl) + var(--ic-space-xs))}:host(.small[orientation="horizontal"]) .radio-buttons-container{gap:var(--ic-space-xl)}'}}]);
//# sourceMappingURL=2408-8323ce432d59475016f6.js.map