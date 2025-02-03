var Ye=e=>{throw TypeError(e)};var Ct=(e,t,n)=>t.has(e)||Ye("Cannot "+n);var A=(e,t,n)=>(Ct(e,t,"read from private field"),n?n.call(e):t.get(e)),P=(e,t,n)=>t.has(e)?Ye("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);import{aG as C,i as O,j as N,aH as Ot}from"./nWfHSwW3.js";import{w as Ce,o as Je}from"./De5AbUR3.js";new URL("sveltekit-internal://");function Nt(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function jt(e){return e.split("%25").map(decodeURI).join("%25")}function $t(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function Re({href:e}){return e.split("#")[0]}function Dt(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return f=>(n(f),i[o](f));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return a}function Ft(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function Vt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const Bt=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:(t==null?void 0:t.method)||"GET")!=="GET"&&W.delete(Oe(e)),Bt(e,t));const W=new Map;function Gt(e,t){const n=Oe(e,t),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&W.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Vt(a)),Promise.resolve(new Response(a,s))}return window.fetch(e,t)}function Mt(e,t,n){if(W.size>0){const r=Oe(e,n),a=W.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);W.delete(r)}}return window.fetch(t,n)}function Oe(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t!=null&&t.headers||t!=null&&t.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${Ft(...a)}"]`}return r}const qt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ht(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Wt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return Ie(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Ie(String.fromCharCode(...c.slice(2).split("-").map(d=>parseInt(d,16))));const u=qt.exec(c),[,p,y,l,m]=u;return t.push({name:l,matcher:m,optional:!!p,rest:!!y,chained:y?f===1&&i[0]==="":!1}),y?"(.*?)":p?"([^/]*)?":"([^/]+?)"}return Ie(c)}).join("")}).join("")}/?$`),params:t}}function Kt(e){return!/^\([^)]+\)$/.test(e)}function Wt(e){return e.slice(1).split("/").filter(Kt)}function Yt(e,t,n){const r={},a=e.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let f=a[o-i];if(c.chained&&c.rest&&i&&(f=a.slice(o-i,o+1).filter(u=>u).join("/"),i=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](f)){r[c.name]=f;const u=t[o+1],p=a[o+1];u&&!u.rest&&u.optional&&p&&c.chained&&(i=0),!u&&!p&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Ie(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Jt({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,f,u]])=>{const{pattern:p,params:y}=Ht(o),l={id:o,exec:m=>{const d=p.exec(m);if(d)return Yt(d,y,r)},errors:[1,...u||[]].map(m=>e[m]),layouts:[0,...f||[]].map(i),leaf:s(c)};return l.errors.length=l.layouts.length=Math.max(l.errors.length,l.layouts.length),l});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function ft(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function ze(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}var ot;const x=((ot=globalThis.__sveltekit_9iwst0)==null?void 0:ot.base)??"/neo-to-do";var st;const zt=((st=globalThis.__sveltekit_9iwst0)==null?void 0:st.assets)??x,Xt="1738596101446",ut="sveltekit:snapshot",ht="sveltekit:scroll",dt="sveltekit:states",Zt="sveltekit:pageurl",G="sveltekit:history",z="sveltekit:navigation",ue={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},fe=location.origin;function pt(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function Ne(){return{x:pageXOffset,y:pageYOffset}}function B(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Xe={...ue,"":ue.hover};function gt(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function mt(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=gt(e)}}function Te(e,t,n){let r;try{if(r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!r||!!a||ve(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===fe&&e.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function he(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=B(o,"preload-code")),a===null&&(a=B(o,"preload-data")),t===null&&(t=B(o,"keepfocus")),n===null&&(n=B(o,"noscroll")),s===null&&(s=B(o,"reload")),i===null&&(i=B(o,"replacestate")),o=gt(o);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Xe[r??"off"],preload_data:Xe[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Ze(e){const t=Ce(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const yt={v:()=>{}};function Qt(){const{set:e,subscribe:t}=Ce(!1);let n;async function r(){clearTimeout(n);try{const a=await fetch(`${zt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const i=(await a.json()).version!==Xt;return i&&(e(!0),yt.v(),clearTimeout(n)),i}catch{return!1}}return{subscribe:t,check:r}}function ve(e,t,n){return e.origin!==fe||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.pathname===t+"/index.html"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function Qe(e){const t=tn(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const en="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function tn(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=en.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const nn=-1,rn=-2,an=-3,on=-4,sn=-5,cn=-6;function ln(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===nn)return;if(s===an)return NaN;if(s===on)return 1/0;if(s===sn)return-1/0;if(s===cn)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],f=t==null?void 0:t[c];if(f)return r[s]=f(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const u=new Set;r[s]=u;for(let l=1;l<o.length;l+=1)u.add(a(o[l]));break;case"Map":const p=new Map;r[s]=p;for(let l=1;l<o.length;l+=2)p.set(a(o[l]),a(o[l+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const y=Object.create(null);r[s]=y;for(let l=1;l<o.length;l+=2)y[o[l]]=a(o[l+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const l=globalThis[c],m=o[1],d=Qe(m),h=new l(d);r[s]=h;break}case"ArrayBuffer":{const l=o[1],m=Qe(l);r[s]=m;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let f=0;f<o.length;f+=1){const u=o[f];u!==rn&&(c[f]=a(u))}}else{const c={};r[s]=c;for(const f in o){const u=o[f];c[f]=a(u)}}return r[s]}return a(0)}const wt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...wt];const fn=new Set([...wt]);[...fn];function un(e){return e.filter(t=>t!=null)}class be{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class je{constructor(t,n){this.status=t,this.location=n}}class $e extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const hn="x-sveltekit-invalidated",dn="x-sveltekit-trailing-slash";function de(e){return e instanceof be||e instanceof $e?e.status:500}function pn(e){return e instanceof $e?e.text:"Internal Error"}let U,X,Ue;const gn=Je.toString().includes("$$")||/function \w+\(\) \{\}/.test(Je.toString());var ee,te,ne,re,ae,oe,se,ie,it,ce,ct,le,lt;gn?(U={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},X={current:null},Ue={current:!1}):(U=new(it=class{constructor(){P(this,ee,C({}));P(this,te,C(null));P(this,ne,C(null));P(this,re,C({}));P(this,ae,C({id:null}));P(this,oe,C({}));P(this,se,C(-1));P(this,ie,C(new URL("https://example.com")))}get data(){return O(A(this,ee))}set data(t){N(A(this,ee),t)}get form(){return O(A(this,te))}set form(t){N(A(this,te),t)}get error(){return O(A(this,ne))}set error(t){N(A(this,ne),t)}get params(){return O(A(this,re))}set params(t){N(A(this,re),t)}get route(){return O(A(this,ae))}set route(t){N(A(this,ae),t)}get state(){return O(A(this,oe))}set state(t){N(A(this,oe),t)}get status(){return O(A(this,se))}set status(t){N(A(this,se),t)}get url(){return O(A(this,ie))}set url(t){N(A(this,ie),t)}},ee=new WeakMap,te=new WeakMap,ne=new WeakMap,re=new WeakMap,ae=new WeakMap,oe=new WeakMap,se=new WeakMap,ie=new WeakMap,it),X=new(ct=class{constructor(){P(this,ce,C(null))}get current(){return O(A(this,ce))}set current(t){N(A(this,ce),t)}},ce=new WeakMap,ct),Ue=new(lt=class{constructor(){P(this,le,C(!1))}get current(){return O(A(this,le))}set current(t){N(A(this,le),t)}},le=new WeakMap,lt),yt.v=()=>Ue.current=!0);function mn(e){Object.assign(U,e)}const yn="/__data.json",wn=".html__data.json";function _n(e){return e.endsWith(".html")?e.replace(/\.html$/,wn):e.replace(/\/$/,"")+yn}const vn=new Set(["icon","shortcut icon","apple-touch-icon"]),V=ft(ht)??{},Z=ft(ut)??{},$={url:Ze({}),page:Ze({}),navigating:Ce(null),updated:Qt()};function De(e){V[e]=Ne()}function bn(e,t){let n=e+1;for(;V[n];)delete V[n],n+=1;for(n=t+1;Z[n];)delete Z[n],n+=1}function q(e){return location.href=e.href,new Promise(()=>{})}async function _t(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(x||"/");e&&await e.update()}}function et(){}let Fe,xe,pe,j,Pe,k;const ge=[],me=[];let L=null;const vt=new Set,An=new Set,Y=new Set;let v={branch:[],error:null,url:null},Ve=!1,ye=!1,tt=!0,Q=!1,H=!1,bt=!1,Be=!1,At,R,T,F;const J=new Set;async function Bn(e,t,n){var a,s,i,o;document.URL!==location.href&&(location.href=location.href),k=e,await((s=(a=e.hooks).init)==null?void 0:s.call(a)),Fe=Jt(e),j=document.documentElement,Pe=t,xe=e.nodes[0],pe=e.nodes[1],xe(),pe(),R=(i=history.state)==null?void 0:i[G],T=(o=history.state)==null?void 0:o[z],R||(R=T=Date.now(),history.replaceState({...history.state,[G]:R,[z]:T},""));const r=V[R];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Cn(Pe,n):Tn(k.hash?Pt(new URL(location.href)):location.href,{replaceState:!0}),Pn()}function kn(){ge.length=0,Be=!1}function kt(e){me.some(t=>t==null?void 0:t.snapshot)&&(Z[e]=me.map(t=>{var n;return(n=t==null?void 0:t.snapshot)==null?void 0:n.capture()}))}function St(e){var t;(t=Z[e])==null||t.forEach((n,r)=>{var a,s;(s=(a=me[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function nt(){De(R),ze(ht,V),kt(T),ze(ut,Z)}async function Ge(e,t,n,r){return K({type:"goto",url:pt(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(Be=!0),t.invalidate&&t.invalidate.forEach(xn)}})}async function Sn(e){if(e.id!==(L==null?void 0:L.id)){const t={};J.add(t),L={id:e.id,token:t,promise:Rt({...e,preload:t}).then(n=>(J.delete(t),n.type==="loaded"&&n.state.error&&(L=null),n))}}return L.promise}async function Le(e){var n;const t=(n=await ke(e,!1))==null?void 0:n.route;t&&await Promise.all([...t.layouts,t.leaf].map(r=>r==null?void 0:r[1]()))}function Et(e,t,n){var s;v=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(U,e.props.page),At=new k.root({target:t,props:{...e.props,stores:$,components:me},hydrate:n,sync:!1}),St(T);const a={from:null,to:{params:v.params,route:{id:((s=v.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};Y.forEach(i=>i(a)),ye=!0}function we({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(x&&(e.pathname===x||e.pathname===x+"/"))o="always";else for(const l of n)(l==null?void 0:l.slash)!==void 0&&(o=l.slash);e.pathname=Nt(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:un(n).map(l=>l.node.component),page:He(U)}};i!==void 0&&(c.props.form=i);let f={},u=!U,p=0;for(let l=0;l<Math.max(n.length,v.branch.length);l+=1){const m=n[l],d=v.branch[l];(m==null?void 0:m.data)!==(d==null?void 0:d.data)&&(u=!0),m&&(f={...f,...m.data},u&&(c.props[`data_${p}`]=f),p+=1)}return(!v.url||e.href!==v.url.href||v.error!==a||i!==void 0&&i!==U.form||u)&&(c.props.page={error:a,params:t,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:u?f:U.data}),c}async function Me({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){var u,p,y;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((u=f.universal)!=null&&u.load){let l=function(...d){for(const h of d){const{href:w}=new URL(h,n);c.dependencies.add(w)}};const m={route:new Proxy(a,{get:(d,h)=>(o&&(c.route=!0),d[h])}),params:new Proxy(r,{get:(d,h)=>(o&&c.params.add(h),d[h])}),data:(s==null?void 0:s.data)??null,url:Dt(n,()=>{o&&(c.url=!0)},d=>{o&&c.search_params.add(d)},k.hash),async fetch(d,h){let w;d instanceof Request?(w=d.url,h={body:d.method==="GET"||d.method==="HEAD"?void 0:await d.blob(),cache:d.cache,credentials:d.credentials,headers:[...d.headers].length?d.headers:void 0,integrity:d.integrity,keepalive:d.keepalive,method:d.method,mode:d.mode,redirect:d.redirect,referrer:d.referrer,referrerPolicy:d.referrerPolicy,signal:d.signal,...h}):w=d;const S=new URL(w,n);return o&&l(S.href),S.origin===n.origin&&(w=S.href.slice(n.origin.length)),ye?Mt(w,S.href,h):Gt(w,h)},setHeaders:()=>{},depends:l,parent(){return o&&(c.parent=!0),t()},untrack(d){o=!1;try{return d()}finally{o=!0}}};i=await f.universal.load.call(null,m)??null}return{node:f,loader:e,server:s,universal:(p=f.universal)!=null&&p.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((y=f.universal)==null?void 0:y.trailingSlash)??(s==null?void 0:s.slash)}}function rt(e,t,n,r,a,s){if(Be)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==v.params[i])return!0;for(const i of a.dependencies)if(ge.some(o=>o(new URL(i))))return!0;return!1}function qe(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}function En(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function at({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:He(U),constructors:[]}}}async function Rt({id:e,invalidating:t,url:n,params:r,route:a,preload:s}){if((L==null?void 0:L.id)===e)return J.delete(L.token),L.promise;const{errors:i,layouts:o,leaf:c}=a,f=[...o,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),f.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let u=null;const p=v.url?e!==_e(v.url):!1,y=v.route?a.id!==v.route.id:!1,l=En(v.url,n);let m=!1;const d=f.map((g,_)=>{var D;const b=v.branch[_],E=!!(g!=null&&g[0])&&((b==null?void 0:b.loader)!==g[1]||rt(m,y,p,l,(D=b.server)==null?void 0:D.uses,r));return E&&(m=!0),E});if(d.some(Boolean)){try{u=await Lt(n,d)}catch(g){const _=await M(g,{url:n,params:r,route:{id:e}});return J.has(s)?at({error:_,url:n,params:r,route:a}):Ae({status:de(g),error:_,url:n,route:a})}if(u.type==="redirect")return u}const h=u==null?void 0:u.nodes;let w=!1;const S=f.map(async(g,_)=>{var Se;if(!g)return;const b=v.branch[_],E=h==null?void 0:h[_];if((!E||E.type==="skip")&&g[1]===(b==null?void 0:b.loader)&&!rt(w,y,p,l,(Se=b.universal)==null?void 0:Se.uses,r))return b;if(w=!0,(E==null?void 0:E.type)==="error")throw E;return Me({loader:g[1],url:n,params:r,route:a,parent:async()=>{var We;const Ke={};for(let Ee=0;Ee<_;Ee+=1)Object.assign(Ke,(We=await S[Ee])==null?void 0:We.data);return Ke},server_data_node:qe(E===void 0&&g[0]?{type:"skip"}:E??null,g[0]?b==null?void 0:b.server:void 0)})});for(const g of S)g.catch(()=>{});const I=[];for(let g=0;g<f.length;g+=1)if(f[g])try{I.push(await S[g])}catch(_){if(_ instanceof je)return{type:"redirect",location:_.location};if(J.has(s))return at({error:await M(_,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let b=de(_),E;if(h!=null&&h.includes(_))b=_.status??b,E=_.error;else if(_ instanceof be)E=_.body;else{if(await $.updated.check())return await _t(),await q(n);E=await M(_,{params:r,url:n,route:{id:a.id}})}const D=await Rn(g,I,i);return D?we({url:n,params:r,branch:I.slice(0,D.idx).concat(D.node),status:b,error:E,route:a}):await Ut(n,{id:a.id},E,b)}else I.push(void 0);return we({url:n,params:r,branch:I,status:200,error:null,route:a,form:t?void 0:null})}async function Rn(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function Ae({status:e,error:t,url:n,route:r}){const a={};let s=null;if(k.server_loads[0]===0)try{const o=await Lt(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==fe||n.pathname!==location.pathname||Ve)&&await q(n)}try{const o=await Me({loader:xe,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:qe(s)}),c={node:await pe(),loader:pe,universal:null,server:null,data:null};return we({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}catch(o){if(o instanceof je)return Ge(new URL(o.location,location.href),{},0);throw o}}function In(e){let t;try{if(t=k.hooks.reroute({url:new URL(e)})??e,typeof t=="string"){const n=new URL(e);k.hash?n.hash=t:n.pathname=t,t=n}}catch{return}return t}async function ke(e,t){if(e&&!ve(e,x,k.hash)){const n=In(e);if(!n)return;const r=Un(n);for(const a of Fe){const s=a.exec(r);if(s)return{id:_e(e),invalidating:t,route:a,params:$t(s),url:e}}}}function Un(e){return jt(k.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(x.length))||"/"}function _e(e){return(k.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function It({url:e,type:t,intent:n,delta:r}){let a=!1;const s=xt(v,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return Q||vt.forEach(o=>o(i)),a?null:s}async function K({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:f=et,block:u=et}){const p=F;F=c;const y=await ke(t,!1),l=It({url:t,type:e,delta:n==null?void 0:n.delta,intent:y});if(!l){u(),F===c&&(F=p);return}const m=R,d=T;f(),Q=!0,ye&&$.navigating.set(X.current=l.navigation);let h=y&&await Rt(y);if(!h){if(ve(t,x,k.hash))return await q(t);h=await Ut(t,{id:null},await M(new $e(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=(y==null?void 0:y.url)||t,F!==c)return l.reject(new Error("navigation aborted")),!1;if(h.type==="redirect")if(o>=20)h=await Ae({status:500,error:await M(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return Ge(new URL(h.location,t).href,{},o+1,c),!1;else h.props.page.status>=400&&await $.updated.check()&&(await _t(),await q(t));if(kn(),De(m),kt(d),h.props.page.url.pathname!==t.pathname&&(t.pathname=h.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,_={[G]:R+=g,[z]:T+=g,[dt]:i};(s?history.replaceState:history.pushState).call(history,_,"",t),s||bn(R,T)}if(L=null,h.props.page.state=i,ye){v=h.state,h.props.page&&(h.props.page.url=t);const g=(await Promise.all(Array.from(An,_=>_(l.navigation)))).filter(_=>typeof _=="function");if(g.length>0){let _=function(){g.forEach(b=>{Y.delete(b)})};g.push(_),g.forEach(b=>{Y.add(b)})}At.$set(h.props),mn(h.props.page),bt=!0}else Et(h,Pe,!1);const{activeElement:w}=document;await Ot();const S=n?n.scroll:a?Ne():null;if(tt){const g=t.hash&&document.getElementById(decodeURIComponent(k.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));S?scrollTo(S.x,S.y):g?g.scrollIntoView():scrollTo(0,0)}const I=document.activeElement!==w&&document.activeElement!==document.body;!r&&!I&&On(),tt=!0,h.props.page&&Object.assign(U,h.props.page),Q=!1,e==="popstate"&&St(T),l.fulfil(void 0),Y.forEach(g=>g(l.navigation)),$.navigating.set(X.current=null)}async function Ut(e,t,n,r){return e.origin===fe&&e.pathname===location.pathname&&!Ve?await Ae({status:r,error:n,url:e,route:t}):await q(e)}function Ln(){let e,t;j.addEventListener("mousemove",i=>{const o=i.target;clearTimeout(e),e=setTimeout(()=>{a(o,2)},20)});function n(i){i.defaultPrevented||a(i.composedPath()[0],1)}j.addEventListener("mousedown",n),j.addEventListener("touchstart",n,{passive:!0});const r=new IntersectionObserver(i=>{for(const o of i)o.isIntersecting&&(Le(new URL(o.target.href)),r.unobserve(o.target))},{threshold:0});async function a(i,o){const c=mt(i,j);if(!c||c===t)return;t=c;const{url:f,external:u,download:p}=Te(c,x,k.hash);if(u||p)return;const y=he(c),l=f&&_e(v.url)===_e(f);if(!y.reload&&!l)if(o<=y.preload_data){const m=await ke(f,!1);m&&Sn(m)}else o<=y.preload_code&&Le(f)}function s(){r.disconnect();for(const i of j.querySelectorAll("a")){const{url:o,external:c,download:f}=Te(i,x,k.hash);if(c||f)continue;const u=he(i);u.reload||(u.preload_code===ue.viewport&&r.observe(i),u.preload_code===ue.eager&&Le(o))}}Y.add(s),s()}function M(e,t){if(e instanceof be)return e.body;const n=de(e),r=pn(e);return k.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function Tn(e,t={}){return e=new URL(pt(e)),e.origin!==fe?Promise.reject(new Error("goto: invalid URL")):Ge(e,t,0)}function xn(e){if(typeof e=="function")ge.push(e);else{const{href:t}=new URL(e,location.href);ge.push(n=>n.href===t)}}function Pn(){var t;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(nt(),!Q){const a=xt(v,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};vt.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&nt()}),(t=navigator.connection)!=null&&t.saveData||Ln(),j.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=mt(n.composedPath()[0],j);if(!r)return;const{url:a,external:s,target:i,download:o}=Te(r,x,k.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=he(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[u,p]=(k.hash?a.hash.replace(/^#/,""):a.href).split("#"),y=u===Re(location);if(s||c.reload&&(!y||!p)){It({url:a,type:"link"})?Q=!0:n.preventDefault();return}if(p!==void 0&&y){const[,l]=v.url.href.split("#");if(l===p){if(n.preventDefault(),p===""||p==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const m=r.ownerDocument.getElementById(decodeURIComponent(p));m&&(m.scrollIntoView(),m.focus())}return}if(H=!0,De(R),e(a),!c.replace_state)return;H=!1}n.preventDefault(),await new Promise(l=>{requestAnimationFrame(()=>{setTimeout(l,0)}),setTimeout(l,100)}),K({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),j.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(ve(o,x,!1))return;const c=n.target,f=he(c);if(f.reload)return;n.preventDefault(),n.stopPropagation();const u=new FormData(c),p=a==null?void 0:a.getAttribute("name");p&&u.append(p,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(u).toString(),K({type:"form",url:o,keepfocus:f.keepfocus,noscroll:f.noscroll,replace_state:f.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[G]){const a=n.state[G];if(F={},a===R)return;const s=V[a],i=n.state[dt]??{},o=new URL(n.state[Zt]??location.href),c=n.state[z],f=v.url?Re(location)===Re(v.url):!1;if(c===T&&(bt||f)){i!==U.state&&(U.state=i),e(o),V[R]=Ne(),s&&scrollTo(s.x,s.y),R=a;return}const p=a-R;await K({type:"popstate",url:o,popped:{state:i,scroll:s,delta:p},accept:()=>{R=a,T=c},block:()=>{history.go(-p)},nav_token:F})}else if(!H){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{H?(H=!1,history.replaceState({...history.state,[G]:++R,[z]:T},"",location.href)):k.hash&&v.url.hash===location.hash&&K({type:"goto",url:Pt(v.url)})});for(const n of document.querySelectorAll("link"))vn.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&$.navigating.set(X.current=null)});function e(n){v.url=U.url=n,$.page.set(He(U)),$.page.notify()}}async function Cn(e,{status:t=200,error:n,node_ids:r,params:a,route:s,server_route:i,data:o,form:c}){Ve=!0;const f=new URL(location.href);let u;({params:a={},route:s={id:null}}=await ke(f,!1)||{}),u=Fe.find(({id:l})=>l===s.id);let p,y=!0;try{const l=r.map(async(d,h)=>{const w=o[h];return w!=null&&w.uses&&(w.uses=Tt(w.uses)),Me({loader:k.nodes[d],url:f,params:a,route:s,parent:async()=>{const S={};for(let I=0;I<h;I+=1)Object.assign(S,(await l[I]).data);return S},server_data_node:qe(w)})}),m=await Promise.all(l);if(u){const d=u.layouts;for(let h=0;h<d.length;h++)d[h]||m.splice(h,0,void 0)}p=we({url:f,params:a,branch:m,status:t,error:n,form:c,route:u??null})}catch(l){if(l instanceof je){await q(new URL(l.location,location.href));return}p=await Ae({status:de(l),error:await M(l,{url:f,params:a,route:s}),url:f,route:s}),e.textContent="",y=!1}p.props.page&&(p.props.page.state={}),Et(p,e,y)}async function Lt(e,t){var s;const n=new URL(e);n.pathname=_n(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(dn,"1"),n.searchParams.append(hn,t.map(i=>i?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new be(a.status,i)}return new Promise(async i=>{var y;const o=new Map,c=a.body.getReader(),f=new TextDecoder;function u(l){return ln(l,{...k.decoders,Promise:m=>new Promise((d,h)=>{o.set(m,{fulfil:d,reject:h})})})}let p="";for(;;){const{done:l,value:m}=await c.read();if(l&&!p)break;for(p+=!m&&p?`
`:f.decode(m,{stream:!0});;){const d=p.indexOf(`
`);if(d===-1)break;const h=JSON.parse(p.slice(0,d));if(p=p.slice(d+1),h.type==="redirect")return i(h);if(h.type==="data")(y=h.nodes)==null||y.forEach(w=>{(w==null?void 0:w.type)==="data"&&(w.uses=Tt(w.uses),w.data=u(w.data))}),i(h);else if(h.type==="chunk"){const{id:w,data:S,error:I}=h,g=o.get(w);o.delete(w),I?g.reject(u(I)):g.fulfil(u(S))}}}})}function Tt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function On(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function xt(e,t,n,r){var c,f;let a,s;const i=new Promise((u,p)=>{a=u,s=p});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:n&&{params:(t==null?void 0:t.params)??null,route:{id:((f=t==null?void 0:t.route)==null?void 0:f.id)??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}function He(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}function Pt(e){const t=new URL(e);return t.hash=decodeURIComponent(e.hash),t}export{Bn as a,U as p,$ as s};
