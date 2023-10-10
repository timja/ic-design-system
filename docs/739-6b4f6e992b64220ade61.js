"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[739],{739:function(t,e,i){i.r(e),i.d(e,{ic_pagination:function(){return o}});var a=i(8434),s=i(6390);i(3077);const n='<svg width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M2.08748 0L0.912476 1.175L4.72914 5L0.912476 8.825L2.08748 10L7.08748 5L2.08748 0Z" fill="currentColor"/>\n</svg>\n',r='<svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M11.1709 8.825L7.34589 5L11.1709 1.175L9.99589 0L4.99589 5L9.99589 10L11.1709 8.825ZM0.829224 0H2.49589V10H0.829224V0Z" fill="currentColour"/>\n</svg>',o=class{constructor(t){(0,a.r)(this,t),this.icPageChange=(0,a.c)(this,"icPageChange",7),this.handleClickFirst=()=>{this.currentPage=1,this.icPageChange.emit({value:this.currentPage})},this.handleClickPrevious=()=>{this.currentPage--,this.icPageChange.emit({value:this.currentPage})},this.handleClickNext=()=>{this.currentPage++,this.icPageChange.emit({value:this.currentPage})},this.handleClickLast=()=>{this.currentPage=this.pages,this.icPageChange.emit({value:this.currentPage})},this.firstButton=()=>(0,a.h)("ic-button",{id:"first-page-button","aria-label":"Go to first page",disableTooltip:!0,appearance:this.appearance,onClick:this.handleClickFirst,class:"page-button first-last",disabled:1===this.currentPage||this.disabled,variant:"icon",innerHTML:r}),this.previousButton=()=>(0,a.h)("ic-button",{id:"previous-page-button","aria-label":"Go to previous page",disableTooltip:!0,appearance:this.appearance,onClick:this.handleClickPrevious,class:"page-button next-previous flip",disabled:1===this.currentPage||this.disabled,variant:"icon",innerHTML:n}),this.nextButton=()=>(0,a.h)("ic-button",{id:"next-page-button","aria-label":"Go to next page",disableTooltip:!0,appearance:this.appearance,onClick:this.handleClickNext,class:"page-button next-previous",disabled:this.currentPage===this.pages||this.disabled,variant:"icon",innerHTML:n}),this.lastButton=()=>(0,a.h)("ic-button",{id:"last-page-button","aria-label":"Go to last page",disableTooltip:!0,appearance:this.appearance,onClick:this.handleClickLast,class:"page-button first-last flip",disabled:this.currentPage===this.pages||this.disabled,variant:"icon",innerHTML:r}),this.renderStartEllipsis=()=>(0,a.h)("ic-pagination-item",{appearance:this.appearance,type:"ellipsis",id:"start-ellipsis",disabled:this.disabled}),this.renderEndEllipsis=()=>(0,a.h)("ic-pagination-item",{appearance:this.appearance,type:"ellipsis",id:"end-ellipsis",disabled:this.disabled}),this.renderStartItems=()=>this.startItems.map((t=>(0,a.h)("ic-pagination-item",{appearance:this.appearance,selected:t===this.currentPage,id:`pagination-item-${t}`,type:"page",page:t,disabled:this.disabled}))),this.renderEndItems=()=>this.endItems.map((t=>(0,a.h)("ic-pagination-item",{appearance:this.appearance,selected:t===this.currentPage,id:`pagination-item-${t}`,type:"page",page:t,disabled:this.disabled}))),this.renderMiddleItems=()=>this.midItems.map((t=>(0,a.h)("ic-pagination-item",{appearance:this.appearance,selected:t===this.currentPage,id:`pagination-item-${t}`,type:"page",page:t,disabled:this.disabled}))),this.endEllipsis=!1,this.endItems=[],this.midItems=[],this.startEllipsis=!1,this.startItems=[],this.adjacentCount=1,this.appearance="default",this.boundaryCount=1,this.defaultPage=1,this.disabled=!1,this.hideCurrentPage=!1,this.hideFirstAndLastPageButton=!1,this.label="Page",this.pages=void 0,this.type="simple",this.currentPage=this.defaultPage}watchNumberPagesHandler(){this.watchPageChangeHandler()}watchPageChangeHandler(){if("simple"===this.type)return;this.startEllipsis=!1,this.endEllipsis=!1,this.startItems=[],this.endItems=[],this.midItems=[];const t=[];let e=0;const i=[];let a=this.pages;const s=[];let n,r,o=!1,l=!1;if(this.pages<=2*this.boundaryCount+2*this.adjacentCount+3){this.startEllipsis=!1,this.endEllipsis=!1;for(let e=1;e<=this.pages;e++)t.push(e);this.startItems=t}else{if(e=0===this.boundaryCount?1:this.boundaryCount,a=0===this.boundaryCount?this.pages:this.pages-this.boundaryCount+1,this.currentPage<=this.adjacentCount+this.boundaryCount+2){o=!1,l=!0;let t=2*this.adjacentCount+1;0===this.boundaryCount&&t--,n=e+1,r=n+t}else if(o=!0,this.currentPage>this.pages-(this.adjacentCount+this.boundaryCount+2)){let t=2*this.adjacentCount+1;0===this.boundaryCount&&t--,r=0===this.boundaryCount?this.pages-1:this.pages-this.boundaryCount,n=r-t}else l=!0,n=this.currentPage-this.adjacentCount,r=this.currentPage+this.adjacentCount;if(this.boundaryCount>0||0===this.boundaryCount&&!1===o)for(let i=1;i<=e;i++)t.push(i);if(this.boundaryCount>0||0===this.boundaryCount&&!1===l)for(let t=a;t<=this.pages;t++)i.push(t);for(let t=n;t<=r;t++)s.push(t);this.startEllipsis=o,this.endEllipsis=l,this.startItems=t,this.endItems=i,this.midItems=s}}componentWillLoad(){this.watchPageChangeHandler(),this.boundaryCount>2&&(this.boundaryCount=2),this.adjacentCount>2&&(this.adjacentCount=2),(0,s.f)(this.disabled,this.el)}componentDidLoad(){(0,s.a)([{prop:this.pages,propName:"pages"}],"Pagination")}paginationItemClickHandler(t){const e=t.detail.page;this.currentPage=e,this.icPageChange.emit({value:this.currentPage})}async setCurrentPage(t){"number"==typeof t&&t>0&&t<=this.pages?this.currentPage=t:console.error("Current page must be a number greater than zero but less than or equal to the total number of pages")}render(){const{type:t,pages:e,currentPage:i,hideCurrentPage:s,disabled:n,hideFirstAndLastPageButton:r,label:o}=this;return(0,a.h)(a.H,null,"simple"===t&&(0,a.h)("nav",{class:{disabled:n},role:"navigation","aria-label":"Pagination Navigation"},r?null:this.firstButton(),this.previousButton(),(0,a.h)("ic-pagination-item",{pages:e,appearance:this.appearance,type:"simple-current",page:i,label:o,class:{"hide-current-page":s}}),this.nextButton(),r?null:this.lastButton()),"complex"===t&&(0,a.h)("nav",{class:{disabled:n},role:"navigation","aria-label":"Pagination Navigation"},r?null:this.firstButton(),this.previousButton(),this.renderStartItems(),this.startEllipsis&&this.renderStartEllipsis(),this.renderMiddleItems(),this.endEllipsis&&this.renderEndEllipsis(),this.renderEndItems(),this.nextButton(),r?null:this.lastButton()))}get el(){return(0,a.g)(this)}static get watchers(){return{pages:["watchNumberPagesHandler"],currentPage:["watchPageChangeHandler"]}}};o.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{box-sizing:border-box;width:100%;display:flex;justify-content:center}nav{width:100%;display:flex;flex-flow:row wrap;justify-content:flex-start;align-items:center}ic-button{cursor:pointer}ic-button.next-previous{--icon-width:var(--ic-space-xs);--icon-height:calc(var(--ic-space-xs) + var(--ic-space-xxxs));padding:0 var(--ic-space-xxs) 0 var(--ic-space-xxxs)}ic-button.first-last{--icon-width:calc(var(--ic-space-sm) + var(--ic-space-xxxs));--icon-height:calc(var(--ic-space-xs) + var(--ic-space-xxxs))}.disabled{color:var(--ic-architectural-200);pointer-events:none;cursor:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.hide-current-page{display:none}'}}]);