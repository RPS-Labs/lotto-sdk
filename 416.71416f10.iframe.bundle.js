"use strict";(self.webpackChunk_rps_labs_lotto_sdk=self.webpackChunk_rps_labs_lotto_sdk||[]).push([[416],{"./node_modules/@walletconnect/modal-core/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ConfigCtrl:()=>dist_y,zv:()=>dist_a,uA:()=>R,ExplorerCtrl:()=>te,jb:()=>se,OptionsCtrl:()=>dist_p,AV:()=>T,ThemeCtrl:()=>ne,ToastCtrl:()=>oe});Symbol();const t=Symbol();const s=Object.getPrototypeOf,c=new WeakMap,l=e=>e&&(c.has(e)?c.get(e):s(e)===Object.prototype||s(e)===Array.prototype),h=(e,t=!0)=>{c.set(e,t)},isObject=x=>"object"==typeof x&&null!==x,proxyStateMap=new WeakMap,refSet=new WeakSet,buildProxyFunction=(objectIs=Object.is,newProxy=((target,handler)=>new Proxy(target,handler)),canProxy=(x=>isObject(x)&&!refSet.has(x)&&(Array.isArray(x)||!(Symbol.iterator in x))&&!(x instanceof WeakMap)&&!(x instanceof WeakSet)&&!(x instanceof Error)&&!(x instanceof Number)&&!(x instanceof Date)&&!(x instanceof String)&&!(x instanceof RegExp)&&!(x instanceof ArrayBuffer)),defaultHandlePromise=(promise=>{switch(promise.status){case"fulfilled":return promise.value;case"rejected":throw promise.reason;default:throw promise}}),snapCache=new WeakMap,createSnapshot=((target,version,handlePromise=defaultHandlePromise)=>{const cache=snapCache.get(target);if((null==cache?void 0:cache[0])===version)return cache[1];const snap=Array.isArray(target)?[]:Object.create(Object.getPrototypeOf(target));return h(snap,!0),snapCache.set(target,[version,snap]),Reflect.ownKeys(target).forEach((key=>{if(Object.getOwnPropertyDescriptor(snap,key))return;const value=Reflect.get(target,key),desc={value,enumerable:!0,configurable:!0};if(refSet.has(value))h(value,!1);else if(value instanceof Promise)delete desc.value,desc.get=()=>handlePromise(value);else if(proxyStateMap.has(value)){const[target2,ensureVersion]=proxyStateMap.get(value);desc.value=createSnapshot(target2,ensureVersion(),handlePromise)}Object.defineProperty(snap,key,desc)})),Object.preventExtensions(snap)}),proxyCache=new WeakMap,versionHolder=[1,1],proxyFunction=(initialObject=>{if(!isObject(initialObject))throw new Error("object required");const found=proxyCache.get(initialObject);if(found)return found;let version=versionHolder[0];const listeners=new Set,notifyUpdate=(op,nextVersion=++versionHolder[0])=>{version!==nextVersion&&(version=nextVersion,listeners.forEach((listener=>listener(op,nextVersion))))};let checkVersion=versionHolder[1];const createPropListener=prop=>(op,nextVersion)=>{const newOp=[...op];newOp[1]=[prop,...newOp[1]],notifyUpdate(newOp,nextVersion)},propProxyStates=new Map,removePropListener=prop=>{var _a;const entry=propProxyStates.get(prop);entry&&(propProxyStates.delete(prop),null==(_a=entry[1])||_a.call(entry))},baseObject=Array.isArray(initialObject)?[]:Object.create(Object.getPrototypeOf(initialObject)),handler={deleteProperty(target,prop){const prevValue=Reflect.get(target,prop);removePropListener(prop);const deleted=Reflect.deleteProperty(target,prop);return deleted&&notifyUpdate(["delete",[prop],prevValue]),deleted},set(target,prop,value,receiver){const hasPrevValue=Reflect.has(target,prop),prevValue=Reflect.get(target,prop,receiver);if(hasPrevValue&&(objectIs(prevValue,value)||proxyCache.has(value)&&objectIs(prevValue,proxyCache.get(value))))return!0;removePropListener(prop),isObject(value)&&(value=(e=>l(e)&&e[t]||null)(value)||value);let nextValue=value;if(value instanceof Promise)value.then((v=>{value.status="fulfilled",value.value=v,notifyUpdate(["resolve",[prop],v])})).catch((e=>{value.status="rejected",value.reason=e,notifyUpdate(["reject",[prop],e])}));else{!proxyStateMap.has(value)&&canProxy(value)&&(nextValue=proxyFunction(value));const childProxyState=!refSet.has(nextValue)&&proxyStateMap.get(nextValue);childProxyState&&((prop,propProxyState)=>{if(propProxyStates.has(prop))throw new Error("prop listener already exists");if(listeners.size){const remove=propProxyState[3](createPropListener(prop));propProxyStates.set(prop,[propProxyState,remove])}else propProxyStates.set(prop,[propProxyState])})(prop,childProxyState)}return Reflect.set(target,prop,nextValue,receiver),notifyUpdate(["set",[prop],value,prevValue]),!0}},proxyObject=newProxy(baseObject,handler);proxyCache.set(initialObject,proxyObject);const proxyState=[baseObject,(nextCheckVersion=++versionHolder[1])=>(checkVersion===nextCheckVersion||listeners.size||(checkVersion=nextCheckVersion,propProxyStates.forEach((([propProxyState])=>{const propVersion=propProxyState[1](nextCheckVersion);propVersion>version&&(version=propVersion)}))),version),createSnapshot,listener=>{listeners.add(listener),1===listeners.size&&propProxyStates.forEach((([propProxyState,prevRemove],prop)=>{if(prevRemove)throw new Error("remove already exists");const remove=propProxyState[3](createPropListener(prop));propProxyStates.set(prop,[propProxyState,remove])}));return()=>{listeners.delete(listener),0===listeners.size&&propProxyStates.forEach((([propProxyState,remove],prop)=>{remove&&(remove(),propProxyStates.set(prop,[propProxyState]))}))}}];return proxyStateMap.set(proxyObject,proxyState),Reflect.ownKeys(initialObject).forEach((key=>{const desc=Object.getOwnPropertyDescriptor(initialObject,key);"value"in desc&&(proxyObject[key]=initialObject[key],delete desc.value,delete desc.writable),Object.defineProperty(baseObject,key,desc)})),proxyObject}))=>[proxyFunction,proxyStateMap,refSet,objectIs,newProxy,canProxy,defaultHandlePromise,snapCache,createSnapshot,proxyCache,versionHolder],[defaultProxyFunction]=buildProxyFunction();function proxy(initialObject={}){return defaultProxyFunction(initialObject)}function subscribe(proxyObject,callback,notifyInSync){const proxyState=proxyStateMap.get(proxyObject);let promise;proxyState||console.warn("Please use proxy object");const ops=[],addListener=proxyState[3];let isListenerActive=!1;const removeListener=addListener((op=>{ops.push(op),notifyInSync?callback(ops.splice(0)):promise||(promise=Promise.resolve().then((()=>{promise=void 0,isListenerActive&&callback(ops.splice(0))})))}));return isListenerActive=!0,()=>{isListenerActive=!1,removeListener()}}const dist_o=proxy({history:["ConnectWallet"],view:"ConnectWallet",data:void 0}),T={state:dist_o,subscribe:e=>subscribe(dist_o,(()=>e(dist_o))),push(e,t){e!==dist_o.view&&(dist_o.view=e,t&&(dist_o.data=t),dist_o.history.push(e))},reset(e){dist_o.view=e,dist_o.history=[e]},replace(e){dist_o.history.length>1&&(dist_o.history[dist_o.history.length-1]=e,dist_o.view=e)},goBack(){if(dist_o.history.length>1){dist_o.history.pop();const[e]=dist_o.history.slice(-1);dist_o.view=e}},setData(e){dist_o.data=e}},dist_a={WALLETCONNECT_DEEPLINK_CHOICE:"WALLETCONNECT_DEEPLINK_CHOICE",WCM_VERSION:"WCM_VERSION",RECOMMENDED_WALLET_AMOUNT:9,isMobile:()=>typeof window<"u"&&Boolean(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid:()=>dist_a.isMobile()&&navigator.userAgent.toLowerCase().includes("android"),isIos(){const e=navigator.userAgent.toLowerCase();return dist_a.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),isArray:e=>Array.isArray(e)&&e.length>0,formatNativeUrl(e,t,s){if(dist_a.isHttpUrl(e))return this.formatUniversalUrl(e,t,s);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);return`${n}wc?uri=${encodeURIComponent(t)}`},formatUniversalUrl(e,t,s){if(!dist_a.isHttpUrl(e))return this.formatNativeUrl(e,t,s);let n=e;n.endsWith("/")||(n=`${n}/`),this.setWalletConnectDeepLink(n,s);return`${n}wc?uri=${encodeURIComponent(t)}`},wait:async e=>new Promise((t=>{setTimeout(t,e)})),openHref(e,t){window.open(e,t,"noreferrer noopener")},setWalletConnectDeepLink(e,t){try{localStorage.setItem(dist_a.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},setWalletConnectAndroidDeepLink(e){try{const[t]=e.split("?");localStorage.setItem(dist_a.WALLETCONNECT_DEEPLINK_CHOICE,JSON.stringify({href:t,name:"Android"}))}catch{console.info("Unable to set WalletConnect android deep link")}},removeWalletConnectDeepLink(){try{localStorage.removeItem(dist_a.WALLETCONNECT_DEEPLINK_CHOICE)}catch{console.info("Unable to remove WalletConnect deep link")}},setModalVersionInStorage(){try{typeof localStorage<"u"&&localStorage.setItem(dist_a.WCM_VERSION,"2.6.2")}catch{console.info("Unable to set Web3Modal version in storage")}},getWalletRouterData(){var e;const t=null==(e=T.state.data)?void 0:e.Wallet;if(!t)throw new Error('Missing "Wallet" view data');return t}},dist_r=proxy({enabled:typeof location<"u"&&(location.hostname.includes("localhost")||location.protocol.includes("https")),userSessionId:"",events:[],connectedWalletId:void 0}),R={state:dist_r,subscribe:e=>subscribe(dist_r.events,(()=>e(function snapshot(proxyObject,handlePromise){const proxyState=proxyStateMap.get(proxyObject);proxyState||console.warn("Please use proxy object");const[target,ensureVersion,createSnapshot]=proxyState;return createSnapshot(target,ensureVersion(),handlePromise)}(dist_r.events[dist_r.events.length-1])))),initialize(){dist_r.enabled&&typeof(null==crypto?void 0:crypto.randomUUID)<"u"&&(dist_r.userSessionId=crypto.randomUUID())},setConnectedWalletId(e){dist_r.connectedWalletId=e},click(e){if(dist_r.enabled){const t={type:"CLICK",name:e.name,userSessionId:dist_r.userSessionId,timestamp:Date.now(),data:e};dist_r.events.push(t)}},track(e){if(dist_r.enabled){const t={type:"TRACK",name:e.name,userSessionId:dist_r.userSessionId,timestamp:Date.now(),data:e};dist_r.events.push(t)}},view(e){if(dist_r.enabled){const t={type:"VIEW",name:e.name,userSessionId:dist_r.userSessionId,timestamp:Date.now(),data:e};dist_r.events.push(t)}}},dist_c=proxy({chains:void 0,walletConnectUri:void 0,isAuth:!1,isCustomDesktop:!1,isCustomMobile:!1,isDataLoaded:!1,isUiLoaded:!1}),dist_p={state:dist_c,subscribe:e=>subscribe(dist_c,(()=>e(dist_c))),setChains(e){dist_c.chains=e},setWalletConnectUri(e){dist_c.walletConnectUri=e},setIsCustomDesktop(e){dist_c.isCustomDesktop=e},setIsCustomMobile(e){dist_c.isCustomMobile=e},setIsDataLoaded(e){dist_c.isDataLoaded=e},setIsUiLoaded(e){dist_c.isUiLoaded=e},setIsAuth(e){dist_c.isAuth=e}},W=proxy({projectId:"",mobileWallets:void 0,desktopWallets:void 0,walletImages:void 0,chains:void 0,enableAuthMode:!1,enableExplorer:!0,explorerExcludedWalletIds:void 0,explorerRecommendedWalletIds:void 0,termsOfServiceUrl:void 0,privacyPolicyUrl:void 0}),dist_y={state:W,subscribe:e=>subscribe(W,(()=>e(W))),setConfig(e){var t,s;R.initialize(),dist_p.setChains(e.chains),dist_p.setIsAuth(Boolean(e.enableAuthMode)),dist_p.setIsCustomMobile(Boolean(null==(t=e.mobileWallets)?void 0:t.length)),dist_p.setIsCustomDesktop(Boolean(null==(s=e.desktopWallets)?void 0:s.length)),dist_a.setModalVersionInStorage(),Object.assign(W,e)}};var V=Object.defineProperty,D=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,M=(e,t,s)=>t in e?V(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const L="https://explorer-api.walletconnect.com",E="wcm",dist_O="js-2.6.2";async function dist_w(e,t){const s=((e,t)=>{for(var s in t||(t={}))H.call(t,s)&&M(e,s,t[s]);if(D)for(var s of D(t))B.call(t,s)&&M(e,s,t[s]);return e})({sdkType:E,sdkVersion:dist_O},t),n=new URL(e,L);return n.searchParams.append("projectId",dist_y.state.projectId),Object.entries(s).forEach((([i,l])=>{l&&n.searchParams.append(i,String(l))})),(await fetch(n)).json()}const m={getDesktopListings:async e=>dist_w("/w3m/v1/getDesktopListings",e),getMobileListings:async e=>dist_w("/w3m/v1/getMobileListings",e),getInjectedListings:async e=>dist_w("/w3m/v1/getInjectedListings",e),getAllListings:async e=>dist_w("/w3m/v1/getAllListings",e),getWalletImageUrl:e=>`${L}/w3m/v1/getWalletImage/${e}?projectId=${dist_y.state.projectId}&sdkType=${E}&sdkVersion=${dist_O}`,getAssetImageUrl:e=>`${L}/w3m/v1/getAssetImage/${e}?projectId=${dist_y.state.projectId}&sdkType=${E}&sdkVersion=${dist_O}`};var z=Object.defineProperty,j=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,k=(e,t,s)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const N=dist_a.isMobile(),d=proxy({wallets:{listings:[],total:0,page:1},search:{listings:[],total:0,page:1},recomendedWallets:[]}),te={state:d,async getRecomendedWallets(){const{explorerRecommendedWalletIds:e,explorerExcludedWalletIds:t}=dist_y.state;if("NONE"===e||"ALL"===t&&!e)return d.recomendedWallets;if(dist_a.isArray(e)){const s={recommendedIds:e.join(",")},{listings:n}=await m.getAllListings(s),i=Object.values(n);i.sort(((l,v)=>e.indexOf(l.id)-e.indexOf(v.id))),d.recomendedWallets=i}else{const{chains:s,isAuth:n}=dist_p.state,i=s?.join(","),l=dist_a.isArray(t),v={page:1,sdks:n?"auth_v1":void 0,entries:dist_a.RECOMMENDED_WALLET_AMOUNT,chains:i,version:2,excludedIds:l?t.join(","):void 0},{listings:b}=N?await m.getMobileListings(v):await m.getDesktopListings(v);d.recomendedWallets=Object.values(b)}return d.recomendedWallets},async getWallets(e){const t=((e,t)=>{for(var s in t||(t={}))J.call(t,s)&&k(e,s,t[s]);if(j)for(var s of j(t))q.call(t,s)&&k(e,s,t[s]);return e})({},e),{explorerRecommendedWalletIds:s,explorerExcludedWalletIds:n}=dist_y.state,{recomendedWallets:i}=d;if("ALL"===n)return d.wallets;i.length?t.excludedIds=i.map((x=>x.id)).join(","):dist_a.isArray(s)&&(t.excludedIds=s.join(",")),dist_a.isArray(n)&&(t.excludedIds=[t.excludedIds,n].filter(Boolean).join(",")),dist_p.state.isAuth&&(t.sdks="auth_v1");const{page:l,search:v}=e,{listings:b,total:f}=N?await m.getMobileListings(t):await m.getDesktopListings(t),A=Object.values(b),U=v?"search":"wallets";return d[U]={listings:[...d[U].listings,...A],total:f,page:l??1},{listings:A,total:f}},getWalletImageUrl:e=>m.getWalletImageUrl(e),getAssetImageUrl:e=>m.getAssetImageUrl(e),resetSearch(){d.search={listings:[],total:0,page:1}}},I=proxy({open:!1}),se={state:I,subscribe:e=>subscribe(I,(()=>e(I))),open:async e=>new Promise((t=>{const{isUiLoaded:s,isDataLoaded:n}=dist_p.state;if(dist_a.removeWalletConnectDeepLink(),dist_p.setWalletConnectUri(e?.uri),dist_p.setChains(e?.chains),T.reset("ConnectWallet"),s&&n)I.open=!0,t();else{const i=setInterval((()=>{const l=dist_p.state;l.isUiLoaded&&l.isDataLoaded&&(clearInterval(i),I.open=!0,t())}),200)}})),close(){I.open=!1}};var G=Object.defineProperty,$=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,S=(e,t,s)=>t in e?G(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;const C=proxy({themeMode:function Z(){return typeof matchMedia<"u"&&matchMedia("(prefers-color-scheme: dark)").matches}()?"dark":"light"}),ne={state:C,subscribe:e=>subscribe(C,(()=>e(C))),setThemeConfig(e){const{themeMode:t,themeVariables:s}=e;t&&(C.themeMode=t),s&&(C.themeVariables=((e,t)=>{for(var s in t||(t={}))Q.call(t,s)&&S(e,s,t[s]);if($)for(var s of $(t))X.call(t,s)&&S(e,s,t[s]);return e})({},s))}},dist_g=proxy({open:!1,message:"",variant:"success"}),oe={state:dist_g,subscribe:e=>subscribe(dist_g,(()=>e(dist_g))),openToast(e,t){dist_g.open=!0,dist_g.message=e,dist_g.variant=t},closeToast(){dist_g.open=!1}}},"./node_modules/@walletconnect/modal/dist/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{WalletConnectModal:()=>d});var _walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@walletconnect/modal-core/dist/index.js");class d{constructor(e){this.openModal=_walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__.jb.open,this.closeModal=_walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__.jb.close,this.subscribeModal=_walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__.jb.subscribe,this.setTheme=_walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__.ThemeCtrl.setThemeConfig,_walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__.ThemeCtrl.setThemeConfig(e),_walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__.ConfigCtrl.setConfig(e),this.initUi()}async initUi(){if(typeof window<"u"){await __webpack_require__.e(411).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@walletconnect/modal-ui/dist/index.js"));const e=document.createElement("wcm-modal");document.body.insertAdjacentElement("beforeend",e),_walletconnect_modal_core__WEBPACK_IMPORTED_MODULE_0__.OptionsCtrl.setIsUiLoaded(!0)}}}}}]);