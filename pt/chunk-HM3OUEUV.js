import{$ as Et,$a as Le,A as it,Aa as Z,Ab as mn,B as Ao,Ba as sn,Ca as Fo,Cb as Ee,Db as Se,E as pi,Eb as un,F as Do,Fa as v,G as De,Ga as y,Gb as At,H as Io,Ha as A,Hb as Wo,I as me,Ia as pe,Ib as Be,J as nn,Ja as Ne,Jb as O,K as se,Kb as Ie,L as ko,La as We,Lb as Go,M as xe,Ma as No,Mb as hn,N as wt,Nb as bi,Oa as dt,Ob as Ho,P as ot,Pa as L,Pb as pn,Q as g,Qa as P,Qb as Uo,R as b,Ra as R,Rb as $o,Sa as Lo,Sb as Ko,T as f,Ta as ln,U as Mt,Ua as dn,Ub as fn,V as s,Va as j,Wa as h,X as rt,Xa as u,Xb as gn,Ya as X,Z as Ce,Za as Ge,_ as we,_a as He,a as w,aa as Oo,ab as cn,b as te,ba as q,bb as Ve,c as de,ca as z,cb as ct,da as at,db as Q,e as et,eb as V,f as C,fa as N,fb as S,g as Jt,ga as D,gb as ne,h as Co,ha as on,hb as T,i as wo,ib as mt,j as ge,jb as _e,k as Mo,ka as ee,kb as I,la as Te,lb as k,ma as ue,mb as Vo,n as K,na as st,nb as Bo,o as ui,oa as M,ob as gi,pa as fi,pb as Ue,qa as Po,qb as $e,r as Eo,ra as Ro,rb as E,s as tt,sa as rn,sb as Me,t as nt,ta as To,tb as J,u as ae,ua as Fe,ub as oe,v as hi,va as p,vb as zo,w as en,wa as lt,wb as re,xa as an,xb as St,y as So,ya as he,yb as jo,z as tn,za as le,zb as _i}from"./chunk-5VUB25VG.js";function vi(i){i||(i=s(at));let n=new et(e=>{if(i.destroyed){e.next();return;}return i.onDestroy(e.next.bind(e));});return e=>e.pipe(se(n));}var Jo=(()=>{class i{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,t){this._renderer=e,this._elementRef=t;}setProperty(e,t){this._renderer.setProperty(this._elementRef.nativeElement,e,t);}registerOnTouched(e){this.onTouched=e;}registerOnChange(e){this.onChange=e;}setDisabledState(e){this.setProperty("disabled",e);}static ɵfac=function(t){return new(t||i)(Z(le),Z(M));};static ɵdir=A({type:i});}return i;})(),ps=(()=>{class i extends Jo{static ɵfac=(()=>{let e;return function(o){return(e||(e=st(i)))(o||i);};})();static ɵdir=A({type:i,features:[pe]});}return i;})(),er=new f("");var fs={provide:er,useExisting:ot(()=>In),multi:!0};function gs(){let i=bi()?bi().getUserAgent():"";return /android (\d+)/.test(i.toLowerCase());}var _s=new f(""),In=(()=>{class i extends Jo{_compositionMode;_composing=!1;constructor(e,t,o){super(e,t),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!gs());}writeValue(e){let t=e??"";this.setProperty("value",t);}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e);}_compositionStart(){this._composing=!0;}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e);}static ɵfac=function(t){return new(t||i)(Z(le),Z(M),Z(_s,8));};static ɵdir=A({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(t,o){t&1&&V("input",function(a){return o._handleInput(a.target.value);})("blur",function(){return o.onTouched();})("compositionstart",function(){return o._compositionStart();})("compositionend",function(a){return o._compositionEnd(a.target.value);});},standalone:!1,features:[re([fs]),pe]});}return i;})();function Ci(i){return i==null||wi(i)===0;}function wi(i){return i==null?null:Array.isArray(i)||typeof i=="string"?i.length:i instanceof Set?i.size:null;}var Mi=new f(""),Ei=new f(""),bs=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,pt=class{static min(n){return vs(n);}static max(n){return ys(n);}static required(n){return xs(n);}static requiredTrue(n){return Cs(n);}static email(n){return ws(n);}static minLength(n){return Ms(n);}static maxLength(n){return Es(n);}static pattern(n){return Ss(n);}static nullValidator(n){return tr();}static compose(n){return sr(n);}static composeAsync(n){return lr(n);}};function vs(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e<i?{min:{min:i,actual:n.value}}:null;};}function ys(i){return n=>{if(n.value==null||i==null)return null;let e=parseFloat(n.value);return!isNaN(e)&&e>i?{max:{max:i,actual:n.value}}:null;};}function xs(i){return Ci(i.value)?{required:!0}:null;}function Cs(i){return i.value===!0?null:{required:!0};}function ws(i){return Ci(i.value)||bs.test(i.value)?null:{email:!0};}function Ms(i){return n=>{let e=n.value?.length??wi(n.value);return e===null||e===0?null:e<i?{minlength:{requiredLength:i,actualLength:e}}:null;};}function Es(i){return n=>{let e=n.value?.length??wi(n.value);return e!==null&&e>i?{maxlength:{requiredLength:i,actualLength:e}}:null;};}function Ss(i){if(!i)return tr;let n,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),n=new RegExp(e)):(e=i.toString(),n=i),t=>{if(Ci(t.value))return null;let o=t.value;return n.test(o)?null:{pattern:{requiredPattern:e,actualValue:o}};};}function tr(i){return null;}function nr(i){return i!=null;}function ir(i){return No(i)?wo(i):i;}function or(i){let n={};return i.forEach(e=>{n=e!=null?w(w({},n),e):n;}),Object.keys(n).length===0?null:n;}function rr(i,n){return n.map(e=>e(i));}function As(i){return!i.validate;}function ar(i){return i.map(n=>As(n)?n:e=>n.validate(e));}function sr(i){if(!i)return null;let n=i.filter(nr);return n.length==0?null:function(e){return or(rr(e,n));};}function Si(i){return i!=null?sr(ar(i)):null;}function lr(i){if(!i)return null;let n=i.filter(nr);return n.length==0?null:function(e){let t=rr(e,n).map(ir);return tt(t).pipe(K(or));};}function Ai(i){return i!=null?lr(ar(i)):null;}function Xo(i,n){return i===null?[n]:Array.isArray(i)?[...i,n]:[i,n];}function dr(i){return i._rawValidators;}function cr(i){return i._rawAsyncValidators;}function yi(i){return i?Array.isArray(i)?i:[i]:[];}function bn(i,n){return Array.isArray(i)?i.includes(n):i===n;}function Yo(i,n){let e=yi(n);return yi(i).forEach(o=>{bn(e,o)||e.push(o);}),e;}function qo(i,n){return yi(n).filter(e=>!bn(i,e));}var vn=class{get value(){return this.control?this.control.value:null;}get valid(){return this.control?this.control.valid:null;}get invalid(){return this.control?this.control.invalid:null;}get pending(){return this.control?this.control.pending:null;}get disabled(){return this.control?this.control.disabled:null;}get enabled(){return this.control?this.control.enabled:null;}get errors(){return this.control?this.control.errors:null;}get pristine(){return this.control?this.control.pristine:null;}get dirty(){return this.control?this.control.dirty:null;}get touched(){return this.control?this.control.touched:null;}get status(){return this.control?this.control.status:null;}get untouched(){return this.control?this.control.untouched:null;}get statusChanges(){return this.control?this.control.statusChanges:null;}get valueChanges(){return this.control?this.control.valueChanges:null;}get path(){return null;}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=Si(this._rawValidators);}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=Ai(this._rawAsyncValidators);}get validator(){return this._composedValidatorFn||null;}get asyncValidator(){return this._composedAsyncValidatorFn||null;}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n);}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[];}reset(n=void 0){this.control?.reset(n);}hasError(n,e){return this.control?this.control.hasError(n,e):!1;}getError(n,e){return this.control?this.control.getError(n,e):null;}},ft=class extends vn{name;get formDirective(){return null;}get path(){return null;}},ke=class extends vn{_parent=null;name=null;valueAccessor=null;},xi=class{_cd;constructor(n){this._cd=n;}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched;}get isUntouched(){return!!this._cd?.control?.untouched;}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine;}get isDirty(){return!!this._cd?.control?.dirty;}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid;}get isInvalid(){return!!this._cd?.control?.invalid;}get isPending(){return!!this._cd?.control?.pending;}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted;}};var mr=(()=>{class i extends xi{constructor(e){super(e);}static ɵfac=function(t){return new(t||i)(Z(ke,2));};static ɵdir=A({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(t,o){t&2&&E("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending);},standalone:!1,features:[pe]});}return i;})();var Dt="VALID",_n="INVALID",ut="PENDING",It="DISABLED",ze=class{},yn=class extends ze{value;source;constructor(n,e){super(),this.value=n,this.source=e;}},Ot=class extends ze{pristine;source;constructor(n,e){super(),this.pristine=n,this.source=e;}},Pt=class extends ze{touched;source;constructor(n,e){super(),this.touched=n,this.source=e;}},ht=class extends ze{status;source;constructor(n,e){super(),this.status=n,this.source=e;}},xn=class extends ze{source;constructor(n){super(),this.source=n;}},Cn=class extends ze{source;constructor(n){super(),this.source=n;}};function ur(i){return(kn(i)?i.validators:i)||null;}function Ds(i){return Array.isArray(i)?Si(i):i||null;}function hr(i,n){return(kn(n)?n.asyncValidators:i)||null;}function Is(i){return Array.isArray(i)?Ai(i):i||null;}function kn(i){return i!=null&&!Array.isArray(i)&&typeof i=="object";}function ks(i,n,e){let t=i.controls;if(!(n?Object.keys(t):t).length)throw new wt(1e3,"");if(!t[e])throw new wt(1001,"");}function Os(i,n,e){i._forEachChild((t,o)=>{if(e[o]===void 0)throw new wt(1002,"");});}var wn=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,e){this._assignValidators(n),this._assignAsyncValidators(e);}get validator(){return this._composedValidatorFn;}set validator(n){this._rawValidators=this._composedValidatorFn=n;}get asyncValidator(){return this._composedAsyncValidatorFn;}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n;}get parent(){return this._parent;}get status(){return Ee(this.statusReactive);}set status(n){Ee(()=>this.statusReactive.set(n));}_status=Se(()=>this.statusReactive());statusReactive=ee(void 0);get valid(){return this.status===Dt;}get invalid(){return this.status===_n;}get pending(){return this.status===ut;}get disabled(){return this.status===It;}get enabled(){return this.status!==It;}errors;get pristine(){return Ee(this.pristineReactive);}set pristine(n){Ee(()=>this.pristineReactive.set(n));}_pristine=Se(()=>this.pristineReactive());pristineReactive=ee(!0);get dirty(){return!this.pristine;}get touched(){return Ee(this.touchedReactive);}set touched(n){Ee(()=>this.touchedReactive.set(n));}_touched=Se(()=>this.touchedReactive());touchedReactive=ee(!1);get untouched(){return!this.touched;}_events=new C();events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change";}setValidators(n){this._assignValidators(n);}setAsyncValidators(n){this._assignAsyncValidators(n);}addValidators(n){this.setValidators(Yo(n,this._rawValidators));}addAsyncValidators(n){this.setAsyncValidators(Yo(n,this._rawAsyncValidators));}removeValidators(n){this.setValidators(qo(n,this._rawValidators));}removeAsyncValidators(n){this.setAsyncValidators(qo(n,this._rawAsyncValidators));}hasValidator(n){return bn(this._rawValidators,n);}hasAsyncValidator(n){return bn(this._rawAsyncValidators,n);}clearValidators(){this.validator=null;}clearAsyncValidators(){this.asyncValidator=null;}markAsTouched(n={}){let e=this.touched===!1;this.touched=!0;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsTouched(te(w({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new Pt(!0,t));}markAllAsDirty(n={}){this.markAsDirty({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(n));}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(n));}markAsUntouched(n={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=n.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:t});}),n.onlySelf||this._parent?._updateTouched(n,t),e&&n.emitEvent!==!1&&this._events.next(new Pt(!1,t));}markAsDirty(n={}){let e=this.pristine===!0;this.pristine=!1;let t=n.sourceControl??this;n.onlySelf||this._parent?.markAsDirty(te(w({},n),{sourceControl:t})),e&&n.emitEvent!==!1&&this._events.next(new Ot(!1,t));}markAsPristine(n={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=n.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent});}),n.onlySelf||this._parent?._updatePristine(n,t),e&&n.emitEvent!==!1&&this._events.next(new Ot(!0,t));}markAsPending(n={}){this.status=ut;let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new ht(this.status,e)),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.markAsPending(te(w({},n),{sourceControl:e}));}disable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=It,this.errors=null,this._forEachChild(o=>{o.disable(te(w({},n),{onlySelf:!0}));}),this._updateValue();let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new yn(this.value,t)),this._events.next(new ht(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(te(w({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0));}enable(n={}){let e=this._parentMarkedDirty(n.onlySelf);this.status=Dt,this._forEachChild(t=>{t.enable(te(w({},n),{onlySelf:!0}));}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(te(w({},n),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(t=>t(!1));}_updateAncestors(n,e){n.onlySelf||(this._parent?.updateValueAndValidity(n),n.skipPristineCheck||this._parent?._updatePristine({},e),this._parent?._updateTouched({},e));}setParent(n){this._parent=n;}getRawValue(){return this.value;}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Dt||this.status===ut)&&this._runAsyncValidator(t,n.emitEvent);}let e=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new yn(this.value,e)),this._events.next(new ht(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),n.onlySelf||this._parent?.updateValueAndValidity(te(w({},n),{sourceControl:e}));}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent});}_setInitialStatus(){this.status=this._allControlsDisabled()?It:Dt;}_runValidator(){return this.validator?this.validator(this):null;}_runAsyncValidator(n,e){if(this.asyncValidator){this.status=ut,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:n!==!1};let t=ir(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:n});});}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,n;}return!1;}setErrors(n,e={}){this.errors=n,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted);}get(n){let e=n;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((t,o)=>t&&t._find(o),this);}getError(n,e){let t=e?this.get(e):this;return t?.errors?t.errors[n]:null;}hasError(n,e){return!!this.getError(n,e);}get root(){let n=this;for(;n._parent;)n=n._parent;return n;}_updateControlsErrors(n,e,t){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||t)&&this._events.next(new ht(this.status,e)),this._parent&&this._parent._updateControlsErrors(n,e,t);}_initObservables(){this.valueChanges=new N(),this.statusChanges=new N();}_calculateStatus(){return this._allControlsDisabled()?It:this.errors?_n:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(ut)?ut:this._anyControlsHaveStatus(_n)?_n:Dt;}_anyControlsHaveStatus(n){return this._anyControls(e=>e.status===n);}_anyControlsDirty(){return this._anyControls(n=>n.dirty);}_anyControlsTouched(){return this._anyControls(n=>n.touched);}_updatePristine(n,e){let t=!this._anyControlsDirty(),o=this.pristine!==t;this.pristine=t,n.onlySelf||this._parent?._updatePristine(n,e),o&&this._events.next(new Ot(this.pristine,e));}_updateTouched(n={},e){this.touched=this._anyControlsTouched(),this._events.next(new Pt(this.touched,e)),n.onlySelf||this._parent?._updateTouched(n,e);}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n;}_setUpdateStrategy(n){kn(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn);}_parentMarkedDirty(n){return!n&&!!this._parent?.dirty&&!this._parent._anyControlsDirty();}_find(n){return null;}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Ds(this._rawValidators);}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Is(this._rawAsyncValidators);}},Mn=class extends wn{constructor(n,e,t){super(ur(e),hr(t,e)),this.controls=n,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator});}controls;registerControl(n,e){return this.controls[n]?this.controls[n]:(this.controls[n]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e);}addControl(n,e,t={}){this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange();}removeControl(n,e={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange();}setControl(n,e,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],e&&this.registerControl(n,e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange();}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled;}setValue(n,e={}){Os(this,!0,n),Object.keys(n).forEach(t=>{ks(this,!0,t),this.controls[t].setValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent});}),this.updateValueAndValidity(e);}patchValue(n,e={}){n!=null&&(Object.keys(n).forEach(t=>{let o=this.controls[t];o&&o.patchValue(n[t],{onlySelf:!0,emitEvent:e.emitEvent});}),this.updateValueAndValidity(e));}reset(n={},e={}){this._forEachChild((t,o)=>{t.reset(n?n[o]:null,te(w({},e),{onlySelf:!0}));}),this._updatePristine(e,this),this._updateTouched(e,this),this.updateValueAndValidity(e),e?.emitEvent!==!1&&this._events.next(new Cn(this));}getRawValue(){return this._reduceChildren({},(n,e,t)=>(n[t]=e.getRawValue(),n));}_syncPendingControls(){let n=this._reduceChildren(!1,(e,t)=>t._syncPendingControls()?!0:e);return n&&this.updateValueAndValidity({onlySelf:!0}),n;}_forEachChild(n){Object.keys(this.controls).forEach(e=>{let t=this.controls[e];t&&n(t,e);});}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange);});}_updateValue(){this.value=this._reduceValue();}_anyControls(n){for(let[e,t]of Object.entries(this.controls))if(this.contains(e)&&n(t))return!0;return!1;}_reduceValue(){let n={};return this._reduceChildren(n,(e,t,o)=>((t.enabled||this.disabled)&&(e[o]=t.value),e));}_reduceChildren(n,e){let t=n;return this._forEachChild((o,r)=>{t=e(t,o,r);}),t;}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled;}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null;}};var On=new f("",{factory:()=>Di}),Di="always";function En(i,n,e=Di){Ii(i,n),n.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&n.valueAccessor.setDisabledState?.(i.disabled),Rs(i,n),Fs(i,n),Ts(i,n),Ps(i,n);}function Sn(i,n,e=!0){let t=()=>{};n?.valueAccessor?.registerOnChange(t),n?.valueAccessor?.registerOnTouched(t),Dn(i,n),i&&(n._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}));}function An(i,n){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(n);});}function Ps(i,n){if(n.valueAccessor.setDisabledState){let e=t=>{n.valueAccessor.setDisabledState(t);};i.registerOnDisabledChange(e),n._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e);});}}function Ii(i,n){let e=dr(i);n.validator!==null?i.setValidators(Xo(e,n.validator)):typeof e=="function"&&i.setValidators([e]);let t=cr(i);n.asyncValidator!==null?i.setAsyncValidators(Xo(t,n.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let o=()=>i.updateValueAndValidity();An(n._rawValidators,o),An(n._rawAsyncValidators,o);}function Dn(i,n){let e=!1;if(i!==null){if(n.validator!==null){let o=dr(i);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==n.validator);r.length!==o.length&&(e=!0,i.setValidators(r));}}if(n.asyncValidator!==null){let o=cr(i);if(Array.isArray(o)&&o.length>0){let r=o.filter(a=>a!==n.asyncValidator);r.length!==o.length&&(e=!0,i.setAsyncValidators(r));}}}let t=()=>{};return An(n._rawValidators,t),An(n._rawAsyncValidators,t),e;}function Rs(i,n){n.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&pr(i,n);});}function Ts(i,n){n.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&pr(i,n),i.updateOn!=="submit"&&i.markAsTouched();});}function pr(i,n){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1;}function Fs(i,n){let e=(t,o)=>{n.valueAccessor.writeValue(t),o&&n.viewToModelUpdate(t);};i.registerOnChange(e),n._registerOnDestroy(()=>{i._unregisterOnChange(e);});}function fr(i,n){i==null,Ii(i,n);}function Ns(i,n){return Dn(i,n);}function Ls(i,n){if(!i.hasOwnProperty("model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(n,e.currentValue);}function Vs(i){return Object.getPrototypeOf(i.constructor)===ps;}function gr(i,n){i._syncPendingControls(),n.forEach(e=>{let t=e.control;t.updateOn==="submit"&&t._pendingChange&&(e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1);});}function Bs(i,n){if(!n)return null;Array.isArray(n);let e,t,o;return n.forEach(r=>{r.constructor===In?e=r:Vs(r)?t=r:o=r;}),o||t||e||null;}function zs(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1);}var js={provide:ft,useExisting:ot(()=>Rt)},kt=Promise.resolve(),Rt=(()=>{class i extends ft{callSetDisabledState;get submitted(){return Ee(this.submittedReactive);}_submitted=Se(()=>this.submittedReactive());submittedReactive=ee(!1);_directives=new Set();form;ngSubmit=new N();options;constructor(e,t,o){super(),this.callSetDisabledState=o,this.form=new Mn({},Si(e),Ai(t));}ngAfterViewInit(){this._setUpdateStrategy();}get formDirective(){return this;}get control(){return this.form;}get path(){return[];}get controls(){return this.form.controls;}addControl(e){kt.then(()=>{let t=this._findContainer(e.path);e.control=t.registerControl(e.name,e.control),En(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e);});}getControl(e){return this.form.get(e.path);}removeControl(e){kt.then(()=>{this._findContainer(e.path)?.removeControl(e.name),this._directives.delete(e);});}addFormGroup(e){kt.then(()=>{let t=this._findContainer(e.path),o=new Mn({});fr(o,e),t.registerControl(e.name,o),o.updateValueAndValidity({emitEvent:!1});});}removeFormGroup(e){kt.then(()=>{this._findContainer(e.path)?.removeControl?.(e.name);});}getFormGroup(e){return this.form.get(e.path);}updateModel(e,t){kt.then(()=>{this.form.get(e.path).setValue(t);});}setValue(e){this.control.setValue(e);}onSubmit(e){return this.submittedReactive.set(!0),gr(this.form,this._directives),this.ngSubmit.emit(e),this.form._events.next(new xn(this.control)),e?.target?.method==="dialog";}onReset(){this.resetForm();}resetForm(e=void 0){this.form.reset(e),this.submittedReactive.set(!1);}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn);}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form;}static ɵfac=function(t){return new(t||i)(Z(Mi,10),Z(Ei,10),Z(On,8));};static ɵdir=A({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup","",3,"formArray",""],["ng-form"],["","ngForm",""]],hostBindings:function(t,o){t&1&&V("submit",function(a){return o.onSubmit(a);})("reset",function(){return o.onReset();});},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[re([js]),pe]});}return i;})();function Zo(i,n){let e=i.indexOf(n);e>-1&&i.splice(e,1);}function Qo(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i;}var Tt=class extends wn{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,e,t){super(ur(e),hr(t,e)),this._applyFormState(n),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),kn(e)&&(e.nonNullable||e.initialValueIsDefault)&&(Qo(n)?this.defaultValue=n.value:this.defaultValue=n);}setValue(n,e={}){this.value=this._pendingValue=n,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e);}patchValue(n,e={}){this.setValue(n,e);}reset(n=this.defaultValue,e={}){this._applyFormState(n),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),e.overwriteDefaultValue&&(this.defaultValue=this.value),this._pendingChange=!1,e?.emitEvent!==!1&&this._events.next(new Cn(this));}_updateValue(){}_anyControls(n){return!1;}_allControlsDisabled(){return this.disabled;}registerOnChange(n){this._onChange.push(n);}_unregisterOnChange(n){Zo(this._onChange,n);}registerOnDisabledChange(n){this._onDisabledChange.push(n);}_unregisterOnDisabledChange(n){Zo(this._onDisabledChange,n);}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1;}_applyFormState(n){Qo(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n;}};var Ws=i=>i instanceof Tt;var Gs=(()=>{class i extends ft{callSetDisabledState;get submitted(){return Ee(this._submittedReactive);}set submitted(e){this._submittedReactive.set(e);}_submitted=Se(()=>this._submittedReactive());_submittedReactive=ee(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];constructor(e,t,o){super(),this.callSetDisabledState=o,this._setValidators(e),this._setAsyncValidators(t);}ngOnChanges(e){this.onChanges(e);}ngOnDestroy(){this.onDestroy();}onChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form);}onDestroy(){this.form&&(Dn(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}));}get formDirective(){return this;}get path(){return[];}addControl(e){let t=this.form.get(e.path);return En(t,e,this.callSetDisabledState),t.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),t;}getControl(e){return this.form.get(e.path);}removeControl(e){Sn(e.control||null,e,!1),zs(this.directives,e);}addFormGroup(e){this._setUpFormContainer(e);}removeFormGroup(e){this._cleanUpFormContainer(e);}getFormGroup(e){return this.form.get(e.path);}getFormArray(e){return this.form.get(e.path);}addFormArray(e){this._setUpFormContainer(e);}removeFormArray(e){this._cleanUpFormContainer(e);}updateModel(e,t){this.form.get(e.path).setValue(t);}onReset(){this.resetForm();}resetForm(e=void 0,t={}){this.form.reset(e,t),this._submittedReactive.set(!1);}onSubmit(e){return this.submitted=!0,gr(this.form,this.directives),this.ngSubmit.emit(e),this.form._events.next(new xn(this.control)),e?.target?.method==="dialog";}_updateDomValue(){this.directives.forEach(e=>{let t=e.control,o=this.form.get(e.path);t!==o&&(Sn(t||null,e),Ws(o)&&(En(o,e,this.callSetDisabledState),e.control=o));}),this.form._updateTreeValidity({emitEvent:!1});}_setUpFormContainer(e){let t=this.form.get(e.path);fr(t,e),t.updateValueAndValidity({emitEvent:!1});}_cleanUpFormContainer(e){let t=this.form?.get(e.path);t&&Ns(t,e)&&t.updateValueAndValidity({emitEvent:!1});}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm?._registerOnCollectionChange(()=>{});}_updateValidators(){Ii(this.form,this),this._oldForm&&Dn(this._oldForm,this);}_checkFormPresent(){this.form;}static ɵfac=function(t){return new(t||i)(Z(Mi,10),Z(Ei,10),Z(On,8));};static ɵdir=A({type:i,features:[pe,ue]});}return i;})();var _r=new f(""),Hs={provide:ke,useExisting:ot(()=>ki)},ki=(()=>{class i extends ke{_ngModelWarningConfig;callSetDisabledState;viewModel;form;set isDisabled(e){}model;update=new N();static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(e,t,o,r,a){super(),this._ngModelWarningConfig=r,this.callSetDisabledState=a,this._setValidators(e),this._setAsyncValidators(t),this.valueAccessor=Bs(this,o);}ngOnChanges(e){if(this._isControlChanged(e)){let t=e.form.previousValue;t&&Sn(t,this,!1),En(this.form,this,this.callSetDisabledState),this.form.updateValueAndValidity({emitEvent:!1});}Ls(e,this.viewModel)&&(this.form.setValue(this.model),this.viewModel=this.model);}ngOnDestroy(){this.form&&Sn(this.form,this,!1);}get path(){return[];}get control(){return this.form;}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e);}_isControlChanged(e){return e.hasOwnProperty("form");}static ɵfac=function(t){return new(t||i)(Z(Mi,10),Z(Ei,10),Z(er,10),Z(_r,8),Z(On,8));};static ɵdir=A({type:i,selectors:[["","formControl",""]],inputs:{form:[0,"formControl","form"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},exportAs:["ngForm"],standalone:!1,features:[re([Hs]),pe,ue]});}return i;})();var Us={provide:ft,useExisting:ot(()=>Ft)},Ft=(()=>{class i extends Gs{form=null;ngSubmit=new N();get control(){return this.form;}static ɵfac=(()=>{let e;return function(o){return(e||(e=st(i)))(o||i);};})();static ɵdir=A({type:i,selectors:[["","formGroup",""]],hostBindings:function(t,o){t&1&&V("submit",function(a){return o.onSubmit(a);})("reset",function(){return o.onReset();});},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[re([Us]),pe]});}return i;})();var $s=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=y({type:i});static ɵinj=b({});}return i;})();var br=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:_r,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:On,useValue:e.callSetDisabledState??Di}]};}static ɵfac=function(t){return new(t||i)();};static ɵmod=y({type:i});static ɵinj=b({imports:[$s]});}return i;})();function Nt(i){return i.buttons===0||i.detail===0;}function Lt(i){let n=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1);}var Oi;function vr(){if(Oi==null){let i=typeof document<"u"?document.head:null;Oi=!!(i&&(i.createShadowRoot||i.attachShadow));}return Oi;}function Pi(i){if(vr()){let n=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&n instanceof ShadowRoot)return n;}return null;}function ie(i){return i.composedPath?i.composedPath()[0]:i.target;}var Ri;try{Ri=typeof Intl<"u"&&Intl.v8BreakIterator;}catch{Ri=!1;}var W=(()=>{class i{_platformId=s(Ro);isBrowser=this._platformId?Ko(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Ri)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static ɵfac=function(t){return new(t||i)();};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var Vt;function yr(){if(Vt==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>Vt=!0}));}finally{Vt=Vt||!1;}return Vt;}function gt(i){return yr()?i:!!i.capture;}function fe(i){return i instanceof M?i.nativeElement:i;}var xr=new f("cdk-input-modality-detector-options"),Cr={ignoreKeys:[18,17,224,91,16]},wr=650,Ti={passive:!0,capture:!0},Mr=(()=>{class i{_platform=s(W);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value;}_mostRecentTarget=null;_modality=new Jt(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=ie(e));};_onMousedown=e=>{Date.now()-this._lastTouchMs<wr||(this._modality.next(Nt(e)?"keyboard":"mouse"),this._mostRecentTarget=ie(e));};_onTouchstart=e=>{if(Lt(e)){this._modality.next("keyboard");return;}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=ie(e);};constructor(){let e=s(D),t=s(z),o=s(xr,{optional:!0});if(this._options=w(w({},Cr),o),this.modalityDetected=this._modality.pipe(Io(1)),this.modalityChanged=this.modalityDetected.pipe(it()),this._platform.isBrowser){let r=s(he).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(t,"keydown",this._onKeydown,Ti),r.listen(t,"mousedown",this._onMousedown,Ti),r.listen(t,"touchstart",this._onTouchstart,Ti)]);}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e());}static ɵfac=function(t){return new(t||i)();};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})(),Bt=function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i;}(Bt||{}),Er=new f("cdk-focus-monitor-default-options"),Pn=gt({passive:!0,capture:!0}),Fi=(()=>{class i{_ngZone=s(D);_platform=s(W);_inputModalityDetector=s(Mr);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map();_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map();_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1);};_document=s(z);_stopInputModalityDetector=new C();constructor(){let e=s(Er,{optional:!0});this._detectionMode=e?.detectionMode||Bt.IMMEDIATE;}_rootNodeFocusAndBlurListener=e=>{let t=ie(e);for(let o=t;o;o=o.parentElement)e.type==="focus"?this._onFocus(e,o):this._onBlur(e,o);};monitor(e,t=!1){let o=fe(e);if(!this._platform.isBrowser||o.nodeType!==1)return ge();let r=Pi(o)||this._document,a=this._elementInfo.get(o);if(a)return t&&(a.checkChildren=!0),a.subject;let l={checkChildren:t,subject:new C(),rootNode:r};return this._elementInfo.set(o,l),this._registerGlobalListeners(l),l.subject;}stopMonitoring(e){let t=fe(e),o=this._elementInfo.get(t);o&&(o.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(o));}focusVia(e,t,o){let r=fe(e),a=this._document.activeElement;r===a?this._getClosestElementsInfo(r).forEach(([l,c])=>this._originChanged(l,t,c)):(this._setOrigin(t),typeof r.focus=="function"&&r.focus(o));}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t));}_getWindow(){return this._document.defaultView||window;}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program";}_shouldBeAttributedToTouch(e){return this._detectionMode===Bt.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget);}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program");}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===Bt.IMMEDIATE){clearTimeout(this._originTimeoutId);let o=this._originFromTouchInteraction?wr:1;this._originTimeoutId=setTimeout(()=>this._origin=null,o);}});}_onFocus(e,t){let o=this._elementInfo.get(t),r=ie(e);!o||!o.checkChildren&&t!==r||this._originChanged(t,this._getFocusOrigin(r),o);}_onBlur(e,t){let o=this._elementInfo.get(t);!o||o.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(o,null));}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t));}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,o=this._rootNodeFocusListenerCount.get(t)||0;o||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Pn),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Pn);}),this._rootNodeFocusListenerCount.set(t,o+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener);}),this._inputModalityDetector.modalityDetected.pipe(se(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0);}));}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let o=this._rootNodeFocusListenerCount.get(t);o>1?this._rootNodeFocusListenerCount.set(t,o-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Pn),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Pn),this._rootNodeFocusListenerCount.delete(t));}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId));}_originChanged(e,t,o){this._setClasses(e,t),this._emitOrigin(o,t),this._lastFocusOrigin=t;}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((o,r)=>{(r===e||o.checkChildren&&r.contains(e))&&t.push([r,o]);}),t;}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:o}=this._inputModalityDetector;if(o!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(t))return!0;}return!1;}static ɵfac=function(t){return new(t||i)();};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var Rn=new WeakMap(),be=(()=>{class i{_appRef;_injector=s(q);_environmentInjector=s(rt);load(e){let t=this._appRef=this._appRef||this._injector.get(dt),o=Rn.get(t);o||(o={loaders:new Set(),refs:[]},Rn.set(t,o),t.onDestroy(()=>{Rn.get(t)?.refs.forEach(r=>r.destroy()),Rn.delete(t);})),o.loaders.has(e)||(o.loaders.add(e),o.refs.push(hn(e,{environmentInjector:this._environmentInjector})));}static ɵfac=function(t){return new(t||i)();};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var Ni=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵcmp=v({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-visually-hidden {
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
`],encapsulation:2,changeDetection:0});}return i;})(),Tn;function Xs(){if(Tn===void 0&&(Tn=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(Tn=i.trustedTypes.createPolicy("angular#components",{createHTML:n=>n}));}return Tn;}function Ke(i){return Xs()?.createHTML(i)||i;}function Sr(i,n,e){let t=e.sanitize(Fe.HTML,n);i.innerHTML=Ke(t||"");}function Li(i){return Array.isArray(i)?i:[i];}var Ar=new Set(),Xe,Vi=(()=>{class i{_platform=s(W);_nonce=s(To,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):qs;}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Ys(e,this._nonce),this._matchMedia(e);}static ɵfac=function(t){return new(t||i)();};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();function Ys(i,n){if(!Ar.has(i))try{Xe||(Xe=document.createElement("style"),n&&Xe.setAttribute("nonce",n),Xe.setAttribute("type","text/css"),document.head.appendChild(Xe)),Xe.sheet&&(Xe.sheet.insertRule(`@media ${i} {body{ }}`,0),Ar.add(i));}catch(e){console.error(e);}}function qs(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}};}var Zs=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e);}static ɵfac=function(t){return new(t||i)();};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var Dr=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=y({type:i});static ɵinj=b({providers:[Zs]});}return i;})();var Ir=new f("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),kr=new f("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Qs=0,Bi=(()=>{class i{_ngZone=s(D);_defaultOptions=s(kr,{optional:!0});_liveElement;_document=s(z);_sanitizer=s(gn);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=s(Ir,{optional:!0});this._liveElement=e||this._createLiveElement();}announce(e,...t){let o=this._defaultOptions,r,a;return t.length===1&&typeof t[0]=="number"?a=t[0]:[r,a]=t,this.clear(),clearTimeout(this._previousTimeout),r||(r=o&&o.politeness?o.politeness:"polite"),a==null&&o&&(a=o.duration),this._liveElement.setAttribute("aria-live",r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(l=>this._currentResolve=l)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:Sr(this._liveElement,e,this._sanitizer),typeof a=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0;},100),this._currentPromise));}clear(){this._liveElement&&(this._liveElement.textContent="");}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0;}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),o=this._document.createElement("div");for(let r=0;r<t.length;r++)t[r].remove();return o.classList.add(e),o.classList.add("cdk-visually-hidden"),o.setAttribute("aria-atomic","true"),o.setAttribute("aria-live","polite"),o.id=`cdk-live-announcer-${Qs++}`,this._document.body.appendChild(o),o;}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let o=0;o<t.length;o++){let r=t[o],a=r.getAttribute("aria-owns");a?a.indexOf(e)===-1&&r.setAttribute("aria-owns",a+" "+e):r.setAttribute("aria-owns",e);}}static ɵfac=function(t){return new(t||i)();};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var Js=200,Fn=class{_letterKeyStream=new C();_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new C();selectedItem=this._selectedItem;constructor(n,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Js;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(t);}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete();}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n;}setItems(n){this._items=n;}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e));}isTyping(){return this._pressedLetters.length>0;}reset(){this._pressedLetters=[];}_setupKeyHandler(n){this._letterKeyStream.pipe(xe(e=>this._pressedLetters.push(e)),So(n),ae(()=>this._pressedLetters.length>0),K(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let o=(this._selectedItemIndex+t)%this._items.length,r=this._items[o];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break;}}this._pressedLetters=[];});}};function Ae(i,...n){return n.length?n.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey;}var Nn=class{_items;_activeItemIndex=ee(-1);_activeItem=ee(null);_wrap=!1;_typeaheadSubscription=de.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof fi?this._itemChangesSubscription=n.changes.subscribe(t=>this._itemsChanged(t.toArray())):We(n)&&(this._effectRef=Te(()=>this._itemsChanged(n()),{injector:e}));}tabOut=new C();change=new C();skipPredicate(n){return this._skipPredicateFn=n,this;}withWrap(n=!0){return this._wrap=n,this;}withVerticalOrientation(n=!0){return this._vertical=n,this;}withHorizontalOrientation(n){return this._horizontal=n,this;}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this;}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new Fn(e,{debounceInterval:typeof n=="number"?n:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t);}),this;}cancelTypeahead(){return this._typeahead?.reset(),this;}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this;}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this;}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex());}onKeydown(n){let e=n.keyCode,o=["altKey","ctrlKey","metaKey","shiftKey"].every(r=>!n[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&o){this.setNextItemActive();break;}else return;case 38:if(this._vertical&&o){this.setPreviousItemActive();break;}else return;case 39:if(this._horizontal&&o){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break;}else return;case 37:if(this._horizontal&&o){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break;}else return;case 36:if(this._homeAndEnd&&o){this.setFirstItemActive();break;}else return;case 35:if(this._homeAndEnd&&o){this.setLastItemActive();break;}else return;case 33:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break;}else return;case 34:if(this._pageUpAndDown.enabled&&o){let r=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(r<a?r:a-1,-1);break;}else return;default:(o||Ae(n,"shiftKey"))&&this._typeahead?.handleKey(n);return;}this._typeahead?.reset(),n.preventDefault();}get activeItemIndex(){return this._activeItemIndex();}get activeItem(){return this._activeItem();}isTyping(){return!!this._typeahead&&this._typeahead.isTyping();}setFirstItemActive(){this._setActiveItemByIndex(0,1);}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1);}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1);}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1);}updateActiveItem(n){let e=this._getItemsArray(),t=typeof n=="number"?n:e.indexOf(n),o=e[t];this._activeItem.set(o??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t);}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete();}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n);}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let o=(this._activeItemIndex()+n*t+e.length)%e.length,r=e[o];if(!this._skipPredicateFn(r)){this.setActiveItem(o);return;}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n);}_setActiveItemByIndex(n,e){let t=this._getItemsArray();if(t[n]){for(;this._skipPredicateFn(t[n]);)if(n+=e,!t[n])return;this.setActiveItem(n);}}_getItemsArray(){return We(this._items)?this._items():this._items instanceof fi?this._items.toArray():this._items;}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let t=n.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t));}}};var zt=class extends Nn{setActiveItem(n){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(n),this.activeItem&&this.activeItem.setActiveStyles();}};var Wi={},ce=class i{_appId=s(Po);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){return this._appId!=="ng"&&(n+=this._appId),Wi.hasOwnProperty(n)||(Wi[n]=0),`${n}${e?i._infix+"-":""}${Wi[n]++}`;}static ɵfac=function(e){return new(e||i)();};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});};var Tr=" ";function Fr(i,n,e){let t=Nr(i,n);e=e.trim(),!t.some(o=>o.trim()===e)&&(t.push(e),i.setAttribute(n,t.join(Tr)));}function Gi(i,n,e){let t=Nr(i,n);e=e.trim();let o=t.filter(r=>r!==e);o.length?i.setAttribute(n,o.join(Tr)):i.removeAttribute(n);}function Nr(i,n){return i.getAttribute(n)?.match(/\S+/g)??[];}var Ye;function Lr(){if(Ye==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return Ye=!1,Ye;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)Ye=!0;else{let i=Element.prototype.scrollTo;i?Ye=!/\{\s*\[native code\]\s*\}/.test(i.toString()):Ye=!1;}}return Ye;}function Hi(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha;}var _t,Vr=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function Ui(){if(_t)return _t;if(typeof document!="object"||!document)return _t=new Set(Vr),_t;let i=document.createElement("input");return _t=new Set(Vr.filter(n=>(i.setAttribute("type",n),i.type===n))),_t;}var el=new f("MATERIAL_ANIMATIONS"),Br=null;function $i(){return s(el,{optional:!0})?.animationsDisabled||s(rn,{optional:!0})==="NoopAnimations"?"di-disabled":(Br??=s(Vi).matchMedia("(prefers-reduced-motion)").matches,Br?"reduced-motion":"enabled");}function ve(){return $i()!=="enabled";}function Y(i){return i==null?"":typeof i=="string"?i:`${i}px`;}function Oe(i){return i!=null&&`${i}`!="false";}var ye=function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i;}(ye||{}),Ki=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=ye.HIDDEN;constructor(n,e,t,o=!1){this._renderer=n,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=o;}fadeOut(){this._renderer.fadeOutRipple(this);}},jr=gt({passive:!0,capture:!0}),Xi=class{_events=new Map();addHandler(n,e,t,o){let r=this._events.get(e);if(r){let a=r.get(t);a?a.add(o):r.set(t,new Set([o]));}else this._events.set(e,new Map([[t,new Set([o])]])),n.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,jr);});}removeHandler(n,e,t){let o=this._events.get(n);if(!o)return;let r=o.get(e);r&&(r.delete(t),r.size===0&&o.delete(e),o.size===0&&(this._events.delete(n),document.removeEventListener(n,this._delegateEventHandler,jr)));}_delegateEventHandler=n=>{let e=ie(n);e&&this._events.get(n.type)?.forEach((t,o)=>{(o===e||o.contains(e))&&t.forEach(r=>r.handleEvent(n));});};},jt={enterDuration:225,exitDuration:150},tl=800,Wr=gt({passive:!0,capture:!0}),Gr=["mousedown","touchstart"],Hr=["mouseup","mouseleave","touchend","touchcancel"],nl=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵcmp=v({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.mat-ripple {
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
`],encapsulation:2,changeDetection:0});}return i;})(),Wt=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map();_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Xi();constructor(n,e,t,o,r){this._target=n,this._ngZone=e,this._platform=o,o.isBrowser&&(this._containerElement=fe(t)),r&&r.get(be).load(nl);}fadeInRipple(n,e,t={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=w(w({},jt),t.animation);t.centered&&(n=o.left+o.width/2,e=o.top+o.height/2);let a=t.radius||il(n,e,o),l=n-o.left,c=e-o.top,d=r.enterDuration,m=document.createElement("div");m.classList.add("mat-ripple-element"),m.style.left=`${l-a}px`,m.style.top=`${c-a}px`,m.style.height=`${a*2}px`,m.style.width=`${a*2}px`,t.color!=null&&(m.style.backgroundColor=t.color),m.style.transitionDuration=`${d}ms`,this._containerElement.appendChild(m);let x=window.getComputedStyle(m),B=x.transitionProperty,H=x.transitionDuration,U=B==="none"||H==="0s"||H==="0s, 0s"||o.width===0&&o.height===0,G=new Ki(this,m,t,U);m.style.transform="scale3d(1, 1, 1)",G.state=ye.FADING_IN,t.persistent||(this._mostRecentTransientRipple=G);let $=null;return!U&&(d||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let yo=()=>{$&&($.fallbackTimer=null),clearTimeout(xo),this._finishRippleTransition(G);},mi=()=>this._destroyRipple(G),xo=setTimeout(mi,d+100);m.addEventListener("transitionend",yo),m.addEventListener("transitioncancel",mi),$={onTransitionEnd:yo,onTransitionCancel:mi,fallbackTimer:xo};}),this._activeRipples.set(G,$),(U||!d)&&this._finishRippleTransition(G),G;}fadeOutRipple(n){if(n.state===ye.FADING_OUT||n.state===ye.HIDDEN)return;let e=n.element,t=w(w({},jt),n.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",n.state=ye.FADING_OUT,(n._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(n);}fadeOutAll(){this._getActiveRipples().forEach(n=>n.fadeOut());}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(n=>{n.config.persistent||n.fadeOut();});}setupTriggerEvents(n){let e=fe(n);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Gr.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this);}));}handleEvent(n){n.type==="mousedown"?this._onMousedown(n):n.type==="touchstart"?this._onTouchStart(n):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Hr.forEach(e=>{this._triggerElement.addEventListener(e,this,Wr);});}),this._pointerUpEventsRegistered=!0);}_finishRippleTransition(n){n.state===ye.FADING_IN?this._startFadeOutTransition(n):n.state===ye.FADING_OUT&&this._destroyRipple(n);}_startFadeOutTransition(n){let e=n===this._mostRecentTransientRipple,{persistent:t}=n.config;n.state=ye.VISIBLE,!t&&(!e||!this._isPointerDown)&&n.fadeOut();}_destroyRipple(n){let e=this._activeRipples.get(n)??null;this._activeRipples.delete(n),this._activeRipples.size||(this._containerRect=null),n===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),n.state=ye.HIDDEN,e!==null&&(n.element.removeEventListener("transitionend",e.onTransitionEnd),n.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),n.element.remove();}_onMousedown(n){let e=Nt(n),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+tl;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(n.clientX,n.clientY,this._target.rippleConfig));}_onTouchStart(n){if(!this._target.rippleDisabled&&!Lt(n)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=n.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig);}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(n=>{let e=n.state===ye.VISIBLE||n.config.terminateOnPointerUp&&n.state===ye.FADING_IN;!n.config.persistent&&e&&n.fadeOut();}));}_getActiveRipples(){return Array.from(this._activeRipples.keys());}_removeTriggerEvents(){let n=this._triggerElement;n&&(Gr.forEach(e=>i._eventManager.removeHandler(e,n,this)),this._pointerUpEventsRegistered&&(Hr.forEach(e=>n.removeEventListener(e,this,Wr)),this._pointerUpEventsRegistered=!1));}};function il(i,n,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),o=Math.max(Math.abs(n-e.top),Math.abs(n-e.bottom));return Math.sqrt(t*t+o*o);}var Yi=new f("mat-ripple-global-options"),Ur=(()=>{class i{_elementRef=s(M);_animationsDisabled=ve();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled;}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled();}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement;}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled();}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=s(D),t=s(W),o=s(Yi,{optional:!0}),r=s(q);this._globalOptions=o||{},this._rippleRenderer=new Wt(this,e,this._elementRef,t,r);}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled();}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents();}fadeOutAll(){this._rippleRenderer.fadeOutAll();}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent();}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:w(w(w({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp};}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled;}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger);}launch(e,t=0,o){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,w(w({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,w(w({},this.rippleConfig),e));}static ɵfac=function(t){return new(t||i)();};static ɵdir=A({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,o){t&2&&E("mat-ripple-unbounded",o.unbounded);},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]});}return i;})();var ol={capture:!0},rl=["focus","mousedown","mouseenter","touchstart"],qi="mat-ripple-loader-uninitialized",Zi="mat-ripple-loader-class-name",$r="mat-ripple-loader-centered",Ln="mat-ripple-loader-disabled",Kr=(()=>{class i{_document=s(z);_animationsDisabled=ve();_globalRippleOptions=s(Yi,{optional:!0});_platform=s(W);_ngZone=s(D);_injector=s(q);_eventCleanups;_hosts=new Map();constructor(){let e=s(he).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>rl.map(t=>e.listen(this._document,t,this._onInteraction,ol)));}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t());}configureRipple(e,t){e.setAttribute(qi,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Zi))&&e.setAttribute(Zi,t.className||""),t.centered&&e.setAttribute($r,""),t.disabled&&e.setAttribute(Ln,"");}setDisabled(e,t){let o=this._hosts.get(e);o?(o.target.rippleDisabled=t,!t&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(e))):t?e.setAttribute(Ln,""):e.removeAttribute(Ln);}_onInteraction=e=>{let t=ie(e);if(t instanceof HTMLElement){let o=t.closest(`[${qi}="${this._globalRippleOptions?.namespace??""}"]`);o&&this._createRipple(o);}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Zi)),e.append(t);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??jt.enterDuration,a=this._animationsDisabled?0:o?.animation?.exitDuration??jt.exitDuration,l={rippleDisabled:this._animationsDisabled||o?.disabled||e.hasAttribute(Ln),rippleConfig:{centered:e.hasAttribute($r),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:a}}},c=new Wt(l,this._ngZone,t,this._platform,this._injector),d=!l.rippleDisabled;d&&c.setupTriggerEvents(e),this._hosts.set(e,{target:l,renderer:c,hasSetUpEvents:d}),e.removeAttribute(qi);}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e));}static ɵfac=function(t){return new(t||i)();};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var Vn=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵcmp=v({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,o){},styles:[`.mat-focus-indicator {
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
`],encapsulation:2,changeDetection:0});}return i;})();var al=new f("MAT_BUTTON_CONFIG");function Xr(i){return i==null?void 0:Ie(i);}var Yr=(()=>{class i{_elementRef=s(M);_ngZone=s(D);_animationsDisabled=ve();_config=s(al,{optional:!0});_focusMonitor=s(Fi);_cleanupClick;_renderer=s(le);_rippleLoader=s(Kr);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple;}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled();}_disableRipple=!1;get disabled(){return this._disabled;}set disabled(e){this._disabled=e,this._updateRippleDisabled();}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e;}constructor(){s(be).load(Vn);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"});}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor();}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement);}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t);}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null;}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0;}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled);}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex;}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation());}));}static ɵfac=function(t){return new(t||i)();};static ɵdir=A({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,o){t&2&&(L("disabled",o._getDisabledAttribute())("aria-disabled",o._getAriaDisabled())("tabindex",o._getTabIndex()),Me(o.color?"mat-"+o.color:""),E("mat-mdc-button-disabled",o.disabled)("mat-mdc-button-disabled-interactive",o.disabledInteractive)("mat-unthemed",!o.color)("_mat-animation-noopable",o._animationsDisabled));},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",O],disabled:[2,"disabled","disabled",O],ariaDisabled:[2,"aria-disabled","ariaDisabled",O],disabledInteractive:[2,"disabledInteractive","disabledInteractive",O],tabIndex:[2,"tabIndex","tabIndex",Xr],_tabindex:[2,"tabindex","_tabindex",Xr]}});}return i;})();var sl=new f("cdk-dir-doc",{providedIn:"root",factory:()=>s(z)}),ll=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function qr(i){let n=i?.toLowerCase()||"";return n==="auto"&&typeof navigator<"u"&&navigator?.language?ll.test(navigator.language)?"rtl":"ltr":n==="rtl"?"rtl":"ltr";}var je=(()=>{class i{get value(){return this.valueSignal();}valueSignal=ee("ltr");change=new N();constructor(){let e=s(sl,{optional:!0});if(e){let t=e.body?e.body.dir:null,o=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(qr(t||o||"ltr"));}}ngOnDestroy(){this.change.complete();}static ɵfac=function(t){return new(t||i)();};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var F=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=y({type:i});static ɵinj=b({});}return i;})();var Bn=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=y({type:i});static ɵinj=b({imports:[F]});}return i;})();var dl=["matButton",""],cl=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],ml=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Zr=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),zn=(()=>{class i extends Yr{get appearance(){return this._appearance;}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text");}_appearance=null;constructor(){super();let e=ul(this._elementRef.nativeElement);e&&this.setAppearance(e);}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,o=this._appearance?Zr.get(this._appearance):null,r=Zr.get(e);o&&t.remove(...o),t.add(...r),this._appearance=e;}static ɵfac=function(t){return new(t||i)();};static ɵcmp=v({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[pe],attrs:dl,ngContentSelectors:ml,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,o){t&1&&(ne(cl),Le(0,"span",0),T(1),Ge(2,"span",1),T(3,1),He(),T(4,2),Le(5,"span",2)(6,"span",3)),t&2&&E("mdc-button__ripple",!o._isFab)("mdc-fab__ripple",o._isFab);},styles:[`.mat-mdc-button-base {
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
`],encapsulation:2,changeDetection:0});}return i;})();function ul(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null;}var jn=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=y({type:i});static ɵinj=b({imports:[Bn,F]});}return i;})();var hl=["*"];var pl=new f("MAT_CARD_CONFIG"),Jr=(()=>{class i{appearance;constructor(){let e=s(pl,{optional:!0});this.appearance=e?.appearance||"raised";}static ɵfac=function(t){return new(t||i)();};static ɵcmp=v({type:i,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:8,hostBindings:function(t,o){t&2&&E("mat-mdc-card-outlined",o.appearance==="outlined")("mdc-card--outlined",o.appearance==="outlined")("mat-mdc-card-filled",o.appearance==="filled")("mdc-card--filled",o.appearance==="filled");},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:hl,decls:1,vars:0,template:function(t,o){t&1&&(ne(),T(0));},styles:[`.mat-mdc-card {
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
`],encapsulation:2,changeDetection:0});}return i;})();var ea=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=y({type:i});static ɵinj=b({imports:[F]});}return i;})();var ta=(()=>{class i{get vertical(){return this._vertical;}set vertical(e){this._vertical=Oe(e);}_vertical=!1;get inset(){return this._inset;}set inset(e){this._inset=Oe(e);}_inset=!1;static ɵfac=function(t){return new(t||i)();};static ɵcmp=v({type:i,selectors:[["mat-divider"]],hostAttrs:["role","separator",1,"mat-divider"],hostVars:7,hostBindings:function(t,o){t&2&&(L("aria-orientation",o.vertical?"vertical":"horizontal"),E("mat-divider-vertical",o.vertical)("mat-divider-horizontal",!o.vertical)("mat-divider-inset",o.inset));},inputs:{vertical:"vertical",inset:"inset"},decls:0,vars:0,template:function(t,o){},styles:[`.mat-divider {
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
`],encapsulation:2,changeDetection:0});}return i;})(),na=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=y({type:i});static ɵinj=b({imports:[F]});}return i;})();var Qi=class{_box;_destroyed=new C();_resizeSubject=new C();_resizeObserver;_elementObservables=new Map();constructor(n){this._box=n,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)));}observe(n){return this._elementObservables.has(n)||this._elementObservables.set(n,new et(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(n,{box:this._box}),()=>{this._resizeObserver?.unobserve(n),t.unsubscribe(),this._elementObservables.delete(n);};}).pipe(ae(e=>e.some(t=>t.target===n)),De({bufferSize:1,refCount:!0}),se(this._destroyed))),this._elementObservables.get(n);}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear();}},ia=(()=>{class i{_cleanupErrorListener;_observers=new Map();_ngZone=s(D);constructor(){typeof ResizeObserver<"u";}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.();}observe(e,t){let o=t?.box||"content-box";return this._observers.has(o)||this._observers.set(o,new Qi(o)),this._observers.get(o).observe(e);}static ɵfac=function(t){return new(t||i)();};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var _l=["notch"],bl=["matFormFieldNotchedOutline",""],vl=["*"],oa=["iconPrefixContainer"],ra=["textPrefixContainer"],aa=["iconSuffixContainer"],sa=["textSuffixContainer"],yl=["textField"],xl=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Cl=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function wl(i,n){i&1&&X(0,"span",21);}function Ml(i,n){if(i&1&&(h(0,"label",20),T(1,1),P(2,wl,1,0,"span",21),u()),i&2){let e=S(2);j("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),L("for",e._control.disableAutomaticLabeling?null:e._control.id),p(2),R(!e.hideRequiredMarker&&e._control.required?2:-1);}}function El(i,n){if(i&1&&P(0,Ml,3,5,"label",20),i&2){let e=S();R(e._hasFloatingLabel()?0:-1);}}function Sl(i,n){i&1&&X(0,"div",7);}function Al(i,n){}function Dl(i,n){if(i&1&&Ne(0,Al,0,0,"ng-template",13),i&2){S(2);let e=Ue(1);j("ngTemplateOutlet",e);}}function Il(i,n){if(i&1&&(h(0,"div",9),P(1,Dl,1,1,null,13),u()),i&2){let e=S();j("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),p(),R(e._forceDisplayInfixLabel()?-1:1);}}function kl(i,n){i&1&&(h(0,"div",10,2),T(2,2),u());}function Ol(i,n){i&1&&(h(0,"div",11,3),T(2,3),u());}function Pl(i,n){}function Rl(i,n){if(i&1&&Ne(0,Pl,0,0,"ng-template",13),i&2){S();let e=Ue(1);j("ngTemplateOutlet",e);}}function Tl(i,n){i&1&&(h(0,"div",14,4),T(2,4),u());}function Fl(i,n){i&1&&(h(0,"div",15,5),T(2,5),u());}function Nl(i,n){i&1&&X(0,"div",16);}function Ll(i,n){i&1&&(h(0,"div",18),T(1,6),u());}function Vl(i,n){if(i&1&&(h(0,"mat-hint",22),J(1),u()),i&2){let e=S(2);j("id",e._hintLabelId),p(),oe(e.hintLabel);}}function Bl(i,n){if(i&1&&(h(0,"div",19),P(1,Vl,2,2,"mat-hint",22),T(2,7),X(3,"div",23),T(4,8),u()),i&2){let e=S();p(),R(e.hintLabel?1:-1);}}var qe=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵdir=A({type:i,selectors:[["mat-label"]]});}return i;})(),zl=new f("MatError");var Ji=(()=>{class i{align="start";id=s(ce).getId("mat-mdc-hint-");static ɵfac=function(t){return new(t||i)();};static ɵdir=A({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,o){t&2&&(ct("id",o.id),L("align",null),E("mat-mdc-form-field-hint-end",o.align==="end"));},inputs:{align:"align",id:"id"}});}return i;})(),jl=new f("MatPrefix");var Wl=new f("MatSuffix");var pa=new f("FloatingLabelParent"),la=(()=>{class i{_elementRef=s(M);get floating(){return this._floating;}set floating(e){this._floating=e,this.monitorResize&&this._handleResize();}_floating=!1;get monitorResize(){return this._monitorResize;}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe();}_monitorResize=!1;_resizeObserver=s(ia);_ngZone=s(D);_parent=s(pa);_resizeSubscription=new de();constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe();}getWidth(){return Gl(this._elementRef.nativeElement);}get element(){return this._elementRef.nativeElement;}_handleResize(){setTimeout(()=>this._parent._handleLabelResized());}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize());});}static ɵfac=function(t){return new(t||i)();};static ɵdir=A({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,o){t&2&&E("mdc-floating-label--float-above",o.floating);},inputs:{floating:"floating",monitorResize:"monitorResize"}});}return i;})();function Gl(i){let n=i;if(n.offsetParent!==null)return n.scrollWidth;let e=n.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t;}var da="mdc-line-ripple--active",Wn="mdc-line-ripple--deactivating",ca=(()=>{class i{_elementRef=s(M);_cleanupTransitionEnd;constructor(){let e=s(D),t=s(le);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd);});}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Wn),e.add(da);}deactivate(){this._elementRef.nativeElement.classList.add(Wn);}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,o=t.contains(Wn);e.propertyName==="opacity"&&o&&t.remove(da,Wn);};ngOnDestroy(){this._cleanupTransitionEnd();}static ɵfac=function(t){return new(t||i)();};static ɵdir=A({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]});}return i;})(),ma=(()=>{class i{_elementRef=s(M);_ngZone=s(D);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="");}))):e.classList.add("mdc-notched-outline--no-label");}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`;}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`);}static ɵfac=function(t){return new(t||i)();};static ɵcmp=v({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,o){if(t&1&&_e(_l,5),t&2){let r;I(r=k())&&(o._notch=r.first);}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,o){t&2&&E("mdc-notched-outline--notched",o.open);},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:bl,ngContentSelectors:vl,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,o){t&1&&(ne(),Le(0,"div",1),Ge(1,"div",2,0),T(3),He(),Le(4,"div",3));},encapsulation:2,changeDetection:0});}return i;})(),Gt=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static ɵfac=function(t){return new(t||i)();};static ɵdir=A({type:i});}return i;})();var Ht=new f("MatFormField"),Hl=new f("MAT_FORM_FIELD_DEFAULT_OPTIONS"),ua="fill",Ul="auto",ha="fixed",$l="translateY(-50%)",bt=(()=>{class i{_elementRef=s(M);_changeDetectorRef=s(Be);_platform=s(W);_idGenerator=s(ce);_ngZone=s(D);_defaults=s(Hl,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=At("iconPrefixContainer");_textPrefixContainerSignal=At("textPrefixContainer");_iconSuffixContainerSignal=At("iconSuffixContainer");_textSuffixContainerSignal=At("textSuffixContainer");_prefixSuffixContainers=Se(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=Wo(qe);get hideRequiredMarker(){return this._hideRequiredMarker;}set hideRequiredMarker(e){this._hideRequiredMarker=Oe(e);}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Ul;}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck());}_floatLabel;get appearance(){return this._appearanceSignal();}set appearance(e){let t=e||this._defaults?.appearance||ua;this._appearanceSignal.set(t);}_appearanceSignal=ee(ua);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||ha;}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||ha;}_subscriptSizing=null;get hintLabel(){return this._hintLabel;}set hintLabel(e){this._hintLabel=e,this._processHints();}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl;}set _control(e){this._explicitFormFieldControl=e;}_destroyed=new C();_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=ve();constructor(){let e=this._defaults,t=s(je);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),Te(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset();}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled");},300);}),this._changeDetectorRef.detectChanges();}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix();}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck();}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete();}getLabelId=Se(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef;}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always");}_initializeControl(e){let t=this._control,o="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(o+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(o+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck();}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(me([void 0,void 0]),K(()=>[t.errorState,t.userAriaDescribedBy]),pi(),ae(([[r,a],[l,c]])=>r!==l||a!==c)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(se(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()));}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText);}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),nt(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck();});}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck();}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck();}),this._validateHints(),this._syncDescribedByIds();}_assertFormFieldControl(){this._control;}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e);}_syncOutlineLabelOffset(){Go({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset());});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"});}return this._getOutlinedLabelOffset();},write:e=>this._writeOutlinedLabelStyles(e())});}_shouldAlwaysFloat(){return this.floatLabel==="always";}_hasOutline(){return this.appearance==="outline";}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat();}_hasFloatingLabel=Se(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1;}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e];}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint";}_handleLabelResized(){this._refreshOutlineNotchWidth();}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth());}_processHints(){this._validateHints(),this._syncDescribedByIds();}_validateHints(){this._hintChildren;}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let r=this._hintChildren?this._hintChildren.find(l=>l.align==="start"):null,a=this._hintChildren?this._hintChildren.find(l=>l.align==="end"):null;r?e.push(r.id):this._hintLabel&&e.push(this._hintLabelId),a&&e.push(a.id);}else this._errorChildren&&e.push(...this._errorChildren.map(r=>r.id));let t=this._control.describedByIds,o;if(t){let r=this._describedByIds||e;o=e.concat(t.filter(a=>a&&!r.includes(a)));}else o=e;this._control.setDescribedByIds(o),this._describedByIds=e;}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,o=this._iconSuffixContainer?.nativeElement,r=this._textSuffixContainer?.nativeElement,a=e?.getBoundingClientRect().width??0,l=t?.getBoundingClientRect().width??0,c=o?.getBoundingClientRect().width??0,d=r?.getBoundingClientRect().width??0,m=this._currentDirection==="rtl"?"-1":"1",x=`${a+l}px`,H=`calc(${m} * (${x} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,U=`var(--mat-mdc-form-field-label-transform, ${$l} translateX(${H}))`,G=a+l+c+d;return[U,G];}_writeOutlinedLabelStyles(e){if(e!==null){let[t,o]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),o!==null&&this._notchedOutline?._setMaxWidth(o);}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e;}return document.documentElement.contains(e);}static ɵfac=function(t){return new(t||i)();};static ɵcmp=v({type:i,selectors:[["mat-form-field"]],contentQueries:function(t,o,r){if(t&1&&(Vo(r,o._labelChild,qe,5),mt(r,Gt,5)(r,jl,5)(r,Wl,5)(r,zl,5)(r,Ji,5)),t&2){gi();let a;I(a=k())&&(o._formFieldControl=a.first),I(a=k())&&(o._prefixChildren=a),I(a=k())&&(o._suffixChildren=a),I(a=k())&&(o._errorChildren=a),I(a=k())&&(o._hintChildren=a);}},viewQuery:function(t,o){if(t&1&&(Bo(o._iconPrefixContainerSignal,oa,5)(o._textPrefixContainerSignal,ra,5)(o._iconSuffixContainerSignal,aa,5)(o._textSuffixContainerSignal,sa,5),_e(yl,5)(oa,5)(ra,5)(aa,5)(sa,5)(la,5)(ma,5)(ca,5)),t&2){gi(4);let r;I(r=k())&&(o._textField=r.first),I(r=k())&&(o._iconPrefixContainer=r.first),I(r=k())&&(o._textPrefixContainer=r.first),I(r=k())&&(o._iconSuffixContainer=r.first),I(r=k())&&(o._textSuffixContainer=r.first),I(r=k())&&(o._floatingLabel=r.first),I(r=k())&&(o._notchedOutline=r.first),I(r=k())&&(o._lineRipple=r.first);}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,o){t&2&&E("mat-mdc-form-field-label-always-float",o._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",o._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",o._hasIconSuffix)("mat-form-field-invalid",o._control.errorState)("mat-form-field-disabled",o._control.disabled)("mat-form-field-autofilled",o._control.autofilled)("mat-form-field-appearance-fill",o.appearance=="fill")("mat-form-field-appearance-outline",o.appearance=="outline")("mat-form-field-hide-placeholder",o._hasFloatingLabel()&&!o._shouldLabelFloat())("mat-primary",o.color!=="accent"&&o.color!=="warn")("mat-accent",o.color==="accent")("mat-warn",o.color==="warn")("ng-untouched",o._shouldForward("untouched"))("ng-touched",o._shouldForward("touched"))("ng-pristine",o._shouldForward("pristine"))("ng-dirty",o._shouldForward("dirty"))("ng-valid",o._shouldForward("valid"))("ng-invalid",o._shouldForward("invalid"))("ng-pending",o._shouldForward("pending"));},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[re([{provide:Ht,useExisting:i},{provide:pa,useExisting:i}])],ngContentSelectors:Cl,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,o){if(t&1&&(ne(xl),Ne(0,El,1,1,"ng-template",null,0,mn),h(2,"div",6,1),V("click",function(a){return o._control.onContainerClick(a);}),P(4,Sl,1,0,"div",7),h(5,"div",8),P(6,Il,2,2,"div",9),P(7,kl,3,0,"div",10),P(8,Ol,3,0,"div",11),h(9,"div",12),P(10,Rl,1,1,null,13),T(11),u(),P(12,Tl,3,0,"div",14),P(13,Fl,3,0,"div",15),u(),P(14,Nl,1,0,"div",16),u(),h(15,"div",17),P(16,Ll,2,0,"div",18)(17,Bl,5,1,"div",19),u()),t&2){let r;p(2),E("mdc-text-field--filled",!o._hasOutline())("mdc-text-field--outlined",o._hasOutline())("mdc-text-field--no-label",!o._hasFloatingLabel())("mdc-text-field--disabled",o._control.disabled)("mdc-text-field--invalid",o._control.errorState),p(2),R(!o._hasOutline()&&!o._control.disabled?4:-1),p(2),R(o._hasOutline()?6:-1),p(),R(o._hasIconPrefix?7:-1),p(),R(o._hasTextPrefix?8:-1),p(2),R(!o._hasOutline()||o._forceDisplayInfixLabel()?10:-1),p(2),R(o._hasTextSuffix?12:-1),p(),R(o._hasIconSuffix?13:-1),p(),R(o._hasOutline()?-1:14),p(),E("mat-mdc-form-field-subscript-dynamic-size",o.subscriptSizing==="dynamic");let a=o._getSubscriptMessageType();p(),R((r=a)==="error"?16:r==="hint"?17:-1);}},dependencies:[la,ma,pn,ca,Ji],styles:[`.mdc-text-field {
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
`],encapsulation:2,changeDetection:0});}return i;})();var Pe=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=y({type:i});static ɵinj=b({imports:[Dr,bt,F]});}return i;})();function ga(i){return Error(`Unable to find icon with the name "${i}"`);}function Kl(){return Error("Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.");}function _a(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`);}function ba(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`);}var Re=class{url;svgText;options;svgElement=null;constructor(n,e,t){this.url=n,this.svgText=e,this.options=t;}},ya=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map();_iconSetConfigs=new Map();_cachedIconsByUrl=new Map();_inProgressUrlFetches=new Map();_fontCssClassesByAlias=new Map();_resolvers=[];_defaultFontSetClass=["material-icons","mat-ligature-font"];constructor(e,t,o,r){this._httpClient=e,this._sanitizer=t,this._errorHandler=r,this._document=o;}addSvgIcon(e,t,o){return this.addSvgIconInNamespace("",e,t,o);}addSvgIconLiteral(e,t,o){return this.addSvgIconLiteralInNamespace("",e,t,o);}addSvgIconInNamespace(e,t,o,r){return this._addSvgIconConfig(e,t,new Re(o,null,r));}addSvgIconResolver(e){return this._resolvers.push(e),this;}addSvgIconLiteralInNamespace(e,t,o,r){let a=this._sanitizer.sanitize(Fe.HTML,o);if(!a)throw ba(o);let l=Ke(a);return this._addSvgIconConfig(e,t,new Re("",l,r));}addSvgIconSet(e,t){return this.addSvgIconSetInNamespace("",e,t);}addSvgIconSetLiteral(e,t){return this.addSvgIconSetLiteralInNamespace("",e,t);}addSvgIconSetInNamespace(e,t,o){return this._addSvgIconSetConfig(e,new Re(t,null,o));}addSvgIconSetLiteralInNamespace(e,t,o){let r=this._sanitizer.sanitize(Fe.HTML,t);if(!r)throw ba(t);let a=Ke(r);return this._addSvgIconSetConfig(e,new Re("",a,o));}registerFontClassAlias(e,t=e){return this._fontCssClassesByAlias.set(e,t),this;}classNameForFontAlias(e){return this._fontCssClassesByAlias.get(e)||e;}setDefaultFontSetClass(...e){return this._defaultFontSetClass=e,this;}getDefaultFontSetClass(){return this._defaultFontSetClass;}getSvgIconFromUrl(e){let t=this._sanitizer.sanitize(Fe.RESOURCE_URL,e);if(!t)throw _a(e);let o=this._cachedIconsByUrl.get(t);return o?ge(Gn(o)):this._loadSvgIconFromConfig(new Re(e,null)).pipe(xe(r=>this._cachedIconsByUrl.set(t,r)),K(r=>Gn(r)));}getNamedSvgIcon(e,t=""){let o=va(t,e),r=this._svgIconConfigs.get(o);if(r)return this._getSvgFromConfig(r);if(r=this._getIconConfigFromResolvers(t,e),r)return this._svgIconConfigs.set(o,r),this._getSvgFromConfig(r);let a=this._iconSetConfigs.get(t);return a?this._getSvgFromIconSetConfigs(e,a):Mo(ga(o));}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear();}_getSvgFromConfig(e){return e.svgText?ge(Gn(this._svgElementFromConfig(e))):this._loadSvgIconFromConfig(e).pipe(K(t=>Gn(t)));}_getSvgFromIconSetConfigs(e,t){let o=this._extractIconWithNameFromAnySet(e,t);if(o)return ge(o);let r=t.filter(a=>!a.svgText).map(a=>this._loadSvgIconSetFromConfig(a).pipe(en(l=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(Fe.RESOURCE_URL,a.url)} failed: ${l.message}`;return this._errorHandler.handleError(new Error(d)),ge(null);})));return tt(r).pipe(K(()=>{let a=this._extractIconWithNameFromAnySet(e,t);if(!a)throw ga(e);return a;}));}_extractIconWithNameFromAnySet(e,t){for(let o=t.length-1;o>=0;o--){let r=t[o];if(r.svgText&&r.svgText.toString().indexOf(e)>-1){let a=this._svgElementFromConfig(r),l=this._extractSvgIconFromSet(a,e,r.options);if(l)return l;}}return null;}_loadSvgIconFromConfig(e){return this._fetchIcon(e).pipe(xe(t=>e.svgText=t),K(()=>this._svgElementFromConfig(e)));}_loadSvgIconSetFromConfig(e){return e.svgText?ge(null):this._fetchIcon(e).pipe(xe(t=>e.svgText=t));}_extractSvgIconFromSet(e,t,o){let r=e.querySelector(`[id="${t}"]`);if(!r)return null;let a=r.cloneNode(!0);if(a.removeAttribute("id"),a.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(a,o);if(a.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(a),o);let l=this._svgElementFromString(Ke("<svg></svg>"));return l.appendChild(a),this._setSvgAttributes(l,o);}_svgElementFromString(e){let t=this._document.createElement("DIV");t.innerHTML=e;let o=t.querySelector("svg");if(!o)throw Error("<svg> tag not found");return o;}_toSvgElement(e){let t=this._svgElementFromString(Ke("<svg></svg>")),o=e.attributes;for(let r=0;r<o.length;r++){let{name:a,value:l}=o[r];a!=="id"&&t.setAttribute(a,l);}for(let r=0;r<e.childNodes.length;r++)e.childNodes[r].nodeType===this._document.ELEMENT_NODE&&t.appendChild(e.childNodes[r].cloneNode(!0));return t;}_setSvgAttributes(e,t){return e.setAttribute("fit",""),e.setAttribute("height","100%"),e.setAttribute("width","100%"),e.setAttribute("preserveAspectRatio","xMidYMid meet"),e.setAttribute("focusable","false"),t&&t.viewBox&&e.setAttribute("viewBox",t.viewBox),e;}_fetchIcon(e){let{url:t,options:o}=e,r=o?.withCredentials??!1;if(!this._httpClient)throw Kl();if(t==null)throw Error(`Cannot fetch icon from URL "${t}".`);let a=this._sanitizer.sanitize(Fe.RESOURCE_URL,t);if(!a)throw _a(t);let l=this._inProgressUrlFetches.get(a);if(l)return l;let c=this._httpClient.get(a,{responseType:"text",withCredentials:r}).pipe(K(d=>Ke(d)),Ao(()=>this._inProgressUrlFetches.delete(a)),Do());return this._inProgressUrlFetches.set(a,c),c;}_addSvgIconConfig(e,t,o){return this._svgIconConfigs.set(va(e,t),o),this;}_addSvgIconSetConfig(e,t){let o=this._iconSetConfigs.get(e);return o?o.push(t):this._iconSetConfigs.set(e,[t]),this;}_svgElementFromConfig(e){if(!e.svgElement){let t=this._svgElementFromString(e.svgText);this._setSvgAttributes(t,e.options),e.svgElement=t;}return e.svgElement;}_getIconConfigFromResolvers(e,t){for(let o=0;o<this._resolvers.length;o++){let r=this._resolvers[o](t,e);if(r)return Xl(r)?new Re(r.url,null,r.options):new Re(r,null);}}static ɵfac=function(t){return new(t||i)(Mt(fn,8),Mt(gn),Mt(z,8),Mt(on));};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();function Gn(i){return i.cloneNode(!0);}function va(i,n){return i+":"+n;}function Xl(i){return!!(i.url&&i.options);}var Yl=["*"],ql=new f("MAT_ICON_DEFAULT_OPTIONS"),Zl=new f("mat-icon-location",{providedIn:"root",factory:()=>{let i=s(z),n=i?i.location:null;return{getPathname:()=>n?n.pathname+n.search:""};}}),xa=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],Ql=xa.map(i=>`[${i}]`).join(", "),Jl=/^url\(['"]?#(.*?)['"]?\)$/,Ca=(()=>{class i{_elementRef=s(M);_iconRegistry=s(ya);_location=s(Zl);_errorHandler=s(on);_defaultColor;get color(){return this._color||this._defaultColor;}set color(e){this._color=e;}_color;inline=!1;get svgIcon(){return this._svgIcon;}set svgIcon(e){e!==this._svgIcon&&(e?this._updateSvgIcon(e):this._svgIcon&&this._clearSvgElement(),this._svgIcon=e);}_svgIcon;get fontSet(){return this._fontSet;}set fontSet(e){let t=this._cleanupFontValue(e);t!==this._fontSet&&(this._fontSet=t,this._updateFontIconClasses());}_fontSet;get fontIcon(){return this._fontIcon;}set fontIcon(e){let t=this._cleanupFontValue(e);t!==this._fontIcon&&(this._fontIcon=t,this._updateFontIconClasses());}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=de.EMPTY;constructor(){let e=s(new un("aria-hidden"),{optional:!0}),t=s(ql,{optional:!0});t&&(t.color&&(this.color=this._defaultColor=t.color),t.fontSet&&(this.fontSet=t.fontSet)),e||this._elementRef.nativeElement.setAttribute("aria-hidden","true");}_splitIconName(e){if(!e)return["",""];let t=e.split(":");switch(t.length){case 1:return["",t[0]];case 2:return t;default:throw Error(`Invalid icon name: "${e}"`);}}ngOnInit(){this._updateFontIconClasses();}ngAfterViewChecked(){let e=this._elementsWithExternalReferences;if(e&&e.size){let t=this._location.getPathname();t!==this._previousPath&&(this._previousPath=t,this._prependPathToReferences(t));}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();}_usingFontIcon(){return!this.svgIcon;}_setSvgElement(e){this._clearSvgElement();let t=this._location.getPathname();this._previousPath=t,this._cacheChildrenWithExternalReferences(e),this._prependPathToReferences(t),this._elementRef.nativeElement.appendChild(e);}_clearSvgElement(){let e=this._elementRef.nativeElement,t=e.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();t--;){let o=e.childNodes[t];(o.nodeType!==1||o.nodeName.toLowerCase()==="svg")&&o.remove();}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let e=this._elementRef.nativeElement,t=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(o=>o.length>0);this._previousFontSetClass.forEach(o=>e.classList.remove(o)),t.forEach(o=>e.classList.add(o)),this._previousFontSetClass=t,this.fontIcon!==this._previousFontIconClass&&!t.includes("mat-ligature-font")&&(this._previousFontIconClass&&e.classList.remove(this._previousFontIconClass),this.fontIcon&&e.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon);}_cleanupFontValue(e){return typeof e=="string"?e.trim().split(" ")[0]:e;}_prependPathToReferences(e){let t=this._elementsWithExternalReferences;t&&t.forEach((o,r)=>{o.forEach(a=>{r.setAttribute(a.name,`url('${e}#${a.value}')`);});});}_cacheChildrenWithExternalReferences(e){let t=e.querySelectorAll(Ql),o=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map();for(let r=0;r<t.length;r++)xa.forEach(a=>{let l=t[r],c=l.getAttribute(a),d=c?c.match(Jl):null;if(d){let m=o.get(l);m||(m=[],o.set(l,m)),m.push({name:a,value:d[1]});}});}_updateSvgIcon(e){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),e){let[t,o]=this._splitIconName(e);t&&(this._svgNamespace=t),o&&(this._svgName=o),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(o,t).pipe(tn(1)).subscribe(r=>this._setSvgElement(r),r=>{let a=`Error retrieving icon ${t}:${o}! ${r.message}`;this._errorHandler.handleError(new Error(a));});}}static ɵfac=function(t){return new(t||i)();};static ɵcmp=v({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(t,o){t&2&&(L("data-mat-icon-type",o._usingFontIcon()?"font":"svg")("data-mat-icon-name",o._svgName||o.fontIcon)("data-mat-icon-namespace",o._svgNamespace||o.fontSet)("fontIcon",o._usingFontIcon()?o.fontIcon:null),Me(o.color?"mat-"+o.color:""),E("mat-icon-inline",o.inline)("mat-icon-no-color",o.color!=="primary"&&o.color!=="accent"&&o.color!=="warn"));},inputs:{color:"color",inline:[2,"inline","inline",O],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],ngContentSelectors:Yl,decls:1,vars:0,template:function(t,o){t&1&&(ne(),T(0));},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
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
`],encapsulation:2,changeDetection:0});}return i;})(),wa=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=y({type:i});static ɵinj=b({imports:[F]});}return i;})();var td=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵcmp=v({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0});}return i;})(),nd={passive:!0},Ma=(()=>{class i{_platform=s(W);_ngZone=s(D);_renderer=s(he).createRenderer(null,null);_styleLoader=s(be);_monitoredElements=new Map();constructor(){}monitor(e){if(!this._platform.isBrowser)return Co;this._styleLoader.load(td);let t=fe(e),o=this._monitoredElements.get(t);if(o)return o.subject;let r=new C(),a="cdk-text-field-autofilled",l=d=>{d.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(a)?(t.classList.add(a),this._ngZone.run(()=>r.next({target:d.target,isAutofilled:!0}))):d.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(a)&&(t.classList.remove(a),this._ngZone.run(()=>r.next({target:d.target,isAutofilled:!1})));},c=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",l,nd)));return this._monitoredElements.set(t,{subject:r,unlisten:c}),r;}stopMonitoring(e){let t=fe(e),o=this._monitoredElements.get(t);o&&(o.unlisten(),o.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t));}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t));}static ɵfac=function(t){return new(t||i)();};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var Ea=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=y({type:i});static ɵinj=b({});}return i;})();var Sa=new f("MAT_INPUT_VALUE_ACCESSOR");var Hn=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted));}static ɵfac=function(t){return new(t||i)();};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var vt=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(n,e,t,o,r){this._defaultMatcher=n,this.ngControl=e,this._parentFormGroup=t,this._parentForm=o,this._stateChanges=r;}updateErrorState(){let n=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,o=this.ngControl?this.ngControl.control:null,r=t?.isErrorState(o,e)??!1;r!==n&&(this.errorState=r,this._stateChanges.next());}};var id=["button","checkbox","file","hidden","image","radio","range","reset","submit"],od=new f("MAT_INPUT_CONFIG"),Aa=(()=>{class i{_elementRef=s(M);_platform=s(W);ngControl=s(ke,{optional:!0,self:!0});_autofillMonitor=s(Ma);_ngZone=s(D);_formField=s(Ht,{optional:!0});_renderer=s(le);_uid=s(ce).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(od,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new C();controlType="mat-input";autofilled=!1;get disabled(){return this._disabled;}set disabled(e){this._disabled=Oe(e),this.focused&&(this.focused=!1,this.stateChanges.next());}_disabled=!1;get id(){return this._id;}set id(e){this._id=e||this._uid;}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(pt.required)??!1;}set required(e){this._required=Oe(e);}_required;get type(){return this._type;}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&Ui().has(this._type)&&(this._elementRef.nativeElement.type=this._type);}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher;}set errorStateMatcher(e){this._errorStateTracker.matcher=e;}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value;}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next());}get readonly(){return this._readonly;}set readonly(e){this._readonly=Oe(e);}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState;}set errorState(e){this._errorStateTracker.errorState=e;}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>Ui().has(e));constructor(){let e=s(Rt,{optional:!0}),t=s(Ft,{optional:!0}),o=s(Hn),r=s(Sa,{optional:!0,self:!0}),a=this._elementRef.nativeElement,l=a.nodeName.toLowerCase();r?We(r.value)?this._signalBasedValueAccessor=r:this._inputValueAccessor=r:this._inputValueAccessor=a,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(a,"keyup",this._iOSKeyupListener);}),this._errorStateTracker=new vt(o,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=l==="select",this._isTextarea=l==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=a.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&Te(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next();});}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next();});}ngOnChanges(){this.stateChanges.next();}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.();}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder();}focus(e){this._elementRef.nativeElement.focus(e);}updateErrorState(){this._errorStateTracker.updateErrorState();}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0);}this.focused=e,this.stateChanges.next();}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next());}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder");}}_getPlaceholder(){return this.placeholder||null;}_validateType(){id.indexOf(this._type)>-1;}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1;}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput;}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled;}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label);}else return this.focused&&!this.disabled||!this.empty;}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[];}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby");}onContainerClick(){this.focused||this.focus();}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1);}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0));};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null;}static ɵfac=function(t){return new(t||i)();};static ɵdir=A({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,o){t&1&&V("focus",function(){return o._focusChanged(!0);})("blur",function(){return o._focusChanged(!1);})("input",function(){return o._onInput();}),t&2&&(ct("id",o.id)("disabled",o.disabled&&!o.disabledInteractive)("required",o.required),L("name",o.name||null)("readonly",o._getReadonlyAttribute())("aria-disabled",o.disabled&&o.disabledInteractive?"true":null)("aria-invalid",o.empty&&o.required?null:o.errorState)("aria-required",o.required)("id",o.id),E("mat-input-server",o._isServer)("mat-mdc-form-field-textarea-control",o._isInFormField&&o._isTextarea)("mat-mdc-form-field-input-control",o._isInFormField)("mat-mdc-input-disabled-interactive",o.disabledInteractive)("mdc-text-field__input",o._isInFormField)("mat-mdc-native-select-inline",o._isInlineSelect()));},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",O]},exportAs:["matInput"],features:[re([{provide:Gt,useExisting:i}]),ue]});}return i;})(),Da=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=y({type:i});static ɵinj=b({imports:[Pe,Pe,Ea,F]});}return i;})();var ad=["determinateSpinner"];function sd(i,n){if(i&1&&(Et(),h(0,"svg",11),X(1,"circle",12),u()),i&2){let e=S();L("viewBox",e._viewBox()),p(),$e("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeCircumference()/2,"px")("stroke-width",e._circleStrokeWidth(),"%"),L("r",e._circleRadius());}}var ld=new f("mat-progress-spinner-default-options",{providedIn:"root",factory:()=>({diameter:Ia})}),Ia=100,dd=10,ka=(()=>{class i{_elementRef=s(M);_noopAnimations;get color(){return this._color||this._defaultColor;}set color(e){this._color=e;}_color;_defaultColor="primary";_determinateCircle;constructor(){let e=s(ld),t=$i(),o=this._elementRef.nativeElement;this._noopAnimations=t==="di-disabled"&&!!e&&!e._forceAnimations,this.mode=o.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",!this._noopAnimations&&t==="reduced-motion"&&o.classList.add("mat-progress-spinner-reduced-motion"),e&&(e.color&&(this.color=this._defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth));}mode;get value(){return this.mode==="determinate"?this._value:0;}set value(e){this._value=Math.max(0,Math.min(100,e||0));}_value=0;get diameter(){return this._diameter;}set diameter(e){this._diameter=e||0;}_diameter=Ia;get strokeWidth(){return this._strokeWidth??this.diameter/10;}set strokeWidth(e){this._strokeWidth=e||0;}_strokeWidth;_circleRadius(){return(this.diameter-dd)/2;}_viewBox(){let e=this._circleRadius()*2+this.strokeWidth;return`0 0 ${e} ${e}`;}_strokeCircumference(){return 2*Math.PI*this._circleRadius();}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null;}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100;}static ɵfac=function(t){return new(t||i)();};static ɵcmp=v({type:i,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(t,o){if(t&1&&_e(ad,5),t&2){let r;I(r=k())&&(o._determinateCircle=r.first);}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:18,hostBindings:function(t,o){t&2&&(L("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",o.mode==="determinate"?o.value:null)("mode",o.mode),Me("mat-"+o.color),$e("width",o.diameter,"px")("height",o.diameter,"px")("--mat-progress-spinner-size",o.diameter+"px")("--mat-progress-spinner-active-indicator-width",o.diameter+"px"),E("_mat-animation-noopable",o._noopAnimations)("mdc-circular-progress--indeterminate",o.mode==="indeterminate"));},inputs:{color:"color",mode:"mode",value:[2,"value","value",Ie],diameter:[2,"diameter","diameter",Ie],strokeWidth:[2,"strokeWidth","strokeWidth",Ie]},exportAs:["matProgressSpinner"],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(t,o){if(t&1&&(Ne(0,sd,2,8,"ng-template",null,0,mn),h(2,"div",2,1),Et(),h(4,"svg",3),X(5,"circle",4),u()(),Oo(),h(6,"div",5)(7,"div",6)(8,"div",7),cn(9,8),u(),h(10,"div",9),cn(11,8),u(),h(12,"div",10),cn(13,8),u()()()),t&2){let r=Ue(1);p(4),L("viewBox",o._viewBox()),p(),$e("stroke-dasharray",o._strokeCircumference(),"px")("stroke-dashoffset",o._strokeDashOffset(),"px")("stroke-width",o._circleStrokeWidth(),"%"),L("r",o._circleRadius()),p(4),j("ngTemplateOutlet",r),p(2),j("ngTemplateOutlet",r),p(2),j("ngTemplateOutlet",r);}},dependencies:[pn],styles:[`.mat-mdc-progress-spinner {
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
`],encapsulation:2,changeDetection:0});}return i;})();var Un=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=y({type:i});static ɵinj=b({imports:[F]});}return i;})();var md=["*",[["mat-toolbar-row"]]],ud=["*","mat-toolbar-row"],hd=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵdir=A({type:i,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]});}return i;})(),Oa=(()=>{class i{_elementRef=s(M);_platform=s(W);_document=s(z);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()));}_checkToolbarMixedModes(){this._toolbarRows.length;}static ɵfac=function(t){return new(t||i)();};static ɵcmp=v({type:i,selectors:[["mat-toolbar"]],contentQueries:function(t,o,r){if(t&1&&mt(r,hd,5),t&2){let a;I(a=k())&&(o._toolbarRows=a);}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(t,o){t&2&&(Me(o.color?"mat-"+o.color:""),E("mat-toolbar-multiple-rows",o._toolbarRows.length>0)("mat-toolbar-single-row",o._toolbarRows.length===0));},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:ud,decls:2,vars:0,template:function(t,o){t&1&&(ne(md),T(0),T(1,1));},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0});}return i;})();var Pa=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=y({type:i});static ɵinj=b({imports:[F]});}return i;})();var Ut=class{_multiple;_emitChanges;compareWith;_selection=new Set();_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected;}changed=new C();constructor(n=!1,e,t=!0,o){this._multiple=n,this._emitChanges=t,this.compareWith=o,e&&e.length&&(n?e.forEach(r=>this._markSelected(r)):this._markSelected(e[0]),this._selectedToEmit.length=0);}select(...n){this._verifyValueAssignment(n),n.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e;}deselect(...n){this._verifyValueAssignment(n),n.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e;}setSelection(...n){this._verifyValueAssignment(n);let e=this.selected,t=new Set(n.map(r=>this._getConcreteValue(r)));n.forEach(r=>this._markSelected(r)),e.filter(r=>!t.has(this._getConcreteValue(r,t))).forEach(r=>this._unmarkSelected(r));let o=this._hasQueuedChanges();return this._emitChangeEvent(),o;}toggle(n){return this.isSelected(n)?this.deselect(n):this.select(n);}clear(n=!0){this._unmarkAll();let e=this._hasQueuedChanges();return n&&this._emitChangeEvent(),e;}isSelected(n){return this._selection.has(this._getConcreteValue(n));}isEmpty(){return this._selection.size===0;}hasValue(){return!this.isEmpty();}sort(n){this._multiple&&this.selected&&this._selected.sort(n);}isMultipleSelection(){return this._multiple;}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[]);}_markSelected(n){n=this._getConcreteValue(n),this.isSelected(n)||(this._multiple||this._unmarkAll(),this.isSelected(n)||this._selection.add(n),this._emitChanges&&this._selectedToEmit.push(n));}_unmarkSelected(n){n=this._getConcreteValue(n),this.isSelected(n)&&(this._selection.delete(n),this._emitChanges&&this._deselectedToEmit.push(n));}_unmarkAll(){this.isEmpty()||this._selection.forEach(n=>this._unmarkSelected(n));}_verifyValueAssignment(n){n.length>1&&this._multiple;}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length);}_getConcreteValue(n,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(n,t))return t;return n;}else return n;}};var fd=20,eo=(()=>{class i{_ngZone=s(D);_platform=s(W);_renderer=s(he).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new C();_scrolledCount=0;scrollContainers=new Map();register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)));}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e));}scrolled(e=fd){return this._platform.isBrowser?new et(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(hi(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0);};}):ge();}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete();}ancestorScrolled(e,t){let o=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(ae(r=>!r||o.indexOf(r)>-1));}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((o,r)=>{this._scrollableContainsElement(r,e)&&t.push(r);}),t;}_scrollableContainsElement(e,t){let o=fe(t),r=e.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1;}static ɵfac=function(t){return new(t||i)();};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var gd=20,Ze=(()=>{class i{_platform=s(W);_listeners;_viewportSize=null;_change=new C();_document=s(z);constructor(){let e=s(D),t=s(he).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[t.listen("window","resize",o),t.listen("window","orientationchange",o)];}this.change().subscribe(()=>this._viewportSize=null);});}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete();}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e;}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+t,height:o,width:t};}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),o=e.documentElement,r=o.getBoundingClientRect(),a=-r.top||e.body?.scrollTop||t.scrollY||o.scrollTop||0,l=-r.left||e.body?.scrollLeft||t.scrollX||o.scrollLeft||0;return{top:a,left:l};}change(e=gd){return e>0?this._change.pipe(hi(e)):this._change;}_getWindow(){return this._document.defaultView||window;}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0};}static ɵfac=function(t){return new(t||i)();};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();var $n=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=y({type:i});static ɵinj=b({});}return i;})(),to=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=y({type:i});static ɵinj=b({imports:[F,$n,F,$n]});}return i;})();var $t=class{_attachedHost=null;attach(n){return this._attachedHost=n,n.attach(this);}detach(){let n=this._attachedHost;n!=null&&(this._attachedHost=null,n.detach());}get isAttached(){return this._attachedHost!=null;}setAttachedHost(n){this._attachedHost=n;}},no=class extends $t{component;viewContainerRef;injector;projectableNodes;bindings;constructor(n,e,t,o,r){super(),this.component=n,this.viewContainerRef=e,this.injector=t,this.projectableNodes=o,this.bindings=r||null;}},Kt=class extends $t{templateRef;viewContainerRef;context;injector;constructor(n,e,t,o){super(),this.templateRef=n,this.viewContainerRef=e,this.context=t,this.injector=o;}get origin(){return this.templateRef.elementRef;}attach(n,e=this.context){return this.context=e,super.attach(n);}detach(){return this.context=void 0,super.detach();}},io=class extends $t{element;constructor(n){super(),this.element=n instanceof M?n.nativeElement:n;}},oo=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal;}attach(n){if(n instanceof no)return this._attachedPortal=n,this.attachComponentPortal(n);if(n instanceof Kt)return this._attachedPortal=n,this.attachTemplatePortal(n);if(this.attachDomPortal&&n instanceof io)return this._attachedPortal=n,this.attachDomPortal(n);}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn();}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0;}setDisposeFn(n){this._disposeFn=n;}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null);}},Kn=class extends oo{outletElement;_appRef;_defaultInjector;constructor(n,e,t){super(),this.outletElement=n,this._appRef=e,this._defaultInjector=t;}attachComponentPortal(n){let e;if(n.viewContainerRef){let t=n.injector||n.viewContainerRef.injector,o=t.get(Fo,null,{optional:!0})||void 0;e=n.viewContainerRef.createComponent(n.component,{index:n.viewContainerRef.length,injector:t,ngModuleRef:o,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),this.setDisposeFn(()=>e.destroy());}else{let t=this._appRef,o=n.injector||this._defaultInjector||q.NULL,r=o.get(rt,t.injector);e=hn(n.component,{elementInjector:o,environmentInjector:r,projectableNodes:n.projectableNodes||void 0,bindings:n.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy();});}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=n,e;}attachTemplatePortal(n){let e=n.viewContainerRef,t=e.createEmbeddedView(n.templateRef,n.context,{injector:n.injector});return t.rootNodes.forEach(o=>this.outletElement.appendChild(o)),t.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(t);o!==-1&&e.remove(o);}),this._attachedPortal=n,t;}attachDomPortal=n=>{let e=n.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=n,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t);});};dispose(){super.dispose(),this.outletElement.remove();}_getComponentRootNode(n){return n.hostView.rootNodes[0];}};var Ra=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=y({type:i});static ɵinj=b({});}return i;})();var Ta=Lr();function Wa(i){return new Xn(i.get(Ze),i.get(z));}var Xn=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(n,e){this._viewportRuler=n,this._document=e;}attach(){}enable(){if(this._canBeEnabled()){let n=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=n.style.left||"",this._previousHTMLStyles.top=n.style.top||"",n.style.left=Y(-this._previousScrollPosition.left),n.style.top=Y(-this._previousScrollPosition.top),n.classList.add("cdk-global-scrollblock"),this._isEnabled=!0;}}disable(){if(this._isEnabled){let n=this._document.documentElement,e=this._document.body,t=n.style,o=e.style,r=t.scrollBehavior||"",a=o.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,n.classList.remove("cdk-global-scrollblock"),Ta&&(t.scrollBehavior=o.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),Ta&&(t.scrollBehavior=r,o.scrollBehavior=a);}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width;}};function Ga(i,n){return new Yn(i.get(eo),i.get(D),i.get(Ze),n);}var Yn=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(n,e,t,o){this._scrollDispatcher=n,this._ngZone=e,this._viewportRuler=t,this._config=o;}attach(n){this._overlayRef,this._overlayRef=n;}enable(){if(this._scrollSubscription)return;let n=this._scrollDispatcher.scrolled(0).pipe(ae(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=n.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition();})):this._scrollSubscription=n.subscribe(this._detach);}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null);}detach(){this.disable(),this._overlayRef=null;}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach());};};var Xt=class{enable(){}disable(){}attach(){}};function ro(i,n){return n.some(e=>{let t=i.bottom<e.top,o=i.top>e.bottom,r=i.right<e.left,a=i.left>e.right;return t||o||r||a;});}function Fa(i,n){return n.some(e=>{let t=i.top<e.top,o=i.bottom>e.bottom,r=i.left<e.left,a=i.right>e.right;return t||o||r||a;});}function qt(i,n){return new qn(i.get(eo),i.get(Ze),i.get(D),n);}var qn=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(n,e,t,o){this._scrollDispatcher=n,this._viewportRuler=e,this._ngZone=t,this._config=o;}attach(n){this._overlayRef,this._overlayRef=n;}enable(){if(!this._scrollSubscription){let n=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(n).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:o}=this._viewportRuler.getViewportSize();ro(e,[{width:t,height:o,bottom:o,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()));}});}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null);}detach(){this.disable(),this._overlayRef=null;}},Ha=(()=>{class i{_injector=s(q);constructor(){}noop=()=>new Xt();close=e=>Ga(this._injector,e);block=()=>Wa(this._injector);reposition=e=>qt(this._injector,e);static ɵfac=function(t){return new(t||i)();};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})(),Yt=class{positionStrategy;scrollStrategy=new Xt();panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(n){if(n){let e=Object.keys(n);for(let t of e)n[t]!==void 0&&(this[t]=n[t]);}}};var Zn=class{connectionPair;scrollableViewProperties;constructor(n,e){this.connectionPair=n,this.scrollableViewProperties=e;}};var Ua=(()=>{class i{_attachedOverlays=[];_document=s(z);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach();}add(e){this.remove(e),this._attachedOverlays.push(e);}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach();}canReceiveEvent(e,t,o){return o.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0;}static ɵfac=function(t){return new(t||i)();};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})(),$a=(()=>{class i extends Ua{_ngZone=s(D);_renderer=s(he).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener);}),this._isAttached=!0);}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1);}_keydownListener=e=>{let t=this._attachedOverlays;for(let o=t.length-1;o>-1;o--){let r=t[o];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break;}}};static ɵfac=(()=>{let e;return function(o){return(e||(e=st(i)))(o||i);};})();static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})(),Ka=(()=>{class i extends Ua{_platform=s(W);_ngZone=s(D);_renderer=s(he).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(t,"pointerdown",this._pointerDownListener,o),r.listen(t,"click",this._clickListener,o),r.listen(t,"auxclick",this._clickListener,o),r.listen(t,"contextmenu",this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0;}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1);}_pointerDownListener=e=>{this._pointerDownEventTarget=ie(e);};_clickListener=e=>{let t=ie(e),o=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let a=r.length-1;a>-1;a--){let l=r[a],c=l._outsidePointerEvents;if(!(!l.hasAttached()||!this.canReceiveEvent(l,e,c))){if(Na(l.overlayElement,t)||Na(l.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e);}}};static ɵfac=(()=>{let e;return function(o){return(e||(e=st(i)))(o||i);};})();static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})();function Na(i,n){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=n;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode;}return!1;}var Xa=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵcmp=v({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
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
`],encapsulation:2,changeDetection:0});}return i;})(),Ya=(()=>{class i{_platform=s(W);_containerElement;_document=s(z);_styleLoader=s(be);constructor(){}ngOnDestroy(){this._containerElement?.remove();}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement;}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||Hi()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove();}let t=this._document.createElement("div");t.classList.add(e),Hi()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t;}_loadStyles(){this._styleLoader.load(Xa);}static ɵfac=function(t){return new(t||i)();};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})(),ao=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(n,e,t,o){this._renderer=e,this._ngZone=t,this.element=n.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",o);}detach(){this._ngZone.runOutsideAngular(()=>{let n=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(n,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),n.style.pointerEvents="none",n.classList.remove("cdk-overlay-backdrop-showing");});}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove();};};function so(i){return i&&i.nodeType===1;}var Qn=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new C();_attachments=new C();_detachments=new C();_positionStrategy;_scrollStrategy;_locationChanges=de.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new C();_outsidePointerEvents=new C();_afterNextRenderRef;constructor(n,e,t,o,r,a,l,c,d,m=!1,x,B){this._portalOutlet=n,this._host=e,this._pane=t,this._config=o,this._ngZone=r,this._keyboardDispatcher=a,this._document=l,this._location=c,this._outsideClickDispatcher=d,this._animationsDisabled=m,this._injector=x,this._renderer=B,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy;}get overlayElement(){return this._pane;}get backdropElement(){return this._backdropRef?.element||null;}get hostElement(){return this._host;}get eventPredicate(){return this._config?.eventPredicate||null;}attach(n){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(n);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=lt(()=>{this.hasAttached()&&this.updatePosition();},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()));}),e;}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let n=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),n;}dispose(){if(this._disposed)return;let n=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,n&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0;}hasAttached(){return this._portalOutlet.hasAttached();}backdropClick(){return this._backdropClick;}attachments(){return this._attachments;}detachments(){return this._detachments;}keydownEvents(){return this._keydownEvents;}outsidePointerEvents(){return this._outsidePointerEvents;}getConfig(){return this._config;}updatePosition(){this._positionStrategy&&this._positionStrategy.apply();}updatePositionStrategy(n){n!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=n,this.hasAttached()&&(n.attach(this),this.updatePosition()));}updateSize(n){this._config=w(w({},this._config),n),this._updateElementSize();}setDirection(n){this._config=te(w({},this._config),{direction:n}),this._updateElementDirection();}addPanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!0);}removePanelClass(n){this._pane&&this._toggleClasses(this._pane,n,!1);}getDirection(){let n=this._config.direction;return n?typeof n=="string"?n:n.value:"ltr";}updateScrollStrategy(n){n!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=n,this.hasAttached()&&(n.attach(this),n.enable()));}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection());}_updateElementSize(){if(!this._pane)return;let n=this._pane.style;n.width=Y(this._config.width),n.height=Y(this._config.height),n.minWidth=Y(this._config.minWidth),n.minHeight=Y(this._config.minHeight),n.maxWidth=Y(this._config.maxWidth),n.maxHeight=Y(this._config.maxHeight);}_togglePointerEvents(n){this._pane.style.pointerEvents=n?"":"none";}_attachHost(){if(!this._host.parentElement){let n=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;so(n)?n.after(this._host):n?.type==="parent"?n.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host);}if(this._config.usePopover)try{this._host.showPopover();}catch{}}_attachBackdrop(){let n="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new ao(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e);}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(n));}):this._backdropRef.element.classList.add(n);}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host);}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach();}_toggleClasses(n,e,t){let o=Li(e||[]).filter(r=>!!r);o.length&&(t?n.classList.add(...o):n.classList.remove(...o));}_detachContentWhenEmpty(){let n=!1;try{this._detachContentAfterRenderRef=lt(()=>{n=!0,this._detachContent();},{injector:this._injector});}catch(e){if(n)throw e;this._detachContent();}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent();}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}));}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent());}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect();}_disposeScrollStrategy(){let n=this._scrollStrategy;n?.disable(),n?.detach?.();}},La="cdk-overlay-connected-position-bounding-box",_d=/([A-Za-z%]+)$/;function lo(i,n){return new Jn(n,i.get(Ze),i.get(z),i.get(W),i.get(Ya));}var Jn=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new C();_resizeSubscription=de.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions;}constructor(n,e,t,o,r){this._viewportRuler=e,this._document=t,this._platform=o,this._overlayContainer=r,this.setOrigin(n);}attach(n){this._overlayRef&&this._overlayRef,this._validatePositions(),n.hostElement.classList.add(La),this._overlayRef=n,this._boundingBox=n.hostElement,this._pane=n.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply();});}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return;}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let n=this._originRect,e=this._overlayRect,t=this._viewportRect,o=this._containerRect,r=[],a;for(let l of this._preferredPositions){let c=this._getOriginPoint(n,o,l),d=this._getOverlayPoint(c,e,l),m=this._getOverlayFit(d,e,t,l);if(m.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(l,c);return;}if(this._canFitWithFlexibleDimensions(m,d,t)){r.push({position:l,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,l)});continue;}(!a||a.overlayFit.visibleArea<m.visibleArea)&&(a={overlayFit:m,overlayPoint:d,originPoint:c,position:l,overlayRect:e});}if(r.length){let l=null,c=-1;for(let d of r){let m=d.boundingBoxRect.width*d.boundingBoxRect.height*(d.position.weight||1);m>c&&(c=m,l=d);}this._isPushed=!1,this._applyPosition(l.position,l.origin);return;}if(this._canPush){this._isPushed=!0,this._applyPosition(a.position,a.originPoint);return;}this._applyPosition(a.position,a.originPoint);}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe();}dispose(){this._isDisposed||(this._boundingBox&&Qe(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(La),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0);}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let n=this._lastPosition;n?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(n,this._getOriginPoint(this._originRect,this._containerRect,n))):this.apply();}withScrollableContainers(n){return this._scrollables=n,this;}withPositions(n){return this._preferredPositions=n,n.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this;}withViewportMargin(n){return this._viewportMargin=n,this;}withFlexibleDimensions(n=!0){return this._hasFlexibleDimensions=n,this;}withGrowAfterOpen(n=!0){return this._growAfterOpen=n,this;}withPush(n=!0){return this._canPush=n,this;}withLockedPosition(n=!0){return this._positionLocked=n,this;}setOrigin(n){return this._origin=n,this;}withDefaultOffsetX(n){return this._offsetX=n,this;}withDefaultOffsetY(n){return this._offsetY=n,this;}withTransformOriginOn(n){return this._transformOriginSelector=n,this;}withPopoverLocation(n){return this._popoverLocation=n,this;}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof M?this._origin.nativeElement:so(this._origin)?this._origin:null;}_getOriginPoint(n,e,t){let o;if(t.originX=="center")o=n.left+n.width/2;else{let a=this._isRtl()?n.right:n.left,l=this._isRtl()?n.left:n.right;o=t.originX=="start"?a:l;}e.left<0&&(o-=e.left);let r;return t.originY=="center"?r=n.top+n.height/2:r=t.originY=="top"?n.top:n.bottom,e.top<0&&(r-=e.top),{x:o,y:r};}_getOverlayPoint(n,e,t){let o;t.overlayX=="center"?o=-e.width/2:t.overlayX==="start"?o=this._isRtl()?-e.width:0:o=this._isRtl()?0:-e.width;let r;return t.overlayY=="center"?r=-e.height/2:r=t.overlayY=="top"?0:-e.height,{x:n.x+o,y:n.y+r};}_getOverlayFit(n,e,t,o){let r=Ba(e),{x:a,y:l}=n,c=this._getOffset(o,"x"),d=this._getOffset(o,"y");c&&(a+=c),d&&(l+=d);let m=0-a,x=a+r.width-t.width,B=0-l,H=l+r.height-t.height,U=this._subtractOverflows(r.width,m,x),G=this._subtractOverflows(r.height,B,H),$=U*G;return{visibleArea:$,isCompletelyWithinViewport:r.width*r.height===$,fitsInViewportVertically:G===r.height,fitsInViewportHorizontally:U==r.width};}_canFitWithFlexibleDimensions(n,e,t){if(this._hasFlexibleDimensions){let o=t.bottom-e.y,r=t.right-e.x,a=Va(this._overlayRef.getConfig().minHeight),l=Va(this._overlayRef.getConfig().minWidth),c=n.fitsInViewportVertically||a!=null&&a<=o,d=n.fitsInViewportHorizontally||l!=null&&l<=r;return c&&d;}return!1;}_pushOverlayOnScreen(n,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:n.x+this._previousPushAmount.x,y:n.y+this._previousPushAmount.y};let o=Ba(e),r=this._viewportRect,a=Math.max(n.x+o.width-r.width,0),l=Math.max(n.y+o.height-r.height,0),c=Math.max(r.top-t.top-n.y,0),d=Math.max(r.left-t.left-n.x,0),m=0,x=0;return o.width<=r.width?m=d||-a:m=n.x<this._getViewportMarginStart()?r.left-t.left-n.x:0,o.height<=r.height?x=c||-l:x=n.y<this._getViewportMarginTop()?r.top-t.top-n.y:0,this._previousPushAmount={x:m,y:x},{x:n.x+m,y:n.y+x};}_applyPosition(n,e){if(this._setTransformOrigin(n),this._setOverlayElementStyles(e,n),this._setBoundingBoxStyles(e,n),n.panelClass&&this._addPanelClasses(n.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(n!==this._lastPosition||!this._lastScrollVisibility||!bd(this._lastScrollVisibility,t)){let o=new Zn(n,t);this._positionChanges.next(o);}this._lastScrollVisibility=t;}this._lastPosition=n,this._isInitialRender=!1;}_setTransformOrigin(n){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,o=n.overlayY;n.overlayX==="center"?t="center":this._isRtl()?t=n.overlayX==="start"?"right":"left":t=n.overlayX==="start"?"left":"right";for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${t} ${o}`;}_calculateBoundingBoxRect(n,e){let t=this._viewportRect,o=this._isRtl(),r,a,l;if(e.overlayY==="top")a=n.y,r=t.height-a+this._getViewportMarginBottom();else if(e.overlayY==="bottom")l=t.height-n.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=t.height-l+this._getViewportMarginTop();else{let H=Math.min(t.bottom-n.y+t.top,n.y),U=this._lastBoundingBoxSize.height;r=H*2,a=n.y-H,r>U&&!this._isInitialRender&&!this._growAfterOpen&&(a=n.y-U/2);}let c=e.overlayX==="start"&&!o||e.overlayX==="end"&&o,d=e.overlayX==="end"&&!o||e.overlayX==="start"&&o,m,x,B;if(d)B=t.width-n.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),m=n.x-this._getViewportMarginStart();else if(c)x=n.x,m=t.right-n.x-this._getViewportMarginEnd();else{let H=Math.min(t.right-n.x+t.left,n.x),U=this._lastBoundingBoxSize.width;m=H*2,x=n.x-H,m>U&&!this._isInitialRender&&!this._growAfterOpen&&(x=n.x-U/2);}return{top:a,left:x,bottom:l,right:B,width:m,height:r};}_setBoundingBoxStyles(n,e){let t=this._calculateBoundingBoxRect(n,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left="0",o.bottom=o.right="auto",o.maxHeight=o.maxWidth="",o.width=o.height="100%";else{let r=this._overlayRef.getConfig().maxHeight,a=this._overlayRef.getConfig().maxWidth;o.width=Y(t.width),o.height=Y(t.height),o.top=Y(t.top)||"auto",o.bottom=Y(t.bottom)||"auto",o.left=Y(t.left)||"auto",o.right=Y(t.right)||"auto",e.overlayX==="center"?o.alignItems="center":o.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?o.justifyContent="center":o.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",r&&(o.maxHeight=Y(r)),a&&(o.maxWidth=Y(a));}this._lastBoundingBoxSize=t,Qe(this._boundingBox.style,o);}_resetBoundingBoxStyles(){Qe(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""});}_resetOverlayElementStyles(){Qe(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""});}_setOverlayElementStyles(n,e){let t={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,a=this._overlayRef.getConfig();if(o){let m=this._viewportRuler.getViewportScrollPosition();Qe(t,this._getExactOverlayY(e,n,m)),Qe(t,this._getExactOverlayX(e,n,m));}else t.position="static";let l="",c=this._getOffset(e,"x"),d=this._getOffset(e,"y");c&&(l+=`translateX(${c}px) `),d&&(l+=`translateY(${d}px)`),t.transform=l.trim(),a.maxHeight&&(o?t.maxHeight=Y(a.maxHeight):r&&(t.maxHeight="")),a.maxWidth&&(o?t.maxWidth=Y(a.maxWidth):r&&(t.maxWidth="")),Qe(this._pane.style,t);}_getExactOverlayY(n,e,t){let o={top:"",bottom:""},r=this._getOverlayPoint(e,this._overlayRect,n);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t)),n.overlayY==="bottom"){let a=this._document.documentElement.clientHeight;o.bottom=`${a-(r.y+this._overlayRect.height)}px`;}else o.top=Y(r.y);return o;}_getExactOverlayX(n,e,t){let o={left:"",right:""},r=this._getOverlayPoint(e,this._overlayRect,n);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,t));let a;if(this._isRtl()?a=n.overlayX==="end"?"left":"right":a=n.overlayX==="end"?"right":"left",a==="right"){let l=this._document.documentElement.clientWidth;o.right=`${l-(r.x+this._overlayRect.width)}px`;}else o.left=Y(r.x);return o;}_getScrollVisibility(){let n=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Fa(n,t),isOriginOutsideView:ro(n,t),isOverlayClipped:Fa(e,t),isOverlayOutsideView:ro(e,t)};}_subtractOverflows(n,...e){return e.reduce((t,o)=>t-Math.max(o,0),n);}_getNarrowedViewportRect(){let n=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+n-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:n-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()};}_isRtl(){return this._overlayRef.getDirection()==="rtl";}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed;}_getOffset(n,e){return e==="x"?n.offsetX==null?this._offsetX:n.offsetX:n.offsetY==null?this._offsetY:n.offsetY;}_validatePositions(){}_addPanelClasses(n){this._pane&&Li(n).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e));});}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(n=>{this._pane.classList.remove(n);}),this._appliedPanelClasses=[]);}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0;}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0;}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0;}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0;}_getOriginRect(){let n=this._origin;if(n instanceof M)return n.nativeElement.getBoundingClientRect();if(n instanceof Element)return n.getBoundingClientRect();let e=n.width||0,t=n.height||0;return{top:n.y,bottom:n.y+t,left:n.x,right:n.x+e,height:t,width:e};}_getContainerRect(){let n=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();n&&(e.style.display="block");let t=e.getBoundingClientRect();return n&&(e.style.display=""),t;}};function Qe(i,n){for(let e in n)n.hasOwnProperty(e)&&(i[e]=n[e]);return i;}function Va(i){if(typeof i!="number"&&i!=null){let[n,e]=i.split(_d);return!e||e==="px"?parseFloat(n):null;}return i||null;}function Ba(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)};}function bd(i,n){return i===n?!0:i.isOriginClipped===n.isOriginClipped&&i.isOriginOutsideView===n.isOriginOutsideView&&i.isOverlayClipped===n.isOverlayClipped&&i.isOverlayOutsideView===n.isOverlayOutsideView;}var za="cdk-global-overlay-wrapper";function qa(i){return new ei();}var ei=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(n){let e=n.getConfig();this._overlayRef=n,this._width&&!e.width&&n.updateSize({width:this._width}),this._height&&!e.height&&n.updateSize({height:this._height}),n.hostElement.classList.add(za),this._isDisposed=!1;}top(n=""){return this._bottomOffset="",this._topOffset=n,this._alignItems="flex-start",this;}left(n=""){return this._xOffset=n,this._xPosition="left",this;}bottom(n=""){return this._topOffset="",this._bottomOffset=n,this._alignItems="flex-end",this;}right(n=""){return this._xOffset=n,this._xPosition="right",this;}start(n=""){return this._xOffset=n,this._xPosition="start",this;}end(n=""){return this._xOffset=n,this._xPosition="end",this;}width(n=""){return this._overlayRef?this._overlayRef.updateSize({width:n}):this._width=n,this;}height(n=""){return this._overlayRef?this._overlayRef.updateSize({height:n}):this._height=n,this;}centerHorizontally(n=""){return this.left(n),this._xPosition="center",this;}centerVertically(n=""){return this.top(n),this._alignItems="center",this;}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:o,height:r,maxWidth:a,maxHeight:l}=t,c=(o==="100%"||o==="100vw")&&(!a||a==="100%"||a==="100vw"),d=(r==="100%"||r==="100vh")&&(!l||l==="100%"||l==="100vh"),m=this._xPosition,x=this._xOffset,B=this._overlayRef.getConfig().direction==="rtl",H="",U="",G="";c?G="flex-start":m==="center"?(G="center",B?U=x:H=x):B?m==="left"||m==="end"?(G="flex-end",H=x):(m==="right"||m==="start")&&(G="flex-start",U=x):m==="left"||m==="start"?(G="flex-start",H=x):(m==="right"||m==="end")&&(G="flex-end",U=x),n.position=this._cssPosition,n.marginLeft=c?"0":H,n.marginTop=d?"0":this._topOffset,n.marginBottom=this._bottomOffset,n.marginRight=c?"0":U,e.justifyContent=G,e.alignItems=d?"flex-start":this._alignItems;}dispose(){if(this._isDisposed||!this._overlayRef)return;let n=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(za),t.justifyContent=t.alignItems=n.marginTop=n.marginBottom=n.marginLeft=n.marginRight=n.position="",this._overlayRef=null,this._isDisposed=!0;}},Za=(()=>{class i{_injector=s(q);constructor(){}global(){return qa();}flexibleConnectedTo(e){return lo(this._injector,e);}static ɵfac=function(t){return new(t||i)();};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})(),Zt=new f("OVERLAY_DEFAULT_CONFIG");function co(i,n){i.get(be).load(Xa);let e=i.get(Ya),t=i.get(z),o=i.get(ce),r=i.get(dt),a=i.get(je),l=i.get(le,null,{optional:!0})||i.get(he).createRenderer(null,null),c=new Yt(n),d=i.get(Zt,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||a.value,"showPopover"in t.body?c.usePopover=n?.usePopover??d:c.usePopover=!1;let m=t.createElement("div"),x=t.createElement("div");m.id=o.getId("cdk-overlay-"),m.classList.add("cdk-overlay-pane"),x.appendChild(m),c.usePopover&&(x.setAttribute("popover","manual"),x.classList.add("cdk-overlay-popover"));let B=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return so(B)?B.after(x):B?.type==="parent"?B.element.appendChild(x):e.getContainerElement().appendChild(x),new Qn(new Kn(m,r,i),x,m,c,i.get(D),i.get($a),t,i.get(Ho),i.get(Ka),n?.disableAnimations??i.get(rn,null,{optional:!0})==="NoopAnimations",i.get(rt),l);}var Qa=(()=>{class i{scrollStrategies=s(Ha);_positionBuilder=s(Za);_injector=s(q);constructor(){}create(e){return co(this._injector,e);}position(){return this._positionBuilder;}static ɵfac=function(t){return new(t||i)();};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});}return i;})(),vd=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],yd=new f("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(q);return()=>qt(i);}}),yt=(()=>{class i{elementRef=s(M);constructor(){}static ɵfac=function(t){return new(t||i)();};static ɵdir=A({type:i,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]});}return i;})(),Ja=new f("cdk-connected-overlay-default-config"),ti=(()=>{class i{_dir=s(je,{optional:!0});_injector=s(q);_overlayRef;_templatePortal;_backdropSubscription=de.EMPTY;_attachSubscription=de.EMPTY;_detachSubscription=de.EMPTY;_positionSubscription=de.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=s(yd);_ngZone=s(D);origin;positions;positionStrategy;get offsetX(){return this._offsetX;}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position);}get offsetY(){return this._offsetY;}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position);}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e);}backdropClick=new N();positionChange=new N();attach=new N();detach=new N();overlayKeydown=new N();overlayOutsideClick=new N();constructor(){let e=s(an),t=s(sn),o=s(Ja,{optional:!0}),r=s(Zt,{optional:!0});this.usePopover=r?.usePopover===!1?null:"global",this._templatePortal=new Kt(e,t),this.scrollStrategy=this._scrollStrategyFactory(),o&&this._assignConfig(o);}get overlayRef(){return this._overlayRef;}get dir(){return this._dir?this._dir.value:"ltr";}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose();}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay());}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=vd);let e=this._overlayRef=co(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!Ae(t)&&(t.preventDefault(),this.detachOverlay());}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let o=this._getOriginElement(),r=ie(t);(!o||o!==r&&!o.contains(r))&&this.overlayOutsideClick.next(t);});}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new Yt({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t;}_updatePositionStrategy(e){let t=this.positions.map(o=>({originX:o.originX,originY:o.originY,overlayX:o.overlayX,overlayY:o.overlayY,offsetX:o.offsetX||this.offsetX,offsetY:o.offsetY||this.offsetY,panelClass:o.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover);}_createPositionStrategy(){let e=lo(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e;}_getOrigin(){return this.origin instanceof yt?this.origin.elementRef:this.origin;}_getOriginElement(){return this.origin instanceof yt?this.origin.elementRef.nativeElement:this.origin instanceof M?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null;}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0;}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(ko(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe();})),this.open=!0;}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1;}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth;}static ɵfac=function(t){return new(t||i)();};static ɵdir=A({type:i,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",O],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",O],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",O],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",O],push:[2,"cdkConnectedOverlayPush","push",O],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",O],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",O],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[ue]});}return i;})(),mo=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=y({type:i});static ɵinj=b({providers:[Qa],imports:[F,Ra,to,to]});}return i;})();var es=(()=>{class i{_animationsDisabled=ve();state="unchecked";disabled=!1;appearance="full";constructor(){}static ɵfac=function(t){return new(t||i)();};static ɵcmp=v({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,o){t&2&&E("mat-pseudo-checkbox-indeterminate",o.state==="indeterminate")("mat-pseudo-checkbox-checked",o.state==="checked")("mat-pseudo-checkbox-disabled",o.disabled)("mat-pseudo-checkbox-minimal",o.appearance==="minimal")("mat-pseudo-checkbox-full",o.appearance==="full")("_mat-animation-noopable",o._animationsDisabled);},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,o){},styles:[`.mat-pseudo-checkbox {
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
`],encapsulation:2,changeDetection:0});}return i;})();var xd=["text"],Cd=[[["mat-icon"]],"*"],wd=["mat-icon","*"];function Md(i,n){if(i&1&&X(0,"mat-pseudo-checkbox",1),i&2){let e=S();j("disabled",e.disabled)("state",e.selected?"checked":"unchecked");}}function Ed(i,n){if(i&1&&X(0,"mat-pseudo-checkbox",3),i&2){let e=S();j("disabled",e.disabled);}}function Sd(i,n){if(i&1&&(h(0,"span",4),J(1),u()),i&2){let e=S();p(),zo("(",e.group.label,")");}}var ho=new f("MAT_OPTION_PARENT_COMPONENT"),po=new f("MatOptgroup");var uo=class{source;isUserInput;constructor(n,e=!1){this.source=n,this.isUserInput=e;}},xt=(()=>{class i{_element=s(M);_changeDetectorRef=s(Be);_parent=s(ho,{optional:!0});group=s(po,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple;}get selected(){return this._selected;}value;id=s(ce).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled();}set disabled(e){this._disabled.set(e);}_disabled=ee(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple;}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator);}onSelectionChange=new N();_text;_stateChanges=new C();constructor(){let e=s(be);e.load(Vn),e.load(Ni),this._signalDisableRipple=!!this._parent&&We(this._parent.disableRipple);}get active(){return this._active;}get viewValue(){return(this._text?.nativeElement.textContent||"").trim();}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent());}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent());}focus(e,t){let o=this._getHostElement();typeof o.focus=="function"&&o.focus(t);}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck());}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck());}getLabel(){return this.viewValue;}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!Ae(e)&&(this._selectViaInteraction(),e.preventDefault());}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0));}_getTabIndex(){return this.disabled?"-1":"0";}_getHostElement(){return this._element.nativeElement;}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e);}}ngOnDestroy(){this._stateChanges.complete();}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new uo(this,e));}static ɵfac=function(t){return new(t||i)();};static ɵcmp=v({type:i,selectors:[["mat-option"]],viewQuery:function(t,o){if(t&1&&_e(xd,7),t&2){let r;I(r=k())&&(o._text=r.first);}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,o){t&1&&V("click",function(){return o._selectViaInteraction();})("keydown",function(a){return o._handleKeydown(a);}),t&2&&(ct("id",o.id),L("aria-selected",o.selected)("aria-disabled",o.disabled.toString()),E("mdc-list-item--selected",o.selected)("mat-mdc-option-multiple",o.multiple)("mat-mdc-option-active",o.active)("mdc-list-item--disabled",o.disabled));},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",O]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:wd,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,o){t&1&&(ne(Cd),P(0,Md,1,2,"mat-pseudo-checkbox",1),T(1),h(2,"span",2,0),T(4,1),u(),P(5,Ed,1,1,"mat-pseudo-checkbox",3),P(6,Sd,2,1,"span",4),X(7,"div",5)),t&2&&(R(o.multiple?0:-1),p(5),R(!o.multiple&&o.selected&&!o.hideSingleSelectionIndicator?5:-1),p(),R(o.group&&o.group._inert?6:-1),p(),j("matRippleTrigger",o._getHostElement())("matRippleDisabled",o.disabled||o.disableRipple));},dependencies:[es,Ur],styles:[`.mat-mdc-option {
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
`],encapsulation:2,changeDetection:0});}return i;})();function ts(i,n,e){if(e.length){let t=n.toArray(),o=e.toArray(),r=0;for(let a=0;a<i+1;a++)t[a].group&&t[a].group===o[r]&&r++;return r;}return 0;}function ns(i,n,e,t){return i<e?i:i+n>e+t?Math.max(0,i-t+n):e;}var is=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=y({type:i});static ɵinj=b({imports:[F]});}return i;})();var fo=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=y({type:i});static ɵinj=b({imports:[Bn,is,xt,F]});}return i;})();var Ad=["trigger"],Dd=["panel"],Id=[[["mat-select-trigger"]],"*"],kd=["mat-select-trigger","*"];function Od(i,n){if(i&1&&(h(0,"span",4),J(1),u()),i&2){let e=S();p(),oe(e.placeholder);}}function Pd(i,n){i&1&&T(0);}function Rd(i,n){if(i&1&&(h(0,"span",11),J(1),u()),i&2){let e=S(2);p(),oe(e.triggerValue);}}function Td(i,n){if(i&1&&(h(0,"span",5),P(1,Pd,1,0)(2,Rd,2,1,"span",11),u()),i&2){let e=S();p(),R(e.customTrigger?1:2);}}function Fd(i,n){if(i&1){let e=Ve();h(0,"div",12,1),V("keydown",function(o){Ce(e);let r=S();return we(r._handleKeydown(o));}),T(2,1),u();}if(i&2){let e=S();Me(e.panelClass),E("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),L("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby());}}var Nd=new f("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(q);return()=>qt(i);}}),Ld=new f("MAT_SELECT_CONFIG"),Vd=new f("MatSelectTrigger"),go=class{source;value;constructor(n,e){this.source=n,this.value=e;}},os=(()=>{class i{_viewportRuler=s(Ze);_changeDetectorRef=s(Be);_elementRef=s(M);_dir=s(je,{optional:!0});_idGenerator=s(ce);_renderer=s(le);_parentFormField=s(Ht,{optional:!0});ngControl=s(ke,{self:!0,optional:!0});_liveAnnouncer=s(Bi);_defaultOptions=s(Ld,{optional:!0});_animationsDisabled=ve();_popoverLocation;_initialized=new C();_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let o=this.panel.nativeElement,r=ts(e,this.options,this.optionGroups),a=t._getHostElement();e===0&&r===1?o.scrollTop=0:o.scrollTop=ns(a.offsetTop,a.offsetHeight,o.scrollTop,o.offsetHeight);}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0);}_getChangeEvent(e){return new go(this,e);}_scrollStrategyFactory=s(Nd);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new C();_errorStateTracker;stateChanges=new C();disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen;}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple();}set disableRipple(e){this._disableRipple.set(e);}_disableRipple=ee(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator;}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties();}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder;}set placeholder(e){this._placeholder=e,this.stateChanges.next();}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(pt.required)??!1;}set required(e){this._required=e,this.stateChanges.next();}_required;get multiple(){return this._multiple;}set multiple(e){this._selectionModel,this._multiple=e;}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith;}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection();}get value(){return this._value;}set value(e){this._assignValue(e)&&this._onChange(e);}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher;}set errorStateMatcher(e){this._errorStateTracker.matcher=e;}typeaheadDebounceInterval;sortComparator;get id(){return this._id;}set id(e){this._id=e||this._uid,this.stateChanges.next();}_id;get errorState(){return this._errorStateTracker.errorState;}set errorState(e){this._errorStateTracker.errorState=e;}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=Eo(()=>{let e=this.options;return e?e.changes.pipe(me(e),nn(()=>nt(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(nn(()=>this.optionSelectionChanges));});openedChange=new N();_openedStream=this.openedChange.pipe(ae(e=>e),K(()=>{}));_closedStream=this.openedChange.pipe(ae(e=>!e),K(()=>{}));selectionChange=new N();valueChange=new N();constructor(){let e=s(Hn),t=s(Rt,{optional:!0}),o=s(Ft,{optional:!0}),r=s(new un("tabindex"),{optional:!0}),a=s(Zt,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new vt(e,this.ngControl,o,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=r==null?0:parseInt(r)||0,this._popoverLocation=a?.usePopover===!1?null:"inline",this.id=this.id;}ngOnInit(){this._selectionModel=new Ut(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(se(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges());});}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(se(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect());}),this.options.changes.pipe(me(null),se(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection();});}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let o=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?o.setAttribute("aria-labelledby",e):o.removeAttribute("aria-labelledby");}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState());}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass));}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal();}toggle(){this.panelOpen?this.close():this.open();}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(tn(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled();}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)));}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&Gi(this._trackedModal,"aria-owns",t),Fr(e,"aria-owns",t),this._trackedModal=e;}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;Gi(this._trackedModal,"aria-owns",e),this._trackedModal=null;}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)));}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return;}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(o),this._cleanupDetach=void 0;};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",r=>{r.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay());}),o=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay();},200);e.classList.add("mat-select-panel-exit");}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck();}writeValue(e){this._assignValue(e);}registerOnChange(e){this._onChange=e;}registerOnTouched(e){this._onTouched=e;}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next();}get panelOpen(){return this._panelOpen;}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0];}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ");}return this._selectionModel.selected[0].viewValue;}updateErrorState(){this._errorStateTracker.updateErrorState();}_isRtl(){return this._dir?this._dir.value==="rtl":!1;}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e));}_handleClosedKeydown(e){let t=e.keyCode,o=t===40||t===38||t===37||t===39,r=t===13||t===32,a=this._keyManager;if(!a.isTyping()&&r&&!Ae(e)||(this.multiple||e.altKey)&&o)e.preventDefault(),this.open();else if(!this.multiple){let l=this.selected;a.onKeydown(e);let c=this.selected;c&&l!==c&&this._liveAnnouncer.announce(c.viewValue,1e4);}}_handleOpenKeydown(e){let t=this._keyManager,o=e.keyCode,r=o===40||o===38,a=t.isTyping();if(r&&e.altKey)e.preventDefault(),this.close();else if(!a&&(o===13||o===32)&&t.activeItem&&!Ae(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!a&&this._multiple&&o===65&&e.ctrlKey){e.preventDefault();let l=this.options.some(c=>!c.disabled&&!c.selected);this.options.forEach(c=>{c.disabled||(l?c.select():c.deselect());});}else{let l=t.activeItemIndex;t.onKeydown(e),this._multiple&&r&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==l&&t.activeItem._selectViaInteraction();}}_handleOverlayKeydown(e){e.keyCode===27&&!Ae(e)&&(e.preventDefault(),this.close());}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next());}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next());}get empty(){return!this._selectionModel||this._selectionModel.isEmpty();}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next();});}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1);}this._changeDetectorRef.markForCheck();}_selectOptionByValue(e){let t=this.options.find(o=>{if(this._selectionModel.isSelected(o))return!1;try{return(o.value!=null||this.canSelectNullableOptions)&&this._compareWith(o.value,e);}catch{return!1;}});return t&&this._selectionModel.select(t),t;}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1;}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof yt?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth;}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck();}_initKeyManager(){this._keyManager=new zt(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close());}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction();});}_resetOptions(){let e=nt(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(se(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus());}),nt(...this.options.map(t=>t._stateChanges)).pipe(se(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next();});}_onSelect(e,t){let o=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(o!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),o!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next();}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,o)=>this.sortComparator?this.sortComparator(t,o,e):e.indexOf(t)-e.indexOf(o)),this.stateChanges.next();}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(o=>o.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck();}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break;}this._keyManager.setActiveItem(e);}else this._keyManager.setActiveItem(this._selectionModel.selected[0]);}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir;}focus(e){this._elementRef.nativeElement.focus(e);}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e;}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null;}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e;}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[];}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby");}onContainerClick(e){let t=ie(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open());}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder;}static ɵfac=function(t){return new(t||i)();};static ɵcmp=v({type:i,selectors:[["mat-select"]],contentQueries:function(t,o,r){if(t&1&&mt(r,Vd,5)(r,xt,5)(r,po,5),t&2){let a;I(a=k())&&(o.customTrigger=a.first),I(a=k())&&(o.options=a),I(a=k())&&(o.optionGroups=a);}},viewQuery:function(t,o){if(t&1&&_e(Ad,5)(Dd,5)(ti,5),t&2){let r;I(r=k())&&(o.trigger=r.first),I(r=k())&&(o.panel=r.first),I(r=k())&&(o._overlayDir=r.first);}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,o){t&1&&V("keydown",function(a){return o._handleKeydown(a);})("focus",function(){return o._onFocus();})("blur",function(){return o._onBlur();}),t&2&&(L("id",o.id)("tabindex",o.disabled?-1:o.tabIndex)("aria-controls",o.panelOpen?o.id+"-panel":null)("aria-expanded",o.panelOpen)("aria-label",o.ariaLabel||null)("aria-required",o.required.toString())("aria-disabled",o.disabled.toString())("aria-invalid",o.errorState)("aria-activedescendant",o._getAriaActiveDescendant()),E("mat-mdc-select-disabled",o.disabled)("mat-mdc-select-invalid",o.errorState)("mat-mdc-select-required",o.required)("mat-mdc-select-empty",o.empty)("mat-mdc-select-multiple",o.multiple)("mat-select-open",o.panelOpen));},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",O],disableRipple:[2,"disableRipple","disableRipple",O],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:Ie(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",O],placeholder:"placeholder",required:[2,"required","required",O],multiple:[2,"multiple","multiple",O],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",O],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",Ie],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",O]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[re([{provide:Gt,useExisting:i},{provide:ho,useExisting:i}]),ue],ngContentSelectors:kd,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,o){if(t&1&&(ne(Id),h(0,"div",2,0),V("click",function(){return o.open();}),h(3,"div",3),P(4,Od,2,1,"span",4)(5,Td,3,1,"span",5),u(),h(6,"div",6)(7,"div",7),Et(),h(8,"svg",8),X(9,"path",9),u()()()(),Ne(10,Fd,3,16,"ng-template",10),V("detach",function(){return o.close();})("backdropClick",function(){return o.close();})("overlayKeydown",function(a){return o._handleOverlayKeydown(a);})),t&2){let r=Ue(1);p(3),L("id",o._valueId),p(),R(o.empty?4:5),p(6),j("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",o._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",o._scrollStrategy)("cdkConnectedOverlayOrigin",o._preferredOverlayOrigin||r)("cdkConnectedOverlayPositions",o._positions)("cdkConnectedOverlayWidth",o._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",o._popoverLocation);}},dependencies:[yt,ti],styles:[`@keyframes _mat-select-enter {
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
`],encapsulation:2,changeDetection:0});}return i;})();var rs=(()=>{class i{static ɵfac=function(t){return new(t||i)();};static ɵmod=y({type:i});static ɵinj=b({imports:[mo,fo,F,$n,Pe,fo]});}return i;})();function zd(i,n){if(i&1&&(h(0,"mat-option",3),J(1),u()),i&2){let e=n.$implicit;j("value",e),p(),oe(e);}}var oi=class i{days=[];value=null;valueChange=new N();static ɵfac=function(e){return new(e||i)();};static ɵcmp=v({type:i,selectors:[["app-day-filter"]],inputs:{days:"days",value:"value"},outputs:{valueChange:"valueChange"},decls:6,vars:1,consts:()=>{let n;n="Selecione o dia para exibir no mapa";let e;return e="Dia",[e,["appearance","outline",1,"day-filter-field"],["aria-label",n,3,"valueChange","value"],[3,"value"]];},template:function(e,t){e&1&&(h(0,"mat-form-field",1)(1,"mat-label"),Q(2,0),u(),h(3,"mat-select",2),V("valueChange",function(r){return t.valueChange.emit(r);}),ln(4,zd,2,2,"mat-option",3,Lo),u()()),e&2&&(p(3),j("value",t.value),p(),dn(t.days));},dependencies:[Pe,bt,qe,rs,os,xt],styles:[".day-filter-field[_ngcontent-%COMP%]{width:min(100%,220px)}"],changeDetection:0});};var ri={time:"Hor\xE1rio",windSpeed:"Velocidade do vento",windDirection:"Dire\xE7\xE3o do vento",source:"Origem"},Qt={lineName:"Nome da linha",installationCode:"C\xF3digo de instala\xE7\xE3o",nominalVoltage:"Tens\xE3o nominal",length:"Extens\xE3o",company:"Empresa"},as={u10:"Componente U10",v10:"Componente V10",srid:"Refer\xEAncia espacial"},Je={thresholdMs:"Limiar",thresholdKmh:"Limiar",windSpeedMax:"Velocidade m\xE1xima do vento",windSpeedMeanExceed:"Velocidade m\xE9dia excedida do vento",minimumArea:"\xC1rea m\xEDnima",smoothingBuffer:"Buffer de suaviza\xE7\xE3o",simplifyTolerance:"Toler\xE2ncia de simplifica\xE7\xE3o",srid:"Refer\xEAncia espacial"},Ct=class i{modulesPromise=null;mapView=null;windLayer=null;powerlineLayer=null;endpointLayer=null;spikeLayer=null;hasAppliedInitialExtent=!1;hasRenderedPowerlines=!1;async initialize(n,e){if(this.mapView)return;let t=await this.loadModules();t.config.apiKey=e.apiKey??void 0;let o=new t.Map({basemap:"dark-gray-vector"});this.powerlineLayer=new t.GraphicsLayer({title:"Linhas de transmiss\xE3o"}),this.windLayer=new t.GraphicsLayer({title:"Vetores de vento"}),this.endpointLayer=new t.GraphicsLayer({title:"Extremidades da dire\xE7\xE3o do vento"}),this.spikeLayer=new t.GraphicsLayer({title:"Picos de vento"}),o.addMany([this.powerlineLayer,this.spikeLayer,this.windLayer,this.endpointLayer]),this.mapView=new t.MapView({container:n,map:o,center:[-55.29,-26.92],zoom:7,constraints:{snapToZoom:!1},popup:{dockEnabled:!0}});}async render(n){if(!this.mapView||!this.powerlineLayer||!this.windLayer||!this.endpointLayer||!this.spikeLayer)return;let e=await this.loadModules(),t=n.powerlineFeatures.map(l=>new e.Graphic({geometry:{type:"polyline",paths:[l.coordinates],spatialReference:{wkid:4326}},symbol:{type:"simple-line",color:[37,99,235,.9],width:2,style:"solid"},attributes:te(w({},l.properties),{featureId:l.id}),popupTemplate:{title:"Linha de transmiss\xE3o",content:Hd()}})),o=n.lineFeatures.map(l=>new e.Graphic({geometry:{type:"polyline",paths:[l.coordinates],spatialReference:{wkid:4326}},symbol:{type:"simple-line",color:ss(l.properties.ws10,n.windSpeedRange.min,n.windSpeedRange.max),width:.9,style:"solid"},attributes:te(w({},l.properties),{featureId:l.id}),popupTemplate:{title:"Vetor de vento",content:ds()}})),r=n.lineFeatures.map(l=>{let c=ss(l.properties.ws10,n.windSpeedRange.min,n.windSpeedRange.max);return new e.Graphic({geometry:{type:"point",longitude:l.endpoint[0],latitude:l.endpoint[1],spatialReference:{wkid:4326}},symbol:{type:"simple-marker",style:"triangle",color:c,size:4,angle:Wd(l.coordinates,l.properties.wd10),outline:{color:c,width:.35}},attributes:te(w({},l.properties),{featureId:`${l.id}-endpoint`}),popupTemplate:{title:"Vetor de vento",content:ds()}});}),a=n.polygonFeatures.map(l=>new e.Graphic({geometry:{type:"polygon",rings:l.rings,spatialReference:{wkid:4326}},symbol:{type:"simple-fill",color:[220,38,38,.28],outline:{color:[153,27,27,.7],width:1}},attributes:te(w({},l.properties),{featureId:l.id}),popupTemplate:{title:"Pol\xEDgono de pico de vento",content:Gd()}}));if(this.windLayer.removeAll(),this.endpointLayer.removeAll(),this.spikeLayer.removeAll(),!this.hasRenderedPowerlines&&t.length>0&&(this.powerlineLayer.removeAll(),this.powerlineLayer.addMany(t),this.hasRenderedPowerlines=!0),a.length>0&&this.spikeLayer.addMany(a),o.length>0&&(this.windLayer.addMany(o),this.endpointLayer.addMany(r)),!this.hasAppliedInitialExtent&&n.lineFeatures.length>0){this.hasAppliedInitialExtent=!0;let l=jd(n,e.Extent);l&&(this.mapView.extent=l);}}destroy(){this.mapView?.destroy(),this.mapView=null,this.powerlineLayer=null,this.windLayer=null,this.endpointLayer=null,this.spikeLayer=null,this.hasAppliedInitialExtent=!1,this.hasRenderedPowerlines=!1;}loadModules(){return this.modulesPromise||(this.modulesPromise=(async()=>{let n=window.$arcgis;if(!n)throw new Error("O carregador CDN do ArcGIS n\xE3o est\xE1 dispon\xEDvel. Confirme que https://js.arcgis.com/5.0/ foi carregado em index.html.");let[e,t,o,r,a,l]=await Promise.all([n.import("@arcgis/core/Map.js"),n.import("@arcgis/core/views/MapView.js"),n.import("@arcgis/core/layers/GraphicsLayer.js"),n.import("@arcgis/core/Graphic.js"),n.import("@arcgis/core/geometry/Extent.js"),n.import("@arcgis/core/config.js")]);return{Map:e,MapView:t,GraphicsLayer:o,Graphic:r,Extent:a,config:l};})()),this.modulesPromise;}static ɵfac=function(e){return new(e||i)();};static ɵprov=g({token:i,factory:i.ɵfac});};function jd(i,n){let e=[...i.lineFeatures.flatMap(a=>a.coordinates),...i.polygonFeatures.flatMap(a=>a.rings.flat())];if(e.length===0)return null;let t=e.map(([a])=>a),o=e.map(([,a])=>a),r=.18;return new n({xmin:Math.min(...t)-r,ymin:Math.min(...o)-r,xmax:Math.max(...t)+r,ymax:Math.max(...o)+r,spatialReference:{wkid:4326}});}function ss(i,n,e){let t=e-n,o=t===0?.5:(i-n)/t,r=Math.max(0,Math.min(1,o)),a=[[14,165,233],[34,197,94],[250,204,21],[249,115,22],[220,38,38]],l=r*(a.length-1),c=Math.floor(l),d=Math.min(a.length-1,Math.ceil(l)),m=l-c;return[...a[c].map((B,H)=>Math.round(B+(a[d][H]-B)*m)),.15];}function Wd(i,n){let e=i[i.length-1];for(let t=i.length-2;t>=0;t-=1){let o=i[t],r=e[0]-o[0],a=e[1]-o[1];if(r!==0||a!==0)return ls(Math.atan2(r,a)*180/Math.PI);}return ls(n??0);}function ls(i){return(i%360+360)%360;}function ds(){return[`${ri.time}: {time}`,`${ri.windSpeed}: {ws10} m/s`,`${as.u10}: {u10}`,`${as.v10}: {v10}`,`${ri.windDirection}: {wd10}\xB0`].join("<br/>");}function Gd(){return[`${ri.time}: {time}`,`${Je.thresholdMs}: {threshold_ms} m/s`,`${Je.thresholdKmh}: {threshold_kmh} km/h`,`${Je.windSpeedMax}: {ws10_max} m/s`,`${Je.windSpeedMeanExceed}: {ws10_mean_exceed} m/s`,`${Je.minimumArea}: {min_area_m2} m\xB2`,`${Je.smoothingBuffer}: {smooth_buffer_m} m`,`${Je.simplifyTolerance}: {simplify_tol_m} m`].join("<br/>");}function Hd(){return[`${Qt.lineName}: {NOM_LT_SAP}`,`${Qt.installationCode}: {LOC_Instal}`,`${Qt.nominalVoltage}: {Tensao_Nom} kV`,`${Qt.length}: {Extenso_Km} km`,`${Qt.company}: {Empresa}`].join("<br/>");}var $d=["mapHost"];function Kd(i,n){if(i&1&&(h(0,"div",5)(1,"div",8)(2,"span",9),Q(3,1),u(),h(4,"span",10),Q(5,2),u()(),X(6,"div",11),h(7,"div",12)(8,"span"),J(9),St(10,"number"),u(),h(11,"span"),J(12),St(13,"number"),u()()()),i&2){let e=S();p(6),$e("background",e.windSpeedLegendGradient),p(3),oe(_i(10,4,e.windSpeedRange.min,"1.0-1")),p(3),oe(_i(13,7,e.windSpeedRange.max,"1.0-1"));}}function Xd(i,n){i&1&&(h(0,"div",6),X(1,"mat-progress-spinner",13),u());}function Yd(i,n){if(i&1&&(h(0,"div",7)(1,"p"),J(2),u()()),i&2){let e=S();p(2),oe(e.errorMessage);}}var ai=class i{constructor(n){this.arcgisMapService=n;}windSpeedLegendGradient=null;windSpeedRange=null;authState=null;renderState=null;loading=!1;mapHost;errorMessage=null;isInitialized=!1;async ngAfterViewInit(){await this.synchronizeMap();}async ngOnChanges(n){(n.authState||n.renderState)&&(await this.synchronizeMap());}ngOnDestroy(){this.arcgisMapService.destroy();}async synchronizeMap(){if(!(!this.mapHost?.nativeElement||!this.authState||this.authState.status!=="authenticated"))try{this.errorMessage=null,this.isInitialized||(await this.arcgisMapService.initialize(this.mapHost.nativeElement,this.authState),this.isInitialized=!0),this.renderState&&(await this.arcgisMapService.render(this.renderState));}catch(n){console.log("Map initialization/rendering error:",n),this.errorMessage=n instanceof Error?n.message:"N\xE3o foi poss\xEDvel inicializar o mapa. Revise as configura\xE7\xF5es de integra\xE7\xE3o do ArcGIS.";}}static ɵfac=function(e){return new(e||i)(Z(Ct));};static ɵcmp=v({type:i,selectors:[["app-map-container"]],viewQuery:function(e,t){if(e&1&&_e($d,7),e&2){let o;I(o=k())&&(t.mapHost=o.first);}},inputs:{windSpeedLegendGradient:"windSpeedLegendGradient",windSpeedRange:"windSpeedRange",authState:"authState",renderState:"renderState",loading:"loading"},features:[re([Ct]),ue],decls:6,vars:3,consts:()=>{let n;n="Mapa interativo de vento";let e;e="Escala de velocidade do vento";let t;return t="m/s",[["mapHost",""],e,t,[1,"map-frame"],["aria-label",n,1,"map-host"],[1,"wind-speed-legend"],[1,"map-overlay"],[1,"map-error"],[1,"legend-copy"],[1,"legend-title"],[1,"legend-unit"],["aria-hidden","true",1,"legend-gradient"],[1,"legend-values"],["diameter","48","mode","indeterminate"]];},template:function(e,t){e&1&&(h(0,"div",3),X(1,"div",4,0),P(3,Kd,14,10,"div",5),P(4,Xd,2,0,"div",6),P(5,Yd,3,1,"div",7),u()),e&2&&(p(3),R(t.windSpeedRange&&t.windSpeedLegendGradient?3:-1),p(),R(t.loading?4:-1),p(),R(t.errorMessage?5:-1));},dependencies:[Un,ka,$o],styles:[".map-frame[_ngcontent-%COMP%]{position:relative;min-height:420px;height:calc(100vh - 235px);border-radius:24px;overflow:hidden;background:radial-gradient(circle at top left,rgba(14,165,233,.18),transparent 42%),linear-gradient(160deg,#eff6ff,#dbeafe 45%,#e2e8f0)}.map-host[_ngcontent-%COMP%]{width:100%;height:100%;min-height:420px}.wind-speed-legend[_ngcontent-%COMP%]{position:absolute;top:.75rem;right:.75rem;z-index:2;width:min(240px,calc(100% - 1.5rem));padding:.45rem .55rem;border-radius:12px;background:#0f172ad1;color:#e2e8f0;box-shadow:0 10px 24px #0f172a3d,inset 0 0 0 1px #94a3b82e;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}.legend-copy[_ngcontent-%COMP%], .legend-values[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:.5rem;align-items:center}.legend-title[_ngcontent-%COMP%], .legend-unit[_ngcontent-%COMP%], .legend-values[_ngcontent-%COMP%]{font-size:.68rem}.legend-title[_ngcontent-%COMP%]{font-weight:700;letter-spacing:.04em;text-transform:uppercase}.legend-unit[_ngcontent-%COMP%]{color:#93c5fd}.legend-gradient[_ngcontent-%COMP%]{height:.45rem;margin:.3rem 0 .2rem;border-radius:999px}.legend-values[_ngcontent-%COMP%]{color:#cbd5e1}.map-overlay[_ngcontent-%COMP%], .map-error[_ngcontent-%COMP%]{position:absolute;inset:0;display:grid;place-items:center;background:#f8fafcb8;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.map-error[_ngcontent-%COMP%]{padding:1.5rem;text-align:center;color:#991b1b}@media(max-width:640px){.wind-speed-legend[_ngcontent-%COMP%]{width:min(210px,calc(100% - 1.5rem))}}"],changeDetection:0});};var qd=(i,n)=>n.value;function Zd(i,n){if(i&1){let e=Ve();h(0,"button",2),V("click",function(){let o=Ce(e).$implicit,r=S();return we(r.valueChange.emit(o.value));}),h(1,"span",3),J(2),u(),h(3,"span",4),J(4),u()();}if(i&2){let e=n.$implicit,t=S();E("timeline-card-selected",e.value===t.value),L("aria-pressed",e.value===t.value),p(2),oe(e.label),p(2),oe(e.value);}}var si=class i{hours=[];value=null;valueChange=new N();static ɵfac=function(e){return new(e||i)();};static ɵcmp=v({type:i,selectors:[["app-time-slider"]],inputs:{hours:"hours",value:"value"},outputs:{valueChange:"valueChange"},decls:3,vars:0,consts:()=>{let n;return n="Linha do tempo dos hor\xE1rios dispon\xEDveis",[["aria-label",n,1,"timeline-shell"],["mat-button","","type","button",1,"timeline-card",3,"timeline-card-selected"],["mat-button","","type","button",1,"timeline-card",3,"click"],[1,"timeline-card-label"],[1,"timeline-card-value"]];},template:function(e,t){e&1&&(h(0,"div",0),ln(1,Zd,5,5,"button",1,qd),u()),e&2&&(p(),dn(t.hours));},dependencies:[jn,zn],styles:[".timeline-shell[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem;height:calc(100vh - 420px);overflow:auto}.timeline-card[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:1rem;width:100%;min-height:72px;padding:.9rem 1rem;border:1px solid rgba(148,163,184,.4);border-radius:18px;background:linear-gradient(135deg,#eff6ffe6,#fffffffa);text-align:left;transition:border-color .16s ease,background .16s ease,box-shadow .16s ease,transform .16s ease}.timeline-card[_ngcontent-%COMP%]:hover{border-color:#3b82f680;box-shadow:0 10px 24px #2563eb1f;transform:translateY(-1px)}.timeline-card-selected[_ngcontent-%COMP%]{border-color:#2563eb;background:linear-gradient(135deg,#dbeafef2,#eff6ff);box-shadow:0 14px 28px #2563eb29}.timeline-card-label[_ngcontent-%COMP%], .timeline-card-value[_ngcontent-%COMP%]{display:block}.timeline-card-label[_ngcontent-%COMP%]{font-size:1rem;font-weight:600;color:#0f172a}.timeline-card-value[_ngcontent-%COMP%]{font-size:.82rem;letter-spacing:.08em;text-transform:uppercase;color:#475569}"],changeDetection:0});};var li="wind-map.arcgis.api-key",di=class i{stateSubject=new Jt(this.createInitialState());state$=this.stateSubject.asObservable();authenticateWithApiKey(n){let e=n.trim();localStorage.setItem(li,e),this.stateSubject.next({status:"authenticated",provider:"api-key",apiKey:e});}continueInAnonymousMode(){localStorage.removeItem(li),this.stateSubject.next({status:"authenticated",provider:"anonymous",apiKey:null});}signOut(){localStorage.removeItem(li),this.stateSubject.next({status:"required",provider:"api-key",apiKey:null});}createInitialState(){let n=localStorage.getItem(li)?.trim()??"";return n?{status:"authenticated",provider:"api-key",apiKey:n}:{status:"required",provider:"api-key",apiKey:null};}static ɵfac=function(e){return new(e||i)();};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});};var cs=$localize.locale||"pt";function bo(i){return i.slice(0,10);}function vo(i){return i.slice(11,16);}function ms(i,n){let e=new Date(`${i}T${n}:00`);return new Intl.DateTimeFormat(cs,{dateStyle:"medium",timeStyle:"short"}).format(e);}function Qd(i){let[n,e]=i.split(":").map(o=>Number(o)),t=new Date(2e3,0,1,n,e);return new Intl.DateTimeFormat(cs,{hour:"numeric",minute:"2-digit"}).format(t);}function us(i){return[...i].sort((n,e)=>n.localeCompare(e)).map(n=>({value:n,label:Qd(n)}));}var ci=class i{httpClient=s(fn);datasetState$=this.loadDataset().pipe(K(n=>({status:"ready",dataset:n})),en(()=>ge({status:"error",message:"N\xE3o foi poss\xEDvel carregar os arquivos GeoJSON de vento. Verifique as fontes de dados configuradas e tente novamente."})),me({status:"loading"}),De(1));createRenderState(n,e,t){return{dayKey:e,hourKey:t,timestampLabel:ms(e,t),lineFeatures:n.lineFeatures.filter(o=>o.dayKey===e&&o.hourKey===t),polygonFeatures:n.polygonFeatures.filter(o=>o.dayKey===e&&o.hourKey===t),powerlineFeatures:n.powerlineFeatures,windSpeedRange:n.windSpeedRange};}getValidDayKey(n,e){return e&&n.days.includes(e)?e:n.days[0]??null;}getValidHourKey(n,e,t){if(!e)return null;let o=n.hoursByDay[e]??[];return t&&o.some(r=>r.value===t)?t:o[0]?.value??null;}loadDataset(){return tt({lineCollection:this.httpClient.get("./data/wind10_timelapse_sirgas2000.geojson"),polygonCollection:this.httpClient.get("./data/wind10_threshold_polygons_sirgas2000_clean.geojson"),powerlineCollection:this.httpClient.get("./data/powerlines_interesse.geojson")}).pipe(K(({lineCollection:n,polygonCollection:e,powerlineCollection:t})=>Jd(n,e,t)));}static ɵfac=function(e){return new(e||i)();};static ɵprov=g({token:i,factory:i.ɵfac,providedIn:"root"});};function Jd(i,n,e){let t=i.features.filter(d=>d.geometry.coordinates.length>=2).map((d,m)=>{let x=bo(d.properties.time),B=vo(d.properties.time);return{id:`line-${m}`,time:d.properties.time,dayKey:x,hourKey:B,coordinates:d.geometry.coordinates,endpoint:d.geometry.coordinates[d.geometry.coordinates.length-1],properties:d.properties};}),o=n.features.filter(d=>d.geometry.coordinates.length>0).map((d,m)=>({id:`polygon-${m}`,time:d.properties.time,dayKey:bo(d.properties.time),hourKey:vo(d.properties.time),rings:d.geometry.coordinates,properties:d.properties})),r=e.features.filter(d=>d.geometry.coordinates.length>=2).map((d,m)=>({id:`powerline-${m}`,coordinates:d.geometry.coordinates,properties:d.properties})),a=[...new Set(t.map(d=>d.dayKey))].sort((d,m)=>d.localeCompare(m)),l=Object.fromEntries(a.map(d=>[d,us(new Set(t.filter(m=>m.dayKey===d).map(m=>m.hourKey)))])),c=t.map(d=>d.properties.ws10);return{days:a,hoursByDay:l,lineFeatures:t,polygonFeatures:o,powerlineFeatures:r,windSpeedRange:{min:Math.min(...c),max:Math.max(...c)}};}function ec(i,n){if(i&1){let e=Ve();h(0,"button",22),V("click",function(){Ce(e);let o=S(2);return we(o.signOut());}),Q(1,1),u();}}function tc(i,n){if(i&1){let e=Ve();h(0,"mat-card",20)(1,"div",23)(2,"div")(3,"p",24),Q(4,2),u(),h(5,"h2"),Q(6,3),u()(),h(7,"mat-icon"),J(8,"vpn_key"),u()(),h(9,"p",25),Q(10,4),u(),h(11,"div",26)(12,"mat-form-field",27)(13,"mat-label"),Q(14,5),u(),X(15,"input",28),u(),h(16,"div",29)(17,"button",30),V("click",function(){Ce(e);let o=S(2);return we(o.authenticateWithApiKey());}),Q(18,6),u(),h(19,"button",22),V("click",function(){Ce(e);let o=S(2);return we(o.continueWithoutCredentials());}),Q(20,7),u()()()();}if(i&2){let e=S(2);p(15),j("formControl",e.apiKeyControl),p(2),j("disabled",!e.apiKeyControl.value.trim());}}function nc(i,n){if(i&1&&(h(0,"span",39),J(1),u()),i&2){let e=S(2);p(),oe(e.renderState.timestampLabel);}}function ic(i,n){if(i&1){let e=Ve();h(0,"div",21)(1,"mat-card",31)(2,"div",32)(3,"div")(4,"p",24),Q(5,8),u(),h(6,"h2"),Q(7,9),u()()(),h(8,"div",33)(9,"app-day-filter",34),V("valueChange",function(o){Ce(e);let r=S(2);return we(r.onDaySelected(o));}),u()(),X(10,"mat-divider"),h(11,"div",33)(12,"div",35)(13,"h3"),Q(14,10),u(),h(15,"p"),Q(16,11),u()(),h(17,"app-time-slider",36),V("valueChange",function(o){Ce(e);let r=S(2);return we(r.onHourSelected(o));}),u()()(),h(18,"mat-card",37)(19,"div",38)(20,"div")(21,"p",24),Q(22,12),u(),h(23,"h2"),Q(24,13),u()(),P(25,nc,2,1,"span",39),u(),X(26,"app-map-container",40),u()();}if(i&2){let e=S(),t=S();p(9),j("days",e.days)("value",e.selectedDay),p(8),j("hours",e.hourOptions)("value",e.selectedHour),p(8),R(e.renderState?25:-1),p(),j("authState",e.authState)("renderState",e.renderState)("loading",e.datasetState.status==="loading")("windSpeedLegendGradient",t.windSpeedLegendGradient)("windSpeedRange",e.windSpeedRange);}}function oc(i,n){if(i&1&&(h(0,"div",14)(1,"mat-toolbar",15)(2,"div",16)(3,"span",17),J(4,"AXIA"),u(),h(5,"span",18),Q(6,0),u()(),P(7,ec,2,0,"button",19),u(),P(8,tc,21,2,"mat-card",20)(9,ic,27,10,"div",21),u()),i&2){let e=n;p(7),R(e.authState.status==="authenticated"?7:-1),p(),R(e.authState.status==="required"?8:9);}}var hs=class i{windSpeedLegendGradient="linear-gradient(90deg, rgb(14, 165, 233) 0%, rgb(34, 197, 94) 25%, rgb(250, 204, 21) 50%, rgb(249, 115, 22) 75%, rgb(220, 38, 38) 100%)";destroyRef=s(at);mapAuthService=s(di);windDataService=s(ci);latestDataset=null;apiKeyControl=new Tt("",{nonNullable:!0});dayControl=new Tt(null);hourControl=new Tt(null);authState$=this.mapAuthService.state$;datasetState$=this.windDataService.datasetState$;dataset$=this.datasetState$.pipe(ae(n=>n.status==="ready"),K(n=>n.dataset),xe(n=>{this.latestDataset=n;}),De(1));selectedDay$=this.dayControl.valueChanges.pipe(me(this.dayControl.value),it());selectedHour$=this.hourControl.valueChanges.pipe(me(this.hourControl.value),it());hourOptions$=ui([this.dataset$,this.selectedDay$]).pipe(K(([n,e])=>e?n.hoursByDay[e]??[]:[]),De(1));viewModel$=ui([this.datasetState$,this.authState$,this.dataset$.pipe(me(null)),this.selectedDay$,this.selectedHour$,this.hourOptions$.pipe(me([]))]).pipe(K(([n,e,t,o,r,a])=>{let l=t&&o&&r?this.windDataService.createRenderState(t,o,r):null;return{datasetState:n,authState:e,days:t?.days??[],selectedDay:o,selectedHour:r,hourOptions:a,renderState:l,windSpeedRange:t?.windSpeedRange??null,summary:l&&l.lineFeatures.length>0?""+l.lineFeatures.length+" vetores de vento e "+l.polygonFeatures.length+" pol\xEDgonos de pico para "+l.timestampLabel+"":"N\xE3o h\xE1 fei\xE7\xF5es dispon\xEDveis para a sele\xE7\xE3o atual."};}),De(1));constructor(){this.dataset$.pipe(xe(n=>{let e=this.windDataService.getValidDayKey(n,this.dayControl.value);e!==this.dayControl.value&&this.dayControl.setValue(e,{emitEvent:!0});let t=this.windDataService.getValidHourKey(n,e,this.hourControl.value);t!==this.hourControl.value&&this.hourControl.setValue(t,{emitEvent:!0});}),vi(this.destroyRef)).subscribe(),this.selectedDay$.pipe(xe(n=>{if(!this.latestDataset)return;let e=this.windDataService.getValidHourKey(this.latestDataset,n,this.hourControl.value);e!==this.hourControl.value&&this.hourControl.setValue(e,{emitEvent:!0});}),vi(this.destroyRef)).subscribe();}onDaySelected(n){this.dayControl.setValue(n);}onHourSelected(n){this.hourControl.setValue(n);}authenticateWithApiKey(){let n=this.apiKeyControl.value.trim();n&&(this.mapAuthService.authenticateWithApiKey(n),this.apiKeyControl.reset(""));}continueWithoutCredentials(){this.mapAuthService.continueInAnonymousMode();}signOut(){this.mapAuthService.signOut();}static ɵfac=function(e){return new(e||i)();};static ɵcmp=v({type:i,selectors:[["app-wind-map-page"]],decls:2,vars:3,consts:()=>{let n;n="Prova de conceito do mapa de vento com ArcGIS";let e;e=" Alterar autentica\xE7\xE3o ";let t;t="Cole sua chave de API do ArcGIS";let o;o="Autentica\xE7\xE3o";let r;r="Autentique-se antes de abrir o mapa";let a;a=" Informe uma chave de API do ArcGIS se o seu mapa-base ou servi\xE7os protegidos exigirem isso, ou continue no modo de demonstra\xE7\xE3o an\xF4nima para os dados locais da prova de conceito. ";let l;l="Chave de API do ArcGIS";let c;c=" Autenticar ";let d;d=" Continuar no modo de demonstra\xE7\xE3o ";let m;m="Controles";let x;x="Filtre o hor\xE1rio ativo";let B;B="Linha do tempo por hor\xE1rio";let H;H=" Selecione um hor\xE1rio dispon\xEDvel para atualizar as duas camadas em conjunto. ";let U;U="Mapa";let G;return G="Vetores de vento e pol\xEDgonos de pico",[n,e,o,r,a,l,c,d,m,x,B,H,U,G,[1,"page-shell"],[1,"page-toolbar"],[1,"toolbar-copy"],[1,"eyebrow"],[1,"toolbar-title"],["mat-stroked-button","","type","button"],[1,"auth-card"],[1,"content-grid"],["mat-stroked-button","","type","button",3,"click"],[1,"auth-header"],[1,"section-label"],[1,"auth-copy"],[1,"auth-form"],["appearance","outline"],["matInput","","placeholder",t,"autocomplete","off",3,"formControl"],[1,"auth-actions"],["mat-flat-button","","type","button","color","primary",3,"click","disabled"],[1,"control-card"],[1,"control-header"],[1,"control-row"],[3,"valueChange","days","value"],[1,"timeline-copy"],[3,"valueChange","hours","value"],[1,"map-card"],[1,"map-card-header"],[1,"map-timestamp"],[3,"authState","renderState","loading","windSpeedLegendGradient","windSpeedRange"]];},template:function(e,t){if(e&1&&(P(0,oc,10,2,"div",14),St(1,"async")),e&2){let o;R((o=jo(1,1,t.viewModel$))?0:-1,o);}},dependencies:[br,In,mr,ki,jn,zn,ea,Jr,na,ta,Pe,bt,qe,wa,Ca,Da,Aa,Un,Pa,Oa,oi,si,ai,Uo],styles:["[_nghost-%COMP%]{display:block}.page-shell[_ngcontent-%COMP%]{min-height:100dvh;padding:1.25rem;background:radial-gradient(circle at top left,rgba(14,165,233,.18),transparent 28%),radial-gradient(circle at bottom right,rgba(30,64,175,.16),transparent 30%),linear-gradient(180deg,#f8fbff,#eef4fb 48%,#e2e8f0)}.page-toolbar[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:1rem;margin-bottom:1.25rem;border-radius:24px;background:#ffffffc7;box-shadow:0 16px 40px #0f172a14}.toolbar-copy[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.15rem}.eyebrow[_ngcontent-%COMP%], .section-label[_ngcontent-%COMP%], .hero-kicker[_ngcontent-%COMP%]{margin:0;text-transform:uppercase;letter-spacing:.12em;font-size:.75rem;font-weight:700;color:#0369a1}.toolbar-title[_ngcontent-%COMP%]{font-size:1.05rem;font-weight:600}.hero-panel[_ngcontent-%COMP%]{display:grid;grid-template-columns:1.6fr 1fr;gap:1rem;margin-bottom:1rem}.hero-copy[_ngcontent-%COMP%], .status-card[_ngcontent-%COMP%], .auth-card[_ngcontent-%COMP%], .control-card[_ngcontent-%COMP%], .map-card[_ngcontent-%COMP%]{border-radius:28px;background:#ffffffc7;box-shadow:0 24px 60px #0f172a14}.hero-copy[_ngcontent-%COMP%]{padding:2rem}.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin:.35rem 0 .75rem;font-size:clamp(2rem,4vw,3.4rem);line-height:1;font-weight:700;color:#0f172a}.hero-description[_ngcontent-%COMP%]{margin:0;max-width:56ch;color:#334155}.status-card[_ngcontent-%COMP%], .auth-card[_ngcontent-%COMP%], .control-card[_ngcontent-%COMP%], .map-card[_ngcontent-%COMP%]{padding:1.25rem}.status-content[_ngcontent-%COMP%]{display:flex;gap:1rem;align-items:center}.status-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .auth-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .control-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .map-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .timeline-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0}.status-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .auth-copy[_ngcontent-%COMP%], .timeline-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:.35rem 0 0;color:#475569}.status-content.error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:#b91c1c}.auth-card[_ngcontent-%COMP%]{max-width:860px}.auth-header[_ngcontent-%COMP%], .map-card-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:1rem;align-items:start}.auth-form[_ngcontent-%COMP%]{display:grid;gap:1rem;margin-top:1.25rem}.auth-actions[_ngcontent-%COMP%]{display:flex;gap:.75rem;flex-wrap:wrap}.content-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:minmax(320px,420px) minmax(0,1fr);gap:1rem}.control-card[_ngcontent-%COMP%], .control-row[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.timeline-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1rem}.map-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem;min-height:620px}.map-timestamp[_ngcontent-%COMP%]{display:inline-flex;align-items:center;padding:.55rem .85rem;border-radius:999px;background:#dbeafe;color:#1d4ed8;font-size:.88rem;font-weight:600}app-map-container[_ngcontent-%COMP%]{flex:1}@media(max-width:960px){.hero-panel[_ngcontent-%COMP%], .content-grid[_ngcontent-%COMP%]{grid-template-columns:1fr}.map-card[_ngcontent-%COMP%]{min-height:540px}}@media(max-width:640px){.page-shell[_ngcontent-%COMP%]{padding:.75rem}.page-toolbar[_ngcontent-%COMP%], .hero-copy[_ngcontent-%COMP%], .status-card[_ngcontent-%COMP%], .auth-card[_ngcontent-%COMP%], .control-card[_ngcontent-%COMP%], .map-card[_ngcontent-%COMP%]{border-radius:20px}.map-card-header[_ngcontent-%COMP%]{flex-direction:column}}"],changeDetection:0});};export{hs as WindMapPageComponent};/**i18n:0a9b4ff9093563fe2398ab7b138fc69ca32ca9c1e5897de24bf57edc03086ff3*/