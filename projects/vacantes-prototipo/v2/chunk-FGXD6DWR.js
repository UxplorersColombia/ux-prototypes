import{$ as sn,Aa as j,Ba as so,D as Ki,J as rn,K as xt,M as $n,N as Ge,P as Qi,Q as Zi,R as Ue,S as jn,U as Yi,W as Xi,a as Ln,b as nn,ba as an,c as on,ca as Ae,d as it,da as Ct,e as vt,ea as ht,f as ot,fa as Ji,g as pe,ga as Vt,h as je,ha as ln,i as zn,ia as dn,ja as kt,ka as eo,la as to,ma as no,oa as io,qa as oo,ra as ro,s as Hn,sa as rt,t as Ui,ta as be,u as yt,v as Wi,w as qi,wa as Gn,xa as Un,ya as ft,za as wt}from"./chunk-TD6YW6MW.js";import{$ as Te,$a as Ai,Ab as _,Bb as A,C as Fi,Cb as K,Da as Yt,Db as tt,Eb as Li,Fa as bt,G as Qt,Ga as He,Gb as zi,H as An,Ha as Z,Hb as Hi,I as gt,Ib as $i,J as Pi,Ja as Bn,Jb as R,K as Zt,Kb as en,Lb as ke,M as Oe,Ma as P,Mb as Se,N as T,Na as te,Nb as tn,O as ee,Oa as H,Ob as ji,Pa as re,Pb as Fe,Q as O,Qa as k,Ra as y,Rb as Ze,S as p,Sb as V,Ta as Ri,V as Vi,Vb as Ne,Wa as Xt,Wb as g,X as se,Xa as I,Xb as _t,Y as ae,Ya as ne,Yb as nt,Z as le,Za as ie,_ as Ee,a as w,ab as Bi,ac as v,b as he,bb as u,bc as Re,c as wi,ca as E,cb as b,d as ut,da as Me,db as m,dc as Gi,eb as Q,f as Pt,fb as ve,g as q,gb as we,h as Si,ha as $,hb as ge,i as Nn,ib as Y,ja as fe,jb as X,k as Di,ka as pt,kb as de,l as Ii,la as x,lb as $e,mb as Jt,na as _e,nb as B,p as qt,pa as Oi,pb as c,qb as ye,ra as mt,rb as me,sb as Je,tb as qe,ub as M,v as Ei,va as Ni,vb as F,w as Ti,wb as Ke,x as Kt,xb as et,y as Mi,ya as d,yb as Ce,z as Rn,zb as Qe}from"./chunk-TXI5HPMO.js";var go=(()=>{class n{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(t){return new(t||n)(Z(He),Z(_e))};static \u0275dir=H({type:n})}return n})(),ls=(()=>{class n extends go{static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275dir=H({type:n,features:[k]})}return n})(),at=new O("");var ds={provide:at,useExisting:Oe(()=>Lt),multi:!0};function cs(){let n=Ln()?Ln().getUserAgent():"";return/android (\d+)/.test(n.toLowerCase())}var us=new O(""),Lt=(()=>{class n extends go{_compositionMode;_composing=!1;constructor(e,t,i){super(e,t),this._compositionMode=i,this._compositionMode==null&&(this._compositionMode=!cs())}writeValue(e){let t=e??"";this.setProperty("value",t)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(t){return new(t||n)(Z(He),Z(_e),Z(us,8))};static \u0275dir=H({type:n,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,i){t&1&&B("input",function(s){return i._handleInput(s.target.value)})("blur",function(){return i.onTouched()})("compositionstart",function(){return i._compositionStart()})("compositionend",function(s){return i._compositionEnd(s.target.value)})},standalone:!1,features:[R([ds]),k]})}return n})();var mo=new O(""),bo=new O("");function _o(n){return n!=null}function vo(n){return Ri(n)?Di(n):n}function yo(n){let o={};return n.forEach(e=>{o=e!=null?w(w({},o),e):o}),Object.keys(o).length===0?null:o}function xo(n,o){return o.map(e=>e(n))}function ps(n){return!n.validate}function Co(n){return n.map(o=>ps(o)?o:e=>o.validate(e))}function hs(n){if(!n)return null;let o=n.filter(_o);return o.length==0?null:function(e){return yo(xo(e,o))}}function Kn(n){return n!=null?hs(Co(n)):null}function fs(n){if(!n)return null;let o=n.filter(_o);return o.length==0?null:function(e){let t=xo(e,o).map(vo);return Ei(t).pipe(qt(yo))}}function Qn(n){return n!=null?fs(Co(n)):null}function ao(n,o){return n===null?[o]:Array.isArray(n)?[...n,o]:[n,o]}function gs(n){return n._rawValidators}function ms(n){return n._rawAsyncValidators}function Wn(n){return n?Array.isArray(n)?n:[n]:[]}function un(n,o){return Array.isArray(n)?n.includes(o):n===o}function lo(n,o){let e=Wn(o);return Wn(n).forEach(i=>{un(e,i)||e.push(i)}),e}function co(n,o){return Wn(o).filter(e=>!un(n,e))}var pn=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(o){this._rawValidators=o||[],this._composedValidatorFn=Kn(this._rawValidators)}_setAsyncValidators(o){this._rawAsyncValidators=o||[],this._composedAsyncValidatorFn=Qn(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(o){this._onDestroyCallbacks.push(o)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(o=>o()),this._onDestroyCallbacks=[]}reset(o=void 0){this.control?.reset(o)}hasError(o,e){return this.control?this.control.hasError(o,e):!1}getError(o,e){return this.control?this.control.getError(o,e):null}},It=class extends pn{name;get formDirective(){return null}get path(){return null}},De=class extends pn{_parent=null;name=null;valueAccessor=null},hn=class{_cd;constructor(o){this._cd=o}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}};var lt=(()=>{class n extends hn{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(Z(De,2))};static \u0275dir=H({type:n,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,i){t&2&&Ce("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)},standalone:!1,features:[k]})}return n})(),ru=(()=>{class n extends hn{constructor(e){super(e)}static \u0275fac=function(t){return new(t||n)(Z(It,10))};static \u0275dir=H({type:n,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["","formArray",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(t,i){t&2&&Ce("ng-untouched",i.isUntouched)("ng-touched",i.isTouched)("ng-pristine",i.isPristine)("ng-dirty",i.isDirty)("ng-valid",i.isValid)("ng-invalid",i.isInvalid)("ng-pending",i.isPending)("ng-submitted",i.isSubmitted)},standalone:!1,features:[k]})}return n})();var Ot="VALID",cn="INVALID",St="PENDING",Nt="DISABLED",st=class{},fn=class extends st{value;source;constructor(o,e){super(),this.value=o,this.source=e}},At=class extends st{pristine;source;constructor(o,e){super(),this.pristine=o,this.source=e}},Bt=class extends st{touched;source;constructor(o,e){super(),this.touched=o,this.source=e}},Dt=class extends st{status;source;constructor(o,e){super(),this.status=o,this.source=e}},qn=class extends st{source;constructor(o){super(),this.source=o}},gn=class extends st{source;constructor(o){super(),this.source=o}};function ko(n){return(_n(n)?n.validators:n)||null}function bs(n){return Array.isArray(n)?Kn(n):n||null}function wo(n,o){return(_n(o)?o.asyncValidators:n)||null}function _s(n){return Array.isArray(n)?Qn(n):n||null}function _n(n){return n!=null&&!Array.isArray(n)&&typeof n=="object"}function vs(n,o,e){let t=n.controls;if(!(o?Object.keys(t):t).length)throw new Zt(1e3,"");if(!t[e])throw new Zt(1001,"")}function ys(n,o,e){n._forEachChild((t,i)=>{if(e[i]===void 0)throw new Zt(-1002,"")})}var mn=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(o,e){this._assignValidators(o),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(o){this._rawValidators=this._composedValidatorFn=o}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(o){this._rawAsyncValidators=this._composedAsyncValidatorFn=o}get parent(){return this._parent}get status(){return Ze(this.statusReactive)}set status(o){Ze(()=>this.statusReactive.set(o))}_status=V(()=>this.statusReactive());statusReactive=$(void 0);get valid(){return this.status===Ot}get invalid(){return this.status===cn}get pending(){return this.status===St}get disabled(){return this.status===Nt}get enabled(){return this.status!==Nt}errors;get pristine(){return Ze(this.pristineReactive)}set pristine(o){Ze(()=>this.pristineReactive.set(o))}_pristine=V(()=>this.pristineReactive());pristineReactive=$(!0);get dirty(){return!this.pristine}get touched(){return Ze(this.touchedReactive)}set touched(o){Ze(()=>this.touchedReactive.set(o))}_touched=V(()=>this.touchedReactive());touchedReactive=$(!1);get untouched(){return!this.touched}_events=new q;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(o){this._assignValidators(o)}setAsyncValidators(o){this._assignAsyncValidators(o)}addValidators(o){this.setValidators(lo(o,this._rawValidators))}addAsyncValidators(o){this.setAsyncValidators(lo(o,this._rawAsyncValidators))}removeValidators(o){this.setValidators(co(o,this._rawValidators))}removeAsyncValidators(o){this.setAsyncValidators(co(o,this._rawAsyncValidators))}hasValidator(o){return un(this._rawValidators,o)}hasAsyncValidator(o){return un(this._rawAsyncValidators,o)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(o={}){let e=this.touched===!1;this.touched=!0;let t=o.sourceControl??this;o.onlySelf||this._parent?.markAsTouched(he(w({},o),{sourceControl:t})),e&&o.emitEvent!==!1&&this._events.next(new Bt(!0,t))}markAllAsDirty(o={}){this.markAsDirty({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(o))}markAllAsTouched(o={}){this.markAsTouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(o))}markAsUntouched(o={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=o.sourceControl??this;this._forEachChild(i=>{i.markAsUntouched({onlySelf:!0,emitEvent:o.emitEvent,sourceControl:t})}),o.onlySelf||this._parent?._updateTouched(o,t),e&&o.emitEvent!==!1&&this._events.next(new Bt(!1,t))}markAsDirty(o={}){let e=this.pristine===!0;this.pristine=!1;let t=o.sourceControl??this;o.onlySelf||this._parent?.markAsDirty(he(w({},o),{sourceControl:t})),e&&o.emitEvent!==!1&&this._events.next(new At(!1,t))}markAsPristine(o={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=o.sourceControl??this;this._forEachChild(i=>{i.markAsPristine({onlySelf:!0,emitEvent:o.emitEvent})}),o.onlySelf||this._parent?._updatePristine(o,t),e&&o.emitEvent!==!1&&this._events.next(new At(!0,t))}markAsPending(o={}){this.status=St;let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new Dt(this.status,e)),this.statusChanges.emit(this.status)),o.onlySelf||this._parent?.markAsPending(he(w({},o),{sourceControl:e}))}disable(o={}){let e=this._parentMarkedDirty(o.onlySelf);this.status=Nt,this.errors=null,this._forEachChild(i=>{i.disable(he(w({},o),{onlySelf:!0}))}),this._updateValue();let t=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new fn(this.value,t)),this._events.next(new Dt(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(he(w({},o),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(i=>i(!0))}enable(o={}){let e=this._parentMarkedDirty(o.onlySelf);this.status=Ot,this._forEachChild(t=>{t.enable(he(w({},o),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent}),this._updateAncestors(he(w({},o),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(o,e){o.onlySelf||(this._parent?.updateValueAndValidity(o),o.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e))}setParent(o){this._parent=o}getRawValue(){return this.value}updateValueAndValidity(o={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Ot||this.status===St)&&this._runAsyncValidator(t,o.emitEvent)}let e=o.sourceControl??this;o.emitEvent!==!1&&(this._events.next(new fn(this.value,e)),this._events.next(new Dt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),o.onlySelf||this._parent?.updateValueAndValidity(he(w({},o),{sourceControl:e}))}_updateTreeValidity(o={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(o)),this.updateValueAndValidity({onlySelf:!0,emitEvent:o.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Nt:Ot}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(o,e){if(this.asyncValidator){this.status=St,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:o!==!1};let t=vo(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(i=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(i,{emitEvent:e,shouldHaveEmitted:o})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let o=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,o}return!1}setErrors(o,e={}){this.errors=o,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(o){let e=o;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,i)=>t&&t._find(i),this)}getError(o,e){let t=e?this.get(e):this;return t?.errors?t.errors[o]:null}hasError(o,e){return!!this.getError(o,e)}get root(){let o=this;for(;o._parent;)o=o._parent;return o}_updateControlsErrors(o,e,t){this.status=this._calculateStatus(),o&&this.statusChanges.emit(this.status),(o||t)&&this._events.next(new Dt(this.status,e)),this._parent&&this._parent._updateControlsErrors(o,e,t)}_initObservables(){this.valueChanges=new E,this.statusChanges=new E}_calculateStatus(){return this._allControlsDisabled()?Nt:this.errors?cn:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(St)?St:this._anyControlsHaveStatus(cn)?cn:Ot}_anyControlsHaveStatus(o){return this._anyControls(e=>e.status===o)}_anyControlsDirty(){return this._anyControls(o=>o.dirty)}_anyControlsTouched(){return this._anyControls(o=>o.touched)}_updatePristine(o,e){let t=!this._anyControlsDirty(),i=this.pristine!==t;this.pristine=t,o.onlySelf||this._parent?._updatePristine(o,e),i&&this._events.next(new At(this.pristine,e))}_updateTouched(o={},e){this.touched=this._anyControlsTouched(),this._events.next(new Bt(this.touched,e)),o.onlySelf||this._parent?._updateTouched(o,e)}_onDisabledChange=[];_registerOnCollectionChange(o){this._onCollectionChange=o}_setUpdateStrategy(o){_n(o)&&o.updateOn!=null&&(this._updateOn=o.updateOn)}_parentMarkedDirty(o){return!o&&!!this._parent?.dirty&&!this._parent._anyControlsDirty()}_find(o){return null}_assignValidators(o){this._rawValidators=Array.isArray(o)?o.slice():o,this._composedValidatorFn=bs(this._rawValidators)}_assignAsyncValidators(o){this._rawAsyncValidators=Array.isArray(o)?o.slice():o,this._composedAsyncValidatorFn=_s(this._rawAsyncValidators)}},bn=class extends mn{constructor(o,e,t){super(ko(e),wo(t,e)),this.controls=o,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(o,e){return this.controls[o]?this.controls[o]:(this.controls[o]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(o,e,t={}){this.registerControl(o,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(o,e={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(o,e,t={}){this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),delete this.controls[o],e&&this.registerControl(o,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(o){return this.controls.hasOwnProperty(o)&&this.controls[o].enabled}setValue(o,e={}){ys(this,!0,o),Object.keys(o).forEach(t=>{vs(this,!0,t),this.controls[t].setValue(o[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(o,e={}){o!=null&&(Object.keys(o).forEach(t=>{let i=this.controls[t];i&&i.patchValue(o[t],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(o={},e={}){this._forEachChild((t,i)=>{t.reset(o?o[i]:null,he(w({},e),{onlySelf:!0}))}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new gn(this))}getRawValue(){return this._reduceChildren({},(o,e,t)=>(o[t]=e.getRawValue(),o))}_syncPendingControls(){let o=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return o&&this.updateValueAndValidity({onlySelf:!0}),o}_forEachChild(o){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&o(t,e)})}_setUpControls(){this._forEachChild(o=>{o.setParent(this),o._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(o){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&o(t))return!0;return!1}_reduceValue(){let o={};return this._reduceChildren(o,(e,t,i)=>((t.enabled||this.disabled)&&(e[i]=t.value),e))}_reduceChildren(o,e){let t=o;return this._forEachChild((i,r)=>{t=e(t,i,r)}),t}_allControlsDisabled(){for(let o of Object.keys(this.controls))if(this.controls[o].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(o){return this.controls.hasOwnProperty(o)?this.controls[o]:null}};var Zn=new O("",{factory:()=>Yn}),Yn="always";function xs(n,o){return[...o.path,n]}function So(n,o,e=Yn){Do(n,o),o.valueAccessor.writeValue(n.value),(n.disabled||e==="always")&&o.valueAccessor.setDisabledState?.(n.disabled),ks(n,o),Ss(n,o),ws(n,o),Cs(n,o)}function uo(n,o){n.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(o)})}function Cs(n,o){if(o.valueAccessor.setDisabledState){let e=t=>{o.valueAccessor.setDisabledState(t)};n.registerOnDisabledChange(e),o._registerOnDestroy(()=>{n._unregisterOnDisabledChange(e)})}}function Do(n,o){let e=gs(n);o.validator!==null?n.setValidators(ao(e,o.validator)):typeof e=="function"&&n.setValidators([e]);let t=ms(n);o.asyncValidator!==null?n.setAsyncValidators(ao(t,o.asyncValidator)):typeof t=="function"&&n.setAsyncValidators([t]);let i=()=>n.updateValueAndValidity();uo(o._rawValidators,i),uo(o._rawAsyncValidators,i)}function ks(n,o){o.valueAccessor.registerOnChange(e=>{n._pendingValue=e,n._pendingChange=!0,n._pendingDirty=!0,n.updateOn==="change"&&Io(n,o)})}function ws(n,o){o.valueAccessor.registerOnTouched(()=>{n._pendingTouched=!0,n.updateOn==="blur"&&n._pendingChange&&Io(n,o),n.updateOn!=="submit"&&n.markAsTouched()})}function Io(n,o){n._pendingDirty&&n.markAsDirty(),n.setValue(n._pendingValue,{emitModelToViewChange:!1}),o.viewToModelUpdate(n._pendingValue),n._pendingChange=!1}function Ss(n,o){let e=(t,i)=>{o.valueAccessor.writeValue(t),i&&o.viewToModelUpdate(t)};n.registerOnChange(e),o._registerOnDestroy(()=>{n._unregisterOnChange(e)})}function Ds(n,o){n==null,Do(n,o)}function Is(n,o){if(!n.hasOwnProperty("model"))return!1;let e=n.model;return e.isFirstChange()?!0:!Object.is(o,e.currentValue)}function Es(n){return Object.getPrototypeOf(n.constructor)===ls}function Ts(n,o){n._syncPendingControls(),o.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Ms(n,o){if(!o)return null;Array.isArray(o);let e,t,i;return o.forEach(r=>{r.constructor===Lt?e=r:Es(r)?t=r:i=r}),i||t||e||null}var Fs={provide:It,useExisting:Oe(()=>Ps)},Rt=Promise.resolve(),Ps=(()=>{class n extends It{callSetDisabledState;get submitted(){return Ze(this.submittedReactive)}_submitted=V(()=>this.submittedReactive());submittedReactive=$(!1);_directives=new Set;form;ngSubmit=new E;options;constructor(e,t,i){super(),this.callSetDisabledState=i,this.form=new bn({},Kn(e),Qn(t))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){Rt.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),So(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){Rt.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){Rt.then(()=>{let t=this._findContainer(e.path),i=new bn({});Ds(i,e),t.registerControl(e.name,i),i.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){Rt.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,t){Rt.then(()=>{this.form.get(e.path).setValue(t)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submittedReactive.set(!0),Ts(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new qn(this.control)),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static \u0275fac=function(t){return new(t||n)(Z(mo,10),Z(bo,10),Z(Zn,8))};static \u0275dir=H({type:n,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,i){t&1&&B("submit",function(s){return i.onSubmit(s)})("reset",function(){return i.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[R([Fs]),k]})}return n})();function po(n,o){let e=n.indexOf(o);e>-1&&n.splice(e,1)}function ho(n){return typeof n=="object"&&n!==null&&Object.keys(n).length===2&&"value"in n&&"disabled"in n}var Vs=class extends mn{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(o=null,e,t){super(ko(e),wo(t,e)),this._applyFormState(o),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),_n(e)&&(e.nonNullable||e.initialValueIsDefault)&&(ho(o)?this.defaultValue=o.value:this.defaultValue=o)}setValue(o,e={}){this.value=this._pendingValue=o,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(o,e={}){this.setValue(o,e)}reset(o=this.defaultValue,e={}){this._applyFormState(o),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new gn(this))}_updateValue(){}_anyControls(o){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(o){this._onChange.push(o)}_unregisterOnChange(o){po(this._onChange,o)}registerOnDisabledChange(o){this._onDisabledChange.push(o)}_unregisterOnDisabledChange(o){po(this._onDisabledChange,o)}_forEachChild(o){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(o){ho(o)?(this.value=this._pendingValue=o.value,o.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=o}};var Os={provide:De,useExisting:Oe(()=>Ye)},fo=Promise.resolve(),Ye=(()=>{class n extends De{_changeDetectorRef;callSetDisabledState;control=new Vs;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new E;constructor(e,t,i,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=e,this._setValidators(t),this._setAsyncValidators(i),this.valueAccessor=Ms(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let t=e.name.previousValue;this.formDirective.removeControl({name:t,path:this._getPath(t)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Is(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective?.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){So(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){fo.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let t=e.isDisabled.currentValue,i=t!==0&&v(t);fo.then(()=>{i&&!this.control.disabled?this.control.disable():!i&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?xs(e,this._parent):[e]}static \u0275fac=function(t){return new(t||n)(Z(It,9),Z(mo,10),Z(bo,10),Z(at,10),Z(nt,8),Z(Zn,8))};static \u0275dir=H({type:n,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[R([Os]),k,pt]})}return n})();var au=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return n})();var Ns=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=te({type:n});static \u0275inj=ee({})}return n})();var dt=(()=>{class n{static withConfig(e){return{ngModule:n,providers:[{provide:Zn,useValue:e.callSetDisabledState??Yn}]}}static \u0275fac=function(t){return new(t||n)};static \u0275mod=te({type:n});static \u0275inj=ee({imports:[Ns]})}return n})();function ct(...n){if(n){let o=[];for(let e=0;e<n.length;e++){let t=n[e];if(!t)continue;let i=typeof t;if(i==="string"||i==="number")o.push(t);else if(i==="object"){let r=Array.isArray(t)?[ct(...t)]:Object.entries(t).map(([s,a])=>a?s:void 0);o=r.length?o.concat(r.filter(s=>!!s)):o}}return o.join(" ").trim()}}var Rs=Object.defineProperty,To=Object.getOwnPropertySymbols,As=Object.prototype.hasOwnProperty,Bs=Object.prototype.propertyIsEnumerable,Mo=(n,o,e)=>o in n?Rs(n,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[o]=e,Fo=(n,o)=>{for(var e in o||(o={}))As.call(o,e)&&Mo(n,e,o[e]);if(To)for(var e of To(o))Bs.call(o,e)&&Mo(n,e,o[e]);return n};function Po(...n){if(n){let o=[];for(let e=0;e<n.length;e++){let t=n[e];if(!t)continue;let i=typeof t;if(i==="string"||i==="number")o.push(t);else if(i==="object"){let r=Array.isArray(t)?[Po(...t)]:Object.entries(t).map(([s,a])=>a?s:void 0);o=r.length?o.concat(r.filter(s=>!!s)):o}}return o.join(" ").trim()}}function Ls(n){return typeof n=="function"&&"call"in n&&"apply"in n}function zs({skipUndefined:n=!1},...o){return o?.reduce((e,t={})=>{for(let i in t){let r=t[i];if(!(n&&r===void 0))if(i==="style")e.style=Fo(Fo({},e.style),t.style);else if(i==="class"||i==="className")e[i]=Po(e[i],t[i]);else if(Ls(r)){let s=e[i];e[i]=s?(...a)=>{s(...a),r(...a)}:r}else e[i]=r}return e},{})}function Xn(...n){return zs({skipUndefined:!1},...n)}var vn={};function Xe(n="pui_id_"){return Object.hasOwn(vn,n)||(vn[n]=0),vn[n]++,`${n}${vn[n]}`}var Vo=(()=>{class n extends j{name="common";static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275prov=T({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),oe=new O("PARENT_INSTANCE"),ce=(()=>{class n{document=p(Te);platformId=p(mt);el=p(_e);injector=p(Ee);cd=p(nt);renderer=p(He);config=p(so);$parentInstance=p(oe,{optional:!0,skipSelf:!0})??void 0;baseComponentStyle=p(Vo);baseStyle=p(j);scopedStyleEl;parent=this.$params.parent;cn=ct;_themeScopedListener;themeChangeListenerMap=new Map;dt=g();unstyled=g();pt=g();ptOptions=g();$attrSelector=Xe("pc");get $name(){return this.componentName||"UnknownComponent"}get $hostName(){return this.hostName}get $el(){return this.el?.nativeElement}directivePT=$(void 0);directiveUnstyled=$(void 0);$unstyled=V(()=>this.unstyled()??this.directiveUnstyled()??this.config?.unstyled()??!1);$pt=V(()=>ln(this.pt()||this.directivePT(),this.$params));get $globalPT(){return this._getPT(this.config?.pt(),void 0,e=>ln(e,this.$params))}get $defaultPT(){return this._getPT(this.config?.pt(),void 0,e=>this._getOptionValue(e,this.$hostName||this.$name,this.$params)||ln(e,this.$params))}get $style(){return w(w({theme:void 0,css:void 0,classes:void 0,inlineStyles:void 0},(this._getHostInstance(this)||{}).$style),this._componentStyle)}get $styleOptions(){return{nonce:this.config?.csp().nonce}}get $params(){let e=this._getHostInstance(this)||this.$parentInstance;return{instance:this,parent:{instance:e}}}onInit(){}onChanges(e){}onDoCheck(){}onAfterContentInit(){}onAfterContentChecked(){}onAfterViewInit(){}onAfterViewChecked(){}onDestroy(){}constructor(){fe(e=>{this.document&&!zn(this.platformId)&&(this.dt()?(this._loadScopedThemeStyles(this.dt()),this._themeScopedListener=()=>this._loadScopedThemeStyles(this.dt()),this._themeChangeListener("_themeScopedListener",this._themeScopedListener)):this._unloadScopedThemeStyles()),e(()=>{this._offThemeChangeListener("_themeScopedListener")})}),fe(e=>{this.document&&!zn(this.platformId)&&(this.$unstyled()||(this._loadCoreStyles(),this._themeChangeListener("_loadCoreStyles",this._loadCoreStyles))),e(()=>{this._offThemeChangeListener("_loadCoreStyles")})}),this._hook("onBeforeInit")}ngOnInit(){this._loadCoreStyles(),this._loadStyles(),this.onInit(),this._hook("onInit")}ngOnChanges(e){this.onChanges(e),this._hook("onChanges",e)}ngDoCheck(){this.onDoCheck(),this._hook("onDoCheck")}ngAfterContentInit(){this.onAfterContentInit(),this._hook("onAfterContentInit")}ngAfterContentChecked(){this.onAfterContentChecked(),this._hook("onAfterContentChecked")}ngAfterViewInit(){this.$el?.setAttribute(this.$attrSelector,""),this.onAfterViewInit(),this._hook("onAfterViewInit")}ngAfterViewChecked(){this.onAfterViewChecked(),this._hook("onAfterViewChecked")}ngOnDestroy(){this._removeThemeListeners(),this._unloadScopedThemeStyles(),this.onDestroy(),this._hook("onDestroy")}_mergeProps(e,...t){return an(e)?e(...t):Xn(...t)}_getHostInstance(e){return e?this.$hostName?this.$name===this.$hostName?e:this._getHostInstance(e.$parentInstance):e.$parentInstance:void 0}_getPropValue(e){return this[e]||this._getHostInstance(this)?.[e]}_getOptionValue(e,t="",i={}){return eo(e,t,i)}_hook(e,...t){if(!this.$hostName){let i=this._usePT(this._getPT(this.$pt(),this.$name),this._getOptionValue,`hooks.${e}`),r=this._useDefaultPT(this._getOptionValue,`hooks.${e}`);i?.(...t),r?.(...t)}}_load(){wt.isStyleNameLoaded("base")||(this.baseStyle.loadBaseCSS(this.$styleOptions),this._loadGlobalStyles(),wt.setLoadedStyleName("base")),this._loadThemeStyles()}_loadStyles(){this._load(),this._themeChangeListener("_load",()=>this._load())}_loadGlobalStyles(){let e=this._useGlobalPT(this._getOptionValue,"global.css",this.$params);Ae(e)&&this.baseStyle.load(e,w({name:"global"},this.$styleOptions))}_loadCoreStyles(){!wt.isStyleNameLoaded(this.$style?.name)&&this.$style?.name&&(this.baseComponentStyle.loadCSS(this.$styleOptions),this.$style.loadCSS(this.$styleOptions),wt.setLoadedStyleName(this.$style.name))}_loadThemeStyles(){if(!(this.$unstyled()||this.config?.theme()==="none")){if(!ft.isStyleNameLoaded("common")){let{primitive:e,semantic:t,global:i,style:r}=this.$style?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,w({name:"primitive-variables"},this.$styleOptions)),this.baseStyle.load(t?.css,w({name:"semantic-variables"},this.$styleOptions)),this.baseStyle.load(i?.css,w({name:"global-variables"},this.$styleOptions)),this.baseStyle.loadBaseStyle(w({name:"global-style"},this.$styleOptions),r),ft.setLoadedStyleName("common")}if(!ft.isStyleNameLoaded(this.$style?.name)&&this.$style?.name){let{css:e,style:t}=this.$style?.getComponentTheme?.()||{};this.$style?.load(e,w({name:`${this.$style?.name}-variables`},this.$styleOptions)),this.$style?.loadStyle(w({name:`${this.$style?.name}-style`},this.$styleOptions),t),ft.setLoadedStyleName(this.$style?.name)}if(!ft.isStyleNameLoaded("layer-order")){let e=this.$style?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,w({name:"layer-order",first:!0},this.$styleOptions)),ft.setLoadedStyleName("layer-order")}}}_loadScopedThemeStyles(e){let{css:t}=this.$style?.getPresetTheme?.(e,`[${this.$attrSelector}]`)||{},i=this.$style?.load(t,w({name:`${this.$attrSelector}-${this.$style?.name}`},this.$styleOptions));this.scopedStyleEl=i?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e,t=()=>{}){this._offThemeChangeListener(e),wt.clearLoadedStyleNames();let i=t.bind(this);this.themeChangeListenerMap.set(e,i),Gn.on("theme:change",i)}_removeThemeListeners(){this._offThemeChangeListener("_themeScopedListener"),this._offThemeChangeListener("_loadCoreStyles"),this._offThemeChangeListener("_load")}_offThemeChangeListener(e){this.themeChangeListenerMap.has(e)&&(Gn.off("theme:change",this.themeChangeListenerMap.get(e)),this.themeChangeListenerMap.delete(e))}_getPTValue(e={},t="",i={},r=!0){let s=/./g.test(t)&&!!i[t.split(".")[0]],{mergeSections:a=!0,mergeProps:l=!1}=this._getPropValue("ptOptions")?.()||this.config?.ptOptions?.()||{},h=r?s?this._useGlobalPT(this._getPTClassValue,t,i):this._useDefaultPT(this._getPTClassValue,t,i):void 0,f=s?void 0:this._usePT(this._getPT(e,this.$hostName||this.$name),this._getPTClassValue,t,he(w({},i),{global:h||{}})),C=this._getPTDatasets(t);return a||!a&&f?l?this._mergeProps(l,h,f,C):w(w(w({},h),f),C):w(w({},f),C)}_getPTDatasets(e=""){let t="data-pc-",i=e==="root"&&Ae(this.$pt()?.["data-pc-section"]);return e!=="transition"&&he(w({},e==="root"&&he(w({[`${t}name`]:kt(i?this.$pt()?.["data-pc-section"]:this.$name)},i&&{[`${t}extend`]:kt(this.$name)}),{[`${this.$attrSelector}`]:""})),{[`${t}section`]:kt(e.includes(".")?e.split(".").at(-1)??"":e)})}_getPTClassValue(e,t,i){let r=this._getOptionValue(e,t,i);return dn(r)||to(r)?{class:r}:r}_getPT(e,t="",i){let r=(s,a=!1)=>{let l=i?i(s):s,h=kt(t),f=kt(this.$hostName||this.$name);return(a?h!==f?l?.[h]:void 0:l?.[h])??l};return e?.hasOwnProperty("_usept")?{_usept:e._usept,originalValue:r(e.originalValue),value:r(e.value)}:r(e,!0)}_usePT(e,t,i,r){let s=a=>t?.call(this,a,i,r);if(e?.hasOwnProperty("_usept")){let{mergeSections:a=!0,mergeProps:l=!1}=e._usept||this.config?.ptOptions()||{},h=s(e.originalValue),f=s(e.value);return h===void 0&&f===void 0?void 0:dn(f)?f:dn(h)?h:a||!a&&f?l?this._mergeProps(l,h,f):w(w({},h),f):f}return s(e)}_useGlobalPT(e,t,i){return this._usePT(this.$globalPT,e,t,i)}_useDefaultPT(e,t,i){return this._usePT(this.$defaultPT,e,t,i)}ptm(e="",t={}){return this._getPTValue(this.$pt(),e,w(w({},this.$params),t))}ptms(e,t={}){return e.reduce((i,r)=>(i=Xn(i,this.ptm(r,t))||{},i),{})}ptmo(e={},t="",i={}){return this._getPTValue(e,t,w({instance:this},i),!1)}cx(e,t={}){return this.$unstyled()?void 0:ct(this._getOptionValue(this.$style.classes,e,w(w({},this.$params),t)))}sx(e="",t=!0,i={}){if(t){let r=this._getOptionValue(this.$style.inlineStyles,e,w(w({},this.$params),i)),s=this._getOptionValue(this.baseComponentStyle.inlineStyles,e,w(w({},this.$params),i));return w(w({},s),r)}}static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,inputs:{dt:[1,"dt"],unstyled:[1,"unstyled"],pt:[1,"pt"],ptOptions:[1,"ptOptions"]},features:[R([Vo,j]),pt]})}return n})();var Jn=(()=>{class n{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,t){e&&t&&(e.classList?e.classList.add(t):e.className+=" "+t)}static addMultipleClasses(e,t){if(e&&t)if(e.classList){let i=t.trim().split(" ");for(let r=0;r<i.length;r++)e.classList.add(i[r])}else{let i=t.split(" ");for(let r=0;r<i.length;r++)e.className+=" "+i[r]}}static removeClass(e,t){e&&t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,t){e&&t&&[t].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,t){return e&&t?e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})}static find(e,t){return Array.from(e.querySelectorAll(t))}static findSingle(e,t){return this.isElement(e)?e.querySelector(t):null}static index(e){let t=e.parentNode.childNodes,i=0;for(var r=0;r<t.length;r++){if(t[r]==e)return i;t[r].nodeType==1&&i++}return-1}static indexWithinGroup(e,t){let i=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<i.length;s++){if(i[s]==e)return r;i[s].attributes&&i[s].attributes[t]&&i[s].nodeType==1&&r++}return-1}static appendOverlay(e,t,i="self"){i!=="self"&&e&&t&&this.appendChild(e,t)}static alignOverlay(e,t,i="self",r=!0){e&&t&&(r&&(e.style.minWidth=`${n.getOuterWidth(t)}px`),i==="self"?this.relativePosition(e,t):this.absolutePosition(e,t))}static relativePosition(e,t,i=!0){let r=J=>{if(J)return getComputedStyle(J).getPropertyValue("position")==="relative"?J:r(J.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=t.offsetHeight,l=t.getBoundingClientRect(),h=this.getWindowScrollTop(),f=this.getWindowScrollLeft(),C=this.getViewport(),z=r(e)?.getBoundingClientRect()||{top:-1*h,left:-1*f},U,ue,D="top";l.top+a+s.height>C.height?(U=l.top-z.top-s.height,D="bottom",l.top+U<0&&(U=-1*l.top)):(U=a+l.top-z.top,D="top");let L=l.left+s.width-C.width,W=l.left-z.left;if(s.width>C.width?ue=(l.left-z.left)*-1:L>0?ue=W-L:ue=l.left-z.left,e.style.top=U+"px",e.style.left=ue+"px",e.style.transformOrigin=D,i){let J=qi(/-anchor-gutter$/)?.value;e.style.marginTop=D==="bottom"?`calc(${J??"2px"} * -1)`:J??""}}static absolutePosition(e,t,i=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,l=t.offsetHeight,h=t.offsetWidth,f=t.getBoundingClientRect(),C=this.getWindowScrollTop(),N=this.getWindowScrollLeft(),z=this.getViewport(),U,ue;f.top+l+s>z.height?(U=f.top+C-s,e.style.transformOrigin="bottom",U<0&&(U=C)):(U=l+f.top+C,e.style.transformOrigin="top"),f.left+a>z.width?ue=Math.max(0,f.left+N+h-a):ue=f.left+N,e.style.top=U+"px",e.style.left=ue+"px",i&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,t=[]){return e.parentNode===null?t:this.getParents(e.parentNode,t.concat([e.parentNode]))}static getScrollableParents(e){let t=[];if(e){let i=this.getParents(e),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of i){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let h=l.split(",");for(let f of h){let C=this.findSingle(a,f);C&&s(C)&&t.push(C)}}a.nodeType!==9&&s(a)&&t.push(a)}}return t}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",t}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let t=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",t}static getHiddenElementDimensions(e){let t={};return e.style.visibility="hidden",e.style.display="block",t.width=e.offsetWidth,t.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",t}static scrollInView(e,t){let i=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=i?parseFloat(i):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),f=t.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,C=e.scrollTop,N=e.clientHeight,z=this.getOuterHeight(t);f<0?e.scrollTop=C+f:f+z>N&&(e.scrollTop=C+f-N+z)}static fadeIn(e,t){e.style.opacity=0;let i=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-i)/t,e.style.opacity=r,i=+new Date,+r<1&&(window.requestAnimationFrame?window.requestAnimationFrame(s):setTimeout(s,16))};s()}static fadeOut(e,t){var i=1,r=50,s=t,a=r/s;let l=setInterval(()=>{i=i-a,i<=0&&(i=0,clearInterval(l)),e.style.opacity=i},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,t){var i=Element.prototype,r=i.matches||i.webkitMatchesSelector||i.mozMatchesSelector||i.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,t)}static getOuterWidth(e,t){let i=e.offsetWidth;if(t){let r=getComputedStyle(e);i+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return i}static getHorizontalPadding(e){let t=getComputedStyle(e);return parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)}static getHorizontalMargin(e){let t=getComputedStyle(e);return parseFloat(t.marginLeft)+parseFloat(t.marginRight)}static innerWidth(e){let t=e.offsetWidth,i=getComputedStyle(e);return t+=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),t}static width(e){let t=e.offsetWidth,i=getComputedStyle(e);return t-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight),t}static getInnerHeight(e){let t=e.offsetHeight,i=getComputedStyle(e);return t+=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom),t}static getOuterHeight(e,t){let i=e.offsetHeight;if(t){let r=getComputedStyle(e);i+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return i}static getHeight(e){let t=e.offsetHeight,i=getComputedStyle(e);return t-=parseFloat(i.paddingTop)+parseFloat(i.paddingBottom)+parseFloat(i.borderTopWidth)+parseFloat(i.borderBottomWidth),t}static getWidth(e){let t=e.offsetWidth,i=getComputedStyle(e);return t-=parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)+parseFloat(i.borderLeftWidth)+parseFloat(i.borderRightWidth),t}static getViewport(){let e=window,t=document,i=t.documentElement,r=t.getElementsByTagName("body")[0],s=e.innerWidth||i.clientWidth||r.clientWidth,a=e.innerHeight||i.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(e){var t=e.getBoundingClientRect();return{top:t.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:t.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,t){let i=e.parentNode;if(!i)throw"Can't replace element";return i.replaceChild(t,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return!0;var i=e.indexOf("Trident/");if(i>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,t){if(this.isElement(t))t.appendChild(e);else if(t&&t.el&&t.el.nativeElement)t.el.nativeElement.appendChild(e);else throw"Cannot append "+t+" to "+e}static removeChild(e,t){if(this.isElement(t))t.removeChild(e);else if(t.el&&t.el.nativeElement)t.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+t}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode?.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let t=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(t.borderLeftWidth)-parseFloat(t.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let i=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),this.calculatedScrollbarWidth=i,i}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let t=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=t,t}static invokeElementMethod(e,t,i){e[t].apply(e,i)}static clearSelection(){if(window.getSelection&&window.getSelection())window.getSelection()?.empty?window.getSelection()?.empty():window.getSelection()?.removeAllRanges&&(window.getSelection()?.rangeCount||0)>0&&(window.getSelection()?.getRangeAt(0)?.getClientRects()?.length||0)>0&&window.getSelection()?.removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,t){e&&document.activeElement!==e&&e.focus(t)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,t=""){let i=this.find(e,this.getFocusableSelectorString(t)),r=[];for(let s of i){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,t=""){let i=this.findSingle(e,this.getFocusableSelectorString(t));if(i){let r=getComputedStyle(i);if(this.isVisible(i)&&r.display!="none"&&r.visibility!="hidden")return i}return null}static getFirstFocusableElement(e,t=""){let i=this.getFocusableElements(e,t);return i.length>0?i[0]:null}static getLastFocusableElement(e,t){let i=this.getFocusableElements(e,t);return i.length>0?i[i.length-1]:null}static getNextFocusableElement(e,t=!1){let i=n.getFocusableElements(e),r=0;if(i&&i.length>0){let s=i.indexOf(i[0].ownerDocument.activeElement);t?s==-1||s===0?r=i.length-1:r=s-1:s!=-1&&s!==i.length-1&&(r=s+1)}return i[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection()?.toString():document.getSelection?document.getSelection()?.toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,t){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return t?.nextElementSibling;case"@prev":return t?.previousElementSibling;case"@parent":return t?.parentElement;case"@grandparent":return t?.parentElement?.parentElement;default:let i=typeof e;if(i==="string")return document.querySelector(e);if(i==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,t){if(e){let i=e.getAttribute(t);return isNaN(i)?i==="true"||i==="false"?i==="true":i:+i}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,t={},...i){if(e){let r=document.createElement(e);return this.setAttributes(r,t),r.append(...i),r}}static setAttribute(e,t="",i){this.isElement(e)&&i!==null&&i!==void 0&&e.setAttribute(t,i)}static setAttributes(e,t={}){if(this.isElement(e)){let i=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((l,h)=>{if(h!=null){let f=typeof h;if(f==="string"||f==="number")l.push(h);else if(f==="object"){let C=Array.isArray(h)?i(r,h):Object.entries(h).map(([N,z])=>r==="style"&&(z||z===0)?`${N.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${z}`:z?N:void 0);l=C.length?l.concat(C.filter(N=>!!N)):l}}return l},a)};Object.entries(t).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(i("class",s))].join(" ").trim():r==="style"?i("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,t=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`):!1}}return n})();function Su(){Ui({variableName:Un("scrollbar.width").name})}function Du(){Wi({variableName:Un("scrollbar.width").name})}var Oo=class{element;listener;scrollableParents;constructor(o,e=()=>{}){this.element=o,this.listener=e}bindScrollListener(){this.scrollableParents=Jn.getScrollableParents(this.element);for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let o=0;o<this.scrollableParents.length;o++)this.scrollableParents[o].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var yn=(()=>{class n extends ce{autofocus=!1;focused=!1;platformId=p(mt);document=p(Te);host=p(_e);onAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}onAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){je(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=Jn.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275dir=H({type:n,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[k]})}return n})();var S=(()=>{class n{el;renderer;pBind=g(void 0);_attrs=$(void 0);attrs=V(()=>this._attrs()||this.pBind());styles=V(()=>this.attrs()?.style);classes=V(()=>ct(this.attrs()?.class));listeners=[];constructor(e,t){this.el=e,this.renderer=t,fe(()=>{let a=this.attrs()||{},{style:i,class:r}=a,s=wi(a,["style","class"]);for(let[l,h]of Object.entries(s))if(l.startsWith("on")&&typeof h=="function"){let f=l.slice(2).toLowerCase();if(!this.listeners.some(C=>C.eventName===f)){let C=this.renderer.listen(this.el.nativeElement,f,h);this.listeners.push({eventName:f,unlisten:C})}}else h==null?this.renderer.removeAttribute(this.el.nativeElement,l):(this.renderer.setAttribute(this.el.nativeElement,l,h.toString()),l in this.el.nativeElement&&(this.el.nativeElement[l]=h))})}ngOnDestroy(){this.clearListeners()}setAttrs(e){ht(this._attrs(),e)||this._attrs.set(e)}clearListeners(){this.listeners.forEach(({unlisten:e})=>e()),this.listeners=[]}static \u0275fac=function(t){return new(t||n)(Z(_e),Z(He))};static \u0275dir=H({type:n,selectors:[["","pBind",""]],hostVars:4,hostBindings:function(t,i){t&2&&(Qe(i.styles()),_(i.classes()))},inputs:{pBind:[1,"pBind"]}})}return n})(),Pe=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=te({type:n});static \u0275inj=ee({})}return n})();var No=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var Hs=`
    ${No}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,$s={root:({instance:n})=>{let o=typeof n.value=="function"?n.value():n.value,e=typeof n.size=="function"?n.size():n.size,t=typeof n.badgeSize=="function"?n.badgeSize():n.badgeSize,i=typeof n.severity=="function"?n.severity():n.severity;return["p-badge p-component",{"p-badge-circle":Ae(o)&&String(o).length===1,"p-badge-dot":sn(o),"p-badge-sm":e==="small"||t==="small","p-badge-lg":e==="large"||t==="large","p-badge-xl":e==="xlarge"||t==="xlarge","p-badge-info":i==="info","p-badge-success":i==="success","p-badge-warn":i==="warn","p-badge-danger":i==="danger","p-badge-secondary":i==="secondary","p-badge-contrast":i==="contrast"}]}},Ro=(()=>{class n extends j{name="badge";style=Hs;classes=$s;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275prov=T({token:n,factory:n.\u0275fac})}return n})();var Ao=new O("BADGE_INSTANCE");var ei=(()=>{class n extends ce{componentName="Badge";$pcBadge=p(Ao,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(S,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}styleClass=g();badgeSize=g();size=g();severity=g();value=g();badgeDisabled=g(!1,{transform:v});_componentStyle=p(Ro);get dataP(){return this.cn({circle:this.value()!=null&&String(this.value()).length===1,empty:this.value()==null,disabled:this.badgeDisabled(),[this.severity()]:this.severity(),[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275cmp=P({type:n,selectors:[["p-badge"]],hostVars:5,hostBindings:function(t,i){t&2&&(I("data-p",i.dataP),_(i.cn(i.cx("root"),i.styleClass())),et("display",i.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[R([Ro,{provide:Ao,useExisting:n},{provide:oe,useExisting:n}]),re([S]),k],decls:1,vars:1,template:function(t,i){t&1&&A(0),t&2&&K(i.value())},dependencies:[pe,be,Pe],encapsulation:2,changeDetection:0})}return n})(),Bo=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=te({type:n});static \u0275inj=ee({imports:[ei,be,be]})}return n})();var Gs=["*"],Us={root:"p-fluid"},Lo=(()=>{class n extends j{name="fluid";classes=Us;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275prov=T({token:n,factory:n.\u0275fac})}return n})();var zo=new O("FLUID_INSTANCE"),Et=(()=>{class n extends ce{componentName="Fluid";$pcFluid=p(zo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(S,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}_componentStyle=p(Lo);static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275cmp=P({type:n,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(t,i){t&2&&_(i.cx("root"))},features:[R([Lo,{provide:zo,useExisting:n},{provide:oe,useExisting:n}]),re([S]),k],ngContentSelectors:Gs,decls:1,vars:0,template:function(t,i){t&1&&(ye(),me(0))},dependencies:[pe],encapsulation:2,changeDetection:0})}return n})();var Ws=["*"],qs=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
    flex-shrink: 0;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Ho=(()=>{class n extends j{name="baseicon";css=qs;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275prov=T({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var We=(()=>{class n extends ce{spin=!1;_componentStyle=p(Ho);getClassNames(){return ct("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275cmp=P({type:n,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(t,i){t&2&&_(i.getClassNames())},inputs:{spin:[2,"spin","spin",v]},features:[R([Ho]),k],ngContentSelectors:Ws,decls:1,vars:0,template:function(t,i){t&1&&(ye(),me(0))},encapsulation:2,changeDetection:0})}return n})();var Ks=["data-p-icon","blank"],$o=(()=>{class n extends We{static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275cmp=P({type:n,selectors:[["","data-p-icon","blank"]],features:[k],attrs:Ks,decls:1,vars:0,consts:[["width","1","height","1","fill","currentColor","fill-opacity","0"]],template:function(t,i){t&1&&(le(),ge(0,"rect",0))},encapsulation:2})}return n})();var Qs=["data-p-icon","check"],xn=(()=>{class n extends We{static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275cmp=P({type:n,selectors:[["","data-p-icon","check"]],features:[k],attrs:Qs,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(t,i){t&1&&(le(),ge(0,"path",0))},encapsulation:2})}return n})();var Zs=["data-p-icon","minus"],jo=(()=>{class n extends We{static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275cmp=P({type:n,selectors:[["","data-p-icon","minus"]],features:[k],attrs:Zs,decls:1,vars:0,consts:[["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(t,i){t&1&&(le(),ge(0,"path",0))},encapsulation:2})}return n})();var Ys=["data-p-icon","search"],Go=(()=>{class n extends We{pathId;onInit(){this.pathId="url(#"+Xe()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275cmp=P({type:n,selectors:[["","data-p-icon","search"]],features:[k],attrs:Ys,decls:5,vars:2,consts:[["fill-rule","evenodd","clip-rule","evenodd","d","M2.67602 11.0265C3.6661 11.688 4.83011 12.0411 6.02086 12.0411C6.81149 12.0411 7.59438 11.8854 8.32483 11.5828C8.87005 11.357 9.37808 11.0526 9.83317 10.6803L12.9769 13.8241C13.0323 13.8801 13.0983 13.9245 13.171 13.9548C13.2438 13.985 13.3219 14.0003 13.4007 14C13.4795 14.0003 13.5575 13.985 13.6303 13.9548C13.7031 13.9245 13.7691 13.8801 13.8244 13.8241C13.9367 13.7116 13.9998 13.5592 13.9998 13.4003C13.9998 13.2414 13.9367 13.089 13.8244 12.9765L10.6807 9.8328C11.053 9.37773 11.3573 8.86972 11.5831 8.32452C11.8857 7.59408 12.0414 6.81119 12.0414 6.02056C12.0414 4.8298 11.6883 3.66579 11.0268 2.67572C10.3652 1.68564 9.42494 0.913972 8.32483 0.45829C7.22472 0.00260857 6.01418 -0.116618 4.84631 0.115686C3.67844 0.34799 2.60568 0.921393 1.76369 1.76338C0.921698 2.60537 0.348296 3.67813 0.115991 4.84601C-0.116313 6.01388 0.00291375 7.22441 0.458595 8.32452C0.914277 9.42464 1.68595 10.3649 2.67602 11.0265ZM3.35565 2.0158C4.14456 1.48867 5.07206 1.20731 6.02086 1.20731C7.29317 1.20731 8.51338 1.71274 9.41304 2.6124C10.3127 3.51206 10.8181 4.73226 10.8181 6.00457C10.8181 6.95337 10.5368 7.88088 10.0096 8.66978C9.48251 9.45868 8.73328 10.0736 7.85669 10.4367C6.98011 10.7997 6.01554 10.8947 5.08496 10.7096C4.15439 10.5245 3.2996 10.0676 2.62869 9.39674C1.95778 8.72583 1.50089 7.87104 1.31579 6.94046C1.13068 6.00989 1.22568 5.04532 1.58878 4.16874C1.95187 3.29215 2.56675 2.54292 3.35565 2.0158Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(t,i){t&1&&(le(),ve(0,"g"),ge(1,"path",0),we(),ve(2,"defs")(3,"clipPath",1),ge(4,"rect",2),we()()),t&2&&(I("clip-path",i.pathId),d(3),Jt("id",i.pathId))},encapsulation:2})}return n})();var Xs=["data-p-icon","spinner"],Cn=(()=>{class n extends We{pathId;onInit(){this.pathId="url(#"+Xe()+")"}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275cmp=P({type:n,selectors:[["","data-p-icon","spinner"]],features:[k],attrs:Xs,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(t,i){t&1&&(le(),ve(0,"g"),ge(1,"path",0),we(),ve(2,"defs")(3,"clipPath",1),ge(4,"rect",2),we()()),t&2&&(I("clip-path",i.pathId),d(3),Jt("id",i.pathId))},encapsulation:2})}return n})();var Uo=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var Js=`
    ${Uo}

    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,ea={root:"p-ink"},Wo=(()=>{class n extends j{name="ripple";style=Js;classes=ea;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275prov=T({token:n,factory:n.\u0275fac})}return n})();var kn=(()=>{class n extends ce{componentName="Ripple";zone=p(Me);_componentStyle=p(Wo);animationListener;mouseDownListener;timeout;constructor(){super(),fe(()=>{je(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}onAfterViewInit(){}onMouseDown(e){let t=this.getInk();if(!t||this.document.defaultView?.getComputedStyle(t,null).display==="none")return;if(!this.$unstyled()&&yt(t,"p-ink-active"),t.setAttribute("data-p-ink-active","false"),!Ge(t)&&!Ue(t)){let a=Math.max(Ki(this.el.nativeElement),Zi(this.el.nativeElement));t.style.height=a+"px",t.style.width=a+"px"}let i=Qi(this.el.nativeElement),r=e.pageX-i.left+this.document.body.scrollTop-Ue(t)/2,s=e.pageY-i.top+this.document.body.scrollLeft-Ge(t)/2;this.renderer.setStyle(t,"top",s+"px"),this.renderer.setStyle(t,"left",r+"px"),!this.$unstyled()&&Hn(t,"p-ink-active"),t.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&(!this.$unstyled()&&yt(a,"p-ink-active"),a.setAttribute("data-p-ink-active","false"))},401)}getInk(){let e=this.el.nativeElement.children;for(let t=0;t<e.length;t++)if(typeof e[t].className=="string"&&e[t].className.indexOf("p-ink")!==-1)return e[t];return null}resetInk(){let e=this.getInk();e&&(!this.$unstyled()&&yt(e,"p-ink-active"),e.setAttribute("data-p-ink-active","false"))}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),!this.$unstyled()&&yt(e.currentTarget,"p-ink-active"),e.currentTarget.setAttribute("data-p-ink-active","false")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"data-p-ink","true"),this.renderer.setAttribute(e,"data-p-ink-active","false"),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Xi(e))}onDestroy(){this.config&&this.config.ripple()&&this.remove()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[R([Wo]),k]})}return n})();var qo=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\xA0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var ta=["content"],na=["loadingicon"],ia=["icon"],oa=["*"],Zo=(n,o)=>({class:n,pt:o});function ra(n,o){n&1&&de(0)}function sa(n,o){if(n&1&&Q(0,"span",7),n&2){let e=c(3);_(e.cn(e.cx("loadingIcon"),"pi-spin",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon))),u("pBind",e.ptm("loadingIcon")),I("aria-hidden",!0)}}function aa(n,o){if(n&1&&(le(),Q(0,"svg",8)),n&2){let e=c(3);_(e.cn(e.cx("loadingIcon"),e.cx("spinnerIcon"))),u("pBind",e.ptm("loadingIcon"))("spin",!0),I("aria-hidden",!0)}}function la(n,o){if(n&1&&(Y(0),y(1,sa,1,4,"span",3)(2,aa,1,5,"svg",6),X()),n&2){let e=c(2);d(),u("ngIf",e.loadingIcon||(e.buttonProps==null?null:e.buttonProps.loadingIcon)),d(),u("ngIf",!(e.loadingIcon||e.buttonProps!=null&&e.buttonProps.loadingIcon))}}function da(n,o){}function ca(n,o){if(n&1&&y(0,da,0,0,"ng-template",9),n&2){let e=c(2);u("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function ua(n,o){if(n&1&&(Y(0),y(1,la,3,2,"ng-container",2)(2,ca,1,1,null,5),X()),n&2){let e=c();d(),u("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),d(),u("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",Se(3,Zo,e.cx("loadingIcon"),e.ptm("loadingIcon")))}}function pa(n,o){if(n&1&&Q(0,"span",7),n&2){let e=c(2);_(e.cn(e.cx("icon"),e.icon||(e.buttonProps==null?null:e.buttonProps.icon))),u("pBind",e.ptm("icon")),I("data-p",e.dataIconP)}}function ha(n,o){}function fa(n,o){if(n&1&&y(0,ha,0,0,"ng-template",9),n&2){let e=c(2);u("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function ga(n,o){if(n&1&&(Y(0),y(1,pa,1,4,"span",3)(2,fa,1,1,null,5),X()),n&2){let e=c();d(),u("ngIf",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!e.iconTemplate&&!e._iconTemplate),d(),u("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Se(3,Zo,e.cx("icon"),e.ptm("icon")))}}function ma(n,o){if(n&1&&(b(0,"span",7),A(1),m()),n&2){let e=c();_(e.cx("label")),u("pBind",e.ptm("label")),I("aria-hidden",(e.icon||(e.buttonProps==null?null:e.buttonProps.icon))&&!(e.label||e.buttonProps!=null&&e.buttonProps.label))("data-p",e.dataLabelP),d(),K(e.label||(e.buttonProps==null?null:e.buttonProps.label))}}function ba(n,o){if(n&1&&Q(0,"p-badge",10),n&2){let e=c();u("value",e.badge||(e.buttonProps==null?null:e.buttonProps.badge))("severity",e.badgeSeverity||(e.buttonProps==null?null:e.buttonProps.badgeSeverity))("pt",e.ptm("pcBadge"))("unstyled",e.unstyled())}}var _a={root:({instance:n})=>["p-button p-component",{"p-button-icon-only":n.hasIcon&&!n.label&&!n.buttonProps?.label&&!n.badge,"p-button-vertical":(n.iconPos==="top"||n.iconPos==="bottom")&&n.label,"p-button-loading":n.loading||n.buttonProps?.loading,"p-button-link":n.link||n.buttonProps?.link,[`p-button-${n.severity||n.buttonProps?.severity}`]:n.severity||n.buttonProps?.severity,"p-button-raised":n.raised||n.buttonProps?.raised,"p-button-rounded":n.rounded||n.buttonProps?.rounded,"p-button-text":n.text||n.variant==="text"||n.buttonProps?.text||n.buttonProps?.variant==="text","p-button-outlined":n.outlined||n.variant==="outlined"||n.buttonProps?.outlined||n.buttonProps?.variant==="outlined","p-button-sm":n.size==="small"||n.buttonProps?.size==="small","p-button-lg":n.size==="large"||n.buttonProps?.size==="large","p-button-plain":n.plain||n.buttonProps?.plain,"p-button-fluid":n.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:n})=>["p-button-icon",{[`p-button-icon-${n.iconPos||n.buttonProps?.iconPos}`]:n.label||n.buttonProps?.label,"p-button-icon-left":(n.iconPos==="left"||n.buttonProps?.iconPos==="left")&&n.label||n.buttonProps?.label,"p-button-icon-right":(n.iconPos==="right"||n.buttonProps?.iconPos==="right")&&n.label||n.buttonProps?.label,"p-button-icon-top":(n.iconPos==="top"||n.buttonProps?.iconPos==="top")&&n.label||n.buttonProps?.label,"p-button-icon-bottom":(n.iconPos==="bottom"||n.buttonProps?.iconPos==="bottom")&&n.label||n.buttonProps?.label},n.icon,n.buttonProps?.icon],spinnerIcon:({instance:n})=>Object.entries(n.cx("icon")).filter(([,o])=>!!o).reduce((o,[e])=>o+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},Ko=(()=>{class n extends j{name="button";style=qo;classes=_a;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275prov=T({token:n,factory:n.\u0275fac})}return n})();var Qo=new O("BUTTON_INSTANCE");var Yo=(()=>{class n extends ce{componentName="Button";hostName="";$pcButton=p(Qo,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(S,{self:!0});_componentStyle=p(Ko);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}type="button";badge;disabled;raised=!1;rounded=!1;text=!1;plain=!1;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;iconPos="left";icon;label;loading=!1;loadingIcon;severity;buttonProps;fluid=g(void 0,{transform:v});onClick=new E;onFocus=new E;onBlur=new E;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=p(Et,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}get hasIcon(){return this.icon||this.buttonProps?.icon||this.iconTemplate||this._iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate}_contentTemplate;_iconTemplate;_loadingIconTemplate;onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}get dataP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge,loading:this.loading,fluid:this.hasFluid,rounded:this.rounded,raised:this.raised,outlined:this.outlined||this.variant==="outlined",text:this.text||this.variant==="text",link:this.link,vertical:(this.iconPos==="top"||this.iconPos==="bottom")&&this.label})}get dataIconP(){return this.cn({[this.iconPos]:this.iconPos,[this.size]:this.size})}get dataLabelP(){return this.cn({[this.size]:this.size,"icon-only":this.hasIcon&&!this.label&&!this.badge})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275cmp=P({type:n,selectors:[["p-button"]],contentQueries:function(t,i,r){if(t&1&&Je(r,ta,5)(r,na,5)(r,ia,5)(r,rt,4),t&2){let s;M(s=F())&&(i.contentTemplate=s.first),M(s=F())&&(i.loadingIconTemplate=s.first),M(s=F())&&(i.iconTemplate=s.first),M(s=F())&&(i.templates=s)}},inputs:{hostName:"hostName",type:"type",badge:"badge",disabled:[2,"disabled","disabled",v],raised:[2,"raised","raised",v],rounded:[2,"rounded","rounded",v],text:[2,"text","text",v],plain:[2,"plain","plain",v],outlined:[2,"outlined","outlined",v],link:[2,"link","link",v],tabindex:[2,"tabindex","tabindex",Re],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",v],iconPos:"iconPos",icon:"icon",label:"label",loading:[2,"loading","loading",v],loadingIcon:"loadingIcon",severity:"severity",buttonProps:"buttonProps",fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[R([Ko,{provide:Qo,useExisting:n},{provide:oe,useExisting:n}]),re([S]),k],ngContentSelectors:oa,decls:7,vars:17,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus","pBind"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class","pBind",4,"ngIf"],[3,"value","severity","pt","unstyled",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","pBind","spin",4,"ngIf"],[3,"pBind"],["data-p-icon","spinner",3,"pBind","spin"],[3,"ngIf"],[3,"value","severity","pt","unstyled"]],template:function(t,i){t&1&&(ye(),b(0,"button",0),B("click",function(s){return i.onClick.emit(s)})("focus",function(s){return i.onFocus.emit(s)})("blur",function(s){return i.onBlur.emit(s)}),me(1),y(2,ra,1,0,"ng-container",1)(3,ua,3,6,"ng-container",2)(4,ga,3,6,"ng-container",2)(5,ma,2,6,"span",3)(6,ba,1,4,"p-badge",4),m()),t&2&&(_(i.cn(i.cx("root"),i.styleClass,i.buttonProps==null?null:i.buttonProps.styleClass)),u("ngStyle",i.style||(i.buttonProps==null?null:i.buttonProps.style))("disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("pAutoFocus",i.autofocus||(i.buttonProps==null?null:i.buttonProps.autofocus))("pBind",i.ptm("root")),I("type",i.type||(i.buttonProps==null?null:i.buttonProps.type))("aria-label",i.ariaLabel||(i.buttonProps==null?null:i.buttonProps.ariaLabel))("tabindex",i.tabindex||(i.buttonProps==null?null:i.buttonProps.tabindex))("data-p",i.dataP)("data-p-disabled",i.disabled||i.loading||(i.buttonProps==null?null:i.buttonProps.disabled))("data-p-severity",i.severity||(i.buttonProps==null?null:i.buttonProps.severity)),d(2),u("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),d(),u("ngIf",i.loading||(i.buttonProps==null?null:i.buttonProps.loading)),d(),u("ngIf",!(i.loading||i.buttonProps!=null&&i.buttonProps.loading)),d(),u("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.label||(i.buttonProps==null?null:i.buttonProps.label))),d(),u("ngIf",!i.contentTemplate&&!i._contentTemplate&&(i.badge||(i.buttonProps==null?null:i.buttonProps.badge))))},dependencies:[pe,it,ot,vt,kn,yn,Cn,Bo,ei,be,S],encapsulation:2,changeDetection:0})}return n})();var Tt=(()=>{class n extends ce{modelValue=$(void 0);$filled=V(()=>Ae(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275dir=H({type:n,features:[k]})}return n})();var Mt=(()=>{class n extends Tt{required=g(void 0,{transform:v});invalid=g(void 0,{transform:v});disabled=g(void 0,{transform:v});name=g();_disabled=$(!1);$disabled=V(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,t){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275dir=H({type:n,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[k]})}return n})();var Xo=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var va=`
    ${Xo}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,ya={root:({instance:n})=>["p-inputtext p-component",{"p-filled":n.$filled(),"p-inputtext-sm":n.pSize==="small","p-inputtext-lg":n.pSize==="large","p-invalid":n.invalid(),"p-variant-filled":n.$variant()==="filled","p-inputtext-fluid":n.hasFluid}]},Jo=(()=>{class n extends j{name="inputtext";style=va;classes=ya;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275prov=T({token:n,factory:n.\u0275fac})}return n})();var er=new O("INPUTTEXT_INSTANCE"),wn=(()=>{class n extends Tt{componentName="InputText";hostName="";ptInputText=g();pInputTextPT=g();pInputTextUnstyled=g();bindDirectiveInstance=p(S,{self:!0});$pcInputText=p(er,{optional:!0,skipSelf:!0})??void 0;ngControl=p(De,{optional:!0,self:!0});pcFluid=p(Et,{optional:!0,host:!0,skipSelf:!0});pSize;variant=g();fluid=g(void 0,{transform:v});invalid=g(void 0,{transform:v});$variant=V(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=p(Jo);constructor(){super(),fe(()=>{let e=this.ptInputText()||this.pInputTextPT();e&&this.directivePT.set(e)}),fe(()=>{this.pInputTextUnstyled()&&this.directiveUnstyled.set(this.pInputTextUnstyled())})}onAfterViewInit(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("root"))}onDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}get dataP(){return this.cn({invalid:this.invalid(),fluid:this.hasFluid,filled:this.$variant()==="filled",[this.pSize]:this.pSize})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,selectors:[["","pInputText",""]],hostVars:3,hostBindings:function(t,i){t&1&&B("input",function(){return i.onInput()}),t&2&&(I("data-p",i.dataP),_(i.cx("root")))},inputs:{hostName:"hostName",ptInputText:[1,"ptInputText"],pInputTextPT:[1,"pInputTextPT"],pInputTextUnstyled:[1,"pInputTextUnstyled"],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[R([Jo,{provide:er,useExisting:n},{provide:oe,useExisting:n}]),re([S]),k]})}return n})();var tr=`
    .p-textarea {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('textarea.color');
        background: dt('textarea.background');
        padding-block: dt('textarea.padding.y');
        padding-inline: dt('textarea.padding.x');
        border: 1px solid dt('textarea.border.color');
        transition:
            background dt('textarea.transition.duration'),
            color dt('textarea.transition.duration'),
            border-color dt('textarea.transition.duration'),
            outline-color dt('textarea.transition.duration'),
            box-shadow dt('textarea.transition.duration');
        appearance: none;
        border-radius: dt('textarea.border.radius');
        outline-color: transparent;
        box-shadow: dt('textarea.shadow');
    }

    .p-textarea:enabled:hover {
        border-color: dt('textarea.hover.border.color');
    }

    .p-textarea:enabled:focus {
        border-color: dt('textarea.focus.border.color');
        box-shadow: dt('textarea.focus.ring.shadow');
        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');
        outline-offset: dt('textarea.focus.ring.offset');
    }

    .p-textarea.p-invalid {
        border-color: dt('textarea.invalid.border.color');
    }

    .p-textarea.p-variant-filled {
        background: dt('textarea.filled.background');
    }

    .p-textarea.p-variant-filled:enabled:hover {
        background: dt('textarea.filled.hover.background');
    }

    .p-textarea.p-variant-filled:enabled:focus {
        background: dt('textarea.filled.focus.background');
    }

    .p-textarea:disabled {
        opacity: 1;
        background: dt('textarea.disabled.background');
        color: dt('textarea.disabled.color');
    }

    .p-textarea::placeholder {
        color: dt('textarea.placeholder.color');
    }

    .p-textarea.p-invalid::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }

    .p-textarea-fluid {
        width: 100%;
    }

    .p-textarea-resizable {
        overflow: hidden;
        resize: none;
    }

    .p-textarea-sm {
        font-size: dt('textarea.sm.font.size');
        padding-block: dt('textarea.sm.padding.y');
        padding-inline: dt('textarea.sm.padding.x');
    }

    .p-textarea-lg {
        font-size: dt('textarea.lg.font.size');
        padding-block: dt('textarea.lg.padding.y');
        padding-inline: dt('textarea.lg.padding.x');
    }
`;var xa=`
    ${tr}

    /* For PrimeNG */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`,Ca={root:({instance:n})=>["p-textarea p-component",{"p-filled":n.$filled(),"p-textarea-resizable ":n.autoResize,"p-variant-filled":n.$variant()==="filled","p-textarea-fluid":n.hasFluid,"p-inputfield-sm p-textarea-sm":n.pSize==="small","p-textarea-lg p-inputfield-lg":n.pSize==="large","p-invalid":n.invalid()}]},nr=(()=>{class n extends j{name="textarea";style=xa;classes=Ca;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275prov=T({token:n,factory:n.\u0275fac})}return n})();var ir=new O("TEXTAREA_INSTANCE"),or=(()=>{class n extends Tt{componentName="Textarea";bindDirectiveInstance=p(S,{self:!0});$pcTextarea=p(ir,{optional:!0,skipSelf:!0})??void 0;pTextareaPT=g();pTextareaUnstyled=g();autoResize;pSize;variant=g();fluid=g(void 0,{transform:v});invalid=g(void 0,{transform:v});$variant=V(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onResize=new E;ngControlSubscription;_componentStyle=p(nr);ngControl=p(De,{optional:!0,self:!0});pcFluid=p(Et,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}constructor(){super(),fe(()=>{let e=this.pTextareaPT();e&&this.directivePT.set(e)}),fe(()=>{this.pTextareaUnstyled()&&this.directiveUnstyled.set(this.pTextareaUnstyled())})}onInit(){this.ngControl&&(this.ngControlSubscription=this.ngControl.valueChanges.subscribe(()=>{this.updateState()}))}onAfterViewInit(){this.autoResize&&this.resize(),this.cd.detectChanges()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"])),this.autoResize&&this.resize(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(e){this.writeModelValue(e.target?.value),this.updateState()}resize(e){this.el.nativeElement.style.height="auto",this.el.nativeElement.style.height=this.el.nativeElement.scrollHeight+"px",parseFloat(this.el.nativeElement.style.height)>=parseFloat(this.el.nativeElement.style.maxHeight)?(this.el.nativeElement.style.overflowY="scroll",this.el.nativeElement.style.height=this.el.nativeElement.style.maxHeight):this.el.nativeElement.style.overflow="hidden",this.onResize.emit(e||{})}updateState(){this.autoResize&&this.resize()}onDestroy(){this.ngControlSubscription&&this.ngControlSubscription.unsubscribe()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,selectors:[["","pTextarea",""],["","pInputTextarea",""]],hostVars:2,hostBindings:function(t,i){t&1&&B("input",function(s){return i.onInput(s)}),t&2&&_(i.cx("root"))},inputs:{pTextareaPT:[1,"pTextareaPT"],pTextareaUnstyled:[1,"pTextareaUnstyled"],autoResize:[2,"autoResize","autoResize",v],pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},outputs:{onResize:"onResize"},features:[R([nr,{provide:ir,useExisting:n},{provide:oe,useExisting:n}]),re([S]),k]})}return n})();var rr=`
    .p-radiobutton {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('radiobutton.width');
        height: dt('radiobutton.height');
    }

    .p-radiobutton-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: 50%;
    }

    .p-radiobutton-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        border: 1px solid dt('radiobutton.border.color');
        background: dt('radiobutton.background');
        width: dt('radiobutton.width');
        height: dt('radiobutton.height');
        transition:
            background dt('radiobutton.transition.duration'),
            color dt('radiobutton.transition.duration'),
            border-color dt('radiobutton.transition.duration'),
            box-shadow dt('radiobutton.transition.duration'),
            outline-color dt('radiobutton.transition.duration');
        outline-color: transparent;
        box-shadow: dt('radiobutton.shadow');
    }

    .p-radiobutton-icon {
        transition-duration: dt('radiobutton.transition.duration');
        background: transparent;
        font-size: dt('radiobutton.icon.size');
        width: dt('radiobutton.icon.size');
        height: dt('radiobutton.icon.size');
        border-radius: 50%;
        backface-visibility: hidden;
        transform: translateZ(0) scale(0.1);
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
        border-color: dt('radiobutton.hover.border.color');
    }

    .p-radiobutton-checked .p-radiobutton-box {
        border-color: dt('radiobutton.checked.border.color');
        background: dt('radiobutton.checked.background');
    }

    .p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.checked.color');
        transform: translateZ(0) scale(1, 1);
        visibility: visible;
    }

    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {
        border-color: dt('radiobutton.checked.hover.border.color');
        background: dt('radiobutton.checked.hover.background');
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.checked.hover.color');
    }

    .p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        border-color: dt('radiobutton.focus.border.color');
        box-shadow: dt('radiobutton.focus.ring.shadow');
        outline: dt('radiobutton.focus.ring.width') dt('radiobutton.focus.ring.style') dt('radiobutton.focus.ring.color');
        outline-offset: dt('radiobutton.focus.ring.offset');
    }

    .p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {
        border-color: dt('radiobutton.checked.focus.border.color');
    }

    .p-radiobutton.p-invalid > .p-radiobutton-box {
        border-color: dt('radiobutton.invalid.border.color');
    }

    .p-radiobutton.p-variant-filled .p-radiobutton-box {
        background: dt('radiobutton.filled.background');
    }

    .p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {
        background: dt('radiobutton.checked.background');
    }

    .p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {
        background: dt('radiobutton.checked.hover.background');
    }

    .p-radiobutton.p-disabled {
        opacity: 1;
    }

    .p-radiobutton.p-disabled .p-radiobutton-box {
        background: dt('radiobutton.disabled.background');
        border-color: dt('radiobutton.checked.disabled.border.color');
    }

    .p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {
        background: dt('radiobutton.icon.disabled.color');
    }

    .p-radiobutton-sm,
    .p-radiobutton-sm .p-radiobutton-box {
        width: dt('radiobutton.sm.width');
        height: dt('radiobutton.sm.height');
    }

    .p-radiobutton-sm .p-radiobutton-icon {
        font-size: dt('radiobutton.icon.sm.size');
        width: dt('radiobutton.icon.sm.size');
        height: dt('radiobutton.icon.sm.size');
    }

    .p-radiobutton-lg,
    .p-radiobutton-lg .p-radiobutton-box {
        width: dt('radiobutton.lg.width');
        height: dt('radiobutton.lg.height');
    }

    .p-radiobutton-lg .p-radiobutton-icon {
        font-size: dt('radiobutton.icon.lg.size');
        width: dt('radiobutton.icon.lg.size');
        height: dt('radiobutton.icon.lg.size');
    }
`;var ka=["input"],wa=`
    ${rr}

    /* For PrimeNG */
    p-radioButton.ng-invalid.ng-dirty .p-radiobutton-box,
    p-radio-button.ng-invalid.ng-dirty .p-radiobutton-box,
    p-radiobutton.ng-invalid.ng-dirty .p-radiobutton-box {
        border-color: dt('radiobutton.invalid.border.color');
    }
`,Sa={root:({instance:n})=>["p-radiobutton p-component",{"p-radiobutton-checked":n.checked,"p-disabled":n.$disabled(),"p-invalid":n.invalid(),"p-variant-filled":n.$variant()==="filled","p-radiobutton-sm p-inputfield-sm":n.size()==="small","p-radiobutton-lg p-inputfield-lg":n.size()==="large"}],box:"p-radiobutton-box",input:"p-radiobutton-input",icon:"p-radiobutton-icon"},sr=(()=>{class n extends j{name="radiobutton";style=wa;classes=Sa;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275prov=T({token:n,factory:n.\u0275fac})}return n})();var ar=new O("RADIOBUTTON_INSTANCE"),Da={provide:at,useExisting:Oe(()=>ni),multi:!0},Ia=(()=>{class n{accessors=[];add(e,t){this.accessors.push([e,t])}remove(e){this.accessors=this.accessors.filter(t=>t[1]!==e)}select(e){this.accessors.forEach(t=>{this.isSameGroup(t,e)&&t[1]!==e&&t[1].writeValue(e.value)})}isSameGroup(e,t){return e[0].control?e[0].control.root===t.control.control.root&&e[1].name()===t.name():!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=T({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),ni=(()=>{class n extends Mt{componentName="RadioButton";$pcRadioButton=p(ar,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(S,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}value;tabindex;inputId;ariaLabelledBy;ariaLabel;styleClass;autofocus;binary;variant=g();size=g();onClick=new E;onFocus=new E;onBlur=new E;inputViewChild;$variant=V(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());checked;focused;control;_componentStyle=p(sr);injector=p(Ee);registry=p(Ia);onInit(){this.control=this.injector.get(De),this.registry.add(this.control,this)}onChange(e){this.$disabled()||this.select(e)}select(e){this.$disabled()||(this.checked=!0,this.writeModelValue(this.checked),this.onModelChange(this.value),this.registry.select(this),this.onClick.emit({originalEvent:e,value:this.value}))}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onModelTouched(),this.onBlur.emit(e)}focus(){this.inputViewChild.nativeElement.focus()}writeControlValue(e,t){this.checked=this.binary?!!e:e==this.value,t(this.checked),this.cd.markForCheck()}onDestroy(){this.registry.remove(this)}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()==="filled",[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275cmp=P({type:n,selectors:[["p-radioButton"],["p-radiobutton"],["p-radio-button"]],viewQuery:function(t,i){if(t&1&&qe(ka,5),t&2){let r;M(r=F())&&(i.inputViewChild=r.first)}},hostVars:5,hostBindings:function(t,i){t&2&&(I("data-p-disabled",i.$disabled())("data-p-checked",i.checked)("data-p",i.dataP),_(i.cx("root")))},inputs:{value:"value",tabindex:[2,"tabindex","tabindex",Re],inputId:"inputId",ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",styleClass:"styleClass",autofocus:[2,"autofocus","autofocus",v],binary:[2,"binary","binary",v],variant:[1,"variant"],size:[1,"size"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[R([Da,sr,{provide:ar,useExisting:n},{provide:oe,useExisting:n}]),re([S]),k],decls:4,vars:20,consts:[["input",""],["type","radio",3,"focus","blur","change","checked","pAutoFocus","pBind"],[3,"pBind"]],template:function(t,i){t&1&&(b(0,"input",1,0),B("focus",function(s){return i.onInputFocus(s)})("blur",function(s){return i.onInputBlur(s)})("change",function(s){return i.onChange(s)}),m(),b(2,"div",2),Q(3,"div",2),m()),t&2&&(_(i.cx("input")),u("checked",i.checked)("pAutoFocus",i.autofocus)("pBind",i.ptm("input")),I("id",i.inputId)("name",i.name())("required",i.required()?"":void 0)("disabled",i.$disabled()?"":void 0)("value",i.modelValue())("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel)("aria-checked",i.checked)("tabindex",i.tabindex),d(2),_(i.cx("box")),u("pBind",i.ptm("box")),d(),_(i.cx("icon")),u("pBind",i.ptm("icon")))},dependencies:[pe,yn,be,Pe,S],encapsulation:2,changeDetection:0})}return n})();var lr=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var Ea=["icon"],Ta=["input"],Ma=(n,o,e)=>({checked:n,class:o,dataP:e});function Fa(n,o){if(n&1&&Q(0,"span",8),n&2){let e=c(3);_(e.cx("icon")),u("ngClass",e.checkboxIcon)("pBind",e.ptm("icon")),I("data-p",e.dataP)}}function Pa(n,o){if(n&1&&(le(),Q(0,"svg",9)),n&2){let e=c(3);_(e.cx("icon")),u("pBind",e.ptm("icon")),I("data-p",e.dataP)}}function Va(n,o){if(n&1&&(Y(0),y(1,Fa,1,5,"span",6)(2,Pa,1,4,"svg",7),X()),n&2){let e=c(2);d(),u("ngIf",e.checkboxIcon),d(),u("ngIf",!e.checkboxIcon)}}function Oa(n,o){if(n&1&&(le(),Q(0,"svg",10)),n&2){let e=c(2);_(e.cx("icon")),u("pBind",e.ptm("icon")),I("data-p",e.dataP)}}function Na(n,o){if(n&1&&(Y(0),y(1,Va,3,2,"ng-container",3)(2,Oa,1,4,"svg",5),X()),n&2){let e=c();d(),u("ngIf",e.checked),d(),u("ngIf",e._indeterminate())}}function Ra(n,o){}function Aa(n,o){n&1&&y(0,Ra,0,0,"ng-template")}var Ba=`
    ${lr}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,La={root:({instance:n})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":n.checked,"p-disabled":n.$disabled(),"p-invalid":n.invalid(),"p-variant-filled":n.$variant()==="filled","p-checkbox-sm p-inputfield-sm":n.size()==="small","p-checkbox-lg p-inputfield-lg":n.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},dr=(()=>{class n extends j{name="checkbox";style=Ba;classes=La;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275prov=T({token:n,factory:n.\u0275fac})}return n})();var cr=new O("CHECKBOX_INSTANCE"),za={provide:at,useExisting:Oe(()=>zt),multi:!0},zt=(()=>{class n extends Mt{componentName="Checkbox";hostName="";value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=g();size=g();onChange=new E;onFocus=new E;onBlur=new E;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:Ji(this.value,this.modelValue())}_indeterminate=$(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=p(dr);bindDirectiveInstance=p(S,{self:!0});$pcCheckbox=p(cr,{optional:!0,skipSelf:!0})??void 0;$variant=V(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}onChanges(e){e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}updateModel(e){let t,i=this.injector.get(De,null,{optional:!0,self:!0}),r=i&&!this.formControl?i.value:this.modelValue();this.binary?(t=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(t),this.onModelChange(t)):(this.checked||this._indeterminate()?t=r.filter(s=>!ht(s,this.value)):t=r?[...r,this.value]:[this.value],this.onModelChange(t),this.writeModelValue(t),this.formControl&&this.formControl.setValue(t)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:t,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(e,t){t(e),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()==="filled",[this.size()]:this.size()})}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275cmp=P({type:n,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(t,i,r){if(t&1&&Je(r,Ea,4)(r,rt,4),t&2){let s;M(s=F())&&(i.checkboxIconTemplate=s.first),M(s=F())&&(i.templates=s)}},viewQuery:function(t,i){if(t&1&&qe(Ta,5),t&2){let r;M(r=F())&&(i.inputViewChild=r.first)}},hostVars:6,hostBindings:function(t,i){t&2&&(I("data-p-highlight",i.checked)("data-p-checked",i.checked)("data-p-disabled",i.$disabled())("data-p",i.dataP),_(i.cn(i.cx("root"),i.styleClass)))},inputs:{hostName:"hostName",value:"value",binary:[2,"binary","binary",v],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",Re],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",v],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",v],autofocus:[2,"autofocus","autofocus",v],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[R([za,dr,{provide:cr,useExisting:n},{provide:oe,useExisting:n}]),re([S]),k],decls:5,vars:26,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked","pBind"],[3,"pBind"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class","pBind",4,"ngIf"],[3,"class","ngClass","pBind",4,"ngIf"],["data-p-icon","check",3,"class","pBind",4,"ngIf"],[3,"ngClass","pBind"],["data-p-icon","check",3,"pBind"],["data-p-icon","minus",3,"pBind"]],template:function(t,i){t&1&&(b(0,"input",1,0),B("focus",function(s){return i.onInputFocus(s)})("blur",function(s){return i.onInputBlur(s)})("change",function(s){return i.handleChange(s)}),m(),b(2,"div",2),y(3,Na,3,2,"ng-container",3)(4,Aa,1,0,null,4),m()),t&2&&(Qe(i.inputStyle),_(i.cn(i.cx("input"),i.inputClass)),u("checked",i.checked)("pBind",i.ptm("input")),I("id",i.inputId)("value",i.value)("name",i.name())("tabindex",i.tabindex)("required",i.required()?"":void 0)("readonly",i.readonly?"":void 0)("disabled",i.$disabled()?"":void 0)("aria-labelledby",i.ariaLabelledBy)("aria-label",i.ariaLabel),d(2),_(i.cx("box")),u("pBind",i.ptm("box")),I("data-p",i.dataP),d(),u("ngIf",!i.checkboxIconTemplate&&!i._checkboxIconTemplate),d(),u("ngTemplateOutlet",i.checkboxIconTemplate||i._checkboxIconTemplate)("ngTemplateOutletContext",tn(22,Ma,i.checked,i.cx("icon"),i.dataP)))},dependencies:[pe,nn,it,ot,be,xn,jo,Pe,S],encapsulation:2,changeDetection:0})}return n})();var Sn=new WeakMap,ur=(()=>{class n{_appRef;_injector=p(Ee);_environmentInjector=p(Vi);load(e){let t=this._appRef=this._appRef||this._injector.get(Xt),i=Sn.get(t);i||(i={loaders:new Set,refs:[]},Sn.set(t,i),t.onDestroy(()=>{Sn.get(t)?.refs.forEach(r=>r.destroy()),Sn.delete(t)})),i.loaders.has(e)||(i.loaders.add(e),i.refs.push(Gi(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||n)};static \u0275prov=T({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ii;function Ha(){if(ii==null){let n=typeof document<"u"?document.head:null;ii=!!(n&&(n.createShadowRoot||n.attachShadow))}return ii}function Dn(n){if(Ha()){let o=n.getRootNode?n.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&o instanceof ShadowRoot)return o}return null}function Ht(n){return n.composedPath?n.composedPath()[0]:n.target}function pr(n){return n.buttons===0||n.detail===0}function hr(n){let o=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!!o&&o.identifier===-1&&(o.radiusX==null||o.radiusX===1)&&(o.radiusY==null||o.radiusY===1)}function In(n,o=0){return $a(n)?Number(n):arguments.length===2?o:0}function $a(n){return!isNaN(parseFloat(n))&&!isNaN(Number(n))}function Le(n){return n instanceof _e?n.nativeElement:n}var oi;try{oi=typeof Intl<"u"&&Intl.v8BreakIterator}catch{oi=!1}var ri=(()=>{class n{_platformId=p(mt);isBrowser=this._platformId?je(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||oi)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275prov=T({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var ja=new O("cdk-dir-doc",{providedIn:"root",factory:()=>p(Te)}),Ga=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Ua(n){let o=n?.toLowerCase()||"";return o==="auto"&&typeof navigator<"u"&&navigator?.language?Ga.test(navigator.language)?"rtl":"ltr":o==="rtl"?"rtl":"ltr"}var si=(()=>{class n{get value(){return this.valueSignal()}valueSignal=$("ltr");change=new E;constructor(){let e=p(ja,{optional:!0});if(e){let t=e.body?e.body.dir:null,i=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Ua(t||i||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=T({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var qa=20,fr=(()=>{class n{_ngZone=p(Me);_platform=p(ri);_renderer=p(bt).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new q;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=qa){return this._platform.isBrowser?new Pt(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let i=e>0?this._scrolled.pipe(Rn(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{i.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Ii()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let i=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(Mi(r=>!r||i.indexOf(r)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((i,r)=>{this._scrollableContainsElement(r,e)&&t.push(r)}),t}_scrollableContainsElement(e,t){let i=Le(t),r=e.getElementRef().nativeElement;do if(i==r)return!0;while(i=i.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=T({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Ka=20,ai=(()=>{class n{_platform=p(ri);_listeners;_viewportSize=null;_change=new q;_document=p(Te);constructor(){let e=p(Me),t=p(bt).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let i=r=>this._change.next(r);this._listeners=[t.listen("window","resize",i),t.listen("window","orientationchange",i)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:i}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+i,right:e.left+t,height:i,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),i=e.documentElement,r=i.getBoundingClientRect(),s=-r.top||e.body?.scrollTop||t.scrollY||i.scrollTop||0,a=-r.left||e.body?.scrollLeft||t.scrollX||i.scrollLeft||0;return{top:s,left:a}}change(e=Ka){return e>0?this._change.pipe(Rn(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=T({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var gr=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=te({type:n});static \u0275inj=ee({})}return n})();var li={},En=class n{_appId=p(Oi);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(o,e=!1){return this._appId!=="ng"&&(o+=this._appId),li.hasOwnProperty(o)||(li[o]=0),`${o}${e?n._infix+"-":""}${li[o]++}`}static \u0275fac=function(e){return new(e||n)};static \u0275prov=T({token:n,factory:n.\u0275fac,providedIn:"root"})};function mr(n){return Array.isArray(n)?n:[n]}function ui(n){let o=n.cloneNode(!0),e=o.querySelectorAll("[id]"),t=n.nodeName.toLowerCase();o.removeAttribute("id");for(let i=0;i<e.length;i++)e[i].removeAttribute("id");return t==="canvas"?vr(n,o):(t==="input"||t==="select"||t==="textarea")&&_r(n,o),br("canvas",n,o,vr),br("input, textarea, select",n,o,_r),o}function br(n,o,e,t){let i=o.querySelectorAll(n);if(i.length){let r=e.querySelectorAll(n);for(let s=0;s<i.length;s++)t(i[s],r[s])}}var Qa=0;function _r(n,o){o.type!=="file"&&(o.value=n.value),o.type==="radio"&&o.name&&(o.name=`mat-clone-${o.name}-${Qa++}`)}function vr(n,o){let e=o.getContext("2d");if(e)try{e.drawImage(n,0,0)}catch{}}function bi(n){let o=n.getBoundingClientRect();return{top:o.top,right:o.right,bottom:o.bottom,left:o.left,width:o.width,height:o.height,x:o.x,y:o.y}}function pi(n,o,e){let{top:t,bottom:i,left:r,right:s}=n;return e>=t&&e<=i&&o>=r&&o<=s}function Za(n,o){let e=o.left<n.left,t=o.left+o.width>n.right,i=o.top<n.top,r=o.top+o.height>n.bottom;return e||t||i||r}function Gt(n,o,e){n.top+=o,n.bottom=n.top+n.height,n.left+=e,n.right=n.left+n.width}function yr(n,o,e,t){let{top:i,right:r,bottom:s,left:a,width:l,height:h}=n,f=l*o,C=h*o;return t>i-C&&t<s+C&&e>a-f&&e<r+f}var Tn=class{_document;positions=new Map;constructor(o){this._document=o}clear(){this.positions.clear()}cache(o){this.clear(),this.positions.set(this._document,{scrollPosition:this.getViewportScrollPosition()}),o.forEach(e=>{this.positions.set(e,{scrollPosition:{top:e.scrollTop,left:e.scrollLeft},clientRect:bi(e)})})}handleScroll(o){let e=Ht(o),t=this.positions.get(e);if(!t)return null;let i=t.scrollPosition,r,s;if(e===this._document){let h=this.getViewportScrollPosition();r=h.top,s=h.left}else r=e.scrollTop,s=e.scrollLeft;let a=i.top-r,l=i.left-s;return this.positions.forEach((h,f)=>{h.clientRect&&e!==f&&e.contains(f)&&Gt(h.clientRect,a,l)}),i.top=r,i.left=s,{top:a,left:l}}getViewportScrollPosition(){return{top:window.scrollY,left:window.scrollX}}};function Vr(n,o){let e=n.rootNodes;if(e.length===1&&e[0].nodeType===o.ELEMENT_NODE)return e[0];let t=o.createElement("div");return e.forEach(i=>t.appendChild(i)),t}function _i(n,o,e){for(let t in o)if(o.hasOwnProperty(t)){let i=o[t];i?n.setProperty(t,i,e?.has(t)?"important":""):n.removeProperty(t)}return n}function Ft(n,o){let e=o?"":"none";_i(n.style,{"touch-action":o?"":"none","-webkit-user-drag":o?"":"none","-webkit-tap-highlight-color":o?"":"transparent","user-select":e,"-ms-user-select":e,"-webkit-user-select":e,"-moz-user-select":e})}function xr(n,o,e){_i(n.style,{position:o?"":"fixed",top:o?"":"0",opacity:o?"":"0",left:o?"":"-999em"},e)}function Mn(n,o){return o&&o!="none"?n+" "+o:n}function Cr(n,o){n.style.width=`${o.width}px`,n.style.height=`${o.height}px`,n.style.transform=Ut(o.left,o.top)}function Ut(n,o){return`translate3d(${Math.round(n)}px, ${Math.round(o)}px, 0)`}var $t={capture:!0},di={passive:!1,capture:!0},Ya=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["ng-component"]],hostAttrs:["cdk-drag-resets-container",""],decls:0,vars:0,template:function(t,i){},styles:[`@layer cdk-resets {
  .cdk-drag-preview {
    background: none;
    border: none;
    padding: 0;
    color: inherit;
    inset: auto;
  }
}
.cdk-drag-placeholder *,
.cdk-drag-preview * {
  pointer-events: none !important;
}
`],encapsulation:2,changeDetection:0})}return n})(),vi=(()=>{class n{_ngZone=p(Me);_document=p(Te);_styleLoader=p(ur);_renderer=p(bt).createRenderer(null,null);_cleanupDocumentTouchmove;_scroll=new q;_dropInstances=new Set;_dragInstances=new Set;_activeDragInstances=$([]);_globalListeners;_draggingPredicate=e=>e.isDragging();_domNodesToDirectives=null;pointerMove=new q;pointerUp=new q;constructor(){}registerDropContainer(e){this._dropInstances.has(e)||this._dropInstances.add(e)}registerDragItem(e){this._dragInstances.add(e),this._dragInstances.size===1&&this._ngZone.runOutsideAngular(()=>{this._cleanupDocumentTouchmove?.(),this._cleanupDocumentTouchmove=this._renderer.listen(this._document,"touchmove",this._persistentTouchmoveListener,di)})}removeDropContainer(e){this._dropInstances.delete(e)}removeDragItem(e){this._dragInstances.delete(e),this.stopDragging(e),this._dragInstances.size===0&&this._cleanupDocumentTouchmove?.()}startDragging(e,t){if(!(this._activeDragInstances().indexOf(e)>-1)&&(this._styleLoader.load(Ya),this._activeDragInstances.update(i=>[...i,e]),this._activeDragInstances().length===1)){let i=t.type.startsWith("touch"),r=a=>this.pointerUp.next(a),s=[["scroll",a=>this._scroll.next(a),$t],["selectstart",this._preventDefaultWhileDragging,di]];i?s.push(["touchend",r,$t],["touchcancel",r,$t]):s.push(["mouseup",r,$t]),i||s.push(["mousemove",a=>this.pointerMove.next(a),di]),this._ngZone.runOutsideAngular(()=>{this._globalListeners=s.map(([a,l,h])=>this._renderer.listen(this._document,a,l,h))})}}stopDragging(e){this._activeDragInstances.update(t=>{let i=t.indexOf(e);return i>-1?(t.splice(i,1),[...t]):t}),this._activeDragInstances().length===0&&this._clearGlobalListeners()}isDragging(e){return this._activeDragInstances().indexOf(e)>-1}scrolled(e){let t=[this._scroll];return e&&e!==this._document&&t.push(new Pt(i=>this._ngZone.runOutsideAngular(()=>{let r=this._renderer.listen(e,"scroll",s=>{this._activeDragInstances().length&&i.next(s)},$t);return()=>{r()}}))),Kt(...t)}registerDirectiveNode(e,t){this._domNodesToDirectives??=new WeakMap,this._domNodesToDirectives.set(e,t)}removeDirectiveNode(e){this._domNodesToDirectives?.delete(e)}getDragDirectiveForNode(e){return this._domNodesToDirectives?.get(e)||null}ngOnDestroy(){this._dragInstances.forEach(e=>this.removeDragItem(e)),this._dropInstances.forEach(e=>this.removeDropContainer(e)),this._domNodesToDirectives=null,this._clearGlobalListeners(),this.pointerMove.complete(),this.pointerUp.complete()}_preventDefaultWhileDragging=e=>{this._activeDragInstances().length>0&&e.preventDefault()};_persistentTouchmoveListener=e=>{this._activeDragInstances().length>0&&(this._activeDragInstances().some(this._draggingPredicate)&&e.preventDefault(),this.pointerMove.next(e))};_clearGlobalListeners(){this._globalListeners?.forEach(e=>e()),this._globalListeners=void 0}static \u0275fac=function(t){return new(t||n)};static \u0275prov=T({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function kr(n){let o=n.toLowerCase().indexOf("ms")>-1?1:1e3;return parseFloat(n)*o}function Xa(n){let o=getComputedStyle(n),e=ci(o,"transition-property"),t=e.find(a=>a==="transform"||a==="all");if(!t)return 0;let i=e.indexOf(t),r=ci(o,"transition-duration"),s=ci(o,"transition-delay");return kr(r[i])+kr(s[i])}function ci(n,o){return n.getPropertyValue(o).split(",").map(t=>t.trim())}var Ja=new Set(["position"]),hi=class{_document;_rootElement;_direction;_initialDomRect;_previewTemplate;_previewClass;_pickupPositionOnPage;_initialTransform;_zIndex;_renderer;_previewEmbeddedView=null;_preview;get element(){return this._preview}constructor(o,e,t,i,r,s,a,l,h,f){this._document=o,this._rootElement=e,this._direction=t,this._initialDomRect=i,this._previewTemplate=r,this._previewClass=s,this._pickupPositionOnPage=a,this._initialTransform=l,this._zIndex=h,this._renderer=f}attach(o){this._preview=this._createPreview(),o.appendChild(this._preview),wr(this._preview)&&this._preview.showPopover()}destroy(){this._preview.remove(),this._previewEmbeddedView?.destroy(),this._preview=this._previewEmbeddedView=null}setTransform(o){this._preview.style.transform=o}getBoundingClientRect(){return this._preview.getBoundingClientRect()}addClass(o){this._preview.classList.add(o)}getTransitionDuration(){return Xa(this._preview)}addEventListener(o,e){return this._renderer.listen(this._preview,o,e)}_createPreview(){let o=this._previewTemplate,e=this._previewClass,t=o?o.template:null,i;if(t&&o){let r=o.matchSize?this._initialDomRect:null,s=o.viewContainer.createEmbeddedView(t,o.context);s.detectChanges(),i=Vr(s,this._document),this._previewEmbeddedView=s,o.matchSize?Cr(i,r):i.style.transform=Ut(this._pickupPositionOnPage.x,this._pickupPositionOnPage.y)}else i=ui(this._rootElement),Cr(i,this._initialDomRect),this._initialTransform&&(i.style.transform=this._initialTransform);return _i(i.style,{"pointer-events":"none",margin:wr(i)?"0 auto 0 0":"0",position:"fixed",top:"0",left:"0","z-index":this._zIndex+""},Ja),Ft(i,!1),i.classList.add("cdk-drag-preview"),i.setAttribute("popover","manual"),i.setAttribute("dir",this._direction),e&&(Array.isArray(e)?e.forEach(r=>i.classList.add(r)):i.classList.add(e)),i}};function wr(n){return"showPopover"in n}var el={passive:!0},Sr={passive:!1},tl={passive:!1,capture:!0},nl=800,Dr="cdk-drag-placeholder",Ir=new Set(["position"]);function Or(n,o,e={dragStartThreshold:5,pointerDirectionChangeThreshold:5}){let t=n.get(He,null,{optional:!0})||n.get(bt).createRenderer(null,null);return new fi(o,e,n.get(Te),n.get(Me),n.get(ai),n.get(vi),t)}var fi=class{_config;_document;_ngZone;_viewportRuler;_dragDropRegistry;_renderer;_rootElementCleanups;_cleanupShadowRootSelectStart;_preview=null;_previewContainer;_placeholderRef=null;_placeholder;_pickupPositionInElement;_pickupPositionOnPage;_marker;_anchor=null;_passiveTransform={x:0,y:0};_activeTransform={x:0,y:0};_initialTransform;_hasStartedDragging=$(!1);_hasMoved=!1;_initialContainer;_initialIndex;_parentPositions;_moveEvents=new q;_pointerDirectionDelta;_pointerPositionAtLastDirectionChange;_lastKnownPointerPosition;_rootElement;_ownerSVGElement=null;_rootElementTapHighlight;_pointerMoveSubscription=ut.EMPTY;_pointerUpSubscription=ut.EMPTY;_scrollSubscription=ut.EMPTY;_resizeSubscription=ut.EMPTY;_lastTouchEventTime;_dragStartTime;_boundaryElement=null;_nativeInteractionsEnabled=!0;_initialDomRect;_previewRect;_boundaryRect;_previewTemplate;_placeholderTemplate;_handles=[];_disabledHandles=new Set;_dropContainer;_direction="ltr";_parentDragRef=null;_cachedShadowRoot;lockAxis=null;dragStartDelay=0;previewClass;scale=1;get disabled(){return this._disabled||!!(this._dropContainer&&this._dropContainer.disabled)}set disabled(o){o!==this._disabled&&(this._disabled=o,this._toggleNativeDragInteractions(),this._handles.forEach(e=>Ft(e,o)))}_disabled=!1;beforeStarted=new q;started=new q;released=new q;ended=new q;entered=new q;exited=new q;dropped=new q;moved=this._moveEvents;data;constrainPosition;constructor(o,e,t,i,r,s,a){this._config=e,this._document=t,this._ngZone=i,this._viewportRuler=r,this._dragDropRegistry=s,this._renderer=a,this.withRootElement(o).withParent(e.parentDragRef||null),this._parentPositions=new Tn(t),s.registerDragItem(this)}getPlaceholderElement(){return this._placeholder}getRootElement(){return this._rootElement}getVisibleElement(){return this.isDragging()?this.getPlaceholderElement():this.getRootElement()}withHandles(o){this._handles=o.map(t=>Le(t)),this._handles.forEach(t=>Ft(t,this.disabled)),this._toggleNativeDragInteractions();let e=new Set;return this._disabledHandles.forEach(t=>{this._handles.indexOf(t)>-1&&e.add(t)}),this._disabledHandles=e,this}withPreviewTemplate(o){return this._previewTemplate=o,this}withPlaceholderTemplate(o){return this._placeholderTemplate=o,this}withRootElement(o){let e=Le(o);if(e!==this._rootElement){this._removeRootElementListeners();let t=this._renderer;this._rootElementCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"mousedown",this._pointerDown,Sr),t.listen(e,"touchstart",this._pointerDown,el),t.listen(e,"dragstart",this._nativeDragStart,Sr)]),this._initialTransform=void 0,this._rootElement=e}return typeof SVGElement<"u"&&this._rootElement instanceof SVGElement&&(this._ownerSVGElement=this._rootElement.ownerSVGElement),this}withBoundaryElement(o){return this._boundaryElement=o?Le(o):null,this._resizeSubscription.unsubscribe(),o&&(this._resizeSubscription=this._viewportRuler.change(10).subscribe(()=>this._containInsideBoundaryOnResize())),this}withParent(o){return this._parentDragRef=o,this}dispose(){this._removeRootElementListeners(),this.isDragging()&&this._rootElement?.remove(),this._marker?.remove(),this._destroyPreview(),this._destroyPlaceholder(),this._dragDropRegistry.removeDragItem(this),this._removeListeners(),this.beforeStarted.complete(),this.started.complete(),this.released.complete(),this.ended.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this._moveEvents.complete(),this._handles=[],this._disabledHandles.clear(),this._dropContainer=void 0,this._resizeSubscription.unsubscribe(),this._parentPositions.clear(),this._boundaryElement=this._rootElement=this._ownerSVGElement=this._placeholderTemplate=this._previewTemplate=this._marker=this._parentDragRef=null}isDragging(){return this._hasStartedDragging()&&this._dragDropRegistry.isDragging(this)}reset(){this._rootElement.style.transform=this._initialTransform||"",this._activeTransform={x:0,y:0},this._passiveTransform={x:0,y:0}}resetToBoundary(){if(this._boundaryElement&&this._rootElement&&Za(this._boundaryElement.getBoundingClientRect(),this._rootElement.getBoundingClientRect())){let o=this._boundaryElement.getBoundingClientRect(),e=this._rootElement.getBoundingClientRect(),t=0,i=0;e.left<o.left?t=o.left-e.left:e.right>o.right&&(t=o.right-e.right),e.top<o.top?i=o.top-e.top:e.bottom>o.bottom&&(i=o.bottom-e.bottom);let r=this._activeTransform.x,s=this._activeTransform.y,a=r+t,l=s+i;this._rootElement.style.transform=Ut(a,l),this._activeTransform={x:a,y:l},this._passiveTransform={x:a,y:l}}}disableHandle(o){!this._disabledHandles.has(o)&&this._handles.indexOf(o)>-1&&(this._disabledHandles.add(o),Ft(o,!0))}enableHandle(o){this._disabledHandles.has(o)&&(this._disabledHandles.delete(o),Ft(o,this.disabled))}withDirection(o){return this._direction=o,this}_withDropContainer(o){this._dropContainer=o}getFreeDragPosition(){let o=this.isDragging()?this._activeTransform:this._passiveTransform;return{x:o.x,y:o.y}}setFreeDragPosition(o){return this._activeTransform={x:0,y:0},this._passiveTransform.x=o.x,this._passiveTransform.y=o.y,this._dropContainer||this._applyRootElementTransform(o.x,o.y),this}withPreviewContainer(o){return this._previewContainer=o,this}_sortFromLastPointerPosition(){let o=this._lastKnownPointerPosition;o&&this._dropContainer&&this._updateActiveDropContainer(this._getConstrainedPointerPosition(o),o)}_removeListeners(){this._pointerMoveSubscription.unsubscribe(),this._pointerUpSubscription.unsubscribe(),this._scrollSubscription.unsubscribe(),this._cleanupShadowRootSelectStart?.(),this._cleanupShadowRootSelectStart=void 0}_destroyPreview(){this._preview?.destroy(),this._preview=null}_destroyPlaceholder(){this._anchor?.remove(),this._placeholder?.remove(),this._placeholderRef?.destroy(),this._placeholder=this._anchor=this._placeholderRef=null}_pointerDown=o=>{if(this.beforeStarted.next(),this._handles.length){let e=this._getTargetHandle(o);e&&!this._disabledHandles.has(e)&&!this.disabled&&this._initializeDragSequence(e,o)}else this.disabled||this._initializeDragSequence(this._rootElement,o)};_pointerMove=o=>{let e=this._getPointerPositionOnPage(o);if(!this._hasStartedDragging()){let i=Math.abs(e.x-this._pickupPositionOnPage.x),r=Math.abs(e.y-this._pickupPositionOnPage.y);if(i+r>=this._config.dragStartThreshold){let a=Date.now()>=this._dragStartTime+this._getDragStartDelay(o),l=this._dropContainer;if(!a){this._endDragSequence(o);return}(!l||!l.isDragging()&&!l.isReceiving())&&(o.cancelable&&o.preventDefault(),this._hasStartedDragging.set(!0),this._ngZone.run(()=>this._startDragSequence(o)))}return}o.cancelable&&o.preventDefault();let t=this._getConstrainedPointerPosition(e);if(this._hasMoved=!0,this._lastKnownPointerPosition=e,this._updatePointerDirectionDelta(t),this._dropContainer)this._updateActiveDropContainer(t,e);else{let i=this.constrainPosition?this._initialDomRect:this._pickupPositionOnPage,r=this._activeTransform;r.x=t.x-i.x+this._passiveTransform.x,r.y=t.y-i.y+this._passiveTransform.y,this._applyRootElementTransform(r.x,r.y)}this._moveEvents.observers.length&&this._ngZone.run(()=>{this._moveEvents.next({source:this,pointerPosition:t,event:o,distance:this._getDragDistance(t),delta:this._pointerDirectionDelta})})};_pointerUp=o=>{this._endDragSequence(o)};_endDragSequence(o){if(this._dragDropRegistry.isDragging(this)&&(this._removeListeners(),this._dragDropRegistry.stopDragging(this),this._toggleNativeDragInteractions(),this._handles&&(this._rootElement.style.webkitTapHighlightColor=this._rootElementTapHighlight),!!this._hasStartedDragging()))if(this.released.next({source:this,event:o}),this._dropContainer)this._dropContainer._stopScrolling(),this._animatePreviewToPlaceholder().then(()=>{this._cleanupDragArtifacts(o),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)});else{this._passiveTransform.x=this._activeTransform.x;let e=this._getPointerPositionOnPage(o);this._passiveTransform.y=this._activeTransform.y,this._ngZone.run(()=>{this.ended.next({source:this,distance:this._getDragDistance(e),dropPoint:e,event:o})}),this._cleanupCachedDimensions(),this._dragDropRegistry.stopDragging(this)}}_startDragSequence(o){jt(o)&&(this._lastTouchEventTime=Date.now()),this._toggleNativeDragInteractions();let e=this._getShadowRoot(),t=this._dropContainer;if(e&&this._ngZone.runOutsideAngular(()=>{this._cleanupShadowRootSelectStart=this._renderer.listen(e,"selectstart",il,tl)}),t){let i=this._rootElement,r=i.parentNode,s=this._placeholder=this._createPlaceholderElement(),a=this._marker=this._marker||this._document.createComment("");r.insertBefore(a,i),this._initialTransform=i.style.transform||"",this._preview=new hi(this._document,this._rootElement,this._direction,this._initialDomRect,this._previewTemplate||null,this.previewClass||null,this._pickupPositionOnPage,this._initialTransform,this._config.zIndex||1e3,this._renderer),this._preview.attach(this._getPreviewInsertionPoint(r,e)),xr(i,!1,Ir),this._document.body.appendChild(r.replaceChild(s,i)),this.started.next({source:this,event:o}),t.start(),this._initialContainer=t,this._initialIndex=t.getItemIndex(this)}else this.started.next({source:this,event:o}),this._initialContainer=this._initialIndex=void 0;this._parentPositions.cache(t?t.getScrollableParents():[])}_initializeDragSequence(o,e){this._parentDragRef&&e.stopPropagation();let t=this.isDragging(),i=jt(e),r=!i&&e.button!==0,s=this._rootElement,a=Ht(e),l=!i&&this._lastTouchEventTime&&this._lastTouchEventTime+nl>Date.now(),h=i?hr(e):pr(e);if(a&&a.draggable&&e.type==="mousedown"&&e.preventDefault(),t||r||l||h)return;if(this._handles.length){let N=s.style;this._rootElementTapHighlight=N.webkitTapHighlightColor||"",N.webkitTapHighlightColor="transparent"}this._hasMoved=!1,this._hasStartedDragging.set(this._hasMoved),this._removeListeners(),this._initialDomRect=this._rootElement.getBoundingClientRect(),this._pointerMoveSubscription=this._dragDropRegistry.pointerMove.subscribe(this._pointerMove),this._pointerUpSubscription=this._dragDropRegistry.pointerUp.subscribe(this._pointerUp),this._scrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(N=>this._updateOnScroll(N)),this._boundaryElement&&(this._boundaryRect=bi(this._boundaryElement));let f=this._previewTemplate;this._pickupPositionInElement=f&&f.template&&!f.matchSize?{x:0,y:0}:this._getPointerPositionInElement(this._initialDomRect,o,e);let C=this._pickupPositionOnPage=this._lastKnownPointerPosition=this._getPointerPositionOnPage(e);this._pointerDirectionDelta={x:0,y:0},this._pointerPositionAtLastDirectionChange={x:C.x,y:C.y},this._dragStartTime=Date.now(),this._dragDropRegistry.startDragging(this,e)}_cleanupDragArtifacts(o){xr(this._rootElement,!0,Ir),this._marker.parentNode.replaceChild(this._rootElement,this._marker),this._destroyPreview(),this._destroyPlaceholder(),this._initialDomRect=this._boundaryRect=this._previewRect=this._initialTransform=void 0,this._ngZone.run(()=>{let e=this._dropContainer,t=e.getItemIndex(this),i=this._getPointerPositionOnPage(o),r=this._getDragDistance(i),s=e._isOverContainer(i.x,i.y);this.ended.next({source:this,distance:r,dropPoint:i,event:o}),this.dropped.next({item:this,currentIndex:t,previousIndex:this._initialIndex,container:e,previousContainer:this._initialContainer,isPointerOverContainer:s,distance:r,dropPoint:i,event:o}),e.drop(this,t,this._initialIndex,this._initialContainer,s,r,i,o),this._dropContainer=this._initialContainer})}_updateActiveDropContainer({x:o,y:e},{x:t,y:i}){let r=this._initialContainer._getSiblingContainerFromPosition(this,o,e);!r&&this._dropContainer!==this._initialContainer&&this._initialContainer._isOverContainer(o,e)&&(r=this._initialContainer),r&&r!==this._dropContainer&&this._ngZone.run(()=>{let s=this._dropContainer.getItemIndex(this),a=this._dropContainer.getItemAtIndex(s+1)?.getVisibleElement()||null;this.exited.next({item:this,container:this._dropContainer}),this._dropContainer.exit(this),this._conditionallyInsertAnchor(r,this._dropContainer,a),this._dropContainer=r,this._dropContainer.enter(this,o,e,r===this._initialContainer&&r.sortingDisabled?this._initialIndex:void 0),this.entered.next({item:this,container:r,currentIndex:r.getItemIndex(this)})}),this.isDragging()&&(this._dropContainer._startScrollingIfNecessary(t,i),this._dropContainer._sortItem(this,o,e,this._pointerDirectionDelta),this.constrainPosition?this._applyPreviewTransform(o,e):this._applyPreviewTransform(o-this._pickupPositionInElement.x,e-this._pickupPositionInElement.y))}_animatePreviewToPlaceholder(){if(!this._hasMoved)return Promise.resolve();let o=this._placeholder.getBoundingClientRect();this._preview.addClass("cdk-drag-animating"),this._applyPreviewTransform(o.left,o.top);let e=this._preview.getTransitionDuration();return e===0?Promise.resolve():this._ngZone.runOutsideAngular(()=>new Promise(t=>{let i=a=>{(!a||this._preview&&Ht(a)===this._preview.element&&a.propertyName==="transform")&&(s(),t(),clearTimeout(r))},r=setTimeout(i,e*1.5),s=this._preview.addEventListener("transitionend",i)}))}_createPlaceholderElement(){let o=this._placeholderTemplate,e=o?o.template:null,t;return e?(this._placeholderRef=o.viewContainer.createEmbeddedView(e,o.context),this._placeholderRef.detectChanges(),t=Vr(this._placeholderRef,this._document)):t=ui(this._rootElement),t.style.pointerEvents="none",t.classList.add(Dr),t}_getPointerPositionInElement(o,e,t){let i=e===this._rootElement?null:e,r=i?i.getBoundingClientRect():o,s=jt(t)?t.targetTouches[0]:t,a=this._getViewportScrollPosition(),l=s.pageX-r.left-a.left,h=s.pageY-r.top-a.top;return{x:r.left-o.left+l,y:r.top-o.top+h}}_getPointerPositionOnPage(o){let e=this._getViewportScrollPosition(),t=jt(o)?o.touches[0]||o.changedTouches[0]||{pageX:0,pageY:0}:o,i=t.pageX-e.left,r=t.pageY-e.top;if(this._ownerSVGElement){let s=this._ownerSVGElement.getScreenCTM();if(s){let a=this._ownerSVGElement.createSVGPoint();return a.x=i,a.y=r,a.matrixTransform(s.inverse())}}return{x:i,y:r}}_getConstrainedPointerPosition(o){let e=this._dropContainer?this._dropContainer.lockAxis:null,{x:t,y:i}=this.constrainPosition?this.constrainPosition(o,this,this._initialDomRect,this._pickupPositionInElement):o;if(this.lockAxis==="x"||e==="x"?i=this._pickupPositionOnPage.y-(this.constrainPosition?this._pickupPositionInElement.y:0):(this.lockAxis==="y"||e==="y")&&(t=this._pickupPositionOnPage.x-(this.constrainPosition?this._pickupPositionInElement.x:0)),this._boundaryRect){let{x:r,y:s}=this.constrainPosition?{x:0,y:0}:this._pickupPositionInElement,a=this._boundaryRect,{width:l,height:h}=this._getPreviewRect(),f=a.top+s,C=a.bottom-(h-s),N=a.left+r,z=a.right-(l-r);t=Er(t,N,z),i=Er(i,f,C)}return{x:t,y:i}}_updatePointerDirectionDelta(o){let{x:e,y:t}=o,i=this._pointerDirectionDelta,r=this._pointerPositionAtLastDirectionChange,s=Math.abs(e-r.x),a=Math.abs(t-r.y);return s>this._config.pointerDirectionChangeThreshold&&(i.x=e>r.x?1:-1,r.x=e),a>this._config.pointerDirectionChangeThreshold&&(i.y=t>r.y?1:-1,r.y=t),i}_toggleNativeDragInteractions(){if(!this._rootElement||!this._handles)return;let o=this._handles.length>0||!this.isDragging();o!==this._nativeInteractionsEnabled&&(this._nativeInteractionsEnabled=o,Ft(this._rootElement,o))}_removeRootElementListeners(){this._rootElementCleanups?.forEach(o=>o()),this._rootElementCleanups=void 0}_applyRootElementTransform(o,e){let t=1/this.scale,i=Ut(o*t,e*t),r=this._rootElement.style;this._initialTransform==null&&(this._initialTransform=r.transform&&r.transform!="none"?r.transform:""),r.transform=Mn(i,this._initialTransform)}_applyPreviewTransform(o,e){let t=this._previewTemplate?.template?void 0:this._initialTransform,i=Ut(o,e);this._preview.setTransform(Mn(i,t))}_getDragDistance(o){let e=this._pickupPositionOnPage;return e?{x:o.x-e.x,y:o.y-e.y}:{x:0,y:0}}_cleanupCachedDimensions(){this._boundaryRect=this._previewRect=void 0,this._parentPositions.clear()}_containInsideBoundaryOnResize(){let{x:o,y:e}=this._passiveTransform;if(o===0&&e===0||this.isDragging()||!this._boundaryElement)return;let t=this._rootElement.getBoundingClientRect(),i=this._boundaryElement.getBoundingClientRect();if(i.width===0&&i.height===0||t.width===0&&t.height===0)return;let r=i.left-t.left,s=t.right-i.right,a=i.top-t.top,l=t.bottom-i.bottom;i.width>t.width?(r>0&&(o+=r),s>0&&(o-=s)):o=0,i.height>t.height?(a>0&&(e+=a),l>0&&(e-=l)):e=0,(o!==this._passiveTransform.x||e!==this._passiveTransform.y)&&this.setFreeDragPosition({y:e,x:o})}_getDragStartDelay(o){let e=this.dragStartDelay;return typeof e=="number"?e:jt(o)?e.touch:e?e.mouse:0}_updateOnScroll(o){let e=this._parentPositions.handleScroll(o);if(e){let t=Ht(o);this._boundaryRect&&t!==this._boundaryElement&&t.contains(this._boundaryElement)&&Gt(this._boundaryRect,e.top,e.left),this._pickupPositionOnPage.x+=e.left,this._pickupPositionOnPage.y+=e.top,this._dropContainer||(this._activeTransform.x-=e.left,this._activeTransform.y-=e.top,this._applyRootElementTransform(this._activeTransform.x,this._activeTransform.y))}}_getViewportScrollPosition(){return this._parentPositions.positions.get(this._document)?.scrollPosition||this._parentPositions.getViewportScrollPosition()}_getShadowRoot(){return this._cachedShadowRoot===void 0&&(this._cachedShadowRoot=Dn(this._rootElement)),this._cachedShadowRoot}_getPreviewInsertionPoint(o,e){let t=this._previewContainer||"global";if(t==="parent")return o;if(t==="global"){let i=this._document;return e||i.fullscreenElement||i.webkitFullscreenElement||i.mozFullScreenElement||i.msFullscreenElement||i.body}return Le(t)}_getPreviewRect(){return(!this._previewRect||!this._previewRect.width&&!this._previewRect.height)&&(this._previewRect=this._preview?this._preview.getBoundingClientRect():this._initialDomRect),this._previewRect}_nativeDragStart=o=>{if(this._handles.length){let e=this._getTargetHandle(o);e&&!this._disabledHandles.has(e)&&!this.disabled&&o.preventDefault()}else this.disabled||o.preventDefault()};_getTargetHandle(o){return this._handles.find(e=>o.target&&(o.target===e||e.contains(o.target)))}_conditionallyInsertAnchor(o,e,t){if(o===this._initialContainer)this._anchor?.remove(),this._anchor=null;else if(e===this._initialContainer&&e.hasAnchor){let i=this._anchor??=ui(this._placeholder);i.classList.remove(Dr),i.classList.add("cdk-drag-anchor"),i.style.transform="",t?t.before(i):Le(e.element).appendChild(i)}}};function Er(n,o,e){return Math.max(o,Math.min(e,n))}function jt(n){return n.type[0]==="t"}function il(n){n.preventDefault()}function Pn(n,o,e){let t=Tr(o,n.length-1),i=Tr(e,n.length-1);if(t===i)return;let r=n[t],s=i<t?-1:1;for(let a=t;a!==i;a+=s)n[a]=n[a+s];n[i]=r}function Tr(n,o){return Math.max(0,Math.min(o,n))}var Fn=class{_dragDropRegistry;_element;_sortPredicate;_itemPositions=[];_activeDraggables;orientation="vertical";direction="ltr";constructor(o){this._dragDropRegistry=o}_previousSwap={drag:null,delta:0,overlaps:!1};start(o){this.withItems(o)}sort(o,e,t,i){let r=this._itemPositions,s=this._getItemIndexFromPointerPosition(o,e,t,i);if(s===-1&&r.length>0)return null;let a=this.orientation==="horizontal",l=r.findIndex(D=>D.drag===o),h=r[s],f=r[l].clientRect,C=h.clientRect,N=l>s?1:-1,z=this._getItemOffsetPx(f,C,N),U=this._getSiblingOffsetPx(l,r,N),ue=r.slice();return Pn(r,l,s),r.forEach((D,L)=>{if(ue[L]===D)return;let W=D.drag===o,J=W?z:U,Ie=W?o.getPlaceholderElement():D.drag.getRootElement();D.offset+=J;let ze=Math.round(D.offset*(1/D.drag.scale));a?(Ie.style.transform=Mn(`translate3d(${ze}px, 0, 0)`,D.initialTransform),Gt(D.clientRect,0,J)):(Ie.style.transform=Mn(`translate3d(0, ${ze}px, 0)`,D.initialTransform),Gt(D.clientRect,J,0))}),this._previousSwap.overlaps=pi(C,e,t),this._previousSwap.drag=h.drag,this._previousSwap.delta=a?i.x:i.y,{previousIndex:l,currentIndex:s}}enter(o,e,t,i){let r=this._activeDraggables,s=r.indexOf(o),a=o.getPlaceholderElement();s>-1&&r.splice(s,1);let l=i==null||i<0?this._getItemIndexFromPointerPosition(o,e,t):i,h=r[l];if(h===o&&(h=r[l+1]),!h&&(l==null||l===-1||l<r.length-1)&&this._shouldEnterAsFirstChild(e,t)&&(h=r[0]),h&&!this._dragDropRegistry.isDragging(h)){let f=h.getRootElement();f.parentElement.insertBefore(a,f),r.splice(l,0,o)}else this._element.appendChild(a),r.push(o);a.style.transform="",this._cacheItemPositions()}withItems(o){this._activeDraggables=o.slice(),this._cacheItemPositions()}withSortPredicate(o){this._sortPredicate=o}reset(){this._activeDraggables?.forEach(o=>{let e=o.getRootElement();if(e){let t=this._itemPositions.find(i=>i.drag===o)?.initialTransform;e.style.transform=t||""}}),this._itemPositions=[],this._activeDraggables=[],this._previousSwap.drag=null,this._previousSwap.delta=0,this._previousSwap.overlaps=!1}getActiveItemsSnapshot(){return this._activeDraggables}getItemIndex(o){return this._getVisualItemPositions().findIndex(e=>e.drag===o)}getItemAtIndex(o){return this._getVisualItemPositions()[o]?.drag||null}updateOnScroll(o,e){this._itemPositions.forEach(({clientRect:t})=>{Gt(t,o,e)}),this._itemPositions.forEach(({drag:t})=>{this._dragDropRegistry.isDragging(t)&&t._sortFromLastPointerPosition()})}withElementContainer(o){this._element=o}_cacheItemPositions(){let o=this.orientation==="horizontal";this._itemPositions=this._activeDraggables.map(e=>{let t=e.getVisibleElement();return{drag:e,offset:0,initialTransform:t.style.transform||"",clientRect:bi(t)}}).sort((e,t)=>o?e.clientRect.left-t.clientRect.left:e.clientRect.top-t.clientRect.top)}_getVisualItemPositions(){return this.orientation==="horizontal"&&this.direction==="rtl"?this._itemPositions.slice().reverse():this._itemPositions}_getItemOffsetPx(o,e,t){let i=this.orientation==="horizontal",r=i?e.left-o.left:e.top-o.top;return t===-1&&(r+=i?e.width-o.width:e.height-o.height),r}_getSiblingOffsetPx(o,e,t){let i=this.orientation==="horizontal",r=e[o].clientRect,s=e[o+t*-1],a=r[i?"width":"height"]*t;if(s){let l=i?"left":"top",h=i?"right":"bottom";t===-1?a-=s.clientRect[l]-r[h]:a+=r[l]-s.clientRect[h]}return a}_shouldEnterAsFirstChild(o,e){if(!this._activeDraggables.length)return!1;let t=this._itemPositions,i=this.orientation==="horizontal";if(t[0].drag!==this._activeDraggables[0]){let s=t[t.length-1].clientRect;return i?o>=s.right:e>=s.bottom}else{let s=t[0].clientRect;return i?o<=s.left:e<=s.top}}_getItemIndexFromPointerPosition(o,e,t,i){let r=this.orientation==="horizontal",s=this._itemPositions.findIndex(({drag:a,clientRect:l})=>{if(a===o)return!1;if(i){let h=r?i.x:i.y;if(a===this._previousSwap.drag&&this._previousSwap.overlaps&&h===this._previousSwap.delta)return!1}return r?e>=Math.floor(l.left)&&e<Math.floor(l.right):t>=Math.floor(l.top)&&t<Math.floor(l.bottom)});return s===-1||!this._sortPredicate(s,o)?-1:s}},gi=class{_document;_dragDropRegistry;_element;_sortPredicate;_rootNode;_activeItems;_previousSwap={drag:null,deltaX:0,deltaY:0,overlaps:!1};_relatedNodes=[];constructor(o,e){this._document=o,this._dragDropRegistry=e}start(o){let e=this._element.childNodes;this._relatedNodes=[];for(let t=0;t<e.length;t++){let i=e[t];this._relatedNodes.push([i,i.nextSibling])}this.withItems(o)}sort(o,e,t,i){let r=this._getItemIndexFromPointerPosition(o,e,t),s=this._previousSwap;if(r===-1||this._activeItems[r]===o)return null;let a=this._activeItems[r];if(s.drag===a&&s.overlaps&&s.deltaX===i.x&&s.deltaY===i.y)return null;let l=this.getItemIndex(o),h=o.getPlaceholderElement(),f=a.getRootElement();r>l?f.after(h):f.before(h),Pn(this._activeItems,l,r);let C=this._getRootNode().elementFromPoint(e,t);return s.deltaX=i.x,s.deltaY=i.y,s.drag=a,s.overlaps=f===C||f.contains(C),{previousIndex:l,currentIndex:r}}enter(o,e,t,i){let r=this._activeItems.indexOf(o);r>-1&&this._activeItems.splice(r,1);let s=i==null||i<0?this._getItemIndexFromPointerPosition(o,e,t):i;s===-1&&(s=this._getClosestItemIndexToPointer(o,e,t));let a=this._activeItems[s];a&&!this._dragDropRegistry.isDragging(a)?(this._activeItems.splice(s,0,o),a.getRootElement().before(o.getPlaceholderElement())):(this._activeItems.push(o),this._element.appendChild(o.getPlaceholderElement()))}withItems(o){this._activeItems=o.slice()}withSortPredicate(o){this._sortPredicate=o}reset(){let o=this._element,e=this._previousSwap;for(let t=this._relatedNodes.length-1;t>-1;t--){let[i,r]=this._relatedNodes[t];i.parentNode===o&&i.nextSibling!==r&&(r===null?o.appendChild(i):r.parentNode===o&&o.insertBefore(i,r))}this._relatedNodes=[],this._activeItems=[],e.drag=null,e.deltaX=e.deltaY=0,e.overlaps=!1}getActiveItemsSnapshot(){return this._activeItems}getItemIndex(o){return this._activeItems.indexOf(o)}getItemAtIndex(o){return this._activeItems[o]||null}updateOnScroll(){this._activeItems.forEach(o=>{this._dragDropRegistry.isDragging(o)&&o._sortFromLastPointerPosition()})}withElementContainer(o){o!==this._element&&(this._element=o,this._rootNode=void 0)}_getItemIndexFromPointerPosition(o,e,t){let i=this._getRootNode().elementFromPoint(Math.floor(e),Math.floor(t)),r=i?this._activeItems.findIndex(s=>{let a=s.getRootElement();return i===a||a.contains(i)}):-1;return r===-1||!this._sortPredicate(r,o)?-1:r}_getRootNode(){return this._rootNode||(this._rootNode=Dn(this._element)||this._document),this._rootNode}_getClosestItemIndexToPointer(o,e,t){if(this._activeItems.length===0)return-1;if(this._activeItems.length===1)return 0;let i=1/0,r=-1;for(let s=0;s<this._activeItems.length;s++){let a=this._activeItems[s];if(a!==o){let{x:l,y:h}=a.getRootElement().getBoundingClientRect(),f=Math.hypot(e-l,t-h);f<i&&(i=f,r=s)}}return r}},Mr=.05,Nr=.05,Ve=(function(n){return n[n.NONE=0]="NONE",n[n.UP=1]="UP",n[n.DOWN=2]="DOWN",n})(Ve||{}),xe=(function(n){return n[n.NONE=0]="NONE",n[n.LEFT=1]="LEFT",n[n.RIGHT=2]="RIGHT",n})(xe||{});function Rr(n,o){return new mi(o,n.get(vi),n.get(Te),n.get(Me),n.get(ai))}var mi=class{_dragDropRegistry;_ngZone;_viewportRuler;element;disabled=!1;sortingDisabled=!1;lockAxis=null;autoScrollDisabled=!1;autoScrollStep=2;hasAnchor=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;beforeStarted=new q;entered=new q;exited=new q;dropped=new q;sorted=new q;receivingStarted=new q;receivingStopped=new q;data;_container;_isDragging=!1;_parentPositions;_sortStrategy;_domRect;_draggables=[];_siblings=[];_activeSiblings=new Set;_viewportScrollSubscription=ut.EMPTY;_verticalScrollDirection=Ve.NONE;_horizontalScrollDirection=xe.NONE;_scrollNode;_stopScrollTimers=new q;_cachedShadowRoot=null;_document;_scrollableElements=[];_initialScrollSnap;_direction="ltr";constructor(o,e,t,i,r){this._dragDropRegistry=e,this._ngZone=i,this._viewportRuler=r;let s=this.element=Le(o);this._document=t,this.withOrientation("vertical").withElementContainer(s),e.registerDropContainer(this),this._parentPositions=new Tn(t)}dispose(){this._stopScrolling(),this._stopScrollTimers.complete(),this._viewportScrollSubscription.unsubscribe(),this.beforeStarted.complete(),this.entered.complete(),this.exited.complete(),this.dropped.complete(),this.sorted.complete(),this.receivingStarted.complete(),this.receivingStopped.complete(),this._activeSiblings.clear(),this._scrollNode=null,this._parentPositions.clear(),this._dragDropRegistry.removeDropContainer(this)}isDragging(){return this._isDragging}start(){this._draggingStarted(),this._notifyReceivingSiblings()}enter(o,e,t,i){this._draggingStarted(),i==null&&this.sortingDisabled&&(i=this._draggables.indexOf(o)),this._sortStrategy.enter(o,e,t,i),this._cacheParentPositions(),this._notifyReceivingSiblings(),this.entered.next({item:o,container:this,currentIndex:this.getItemIndex(o)})}exit(o){this._reset(),this.exited.next({item:o,container:this})}drop(o,e,t,i,r,s,a,l={}){this._reset(),this.dropped.next({item:o,currentIndex:e,previousIndex:t,container:this,previousContainer:i,isPointerOverContainer:r,distance:s,dropPoint:a,event:l})}withItems(o){let e=this._draggables;return this._draggables=o,o.forEach(t=>t._withDropContainer(this)),this.isDragging()&&(e.filter(i=>i.isDragging()).every(i=>o.indexOf(i)===-1)?this._reset():this._sortStrategy.withItems(this._draggables)),this}withDirection(o){return this._direction=o,this._sortStrategy instanceof Fn&&(this._sortStrategy.direction=o),this}connectedTo(o){return this._siblings=o.slice(),this}withOrientation(o){if(o==="mixed")this._sortStrategy=new gi(this._document,this._dragDropRegistry);else{let e=new Fn(this._dragDropRegistry);e.direction=this._direction,e.orientation=o,this._sortStrategy=e}return this._sortStrategy.withElementContainer(this._container),this._sortStrategy.withSortPredicate((e,t)=>this.sortPredicate(e,t,this)),this}withScrollableParents(o){let e=this._container;return this._scrollableElements=o.indexOf(e)===-1?[e,...o]:o.slice(),this}withElementContainer(o){if(o===this._container)return this;let e=Le(this.element),t=this._scrollableElements.indexOf(this._container),i=this._scrollableElements.indexOf(o);return t>-1&&this._scrollableElements.splice(t,1),i>-1&&this._scrollableElements.splice(i,1),this._sortStrategy&&this._sortStrategy.withElementContainer(o),this._cachedShadowRoot=null,this._scrollableElements.unshift(o),this._container=o,this}getScrollableParents(){return this._scrollableElements}getItemIndex(o){return this._isDragging?this._sortStrategy.getItemIndex(o):this._draggables.indexOf(o)}getItemAtIndex(o){return this._isDragging?this._sortStrategy.getItemAtIndex(o):this._draggables[o]||null}isReceiving(){return this._activeSiblings.size>0}_sortItem(o,e,t,i){if(this.sortingDisabled||!this._domRect||!yr(this._domRect,Mr,e,t))return;let r=this._sortStrategy.sort(o,e,t,i);r&&this.sorted.next({previousIndex:r.previousIndex,currentIndex:r.currentIndex,container:this,item:o})}_startScrollingIfNecessary(o,e){if(this.autoScrollDisabled)return;let t,i=Ve.NONE,r=xe.NONE;if(this._parentPositions.positions.forEach((s,a)=>{a===this._document||!s.clientRect||t||yr(s.clientRect,Mr,o,e)&&([i,r]=ol(a,s.clientRect,this._direction,o,e),(i||r)&&(t=a))}),!i&&!r){let{width:s,height:a}=this._viewportRuler.getViewportSize(),l={width:s,height:a,top:0,right:s,bottom:a,left:0};i=Ar(l,e),r=Br(l,o),t=window}t&&(i!==this._verticalScrollDirection||r!==this._horizontalScrollDirection||t!==this._scrollNode)&&(this._verticalScrollDirection=i,this._horizontalScrollDirection=r,this._scrollNode=t,(i||r)&&t?this._ngZone.runOutsideAngular(this._startScrollInterval):this._stopScrolling())}_stopScrolling(){this._stopScrollTimers.next()}_draggingStarted(){let o=this._container.style;this.beforeStarted.next(),this._isDragging=!0,this._initialScrollSnap=o.msScrollSnapType||o.scrollSnapType||"",o.scrollSnapType=o.msScrollSnapType="none",this._sortStrategy.start(this._draggables),this._cacheParentPositions(),this._viewportScrollSubscription.unsubscribe(),this._listenToScrollEvents()}_cacheParentPositions(){this._parentPositions.cache(this._scrollableElements),this._domRect=this._parentPositions.positions.get(this._container).clientRect}_reset(){this._isDragging=!1;let o=this._container.style;o.scrollSnapType=o.msScrollSnapType=this._initialScrollSnap,this._siblings.forEach(e=>e._stopReceiving(this)),this._sortStrategy.reset(),this._stopScrolling(),this._viewportScrollSubscription.unsubscribe(),this._parentPositions.clear()}_startScrollInterval=()=>{this._stopScrolling(),Ti(0,Nn).pipe(gt(this._stopScrollTimers)).subscribe(()=>{let o=this._scrollNode,e=this.autoScrollStep;this._verticalScrollDirection===Ve.UP?o.scrollBy(0,-e):this._verticalScrollDirection===Ve.DOWN&&o.scrollBy(0,e),this._horizontalScrollDirection===xe.LEFT?o.scrollBy(-e,0):this._horizontalScrollDirection===xe.RIGHT&&o.scrollBy(e,0)})};_isOverContainer(o,e){return this._domRect!=null&&pi(this._domRect,o,e)}_getSiblingContainerFromPosition(o,e,t){return this._siblings.find(i=>i._canReceive(o,e,t))}_canReceive(o,e,t){if(!this._domRect||!pi(this._domRect,e,t)||!this.enterPredicate(o,this))return!1;let i=this._getShadowRoot().elementFromPoint(e,t);return i?i===this._container||this._container.contains(i):!1}_startReceiving(o,e){let t=this._activeSiblings;!t.has(o)&&e.every(i=>this.enterPredicate(i,this)||this._draggables.indexOf(i)>-1)&&(t.add(o),this._cacheParentPositions(),this._listenToScrollEvents(),this.receivingStarted.next({initiator:o,receiver:this,items:e}))}_stopReceiving(o){this._activeSiblings.delete(o),this._viewportScrollSubscription.unsubscribe(),this.receivingStopped.next({initiator:o,receiver:this})}_listenToScrollEvents(){this._viewportScrollSubscription=this._dragDropRegistry.scrolled(this._getShadowRoot()).subscribe(o=>{if(this.isDragging()){let e=this._parentPositions.handleScroll(o);e&&this._sortStrategy.updateOnScroll(e.top,e.left)}else this.isReceiving()&&this._cacheParentPositions()})}_getShadowRoot(){if(!this._cachedShadowRoot){let o=Dn(this._container);this._cachedShadowRoot=o||this._document}return this._cachedShadowRoot}_notifyReceivingSiblings(){let o=this._sortStrategy.getActiveItemsSnapshot().filter(e=>e.isDragging());this._siblings.forEach(e=>e._startReceiving(this,o))}};function Ar(n,o){let{top:e,bottom:t,height:i}=n,r=i*Nr;return o>=e-r&&o<=e+r?Ve.UP:o>=t-r&&o<=t+r?Ve.DOWN:Ve.NONE}function Br(n,o){let{left:e,right:t,width:i}=n,r=i*Nr;return o>=e-r&&o<=e+r?xe.LEFT:o>=t-r&&o<=t+r?xe.RIGHT:xe.NONE}function ol(n,o,e,t,i){let r=Ar(o,i),s=Br(o,t),a=Ve.NONE,l=xe.NONE;if(r){let h=n.scrollTop;r===Ve.UP?h>0&&(a=Ve.UP):n.scrollHeight-h>n.clientHeight&&(a=Ve.DOWN)}if(s){let h=n.scrollLeft;e==="rtl"?s===xe.RIGHT?h<0&&(l=xe.RIGHT):n.scrollWidth+h>n.clientWidth&&(l=xe.LEFT):s===xe.LEFT?h>0&&(l=xe.LEFT):n.scrollWidth-h>n.clientWidth&&(l=xe.RIGHT)}return[a,l]}var rl=(()=>{class n{_injector=p(Ee);constructor(){}createDrag(e,t){return Or(this._injector,e,t)}createDropList(e){return Rr(this._injector,e)}static \u0275fac=function(t){return new(t||n)};static \u0275prov=T({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Fr=new O("CDK_DRAG_PARENT");var sl=new O("CdkDragHandle");var Vn=new O("CDK_DRAG_CONFIG"),Lr=new O("CdkDropList"),zr=(()=>{class n{element=p(_e);dropContainer=p(Lr,{optional:!0,skipSelf:!0});_ngZone=p(Me);_viewContainerRef=p(Bn);_dir=p(si,{optional:!0});_changeDetectorRef=p(nt);_selfHandle=p(sl,{optional:!0,self:!0});_parentDrag=p(Fr,{optional:!0,skipSelf:!0});_dragDropRegistry=p(vi);_destroyed=new q;_handles=new Si([]);_previewTemplate=null;_placeholderTemplate=null;_dragRef;data;lockAxis=null;rootElementSelector;boundaryElement;dragStartDelay;freeDragPosition;get disabled(){return this._disabled||!!(this.dropContainer&&this.dropContainer.disabled)}set disabled(e){this._disabled=e,this._dragRef.disabled=this._disabled}_disabled=!1;constrainPosition;previewClass;previewContainer;scale=1;started=new E;released=new E;ended=new E;entered=new E;exited=new E;dropped=new E;moved=new Pt(e=>{let t=this._dragRef.moved.pipe(qt(i=>({source:this,pointerPosition:i.pointerPosition,event:i.event,delta:i.delta,distance:i.distance}))).subscribe(e);return()=>{t.unsubscribe()}});_injector=p(Ee);constructor(){let e=this.dropContainer,t=p(Vn,{optional:!0});this._dragRef=Or(this._injector,this.element,{dragStartThreshold:t&&t.dragStartThreshold!=null?t.dragStartThreshold:5,pointerDirectionChangeThreshold:t&&t.pointerDirectionChangeThreshold!=null?t.pointerDirectionChangeThreshold:5,zIndex:t?.zIndex}),this._dragRef.data=this,this._dragDropRegistry.registerDirectiveNode(this.element.nativeElement,this),t&&this._assignDefaults(t),e&&(e.addItem(this),e._dropListRef.beforeStarted.pipe(gt(this._destroyed)).subscribe(()=>{this._dragRef.scale=this.scale})),this._syncInputs(this._dragRef),this._handleEvents(this._dragRef)}getPlaceholderElement(){return this._dragRef.getPlaceholderElement()}getRootElement(){return this._dragRef.getRootElement()}reset(){this._dragRef.reset()}resetToBoundary(){this._dragRef.resetToBoundary()}getFreeDragPosition(){return this._dragRef.getFreeDragPosition()}setFreeDragPosition(e){this._dragRef.setFreeDragPosition(e)}ngAfterViewInit(){Yt(()=>{this._updateRootElement(),this._setupHandlesListener(),this._dragRef.scale=this.scale,this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)},{injector:this._injector})}ngOnChanges(e){let t=e.rootElementSelector,i=e.freeDragPosition;t&&!t.firstChange&&this._updateRootElement(),this._dragRef.scale=this.scale,i&&!i.firstChange&&this.freeDragPosition&&this._dragRef.setFreeDragPosition(this.freeDragPosition)}ngOnDestroy(){this.dropContainer&&this.dropContainer.removeItem(this),this._dragDropRegistry.removeDirectiveNode(this.element.nativeElement),this._ngZone.runOutsideAngular(()=>{this._handles.complete(),this._destroyed.next(),this._destroyed.complete(),this._dragRef.dispose()})}_addHandle(e){let t=this._handles.getValue();t.push(e),this._handles.next(t)}_removeHandle(e){let t=this._handles.getValue(),i=t.indexOf(e);i>-1&&(t.splice(i,1),this._handles.next(t))}_setPreviewTemplate(e){this._previewTemplate=e}_resetPreviewTemplate(e){e===this._previewTemplate&&(this._previewTemplate=null)}_setPlaceholderTemplate(e){this._placeholderTemplate=e}_resetPlaceholderTemplate(e){e===this._placeholderTemplate&&(this._placeholderTemplate=null)}_updateRootElement(){let e=this.element.nativeElement,t=e;this.rootElementSelector&&(t=e.closest!==void 0?e.closest(this.rootElementSelector):e.parentElement?.closest(this.rootElementSelector)),this._dragRef.withRootElement(t||e)}_getBoundaryElement(){let e=this.boundaryElement;return e?typeof e=="string"?this.element.nativeElement.closest(e):Le(e):null}_syncInputs(e){e.beforeStarted.subscribe(()=>{if(!e.isDragging()){let t=this._dir,i=this.dragStartDelay,r=this._placeholderTemplate?{template:this._placeholderTemplate.templateRef,context:this._placeholderTemplate.data,viewContainer:this._viewContainerRef}:null,s=this._previewTemplate?{template:this._previewTemplate.templateRef,context:this._previewTemplate.data,matchSize:this._previewTemplate.matchSize,viewContainer:this._viewContainerRef}:null;e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.scale=this.scale,e.dragStartDelay=typeof i=="object"&&i?i:In(i),e.constrainPosition=this.constrainPosition,e.previewClass=this.previewClass,e.withBoundaryElement(this._getBoundaryElement()).withPlaceholderTemplate(r).withPreviewTemplate(s).withPreviewContainer(this.previewContainer||"global"),t&&e.withDirection(t.value)}}),e.beforeStarted.pipe(Fi(1)).subscribe(()=>{if(this._parentDrag){e.withParent(this._parentDrag._dragRef);return}let t=this.element.nativeElement.parentElement;for(;t;){let i=this._dragDropRegistry.getDragDirectiveForNode(t);if(i){e.withParent(i._dragRef);break}t=t.parentElement}})}_handleEvents(e){e.started.subscribe(t=>{this.started.emit({source:this,event:t.event}),this._changeDetectorRef.markForCheck()}),e.released.subscribe(t=>{this.released.emit({source:this,event:t.event})}),e.ended.subscribe(t=>{this.ended.emit({source:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(t=>{this.entered.emit({container:t.container.data,item:this,currentIndex:t.currentIndex})}),e.exited.subscribe(t=>{this.exited.emit({container:t.container.data,item:this})}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,isPointerOverContainer:t.isPointerOverContainer,item:this,distance:t.distance,dropPoint:t.dropPoint,event:t.event})})}_assignDefaults(e){let{lockAxis:t,dragStartDelay:i,constrainPosition:r,previewClass:s,boundaryElement:a,draggingDisabled:l,rootElementSelector:h,previewContainer:f}=e;this.disabled=l??!1,this.dragStartDelay=i||0,this.lockAxis=t||null,r&&(this.constrainPosition=r),s&&(this.previewClass=s),a&&(this.boundaryElement=a),h&&(this.rootElementSelector=h),f&&(this.previewContainer=f)}_setupHandlesListener(){this._handles.pipe(Pi(e=>{let t=e.map(i=>i.element);this._selfHandle&&this.rootElementSelector&&t.push(this.element),this._dragRef.withHandles(t)}),An(e=>Kt(...e.map(t=>t._stateChanges.pipe(Qt(t))))),gt(this._destroyed)).subscribe(e=>{let t=this._dragRef,i=e.element.nativeElement;e.disabled?t.disableHandle(i):t.enableHandle(i)})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,selectors:[["","cdkDrag",""]],hostAttrs:[1,"cdk-drag"],hostVars:4,hostBindings:function(t,i){t&2&&Ce("cdk-drag-disabled",i.disabled)("cdk-drag-dragging",i._dragRef.isDragging())},inputs:{data:[0,"cdkDragData","data"],lockAxis:[0,"cdkDragLockAxis","lockAxis"],rootElementSelector:[0,"cdkDragRootElement","rootElementSelector"],boundaryElement:[0,"cdkDragBoundary","boundaryElement"],dragStartDelay:[0,"cdkDragStartDelay","dragStartDelay"],freeDragPosition:[0,"cdkDragFreeDragPosition","freeDragPosition"],disabled:[2,"cdkDragDisabled","disabled",v],constrainPosition:[0,"cdkDragConstrainPosition","constrainPosition"],previewClass:[0,"cdkDragPreviewClass","previewClass"],previewContainer:[0,"cdkDragPreviewContainer","previewContainer"],scale:[2,"cdkDragScale","scale",Re]},outputs:{started:"cdkDragStarted",released:"cdkDragReleased",ended:"cdkDragEnded",entered:"cdkDragEntered",exited:"cdkDragExited",dropped:"cdkDragDropped",moved:"cdkDragMoved"},exportAs:["cdkDrag"],features:[R([{provide:Fr,useExisting:n}]),pt]})}return n})(),Pr=new O("CdkDropListGroup");var Hr=(()=>{class n{element=p(_e);_changeDetectorRef=p(nt);_scrollDispatcher=p(fr);_dir=p(si,{optional:!0});_group=p(Pr,{optional:!0,skipSelf:!0});_latestSortedRefs;_destroyed=new q;_scrollableParentsResolved=!1;static _dropLists=[];_dropListRef;connectedTo=[];data;orientation="vertical";id=p(En).getId("cdk-drop-list-");lockAxis=null;get disabled(){return this._disabled||!!this._group&&this._group.disabled}set disabled(e){this._dropListRef.disabled=this._disabled=e}_disabled=!1;sortingDisabled=!1;enterPredicate=()=>!0;sortPredicate=()=>!0;autoScrollDisabled=!1;autoScrollStep;elementContainerSelector=null;hasAnchor=!1;dropped=new E;entered=new E;exited=new E;sorted=new E;_unsortedItems=new Set;constructor(){let e=p(Vn,{optional:!0}),t=p(Ee);this._dropListRef=Rr(t,this.element),this._dropListRef.data=this,e&&this._assignDefaults(e),this._dropListRef.enterPredicate=(i,r)=>this.enterPredicate(i.data,r.data),this._dropListRef.sortPredicate=(i,r,s)=>this.sortPredicate(i,r.data,s.data),this._setupInputSyncSubscription(this._dropListRef),this._handleEvents(this._dropListRef),n._dropLists.push(this),this._group&&this._group._items.add(this)}addItem(e){this._unsortedItems.add(e),e._dragRef._withDropContainer(this._dropListRef),this._dropListRef.isDragging()&&this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef))}removeItem(e){if(this._unsortedItems.delete(e),this._latestSortedRefs){let t=this._latestSortedRefs.indexOf(e._dragRef);t>-1&&(this._latestSortedRefs.splice(t,1),this._syncItemsWithRef(this._latestSortedRefs))}}getSortedItems(){return Array.from(this._unsortedItems).sort((e,t)=>e._dragRef.getVisibleElement().compareDocumentPosition(t._dragRef.getVisibleElement())&Node.DOCUMENT_POSITION_FOLLOWING?-1:1)}ngOnDestroy(){let e=n._dropLists.indexOf(this);e>-1&&n._dropLists.splice(e,1),this._group&&this._group._items.delete(this),this._latestSortedRefs=void 0,this._unsortedItems.clear(),this._dropListRef.dispose(),this._destroyed.next(),this._destroyed.complete()}_setupInputSyncSubscription(e){this._dir&&this._dir.change.pipe(Qt(this._dir.value),gt(this._destroyed)).subscribe(t=>e.withDirection(t)),e.beforeStarted.subscribe(()=>{let t=mr(this.connectedTo).map(i=>{if(typeof i=="string"){let r=n._dropLists.find(s=>s.id===i);return r}return i});if(this._group&&this._group._items.forEach(i=>{t.indexOf(i)===-1&&t.push(i)}),!this._scrollableParentsResolved){let i=this._scrollDispatcher.getAncestorScrollContainers(this.element).map(r=>r.getElementRef().nativeElement);this._dropListRef.withScrollableParents(i),this._scrollableParentsResolved=!0}if(this.elementContainerSelector){let i=this.element.nativeElement.querySelector(this.elementContainerSelector);e.withElementContainer(i)}e.disabled=this.disabled,e.lockAxis=this.lockAxis,e.sortingDisabled=this.sortingDisabled,e.autoScrollDisabled=this.autoScrollDisabled,e.autoScrollStep=In(this.autoScrollStep,2),e.hasAnchor=this.hasAnchor,e.connectedTo(t.filter(i=>i&&i!==this).map(i=>i._dropListRef)).withOrientation(this.orientation)})}_handleEvents(e){e.beforeStarted.subscribe(()=>{this._syncItemsWithRef(this.getSortedItems().map(t=>t._dragRef)),this._changeDetectorRef.markForCheck()}),e.entered.subscribe(t=>{this.entered.emit({container:this,item:t.item.data,currentIndex:t.currentIndex})}),e.exited.subscribe(t=>{this.exited.emit({container:this,item:t.item.data}),this._changeDetectorRef.markForCheck()}),e.sorted.subscribe(t=>{this.sorted.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,container:this,item:t.item.data})}),e.dropped.subscribe(t=>{this.dropped.emit({previousIndex:t.previousIndex,currentIndex:t.currentIndex,previousContainer:t.previousContainer.data,container:t.container.data,item:t.item.data,isPointerOverContainer:t.isPointerOverContainer,distance:t.distance,dropPoint:t.dropPoint,event:t.event}),this._changeDetectorRef.markForCheck()}),Kt(e.receivingStarted,e.receivingStopped).subscribe(()=>this._changeDetectorRef.markForCheck())}_assignDefaults(e){let{lockAxis:t,draggingDisabled:i,sortingDisabled:r,listAutoScrollDisabled:s,listOrientation:a}=e;this.disabled=i??!1,this.sortingDisabled=r??!1,this.autoScrollDisabled=s??!1,this.orientation=a||"vertical",this.lockAxis=t||null}_syncItemsWithRef(e){this._latestSortedRefs=e,this._dropListRef.withItems(e)}static \u0275fac=function(t){return new(t||n)};static \u0275dir=H({type:n,selectors:[["","cdkDropList",""],["cdk-drop-list"]],hostAttrs:[1,"cdk-drop-list"],hostVars:7,hostBindings:function(t,i){t&2&&(I("id",i.id),Ce("cdk-drop-list-disabled",i.disabled)("cdk-drop-list-dragging",i._dropListRef.isDragging())("cdk-drop-list-receiving",i._dropListRef.isReceiving()))},inputs:{connectedTo:[0,"cdkDropListConnectedTo","connectedTo"],data:[0,"cdkDropListData","data"],orientation:[0,"cdkDropListOrientation","orientation"],id:"id",lockAxis:[0,"cdkDropListLockAxis","lockAxis"],disabled:[2,"cdkDropListDisabled","disabled",v],sortingDisabled:[2,"cdkDropListSortingDisabled","sortingDisabled",v],enterPredicate:[0,"cdkDropListEnterPredicate","enterPredicate"],sortPredicate:[0,"cdkDropListSortPredicate","sortPredicate"],autoScrollDisabled:[2,"cdkDropListAutoScrollDisabled","autoScrollDisabled",v],autoScrollStep:[0,"cdkDropListAutoScrollStep","autoScrollStep"],elementContainerSelector:[0,"cdkDropListElementContainer","elementContainerSelector"],hasAnchor:[2,"cdkDropListHasAnchor","hasAnchor",v]},outputs:{dropped:"cdkDropListDropped",entered:"cdkDropListEntered",exited:"cdkDropListExited",sorted:"cdkDropListSorted"},exportAs:["cdkDropList"],features:[R([{provide:Pr,useValue:void 0},{provide:Lr,useExisting:n}])]})}return n})();var $r=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=te({type:n});static \u0275inj=ee({providers:[rl],imports:[gr]})}return n})();var jr=`
    .p-iconfield {
        position: relative;
        display: block;
    }

    .p-inputicon {
        position: absolute;
        top: 50%;
        margin-top: calc(-1 * (dt('icon.size') / 2));
        color: dt('iconfield.icon.color');
        line-height: 1;
        z-index: 1;
    }

    .p-iconfield .p-inputicon:first-child {
        inset-inline-start: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputicon:last-child {
        inset-inline-end: dt('form.field.padding.x');
    }

    .p-iconfield .p-inputtext:not(:first-child),
    .p-iconfield .p-inputwrapper:not(:first-child) .p-inputtext {
        padding-inline-start: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield .p-inputtext:not(:last-child) {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-iconfield:has(.p-inputfield-sm) .p-inputicon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
        margin-top: calc(-1 * (dt('form.field.sm.font.size') / 2));
    }

    .p-iconfield:has(.p-inputfield-lg) .p-inputicon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
        margin-top: calc(-1 * (dt('form.field.lg.font.size') / 2));
    }
`;var ll=["*"],dl={root:({instance:n})=>["p-iconfield",{"p-iconfield-left":n.iconPosition=="left","p-iconfield-right":n.iconPosition=="right"}]},Gr=(()=>{class n extends j{name="iconfield";style=jr;classes=dl;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275prov=T({token:n,factory:n.\u0275fac})}return n})();var Ur=new O("ICONFIELD_INSTANCE"),Wr=(()=>{class n extends ce{componentName="IconField";hostName="";_componentStyle=p(Gr);$pcIconField=p(Ur,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(S,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}iconPosition="left";styleClass;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275cmp=P({type:n,selectors:[["p-iconfield"],["p-iconField"],["p-icon-field"]],hostVars:2,hostBindings:function(t,i){t&2&&_(i.cn(i.cx("root"),i.styleClass))},inputs:{hostName:"hostName",iconPosition:"iconPosition",styleClass:"styleClass"},features:[R([Gr,{provide:Ur,useExisting:n},{provide:oe,useExisting:n}]),re([S]),k],ngContentSelectors:ll,decls:1,vars:0,template:function(t,i){t&1&&(ye(),me(0))},dependencies:[pe,Pe],encapsulation:2,changeDetection:0})}return n})();var cl=["*"],ul={root:"p-inputicon"},qr=(()=>{class n extends j{name="inputicon";classes=ul;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275prov=T({token:n,factory:n.\u0275fac})}return n})(),Kr=new O("INPUTICON_INSTANCE"),Qr=(()=>{class n extends ce{componentName="InputIcon";hostName="";styleClass;_componentStyle=p(qr);$pcInputIcon=p(Kr,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(S,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275cmp=P({type:n,selectors:[["p-inputicon"],["p-inputIcon"]],hostVars:2,hostBindings:function(t,i){t&2&&_(i.cn(i.cx("root"),i.styleClass))},inputs:{hostName:"hostName",styleClass:"styleClass"},features:[R([qr,{provide:Kr,useExisting:n},{provide:oe,useExisting:n}]),re([S]),k],ngContentSelectors:cl,decls:1,vars:0,template:function(t,i){t&1&&(ye(),me(0))},dependencies:[pe,be,Pe],encapsulation:2,changeDetection:0})}return n})();var Zr=["content"],pl=["item"],hl=["loader"],fl=["loadericon"],gl=["element"],ml=["*"],yi=(n,o)=>({$implicit:n,options:o}),bl=n=>({numCols:n}),Jr=n=>({options:n}),_l=()=>({styleClass:"p-virtualscroller-loading-icon"}),vl=(n,o)=>({rows:n,columns:o});function yl(n,o){n&1&&de(0)}function xl(n,o){if(n&1&&(Y(0),y(1,yl,1,0,"ng-container",10),X()),n&2){let e=c(2);d(),u("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Se(2,yi,e.loadedItems,e.getContentOptions()))}}function Cl(n,o){n&1&&de(0)}function kl(n,o){if(n&1&&(Y(0),y(1,Cl,1,0,"ng-container",10),X()),n&2){let e=o.$implicit,t=o.index,i=c(3);d(),u("ngTemplateOutlet",i.itemTemplate||i._itemTemplate)("ngTemplateOutletContext",Se(2,yi,e,i.getOptions(t)))}}function wl(n,o){if(n&1&&(b(0,"div",11,3),y(2,kl,2,5,"ng-container",12),m()),n&2){let e=c(2);Qe(e.contentStyle),_(e.cn(e.cx("content"),e.contentStyleClass)),u("pBind",e.ptm("content")),d(2),u("ngForOf",e.loadedItems)("ngForTrackBy",e._trackBy)}}function Sl(n,o){if(n&1&&Q(0,"div",13),n&2){let e=c(2);_(e.cx("spacer")),u("ngStyle",e.spacerStyle)("pBind",e.ptm("spacer"))}}function Dl(n,o){n&1&&de(0)}function Il(n,o){if(n&1&&(Y(0),y(1,Dl,1,0,"ng-container",10),X()),n&2){let e=o.index,t=c(4);d(),u("ngTemplateOutlet",t.loaderTemplate||t._loaderTemplate)("ngTemplateOutletContext",ke(4,Jr,t.getLoaderOptions(e,t.both&&ke(2,bl,t.numItemsInViewport.cols))))}}function El(n,o){if(n&1&&(Y(0),y(1,Il,2,6,"ng-container",14),X()),n&2){let e=c(3);d(),u("ngForOf",e.loaderArr)}}function Tl(n,o){n&1&&de(0)}function Ml(n,o){if(n&1&&(Y(0),y(1,Tl,1,0,"ng-container",10),X()),n&2){let e=c(4);d(),u("ngTemplateOutlet",e.loaderIconTemplate||e._loaderIconTemplate)("ngTemplateOutletContext",ke(3,Jr,en(2,_l)))}}function Fl(n,o){if(n&1&&(le(),Q(0,"svg",15)),n&2){let e=c(4);_(e.cx("loadingIcon")),u("spin",!0)("pBind",e.ptm("loadingIcon"))}}function Pl(n,o){if(n&1&&y(0,Ml,2,5,"ng-container",6)(1,Fl,1,4,"ng-template",null,5,Fe),n&2){let e=Ke(2),t=c(3);u("ngIf",t.loaderIconTemplate||t._loaderIconTemplate)("ngIfElse",e)}}function Vl(n,o){if(n&1&&(b(0,"div",11),y(1,El,2,1,"ng-container",6)(2,Pl,3,2,"ng-template",null,4,Fe),m()),n&2){let e=Ke(3),t=c(2);_(t.cx("loader")),u("pBind",t.ptm("loader")),d(),u("ngIf",t.loaderTemplate||t._loaderTemplate)("ngIfElse",e)}}function Ol(n,o){if(n&1){let e=$e();Y(0),b(1,"div",7,1),B("scroll",function(i){se(e);let r=c();return ae(r.onContainerScroll(i))}),y(3,xl,2,5,"ng-container",6)(4,wl,3,7,"ng-template",null,2,Fe)(6,Sl,1,4,"div",8)(7,Vl,4,5,"div",9),m(),X()}if(n&2){let e=Ke(5),t=c();d(),_(t.cn(t.cx("root"),t.styleClass)),u("ngStyle",t._style)("pBind",t.ptm("root")),I("id",t._id)("tabindex",t.tabindex),d(2),u("ngIf",t.contentTemplate||t._contentTemplate)("ngIfElse",e),d(3),u("ngIf",t._showSpacer),d(),u("ngIf",!t.loaderDisabled&&t._showLoader&&t.d_loading)}}function Nl(n,o){n&1&&de(0)}function Rl(n,o){if(n&1&&(Y(0),y(1,Nl,1,0,"ng-container",10),X()),n&2){let e=c(2);d(),u("ngTemplateOutlet",e.contentTemplate||e._contentTemplate)("ngTemplateOutletContext",Se(5,yi,e.items,Se(2,vl,e._items,e.loadedColumns)))}}function Al(n,o){if(n&1&&(me(0),y(1,Rl,2,8,"ng-container",16)),n&2){let e=c();d(),u("ngIf",e.contentTemplate||e._contentTemplate)}}var Bl=`
.p-virtualscroller {
    position: relative;
    overflow: auto;
    contain: strict;
    transform: translateZ(0);
    will-change: scroll-position;
    outline: 0 none;
}

.p-virtualscroller-content {
    position: absolute;
    top: 0;
    left: 0;
    min-height: 100%;
    min-width: 100%;
    will-change: transform;
}

.p-virtualscroller-spacer {
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 1px;
    transform-origin: 0 0;
    pointer-events: none;
}

.p-virtualscroller-loader {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: dt('virtualscroller.loader.mask.background');
    color: dt('virtualscroller.loader.mask.color');
}

.p-virtualscroller-loader-mask {
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-virtualscroller-loading-icon {
    font-size: dt('virtualscroller.loader.icon.size');
    width: dt('virtualscroller.loader.icon.size');
    height: dt('virtualscroller.loader.icon.size');
}

.p-virtualscroller-horizontal > .p-virtualscroller-content {
    display: flex;
}

.p-virtualscroller-inline .p-virtualscroller-content {
    position: static;
}
`,Ll={root:({instance:n})=>["p-virtualscroller",{"p-virtualscroller-inline":n.inline,"p-virtualscroller-both p-both-scroll":n.both,"p-virtualscroller-horizontal p-horizontal-scroll":n.horizontal}],content:"p-virtualscroller-content",spacer:"p-virtualscroller-spacer",loader:({instance:n})=>["p-virtualscroller-loader",{"p-virtualscroller-loader-mask":!n.loaderTemplate}],loadingIcon:"p-virtualscroller-loading-icon"},Yr=(()=>{class n extends j{name="virtualscroller";css=Bl;classes=Ll;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275prov=T({token:n,factory:n.\u0275fac})}return n})();var Xr=new O("SCROLLER_INSTANCE"),es=(()=>{class n extends ce{zone;componentName="VirtualScroller";bindDirectiveInstance=p(S,{self:!0});$pcScroller=p(Xr,{optional:!0,skipSelf:!0})??void 0;hostName="";get id(){return this._id}set id(e){this._id=e}get style(){return this._style}set style(e){this._style=e}get styleClass(){return this._styleClass}set styleClass(e){this._styleClass=e}get tabindex(){return this._tabindex}set tabindex(e){this._tabindex=e}get items(){return this._items}set items(e){this._items=e}get itemSize(){return this._itemSize}set itemSize(e){this._itemSize=e}get scrollHeight(){return this._scrollHeight}set scrollHeight(e){this._scrollHeight=e}get scrollWidth(){return this._scrollWidth}set scrollWidth(e){this._scrollWidth=e}get orientation(){return this._orientation}set orientation(e){this._orientation=e}get step(){return this._step}set step(e){this._step=e}get delay(){return this._delay}set delay(e){this._delay=e}get resizeDelay(){return this._resizeDelay}set resizeDelay(e){this._resizeDelay=e}get appendOnly(){return this._appendOnly}set appendOnly(e){this._appendOnly=e}get inline(){return this._inline}set inline(e){this._inline=e}get lazy(){return this._lazy}set lazy(e){this._lazy=e}get disabled(){return this._disabled}set disabled(e){this._disabled=e}get loaderDisabled(){return this._loaderDisabled}set loaderDisabled(e){this._loaderDisabled=e}get columns(){return this._columns}set columns(e){this._columns=e}get showSpacer(){return this._showSpacer}set showSpacer(e){this._showSpacer=e}get showLoader(){return this._showLoader}set showLoader(e){this._showLoader=e}get numToleratedItems(){return this._numToleratedItems}set numToleratedItems(e){this._numToleratedItems=e}get loading(){return this._loading}set loading(e){this._loading=e}get autoSize(){return this._autoSize}set autoSize(e){this._autoSize=e}get trackBy(){return this._trackBy}set trackBy(e){this._trackBy=e}get options(){return this._options}set options(e){this._options=e,e&&typeof e=="object"&&(Object.entries(e).forEach(([t,i])=>this[`_${t}`]!==i&&(this[`_${t}`]=i)),Object.entries(e).forEach(([t,i])=>this[`${t}`]!==i&&(this[`${t}`]=i)))}onLazyLoad=new E;onScroll=new E;onScrollIndexChange=new E;elementViewChild;contentViewChild;height;_id;_style;_styleClass;_tabindex=0;_items;_itemSize=0;_scrollHeight;_scrollWidth;_orientation="vertical";_step=0;_delay=0;_resizeDelay=10;_appendOnly=!1;_inline=!1;_lazy=!1;_disabled=!1;_loaderDisabled=!1;_columns;_showSpacer=!0;_showLoader=!1;_numToleratedItems;_loading;_autoSize=!1;_trackBy;_options;d_loading=!1;d_numToleratedItems;contentEl;contentTemplate;itemTemplate;loaderTemplate;loaderIconTemplate;templates;_contentTemplate;_itemTemplate;_loaderTemplate;_loaderIconTemplate;first=0;last=0;page=0;isRangeChanged=!1;numItemsInViewport=0;lastScrollPos=0;lazyLoadState={};loaderArr=[];spacerStyle={};contentStyle={};scrollTimeout;resizeTimeout;initialized=!1;windowResizeListener;defaultWidth;defaultHeight;defaultContentWidth;defaultContentHeight;_contentStyleClass;get contentStyleClass(){return this._contentStyleClass}set contentStyleClass(e){this._contentStyleClass=e}get vertical(){return this._orientation==="vertical"}get horizontal(){return this._orientation==="horizontal"}get both(){return this._orientation==="both"}get loadedItems(){return this._items&&!this.d_loading?this.both?this._items.slice(this._appendOnly?0:this.first.rows,this.last.rows).map(e=>this._columns?e:Array.isArray(e)?e.slice(this._appendOnly?0:this.first.cols,this.last.cols):e):this.horizontal&&this._columns?this._items:this._items.slice(this._appendOnly?0:this.first,this.last):[]}get loadedRows(){return this.d_loading?this._loaderDisabled?this.loaderArr:[]:this.loadedItems}get loadedColumns(){return this._columns&&(this.both||this.horizontal)?this.d_loading&&this._loaderDisabled?this.both?this.loaderArr[0]:this.loaderArr:this._columns.slice(this.both?this.first.cols:this.first,this.both?this.last.cols:this.last):this._columns}_componentStyle=p(Yr);constructor(e){super(),this.zone=e}onInit(){this.setInitialState()}onChanges(e){let t=!1;if(this.scrollHeight=="100%"&&(this.height="100%"),e.loading){let{previousValue:i,currentValue:r}=e.loading;this.lazy&&i!==r&&r!==this.d_loading&&(this.d_loading=r,t=!0)}if(e.orientation&&(this.lastScrollPos=this.both?{top:0,left:0}:0),e.numToleratedItems){let{previousValue:i,currentValue:r}=e.numToleratedItems;i!==r&&r!==this.d_numToleratedItems&&(this.d_numToleratedItems=r)}if(e.options){let{previousValue:i,currentValue:r}=e.options;this.lazy&&i?.loading!==r?.loading&&r?.loading!==this.d_loading&&(this.d_loading=r.loading,t=!0),i?.numToleratedItems!==r?.numToleratedItems&&r?.numToleratedItems!==this.d_numToleratedItems&&(this.d_numToleratedItems=r.numToleratedItems)}this.initialized&&!t&&(e.items?.previousValue?.length!==e.items?.currentValue?.length||e.itemSize||e.scrollHeight||e.scrollWidth)&&this.init()}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"item":this._itemTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;case"loadericon":this._loaderIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}onAfterViewInit(){Promise.resolve().then(()=>{this.viewInit()})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host")),this.initialized||this.viewInit()}onDestroy(){this.unbindResizeListener(),this.contentEl=null,this.initialized=!1}viewInit(){je(this.platformId)&&!this.initialized&&jn(this.elementViewChild?.nativeElement)&&(this.setInitialState(),this.setContentEl(this.contentEl),this.init(),this.defaultWidth=Ue(this.elementViewChild?.nativeElement),this.defaultHeight=Ge(this.elementViewChild?.nativeElement),this.defaultContentWidth=Ue(this.contentEl),this.defaultContentHeight=Ge(this.contentEl),this.initialized=!0)}init(){this._disabled||(this.bindResizeListener(),setTimeout(()=>{this.setSpacerSize(),this.setSize(),this.calculateOptions(),this.calculateAutoSize(),this.cd.detectChanges()},1))}setContentEl(e){this.contentEl=e||this.contentViewChild?.nativeElement||rn(this.elementViewChild?.nativeElement,".p-virtualscroller-content")}setInitialState(){this.first=this.both?{rows:0,cols:0}:0,this.last=this.both?{rows:0,cols:0}:0,this.numItemsInViewport=this.both?{rows:0,cols:0}:0,this.lastScrollPos=this.both?{top:0,left:0}:0,(this.d_loading===void 0||this.d_loading===!1)&&(this.d_loading=this._loading||!1),this.d_numToleratedItems=this._numToleratedItems,this.loaderArr=this.loaderArr.length>0?this.loaderArr:[]}getElementRef(){return this.elementViewChild}getPageByFirst(e){return Math.floor(((e??this.first)+this.d_numToleratedItems*4)/(this._step||1))}isPageChanged(e){return this._step?this.page!==this.getPageByFirst(e??this.first):!0}scrollTo(e){this.elementViewChild?.nativeElement?.scrollTo(e)}scrollToIndex(e,t="auto"){if(this.both?e.every(r=>r>-1):e>-1){let r=this.first,{scrollTop:s=0,scrollLeft:a=0}=this.elementViewChild?.nativeElement,{numToleratedItems:l}=this.calculateNumItems(),h=this.getContentPosition(),f=this.itemSize,C=(L=0,W)=>L<=W?0:L,N=(L,W,J)=>L*W+J,z=(L=0,W=0)=>this.scrollTo({left:L,top:W,behavior:t}),U=this.both?{rows:0,cols:0}:0,ue=!1,D=!1;this.both?(U={rows:C(e[0],l[0]),cols:C(e[1],l[1])},z(N(U.cols,f[1],h.left),N(U.rows,f[0],h.top)),D=this.lastScrollPos.top!==s||this.lastScrollPos.left!==a,ue=U.rows!==r.rows||U.cols!==r.cols):(U=C(e,l),this.horizontal?z(N(U,f,h.left),s):z(a,N(U,f,h.top)),D=this.lastScrollPos!==(this.horizontal?a:s),ue=U!==r),this.isRangeChanged=ue,D&&(this.first=U)}}scrollInView(e,t,i="auto"){if(t){let{first:r,viewport:s}=this.getRenderedRange(),a=(f=0,C=0)=>this.scrollTo({left:f,top:C,behavior:i}),l=t==="to-start",h=t==="to-end";if(l){if(this.both)s.first.rows-r.rows>e[0]?a(s.first.cols*this._itemSize[1],(s.first.rows-1)*this._itemSize[0]):s.first.cols-r.cols>e[1]&&a((s.first.cols-1)*this._itemSize[1],s.first.rows*this._itemSize[0]);else if(s.first-r>e){let f=(s.first-1)*this._itemSize;this.horizontal?a(f,0):a(0,f)}}else if(h){if(this.both)s.last.rows-r.rows<=e[0]+1?a(s.first.cols*this._itemSize[1],(s.first.rows+1)*this._itemSize[0]):s.last.cols-r.cols<=e[1]+1&&a((s.first.cols+1)*this._itemSize[1],s.first.rows*this._itemSize[0]);else if(s.last-r<=e+1){let f=(s.first+1)*this._itemSize;this.horizontal?a(f,0):a(0,f)}}}else this.scrollToIndex(e,i)}getRenderedRange(){let e=(r,s)=>s||r?Math.floor(r/(s||r)):0,t=this.first,i=0;if(this.elementViewChild?.nativeElement){let{scrollTop:r,scrollLeft:s}=this.elementViewChild.nativeElement;if(this.both)t={rows:e(r,this._itemSize[0]),cols:e(s,this._itemSize[1])},i={rows:t.rows+this.numItemsInViewport.rows,cols:t.cols+this.numItemsInViewport.cols};else{let a=this.horizontal?s:r;t=e(a,this._itemSize),i=t+this.numItemsInViewport}}return{first:this.first,last:this.last,viewport:{first:t,last:i}}}calculateNumItems(){let e=this.getContentPosition(),t=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetWidth-e.left:0)||0,i=(this.elementViewChild?.nativeElement?this.elementViewChild.nativeElement.offsetHeight-e.top:0)||0,r=(h,f)=>f||h?Math.ceil(h/(f||h)):0,s=h=>Math.ceil(h/2),a=this.both?{rows:r(i,this._itemSize[0]),cols:r(t,this._itemSize[1])}:r(this.horizontal?t:i,this._itemSize),l=this.d_numToleratedItems||(this.both?[s(a.rows),s(a.cols)]:s(a));return{numItemsInViewport:a,numToleratedItems:l}}calculateOptions(){let{numItemsInViewport:e,numToleratedItems:t}=this.calculateNumItems(),i=(a,l,h,f=!1)=>this.getLast(a+l+(a<h?2:3)*h,f),r=this.first,s=this.both?{rows:i(this.first.rows,e.rows,t[0]),cols:i(this.first.cols,e.cols,t[1],!0)}:i(this.first,e,t);this.last=s,this.numItemsInViewport=e,this.d_numToleratedItems=t,this._showLoader&&(this.loaderArr=this.both?Array.from({length:e.rows}).map(()=>Array.from({length:e.cols})):Array.from({length:e})),this._lazy&&Promise.resolve().then(()=>{this.lazyLoadState={first:this._step?this.both?{rows:0,cols:r.cols}:0:r,last:Math.min(this._step?this._step:this.last,this._items.length)},this.handleEvents("onLazyLoad",this.lazyLoadState)})}calculateAutoSize(){this._autoSize&&!this.d_loading&&Promise.resolve().then(()=>{if(this.contentEl){this.contentEl.style.minHeight=this.contentEl.style.minWidth="auto",this.contentEl.style.position="relative",this.elementViewChild.nativeElement.style.contain="none";let[e,t]=[Ue(this.contentEl),Ge(this.contentEl)];e!==this.defaultContentWidth&&(this.elementViewChild.nativeElement.style.width=""),t!==this.defaultContentHeight&&(this.elementViewChild.nativeElement.style.height="");let[i,r]=[Ue(this.elementViewChild.nativeElement),Ge(this.elementViewChild.nativeElement)];(this.both||this.horizontal)&&(this.elementViewChild.nativeElement.style.width=i<this.defaultWidth?i+"px":this._scrollWidth||this.defaultWidth+"px"),(this.both||this.vertical)&&(this.elementViewChild.nativeElement.style.height=r<this.defaultHeight?r+"px":this._scrollHeight||this.defaultHeight+"px"),this.contentEl.style.minHeight=this.contentEl.style.minWidth="",this.contentEl.style.position="",this.elementViewChild.nativeElement.style.contain=""}})}getLast(e=0,t=!1){return this._items?Math.min(t?(this._columns||this._items[0]).length:this._items.length,e):0}getContentPosition(){if(this.contentEl){let e=getComputedStyle(this.contentEl),t=parseFloat(e.paddingLeft)+Math.max(parseFloat(e.left)||0,0),i=parseFloat(e.paddingRight)+Math.max(parseFloat(e.right)||0,0),r=parseFloat(e.paddingTop)+Math.max(parseFloat(e.top)||0,0),s=parseFloat(e.paddingBottom)+Math.max(parseFloat(e.bottom)||0,0);return{left:t,right:i,top:r,bottom:s,x:t+i,y:r+s}}return{left:0,right:0,top:0,bottom:0,x:0,y:0}}setSize(){if(this.elementViewChild?.nativeElement){let e=this.elementViewChild.nativeElement,t=e.parentElement?.parentElement,i=e.offsetWidth,r=t?.offsetWidth||0,s=this._scrollWidth||`${i||r}px`,a=e.offsetHeight,l=t?.offsetHeight||0,h=this._scrollHeight||`${a||l}px`,f=(C,N)=>e.style[C]=N;this.both||this.horizontal?(f("height",h),f("width",s)):f("height",h)}}setSpacerSize(){if(this._items){let e=this.getContentPosition(),t=(i,r,s,a=0)=>this.spacerStyle=he(w({},this.spacerStyle),{[`${i}`]:(r||[]).length*s+a+"px"});this.both?(t("height",this._items,this._itemSize[0],e.y),t("width",this._columns||this._items[1],this._itemSize[1],e.x)):this.horizontal?t("width",this._columns||this._items,this._itemSize,e.x):t("height",this._items,this._itemSize,e.y)}}setContentPosition(e){if(this.contentEl&&!this._appendOnly){let t=e?e.first:this.first,i=(s,a)=>s*a,r=(s=0,a=0)=>this.contentStyle=he(w({},this.contentStyle),{transform:`translate3d(${s}px, ${a}px, 0)`});if(this.both)r(i(t.cols,this._itemSize[1]),i(t.rows,this._itemSize[0]));else{let s=i(t,this._itemSize);this.horizontal?r(s,0):r(0,s)}}}onScrollPositionChange(e){let t=e.target;if(!t)throw new Error("Event target is null");let i=this.getContentPosition(),r=(D,L)=>D?D>L?D-L:D:0,s=(D,L)=>L||D?Math.floor(D/(L||D)):0,a=(D,L,W,J,Ie,ze)=>D<=Ie?Ie:ze?W-J-Ie:L+Ie-1,l=(D,L,W,J,Ie,ze,Wt)=>D<=ze?0:Math.max(0,Wt?D<L?W:D-ze:D>L?W:D-2*ze),h=(D,L,W,J,Ie,ze=!1)=>{let Wt=L+J+2*Ie;return D>=Ie&&(Wt+=Ie+1),this.getLast(Wt,ze)},f=r(t.scrollTop,i.top),C=r(t.scrollLeft,i.left),N=this.both?{rows:0,cols:0}:0,z=this.last,U=!1,ue=this.lastScrollPos;if(this.both){let D=this.lastScrollPos.top<=f,L=this.lastScrollPos.left<=C;if(!this._appendOnly||this._appendOnly&&(D||L)){let W={rows:s(f,this._itemSize[0]),cols:s(C,this._itemSize[1])},J={rows:a(W.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],D),cols:a(W.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],L)};N={rows:l(W.rows,J.rows,this.first.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0],D),cols:l(W.cols,J.cols,this.first.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],L)},z={rows:h(W.rows,N.rows,this.last.rows,this.numItemsInViewport.rows,this.d_numToleratedItems[0]),cols:h(W.cols,N.cols,this.last.cols,this.numItemsInViewport.cols,this.d_numToleratedItems[1],!0)},U=N.rows!==this.first.rows||z.rows!==this.last.rows||N.cols!==this.first.cols||z.cols!==this.last.cols||this.isRangeChanged,ue={top:f,left:C}}}else{let D=this.horizontal?C:f,L=this.lastScrollPos<=D;if(!this._appendOnly||this._appendOnly&&L){let W=s(D,this._itemSize),J=a(W,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,L);N=l(W,J,this.first,this.last,this.numItemsInViewport,this.d_numToleratedItems,L),z=h(W,N,this.last,this.numItemsInViewport,this.d_numToleratedItems),U=N!==this.first||z!==this.last||this.isRangeChanged,ue=D}}return{first:N,last:z,isRangeChanged:U,scrollPos:ue}}onScrollChange(e){let{first:t,last:i,isRangeChanged:r,scrollPos:s}=this.onScrollPositionChange(e);if(r){let a={first:t,last:i};if(this.setContentPosition(a),this.first=t,this.last=i,this.lastScrollPos=s,this.handleEvents("onScrollIndexChange",a),this._lazy&&this.isPageChanged(t)){let l={first:this._step?Math.min(this.getPageByFirst(t)*this._step,this._items.length-this._step):t,last:Math.min(this._step?(this.getPageByFirst(t)+1)*this._step:i,this._items.length)};(this.lazyLoadState.first!==l.first||this.lazyLoadState.last!==l.last)&&this.handleEvents("onLazyLoad",l),this.lazyLoadState=l}}}onContainerScroll(e){if(this.handleEvents("onScroll",{originalEvent:e}),this._delay){if(this.scrollTimeout&&clearTimeout(this.scrollTimeout),!this.d_loading&&this._showLoader){let{isRangeChanged:t}=this.onScrollPositionChange(e);(t||this._step&&this.isPageChanged())&&(this.d_loading=!0,this.cd.detectChanges())}this.scrollTimeout=setTimeout(()=>{this.onScrollChange(e),this.d_loading&&this._showLoader&&(!this._lazy||this._loading===void 0)&&(this.d_loading=!1,this.page=this.getPageByFirst()),this.cd.detectChanges()},this._delay)}else!this.d_loading&&this.onScrollChange(e)}bindResizeListener(){je(this.platformId)&&(this.windowResizeListener||this.zone.runOutsideAngular(()=>{let e=this.document.defaultView,t=Yi()?"orientationchange":"resize";this.windowResizeListener=this.renderer.listen(e,t,this.onWindowResize.bind(this))}))}unbindResizeListener(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null)}onWindowResize(){this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{if(jn(this.elementViewChild?.nativeElement)){let[e,t]=[Ue(this.elementViewChild?.nativeElement),Ge(this.elementViewChild?.nativeElement)],[i,r]=[e!==this.defaultWidth,t!==this.defaultHeight];(this.both?i||r:this.horizontal?i:this.vertical&&r)&&this.zone.run(()=>{this.d_numToleratedItems=this._numToleratedItems,this.defaultWidth=e,this.defaultHeight=t,this.defaultContentWidth=Ue(this.contentEl),this.defaultContentHeight=Ge(this.contentEl),this.init()})}},this._resizeDelay)}handleEvents(e,t){return this.options&&this.options[e]?this.options[e](t):this[e].emit(t)}getContentOptions(){return{contentStyleClass:`p-virtualscroller-content ${this.d_loading?"p-virtualscroller-loading":""}`,items:this.loadedItems,getItemOptions:e=>this.getOptions(e),loading:this.d_loading,getLoaderOptions:(e,t)=>this.getLoaderOptions(e,t),itemSize:this._itemSize,rows:this.loadedRows,columns:this.loadedColumns,spacerStyle:this.spacerStyle,contentStyle:this.contentStyle,vertical:this.vertical,horizontal:this.horizontal,both:this.both,scrollTo:this.scrollTo.bind(this),scrollToIndex:this.scrollToIndex.bind(this),orientation:this._orientation,scrollableElement:this.elementViewChild?.nativeElement}}getOptions(e){let t=(this._items||[]).length,i=this.both?this.first.rows+e:this.first+e;return{index:i,count:t,first:i===0,last:i===t-1,even:i%2===0,odd:i%2!==0}}getLoaderOptions(e,t){let i=this.loaderArr.length;return w({index:e,count:i,first:e===0,last:e===i-1,even:e%2===0,odd:e%2!==0,loading:this.d_loading},t)}static \u0275fac=function(t){return new(t||n)(Z(Me))};static \u0275cmp=P({type:n,selectors:[["p-scroller"],["p-virtualscroller"],["p-virtual-scroller"],["p-virtualScroller"]],contentQueries:function(t,i,r){if(t&1&&Je(r,Zr,4)(r,pl,4)(r,hl,4)(r,fl,4)(r,rt,4),t&2){let s;M(s=F())&&(i.contentTemplate=s.first),M(s=F())&&(i.itemTemplate=s.first),M(s=F())&&(i.loaderTemplate=s.first),M(s=F())&&(i.loaderIconTemplate=s.first),M(s=F())&&(i.templates=s)}},viewQuery:function(t,i){if(t&1&&qe(gl,5)(Zr,5),t&2){let r;M(r=F())&&(i.elementViewChild=r.first),M(r=F())&&(i.contentViewChild=r.first)}},hostVars:2,hostBindings:function(t,i){t&2&&et("height",i.height)},inputs:{hostName:"hostName",id:"id",style:"style",styleClass:"styleClass",tabindex:"tabindex",items:"items",itemSize:"itemSize",scrollHeight:"scrollHeight",scrollWidth:"scrollWidth",orientation:"orientation",step:"step",delay:"delay",resizeDelay:"resizeDelay",appendOnly:"appendOnly",inline:"inline",lazy:"lazy",disabled:"disabled",loaderDisabled:"loaderDisabled",columns:"columns",showSpacer:"showSpacer",showLoader:"showLoader",numToleratedItems:"numToleratedItems",loading:"loading",autoSize:"autoSize",trackBy:"trackBy",options:"options"},outputs:{onLazyLoad:"onLazyLoad",onScroll:"onScroll",onScrollIndexChange:"onScrollIndexChange"},features:[R([Yr,{provide:Xr,useExisting:n},{provide:oe,useExisting:n}]),re([S]),k],ngContentSelectors:ml,decls:3,vars:2,consts:[["disabledContainer",""],["element",""],["buildInContent",""],["content",""],["buildInLoader",""],["buildInLoaderIcon",""],[4,"ngIf","ngIfElse"],[3,"scroll","ngStyle","pBind"],[3,"class","ngStyle","pBind",4,"ngIf"],[3,"class","pBind",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"ngStyle","pBind"],[4,"ngFor","ngForOf"],["data-p-icon","spinner",3,"spin","pBind"],[4,"ngIf"]],template:function(t,i){if(t&1&&(ye(),y(0,Ol,8,10,"ng-container",6)(1,Al,2,1,"ng-template",null,0,Fe)),t&2){let r=Ke(2);u("ngIf",!i._disabled)("ngIfElse",r)}},dependencies:[pe,on,it,ot,vt,Cn,be,S],encapsulation:2})}return n})();var ts=`
    .p-listbox {
        display: block;
        background: dt('listbox.background');
        color: dt('listbox.color');
        border: 1px solid dt('listbox.border.color');
        border-radius: dt('listbox.border.radius');
        transition:
            background dt('listbox.transition.duration'),
            color dt('listbox.transition.duration'),
            border-color dt('listbox.transition.duration'),
            box-shadow dt('listbox.transition.duration'),
            outline-color dt('listbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('listbox.shadow');
    }

    .p-listbox.p-disabled {
        opacity: 1;
        background: dt('listbox.disabled.background');
        color: dt('listbox.disabled.color');
    }

    .p-listbox.p-disabled .p-listbox-option {
        color: dt('listbox.disabled.color');
    }

    .p-listbox.p-invalid {
        border-color: dt('listbox.invalid.border.color');
    }

    .p-listbox-header {
        padding: dt('listbox.list.header.padding');
    }

    .p-listbox-filter {
        width: 100%;
    }

    .p-listbox-list-container {
        overflow: auto;
    }

    .p-listbox-list {
        list-style-type: none;
        margin: 0;
        padding: dt('listbox.list.padding');
        outline: 0 none;
        display: flex;
        flex-direction: column;
        gap: dt('listbox.list.gap');
    }

    .p-listbox-option {
        display: flex;
        align-items: center;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        padding: dt('listbox.option.padding');
        border: 0 none;
        border-radius: dt('listbox.option.border.radius');
        color: dt('listbox.option.color');
        transition:
            background dt('listbox.transition.duration'),
            color dt('listbox.transition.duration'),
            border-color dt('listbox.transition.duration'),
            box-shadow dt('listbox.transition.duration'),
            outline-color dt('listbox.transition.duration');
    }

    .p-listbox-striped li:nth-child(even of .p-listbox-option) {
        background: dt('listbox.option.striped.background');
    }

    .p-listbox .p-listbox-list .p-listbox-option.p-listbox-option-selected {
        background: dt('listbox.option.selected.background');
        color: dt('listbox.option.selected.color');
    }

    .p-listbox:not(.p-disabled) .p-listbox-option.p-listbox-option-selected.p-focus {
        background: dt('listbox.option.selected.focus.background');
        color: dt('listbox.option.selected.focus.color');
    }

    .p-listbox:not(.p-disabled) .p-listbox-option:not(.p-listbox-option-selected):not(.p-disabled).p-focus {
        background: dt('listbox.option.focus.background');
        color: dt('listbox.option.focus.color');
    }

    .p-listbox:not(.p-disabled) .p-listbox-option:not(.p-listbox-option-selected):not(.p-disabled):hover {
        background: dt('listbox.option.focus.background');
        color: dt('listbox.option.focus.color');
    }

    .p-listbox-option-blank-icon {
        flex-shrink: 0;
    }

    .p-listbox-option-check-icon {
        position: relative;
        flex-shrink: 0;
        margin-inline-start: dt('listbox.checkmark.gutter.start');
        margin-inline-end: dt('listbox.checkmark.gutter.end');
        color: dt('listbox.checkmark.color');
    }

    .p-listbox-option-group {
        margin: 0;
        padding: dt('listbox.option.group.padding');
        color: dt('listbox.option.group.color');
        background: dt('listbox.option.group.background');
        font-weight: dt('listbox.option.group.font.weight');
    }

    .p-listbox-empty-message {
        padding: dt('listbox.empty.message.padding');
    }

    .p-listbox-fluid {
        width: 100%;
    }
`;var zl=["item"],Hl=["group"],$l=["header"],ns=["filter"],jl=["footer"],Gl=["emptyfilter"],Ul=["empty"],Wl=["filtericon"],ql=["checkicon"],Kl=["checkmark"],Ql=["loader"],Zl=["headerchkbox"],Yl=["lastHiddenFocusableElement"],Xl=["firstHiddenFocusableElement"],Jl=["scroller"],ed=["list"],td=["container"],nd=[[["p-header"]],[["p-footer"]]],id=["p-header","p-footer"],On=(n,o)=>({$implicit:n,options:o}),xi=n=>({$implicit:n}),rs=n=>({options:n}),Ci=n=>({height:n}),od=()=>({}),rd=(n,o,e)=>({option:n,i:o,scrollerOptions:e}),sd=(n,o,e,t)=>({$implicit:n,index:o,selected:e,disabled:t}),ad=n=>({implicit:n});function ld(n,o){n&1&&de(0)}function dd(n,o){if(n&1&&(b(0,"div",21),me(1),y(2,ld,1,0,"ng-container",22),m()),n&2){let e=c();_(e.cx("header")),u("pBind",e.ptm("header")),d(2),u("ngTemplateOutlet",e.headerTemplate||e._headerTemplate)("ngTemplateOutletContext",Se(5,On,e.modelValue(),e.visibleOptions()))}}function cd(n,o){}function ud(n,o){n&1&&y(0,cd,0,0,"ng-template")}function pd(n,o){if(n&1&&y(0,ud,1,0,null,22),n&2){let e=c(4);u("ngTemplateOutlet",e.checkIconTemplate||e._checkIconTemplate)("ngTemplateOutletContext",ke(2,xi,e.allSelected()))}}function hd(n,o){n&1&&(Y(0),y(1,pd,1,4,"ng-template",null,5,Fe),X())}function fd(n,o){if(n&1){let e=$e();b(0,"p-checkbox",25,4),B("onChange",function(i){se(e);let r=c(2);return ae(r.onToggleAll(i))}),y(2,hd,3,0,"ng-container",18),m()}if(n&2){let e=c(2);_(e.cx("optionCheckIcon")),u("ngModel",e.allSelected())("disabled",e.$disabled())("tabindex",-1)("variant",e.config.inputStyle()==="filled"||e.config.inputVariant()==="filled"?"filled":"outlined")("binary",!0)("pt",e.ptm("pcCheckbox"))("unstyled",e.unstyled()),I("aria-label",e.toggleAllAriaLabel),d(2),u("ngIf",e.checkIconTemplate||e._checkIconTemplate)}}function gd(n,o){n&1&&de(0)}function md(n,o){if(n&1&&(Y(0),y(1,gd,1,0,"ng-container",22),X()),n&2){let e=c(2);d(),u("ngTemplateOutlet",e.filterTemplate||e._filterTemplate)("ngTemplateOutletContext",ke(2,rs,e.filterOptions))}}function bd(n,o){if(n&1&&(le(),Q(0,"svg",31)),n&2){let e=c(4);u("pBind",e.ptm("filterIcon")),I("aria-hidden",!0)}}function _d(n,o){}function vd(n,o){n&1&&y(0,_d,0,0,"ng-template")}function yd(n,o){if(n&1&&(b(0,"span"),y(1,vd,1,0,null,32),m()),n&2){let e=c(4);I("aria-hidden",!0),d(),u("ngTemplateOutlet",e.filterIconTemplate||e._filterIconTemplate)}}function xd(n,o){if(n&1){let e=$e();b(0,"p-iconfield",26)(1,"input",28,6),B("input",function(i){se(e);let r=c(3);return ae(r.onFilterChange(i))})("keydown",function(i){se(e);let r=c(3);return ae(r.onFilterKeyDown(i))})("blur",function(i){se(e);let r=c(3);return ae(r.onFilterBlur(i))}),m(),b(3,"p-inputicon",29),y(4,bd,1,2,"svg",30)(5,yd,2,2,"span",18),m()()}if(n&2){let e=c(3);u("pt",e.ptm("pcFilterContainer"))("unstyled",e.unstyled()),d(),_(e.cx("pcFilter")),u("value",e._filterValue()||"")("pt",e.ptm("pcFilter"))("unstyled",e.unstyled()),I("disabled",e.$disabled()?"":void 0)("aria-owns",e.id+"_list")("aria-activedescendant",e.focusedOptionId)("placeholder",e.filterPlaceHolder)("aria-label",e.ariaFilterLabel)("tabindex",!e.$disabled()&&!e.focused?e.tabindex:-1),d(2),u("pt",e.ptm("pcFilterIconContainer"))("unstyled",e.unstyled()),d(),u("ngIf",!e.filterIconTemplate&&!e._filterIconTemplate),d(),u("ngIf",e.filterIconTemplate||e._filterIconTemplate)}}function Cd(n,o){if(n&1&&(ne(0,xd,6,17,"p-iconfield",26),b(1,"span",27),A(2),m()),n&2){let e=c(2);ie(e.filter?0:-1),d(),u("pBind",e.ptm("hiddenFilterResult")),I("aria-live","polite")("data-p-hidden-accessible",!0),d(),tt(" ",e.filterResultMessageText," ")}}function kd(n,o){if(n&1&&(b(0,"div",21),y(1,fd,3,11,"p-checkbox",23)(2,md,2,4,"ng-container",24)(3,Cd,3,5,"ng-template",null,3,Fe),m()),n&2){let e=Ke(4),t=c();_(t.cx("header")),u("pBind",t.ptm("header")),d(),u("ngIf",t.checkbox&&t.multiple&&t.showToggleAll),d(),u("ngIf",t.filterTemplate||t._filterTemplate)("ngIfElse",e)}}function wd(n,o){if(n&1&&A(0),n&2){let e=c(2);tt(" ",e.emptyFilterMessageText," ")}}function Sd(n,o){n&1&&de(0,null,7)}function Dd(n,o){if(n&1&&y(0,Sd,2,0,"ng-container",32),n&2){let e=c(2);u("ngTemplateOutlet",e.emptyFilterTemplate||e._emptyFilterTemplate||e._emptyTemplate||e.emptyTemplate)}}function Id(n,o){if(n&1&&(b(0,"div",21),ne(1,wd,1,1)(2,Dd,1,1,"ng-container"),m()),n&2){let e=c();_(e.cx("emptyMessage")),u("pBind",e.ptm("emptyMessage")),d(),ie(!e.emptyFilterTemplate&&!e._emptyFilterTemplate&&!e._emptyTemplate&&!e.emptyTemplate?1:2)}}function Ed(n,o){if(n&1&&A(0),n&2){let e=c(2);tt(" ",e.emptyMessage," ")}}function Td(n,o){n&1&&de(0,null,8)}function Md(n,o){if(n&1&&y(0,Td,2,0,"ng-container",32),n&2){let e=c(2);u("ngTemplateOutlet",e.emptyTemplate||e._emptyTemplate)}}function Fd(n,o){if(n&1&&(b(0,"div",21),ne(1,Ed,1,1)(2,Md,1,1,"ng-container"),m()),n&2){let e=c();_(e.cx("emptyMessage")),u("pBind",e.ptm("emptyMessage")),d(),ie(!e.emptyTemplate&&!e._emptyTemplate?1:2)}}function Pd(n,o){n&1&&de(0)}function Vd(n,o){if(n&1&&y(0,Pd,1,0,"ng-container",22),n&2){let e=o.$implicit,t=o.options;c(2);let i=Ke(3);u("ngTemplateOutlet",i)("ngTemplateOutletContext",Se(2,On,e,t))}}function Od(n,o){n&1&&de(0)}function Nd(n,o){if(n&1&&y(0,Od,1,0,"ng-container",22),n&2){let e=o.options,t=c(4);u("ngTemplateOutlet",t.loaderTemplate||t._loaderTemplate)("ngTemplateOutletContext",ke(2,rs,e))}}function Rd(n,o){n&1&&y(0,Nd,1,4,"ng-template",null,12,Fe)}function Ad(n,o){if(n&1){let e=$e();b(0,"p-scroller",34,10),B("onLazyLoad",function(i){se(e);let r=c(2);return ae(r.onLazyLoad.emit(i))}),y(2,Vd,1,5,"ng-template",null,11,Fe),ne(4,Rd,2,0),m()}if(n&2){let e=c(2);Qe(ke(10,Ci,e.scrollHeight)),u("pt",e.ptm("virtualScroller"))("items",e.visibleOptions())("itemSize",e.virtualScrollItemSize)("autoSize",!0)("lazy",e.lazy)("options",e.virtualScrollOptions)("tabindex",e.scrollerTabIndex),d(4),ie(e.loaderTemplate||e._loaderTemplate?4:-1)}}function Bd(n,o){n&1&&de(0)}function Ld(n,o){if(n&1&&(Y(0),y(1,Bd,1,0,"ng-container",22),X()),n&2){c();let e=Ke(3),t=c();d(),u("ngTemplateOutlet",e)("ngTemplateOutletContext",Se(3,On,t.visibleOptions(),en(2,od)))}}function zd(n,o){if(n&1&&(b(0,"span"),A(1),m()),n&2){let e=c(2).$implicit,t=c(3);d(),K(t.getOptionGroupLabel(e.optionGroup))}}function Hd(n,o){n&1&&de(0)}function $d(n,o){if(n&1){let e=$e();Y(0),b(1,"li",37),B("cdkDragStarted",function(){se(e);let i=c(4);return ae(i.isDragging.set(!0))})("cdkDragEnded",function(){se(e);let i=c(4);return ae(i.isDragging.set(!1))}),y(2,zd,2,1,"span",18)(3,Hd,1,0,"ng-container",22),m(),X()}if(n&2){let e=c(),t=e.$implicit,i=e.index,r=c().options,s=c(2);d(),_(s.cx("optionGroup")),u("pBind",s.getPTOptions(t.optionGroup,r,i,"optionGroup"))("ngStyle",ke(10,Ci,r.itemSize+"px"))("cdkDragData",t)("cdkDragDisabled",!s.dragdrop),I("id",s.id+"_"+s.getOptionIndex(i,r)),d(),u("ngIf",!s.groupTemplate&&!s._groupTemplate),d(),u("ngTemplateOutlet",s.groupTemplate||s._groupTemplate)("ngTemplateOutletContext",ke(12,xi,t.optionGroup))}}function jd(n,o){}function Gd(n,o){n&1&&y(0,jd,0,0,"ng-template")}function Ud(n,o){if(n&1&&y(0,Gd,1,0,null,22),n&2){let e=c(4).$implicit,t=c(3);u("ngTemplateOutlet",t.checkIconTemplate||t._checkIconTemplate)("ngTemplateOutletContext",ke(2,xi,t.isSelected(e)))}}function Wd(n,o){n&1&&(Y(0),y(1,Ud,1,4,"ng-template",null,5,Fe),X())}function qd(n,o){if(n&1&&(b(0,"p-checkbox",40),y(1,Wd,3,0,"ng-container",18),m()),n&2){let e=c(2).$implicit,t=c(3);_(t.cx("optionCheckIcon")),u("ngModel",t.isSelected(e))("readonly",!0)("disabled",t.$disabled()||t.isOptionDisabled(e))("tabindex",-1)("variant",t.config.inputStyle()==="filled"||t.config.inputVariant()==="filled"?"filled":"outlined")("binary",!0)("pt",t.ptm("pcCheckbox"))("unstyled",t.unstyled()),d(),u("ngIf",t.checkIconTemplate||t._checkIconTemplate)}}function Kd(n,o){if(n&1&&(le(),Q(0,"svg",43)),n&2){let e=c(7);_(e.cx("optionBlankIcon")),u("pBind",e.ptm("optionBlankIcon"))}}function Qd(n,o){if(n&1&&(le(),Q(0,"svg",44)),n&2){let e=c(7);_(e.cx("optionCheckIcon")),u("pBind",e.ptm("optionCheckIcon"))}}function Zd(n,o){if(n&1&&(Y(0),y(1,Kd,1,3,"svg",41)(2,Qd,1,3,"svg",42),X()),n&2){let e=c(3).$implicit,t=c(3);d(),u("ngIf",!t.isSelected(e)),d(),u("ngIf",t.isSelected(e))}}function Yd(n,o){n&1&&de(0)}function Xd(n,o){if(n&1&&(Y(0),y(1,Zd,3,2,"ng-container",18)(2,Yd,1,0,"ng-container",22),X()),n&2){let e=c(2).$implicit,t=c(3);d(),u("ngIf",!t.checkmarkTemplate&&!t._checkmarkTemplate),d(),u("ngTemplateOutlet",t.checkmarkTemplate||t._checkmarkTemplate)("ngTemplateOutletContext",ke(3,ad,t.isSelected(e)))}}function Jd(n,o){if(n&1&&(b(0,"span"),A(1),m()),n&2){let e=c(2).$implicit,t=c(3);d(),K(t.getOptionLabel(e))}}function ec(n,o){n&1&&de(0)}function tc(n,o){if(n&1){let e=$e();Y(0),b(1,"li",38),B("click",function(i){se(e);let r=c(),s=r.$implicit,a=r.index,l=c().options,h=c(2);return ae(h.onOptionSelect(i,s,h.getOptionIndex(a,l)))})("dblclick",function(i){se(e);let r=c().$implicit,s=c(3);return ae(s.onOptionDoubleClick(i,r))})("mousedown",function(i){se(e);let r=c().index,s=c().options,a=c(2);return ae(a.onOptionMouseDown(i,a.getOptionIndex(r,s)))})("mouseenter",function(i){se(e);let r=c().index,s=c().options,a=c(2);return ae(a.onOptionMouseEnter(i,a.getOptionIndex(r,s)))})("touchend",function(){se(e);let i=c(4);return ae(i.onOptionTouchEnd())})("cdkDragStarted",function(){se(e);let i=c(4);return ae(i.isDragging.set(!0))})("cdkDragEnded",function(){se(e);let i=c(4);return ae(i.isDragging.set(!1))}),y(2,qd,2,11,"p-checkbox",39)(3,Xd,3,5,"ng-container",18)(4,Jd,2,1,"span",18)(5,ec,1,0,"ng-container",22),m(),X()}if(n&2){let e=c(),t=e.$implicit,i=e.index,r=c().options,s=c(2);d(),_(s.cx("option",tn(20,rd,t,i,r))),u("ngStyle",ke(24,Ci,r.itemSize+"px"))("pBind",s.getPTOptions(t,r,i,"option"))("cdkDragData",t)("cdkDragDisabled",!s.dragdrop),I("id",s.id+"_"+s.getOptionIndex(i,r))("aria-label",s.getOptionLabel(t))("aria-selected",s.isSelected(t))("aria-disabled",s.isOptionDisabled(t))("aria-setsize",s.ariaSetSize)("ariaPosInset",s.getAriaPosInset(s.getOptionIndex(i,r)))("data-p-selected",s.isSelected(t))("data-p-focused",s.focusedOptionIndex()===s.getOptionIndex(i,r))("data-p-disabled",s.isOptionDisabled(t)),d(),u("ngIf",s.checkbox&&s.multiple),d(),u("ngIf",s.checkmark),d(),u("ngIf",!s.itemTemplate&&!s._itemTemplate),d(),u("ngTemplateOutlet",s.itemTemplate||s._itemTemplate)("ngTemplateOutletContext",ji(26,sd,t,s.getOptionIndex(i,r),s.isSelected(t),s.isOptionDisabled(t)))}}function nc(n,o){if(n&1&&y(0,$d,4,14,"ng-container",18)(1,tc,6,31,"ng-container",18),n&2){let e=o.$implicit,t=c(3);u("ngIf",t.isOptionGroup(e)),d(),u("ngIf",!t.isOptionGroup(e))}}function ic(n,o){if(n&1){let e=$e();b(0,"ul",35,13),B("focus",function(i){se(e);let r=c(2);return ae(r.onListFocus(i))})("blur",function(i){se(e);let r=c(2);return ae(r.onListBlur(i))})("keydown",function(i){se(e);let r=c(2);return ae(r.onListKeyDown(i))}),y(2,nc,2,2,"ng-template",36),m()}if(n&2){let e=o.$implicit,t=o.options,i=c(2);Qe(t.contentStyle),_(i.cx("list")),u("id",i.id+"_list")("tabindex",-1)("ngClass",t.contentStyleClass)("pBind",i.ptm("list")),I("aria-multiselectable",!0)("aria-activedescendant",i.focused?i.focusedOptionId:void 0)("aria-label",i.ariaLabel)("aria-disabled",i.$disabled()),d(2),u("ngForOf",e)}}function oc(n,o){if(n&1&&y(0,Ad,5,12,"p-scroller",33)(1,Ld,2,6,"ng-container",18)(2,ic,3,13,"ng-template",null,9,Fe),n&2){let e=c();u("ngIf",e.virtualScroll),d(),u("ngIf",!e.virtualScroll)}}function rc(n,o){n&1&&de(0)}function sc(n,o){if(n&1&&(b(0,"div"),me(1,1),y(2,rc,1,0,"ng-container",22),m()),n&2){let e=c();d(2),u("ngTemplateOutlet",e.footerTemplate||e._footerTemplate)("ngTemplateOutletContext",Se(2,On,e.modelValue(),e.visibleOptions()))}}function ac(n,o){if(n&1&&(b(0,"span",20),A(1),m()),n&2){let e=c();u("pBind",e.ptm("hiddenEmptyMessage")),d(),tt(" ",e.emptyMessage," ")}}var lc=`
    ${ts}

    /* For PrimeNG */
    .p-listbox.ng-invalid.ng-dirty {
        border-color: dt('listbox.invalid.border.color');
    }

    .p-listbox-header {
        display: flex;
        align-items: center;
    }

    .p-listbox-header > .p-iconfield {
        flex-grow: 1;
    }

    .p-listbox-list-container {
        height: 100%;
    }

    /* CDK Drag & Drop styles */
    .p-listbox-option.cdk-drag-preview {
        background: dt('listbox.background');
    }

    .p-listbox-dragging .p-listbox-option:not(.cdk-drag-preview) {
        pointer-events: none !important;
    }

    .p-listbox-dragging .p-listbox-option:not(.cdk-drag-preview):hover {
        background: inherit !important;
        color: inherit !important;
    }

    .cdk-drag-placeholder {
        pointer-events: none;
    }
`,dc={root:({instance:n})=>["p-listbox p-component",{"p-listbox-striped":n.striped,"p-disabled":n.$disabled(),"p-invalid":n.invalid(),"p-listbox-fluid":n.fluid(),"p-listbox-dragging":n.isDragging()}],header:"p-listbox-header",pcFilter:"p-listbox-filter",listContainer:"p-listbox-list-container",list:"p-listbox-list",optionGroup:"p-listbox-option-group",option:({instance:n,option:o,i:e,scrollerOptions:t})=>["p-listbox-option",{"p-listbox-option-selected":n.isSelected(o)&&n.highlightOnSelect,"p-focus":n.focusedOptionIndex()===n.getOptionIndex(e,t),"p-disabled":n.isOptionDisabled(o)}],optionCheckIcon:"p-listbox-option-check-icon",optionBlankIcon:"p-listbox-option-blank-icon",emptyMessage:"p-listbox-empty-message"},is=(()=>{class n extends j{name="listbox";style=lc;classes=dc;static \u0275fac=(()=>{let e;return function(i){return(e||(e=x(n)))(i||n)}})();static \u0275prov=T({token:n,factory:n.\u0275fac})}return n})();var os=new O("LISTBOX_INSTANCE"),cc={provide:at,useExisting:Oe(()=>ki),multi:!0},ki=(()=>{class n extends Mt{filterService;componentName="Listbox";hostName="";bindDirectiveInstance=p(S,{self:!0});$pcListbox=p(os,{optional:!0,skipSelf:!0})??void 0;onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}id;searchMessage;emptySelectionMessage;selectionMessage;autoOptionFocus=!0;ariaLabel;selectOnFocus;searchLocale;focusOnHover=!0;filterMessage;filterFields;lazy=!1;virtualScroll;virtualScrollItemSize;virtualScrollOptions;scrollHeight="14rem";tabindex=0;multiple;styleClass;listStyle;listStyleClass;readonly;checkbox=!1;filter=!1;filterBy;filterMatchMode="contains";filterLocale;metaKeySelection=!1;dataKey;showToggleAll=!0;optionLabel;optionValue;optionGroupChildren="items";optionGroupLabel="label";optionDisabled;ariaFilterLabel;filterPlaceHolder;emptyFilterMessage;emptyMessage;group;get options(){return this._options()}set options(e){this._options.set(e)}get filterValue(){return this._filterValue()||""}set filterValue(e){this._filterValue.set(e)}get selectAll(){return this._selectAll}set selectAll(e){this._selectAll=e}striped=!1;highlightOnSelect=!0;checkmark=!1;dragdrop=!1;dropListData;cdkDropData=V(()=>this.dropListData||this._options());fluid=g(void 0,{transform:v});onChange=new E;onClick=new E;onDblClick=new E;onFilter=new E;onFocus=new E;onBlur=new E;onSelectAllChange=new E;onLazyLoad=new E;onDrop=new E;headerCheckboxViewChild;filterViewChild;lastHiddenFocusableElement;firstHiddenFocusableElement;scroller;listViewChild;containerViewChild;headerFacet;footerFacet;itemTemplate;groupTemplate;headerTemplate;filterTemplate;footerTemplate;emptyFilterTemplate;emptyTemplate;filterIconTemplate;checkIconTemplate;checkmarkTemplate;loaderTemplate;templates;_itemTemplate;_groupTemplate;_headerTemplate;_filterTemplate;_footerTemplate;_emptyFilterTemplate;_emptyTemplate;_filterIconTemplate;_checkIconTemplate;_checkmarkTemplate;_loaderTemplate;_filterValue=$(null);_filteredOptions;filterOptions;filtered;value;optionTouched;focus;headerCheckboxFocus;translationSubscription;focused;scrollerTabIndex="0";_componentStyle=p(is);get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.id}_${this.focusedOptionIndex()}`:null}get filterResultMessageText(){return Ae(this.visibleOptions())?this.filterMessageText.replaceAll("{0}",this.visibleOptions().length):this.emptyFilterMessageText}get filterMessageText(){return this.filterMessage||this.config.translation.searchMessage||""}get searchMessageText(){return this.searchMessage||this.config.translation.searchMessage||""}get emptyFilterMessageText(){return this.emptyFilterMessage||this.config.translation.emptySearchMessage||this.config.translation.emptyFilterMessage||""}get selectionMessageText(){return this.selectionMessage||this.config.translation.selectionMessage||""}get emptySelectionMessageText(){return this.emptySelectionMessage||this.config.translation.emptySelectionMessage||""}get selectedMessageText(){return this.hasSelectedOption()?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue().length:"1"):this.emptySelectionMessageText}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}get virtualScrollerDisabled(){return!this.virtualScroll}get searchFields(){return this.filterBy?.split(",")||this.filterFields||[this.optionLabel]}get toggleAllAriaLabel(){return this.config.translation.aria?this.config.translation.aria[this.allSelected()?"selectAll":"unselectAll"]:void 0}searchValue;searchTimeout;_selectAll=null;_options=$(null);startRangeIndex=$(-1);focusedOptionIndex=$(-1);isDragging=$(!1);onHostFocusOut(e){this.onFocusout(e)}visibleOptions=V(()=>{let e=this.group?this.flatOptions(this._options()):this._options()||[];return this._filterValue()?this.filterService.filter(e,this.searchFields,this._filterValue(),this.filterMatchMode,this.filterLocale):e});constructor(e){super(),this.filterService=e}onInit(){this.id=this.id||Xe("pn_id_"),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.cd.markForCheck()}),this.autoUpdateModel(),this.filterBy&&(this.filterOptions={filter:e=>this.onFilterChange(e),reset:()=>this.resetFilter()})}onAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break;case"group":this._groupTemplate=e.template;break;case"header":this._headerTemplate=e.template;break;case"filter":this._filterTemplate=e.template;break;case"footer":this._footerTemplate=e.template;break;case"empty":this._emptyTemplate=e.template;break;case"emptyfilter":this._emptyFilterTemplate=e.template;break;case"filtericon":this._filterIconTemplate=e.template;break;case"checkicon":this._checkIconTemplate=e.template;break;case"checkmark":this._checkmarkTemplate=e.template;break;case"loader":this._loaderTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}flatOptions(e){return(e||[]).reduce((t,i,r)=>{t.push({optionGroup:i,group:!0,index:r});let s=this.getOptionGroupChildren(i);return s&&s.forEach(a=>t.push(a)),t},[])}autoUpdateModel(){if(this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption()&&!this.multiple){let e=this.findFirstFocusedOptionIndex();this.focusedOptionIndex.set(e),this.onOptionSelect(null,this.visibleOptions()[this.focusedOptionIndex()])}}updateModel(e,t){this.value=e,this.writeModelValue(e),this.onModelChange(e),this.onChange.emit({originalEvent:t,value:this.value})}removeOption(e){return this.modelValue().filter(t=>!ht(t,this.getOptionValue(e),this.equalityKey()||""))}onOptionSelect(e,t,i=-1){this.$disabled()||this.isOptionDisabled(t)||this.readonly||(e&&this.onClick.emit({originalEvent:e,option:t,value:this.value}),this.multiple?this.onOptionSelectMultiple(e,t):this.onOptionSelectSingle(e,t),this.optionTouched=!1,i!==-1&&this.focusedOptionIndex.set(i))}onOptionSelectMultiple(e,t){let i=this.isSelected(t),r=[];if(this.optionTouched?!1:this.metaKeySelection){let a=e.metaKey||e.ctrlKey;i?r=a?this.removeOption(t):[this.getOptionValue(t)]:(r=a?this.modelValue()||[]:[],r=[...r||[],this.getOptionValue(t)])}else r=i?this.removeOption(t):[...this.modelValue()||[],this.getOptionValue(t)];this.updateModel(r,e)}onOptionSelectSingle(e,t){let i=this.isSelected(t),r=!1,s=null;if(this.optionTouched?!1:this.metaKeySelection){let l=e.metaKey||e.ctrlKey;i?l&&(s=null,r=!0):(s=this.getOptionValue(t),r=!0)}else s=i?null:this.getOptionValue(t),r=!0;r&&this.updateModel(s,e)}onOptionSelectRange(e,t=-1,i=-1){if(t===-1&&(t=this.findNearestSelectedOptionIndex(i,!0)),i===-1&&(i=this.findNearestSelectedOptionIndex(t)),t!==-1&&i!==-1){let r=Math.min(t,i),s=Math.max(t,i),a=this.visibleOptions().slice(r,s+1).filter(l=>this.isValidOption(l)).map(l=>this.getOptionValue(l));this.updateModel(a,e)}}onToggleAll(e){if(!(this.$disabled()||this.readonly))if(xt(this.headerCheckboxViewChild?.nativeElement),this.selectAll!==null)this.onSelectAllChange.emit({originalEvent:e,checked:!this.allSelected()});else{let t=this.allSelected()?[]:this.visibleOptions().filter(i=>this.isValidOption(i)).map(i=>this.getOptionValue(i));this.updateModel(t,e),this.onChange.emit({originalEvent:e,value:this.value})}}allSelected(){return this.selectAll!==null?this.selectAll:Ae(this.visibleOptions())&&this.visibleOptions().every(e=>this.isOptionGroup(e)||this.isOptionDisabled(e)||this.isSelected(e))}onOptionTouchEnd(){this.$disabled()||(this.optionTouched=!0)}onOptionMouseDown(e,t){this.changeFocusedOptionIndex(e,t)}onOptionMouseEnter(e,t){this.focusOnHover&&this.focused&&this.changeFocusedOptionIndex(e,t)}onOptionDoubleClick(e,t){this.$disabled()||this.isOptionDisabled(t)||this.readonly||this.onDblClick.emit({originalEvent:e,option:t,value:this.value})}onFirstHiddenFocus(e){xt(this.listViewChild?.nativeElement);let t=$n(this.el?.nativeElement,':not([data-p-hidden-focusable="true"])');this.lastHiddenFocusableElement?.nativeElement&&(this.lastHiddenFocusableElement.nativeElement.tabIndex=sn(t)?-1:void 0),this.firstHiddenFocusableElement?.nativeElement&&(this.firstHiddenFocusableElement.nativeElement.tabIndex=-1)}onLastHiddenFocus(e){if(e.relatedTarget===this.listViewChild?.nativeElement){let i=$n(this.el?.nativeElement,':not([data-p-hidden-focusable="true"])');xt(i),this.firstHiddenFocusableElement?.nativeElement&&(this.firstHiddenFocusableElement.nativeElement.tabIndex=void 0)}else xt(this.firstHiddenFocusableElement?.nativeElement);this.lastHiddenFocusableElement?.nativeElement&&(this.lastHiddenFocusableElement.nativeElement.tabIndex=-1)}onFocusout(e){!this.el.nativeElement.contains(e.relatedTarget)&&this.lastHiddenFocusableElement&&this.firstHiddenFocusableElement&&(this.firstHiddenFocusableElement.nativeElement.tabIndex=this.lastHiddenFocusableElement.nativeElement.tabIndex=void 0,this.scrollerTabIndex="0")}onListFocus(e){this.focused=!0;let t=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex();this.focusedOptionIndex.set(t),this.scrollInView(t),this.onFocus.emit(e),this.scrollerTabIndex="-1"}onListBlur(e){this.focused=!1,this.focusedOptionIndex.set(-1),this.startRangeIndex.set(-1),this.searchValue="",this.onBlur.emit(e)}onHeaderCheckboxKeyDown(e){if(this.$disabled()){e.preventDefault();return}switch(e.code){case"Space":this.onToggleAll(e);break;case"Enter":this.onToggleAll(e);break;case"Tab":this.onHeaderCheckboxTabKeyDown(e);break;default:break}}onHeaderCheckboxTabKeyDown(e){xt(this.listViewChild?.nativeElement),e.preventDefault()}onFilterChange(e){let t=e.target.value?.trim();this._filterValue.set(t),this.focusedOptionIndex.set(-1),this.startRangeIndex.set(-1),this.onFilter.emit({originalEvent:e,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller?.scrollToIndex(0)}onFilterBlur(e){this.focusedOptionIndex.set(-1),this.startRangeIndex.set(-1)}onListKeyDown(e){let t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"Space":case"NumpadEnter":this.onSpaceKey(e);break;case"Tab":break;case"ShiftLeft":case"ShiftRight":this.onShiftKey();break;default:if(this.multiple&&e.code==="KeyA"&&t){let i=this.visibleOptions().filter(r=>this.isValidOption(r)).map(r=>this.getOptionValue(r));this.updateModel(i,e),e.preventDefault();break}!t&&no(e.key)&&(this.searchOptions(e,e.key),e.preventDefault());break}}onFilterKeyDown(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":this.onEnterKey(e);break;case"ShiftLeft":case"ShiftRight":this.onShiftKey();break;default:break}}onArrowDownKey(e){let t=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();this.multiple&&e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex(),t),this.changeFocusedOptionIndex(e,t),e.preventDefault()}onArrowUpKey(e){let t=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();this.multiple&&e.shiftKey&&this.onOptionSelectRange(e,t,this.startRangeIndex()),this.changeFocusedOptionIndex(e,t),e.preventDefault()}onArrowLeftKey(e,t=!1){t&&this.focusedOptionIndex.set(-1)}onHomeKey(e,t=!1){if(t)e.currentTarget.setSelectionRange(0,0),this.focusedOptionIndex.set(-1);else{let i=e.metaKey||e.ctrlKey,r=this.findFirstOptionIndex();this.multiple&&e.shiftKey&&i&&this.onOptionSelectRange(e,r,this.startRangeIndex()),this.changeFocusedOptionIndex(e,r)}e.preventDefault()}onEndKey(e,t=!1){if(t){let i=e.currentTarget,r=i.value.length;i.setSelectionRange(r,r),this.focusedOptionIndex.set(-1)}else{let i=e.metaKey||e.ctrlKey,r=this.findLastOptionIndex();this.multiple&&e.shiftKey&&i&&this.onOptionSelectRange(e,this.startRangeIndex(),r),this.changeFocusedOptionIndex(e,r)}e.preventDefault()}onPageDownKey(e){this.scrollInView(0),e.preventDefault()}onPageUpKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onEnterKey(e){this.focusedOptionIndex()!==-1&&(this.multiple&&e.shiftKey?this.onOptionSelectRange(e,this.focusedOptionIndex()):this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()])),e.preventDefault()}onSpaceKey(e){this.onEnterKey(e)}onShiftKey(){let e=this.focusedOptionIndex();this.startRangeIndex.set(e)}getOptionGroupChildren(e){return this.optionGroupChildren?Ct(e,this.optionGroupChildren):e.items}getOptionGroupLabel(e){return this.optionGroupLabel?Ct(e,this.optionGroupLabel):e&&e.label!==void 0?e.label:e}getOptionLabel(e){return this.optionLabel?Ct(e,this.optionLabel):e.label!=null?e.label:e}getOptionIndex(e,t){return this.virtualScrollerDisabled?e:t&&t.getItemOptions(e).index}getOptionValue(e){return this.optionValue?Ct(e,this.optionValue):!this.optionLabel&&e&&e.value!==void 0?e.value:e}getAriaPosInset(e){return(this.optionGroupLabel?e-this.visibleOptions().slice(0,e).filter(t=>this.isOptionGroup(t)).length:e)+1}getPTOptions(e,t,i,r){return this.ptm(r,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex()===this.getOptionIndex(i,t),disabled:this.isOptionDisabled(e)}})}hasSelectedOption(){return Ae(this.modelValue())}isOptionGroup(e){return this.optionGroupLabel&&e.optionGroup&&e.group}changeFocusedOptionIndex(e,t){this.focusedOptionIndex()!==t&&(this.focusedOptionIndex.set(t),this.scrollInView(),this.selectOnFocus&&!this.multiple&&this.onOptionSelect(e,this.visibleOptions()[t]))}searchOptions(e,t){this.searchValue=(this.searchValue||"")+t;let i=-1,r=!1;return this.focusedOptionIndex()!==-1?(i=this.visibleOptions().slice(this.focusedOptionIndex()).findIndex(s=>this.isOptionMatched(s)),i=i===-1?this.visibleOptions().slice(0,this.focusedOptionIndex()).findIndex(s=>this.isOptionMatched(s)):i+this.focusedOptionIndex()):i=this.visibleOptions().findIndex(s=>this.isOptionMatched(s)),i!==-1&&(r=!0),i===-1&&this.focusedOptionIndex()===-1&&(i=this.findFirstFocusedOptionIndex()),i!==-1&&this.changeFocusedOptionIndex(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue="",this.searchTimeout=null},500),r}isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e)?.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue?.toLocaleLowerCase(this.filterLocale))}scrollInView(e=-1){let t=e!==-1?`${this.id}_${e}`:this.focusedOptionId,i=rn(this.listViewChild?.nativeElement,`li[id="${t}"]`);i?i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"nearest"}):this.virtualScrollerDisabled||this.virtualScroll&&this.scroller?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findLastOptionIndex(){return Vt(this.visibleOptions(),e=>this.isValidOption(e))}findFirstFocusedOptionIndex(){let e=this.findFirstSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findLastFocusedOptionIndex(){let e=this.findLastSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findLastSelectedOptionIndex(){return this.hasSelectedOption()?Vt(this.visibleOptions(),e=>this.isValidSelectedOption(e)):-1}findNextOptionIndex(e){let t=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidOption(i)):-1;return t>-1?t+e+1:e}findNextSelectedOptionIndex(e){let t=this.hasSelectedOption()&&e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidSelectedOption(i)):-1;return t>-1?t+e+1:-1}findPrevSelectedOptionIndex(e){let t=this.hasSelectedOption()&&e>0?Vt(this.visibleOptions().slice(0,e),i=>this.isValidSelectedOption(i)):-1;return t>-1?t:-1}findFirstSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findPrevOptionIndex(e){let t=e>0?Vt(this.visibleOptions().slice(0,e),i=>this.isValidOption(i)):-1;return t>-1?t:e}findSelectedOptionIndex(){if(this.$filled())if(this.multiple)for(let e=this.modelValue().length-1;e>=0;e--){let t=this.modelValue()[e],i=this.visibleOptions().findIndex(r=>this.isValidSelectedOption(r)&&this.isEquals(t,this.getOptionValue(r)));if(i>-1)return i}else return this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e));return-1}findNearestSelectedOptionIndex(e,t=!1){let i=-1;return this.hasSelectedOption()&&(t?(i=this.findPrevSelectedOptionIndex(e),i=i===-1?this.findNextSelectedOptionIndex(e):i):(i=this.findNextSelectedOptionIndex(e),i=i===-1?this.findPrevSelectedOptionIndex(e):i)),i>-1?i:e}equalityKey(){return this.optionValue?null:this.dataKey}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isOptionDisabled(e){return an(this.optionDisabled)?this.optionDisabled(e):this.optionDisabled?Ct(e,this.optionDisabled):!1}isEquals(e,t){return ht(e,t,this.equalityKey()||"")}isSelected(e){let t=this.getOptionValue(e);return this.multiple?(this.modelValue()||[]).some(i=>this.isEquals(i,t)):this.isEquals(this.modelValue(),t)}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isEmpty(){return!this._options()?.length||!this.visibleOptions()?.length}hasFilter(){return this._filterValue()&&(this._filterValue()?.trim().length||0)>0}resetFilter(){this.filterViewChild&&this.filterViewChild.nativeElement&&(this.filterViewChild.nativeElement.value=""),this._filterValue.set(null)}onDragEntered(){this.isDragging.set(!0),this.el.nativeElement.setAttribute("p-listbox-dragging","true")}onDragExited(){this.isDragging.set(!1),this.el.nativeElement.setAttribute("p-listbox-dragging","false")}drop(e){if(this.isDragging.set(!1),e){if(this.dragdrop&&e.previousContainer===e.container){let t=[...this._options()];Pn(t,e.previousIndex,e.currentIndex),this._options.set(t),this.changeFocusedOptionIndex(e,e.currentIndex),this.modelValue()&&(this.writeModelValue(this.modelValue()),this.onModelChange(this.modelValue())),this.cd.markForCheck()}this.onDrop.emit(e)}}get containerDataP(){return this.cn({invalid:this.invalid(),disabled:this.$disabled()})}writeControlValue(e,t){this.value=e,t(this.value),this.cd.markForCheck()}onDestroy(){this.translationSubscription&&this.translationSubscription.unsubscribe()}static \u0275fac=function(t){return new(t||n)(Z(io))};static \u0275cmp=P({type:n,selectors:[["p-listbox"],["p-listBox"],["p-list-box"]],contentQueries:function(t,i,r){if(t&1&&Je(r,oo,5)(r,ro,5)(r,zl,4)(r,Hl,4)(r,$l,4)(r,ns,4)(r,jl,4)(r,Gl,4)(r,Ul,4)(r,Wl,4)(r,ql,4)(r,Kl,4)(r,Ql,4)(r,rt,4),t&2){let s;M(s=F())&&(i.headerFacet=s.first),M(s=F())&&(i.footerFacet=s.first),M(s=F())&&(i.itemTemplate=s.first),M(s=F())&&(i.groupTemplate=s.first),M(s=F())&&(i.headerTemplate=s.first),M(s=F())&&(i.filterTemplate=s.first),M(s=F())&&(i.footerTemplate=s.first),M(s=F())&&(i.emptyFilterTemplate=s.first),M(s=F())&&(i.emptyTemplate=s.first),M(s=F())&&(i.filterIconTemplate=s.first),M(s=F())&&(i.checkIconTemplate=s.first),M(s=F())&&(i.checkmarkTemplate=s.first),M(s=F())&&(i.loaderTemplate=s.first),M(s=F())&&(i.templates=s)}},viewQuery:function(t,i){if(t&1&&qe(Zl,5)(ns,5)(Yl,5)(Xl,5)(Jl,5)(ed,5)(td,5),t&2){let r;M(r=F())&&(i.headerCheckboxViewChild=r.first),M(r=F())&&(i.filterViewChild=r.first),M(r=F())&&(i.lastHiddenFocusableElement=r.first),M(r=F())&&(i.firstHiddenFocusableElement=r.first),M(r=F())&&(i.scroller=r.first),M(r=F())&&(i.listViewChild=r.first),M(r=F())&&(i.containerViewChild=r.first)}},hostVars:4,hostBindings:function(t,i){t&1&&B("focusout",function(s){return i.onHostFocusOut(s)}),t&2&&(I("id",i.id)("data-p",i.containerDataP),_(i.cn(i.cx("root"),i.styleClass)))},inputs:{hostName:"hostName",id:"id",searchMessage:"searchMessage",emptySelectionMessage:"emptySelectionMessage",selectionMessage:"selectionMessage",autoOptionFocus:[2,"autoOptionFocus","autoOptionFocus",v],ariaLabel:"ariaLabel",selectOnFocus:[2,"selectOnFocus","selectOnFocus",v],searchLocale:[2,"searchLocale","searchLocale",v],focusOnHover:[2,"focusOnHover","focusOnHover",v],filterMessage:"filterMessage",filterFields:"filterFields",lazy:[2,"lazy","lazy",v],virtualScroll:[2,"virtualScroll","virtualScroll",v],virtualScrollItemSize:[2,"virtualScrollItemSize","virtualScrollItemSize",Re],virtualScrollOptions:"virtualScrollOptions",scrollHeight:"scrollHeight",tabindex:[2,"tabindex","tabindex",Re],multiple:[2,"multiple","multiple",v],styleClass:"styleClass",listStyle:"listStyle",listStyleClass:"listStyleClass",readonly:[2,"readonly","readonly",v],checkbox:[2,"checkbox","checkbox",v],filter:[2,"filter","filter",v],filterBy:"filterBy",filterMatchMode:"filterMatchMode",filterLocale:"filterLocale",metaKeySelection:[2,"metaKeySelection","metaKeySelection",v],dataKey:"dataKey",showToggleAll:[2,"showToggleAll","showToggleAll",v],optionLabel:"optionLabel",optionValue:"optionValue",optionGroupChildren:"optionGroupChildren",optionGroupLabel:"optionGroupLabel",optionDisabled:"optionDisabled",ariaFilterLabel:"ariaFilterLabel",filterPlaceHolder:"filterPlaceHolder",emptyFilterMessage:"emptyFilterMessage",emptyMessage:"emptyMessage",group:[2,"group","group",v],options:"options",filterValue:"filterValue",selectAll:"selectAll",striped:[2,"striped","striped",v],highlightOnSelect:[2,"highlightOnSelect","highlightOnSelect",v],checkmark:[2,"checkmark","checkmark",v],dragdrop:[2,"dragdrop","dragdrop",v],dropListData:"dropListData",fluid:[1,"fluid"]},outputs:{onChange:"onChange",onClick:"onClick",onDblClick:"onDblClick",onFilter:"onFilter",onFocus:"onFocus",onBlur:"onBlur",onSelectAllChange:"onSelectAllChange",onLazyLoad:"onLazyLoad",onDrop:"onDrop"},features:[R([cc,is,{provide:Vn,useValue:{zIndex:1200}},{provide:os,useExisting:n},{provide:oe,useExisting:n}]),re([S]),k],ngContentSelectors:id,decls:15,vars:20,consts:[["firstHiddenFocusableElement",""],["container",""],["lastHiddenFocusableElement",""],["builtInFilterElement",""],["headerchkbox",""],["icon",""],["filterInput",""],["emptyFilter",""],["empty",""],["buildInItems",""],["scroller",""],["content",""],["loader",""],["list",""],["role","presentation",1,"p-hidden-accessible","p-hidden-focusable",3,"focus","tabindex","pBind"],[3,"class","pBind",4,"ngIf"],["cdkDropList","",3,"cdkDropListDropped","cdkDropListEntered","cdkDropListExited","ngStyle","cdkDropListData","pBind"],[3,"class","pBind"],[4,"ngIf"],["role","status","aria-live","polite","class","p-hidden-accessible",3,"pBind",4,"ngIf"],["role","status","aria-live","polite",1,"p-hidden-accessible",3,"pBind"],[3,"pBind"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngModel","disabled","tabindex","variant","binary","pt","unstyled","onChange",4,"ngIf"],[4,"ngIf","ngIfElse"],[3,"onChange","ngModel","disabled","tabindex","variant","binary","pt","unstyled"],["hostName","listbox",3,"pt","unstyled"],["role","status",1,"p-hidden-accessible",3,"pBind"],["pInputText","","type","text","role","searchbox","hostName","listbox",3,"input","keydown","blur","value","pt","unstyled"],[3,"pt","unstyled"],["data-p-icon","search",3,"pBind",4,"ngIf"],["data-p-icon","search",3,"pBind"],[4,"ngTemplateOutlet"],["hostName","listbox",3,"pt","items","style","itemSize","autoSize","lazy","options","tabindex","onLazyLoad",4,"ngIf"],["hostName","listbox",3,"onLazyLoad","pt","items","itemSize","autoSize","lazy","options","tabindex"],["role","listbox",3,"focus","blur","keydown","id","tabindex","ngClass","pBind"],["ngFor","",3,"ngForOf"],["role","option","cdkDrag","",3,"cdkDragStarted","cdkDragEnded","pBind","ngStyle","cdkDragData","cdkDragDisabled"],["pRipple","","role","option","cdkDrag","",3,"click","dblclick","mousedown","mouseenter","touchend","cdkDragStarted","cdkDragEnded","ngStyle","pBind","cdkDragData","cdkDragDisabled"],["hostName","listbox",3,"class","ngModel","readonly","disabled","tabindex","variant","binary","pt","unstyled",4,"ngIf"],["hostName","listbox",3,"ngModel","readonly","disabled","tabindex","variant","binary","pt","unstyled"],["data-p-icon","blank",3,"class","pBind",4,"ngIf"],["data-p-icon","check",3,"class","pBind",4,"ngIf"],["data-p-icon","blank",3,"pBind"],["data-p-icon","check",3,"pBind"]],template:function(t,i){t&1&&(ye(nd),b(0,"span",14,0),B("focus",function(s){return i.onFirstHiddenFocus(s)}),m(),y(2,dd,3,8,"div",15)(3,kd,5,6,"div",15),b(4,"div",16,1),B("cdkDropListDropped",function(s){return i.drop(s)})("cdkDropListEntered",function(){return i.onDragEntered()})("cdkDropListExited",function(){return i.onDragExited()}),ne(6,Id,3,4,"div",17)(7,Fd,3,4,"div",17)(8,oc,4,2),m(),y(9,sc,3,5,"div",18)(10,ac,2,2,"span",19),b(11,"span",20),A(12),m(),b(13,"span",14,2),B("focus",function(s){return i.onLastHiddenFocus(s)}),m()),t&2&&(u("tabindex",i.$disabled()?-1:i.tabindex)("pBind",i.ptm("hiddenFirstFocusableElement")),I("data-p-hidden-focusable",!0),d(2),u("ngIf",i.headerFacet||i.headerTemplate||i._headerTemplate),d(),u("ngIf",i.checkbox&&i.multiple&&i.showToggleAll||i.filter),d(),_(i.cn(i.cx("listContainer"),i.listStyleClass)),et("max-height",i.virtualScroll?"auto":i.scrollHeight||"auto"),u("ngStyle",i.listStyle)("cdkDropListData",i.cdkDropData())("pBind",i.ptm("listContainer")),d(2),ie(i.hasFilter()&&i.isEmpty()?6:!i.hasFilter()&&i.isEmpty()?7:8),d(3),u("ngIf",i.footerFacet||i.footerTemplate||i._footerTemplate),d(),u("ngIf",i.isEmpty()),d(),u("pBind",i.ptm("hiddenSelectedMessage")),d(),tt(" ",i.selectedMessageText," "),d(),u("tabindex",i.$disabled()?-1:i.tabindex)("pBind",i.ptm("hiddenLastFocusableEl")),I("data-p-hidden-focusable",!0))},dependencies:[pe,nn,on,it,ot,vt,kn,es,Qr,Go,zt,xn,Wr,wn,$o,dt,lt,Ye,be,$r,Hr,zr,Pe,S],encapsulation:2,changeDetection:0})}return n})();function uc(n,o){if(n&1&&(b(0,"label",0),A(1),m()),n&2){let e=c();I("for",e.inputId),d(),K(e.label())}}function pc(n,o){if(n&1&&(b(0,"span",4),A(1),m()),n&2){let e=c();d(),K(e.errorMessage())}}function hc(n,o){if(n&1&&(b(0,"span",5),A(1),m()),n&2){let e=c();d(),K(e.helpText())}}function fc(n,o){n&1&&Q(0,"span")}function gc(n,o){if(n&1&&(b(0,"span",7),A(1),m()),n&2){let e=c();Ce("sk-textarea__counter--near",e.charCount()>=e.maxLength()*.8)("sk-textarea__counter--max",e.charCount()>=e.maxLength()),d(),Li(" ",e.charCount(),"/",e.maxLength()," ")}}function mc(n,o){if(n&1&&(b(0,"span",2),A(1),m()),n&2){let e=c();d(),K(e.label())}}var bc=(n,o)=>o.label;function _c(n,o){if(n&1&&ge(0,"i",6),n&2){let e=c(2).$implicit;_(e.icon)}}function vc(n,o){if(n&1&&(ve(0,"span",3),ne(1,_c,1,2,"i",4),ve(2,"span",5),A(3),we()()),n&2){let e=c().$implicit;d(),ie(e.icon?1:-1),d(2),K(e.label)}}function yc(n,o){if(n&1&&ge(0,"i",6),n&2){let e=c(2).$implicit;_(e.icon)}}function xc(n,o){if(n&1&&(ve(0,"a",7),ne(1,yc,1,2,"i",4),ve(2,"span",5),A(3),we()(),ve(4,"span",8),A(5,"/"),we()),n&2){let e=c().$implicit;I("href",e.href??null,Ni),d(),ie(e.icon?1:-1),d(2),K(e.label)}}function Cc(n,o){if(n&1&&(ve(0,"li",2),ne(1,vc,4,2,"span",3)(2,xc,6,3),we()),n&2){let e=o.$implicit,t=o.$index,i=o.$count,r=c();d(),ie(r.isActive(e,t===i-1)?1:2)}}function kc(n,o){if(n&1&&(b(0,"span",2),A(1),m()),n&2){let e=c();d(),K(e.label())}}function wc(n,o){if(n&1&&(b(0,"span",3),A(1),m()),n&2){let e=c();d(),K(e.errorMessage())}}function Sc(n,o){if(n&1&&(b(0,"span",4),A(1),m()),n&2){let e=c();d(),K(e.helpText())}}function Dc(n,o){if(n&1&&(b(0,"span",7),A(1),m()),n&2){let e=c(2).$implicit;d(),K(e.description)}}function Ic(n,o){if(n&1&&(b(0,"div",5)(1,"span",6),A(2),m(),ne(3,Dc,2,1,"span",7),m()),n&2){let e=c().$implicit;d(2),K(e.label),d(),ie(e.description?3:-1)}}function Ec(n,o){if(n&1&&Q(0,"i"),n&2){let e=c(2).$implicit;_(e.icon+" sk-listbox__item-icon")}}function Tc(n,o){if(n&1&&(ne(0,Ec,1,2,"i",8),b(1,"span"),A(2),m()),n&2){let e=c().$implicit;ie(e.icon?0:-1),d(2),K(e.label)}}function Mc(n,o){if(n&1&&(b(0,"span"),A(1),m()),n&2){let e=c().$implicit;d(),K(e.label)}}function Fc(n,o){if(n&1&&ne(0,Ic,4,2,"div",5)(1,Tc,3,2)(2,Mc,2,1,"span"),n&2){let e,t=c();ie((e=t.variant())==="semantic"?0:e==="group"?1:2)}}function Pc(n,o){n&1&&Q(0,"div",9)}function Vc(n,o){if(n&1&&(b(0,"div",10),Q(1,"i",11),b(2,"strong",12),A(3),m(),b(4,"p",13),A(5),m()()),n&2){let e=c();d(3),K(e.emptyTitle()),d(2),K(e.emptyMessage())}}function Oc(n,o){if(n&1&&(b(0,"div",10),Q(1,"i",11),b(2,"strong",12),A(3),m(),b(4,"p",13),A(5),m()()),n&2){let e=c();d(3),K(e.emptyTitle()),d(2),K(e.emptyMessage())}}function Nc(n,o){if(n&1&&Q(0,"i",7),n&2){let e=c();_("sk-input-text__icon "+e.iconLeft())}}function Rc(n,o){if(n&1&&Q(0,"i",7),n&2){let e=c();_("sk-input-text__icon "+e.iconRight())}}function Ac(n,o){if(n&1&&(b(0,"small",5),A(1),m()),n&2){let e=c();d(),tt(" ",e.errorMessage()," ")}}function Bc(n,o){if(n&1&&(b(0,"small",6),A(1),m()),n&2){let e=c();d(),K(e.helpText())}}var Wb=(()=>{class n{label=g();skType=g("primary");size=g("large");icon=g();iconPos=g("left");disabled=g(!1);loading=g(!1);type=g("button");ariaLabel=g();skClick=Ne();get isOutlined(){return this.skType()==="secondary"}get isText(){return this.skType()==="tertiary"}onClick(e){this.skClick.emit(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["sk-button"]],inputs:{label:[1,"label"],skType:[1,"skType"],size:[1,"size"],icon:[1,"icon"],iconPos:[1,"iconPos"],disabled:[1,"disabled"],loading:[1,"loading"],type:[1,"type"],ariaLabel:[1,"ariaLabel"]},outputs:{skClick:"skClick"},decls:1,vars:11,consts:[[3,"onClick","label","outlined","text","size","rounded","icon","iconPos","disabled","loading","type","ariaLabel"]],template:function(t,i){t&1&&(b(0,"p-button",0),B("onClick",function(s){return i.onClick(s)}),m()),t&2&&u("label",i.label())("outlined",i.isOutlined)("text",i.isText)("size",i.size())("rounded",!0)("icon",i.icon())("iconPos",i.iconPos())("disabled",i.disabled())("loading",i.loading())("type",i.type())("ariaLabel",i.ariaLabel())},dependencies:[Yo],styles:[`@charset "UTF-8";sk-button{display:inline-block}sk-button .p-button{font-family:Montserrat,sans-serif;font-weight:700;transition:background-color .2s,border-color .2s,color .2s,box-shadow .2s}sk-button .p-button:not(.p-button-outlined):not(.p-button-text):disabled,sk-button .p-button:not(.p-button-outlined):not(.p-button-text)[disabled]{opacity:1;pointer-events:auto;cursor:not-allowed;background:#e9e9e9;border-color:#e9e9e9;color:#666}sk-button .p-button:not(.p-button-outlined):not(.p-button-text):disabled:hover,sk-button .p-button:not(.p-button-outlined):not(.p-button-text)[disabled]:hover{background:#ddd;border-color:#ddd;color:#666}sk-button .p-button.p-button-outlined:disabled,sk-button .p-button.p-button-outlined[disabled]{opacity:1;pointer-events:auto;cursor:not-allowed;background:#fff;border-color:#666;color:#666}sk-button .p-button.p-button-outlined:disabled:hover,sk-button .p-button.p-button-outlined[disabled]:hover{background:#e9e9e9;border-color:#666;color:#666}sk-button .p-button.p-button-text:disabled,sk-button .p-button.p-button-text[disabled]{opacity:1;pointer-events:auto;cursor:not-allowed;background:#ddd;color:#666}sk-button .p-button.p-button-text:disabled:hover,sk-button .p-button.p-button-text[disabled]:hover{background:#f7f7f7;color:#666}
`],encapsulation:2,changeDetection:0})}return n})();var Lc=0,qb=(()=>{class n{label=g();placeholder=g("");helpText=g();errorMessage=g();rows=g(5);autoResize=g(!1);maxLength=g();showCharCount=g(!1);disabled=g(!1);readonly=g(!1);invalid=g(!1);value=_t(null);skValueChange=Ne();skFocus=Ne();skBlur=Ne();inputId=`sk-textarea-${++Lc}`;showError=V(()=>this.invalid()&&!!this.errorMessage());showHelp=V(()=>!this.showError()&&!!this.helpText());charCount=V(()=>this.value()?.length??0);onModelChange(e){this.value.set(e),this.skValueChange.emit(e)}handleFocus(e){this.skFocus.emit(e)}handleBlur(e){this.skBlur.emit(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["sk-textarea"]],hostVars:4,hostBindings:function(t,i){t&2&&Ce("sk-invalid",i.invalid())("sk-disabled",i.disabled())},inputs:{label:[1,"label"],placeholder:[1,"placeholder"],helpText:[1,"helpText"],errorMessage:[1,"errorMessage"],rows:[1,"rows"],autoResize:[1,"autoResize"],maxLength:[1,"maxLength"],showCharCount:[1,"showCharCount"],disabled:[1,"disabled"],readonly:[1,"readonly"],invalid:[1,"invalid"],value:[1,"value"]},outputs:{value:"valueChange",skValueChange:"skValueChange",skFocus:"skFocus",skBlur:"skBlur"},decls:8,vars:12,consts:[[1,"sk-textarea__label"],[1,"sk-textarea__wrapper"],["pTextarea","",1,"sk-textarea__field",3,"ngModelChange","focus","blur","id","ngModel","placeholder","rows","autoResize","disabled","readonly","invalid"],[1,"sk-textarea__footer"],["role","alert",1,"sk-textarea__error"],[1,"sk-textarea__help"],[1,"sk-textarea__counter",3,"sk-textarea__counter--near","sk-textarea__counter--max"],[1,"sk-textarea__counter"]],template:function(t,i){t&1&&(ne(0,uc,2,2,"label",0),b(1,"div",1)(2,"textarea",2),B("ngModelChange",function(s){return i.onModelChange(s)})("focus",function(s){return i.handleFocus(s)})("blur",function(s){return i.handleBlur(s)}),m()(),b(3,"div",3),ne(4,pc,2,1,"span",4)(5,hc,2,1,"span",5)(6,fc,1,0,"span"),ne(7,gc,2,6,"span",6),m()),t&2&&(ie(i.label()?0:-1),d(2),u("id",i.inputId)("ngModel",i.value())("placeholder",i.placeholder())("rows",i.rows())("autoResize",i.autoResize())("disabled",i.disabled())("readonly",i.readonly())("invalid",i.invalid()),I("maxlength",i.maxLength()??null),d(2),ie(i.showError()?4:i.showHelp()?5:6),d(3),ie(i.showCharCount()&&i.maxLength()?7:-1))},dependencies:[dt,Lt,lt,Ye,or],styles:[`@charset "UTF-8";sk-textarea{--sk-ta-bg: #ffffff;--sk-ta-bg-disabled: #f7f7f7;--sk-ta-text: #404040;--sk-ta-placeholder: #a5a5a5;--sk-ta-label: #3b4448;--sk-ta-border: transparent;--sk-ta-border-hover: #00c73d;--sk-ta-border-focus: #1dd64c;--sk-ta-border-error: #e03131;--sk-ta-shadow: 0 0 4px rgba(68, 68, 68, .15);--sk-ta-shadow-focus: 0 0 0 3px rgba(0, 199, 61, .18);--sk-ta-shadow-error: 0 0 0 3px rgba(224, 49, 49, .15);--sk-ta-help: #666666;--sk-ta-error: #e03131;--sk-ta-scrollbar-track:#f7f7f7;--sk-ta-scrollbar-thumb:#c5c5c5;display:inline-flex;flex-direction:column;gap:4px;width:100%;max-width:300px;font-family:Open Sans,sans-serif}sk-textarea .sk-textarea__label{font-size:14px;font-weight:600;line-height:20px;color:var(--sk-ta-label);cursor:pointer}sk-textarea .sk-textarea__wrapper{position:relative;border-radius:8px;box-shadow:var(--sk-ta-shadow);border:1px solid var(--sk-ta-border);background:var(--sk-ta-bg);transition:border-color .15s ease,box-shadow .15s ease,background-color .15s ease}sk-textarea:not(.sk-disabled):not(.sk-invalid) .sk-textarea__wrapper:hover{border-color:var(--sk-ta-border-hover)}sk-textarea:not(.sk-disabled):not(.sk-invalid) .sk-textarea__wrapper:focus-within{border-color:var(--sk-ta-border-focus);box-shadow:var(--sk-ta-shadow),var(--sk-ta-shadow-focus)}sk-textarea.sk-invalid .sk-textarea__wrapper{border-color:var(--sk-ta-border-error);box-shadow:var(--sk-ta-shadow),var(--sk-ta-shadow-error)}sk-textarea.sk-disabled .sk-textarea__wrapper{background:var(--sk-ta-bg-disabled);box-shadow:none;cursor:not-allowed}sk-textarea .sk-textarea__field{display:block;width:100%;border:none!important;background:transparent!important;box-shadow:none!important;outline:none!important;border-radius:8px;padding:8px 4px 8px 12px;resize:vertical;font-family:Open Sans,sans-serif;font-size:14px;font-weight:400;line-height:22px;color:var(--sk-ta-text);caret-color:var(--sk-ta-border-focus)}sk-textarea .sk-textarea__field::placeholder{color:var(--sk-ta-placeholder);opacity:1}sk-textarea .sk-textarea__field:disabled{color:var(--sk-ta-placeholder);cursor:not-allowed;resize:none}sk-textarea .sk-textarea__field:focus,sk-textarea .sk-textarea__field:focus-visible{outline:none!important;box-shadow:none!important;border:none!important}sk-textarea .sk-textarea__field::-webkit-scrollbar{width:8px}sk-textarea .sk-textarea__field::-webkit-scrollbar-track{background:var(--sk-ta-scrollbar-track);border-radius:17px}sk-textarea .sk-textarea__field::-webkit-scrollbar-thumb{background:var(--sk-ta-scrollbar-thumb);border-radius:38px}sk-textarea .sk-textarea__field{scrollbar-width:thin;scrollbar-color:var(--sk-ta-scrollbar-thumb) var(--sk-ta-scrollbar-track)}sk-textarea .sk-textarea__footer{display:flex;justify-content:space-between;align-items:flex-start;gap:8px;min-height:20px;font-family:inherit;font-size:12px;line-height:20px;font-weight:400}sk-textarea .sk-textarea__help{color:var(--sk-ta-help)}sk-textarea .sk-textarea__error{color:var(--sk-ta-error)}sk-textarea .sk-textarea__counter{flex-shrink:0;color:var(--sk-ta-help)}sk-textarea .sk-textarea__counter--near{color:#e6930a}sk-textarea .sk-textarea__counter--max{color:var(--sk-ta-error);font-weight:600}
`],encapsulation:2,changeDetection:0})}return n})(),zc=0,Kb=(()=>{class n{name=g.required();value=g.required();label=g();disabled=g(!1);invalid=g(!1);selectedValue=_t(null);skChange=Ne();inputId=`sk-radio-${++zc}`;handleChange(e){this.selectedValue.set(e),this.skChange.emit(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["sk-radio"]],hostVars:4,hostBindings:function(t,i){t&2&&Ce("sk-radio--invalid",i.invalid())("sk-radio--disabled",i.disabled())},inputs:{name:[1,"name"],value:[1,"value"],label:[1,"label"],disabled:[1,"disabled"],invalid:[1,"invalid"],selectedValue:[1,"selectedValue"]},outputs:{selectedValue:"selectedValueChange",skChange:"skChange"},decls:3,vars:8,consts:[[1,"sk-radio__wrapper"],[3,"ngModelChange","inputId","name","value","ngModel","disabled","invalid"],[1,"sk-radio__label"]],template:function(t,i){t&1&&(b(0,"label",0)(1,"p-radiobutton",1),B("ngModelChange",function(s){return i.handleChange(s)}),m(),ne(2,mc,2,1,"span",2),m()),t&2&&(I("for",i.inputId),d(),u("inputId",i.inputId)("name",i.name())("value",i.value())("ngModel",i.selectedValue())("disabled",i.disabled())("invalid",i.invalid()),d(),ie(i.label()?2:-1))},dependencies:[dt,lt,Ye,ni],styles:[`@charset "UTF-8";sk-radio{display:inline-block}sk-radio .sk-radio__wrapper{display:inline-flex;align-items:flex-start;gap:8px;padding:8px;border-radius:5px;cursor:pointer;-webkit-user-select:none;user-select:none;transition:background-color .15s ease}sk-radio .sk-radio__wrapper:hover:not(.sk-radio--disabled *){background:#00c73d0f}sk-radio.sk-radio--disabled .sk-radio__wrapper{cursor:not-allowed}sk-radio .sk-radio__label{font-family:Open Sans,sans-serif;font-size:16px;font-weight:400;line-height:24px;color:#404040;cursor:inherit}sk-radio.sk-radio--disabled .sk-radio__label{color:#a5a5a5}sk-radio .p-radiobutton{width:18px;height:18px;flex-shrink:0}sk-radio .p-radiobutton-box{width:18px;height:18px;border-radius:50%;border:2px solid #adb5bd;background:#fff;transition:border-color .15s ease,background-color .15s ease,box-shadow .15s ease;display:flex;align-items:center;justify-content:center}sk-radio .p-radiobutton-icon{width:8px;height:8px;border-radius:50%;background:#fff;transition:background-color .15s ease}sk-radio .p-radiobutton-checked .p-radiobutton-box{border-color:#00c73d;background:#00c73d}sk-radio .sk-radio__wrapper:hover .p-radiobutton-box{border-color:#00c73d}sk-radio .sk-radio__wrapper:hover .p-radiobutton-checked .p-radiobutton-box{border-color:#03a835;background:#03a835}sk-radio .p-radiobutton-box.p-focus,sk-radio .p-radiobutton-input:focus~.p-radiobutton-box,sk-radio .p-radiobutton:has(input:focus-visible) .p-radiobutton-box{box-shadow:0 0 0 7px #00c73d33;outline:none}sk-radio .sk-radio__wrapper:active .p-radiobutton-box{box-shadow:0 0 0 7px #00c73d40}sk-radio .sk-radio__wrapper:active .p-radiobutton-checked .p-radiobutton-box{background:#009a2f;border-color:#009a2f}sk-radio.sk-radio--disabled .p-radiobutton-box{border-color:#ddd;background:#f7f7f7;pointer-events:none}sk-radio.sk-radio--disabled .p-radiobutton-checked .p-radiobutton-box{background:#ddd;border-color:#ddd}sk-radio.sk-radio--disabled .p-radiobutton-icon{background:#fff}sk-radio.sk-radio--invalid .p-radiobutton-box{border-color:#e03131}sk-radio.sk-radio--invalid .p-radiobutton-checked .p-radiobutton-box{background:#e03131;border-color:#e03131}sk-radio.sk-radio--invalid .sk-radio__wrapper:hover .p-radiobutton-box{border-color:#c92a2a}sk-radio.sk-radio--invalid .sk-radio__wrapper:hover .p-radiobutton-checked .p-radiobutton-box{background:#c92a2a;border-color:#c92a2a}
`],encapsulation:2,changeDetection:0})}return n})();var Qb=(()=>{class n{items=g.required();anyExplicitActive=V(()=>this.items().some(e=>e.active));isActive(e,t){return this.anyExplicitActive()?!!e.active:t}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["sk-breadcrumb"]],inputs:{items:[1,"items"]},decls:4,vars:0,consts:[["aria-label","Breadcrumb",1,"sk-breadcrumb"],[1,"sk-breadcrumb__list"],[1,"sk-breadcrumb__item"],["aria-current","page",1,"sk-breadcrumb__link","sk-breadcrumb__link--active"],[1,"sk-breadcrumb__icon",3,"class"],[1,"sk-breadcrumb__label"],[1,"sk-breadcrumb__icon"],["tabindex","0",1,"sk-breadcrumb__link"],["aria-hidden","true",1,"sk-breadcrumb__separator"]],template:function(t,i){t&1&&(ve(0,"nav",0)(1,"ol",1),Ai(2,Cc,3,1,"li",2,bc),we()()),t&2&&(d(2),Bi(i.items()))},styles:[`.sk-breadcrumb{display:inline-block}.sk-breadcrumb__list{display:flex;align-items:center;flex-wrap:wrap;list-style:none;margin:0;padding:0;gap:0}.sk-breadcrumb__item{display:flex;align-items:center;gap:8px}.sk-breadcrumb__link{display:inline-flex;align-items:center;gap:4px;font-family:Open Sans,sans-serif;font-size:14px;font-weight:400;line-height:22px;color:#404040;text-decoration:none;border-radius:2px;cursor:pointer;outline:none;position:relative;white-space:nowrap}.sk-breadcrumb__link:hover{color:#404040;text-decoration:underline}.sk-breadcrumb__link:focus-visible{outline:2px solid #00c73d;outline-offset:2px}.sk-breadcrumb__link--active{color:#00c73d;font-weight:700;cursor:default;pointer-events:none}.sk-breadcrumb__icon{font-size:14px;line-height:1;color:inherit}.sk-breadcrumb__separator{font-family:Open Sans,sans-serif;font-size:14px;font-weight:400;line-height:22px;color:#666;-webkit-user-select:none;user-select:none;padding:0 0 0 8px}
`],encapsulation:2,changeDetection:0})}return n})();var Zb=(()=>{class n{static _idCounter=0;label=g();helpText=g();errorMessage=g();disabled=g(!1);invalid=g(!1);checked=_t(!1);skChange=Ne();inputId=`sk-cb-${++n._idCounter}`;showError=V(()=>this.invalid()&&!!this.errorMessage());showHelp=V(()=>!this.showError()&&!!this.helpText());onModelChange(e){this.checked.set(e),this.skChange.emit(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["sk-checkbox"]],hostVars:4,hostBindings:function(t,i){t&2&&Ce("sk-checkbox--invalid",i.invalid())("sk-checkbox--disabled",i.disabled())},inputs:{label:[1,"label"],helpText:[1,"helpText"],errorMessage:[1,"errorMessage"],disabled:[1,"disabled"],invalid:[1,"invalid"],checked:[1,"checked"]},outputs:{checked:"checkedChange",skChange:"skChange"},decls:5,vars:9,consts:[[1,"sk-checkbox__wrapper"],[3,"ngModelChange","inputId","ngModel","binary","disabled","invalid"],[1,"sk-checkbox__label"],[1,"sk-checkbox__msg","sk-checkbox__msg--error"],[1,"sk-checkbox__msg","sk-checkbox__msg--help"]],template:function(t,i){t&1&&(b(0,"label",0)(1,"p-checkbox",1),B("ngModelChange",function(s){return i.onModelChange(s)}),m(),ne(2,kc,2,1,"span",2),m(),ne(3,wc,2,1,"span",3),ne(4,Sc,2,1,"span",4)),t&2&&(I("for",i.inputId),d(),u("inputId",i.inputId)("ngModel",i.checked())("binary",!0)("disabled",i.disabled())("invalid",i.invalid()),d(),ie(i.label()?2:-1),d(),ie(i.showError()?3:-1),d(),ie(i.showHelp()?4:-1))},dependencies:[zt,dt,lt,Ye],styles:[`@charset "UTF-8";sk-checkbox{display:inline-flex;flex-direction:column;gap:4px}sk-checkbox .sk-checkbox__wrapper{display:inline-flex;align-items:center;gap:8px;padding:4px 8px;border-radius:4px;cursor:pointer;-webkit-user-select:none;user-select:none}sk-checkbox.sk-checkbox--disabled .sk-checkbox__wrapper{cursor:not-allowed}sk-checkbox .sk-checkbox__label{font-family:Open Sans,sans-serif;font-size:14px;font-weight:400;line-height:22px;color:#404040;cursor:inherit}sk-checkbox.sk-checkbox--disabled .sk-checkbox__label{color:#a5a5a5}sk-checkbox .sk-checkbox__msg{font-family:Open Sans,sans-serif;font-size:12px;line-height:18px;padding-left:8px}sk-checkbox .sk-checkbox__msg--help{color:#666}sk-checkbox .sk-checkbox__msg--error{color:#e03430}sk-checkbox .p-checkbox{width:18px;height:18px;flex-shrink:0}sk-checkbox .p-checkbox-box{width:18px;height:18px;border-radius:4px;border:1.5px solid #c5c5c5;background:#fff;transition:border-color .15s ease,background-color .15s ease,box-shadow .15s ease;display:flex;align-items:center;justify-content:center}sk-checkbox .p-checkbox-checked .p-checkbox-box{border-color:#00c73d;background:#00c73d}sk-checkbox .sk-checkbox__wrapper:hover .p-checkbox-box{border-color:#00c73d;box-shadow:0 0 0 7px #00c73d1a}sk-checkbox .sk-checkbox__wrapper:hover .p-checkbox-checked .p-checkbox-box{background:#03a835;border-color:#03a835;box-shadow:0 0 0 7px #00c73d26}sk-checkbox .sk-checkbox__wrapper:active .p-checkbox-box{box-shadow:0 0 0 7px #00c73d33}sk-checkbox .sk-checkbox__wrapper:active .p-checkbox-checked .p-checkbox-box{background:#009a2f;border-color:#009a2f;box-shadow:0 0 0 7px #00c73d40}sk-checkbox .p-checkbox:has(input:focus-visible) .p-checkbox-box,sk-checkbox .p-checkbox-box.p-focus{outline:none;box-shadow:0 0 4px #44444426,0 0 0 3px #00c73d4d}sk-checkbox.sk-checkbox--disabled .p-checkbox-box{background:#f7f7f7;border-color:#c5c5c5;pointer-events:none}sk-checkbox.sk-checkbox--disabled .p-checkbox-checked .p-checkbox-box{background:#a5a5a5;border-color:#a5a5a5}sk-checkbox.sk-checkbox--invalid .p-checkbox-box{border-color:#e03430}sk-checkbox.sk-checkbox--invalid .p-checkbox-checked .p-checkbox-box{background:#00c73d;border-color:#e03430}sk-checkbox.sk-checkbox--invalid .sk-checkbox__wrapper:hover .p-checkbox-box{border-color:#c92a2a;box-shadow:0 0 0 7px #e034301a}
`],encapsulation:2,changeDetection:0})}return n})(),Yb=(()=>{class n{options=g([]);optionGroups=g([]);variant=g("check");searchable=g(!0);filterPlaceholder=g("Buscar");scrollHeight=g("200px");emptyTitle=g("\xA1Ups! lo sentimos");emptyMessage=g("No se encontraron resultados");value=_t(null);skChange=Ne();isMultiple=V(()=>this.variant()==="check");isGrouped=V(()=>this.variant()==="group");listOptions=V(()=>this.isGrouped()?this.optionGroups():this.options());onSelectionChange(e){this.value.set(e),this.skChange.emit(e)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["sk-listbox"]],inputs:{options:[1,"options"],optionGroups:[1,"optionGroups"],variant:[1,"variant"],searchable:[1,"searchable"],filterPlaceholder:[1,"filterPlaceholder"],scrollHeight:[1,"scrollHeight"],emptyTitle:[1,"emptyTitle"],emptyMessage:[1,"emptyMessage"],value:[1,"value"]},outputs:{value:"valueChange",skChange:"skChange"},decls:5,vars:11,consts:[["optionLabel","label","optionValue","value","optionGroupLabel","label","optionGroupChildren","items",3,"ngModelChange","options","ngModel","multiple","checkbox","showToggleAll","filter","filterPlaceHolder","group","scrollHeight"],["pTemplate","item"],["pTemplate","group"],["pTemplate","emptyfilter"],["pTemplate","empty"],[1,"sk-listbox__semantic"],[1,"sk-listbox__semantic__title"],[1,"sk-listbox__semantic__desc"],[3,"class"],[1,"sk-listbox__separator"],[1,"sk-listbox__empty"],[1,"pi","pi-search","sk-listbox__empty__icon"],[1,"sk-listbox__empty__title"],[1,"sk-listbox__empty__desc"]],template:function(t,i){t&1&&(b(0,"p-listbox",0),B("ngModelChange",function(s){return i.onSelectionChange(s)}),y(1,Fc,3,1,"ng-template",1)(2,Pc,1,0,"ng-template",2)(3,Vc,6,2,"ng-template",3)(4,Oc,6,2,"ng-template",4),m()),t&2&&(_("sk-listbox sk-listbox--"+i.variant()),u("options",i.listOptions())("ngModel",i.value())("multiple",i.isMultiple())("checkbox",i.isMultiple())("showToggleAll",!1)("filter",i.searchable())("filterPlaceHolder",i.filterPlaceholder())("group",i.isGrouped())("scrollHeight",i.scrollHeight()))},dependencies:[ki,dt,lt,Ye],styles:[`@charset "UTF-8";sk-listbox{display:block}sk-listbox .p-listbox{background:#fff;border:1px solid #dddddd;border-radius:4px;padding:8px;width:100%}sk-listbox .p-listbox-header{padding:0 0 4px;border:none;background:transparent}sk-listbox .p-listbox-filter-container,sk-listbox .p-iconfield{width:100%}sk-listbox .p-listbox-filter{height:32px;padding:8px;border:1px solid #dddddd;border-radius:4px;background:#fff;font-family:Open Sans,sans-serif;font-size:12px;color:#404040;width:100%;box-shadow:none;transition:border-color .15s ease}sk-listbox .p-listbox-filter::placeholder{color:#a5a5a5}sk-listbox .p-listbox-filter:focus,sk-listbox .p-listbox-filter:focus-visible{border-color:#c5c5c5;box-shadow:none;outline:none}sk-listbox .p-listbox-list-wrapper{overflow-y:auto;scrollbar-width:thin;scrollbar-color:#b7b7b7 #f7f7f7}sk-listbox .p-listbox-list-wrapper::-webkit-scrollbar{width:8px}sk-listbox .p-listbox-list-wrapper::-webkit-scrollbar-track{background:#f7f7f7;border-radius:17px}sk-listbox .p-listbox-list-wrapper::-webkit-scrollbar-thumb{background:#b7b7b7;border-radius:38px}sk-listbox .p-listbox-list{padding:0;gap:0}sk-listbox .p-listbox-option{padding:8px;gap:8px;min-height:40px;border-radius:4px;font-family:Open Sans,sans-serif;font-size:14px;line-height:22px;color:#404040;transition:background-color .15s ease;cursor:pointer;display:flex;align-items:center}sk-listbox .p-listbox-option:hover{background:#f7f7f7!important;color:#404040}sk-listbox .p-listbox-option.p-selected,sk-listbox .p-listbox-option[aria-selected=true]{background:#00c73d14!important;color:#404040}sk-listbox .p-listbox-option.p-focus{box-shadow:inset 0 0 0 2px #00c73d4d}sk-listbox.sk-listbox--check .p-checkbox{width:18px;height:18px;flex-shrink:0}sk-listbox.sk-listbox--check .p-checkbox-box{width:18px;height:18px;border-radius:4px;border:1.5px solid #c5c5c5;background:#fff;transition:border-color .15s ease,background-color .15s ease}sk-listbox.sk-listbox--check .p-listbox-option:hover .p-checkbox-box{border-color:#00c73d;box-shadow:0 0 0 5px #00c73d1a}sk-listbox.sk-listbox--check .p-checkbox-checked .p-checkbox-box{border-color:#00c73d;background:#00c73d}sk-listbox.sk-listbox--check .p-listbox-option:hover .p-checkbox-checked .p-checkbox-box{background:#03a835;border-color:#03a835}sk-listbox.sk-listbox--semantic .p-listbox-option{min-height:64px;align-items:flex-start}sk-listbox .sk-listbox__semantic{display:flex;flex-direction:column;gap:4px}sk-listbox .sk-listbox__semantic__title{font-weight:700;font-size:14px;line-height:22px;color:#404040}sk-listbox .sk-listbox__semantic__desc{font-weight:400;font-size:14px;line-height:22px;color:#404040}sk-listbox.sk-listbox--group .p-listbox-option{align-items:center}sk-listbox .sk-listbox__item-icon{font-size:14px;color:#404040;flex-shrink:0}sk-listbox .p-listbox-option-group{padding:0;background:transparent}sk-listbox .sk-listbox__separator{height:1px;background:#e2e2e2;margin:4px 0}sk-listbox .p-listbox-list>li.p-listbox-option-group:first-child .sk-listbox__separator{display:none}sk-listbox .p-listbox-empty-message{padding:0}sk-listbox .sk-listbox__empty{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px 8px;gap:4px;text-align:center}sk-listbox .sk-listbox__empty__icon{font-size:24px;color:#a5a5a5;margin-bottom:4px}sk-listbox .sk-listbox__empty__title{font-family:Open Sans,sans-serif;font-weight:700;font-size:16px;line-height:24px;color:#404040;display:block}sk-listbox .sk-listbox__empty__desc{font-family:Open Sans,sans-serif;font-weight:400;font-size:14px;line-height:22px;color:#404040;margin:0}
`],encapsulation:2,changeDetection:0})}return n})(),Hc=0,Xb=(()=>{class n{label=g("");placeholder=g("");helpText=g("");errorMessage=g("");iconLeft=g("");iconRight=g("");disabled=g(!1);invalid=g(!1);value=_t("");skChange=Ne();skFocus=Ne();skBlur=Ne();inputId=`sk-input-text-${++Hc}`;isFocused=$(!1);isFloating=V(()=>this.isFocused()||(this.value()?.length??0)>0);showError=V(()=>this.invalid()&&!!this.errorMessage());showHelp=V(()=>!this.showError()&&!!this.helpText());onFocus(e){this.isFocused.set(!0),this.skFocus.emit(e)}onBlur(e){this.isFocused.set(!1),this.skBlur.emit(e)}onInput(){this.skChange.emit(this.value())}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=P({type:n,selectors:[["sk-input-text"]],hostVars:6,hostBindings:function(t,i){t&2&&Ce("sk-input-text--floating",i.isFloating())("sk-input-text--error",i.invalid())("sk-input-text--disabled",i.disabled())},inputs:{label:[1,"label"],placeholder:[1,"placeholder"],helpText:[1,"helpText"],errorMessage:[1,"errorMessage"],iconLeft:[1,"iconLeft"],iconRight:[1,"iconRight"],disabled:[1,"disabled"],invalid:[1,"invalid"],value:[1,"value"]},outputs:{value:"valueChange",skChange:"skChange",skFocus:"skFocus",skBlur:"skBlur"},decls:9,vars:9,consts:[[1,"sk-input-text__box"],["aria-hidden","true",3,"class"],[1,"sk-input-text__inner"],["pInputText","",1,"sk-input-text__input",3,"ngModelChange","focus","blur","id","placeholder","disabled","ngModel"],[1,"sk-input-text__label",3,"for"],["role","alert",1,"sk-input-text__footer","sk-input-text__footer--error"],[1,"sk-input-text__footer"],["aria-hidden","true"]],template:function(t,i){t&1&&(b(0,"div",0),ne(1,Nc,1,2,"i",1),b(2,"div",2)(3,"input",3),$i("ngModelChange",function(s){return Hi(i.value,s)||(i.value=s),s}),B("focus",function(s){return i.onFocus(s)})("blur",function(s){return i.onBlur(s)})("ngModelChange",function(){return i.onInput()}),m(),b(4,"label",4),A(5),m()(),ne(6,Rc,1,2,"i",1),m(),ne(7,Ac,2,1,"small",5)(8,Bc,2,1,"small",6)),t&2&&(d(),ie(i.iconLeft()?1:-1),d(2),u("id",i.inputId)("placeholder",i.isFloating()?i.placeholder():"")("disabled",i.disabled()),zi("ngModel",i.value),d(),u("for",i.inputId),d(),K(i.label()),d(),ie(i.iconRight()?6:-1),d(),ie(i.showError()?7:i.showHelp()?8:-1))},dependencies:[dt,Lt,lt,Ye,wn],styles:[`@charset "UTF-8";sk-input-text{display:block}sk-input-text .sk-input-text__box{display:flex;align-items:center;gap:8px;height:58px;padding:8px 16px;background:#fff;border:1px solid #dddddd;border-radius:4px;cursor:text;box-sizing:border-box;transition:border-color .15s ease,border-radius .15s ease,box-shadow .15s ease}sk-input-text .sk-input-text__box:focus-within{border-color:#16d727;border-radius:8px;box-shadow:none}sk-input-text .sk-input-text__inner{flex:1;min-width:0;align-self:stretch;position:relative}sk-input-text .sk-input-text__input{position:absolute;top:0;left:0;width:100%;height:100%!important;padding:10px 0!important;border:none!important;background:transparent!important;box-shadow:none!important;outline:none;font-family:Open Sans,sans-serif;font-size:14px;font-weight:400;line-height:22px;color:#404040;z-index:1;box-sizing:border-box;transition:padding-top .15s ease,padding-bottom .15s ease}sk-input-text .sk-input-text__input:focus{outline:none;box-shadow:none!important}sk-input-text .sk-input-text__input::placeholder{color:#a5a5a5}sk-input-text .sk-input-text__input:disabled{cursor:not-allowed;color:#404040}sk-input-text .sk-input-text__label{position:absolute;left:0;top:50%;transform:translateY(-50%);font-family:Open Sans,sans-serif;font-size:14px;font-weight:400;line-height:22px;color:#666;pointer-events:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;z-index:0;transition:top .15s ease,transform .15s ease,font-size .15s ease,line-height .15s ease}sk-input-text.sk-input-text--floating .sk-input-text__box{border-color:transparent;border-radius:8px;box-shadow:0 0 2px #44444426}sk-input-text.sk-input-text--floating .sk-input-text__box:focus-within{border-color:#16d727;box-shadow:none}sk-input-text.sk-input-text--floating .sk-input-text__label{top:0;transform:none;font-size:12px;line-height:20px}sk-input-text.sk-input-text--floating .sk-input-text__input{padding-top:20px!important;padding-bottom:0!important}sk-input-text.sk-input-text--error .sk-input-text__box{border-color:#e03430;border-radius:8px;box-shadow:0 0 2px #44444426}sk-input-text.sk-input-text--error .sk-input-text__box:focus-within{border-color:#e03430;box-shadow:0 0 2px #44444426}sk-input-text.sk-input-text--disabled .sk-input-text__box{background:#f7f7f7;border-color:transparent;border-radius:8px;box-shadow:none;cursor:not-allowed}sk-input-text.sk-input-text--disabled .sk-input-text__box:focus-within{border-color:transparent;box-shadow:none}sk-input-text .sk-input-text__icon{font-size:16px;color:#666;flex-shrink:0;pointer-events:none}sk-input-text .sk-input-text__footer{display:block;margin-top:4px;font-family:Open Sans,sans-serif;font-size:12px;font-weight:400;line-height:20px;color:#666}sk-input-text .sk-input-text__footer--error{color:#de423e}
`],encapsulation:2,changeDetection:0})}return n})();var ss={"Segmento Personas Retail & Wealth":"Ventas",Tecnolog\u00EDa:"Tecnolog\xEDa","Customer Experience":"Servicio al Cliente",Operaciones:"Operaciones","Gesti\xF3n Humana y del Conocimiento":"Talento Humano"},e_=Object.keys(ss),t_=["Primer empleo / Practicante","Junior","Semi Senior","Senior","Liderazgo"],n_=["Skandia Pensiones y Cesant\xEDas S.A","Skandia Fiduciaria S.A","Skandia Seguros de Vida S.A","Skandia Valores S.A","Skandia Planeaci\xF3n Financiera S.A","Skandia Holding de Colombia S.A"],i_=["Mar\xEDa Fernanda Restrepo","Natalia Quiroga","Daniela Vargas"],o_=[{id:"asesor-pensional-bog",titulo:"Asesor Pensional",ejeFuncional:"Segmento Personas Retail & Wealth",ciudad:"Bogot\xE1",modalidad:"H\xEDbrido",tipoContrato:"T\xE9rmino indefinido",nivelExperiencia:"Semi Senior",visitaClientes:!0,mision:"Acompa\xF1ar a nuestros clientes en la construcci\xF3n de su futuro pensional, ayud\xE1ndoles a alcanzar sus metas financieras de largo plazo.",responsabilidades:["Asesorar a clientes actuales y potenciales sobre productos de pensi\xF3n voluntaria y obligatoria.","Gestionar la cartera de clientes asignada y cumplir metas comerciales mensuales.","Realizar seguimiento a las solicitudes de traslado y afiliaci\xF3n.","Mantener actualizada la informaci\xF3n de clientes en el CRM."],requisitos:["Profesional o t\xE9cnico en carreras administrativas, econ\xF3micas o afines.","1 a\xF1o de experiencia en asesor\xEDa comercial o financiera.","Certificaci\xF3n AMV vigente (deseable)."],beneficios:["Comisiones sin techo sobre cumplimiento de metas.","Auxilio de movilidad.","Plan de carrera dentro de la Vicepresidencia de Ventas."],interno:{compania:"Skandia Pensiones y Cesant\xEDas S.A",salario:"$4.500.000 + comisiones",centroCosto:"BOGOTA SK BRANCH",lider:"Juliana Restrepo",reclutador:"Mar\xEDa Fernanda Restrepo",reemplazoDe:null,observaciones:"Vacante nueva por crecimiento del equipo comercial en Bogot\xE1."}},{id:"financial-planner-med",titulo:"Financial Planner",ejeFuncional:"Segmento Personas Retail & Wealth",ciudad:"Medell\xEDn",modalidad:"H\xEDbrido",tipoContrato:"T\xE9rmino indefinido",nivelExperiencia:"Semi Senior",visitaClientes:!0,mision:"Ense\xF1ar a las personas a construir metas financieras de corto, mediano y largo plazo, dise\xF1ando planes personalizados de inversi\xF3n y protecci\xF3n.",responsabilidades:["Dise\xF1ar planes financieros personalizados para clientes de banca personal.","Presentar el portafolio de productos de inversi\xF3n y seguros de Skandia.","Construir relaciones de largo plazo con clientes de alto valor.","Cumplir metas de vinculaci\xF3n y AUM (activos bajo administraci\xF3n)."],requisitos:["Profesional en finanzas, econom\xEDa, administraci\xF3n o afines.","2 a\xF1os de experiencia en asesor\xEDa financiera o banca personal.","Habilidades de comunicaci\xF3n y orientaci\xF3n al cliente."],beneficios:["Esquema de comisiones + variable competitivo.","Capacitaci\xF3n continua en productos de inversi\xF3n.","Posibilidad de certificaci\xF3n internacional en planeaci\xF3n financiera."],interno:{compania:"Skandia Pensiones y Cesant\xEDas S.A",salario:"$5.200.000 + variable",centroCosto:"MEDELLIN SK BRANCH",lider:"Juliana Restrepo",reclutador:"Mar\xEDa Fernanda Restrepo",reemplazoDe:null,observaciones:""}},{id:"analista-servicio-cliente-bog",titulo:"Analista Jr. de Servicio al Cliente",ejeFuncional:"Customer Experience",ciudad:"Bogot\xE1",modalidad:"Presencial",tipoContrato:"T\xE9rmino indefinido",nivelExperiencia:"Junior",visitaClientes:!1,mision:"Brindar una experiencia de servicio extraordinaria a nuestros clientes a trav\xE9s de procesos eficientes y atenci\xF3n oportuna.",responsabilidades:["Atender solicitudes de clientes por los canales de servicio (chat, correo, l\xEDnea telef\xF3nica).","Radicar y dar seguimiento a PQRS dentro de los tiempos establecidos.","Documentar novedades y proponer mejoras a los procesos de atenci\xF3n.","Colaborar con otras \xE1reas para resolver casos complejos."],requisitos:["T\xE9cnico o profesional en curso en \xE1reas administrativas o afines.","6 meses de experiencia en servicio al cliente (call center o presencial).","Excelente comunicaci\xF3n oral y escrita."],beneficios:["Horario fijo de oficina, sin turnos rotativos.","Plan de formaci\xF3n en productos financieros.","Posibilidad de crecimiento hacia roles de asesor\xEDa comercial."],interno:{compania:"Skandia Seguros de Vida S.A",salario:"$2.600.000",centroCosto:"CALL CENTER",lider:"Camilo Andrade",reclutador:"Natalia Quiroga",reemplazoDe:"Juan S\xE1nchez",observaciones:"Reemplazo por renuncia."}},{id:"analista-servicio-cliente-cali",titulo:"Asesor/a Call Center",ejeFuncional:"Customer Experience",ciudad:"Cali",modalidad:"Presencial",tipoContrato:"T\xE9rmino fijo",nivelExperiencia:"Primer empleo / Practicante",visitaClientes:!1,mision:"Resolver las inquietudes de nuestros clientes en el primer contacto, garantizando una experiencia \xE1gil y cercana.",responsabilidades:["Recibir y gestionar llamadas entrantes de clientes.","Escalar casos que requieran intervenci\xF3n de un \xE1rea especializada.","Cumplir indicadores de calidad y tiempo de respuesta."],requisitos:["Bachiller acad\xE9mico; t\xE9cnico o tecn\xF3logo deseable.","6 meses de experiencia en servicio al cliente telef\xF3nico."],beneficios:["Contrato a t\xE9rmino fijo con posibilidad de renovaci\xF3n.","Bonos por indicadores de calidad."],interno:{compania:"Skandia Seguros de Vida S.A",salario:"$1.800.000",centroCosto:"CALI SK BRANCH",lider:"Camilo Andrade",reclutador:"Natalia Quiroga",reemplazoDe:null,observaciones:"Vacante nueva por ampliaci\xF3n de turno."}},{id:"desarrollador-backend-bog",titulo:"Desarrollador/a Backend",ejeFuncional:"Tecnolog\xEDa",ciudad:"Colombia",modalidad:"H\xEDbrido",tipoContrato:"T\xE9rmino indefinido",nivelExperiencia:"Senior",visitaClientes:!1,mision:"Construir y mantener los servicios que soportan los productos digitales de Skandia, con foco en calidad y seguridad de la informaci\xF3n.",responsabilidades:["Desarrollar y mantener microservicios en .NET / Java.","Participar en la definici\xF3n t\xE9cnica de nuevas funcionalidades.","Escribir pruebas automatizadas y documentaci\xF3n t\xE9cnica.","Colaborar con equipos de producto y UX en la definici\xF3n de soluciones."],requisitos:["Profesional en ingenier\xEDa de sistemas o afines.","3 a\xF1os de experiencia en desarrollo backend.","Conocimiento en bases de datos relacionales y APIs REST."],beneficios:["Modalidad h\xEDbrida (2 d\xEDas presenciales por semana, sede Bogot\xE1).","Presupuesto anual de formaci\xF3n t\xE9cnica.","Auxilio de conectividad."],interno:{compania:"Skandia Holding de Colombia S.A",salario:"$7.500.000",centroCosto:"TECHNOLOGY DELIVERY",lider:"Andr\xE9s Salcedo",reclutador:"Daniela Vargas",reemplazoDe:null,observaciones:"Vacante nueva para el squad de Core Bancario. Aplica a nivel nacional."}},{id:"analista-datos-med",titulo:"Analista de Datos",ejeFuncional:"Tecnolog\xEDa",ciudad:"Colombia",modalidad:"Remoto",tipoContrato:"T\xE9rmino indefinido",nivelExperiencia:"Semi Senior",visitaClientes:!1,mision:"Transformar datos en informaci\xF3n que permita tomar mejores decisiones de negocio en toda la organizaci\xF3n.",responsabilidades:["Construir tableros y reportes en herramientas de BI.","Modelar y limpiar bases de datos para an\xE1lisis.","Apoyar a las \xE1reas de negocio en la interpretaci\xF3n de resultados."],requisitos:["Profesional en ingenier\xEDa, estad\xEDstica, econom\xEDa o afines.","2 a\xF1os de experiencia en an\xE1lisis de datos.","Manejo de SQL y herramientas de visualizaci\xF3n (Power BI o similar)."],beneficios:["Modalidad 100% remota.","Horario flexible.","Equipo de trabajo asignado (laptop)."],interno:{compania:"Skandia Holding de Colombia S.A",salario:"$4.800.000",centroCosto:"DATA & ANALYTICS",lider:"Andr\xE9s Salcedo",reclutador:"Daniela Vargas",reemplazoDe:"Felipe G\xF3mez",observaciones:"Reemplazo por movimiento interno. Aplica a nivel nacional."}},{id:"analista-operaciones-bog",titulo:"Analista de Operaciones",ejeFuncional:"Operaciones",ciudad:"Bogot\xE1",modalidad:"Presencial",tipoContrato:"T\xE9rmino indefinido",nivelExperiencia:"Junior",visitaClientes:!1,mision:"Garantizar la correcta ejecuci\xF3n de los procesos operativos que soportan la administraci\xF3n de los productos de ahorro y pensi\xF3n.",responsabilidades:["Procesar y validar transacciones diarias de los productos administrados.","Controlar la calidad de la informaci\xF3n antes de su liquidaci\xF3n.","Identificar y reportar inconsistencias operativas."],requisitos:["T\xE9cnico o profesional en \xE1reas administrativas, financieras o afines.","1 a\xF1o de experiencia en procesos operativos del sector financiero.","Manejo intermedio de Excel."],beneficios:["Horario de oficina de lunes a viernes.","Estabilidad laboral y plan de carrera dentro de Operaciones."],interno:{compania:"Skandia Fiduciaria S.A",salario:"$3.100.000",centroCosto:"OPERACIONES FIDUCIARIA",lider:"Marcela Nieto",reclutador:"Mar\xEDa Fernanda Restrepo",reemplazoDe:null,observaciones:""}},{id:"gestor-innovacion-bog",titulo:"Gestor de Innovaci\xF3n (Talento con discapacidad)",ejeFuncional:"Gesti\xF3n Humana y del Conocimiento",ciudad:"Bogot\xE1",modalidad:"Presencial",tipoContrato:"T\xE9rmino indefinido",nivelExperiencia:"Primer empleo / Practicante",visitaClientes:!1,mision:"Buscamos personas en condici\xF3n de discapacidad para construir juntos el futuro financiero, aportando nuevas perspectivas a nuestros procesos de innovaci\xF3n.",responsabilidades:["Apoyar la identificaci\xF3n de oportunidades de mejora en procesos internos.","Participar en proyectos de innovaci\xF3n con equipos multidisciplinarios.","Documentar hallazgos y proponer soluciones."],requisitos:["T\xE9cnico, tecn\xF3logo o profesional en formaci\xF3n o graduado.","Certificado de discapacidad vigente.","Disposici\xF3n para aprender procesos financieros."],beneficios:["Ambiente de trabajo inclusivo y accesible.","Acompa\xF1amiento y ajustes razonables seg\xFAn necesidad.","Plan de formaci\xF3n en procesos de innovaci\xF3n."],interno:{compania:"Skandia Holding de Colombia S.A",salario:"$2.400.000",centroCosto:"CONTINUOUS IMPROVEMENT",lider:"Paula Duarte",reclutador:"Natalia Quiroga",reemplazoDe:null,observaciones:"Vacante del programa de inclusi\xF3n de talento con discapacidad."}},{id:"especialista-seleccion-bog",titulo:"Especialista de Selecci\xF3n",ejeFuncional:"Gesti\xF3n Humana y del Conocimiento",ciudad:"Bogot\xE1",modalidad:"H\xEDbrido",tipoContrato:"T\xE9rmino indefinido",nivelExperiencia:"Senior",visitaClientes:!1,mision:"Liderar los procesos de atracci\xF3n y selecci\xF3n de talento, garantizando una experiencia de candidato \xE1gil y de calidad.",responsabilidades:["Gestionar el ciclo completo de selecci\xF3n para vacantes de todas las vicepresidencias.","Filtrar y preseleccionar candidatos antes de enviarlos a las \xE1reas.","Coordinar entrevistas y dar retroalimentaci\xF3n oportuna a los candidatos."],requisitos:["Profesional en psicolog\xEDa, administraci\xF3n o afines.","2 a\xF1os de experiencia en selecci\xF3n de personal.","Manejo de pruebas psicot\xE9cnicas y entrevistas por competencias."],beneficios:["Rol clave en la transformaci\xF3n del proceso de vacantes de Skandia.","Modalidad h\xEDbrida."],interno:{compania:"Skandia Holding de Colombia S.A",salario:"$5.800.000",centroCosto:"GESTION HUMANA Y DEL CONOCIMIENTO",lider:"Natalia Quiroga",reclutador:"Daniela Vargas",reemplazoDe:null,observaciones:"Nueva posici\xF3n para fortalecer el equipo de selecci\xF3n."}},{id:"asesor-multiple-barranquilla",titulo:"Asesor(a) M\xFAltiple Horario Especial",ejeFuncional:"Segmento Personas Retail & Wealth",ciudad:"Barranquilla",modalidad:"Presencial",tipoContrato:"T\xE9rmino fijo",nivelExperiencia:"Junior",visitaClientes:!0,mision:"Ofrecer soluciones de ahorro, inversi\xF3n y protecci\xF3n a los clientes de la regi\xF3n Caribe, con horario especial de atenci\xF3n.",responsabilidades:["Atender y asesorar clientes en oficina y de forma telef\xF3nica.","Cumplir metas comerciales mensuales.","Realizar seguimiento postventa a los clientes vinculados."],requisitos:["T\xE9cnico o profesional en carreras administrativas o afines.","1 a\xF1o de experiencia comercial en el sector financiero."],beneficios:["Comisiones por cumplimiento.","Capacitaci\xF3n en productos de ahorro e inversi\xF3n."],interno:{compania:"Skandia Pensiones y Cesant\xEDas S.A",salario:"$3.200.000 + comisiones",centroCosto:"BARRANQUILLA SK BRANCH",lider:"Rodrigo Salas",reclutador:"Mar\xEDa Fernanda Restrepo",reemplazoDe:null,observaciones:"Horario especial: s\xE1bados 8:00 a.m. - 2:00 p.m."}}];function $c(n){return ss[n.ejeFuncional]}function r_(n){let o=new Map;for(let e of n){let t=$c(e),i=o.get(t)??[];i.push(e),o.set(t,i)}return o}export{Xe as a,oe as b,ce as c,Jn as d,Su as e,Du as f,Oo as g,yn as h,S as i,Pe as j,Et as k,We as l,$o as m,xn as n,Go as o,kn as p,Yo as q,at as r,lt as s,ru as t,Ps as u,Ye as v,au as w,dt as x,Mt as y,wn as z,Wr as A,Qr as B,es as C,Wb as D,qb as E,Kb as F,Qb as G,Zb as H,Yb as I,Xb as J,ss as K,e_ as L,t_ as M,n_ as N,i_ as O,o_ as P,$c as Q,r_ as R};
