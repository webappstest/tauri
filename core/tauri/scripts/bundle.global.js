"use strict";var __TAURI_IIFE__=(()=>{var D=Object.defineProperty;var J=Object.getOwnPropertyDescriptor;var X=Object.getOwnPropertyNames;var B=Object.prototype.hasOwnProperty;var c=(n,e)=>{for(var t in e)D(n,t,{get:e[t],enumerable:!0})},ee=(n,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of X(e))!B.call(n,s)&&s!==t&&D(n,s,{get:()=>e[s],enumerable:!(r=J(e,s))||r.enumerable});return n};var te=n=>ee(D({},"__esModule",{value:!0}),n);var lt={};c(lt,{app:()=>S,event:()=>k,invoke:()=>ot,notification:()=>N,os:()=>$,path:()=>I,process:()=>R,shell:()=>F,tauri:()=>x,updater:()=>V,window:()=>j});var S={};c(S,{getName:()=>ae,getTauriVersion:()=>se,getVersion:()=>re,hide:()=>le,show:()=>oe});var x={};c(x,{convertFileSrc:()=>ie,invoke:()=>o,transformCallback:()=>p});function ne(){return window.crypto.getRandomValues(new Uint32Array(1))[0]}function p(n,e=!1){let t=ne(),r=`_${t}`;return Object.defineProperty(window,r,{value:s=>(e&&Reflect.deleteProperty(window,r),n?.(s)),writable:!1,configurable:!0}),t}async function o(n,e={}){return new Promise((t,r)=>{let s=p(d=>{t(d),Reflect.deleteProperty(window,`_${l}`)},!0),l=p(d=>{r(d),Reflect.deleteProperty(window,`_${s}`)},!0);window.__TAURI_IPC__({cmd:n,callback:s,error:l,...e})})}function ie(n,e="asset"){let t=encodeURIComponent(n);return navigator.userAgent.includes("Windows")?`https://${e}.localhost/${t}`:`${e}://localhost/${t}`}async function i(n){return o("tauri",n)}async function re(){return i({__tauriModule:"App",message:{cmd:"getAppVersion"}})}async function ae(){return i({__tauriModule:"App",message:{cmd:"getAppName"}})}async function se(){return i({__tauriModule:"App",message:{cmd:"getTauriVersion"}})}async function oe(){return i({__tauriModule:"App",message:{cmd:"show"}})}async function le(){return i({__tauriModule:"App",message:{cmd:"hide"}})}var k={};c(k,{TauriEvent:()=>v,emit:()=>E,listen:()=>L,once:()=>U});async function q(n,e){return i({__tauriModule:"Event",message:{cmd:"unlisten",event:n,eventId:e}})}async function w(n,e,t){await i({__tauriModule:"Event",message:{cmd:"emit",event:n,windowLabel:e,payload:t}})}async function f(n,e,t){return i({__tauriModule:"Event",message:{cmd:"listen",event:n,windowLabel:e,handler:p(t)}}).then(r=>async()=>q(n,r))}async function P(n,e,t){return f(n,e,r=>{t(r),q(n,r.id).catch(()=>{})})}var v=(u=>(u.WINDOW_RESIZED="tauri://resize",u.WINDOW_MOVED="tauri://move",u.WINDOW_CLOSE_REQUESTED="tauri://close-requested",u.WINDOW_CREATED="tauri://window-created",u.WINDOW_DESTROYED="tauri://destroyed",u.WINDOW_FOCUS="tauri://focus",u.WINDOW_BLUR="tauri://blur",u.WINDOW_SCALE_FACTOR_CHANGED="tauri://scale-change",u.WINDOW_THEME_CHANGED="tauri://theme-changed",u.WINDOW_FILE_DROP="tauri://file-drop",u.WINDOW_FILE_DROP_HOVER="tauri://file-drop-hover",u.WINDOW_FILE_DROP_CANCELLED="tauri://file-drop-cancelled",u.MENU="tauri://menu",u.CHECK_UPDATE="tauri://update",u.UPDATE_AVAILABLE="tauri://update-available",u.INSTALL_UPDATE="tauri://update-install",u.STATUS_UPDATE="tauri://update-status",u.DOWNLOAD_PROGRESS="tauri://update-download-progress",u))(v||{});async function L(n,e){return f(n,null,e)}async function U(n,e){return P(n,null,e)}async function E(n,e){return w(n,void 0,e)}var N={};c(N,{isPermissionGranted:()=>ue,requestPermission:()=>ce,sendNotification:()=>me});async function ue(){return window.Notification.permission!=="default"?Promise.resolve(window.Notification.permission==="granted"):i({__tauriModule:"Notification",message:{cmd:"isNotificationPermissionGranted"}})}async function ce(){return window.Notification.requestPermission()}function me(n){typeof n=="string"?new window.Notification(n):new window.Notification(n.title,n)}var I={};c(I,{BaseDirectory:()=>K,appCacheDir:()=>he,appConfigDir:()=>pe,appDataDir:()=>ge,appLocalDataDir:()=>ye,appLogDir:()=>ke,audioDir:()=>be,basename:()=>Ge,cacheDir:()=>fe,configDir:()=>_e,dataDir:()=>we,delimiter:()=>Ie,desktopDir:()=>Pe,dirname:()=>Ve,documentDir:()=>ve,downloadDir:()=>Ee,executableDir:()=>Oe,extname:()=>He,fontDir:()=>We,homeDir:()=>Me,isAbsolute:()=>je,join:()=>ze,localDataDir:()=>Ce,normalize:()=>Fe,pictureDir:()=>Ae,publicDir:()=>Te,resolve:()=>Re,resolveResource:()=>xe,resourceDir:()=>De,runtimeDir:()=>Se,sep:()=>Ne,templateDir:()=>Le,videoDir:()=>Ue});function _(){return navigator.appVersion.includes("Win")}var K=(a=>(a[a.Audio=1]="Audio",a[a.Cache=2]="Cache",a[a.Config=3]="Config",a[a.Data=4]="Data",a[a.LocalData=5]="LocalData",a[a.Document=6]="Document",a[a.Download=7]="Download",a[a.Picture=8]="Picture",a[a.Public=9]="Public",a[a.Video=10]="Video",a[a.Resource=11]="Resource",a[a.Temp=12]="Temp",a[a.AppConfig=13]="AppConfig",a[a.AppData=14]="AppData",a[a.AppLocalData=15]="AppLocalData",a[a.AppCache=16]="AppCache",a[a.AppLog=17]="AppLog",a[a.Desktop=18]="Desktop",a[a.Executable=19]="Executable",a[a.Font=20]="Font",a[a.Home=21]="Home",a[a.Runtime=22]="Runtime",a[a.Template=23]="Template",a))(K||{});async function pe(){return o("plugin:path|resolve_directory",{directory:13})}async function ge(){return o("plugin:path|resolve_directory",{directory:14})}async function ye(){return o("plugin:path|resolve_directory",{directory:15})}async function he(){return o("plugin:path|resolve_directory",{directory:16})}async function be(){return o("plugin:path|resolve_directory",{directory:1})}async function fe(){return o("plugin:path|resolve_directory",{directory:2})}async function _e(){return o("plugin:path|resolve_directory",{directory:3})}async function we(){return o("plugin:path|resolve_directory",{directory:4})}async function Pe(){return o("plugin:path|resolve_directory",{directory:18})}async function ve(){return o("plugin:path|resolve_directory",{directory:6})}async function Ee(){return o("plugin:path|resolve_directory",{directory:7})}async function Oe(){return o("plugin:path|resolve_directory",{directory:19})}async function We(){return o("plugin:path|resolve_directory",{directory:20})}async function Me(){return o("plugin:path|resolve_directory",{directory:21})}async function Ce(){return o("plugin:path|resolve_directory",{directory:5})}async function Ae(){return o("plugin:path|resolve_directory",{directory:8})}async function Te(){return o("plugin:path|resolve_directory",{directory:9})}async function De(){return o("plugin:path|resolve_directory",{directory:11})}async function xe(n){return o("plugin:path|resolve_directory",{directory:11,path:n})}async function Se(){return o("plugin:path|resolve_directory",{directory:22})}async function Le(){return o("plugin:path|resolve_directory",{directory:23})}async function Ue(){return o("plugin:path|resolve_directory",{directory:10})}async function ke(){return o("plugin:path|resolve_directory",{directory:17})}var Ne=_()?"\\":"/",Ie=_()?";":":";async function Re(...n){return o("plugin:path|resolve",{paths:n})}async function Fe(n){return o("plugin:path|normalize",{path:n})}async function ze(...n){return o("plugin:path|join",{paths:n})}async function Ve(n){return o("plugin:path|dirname",{path:n})}async function He(n){return o("plugin:path|extname",{path:n})}async function Ge(n,e){return o("plugin:path|basename",{path:n,ext:e})}async function je(n){return o("plugin:path|isAbsolute",{path:n})}var R={};c(R,{exit:()=>$e,relaunch:()=>qe});async function $e(n=0){return i({__tauriModule:"Process",message:{cmd:"exit",exitCode:n}})}async function qe(){return i({__tauriModule:"Process",message:{cmd:"relaunch"}})}var F={};c(F,{Child:()=>O,Command:()=>y,EventEmitter:()=>g,open:()=>Qe});async function Ke(n,e,t=[],r){return typeof t=="object"&&Object.freeze(t),i({__tauriModule:"Shell",message:{cmd:"execute",program:e,args:t,options:r,onEventFn:p(n)}})}var g=class{constructor(){this.eventListeners=Object.create(null)}addListener(e,t){return this.on(e,t)}removeListener(e,t){return this.off(e,t)}on(e,t){return e in this.eventListeners?this.eventListeners[e].push(t):this.eventListeners[e]=[t],this}once(e,t){let r=s=>{this.removeListener(e,r),t(s)};return this.addListener(e,r)}off(e,t){return e in this.eventListeners&&(this.eventListeners[e]=this.eventListeners[e].filter(r=>r!==t)),this}removeAllListeners(e){return e?delete this.eventListeners[e]:this.eventListeners=Object.create(null),this}emit(e,t){if(e in this.eventListeners){let r=this.eventListeners[e];for(let s of r)s(t);return!0}return!1}listenerCount(e){return e in this.eventListeners?this.eventListeners[e].length:0}prependListener(e,t){return e in this.eventListeners?this.eventListeners[e].unshift(t):this.eventListeners[e]=[t],this}prependOnceListener(e,t){let r=s=>{this.removeListener(e,r),t(s)};return this.prependListener(e,r)}},O=class{constructor(e){this.pid=e}async write(e){return i({__tauriModule:"Shell",message:{cmd:"stdinWrite",pid:this.pid,buffer:typeof e=="string"?e:Array.from(e)}})}async kill(){return i({__tauriModule:"Shell",message:{cmd:"killChild",pid:this.pid}})}},y=class extends g{constructor(t,r=[],s){super();this.stdout=new g;this.stderr=new g;this.program=t,this.args=typeof r=="string"?[r]:r,this.options=s??{}}static create(t,r=[],s){return new y(t,r,s)}static sidecar(t,r=[],s){let l=new y(t,r,s);return l.options.sidecar=!0,l}async spawn(){return Ke(t=>{switch(t.event){case"Error":this.emit("error",t.payload);break;case"Terminated":this.emit("close",t.payload);break;case"Stdout":this.stdout.emit("data",t.payload);break;case"Stderr":this.stderr.emit("data",t.payload);break}},this.program,this.args,this.options).then(t=>new O(t))}async execute(){return new Promise((t,r)=>{this.on("error",r);let s=[],l=[];this.stdout.on("data",d=>{s.push(d)}),this.stderr.on("data",d=>{l.push(d)}),this.on("close",d=>{t({code:d.code,signal:d.signal,stdout:this.collectOutput(s),stderr:this.collectOutput(l)})}),this.spawn().catch(r)})}collectOutput(t){return this.options.encoding==="raw"?t.reduce((r,s)=>new Uint8Array([...r,...s,10]),new Uint8Array):t.join(`
`)}};async function Qe(n,e){return i({__tauriModule:"Shell",message:{cmd:"open",path:n,with:e}})}var V={};c(V,{checkUpdate:()=>Ye,installUpdate:()=>Ze,onUpdaterEvent:()=>z});async function z(n){return L("tauri://update-status",e=>{n(e?.payload)})}async function Ze(){let n;function e(){n&&n(),n=void 0}return new Promise((t,r)=>{function s(l){if(l.error){e(),r(l.error);return}l.status==="DONE"&&(e(),t())}z(s).then(l=>{n=l}).catch(l=>{throw e(),l}),E("tauri://update-install").catch(l=>{throw e(),l})})}async function Ye(){let n;function e(){n&&n(),n=void 0}return new Promise((t,r)=>{function s(d){e(),t({manifest:d,shouldUpdate:!0})}function l(d){if(d.error){e(),r(d.error);return}d.status==="UPTODATE"&&(e(),t({shouldUpdate:!1}))}U("tauri://update-available",d=>{s(d?.payload)}).catch(d=>{throw e(),d}),z(l).then(d=>{n=d}).catch(d=>{throw e(),d}),E("tauri://update").catch(d=>{throw e(),d})})}var j={};c(j,{CloseRequestedEvent:()=>T,LogicalPosition:()=>M,LogicalSize:()=>W,PhysicalPosition:()=>b,PhysicalSize:()=>h,UserAttentionType:()=>Z,WebviewWindow:()=>m,WebviewWindowHandle:()=>C,WindowManager:()=>A,appWindow:()=>H,availableMonitors:()=>et,currentMonitor:()=>Xe,getAll:()=>Y,getCurrent:()=>Je,primaryMonitor:()=>Be});var W=class{constructor(e,t){this.type="Logical";this.width=e,this.height=t}},h=class{constructor(e,t){this.type="Physical";this.width=e,this.height=t}toLogical(e){return new W(this.width/e,this.height/e)}},M=class{constructor(e,t){this.type="Logical";this.x=e,this.y=t}},b=class{constructor(e,t){this.type="Physical";this.x=e,this.y=t}toLogical(e){return new M(this.x/e,this.y/e)}},Z=(t=>(t[t.Critical=1]="Critical",t[t.Informational=2]="Informational",t))(Z||{});function Je(){return new m(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0})}function Y(){return window.__TAURI_METADATA__.__windows.map(n=>new m(n.label,{skip:!0}))}var Q=["tauri://created","tauri://error"],C=class{constructor(e){this.label=e,this.listeners=Object.create(null)}async listen(e,t){return this._handleTauriEvent(e,t)?Promise.resolve(()=>{let r=this.listeners[e];r.splice(r.indexOf(t),1)}):f(e,this.label,t)}async once(e,t){return this._handleTauriEvent(e,t)?Promise.resolve(()=>{let r=this.listeners[e];r.splice(r.indexOf(t),1)}):P(e,this.label,t)}async emit(e,t){if(Q.includes(e)){for(let r of this.listeners[e]||[])r({event:e,id:-1,windowLabel:this.label,payload:t});return Promise.resolve()}return w(e,this.label,t)}_handleTauriEvent(e,t){return Q.includes(e)?(e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t],!0):!1}},A=class extends C{async scaleFactor(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"scaleFactor"}}}})}async innerPosition(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerPosition"}}}}).then(({x:e,y:t})=>new b(e,t))}async outerPosition(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerPosition"}}}}).then(({x:e,y:t})=>new b(e,t))}async innerSize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"innerSize"}}}}).then(({width:e,height:t})=>new h(e,t))}async outerSize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"outerSize"}}}}).then(({width:e,height:t})=>new h(e,t))}async isFullscreen(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isFullscreen"}}}})}async isMinimized(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isMinimized"}}}})}async isMaximized(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isMaximized"}}}})}async isDecorated(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isDecorated"}}}})}async isResizable(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isResizable"}}}})}async isVisible(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"isVisible"}}}})}async title(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"title"}}}})}async theme(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"theme"}}}})}async center(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"center"}}}})}async requestUserAttention(e){let t=null;return e&&(e===1?t={type:"Critical"}:t={type:"Informational"}),i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"requestUserAttention",payload:t}}}})}async setResizable(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setResizable",payload:e}}}})}async setTitle(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setTitle",payload:e}}}})}async maximize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"maximize"}}}})}async unmaximize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unmaximize"}}}})}async toggleMaximize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"toggleMaximize"}}}})}async minimize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"minimize"}}}})}async unminimize(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"unminimize"}}}})}async show(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"show"}}}})}async hide(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"hide"}}}})}async close(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"close"}}}})}async setDecorations(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setDecorations",payload:e}}}})}async setShadow(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setShadow",payload:e}}}})}async setAlwaysOnTop(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setAlwaysOnTop",payload:e}}}})}async setContentProtected(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setContentProtected",payload:e}}}})}async setSize(e){if(!e||e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSize",payload:{type:e.type,data:{width:e.width,height:e.height}}}}}})}async setMinSize(e){if(e&&e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMinSize",payload:e?{type:e.type,data:{width:e.width,height:e.height}}:null}}}})}async setMaxSize(e){if(e&&e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `size` argument must be either a LogicalSize or a PhysicalSize instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setMaxSize",payload:e?{type:e.type,data:{width:e.width,height:e.height}}:null}}}})}async setPosition(e){if(!e||e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setPosition",payload:{type:e.type,data:{x:e.x,y:e.y}}}}}})}async setFullscreen(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFullscreen",payload:e}}}})}async setFocus(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setFocus"}}}})}async setIcon(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setIcon",payload:{icon:typeof e=="string"?e:Array.from(e)}}}}})}async setSkipTaskbar(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setSkipTaskbar",payload:e}}}})}async setCursorGrab(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorGrab",payload:e}}}})}async setCursorVisible(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorVisible",payload:e}}}})}async setCursorIcon(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorIcon",payload:e}}}})}async setCursorPosition(e){if(!e||e.type!=="Logical"&&e.type!=="Physical")throw new Error("the `position` argument must be either a LogicalPosition or a PhysicalPosition instance");return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setCursorPosition",payload:{type:e.type,data:{x:e.x,y:e.y}}}}}})}async setIgnoreCursorEvents(e){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"setIgnoreCursorEvents",payload:e}}}})}async startDragging(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{label:this.label,cmd:{type:"startDragging"}}}})}async onResized(e){return this.listen("tauri://resize",e)}async onMoved(e){return this.listen("tauri://move",e)}async onCloseRequested(e){return this.listen("tauri://close-requested",t=>{let r=new T(t);Promise.resolve(e(r)).then(()=>{if(!r.isPreventDefault())return this.close()})})}async onFocusChanged(e){let t=await this.listen("tauri://focus",s=>{e({...s,payload:!0})}),r=await this.listen("tauri://blur",s=>{e({...s,payload:!1})});return()=>{t(),r()}}async onScaleChanged(e){return this.listen("tauri://scale-change",e)}async onMenuClicked(e){return this.listen("tauri://menu",e)}async onFileDropEvent(e){let t=await this.listen("tauri://file-drop",l=>{e({...l,payload:{type:"drop",paths:l.payload}})}),r=await this.listen("tauri://file-drop-hover",l=>{e({...l,payload:{type:"hover",paths:l.payload}})}),s=await this.listen("tauri://file-drop-cancelled",l=>{e({...l,payload:{type:"cancel"}})});return()=>{t(),r(),s()}}async onThemeChanged(e){return this.listen("tauri://theme-changed",e)}},T=class{constructor(e){this._preventDefault=!1;this.event=e.event,this.windowLabel=e.windowLabel,this.id=e.id}preventDefault(){this._preventDefault=!0}isPreventDefault(){return this._preventDefault}},m=class extends A{constructor(e,t={}){super(e),t?.skip||i({__tauriModule:"Window",message:{cmd:"createWebview",data:{options:{label:e,...t}}}}).then(async()=>this.emit("tauri://created")).catch(async r=>this.emit("tauri://error",r))}static getByLabel(e){return Y().some(t=>t.label===e)?new m(e,{skip:!0}):null}},H;"__TAURI_METADATA__"in window?H=new m(window.__TAURI_METADATA__.__currentWindow.label,{skip:!0}):(console.warn(`Could not find "window.__TAURI_METADATA__". The "appWindow" value will reference the "main" window label.
Note that this is not an issue if running this frontend on a browser instead of a Tauri window.`),H=new m("main",{skip:!0}));function G(n){return n===null?null:{name:n.name,scaleFactor:n.scaleFactor,position:new b(n.position.x,n.position.y),size:new h(n.size.width,n.size.height)}}async function Xe(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"currentMonitor"}}}}).then(G)}async function Be(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"primaryMonitor"}}}}).then(G)}async function et(){return i({__tauriModule:"Window",message:{cmd:"manage",data:{cmd:{type:"availableMonitors"}}}}).then(n=>n.map(G))}var $={};c($,{EOL:()=>tt,arch:()=>at,platform:()=>nt,tempdir:()=>st,type:()=>rt,version:()=>it});var tt=_()?`\r
`:`
`;async function nt(){return i({__tauriModule:"Os",message:{cmd:"platform"}})}async function it(){return i({__tauriModule:"Os",message:{cmd:"version"}})}async function rt(){return i({__tauriModule:"Os",message:{cmd:"osType"}})}async function at(){return i({__tauriModule:"Os",message:{cmd:"arch"}})}async function st(){return i({__tauriModule:"Os",message:{cmd:"tempdir"}})}var ot=o;return te(lt);})();
window.__TAURI__ = __TAURI_IIFE__
