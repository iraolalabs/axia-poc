import{$ as Xe,$a as De,A as dt,Aa as Fe,Ab as Gr,B as Er,Ba as Tr,Bb as Bt,Ca as ft,Cb as Wr,Da as Fr,Db as Ei,E as Mi,Eb as Mn,F as Ar,G as Te,Ga as y,Gb as Oe,H as Dr,Ha as M,Hb as Pe,I as oe,Ia as N,Ib as Sn,J as Ce,Ja as Me,K as ae,Ka as We,Kb as zt,L as Ir,La as Nr,Lb as Ur,M as Ee,Mb as be,N as Tt,Na as Vt,Nb as O,Oa as Lr,Ob as Ve,P as bn,Pb as Hr,Q as b,Qa as qe,Qb as En,R as w,Ra as L,Rb as $r,Sa as P,Sb as An,T as f,Ta as k,Tb as Yr,U as Ft,Ua as Vr,Ub as Xr,V as s,Va as xn,Vb as qr,Wa as Cn,X as mt,Xa as j,Xb as Dn,Ya as u,Z as me,Za as h,_ as ue,_a as W,_b as In,a as v,aa as Or,ab as Ne,b as ee,ba as U,bb as Ue,c as ie,ca as z,cb as wn,da as ut,db as Ie,e as lt,eb as gt,f as C,fa as F,fb as Z,g as fn,ga as T,gb as H,ha as vn,hb as Br,i as gn,ib as g,j as ce,jb as te,k as wr,ka as K,kb as I,la as ht,lb as He,ma as Ae,mb as he,n as Y,na as Nt,nb as A,o as Ci,oa as E,ob as D,pa as Lt,pb as zr,qa as Pr,qb as jr,r as Mr,ra as kr,rb as Si,s as ze,sa as yn,sb as Le,t as Se,ta as Rr,tb as Ke,u as re,ua as je,ub as S,v as wi,va as p,vb as _e,w as _n,wa as Ge,wb as B,xa as pt,xb as se,y as Sr,ya as we,yb as Ze,z as ct,za as ge,zb as pe}from"./chunk-IUTJIY26.js";function Ai(i){i||(i=s(ut));let n=new lt(e=>{if(i.destroyed){e.next();return;}return i.onDestroy(e.next.bind(e));});return e=>e.pipe(ae(n));}function Oi(i){return i==null||Pi(i)===0;}function Pi(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null;}var no=new f(""),io=new f(""),cs=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Pn=class{static min(n){return ds(n);}static max(n){return ms(n);}static required(n){return us(n);}static requiredTrue(n){return hs(n);}static email(n){return ps(n);}static minLength(n){return fs(n);}static maxLength(n){return gs(n);}static pattern(n){return _s(n);}static nullValidator(n){return ro();}static compose(n){return mo(n);}static composeAsync(n){return uo(n);}};function ds(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<i?{min:{min:i,actual:n.value}}:null;};}function ms(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>i?{max:{max:i,actual:n.value}}:null;};}function us(i){return Oi(i.value)?{required:!0}:null;}function hs(i){return i.value===!0?null:{required:!0};}function ps(i){return Oi(i.value)||cs.test(i.value)?null:{email:!0};}function fs(i){return n=>{let e=n.value?.length??Pi(n.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null;};}function gs(i){return n=>{let e=n.value?.length??Pi(n.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null;};}function _s(i){if(!i)return ro;let n,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=i.toString(),n=i),t=>{if(Oi(t.value))return null;let r=t.value;return n.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}};};}function ro(i){return null;}function oo(i){return i!=null;}function ao(i){return Lr(i)?gn(i):i;}function so(i){let n={};return i.forEach(e=>{n=e!=null?v(v({},n),e):n;}),Object.keys(n).length===0?null:n;}function lo(i,n){return n.map(e=>e(i));}function bs(i){return!i.validate;}function co(i){return i.map(n=>bs(n)?n:e=>n.validate(e));}function mo(i){if(!i)return null;let n=i.filter(oo);return n.length==0?null:function(e){return so(lo(e,n));};}function ki(i){return i!=null?mo(co(i)):null;}function uo(i){if(!i)return null;let n=i.filter(oo);return n.length==0?null:function(e){let t=lo(e,n).map(ao);return ze(t).pipe(Y(so));};}function Ri(i){return i!=null?uo(co(i)):null;}function Kr(i,n){return i===null?[n]:Array.isArray(i)?[...i,n]:[i,n];}function ho(i){return i._rawValidators;}function po(i){return i._rawAsyncValidators;}function Di(i){return i?Array.isArray(i)?i:[i]:[];}function kn(i,n){return Array.isArray(i)?i.includes(n):i===n;}function Zr(i,n){let e=Di(n);return Di(i).forEach(r=>{kn(e,r)||e.push(r);}),e;}function Qr(i,n){return Di(n).filter(e=>!kn(i,e));}var Rn=class{get value(){return this.control?this.control.value:null;}get valid(){return this.control?this.control.valid:null;}get invalid(){return this.control?this.control.invalid:null;}get pending(){return this.control?this.control.pending:null;}get disabled(){return this.control?this.control.disabled:null;}get enabled(){return this.control?this.control.enabled:null;}get errors(){return this.control?this.control.errors:null;}get pristine(){return this.control?this.control.pristine:null;}get dirty(){return this.control?this.control.dirty:null;}get touched(){return this.control?this.control.touched:null;}get status(){return this.control?this.control.status:null;}get untouched(){return this.control?this.control.untouched:null;}get statusChanges(){return this.control?this.control.statusChanges:null;}get valueChanges(){return this.control?this.control.valueChanges:null;}get path(){return null;}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=ki(this._rawValidators);}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Ri(this._rawAsyncValidators);}get validator(){return this._composedValidatorFn||null;}get asyncValidator(){return this._composedAsyncValidatorFn||null;}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n);}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[];}reset(n=void 0){this.control?.reset(n);}hasError(n,e){return this.control?this.control.hasError(n,e):!1;}getError(n,e){return this.control?this.control.getError(n,e):null;}},vt=class extends Rn{name;get formDirective(){return null;}get path(){return null;}},Tn=class extends Rn{_parent=null;name=null;valueAccessor=null;};var jt="VALID",On="INVALID",_t="PENDING",Gt="DISABLED",$e=class{},Fn=class extends $e{value;source;constructor(n,e){super(),this.value=n,this.source=e;}},Ut=class extends $e{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e;}},Ht=class extends $e{touched;source;constructor(n,e){super(),this.touched=n,this.source=e;}},bt=class extends $e{status;source;constructor(n,e){super(),this.status=n,this.source=e;}},Nn=class extends $e{source;constructor(n){super(),this.source=n;}},Ln=class extends $e{source;constructor(n){super(),this.source=n;}};function fo(i){return(Gn(i)?i.validators:i)||null;}function vs(i){return Array.isArray(i)?ki(i):i||null;}function go(i,n){return(Gn(n)?n.asyncValidators:i)||null;}function ys(i){return Array.isArray(i)?Ri(i):i||null;}function Gn(i){return i!=null&&!Array.isArray(i)&&typeof i=="object";}function xs(i,n,e){let t=i.controls;if(!(n?Object.keys(t):t).length)throw new Tt(1e3,"");if(!t[e])throw new Tt(1001,"");}function Cs(i,n,e){i._forEachChild((t,r)=>{if(e[r]===void 0)throw new Tt(1002,"");});}var Vn=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e);}get validator(){return this._composedValidatorFn;}set validator(n){this._rawValidators=this._composedValidatorFn=n;}get asyncValidator(){return this._composedAsyncValidatorFn;}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n;}get parent(){return this._parent;}get status(){return Oe(this.statusReactive);}set status(n){Oe(()=>this.statusReactive.set(n));}_status=Pe(()=>this.statusReactive());statusReactive=K(void 0);get valid(){return this.status===jt;}get invalid(){return this.status===On;}get pending(){return this.status===_t;}get disabled(){return this.status===Gt;}get enabled(){return this.status!==Gt;}errors;get pristine(){return Oe(this.pristineReactive);}set pristine(n){Oe(()=>this.pristineReactive.set(n));}_pristine=Pe(()=>this.pristineReactive());pristineReactive=K(!0);get dirty(){return!this.pristine;}get touched(){return Oe(this.touchedReactive);}set touched(n){Oe(()=>this.touchedReactive.set(n));}_touched=Pe(()=>this.touchedReactive());touchedReactive=K(!1);get untouched(){return!this.touched;}_events=new C();events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change";}setValidators(n){this._assignValidators(n);}setAsyncValidators(n){this._assignAsyncValidators(n);}addValidators(n){this.setValidators(Zr(n,this._rawValidators));}addAsyncValidators(n){this.setAsyncValidators(Zr(n,this._rawAsyncValidators));}removeValidators(n){this.setValidators(Qr(n,this._rawValidators));}removeAsyncValidators(n){this.setAsyncValidators(Qr(n,this._rawAsyncValidators));}hasValidator(n){return kn(this._rawValidators,n);}hasAsyncValidator(n){return kn(this._rawAsyncValidators,n);}clearValidators(){this.validator=null;}clearAsyncValidators(){this.asyncValidator=null;}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(ee(v({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new Ht(!0,t));}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n));}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n));}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=n.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:t});}),n.onlySelf||this._parent?._updateTouched(n,t),e&&n.emitEvent!==!1&&this._events.next(new Ht(!1,t));}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(ee(v({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new Ut(!1,t));}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=n.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent});}),n.onlySelf||this._parent?._updatePristine(n,t),e&&n.emitEvent!==!1&&this._events.next(new Ut(!0,t));}markAsPending(n={}){this.status=_t;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new bt(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(ee(v({},n),{sourceControl:e}));}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Gt,this.errors=null,this._forEachChild(r=>{r.disable(ee(v({},n),{onlySelf:!0}));}),this._updateValue();let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Fn(this.value,t)),this._events.next(new bt(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ee(v({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(r=>r(!0));}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=jt,this._forEachChild(t=>{t.enable(ee(v({},n),{onlySelf:!0}));}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(ee(v({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1));}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e));}setParent(n){this._parent=n;}getRawValue(){return this.value;}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===jt||this.status===_t)&&this._runAsyncValidator(t,n.emitEvent);}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new Fn(this.value,e)),this._events.next(new bt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(ee(v({},n),{sourceControl:e}));}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent});}_setInitialStatus(){this.status=this._allControlsDisabled()?Gt:jt;}_runValidator(){return this.validator?this.validator(this):null;}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=_t,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let t=ao(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:e,shouldHaveEmitted:n});});}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n;}return!1;}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted);}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,r)=>t&&t._find(r),this);}getError(n,e){let t=e?this.get(e):this;return t?.errors?t.errors[n]:null;}hasError(n,e){return!!this.getError(n,e);}get root(){let n=this;for(;n._parent;)n=n._parent;return n;}_updateControlsErrors(n,e,t){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||t)&&this._events.next(new bt(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,t);}_initObservables(){this.valueChanges=new F(),this.statusChanges=new F();}_calculateStatus(){return this._allControlsDisabled()?Gt:this.errors?On:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(_t)?_t:this._anyControlsHaveStatus(On)?On:jt;}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n);}_anyControlsDirty(){return this._anyControls(n=>n.dirty);}_anyControlsTouched(){return this._anyControls(n=>n.touched);}_updatePristine(n,e){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,n.onlySelf||this._parent?._updatePristine(n,e),r&&this._events.next(new Ut(this.pristine,e));}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Ht(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e);}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n;}_setUpdateStrategy(n){Gn(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn);}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty();}_find(n){return null;}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=vs(this._rawValidators);}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=ys(this._rawAsyncValidators);}},Bn=class extends Vn{constructor(n,e,t){super(fo(e),go(t,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator});}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e);}addControl(n,e,t={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange();}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange();}setControl(n,e,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange();}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled;}setValue(n,e={}){Cs(this,!0,n),Object.keys(n).forEach(t=>{xs(this,!0,t),this.controls[t].setValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent});}),this.updateValueAndValidity(e);}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(t=>{let r=this.controls[t];r&&r.patchValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent});}),this.updateValueAndValidity(e));}reset(n={},e={}){this._forEachChild((t,r)=>{t.reset(n?n[r]:null,ee(v({},e),{onlySelf:!0}));}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Ln(this));}getRawValue(){return this._reduceChildren({},(n,e,t)=>(n[t]=e.getRawValue(),n));}_syncPendingControls(){let n=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n;}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&n(t,e);});}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange);});}_updateValue(){this.value=this._reduceValue();}_anyControls(n){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&n(t))return!0;return!1;}_reduceValue(){let n={};return this._reduceChildren(n,(e,t,r)=>((t.enabled||this.disabled)&&(e[r]=t.value),e));}_reduceChildren(n,e){let t=n;return this._forEachChild((r,o)=>{t=e(t,r,o);}),t;}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled;}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null;}};var _o=new f("",{factory:()=>bo}),bo="always";function Ii(i,n,e=bo){Ti(i,n),n.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(i.disabled),Ms(i,n),Es(i,n),Ss(i,n),ws(i,n);}function Jr(i,n,e=!0){let t=()=>{};n?.valueAccessor?.registerOnChange(t),n?.valueAccessor?.registerOnTouched(t),jn(i,n),i&&(n._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}));}function zn(i,n){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n);});}function ws(i,n){if(n.valueAccessor.setDisabledState){let e=t=>{n.valueAccessor.setDisabledState(t);};i.registerOnDisabledChange(e),n._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e);});}}function Ti(i,n){let e=ho(i);n.validator!==null?i.setValidators(Kr(e,n.validator)):typeof e=="function"&&i.setValidators([e]);let t=po(i);n.asyncValidator!==null?i.setAsyncValidators(Kr(t,n.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let r=()=>i.updateValueAndValidity();zn(n._rawValidators,r),zn(n._rawAsyncValidators,r);}function jn(i,n){let e=!1;if(i!==null){if(n.validator!==null){let r=ho(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.validator);o.length!==r.length&&(e=!0,i.setValidators(o));}}if(n.asyncValidator!==null){let r=po(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(a=>a!==n.asyncValidator);o.length!==r.length&&(e=!0,i.setAsyncValidators(o));}}}let t=()=>{};return zn(n._rawValidators,t),zn(n._rawAsyncValidators,t),e;}function Ms(i,n){n.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&vo(i,n);});}function Ss(i,n){n.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&vo(i,n),i.updateOn!=="submit"&&i.markAsTouched();});}function vo(i,n){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1;}function Es(i,n){let e=(t,r)=>{n.valueAccessor.writeValue(t),r&&n.viewToModelUpdate(t);};i.registerOnChange(e),n._registerOnDestroy(()=>{i._unregisterOnChange(e);});}function yo(i,n){i==null,Ti(i,n);}function As(i,n){return jn(i,n);}function xo(i,n){i._syncPendingControls(),n.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1);});}function Ds(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1);}var Is={provide:vt,useExisting:bn(()=>Fi)},Wt=Promise.resolve(),Fi=(()=>{class i extends vt{callSetDisabledState;get submitted(){return Oe(this.submittedReactive);}_submitted=Pe(()=>this.submittedReactive());submittedReactive=K(!1);_directives=new Set();form;ngSubmit=new F();options;constructor(e,t,r){super(),this.callSetDisabledState=r,this.form=new Bn({},ki(e),Ri(t));}ngAfterViewInit(){this._setUpdateStrategy();}get formDirective(){return this;}get control(){return this.form;}get path(){return[];}get controls(){return this.form.controls;}addControl(e){Wt.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),Ii(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e);});}getControl(e){return this.form.get(e.path);}removeControl(e){Wt.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e);});}addFormGroup(e){Wt.then(()=>{let t=this._findContainer(e.path),r=new Bn({});yo(r,e),t.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1});});}removeFormGroup(e){Wt.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name);});}getFormGroup(e){return this.form.get(e.path);}updateModel(e,t){Wt.then(()=>{this.form.get(e.path).setValue(t);});}setValue(e){this.control.setValue(e);}onSubmit(e){return this.submittedReactive.set(!0),xo(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new Nn(this.control)),e?.target?.method==="dialog";}onReset(){this.resetForm();}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1);}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn);}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form;}static ɵfac=function(t){return new(t||i)(Fe(no,10),Fe(io,10),Fe(_o,8));};static ɵdir=N({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,r){t&1&&H("submit",function(a){return r.onSubmit(a);})("reset",function(){return r.onReset();});},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[pe([Is]),Me]});}return i;})();function eo(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1);}function to(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i;}var Wn=class extends Vn{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,t){super(fo(e),go(t,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Gn(e)&&(e.nonNullable||e.initialValueIsDefault)&&(to(n)?this.defaultValue=n.value:this.defaultValue=n);}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e);}patchValue(n,e={}){this.setValue(n,e);}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Ln(this));}_updateValue(){}_anyControls(n){return!1;}_allControlsDisabled(){return this.disabled;}registerOnChange(n){this._onChange.push(n);}_unregisterOnChange(n){eo(this._onChange,n);}registerOnDisabledChange(n){this._onDisabledChange.push(n);}_unregisterOnDisabledChange(n){eo(this._onDisabledChange,n);}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1;}_applyFormState(n){to(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n;}};var Os=i=>i instanceof Wn;var Ps=(()=>{class i extends vt{callSetDisabledState;get submitted(){return Oe(this._submittedReactive);}set submitted(e){this._submittedReactive.set(e);}_submitted=Pe(()=>this._submittedReactive());_submittedReactive=K(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,r){super(),this.callSetDisabledState=r,this._setValidators(e),this._setAsyncValidators(t);}ngOnChanges(e){this.onChanges(e);}ngOnDestroy(){this.onDestroy();}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form);}onDestroy(){this.form&&(jn(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}));}get formDirective(){return this;}get path(){return[];}addControl(e){let t=this.form.get(e.path);return Ii(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t;}getControl(e){return this.form.get(e.path);}removeControl(e){Jr(e.control||null,e,!1),Ds(this.directives,e);}addFormGroup(e){this._setUpFormContainer(e);}removeFormGroup(e){this._cleanUpFormContainer(e);}getFormGroup(e){return this.form.get(e.path);}getFormArray(e){return this.form.get(e.path);}addFormArray(e){this._setUpFormContainer(e);}removeFormArray(e){this._cleanUpFormContainer(e);}updateModel(e,t){this.form.get(e.path).setValue(t);}onReset(){this.resetForm();}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1);}onSubmit(e){return this.submitted=!0,xo(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new Nn(this.control)),e?.target?.method==="dialog";}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,r=this.form.get(e.path);t!==r&&(Jr(t||null,e),Os(r)&&(Ii(r,e,this.callSetDisabledState),e.control=r));}),this.form._updateTreeValidity({emitEvent:!1});}_setUpFormContainer(e){let t=this.form.get(e.path);yo(t,e),t.updateValueAndValidity({emitEvent:!1});}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&As(t,e)&&t.updateValueAndValidity({emitEvent:!1});}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{});}_updateValidators(){Ti(this.form,this),this._oldForm&&jn(this._oldForm,this);}_checkFormPresent(){this.form;}static ɵfac=function(t){return new(t||i)(Fe(no,10),Fe(io,10),Fe(_o,8));};static ɵdir=N({type:i,features:[Me,Ae]});}return i;})();var ks={provide:vt,useExisting:bn(()=>Ni)},Ni=(()=>{class i extends Ps{form=null;ngSubmit=new F();get control(){return this.form;}static ɵfac=(()=>{let e;return function(r){return(e||(e=Nt(i)))(r||i);};})();static ɵdir=N({type:i,selectors:[["","formGroup",""]],hostBindings:function(t,r){t&1&&H("submit",function(a){return r.onSubmit(a);})("reset",function(){return r.onReset();});},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[pe([ks]),Me]});}return i;})();function Qe(i){return i.buttons===0||i.detail===0;}function Je(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1);}var Li;function Co(){if(Li==null){let i=typeof document<"u"?document.head:null;Li=!!(i&&(i.createShadowRoot||i.attachShadow));}return Li;}function Vi(i){if(Co()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n;}return null;}function le(i){return i.composedPath?i.composedPath()[0]:i.target;}var Bi;try{Bi=typeof Intl<"u"&&Intl.v8BreakIterator;}catch{Bi=!1;}var Q=(()=>{class i{_platformId=s(kr);isBrowser=this._platformId?qr(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Bi)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static ɵfac=function(t){return new(t||i)();};static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var $t;function wo(){if($t==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>$t=!0}));}finally{$t=$t||!1;}return $t;}function yt(i){return wo()?i:!!i.capture;}function ke(i){return i instanceof E?i.nativeElement:i;}var Mo=new f("cdk-input-modality-detector-options"),So={ignoreKeys:[18,17,224,91,16]},Eo=650,zi={passive:!0,capture:!0},Ao=(()=>{class i{_platform=s(Q);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value;}_mostRecentTarget=null;_modality=new fn(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=le(e));};_onMousedown=e=>{Date.now()-this._lastTouchMs<Eo||(this._modality.next(Qe(e)?"keyboard":"mouse"),this._mostRecentTarget=le(e));};_onTouchstart=e=>{if(Je(e)){this._modality.next("keyboard");return;}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=le(e);};constructor(){let e=s(T),t=s(z),r=s(Mo,{optional:!0});if(this._options=v(v({},So),r),this.modalityDetected=this._modality.pipe(Dr(1)),this.modalityChanged=this.modalityDetected.pipe(dt()),this._platform.isBrowser){let o=s(we).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,zi),o.listen(t,"mousedown",this._onMousedown,zi),o.listen(t,"touchstart",this._onTouchstart,zi)]);}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e());}static ɵfac=function(t){return new(t||i)();};static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})(),Yt=function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i;}(Yt||{}),Do=new f("cdk-focus-monitor-default-options"),Un=yt({passive:!0,capture:!0}),xt=(()=>{class i{_ngZone=s(T);_platform=s(Q);_inputModalityDetector=s(Ao);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map();_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map();_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1);};_document=s(z);_stopInputModalityDetector=new C();constructor(){let e=s(Do,{optional:!0});this._detectionMode=e?.detectionMode||Yt.IMMEDIATE;}_rootNodeFocusAndBlurListener=e=>{let t=le(e);for(let r=t;r;r=r.parentElement)e.type==="focus"?this._onFocus(e,r):this._onBlur(e,r);};monitor(e,t=!1){let r=ke(e);if(!this._platform.isBrowser||r.nodeType!==1)return ce();let o=Vi(r)||this._document,a=this._elementInfo.get(r);if(a)return t&&(a.checkChildren=!0),a.subject;let l={checkChildren:t,subject:new C(),rootNode:o};return this._elementInfo.set(r,l),this._registerGlobalListeners(l),l.subject;}stopMonitoring(e){let t=ke(e),r=this._elementInfo.get(t);r&&(r.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(r));}focusVia(e,t,r){let o=ke(e),a=this._document.activeElement;o===a?this._getClosestElementsInfo(o).forEach(([l,c])=>this._originChanged(l,t,c)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(r));}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t));}_getWindow(){return this._document.defaultView||window;}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program";}_shouldBeAttributedToTouch(e){return this._detectionMode===Yt.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget);}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program");}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Yt.IMMEDIATE){clearTimeout(this._originTimeoutId);let r=this._originFromTouchInteraction?Eo:1;this._originTimeoutId=setTimeout(()=>this._origin=null,r);}});}_onFocus(e,t){let r=this._elementInfo.get(t),o=le(e);!r||!r.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),r);}_onBlur(e,t){let r=this._elementInfo.get(t);!r||r.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(r,null));}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t));}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,r=this._rootNodeFocusListenerCount.get(t)||0;r||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Un),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Un);}),this._rootNodeFocusListenerCount.set(t,r+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener);}),this._inputModalityDetector.modalityDetected.pipe(ae(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0);}));}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let r=this._rootNodeFocusListenerCount.get(t);r>1?this._rootNodeFocusListenerCount.set(t,r-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Un),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Un),this._rootNodeFocusListenerCount.delete(t));}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId));}_originChanged(e,t,r){this._setClasses(e,t),this._emitOrigin(r,t),this._lastFocusOrigin=t;}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((r,o)=>{(o===e||r.checkChildren&&o.contains(e))&&t.push([o,r]);}),t;}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:r}=this._inputModalityDetector;if(r!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let a=0;a<o.length;a++)if(o[a].contains(t))return!0;}return!1;}static ɵfac=function(t){return new(t||i)();};static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var Hn=new WeakMap(),ve=(()=>{class i{_appRef;_injector=s(U);_environmentInjector=s(mt);load(e){let t=this._appRef=this._appRef||this._injector.get(qe),r=Hn.get(t);r||(r={loaders:new Set(),refs:[]},Hn.set(t,r),t.onDestroy(()=>{Hn.get(t)?.refs.forEach(o=>o.destroy()),Hn.delete(t);})),r.loaders.has(e)||(r.loaders.add(e),r.refs.push(En(e,{environmentInjector:this._environmentInjector})));}static ɵfac=function(t){return new(t||i)();};static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var ji=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵcmp=y({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0});}return i;})(),$n;function Rs(){if($n===void 0&&($n=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&($n=i.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}));}return $n;}function et(i){return Rs()?.createHTML(i)||i;}function Io(i,n,e){let t=e.sanitize(je.HTML,n);i.innerHTML=et(t||"");}function Gi(i){return Array.isArray(i)?i:[i];}var Oo=new Set(),tt,Wi=(()=>{class i{_platform=s(Q);_nonce=s(Rr,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Fs;}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Ts(e,this._nonce),this._matchMedia(e);}static ɵfac=function(t){return new(t||i)();};static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();function Ts(i,n){if(!Oo.has(i))try{tt||(tt=document.createElement("style"),n&&tt.setAttribute("nonce",n),tt.setAttribute("type","text/css"),document.head.appendChild(tt)),tt.sheet&&(tt.sheet.insertRule(`@media ${i} {body{ }}`,0),Oo.add(i));}catch(e){console.error(e);}}function Fs(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}};}var Ns=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e);}static ɵfac=function(t){return new(t||i)();};static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var Po=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=M({type:i});static ɵinj=w({providers:[Ns]});}return i;})();var ko=new f("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),Ro=new f("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Ls=0,Ui=(()=>{class i{_ngZone=s(T);_defaultOptions=s(Ro,{optional:!0});_liveElement;_document=s(z);_sanitizer=s(In);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=s(ko,{optional:!0});this._liveElement=e||this._createLiveElement();}announce(e,...t){let r=this._defaultOptions,o,a;return t.length===1&&typeof t[0]=="number"?a=t[0]:[o,a]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=r&&r.politeness?r.politeness:"polite"),a==null&&r&&(a=r.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(l=>this._currentResolve=l)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Io(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0;},100),this._currentPromise));}clear(){this._liveElement&&(this._liveElement.textContent="");}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0;}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),r=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return r.classList.add(e),r.classList.add("cdk-visually-hidden"),r.setAttribute("aria-atomic","true"),r.setAttribute("aria-live","polite"),r.id=`cdk-live-announcer-${Ls++}`,this._document.body.appendChild(r),r;}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let r=0;r<t.length;r++){let o=t[r],a=o.getAttribute("aria-owns");a?a.indexOf(e)===-1&&o.setAttribute("aria-owns",a+" "+e):o.setAttribute("aria-owns",e);}}static ɵfac=function(t){return new(t||i)();};static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var Vs=200,Yn=class{_letterKeyStream=new C();_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new C();selectedItem=this._selectedItem;constructor(n,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Vs;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(t);}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete();}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n;}setItems(n){this._items=n;}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e));}isTyping(){return this._pressedLetters.length>0;}reset(){this._pressedLetters=[];}_setupKeyHandler(n){this._letterKeyStream.pipe(Ee(e=>this._pressedLetters.push(e)),Sr(n),re(()=>this._pressedLetters.length>0),Y(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let r=(this._selectedItemIndex+t)%this._items.length,o=this._items[r];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break;}}this._pressedLetters=[];});}};function ye(i,...n){return n.length?n.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey;}var Ct=class{_items;_activeItemIndex=K(-1);_activeItem=K(null);_wrap=!1;_typeaheadSubscription=ie.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof Lt?this._itemChangesSubscription=n.changes.subscribe(t=>this._itemsChanged(t.toArray())):Vt(n)&&(this._effectRef=ht(()=>this._itemsChanged(n()),{injector:e}));}tabOut=new C();change=new C();skipPredicate(n){return this._skipPredicateFn=n,this;}withWrap(n=!0){return this._wrap=n,this;}withVerticalOrientation(n=!0){return this._vertical=n,this;}withHorizontalOrientation(n){return this._horizontal=n,this;}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this;}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Yn(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t);}),this;}cancelTypeahead(){return this._typeahead?.reset(),this;}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this;}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this;}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex());}onKeydown(n){let e=n.keyCode,r=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!n[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&r){this.setNextItemActive();break;}else return;case 38:if(this._vertical&&r){this.setPreviousItemActive();break;}else return;case 39:if(this._horizontal&&r){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break;}else return;case 37:if(this._horizontal&&r){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break;}else return;case 36:if(this._homeAndEnd&&r){this.setFirstItemActive();break;}else return;case 35:if(this._homeAndEnd&&r){this.setLastItemActive();break;}else return;case 33:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break;}else return;case 34:if(this._pageUpAndDown.enabled&&r){let o=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(o<a?o:a-1,-1);break;}else return;default:(r||ye(n,"shiftKey"))&&this._typeahead?.handleKey(n);return;}this._typeahead?.reset(),n.preventDefault();}get activeItemIndex(){return this._activeItemIndex();}get activeItem(){return this._activeItem();}isTyping(){return!!this._typeahead&&this._typeahead.isTyping();}setFirstItemActive(){this._setActiveItemByIndex(0,1);}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1);}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1);}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1);}updateActiveItem(n){let e=this._getItemsArray(),t=typeof n=="number"?n:e.indexOf(n),r=e[t];this._activeItem.set(r??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t);}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete();}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n);}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let r=(this._activeItemIndex()+n*t+e.length)%e.length,o=e[r];if(!this._skipPredicateFn(o)){this.setActiveItem(r);return;}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n);}_setActiveItemByIndex(n,e){let t=this._getItemsArray();if(t[n]){for(;this._skipPredicateFn(t[n]);)if(n+=e,!t[n])return;this.setActiveItem(n);}}_getItemsArray(){return Vt(this._items)?this._items():this._items instanceof Lt?this._items.toArray():this._items;}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let t=n.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t));}}};var Qt=class extends Ct{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles();}};var Jt=class extends Ct{_origin="program";setFocusOrigin(n){return this._origin=n,this;}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin);}};var Hi={},fe=class i{_appId=s(Pr);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Hi.hasOwnProperty(n)||(Hi[n]=0),`${n}${e?i._infix+"-":""}${Hi[n]++}`;}static ɵfac=function(e){return new(e||i)();};static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});};var Fo=" ";function No(i,n,e){let t=Lo(i,n);e=e.trim(),!t.some(r=>r.trim()===e)&&(t.push(e),i.setAttribute(n,t.join(Fo)));}function $i(i,n,e){let t=Lo(i,n);e=e.trim();let r=t.filter(o=>o!==e);r.length?i.setAttribute(n,r.join(Fo)):i.removeAttribute(n);}function Lo(i,n){return i.getAttribute(n)?.match(/\S+/g)??[];}var nt;function Vo(){if(nt==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return nt=!1,nt;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)nt=!0;else{let i=Element.prototype.scrollTo;i?nt=!/\{\s*\[native code\]\s*\}/.test(i.toString()):nt=!1;}}return nt;}function Yi(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha;}var Bs=new f("MATERIAL_ANIMATIONS"),Bo=null;function Xi(){return s(Bs,{optional:!0})?.animationsDisabled||s(yn,{optional:!0})==="NoopAnimations"?"di-disabled":(Bo??=s(Wi).matchMedia("(prefers-reduced-motion)").matches,Bo?"reduced-motion":"enabled");}function de(){return Xi()!=="enabled";}function J(i){return i==null?"":typeof i=="string"?i:`${i}px`;}function en(i){return i!=null&&`${i}`!="false";}var xe=function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i;}(xe||{}),qi=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=xe.HIDDEN;constructor(n,e,t,r=!1){this._renderer=n,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=r;}fadeOut(){this._renderer.fadeOutRipple(this);}},zo=yt({passive:!0,capture:!0}),Ki=class{_events=new Map();addHandler(n,e,t,r){let o=this._events.get(e);if(o){let a=o.get(t);a?a.add(r):o.set(t,new Set([r]));}else this._events.set(e,new Map([[t,new Set([r])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,zo);});}removeHandler(n,e,t){let r=this._events.get(n);if(!r)return;let o=r.get(e);o&&(o.delete(t),o.size===0&&r.delete(e),r.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,zo)));}_delegateEventHandler=n=>{let e=le(n);e&&this._events.get(n.type)?.forEach((t,r)=>{(r===e||r.contains(e))&&t.forEach(o=>o.handleEvent(n));});};},tn={enterDuration:225,exitDuration:150},js=800,jo=yt({passive:!0,capture:!0}),Go=["mousedown","touchstart"],Wo=["mouseup","mouseleave","touchend","touchcancel"],Gs=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵcmp=y({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0});}return i;})(),nn=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map();_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Ki();constructor(n,e,t,r,o){this._target=n,this._ngZone=e,this._platform=r,r.isBrowser&&(this._containerElement=ke(t)),o&&o.get(ve).load(Gs);}fadeInRipple(n,e,t={}){let r=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=v(v({},tn),t.animation);t.centered&&(n=r.left+r.width/2,e=r.top+r.height/2);let a=t.radius||Ws(n,e,r),l=n-r.left,c=e-r.top,d=o.enterDuration,m=document.createElement("div");m.classList.add("mat-ripple-element"),m.style.left=`${l-a}px`,m.style.top=`${c-a}px`,m.style.height=`${a*2}px`,m.style.width=`${a*2}px`,t.color!=null&&(m.style.backgroundColor=t.color),m.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(m);let _=window.getComputedStyle(m),R=_.transitionProperty,G=_.transitionDuration,X=R==="none"||G==="0s"||G==="0s, 0s"||r.width===0&&r.height===0,$=new qi(this,m,t,X);m.style.transform="scale3d(1, 1, 1)",$.state=xe.FADING_IN,t.persistent||(this._mostRecentTransientRipple=$);let q=null;return!X&&(d||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let xr=()=>{q&&(q.fallbackTimer=null),clearTimeout(Cr),this._finishRippleTransition($);},xi=()=>this._destroyRipple($),Cr=setTimeout(xi,d+100);m.addEventListener("transitionend",xr),m.addEventListener("transitioncancel",xi),q={onTransitionEnd:xr,onTransitionCancel:xi,fallbackTimer:Cr};}),this._activeRipples.set($,q),(X||!d)&&this._finishRippleTransition($),$;}fadeOutRipple(n){if(n.state===xe.FADING_OUT||n.state===xe.HIDDEN)return;let e=n.element,t=v(v({},tn),n.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",n.state=xe.FADING_OUT,(n._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(n);}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut());}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut();});}setupTriggerEvents(n){let e=ke(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Go.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this);}));}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Wo.forEach(e=>{this._triggerElement.addEventListener(e,this,jo);});}),this._pointerUpEventsRegistered=!0);}_finishRippleTransition(n){n.state===xe.FADING_IN?this._startFadeOutTransition(n):n.state===xe.FADING_OUT&&this._destroyRipple(n);}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:t}=n.config;n.state=xe.VISIBLE,!t&&(!e||!this._isPointerDown)&&n.fadeOut();}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=xe.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove();}_onMousedown(n){let e=Qe(n),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+js;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig));}_onTouchStart(n){if(!this._target.rippleDisabled&&!Je(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig);}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===xe.VISIBLE||n.config.terminateOnPointerUp&&n.state===xe.FADING_IN;!n.config.persistent&&e&&n.fadeOut();}));}_getActiveRipples(){return Array.from(this._activeRipples.keys());}_removeTriggerEvents(){let n=this._triggerElement;n&&(Go.forEach(e=>i._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(Wo.forEach(e=>n.removeEventListener(e,this,jo)),this._pointerUpEventsRegistered=!1));}};function Ws(i,n,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),r=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(t*t+r*r);}var Zi=new f("mat-ripple-global-options"),Xn=(()=>{class i{_elementRef=s(E);_animationsDisabled=de();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled;}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled();}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement;}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled();}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=s(T),t=s(Q),r=s(Zi,{optional:!0}),o=s(U);this._globalOptions=r||{},this._rippleRenderer=new nn(this,e,this._elementRef,t,o);}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled();}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents();}fadeOutAll(){this._rippleRenderer.fadeOutAll();}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent();}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:v(v(v({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp};}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled;}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger);}launch(e,t=0,r){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,v(v({},this.rippleConfig),r)):this._rippleRenderer.fadeInRipple(0,0,v(v({},this.rippleConfig),e));}static ɵfac=function(t){return new(t||i)();};static ɵdir=N({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,r){t&2&&S("mat-ripple-unbounded",r.unbounded);},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]});}return i;})();var Us={capture:!0},Hs=["focus","mousedown","mouseenter","touchstart"],Qi="mat-ripple-loader-uninitialized",Ji="mat-ripple-loader-class-name",Uo="mat-ripple-loader-centered",qn="mat-ripple-loader-disabled",Ho=(()=>{class i{_document=s(z);_animationsDisabled=de();_globalRippleOptions=s(Zi,{optional:!0});_platform=s(Q);_ngZone=s(T);_injector=s(U);_eventCleanups;_hosts=new Map();constructor(){let e=s(we).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Hs.map(t=>e.listen(this._document,t,this._onInteraction,Us)));}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t());}configureRipple(e,t){e.setAttribute(Qi,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Ji))&&e.setAttribute(Ji,t.className||""),t.centered&&e.setAttribute(Uo,""),t.disabled&&e.setAttribute(qn,"");}setDisabled(e,t){let r=this._hosts.get(e);r?(r.target.rippleDisabled=t,!t&&!r.hasSetUpEvents&&(r.hasSetUpEvents=!0,r.renderer.setupTriggerEvents(e))):t?e.setAttribute(qn,""):e.removeAttribute(qn);}_onInteraction=e=>{let t=le(e);if(t instanceof HTMLElement){let r=t.closest(`[${Qi}="${this._globalRippleOptions?.namespace??""}"]`);r&&this._createRipple(r);}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Ji)),e.append(t);let r=this._globalRippleOptions,o=this._animationsDisabled?0:r?.animation?.enterDuration??tn.enterDuration,a=this._animationsDisabled?0:r?.animation?.exitDuration??tn.exitDuration,l={rippleDisabled:this._animationsDisabled||r?.disabled||e.hasAttribute(qn),rippleConfig:{centered:e.hasAttribute(Uo),terminateOnPointerUp:r?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:a}}},c=new nn(l,this._ngZone,t,this._platform,this._injector),d=!l.rippleDisabled;d&&c.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:c,hasSetUpEvents:d}),e.removeAttribute(Qi);}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e));}static ɵfac=function(t){return new(t||i)();};static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var wt=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵcmp=y({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,r){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0});}return i;})();var $s=new f("MAT_BUTTON_CONFIG");function $o(i){return i==null?void 0:Ve(i);}var Yo=(()=>{class i{_elementRef=s(E);_ngZone=s(T);_animationsDisabled=de();_config=s($s,{optional:!0});_focusMonitor=s(xt);_cleanupClick;_renderer=s(ge);_rippleLoader=s(Ho);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple;}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled();}_disableRipple=!1;get disabled(){return this._disabled;}set disabled(e){this._disabled=e,this._updateRippleDisabled();}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e;}constructor(){s(ve).load(wt);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"});}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor();}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t);}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null;}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0;}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled);}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex;}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation());}));}static ɵfac=function(t){return new(t||i)();};static ɵdir=N({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,r){t&2&&(L("disabled",r._getDisabledAttribute())("aria-disabled",r._getAriaDisabled())("tabindex",r._getTabIndex()),_e(r.color?"mat-"+r.color:""),S("mat-mdc-button-disabled",r.disabled)("mat-mdc-button-disabled-interactive",r.disabledInteractive)("mat-unthemed",!r.color)("_mat-animation-noopable",r._animationsDisabled));},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",O],disabled:[2,"disabled","disabled",O],ariaDisabled:[2,"aria-disabled","ariaDisabled",O],disabledInteractive:[2,"disabledInteractive","disabledInteractive",O],tabIndex:[2,"tabIndex","tabIndex",$o],_tabindex:[2,"tabindex","_tabindex",$o]}});}return i;})();var Ys=new f("cdk-dir-doc",{providedIn:"root",factory:()=>s(z)}),Xs=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function Xo(i){let n=i?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?Xs.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr";}var Re=(()=>{class i{get value(){return this.valueSignal();}valueSignal=K("ltr");change=new F();constructor(){let e=s(Ys,{optional:!0});if(e){let t=e.body?e.body.dir:null,r=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(Xo(t||r||"ltr"));}}ngOnDestroy(){this.change.complete();}static ɵfac=function(t){return new(t||i)();};static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var V=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=M({type:i});static ɵinj=w({});}return i;})();var Mt=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=M({type:i});static ɵinj=w({imports:[V]});}return i;})();var qs=["matButton",""],Ks=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],Zs=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var qo=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Kn=(()=>{class i extends Yo{get appearance(){return this._appearance;}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text");}_appearance=null;constructor(){super();let e=Qs(this._elementRef.nativeElement);e&&this.setAppearance(e);}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,r=this._appearance?qo.get(this._appearance):null,o=qo.get(e);r&&t.remove(...r),t.add(...o),this._appearance=e;}static ɵfac=function(t){return new(t||i)();};static ɵcmp=y({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[Me],attrs:qs,ngContentSelectors:Zs,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,r){t&1&&(te(Ks),Ue(0,"span",0),I(1),De(2,"span",1),I(3,1),Ne(),I(4,2),Ue(5,"span",2)(6,"span",3)),t&2&&S("mdc-button__ripple",!r._isFab)("mdc-fab__ripple",r._isFab);},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0});}return i;})();function Qs(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null;}var Zn=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=M({type:i});static ɵinj=w({imports:[Mt,V]});}return i;})();var Js=["*"];var el=new f("MAT_CARD_CONFIG"),Zo=(()=>{class i{appearance;constructor(){let e=s(el,{optional:!0});this.appearance=e?.appearance||"raised";}static ɵfac=function(t){return new(t||i)();};static ɵcmp=y({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,r){t&2&&S("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")("mat-mdc-card-filled",r.appearance==="filled")("mdc-card--filled",r.appearance==="filled");},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Js,decls:1,vars:0,template:function(t,r){t&1&&(te(),I(0));},styles:[`.mat-mdc-card {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  position: relative;
  border-style: solid;
  border-width: 0;
  background-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-color: var(--mat-card-elevated-container-color, var(--mat-sys-surface-container-low));
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-elevated-container-elevation, var(--mat-sys-level1));
}
.mat-mdc-card::after {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: solid 1px transparent;
  content: "";
  display: block;
  pointer-events: none;
  box-sizing: border-box;
  border-radius: var(--mat-card-elevated-container-shape, var(--mat-sys-corner-medium));
}

.mat-mdc-card-outlined {
  background-color: var(--mat-card-outlined-container-color, var(--mat-sys-surface));
  border-radius: var(--mat-card-outlined-container-shape, var(--mat-sys-corner-medium));
  border-width: var(--mat-card-outlined-outline-width, 1px);
  border-color: var(--mat-card-outlined-outline-color, var(--mat-sys-outline-variant));
  box-shadow: var(--mat-card-outlined-container-elevation, var(--mat-sys-level0));
}
.mat-mdc-card-outlined::after {
  border: none;
}

.mat-mdc-card-filled {
  background-color: var(--mat-card-filled-container-color, var(--mat-sys-surface-container-highest));
  border-radius: var(--mat-card-filled-container-shape, var(--mat-sys-corner-medium));
  box-shadow: var(--mat-card-filled-container-elevation, var(--mat-sys-level0));
}

.mdc-card__media {
  position: relative;
  box-sizing: border-box;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.mdc-card__media::before {
  display: block;
  content: "";
}
.mdc-card__media:first-child {
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}
.mdc-card__media:last-child {
  border-bottom-left-radius: inherit;
  border-bottom-right-radius: inherit;
}

.mat-mdc-card-actions {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  padding: 8px;
}

.mat-mdc-card-title {
  font-family: var(--mat-card-title-text-font, var(--mat-sys-title-large-font));
  line-height: var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-size: var(--mat-card-title-text-size, var(--mat-sys-title-large-size));
  letter-spacing: var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));
  font-weight: var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight));
}

.mat-mdc-card-subtitle {
  color: var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));
  line-height: var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));
  font-size: var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));
  letter-spacing: var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));
  font-weight: var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight));
}

.mat-mdc-card-title,
.mat-mdc-card-subtitle {
  display: block;
  margin: 0;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle {
  padding: 16px 16px 0;
}

.mat-mdc-card-header {
  display: flex;
  padding: 16px 16px 0;
}

.mat-mdc-card-content {
  display: block;
  padding: 0 16px;
}
.mat-mdc-card-content:first-child {
  padding-top: 16px;
}
.mat-mdc-card-content:last-child {
  padding-bottom: 16px;
}

.mat-mdc-card-title-group {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mat-mdc-card-avatar {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-bottom: 16px;
  object-fit: cover;
}
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-avatar ~ .mat-mdc-card-header-text .mat-mdc-card-title {
  line-height: normal;
}

.mat-mdc-card-sm-image {
  width: 80px;
  height: 80px;
}

.mat-mdc-card-md-image {
  width: 112px;
  height: 112px;
}

.mat-mdc-card-lg-image {
  width: 152px;
  height: 152px;
}

.mat-mdc-card-xl-image {
  width: 240px;
  height: 240px;
}

.mat-mdc-card-subtitle ~ .mat-mdc-card-title,
.mat-mdc-card-title ~ .mat-mdc-card-subtitle,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,
.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,
.mat-mdc-card-title-group .mat-mdc-card-title,
.mat-mdc-card-title-group .mat-mdc-card-subtitle {
  padding-top: 0;
}

.mat-mdc-card-content > :last-child:not(.mat-mdc-card-footer) {
  margin-bottom: 0;
}

.mat-mdc-card-actions-align-end {
  justify-content: flex-end;
}
`],encapsulation:2,changeDetection:0});}return i;})();var Qo=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=M({type:i});static ɵinj=w({imports:[V]});}return i;})();var Jo=(()=>{class i{get vertical(){return this._vertical;}set vertical(e){this._vertical=en(e);}_vertical=!1;get inset(){return this._inset;}set inset(e){this._inset=en(e);}_inset=!1;static ɵfac=function(t){return new(t||i)();};static ɵcmp=y({type:i,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,r){t&2&&(L("aria-orientation",r.vertical?"vertical":"horizontal"),S("mat-divider-vertical",r.vertical)("mat-divider-horizontal",!r.vertical)("mat-divider-inset",r.inset));},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-divider {
  display: block;
  margin: 0;
  border-top-style: solid;
  border-top-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-top-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-vertical {
  border-top: 0;
  border-right-style: solid;
  border-right-color: var(--mat-divider-color, var(--mat-sys-outline-variant));
  border-right-width: var(--mat-divider-width, 1px);
}
.mat-divider.mat-divider-inset {
  margin-left: 80px;
}
[dir=rtl] .mat-divider.mat-divider-inset {
  margin-left: auto;
  margin-right: 80px;
}
`],encapsulation:2,changeDetection:0});}return i;})(),ea=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=M({type:i});static ɵinj=w({imports:[V]});}return i;})();function ta(i){return Error(`Unable to find icon with the name "${i}"`);}function il(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.");}function na(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`);}function ia(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`);}var Be=class{url;svgText;options;svgElement=null;constructor(n,e,t){this.url=n,this.svgText=e,this.options=t;}},oa=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map();_iconSetConfigs=new Map();_cachedIconsByUrl=new Map();_inProgressUrlFetches=new Map();_fontCssClassesByAlias=new Map();_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,r,o){this._httpClient=e,this._sanitizer=t,this._errorHandler=o,this._document=r;}addSvgIcon(e,t,r){return this.addSvgIconInNamespace("",e,t,r);}addSvgIconLiteral(e,t,r){return this.addSvgIconLiteralInNamespace("",e,t,r);}addSvgIconInNamespace(e,t,r,o){return this._addSvgIconConfig(e,t,new Be(r,null,o));}addSvgIconResolver(e){return this._resolvers.push(e),this;}addSvgIconLiteralInNamespace(e,t,r,o){let a=this._sanitizer.sanitize(je.HTML,r);if(!a)throw ia(r);let l=et(a);return this._addSvgIconConfig(e,t,new Be("",l,o));}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t);}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t);}addSvgIconSetInNamespace(e,t,r){return this._addSvgIconSetConfig(e,new Be(t,null,r));}addSvgIconSetLiteralInNamespace(e,t,r){let o=this._sanitizer.sanitize(je.HTML,t);if(!o)throw ia(t);let a=et(o);return this._addSvgIconSetConfig(e,new Be("",a,r));}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this;}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e;}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this;}getDefaultFontSetClass(){return this._defaultFontSetClass;}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(je.RESOURCE_URL,e);if(!t)throw na(e);let r=this._cachedIconsByUrl.get(t);return r?ce(Qn(r)):this._loadSvgIconFromConfig(new Be(e,null)).pipe(Ee(o=>this._cachedIconsByUrl.set(t,o)),Y(o=>Qn(o)));}getNamedSvgIcon(e,t=""){let r=ra(t,e),o=this._svgIconConfigs.get(r);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(t,e),o)return this._svgIconConfigs.set(r,o),this._getSvgFromConfig(o);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):wr(ta(r));}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear();}_getSvgFromConfig(e){return e.svgText?ce(Qn(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(Y(t=>Qn(t)));}_getSvgFromIconSetConfigs(e,t){let r=this._extractIconWithNameFromAnySet(e,t);if(r)return ce(r);let o=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(_n(l=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(je.RESOURCE_URL,a.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(d)),ce(null);})));return ze(o).pipe(Y(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw ta(e);return a;}));}_extractIconWithNameFromAnySet(e,t){for(let r=t.length-1;r>=0;r--){let o=t[r];if(o.svgText&&o.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(o),l=this._extractSvgIconFromSet(a,e,o.options);if(l)return l;}}return null;}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(Ee(t=>e.svgText=t),Y(()=>this._svgElementFromConfig(e)));}_loadSvgIconSetFromConfig(e){return e.svgText?ce(null):this._fetchIcon(e).pipe(Ee(t=>e.svgText=t));}_extractSvgIconFromSet(e,t,r){let o=e.querySelector(`[id="${t}"]`);if(!o)return null;let a=o.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,r);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),r);let l=this._svgElementFromString(et("<svg></svg>"));return l.appendChild(a),this._setSvgAttributes(l,r);}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let r=t.querySelector("svg");if(!r)throw Error("<svg> tag not found");return r;}_toSvgElement(e){let t=this._svgElementFromString(et("<svg></svg>")),r=e.attributes;for(let o=0;o<r.length;o++){let{name:a,value:l}=r[o];a!=="id"&&t.setAttribute(a,l);}for(let o=0;o<e.childNodes.length;o++)e.childNodes[o].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[o].cloneNode(!0));return t;}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e;}_fetchIcon(e){let{url:t,options:r}=e,o=r?.withCredentials??!1;if(!this._httpClient)throw il();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(je.RESOURCE_URL,t);if(!a)throw na(t);let l=this._inProgressUrlFetches.get(a);if(l)return l;let c=this._httpClient.get(a,{responseType:"text",withCredentials:o}).pipe(Y(d=>et(d)),Er(()=>this._inProgressUrlFetches.delete(a)),Ar());return this._inProgressUrlFetches.set(a,c),c;}_addSvgIconConfig(e,t,r){return this._svgIconConfigs.set(ra(e,t),r),this;}_addSvgIconSetConfig(e,t){let r=this._iconSetConfigs.get(e);return r?r.push(t):this._iconSetConfigs.set(e,[t]),this;}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t;}return e.svgElement;}_getIconConfigFromResolvers(e,t){for(let r=0;r<this._resolvers.length;r++){let o=this._resolvers[r](t,e);if(o)return rl(o)?new Be(o.url,null,o.options):new Be(o,null);}}static ɵfac=function(t){return new(t||i)(Ft(Dn,8),Ft(In),Ft(z,8),Ft(vn));};static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();function Qn(i){return i.cloneNode(!0);}function ra(i,n){return i+":"+n;}function rl(i){return!!(i.url&&i.options);}var ol=["*"],al=new f("MAT_ICON_DEFAULT_OPTIONS"),sl=new f("mat-icon-location",{providedIn:"root",factory:()=>{let i=s(z),n=i?i.location:null;return{getPathname:()=>n?n.pathname+n.search:""};}}),aa=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],ll=aa.map(i=>`[${i}]`).join(", "),cl=/^url\(['"]?#(.*?)['"]?\)$/,sa=(()=>{class i{_elementRef=s(E);_iconRegistry=s(oa);_location=s(sl);_errorHandler=s(vn);_defaultColor;get color(){return this._color||this._defaultColor;}set color(e){this._color=e;}_color;inline=!1;get svgIcon(){return this._svgIcon;}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e);}_svgIcon;get fontSet(){return this._fontSet;}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses());}_fontSet;get fontIcon(){return this._fontIcon;}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses());}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=ie.EMPTY;constructor(){let e=s(new Sn("aria-hidden"),{optional:!0}),t=s(al,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true");}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`);}}ngOnInit(){this._updateFontIconClasses();}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t));}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();}_usingFontIcon(){return!this.svgIcon;}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e);}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let r=e.childNodes[t];(r.nodeType!==1||r.nodeName.toLowerCase()==="svg")&&r.remove();}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(r=>r.length>0);this._previousFontSetClass.forEach(r=>e.classList.remove(r)),t.forEach(r=>e.classList.add(r)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon);}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e;}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((r,o)=>{r.forEach(a=>{o.setAttribute(a.name,`url('${e}#${a.value}')`);});});}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(ll),r=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map();for(let o=0;o<t.length;o++)aa.forEach(a=>{let l=t[o],c=l.getAttribute(a),d=c?c.match(cl):null;if(d){let m=r.get(l);m||(m=[],r.set(l,m)),m.push({name:a,value:d[1]});}});}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,r]=this._splitIconName(e);t&&(this._svgNamespace=t),r&&(this._svgName=r),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(r,t).pipe(ct(1)).subscribe(o=>this._setSvgElement(o),o=>{let a=`Error retrieving icon ${t}:${r}! ${o.message}`;this._errorHandler.handleError(new Error(a));});}}static ɵfac=function(t){return new(t||i)();};static ɵcmp=y({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,r){t&2&&(L("data-mat-icon-type",r._usingFontIcon()?"font":"svg")("data-mat-icon-name",r._svgName||r.fontIcon)("data-mat-icon-namespace",r._svgNamespace||r.fontSet)("fontIcon",r._usingFontIcon()?r.fontIcon:null),_e(r.color?"mat-"+r.color:""),S("mat-icon-inline",r.inline)("mat-icon-no-color",r.color!=="primary"&&r.color!=="accent"&&r.color!=="warn"));},inputs:{color:"color",inline:[2,"inline","inline",O],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:ol,decls:1,vars:0,template:function(t,r){t&1&&(te(),I(0));},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2,changeDetection:0});}return i;})(),la=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=M({type:i});static ɵinj=w({imports:[V]});}return i;})();var rn=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this);}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach());}get isAttached(){return this._attachedHost!=null;}setAttachedHost(n){this._attachedHost=n;}},er=class extends rn{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,t,r,o){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=r,this.bindings=o||null;}},it=class extends rn{templateRef;viewContainerRef;context;injector;constructor(n,e,t,r){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=r;}get origin(){return this.templateRef.elementRef;}attach(n,e=this.context){return this.context=e,super.attach(n);}detach(){return this.context=void 0,super.detach();}},tr=class extends rn{element;constructor(n){super(),this.element=n instanceof E?n.nativeElement:n;}},nr=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal;}attach(n){if(n instanceof er)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof it)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof tr)return this._attachedPortal=n,this.attachDomPortal(n);}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn();}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0;}setDisposeFn(n){this._disposeFn=n;}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null);}},on=class extends nr{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t;}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,r=t.get(Fr,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy());}else{let t=this._appRef,r=n.injector||this._defaultInjector||U.NULL,o=r.get(mt,t.injector);e=En(n.component,{elementInjector:r,environmentInjector:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy();});}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e;}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(r=>this.outletElement.appendChild(r)),t.detectChanges(),this.setDisposeFn(()=>{let r=e.indexOf(t);r!==-1&&e.remove(r);}),this._attachedPortal=n,t;}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t);});};dispose(){super.dispose(),this.outletElement.remove();}_getComponentRootNode(n){return n.hostView.rootNodes[0];}};var ca=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=M({type:i});static ɵinj=w({});}return i;})();var ml=20,Jn=(()=>{class i{_ngZone=s(T);_platform=s(Q);_renderer=s(we).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new C();_scrolledCount=0;scrollContainers=new Map();register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)));}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e));}scrolled(e=ml){return this._platform.isBrowser?new lt(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(wi(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0);};}):ce();}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete();}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(re(o=>!o||r.indexOf(o)>-1));}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&t.push(o);}),t;}_scrollableContainsElement(e,t){let r=ke(t),o=e.getElementRef().nativeElement;do if(r==o)return!0;while(r=r.parentElement);return!1;}static ɵfac=function(t){return new(t||i)();};static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var ul=20,Ye=(()=>{class i{_platform=s(Q);_listeners;_viewportSize=null;_change=new C();_document=s(z);constructor(){let e=s(T),t=s(we).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=o=>this._change.next(o);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)];}this.change().subscribe(()=>this._viewportSize=null);});}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete();}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e;}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t};}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect(),a=-o.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,l=-o.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:a,left:l};}change(e=ul){return e>0?this._change.pipe(wi(e)):this._change;}_getWindow(){return this._document.defaultView||window;}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0};}static ɵfac=function(t){return new(t||i)();};static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var St=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=M({type:i});static ɵinj=w({});}return i;})(),ir=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=M({type:i});static ɵinj=w({imports:[V,St,V,St]});}return i;})();var da=Vo();function _a(i){return new ei(i.get(Ye),i.get(z));}var ei=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e;}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=J(-this._previousScrollPosition.left),n.style.top=J(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0;}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,t=n.style,r=e.style,o=t.scrollBehavior||"",a=r.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),da&&(t.scrollBehavior=r.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),da&&(t.scrollBehavior=o,r.scrollBehavior=a);}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width;}};function ba(i,n){return new ti(i.get(Jn),i.get(T),i.get(Ye),n);}var ti=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,t,r){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=t,this._config=r;}attach(n){this._overlayRef,this._overlayRef=n;}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(re(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition();})):this._scrollSubscription=n.subscribe(this._detach);}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null);}detach(){this.disable(),this._overlayRef=null;}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach());};};var an=class{enable(){}disable(){}attach(){}};function rr(i,n){return n.some(e=>{let t=i.bottom<e.top,r=i.top>e.bottom,o=i.right<e.left,a=i.left>e.right;return t||r||o||a;});}function ma(i,n){return n.some(e=>{let t=i.top<e.top,r=i.bottom>e.bottom,o=i.left<e.left,a=i.right>e.right;return t||r||o||a;});}function at(i,n){return new ni(i.get(Jn),i.get(Ye),i.get(T),n);}var ni=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,r){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=r;}attach(n){this._overlayRef,this._overlayRef=n;}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:r}=this._viewportRuler.getViewportSize();rr(e,[{width:t,height:r,bottom:r,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()));}});}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null);}detach(){this.disable(),this._overlayRef=null;}},va=(()=>{class i{_injector=s(U);constructor(){}noop=()=>new an();close=e=>ba(this._injector,e);block=()=>_a(this._injector);reposition=e=>at(this._injector,e);static ɵfac=function(t){return new(t||i)();};static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})(),ot=class{positionStrategy;scrollStrategy=new an();panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t]);}}};var ii=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e;}};var ya=(()=>{class i{_attachedOverlays=[];_document=s(z);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach();}add(e){this.remove(e),this._attachedOverlays.push(e);}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach();}canReceiveEvent(e,t,r){return r.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0;}static ɵfac=function(t){return new(t||i)();};static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})(),xa=(()=>{class i extends ya{_ngZone=s(T);_renderer=s(we).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener);}),this._isAttached=!0);}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1);}_keydownListener=e=>{let t=this._attachedOverlays;for(let r=t.length-1;r>-1;r--){let o=t[r];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break;}}};static ɵfac=(()=>{let e;return function(r){return(e||(e=Nt(i)))(r||i);};})();static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})(),Ca=(()=>{class i extends ya{_platform=s(Q);_ngZone=s(T);_renderer=s(we).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,r={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,r),o.listen(t,"click",this._clickListener,r),o.listen(t,"auxclick",this._clickListener,r),o.listen(t,"contextmenu",this._clickListener,r)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0;}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1);}_pointerDownListener=e=>{this._pointerDownEventTarget=le(e);};_clickListener=e=>{let t=le(e),r=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let a=o.length-1;a>-1;a--){let l=o[a],c=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,c))){if(ua(l.overlayElement,t)||ua(l.overlayElement,r))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e);}}};static ɵfac=(()=>{let e;return function(r){return(e||(e=Nt(i)))(r||i);};})();static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();function ua(i,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=n;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode;}return!1;}var wa=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵcmp=y({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,r){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0});}return i;})(),Ma=(()=>{class i{_platform=s(Q);_containerElement;_document=s(z);_styleLoader=s(ve);constructor(){}ngOnDestroy(){this._containerElement?.remove();}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement;}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Yi()){let r=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<r.length;o++)r[o].remove();}let t=this._document.createElement("div");t.classList.add(e),Yi()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t;}_loadStyles(){this._styleLoader.load(wa);}static ɵfac=function(t){return new(t||i)();};static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})(),or=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,r){this._renderer=e,this._ngZone=t,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",r);}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing");});}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove();};};function ar(i){return i&&i.nodeType===1;}var ri=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new C();_attachments=new C();_detachments=new C();_positionStrategy;_scrollStrategy;_locationChanges=ie.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new C();_outsidePointerEvents=new C();_afterNextRenderRef;constructor(n,e,t,r,o,a,l,c,d,m=!1,_,R){this._portalOutlet=n,this._host=e,this._pane=t,this._config=r,this._ngZone=o,this._keyboardDispatcher=a,this._document=l,this._location=c,this._outsideClickDispatcher=d,this._animationsDisabled=m,this._injector=_,this._renderer=R,r.scrollStrategy&&(this._scrollStrategy=r.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=r.positionStrategy;}get overlayElement(){return this._pane;}get backdropElement(){return this._backdropRef?.element||null;}get hostElement(){return this._host;}get eventPredicate(){return this._config?.eventPredicate||null;}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Ge(()=>{this.hasAttached()&&this.updatePosition();},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()));}),e;}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n;}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0;}hasAttached(){return this._portalOutlet.hasAttached();}backdropClick(){return this._backdropClick;}attachments(){return this._attachments;}detachments(){return this._detachments;}keydownEvents(){return this._keydownEvents;}outsidePointerEvents(){return this._outsidePointerEvents;}getConfig(){return this._config;}updatePosition(){this._positionStrategy&&this._positionStrategy.apply();}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()));}updateSize(n){this._config=v(v({},this._config),n),this._updateElementSize();}setDirection(n){this._config=ee(v({},this._config),{direction:n}),this._updateElementDirection();}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0);}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1);}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr";}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()));}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection());}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=J(this._config.width),n.height=J(this._config.height),n.minWidth=J(this._config.minWidth),n.minHeight=J(this._config.minHeight),n.maxWidth=J(this._config.maxWidth),n.maxHeight=J(this._config.maxHeight);}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none";}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;ar(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host);}if(this._config.usePopover)try{this._host.showPopover();}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new or(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e);}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n));}):this._backdropRef.element.classList.add(n);}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host);}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach();}_toggleClasses(n,e,t){let r=Gi(e||[]).filter(o=>!!o);r.length&&(t?n.classList.add(...r):n.classList.remove(...r));}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=Ge(()=>{n=!0,this._detachContent();},{injector:this._injector});}catch(e){if(n)throw e;this._detachContent();}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent();}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}));}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent());}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect();}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.();}},ha="cdk-overlay-connected-position-bounding-box",hl=/([A-Za-z%]+)$/;function sn(i,n){return new oi(n,i.get(Ye),i.get(z),i.get(Q),i.get(Ma));}var oi=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new C();_resizeSubscription=ie.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions;}constructor(n,e,t,r,o){this._viewportRuler=e,this._document=t,this._platform=r,this._overlayContainer=o,this.setOrigin(n);}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(ha),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply();});}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return;}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,r=this._containerRect,o=[],a;for(let l of this._preferredPositions){let c=this._getOriginPoint(n,r,l),d=this._getOverlayPoint(c,e,l),m=this._getOverlayFit(d,e,t,l);if(m.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,c);return;}if(this._canFitWithFlexibleDimensions(m,d,t)){o.push({position:l,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,l)});continue;}(!a||a.overlayFit.visibleArea<m.visibleArea)&&(a={overlayFit:m,overlayPoint:d,originPoint:c,position:l,overlayRect:e});}if(o.length){let l=null,c=-1;for(let d of o){let m=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);m>c&&(c=m,l=d);}this._isPushed=!1,this._applyPosition(l.position,l.origin);return;}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return;}this._applyPosition(a.position,a.originPoint);}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe();}dispose(){this._isDisposed||(this._boundingBox&&rt(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(ha),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0);}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply();}withScrollableContainers(n){return this._scrollables=n,this;}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this;}withViewportMargin(n){return this._viewportMargin=n,this;}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this;}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this;}withPush(n=!0){return this._canPush=n,this;}withLockedPosition(n=!0){return this._positionLocked=n,this;}setOrigin(n){return this._origin=n,this;}withDefaultOffsetX(n){return this._offsetX=n,this;}withDefaultOffsetY(n){return this._offsetY=n,this;}withTransformOriginOn(n){return this._transformOriginSelector=n,this;}withPopoverLocation(n){return this._popoverLocation=n,this;}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof E?this._origin.nativeElement:ar(this._origin)?this._origin:null;}_getOriginPoint(n,e,t){let r;if(t.originX=="center")r=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,l=this._isRtl()?n.left:n.right;r=t.originX=="start"?a:l;}e.left<0&&(r-=e.left);let o;return t.originY=="center"?o=n.top+n.height/2:o=t.originY=="top"?n.top:n.bottom,e.top<0&&(o-=e.top),{x:r,y:o};}_getOverlayPoint(n,e,t){let r;t.overlayX=="center"?r=-e.width/2:t.overlayX==="start"?r=this._isRtl()?-e.width:0:r=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:n.x+r,y:n.y+o};}_getOverlayFit(n,e,t,r){let o=fa(e),{x:a,y:l}=n,c=this._getOffset(r,"x"),d=this._getOffset(r,"y");c&&(a+=c),d&&(l+=d);let m=0-a,_=a+o.width-t.width,R=0-l,G=l+o.height-t.height,X=this._subtractOverflows(o.width,m,_),$=this._subtractOverflows(o.height,R,G),q=X*$;return{visibleArea:q,isCompletelyWithinViewport:o.width*o.height===q,fitsInViewportVertically:$===o.height,fitsInViewportHorizontally:X==o.width};}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let r=t.bottom-e.y,o=t.right-e.x,a=pa(this._overlayRef.getConfig().minHeight),l=pa(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||a!=null&&a<=r,d=n.fitsInViewportHorizontally||l!=null&&l<=o;return c&&d;}return!1;}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let r=fa(e),o=this._viewportRect,a=Math.max(n.x+r.width-o.width,0),l=Math.max(n.y+r.height-o.height,0),c=Math.max(o.top-t.top-n.y,0),d=Math.max(o.left-t.left-n.x,0),m=0,_=0;return r.width<=o.width?m=d||-a:m=n.x<this._getViewportMarginStart()?o.left-t.left-n.x:0,r.height<=o.height?_=c||-l:_=n.y<this._getViewportMarginTop()?o.top-t.top-n.y:0,this._previousPushAmount={x:m,y:_},{x:n.x+m,y:n.y+_};}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!pl(this._lastScrollVisibility,t)){let r=new ii(n,t);this._positionChanges.next(r);}this._lastScrollVisibility=t;}this._lastPosition=n,this._isInitialRender=!1;}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,r=n.overlayY;n.overlayX==="center"?t="center":this._isRtl()?t=n.overlayX==="start"?"right":"left":t=n.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${r}`;}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,r=this._isRtl(),o,a,l;if(e.overlayY==="top")a=n.y,o=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")l=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-l+this._getViewportMarginTop();else{let G=Math.min(t.bottom-n.y+t.top,n.y),X=this._lastBoundingBoxSize.height;o=G*2,a=n.y-G,o>X&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-X/2);}let c=e.overlayX==="start"&&!r||e.overlayX==="end"&&r,d=e.overlayX==="end"&&!r||e.overlayX==="start"&&r,m,_,R;if(d)R=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),m=n.x-this._getViewportMarginStart();else if(c)_=n.x,m=t.right-n.x-this._getViewportMarginEnd();else{let G=Math.min(t.right-n.x+t.left,n.x),X=this._lastBoundingBoxSize.width;m=G*2,_=n.x-G,m>X&&!this._isInitialRender&&!this._growAfterOpen&&(_=n.x-X/2);}return{top:a,left:_,bottom:l,right:R,width:m,height:o};}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let r={};if(this._hasExactPosition())r.top=r.left="0",r.bottom=r.right="auto",r.maxHeight=r.maxWidth="",r.width=r.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;r.width=J(t.width),r.height=J(t.height),r.top=J(t.top)||"auto",r.bottom=J(t.bottom)||"auto",r.left=J(t.left)||"auto",r.right=J(t.right)||"auto",e.overlayX==="center"?r.alignItems="center":r.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?r.justifyContent="center":r.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(r.maxHeight=J(o)),a&&(r.maxWidth=J(a));}this._lastBoundingBoxSize=t,rt(this._boundingBox.style,r);}_resetBoundingBoxStyles(){rt(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""});}_resetOverlayElementStyles(){rt(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""});}_setOverlayElementStyles(n,e){let t={},r=this._hasExactPosition(),o=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(r){let m=this._viewportRuler.getViewportScrollPosition();rt(t,this._getExactOverlayY(e,n,m)),rt(t,this._getExactOverlayX(e,n,m));}else t.position="static";let l="",c=this._getOffset(e,"x"),d=this._getOffset(e,"y");c&&(l+=`translateX(${c}px) `),d&&(l+=`translateY(${d}px)`),t.transform=l.trim(),a.maxHeight&&(r?t.maxHeight=J(a.maxHeight):o&&(t.maxHeight="")),a.maxWidth&&(r?t.maxWidth=J(a.maxWidth):o&&(t.maxWidth="")),rt(this._pane.style,t);}_getExactOverlayY(n,e,t){let r={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;r.bottom=`${a-(o.y+this._overlayRect.height)}px`;}else r.top=J(o.y);return r;}_getExactOverlayX(n,e,t){let r={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let l=this._document.documentElement.clientWidth;r.right=`${l-(o.x+this._overlayRect.width)}px`;}else r.left=J(o.x);return r;}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(r=>r.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:ma(n,t),isOriginOutsideView:rr(n,t),isOverlayClipped:ma(e,t),isOverlayOutsideView:rr(e,t)};}_subtractOverflows(n,...e){return e.reduce((t,r)=>t-Math.max(r,0),n);}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()};}_isRtl(){return this._overlayRef.getDirection()==="rtl";}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed;}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY;}_validatePositions(){}_addPanelClasses(n){this._pane&&Gi(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e));});}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n);}),this._appliedPanelClasses=[]);}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0;}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0;}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0;}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0;}_getOriginRect(){let n=this._origin;if(n instanceof E)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return{top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e};}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let t=e.getBoundingClientRect();return n&&(e.style.display=""),t;}};function rt(i,n){for(let e in n)n.hasOwnProperty(e)&&(i[e]=n[e]);return i;}function pa(i){if(typeof i!="number"&&i!=null){let[n,e]=i.split(hl);return!e||e==="px"?parseFloat(n):null;}return i||null;}function fa(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)};}function pl(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView;}var ga="cdk-global-overlay-wrapper";function Sa(i){return new ai();}var ai=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(ga),this._isDisposed=!1;}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this;}left(n=""){return this._xOffset=n,this._xPosition="left",this;}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this;}right(n=""){return this._xOffset=n,this._xPosition="right",this;}start(n=""){return this._xOffset=n,this._xPosition="start",this;}end(n=""){return this._xOffset=n,this._xPosition="end",this;}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this;}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this;}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this;}centerVertically(n=""){return this.top(n),this._alignItems="center",this;}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:r,height:o,maxWidth:a,maxHeight:l}=t,c=(r==="100%"||r==="100vw")&&(!a||a==="100%"||a==="100vw"),d=(o==="100%"||o==="100vh")&&(!l||l==="100%"||l==="100vh"),m=this._xPosition,_=this._xOffset,R=this._overlayRef.getConfig().direction==="rtl",G="",X="",$="";c?$="flex-start":m==="center"?($="center",R?X=_:G=_):R?m==="left"||m==="end"?($="flex-end",G=_):(m==="right"||m==="start")&&($="flex-start",X=_):m==="left"||m==="start"?($="flex-start",G=_):(m==="right"||m==="end")&&($="flex-end",X=_),n.position=this._cssPosition,n.marginLeft=c?"0":G,n.marginTop=d?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?"0":X,e.justifyContent=$,e.alignItems=d?"flex-start":this._alignItems;}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(ga),t.justifyContent=t.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0;}},Ea=(()=>{class i{_injector=s(U);constructor(){}global(){return Sa();}flexibleConnectedTo(e){return sn(this._injector,e);}static ɵfac=function(t){return new(t||i)();};static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})(),ln=new f("OVERLAY_DEFAULT_CONFIG");function cn(i,n){i.get(ve).load(wa);let e=i.get(Ma),t=i.get(z),r=i.get(fe),o=i.get(qe),a=i.get(Re),l=i.get(ge,null,{optional:!0})||i.get(we).createRenderer(null,null),c=new ot(n),d=i.get(ln,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,"showPopover"in t.body?c.usePopover=n?.usePopover??d:c.usePopover=!1;let m=t.createElement("div"),_=t.createElement("div");m.id=r.getId("cdk-overlay-"),m.classList.add("cdk-overlay-pane"),_.appendChild(m),c.usePopover&&(_.setAttribute("popover","manual"),_.classList.add("cdk-overlay-popover"));let R=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return ar(R)?R.after(_):R?.type==="parent"?R.element.appendChild(_):e.getContainerElement().appendChild(_),new ri(new on(m,o,i),_,m,c,i.get(T),i.get(xa),t,i.get($r),i.get(Ca),n?.disableAnimations??i.get(yn,null,{optional:!0})==="NoopAnimations",i.get(mt),l);}var Aa=(()=>{class i{scrollStrategies=s(va);_positionBuilder=s(Ea);_injector=s(U);constructor(){}create(e){return cn(this._injector,e);}position(){return this._positionBuilder;}static ɵfac=function(t){return new(t||i)();};static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})(),fl=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],gl=new f("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(U);return()=>at(i);}}),Et=(()=>{class i{elementRef=s(E);constructor(){}static ɵfac=function(t){return new(t||i)();};static ɵdir=N({type:i,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]});}return i;})(),Da=new f("cdk-connected-overlay-default-config"),li=(()=>{class i{_dir=s(Re,{optional:!0});_injector=s(U);_overlayRef;_templatePortal;_backdropSubscription=ie.EMPTY;_attachSubscription=ie.EMPTY;_detachSubscription=ie.EMPTY;_positionSubscription=ie.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=s(gl);_ngZone=s(T);origin;positions;positionStrategy;get offsetX(){return this._offsetX;}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position);}get offsetY(){return this._offsetY;}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position);}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e);}backdropClick=new F();positionChange=new F();attach=new F();detach=new F();overlayKeydown=new F();overlayOutsideClick=new F();constructor(){let e=s(pt),t=s(ft),r=s(Da,{optional:!0}),o=s(ln,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new it(e,t),this.scrollStrategy=this._scrollStrategyFactory(),r&&this._assignConfig(r);}get overlayRef(){return this._overlayRef;}get dir(){return this._dir?this._dir.value:"ltr";}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose();}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay());}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=fl);let e=this._overlayRef=cn(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!ye(t)&&(t.preventDefault(),this.detachOverlay());}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let r=this._getOriginElement(),o=le(t);(!r||r!==o&&!r.contains(o))&&this.overlayOutsideClick.next(t);});}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new ot({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t;}_updatePositionStrategy(e){let t=this.positions.map(r=>({originX:r.originX,originY:r.originY,overlayX:r.overlayX,overlayY:r.overlayY,offsetX:r.offsetX||this.offsetX,offsetY:r.offsetY||this.offsetY,panelClass:r.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover);}_createPositionStrategy(){let e=sn(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e;}_getOrigin(){return this.origin instanceof Et?this.origin.elementRef:this.origin;}_getOriginElement(){return this.origin instanceof Et?this.origin.elementRef.nativeElement:this.origin instanceof E?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null;}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0;}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Ir(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe();})),this.open=!0;}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1;}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth;}static ɵfac=function(t){return new(t||i)();};static ɵdir=N({type:i,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",O],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",O],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",O],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",O],push:[2,"cdkConnectedOverlayPush","push",O],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",O],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",O],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[Ae]});}return i;})(),dn=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=M({type:i});static ɵinj=w({providers:[Aa],imports:[V,ca,ir,ir]});}return i;})();var _l=["mat-menu-item",""],bl=[[["mat-icon"],["","matMenuItemIcon",""]],"*"],vl=["mat-icon, [matMenuItemIcon]","*"];function yl(i,n){i&1&&(Xe(),u(0,"svg",2),W(1,"polygon",3),h());}var xl=["*"];function Cl(i,n){if(i&1){let e=Ie();De(0,"div",0),Br("click",function(){me(e);let r=g();return ue(r.closed.emit("click"));})("animationstart",function(r){me(e);let o=g();return ue(o._onAnimationStart(r.animationName));})("animationend",function(r){me(e);let o=g();return ue(o._onAnimationDone(r.animationName));})("animationcancel",function(r){me(e);let o=g();return ue(o._onAnimationDone(r.animationName));}),De(1,"div",1),I(2),Ne()();}if(i&2){let e=g();_e(e._classList),S("mat-menu-panel-animations-disabled",e._animationsDisabled)("mat-menu-panel-exit-animation",e._panelAnimationState==="void")("mat-menu-panel-animating",e._isAnimating()),gt("id",e.panelId),L("aria-label",e.ariaLabel||null)("aria-labelledby",e.ariaLabelledby||null)("aria-describedby",e.ariaDescribedby||null);}}var lr=new f("MAT_MENU_PANEL"),mn=(()=>{class i{_elementRef=s(E);_document=s(z);_focusMonitor=s(xt);_parentMenu=s(lr,{optional:!0});_changeDetectorRef=s(be);role="menuitem";disabled=!1;disableRipple=!1;_hovered=new C();_focused=new C();_highlighted=!1;_triggersSubmenu=!1;constructor(){s(ve).load(wt),this._parentMenu?.addItem?.(this);}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._getHostElement(),e,t):this._getHostElement().focus(t),this._focused.next(this);}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1);}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete();}_getTabIndex(){return this.disabled?"-1":"0";}_getHostElement(){return this._elementRef.nativeElement;}_checkDisabled(e){this.disabled&&(e.preventDefault(),e.stopPropagation());}_handleMouseEnter(){this._hovered.next(this);}getLabel(){let e=this._elementRef.nativeElement.cloneNode(!0),t=e.querySelectorAll("mat-icon, .material-icons");for(let r=0;r<t.length;r++)t[r].remove();return e.textContent?.trim()||"";}_setHighlighted(e){this._highlighted=e,this._changeDetectorRef.markForCheck();}_setTriggersSubmenu(e){this._triggersSubmenu=e,this._changeDetectorRef.markForCheck();}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement();}static ɵfac=function(t){return new(t||i)();};static ɵcmp=y({type:i,selectors:[["","mat-menu-item",""]],hostAttrs:[1,"mat-mdc-menu-item","mat-focus-indicator"],hostVars:8,hostBindings:function(t,r){t&1&&H("click",function(a){return r._checkDisabled(a);})("mouseenter",function(){return r._handleMouseEnter();}),t&2&&(L("role",r.role)("tabindex",r._getTabIndex())("aria-disabled",r.disabled)("disabled",r.disabled||null),S("mat-mdc-menu-item-highlighted",r._highlighted)("mat-mdc-menu-item-submenu-trigger",r._triggersSubmenu));},inputs:{role:"role",disabled:[2,"disabled","disabled",O],disableRipple:[2,"disableRipple","disableRipple",O]},exportAs:["matMenuItem"],attrs:_l,ngContentSelectors:vl,decls:5,vars:3,consts:[[1,"mat-mdc-menu-item-text"],["matRipple","",1,"mat-mdc-menu-ripple",3,"matRippleDisabled","matRippleTrigger"],["viewBox","0 0 5 10","focusable","false","aria-hidden","true",1,"mat-mdc-menu-submenu-icon"],["points","0,0 5,5 0,10"]],template:function(t,r){t&1&&(te(bl),I(0),u(1,"span",0),I(2,1),h(),W(3,"div",1),P(4,yl,2,0,":svg:svg",2)),t&2&&(p(3),j("matRippleDisabled",r.disableRipple||r.disabled)("matRippleTrigger",r._getHostElement()),p(),k(r._triggersSubmenu?4:-1));},dependencies:[Xn],encapsulation:2,changeDetection:0});}return i;})();var wl=new f("MatMenuContent");var Ml=new f("mat-menu-default-options",{providedIn:"root",factory:()=>({overlapTrigger:!1,xPosition:"after",yPosition:"below",backdropClass:"cdk-overlay-transparent-backdrop"})}),sr="_mat-menu-enter",ci="_mat-menu-exit",Dt=(()=>{class i{_elementRef=s(E);_changeDetectorRef=s(be);_injector=s(U);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=de();_allItems;_directDescendantItems=new Lt();_classList={};_panelAnimationState="void";_animationDone=new C();_isAnimating=K(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition;}set xPosition(e){this._xPosition=e,this.setPositionClasses();}get yPosition(){return this._yPosition;}set yPosition(e){this._yPosition=e,this.setPositionClasses();}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;set panelClass(e){let t=this._previousPanelClass,r=v({},this._classList);t&&t.length&&t.split(" ").forEach(o=>{r[o]=!1;}),this._previousPanelClass=e,e&&e.length&&(e.split(" ").forEach(o=>{r[o]=!0;}),this._elementRef.nativeElement.className=""),this._classList=r;}_previousPanelClass;get classList(){return this.panelClass;}set classList(e){this.panelClass=e;}closed=new F();close=this.closed;panelId=s(fe).getId("mat-menu-panel-");constructor(){let e=s(Ml);this.overlayPanelClass=e.overlayPanelClass||"",this._xPosition=e.xPosition,this._yPosition=e.yPosition,this.backdropClass=e.backdropClass,this.overlapTrigger=e.overlapTrigger,this.hasBackdrop=e.hasBackdrop;}ngOnInit(){this.setPositionClasses();}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new Jt(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(),this._keyManager.tabOut.subscribe(()=>this.closed.emit("tab")),this._directDescendantItems.changes.pipe(oe(this._directDescendantItems),Ce(e=>Se(...e.map(t=>t._focused)))).subscribe(e=>this._keyManager.updateActiveItem(e)),this._directDescendantItems.changes.subscribe(e=>{let t=this._keyManager;if(this._panelAnimationState==="enter"&&t.activeItem?._hasFocus()){let r=e.toArray(),o=Math.max(0,Math.min(r.length-1,t.activeItemIndex||0));r[o]&&!r[o].disabled?t.setActiveItem(o):t.setNextItemActive();}});}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout);}_hovered(){return this._directDescendantItems.changes.pipe(oe(this._directDescendantItems),Ce(t=>Se(...t.map(r=>r._hovered))));}addItem(e){}removeItem(e){}_handleKeydown(e){let t=e.keyCode,r=this._keyManager;switch(t){case 27:ye(e)||(e.preventDefault(),this.closed.emit("keydown"));break;case 37:this.parentMenu&&this.direction==="ltr"&&this.closed.emit("keydown");break;case 39:this.parentMenu&&this.direction==="rtl"&&this.closed.emit("keydown");break;default:(t===38||t===40)&&r.setFocusOrigin("keyboard"),r.onKeydown(e);return;}}focusFirstItem(e="program"){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=Ge(()=>{let t=this._resolvePanel();if(!t||!t.contains(document.activeElement)){let r=this._keyManager;r.setFocusOrigin(e).setFirstItemActive(),!r.activeItem&&t&&t.focus();}},{injector:this._injector});}resetActiveItem(){this._keyManager.setActiveItem(-1);}setElevation(e){}setPositionClasses(e=this.xPosition,t=this.yPosition){this._classList=ee(v({},this._classList),{"mat-menu-before":e==="before","mat-menu-after":e==="after","mat-menu-above":t==="above","mat-menu-below":t==="below"}),this._changeDetectorRef.markForCheck();}_onAnimationDone(e){let t=e===ci;(t||e===sr)&&(t&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(t?"void":"enter"),this._isAnimating.set(!1));}_onAnimationStart(e){(e===sr||e===ci)&&this._isAnimating.set(!0);}_setIsOpen(e){if(this._panelAnimationState=e?"enter":"void",e){if(this._keyManager.activeItemIndex===0){let t=this._resolvePanel();t&&(t.scrollTop=0);}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(ci),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(e?sr:ci);}),this._changeDetectorRef.markForCheck();}_updateDirectDescendants(){this._allItems.changes.pipe(oe(this._allItems)).subscribe(e=>{this._directDescendantItems.reset(e.filter(t=>t._parentMenu===this)),this._directDescendantItems.notifyOnChanges();});}_resolvePanel(){let e=null;return this._directDescendantItems.length&&(e=this._directDescendantItems.first._getHostElement().closest('[role="menu"]')),e;}static ɵfac=function(t){return new(t||i)();};static ɵcmp=y({type:i,selectors:[["mat-menu"]],contentQueries:function(t,r,o){if(t&1&&He(o,wl,5)(o,mn,5)(o,mn,4),t&2){let a;A(a=D())&&(r.lazyContent=a.first),A(a=D())&&(r._allItems=a),A(a=D())&&(r.items=a);}},viewQuery:function(t,r){if(t&1&&he(pt,5),t&2){let o;A(o=D())&&(r.templateRef=o.first);}},hostVars:3,hostBindings:function(t,r){t&2&&L("aria-label",null)("aria-labelledby",null)("aria-describedby",null);},inputs:{backdropClass:"backdropClass",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],xPosition:"xPosition",yPosition:"yPosition",overlapTrigger:[2,"overlapTrigger","overlapTrigger",O],hasBackdrop:[2,"hasBackdrop","hasBackdrop",e=>e==null?null:O(e)],panelClass:[0,"class","panelClass"],classList:"classList"},outputs:{closed:"closed",close:"close"},exportAs:["matMenu"],features:[pe([{provide:lr,useExisting:i}])],ngContentSelectors:xl,decls:1,vars:0,consts:[["tabindex","-1","role","menu",1,"mat-mdc-menu-panel",3,"click","animationstart","animationend","animationcancel","id"],[1,"mat-mdc-menu-content"]],template:function(t,r){t&1&&(te(),Nr(0,Cl,3,12,"ng-template"));},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--mat-menu-item-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-menu-item-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-menu-item-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-menu-item-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-menu-item-label-text-weight, var(--mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--mat-menu-container-shape, var(--mat-sys-corner-extra-small));
  background-color: var(--mat-menu-container-color, var(--mat-sys-surface-container));
  box-shadow: var(--mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--mat-menu-divider-color, var(--mat-sys-surface-variant));
  margin-bottom: var(--mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--mat-menu-item-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding-left: var(--mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--mat-menu-item-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--mat-menu-item-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled] {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--mat-menu-item-spacing, 12px);
  height: var(--mat-menu-item-icon-size, 24px);
  width: var(--mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2,changeDetection:0});}return i;})(),Sl=new f("mat-menu-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(U);return()=>at(i);}});var At=new WeakMap(),El=(()=>{class i{_canHaveBackdrop;_element=s(E);_viewContainerRef=s(ft);_menuItemInstance=s(mn,{optional:!0,self:!0});_dir=s(Re,{optional:!0});_focusMonitor=s(xt);_ngZone=s(T);_injector=s(U);_scrollStrategy=s(Sl);_changeDetectorRef=s(be);_animationsDisabled=de();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=ie.EMPTY;_menuCloseSubscription=ie.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal;}set _menu(e){e!==this._menuInternal&&(this._menuInternal=e,this._menuCloseSubscription.unsubscribe(),e&&(this._parentMaterialMenu,this._menuCloseSubscription=e.close.subscribe(t=>{this._destroyMenu(t),(t==="click"||t==="tab")&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(t);})),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()));}_menuInternal=null;constructor(e){this._canHaveBackdrop=e;let t=s(lr,{optional:!0});this._parentMaterialMenu=t instanceof Dt?t:void 0;}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&At.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null);}get menuOpen(){return this._menuOpen;}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr";}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu);}_closeMenu(){this._menu?.close.emit();}_openMenu(e){if(this._triggerIsAriaDisabled())return;let t=this._menu;if(this._menuOpen||!t)return;this._pendingRemoval?.unsubscribe();let r=At.get(t);At.set(t,this),r&&r!==this&&r._closeMenu();let o=this._createOverlay(t),a=o.getConfig(),l=a.positionStrategy;this._setPosition(t,l),this._canHaveBackdrop?a.hasBackdrop=t.hasBackdrop==null?!this._triggersSubmenu():t.hasBackdrop:a.hasBackdrop=t.hasBackdrop??!1,o.hasAttached()||(o.attach(this._getPortal(t)),t.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),t.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,t.direction=this.dir,e&&t.focusFirstItem(this._openedBy||"program"),this._setIsMenuOpen(!0),t instanceof Dt&&(t._setIsOpen(!0),t._directDescendantItems.changes.pipe(ae(t.close)).subscribe(()=>{l.withLockedPosition(!1).reapplyLastPosition(),l.withLockedPosition(!0);}));}focus(e,t){this._focusMonitor&&e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t);}_destroyMenu(e){let t=this._overlayRef,r=this._menu;!t||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),r instanceof Dt&&this._ownsMenu(r)?(this._pendingRemoval=r._animationDone.pipe(ct(1)).subscribe(()=>{t.detach(),At.has(r)||r.lazyContent?.detach();}),r._setIsOpen(!1)):(t.detach(),r?.lazyContent?.detach()),r&&this._ownsMenu(r)&&At.delete(r),this.restoreFocus&&(e==="keydown"||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1));}_setIsMenuOpen(e){e!==this._menuOpen&&(this._menuOpen=e,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(e),this._changeDetectorRef.markForCheck());}_createOverlay(e){if(!this._overlayRef){let t=this._getOverlayConfig(e);this._subscribeToPositions(e,t.positionStrategy),this._overlayRef=cn(this._injector,t),this._overlayRef.keydownEvents().subscribe(r=>{this._menu instanceof Dt&&this._menu._handleKeydown(r);});}return this._overlayRef;}_getOverlayConfig(e){return new ot({positionStrategy:sn(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),backdropClass:e.backdropClass||"cdk-overlay-transparent-backdrop",panelClass:e.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||"ltr",disableAnimations:this._animationsDisabled});}_subscribeToPositions(e,t){e.setPositionClasses&&t.positionChanges.subscribe(r=>{this._ngZone.run(()=>{let o=r.connectionPair.overlayX==="start"?"after":"before",a=r.connectionPair.overlayY==="top"?"below":"above";e.setPositionClasses(o,a);});});}_setPosition(e,t){let[r,o]=e.xPosition==="before"?["end","start"]:["start","end"],[a,l]=e.yPosition==="above"?["bottom","top"]:["top","bottom"],[c,d]=[a,l],[m,_]=[r,o],R=0;if(this._triggersSubmenu()){if(_=r=e.xPosition==="before"?"start":"end",o=m=r==="end"?"start":"end",this._parentMaterialMenu){if(this._parentInnerPadding==null){let G=this._parentMaterialMenu.items.first;this._parentInnerPadding=G?G._getHostElement().offsetTop:0;}R=a==="bottom"?this._parentInnerPadding:-this._parentInnerPadding;}}else e.overlapTrigger||(c=a==="top"?"bottom":"top",d=l==="top"?"bottom":"top");t.withPositions([{originX:r,originY:c,overlayX:m,overlayY:a,offsetY:R},{originX:o,originY:c,overlayX:_,overlayY:a,offsetY:R},{originX:r,originY:d,overlayX:m,overlayY:l,offsetY:-R},{originX:o,originY:d,overlayX:_,overlayY:l,offsetY:-R}]);}_menuClosingActions(){let e=this._getOutsideClickStream(this._overlayRef),t=this._overlayRef.detachments(),r=this._parentMaterialMenu?this._parentMaterialMenu.closed:ce(),o=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(re(a=>this._menuOpen&&a!==this._menuItemInstance)):ce();return Se(e,r,o,t);}_getPortal(e){return(!this._portal||this._portal.templateRef!==e.templateRef)&&(this._portal=new it(e.templateRef,this._viewContainerRef)),this._portal;}_ownsMenu(e){return At.get(e)===this;}_triggerIsAriaDisabled(){return O(this._element.nativeElement.getAttribute("aria-disabled"));}static ɵfac=function(t){Tr();};static ɵdir=N({type:i});}return i;})(),Ia=(()=>{class i extends El{_cleanupTouchstart;_hoverSubscription=ie.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu;}set _deprecatedMatMenuTriggerFor(e){this.menu=e;}get menu(){return this._menu;}set menu(e){this._menu=e;}menuData;restoreFocus=!0;menuOpened=new F();onMenuOpen=this.menuOpened;menuClosed=new F();onMenuClose=this.menuClosed;constructor(){super(!0);let e=s(ge);this._cleanupTouchstart=e.listen(this._element.nativeElement,"touchstart",t=>{Je(t)||(this._openedBy="touch");},{passive:!0});}triggersSubmenu(){return super._triggersSubmenu();}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu();}openMenu(){this._openMenu(!0);}closeMenu(){this._closeMenu();}updatePosition(){this._overlayRef?.updatePosition();}ngAfterContentInit(){this._handleHover();}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe();}_getOverlayOrigin(){return this._element;}_getOutsideClickStream(e){return e.backdropClick();}_handleMousedown(e){Qe(e)||(this._openedBy=e.button===0?"mouse":void 0,this.triggersSubmenu()&&e.preventDefault());}_handleKeydown(e){let t=e.keyCode;(t===13||t===32)&&(this._openedBy="keyboard"),this.triggersSubmenu()&&(t===39&&this.dir==="ltr"||t===37&&this.dir==="rtl")&&(this._openedBy="keyboard",this.openMenu());}_handleClick(e){this.triggersSubmenu()?(e.stopPropagation(),this.openMenu()):this.toggleMenu();}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(e=>{e===this._menuItemInstance&&!e.disabled&&this._parentMaterialMenu?._panelAnimationState!=="void"&&(this._openedBy="mouse",this._openMenu(!1));}));}static ɵfac=function(t){return new(t||i)();};static ɵdir=N({type:i,selectors:[["","mat-menu-trigger-for",""],["","matMenuTriggerFor",""]],hostAttrs:[1,"mat-mdc-menu-trigger"],hostVars:3,hostBindings:function(t,r){t&1&&H("click",function(a){return r._handleClick(a);})("mousedown",function(a){return r._handleMousedown(a);})("keydown",function(a){return r._handleKeydown(a);}),t&2&&L("aria-haspopup",r.menu?"menu":null)("aria-expanded",r.menuOpen)("aria-controls",r.menuOpen?r.menu==null?null:r.menu.panelId:null);},inputs:{_deprecatedMatMenuTriggerFor:[0,"mat-menu-trigger-for","_deprecatedMatMenuTriggerFor"],menu:[0,"matMenuTriggerFor","menu"],menuData:[0,"matMenuTriggerData","menuData"],restoreFocus:[0,"matMenuTriggerRestoreFocus","restoreFocus"]},outputs:{menuOpened:"menuOpened",onMenuOpen:"onMenuOpen",menuClosed:"menuClosed",onMenuClose:"onMenuClose"},exportAs:["matMenuTrigger"],features:[Me]});}return i;})();var Oa=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=M({type:i});static ɵinj=w({imports:[Mt,dn,V,St]});}return i;})();var Dl=["determinateSpinner"];function Il(i,n){if(i&1&&(Xe(),u(0,"svg",11),W(1,"circle",12),h()),i&2){let e=g();L("viewBox",e._viewBox()),p(),Ke("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),L("r",e._circleRadius());}}var Ol=new f("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Pa})}),Pa=100,Pl=10,di=(()=>{class i{_elementRef=s(E);_noopAnimations;get color(){return this._color||this._defaultColor;}set color(e){this._color=e;}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=s(Ol),t=Xi(),r=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=r.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&r.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth));}mode;get value(){return this.mode==="determinate"?this._value:0;}set value(e){this._value=Math.max(0,Math.min(100,e||0));}_value=0;get diameter(){return this._diameter;}set diameter(e){this._diameter=e||0;}_diameter=Pa;get strokeWidth(){return this._strokeWidth??this.diameter/10;}set strokeWidth(e){this._strokeWidth=e||0;}_strokeWidth;_circleRadius(){return(this.diameter-Pl)/2;}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`;}_strokeCircumference(){return 2*Math.PI*this._circleRadius();}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null;}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100;}static ɵfac=function(t){return new(t||i)();};static ɵcmp=y({type:i,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,r){if(t&1&&he(Dl,5),t&2){let o;A(o=D())&&(r._determinateCircle=o.first);}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,r){t&2&&(L("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",r.mode==="determinate"?r.value:null)("mode",r.mode),_e("mat-"+r.color),Ke("width",r.diameter,"px")("height",r.diameter,"px")("--mat-progress-spinner-size",r.diameter+"px")("--mat-progress-spinner-active-indicator-width",r.diameter+"px"),S("_mat-animation-noopable",r._noopAnimations)("mdc-circular-progress--indeterminate",r.mode==="indeterminate"));},inputs:{color:"color",mode:"mode",value:[2,"value","value",Ve],diameter:[2,"diameter","diameter",Ve],strokeWidth:[2,"strokeWidth","strokeWidth",Ve]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,r){if(t&1&&(We(0,Il,2,8,"ng-template",null,0,Mn),u(2,"div",2,1),Xe(),u(4,"svg",3),W(5,"circle",4),h()(),Or(),u(6,"div",5)(7,"div",6)(8,"div",7),wn(9,8),h(),u(10,"div",9),wn(11,8),h(),u(12,"div",10),wn(13,8),h()()()),t&2){let o=Le(1);p(4),L("viewBox",r._viewBox()),p(),Ke("stroke-dasharray",r._strokeCircumference(),"px")("stroke-dashoffset",r._strokeDashOffset(),"px")("stroke-width",r._circleStrokeWidth(),"%"),L("r",r._circleRadius()),p(4),j("ngTemplateOutlet",o),p(2),j("ngTemplateOutlet",o),p(2),j("ngTemplateOutlet",o);}},dependencies:[An],styles:[`.mat-mdc-progress-spinner {
  --mat-progress-spinner-animation-multiplier: 1;
  display: block;
  overflow: hidden;
  line-height: 0;
  position: relative;
  direction: ltr;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mat-mdc-progress-spinner circle {
  stroke-width: var(--mat-progress-spinner-active-indicator-width, 4px);
}
.mat-mdc-progress-spinner._mat-animation-noopable, .mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle {
  transition: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container {
  animation: none !important;
}
.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle {
  stroke-dasharray: 0 !important;
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle {
    stroke: currentColor;
    stroke: CanvasText;
  }
}

.mat-progress-spinner-reduced-motion {
  --mat-progress-spinner-animation-multiplier: 1.25;
}

.mdc-circular-progress__determinate-container,
.mdc-circular-progress__indeterminate-circle-graphic,
.mdc-circular-progress__indeterminate-container,
.mdc-circular-progress__spinner-layer {
  position: absolute;
  width: 100%;
  height: 100%;
}

.mdc-circular-progress__determinate-container {
  transform: rotate(-90deg);
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container {
  opacity: 0;
}

.mdc-circular-progress__indeterminate-container {
  font-size: 0;
  letter-spacing: 0;
  white-space: nowrap;
  opacity: 0;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container {
  opacity: 1;
  animation: mdc-circular-progress-container-rotate calc(1568.2352941176ms * var(--mat-progress-spinner-animation-multiplier)) linear infinite;
}

.mdc-circular-progress__determinate-circle-graphic,
.mdc-circular-progress__indeterminate-circle-graphic {
  fill: transparent;
}

.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
  stroke: var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary));
}
@media (forced-colors: active) {
  .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,
  .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic {
    stroke: CanvasText;
  }
}

.mdc-circular-progress__determinate-circle {
  transition: stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);
}

.mdc-circular-progress__gap-patch {
  position: absolute;
  top: 0;
  left: 47.5%;
  box-sizing: border-box;
  width: 5%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic {
  left: -900%;
  width: 2000%;
  transform: rotate(180deg);
}
.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic {
  width: 200%;
}
.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  left: -100%;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-left-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}
.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic {
  animation: mdc-circular-progress-right-spin calc(1333ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

.mdc-circular-progress__circle-clipper {
  display: inline-flex;
  position: relative;
  width: 50%;
  height: 100%;
  overflow: hidden;
}

.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer {
  animation: mdc-circular-progress-spinner-layer-rotate calc(5332ms * var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both;
}

@keyframes mdc-circular-progress-container-rotate {
  to {
    transform: rotate(360deg);
  }
}
@keyframes mdc-circular-progress-spinner-layer-rotate {
  12.5% {
    transform: rotate(135deg);
  }
  25% {
    transform: rotate(270deg);
  }
  37.5% {
    transform: rotate(405deg);
  }
  50% {
    transform: rotate(540deg);
  }
  62.5% {
    transform: rotate(675deg);
  }
  75% {
    transform: rotate(810deg);
  }
  87.5% {
    transform: rotate(945deg);
  }
  100% {
    transform: rotate(1080deg);
  }
}
@keyframes mdc-circular-progress-left-spin {
  from {
    transform: rotate(265deg);
  }
  50% {
    transform: rotate(130deg);
  }
  to {
    transform: rotate(265deg);
  }
}
@keyframes mdc-circular-progress-right-spin {
  from {
    transform: rotate(-265deg);
  }
  50% {
    transform: rotate(-130deg);
  }
  to {
    transform: rotate(-265deg);
  }
}
`],encapsulation:2,changeDetection:0});}return i;})();var mi=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=M({type:i});static ɵinj=w({imports:[V]});}return i;})();var kl=["*",[["mat-toolbar-row"]]],Rl=["*","mat-toolbar-row"],Tl=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵdir=N({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]});}return i;})(),Ra=(()=>{class i{_elementRef=s(E);_platform=s(Q);_document=s(z);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()));}_checkToolbarMixedModes(){this._toolbarRows.length;}static ɵfac=function(t){return new(t||i)();};static ɵcmp=y({type:i,selectors:[["mat-toolbar"]],contentQueries:function(t,r,o){if(t&1&&He(o,Tl,5),t&2){let a;A(a=D())&&(r._toolbarRows=a);}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,r){t&2&&(_e(r.color?"mat-"+r.color:""),S("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0));},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Rl,decls:2,vars:0,template:function(t,r){t&1&&(te(kl),I(0),I(1,1));},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0});}return i;})();var Ta=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=M({type:i});static ɵinj=w({imports:[V]});}return i;})();var cr=class{_box;_destroyed=new C();_resizeSubject=new C();_resizeObserver;_elementObservables=new Map();constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)));}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new lt(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),t.unsubscribe(),this._elementObservables.delete(n);};}).pipe(re(e=>e.some(t=>t.target===n)),Te({bufferSize:1,refCount:!0}),ae(this._destroyed))),this._elementObservables.get(n);}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear();}},Fa=(()=>{class i{_cleanupErrorListener;_observers=new Map();_ngZone=s(T);constructor(){typeof ResizeObserver<"u";}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.();}observe(e,t){let r=t?.box||"content-box";return this._observers.has(r)||this._observers.set(r,new cr(r)),this._observers.get(r).observe(e);}static ɵfac=function(t){return new(t||i)();};static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var Nl=["notch"],Ll=["matFormFieldNotchedOutline",""],Vl=["*"],Na=["iconPrefixContainer"],La=["textPrefixContainer"],Va=["iconSuffixContainer"],Ba=["textSuffixContainer"],Bl=["textField"],zl=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],jl=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Gl(i,n){i&1&&W(0,"span",21);}function Wl(i,n){if(i&1&&(u(0,"label",20),I(1,1),P(2,Gl,1,0,"span",21),h()),i&2){let e=g(2);j("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),L("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),k(!e.hideRequiredMarker&&e._control.required?2:-1);}}function Ul(i,n){if(i&1&&P(0,Wl,3,5,"label",20),i&2){let e=g();k(e._hasFloatingLabel()?0:-1);}}function Hl(i,n){i&1&&W(0,"div",7);}function $l(i,n){}function Yl(i,n){if(i&1&&We(0,$l,0,0,"ng-template",13),i&2){g(2);let e=Le(1);j("ngTemplateOutlet",e);}}function Xl(i,n){if(i&1&&(u(0,"div",9),P(1,Yl,1,1,null,13),h()),i&2){let e=g();j("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),k(e._forceDisplayInfixLabel()?-1:1);}}function ql(i,n){i&1&&(u(0,"div",10,2),I(2,2),h());}function Kl(i,n){i&1&&(u(0,"div",11,3),I(2,3),h());}function Zl(i,n){}function Ql(i,n){if(i&1&&We(0,Zl,0,0,"ng-template",13),i&2){g();let e=Le(1);j("ngTemplateOutlet",e);}}function Jl(i,n){i&1&&(u(0,"div",14,4),I(2,4),h());}function ec(i,n){i&1&&(u(0,"div",15,5),I(2,5),h());}function tc(i,n){i&1&&W(0,"div",16);}function nc(i,n){i&1&&(u(0,"div",18),I(1,6),h());}function ic(i,n){if(i&1&&(u(0,"mat-hint",22),B(1),h()),i&2){let e=g(2);j("id",e._hintLabelId),p(),se(e.hintLabel);}}function rc(i,n){if(i&1&&(u(0,"div",19),P(1,ic,2,2,"mat-hint",22),I(2,7),W(3,"div",23),I(4,8),h()),i&2){let e=g();p(),k(e.hintLabel?1:-1);}}var un=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵdir=N({type:i,selectors:[["mat-label"]]});}return i;})(),oc=new f("MatError");var dr=(()=>{class i{align="start";id=s(fe).getId("mat-mdc-hint-");static ɵfac=function(t){return new(t||i)();};static ɵdir=N({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,r){t&2&&(gt("id",r.id),L("align",null),S("mat-mdc-form-field-hint-end",r.align==="end"));},inputs:{align:"align",id:"id"}});}return i;})(),ac=new f("MatPrefix");var sc=new f("MatSuffix");var $a=new f("FloatingLabelParent"),za=(()=>{class i{_elementRef=s(E);get floating(){return this._floating;}set floating(e){this._floating=e,this.monitorResize&&this._handleResize();}_floating=!1;get monitorResize(){return this._monitorResize;}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe();}_monitorResize=!1;_resizeObserver=s(Fa);_ngZone=s(T);_parent=s($a);_resizeSubscription=new ie();constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe();}getWidth(){return lc(this._elementRef.nativeElement);}get element(){return this._elementRef.nativeElement;}_handleResize(){setTimeout(()=>this._parent._handleLabelResized());}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize());});}static ɵfac=function(t){return new(t||i)();};static ɵdir=N({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,r){t&2&&S("mdc-floating-label--float-above",r.floating);},inputs:{floating:"floating",monitorResize:"monitorResize"}});}return i;})();function lc(i){let n=i;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t;}var ja="mdc-line-ripple--active",ui="mdc-line-ripple--deactivating",Ga=(()=>{class i{_elementRef=s(E);_cleanupTransitionEnd;constructor(){let e=s(T),t=s(ge);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd);});}activate(){let e=this._elementRef.nativeElement.classList;e.remove(ui),e.add(ja);}deactivate(){this._elementRef.nativeElement.classList.add(ui);}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,r=t.contains(ui);e.propertyName==="opacity"&&r&&t.remove(ja,ui);};ngOnDestroy(){this._cleanupTransitionEnd();}static ɵfac=function(t){return new(t||i)();};static ɵdir=N({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]});}return i;})(),Wa=(()=>{class i{_elementRef=s(E);_ngZone=s(T);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="");}))):e.classList.add("mdc-notched-outline--no-label");}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`;}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`);}static ɵfac=function(t){return new(t||i)();};static ɵcmp=y({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,r){if(t&1&&he(Nl,5),t&2){let o;A(o=D())&&(r._notch=o.first);}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,r){t&2&&S("mdc-notched-outline--notched",r.open);},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:Ll,ngContentSelectors:Vl,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,r){t&1&&(te(),Ue(0,"div",1),De(1,"div",2,0),I(3),Ne(),Ue(4,"div",3));},encapsulation:2,changeDetection:0});}return i;})(),mr=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(t){return new(t||i)();};static ɵdir=N({type:i});}return i;})();var ur=new f("MatFormField"),cc=new f("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Ua="fill",dc="auto",Ha="fixed",mc="translateY(-50%)",hi=(()=>{class i{_elementRef=s(E);_changeDetectorRef=s(be);_platform=s(Q);_idGenerator=s(fe);_ngZone=s(T);_defaults=s(cc,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=zt("iconPrefixContainer");_textPrefixContainerSignal=zt("textPrefixContainer");_iconSuffixContainerSignal=zt("iconSuffixContainer");_textSuffixContainerSignal=zt("textSuffixContainer");_prefixSuffixContainers=Pe(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Ur(un);get hideRequiredMarker(){return this._hideRequiredMarker;}set hideRequiredMarker(e){this._hideRequiredMarker=en(e);}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||dc;}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck());}_floatLabel;get appearance(){return this._appearanceSignal();}set appearance(e){let t=e||this._defaults?.appearance||Ua;this._appearanceSignal.set(t);}_appearanceSignal=K(Ua);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Ha;}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Ha;}_subscriptSizing=null;get hintLabel(){return this._hintLabel;}set hintLabel(e){this._hintLabel=e,this._processHints();}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl;}set _control(e){this._explicitFormFieldControl=e;}_destroyed=new C();_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=de();constructor(){let e=this._defaults,t=s(Re);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ht(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset();}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled");},300);}),this._changeDetectorRef.detectChanges();}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix();}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck();}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete();}getLabelId=Pe(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef;}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always");}_initializeControl(e){let t=this._control,r="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(r+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(r+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck();}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(oe([void 0,void 0]),Y(()=>[t.errorState,t.userAriaDescribedBy]),Mi(),re(([[o,a],[l,c]])=>o!==l||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(ae(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()));}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText);}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Se(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck();});}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck();}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck();}),this._validateHints(),this._syncDescribedByIds();}_assertFormFieldControl(){this._control;}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e);}_syncOutlineLabelOffset(){Hr({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset());});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"});}return this._getOutlinedLabelOffset();},write:e=>this._writeOutlinedLabelStyles(e())});}_shouldAlwaysFloat(){return this.floatLabel==="always";}_hasOutline(){return this.appearance==="outline";}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat();}_hasFloatingLabel=Pe(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1;}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e];}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint";}_handleLabelResized(){this._refreshOutlineNotchWidth();}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth());}_processHints(){this._validateHints(),this._syncDescribedByIds();}_validateHints(){this._hintChildren;}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,a=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id);}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,r;if(t){let o=this._describedByIds||e;r=e.concat(t.filter(a=>a&&!o.includes(a)));}else r=e;this._control.setDescribedByIds(r),this._describedByIds=e;}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,r=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,l=t?.getBoundingClientRect().width??0,c=r?.getBoundingClientRect().width??0,d=o?.getBoundingClientRect().width??0,m=this._currentDirection==="rtl"?"-1":"1",_=`${a+l}px`,G=`calc(${m} * (${_} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,X=`var(--mat-mdc-form-field-label-transform, ${mc} translateX(${G}))`,$=a+l+c+d;return[X,$];}_writeOutlinedLabelStyles(e){if(e!==null){let[t,r]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),r!==null&&this._notchedOutline?._setMaxWidth(r);}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e;}return document.documentElement.contains(e);}static ɵfac=function(t){return new(t||i)();};static ɵcmp=y({type:i,selectors:[["mat-form-field"]],contentQueries:function(t,r,o){if(t&1&&(zr(o,r._labelChild,un,5),He(o,mr,5)(o,ac,5)(o,sc,5)(o,oc,5)(o,dr,5)),t&2){Si();let a;A(a=D())&&(r._formFieldControl=a.first),A(a=D())&&(r._prefixChildren=a),A(a=D())&&(r._suffixChildren=a),A(a=D())&&(r._errorChildren=a),A(a=D())&&(r._hintChildren=a);}},viewQuery:function(t,r){if(t&1&&(jr(r._iconPrefixContainerSignal,Na,5)(r._textPrefixContainerSignal,La,5)(r._iconSuffixContainerSignal,Va,5)(r._textSuffixContainerSignal,Ba,5),he(Bl,5)(Na,5)(La,5)(Va,5)(Ba,5)(za,5)(Wa,5)(Ga,5)),t&2){Si(4);let o;A(o=D())&&(r._textField=o.first),A(o=D())&&(r._iconPrefixContainer=o.first),A(o=D())&&(r._textPrefixContainer=o.first),A(o=D())&&(r._iconSuffixContainer=o.first),A(o=D())&&(r._textSuffixContainer=o.first),A(o=D())&&(r._floatingLabel=o.first),A(o=D())&&(r._notchedOutline=o.first),A(o=D())&&(r._lineRipple=o.first);}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,r){t&2&&S("mat-mdc-form-field-label-always-float",r._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",r._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",r._hasIconSuffix)("mat-form-field-invalid",r._control.errorState)("mat-form-field-disabled",r._control.disabled)("mat-form-field-autofilled",r._control.autofilled)("mat-form-field-appearance-fill",r.appearance=="fill")("mat-form-field-appearance-outline",r.appearance=="outline")("mat-form-field-hide-placeholder",r._hasFloatingLabel()&&!r._shouldLabelFloat())("mat-primary",r.color!=="accent"&&r.color!=="warn")("mat-accent",r.color==="accent")("mat-warn",r.color==="warn")("ng-untouched",r._shouldForward("untouched"))("ng-touched",r._shouldForward("touched"))("ng-pristine",r._shouldForward("pristine"))("ng-dirty",r._shouldForward("dirty"))("ng-valid",r._shouldForward("valid"))("ng-invalid",r._shouldForward("invalid"))("ng-pending",r._shouldForward("pending"));},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[pe([{provide:ur,useExisting:i},{provide:$a,useExisting:i}])],ngContentSelectors:jl,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,r){if(t&1&&(te(zl),We(0,Ul,1,1,"ng-template",null,0,Mn),u(2,"div",6,1),H("click",function(a){return r._control.onContainerClick(a);}),P(4,Hl,1,0,"div",7),u(5,"div",8),P(6,Xl,2,2,"div",9),P(7,ql,3,0,"div",10),P(8,Kl,3,0,"div",11),u(9,"div",12),P(10,Ql,1,1,null,13),I(11),h(),P(12,Jl,3,0,"div",14),P(13,ec,3,0,"div",15),h(),P(14,tc,1,0,"div",16),h(),u(15,"div",17),P(16,nc,2,0,"div",18)(17,rc,5,1,"div",19),h()),t&2){let o;p(2),S("mdc-text-field--filled",!r._hasOutline())("mdc-text-field--outlined",r._hasOutline())("mdc-text-field--no-label",!r._hasFloatingLabel())("mdc-text-field--disabled",r._control.disabled)("mdc-text-field--invalid",r._control.errorState),p(2),k(!r._hasOutline()&&!r._control.disabled?4:-1),p(2),k(r._hasOutline()?6:-1),p(),k(r._hasIconPrefix?7:-1),p(),k(r._hasTextPrefix?8:-1),p(2),k(!r._hasOutline()||r._forceDisplayInfixLabel()?10:-1),p(2),k(r._hasTextSuffix?12:-1),p(),k(r._hasIconSuffix?13:-1),p(),k(r._hasOutline()?-1:14),p(),S("mat-mdc-form-field-subscript-dynamic-size",r.subscriptSizing==="dynamic");let a=r._getSubscriptMessageType();p(),k((o=a)==="error"?16:o==="hint"?17:-1);}},dependencies:[za,Wa,An,Ga,dr],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0});}return i;})();var pi=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=M({type:i});static ɵinj=w({imports:[Po,hi,V]});}return i;})();var hn=class{_multiple;_emitChanges;compareWith;_selection=new Set();_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected;}changed=new C();constructor(n=!1,e,t=!0,r){this._multiple=n,this._emitChanges=t,this.compareWith=r,e&&e.length&&(n?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0);}select(...n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e;}deselect(...n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e;}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(o=>this._getConcreteValue(o)));n.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let r=this._hasQueuedChanges();return this._emitChangeEvent(),r;}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n);}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e;}isSelected(n){return this._selection.has(this._getConcreteValue(n));}isEmpty(){return this._selection.size===0;}hasValue(){return!this.isEmpty();}sort(n){this._multiple&&this.selected&&this._selected.sort(n);}isMultipleSelection(){return this._multiple;}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[]);}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n));}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n));}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n));}_verifyValueAssignment(n){n.length>1&&this._multiple;}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length);}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n;}else return n;}};var Ya=(()=>{class i{_animationsDisabled=de();state="unchecked";disabled=!1;appearance="full";constructor(){}static ɵfac=function(t){return new(t||i)();};static ɵcmp=y({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,r){t&2&&S("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled);},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0});}return i;})();var hc=["text"],pc=[[["mat-icon"]],"*"],fc=["mat-icon","*"];function gc(i,n){if(i&1&&W(0,"mat-pseudo-checkbox",1),i&2){let e=g();j("disabled",e.disabled)("state",e.selected?"checked":"unchecked");}}function _c(i,n){if(i&1&&W(0,"mat-pseudo-checkbox",3),i&2){let e=g();j("disabled",e.disabled);}}function bc(i,n){if(i&1&&(u(0,"span",4),B(1),h()),i&2){let e=g();p(),Ze("(",e.group.label,")");}}var pr=new f("MAT_OPTION_PARENT_COMPONENT"),fr=new f("MatOptgroup");var hr=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e;}},Pt=(()=>{class i{_element=s(E);_changeDetectorRef=s(be);_parent=s(pr,{optional:!0});group=s(fr,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple;}get selected(){return this._selected;}value;id=s(fe).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled();}set disabled(e){this._disabled.set(e);}_disabled=K(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple;}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator);}onSelectionChange=new F();_text;_stateChanges=new C();constructor(){let e=s(ve);e.load(wt),e.load(ji),this._signalDisableRipple=!!this._parent&&Vt(this._parent.disableRipple);}get active(){return this._active;}get viewValue(){return(this._text?.nativeElement.textContent||"").trim();}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent());}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent());}focus(e,t){let r=this._getHostElement();typeof r.focus=="function"&&r.focus(t);}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck());}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck());}getLabel(){return this.viewValue;}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!ye(e)&&(this._selectViaInteraction(),e.preventDefault());}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0));}_getTabIndex(){return this.disabled?"-1":"0";}_getHostElement(){return this._element.nativeElement;}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e);}}ngOnDestroy(){this._stateChanges.complete();}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new hr(this,e));}static ɵfac=function(t){return new(t||i)();};static ɵcmp=y({type:i,selectors:[["mat-option"]],viewQuery:function(t,r){if(t&1&&he(hc,7),t&2){let o;A(o=D())&&(r._text=o.first);}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,r){t&1&&H("click",function(){return r._selectViaInteraction();})("keydown",function(a){return r._handleKeydown(a);}),t&2&&(gt("id",r.id),L("aria-selected",r.selected)("aria-disabled",r.disabled.toString()),S("mdc-list-item--selected",r.selected)("mat-mdc-option-multiple",r.multiple)("mat-mdc-option-active",r.active)("mdc-list-item--disabled",r.disabled));},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",O]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:fc,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,r){t&1&&(te(pc),P(0,gc,1,2,"mat-pseudo-checkbox",1),I(1),u(2,"span",2,0),I(4,1),h(),P(5,_c,1,1,"mat-pseudo-checkbox",3),P(6,bc,2,1,"span",4),W(7,"div",5)),t&2&&(k(r.multiple?0:-1),p(5),k(!r.multiple&&r.selected&&!r.hideSingleSelectionIndicator?5:-1),p(),k(r.group&&r.group._inert?6:-1),p(),j("matRippleTrigger",r._getHostElement())("matRippleDisabled",r.disabled||r.disableRipple));},dependencies:[Ya,Xn],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0});}return i;})();function Xa(i,n,e){if(e.length){let t=n.toArray(),r=e.toArray(),o=0;for(let a=0;a<i+1;a++)t[a].group&&t[a].group===r[o]&&o++;return o;}return 0;}function qa(i,n,e,t){return i<e?i:i+n>e+t?Math.max(0,i-t+n):e;}var Ka=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted));}static ɵfac=function(t){return new(t||i)();};static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var fi=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,t,r,o){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=t,this._parentForm=r,this._stateChanges=o;}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,r=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(r,e)??!1;o!==n&&(this.errorState=o,this._stateChanges.next());}};var Za=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=M({type:i});static ɵinj=w({imports:[V]});}return i;})();var gr=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=M({type:i});static ɵinj=w({imports:[Mt,Za,Pt,V]});}return i;})();var vc=["trigger"],yc=["panel"],xc=[[["mat-select-trigger"]],"*"],Cc=["mat-select-trigger","*"];function wc(i,n){if(i&1&&(u(0,"span",4),B(1),h()),i&2){let e=g();p(),se(e.placeholder);}}function Mc(i,n){i&1&&I(0);}function Sc(i,n){if(i&1&&(u(0,"span",11),B(1),h()),i&2){let e=g(2);p(),se(e.triggerValue);}}function Ec(i,n){if(i&1&&(u(0,"span",5),P(1,Mc,1,0)(2,Sc,2,1,"span",11),h()),i&2){let e=g();p(),k(e.customTrigger?1:2);}}function Ac(i,n){if(i&1){let e=Ie();u(0,"div",12,1),H("keydown",function(r){me(e);let o=g();return ue(o._handleKeydown(r));}),I(2,1),h();}if(i&2){let e=g();_e(e.panelClass),S("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),L("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby());}}var Dc=new f("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(U);return()=>at(i);}}),Ic=new f("MAT_SELECT_CONFIG"),Oc=new f("MatSelectTrigger"),_r=class{source;value;constructor(n,e){this.source=n,this.value=e;}},Qa=(()=>{class i{_viewportRuler=s(Ye);_changeDetectorRef=s(be);_elementRef=s(E);_dir=s(Re,{optional:!0});_idGenerator=s(fe);_renderer=s(ge);_parentFormField=s(ur,{optional:!0});ngControl=s(Tn,{self:!0,optional:!0});_liveAnnouncer=s(Ui);_defaultOptions=s(Ic,{optional:!0});_animationsDisabled=de();_popoverLocation;_initialized=new C();_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let r=this.panel.nativeElement,o=Xa(e,this.options,this.optionGroups),a=t._getHostElement();e===0&&o===1?r.scrollTop=0:r.scrollTop=qa(a.offsetTop,a.offsetHeight,r.scrollTop,r.offsetHeight);}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0);}_getChangeEvent(e){return new _r(this,e);}_scrollStrategyFactory=s(Dc);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new C();_errorStateTracker;stateChanges=new C();disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen;}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple();}set disableRipple(e){this._disableRipple.set(e);}_disableRipple=K(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator;}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties();}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder;}set placeholder(e){this._placeholder=e,this.stateChanges.next();}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(Pn.required)??!1;}set required(e){this._required=e,this.stateChanges.next();}_required;get multiple(){return this._multiple;}set multiple(e){this._selectionModel,this._multiple=e;}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith;}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection();}get value(){return this._value;}set value(e){this._assignValue(e)&&this._onChange(e);}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher;}set errorStateMatcher(e){this._errorStateTracker.matcher=e;}typeaheadDebounceInterval;sortComparator;get id(){return this._id;}set id(e){this._id=e||this._uid,this.stateChanges.next();}_id;get errorState(){return this._errorStateTracker.errorState;}set errorState(e){this._errorStateTracker.errorState=e;}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Mr(()=>{let e=this.options;return e?e.changes.pipe(oe(e),Ce(()=>Se(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Ce(()=>this.optionSelectionChanges));});openedChange=new F();_openedStream=this.openedChange.pipe(re(e=>e),Y(()=>{}));_closedStream=this.openedChange.pipe(re(e=>!e),Y(()=>{}));selectionChange=new F();valueChange=new F();constructor(){let e=s(Ka),t=s(Fi,{optional:!0}),r=s(Ni,{optional:!0}),o=s(new Sn("tabindex"),{optional:!0}),a=s(ln,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new fi(e,this.ngControl,r,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id;}ngOnInit(){this._selectionModel=new hn(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ae(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges());});}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ae(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect());}),this.options.changes.pipe(oe(null),ae(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection();});}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let r=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?r.setAttribute("aria-labelledby",e):r.removeAttribute("aria-labelledby");}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState());}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass));}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal();}toggle(){this.panelOpen?this.close():this.open();}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(ct(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled();}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)));}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&$i(this._trackedModal,"aria-owns",t),No(e,"aria-owns",t),this._trackedModal=e;}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;$i(this._trackedModal,"aria-owns",e),this._trackedModal=null;}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)));}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return;}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(r),this._cleanupDetach=void 0;};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay());}),r=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay();},200);e.classList.add("mat-select-panel-exit");}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck();}writeValue(e){this._assignValue(e);}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next();}get panelOpen(){return this._panelOpen;}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0];}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ");}return this._selectionModel.selected[0].viewValue;}updateErrorState(){this._errorStateTracker.updateErrorState();}_isRtl(){return this._dir?this._dir.value==="rtl":!1;}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e));}_handleClosedKeydown(e){let t=e.keyCode,r=t===40||t===38||t===37||t===39,o=t===13||t===32,a=this._keyManager;if(!a.isTyping()&&o&&!ye(e)||(this.multiple||e.altKey)&&r)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;a.onKeydown(e);let c=this.selected;c&&l!==c&&this._liveAnnouncer.announce(c.viewValue,1e4);}}_handleOpenKeydown(e){let t=this._keyManager,r=e.keyCode,o=r===40||r===38,a=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!a&&(r===13||r===32)&&t.activeItem&&!ye(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!a&&this._multiple&&r===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(l?c.select():c.deselect());});}else{let l=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==l&&t.activeItem._selectViaInteraction();}}_handleOverlayKeydown(e){e.keyCode===27&&!ye(e)&&(e.preventDefault(),this.close());}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next());}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next());}get empty(){return!this._selectionModel||this._selectionModel.isEmpty();}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next();});}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1);}this._changeDetectorRef.markForCheck();}_selectOptionByValue(e){let t=this.options.find(r=>{if(this._selectionModel.isSelected(r))return!1;try{return(r.value!=null||this.canSelectNullableOptions)&&this._compareWith(r.value,e);}catch{return!1;}});return t&&this._selectionModel.select(t),t;}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1;}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Et?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth;}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck();}_initKeyManager(){this._keyManager=new Qt(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close());}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction();});}_resetOptions(){let e=Se(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ae(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus());}),Se(...this.options.map(t=>t._stateChanges)).pipe(ae(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next();});}_onSelect(e,t){let r=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(r!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),r!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next();}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,r)=>this.sortComparator?this.sortComparator(t,r,e):e.indexOf(t)-e.indexOf(r)),this.stateChanges.next();}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(r=>r.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck();}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break;}this._keyManager.setActiveItem(e);}else this._keyManager.setActiveItem(this._selectionModel.selected[0]);}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir;}focus(e){this._elementRef.nativeElement.focus(e);}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e;}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null;}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e;}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[];}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby");}onContainerClick(e){let t=le(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open());}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder;}static ɵfac=function(t){return new(t||i)();};static ɵcmp=y({type:i,selectors:[["mat-select"]],contentQueries:function(t,r,o){if(t&1&&He(o,Oc,5)(o,Pt,5)(o,fr,5),t&2){let a;A(a=D())&&(r.customTrigger=a.first),A(a=D())&&(r.options=a),A(a=D())&&(r.optionGroups=a);}},viewQuery:function(t,r){if(t&1&&he(vc,5)(yc,5)(li,5),t&2){let o;A(o=D())&&(r.trigger=o.first),A(o=D())&&(r.panel=o.first),A(o=D())&&(r._overlayDir=o.first);}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,r){t&1&&H("keydown",function(a){return r._handleKeydown(a);})("focus",function(){return r._onFocus();})("blur",function(){return r._onBlur();}),t&2&&(L("id",r.id)("tabindex",r.disabled?-1:r.tabIndex)("aria-controls",r.panelOpen?r.id+"-panel":null)("aria-expanded",r.panelOpen)("aria-label",r.ariaLabel||null)("aria-required",r.required.toString())("aria-disabled",r.disabled.toString())("aria-invalid",r.errorState)("aria-activedescendant",r._getAriaActiveDescendant()),S("mat-mdc-select-disabled",r.disabled)("mat-mdc-select-invalid",r.errorState)("mat-mdc-select-required",r.required)("mat-mdc-select-empty",r.empty)("mat-mdc-select-multiple",r.multiple)("mat-select-open",r.panelOpen));},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",O],disableRipple:[2,"disableRipple","disableRipple",O],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ve(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",O],placeholder:"placeholder",required:[2,"required","required",O],multiple:[2,"multiple","multiple",O],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",O],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Ve],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",O]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[pe([{provide:mr,useExisting:i},{provide:pr,useExisting:i}]),Ae],ngContentSelectors:Cc,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,r){if(t&1&&(te(xc),u(0,"div",2,0),H("click",function(){return r.open();}),u(3,"div",3),P(4,wc,2,1,"span",4)(5,Ec,3,1,"span",5),h(),u(6,"div",6)(7,"div",7),Xe(),u(8,"svg",8),W(9,"path",9),h()()()(),We(10,Ac,3,16,"ng-template",10),H("detach",function(){return r.close();})("backdropClick",function(){return r.close();})("overlayKeydown",function(a){return r._handleOverlayKeydown(a);})),t&2){let o=Le(1);p(3),L("id",r._valueId),p(),k(r.empty?4:5),p(6),j("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",r._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",r._scrollStrategy)("cdkConnectedOverlayOrigin",r._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",r._positions)("cdkConnectedOverlayWidth",r._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",r._popoverLocation);}},dependencies:[Et,li],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  border-radius: 4px;
  box-sizing: border-box;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}
.cdk-overlay-pane:not(.mat-mdc-select-panel-above) div.mat-mdc-select-panel {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  transform-origin: top center;
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: bottom center;
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0});}return i;})();var Ja=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=M({type:i});static ɵinj=w({imports:[dn,gr,V,St,pi,gr]});}return i;})();function kc(i,n){if(i&1&&(u(0,"mat-option",3),B(1),h()),i&2){let e=n.$implicit;j("value",e),p(),se(e);}}var gi=class i{days=[];value=null;valueChange=new F();static ɵfac=function(e){return new(e||i)();};static ɵcmp=y({type:i,selectors:[["app-day-filter"]],inputs:{days:"days",value:"value"},outputs:{valueChange:"valueChange"},decls:6,vars:1,consts:()=>{let n;n="Selecione o dia para exibir no mapa";let e;return e="Dia",[e,["appearance","outline",1,"day-filter-field"],["aria-label",n,3,"valueChange","value"],[3,"value"]];},template:function(e,t){e&1&&(u(0,"mat-form-field",1)(1,"mat-label"),Z(2,0),h(),u(3,"mat-select",2),H("valueChange",function(o){return t.valueChange.emit(o);}),xn(4,kc,2,2,"mat-option",3,Vr),h()()),e&2&&(p(3),j("value",t.value),p(),Cn(t.days));},dependencies:[pi,hi,un,Ja,Qa,Pt],styles:[".day-filter-field[_ngcontent-%COMP%]{width:min(100%,220px)}"],changeDetection:0});};var es={arcgisOAuth:{clientId:"IfpwEhcZQ8jITlsx",portalUrl:"https://portalgeo.eletrobras.com/portal",redirectUri:"https://iraolalabs.github.io/axia-poc/pt/",defaultBasemap:"dark-gray-vector",autoSaveWebMap:!1,newWebMapTitle:"New WebMap"}};var ne=v({},es.arcgisOAuth);var _i={time:"Hor\xE1rio",windSpeed:"Velocidade do vento",windDirection:"Dire\xE7\xE3o do vento",source:"Origem"},pn={lineName:"Nome da linha",installationCode:"C\xF3digo de instala\xE7\xE3o",nominalVoltage:"Tens\xE3o nominal",length:"Extens\xE3o",company:"Empresa"},ts={u10:"Componente U10",v10:"Componente V10",srid:"Refer\xEAncia espacial"},st={thresholdMs:"Limiar",thresholdKmh:"Limiar",windSpeedMax:"Velocidade m\xE1xima do vento",windSpeedMeanExceed:"Velocidade m\xE9dia excedida do vento",minimumArea:"\xC1rea m\xEDnima",smoothingBuffer:"Buffer de suaviza\xE7\xE3o",simplifyTolerance:"Toler\xE2ncia de simplifica\xE7\xE3o",srid:"Refer\xEAncia espacial"},kt=class i{modulesPromise=null;mapView=null;webMap=null;windLayer=null;powerlineLayer=null;endpointLayer=null;spikeLayer=null;hasAppliedInitialExtent=!1;hasRenderedPowerlines=!1;hasAttemptedInitialSave=!1;async initialize(n,e){if(this.mapView)return;let t=await this.loadModules();this.webMap=new t.WebMap({basemap:ne.defaultBasemap}),this.powerlineLayer=new t.GraphicsLayer({title:"Linhas de transmiss\xE3o"}),this.windLayer=new t.GraphicsLayer({title:"Vetores de vento"}),this.endpointLayer=new t.GraphicsLayer({title:"Extremidades da dire\xE7\xE3o do vento"}),this.spikeLayer=new t.GraphicsLayer({title:"Picos de vento"}),this.webMap.addMany([this.powerlineLayer,this.spikeLayer,this.windLayer,this.endpointLayer]),this.mapView=new t.MapView({container:n,map:this.webMap,center:[-55.29,-26.92],zoom:7,constraints:{snapToZoom:!1},popup:{dockEnabled:!0}}),ne.autoSaveWebMap&&!this.hasAttemptedInitialSave&&(this.hasAttemptedInitialSave=!0,await this.saveNewWebMap(t,e));}async render(n){if(!this.mapView||!this.powerlineLayer||!this.windLayer||!this.endpointLayer||!this.spikeLayer)return;let e=await this.loadModules(),t=n.powerlineFeatures.map(l=>new e.Graphic({geometry:{type:"polyline",paths:[l.coordinates],spatialReference:{wkid:4326}},symbol:{type:"simple-line",color:[37,99,235,.9],width:2,style:"solid"},attributes:ee(v({},l.properties),{featureId:l.id}),popupTemplate:{title:"Linha de transmiss\xE3o",content:Nc()}})),r=n.lineFeatures.map(l=>new e.Graphic({geometry:{type:"polyline",paths:[l.coordinates],spatialReference:{wkid:4326}},symbol:{type:"simple-line",color:ns(l.properties.ws10,n.windSpeedRange.min,n.windSpeedRange.max),width:.9,style:"solid"},attributes:ee(v({},l.properties),{featureId:l.id}),popupTemplate:{title:"Vetor de vento",content:rs()}})),o=n.lineFeatures.map(l=>{let c=ns(l.properties.ws10,n.windSpeedRange.min,n.windSpeedRange.max);return new e.Graphic({geometry:{type:"point",longitude:l.endpoint[0],latitude:l.endpoint[1],spatialReference:{wkid:4326}},symbol:{type:"simple-marker",style:"triangle",color:c,size:4,angle:Tc(l.coordinates,l.properties.wd10),outline:{color:c,width:.35}},attributes:ee(v({},l.properties),{featureId:`${l.id}-endpoint`}),popupTemplate:{title:"Vetor de vento",content:rs()}});}),a=n.polygonFeatures.map(l=>new e.Graphic({geometry:{type:"polygon",rings:l.rings,spatialReference:{wkid:4326}},symbol:{type:"simple-fill",color:[220,38,38,.28],outline:{color:[153,27,27,.7],width:1}},attributes:ee(v({},l.properties),{featureId:l.id}),popupTemplate:{title:"Pol\xEDgono de pico de vento",content:Fc()}}));if(this.windLayer.removeAll(),this.endpointLayer.removeAll(),this.spikeLayer.removeAll(),!this.hasRenderedPowerlines&&t.length>0&&(this.powerlineLayer.removeAll(),this.powerlineLayer.addMany(t),this.hasRenderedPowerlines=!0),a.length>0&&this.spikeLayer.addMany(a),r.length>0&&(this.windLayer.addMany(r),this.endpointLayer.addMany(o)),!this.hasAppliedInitialExtent&&n.lineFeatures.length>0){this.hasAppliedInitialExtent=!0;let l=Rc(n,e.Extent);l&&(this.mapView.extent=l);}}destroy(){this.mapView?.destroy(),this.mapView=null,this.webMap=null,this.powerlineLayer=null,this.windLayer=null,this.endpointLayer=null,this.spikeLayer=null,this.hasAppliedInitialExtent=!1,this.hasRenderedPowerlines=!1,this.hasAttemptedInitialSave=!1;}async saveNewWebMap(n,e){!this.webMap||e.status!=="authenticated"||(await this.webMap.saveAs(new n.PortalItem({title:ne.newWebMapTitle}),{ignoreUnsupported:!0}));}loadModules(){return this.modulesPromise||(this.modulesPromise=(async()=>{let n=window.$arcgis;if(!n)throw new Error("O carregador CDN do ArcGIS n\xE3o est\xE1 dispon\xEDvel. Confirme que https://js.arcgis.com/5.0/ foi carregado em index.html.");let[e,t,r,o,a,l]=await Promise.all([n.import("@arcgis/core/WebMap.js"),n.import("@arcgis/core/views/MapView.js"),n.import("@arcgis/core/layers/GraphicsLayer.js"),n.import("@arcgis/core/Graphic.js"),n.import("@arcgis/core/geometry/Extent.js"),n.import("@arcgis/core/portal/PortalItem.js")]);return{WebMap:e,MapView:t,GraphicsLayer:r,Graphic:o,Extent:a,PortalItem:l};})()),this.modulesPromise;}static ɵfac=function(e){return new(e||i)();};static ɵprov=b({token:i,factory:i.ɵfac});};function Rc(i,n){let e=[...i.lineFeatures.flatMap(a=>a.coordinates),...i.polygonFeatures.flatMap(a=>a.rings.flat())];if(e.length===0)return null;let t=e.map(([a])=>a),r=e.map(([,a])=>a),o=.18;return new n({xmin:Math.min(...t)-o,ymin:Math.min(...r)-o,xmax:Math.max(...t)+o,ymax:Math.max(...r)+o,spatialReference:{wkid:4326}});}function ns(i,n,e){let t=e-n,r=t===0?.5:(i-n)/t,o=Math.max(0,Math.min(1,r)),a=[[14,165,233],[34,197,94],[250,204,21],[249,115,22],[220,38,38]],l=o*(a.length-1),c=Math.floor(l),d=Math.min(a.length-1,Math.ceil(l)),m=l-c;return[...a[c].map((R,G)=>Math.round(R+(a[d][G]-R)*m)),.15];}function Tc(i,n){let e=i[i.length-1];for(let t=i.length-2;t>=0;t-=1){let r=i[t],o=e[0]-r[0],a=e[1]-r[1];if(o!==0||a!==0)return is(Math.atan2(o,a)*180/Math.PI);}return is(n??0);}function is(i){return(i%360+360)%360;}function rs(){return[`${_i.time}: {time}`,`${_i.windSpeed}: {ws10} m/s`,`${ts.u10}: {u10}`,`${ts.v10}: {v10}`,`${_i.windDirection}: {wd10}\xB0`].join("<br/>");}function Fc(){return[`${_i.time}: {time}`,`${st.thresholdMs}: {threshold_ms} m/s`,`${st.thresholdKmh}: {threshold_kmh} km/h`,`${st.windSpeedMax}: {ws10_max} m/s`,`${st.windSpeedMeanExceed}: {ws10_mean_exceed} m/s`,`${st.minimumArea}: {min_area_m2} m\xB2`,`${st.smoothingBuffer}: {smooth_buffer_m} m`,`${st.simplifyTolerance}: {simplify_tol_m} m`].join("<br/>");}function Nc(){return[`${pn.lineName}: {NOM_LT_SAP}`,`${pn.installationCode}: {LOC_Instal}`,`${pn.nominalVoltage}: {Tensao_Nom} kV`,`${pn.length}: {Extenso_Km} km`,`${pn.company}: {Empresa}`].join("<br/>");}var Vc=["mapHost"];function Bc(i,n){if(i&1&&(u(0,"div",5)(1,"div",8)(2,"span",9),Z(3,1),h(),u(4,"span",10),Z(5,2),h()(),W(6,"div",11),u(7,"div",12)(8,"span"),B(9),Bt(10,"number"),h(),u(11,"span"),B(12),Bt(13,"number"),h()()()),i&2){let e=g();p(6),Ke("background",e.windSpeedLegendGradient),p(3),se(Ei(10,4,e.windSpeedRange.min,"1.0-1")),p(3),se(Ei(13,7,e.windSpeedRange.max,"1.0-1"));}}function zc(i,n){i&1&&(u(0,"div",6),W(1,"mat-progress-spinner",13),h());}function jc(i,n){if(i&1&&(u(0,"div",7)(1,"p"),B(2),h()()),i&2){let e=g();p(2),se(e.errorMessage);}}var bi=class i{constructor(n){this.arcgisMapService=n;}windSpeedLegendGradient=null;windSpeedRange=null;authState=null;renderState=null;loading=!1;mapHost;errorMessage=null;isInitialized=!1;async ngAfterViewInit(){await this.synchronizeMap();}async ngOnChanges(n){(n.authState||n.renderState)&&(await this.synchronizeMap());}ngOnDestroy(){this.arcgisMapService.destroy();}async synchronizeMap(){if(!(!this.mapHost?.nativeElement||!this.authState||this.authState.status!=="authenticated"))try{this.errorMessage=null,this.isInitialized||(await this.arcgisMapService.initialize(this.mapHost.nativeElement,this.authState),this.isInitialized=!0),this.renderState&&(await this.arcgisMapService.render(this.renderState));}catch(n){console.log("Map initialization/rendering error:",n),this.errorMessage=n instanceof Error?n.message:"N\xE3o foi poss\xEDvel inicializar o mapa. Revise as configura\xE7\xF5es de integra\xE7\xE3o do ArcGIS.";}}static ɵfac=function(e){return new(e||i)(Fe(kt));};static ɵcmp=y({type:i,selectors:[["app-map-container"]],viewQuery:function(e,t){if(e&1&&he(Vc,7),e&2){let r;A(r=D())&&(t.mapHost=r.first);}},inputs:{windSpeedLegendGradient:"windSpeedLegendGradient",windSpeedRange:"windSpeedRange",authState:"authState",renderState:"renderState",loading:"loading"},features:[pe([kt]),Ae],decls:6,vars:3,consts:()=>{let n;n="Mapa interativo de vento";let e;e="Escala de velocidade do vento";let t;return t="m/s",[["mapHost",""],e,t,[1,"map-frame"],["aria-label",n,1,"map-host"],[1,"wind-speed-legend"],[1,"map-overlay"],[1,"map-error"],[1,"legend-copy"],[1,"legend-title"],[1,"legend-unit"],["aria-hidden","true",1,"legend-gradient"],[1,"legend-values"],["diameter","48","mode","indeterminate"]];},template:function(e,t){e&1&&(u(0,"div",3),W(1,"div",4,0),P(3,Bc,14,10,"div",5),P(4,zc,2,0,"div",6),P(5,jc,3,1,"div",7),h()),e&2&&(p(3),k(t.windSpeedRange&&t.windSpeedLegendGradient?3:-1),p(),k(t.loading?4:-1),p(),k(t.errorMessage?5:-1));},dependencies:[mi,di,Xr],styles:[".map-frame[_ngcontent-%COMP%]{position:relative;min-height:420px;height:calc(100vh - 235px);border-radius:24px;overflow:hidden;background:radial-gradient(circle at top left,rgba(14,165,233,.18),transparent 42%),linear-gradient(160deg,#eff6ff,#dbeafe 45%,#e2e8f0)}.map-host[_ngcontent-%COMP%]{width:100%;height:100%;min-height:420px}.wind-speed-legend[_ngcontent-%COMP%]{position:absolute;top:.75rem;right:.75rem;z-index:2;width:min(240px,calc(100% - 1.5rem));padding:.45rem .55rem;border-radius:12px;background:#0f172ad1;color:#e2e8f0;box-shadow:0 10px 24px #0f172a3d,inset 0 0 0 1px #94a3b82e;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.legend-copy[_ngcontent-%COMP%], .legend-values[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:.5rem;align-items:center}.legend-title[_ngcontent-%COMP%], .legend-unit[_ngcontent-%COMP%], .legend-values[_ngcontent-%COMP%]{font-size:.68rem}.legend-title[_ngcontent-%COMP%]{font-weight:700;letter-spacing:.04em;text-transform:uppercase}.legend-unit[_ngcontent-%COMP%]{color:#93c5fd}.legend-gradient[_ngcontent-%COMP%]{height:.45rem;margin:.3rem 0 .2rem;border-radius:999px}.legend-values[_ngcontent-%COMP%]{color:#cbd5e1}.map-overlay[_ngcontent-%COMP%], .map-error[_ngcontent-%COMP%]{position:absolute;inset:0;display:grid;place-items:center;background:#f8fafcb8;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.map-error[_ngcontent-%COMP%]{padding:1.5rem;text-align:center;color:#991b1b}@media(max-width:640px){.wind-speed-legend[_ngcontent-%COMP%]{width:min(210px,calc(100% - 1.5rem))}}"],changeDetection:0});};var Gc=(i,n)=>n.value;function Wc(i,n){if(i&1){let e=Ie();u(0,"button",2),H("click",function(){let r=me(e).$implicit,o=g();return ue(o.valueChange.emit(r.value));}),u(1,"span",3),B(2),h(),u(3,"span",4),B(4),h()();}if(i&2){let e=n.$implicit,t=g();S("timeline-card-selected",e.value===t.value),L("aria-pressed",e.value===t.value),p(2),se(e.label),p(2),se(e.value);}}var vi=class i{hours=[];value=null;valueChange=new F();static ɵfac=function(e){return new(e||i)();};static ɵcmp=y({type:i,selectors:[["app-time-slider"]],inputs:{hours:"hours",value:"value"},outputs:{valueChange:"valueChange"},decls:3,vars:0,consts:()=>{let n;return n="Linha do tempo dos hor\xE1rios dispon\xEDveis",[["aria-label",n,1,"timeline-shell"],["mat-button","","type","button",1,"timeline-card",3,"timeline-card-selected"],["mat-button","","type","button",1,"timeline-card",3,"click"],[1,"timeline-card-label"],[1,"timeline-card-value"]];},template:function(e,t){e&1&&(u(0,"div",0),xn(1,Wc,5,5,"button",1,Gc),h()),e&2&&(p(),Cn(t.hours));},dependencies:[Zn,Kn],styles:[".timeline-shell[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem;height:calc(100vh - 420px);overflow:auto}.timeline-card[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:1rem;width:100%;min-height:72px;padding:.9rem 1rem;border:1px solid rgba(148,163,184,.4);border-radius:18px;background:linear-gradient(135deg,#eff6ffe6,#fffffffa);text-align:left;transition:border-color .16s ease,background .16s ease,box-shadow .16s ease,transform .16s ease}.timeline-card[_ngcontent-%COMP%]:hover{border-color:#3b82f680;box-shadow:0 10px 24px #2563eb1f;transform:translateY(-1px)}.timeline-card-selected[_ngcontent-%COMP%]{border-color:#2563eb;background:linear-gradient(135deg,#dbeafef2,#eff6ff);box-shadow:0 14px 28px #2563eb29}.timeline-card-label[_ngcontent-%COMP%], .timeline-card-value[_ngcontent-%COMP%]{display:block}.timeline-card-label[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;color:#0f172a}.timeline-card-value[_ngcontent-%COMP%]{font-size:.82rem;letter-spacing:.08em;text-transform:uppercase;color:#475569}"],changeDetection:0});};var Rt=class i{stateSubject=new fn(this.createLoadingState());modulesPromise=null;state$=this.stateSubject.asObservable();constructor(){this.restoreSession();}async signIn(){try{this.stateSubject.next(this.createLoadingState());let n=await this.loadModules(),e=this.getSharingUrl();await this.registerOAuth(n),await n.IdentityManager.getCredential(e,{oAuthPopupConfirmation:!1}),await this.restoreSession();}catch(n){this.stateSubject.next(this.createErrorState(n));}}async signOut(){(await this.loadModules()).IdentityManager.destroyCredentials(),this.stateSubject.next(this.createRequiredState());}async getAccessToken(){let n=await this.loadModules(),e=this.getSharingUrl();return await this.registerOAuth(n),(await n.IdentityManager.checkSignInStatus(e).catch(()=>null))?.token??null;}async restoreSession(){try{let n=await this.loadModules(),e=this.getSharingUrl();await this.registerOAuth(n);let t=await n.IdentityManager.checkSignInStatus(e).catch(()=>null);if(!t){this.stateSubject.next(this.createRequiredState());return;}let r=new n.Portal({url:ne.portalUrl,authMode:"immediate"});await r.load();let o=r.user;if(!o){this.stateSubject.next(this.createRequiredState());return;}typeof o.load=="function"&&(await o.load()),this.stateSubject.next({status:"authenticated",provider:"arcgis-oauth",user:{username:o.username??"",email:o.email??null,fullName:o.fullName??null},portalUrl:ne.portalUrl,redirectUri:ne.redirectUri,tokenExpiresAt:t.expires??null,errorMessage:null});}catch(n){this.stateSubject.next(this.createErrorState(n));}}async registerOAuth(n){if(!ne.clientId||ne.clientId==="YOUR_ARCGIS_CLIENT_ID")throw new Error("Defina ARCGIS_OAUTH_CONFIG.clientId com um aplicativo OAuth do ArcGIS registrado antes de entrar.");let e=new n.OAuthInfo({appId:ne.clientId,portalUrl:ne.portalUrl,popup:!1,redirectUri:ne.redirectUri,flowType:"auto"});n.IdentityManager.registerOAuthInfos([e]);}getSharingUrl(){return`${ne.portalUrl}/sharing`;}createLoadingState(){return{status:"loading",provider:"arcgis-oauth",user:null,portalUrl:ne.portalUrl,redirectUri:ne.redirectUri,tokenExpiresAt:null,errorMessage:null};}createRequiredState(){return{status:"required",provider:"arcgis-oauth",user:null,portalUrl:ne.portalUrl,redirectUri:ne.redirectUri,tokenExpiresAt:null,errorMessage:null};}createErrorState(n){return{status:"error",provider:"arcgis-oauth",user:null,portalUrl:ne.portalUrl,redirectUri:ne.redirectUri,tokenExpiresAt:null,errorMessage:n instanceof Error?n.message:"N\xE3o foi poss\xEDvel concluir o fluxo de login do ArcGIS."};}loadModules(){return this.modulesPromise||(this.modulesPromise=(async()=>{let n=window.$arcgis;if(!n)throw new Error("O carregador CDN do ArcGIS n\xE3o est\xE1 dispon\xEDvel. Confirme que https://js.arcgis.com/5.0/ foi carregado em index.html.");let[e,t,r]=await Promise.all([n.import("@arcgis/core/identity/IdentityManager.js"),n.import("@arcgis/core/identity/OAuthInfo.js"),n.import("@arcgis/core/portal/Portal.js")]);return{IdentityManager:e,OAuthInfo:t,Portal:r};})()),this.modulesPromise;}static ɵfac=function(e){return new(e||i)();};static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});};var os=$localize.locale||"pt";function vr(i){return i.slice(0,10);}function yr(i){return i.slice(11,16);}function as(i,n){let e=new Date(`${i}T${n}:00`);return new Intl.DateTimeFormat(os,{dateStyle:"medium",timeStyle:"short"}).format(e);}function Uc(i){let[n,e]=i.split(":").map(r=>Number(r)),t=new Date(2e3,0,1,n,e);return new Intl.DateTimeFormat(os,{hour:"numeric",minute:"2-digit"}).format(t);}function ss(i){return[...i].sort((n,e)=>n.localeCompare(e)).map(n=>({value:n,label:Uc(n)}));}var Hc="https://portalgeo.eletrobras.com/server/rest/services/Hosted/wind10_timelapse_sirgas/FeatureServer/0",$c="https://portalgeo.eletrobras.com/server/rest/services/Hosted/wind10_polygons_sirgas/FeatureServer/0",Yc="https://portalgeo.eletrobras.com/server/rest/services/Hosted/powerlines_interesse/FeatureServer/0",yi=class i{httpClient=s(Dn);mapAuthService=s(Rt);datasetState$=this.mapAuthService.state$.pipe(Ce(n=>this.loadDatasetState(n)),Te(1));createRenderState(n,e,t){return{dayKey:e,hourKey:t,timestampLabel:as(e,t),lineFeatures:n.lineFeatures.filter(r=>r.dayKey===e&&r.hourKey===t),polygonFeatures:n.polygonFeatures.filter(r=>r.dayKey===e&&r.hourKey===t),powerlineFeatures:n.powerlineFeatures,windSpeedRange:n.windSpeedRange};}getValidDayKey(n,e){return e&&n.days.includes(e)?e:n.days[0]??null;}getValidHourKey(n,e,t){if(!e)return null;let r=n.hoursByDay[e]??[];return t&&r.some(o=>o.value===t)?t:r[0]?.value??null;}buildGeoJsonQueryUrl(n,e,t,r){let o=new URL(`${n.replace(/\/+$/,"")}/query`);return o.searchParams.set("where","1=1"),o.searchParams.set("outFields","*"),o.searchParams.set("returnGeometry","true"),o.searchParams.set("f","geojson"),o.searchParams.set("token",e),t!==void 0&&o.searchParams.set("resultOffset",String(t)),r!==void 0&&o.searchParams.set("resultRecordCount",String(r)),o.toString();}buildLayerMetadataUrl(n,e){let t=new URL(n.replace(/\/+$/,""));return t.searchParams.set("f","json"),t.searchParams.set("token",e),t.toString();}buildCountQueryUrl(n,e){let t=new URL(`${n.replace(/\/+$/,"")}/query`);return t.searchParams.set("where","1=1"),t.searchParams.set("returnCountOnly","true"),t.searchParams.set("f","json"),t.searchParams.set("token",e),t.toString();}loadLayerCollection(n,e){return ze({metadata:this.httpClient.get(this.buildLayerMetadataUrl(n,e)),countResponse:this.httpClient.get(this.buildCountQueryUrl(n,e))}).pipe(Ce(({metadata:t,countResponse:r})=>{let o=t.maxRecordCount;if(!o||r.count<=o)return this.httpClient.get(this.buildGeoJsonQueryUrl(n,e));let a=Array.from({length:Math.ceil(r.count/o)},(l,c)=>this.httpClient.get(this.buildGeoJsonQueryUrl(n,e,c*o,o)));return ze(a).pipe(Y(l=>({type:"FeatureCollection",features:l.flatMap(c=>c.features)})));}));}loadDatasetState(n){return n.status!=="authenticated"?ce({status:"loading"}):gn(this.mapAuthService.getAccessToken()).pipe(Ce(e=>{if(!e)throw new Error("A sess\xE3o ArcGIS est\xE1 autenticada, mas nenhum token de acesso est\xE1 dispon\xEDvel para os servi\xE7os de fei\xE7\xE3o protegidos.");return this.loadDataset(e);}),Y(e=>({status:"ready",dataset:e})),_n(()=>ce({status:"error",message:"N\xE3o foi poss\xEDvel carregar os arquivos GeoJSON de vento. Verifique as fontes de dados configuradas e tente novamente."})),oe({status:"loading"}));}loadDataset(n){return ze({lineCollection:this.loadLayerCollection(Hc,n),polygonCollection:this.loadLayerCollection($c,n),powerlineCollection:this.loadLayerCollection(Yc,n)}).pipe(Y(({lineCollection:e,polygonCollection:t,powerlineCollection:r})=>Xc(e,t,r)));}static ɵfac=function(e){return new(e||i)();};static ɵprov=b({token:i,factory:i.ɵfac,providedIn:"root"});};function Xc(i,n,e){let t=i.features.filter(d=>d.geometry.coordinates.length>=2).map((d,m)=>{let _=vr(d.properties.time_),R=yr(d.properties.time_);return{id:`line-${m}`,time_:d.properties.time_,dayKey:_,hourKey:R,coordinates:d.geometry.coordinates,endpoint:d.geometry.coordinates[d.geometry.coordinates.length-1],properties:d.properties};}),r=n.features.filter(d=>d.geometry.coordinates.length>0).map((d,m)=>({id:`polygon-${m}`,time_:d.properties.time_,dayKey:vr(d.properties.time_),hourKey:yr(d.properties.time_),rings:d.geometry.coordinates,properties:d.properties})),o=e.features.filter(d=>d.geometry.coordinates.length>=2).map((d,m)=>({id:`powerline-${m}`,coordinates:d.geometry.coordinates,properties:d.properties})),a=[...new Set(t.map(d=>d.dayKey))].sort((d,m)=>d.localeCompare(m)),l=Object.fromEntries(a.map(d=>[d,ss(new Set(t.filter(m=>m.dayKey===d).map(m=>m.hourKey)))])),c=t.map(d=>d.properties.ws10);return{days:a,hoursByDay:l,lineFeatures:t,polygonFeatures:r,powerlineFeatures:o,windSpeedRange:{min:Math.min(...c),max:Math.max(...c)}};}var qc=i=>({user:i});function Kc(i,n){if(i&1){let e=Ie();u(0,"button",24)(1,"span",25),B(2),h(),u(3,"mat-icon",26),B(4,"expand_more"),h()(),u(5,"mat-menu",27,0)(7,"div",28)(8,"span",29),B(9),h(),u(10,"span",30)(11,"span",31),B(12),h(),u(13,"span",32),B(14),h()()(),u(15,"button",33),H("click",function(){me(e);let r=g(2);return ue(r.signOut());}),u(16,"mat-icon"),B(17,"logout"),h(),u(18,"span"),Z(19,2),h()()();}if(i&2){let e=Le(6),t=g(),r=g();j("matMenuTriggerFor",e)("matMenuTriggerData",Gr(6,qc,t.authState.user)),p(2),Ze(" ",r.getUserInitials(t.authState.user==null?null:t.authState.user.fullName,t.authState.user==null?null:t.authState.user.username)," "),p(7),Ze(" ",r.getUserInitials(t.authState.user==null?null:t.authState.user.fullName,t.authState.user==null?null:t.authState.user.username)," "),p(3),Ze(" ",(t.authState.user==null?null:t.authState.user.fullName)||(t.authState.user==null?null:t.authState.user.username)," "),p(2),Ze(" ",(t.authState.user==null?null:t.authState.user.email)||(t.authState.user==null?null:t.authState.user.username)," ");}}function Zc(i,n){i&1&&(u(0,"mat-card",21)(1,"div",34)(2,"div")(3,"p",35),Z(4,3),h(),u(5,"h2"),Z(6,4),h()(),W(7,"mat-progress-spinner",36),h(),u(8,"p",37),Z(9,5),h()());}function Qc(i,n){if(i&1&&(u(0,"p",38),B(1),h()),i&2){let e=g(2);p(),se(e.authState.errorMessage);}}function Jc(i,n){if(i&1){let e=Ie();u(0,"mat-card",22)(1,"div",34)(2,"div")(3,"p",35),Z(4,6),h(),u(5,"h2"),Z(6,7),h()(),u(7,"mat-icon"),B(8,"vpn_key"),h()(),u(9,"p",37),Z(10,8),h(),P(11,Qc,2,1,"p",38),u(12,"div",39)(13,"button",40),H("click",function(){me(e);let r=g(2);return ue(r.signIn());}),Z(14,9),h()()();}if(i&2){let e=g();p(11),k(e.authState.errorMessage?11:-1);}}function ed(i,n){if(i&1&&(u(0,"span",49),B(1),h()),i&2){let e=g(2);p(),se(e.renderState.timestampLabel);}}function td(i,n){if(i&1){let e=Ie();u(0,"div",23)(1,"mat-card",41)(2,"div",42)(3,"div")(4,"p",35),Z(5,10),h(),u(6,"h2"),Z(7,11),h()()(),u(8,"div",43)(9,"app-day-filter",44),H("valueChange",function(r){me(e);let o=g(2);return ue(o.onDaySelected(r));}),h()(),W(10,"mat-divider"),u(11,"div",43)(12,"div",45)(13,"h3"),Z(14,12),h(),u(15,"p"),Z(16,13),h()(),u(17,"app-time-slider",46),H("valueChange",function(r){me(e);let o=g(2);return ue(o.onHourSelected(r));}),h()()(),u(18,"mat-card",47)(19,"div",48)(20,"div")(21,"p",35),Z(22,14),h(),u(23,"h2"),Z(24,15),h()(),P(25,ed,2,1,"span",49),h(),W(26,"app-map-container",50),h()();}if(i&2){let e=g(),t=g();p(9),j("days",e.days)("value",e.selectedDay),p(8),j("hours",e.hourOptions)("value",e.selectedHour),p(8),k(e.renderState?25:-1),p(),j("authState",e.authState)("renderState",e.renderState)("loading",e.datasetState.status==="loading")("windSpeedLegendGradient",t.windSpeedLegendGradient)("windSpeedRange",e.windSpeedRange);}}function nd(i,n){if(i&1&&(u(0,"div",16)(1,"mat-toolbar",17)(2,"div",18)(3,"span",19),B(4,"AXIA"),h(),u(5,"span",20),Z(6,1),h()(),P(7,Kc,20,8),h(),P(8,Zc,10,0,"mat-card",21)(9,Jc,15,1,"mat-card",22)(10,td,27,10,"div",23),h()),i&2){let e=n;p(7),k(e.authState.status==="authenticated"?7:-1),p(),k(e.authState.status==="loading"?8:e.authState.status==="required"||e.authState.status==="error"?9:10);}}var ls=class i{windSpeedLegendGradient="linear-gradient(90deg, rgb(14, 165, 233) 0%, rgb(34, 197, 94) 25%, rgb(250, 204, 21) 50%, rgb(249, 115, 22) 75%, rgb(220, 38, 38) 100%)";destroyRef=s(ut);mapAuthService=s(Rt);windDataService=s(yi);latestDataset=null;dayControl=new Wn(null);hourControl=new Wn(null);authState$=this.mapAuthService.state$;datasetState$=this.windDataService.datasetState$;dataset$=this.datasetState$.pipe(re(n=>n.status==="ready"),Y(n=>n.dataset),Ee(n=>{this.latestDataset=n;}),Te(1));selectedDay$=this.dayControl.valueChanges.pipe(oe(this.dayControl.value),dt());selectedHour$=this.hourControl.valueChanges.pipe(oe(this.hourControl.value),dt());hourOptions$=Ci([this.dataset$,this.selectedDay$]).pipe(Y(([n,e])=>e?n.hoursByDay[e]??[]:[]),Te(1));viewModel$=Ci([this.datasetState$,this.authState$,this.dataset$.pipe(oe(null)),this.selectedDay$,this.selectedHour$,this.hourOptions$.pipe(oe([]))]).pipe(Y(([n,e,t,r,o,a])=>{let l=t&&r&&o?this.windDataService.createRenderState(t,r,o):null;return{datasetState:n,authState:e,days:t?.days??[],selectedDay:r,selectedHour:o,hourOptions:a,renderState:l,windSpeedRange:t?.windSpeedRange??null,summary:l&&l.lineFeatures.length>0?""+l.lineFeatures.length+" vetores de vento e "+l.polygonFeatures.length+" pol\xEDgonos de pico para "+l.timestampLabel+"":"N\xE3o h\xE1 fei\xE7\xF5es dispon\xEDveis para a sele\xE7\xE3o atual."};}),Te(1));constructor(){this.dataset$.pipe(Ee(n=>{let e=this.windDataService.getValidDayKey(n,this.dayControl.value);e!==this.dayControl.value&&this.dayControl.setValue(e,{emitEvent:!0});let t=this.windDataService.getValidHourKey(n,e,this.hourControl.value);t!==this.hourControl.value&&this.hourControl.setValue(t,{emitEvent:!0});}),Ai(this.destroyRef)).subscribe(),this.selectedDay$.pipe(Ee(n=>{if(!this.latestDataset)return;let e=this.windDataService.getValidHourKey(this.latestDataset,n,this.hourControl.value);e!==this.hourControl.value&&this.hourControl.setValue(e,{emitEvent:!0});}),Ai(this.destroyRef)).subscribe();}onDaySelected(n){this.dayControl.setValue(n);}onHourSelected(n){this.hourControl.setValue(n);}async signIn(){await this.mapAuthService.signIn();}async signOut(){await this.mapAuthService.signOut();}getUserInitials(n,e){let r=(n?.trim()||e?.trim()||"User").replace(/\s+/g," ").split(" ").filter(Boolean);return r.length===1?r[0].slice(0,2).toUpperCase():`${r[0][0]??""}${r[1][0]??""}`.toUpperCase();}static ɵfac=function(e){return new(e||i)();};static ɵcmp=y({type:i,selectors:[["app-wind-map-page"]],decls:2,vars:3,consts:()=>{let n;n="Prova de conceito do mapa de vento com ArcGIS";let e;e="Sair";let t;t="Autentica\xE7\xE3o";let r;r="Concluindo o login no ArcGIS";let o;o=" O aplicativo est\xE1 restaurando a sess\xE3o OAuth do ArcGIS e tratando qualquer retorno de redirecionamento antes de criar o novo mapa. ";let a;a="Autentica\xE7\xE3o";let l;l="Autentique-se antes de abrir o mapa";let c;c=" Entre com uma conta ArcGIS para abrir um mapa totalmente novo que usa a sess\xE3o autenticada do usu\xE1rio para opera\xE7\xF5es de mapa-base, portal e salvamento opcional. Nenhuma chave de API \xE9 usada. ";let d;d=" Entrar com ArcGIS ";let m;m="Controles";let _;_="Filtre o hor\xE1rio ativo";let R;R="Linha do tempo por hor\xE1rio";let G;G=" Selecione um hor\xE1rio dispon\xEDvel para atualizar as duas camadas em conjunto. ";let X;X="Mapa";let $;return $="Vetores de vento e pol\xEDgonos de pico",[["userMenu","matMenu"],n,e,t,r,o,a,l,c,d,m,_,R,G,X,$,[1,"page-shell"],[1,"page-toolbar"],[1,"toolbar-copy"],[1,"eyebrow"],[1,"toolbar-title"],[1,"auth-card","auth-status-card"],[1,"auth-card"],[1,"content-grid"],["mat-button","","type","button","aria-label","Open user menu",1,"user-menu-trigger",3,"matMenuTriggerFor","matMenuTriggerData"],["aria-hidden","true",1,"user-avatar"],[1,"user-menu-chevron"],["xPosition","before","panelClass","user-menu-overlay",1,"user-menu-panel"],[1,"user-menu-header"],["aria-hidden","true",1,"user-avatar","user-avatar-menu"],[1,"user-copy"],[1,"user-name"],[1,"user-email"],["mat-menu-item","","type","button",1,"user-menu-action",3,"click"],[1,"auth-header"],[1,"section-label"],["diameter","32","mode","indeterminate"],[1,"auth-copy"],[1,"auth-error"],[1,"auth-actions"],["mat-flat-button","","type","button","color","primary",3,"click"],[1,"control-card"],[1,"control-header"],[1,"control-row"],[3,"valueChange","days","value"],[1,"timeline-copy"],[3,"valueChange","hours","value"],[1,"map-card"],[1,"map-card-header"],[1,"map-timestamp"],[3,"authState","renderState","loading","windSpeedLegendGradient","windSpeedRange"]];},template:function(e,t){if(e&1&&(P(0,nd,11,2,"div",16),Bt(1,"async")),e&2){let r;k((r=Wr(1,1,t.viewModel$))?0:-1,r);}},dependencies:[Zn,Kn,Qo,Zo,ea,Jo,la,sa,Oa,Dt,mn,Ia,mi,di,Ta,Ra,gi,vi,bi,Yr],styles:["[_nghost-%COMP%]{display:block}.page-shell[_ngcontent-%COMP%]{min-height:100dvh;padding:1.25rem;background:radial-gradient(circle at top left,rgba(14,165,233,.18),transparent 28%),radial-gradient(circle at bottom right,rgba(30,64,175,.16),transparent 30%),linear-gradient(180deg,#f8fbff,#eef4fb 48%,#e2e8f0)}.page-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:1rem;margin-bottom:1.25rem;border-radius:24px;background:#ffffffc7;box-shadow:0 16px 40px #0f172a14}.toolbar-copy[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.15rem}.user-menu-trigger[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.45rem;min-width:4.75rem;padding:.4rem .45rem .4rem .4rem;border-radius:999px;background:#ffffffd1;border:1px solid rgba(148,163,184,.25);box-shadow:inset 0 1px #ffffff80}.user-avatar[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;inline-size:2.5rem;block-size:2.5rem;border-radius:50%;background:linear-gradient(135deg,#0f766e,#2563eb);color:#fff;font-size:.88rem;font-weight:700;letter-spacing:.04em;flex-shrink:0}.user-avatar-menu[_ngcontent-%COMP%]{inline-size:2.75rem;block-size:2.75rem}.user-copy[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-width:0;text-align:left}.user-name[_ngcontent-%COMP%], .user-email[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.user-name[_ngcontent-%COMP%]{color:#0f172a;font-size:.92rem;font-weight:700}.user-email[_ngcontent-%COMP%]{color:#64748b;font-size:.77rem}.user-menu-chevron[_ngcontent-%COMP%]{margin-left:auto;color:#475569;flex-shrink:0}.user-menu-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;min-width:280px;padding:.85rem .95rem;border-radius:16px;background:#fff}.eyebrow[_ngcontent-%COMP%], .section-label[_ngcontent-%COMP%], .hero-kicker[_ngcontent-%COMP%]{margin:0;text-transform:uppercase;letter-spacing:.12em;font-size:.75rem;font-weight:700;color:#0369a1}.toolbar-title[_ngcontent-%COMP%]{font-size:1.05rem;font-weight:600}.hero-panel[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.6fr 1fr;gap:1rem;margin-bottom:1rem}.hero-copy[_ngcontent-%COMP%], .status-card[_ngcontent-%COMP%], .auth-card[_ngcontent-%COMP%], .control-card[_ngcontent-%COMP%], .map-card[_ngcontent-%COMP%]{border-radius:28px;background:#ffffffc7;box-shadow:0 24px 60px #0f172a14}.hero-copy[_ngcontent-%COMP%]{padding:2rem}.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:.35rem 0 .75rem;font-size:clamp(2rem,4vw,3.4rem);line-height:1;font-weight:700;color:#0f172a}.hero-description[_ngcontent-%COMP%]{margin:0;max-width:56ch;color:#334155}.status-card[_ngcontent-%COMP%], .auth-card[_ngcontent-%COMP%], .control-card[_ngcontent-%COMP%], .map-card[_ngcontent-%COMP%]{padding:1.25rem}.status-content[_ngcontent-%COMP%]{display:flex;gap:1rem;align-items:center}.status-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .auth-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .control-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .map-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .timeline-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0}.status-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .auth-copy[_ngcontent-%COMP%], .timeline-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 0;color:#475569}.status-content.error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#b91c1c}.auth-card[_ngcontent-%COMP%]{max-width:860px}.auth-status-card[_ngcontent-%COMP%]{display:grid;gap:1rem}.auth-header[_ngcontent-%COMP%], .map-card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:1rem;align-items:start}.auth-form[_ngcontent-%COMP%]{display:grid;gap:1rem;margin-top:1.25rem}.auth-actions[_ngcontent-%COMP%]{display:flex;gap:.75rem;flex-wrap:wrap}.auth-error[_ngcontent-%COMP%]{margin:0;color:#b91c1c;font-weight:600}.content-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(320px,420px) minmax(0,1fr);gap:1rem}.control-card[_ngcontent-%COMP%], .control-row[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.timeline-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1rem}.map-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;min-height:620px}.map-timestamp[_ngcontent-%COMP%]{display:inline-flex;align-items:center;padding:.55rem .85rem;border-radius:999px;background:#dbeafe;color:#1d4ed8;font-size:.88rem;font-weight:600}app-map-container[_ngcontent-%COMP%]{flex:1}@media(max-width:960px){.hero-panel[_ngcontent-%COMP%], .content-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.map-card[_ngcontent-%COMP%]{min-height:540px}.page-toolbar[_ngcontent-%COMP%]{flex-wrap:wrap}}@media(max-width:640px){.page-shell[_ngcontent-%COMP%]{padding:.75rem}.page-toolbar[_ngcontent-%COMP%], .hero-copy[_ngcontent-%COMP%], .status-card[_ngcontent-%COMP%], .auth-card[_ngcontent-%COMP%], .control-card[_ngcontent-%COMP%], .map-card[_ngcontent-%COMP%]{border-radius:20px}.map-card-header[_ngcontent-%COMP%]{flex-direction:column}}.user-menu-trigger[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:8px;border:none;background:transparent;box-shadow:none;padding:0 8px}.user-avatar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}"],changeDetection:0});};export{ls as WindMapPageComponent};/**i18n:5823f777b264f0f87cbafe909c9e4abe470f51cc6d4cd9cfee6d524cd5b6504f*/