import{D as Ke,E as A,F as j,p as G,G as B,l as x,h as g,H as I,q as U,x as z,z as ue,I as ee,A as Ye,J as Xe,L as Je,B as Qe,o as v,f as b,b as i,a as E,w as S,u as L,j as P,k as se,d as F,g as Q,c as Z,t as V,M as Ze,N as et}from"./app-de6af253.js";import{_ as tt}from"./Pagination-49e8385b.js";import{_ as nt}from"./Chip-9e5c93cf.js";import{_ as ot}from"./EventDetail-66c61208.js";import"./TextInput-60369034.js";import"./PrimaryButton-79d96678.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./Breadcrumb-d11842dc.js";function H(e,t,...n){if(e in t){let r=t[e];return typeof r=="function"?r(...n):r}let o=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(r=>`"${r}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,H),o}var he=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(he||{}),rt=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(rt||{});function q({visible:e=!0,features:t=0,ourProps:n,theirProps:o,...r}){var l;let a=ke(o,n),s=Object.assign(r,{props:a});if(e||t&2&&a.static)return pe(s);if(t&1){let d=(l=a.unmount)==null||l?0:1;return H(d,{[0](){return null},[1](){return pe({...r,props:{...a,hidden:!0,style:{display:"none"}}})}})}return pe(s)}function pe({props:e,attrs:t,slots:n,slot:o,name:r}){var l,a;let{as:s,...d}=lt(e,["unmount","static"]),u=(l=n.default)==null?void 0:l.call(n,o),c={};if(o){let y=!1,w=[];for(let[f,p]of Object.entries(o))typeof p=="boolean"&&(y=!0),p===!0&&w.push(f);y&&(c["data-headlessui-state"]=w.join(" "))}if(s==="template"){if(u=$e(u??[]),Object.keys(d).length>0||Object.keys(t).length>0){let[y,...w]=u??[];if(!at(y)||w.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${r} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(d).concat(Object.keys(t)).map(m=>m.trim()).filter((m,M,ne)=>ne.indexOf(m)===M).sort((m,M)=>m.localeCompare(M)).map(m=>`  - ${m}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(m=>`  - ${m}`).join(`
`)].join(`
`));let f=ke((a=y.props)!=null?a:{},d),p=Ke(y,f);for(let m in f)m.startsWith("on")&&(p.props||(p.props={}),p.props[m]=f[m]);return p}return Array.isArray(u)&&u.length===1?u[0]:u}return A(s,Object.assign({},d,c),{default:()=>u})}function $e(e){return e.flatMap(t=>t.type===j?$e(t.children):[t])}function ke(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let o of e)for(let r in o)r.startsWith("on")&&typeof o[r]=="function"?(n[r]!=null||(n[r]=[]),n[r].push(o[r])):t[r]=o[r];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(o=>[o,void 0])));for(let o in n)Object.assign(t,{[o](r,...l){let a=n[o];for(let s of a){if(r instanceof Event&&r.defaultPrevented)return;s(r,...l)}}});return t}function lt(e,t=[]){let n=Object.assign({},e);for(let o of t)o in n&&delete n[o];return n}function at(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}let st=0;function it(){return++st}function Le(){return it()}var Se=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Se||{});function k(e){var t;return e==null||e.value==null?null:(t=e.value.$el)!=null?t:e.value}let ut=Symbol("Context");var X=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(X||{});function dt(){return G(ut,null)}var ct=Object.defineProperty,ft=(e,t,n)=>t in e?ct(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xe=(e,t,n)=>(ft(e,typeof t!="symbol"?t+"":t,n),n);class pt{constructor(){xe(this,"current",this.detect()),xe(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}}let de=new pt;function te(e){if(de.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=k(e);if(t)return t.ownerDocument}return document}let ge=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var T=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(T||{}),Oe=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(Oe||{}),mt=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(mt||{});function vt(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(ge)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var Fe=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(Fe||{});function ht(e,t=0){var n;return e===((n=te(e))==null?void 0:n.body)?!1:H(t,{[0](){return e.matches(ge)},[1](){let o=e;for(;o!==null;){if(o.matches(ge))return!0;o=o.parentElement}return!1}})}var gt=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(gt||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));function N(e){e==null||e.focus({preventScroll:!0})}let yt=["textarea","input"].join(",");function wt(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,yt))!=null?n:!1}function bt(e,t=n=>n){return e.slice().sort((n,o)=>{let r=t(n),l=t(o);if(r===null||l===null)return 0;let a=r.compareDocumentPosition(l);return a&Node.DOCUMENT_POSITION_FOLLOWING?-1:a&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ae(e,t,{sorted:n=!0,relativeTo:o=null,skipElements:r=[]}={}){var l;let a=(l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?l:document,s=Array.isArray(e)?n?bt(e):e:vt(e);r.length>0&&s.length>1&&(s=s.filter(p=>!r.includes(p))),o=o??a.activeElement;let d=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,s.indexOf(o))-1;if(t&4)return Math.max(0,s.indexOf(o))+1;if(t&8)return s.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),c=t&32?{preventScroll:!0}:{},y=0,w=s.length,f;do{if(y>=w||y+w<=0)return 0;let p=u+y;if(t&16)p=(p+w)%w;else{if(p<0)return 3;if(p>=w)return 1}f=s[p],f==null||f.focus(c),y+=d}while(f!==a.activeElement);return t&6&&wt(f)&&f.select(),2}function me(e,t,n){de.isServer||B(o=>{document.addEventListener(e,t,n),o(()=>document.removeEventListener(e,t,n))})}function xt(e,t,n=g(()=>!0)){function o(l,a){if(!n.value||l.defaultPrevented)return;let s=a(l);if(s===null||!s.getRootNode().contains(s))return;let d=function u(c){return typeof c=="function"?u(c()):Array.isArray(c)||c instanceof Set?c:[c]}(e);for(let u of d){if(u===null)continue;let c=u instanceof HTMLElement?u:k(u);if(c!=null&&c.contains(s)||l.composed&&l.composedPath().includes(c))return}return!ht(s,Fe.Loose)&&s.tabIndex!==-1&&l.preventDefault(),t(l,s)}let r=x(null);me("mousedown",l=>{var a,s;n.value&&(r.value=((s=(a=l.composedPath)==null?void 0:a.call(l))==null?void 0:s[0])||l.target)},!0),me("click",l=>{r.value&&(o(l,()=>r.value),r.value=null)},!0),me("blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}var ie=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ie||{});let ye=I({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{let{features:o,...r}=e,l={"aria-hidden":(o&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(o&4)===4&&(o&2)!==2&&{display:"none"}}};return q({ourProps:l,theirProps:r,slot:{},attrs:n,slots:t,name:"Hidden"})}}});function _t(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function Et(e,t,n){de.isServer||B(o=>{window.addEventListener(e,t,n),o(()=>window.removeEventListener(e,t,n))})}var J=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(J||{});function $t(){let e=x(0);return Et("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function Pe(e,t,n,o){de.isServer||B(r=>{e=e??window,e.addEventListener(t,n,o),r(()=>e.removeEventListener(t,n,o))})}function Ae(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function kt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function je(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.value){let o=k(n);o instanceof HTMLElement&&t.add(o)}return t}var Te=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Te||{});let K=Object.assign(I({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:x(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:n,expose:o}){let r=x(null);o({el:r,$el:r});let l=g(()=>te(r)),a=x(!1);U(()=>a.value=!0),z(()=>a.value=!1),St({ownerDocument:l},g(()=>a.value&&!!(e.features&16)));let s=Ot({ownerDocument:l,container:r,initialFocus:g(()=>e.initialFocus)},g(()=>a.value&&!!(e.features&2)));Ft({ownerDocument:l,container:r,containers:e.containers,previousActiveElement:s},g(()=>a.value&&!!(e.features&8)));let d=$t();function u(f){let p=k(r);p&&(m=>m())(()=>{H(d.value,{[J.Forwards]:()=>{ae(p,T.First,{skipElements:[f.relatedTarget]})},[J.Backwards]:()=>{ae(p,T.Last,{skipElements:[f.relatedTarget]})}})})}let c=x(!1);function y(f){f.key==="Tab"&&(c.value=!0,requestAnimationFrame(()=>{c.value=!1}))}function w(f){if(!a.value)return;let p=je(e.containers);k(r)instanceof HTMLElement&&p.add(k(r));let m=f.relatedTarget;m instanceof HTMLElement&&m.dataset.headlessuiFocusGuard!=="true"&&(Me(p,m)||(c.value?ae(k(r),H(d.value,{[J.Forwards]:()=>T.Next,[J.Backwards]:()=>T.Previous})|T.WrapAround,{relativeTo:f.target}):f.target instanceof HTMLElement&&N(f.target)))}return()=>{let f={},p={ref:r,onKeydown:y,onFocusout:w},{features:m,initialFocus:M,containers:ne,...oe}=e;return A(j,[!!(m&4)&&A(ye,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:ie.Focusable}),q({ourProps:p,theirProps:{...t,...oe},slot:f,attrs:t,slots:n,name:"FocusTrap"}),!!(m&4)&&A(ye,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:u,features:ie.Focusable})])}}}),{features:Te}),D=[];kt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&D[0]!==t.target&&(D.unshift(t.target),D=D.filter(n=>n!=null&&n.isConnected),D.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function Lt(e){let t=x(D.slice());return ue([e],([n],[o])=>{o===!0&&n===!1?Ae(()=>{t.value.splice(0)}):o===!1&&n===!0&&(t.value=D.slice())},{flush:"post"}),()=>{var n;return(n=t.value.find(o=>o!=null&&o.isConnected))!=null?n:null}}function St({ownerDocument:e},t){let n=Lt(t);U(()=>{B(()=>{var o,r;t.value||((o=e.value)==null?void 0:o.activeElement)===((r=e.value)==null?void 0:r.body)&&N(n())},{flush:"post"})}),z(()=>{N(n())})}function Ot({ownerDocument:e,container:t,initialFocus:n},o){let r=x(null),l=x(!1);return U(()=>l.value=!0),z(()=>l.value=!1),U(()=>{ue([t,n,o],(a,s)=>{if(a.every((u,c)=>(s==null?void 0:s[c])===u)||!o.value)return;let d=k(t);d&&Ae(()=>{var u,c;if(!l.value)return;let y=k(n),w=(u=e.value)==null?void 0:u.activeElement;if(y){if(y===w){r.value=w;return}}else if(d.contains(w)){r.value=w;return}y?N(y):ae(d,T.First|T.NoScroll)===Oe.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),r.value=(c=e.value)==null?void 0:c.activeElement})},{immediate:!0,flush:"post"})}),r}function Ft({ownerDocument:e,container:t,containers:n,previousActiveElement:o},r){var l;Pe((l=e.value)==null?void 0:l.defaultView,"focus",a=>{if(!r.value)return;let s=je(n);k(t)instanceof HTMLElement&&s.add(k(t));let d=o.value;if(!d)return;let u=a.target;u&&u instanceof HTMLElement?Me(s,u)?(o.value=u,N(u)):(a.preventDefault(),a.stopPropagation(),N(d)):N(o.value)},!0)}function Me(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let ve=new Map,Y=new Map;function _e(e,t=x(!0)){B(n=>{var o;if(!t.value)return;let r=k(e);if(!r)return;n(function(){var a;if(!r)return;let s=(a=Y.get(r))!=null?a:1;if(s===1?Y.delete(r):Y.set(r,s-1),s!==1)return;let d=ve.get(r);d&&(d["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",d["aria-hidden"]),r.inert=d.inert,ve.delete(r))});let l=(o=Y.get(r))!=null?o:0;Y.set(r,l+1),l===0&&(ve.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0)})}let Ce=Symbol("ForcePortalRootContext");function Pt(){return G(Ce,!1)}let Ee=I({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:n}){return ee(Ce,e.force),()=>{let{force:o,...r}=e;return q({theirProps:r,ourProps:{},slot:{},slots:t,attrs:n,name:"ForcePortalRoot"})}}});function At(e){let t=te(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let n=t.getElementById("headlessui-portal-root");if(n)return n;let o=t.createElement("div");return o.setAttribute("id","headlessui-portal-root"),t.body.appendChild(o)}let jt=I({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:n}){let o=x(null),r=g(()=>te(o)),l=Pt(),a=G(De,null),s=x(l===!0||a==null?At(o.value):a.resolveTarget());return B(()=>{l||a!=null&&(s.value=a.resolveTarget())}),z(()=>{var d,u;let c=(d=r.value)==null?void 0:d.getElementById("headlessui-portal-root");c&&s.value===c&&s.value.children.length<=0&&((u=s.value.parentElement)==null||u.removeChild(s.value))}),()=>{if(s.value===null)return null;let d={ref:o,"data-headlessui-portal":""};return A(Ye,{to:s.value},q({ourProps:d,theirProps:e,slot:{},attrs:n,slots:t,name:"Portal"}))}}}),De=Symbol("PortalGroupContext"),Tt=I({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:n}){let o=Xe({resolveTarget(){return e.target}});return ee(De,o),()=>{let{target:r,...l}=e;return q({theirProps:l,ourProps:{},slot:{},attrs:t,slots:n,name:"PortalGroup"})}}}),Re=Symbol("StackContext");var we=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(we||{});function Mt(){return G(Re,()=>{})}function Ct({type:e,enabled:t,element:n,onUpdate:o}){let r=Mt();function l(...a){o==null||o(...a),r(...a)}U(()=>{ue(t,(a,s)=>{a?l(0,e,n):s===!0&&l(1,e,n)},{immediate:!0,flush:"sync"})}),z(()=>{t.value&&l(1,e,n)}),ee(Re,l)}let Dt=Symbol("DescriptionContext");function Rt({slot:e=x({}),name:t="Description",props:n={}}={}){let o=x([]);function r(l){return o.value.push(l),()=>{let a=o.value.indexOf(l);a!==-1&&o.value.splice(a,1)}}return ee(Dt,{register:r,slot:e,name:t,props:n}),g(()=>o.value.length>0?o.value.join(" "):void 0)}function Nt(e){let t=Je(e.getSnapshot());return z(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Ne(){let e=[],t={addEventListener(n,o,r,l){return n.addEventListener(o,r,l),t.add(()=>n.removeEventListener(o,r,l))},requestAnimationFrame(...n){let o=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(o))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let o=setTimeout(...n);t.add(()=>clearTimeout(o))},style(n,o,r){let l=n.style.getPropertyValue(o);return Object.assign(n.style,{[o]:r}),this.add(()=>{Object.assign(n.style,{[o]:l})})},group(n){let o=Ne();return n(o),this.add(()=>o.dispose())},add(n){return e.push(n),()=>{let o=e.indexOf(n);if(o>=0)for(let r of e.splice(o,1))r()}},dispose(){for(let n of e.splice(0))n()}};return t}function Ht(e,t){let n=e(),o=new Set;return{getSnapshot(){return n},subscribe(r){return o.add(r),()=>o.delete(r)},dispatch(r,...l){let a=t[r].call(n,...l);a&&(n=a,o.forEach(s=>s()))}}}function Bt(){let e;return{before({doc:t}){var n;let o=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-o.clientWidth},after({doc:t,d:n}){let o=t.documentElement,r=o.clientWidth-o.offsetWidth,l=e-r;n.style(o,"paddingRight",`${l}px`)}}}function It(){if(!_t())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:o}){function r(a){return o.containers.flatMap(s=>s()).some(s=>s.contains(a))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let l=null;n.addEventListener(t,"click",a=>{if(a.target instanceof HTMLElement)try{let s=a.target.closest("a");if(!s)return;let{hash:d}=new URL(s.href),u=t.querySelector(d);u&&!r(u)&&(l=u)}catch{}},!0),n.addEventListener(t,"touchmove",a=>{a.target instanceof HTMLElement&&!r(a.target)&&a.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})}}}function qt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Wt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let R=Ht(()=>new Map,{PUSH(e,t){var n;let o=(n=this.get(e))!=null?n:{doc:e,count:0,d:Ne(),meta:new Set};return o.count++,o.meta.add(t),this.set(e,o),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let o={doc:e,d:t,meta:Wt(n)},r=[It(),Bt(),qt()];r.forEach(({before:l})=>l==null?void 0:l(o)),r.forEach(({after:l})=>l==null?void 0:l(o))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});R.subscribe(()=>{let e=R.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let o=t.get(n.doc)==="hidden",r=n.count!==0;(r&&!o||!r&&o)&&R.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&R.dispatch("TEARDOWN",n)}});function Ut(e,t,n){let o=Nt(R),r=g(()=>{let l=e.value?o.value.get(e.value):void 0;return l?l.count>0:!1});return ue([e,t],([l,a],[s],d)=>{if(!l||!a)return;R.dispatch("PUSH",l,n);let u=!1;d(()=>{u||(R.dispatch("POP",s??l,n),u=!0)})},{immediate:!0}),r}var Vt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Vt||{});let be=Symbol("DialogContext");function He(e){let t=G(be,null);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,He),n}return t}let le="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Gt=I({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:le},initialFocus:{type:Object,default:null},id:{type:String,default:()=>`headlessui-dialog-${Le()}`}},emits:{close:e=>!0},setup(e,{emit:t,attrs:n,slots:o,expose:r}){var l;let a=x(!1);U(()=>{a.value=!0});let s=x(0),d=dt(),u=g(()=>e.open===le&&d!==null?(d.value&X.Open)===X.Open:e.open),c=x(null),y=x(null),w=g(()=>te(c));if(r({el:c,$el:c}),!(e.open!==le||d!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof u.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${u.value===le?void 0:e.open}`);let f=g(()=>a.value&&u.value?0:1),p=g(()=>f.value===0),m=g(()=>s.value>1),M=G(be,null)!==null,ne=g(()=>m.value?"parent":"leaf"),oe=g(()=>d!==null?(d.value&X.Closing)===X.Closing:!1),Be=g(()=>M||oe.value?!1:p.value),Ie=g(()=>{var h,_,O;return(O=Array.from((_=(h=w.value)==null?void 0:h.querySelectorAll("body > *"))!=null?_:[]).find($=>$.id==="headlessui-portal-root"?!1:$.contains(k(y))&&$ instanceof HTMLElement))!=null?O:null});_e(Ie,Be);let qe=g(()=>m.value?!0:p.value),We=g(()=>{var h,_,O;return(O=Array.from((_=(h=w.value)==null?void 0:h.querySelectorAll("[data-headlessui-portal]"))!=null?_:[]).find($=>$.contains(k(y))&&$ instanceof HTMLElement))!=null?O:null});_e(We,qe),Ct({type:"Dialog",enabled:g(()=>f.value===0),element:c,onUpdate:(h,_)=>{if(_==="Dialog")return H(h,{[we.Add]:()=>s.value+=1,[we.Remove]:()=>s.value-=1})}});let Ue=Rt({name:"DialogDescription",slot:g(()=>({open:u.value}))}),re=x(null),C={titleId:re,panelRef:x(null),dialogState:f,setTitleId(h){re.value!==h&&(re.value=h)},close(){t("close",!1)}};ee(be,C);function ce(){var h,_,O;return[...Array.from((_=(h=w.value)==null?void 0:h.querySelectorAll("html > *, body > *, [data-headlessui-portal]"))!=null?_:[]).filter($=>!($===document.body||$===document.head||!($ instanceof HTMLElement)||$.contains(k(y))||C.panelRef.value&&$.contains(C.panelRef.value))),(O=C.panelRef.value)!=null?O:c.value]}let Ve=g(()=>!(!p.value||m.value));xt(()=>ce(),(h,_)=>{C.close(),Qe(()=>_==null?void 0:_.focus())},Ve);let Ge=g(()=>!(m.value||f.value!==0));Pe((l=w.value)==null?void 0:l.defaultView,"keydown",h=>{Ge.value&&(h.defaultPrevented||h.key===Se.Escape&&(h.preventDefault(),h.stopPropagation(),C.close()))});let ze=g(()=>!(oe.value||f.value!==0||M));return Ut(w,ze,h=>{var _;return{containers:[...(_=h.containers)!=null?_:[],ce]}}),B(h=>{if(f.value!==0)return;let _=k(c);if(!_)return;let O=new ResizeObserver($=>{for(let fe of $){let W=fe.target.getBoundingClientRect();W.x===0&&W.y===0&&W.width===0&&W.height===0&&C.close()}});O.observe(_),h(()=>O.disconnect())}),()=>{let{id:h,open:_,initialFocus:O,...$}=e,fe={...n,ref:c,id:h,role:"dialog","aria-modal":f.value===0?!0:void 0,"aria-labelledby":re.value,"aria-describedby":Ue.value},W={open:f.value===0};return A(Ee,{force:!0},()=>[A(jt,()=>A(Tt,{target:c.value},()=>A(Ee,{force:!1},()=>A(K,{initialFocus:O,containers:ce,features:p.value?H(ne.value,{parent:K.features.RestoreFocus,leaf:K.features.All&~K.features.FocusLock}):K.features.None},()=>q({ourProps:fe,theirProps:$,slot:W,attrs:n,slots:o,visible:f.value===0,features:he.RenderStrategy|he.Static,name:"Dialog"}))))),A(ye,{features:ie.Hidden,ref:y})])}}}),zt=I({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:()=>`headlessui-dialog-panel-${Le()}`}},setup(e,{attrs:t,slots:n,expose:o}){let r=He("DialogPanel");o({el:r.panelRef,$el:r.panelRef});function l(a){a.stopPropagation()}return()=>{let{id:a,...s}=e,d={id:a,ref:r.panelRef,onClick:l};return q({ourProps:d,theirProps:s,slot:{open:r.dialogState.value===0},attrs:t,slots:n,name:"DialogPanel"})}}});function Kt(e,t){return v(),b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"})])}function Yt(e,t){return v(),b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})])}function Xt(e,t){return v(),b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"})])}function Jt(e,t){return v(),b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33"})])}function Qt(e,t){return v(),b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"})])}function Zt(e,t){return v(),b("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})])}const en={class:"absolute inset-x-0 top-0 z-50"},tn={class:"flex items-center justify-between p-6 lg:px-8","aria-label":"Global"},nn={class:"flex lg:flex-1"},on=i("span",{class:"sr-only"},"Game India",-1),rn=i("img",{class:"h-8 w-auto",src:"/files/images/logo.svg",alt:""},null,-1),ln={class:"flex lg:hidden"},an=i("span",{class:"sr-only"},"Open main menu",-1),sn={class:"hidden lg:flex lg:gap-x-12"},un=["href"],dn={key:0,class:"hidden lg:flex lg:flex-1 lg:justify-end"},cn=i("span",{"aria-hidden":"true"},"→",-1),fn={key:1,class:"hidden lg:flex lg:flex-1 lg:justify-end"},pn={class:"mr-4"},mn=i("span",{"aria-hidden":"true"},"→",-1),vn={class:""},hn=i("span",{"aria-hidden":"true"},"→",-1),gn=i("div",{class:"fixed inset-0 z-50"},null,-1),yn={class:"flex items-center justify-between"},wn=i("a",{href:"#",class:"-m-1.5 p-1.5"},[i("span",{class:"sr-only"},"Your Company"),i("img",{class:"h-8 w-auto",src:"/files/images/logo.svg",alt:""})],-1),bn=i("span",{class:"sr-only"},"Close menu",-1),xn={class:"mt-6 flow-root"},_n={class:"-my-6 divide-y divide-gray-500/10"},En={class:"space-y-2 py-6"},$n={key:0,class:"py-6"},kn={class:"relative isolate px-6 pt-6 lg:px-8 bg-[url('/images/karate.jpg')]"},Ln={class:"mx-auto max-w-2xl sm:py-30 lg:py-40"},Sn={class:"text-center"},On=i("h1",{class:"text-4xl font-bold tracking-tight text-white sm:text-6xl"},"Register for Karate events.",-1),Fn=i("p",{class:"mt-6 text-lg leading-8 text-white"},"You need to wait for approval after registration.",-1),Pn={class:"mt-10 flex items-center justify-center gap-x-6"},An={__name:"HeroSection",props:{canLogin:{type:Boolean},canRegister:{type:Boolean}},setup(e){const t=x(!1),n=[];return(o,r)=>(v(),b(j,null,[i("header",en,[i("nav",tn,[i("div",nn,[E(L(P),{href:"#",class:"-m-1.5 p-1.5"},{default:S(()=>[on,rn]),_:1})]),i("div",ln,[i("button",{type:"button",class:"-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700",onClick:r[0]||(r[0]=l=>t.value=!0)},[an,E(L(Yt),{class:"h-6 w-6","aria-hidden":"true"})])]),i("div",sn,[(v(),b(j,null,se(n,l=>i("a",{key:l.name,href:l.href,class:"text-sm font-semibold leading-6 text-gray-900"},V(l.name),9,un)),64))]),e.canLogin?(v(),b(j,{key:0},[o.$page.props.auth.user?(v(),b("div",dn,[E(L(P),{href:o.route("dashboard"),class:"text-sm font-semibold leading-6 text-gray-900"},{default:S(()=>[F("Dashboard "),cn]),_:1},8,["href"])])):(v(),b("div",fn,[i("div",pn,[E(L(P),{href:o.route("login"),class:"text-sm font-semibold leading-6 text-gray-900"},{default:S(()=>[F("Log in "),mn]),_:1},8,["href"])]),i("div",vn,[E(L(P),{href:o.route("register"),class:"text-sm font-semibold leading-6 text-gray-900"},{default:S(()=>[F("Register "),hn]),_:1},8,["href"])])]))],64)):Q("",!0)]),E(L(Gt),{as:"div",class:"lg:hidden",onClose:r[2]||(r[2]=l=>t.value=!1),open:t.value},{default:S(()=>[gn,E(L(zt),{class:"fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"},{default:S(()=>[i("div",yn,[wn,i("button",{type:"button",class:"-m-2.5 rounded-md p-2.5 text-gray-700",onClick:r[1]||(r[1]=l=>t.value=!1)},[bn,E(L(Zt),{class:"h-6 w-6","aria-hidden":"true"})])]),i("div",xn,[i("div",_n,[i("div",En,[(v(),b(j,null,se(n,l=>E(L(P),{key:l.name,href:l.href,class:"-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:S(()=>[F(V(l.name),1)]),_:2},1032,["href"])),64))]),e.canLogin?(v(),b("div",$n,[o.$page.props.auth.user?(v(),Z(L(P),{key:0,href:o.route("dashboard"),class:"-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:S(()=>[F("Dashboard")]),_:1},8,["href"])):(v(),b(j,{key:1},[E(L(P),{href:o.route("login"),class:"-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:S(()=>[F("Log in")]),_:1},8,["href"]),e.canRegister?(v(),Z(L(P),{key:0,href:o.route("register"),class:"-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"},{default:S(()=>[F("Register")]),_:1},8,["href"])):Q("",!0)],64))])):Q("",!0)])])]),_:1})]),_:1},8,["open"])]),i("div",kn,[i("div",Ln,[i("div",Sn,[On,Fn,i("div",Pn,[E(L(P),{href:o.route("register"),class:"rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:S(()=>[F("Get started")]),_:1},8,["href"])])])])])],64))}},jn={class:"bg-white py-24 sm:py-32"},Tn={class:"mx-auto max-w-7xl px-6 lg:px-8"},Mn=i("div",{class:"mx-auto max-w-2xl lg:text-center"},[i("p",{class:"mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"},"The sports industry is a massive moneymaker around the world."),i("p",{class:"mt-6 text-lg leading-8 text-gray-600"},"Revenue from sports is growing, and shows no signs of slowing down anytime soon.")],-1),Cn={class:"mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl"},Dn={class:"grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"},Rn={class:"text-base font-semibold leading-7 text-gray-900"},Nn={class:"absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600"},Hn={class:"mt-2 text-base leading-7 text-gray-600"},Bn={__name:"Features",setup(e){const t=[{name:"Push to limit",description:"The mental discipline, the endurance, the balance and flexibility, and the strength gained from karate training have incredible carryover to performance in other sports. Endurance is important when practicing karate.",icon:Xt},{name:"Endurance",description:"Endurance is improved with warm-ups and through technique drills. Punching and kicking increases heart rate and over time, improves overall endurance.",icon:Qt},{name:"Discipline",description:"Karate teaches mental discipline. Students are discouraged from picking fights, abusing drugs, and bullying others. Students are taught to be humble, to live a healthy lifestyle, and to work hard. Martial arts emphasizes the values of good character and good work ethic.",icon:Kt},{name:"Skills",description:"Many of the techniques in martial arts require great balance and flexibility. Both of these skills are emphasized in schools with drills, and static and dynamic stretching.",icon:Jt}];return(n,o)=>(v(),b("div",jn,[i("div",Tn,[Mn,i("div",Cn,[i("dl",Dn,[(v(),b(j,null,se(t,r=>i("div",{key:r.name,class:"relative pl-16"},[i("dt",Rn,[i("div",Nn,[(v(),Z(Ze(r.icon),{class:"h-6 w-6 text-white","aria-hidden":"true"}))]),F(" "+V(r.name),1)]),i("dd",Hn,V(r.description),1)])),64))])])])]))}},In={class:"bg-white"},qn={class:"mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"},Wn=i("h2",{class:"text-2xl font-bold tracking-tight text-gray-900"},"Recent Events",-1),Un={class:"mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"},Vn={class:"min-h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"},Gn=["src","alt"],zn={class:"mt-4 flex justify-between"},Kn={class:"text-sm text-gray-700"},Yn=i("span",{"aria-hidden":"true",class:"absolute inset-0"},null,-1),Xn={key:0,class:"group relative"},Jn=i("div",{class:"py-4 px-6 text-sm font-medium whitespace-nowrap text-center mt-4 flex justify-between"},"No Events available... ",-1),Qn=[Jn],Zn={key:0,class:"flex justify-center pt-8"},eo={__name:"Events",props:{events:{type:Object,required:!0}},setup(e){const t={Inactive:"yellow",Active:"green",Expired:"red",Cancelled:"pink",Completed:"green","In progress":"green"};return(n,o)=>(v(),b("div",In,[i("div",qn,[Wn,i("div",Un,[(v(!0),b(j,null,se(e.events.data,r=>(v(),b("div",{key:r.id,class:"group relative"},[i("div",Vn,[i("img",{src:r.cover_photo,alt:r.name,class:"h-full w-full object-cover object-center lg:h-full lg:w-full"},null,8,Gn)]),i("div",zn,[i("div",null,[i("h3",Kn,[E(L(P),{href:n.$page.props.auth.user?`/events/detail/${r.id}`:"/register","preserve-scroll":""},{default:S(()=>[Yn,F(" "+V(r.name),1)]),_:2},1032,["href"])]),E(nt,{color:t[r.status]},{default:S(()=>[F(V(r.status),1)]),_:2},1032,["color"])]),E(L(P),{as:"button",class:"text-blue-600",href:n.$page.props.auth.user?`/events/detail/${r.id}`:"/register","preserve-scroll":""},{default:S(()=>[F(" Apply ")]),_:2},1032,["href"])])]))),128)),e.events.data.length==0?(v(),b("div",Xn,Qn)):Q("",!0)]),e.events.data.length>0?(v(),b("div",Zn,[E(tt,{items:e.events},null,8,["items"])])):Q("",!0)])]))}};const to={class:"bg-white"},co={__name:"Welcome",props:{canLogin:{type:Boolean},canRegister:{type:Boolean},events:{type:Object,required:!0},event:{type:Object,required:!0,default:null}},setup(e){return(t,n)=>{const o=et("Head");return v(),b(j,null,[E(o,{title:"Welcome"}),i("div",to,[E(An,{canLogin:e.canLogin,canRegister:e.canRegister},null,8,["canLogin","canRegister"]),t.$page.props.auth.user&&e.event?(v(),Z(ot,{key:0,event:e.event},null,8,["event"])):(v(),Z(eo,{key:1,events:e.events},null,8,["events"])),E(Bn)])],64)}}};export{co as default};