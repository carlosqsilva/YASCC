webpackJsonp([1],{19:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(0),n=a(2),o=a(6),r=a(22);const l="ONLINE",s="OFFLINE",c="TOGGLE_SIDEBAR",u="TOGGLE_DARK_MODE",g="PLAYLIST_LOADING",d="PLAYLIST_LOADING_NEXT",M="PLAYLIST_LOADED",I="PLAY_SONG",y="ON_PLAY",p="ON_PAUSE",j="TOGGLE_MUTE",N="TOGGLE_REPEAT",h="ON_TIME_UPDATE",L="ON_VOLUME_CHANGE",b="ON_LOAD_START",D="ON_LOADED_METADATA",m="ACTIVE_PLAYLIST",T="ADD_TO_PLAYLIST",x="REMOVE_FROM_PLAYLIST",A="LOADING_SEARCH",O="LOADING_SEARCH_NEXT",v="LOADED_SEARCH",S="INITIAL_LOAD";function C(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},i=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),i.forEach(function(e){w(t,e,a[e])})}return t}function w(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const z={sidebarVisible:!1,darkMode:!1,loadingPlaylist:!0,isPlaying:!1,playlist:[],online:!0},f=(t=z,e)=>{switch(e.type){case c:return C({},t,{sidebarVisible:!t.sidebarVisible});case u:return C({},t,{darkMode:!t.darkMode});case g:return C({},t,{loadingPlaylist:!0,playlist:[]});case d:return C({},t,{loadingPlaylist:!0});case M:return C({},t,{loadingPlaylist:!1,playlist:[...t.playlist,...e.playlist]});case l:return C({},t,{online:!0});case s:return C({},t,{online:!1});default:return t}},E={playlist:[],songIndex:null,audioUrl:null,currentSong:null,isPlaying:!1,repeat:!1,volume:1,loading:!1,location:"",duration:0,muted:!1,time:0},k=(t=E,e)=>{switch(e.type){case m:return C({},t,{playlist:e.currentPlaylist,location:e.location});case I:return C({},t,{songIndex:e.songIndex,audioUrl:e.audioUrl,currentSong:e.song});case b:return C({},t,{loading:!0});case y:return C({},t,{isPlaying:!0});case p:return C({},t,{isPlaying:!1});case j:return C({},t,{muted:!t.muted});case N:return C({},t,{repeat:!t.repeat});case h:return C({},t,{time:e.time});case L:return C({},t,{volume:e.volume,muted:"0"===e.volume});case D:return C({},t,{loading:!1,duration:e.duration});default:return t}},P={loadingSearch:!1,results:[]},Y=(t=P,e)=>{switch(e.type){case A:return C({},t,{loadingSearch:!0,results:[]});case O:return C({},t,{loadingSearch:!0});case v:return C({},t,{loadingSearch:!1,results:[...t.results,...e.playlist]});default:return t}},Z=(t={playlist:[]},e)=>{switch(e.type){case S:return e.playlist?{playlist:e.playlist}:t;case T:return{playlist:[...t.playlist,e.song]};case x:return{playlist:e.playlist};default:return t}};var Q=Object(o.c)({root:f,search:Y,playlist:k,userPlaylist:Z});var U=Object(o.d)(Q,Object(o.a)(r.a));const H=t=>{const e=parseInt(t/1e3,10);return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`},G=t=>t?t.replace("\u2013","-").split("-").pop():"",R=t=>{if(!t)return 0;if(t<1e3)return t;const e=t.toString(),a=e.length,i=a%3===0?3:a%3;return`${e.substring(0,i)}${a>=7?"M":"K"}`};class W{constructor(t){this.key="client_id=JAgPhXap7XK0g8dUOtklbE7UnF05W8AH",this.tracks=`https://api.soundcloud.com/tracks?linked_partitioning=1&limit=${t}&${this.key}`,this.created_at=null,this.genre="",this.tag=null,this.next=""}setGenre(t){return this.genre=`genres=${t}`,this.tag=null,this._load()}setTag(t){return this.tag=`tags=${t}`,this.genre=null,this._load()}setFilter(t){return this.created_at=t?`created_at=${t}`:null,this._load()}loadNext(){return this._getSongs(this.next)}async audioStream(t){return`${t}?${this.key}`}async search(t){if(!t.trim())return[];const e=t.split(" ").filter(t=>t.length>0).join("%20");return this._getSongs(`${this.tracks}&q=${e}`)}_load(){const t=[this.tracks,this.genre,this.tag,this.created_at].filter(t=>null!==t).join("&");return this._getSongs(t)}async _getSongs(t){try{const e=await fetch(t).then(t=>t.json());return this.next=e.next_href,e.collection.filter(t=>null!==t.artwork_url&&3e4!==t.duration).map(t=>({id:t.id,title:G(t.title),duration:H(t.duration),stream:t.stream_url,artworkOriginal:t.artwork_url,artwork:t.artwork_url.replace("large","t67x67"),waveform:t.waveform_url,user:t.user.username,likesCount:t.likes_count,likesCountMin:R(t.likes_count)}))}catch(t){return console.log(t),[]}}}class B{constructor(t){this.init=(()=>new Promise((t,e)=>{const a=indexedDB.open(this.DB_NAME,this.VERSION);a.onerror=(()=>e(a.error)),a.onsuccess=(e=>{this.DB=a.result,t(e)}),a.onupgradeneeded=(t=>{const e=t.target.result;for(const a of this.DB_STORE){const t=e.createObjectStore(a.name,{keyPath:a.key});a.default&&(t.transaction.oncomplete=(t=>{const i=e.transaction(a.name,"readwrite").objectStore(a.name);a.default.forEach(t=>{i.add(t)})}))}})})),this.save=((t,e)=>new Promise((a,i)=>{const n=this.DB.transaction(t,"readwrite"),o=n.objectStore(t);n.oncomplete=(t=>a(t)),n.onabort=(t=>i(t)),Array.isArray(e)?e.forEach(t=>{o.add(t)}):o.add(e)})),this.delete=((t,e)=>new Promise((a,i)=>{const n=this.DB.transaction(t,"readwrite"),o=n.objectStore(t);n.oncomplete=(t=>a(t)),n.onabort=(t=>i(t)),e.forEach(t=>{o.delete(t)})})),this.update=((t,e)=>new Promise((a,i)=>{const n=this.DB.transaction(t,"readwrite").objectStore(t).put(e);n.onsuccess=(t=>a(t)),n.onerror=(t=>i(t))})),this.getAll=(t=>new Promise((e,a)=>{const i=this.DB.transaction(t).objectStore(t).getAll();i.onsuccess=(({target:t})=>e(t.result)),i.onerror=(t=>a(t))})),this.DB_NAME=t.name,this.DB_STORE=t.store,this.VERSION=t.version||1,this.DB=null}}const V=new W(35),J=new B({name:"yascc",store:[{name:"playlist",key:"id"}]}),X=()=>({type:l}),_=()=>({type:s}),F=()=>({type:c}),$=()=>({type:b}),K=()=>({type:y}),q=()=>({type:p}),tt=()=>({type:N}),et=t=>({type:h,time:t}),at=()=>({type:j}),it=t=>({type:L,volume:t.target.value}),nt=t=>({type:D,duration:t}),ot=()=>(t,e)=>{const{darkMode:a}=e().root;a?document.documentElement.setAttribute("data-theme","light"):document.documentElement.setAttribute("data-theme","dark"),t({type:u})},rt=(t,e)=>async a=>{const i=await V.audioStream(e.stream);a({type:I,songIndex:t,song:e,audioUrl:i})},lt=(t,e)=>(a,i)=>{let n;"/"===e?n=i().root.playlist:"/search"===e?n=i().search.results:"/playlist"===e&&(n=i().userPlaylist.playlist),a(rt(t,n[t])),a({type:m,currentPlaylist:n,location:e})},st=()=>(t,e)=>{const{playlist:a,songIndex:i}=e().playlist,n=i!==a.length-1?i+1:0;t(rt(n,a[n]))},ct=()=>(t,e)=>{const{playlist:a,songIndex:i}=e().playlist,n=0!==i?i-1:a.length-1;t(rt(n,a[n]))},ut=t=>async e=>{e({type:g});const a=await V.setGenre(t);e({type:M,playlist:a})},gt=t=>async e=>{e({type:g});const a=await V.setTag(t);e({type:M,playlist:a})},dt=t=>async e=>{e({type:g});const a=await V.setFilter(t);e({type:M,playlist:a})},Mt=()=>async(t,e)=>{const{loadingPlaylist:a}=e().root;if(!a){t({type:d});const e=await V.loadNext();t({type:M,playlist:e})}},It=t=>async e=>{e({type:A});const a=await V.search(t);e({type:v,playlist:a})},yt=()=>async(t,e)=>{const{loadingSearch:a}=e().search;if(!a){t({type:O});const e=await V.loadNext();t({type:v,playlist:e})}},pt=t=>(e,a)=>{a().userPlaylist.playlist.some(e=>e.id===t.id)||Promise.resolve(e({type:T,song:t})).then(()=>J.save("playlist",t))},jt=t=>(e,a)=>{let i=a().userPlaylist.playlist.filter(e=>e.id!==t.id);Promise.resolve(e({type:x,playlist:i})).then(()=>J.delete("playlist",[t.id]))},Nt=()=>async t=>{await J.init();const e=await J.getAll("playlist");Promise.all([t({type:S,playlist:e}),t(ut("house"))])},ht=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Lt(){if("serviceWorker"in navigator){if(new URL("/YASCC",window.location).origin!==window.location.origin)return;const t="/YASCC/service-worker.js";ht?Dt(t):bt(t)}}function bt(t){navigator.serviceWorker.register(t).then(t=>{t.onupdatefound=(()=>{const e=t.installing;e.onstatechange=(()=>{"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})})}).catch(t=>{console.error("Error during service worker registration:",t)})}function Dt(t){fetch(t).then(e=>{404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(t=>{t.unregister().then(()=>{window.location.reload()})}):bt(t)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}var mt=a(1),Tt=a(31),xt=a(36),At=a(18);const Ot=mt["a"].form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  flex: 1;
`,vt=mt["a"].input`
  background: var(--light);
  color: var(--secondary);
  border-radius: 4px;
  border: none;
  outline: 0;
  font-size: 1rem;
  line-height: 2;
  padding: 0 1em;
  width: 100%;
`;class St extends i.a{constructor(...t){super(...t),this.state={value:""},this.handleChange=(t=>{this.setState({value:t.target.value})}),this.handleSubmit=(t=>{t.preventDefault(),this.props.searchSongs(this.state.value),this.props.history.push("/search")})}render(t,{value:e}){return Object(i.c)(Ot,{onSubmit:this.handleSubmit},Object(i.c)(vt,{placeholder:"Search...",value:e,onChange:this.handleChange}))}}const Ct={searchSongs:It};var wt=Object(n.b)(null,Ct)(Object(At.a)(St));const zt=mt["a"].img.attrs({alt:"",width:t=>t.size,height:t=>t.size})`
  align-self: center;
`,ft=mt["a"].svg.attrs({width:t=>t.size,height:t=>t.size,viewBox:"0 0 24 24"})`
  fill: ${t=>t.active?"#21d4fd":"#444"};
`;var Et=mt["a"].a`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  font-size: 0.9rem;

  min-width: 60px;
  padding: 0 10px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  @media screen and (max-width: 640px) {
    ${t=>t.noMobile&&"display: none"};
  }

  @media screen and (min-width: 640px) {
    ${t=>t.noDesktop&&"display: none"};
  }
`,kt=a(40),Pt=a.n(kt),Yt=a(41),Zt=a.n(Yt);const Qt=mt["a"].div`
  background: ${t=>t.online?"var(--primary)":"var(--danger)"};
  backface-visibility: hidden;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  height: 50px;
  display: flex;
  z-index: 10;
  padding-left: var(--sidebarSpace);

  &::after {
    box-shadow: inset 0px 4px 8px -3px rgba(17, 17, 17, 0.06);
    position: absolute;
    bottom: -5px;
    right: 0px;
    width: 100%;
    height: 5px;
    content: "";
  }
`,Ut=({toggleSidebar:t,toggleDarkMode:e,online:a,darkMode:n})=>Object(i.c)(Qt,{online:a},Object(i.c)(Et,{link:!0,noDesktop:!0,onClick:t},Object(i.c)(zt,{size:24,src:Pt.a})),Object(i.c)(wt,null),Object(i.c)(Et,{link:!0,onClick:e,title:"Toggle dark mode"},Object(i.c)(ft,{size:24,active:n},Object(i.c)("path",{d:"M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31A7.98 7.98 0 0 0 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"}))),Object(i.c)(Et,{noMobile:!0,href:"https://github.com/carlosqsilva/yascc",target:"_blank",rel:"noopener noreferrer"},Object(i.c)(zt,{size:24,src:Zt.a}))),Ht=({root:t})=>({online:t.online,darkMode:t.darkMode}),Gt={toggleSidebar:F,toggleDarkMode:ot};var Rt=Object(n.b)(Ht,Gt)(Ut);const Wt=[{value:"",label:"Default"},{value:"last_hour",label:"Last Hour"},{value:"last_week",label:"Last Week"},{value:"last_month",label:"Last Month"},{value:"last_year",label:"Last Year"}],Bt=[{value:"chill%20house",label:"#Chill"},{value:"deep%20house",label:"#Deep"},{value:"lofi%20hip%20hop",label:"#Lofi"},{value:"progressive%20house",label:"#Progressive"},{value:"relax",label:"#Relax"},{value:"study",label:"#Study"},{value:"sleep",label:"#Sleep"},{value:"tech%20house",label:"#Tech"},{value:"trance",label:"#Trance"},{value:"tropical%20house",label:"#Tropical"},{value:"workout",label:"#Workout"}],Vt=[{value:"alternative",label:"Alternative Rock"},{value:"ambient",label:"Ambient"},{value:"classical",label:"Classical"},{value:"country",label:"Country"},{value:"danceedm",label:"Dance & EDM"},{value:"dancehall",label:"Dancehall"},{value:"deephouse",label:"Deep House"},{value:"disco",label:"Disco"},{value:"drumbass",label:"Drum & Bass"},{value:"dubstep",label:"Dubstep"},{value:"eletronic",label:"Electronic"},{value:"hiphoprap",label:"Hip-hop & Rap"},{value:"house",label:"House"},{value:"indie",label:"Indie"},{value:"jazzblues",label:"Jazz & Blues"},{value:"metal",label:"Metal"},{value:"piano",label:"Piano"},{value:"pop",label:"Pop"},{value:"rbsoul",label:"R&B & Soul"},{value:"reggae",label:"Reggae"},{value:"reggaeton",label:"Reggaeton"},{value:"rock",label:"Rock"},{value:"soundtracks",label:"Soundtrack"},{value:"techno",label:"Techno"},{value:"trance",label:"Trance"},{value:"trap",label:"Trap"},{value:"triphop",label:"Triphop"},{value:"world",label:"World"}];var Jt=a(42);function Xt(t,e){if(null==t)return{};var a,i,n=_t(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)a=o[i],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}function _t(t,e){if(null==t)return{};var a,i,n={},o=Object.keys(t);for(i=0;i<o.length;i++)a=o[i],e.indexOf(a)>=0||(n[a]=t[a]);return n}const Ft=mt["a"].select`
  appearance: none;
  background: transparent url(${a.n(Jt).a}) no-repeat 82% 50%;
  color: var(--light);
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  align-self: center;
  margin-left: 20px;
  flex: 1;
  outline: 0;
  border: 0;
`,$t=mt["a"].option`
  color: var(--light);
  background: var(--lightDark);
`;var Kt=t=>{let{options:e}=t,a=Xt(t,["options"]);return Object(i.c)(Ft,a,e.map((t,e)=>Object(i.c)($t,{key:e,value:t.value},t.label)))},qt=a(43),te=a.n(qt),ee=a(44),ae=a.n(ee);function ie(){return(ie=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t}).apply(this,arguments)}const ne=mt["a"].div`
  background: var(--lightDark);
  overscroll-behavior-y: contain;
  will-change: transform;
  position: fixed;
  bottom: 0px;
  left: 0px;
  top: 0px;
  width: var(--sidebarWidth);
  font-size: var(--sidebarFontSize);
  z-index: 100;
  overflow-y: scroll;
  transform: ${t=>t.visible?"translateX(0)":"translateX(-100%)"};

  @media screen and (min-width: 640px) {
    transform: translateX(0);
  }
`,oe=mt["a"].div`
  display: flex;
  text-decoration: none;
  flex-direction: ${t=>t.horizontal?"row":"column"};
  padding: 0.7rem 0 0.7rem 1rem;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
`,re=oe.extend`
  cursor: pointer;
`,le=mt["a"].strong`
  flex: 1;
  align-self: center;
  margin-left: 20px;
  font-size: 1.1em;
  color: var(--light);
`,se=mt["a"].strong`
  color: var(--light);
  margin-bottom: 3px;
  font-size: 1em;
`,ce=mt["a"].span`
  background-color: whitesmoke;
  color: #111;
  border-radius: 5px;
  margin-right: 20px;
  font-size: 0.8em;
  padding: 0 0.5rem;
  align-self: center;
`,ue=mt["a"].a`
  flex: 1;
  display: flex;
  cursor: pointer;
  font-size: 1em;
  text-decoration: none;
  padding: 4px 0;
  color: ${t=>t.active?"#fff":"#999"};

  &:hover {
    color: white;
  }
`;class ge extends i.a{constructor(...t){super(...t),this.state={active:""},this.changeRoute=(t=>{this.props.location.pathname!==t&&this.props.history.push(t)}),this.active=(t=>{this.setState({active:t},()=>{this.changeRoute("/")})}),this.onChange=(t=>{this.props.setFilter(t.target.value)}),this.onTag=(({target:{name:t}})=>{this.props.setTag(t),this.active(t)}),this.onGenre=(({target:{name:t}})=>{this.props.setGenre(t),this.active(t)})}render({sidebarVisible:t,qtd:e,InnerProps:a},{active:n}){return Object(i.c)(ne,ie({visible:t},a),Object(i.c)(re,{horizontal:!0,onClick:()=>this.changeRoute("/playlist")},Object(i.c)(zt,{size:20,src:te.a}),Object(i.c)(le,null,"Playlist"),Object(i.c)(ce,null,e)),Object(i.c)(oe,{horizontal:!0},Object(i.c)(zt,{size:20,src:ae.a}),Object(i.c)(Kt,{options:Wt,onChange:this.onChange})),Object(i.c)(oe,null,Object(i.c)(se,null,"Popular Tags"),Bt.map((t,e)=>Object(i.c)(ue,{key:e,name:t.value,active:n===t.value,onClick:this.onTag},t.label))),Object(i.c)(oe,null,Object(i.c)(se,null,"Music Genres"),Vt.map((t,e)=>Object(i.c)(ue,{key:e,name:t.value,active:n===t.value,onClick:this.onGenre},t.label))))}}const de=({root:t,userPlaylist:e})=>({sidebarVisible:t.sidebarVisible,qtd:e.playlist.length}),Me={setFilter:dt,setGenre:ut,setTag:gt};var Ie=Object(At.a)(Object(n.b)(de,Me)(ge));function ye(){return(ye=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t}).apply(this,arguments)}function pe(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},i=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),i.forEach(function(e){je(t,e,a[e])})}return t}function je(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}class Ne extends i.a{constructor(...t){super(...t),this.open=!1,this.startX=0,this.startY=0,this.backdrop=0,this.translation=0,this.handleTouchEnd=(()=>{if(this.translation=this.translation<-50?-100:0,this.drawer.style.transition="transform 100ms ease-in-out",this.drawer.style.transform=`translate(${this.translation}%, 0)`,-100===this.translation)return this.overlay.style.backgroundColor="rgba(0,0,0,0)",this.overlay.style.width="20px",void(this.open=!1);this.open=!0}),this.handleTouchStart=(t=>{const{clientX:e,clientY:a}=t.targetTouches[0];this.startX=e,this.startY=a,this.drawer.style.transition=""}),this.handleTouchMove=(t=>{const{clientX:e,clientY:a}=t.targetTouches[0];if(Math.abs(e-this.startX)>Math.abs(a-this.startY)){const t=e/window.innerWidth;this.translation=Math.min(100*-(1-t),0),this.backdrop=Math.min(t,.5),this.overlay.style.width="100%",this.drawer.style.transform=`translateX(${this.translation}%)`,this.overlay.style.backgroundColor=`rgba(0,0,0,${this.backdrop})`}}),this.handleDrawer=(t=>{this.drawer=t}),this.handleOverlay=(t=>{this.overlay=t}),this.toggleDrawer=(t=>{this.drawer.style.transition="transform 200ms",this.open?(this.drawer.style.transform="translateX(-100%)",this.overlay.style.backgroundColor="rgba(0,0,0,0)",this.overlay.style.width="20px",this.open=!1):(this.drawer.style.transform="translateX(0)",this.overlay.style.backgroundColor="rgba(0,0,0,0.5)",this.overlay.style.width="100%",this.open=!0)})}componentDidUpdate(t){t.sidebarVisible!==this.props.sidebarVisible&&this.toggleDrawer()}render(){const t={onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd};return Object(i.c)("aside",null,Object(i.c)(Ie,{InnerProps:pe({innerRef:this.handleDrawer},t)}),Object(i.c)(he,ye({onClick:this.toggleDrawer,innerRef:this.handleOverlay},t)))}}const he=mt["a"].div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 20px;
  height: 100%;
  z-index: 50;
  display: var(--overlay);
`,Le=({root:{sidebarVisible:t}})=>({sidebarVisible:t});var be=Object(n.b)(Le)(Ne),De=a(45),me=a.n(De),Te=a(46),xe=a.n(Te),Ae=a(47),Oe=a.n(Ae),ve=a(48),Se=a.n(ve),Ce=a(49),we=a.n(Ce),ze=a(50),fe=a.n(ze),Ee=a(51),ke=a.n(Ee),Pe=a(52),Ye=a.n(Pe);const Ze=mt["a"].div`
  display: flex;
  justify-content: center;
  background: var(--primary);
`,Qe=mt["a"].div`
  background: var(--light);
  transition: all 200ms;
  position: absolute;
  top: 0;
  left: 0px;
  right: 0px;
  height: 120px;
  opacity: 0;
`,Ue=mt["a"].input.attrs({type:"range",min:0,max:1,step:.05})`
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  width: 100px;
  height: 10px;
  border-radius: 5px;
  background: var(--rangerTrack);
  transform: rotate(270deg) translateX(-50%) translateY(-20px);

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: var(--info);
    border-radius: 50%;
    appearance: none;
    width: 14px;
    height: 14px;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    background: var(--info);
    border-radius: 50%;
    height: 14px;
    width: 14px;
    cursor: pointer;
  }
`,He=mt["a"].div`
  display: flex;
  justify-content: center;
  position: relative;

  &:hover {
    ${Qe} {
      opacity: 1;
      transform: translateY(-100%);
    }
  }
`,Ge=({playing:t,playNext:e,playPrev:a,toggleMute:n,toggleRepeat:o,loading:r,toggle:l,repeat:s,muted:c,changeVolume:u})=>Object(i.c)(Ze,null,Object(i.c)(Et,{noMobile:!0,onClick:a},Object(i.c)(zt,{src:Se.a,size:30})),Object(i.c)(Et,{onClick:l},r?Object(i.c)(zt,{src:xe.a,size:30}):Object(i.c)(zt,{src:t?fe.a:Oe.a,size:30})),Object(i.c)(Et,{noMobile:!0,onClick:e},Object(i.c)(zt,{src:we.a,size:30})),Object(i.c)(Et,{noMobile:!0,onClick:o},Object(i.c)(ft,{size:30,active:s},Object(i.c)("path",{d:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"}))),Object(i.c)(He,null,Object(i.c)(Et,{noMobile:!0,onClick:n},Object(i.c)(zt,{src:c?ke.a:Ye.a,size:30})),Object(i.c)(Qe,null,Object(i.c)(Ue,{onChange:u})))),Re=({playlist:{isPlaying:t,loading:e,repeat:a,muted:i}})=>({playing:t,loading:e,repeat:a,muted:i}),We={playNext:st,playPrev:ct,toggleMute:at,toggleRepeat:tt,changeVolume:it};var Be=Object(n.b)(Re,We)(Ge);const Ve=mt["a"].div`
  flex: 1;
  position: relative;
  background-image: url(${t=>t.image});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  position: relative;
  cursor: pointer;
  overflow: hidden;
`,Je=mt["a"].div`
  transform: translateX(-100%);
  will-change: transform;
  background-color: var(--info);
  position: absolute;
  bottom: 0px;
  left: 0px;
  top: 0px;
  width: 100%;
  z-index: -10;
`,Xe=mt["a"].p`
  color: var(--lightDark);
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:last-child {
    font-size: 0.9rem;
  }
`,_e=t=>{let e=t,a=e.offsetLeft;for(;e.offsetParent;)a+=e.offsetParent.offsetLeft,e=e.offsetParent;return a};class Fe extends i.a{constructor(...t){super(...t),this.onClick=(t=>{const{duration:e,onChange:a}=this.props;a((t.clientX-_e(t.currentTarget))/t.currentTarget.offsetWidth*e)})}render({time:t,duration:e,song:a,children:n}){const o=`translateX(-${100-t/e*100}%)`;return Object(i.c)(Ve,{onClick:this.onClick,image:a.waveform},Object(i.c)(Je,{style:{transform:o}}),Object(i.c)(Xe,null,a.title),Object(i.c)(Xe,null,a.user))}}const $e=({playlist:t})=>({song:t.currentSong,time:t.time,duration:t.duration});var Ke=Object(n.b)($e)(Fe);const qe=mt["a"].div`
  padding-left: var(--sidebarSpace);
  background: var(--primary);
  backface-visibility: hidden;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 45px;
  display: flex;
  transform: ${t=>t.visible?"translateY(0)":"translateY(100%)"};
  transition: transform 500ms ease-in-out;
  z-index: 10;

  &::after {
    box-shadow: inset 0px -4px 8px -3px rgba(17, 17, 17, 0.06);
    position: absolute;
    top: -5px;
    right: 0px;
    width: 100%;
    height: 5px;
    content: "";
  }
`;class ta extends i.a{constructor(...t){super(...t),this.keyboardKey=(({code:t})=>{const{playPrev:e,playNext:a}=this.props;"MediaPlayPause"===t&&this.togglePlay(),"MediaTrackNext"===t&&a(),"MediaTrackPrevious"===t&&e()}),this.onLoadedMetadata=(()=>{this.props.changeDuration(this.audio.duration),this.audio.play()}),this.onTimeUpdate=(()=>{this.props.changeTime(this.audio.currentTime)}),this.changeTime=(t=>{this.audio.currentTime=t}),this.togglePlay=(()=>{this.audio.paused?this.audio.play():this.audio.pause()}),this.handleRef=(t=>{this.audio=t})}componentDidMount(){const{playNext:t,playPrev:e}=this.props;"mediaSession"in navigator?(navigator.mediaSession.playbackState="paused",navigator.mediaSession.setActionHandler("previoustrack",e),navigator.mediaSession.setActionHandler("play",this.togglePlay),navigator.mediaSession.setActionHandler("pause",this.togglePlay),navigator.mediaSession.setActionHandler("nexttrack",t)):window.addEventListener("keyup",this.keyboardKey,!1)}componentWillUnmount(){window.removeEventListener("keyup",this.keyboardKey,!1)}componentWillReceiveProps(t){if("mediaSession"in navigator){const{title:e,user:a,artworkOriginal:i}=t.song;navigator.mediaSession.metadata=new MediaMetadata({title:e,artist:a,artwork:[{src:i.replace("large","t500x500"),sizes:"500x500",type:"image/jpg"}]})}}render({audioUrl:t,playNext:e,onPause:a,onPlay:n,onLoadStart:o,repeat:r,muted:l,volume:s}){return Object(i.c)(qe,{visible:null!==t},Object(i.c)(Be,{toggle:this.togglePlay}),t&&Object(i.c)(Ke,{onChange:this.changeTime}),Object(i.c)("audio",{crossOrigin:"anonymous",onTimeUpdate:me()(this.onTimeUpdate,1e3,{leading:!1}),onLoadedMetadata:this.onLoadedMetadata,onLoadStart:o,onEnded:e,onPause:a,onPlay:n,volume:s,muted:l,src:t,loop:r,ref:this.handleRef}))}}const ea=({playlist:{currentSong:t,audioUrl:e,repeat:a,volume:i,muted:n}})=>({song:t,audioUrl:e,repeat:a,muted:n,volume:i}),aa={onPlay:K,onPause:q,playPrev:ct,playNext:st,changeTime:et,onLoadStart:$,changeDuration:nt};var ia=Object(n.b)(ea,aa)(ta);const na=mt["a"].div`
  margin: 0 auto;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 0.2rem solid #dedede;
  border-top-color: #444;
  animation: ${mt["b"]`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`} 1s infinite linear;
`,oa=mt["a"].button`
  all: unset;
  cursor: pointer;
  box-sizing: border-box;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  padding: 10px 15px;
  margin-bottom: 60px;
  border-radius: 2px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;class ra extends i.a{componentDidMount(){this.observer=new IntersectionObserver(this.props.loadMore),this.observer.observe(this.target)}componentWillUnmount(){this.observer.unobserve(this.target)}render({loadMore:t,isLoading:e}){return Object(i.c)(oa,{onClick:t,innerRef:t=>this.target=t},e?Object(i.c)(na,null):Object(i.c)("strong",null,"Load More..."))}}var la=ra,sa=a(53),ca=a.n(sa),ua=a(54),ga=a.n(ua),da=a(55),Ma=a.n(da),Ia=a(56),ya=a.n(Ia),pa=a(57),ja=a.n(pa);const Na=zt.extend`
  opacity: 0;
  margin: auto;
  display: block;
`,ha=mt["a"].img`
  position: absolute;
  top: 2px;
  right: 2px;
  z-index: 10;
  will-change: transform;
  transform: translateX(115%);
  transition: transform 200ms;
`,La=mt["a"].div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  padding: 6px;
  display: flex;
  background: var(--primary);

  @media screen and (min-width: 500px) {
    border-radius: 4px;
  }

  &:hover {
    #action {
      transform: translateX(0);
    }
    #play {
      opacity: 1;
    }
  }

  ${t=>t.active&&"\n    #action {\n      transform: translateX(0);\n    }\n    #play {\n      opacity: 1;\n    }\n  "};
`,ba=mt["a"].div`
  background-size: cover;
  background-position: center;
  display: flex;
  width: 67px;
  height: 67px;
`,Da=mt["a"].div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  overflow: hidden;
  flex: 1;
`,ma=mt["a"].p`
  color: var(--textGray);
  font-size: 0.8rem;
`,Ta=mt["a"].p`
  color: var(--secondary);
  font-size: 0.9rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,xa=mt["a"].div`
  display: flex;
  align-items: center;
  margin-top: auto;
`,Aa=mt["a"].span`
  flex: ${t=>t.flex?1:0};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  color: var(--textGray);

  &:not(:first-child) {
    font-size: 0.8rem;
    margin-left: 0.2rem;
  }
`,Oa=mt["a"].div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, 290px);
    grid-gap: 15px;
  }
`,va=t=>{const e=t?ya.a:ja.a,a=t?"Remove from Playlist":"Add to Playlist";return({song:t,play:n,playlistAction:o,active:r})=>Object(i.c)(La,{onClick:n,active:r},Object(i.c)(ha,{onClick:o,title:a,src:e,id:"action",size:24}),Object(i.c)(ba,{style:{background:`url(${t.artwork})`}},Object(i.c)(Na,{src:r?Ma.a:ca.a,id:"play",size:40})),Object(i.c)(Da,null,Object(i.c)(ma,null,t.user),Object(i.c)(Ta,{title:t.title},t.title),Object(i.c)(xa,null,Object(i.c)(Aa,{flex:!0},t.duration),Object(i.c)(zt,{src:ga.a,size:12}),Object(i.c)(Aa,{title:`${t.likesCount} likes`},t.likesCountMin))))},Sa=mt["a"].div`
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  transform: translateZ(0);

  @media screen and (min-width: 500px) {
    padding: 15px;
  }
`,Ca=(t,e=!1,a=!1)=>{const n=va(a);return class extends i.a{constructor(...t){super(...t),this.playSong=(t=>()=>{this.props.playSong(t,this.props.location.pathname)}),this.playlistAction=(t=>e=>{e||(e=window.event),e.stopPropagation&&e.stopPropagation(),this.props.playlistAction(t)})}render({loadMore:a,playlist:o,loading:r,active:l}){return Object(i.c)(Sa,null,t&&Object(i.c)(t,null),Object(i.c)(Oa,null,o.map((t,e)=>Object(i.c)(n,{song:t,active:l===t.id,playlistAction:this.playlistAction(t),play:this.playSong(e),key:t.id}))),e&&Object(i.c)(la,{isLoading:r,loadMore:a}))}}},wa=Ca(null,!0),za=({root:t,playlist:e},a)=>{let i=null;return e.location===a.location.pathname&&null!==e.currentSong&&(i=e.currentSong.id),{playlist:t.playlist,loading:t.loadingPlaylist,active:i}},fa={loadMore:Mt,playSong:lt,playlistAction:pt};var Ea=Object(n.b)(za,fa)(wa);const ka=Ca(null,!0),Pa=({search:t,playlist:e},a)=>{let i=null;return e.location===a.location.pathname&&null!==e.currentSong&&(i=e.currentSong.id),{playlist:t.results,loading:t.loadingSearch,active:i}},Ya={loadMore:yt,playSong:lt,playlistAction:pt};var Za=Object(n.b)(Pa,Ya)(ka);const Qa=Ca(null,!1,!0),Ua=({userPlaylist:t,playlist:e},a)=>{let i=null;return e.location===a.location.pathname&&null!==e.currentSong&&(i=e.currentSong.id),{playlist:t.playlist,active:i}},Ha={playSong:lt,playlistAction:jt};var Ga=Object(n.b)(Ua,Ha)(Qa);const Ra=mt["a"].div`
  height: 100vh;
  max-width: 100vw;
  padding-top: 50px;
  overflow: hidden;
  background: linear-gradient(to right bottom, var(--light2), var(--primary));
  transition: all 250ms ease;
  margin-left: var(--sidebarSpace);
`;var Wa=()=>Object(i.c)(xt.a,{basename:"/YASCC"},Object(i.c)(Ra,null,Object(i.c)(be,null),Object(i.c)(Rt,null),Object(i.c)(ia,null),Object(i.c)(Tt.a,{exact:!0,path:"/",component:Ea}),Object(i.c)(Tt.a,{path:"/search",component:Za}),Object(i.c)(Tt.a,{path:"/playlist",component:Ga})));Object(i.e)(Object(i.c)(n.a,{store:U},Object(i.c)(Wa,null)),document.body),window.addEventListener("online",()=>{U.dispatch(X())}),window.addEventListener("offline",()=>{U.dispatch(_())}),window.addEventListener("load",()=>{U.dispatch(Nt()).then(()=>Lt()),console.log("%c hello there...","font-size: 30px; color: red")})},40:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTAgMWgxNnYzSDBWMXptMCA1aDE2djNIMFY2em0wIDVoMTZ2M0gwdi0zeiIvPjwvc3ZnPg=="},41:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNDM4LjU0OSA0MzguNTQ5Ij48cGF0aCBkPSJNNDA5LjEzMiAxMTQuNTczYy0xOS42MDgtMzMuNTk2LTQ2LjIwNS02MC4xOTQtNzkuNzk4LTc5LjgtMzMuNTk4LTE5LjYwNy03MC4yNzctMjkuNDA4LTExMC4wNjMtMjkuNDA4LTM5Ljc4MSAwLTc2LjQ3MiA5LjgwNC0xMTAuMDYzIDI5LjQwOC0zMy41OTYgMTkuNjA1LTYwLjE5MiA0Ni4yMDQtNzkuOCA3OS44QzkuODAzIDE0OC4xNjggMCAxODQuODU0IDAgMjI0LjYzYzAgNDcuNzggMTMuOTQgOTAuNzQ1IDQxLjgyNyAxMjguOTA2IDI3Ljg4NCAzOC4xNjQgNjMuOTA2IDY0LjU3MiAxMDguMDYzIDc5LjIyNyA1LjE0Ljk1NCA4Ljk0NS4yODMgMTEuNDE5LTEuOTk2IDIuNDc1LTIuMjgyIDMuNzExLTUuMTQgMy43MTEtOC41NjIgMC0uNTcxLS4wNDktNS43MDgtLjE0NC0xNS40MTdhMjU0OS44MSAyNTQ5LjgxIDAgMCAxLS4xNDQtMjUuNDA2bC02LjU2NyAxLjEzNmMtNC4xODcuNzY3LTkuNDY5IDEuMDkyLTE1Ljg0NiAxLTYuMzc0LS4wODktMTIuOTkxLS43NTctMTkuODQyLTEuOTk5LTYuODU0LTEuMjMxLTEzLjIyOS00LjA4Ni0xOS4xMy04LjU1OS01Ljg5OC00LjQ3My0xMC4wODUtMTAuMzI4LTEyLjU2LTE3LjU1NmwtMi44NTUtNi41N2MtMS45MDMtNC4zNzQtNC44OTktOS4yMzMtOC45OTItMTQuNTU5LTQuMDkzLTUuMzMxLTguMjMyLTguOTQ1LTEyLjQxOS0xMC44NDhsLTEuOTk5LTEuNDMxYy0xLjMzMi0uOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5LTEuMTQyLTEuMzMxLTEuOTk3LTIuNjYzLTIuNTY4LTMuOTk3LS41NzItMS4zMzUtLjA5OC0yLjQzIDEuNDI3LTMuMjg5IDEuNTI1LS44NTkgNC4yODEtMS4yNzYgOC4yOC0xLjI3Nmw1LjcwOC44NTNjMy44MDcuNzYzIDguNTE2IDMuMDQyIDE0LjEzMyA2Ljg1MSA1LjYxNCAzLjgwNiAxMC4yMjkgOC43NTQgMTMuODQ2IDE0Ljg0MiA0LjM4IDcuODA2IDkuNjU3IDEzLjc1NCAxNS44NDYgMTcuODQ3IDYuMTg0IDQuMDkzIDEyLjQxOSA2LjEzNiAxOC42OTkgNi4xMzYgNi4yOCAwIDExLjcwNC0uNDc2IDE2LjI3NC0xLjQyMyA0LjU2NS0uOTUyIDguODQ4LTIuMzgzIDEyLjg0Ny00LjI4NSAxLjcxMy0xMi43NTggNi4zNzctMjIuNTU5IDEzLjk4OC0yOS40MS0xMC44NDgtMS4xNC0yMC42MDEtMi44NTctMjkuMjY0LTUuMTQtOC42NTgtMi4yODYtMTcuNjA1LTUuOTk2LTI2LjgzNS0xMS4xNC05LjIzNS01LjEzNy0xNi44OTYtMTEuNTE2LTIyLjk4NS0xOS4xMjYtNi4wOS03LjYxNC0xMS4wODgtMTcuNjEtMTQuOTg3LTI5Ljk3OS0zLjkwMS0xMi4zNzQtNS44NTItMjYuNjQ4LTUuODUyLTQyLjgyNiAwLTIzLjAzNSA3LjUyLTQyLjYzNyAyMi41NTctNTguODE3LTcuMDQ0LTE3LjMxOC02LjM3OS0zNi43MzIgMS45OTctNTguMjQgNS41Mi0xLjcxNSAxMy43MDYtLjQyOCAyNC41NTQgMy44NTMgMTAuODUgNC4yODMgMTguNzk0IDcuOTUyIDIzLjg0IDEwLjk5NCA1LjA0NiAzLjA0MSA5LjA4OSA1LjYxOCAxMi4xMzUgNy43MDggMTcuNzA1LTQuOTQ3IDM1Ljk3Ni03LjQyMSA1NC44MTgtNy40MjFzMzcuMTE3IDIuNDc0IDU0LjgyMyA3LjQyMWwxMC44NDktNi44NDljNy40MTktNC41NyAxNi4xOC04Ljc1OCAyNi4yNjItMTIuNTY1IDEwLjA4OC0zLjgwNSAxNy44MDItNC44NTMgMjMuMTM0LTMuMTM4IDguNTYyIDIxLjUwOSA5LjMyNSA0MC45MjIgMi4yNzkgNTguMjQgMTUuMDM2IDE2LjE4IDIyLjU1OSAzNS43ODcgMjIuNTU5IDU4LjgxNyAwIDE2LjE3OC0xLjk1OCAzMC40OTctNS44NTMgNDIuOTY2LTMuOSAxMi40NzEtOC45NDEgMjIuNDU3LTE1LjEyNSAyOS45NzktNi4xOTEgNy41MjEtMTMuOTAxIDEzLjg1LTIzLjEzMSAxOC45ODYtOS4yMzIgNS4xNC0xOC4xODIgOC44NS0yNi44NCAxMS4xMzYtOC42NjIgMi4yODYtMTguNDE1IDQuMDA0LTI5LjI2MyA1LjE0NiA5Ljg5NCA4LjU2MiAxNC44NDIgMjIuMDc3IDE0Ljg0MiA0MC41Mzl2NjAuMjM3YzAgMy40MjIgMS4xOSA2LjI3OSAzLjU3MiA4LjU2MiAyLjM3OSAyLjI3OSA2LjEzNiAyLjk1IDExLjI3NiAxLjk5NSA0NC4xNjMtMTQuNjUzIDgwLjE4NS00MS4wNjIgMTA4LjA2OC03OS4yMjYgMjcuODgtMzguMTYxIDQxLjgyNS04MS4xMjYgNDEuODI1LTEyOC45MDYtLjAxLTM5Ljc3MS05LjgxOC03Ni40NTQtMjkuNDE0LTExMC4wNDl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBmaWxsPSIjNDQ0Ii8+PC9zdmc+"},42:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDQ5MC42NTYgNDkwLjY1NiI+PHBhdGggZD0iTTQ4Ny41MzYgMTIwLjQ0NWMtNC4xNi00LjE2LTEwLjkyMy00LjE2LTE1LjA4MyAwTDI0NS4zMTcgMzQ3LjU4MSAxOC4yMDMgMTIwLjQ0NWMtNC4xNi00LjE2LTEwLjkyMy00LjE2LTE1LjA4MyAwcy00LjE2IDEwLjkyMyAwIDE1LjA4M2wyMzQuNjY3IDIzNC42NjdjMi4wNjkgMi4wOTEgNC44IDMuMTM2IDcuNTMxIDMuMTM2czUuNDYxLTEuMDQ1IDcuNTUyLTMuMTE1bDIzNC42NjctMjM0LjY2N2ExMC43IDEwLjcgMCAwIDAtLjAwMS0xNS4xMDR6IiBmaWxsPSIjZjVmNWY1Ii8+PC9zdmc+"},43:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNC4yNjkgMjQuMjY5IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGcgZmlsbD0iI2UwZTBlMCI+PHBhdGggZD0iTTcuMDI4IDEuMjQydjMuMDAzYTkuNDcyIDkuNDcyIDAgMCAxIDEuMzU4LS4xMDljMS43MjggMCAzLjM0NC40NyA0LjczOCAxLjI3OWgxMS4xNDVWMS4yNDJINy4wMjh6bTEwLjUxIDkuOTY2aDYuNzNWNy4wMzNoLTkuMDcyYTkuNDUgOS40NSAwIDAgMSAyLjM0MiA0LjE3NXptLjMxOCAyLjM5OWE5LjQ4IDkuNDggMCAwIDEtLjY3OCAzLjUxaDcuMDl2LTQuMTc0aC02LjQ0NWMuMDE1LjIyLjAzMy40NC4wMzMuNjY0em0tOC40ODIgOS40MjFoMTQuODk1di00LjE3NEgxNi4yN2E5LjQ3IDkuNDcgMCAwIDEtNi44OTYgNC4xNzR6Ii8+PHBhdGggZD0iTTE2Ljc3IDEzLjQ0N2E4LjM4MyA4LjM4MyAwIDAgMC04LjM4NC04LjM4MyA4LjM4NSA4LjM4NSAwIDEgMCAwIDE2Ljc2OCA4LjM4MyA4LjM4MyAwIDAgMCA4LjM4NC04LjM4NXpNNS40MzkgMTguMzE1Yy0uMjEtLjg0OS41MTItMS43NjQgMS42MTctMi4wMzguNS0uMTIzLjk4Ni0uMSAxLjM5NS4wNDZWNi45NDJzLjA1Ni0uNDEyLjU5OS0uNDc5YzAgMC0uMDA4LjQ3MSAyLjg0MSAyLjQ2IDEuNDU5IDEuMTI1IDEuNDU0IDIuNjYxIDEuNDU0IDIuNjYxLTEuODk3LTIuOTc3LTMuODM3LTIuODcxLTMuODM3LTIuODcxbC0uMDI1IDguOTA2SDkuNDhjLS4wMDUuNzUxLS42ODMgMS40ODYtMS42NTUgMS43MjktMS4xMDUuMjc3LTIuMjYzLS4yNDktMi4zODYtMS4wMzN6Ii8+PC9nPjwvc3ZnPg=="},44:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgOTcxLjk4NiA5NzEuOTg2Ij48cGF0aCBkPSJNMzcwLjIxNiA0NTkuM2MxMC4yIDExLjEgMTUuOCAyNS42IDE1LjggNDAuNnY0NDJjMCAyNi42MDEgMzIuMSA0MC4xMDEgNTEuMSAyMS40bDEyMy4zLTE0MS4zYzE2LjUtMTkuOCAyNS42LTI5LjYwMSAyNS42LTQ5LjJWNTAwYzAtMTUgNS43LTI5LjUgMTUuOC00MC42MDFMOTU1LjYxNSA3NS41YzI2LjUtMjguOCA2LjEwMS03NS41LTMzLjEtNzUuNWgtODczYy0zOS4yIDAtNTkuNyA0Ni42LTMzLjEgNzUuNWwzNTMuODAxIDM4My44eiIgZmlsbD0iI2UwZTBlMCIvPjwvc3ZnPg=="},46:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggb3BhY2l0eT0iLjIiIGQ9Ik0yMC4yMDEgNS4xNjljLTguMjU0IDAtMTQuOTQ2IDYuNjkyLTE0Ljk0NiAxNC45NDYgMCA4LjI1NSA2LjY5MiAxNC45NDYgMTQuOTQ2IDE0Ljk0NnMxNC45NDYtNi42OTEgMTQuOTQ2LTE0Ljk0NmMtLjAwMS04LjI1NC02LjY5Mi0xNC45NDYtMTQuOTQ2LTE0Ljk0NnptMCAyNi41OGMtNi40MjUgMC0xMS42MzQtNS4yMDgtMTEuNjM0LTExLjYzNCAwLTYuNDI1IDUuMjA5LTExLjYzNCAxMS42MzQtMTEuNjM0IDYuNDI1IDAgMTEuNjMzIDUuMjA5IDExLjYzMyAxMS42MzQgMCA2LjQyNi01LjIwOCAxMS42MzQtMTEuNjMzIDExLjYzNHoiLz48cGF0aCBkPSJNMjYuMDEzIDEwLjA0N2wxLjY1NC0yLjg2NmExNC44NTUgMTQuODU1IDAgMCAwLTcuNDY2LTIuMDEydjMuMzEyYzIuMTE5IDAgNC4xLjU3NiA1LjgxMiAxLjU2NnoiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZVR5cGU9InhtbCIgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgMjAgMjAiIHRvPSIzNjAgMjAgMjAiIGR1cj0iMC41cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PC9zdmc+"},47:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTggNXYxNGwxMS03eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="},48:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTYgNmgydjEySDZ6bTMuNSA2bDguNSA2VjZ6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=="},49:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTYgMThsOC41LTZMNiA2djEyek0xNiA2djEyaDJWNmgtMnoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+"},50:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTYgMTloNFY1SDZ2MTR6bTgtMTR2MTRoNFY1aC00eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="},51:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTE2LjUgMTJBNC41IDQuNSAwIDAgMCAxNCA3Ljk3djIuMjFsMi40NSAyLjQ1Yy4wMy0uMi4wNS0uNDEuMDUtLjYzem0yLjUgMGMwIC45NC0uMiAxLjgyLS41NCAyLjY0bDEuNTEgMS41MUE4Ljc5NiA4Ljc5NiAwIDAgMCAyMSAxMmMwLTQuMjgtMi45OS03Ljg2LTctOC43N3YyLjA2YzIuODkuODYgNSAzLjU0IDUgNi43MXpNNC4yNyAzTDMgNC4yNyA3LjczIDlIM3Y2aDRsNSA1di02LjczbDQuMjUgNC4yNWMtLjY3LjUyLTEuNDIuOTMtMi4yNSAxLjE4djIuMDZhOC45OSA4Ljk5IDAgMCAwIDMuNjktMS44MUwxOS43MyAyMSAyMSAxOS43M2wtOS05TDQuMjcgM3pNMTIgNEw5LjkxIDYuMDkgMTIgOC4xOFY0eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="},52:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTMgOXY2aDRsNSA1VjRMNyA5SDN6bTEzLjUgM0E0LjUgNC41IDAgMCAwIDE0IDcuOTd2OC4wNWMxLjQ4LS43MyAyLjUtMi4yNSAyLjUtNC4wMnpNMTQgMy4yM3YyLjA2YzIuODkuODYgNSAzLjU0IDUgNi43MXMtMi4xMSA1Ljg1LTUgNi43MXYyLjA2YzQuMDEtLjkxIDctNC40OSA3LTguNzdzLTIuOTktNy44Ni03LTguNzd6Ii8+PC9zdmc+"},53:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgMTI0LjUxMiAxMjQuNTEyIj48cGF0aCBkPSJNMTEzLjk1NiA1Ny4wMDZsLTk3LjQtNTYuMmMtNC0yLjMtOSAuNi05IDUuMnYxMTIuNWMwIDQuNiA1IDcuNSA5IDUuMmw5Ny40LTU2LjJjNC0yLjQwMSA0LTguMiAwLTEwLjV6IiBmaWxsPSIjOTFEQzVBIi8+PC9zdmc+"},54:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzk5OSIgZD0iTTEyIDIxLjM1bC0xLjQ1LTEuMzJDNS40IDE1LjM2IDIgMTIuMjggMiA4LjUgMiA1LjQyIDQuNDIgMyA3LjUgM2MxLjc0IDAgMy40MS44MSA0LjUgMi4wOUMxMy4wOSAzLjgxIDE0Ljc2IDMgMTYuNSAzIDE5LjU4IDMgMjIgNS40MiAyMiA4LjVjMCAzLjc4LTMuNCA2Ljg2LTguNTUgMTEuNTRMMTIgMjEuMzV6Ii8+PC9zdmc+"},55:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKICAgICB3aWR0aD0iMjRweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMjQgMzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwIDUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgICA8cmVjdCB4PSIwIiB5PSIxMyIgd2lkdGg9IjQiIGhlaWdodD0iNSIgZmlsbD0iIzMzMyI+CiAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImhlaWdodCIgYXR0cmlidXRlVHlwZT0iWE1MIgogICAgICAgIHZhbHVlcz0iNTsyMTs1IiAKICAgICAgICBiZWdpbj0iMHMiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InkiIGF0dHJpYnV0ZVR5cGU9IlhNTCIKICAgICAgICB2YWx1ZXM9IjEzOyA1OyAxMyIKICAgICAgICBiZWdpbj0iMHMiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICA8L3JlY3Q+CiAgICA8cmVjdCB4PSIxMCIgeT0iMTMiIHdpZHRoPSI0IiBoZWlnaHQ9IjUiIGZpbGw9IiMzMzMiPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJoZWlnaHQiIGF0dHJpYnV0ZVR5cGU9IlhNTCIKICAgICAgICB2YWx1ZXM9IjU7MjE7NSIgCiAgICAgICAgYmVnaW49IjAuMTVzIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJ5IiBhdHRyaWJ1dGVUeXBlPSJYTUwiCiAgICAgICAgdmFsdWVzPSIxMzsgNTsgMTMiCiAgICAgICAgYmVnaW49IjAuMTVzIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0iMjAiIHk9IjEzIiB3aWR0aD0iNCIgaGVpZ2h0PSI1IiBmaWxsPSIjMzMzIj4KICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iaGVpZ2h0IiBhdHRyaWJ1dGVUeXBlPSJYTUwiCiAgICAgICAgdmFsdWVzPSI1OzIxOzUiIAogICAgICAgIGJlZ2luPSIwLjNzIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJ5IiBhdHRyaWJ1dGVUeXBlPSJYTUwiCiAgICAgICAgdmFsdWVzPSIxMzsgNTsgMTMiCiAgICAgICAgYmVnaW49IjAuM3MiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICA8L3JlY3Q+CiAgPC9zdmc+"},56:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTE1IDE2aDR2MmgtNHptMC04aDd2MmgtN3ptMCA0aDZ2MmgtNnpNMyAxOGMwIDEuMS45IDIgMiAyaDZjMS4xIDAgMi0uOSAyLTJWOEgzdjEwek0xNCA1aC0zbC0xLTFINkw1IDVIMnYyaDEyeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="},57:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTE0IDEwSDJ2MmgxMnYtMnptMC00SDJ2MmgxMlY2em00IDh2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6TTIgMTZoOHYtMkgydjJ6Ii8+PC9zdmc+"}},[19]);
//# sourceMappingURL=main.77f6.js.map