(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))c(l);new MutationObserver(l=>{for(const m of l)if(m.type==="childList")for(const f of m.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const m={};return l.integrity&&(m.integrity=l.integrity),l.referrerPolicy&&(m.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?m.credentials="include":l.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function c(l){if(l.ep)return;l.ep=!0;const m=i(l);fetch(l.href,m)}})();var Ie={exports:{}};(function(e){var n=function(i){var c=Object.prototype,l=c.hasOwnProperty,m=Object.defineProperty||function(o,t,s){o[t]=s.value},f,v=typeof Symbol=="function"?Symbol:{},L=v.iterator||"@@iterator",E=v.asyncIterator||"@@asyncIterator",R=v.toStringTag||"@@toStringTag";function h(o,t,s){return Object.defineProperty(o,t,{value:s,enumerable:!0,configurable:!0,writable:!0}),o[t]}try{h({},"")}catch{h=function(t,s,u){return t[s]=u}}function S(o,t,s,u){var r=t&&t.prototype instanceof q?t:q,a=Object.create(r.prototype),d=new Z(u||[]);return m(a,"_invoke",{value:ne(o,s,d)}),a}i.wrap=S;function _(o,t,s){try{return{type:"normal",arg:o.call(t,s)}}catch(u){return{type:"throw",arg:u}}}var C="suspendedStart",N="suspendedYield",M="executing",D="completed",w={};function q(){}function F(){}function b(){}var x={};h(x,L,function(){return this});var J=Object.getPrototypeOf,B=J&&J(J(Q([])));B&&B!==c&&l.call(B,L)&&(x=B);var G=b.prototype=q.prototype=Object.create(x);F.prototype=b,m(G,"constructor",{value:b,configurable:!0}),m(b,"constructor",{value:F,configurable:!0}),F.displayName=h(b,R,"GeneratorFunction");function te(o){["next","throw","return"].forEach(function(t){h(o,t,function(s){return this._invoke(t,s)})})}i.isGeneratorFunction=function(o){var t=typeof o=="function"&&o.constructor;return t?t===F||(t.displayName||t.name)==="GeneratorFunction":!1},i.mark=function(o){return Object.setPrototypeOf?Object.setPrototypeOf(o,b):(o.__proto__=b,h(o,R,"GeneratorFunction")),o.prototype=Object.create(G),o},i.awrap=function(o){return{__await:o}};function Y(o,t){function s(a,d,p,g){var y=_(o[a],o,d);if(y.type==="throw")g(y.arg);else{var z=y.arg,I=z.value;return I&&typeof I=="object"&&l.call(I,"__await")?t.resolve(I.__await).then(function($){s("next",$,p,g)},function($){s("throw",$,p,g)}):t.resolve(I).then(function($){z.value=$,p(z)},function($){return s("throw",$,p,g)})}}var u;function r(a,d){function p(){return new t(function(g,y){s(a,d,g,y)})}return u=u?u.then(p,p):p()}m(this,"_invoke",{value:r})}te(Y.prototype),h(Y.prototype,E,function(){return this}),i.AsyncIterator=Y,i.async=function(o,t,s,u,r){r===void 0&&(r=Promise);var a=new Y(S(o,t,s,u),r);return i.isGeneratorFunction(t)?a:a.next().then(function(d){return d.done?d.value:a.next()})};function ne(o,t,s){var u=C;return function(a,d){if(u===M)throw new Error("Generator is already running");if(u===D){if(a==="throw")throw d;return re()}for(s.method=a,s.arg=d;;){var p=s.delegate;if(p){var g=V(p,s);if(g){if(g===w)continue;return g}}if(s.method==="next")s.sent=s._sent=s.arg;else if(s.method==="throw"){if(u===C)throw u=D,s.arg;s.dispatchException(s.arg)}else s.method==="return"&&s.abrupt("return",s.arg);u=M;var y=_(o,t,s);if(y.type==="normal"){if(u=s.done?D:N,y.arg===w)continue;return{value:y.arg,done:s.done}}else y.type==="throw"&&(u=D,s.method="throw",s.arg=y.arg)}}}function V(o,t){var s=t.method,u=o.iterator[s];if(u===f)return t.delegate=null,s==="throw"&&o.iterator.return&&(t.method="return",t.arg=f,V(o,t),t.method==="throw")||s!=="return"&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+s+"' method")),w;var r=_(u,o.iterator,t.arg);if(r.type==="throw")return t.method="throw",t.arg=r.arg,t.delegate=null,w;var a=r.arg;if(!a)return t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,w;if(a.done)t[o.resultName]=a.value,t.next=o.nextLoc,t.method!=="return"&&(t.method="next",t.arg=f);else return a;return t.delegate=null,w}te(G),h(G,R,"Generator"),h(G,L,function(){return this}),h(G,"toString",function(){return"[object Generator]"});function se(o){var t={tryLoc:o[0]};1 in o&&(t.catchLoc=o[1]),2 in o&&(t.finallyLoc=o[2],t.afterLoc=o[3]),this.tryEntries.push(t)}function U(o){var t=o.completion||{};t.type="normal",delete t.arg,o.completion=t}function Z(o){this.tryEntries=[{tryLoc:"root"}],o.forEach(se,this),this.reset(!0)}i.keys=function(o){var t=Object(o),s=[];for(var u in t)s.push(u);return s.reverse(),function r(){for(;s.length;){var a=s.pop();if(a in t)return r.value=a,r.done=!1,r}return r.done=!0,r}};function Q(o){if(o){var t=o[L];if(t)return t.call(o);if(typeof o.next=="function")return o;if(!isNaN(o.length)){var s=-1,u=function r(){for(;++s<o.length;)if(l.call(o,s))return r.value=o[s],r.done=!1,r;return r.value=f,r.done=!0,r};return u.next=u}}return{next:re}}i.values=Q;function re(){return{value:f,done:!0}}return Z.prototype={constructor:Z,reset:function(o){if(this.prev=0,this.next=0,this.sent=this._sent=f,this.done=!1,this.delegate=null,this.method="next",this.arg=f,this.tryEntries.forEach(U),!o)for(var t in this)t.charAt(0)==="t"&&l.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=f)},stop:function(){this.done=!0;var o=this.tryEntries[0],t=o.completion;if(t.type==="throw")throw t.arg;return this.rval},dispatchException:function(o){if(this.done)throw o;var t=this;function s(g,y){return a.type="throw",a.arg=o,t.next=g,y&&(t.method="next",t.arg=f),!!y}for(var u=this.tryEntries.length-1;u>=0;--u){var r=this.tryEntries[u],a=r.completion;if(r.tryLoc==="root")return s("end");if(r.tryLoc<=this.prev){var d=l.call(r,"catchLoc"),p=l.call(r,"finallyLoc");if(d&&p){if(this.prev<r.catchLoc)return s(r.catchLoc,!0);if(this.prev<r.finallyLoc)return s(r.finallyLoc)}else if(d){if(this.prev<r.catchLoc)return s(r.catchLoc,!0)}else if(p){if(this.prev<r.finallyLoc)return s(r.finallyLoc)}else throw new Error("try statement without catch or finally")}}},abrupt:function(o,t){for(var s=this.tryEntries.length-1;s>=0;--s){var u=this.tryEntries[s];if(u.tryLoc<=this.prev&&l.call(u,"finallyLoc")&&this.prev<u.finallyLoc){var r=u;break}}r&&(o==="break"||o==="continue")&&r.tryLoc<=t&&t<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=o,a.arg=t,r?(this.method="next",this.next=r.finallyLoc,w):this.complete(a)},complete:function(o,t){if(o.type==="throw")throw o.arg;return o.type==="break"||o.type==="continue"?this.next=o.arg:o.type==="return"?(this.rval=this.arg=o.arg,this.method="return",this.next="end"):o.type==="normal"&&t&&(this.next=t),w},finish:function(o){for(var t=this.tryEntries.length-1;t>=0;--t){var s=this.tryEntries[t];if(s.finallyLoc===o)return this.complete(s.completion,s.afterLoc),U(s),w}},catch:function(o){for(var t=this.tryEntries.length-1;t>=0;--t){var s=this.tryEntries[t];if(s.tryLoc===o){var u=s.completion;if(u.type==="throw"){var r=u.arg;U(s)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(o,t,s){return this.delegate={iterator:Q(o),resultName:t,nextLoc:s},this.method==="next"&&(this.arg=f),w}},i}(e.exports);try{regeneratorRuntime=n}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}})(Ie);var ue=(e,n)=>`${e}-${n}-${Math.random().toString(16).slice(3,8)}`;const $e=ue;let ge=0;var Le=({id:e,action:n,payload:i={}})=>{let c=e;return typeof c>"u"&&(c=$e("Job",ge),ge+=1),{id:c,action:n,payload:i}},K={};let de=!1;K.logging=de;K.setLogging=e=>{de=e};K.log=(...e)=>de?console.log.apply(globalThis,e):null;const Pe=Le,{log:oe}=K,je=ue;let me=0;var Ce=()=>{const e=je("Scheduler",me),n={},i={};let c=[];me+=1;const l=()=>c.length,m=()=>Object.keys(n).length,f=()=>{if(c.length!==0){const h=Object.keys(n);for(let S=0;S<h.length;S+=1)if(typeof i[h[S]]>"u"){c[0](n[h[S]]);break}}},v=(h,S)=>new Promise((_,C)=>{const N=Pe({action:h,payload:S});c.push(async M=>{c.shift(),i[M.id]=N;try{_(await M[h].apply(globalThis,[...S,N.id]))}catch(D){C(D)}finally{delete i[M.id],f()}}),oe(`[${e}]: Add ${N.id} to JobQueue`),oe(`[${e}]: JobQueue length=${c.length}`),f()});return{addWorker:h=>(n[h.id]=h,oe(`[${e}]: Add ${h.id}`),oe(`[${e}]: Number of workers=${m()}`),f(),h.id),addJob:async(h,...S)=>{if(m()===0)throw Error(`[${e}]: You need to have at least one worker before adding jobs`);return v(h,S)},terminate:async()=>{Object.keys(n).forEach(async h=>{await n[h].terminate()}),c=[]},getQueueLen:l,getNumWorkers:m}};function Ne(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}function Me(){return!!(typeof window<"u"&&typeof window.process=="object"&&window.process.type==="renderer"||typeof process<"u"&&typeof process.versions=="object"&&process.versions.electron||typeof navigator=="object"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Electron")>=0)}var De=Me;const Ge=De;var ze=e=>{const n={};return typeof WorkerGlobalScope<"u"?n.type="webworker":Ge()?n.type="electron":typeof document=="object"?n.type="browser":typeof process=="object"&&typeof Ne=="function"&&(n.type="node"),typeof e>"u"?n:n[e]};const Fe=ze("type")==="browser",Ue=Fe?e=>new URL(e,window.location.href).href:e=>e;var We=e=>{const n={...e};return["corePath","workerPath","langPath"].forEach(i=>{e[i]&&(n[i]=Ue(n[i]))}),n},qe=e=>{const n=[],i=[],c=[],l=[],m=[];return e.blocks&&e.blocks.forEach(f=>{f.paragraphs.forEach(v=>{v.lines.forEach(L=>{L.words.forEach(E=>{E.symbols.forEach(R=>{m.push({...R,page:e,block:f,paragraph:v,line:L,word:E})}),l.push({...E,page:e,block:f,paragraph:v,line:L})}),c.push({...L,page:e,block:f,paragraph:v})}),i.push({...v,page:e,block:f})}),n.push({...f,page:e})}),{...e,blocks:n,paragraphs:i,lines:c,words:l,symbols:m}},Se={TESSERACT_ONLY:0,LSTM_ONLY:1,TESSERACT_LSTM_COMBINED:2,DEFAULT:3};const Be="tesseract.js",Ye="5.0.5",He="Pure Javascript Multilingual OCR",Ke="src/index.js",xe="src/index.d.ts",Je="dist/tesseract.min.js",Ve="dist/tesseract.min.js",Ze={start:"node scripts/server.js",build:"rimraf dist && webpack --config scripts/webpack.config.prod.js && rollup -c scripts/rollup.esm.mjs","profile:tesseract":"webpack-bundle-analyzer dist/tesseract-stats.json","profile:worker":"webpack-bundle-analyzer dist/worker-stats.json",prepublishOnly:"npm run build",wait:"rimraf dist && wait-on http://localhost:3000/dist/tesseract.min.js",test:"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:* test:node:all","test:node":"nyc mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser-tpl":"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:detect":"npm run test:browser-tpl -- -f ./tests/detect.test.html","test:browser:recognize":"npm run test:browser-tpl -- -f ./tests/recognize.test.html","test:browser:scheduler":"npm run test:browser-tpl -- -f ./tests/scheduler.test.html","test:browser:FS":"npm run test:browser-tpl -- -f ./tests/FS.test.html",lint:"eslint src","lint:fix":"eslint --fix src",postinstall:"opencollective-postinstall || true"},Qe={"./src/worker/node/index.js":"./src/worker/browser/index.js"},Xe="",et=["jeromewu"],tt="Apache-2.0",rt={"@babel/core":"^7.21.4","@babel/eslint-parser":"^7.21.3","@babel/preset-env":"^7.21.4","@rollup/plugin-commonjs":"^24.1.0",acorn:"^8.8.2","babel-loader":"^9.1.2",buffer:"^6.0.3",cors:"^2.8.5",eslint:"^7.32.0","eslint-config-airbnb-base":"^14.2.1","eslint-plugin-import":"^2.27.5","expect.js":"^0.3.1",express:"^4.18.2",mocha:"^10.2.0","mocha-headless-chrome":"^4.0.0","npm-run-all":"^4.1.5",nyc:"^15.1.0",rimraf:"^5.0.0",rollup:"^3.20.7","wait-on":"^7.0.1",webpack:"^5.79.0","webpack-bundle-analyzer":"^4.8.0","webpack-cli":"^5.0.1","webpack-dev-middleware":"^6.0.2","rollup-plugin-sourcemaps":"^0.6.3"},ot={"bmp-js":"^0.1.0","idb-keyval":"^6.2.0","is-electron":"^2.2.2","is-url":"^1.2.4","node-fetch":"^2.6.9","opencollective-postinstall":"^2.0.3","regenerator-runtime":"^0.13.3","tesseract.js-core":"^5.0.0","wasm-feature-detect":"^1.2.11",zlibjs:"^0.3.1"},nt={"@rollup/pluginutils":"^5.0.2"},st={type:"git",url:"https://github.com/naptha/tesseract.js.git"},it={url:"https://github.com/naptha/tesseract.js/issues"},at="https://github.com/naptha/tesseract.js",ct={type:"opencollective",url:"https://opencollective.com/tesseractjs"},lt={name:Be,version:Ye,description:He,main:Ke,types:xe,unpkg:Je,jsdelivr:Ve,scripts:Ze,browser:Qe,author:Xe,contributors:et,license:tt,devDependencies:rt,dependencies:ot,overrides:nt,repository:st,bugs:it,homepage:at,collective:ct};var ut={workerBlobURL:!0,logger:()=>{}};const dt=lt.version,ft=ut;var ht={...ft,workerPath:`https://cdn.jsdelivr.net/npm/tesseract.js@v${dt}/dist/worker.min.js`},pt=({workerPath:e,workerBlobURL:n})=>{let i;if(Blob&&URL&&n){const c=new Blob([`importScripts("${e}");`],{type:"application/javascript"});i=new Worker(URL.createObjectURL(c))}else i=new Worker(e);return i},gt=e=>{e.terminate()},mt=(e,n)=>{e.onmessage=({data:i})=>{n(i)}},vt=async(e,n)=>{e.postMessage(n)};const ie=e=>new Promise((n,i)=>{const c=new FileReader;c.onload=()=>{n(c.result)},c.onerror=({target:{error:{code:l}}})=>{i(Error(`File could not be read! Code=${l}`))},c.readAsArrayBuffer(e)}),ce=async e=>{let n=e;if(typeof e>"u")return"undefined";if(typeof e=="string")/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(e)?n=atob(e.split(",")[1]).split("").map(i=>i.charCodeAt(0)):n=await(await fetch(e)).arrayBuffer();else if(typeof HTMLElement<"u"&&e instanceof HTMLElement)e.tagName==="IMG"&&(n=await ce(e.src)),e.tagName==="VIDEO"&&(n=await ce(e.poster)),e.tagName==="CANVAS"&&await new Promise(i=>{e.toBlob(async c=>{n=await ie(c),i()})});else if(typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas){const i=await e.convertToBlob();n=await ie(i)}else(e instanceof File||e instanceof Blob)&&(n=await ie(e));return new Uint8Array(n)};var yt=ce;const wt=ht,bt=pt,Lt=gt,St=mt,Et=vt,Ot=yt;var kt={defaultOptions:wt,spawnWorker:bt,terminateWorker:Lt,onMessage:St,send:Et,loadImage:Ot};const At=We,Tt=qe,O=Le,{log:ve}=K,Rt=ue,W=Se,{defaultOptions:_t,spawnWorker:It,terminateWorker:$t,onMessage:Pt,loadImage:ye,send:jt}=kt;let we=0;var Ee=async(e="eng",n=W.LSTM_ONLY,i={},c={})=>{const l=Rt("Worker",we),{logger:m,errorHandler:f,...v}=At({..._t,...i}),L={},E={},R=typeof e=="string"?e.split("+"):e;let h=n,S=c;const _=[W.DEFAULT,W.LSTM_ONLY].includes(n)&&!v.legacyCore;let C,N;const M=new Promise((r,a)=>{N=r,C=a}),D=r=>{C(r.message)};let w=It(v);w.onerror=D,we+=1;const q=(r,a)=>{L[r]=a},F=(r,a)=>{E[r]=a},b=({id:r,action:a,payload:d})=>new Promise((p,g)=>{ve(`[${l}]: Start ${r}, action=${a}`);const y=`${a}-${r}`;q(y,p),F(y,g),jt(w,{workerId:l,jobId:r,action:a,payload:d})}),x=()=>console.warn("`load` is depreciated and should be removed from code (workers now come pre-loaded)"),J=r=>b(O({id:r,action:"load",payload:{options:{lstmOnly:_,corePath:v.corePath,logging:v.logging}}})),B=(r,a,d)=>b(O({id:d,action:"FS",payload:{method:"writeFile",args:[r,a]}})),G=(r,a)=>b(O({id:a,action:"FS",payload:{method:"readFile",args:[r,{encoding:"utf8"}]}})),te=(r,a)=>b(O({id:a,action:"FS",payload:{method:"unlink",args:[r]}})),Y=(r,a,d)=>b(O({id:d,action:"FS",payload:{method:r,args:a}})),ne=()=>console.warn("`loadLanguage` is depreciated and should be removed from code (workers now come with language pre-loaded)"),V=(r,a)=>b(O({id:a,action:"loadLanguage",payload:{langs:r,options:{langPath:v.langPath,dataPath:v.dataPath,cachePath:v.cachePath,cacheMethod:v.cacheMethod,gzip:v.gzip,lstmOnly:[W.LSTM_ONLY,W.TESSERACT_LSTM_COMBINED].includes(h)&&!v.legacyLang}}})),se=()=>console.warn("`initialize` is depreciated and should be removed from code (workers now come pre-initialized)"),U=(r,a,d,p)=>b(O({id:p,action:"initialize",payload:{langs:r,oem:a,config:d}})),Z=(r="eng",a,d,p)=>{if(_&&[W.TESSERACT_ONLY,W.TESSERACT_LSTM_COMBINED].includes(a))throw Error("Legacy model requested but code missing.");const g=a||h;h=g;const y=d||S;S=y;const I=(typeof r=="string"?r.split("+"):r).filter($=>!R.includes($));return R.push(...I),I.length>0?V(I,p).then(()=>U(r,g,y,p)):U(r,g,y,p)},Q=(r={},a)=>b(O({id:a,action:"setParameters",payload:{params:r}})),re=async(r,a={},d={blocks:!0,text:!0,hocr:!0,tsv:!0},p)=>b(O({id:p,action:"recognize",payload:{image:await ye(r),options:a,output:d}})),o=(r="Tesseract OCR Result",a=!1,d)=>(console.log("`getPDF` function is depreciated. `recognize` option `savePDF` should be used instead."),b(O({id:d,action:"getPDF",payload:{title:r,textonly:a}}))),t=async(r,a)=>{if(_)throw Error("`worker.detect` requires Legacy model, which was not loaded.");return b(O({id:a,action:"detect",payload:{image:await ye(r)}}))},s=async()=>(w!==null&&($t(w),w=null),Promise.resolve());Pt(w,({workerId:r,jobId:a,status:d,action:p,data:g})=>{const y=`${p}-${a}`;if(d==="resolve"){ve(`[${r}]: Complete ${a}`);let z=g;p==="recognize"?z=Tt(g):p==="getPDF"&&(z=Array.from({...g,length:Object.keys(g).length})),L[y]({jobId:a,data:z})}else if(d==="reject")if(E[y](g),p==="load"&&C(g),f)f(g);else throw Error(g);else d==="progress"&&m({...g,userJobId:a})});const u={id:l,worker:w,setResolve:q,setReject:F,load:x,writeText:B,readText:G,removeFile:te,FS:Y,loadLanguage:ne,initialize:se,reinitialize:Z,setParameters:Q,recognize:re,getPDF:o,detect:t,terminate:s};return J().then(()=>V(e)).then(()=>U(e,n,c)).then(()=>N(u)).catch(()=>{}),M};const Oe=Ee,Ct=async(e,n,i)=>{const c=await Oe(n,1,i);return c.recognize(e).finally(async()=>{await c.terminate()})},Nt=async(e,n)=>{const i=await Oe("osd",0,n);return i.detect(e).finally(async()=>{await i.terminate()})};var Mt={recognize:Ct,detect:Nt},Dt={AFR:"afr",AMH:"amh",ARA:"ara",ASM:"asm",AZE:"aze",AZE_CYRL:"aze_cyrl",BEL:"bel",BEN:"ben",BOD:"bod",BOS:"bos",BUL:"bul",CAT:"cat",CEB:"ceb",CES:"ces",CHI_SIM:"chi_sim",CHI_TRA:"chi_tra",CHR:"chr",CYM:"cym",DAN:"dan",DEU:"deu",DZO:"dzo",ELL:"ell",ENG:"eng",ENM:"enm",EPO:"epo",EST:"est",EUS:"eus",FAS:"fas",FIN:"fin",FRA:"fra",FRK:"frk",FRM:"frm",GLE:"gle",GLG:"glg",GRC:"grc",GUJ:"guj",HAT:"hat",HEB:"heb",HIN:"hin",HRV:"hrv",HUN:"hun",IKU:"iku",IND:"ind",ISL:"isl",ITA:"ita",ITA_OLD:"ita_old",JAV:"jav",JPN:"jpn",KAN:"kan",KAT:"kat",KAT_OLD:"kat_old",KAZ:"kaz",KHM:"khm",KIR:"kir",KOR:"kor",KUR:"kur",LAO:"lao",LAT:"lat",LAV:"lav",LIT:"lit",MAL:"mal",MAR:"mar",MKD:"mkd",MLT:"mlt",MSA:"msa",MYA:"mya",NEP:"nep",NLD:"nld",NOR:"nor",ORI:"ori",PAN:"pan",POL:"pol",POR:"por",PUS:"pus",RON:"ron",RUS:"rus",SAN:"san",SIN:"sin",SLK:"slk",SLV:"slv",SPA:"spa",SPA_OLD:"spa_old",SQI:"sqi",SRP:"srp",SRP_LATN:"srp_latn",SWA:"swa",SWE:"swe",SYR:"syr",TAM:"tam",TEL:"tel",TGK:"tgk",TGL:"tgl",THA:"tha",TIR:"tir",TUR:"tur",UIG:"uig",UKR:"ukr",URD:"urd",UZB:"uzb",UZB_CYRL:"uzb_cyrl",VIE:"vie",YID:"yid"},Gt={OSD_ONLY:"0",AUTO_OSD:"1",AUTO_ONLY:"2",AUTO:"3",SINGLE_COLUMN:"4",SINGLE_BLOCK_VERT_TEXT:"5",SINGLE_BLOCK:"6",SINGLE_LINE:"7",SINGLE_WORD:"8",CIRCLE_WORD:"9",SINGLE_CHAR:"10",SPARSE_TEXT:"11",SPARSE_TEXT_OSD:"12",RAW_LINE:"13"};const zt=Ce,Ft=Ee,Ut=Mt,Wt=Dt,qt=Se,Bt=Gt,{setLogging:Yt}=K;var Ht={languages:Wt,OEM:qt,PSM:Bt,createScheduler:zt,createWorker:Ft,setLogging:Yt,...Ut};let P,j,le,k,A,ee,ke,be=0,Ae,Te;const T={treshold:70,run:!1},H={};async function Kt(){P=640,j=0,k=document.querySelector("#video"),A=document.querySelector("#videoPreview"),ee=document.querySelector("#videoAnalyze"),ke=document.querySelector("#resultView"),Te=document.querySelector("#bell"),le=!1,Ae=await Ht.createWorker("eng",1)}async function xt(){const e=[{label:"none",id:null}];try{let n=await navigator.mediaDevices.getUserMedia({audio:!1,video:!0});(await navigator.mediaDevices.enumerateDevices()).forEach(c=>{console.log("device.label :",c.label),console.table(c),c.kind=="videoinput"&&e.push({label:c.label,id:c.deviceId})})}catch(n){console.log("error in getting device list",n)}return e}async function Jt(e){try{let n=await navigator.mediaDevices.getUserMedia({video:{deviceId:e},audio:!1});k.srcObject=n,k.play(),k.addEventListener("canplay",i=>{le||(j=k.videoHeight/k.videoWidth*P,k.setAttribute("width",P),k.setAttribute("height",j),A.setAttribute("width",P),A.setAttribute("height",j),ee.setAttribute("width",P),ee.setAttribute("height",j),le=!0)},!1)}catch(n){console.log("error getting stream ",n)}}function Vt(){let e=A.getContext("2d",{willReadFrequently:!0});e.drawImage(k,0,0,k.videoWidth,k.videoHeight,0,0,P,j),Qt(e),e.rect(P*.222,j*.333,P*.555,j*.333),e.lineWidth=6,e.strokeStyle="green",e.stroke()}function Zt(e){return T.treshold}function Qt(e){let n=e.getImageData(0,0,A.width,A.height),i=n.data;T.treshold=Zt();const c=Math.floor(T.treshold/100*255);for(let l=0;l<i.length;l+=4){const m=i[l],f=i[l+1],v=i[l+2],L=.2126*m+.7152*f+.0722*v;let E;L>=c?E=255:E=0,i[l]=i[l+1]=i[l+2]=E}e.putImageData(n,0,0)}function Xt(){window.requestAnimationFrame(Re)}async function Re(e){e-be>600&&(be=e,Vt(),await er(),ke.textContent=H.confidence+" "+H.result+" "+T.treshold),T.run&&window.requestAnimationFrame(Re)}async function er(){H.confidence=0,H.result=null,ee.getContext("2d").drawImage(A,A.width*.222,A.height*.333,A.width*.555,A.height*.333,0,0,P,j*.555);let n=new Image;n.src=ee.toDataURL("image/png");const i=await Ae.recognize(n,{rotateAuto:!0},{imageColor:!0,imageGrey:!0,imageBinary:!0});console.log(i),H.confidence=i.data.confidence,i?.data?.confidence>50&&(H.result=i.data.text),tr(i)}function tr(e){e.data.lines.forEach(n=>{n.words.forEach(i=>{/\d{8}/.test(i.text)&&(console.log("GOOOTTTT IIIITTTTTT"),console.log(i.text),Te.play())})})}Kt();let fe=document.createElement("select");fe.onchange=e=>T.treshold=e.target.value;let he=document.querySelector("#controls");he.appendChild(fe);let rr=[10,20,30,40,50,60,70,80,90];rr.map(e=>{let n=document.createElement("option");n.setAttribute("value",e),e==70&&n.setAttribute("selected",!0),n.textContent=e,fe.appendChild(n)});let _e=await xt(),ae=null;console.log(_e);const pe=document.createElement("select");he.appendChild(pe);document.querySelector("#video");document.querySelector("#videoPreview");_e.forEach(e=>{let n=document.createElement("option");n.setAttribute("value",e.id),n.textContent=e.label,pe.appendChild(n)});pe.onchange=e=>{ae=e.target.value,console.log(ae),Jt(ae)};const X=document.createElement("button");X.textContent="Start";he.appendChild(X);X.onclick=()=>{T.run=!T.run,T.run?X.textContent="Stop":X.textContent="Start",T.run&&Xt()};
