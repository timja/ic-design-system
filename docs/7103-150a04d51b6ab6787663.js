"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[7103],{6102:function(e,t,i){i.d(t,{A:function(){return D},B:function(){return z},I:function(){return r},a:function(){return y},b:function(){return c},c:function(){return $},d:function(){return h},e:function(){return d},f:function(){return u},g:function(){return v},h:function(){return k},i:function(){return w},j:function(){return I},k:function(){return L},l:function(){return A},m:function(){return b},n:function(){return B},o:function(){return E},p:function(){return m},q:function(){return S},r:function(){return q},s:function(){return p},t:function(){return C},u:function(){return V},v:function(){return s},w:function(){return o},x:function(){return g},y:function(){return T},z:function(){return N}});const s=["aria-atomic","aria-autocomplete","aria-busy","aria-controls","aria-current","aria-describedby","aria-description","aria-details","aria-disabled","aria-dropeffect","aria-errormessage","aria-expanded","aria-flowto","aria-grabbed","aria-haspopup","aria-hidden","aria-invalid","aria-keyshortcuts","aria-label","aria-labelledby","aria-live","aria-owns","aria-relevant","aria-roledescription"],n=["ic-hero","ic-top-navigation","ic-footer","ic-side-navigation","ic-alert"],a=["ic-alert"],l={"ic-alert":["ic-link"]};var o,r,h,u,c,d;!function(e){e.Warning="warning",e.Error="error",e.Success="success"}(o||(o={})),function(e){e.Default="default",e.Dark="dark",e.Light="light"}(r||(r={})),function(e){e[e.January=0]="January",e[e.February=1]="February",e[e.March=2]="March",e[e.April=3]="April",e[e.May=4]="May",e[e.June=5]="June",e[e.July=6]="July",e[e.August=7]="August",e[e.September=8]="September",e[e.October=9]="October",e[e.November=10]="November",e[e.December=11]="December"}(h||(h={})),function(e){e[e.Sun=0]="Sun",e[e.Mon=1]="Mon",e[e.Tue=2]="Tue",e[e.Wed=3]="Wed",e[e.Thu=4]="Thu",e[e.Fri=5]="Fri",e[e.Sat=6]="Sat"}(u||(u={})),function(e){e[e.Sunday=0]="Sunday",e[e.Monday=1]="Monday",e[e.Tuesday=2]="Tuesday",e[e.Wednesday=3]="Wednesday",e[e.Thursday=4]="Thursday",e[e.Friday=5]="Friday",e[e.Saturday=6]="Saturday"}(c||(c={})),function(e){e[e.Sunday=0]="Sunday",e[e.Monday=1]="Monday",e[e.Tuesday=2]="Tuesday",e[e.Wednesday=3]="Wednesday",e[e.Thursday=4]="Thursday",e[e.Friday=5]="Friday",e[e.Saturday=6]="Saturday"}(d||(d={}));const p=e=>{const t=[];return Object.values(e).forEach((e=>{if(isNaN(Number(e))){const i=e;t.push(i)}})),t},b=(e,t=[])=>{const i={};return t.forEach((t=>{if(e.hasAttribute(t)){null!==e.getAttribute(t)&&(i[t]=e.getAttribute(t)),e.removeAttribute(t)}})),i},m=(e,t,i,s,n)=>{if(void 0!==i&&(e||x(t))){const e=t.querySelectorAll("input.ic-input");let a=Array.from(e).filter((e=>t===e.parentElement))[0];null==a&&(a=t.ownerDocument.createElement("input"),a.type="hidden",a.classList.add("ic-input"),t.appendChild(a)),a.disabled=n,a.name=i,s instanceof Date?a.value=s?s.toISOString():null:a.value=s||""}},v=(e,t=null)=>{var i;const s=(e.parentElement||e.getRootNode().host.parentElement).closest(n.join(","));if(null!==s){const n=s.tagName.toLowerCase(),o=e.tagName.toLowerCase();return(null===(i=l[n])||void 0===i?void 0:i.includes(o))?r.Default:null===t||a.includes(n)?s.classList.contains(r.Dark)?r.Dark:r.Light:t}return r.Default},g=e=>!e||0===e.trim().length,f=e=>getComputedStyle(document.documentElement).getPropertyValue(e),y=(e,t)=>{const i=((e,t)=>e&&e.querySelector?e.querySelector(`[slot="${t}"]`):null)(e,t);return i?O(i):null},O=e=>{const t=e.firstElementChild;if(null!==t){const i=t.assignedElements?t.assignedElements():t.childNodes;return i.length?i:e.tagName?[e]:null}return null===e?null:[e]};Number(f("--ic-breakpoint-xs").replace("px","")),Number(f("--ic-breakpoint-sm").replace("px","")),Number(f("--ic-breakpoint-md").replace("px","")),Number(f("--ic-breakpoint-lg").replace("px","")),Number(f("--ic-breakpoint-xl").replace("px",""));const w=(e,t)=>Array.from(e.children).some((e=>e.getAttribute("slot")===t)),x=e=>!!e.shadowRoot&&!!e.attachShadow,S=(e,t,i)=>{return`${t?(s=e,s+"-helper-text"):""} ${i?(e=>e+"-validation-text")(e):""}`.trim();var s},C=()=>"maxTouchPoints"in navigator&&navigator.maxTouchPoints>0,k=(e,t,i="value",s="label")=>{const n=[];if(t.length>0&&t.map){t.map((e=>{e.children?e.children.map((e=>n.push(e))):n.push(e)}));const a=n.find((t=>t[i]===e));if(void 0!==a)return a[s]}},I=(e,t,i,s,n="label")=>e.filter((e=>{var a;const l=e[n].toLowerCase(),o=null===(a=e.description)||void 0===a?void 0:a.toLowerCase(),r=i.toLowerCase();return"anywhere"===s?t?l.includes(r)||(null==o?void 0:o.includes(r)):l.includes(r):t?l.startsWith(r)||(null==o?void 0:o.startsWith(r)):l.startsWith(r)})),L=e=>{const t=[];return e.length>0&&e.map&&e.map((e=>{e.children?e.children.map((e=>t.push(e))):t.push(e)})),t.length},T=e=>/^-?\d+$/.test(e),V=(e,t)=>""!==e&&!t,E=(e,t)=>{for(let i=0;i<e.length;i++){const{prop:s,propName:n}=e[i];null==s&&console.error(`No ${n} specified for ${t} component - prop '${n}' (web components) / '${F(n)}' (react) required`)}},F=e=>{const t=(e=e.toLowerCase()).split("-");let i=t[0];for(let s=1;s<t.length;s++)i+=t[s].substring(0,1).toUpperCase()+t[s].substring(1);return i},D=e=>{"undefined"!=typeof window&&void 0!==window.ResizeObserver&&e()},M=e=>e.closest("FORM"),B=(e,t)=>{const i=M(e);null!==i&&i.addEventListener("reset",t)},A=(e,t)=>{const i=M(e);null!==i&&i.removeEventListener("reset",t)},q=(e,t)=>{e||t.removeAttribute("disabled")},z=()=>window.navigator.userAgent.toUpperCase().indexOf("MAC")>=0,N=e=>e.charAt(0).toUpperCase()+e.slice(1),$=(e,t,i)=>{const s=e=>Array.from(e).some((e=>e.slot===i));return s(e)||s(t)}},7103:function(e,t,i){i.r(t),i.d(t,{ic_select_with_multi:function(){return r}});var s=i(9917),n=i(6102);const a='<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n<path d="M7 9.5L12 14.5L17 9.5H7Z" fill="currentColor" />\n</svg>\n',l='<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">\n<path d="M12.6666 4.27334L11.7266 3.33334L7.99998 7.06001L4.27331 3.33334L3.33331 4.27334L7.05998 8.00001L3.33331 11.7267L4.27331 12.6667L7.99998 8.94001L11.7266 12.6667L12.6666 11.7267L8.93998 8.00001L12.6666 4.27334Z" fill="currentColor" />\n</svg>\n';let o=0;const r=class{constructor(e){(0,s.r)(this,e),this.icBlur=(0,s.c)(this,"icBlur",7),this.icChange=(0,s.c)(this,"icChange",7),this.icClear=(0,s.c)(this,"icClear",7),this.icFocus=(0,s.c)(this,"icFocus",7),this.icInput=(0,s.c)(this,"icInput",7),this.icOptionSelect=(0,s.c)(this,"icOptionSelect",7),this.icOptionDeselect=(0,s.c)(this,"icOptionDeselect",7),this.icRetryLoad=(0,s.c)(this,"icRetryLoad",7),this.hasSetDefaultValue=!1,this.inheritedAttributes={},this.initialOptionsEmpty=!1,this.inputId="ic-select-input-"+o++,this.menuId=`${this.inputId}-menu`,this.searchableMenuItemSelected=!1,this.ungroupedOptions=[],this.handleRetry=e=>{var t;e.detail.keyPressed&&(null===(t=this.searchableSelectElement)||void 0===t||t.focus()),this.blurredBecauseButtonPressed=!0,this.retryButtonClick=!0,this.hasSetDefaultValue=!0,this.icRetryLoad.emit({value:this.hiddenInputValue})},this.emitIcChange=e=>{this.searchable||(this.multiple&&!Array.isArray(e)&&null!==e?this.handleMultipleSelectChange(e):this.value=e),clearTimeout(this.debounceIcChange),this.debounceIcChange=window.setTimeout((()=>{const t=this.multiple?this.value:e;this.icChange.emit({value:t})}),this.currDebounce)},this.emitImmediateIcChange=e=>{this.value=e,clearTimeout(this.debounceIcChange),this.icChange.emit({value:e})},this.deduplicateOptions=e=>{const t=[],i=[];let s;return e.forEach((e=>{if(e.children){s=[],e.children.forEach((e=>{t.includes(e.value)?console.warn(`ic-select with label ${this.label} was populated with duplicate option (value: ${e.value}) which has been removed.`):(t.push(e.value),s.push(e))}));const n=Object.assign(Object.assign({},e),{children:s});i.push(n)}else t.includes(e.value)?console.warn(`ic-select with label ${this.label} was populated with duplicate option (value: ${e.value}) which has been removed.`):(t.push(e.value),i.push(e))})),i},this.setOptionsValuesFromLabels=()=>{this.options.length>0&&this.options.map&&this.options.map((e=>{e.value||(e.value=e.label)}))},this.setUngroupedOptions=e=>{this.ungroupedOptions=e.detail.options},this.setTextColor=()=>{0===this.nativeSelectElement.selectedIndex?this.nativeSelectElement.className="placeholder":this.nativeSelectElement.className="select-option-selected"},this.setMenuChange=e=>{this.open!==e&&(this.open=e)},this.getLabelFromValue=e=>(0,n.h)(e,this.uniqueOptions),this.getMultipleOptionsString=e=>{const t=null==e?void 0:e.map((e=>this.getLabelFromValue(e)));return null==t?void 0:t.join(", ")},this.getFilteredChildMenuOptions=e=>{let t=e.children;t=this.searchable?(0,n.j)(e.children,this.includeDescriptionsInSearch,this.searchableSelectInputValue,this.searchMatchPosition):(0,n.j)(e.children,!1,this.pressedCharacters,"start");const i=Object.assign({},e);return i.children=t,i},this.getValueSortedByOptions=e=>{const t=e,i=this.ungroupedOptions.map((e=>e.value));return t.sort(((e,t)=>i.indexOf(e)-i.indexOf(t))),t},this.handleNativeSelectChange=()=>{this.icOptionSelect.emit({value:this.nativeSelectElement.value}),this.emitImmediateIcChange(this.nativeSelectElement.value),this.setTextColor()},this.handleCustomSelectChange=e=>{var t;const i=e.detail.value;this.searchable&&e.detail.label===this.emptyOptionListText?this.searchableSelectElement.focus():(this.searchable&&(this.value=i,this.searchableMenuItemSelected=!0,this.value===this.currValue&&(this.searchableSelectInputValue=this.getLabelFromValue(this.value)),this.inputValueToFilter=null,this.hiddenInputValue=this.getValueFromLabel(this.searchableSelectInputValue)),this.multiple&&(null===(t=this.value)||void 0===t?void 0:t.includes(i))?this.icOptionDeselect.emit({value:i}):this.icOptionSelect.emit({value:i}),this.ariaActiveDescendant=e.detail.optionId,this.emitIcChange(i))},this.handleMultipleSelectChange=e=>{if(this.value){let t=this.value.slice();if(this.value.includes(e)){const i=t.indexOf(e);t.splice(i,1)}else t.push(e),t=this.getValueSortedByOptions(t);this.value=0===t.length?null:t}else{const t=[];t.push(e),this.value=t}},this.handleSelectAllChange=e=>{const t=e.detail.select,i=this.ungroupedOptions.filter((e=>!e.disabled)).map((e=>e.value));let s;if(t){let e;e=this.value?i.filter((e=>this.value&&!this.value.includes(e))):i,e.forEach((e=>this.icOptionSelect.emit({value:e}))),s=i}else this.value.forEach((e=>this.icOptionDeselect.emit({value:e}))),s=null;this.emitIcChange(s)},this.handleMenuChange=e=>{this.open=e.detail.open,this.pressedCharacters="",this.searchable&&this.handleFocusIndicatorDisplay()},this.handleMenuKeyPress=e=>{e.cancelBubble=!0,this.multiple||this.handleCharacterKeyDown(e.detail.key)},this.handleFocusIndicatorDisplay=()=>{const e=this.el.shadowRoot.querySelector(".focus-indicator");this.open?e.classList.add("focus-indicator-enabled"):e.classList.remove("focus-indicator-enabled")},this.handleMouseDown=e=>{this.open||e.preventDefault()},this.isExternalFiltering=()=>this.searchable&&this.disableFilter,this.handleClick=e=>{var t;this.open||(this.isExternalFiltering()?this.menu.options=this.filteredOptions:this.hasTimedOut||this.loading||(null===(t=this.noOptions)||void 0===t?void 0:t.length)||this.searchable&&!this.searchableMenuItemSelected||(this.noOptions=null,this.menu.options=this.uniqueOptions)),0!==e.detail&&this.menu.handleClickOpen()},this.handleExpandIconMouseDown=e=>{this.disabled||(e.preventDefault(),this.searchableSelectElement.focus(),this.handleClick(e))},this.handleClear=e=>{e.stopPropagation(),this.hasTimedOut=!1,clearTimeout(this.timeoutTimer),this.noOptions=null,this.emitImmediateIcChange(null),this.icClear.emit(),this.searchable?(this.searchableSelectElement.value=null,this.searchableSelectInputValue=null,this.filteredOptions=this.uniqueOptions,this.hiddenInputValue=null,this.searchableSelectElement.focus()):this.customSelectElement.focus()},this.handleCharacterKeyDown=e=>{!this.open||" "!==e||0!==this.pressedCharacters.length||this.hasTimedOut||this.loading||this.setMenuChange(!1),1!==e.length||this.searchable?this.pressedCharacters="":(window.clearTimeout(this.characterKeyPressTimer),this.characterKeyPressTimer=window.setTimeout((()=>this.pressedCharacters=""),1e3),(" "!==e||this.pressedCharacters)&&(this.pressedCharacters+=e,this.handleFilter(),this.noOptions||this.emitImmediateIcChange(this.filteredOptions[0].value)))},this.handleNativeSelectKeyDown=e=>{("Escape"!==e.key&&"Tab"!==e.key||this.open)&&(e.cancelBubble=!0),this.handleCharacterKeyDown(e.key)},this.handleKeyDown=e=>{("Escape"!==e.key&&"Tab"!==e.key||this.open)&&(e.cancelBubble=!0);const t="ArrowDown"===e.key||"ArrowUp"===e.key;this.open||(this.isExternalFiltering()&&("Enter"===e.key||t)?this.menu.options=this.filteredOptions:this.hasTimedOut||(this.noOptions=null,this.menu.options=this.uniqueOptions)),this.open&&"Enter"===e.key?this.setMenuChange(!1):t&&null!==this.noOptions||(" "===e.key&&this.pressedCharacters.length>0||this.menu.handleKeyboardOpen(e),this.multiple||this.handleCharacterKeyDown(e.key))},this.handleClearButtonFocus=()=>{this.clearButtonFocused=!0},this.handleClearButtonBlur=e=>{var t;const i=null===(t=this.menu)||void 0===t?void 0:t.querySelector("#retry-button");this.searchableSelectElement&&e.relatedTarget===this.searchableSelectElement||i&&e.relatedTarget===i||(this.setMenuChange(!1),this.handleFocusIndicatorDisplay()),this.clearButtonFocused=!1},this.handleFilter=()=>{var e;const t=this.deduplicateOptions(this.searchable?[...this.uniqueOptions]:this.ungroupedOptions);let i,s=!1,a=[];t.map((e=>{e.children&&(s=!0)})),this.searchable?(i=(0,n.j)(t,this.includeDescriptionsInSearch,this.inputValueToFilter,this.searchMatchPosition),this.searchableMenuItemSelected=!1):i=(0,n.j)(t,!1,this.pressedCharacters,"start"),s||(null===(e=i[0])||void 0===e?void 0:e.label)===this.emptyOptionListText?s&&t.map((e=>{this.includeGroupTitlesInSearch&&-1!==i.indexOf(e)?a.push(e):a.push(this.getFilteredChildMenuOptions(e))})):a=i;let l=!1;s&&(l=!0,a.map((e=>{e.children.length>0&&(l=!1)}))),a.length>0&&!l?(this.noOptions=null,this.filteredOptions=a):(this.noOptions=[{label:this.emptyOptionListText,value:""}],this.filteredOptions=this.noOptions)},this.triggerLoading=()=>{this.hasTimedOut=!1,this.noOptions=[{label:this.loadingLabel,value:"",loading:!0}],this.filteredOptions!==this.noOptions&&this.searchable?this.filteredOptions=this.noOptions:this.uniqueOptions===this.noOptions||this.searchable||(this.uniqueOptions=this.noOptions),this.timeout&&(this.timeoutTimer=window.setTimeout((()=>{this.loading=!1,this.hasTimedOut=!0,this.noOptions=[{label:this.loadingErrorLabel,value:"",timedOut:!0}],this.filteredOptions=this.noOptions,this.searchable||(this.uniqueOptions=this.noOptions)}),this.timeout))},this.getValueFromLabel=e=>{var t;return null===(t=this.uniqueOptions.find((t=>t.label===e)))||void 0===t?void 0:t.value},this.handleSearchableSelectInput=e=>{this.searchableSelectInputValue=e.target.value,this.icInput.emit({value:this.searchableSelectInputValue}),this.emitIcChange(this.searchableSelectInputValue),this.hiddenInputValue=this.searchableSelectInputValue,this.inputValueToFilter=this.searchableSelectInputValue,this.setMenuChange(!0),this.disableFilter||(this.handleFilter(),this.debounceAriaLiveUpdate())},this.updateSearchableSelectResultAriaLive=()=>{const e=this.el.shadowRoot.querySelector(".searchable-select-results-status");e&&(null!==this.noOptions?e.innerText=this.emptyOptionListText:e.innerText="")},this.updateMultiSelectedCountAriaLive=()=>{var e;const t=this.el.shadowRoot.querySelector(".multi-select-selected-count"),i=`${null===(e=this.currValue)||void 0===e?void 0:e.length} of ${(0,n.k)(this.options)} selected`;t&&t.innerText!==i&&(t.innerText=i)},this.getDefaultValue=e=>this.getLabelFromValue(e)||e||null,this.setDefaultValue=()=>{!this.hasSetDefaultValue&&this.currValue&&(this.searchableSelectInputValue=this.searchable&&this.getDefaultValue(this.currValue),this.initialValue=this.currValue,this.hasSetDefaultValue=!0)},this.onFocus=()=>{this.icFocus.emit()},this.onBlur=e=>{var t;const i=e.relatedTarget;if(null!==i&&"UL"===i.tagName&&i.className.includes("menu"))return;const s=null===(t=this.menu)||void 0===t?void 0:t.querySelector("#retry-button");this.searchable&&e.relatedTarget!==this.menu&&!Array.from(this.menu.querySelectorAll("[role='option']")).includes(e.relatedTarget)&&!(this.clearButton&&e.relatedTarget===this.clearButton)&&!(s&&e.relatedTarget===s)&&(this.retryButtonClick||this.setMenuChange(!1),this.handleFocusIndicatorDisplay()),this.retryButtonClick=!1,this.icBlur.emit()},this.onTimeoutBlur=e=>{e.detail.ev.relatedTarget===this.searchableSelectElement||this.blurredBecauseButtonPressed||(this.setMenuChange(!1),this.handleFocusIndicatorDisplay(),this.icBlur.emit()),this.blurredBecauseButtonPressed=!1},this.handleFormReset=()=>{this.value=this.initialValue,this.searchable&&(this.searchableSelectInputValue=this.getDefaultValue(this.value),this.hiddenInputValue=this.value)},this.ariaActiveDescendant=void 0,this.clearButtonFocused=!1,this.debounceIcChange=void 0,this.hiddenInputValue=void 0,this.noOptions=null,this.open=!1,this.pressedCharacters="",this.searchableSelectInputValue=null,this.charactersUntilSuggestions=0,this.disabled=!1,this.disableFilter=!1,this.emptyOptionListText="No results found",this.form=void 0,this.formaction=void 0,this.formenctype=void 0,this.formmethod=void 0,this.formnovalidate=void 0,this.formtarget=void 0,this.fullWidth=!1,this.helperText="",this.hideLabel=!1,this.includeDescriptionsInSearch=!1,this.includeGroupTitlesInSearch=!1,this.label=void 0,this.loadingErrorLabel="Loading Error",this.loadingLabel="Loading...",this.multiple=!1,this.name=this.inputId,this.placeholder="Select an option",this.readonly=!1,this.required=!1,this.searchable=!1,this.searchMatchPosition="anywhere",this.selectOnEnter=!1,this.showClearButton=!1,this.size="default",this.small=!1,this.timeout=void 0,this.validationStatus="",this.validationText="",this.loading=!1,this.options=[],this.filteredOptions=this.options,this.uniqueOptions=this.options,this.debounce=0,this.currDebounce=this.debounce,this.value=void 0,this.initialValue=this.value,this.inputValueToFilter=this.value,this.currValue=this.value}loadingHandler(e){e&&this.triggerLoading()}watchOptionsHandler(){this.hasTimedOut||this.options===this.noOptions?this.searchable||(this.options=this.noOptions):(this.loading=!1,clearTimeout(this.timeoutTimer),this.isExternalFiltering()?(this.options.length>0?(this.setOptionsValuesFromLabels(),this.noOptions=null,this.uniqueOptions=this.deduplicateOptions(this.options),this.filteredOptions=this.uniqueOptions):(this.noOptions=[{label:this.emptyOptionListText,value:""}],this.uniqueOptions=this.noOptions,this.filteredOptions=this.noOptions),this.updateSearchableSelectResultAriaLive(),this.setDefaultValue()):(this.setOptionsValuesFromLabels(),this.uniqueOptions=this.deduplicateOptions(this.options),this.filteredOptions=this.uniqueOptions,this.initialOptionsEmpty&&(this.setDefaultValue(),this.initialOptionsEmpty=!1)))}debounceChangedHandler(e){this.updateOnChangeDebounce(e)}valueChangedHandler(){this.value!==this.currValue&&(this.value&&this.multiple?(this.currValue=this.getValueSortedByOptions(this.value),this.updateMultiSelectedCountAriaLive()):this.currValue=this.value),this.searchable&&(this.searchableSelectInputValue=this.getLabelFromValue(this.currValue)||this.currValue)}disconnectedCallback(){(0,n.l)(this.el,this.handleFormReset)}componentWillLoad(){this.inheritedAttributes=(0,n.m)(this.el,[...n.v,"tabindex","title"]),(0,n.r)(this.disabled,this.el),this.setOptionsValuesFromLabels(),(0,n.n)(this.el,this.handleFormReset),this.options.length?(this.setDefaultValue(),this.uniqueOptions=this.deduplicateOptions(this.options)):(this.initialOptionsEmpty=!0,this.noOptions=[{label:this.emptyOptionListText,value:""}],this.uniqueOptions=this.noOptions,this.filteredOptions=this.noOptions)}componentDidLoad(){(0,n.o)([{prop:this.label,propName:"label"}],"Select"),this.loading&&this.triggerLoading(),this.hiddenInputValue=this.searchable&&this.currValue}componentDidRender(){this.nativeSelectElement&&!this.disabled&&this.setTextColor()}async setFocus(){this.nativeSelectElement?this.nativeSelectElement.focus():this.customSelectElement?this.customSelectElement.focus():this.searchableSelectElement&&this.searchableSelectElement.focus()}updateOnChangeDebounce(e){this.currDebounce!==e&&(this.currDebounce=e)}debounceAriaLiveUpdate(){clearTimeout(this.debounceAria),window.setTimeout((()=>{this.updateSearchableSelectResultAriaLive()}),800)}render(){const{size:e,small:t,disabled:i,fullWidth:o,helperText:r,hideLabel:h,label:u,menuId:c,multiple:d,name:p,options:b,placeholder:m,readonly:v,required:g,searchable:f,showClearButton:y,validationStatus:O,validationText:w,currValue:x}=this;(0,n.p)(!0,this.el,p,this.searchable?this.hiddenInputValue:x,i);const S=O===n.w.Error?"true":"false",C=(0,n.q)(this.inputId,""!==r,(0,n.u)(this.validationStatus,this.disabled)).trim(),k=`${null==x?void 0:x.length} of ${(0,n.k)(this.options)} selected`;return(0,s.h)(s.H,{class:{disabled:i,searchable:f,small:t,[e]:"default"!==e,"full-width":o},onBlur:this.onBlur},(0,s.h)("ic-input-container",{readonly:v},!h&&(0,s.h)("ic-input-label",{for:this.inputId,label:u,helperText:r,required:g,disabled:i,readonly:v}),(0,s.h)("ic-input-component-container",{ref:e=>this.anchorEl=e,class:{"menu-open":this.open},small:t,size:e,fullWidth:o,disabled:i,readonly:v,validationStatus:O},v?(0,s.h)("ic-typography",null,(0,s.h)("p",null,d?this.getMultipleOptionsString(x):this.getLabelFromValue(x))):(0,n.t)()&&!d?(0,s.h)("select",Object.assign({ref:e=>this.nativeSelectElement=e,disabled:i,onChange:this.handleNativeSelectChange,required:g,id:this.inputId,"aria-label":u,"aria-describedby":C,"aria-invalid":S,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.handleNativeSelectKeyDown,form:this.form},this.inheritedAttributes),(0,s.h)("option",{value:"",selected:!0,disabled:!y},m),b.map((e=>e.children?(0,s.h)("optgroup",{label:e.label},e.children.map((e=>(0,s.h)("option",{value:e.value,disabled:e.disabled,selected:e.value===x},e.label)))):(0,s.h)("option",{value:e.value,disabled:e.disabled,selected:e.value===x},e.label)))):f?(0,s.h)("div",{class:"searchable-select-container"},(0,s.h)("input",{class:{"select-input":!0,"with-clear-button":!!this.searchableSelectInputValue},role:"combobox",autocomplete:"off","aria-label":u,"aria-describedby":C,"aria-activedescendant":this.ariaActiveDescendant,"aria-autocomplete":"list","aria-expanded":this.open?"true":"false","aria-invalid":S,"aria-required":g?"true":"false","aria-controls":c,ref:e=>this.searchableSelectElement=e,id:this.inputId,value:this.searchableSelectInputValue,placeholder:m,disabled:i,onInput:this.handleSearchableSelectInput,onClick:this.handleClick,onKeyDown:this.handleKeyDown,onFocus:this.onFocus,onBlur:this.onBlur,form:this.form,formaction:this.formaction,formenctype:this.formenctype,formmethod:this.formmethod,formnovalidate:this.formnovalidate,formtarget:this.formtarget}),this.searchableSelectInputValue&&(y||f)&&(0,s.h)("div",{class:"clear-button-container"},(0,s.h)("ic-button",{id:"clear-button",ref:e=>this.clearButton=e,"aria-label":this.searchableSelectInputValue&&null===x?"Clear input":"Clear selection",class:"clear-button",innerHTML:l,onClick:this.handleClear,onFocus:this.handleClearButtonFocus,onBlur:this.handleClearButtonBlur,size:e,variant:"icon",appearance:this.clearButtonFocused?n.I.Light:n.I.Dark}),(0,s.h)("div",{class:"divider"})),(0,s.h)("span",{onMouseDown:this.handleExpandIconMouseDown,class:{"expand-icon":!0,"expand-icon-open":this.open},innerHTML:a,"aria-hidden":"true"}),(0,s.h)("div",{"aria-live":"polite",role:"status",class:"searchable-select-results-status"})):(0,s.h)("div",{class:"select-container"},(0,s.h)("button",{class:"select-input",ref:e=>this.customSelectElement=e,id:this.inputId,"aria-label":`${u}, ${(d&&x?`${k}, ${this.getMultipleOptionsString(x)}`:this.getLabelFromValue(x))||m}${g?", required":""}`,"aria-describedby":C,"aria-invalid":S,"aria-haspopup":"listbox","aria-expanded":this.open?"true":"false","aria-owns":c,"aria-controls":c,disabled:i,onBlur:this.onBlur,onFocus:this.onFocus,onClick:this.handleClick,onMouseDown:this.handleMouseDown,onKeyDown:this.handleKeyDown},(0,s.h)("ic-typography",{variant:"body",class:{"value-text":!0,"with-clear-button":x&&y,placeholder:!this.value||d&&this.value.length<1}},(0,s.h)("p",null,(d?this.getMultipleOptionsString(x):this.getLabelFromValue(x))||m)),(0,s.h)("div",{class:"select-input-end"},x&&y&&(0,s.h)("div",{class:"divider"}),(0,s.h)("span",{class:{"expand-icon":!0,"expand-icon-open":this.open},innerHTML:a,"aria-hidden":"true"}))),x&&y&&(0,s.h)("ic-button",{id:"clear-button","aria-label":"Clear selection",class:"clear-button",innerHTML:l,onClick:this.handleClear,onFocus:this.handleClearButtonFocus,onBlur:this.handleClearButtonBlur,size:e,variant:"icon",appearance:this.clearButtonFocused?n.I.Light:n.I.Dark}))),(!(0,n.t)()||d)&&(0,s.h)("ic-menu-with-multi",{class:{"no-results":this.loading||this.hasTimedOut||null!==this.noOptions&&this.noOptions[0]&&this.noOptions[0].label===this.emptyOptionListText},ref:e=>this.menu=e,inputEl:f?this.searchableSelectElement:this.customSelectElement,inputLabel:u,anchorEl:this.anchorEl,small:t,size:e,menuId:c,open:this.open,options:f?this.filteredOptions:this.uniqueOptions,value:x,fullWidth:o,selectOnEnter:this.selectOnEnter,onMenuStateChange:this.handleMenuChange,onMenuOptionSelect:this.handleCustomSelectChange,onMenuOptionSelectAll:this.handleSelectAllChange,onMenuKeyPress:this.handleMenuKeyPress,onUngroupedOptionsSet:this.setUngroupedOptions,onRetryButtonClicked:this.handleRetry,parentEl:this.el,onTimeoutBlur:this.onTimeoutBlur,activationType:this.searchable||d||this.selectOnEnter?"manual":"automatic",closeOnSelect:!d}),this.multiple&&(0,s.h)("div",{"aria-live":"polite",role:"status",class:"multi-select-selected-count"}),(0,n.u)(this.validationStatus,this.disabled)&&(0,s.h)("ic-input-validation",{class:{"menu-open":this.open},ariaLiveMode:"polite",status:O,message:w,for:this.inputId})))}static get delegatesFocus(){return!0}get el(){return(0,s.g)(this)}static get watchers(){return{loading:["loadingHandler"],options:["watchOptionsHandler"],debounce:["debounceChangedHandler"],value:["valueChangedHandler"]}}};r.style='/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%;}body{margin:0}main{display:block}h1{font-size:2em;margin:0.67em 0}hr{box-sizing:content-box;height:0;overflow:visible;}pre{font-family:monospace, monospace;font-size:1em;}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted;}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace, monospace;font-size:1em;}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0;}button,input{overflow:visible}button,select{text-transform:none}button,[type="button"],[type="reset"],[type="submit"]{-webkit-appearance:button}button::-moz-focus-inner,[type="button"]::-moz-focus-inner,[type="reset"]::-moz-focus-inner,[type="submit"]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type="button"]:-moz-focusring,[type="reset"]:-moz-focusring,[type="submit"]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:0.35em 0.75em 0.625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}progress{vertical-align:baseline}textarea{overflow:auto}[type="checkbox"],[type="radio"]{box-sizing:border-box;padding:0;}[type="number"]::-webkit-inner-spin-button,[type="number"]::-webkit-outer-spin-button{height:auto}[type="search"]{-webkit-appearance:textfield;outline-offset:-2px;}[type="search"]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font-style:inherit;vertical-align:baseline}:host{display:block;position:relative;--menu-max-height:100px}:host(.full-width){width:100%}ic-input-component-container:hover{--border-color:var(--ic-action-dark-hover)}ic-input-component-container:active{--border-color:var(--ic-action-dark-active);color:var(--ic-action-dark-active)}ic-input-component-container.menu-open{--border-color:var(--ic-architectural-400);color:var(--ic-action-dark)}ic-input-validation .status-icon,ic-input-validation .statustext{visibility:visible}ic-input-validation.menu-open .status-icon,ic-input-validation.menu-open .statustext{visibility:hidden;transition:visibility 0s}ic-input-label{margin-bottom:var(--ic-space-xs) !important}select{border:0;border-radius:var(--ic-border-radius);background-color:var(--ic-architectural-white);color:var(--ic-color-primary-text);line-height:1.5rem;letter-spacing:0.005rem;width:100%;height:100%;padding-left:0.375rem;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-repeat:no-repeat;background-position:right 0.375rem center;background-image:url("data:image/svg+xml;utf8,<svg fill=\'black\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")}select option,.select-option-selected{color:var(--ic-color-primary-text)}select:disabled{color:var(--ic-architectural-200);background-image:url("data:image/svg+xml;utf8,<svg fill=\'grey\' height=\'24\' viewBox=\'0 0 24 24\' width=\'24\' xmlns=\'http://www.w3.org/2000/svg\'><path d=\'M7 10l5 5 5-5z\'/><path d=\'M0 0h24v24H0z\' fill=\'none\'/></svg>")}select:focus{border:0;outline:0}select:not([disabled]){cursor:pointer}.select-container{width:100%;display:flex;align-items:center;position:relative}.select-input{width:100%;height:100%;padding:0 0.375rem;display:flex;cursor:pointer;align-items:center;justify-content:space-between;background:none;border:none}.select-input:focus{outline:var(--ic-hc-focus-outline)}:host(:not(.disabled)) ic-input-component-container:hover .select-input{background-color:var(--ic-architectural-white)}.select-input[disabled]{pointer-events:none}:host(.searchable) .select-input{cursor:auto}.select-input.with-clear-button{padding-right:0}.value-text{max-width:calc(100% - (var(--ic-space-lg) + var(--ic-space-xxs)));box-sizing:border-box}.value-text.with-clear-button{padding-right:calc(var(--ic-space-xl) + var(--ic-space-xs))}.value-text p{white-space:nowrap;text-overflow:ellipsis;overflow:hidden;margin-bottom:0 !important}.searchable-select-container{align-items:center;display:flex;width:100%;position:relative}.expand-icon{height:var(--ic-space-lg);padding-left:var(--ic-space-xxs);color:var(--ic-action-dark)}.expand-icon>svg{display:inline-block;width:var(--ic-space-lg);height:var(--ic-space-lg)}:host(.disabled) .expand-icon,:host(.disabled) .expand-icon>svg>path{color:var(--ic-architectural-200)}:host(.searchable) .expand-icon{padding-left:0;height:2.25rem}:host(.searchable) .expand-icon>svg{height:2.25rem;padding:0 0.375rem}:host(.searchable:not(.disabled)) .expand-icon>svg{cursor:pointer}.expand-icon-open{color:var(--ic-action-dark)}.expand-icon-open,:host(.searchable) .expand-icon-open{transform:rotateX(180deg)}:host(.disabled) .value-text,.placeholder{color:var(--ic-color-tertiary-text)}.select-input-end{display:flex;align-items:center}.clear-button-container{display:flex}.divider{width:var(--ic-space-1px);background-color:var(--ic-architectural-400);margin:var(--ic-space-xxs) 0;border-radius:var(--ic-space-1px);height:var(--ic-space-lg)}:host(.small) .divider{height:var(--ic-space-md)}:host(.large) .divider{height:var(--ic-space-xl)}.clear-button{position:absolute;right:calc(var(--ic-space-xl) + var(--ic-space-xxs));border-radius:var(--ic-border-radius);transition:box-shadow var(--ic-easing-transition),\n    border-radius var(--ic-easing-transition)}.clear-button:focus{background-color:var(--ic-focus-blue);box-shadow:inset 0 0 0 0.125rem var(--ic-focus-glow);border-radius:0.25rem}.clear-button:focus *{fill:white}.clear-button.searchable{position:static}.searchable-select-results-status,.multi-select-selected-count{border:0;clip:rect(0, 0, 0, 0, 0);height:var(--ic-space-1px);overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:var(--ic-space-1px)}'}}]);