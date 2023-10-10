"use strict";(self.webpackChunkic_design_system=self.webpackChunkic_design_system||[]).push([[8155],{8155:function(s,a,t){t.r(a),t.d(a,{ic_badge:function(){return r}});var i=t(8434),c=t(3077),e=t(6390);const r=class{constructor(s){(0,i.r)(this,s),this.setBadgeColour=()=>{let s=null;if(null!==this.customColor){const a=this.customColor.slice(0,1);"#"===a?s=(0,e.h)(this.customColor):"r"===a.toLowerCase()&&(s=(0,e.r)(this.customColor)),this.customColorRGBA=s,this.el.style.backgroundColor=`rgba(${s.r.toString()}, ${s.g.toString()}, ${s.b.toString()}, ${s.a.toString()})`}},this.getBadgeForeground=()=>{let s,a,t;switch(this.variant){case"custom":s=this.customColorRGBA.r,a=this.customColorRGBA.g,t=this.customColorRGBA.b;break;case"error":s=parseInt((0,e.g)("--ic-status-error-r")),a=parseInt((0,e.g)("--ic-status-error-g")),t=parseInt((0,e.g)("--ic-status-error-b"));break;case"success":s=parseInt((0,e.g)("--ic-status-success-r")),a=parseInt((0,e.g)("--ic-status-success-g")),t=parseInt((0,e.g)("--ic-status-success-b"));break;case"warning":s=parseInt((0,e.g)("--ic-status-warning-r")),a=parseInt((0,e.g)("--ic-status-warning-g")),t=parseInt((0,e.g)("--ic-status-warning-b"));break;case"info":{const i=(0,e.h)((0,e.g)("--ic-status-info"));s=i.r,a=i.g,t=i.b;break}case"neutral":{const i=(0,e.h)((0,e.g)("--ic-architectural-500"));s=i.r,a=i.g,t=i.b;break}case"light":{const i=(0,e.h)((0,e.g)("--ic-architectural-40"));s=i.r,a=i.g,t=i.b;break}}const i=(299*s+587*a+114*t)/1e3;this.foregroundColour=i>133.3505?c.I.Dark:c.I.Light},this.getTextLabel=()=>{let s;return null!==this.textLabel&&(s=null!==this.maxNumber&&Number(this.textLabel)>this.maxNumber?`${this.maxNumber}+`:this.textLabel),s},this.setAccessibleLabel=()=>{null!==(0,e.b)(this.el)&&("IC-TAB"===(0,e.c)(this.el)?(0,e.b)(this.el).setAttribute("aria-describedby","badge"):(0,e.b)(this.el).ariaLabel=`badge displaying ${this.accessibleLabel}`)},this.isAccessibleLabelDefined=()=>void 0!==this.accessibleLabel&&null!==this.accessibleLabel,this.visible=!0,this.accessibleLabel=void 0,this.customColor=null,this.maxNumber=void 0,this.position="far",this.size="default",this.textLabel=void 0,this.type="text",this.variant="neutral"}componentWillLoad(){"custom"===this.variant&&this.setBadgeColour(),this.getBadgeForeground(),this.isAccessibleLabelDefined()&&this.setAccessibleLabel()}async showBadge(){this.visible=!0}async hideBadge(){this.visible=!1}render(){const{position:s,size:a,type:t,variant:c,foregroundColour:e,visible:r}=this;return(0,i.h)(i.H,{class:{[`${s}`]:!0,[`${a}`]:!0,[`${c}`]:!0,[`${t}`]:!0,[`foreground-${e}`]:null!==e,show:r,hide:!r},id:"badge","aria-label":this.isAccessibleLabelDefined()&&`badge displaying ${this.accessibleLabel}`},"icon"===t&&(0,i.h)("slot",{name:"badge-icon"}),"text"===t&&(0,i.h)("ic-typography",{variant:"small"===a?"badge-small":"badge"},this.getTextLabel()))}static get delegatesFocus(){return!0}get el(){return(0,i.g)(this)}};r.style="@media (prefers-reduced-motion: no-preference){:host(.show){animation:expand var(--ic-transition-duration-slow)}:host(.hide){animation:shrink var(--ic-transition-duration-slow)}}:host{display:flex;height:var(--ic-space-md);min-width:var(--ic-space-md);width:-moz-fit-content;width:fit-content;border-radius:calc(2 * var(--ic-space-xxl));position:absolute}:host(.neutral){background-color:var(--ic-architectural-500)}:host(.light){background-color:var(--ic-architectural-40)}:host(.info){background-color:var(--ic-status-info)}:host(.warning){background-color:var(--ic-status-warning-mid)}:host(.error){background-color:var(--ic-status-error)}:host(.success){background-color:var(--ic-status-success)}:host(.small){height:var(--ic-space-sm);min-width:var(--ic-space-sm)}:host(.large){height:calc(var(--ic-space-md) + var(--ic-space-xxs));min-width:calc(var(--ic-space-md) + var(--ic-space-xxs))}:host(.dot.default){height:var(--ic-space-xs);width:var(--ic-space-xs);min-width:var(--ic-space-xs)}:host(.dot.small){height:calc(var(--ic-space-xxs) + var(--ic-space-xxxs));width:calc(var(--ic-space-xxs) + var(--ic-space-xxxs));min-width:calc(var(--ic-space-xxs) + var(--ic-space-xxxs))}:host(.dot.large){height:var(--ic-space-sm);width:var(--ic-space-sm);min-width:var(--ic-space-sm)}:host(.foreground-dark) ::slotted(*){fill:var(--ic-color-primary-text)}:host(.foreground-light) ::slotted(*){fill:white}:host(.foreground-dark) ic-typography{color:var(--ic-color-primary-text)}:host(.foreground-light) ic-typography{color:white}:host(.text) ic-typography{align-self:center;padding:0 calc((var(--ic-space-xs) + var(--ic-space-1px)) / 2)\n    var(--ic-space-1px)}:host(.text.small) ic-typography{padding:0 0.2132rem}:host(.text.large) ic-typography{padding:0 calc((var(--ic-space-sm) + var(--ic-space-1px)) / 2)\n    var(--ic-space-1px)}:host(.icon) ::slotted(svg){width:var(--ic-space-sm);height:var(--ic-space-sm);padding:var(--ic-space-xxxs)}:host(.icon.small) ::slotted(svg){width:var(--ic-space-xs);height:var(--ic-space-xs)}:host(.icon.large) ::slotted(svg){width:calc(var(--ic-space-sm) + var(--ic-space-xxxs));height:calc(var(--ic-space-sm) + var(--ic-space-xxxs));padding:calc(var(--ic-space-xxxs) + var(--ic-space-1px))}:host(.far){top:calc(-1 * var(--ic-space-xs));right:calc(-1 * var(--ic-space-xs))}:host(.far.small),:host(.dot.far.large){top:calc(-1 * var(--ic-space-xxs));right:calc(-1 * var(--ic-space-xxs))}:host(.dot.far),:host(.dot.far.small){top:calc(-1 * var(--ic-space-xxxs));right:calc(-1 * var(--ic-space-xxxs))}:host(.near){top:calc(-1 * calc(var(--ic-space-xxs) + var(--ic-space-1px)));right:calc(-1 * calc(var(--ic-space-xxs) + var(--ic-space-1px)))}:host(.dot.near){top:calc(-1 * var(--ic-space-1px));right:calc(-1 * var(--ic-space-1px))}:host(.inline){position:static}:host(.hide){visibility:hidden !important;transition:visibility var(--ic-transition-duration-slow)}@keyframes expand{from{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@keyframes shrink{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0)}}"}}]);