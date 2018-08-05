webpackJsonp([1],{19:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(0),n=a(2),o=a(6),l=a(22);const r="ONLINE",s="OFFLINE",c="TOGGLE_SIDEBAR",g="TOGGLE_DARK_MODE",u="PLAYLIST_LOADING",M="PLAYLIST_LOADING_NEXT",d="PLAYLIST_LOADED",I="PLAY_SONG",j="ON_PLAY",y="ON_PAUSE",p="TOGGLE_MUTE",N="TOGGLE_REPEAT",L="ON_TIME_UPDATE",D="ON_VOLUME_CHANGE",h="ON_LOAD_START",b="ON_LOADED_METADATA",m="ACTIVE_PLAYLIST",A="ADD_TO_PLAYLIST",x="REMOVE_FROM_PLAYLIST",T="LOADING_SEARCH",O="LOADING_SEARCH_NEXT",S="LOADED_SEARCH",v="INITIAL_LOAD";function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},i=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),i.forEach(function(t){z(e,t,a[t])})}return e}function z(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const w={sidebarVisible:!1,darkMode:!1,loadingPlaylist:!0,isPlaying:!1,playlist:[],online:!0},E=(e=w,t)=>{switch(t.type){case c:return C({},e,{sidebarVisible:!e.sidebarVisible});case g:return C({},e,{darkMode:!e.darkMode});case u:return C({},e,{loadingPlaylist:!0,playlist:[]});case M:return C({},e,{loadingPlaylist:!0});case d:return C({},e,{loadingPlaylist:!1,playlist:[...e.playlist,...t.playlist]});case r:return C({},e,{online:!0});case s:return C({},e,{online:!1});default:return e}},k={playlist:[],songIndex:null,audioUrl:null,currentSong:null,isPlaying:!1,repeat:!1,volume:1,loading:!1,location:"",duration:0,muted:!1,time:0},f=(e=k,t)=>{switch(t.type){case m:return C({},e,{playlist:t.currentPlaylist,location:t.location});case I:return C({},e,{songIndex:t.songIndex,audioUrl:t.audioUrl,currentSong:t.song});case h:return C({},e,{loading:!0});case j:return C({},e,{isPlaying:!0});case y:return C({},e,{isPlaying:!1});case p:return C({},e,{muted:!e.muted});case N:return C({},e,{repeat:!e.repeat});case L:return C({},e,{time:t.time});case D:return C({},e,{volume:t.volume,muted:"0"===t.volume});case b:return C({},e,{loading:!1,duration:t.duration});default:return e}},P={loadingSearch:!1,results:[]},Y=(e=P,t)=>{switch(t.type){case T:return C({},e,{loadingSearch:!0,results:[]});case O:return C({},e,{loadingSearch:!0});case S:return C({},e,{loadingSearch:!1,results:[...e.results,...t.playlist]});default:return e}},Z=(e={playlist:[]},t)=>{switch(t.type){case v:return t.playlist?{playlist:t.playlist}:e;case A:return{playlist:[...e.playlist,t.song]};case x:return{playlist:t.playlist};default:return e}};var Q=Object(o.c)({root:E,search:Y,playlist:f,userPlaylist:Z});var U=Object(o.d)(Q,Object(o.a)(l.a));const H=e=>{const t=parseInt(e/1e3,10);return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`},G=e=>e?e.replace("\u2013","-").split("-").pop():"",W=e=>{if(!e)return 0;if(e<1e3)return e;const t=e.toString(),a=t.length,i=a%3===0?3:a%3;return`${t.substring(0,i)}${a>=7?"M":"K"}`};class R{constructor(e){this.key="client_id=JAgPhXap7XK0g8dUOtklbE7UnF05W8AH",this.tracks=`https://api.soundcloud.com/tracks?linked_partitioning=1&limit=${e}&${this.key}`,this.created_at=null,this.genre="",this.tag=null,this.next=""}setGenre(e){return this.genre=`genres=${e}`,this.tag=null,this._load()}setTag(e){return this.tag=`tags=${e}`,this.genre=null,this._load()}setFilter(e){return this.created_at=e?`created_at=${e}`:null,this._load()}loadNext(){return this._getSongs(this.next)}async audioStream(e){return`${e}?${this.key}`}async search(e){if(!e.trim())return[];const t=e.split(" ").filter(e=>e.length>0).join("%20");return this._getSongs(`${this.tracks}&q=${t}`)}_load(){const e=[this.tracks,this.genre,this.tag,this.created_at].filter(e=>null!==e).join("&");return this._getSongs(e)}async _getSongs(e){try{const t=await fetch(e).then(e=>e.json());return this.next=t.next_href,t.collection.filter(e=>null!==e.artwork_url&&3e4!==e.duration).map(e=>({id:e.id,title:G(e.title),duration:H(e.duration),stream:e.stream_url,artworkOriginal:e.artwork_url,artwork:e.artwork_url.replace("large","t67x67"),waveform:e.waveform_url,user:e.user.username,likesCount:e.likes_count,likesCountMin:W(e.likes_count)}))}catch(e){return console.log(e),[]}}}class B{constructor(e){this.init=(()=>new Promise((e,t)=>{const a=indexedDB.open(this.DB_NAME,this.VERSION);a.onerror=(()=>t(a.error)),a.onsuccess=(t=>{this.DB=a.result,e(t)}),a.onupgradeneeded=(e=>{const t=e.target.result;for(const a of this.DB_STORE){const e=t.createObjectStore(a.name,{keyPath:a.key});a.default&&(e.transaction.oncomplete=(e=>{const i=t.transaction(a.name,"readwrite").objectStore(a.name);a.default.forEach(e=>{i.add(e)})}))}})})),this.save=((e,t)=>new Promise((a,i)=>{const n=this.DB.transaction(e,"readwrite"),o=n.objectStore(e);n.oncomplete=(e=>a(e)),n.onabort=(e=>i(e)),Array.isArray(t)?t.forEach(e=>{o.add(e)}):o.add(t)})),this.delete=((e,t)=>new Promise((a,i)=>{const n=this.DB.transaction(e,"readwrite"),o=n.objectStore(e);n.oncomplete=(e=>a(e)),n.onabort=(e=>i(e)),t.forEach(e=>{o.delete(e)})})),this.update=((e,t)=>new Promise((a,i)=>{const n=this.DB.transaction(e,"readwrite").objectStore(e).put(t);n.onsuccess=(e=>a(e)),n.onerror=(e=>i(e))})),this.getAll=(e=>new Promise((t,a)=>{const i=this.DB.transaction(e).objectStore(e).getAll();i.onsuccess=(({target:e})=>t(e.result)),i.onerror=(e=>a(e))})),this.DB_NAME=e.name,this.DB_STORE=e.store,this.VERSION=e.version||1,this.DB=null}}const V=new R(35),J=new B({name:"yascc",store:[{name:"playlist",key:"id"}]}),_=()=>({type:r}),X=()=>({type:s}),F=()=>({type:c}),$=()=>({type:h}),K=()=>({type:j}),q=()=>({type:y}),ee=()=>({type:N}),te=e=>({type:L,time:e}),ae=()=>({type:p}),ie=e=>({type:D,volume:e.target.value}),ne=e=>({type:b,duration:e}),oe=()=>(e,t)=>{const{darkMode:a}=t().root;a?document.documentElement.setAttribute("data-theme","light"):document.documentElement.setAttribute("data-theme","dark"),e({type:g})},le=(e,t)=>async a=>{const i=await V.audioStream(t.stream);a({type:I,songIndex:e,song:t,audioUrl:i})},re=(e,t)=>(a,i)=>{let n;"/"===t?n=i().root.playlist:"/search"===t?n=i().search.results:"/playlist"===t&&(n=i().userPlaylist.playlist),a(le(e,n[e])),a({type:m,currentPlaylist:n,location:t})},se=()=>(e,t)=>{const{playlist:a,songIndex:i}=t().playlist,n=i!==a.length-1?i+1:0;e(le(n,a[n]))},ce=()=>(e,t)=>{const{playlist:a,songIndex:i}=t().playlist,n=0!==i?i-1:a.length-1;e(le(n,a[n]))},ge=e=>async t=>{t({type:u});const a=await V.setGenre(e);t({type:d,playlist:a})},ue=e=>async t=>{t({type:u});const a=await V.setTag(e);t({type:d,playlist:a})},Me=e=>async t=>{t({type:u});const a=await V.setFilter(e);t({type:d,playlist:a})},de=()=>async(e,t)=>{const{loadingPlaylist:a}=t().root;if(!a){e({type:M});const t=await V.loadNext();e({type:d,playlist:t})}},Ie=e=>async t=>{t({type:T});const a=await V.search(e);t({type:S,playlist:a})},je=()=>async(e,t)=>{const{loadingSearch:a}=t().search;if(!a){e({type:O});const t=await V.loadNext();e({type:S,playlist:t})}},ye=e=>(t,a)=>{a().userPlaylist.playlist.some(t=>t.id===e.id)||Promise.resolve(t({type:A,song:e})).then(()=>J.save("playlist",e))},pe=e=>(t,a)=>{let i=a().userPlaylist.playlist.filter(t=>t.id!==e.id);Promise.resolve(t({type:x,playlist:i})).then(()=>J.delete("playlist",[e.id]))},Ne=()=>async e=>{await J.init();const t=await J.getAll("playlist");Promise.all([e({type:v,playlist:t}),e(ge("house"))])},Le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function De(){if("serviceWorker"in navigator){if(new URL("/YASCC",window.location).origin!==window.location.origin)return;const e="/YASCC/service-worker.js";Le?be(e):he(e)}}function he(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=(()=>{const t=e.installing;t.onstatechange=(()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})})}).catch(e=>{console.error("Error during service worker registration:",e)})}function be(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):he(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}var me=a(1),Ae=a(31),xe=a(36),Te=a(18);const Oe=me["a"].form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  flex: 1;
`,Se=me["a"].input`
  background: var(--light);
  color: var(--secondary);
  border-radius: 4px;
  border: none;
  outline: 0;
  font-size: 1rem;
  line-height: 2;
  padding: 0 1em;
  width: 100%;
`;class ve extends i.a{constructor(...e){super(...e),this.state={value:""},this.handleChange=(e=>{this.setState({value:e.target.value})}),this.handleSubmit=(e=>{e.preventDefault(),this.props.searchSongs(this.state.value),this.props.history.push("/search")})}render(e,{value:t}){return Object(i.c)(Oe,{onSubmit:this.handleSubmit},Object(i.c)(Se,{placeholder:"Search...",value:t,onChange:this.handleChange}))}}const Ce={searchSongs:Ie};var ze=Object(n.b)(null,Ce)(Object(Te.a)(ve));const we=me["a"].img.attrs({alt:"",width:e=>e.size,height:e=>e.size})`
  align-self: center;
`,Ee=me["a"].svg.attrs({width:e=>e.size,height:e=>e.size,viewBox:"0 0 24 24"})`
  fill: ${e=>e.active?"#21d4fd":"#444"};
`;var ke=me["a"].a`
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

  @media screen and (max-width: 500px) {
    ${e=>e.noMobile&&"display: none"};
  }

  @media screen and (min-width: 500px) {
    ${e=>e.noDesktop&&"display: none"};
  }
`,fe=a(40),Pe=a.n(fe),Ye=a(41),Ze=a.n(Ye);const Qe=me["a"].div`
  background: ${e=>e.online?"var(--primary)":"var(--danger)"};
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
`,Ue=({toggleSidebar:e,toggleDarkMode:t,online:a,darkMode:n})=>Object(i.c)(Qe,{online:a},Object(i.c)(ke,{link:!0,noDesktop:!0,onClick:e},Object(i.c)(we,{size:24,src:Pe.a})),Object(i.c)(ze,null),Object(i.c)(ke,{link:!0,onClick:t,title:"Toggle dark mode"},Object(i.c)(Ee,{size:24,active:n},Object(i.c)("path",{d:"M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31A7.98 7.98 0 0 0 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"}))),Object(i.c)(ke,{noMobile:!0,href:"https://github.com/carlosqsilva/yascc",target:"_blank",rel:"noopener noreferrer"},Object(i.c)(we,{size:24,src:Ze.a}))),He=({root:e})=>({online:e.online,darkMode:e.darkMode}),Ge={toggleSidebar:F,toggleDarkMode:oe};var We=Object(n.b)(He,Ge)(Ue);const Re=[{value:"",label:"Default"},{value:"last_hour",label:"Last Hour"},{value:"last_week",label:"Last Week"},{value:"last_month",label:"Last Month"},{value:"last_year",label:"Last Year"}],Be=[{value:"chill%20house",label:"#Chill"},{value:"deep%20house",label:"#Deep"},{value:"lofi%20hip%20hop",label:"#Lofi"},{value:"progressive%20house",label:"#Progressive"},{value:"relax",label:"#Relax"},{value:"study",label:"#Study"},{value:"sleep",label:"#Sleep"},{value:"tech%20house",label:"#Tech"},{value:"trance",label:"#Trance"},{value:"tropical%20house",label:"#Tropical"},{value:"workout",label:"#Workout"}],Ve=[{value:"alternative",label:"Alternative Rock"},{value:"ambient",label:"Ambient"},{value:"classical",label:"Classical"},{value:"country",label:"Country"},{value:"danceedm",label:"Dance & EDM"},{value:"dancehall",label:"Dancehall"},{value:"deephouse",label:"Deep House"},{value:"disco",label:"Disco"},{value:"drumbass",label:"Drum & Bass"},{value:"dubstep",label:"Dubstep"},{value:"eletronic",label:"Electronic"},{value:"hiphoprap",label:"Hip-hop & Rap"},{value:"house",label:"House"},{value:"indie",label:"Indie"},{value:"jazzblues",label:"Jazz & Blues"},{value:"metal",label:"Metal"},{value:"piano",label:"Piano"},{value:"pop",label:"Pop"},{value:"rbsoul",label:"R&B & Soul"},{value:"reggae",label:"Reggae"},{value:"reggaeton",label:"Reggaeton"},{value:"rock",label:"Rock"},{value:"soundtracks",label:"Soundtrack"},{value:"techno",label:"Techno"},{value:"trance",label:"Trance"},{value:"trap",label:"Trap"},{value:"triphop",label:"Triphop"},{value:"world",label:"World"}];var Je=a(42);function _e(e,t){if(null==e)return{};var a,i,n=Xe(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function Xe(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}const Fe=me["a"].select`
  appearance: none;
  background: transparent url(${a.n(Je).a}) no-repeat 82% 50%;
  color: var(--light);
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  align-self: center;
  margin-left: 20px;
  flex: 1;
  outline: 0;
  border: 0;
`,$e=me["a"].option`
  color: var(--light);
  background: var(--lightDark);
`;var Ke=e=>{let{options:t}=e,a=_e(e,["options"]);return Object(i.c)(Fe,a,t.map((e,t)=>Object(i.c)($e,{key:t,value:e.value},e.label)))},qe=a(43),et=a.n(qe),tt=a(44),at=a.n(tt);const it=me["a"].div`
  background: var(--lightDark);
  overscroll-behavior-y: contain;
  transition: transform 200ms;
  will-change: transform;
  position: fixed;
  bottom: 0px;
  left: 0px;
  top: 0px;
  width: var(--sidebarWidth);
  font-size: var(--sidebarFontSize);
  z-index: 100;
  overflow-y: scroll;
  transform: ${e=>e.visible?"translateX(0)":"translateX(-100%)"};

  @media screen and (min-width: 500px) {
    transform: translateX(0);
  }
`,nt=me["a"].div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  z-index: 50;
  background: rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 500px) {
    display: none;
  }
`,ot=me["a"].div`
  display: flex;
  text-decoration: none;
  flex-direction: ${e=>e.horizontal?"row":"column"};
  padding: 0.7rem 0 0.7rem 1rem;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
`,lt=ot.extend`
  cursor: pointer;
`,rt=me["a"].strong`
  flex: 1;
  align-self: center;
  margin-left: 20px;
  font-size: 1.1em;
  color: var(--light);
`,st=me["a"].strong`
  color: var(--light);
  margin-bottom: 3px;
  font-size: 1em;
`,ct=me["a"].span`
  background-color: whitesmoke;
  color: #111;
  border-radius: 5px;
  margin-right: 20px;
  font-size: 0.8em;
  padding: 0 0.5rem;
  align-self: center;
`,gt=me["a"].a`
  flex: 1;
  display: flex;
  cursor: pointer;
  font-size: 1em;
  text-decoration: none;
  padding: 4px 0;
  color: ${e=>e.active?"#fff":"#999"};

  &:hover {
    color: white;
  }
`;class ut extends i.a{constructor(...e){super(...e),this.state={active:""},this.changeRoute=(e=>{this.props.location.pathname!==e&&this.props.history.push(e)}),this.active=(e=>{this.setState({active:e},()=>{this.changeRoute("/")})}),this.onChange=(e=>{this.props.setFilter(e.target.value)}),this.onTag=(({target:{name:e}})=>{this.props.setTag(e),this.active(e)}),this.onGenre=(({target:{name:e}})=>{this.props.setGenre(e),this.active(e)})}render({sidebarVisible:e,qtd:t},{active:a}){return Object(i.c)("aside",null,Object(i.c)(it,{visible:e},Object(i.c)(lt,{horizontal:!0,onClick:()=>this.changeRoute("/playlist")},Object(i.c)(we,{size:20,src:et.a}),Object(i.c)(rt,null,"Playlist"),Object(i.c)(ct,null,t)),Object(i.c)(ot,{horizontal:!0},Object(i.c)(we,{size:20,src:at.a}),Object(i.c)(Ke,{options:Re,onChange:this.onChange})),Object(i.c)(ot,null,Object(i.c)(st,null,"Popular Tags"),Be.map((e,t)=>Object(i.c)(gt,{key:t,name:e.value,active:a===e.value,onClick:this.onTag},e.label))),Object(i.c)(ot,null,Object(i.c)(st,null,"Music Genres"),Ve.map((e,t)=>Object(i.c)(gt,{key:t,name:e.value,active:a===e.value,onClick:this.onGenre},e.label)))),e&&Object(i.c)(nt,{onClick:this.props.toggleSidebar}))}}const Mt=({root:e,userPlaylist:t})=>({sidebarVisible:e.sidebarVisible,qtd:t.playlist.length}),dt={setFilter:Me,setGenre:ge,setTag:ue,toggleSidebar:F};var It=Object(Te.a)(Object(n.b)(Mt,dt)(ut)),jt=a(45),yt=a.n(jt),pt=a(46),Nt=a.n(pt),Lt=a(47),Dt=a.n(Lt),ht=a(48),bt=a.n(ht),mt=a(49),At=a.n(mt),xt=a(50),Tt=a.n(xt),Ot=a(51),St=a.n(Ot),vt=a(52),Ct=a.n(vt);const zt=me["a"].div`
  display: flex;
  justify-content: center;
  background: var(--primary);
`,wt=me["a"].div`
  background: var(--light);
  transition: all 200ms;
  position: absolute;
  top: 0;
  left: 0px;
  right: 0px;
  height: 120px;
  opacity: 0;
`,Et=me["a"].input.attrs({type:"range",min:0,max:1,step:.05})`
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
`,kt=me["a"].div`
  display: flex;
  justify-content: center;
  position: relative;

  &:hover {
    ${wt} {
      opacity: 1;
      transform: translateY(-100%);
    }
  }
`,ft=({playing:e,playNext:t,playPrev:a,toggleMute:n,toggleRepeat:o,loading:l,toggle:r,repeat:s,muted:c,changeVolume:g})=>Object(i.c)(zt,null,Object(i.c)(ke,{noMobile:!0,onClick:a},Object(i.c)(we,{src:bt.a,size:30})),Object(i.c)(ke,{onClick:r},l?Object(i.c)(we,{src:Nt.a,size:30}):Object(i.c)(we,{src:e?Tt.a:Dt.a,size:30})),Object(i.c)(ke,{noMobile:!0,onClick:t},Object(i.c)(we,{src:At.a,size:30})),Object(i.c)(ke,{noMobile:!0,onClick:o},Object(i.c)(Ee,{size:30,active:s},Object(i.c)("path",{d:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"}))),Object(i.c)(kt,null,Object(i.c)(ke,{noMobile:!0,onClick:n},Object(i.c)(we,{src:c?St.a:Ct.a,size:30})),Object(i.c)(wt,null,Object(i.c)(Et,{onChange:g})))),Pt=({playlist:{isPlaying:e,loading:t,repeat:a,muted:i}})=>({playing:e,loading:t,repeat:a,muted:i}),Yt={playNext:se,playPrev:ce,toggleMute:ae,toggleRepeat:ee,changeVolume:ie};var Zt=Object(n.b)(Pt,Yt)(ft);const Qt=me["a"].div`
  flex: 1;
  position: relative;
  background-image: url(${e=>e.image});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  position: relative;
  cursor: pointer;
  overflow: hidden;
`,Ut=me["a"].div`
  transform: translateX(-100%);
  will-change: transform;
  background-color: var(--info);
  position: absolute;
  bottom: 0px;
  left: 0px;
  top: 0px;
  width: 100%;
  z-index: -10;
`,Ht=me["a"].p`
  color: var(--lightDark);
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:last-child {
    font-size: 0.9rem;
  }
`,Gt=e=>{let t=e,a=t.offsetLeft;for(;t.offsetParent;)a+=t.offsetParent.offsetLeft,t=t.offsetParent;return a};class Wt extends i.a{constructor(...e){super(...e),this.onClick=(e=>{const{duration:t,onChange:a}=this.props;a((e.clientX-Gt(e.currentTarget))/e.currentTarget.offsetWidth*t)})}render({time:e,duration:t,song:a,children:n}){const o=`translateX(-${100-e/t*100}%)`;return Object(i.c)(Qt,{onClick:this.onClick,image:a.waveform},Object(i.c)(Ut,{style:{transform:o}}),Object(i.c)(Ht,null,a.title),Object(i.c)(Ht,null,a.user))}}const Rt=({playlist:e})=>({song:e.currentSong,time:e.time,duration:e.duration});var Bt=Object(n.b)(Rt)(Wt);const Vt=me["a"].div`
  padding-left: var(--sidebarSpace);
  background: var(--primary);
  backface-visibility: hidden;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 45px;
  display: flex;
  transform: ${e=>e.visible?"translateY(0)":"translateY(100%)"};
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
`;class Jt extends i.a{constructor(...e){super(...e),this.keyboardKey=(({code:e})=>{const{playPrev:t,playNext:a}=this.props;"MediaPlayPause"===e&&this.togglePlay(),"MediaTrackNext"===e&&a(),"MediaTrackPrevious"===e&&t()}),this.onLoadedMetadata=(()=>{this.props.changeDuration(this.audio.duration),this.audio.play()}),this.onTimeUpdate=(()=>{this.props.changeTime(this.audio.currentTime)}),this.changeTime=(e=>{this.audio.currentTime=e}),this.togglePlay=(()=>{this.audio.paused?this.audio.play():this.audio.pause()})}componentDidMount(){const{playNext:e,playPrev:t}=this.props;"mediaSession"in navigator?(navigator.mediaSession.playbackState="paused",navigator.mediaSession.setActionHandler("previoustrack",t),navigator.mediaSession.setActionHandler("play",this.togglePlay),navigator.mediaSession.setActionHandler("pause",this.togglePlay),navigator.mediaSession.setActionHandler("nexttrack",e)):window.addEventListener("keyup",this.keyboardKey,!1)}componentWillUnmount(){window.removeEventListener("keyup",this.keyboardKey,!1)}componentWillReceiveProps(e){if("mediaSession"in navigator){const{title:t,user:a,artworkOriginal:i}=e.song;navigator.mediaSession.metadata=new MediaMetadata({title:t,artist:a,artwork:[{src:i.replace("large","t500x500"),sizes:"500x500",type:"image/jpg"}]})}}render({audioUrl:e,playNext:t,onPause:a,onPlay:n,onLoadStart:o,repeat:l,muted:r,volume:s}){return Object(i.c)(Vt,{visible:null!==e},Object(i.c)(Zt,{toggle:this.togglePlay}),e&&Object(i.c)(Bt,{onChange:this.changeTime}),Object(i.c)("audio",{crossOrigin:"anonymous",onTimeUpdate:yt()(this.onTimeUpdate,1e3,{leading:!1}),onLoadedMetadata:this.onLoadedMetadata,onLoadStart:o,onEnded:t,onPause:a,onPlay:n,volume:s,muted:r,src:e,loop:l,ref:e=>this.audio=e}))}}const _t=({playlist:{currentSong:e,audioUrl:t,repeat:a,volume:i,muted:n}})=>({song:e,audioUrl:t,repeat:a,muted:n,volume:i}),Xt={onPlay:K,onPause:q,playPrev:ce,playNext:se,changeTime:te,onLoadStart:$,changeDuration:ne};var Ft=Object(n.b)(_t,Xt)(Jt);const $t=me["a"].div`
  margin: 0 auto;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 0.2rem solid #dedede;
  border-top-color: #444;
  animation: ${me["b"]`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`} 1s infinite linear;
`,Kt=me["a"].button`
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
`;class qt extends i.a{componentDidMount(){this.observer=new IntersectionObserver(this.props.loadMore),this.observer.observe(this.target)}componentWillUnmount(){this.observer.unobserve(this.target)}render({loadMore:e,isLoading:t}){return Object(i.c)(Kt,{onClick:e,innerRef:e=>this.target=e},t?Object(i.c)($t,null):Object(i.c)("strong",null,"Load More..."))}}var ea=qt,ta=a(53),aa=a.n(ta),ia=a(54),na=a.n(ia),oa=a(55),la=a.n(oa),ra=a(56),sa=a.n(ra),ca=a(57),ga=a.n(ca);const ua=we.extend`
  opacity: 0;
  margin: auto;
  display: block;
`,Ma=me["a"].img`
  position: absolute;
  top: 2px;
  right: 2px;
  z-index: 10;
  will-change: transform;
  transform: translateX(115%);
  transition: transform 200ms;
`,da=me["a"].div`
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

  ${e=>e.active&&"\n    #action {\n      transform: translateX(0);\n    }\n    #play {\n      opacity: 1;\n    }\n  "};
`,Ia=me["a"].div`
  background-size: cover;
  background-position: center;
  display: flex;
  width: 67px;
  height: 67px;
`,ja=me["a"].div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  overflow: hidden;
  flex: 1;
`,ya=me["a"].p`
  color: var(--textGray);
  font-size: 0.8rem;
`,pa=me["a"].p`
  color: var(--secondary);
  font-size: 0.9rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,Na=me["a"].div`
  display: flex;
  align-items: center;
  margin-top: auto;
`,La=me["a"].span`
  flex: ${e=>e.flex?1:0};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  color: var(--textGray);

  &:not(:first-child) {
    font-size: 0.8rem;
    margin-left: 0.2rem;
  }
`,Da=me["a"].div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;

  @media screen and (min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, 290px);
    grid-gap: 15px;
  }
`,ha=e=>{const t=e?sa.a:ga.a,a=e?"Remove from Playlist":"Add to Playlist";return({song:e,play:n,playlistAction:o,active:l})=>Object(i.c)(da,{onClick:n,active:l},Object(i.c)(Ma,{onClick:o,title:a,src:t,id:"action",size:24}),Object(i.c)(Ia,{style:{background:`url(${e.artwork})`}},Object(i.c)(ua,{src:l?la.a:aa.a,id:"play",size:40})),Object(i.c)(ja,null,Object(i.c)(ya,null,e.user),Object(i.c)(pa,{title:e.title},e.title),Object(i.c)(Na,null,Object(i.c)(La,{flex:!0},e.duration),Object(i.c)(we,{src:na.a,size:12}),Object(i.c)(La,{title:`${e.likesCount} likes`},e.likesCountMin))))},ba=me["a"].div`
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  transform: translateZ(0);

  @media screen and (min-width: 500px) {
    padding: 15px;
  }
`,ma=(e,t=!1,a=!1)=>{const n=ha(a);return class extends i.a{constructor(...e){super(...e),this.playSong=(e=>()=>{this.props.playSong(e,this.props.location.pathname)}),this.playlistAction=(e=>t=>{t||(t=window.event),t.stopPropagation&&t.stopPropagation(),this.props.playlistAction(e)})}render({loadMore:a,playlist:o,loading:l,active:r}){return Object(i.c)(ba,null,e&&Object(i.c)(e,null),Object(i.c)(Da,null,o.map((e,t)=>Object(i.c)(n,{song:e,active:r===e.id,playlistAction:this.playlistAction(e),play:this.playSong(t),key:e.id}))),t&&Object(i.c)(ea,{isLoading:l,loadMore:a}))}}},Aa=ma(null,!0),xa=({root:e,playlist:t},a)=>{let i=null;return t.location===a.location.pathname&&null!==t.currentSong&&(i=t.currentSong.id),{playlist:e.playlist,loading:e.loadingPlaylist,active:i}},Ta={loadMore:de,playSong:re,playlistAction:ye};var Oa=Object(n.b)(xa,Ta)(Aa);const Sa=ma(null,!0),va=({search:e,playlist:t},a)=>{let i=null;return t.location===a.location.pathname&&null!==t.currentSong&&(i=t.currentSong.id),{playlist:e.results,loading:e.loadingSearch,active:i}},Ca={loadMore:je,playSong:re,playlistAction:ye};var za=Object(n.b)(va,Ca)(Sa);const wa=ma(null,!1,!0),Ea=({userPlaylist:e,playlist:t},a)=>{let i=null;return t.location===a.location.pathname&&null!==t.currentSong&&(i=t.currentSong.id),{playlist:e.playlist,active:i}},ka={playSong:re,playlistAction:pe};var fa=Object(n.b)(Ea,ka)(wa);const Pa=me["a"].div`
  height: 100vh;
  max-width: 100vw;
  padding-top: 50px;
  overflow: hidden;
  background: linear-gradient(to right bottom, var(--light2), var(--primary));
  transition: all 250ms ease;
  margin-left: var(--sidebarSpace);
`;var Ya=()=>Object(i.c)(xe.a,{basename:"/YASCC"},Object(i.c)(Pa,null,Object(i.c)(It,null),Object(i.c)(We,null),Object(i.c)(Ft,null),Object(i.c)(Ae.a,{exact:!0,path:"/",component:Oa}),Object(i.c)(Ae.a,{path:"/search",component:za}),Object(i.c)(Ae.a,{path:"/playlist",component:fa})));Object(i.e)(Object(i.c)(n.a,{store:U},Object(i.c)(Ya,null)),document.body),window.addEventListener("online",()=>{U.dispatch(_())}),window.addEventListener("offline",()=>{U.dispatch(X())}),window.addEventListener("load",()=>{U.dispatch(Ne()).then(()=>De()),console.log("%c hello there...","font-size: 30px; color: red")})},40:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTAgMWgxNnYzSDBWMXptMCA1aDE2djNIMFY2em0wIDVoMTZ2M0gwdi0zeiIvPjwvc3ZnPg=="},41:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNDM4LjU0OSA0MzguNTQ5Ij48cGF0aCBkPSJNNDA5LjEzMiAxMTQuNTczYy0xOS42MDgtMzMuNTk2LTQ2LjIwNS02MC4xOTQtNzkuNzk4LTc5LjgtMzMuNTk4LTE5LjYwNy03MC4yNzctMjkuNDA4LTExMC4wNjMtMjkuNDA4LTM5Ljc4MSAwLTc2LjQ3MiA5LjgwNC0xMTAuMDYzIDI5LjQwOC0zMy41OTYgMTkuNjA1LTYwLjE5MiA0Ni4yMDQtNzkuOCA3OS44QzkuODAzIDE0OC4xNjggMCAxODQuODU0IDAgMjI0LjYzYzAgNDcuNzggMTMuOTQgOTAuNzQ1IDQxLjgyNyAxMjguOTA2IDI3Ljg4NCAzOC4xNjQgNjMuOTA2IDY0LjU3MiAxMDguMDYzIDc5LjIyNyA1LjE0Ljk1NCA4Ljk0NS4yODMgMTEuNDE5LTEuOTk2IDIuNDc1LTIuMjgyIDMuNzExLTUuMTQgMy43MTEtOC41NjIgMC0uNTcxLS4wNDktNS43MDgtLjE0NC0xNS40MTdhMjU0OS44MSAyNTQ5LjgxIDAgMCAxLS4xNDQtMjUuNDA2bC02LjU2NyAxLjEzNmMtNC4xODcuNzY3LTkuNDY5IDEuMDkyLTE1Ljg0NiAxLTYuMzc0LS4wODktMTIuOTkxLS43NTctMTkuODQyLTEuOTk5LTYuODU0LTEuMjMxLTEzLjIyOS00LjA4Ni0xOS4xMy04LjU1OS01Ljg5OC00LjQ3My0xMC4wODUtMTAuMzI4LTEyLjU2LTE3LjU1NmwtMi44NTUtNi41N2MtMS45MDMtNC4zNzQtNC44OTktOS4yMzMtOC45OTItMTQuNTU5LTQuMDkzLTUuMzMxLTguMjMyLTguOTQ1LTEyLjQxOS0xMC44NDhsLTEuOTk5LTEuNDMxYy0xLjMzMi0uOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5LTEuMTQyLTEuMzMxLTEuOTk3LTIuNjYzLTIuNTY4LTMuOTk3LS41NzItMS4zMzUtLjA5OC0yLjQzIDEuNDI3LTMuMjg5IDEuNTI1LS44NTkgNC4yODEtMS4yNzYgOC4yOC0xLjI3Nmw1LjcwOC44NTNjMy44MDcuNzYzIDguNTE2IDMuMDQyIDE0LjEzMyA2Ljg1MSA1LjYxNCAzLjgwNiAxMC4yMjkgOC43NTQgMTMuODQ2IDE0Ljg0MiA0LjM4IDcuODA2IDkuNjU3IDEzLjc1NCAxNS44NDYgMTcuODQ3IDYuMTg0IDQuMDkzIDEyLjQxOSA2LjEzNiAxOC42OTkgNi4xMzYgNi4yOCAwIDExLjcwNC0uNDc2IDE2LjI3NC0xLjQyMyA0LjU2NS0uOTUyIDguODQ4LTIuMzgzIDEyLjg0Ny00LjI4NSAxLjcxMy0xMi43NTggNi4zNzctMjIuNTU5IDEzLjk4OC0yOS40MS0xMC44NDgtMS4xNC0yMC42MDEtMi44NTctMjkuMjY0LTUuMTQtOC42NTgtMi4yODYtMTcuNjA1LTUuOTk2LTI2LjgzNS0xMS4xNC05LjIzNS01LjEzNy0xNi44OTYtMTEuNTE2LTIyLjk4NS0xOS4xMjYtNi4wOS03LjYxNC0xMS4wODgtMTcuNjEtMTQuOTg3LTI5Ljk3OS0zLjkwMS0xMi4zNzQtNS44NTItMjYuNjQ4LTUuODUyLTQyLjgyNiAwLTIzLjAzNSA3LjUyLTQyLjYzNyAyMi41NTctNTguODE3LTcuMDQ0LTE3LjMxOC02LjM3OS0zNi43MzIgMS45OTctNTguMjQgNS41Mi0xLjcxNSAxMy43MDYtLjQyOCAyNC41NTQgMy44NTMgMTAuODUgNC4yODMgMTguNzk0IDcuOTUyIDIzLjg0IDEwLjk5NCA1LjA0NiAzLjA0MSA5LjA4OSA1LjYxOCAxMi4xMzUgNy43MDggMTcuNzA1LTQuOTQ3IDM1Ljk3Ni03LjQyMSA1NC44MTgtNy40MjFzMzcuMTE3IDIuNDc0IDU0LjgyMyA3LjQyMWwxMC44NDktNi44NDljNy40MTktNC41NyAxNi4xOC04Ljc1OCAyNi4yNjItMTIuNTY1IDEwLjA4OC0zLjgwNSAxNy44MDItNC44NTMgMjMuMTM0LTMuMTM4IDguNTYyIDIxLjUwOSA5LjMyNSA0MC45MjIgMi4yNzkgNTguMjQgMTUuMDM2IDE2LjE4IDIyLjU1OSAzNS43ODcgMjIuNTU5IDU4LjgxNyAwIDE2LjE3OC0xLjk1OCAzMC40OTctNS44NTMgNDIuOTY2LTMuOSAxMi40NzEtOC45NDEgMjIuNDU3LTE1LjEyNSAyOS45NzktNi4xOTEgNy41MjEtMTMuOTAxIDEzLjg1LTIzLjEzMSAxOC45ODYtOS4yMzIgNS4xNC0xOC4xODIgOC44NS0yNi44NCAxMS4xMzYtOC42NjIgMi4yODYtMTguNDE1IDQuMDA0LTI5LjI2MyA1LjE0NiA5Ljg5NCA4LjU2MiAxNC44NDIgMjIuMDc3IDE0Ljg0MiA0MC41Mzl2NjAuMjM3YzAgMy40MjIgMS4xOSA2LjI3OSAzLjU3MiA4LjU2MiAyLjM3OSAyLjI3OSA2LjEzNiAyLjk1IDExLjI3NiAxLjk5NSA0NC4xNjMtMTQuNjUzIDgwLjE4NS00MS4wNjIgMTA4LjA2OC03OS4yMjYgMjcuODgtMzguMTYxIDQxLjgyNS04MS4xMjYgNDEuODI1LTEyOC45MDYtLjAxLTM5Ljc3MS05LjgxOC03Ni40NTQtMjkuNDE0LTExMC4wNDl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBmaWxsPSIjNDQ0Ii8+PC9zdmc+"},42:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDQ5MC42NTYgNDkwLjY1NiI+PHBhdGggZD0iTTQ4Ny41MzYgMTIwLjQ0NWMtNC4xNi00LjE2LTEwLjkyMy00LjE2LTE1LjA4MyAwTDI0NS4zMTcgMzQ3LjU4MSAxOC4yMDMgMTIwLjQ0NWMtNC4xNi00LjE2LTEwLjkyMy00LjE2LTE1LjA4MyAwcy00LjE2IDEwLjkyMyAwIDE1LjA4M2wyMzQuNjY3IDIzNC42NjdjMi4wNjkgMi4wOTEgNC44IDMuMTM2IDcuNTMxIDMuMTM2czUuNDYxLTEuMDQ1IDcuNTUyLTMuMTE1bDIzNC42NjctMjM0LjY2N2ExMC43IDEwLjcgMCAwIDAtLjAwMS0xNS4xMDR6IiBmaWxsPSIjZjVmNWY1Ii8+PC9zdmc+"},43:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNC4yNjkgMjQuMjY5IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGcgZmlsbD0iI2UwZTBlMCI+PHBhdGggZD0iTTcuMDI4IDEuMjQydjMuMDAzYTkuNDcyIDkuNDcyIDAgMCAxIDEuMzU4LS4xMDljMS43MjggMCAzLjM0NC40NyA0LjczOCAxLjI3OWgxMS4xNDVWMS4yNDJINy4wMjh6bTEwLjUxIDkuOTY2aDYuNzNWNy4wMzNoLTkuMDcyYTkuNDUgOS40NSAwIDAgMSAyLjM0MiA0LjE3NXptLjMxOCAyLjM5OWE5LjQ4IDkuNDggMCAwIDEtLjY3OCAzLjUxaDcuMDl2LTQuMTc0aC02LjQ0NWMuMDE1LjIyLjAzMy40NC4wMzMuNjY0em0tOC40ODIgOS40MjFoMTQuODk1di00LjE3NEgxNi4yN2E5LjQ3IDkuNDcgMCAwIDEtNi44OTYgNC4xNzR6Ii8+PHBhdGggZD0iTTE2Ljc3IDEzLjQ0N2E4LjM4MyA4LjM4MyAwIDAgMC04LjM4NC04LjM4MyA4LjM4NSA4LjM4NSAwIDEgMCAwIDE2Ljc2OCA4LjM4MyA4LjM4MyAwIDAgMCA4LjM4NC04LjM4NXpNNS40MzkgMTguMzE1Yy0uMjEtLjg0OS41MTItMS43NjQgMS42MTctMi4wMzguNS0uMTIzLjk4Ni0uMSAxLjM5NS4wNDZWNi45NDJzLjA1Ni0uNDEyLjU5OS0uNDc5YzAgMC0uMDA4LjQ3MSAyLjg0MSAyLjQ2IDEuNDU5IDEuMTI1IDEuNDU0IDIuNjYxIDEuNDU0IDIuNjYxLTEuODk3LTIuOTc3LTMuODM3LTIuODcxLTMuODM3LTIuODcxbC0uMDI1IDguOTA2SDkuNDhjLS4wMDUuNzUxLS42ODMgMS40ODYtMS42NTUgMS43MjktMS4xMDUuMjc3LTIuMjYzLS4yNDktMi4zODYtMS4wMzN6Ii8+PC9nPjwvc3ZnPg=="},44:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgOTcxLjk4NiA5NzEuOTg2Ij48cGF0aCBkPSJNMzcwLjIxNiA0NTkuM2MxMC4yIDExLjEgMTUuOCAyNS42IDE1LjggNDAuNnY0NDJjMCAyNi42MDEgMzIuMSA0MC4xMDEgNTEuMSAyMS40bDEyMy4zLTE0MS4zYzE2LjUtMTkuOCAyNS42LTI5LjYwMSAyNS42LTQ5LjJWNTAwYzAtMTUgNS43LTI5LjUgMTUuOC00MC42MDFMOTU1LjYxNSA3NS41YzI2LjUtMjguOCA2LjEwMS03NS41LTMzLjEtNzUuNWgtODczYy0zOS4yIDAtNTkuNyA0Ni42LTMzLjEgNzUuNWwzNTMuODAxIDM4My44eiIgZmlsbD0iI2UwZTBlMCIvPjwvc3ZnPg=="},46:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggb3BhY2l0eT0iLjIiIGQ9Ik0yMC4yMDEgNS4xNjljLTguMjU0IDAtMTQuOTQ2IDYuNjkyLTE0Ljk0NiAxNC45NDYgMCA4LjI1NSA2LjY5MiAxNC45NDYgMTQuOTQ2IDE0Ljk0NnMxNC45NDYtNi42OTEgMTQuOTQ2LTE0Ljk0NmMtLjAwMS04LjI1NC02LjY5Mi0xNC45NDYtMTQuOTQ2LTE0Ljk0NnptMCAyNi41OGMtNi40MjUgMC0xMS42MzQtNS4yMDgtMTEuNjM0LTExLjYzNCAwLTYuNDI1IDUuMjA5LTExLjYzNCAxMS42MzQtMTEuNjM0IDYuNDI1IDAgMTEuNjMzIDUuMjA5IDExLjYzMyAxMS42MzQgMCA2LjQyNi01LjIwOCAxMS42MzQtMTEuNjMzIDExLjYzNHoiLz48cGF0aCBkPSJNMjYuMDEzIDEwLjA0N2wxLjY1NC0yLjg2NmExNC44NTUgMTQuODU1IDAgMCAwLTcuNDY2LTIuMDEydjMuMzEyYzIuMTE5IDAgNC4xLjU3NiA1LjgxMiAxLjU2NnoiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZVR5cGU9InhtbCIgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgMjAgMjAiIHRvPSIzNjAgMjAgMjAiIGR1cj0iMC41cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PC9zdmc+"},47:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTggNXYxNGwxMS03eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="},48:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTYgNmgydjEySDZ6bTMuNSA2bDguNSA2VjZ6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=="},49:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTYgMThsOC41LTZMNiA2djEyek0xNiA2djEyaDJWNmgtMnoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+"},50:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTYgMTloNFY1SDZ2MTR6bTgtMTR2MTRoNFY1aC00eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="},51:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTE2LjUgMTJBNC41IDQuNSAwIDAgMCAxNCA3Ljk3djIuMjFsMi40NSAyLjQ1Yy4wMy0uMi4wNS0uNDEuMDUtLjYzem0yLjUgMGMwIC45NC0uMiAxLjgyLS41NCAyLjY0bDEuNTEgMS41MUE4Ljc5NiA4Ljc5NiAwIDAgMCAyMSAxMmMwLTQuMjgtMi45OS03Ljg2LTctOC43N3YyLjA2YzIuODkuODYgNSAzLjU0IDUgNi43MXpNNC4yNyAzTDMgNC4yNyA3LjczIDlIM3Y2aDRsNSA1di02LjczbDQuMjUgNC4yNWMtLjY3LjUyLTEuNDIuOTMtMi4yNSAxLjE4djIuMDZhOC45OSA4Ljk5IDAgMCAwIDMuNjktMS44MUwxOS43MyAyMSAyMSAxOS43M2wtOS05TDQuMjcgM3pNMTIgNEw5LjkxIDYuMDkgMTIgOC4xOFY0eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="},52:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTMgOXY2aDRsNSA1VjRMNyA5SDN6bTEzLjUgM0E0LjUgNC41IDAgMCAwIDE0IDcuOTd2OC4wNWMxLjQ4LS43MyAyLjUtMi4yNSAyLjUtNC4wMnpNMTQgMy4yM3YyLjA2YzIuODkuODYgNSAzLjU0IDUgNi43MXMtMi4xMSA1Ljg1LTUgNi43MXYyLjA2YzQuMDEtLjkxIDctNC40OSA3LTguNzdzLTIuOTktNy44Ni03LTguNzd6Ii8+PC9zdmc+"},53:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgMTI0LjUxMiAxMjQuNTEyIj48cGF0aCBkPSJNMTEzLjk1NiA1Ny4wMDZsLTk3LjQtNTYuMmMtNC0yLjMtOSAuNi05IDUuMnYxMTIuNWMwIDQuNiA1IDcuNSA5IDUuMmw5Ny40LTU2LjJjNC0yLjQwMSA0LTguMiAwLTEwLjV6IiBmaWxsPSIjOTFEQzVBIi8+PC9zdmc+"},54:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzk5OSIgZD0iTTEyIDIxLjM1bC0xLjQ1LTEuMzJDNS40IDE1LjM2IDIgMTIuMjggMiA4LjUgMiA1LjQyIDQuNDIgMyA3LjUgM2MxLjc0IDAgMy40MS44MSA0LjUgMi4wOUMxMy4wOSAzLjgxIDE0Ljc2IDMgMTYuNSAzIDE5LjU4IDMgMjIgNS40MiAyMiA4LjVjMCAzLjc4LTMuNCA2Ljg2LTguNTUgMTEuNTRMMTIgMjEuMzV6Ii8+PC9zdmc+"},55:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKICAgICB3aWR0aD0iMjRweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMjQgMzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwIDUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgICA8cmVjdCB4PSIwIiB5PSIxMyIgd2lkdGg9IjQiIGhlaWdodD0iNSIgZmlsbD0iIzMzMyI+CiAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImhlaWdodCIgYXR0cmlidXRlVHlwZT0iWE1MIgogICAgICAgIHZhbHVlcz0iNTsyMTs1IiAKICAgICAgICBiZWdpbj0iMHMiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InkiIGF0dHJpYnV0ZVR5cGU9IlhNTCIKICAgICAgICB2YWx1ZXM9IjEzOyA1OyAxMyIKICAgICAgICBiZWdpbj0iMHMiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICA8L3JlY3Q+CiAgICA8cmVjdCB4PSIxMCIgeT0iMTMiIHdpZHRoPSI0IiBoZWlnaHQ9IjUiIGZpbGw9IiMzMzMiPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJoZWlnaHQiIGF0dHJpYnV0ZVR5cGU9IlhNTCIKICAgICAgICB2YWx1ZXM9IjU7MjE7NSIgCiAgICAgICAgYmVnaW49IjAuMTVzIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJ5IiBhdHRyaWJ1dGVUeXBlPSJYTUwiCiAgICAgICAgdmFsdWVzPSIxMzsgNTsgMTMiCiAgICAgICAgYmVnaW49IjAuMTVzIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0iMjAiIHk9IjEzIiB3aWR0aD0iNCIgaGVpZ2h0PSI1IiBmaWxsPSIjMzMzIj4KICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iaGVpZ2h0IiBhdHRyaWJ1dGVUeXBlPSJYTUwiCiAgICAgICAgdmFsdWVzPSI1OzIxOzUiIAogICAgICAgIGJlZ2luPSIwLjNzIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJ5IiBhdHRyaWJ1dGVUeXBlPSJYTUwiCiAgICAgICAgdmFsdWVzPSIxMzsgNTsgMTMiCiAgICAgICAgYmVnaW49IjAuM3MiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICA8L3JlY3Q+CiAgPC9zdmc+"},56:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTE1IDE2aDR2MmgtNHptMC04aDd2MmgtN3ptMCA0aDZ2MmgtNnpNMyAxOGMwIDEuMS45IDIgMiAyaDZjMS4xIDAgMi0uOSAyLTJWOEgzdjEwek0xNCA1aC0zbC0xLTFINkw1IDVIMnYyaDEyeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="},57:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTE0IDEwSDJ2MmgxMnYtMnptMC00SDJ2MmgxMlY2em00IDh2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6TTIgMTZoOHYtMkgydjJ6Ii8+PC9zdmc+"}},[19]);
//# sourceMappingURL=main.c0d1.js.map