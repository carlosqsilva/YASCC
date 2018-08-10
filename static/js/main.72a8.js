webpackJsonp([1],{22:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(0),n=i(2),o=i(7),r=i(25);const l="ONLINE",s="OFFLINE",c="TOGGLE_SIDEBAR",u="TOGGLE_DARK_MODE",g="PLAYLIST_LOADING",d="PLAYLIST_LOADING_NEXT",M="PLAYLIST_LOADED",y="PLAY_SONG",I="ON_PLAY",p="ON_PAUSE",j="TOGGLE_MUTE",h="TOGGLE_LOOP",N="TOGGLE_SHUFFLE",b="NEXT_SHUFFLE",L="ON_VOLUME_CHANGE",D="ON_LOAD_START",x="ON_LOADED_METADATA",m="ACTIVE_PLAYLIST",A="ADD_TO_PLAYLIST",T="REMOVE_FROM_PLAYLIST",O="LOADING_SEARCH",v="LOADING_SEARCH_NEXT",S="LOADED_SEARCH",C="LOAD_RECENT_PLAYED",w="INITIAL_LOAD";function z(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){f(e,t,i[t])})}return e}function f(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const E={sidebarVisible:!1,darkMode:!1,online:!0,ready:!1},k=(e=E,t)=>{switch(t.type){case w:return z({},e,{ready:!0});case c:return z({},e,{sidebarVisible:!e.sidebarVisible});case u:return z({},e,{darkMode:!e.darkMode});case l:return z({},e,{online:!0});case s:return z({},e,{online:!1});default:return e}},P={playlist:[],repeated:[],isPlaying:!1,loading:!1,audioUrl:null,active:null,index:null,song:null,loop:!1,muted:!1,shuffle:!1},Y=(e=P,t)=>{switch(t.type){case m:return z({},e,{playlist:t.playlist});case y:return z({},e,{index:t.index,audioUrl:t.audioUrl,song:t.song,active:t.song.id});case D:return z({},e,{loading:!0});case I:return z({},e,{isPlaying:!0});case p:return z({},e,{isPlaying:!1});case b:return z({},e,{repeated:[...e.repeated,t.index]});case N:const i=!e.shuffle;return z({},e,{shuffle:i,repeated:i?[e.index]:[]});case j:return z({},e,{muted:t.mute});case h:return z({},e,{loop:t.loop});case L:return z({},e,{volume:t.volume,muted:"0"===t.volume});case x:return z({},e,{loading:!1});default:return e}},U=(e={loading:!0,nextSearch:"",nextPlaylist:"",playlist:[],search:[],recent:[],user:[],qtd:0},t)=>{switch(t.type){case w:return t.playlist?z({},e,{user:t.playlist,qtd:t.playlist.length}):e;case C:return z({},e,{recent:t.recent});case A:const i=[...e.user,t.song];return z({},e,{qtd:i.length,user:i});case T:return z({},e,{user:t.playlist,qtd:t.playlist.length});case g:return z({},e,{loading:!0,playlist:[]});case d:case v:return z({},e,{loading:!0});case M:return z({},e,{loading:!1,playlist:[...e.playlist,...t.playlist],nextPlaylist:t.next});case O:return z({},e,{loading:!0,search:[]});case S:return z({},e,{loading:!1,search:[...e.search,...t.playlist],nextSearch:t.next});default:return e}};var Z=Object(o.c)({root:k,playlist:U,player:Y});var Q=Object(o.d)(Z,Object(o.a)(r.a));const H=e=>{const t=parseInt(e/1e3,10);return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`},G=e=>e?e.replace("\u2013","-").split("-").pop():"",R=e=>{if(!e)return 0;if(e<1e3)return e;const t=e.toString(),i=t.length,a=i%3===0?3:i%3;return`${t.substring(0,a)}${i>=7?"M":"K"}`};class W{constructor(e){this.key="client_id=JAgPhXap7XK0g8dUOtklbE7UnF05W8AH",this.tracks=`https://api.soundcloud.com/tracks?linked_partitioning=1&limit=${e}&${this.key}`,this.created_at=null,this.genre=null,this.tag=null}setGenre(e){return this.genre=`genres=${e}`,this.tag=null,this._load()}setTag(e){return this.tag=`tags=${e}`,this.genre=null,this._load()}setFilter(e){return this.created_at=e?`created_at=${e}`:null,this._load()}loadUrl(e){return this._getSongs(e)}async audioStream(e){return`${e}?${this.key}`}async search(e){if(!e.trim())return[];const t=e.split(" ").filter(e=>e.length>0).join("%20");return this._getSongs(`${this.tracks}&q=${t}`)}_load(){const e=[this.tracks,this.genre,this.tag,this.created_at].filter(e=>null!==e).join("&");return this._getSongs(e)}async _getSongs(e){try{const t=await fetch(e).then(e=>e.json()),i=t.next_href;return{playlist:t.collection.filter(e=>null!==e.artwork_url&&3e4!==e.duration).map(e=>({id:e.id,title:G(e.title),duration:H(e.duration),stream:e.stream_url,artworkOriginal:e.artwork_url,artwork:e.artwork_url.replace("large","t67x67"),waveform:e.waveform_url,user:e.user.username,likesCount:e.likes_count,likesCountMin:R(e.likes_count)})),next:i}}catch(e){return console.log(e),{}}}}class B{constructor(e){this.init=(()=>new Promise((e,t)=>{const i=indexedDB.open(this.DB_NAME,this.VERSION);i.onerror=(()=>t(i.error)),i.onsuccess=(t=>{this.DB=i.result,e(t)}),i.onupgradeneeded=(e=>{const t=e.target.result;for(const i of this.DB_STORE){const e=t.createObjectStore(i.name,{keyPath:i.key});i.default&&(e.transaction.oncomplete=(e=>{const a=t.transaction(i.name,"readwrite").objectStore(i.name);i.default.forEach(e=>{a.add(e)})}))}})})),this.save=((e,t)=>new Promise((i,a)=>{const n=this.DB.transaction(e,"readwrite"),o=n.objectStore(e);n.oncomplete=(e=>i(e)),n.onabort=(e=>a(e)),Array.isArray(t)?t.forEach(e=>{o.add(e)}):o.add(t)})),this.delete=((e,t)=>new Promise((i,a)=>{const n=this.DB.transaction(e,"readwrite"),o=n.objectStore(e);n.oncomplete=(e=>i(e)),n.onabort=(e=>a(e)),Array.isArray(t)?t.forEach(e=>{o.delete(e)}):o.delete(t)})),this.update=((e,t)=>new Promise((i,a)=>{const n=this.DB.transaction(e,"readwrite").objectStore(e).put(t);n.onsuccess=(e=>i(e)),n.onerror=(e=>a(e))})),this.getStore=(e=>new Promise((t,i)=>{const a=this.DB.transaction(e).objectStore(e).getAll();a.onsuccess=(({target:e})=>t(e.result)),a.onerror=(e=>i(e))})),this.get=((e,t)=>new Promise((i,a)=>{const n=this.DB.transaction(e).objectStore(e).get(t);n.onsuccess=(({target:e})=>i(e.result)),n.onerror=(e=>a(e))})),this.DB_NAME=e.name,this.DB_STORE=e.store,this.VERSION=e.version||1,this.DB=null}}const V=new W(35),J=new B({name:"yascc",store:[{name:"playlist",key:"id"},{name:"recent",key:"id"}]}),_=()=>({type:l}),X=()=>({type:s}),F=()=>({type:c}),$=()=>({type:D}),K=()=>({type:I}),q=()=>({type:p}),ee=e=>({type:h,loop:e}),te=()=>({type:N}),ie=()=>({type:x}),ae=e=>({type:j,mute:e}),ne=()=>(e,t)=>{const{darkMode:i}=t().root;i?document.documentElement.setAttribute("data-theme","light"):document.documentElement.setAttribute("data-theme","dark"),e({type:u})},oe=(e,t)=>async i=>{const a=await V.audioStream(t.stream);i({type:y,index:e,song:t,audioUrl:a}),await J.get("recent",t.id)||J.save("recent",t)},re=(e,t)=>(i,a)=>{let n;"/"===t?n=a().playlist.playlist:"/search"===t?n=a().playlist.search:"/playlist"===t?n=a().playlist.user:"/recent"===t&&(n=a().playlist.recent),i(oe(e,n[e])),i({type:m,playlist:n})};function le(e,t){const i=Math.floor(e.length*Math.random());return t.includes(i)?le():i}const se=()=>(e,t)=>{const{playlist:i,index:a,shuffle:n,repeated:o}=t().player;let r;n?(r=le(i,o),e({type:b,index:r})):r=a!==i.length-1?a+1:0,e(oe(r,i[r]))},ce=()=>(e,t)=>{const{playlist:i,index:a}=t().player,n=0!==a?a-1:i.length-1;e(oe(n,i[n]))},ue=e=>async t=>{t({type:g});const{playlist:i,next:a}=await V.setGenre(e);t({type:M,playlist:i,next:a})},ge=e=>async t=>{t({type:g});const{playlist:i,next:a}=await V.setTag(e);t({type:M,playlist:i,next:a})},de=e=>async t=>{t({type:g});const{playlist:i,next:a}=await V.setFilter(e);t({type:M,playlist:i,next:a})},Me=()=>async(e,t)=>{const{loading:i,nextPlaylist:a}=t().playlist;if(!i){e({type:d});const{playlist:t,next:i}=await V.loadUrl(a);e({type:M,playlist:t,next:i})}},ye=e=>async t=>{t({type:O});const{playlist:i,next:a}=await V.search(e);t({type:S,playlist:i,next:a})},Ie=()=>async(e,t)=>{const{loading:i,nextSearch:a}=t().playlist;if(!i){e({type:v});const{playlist:t,next:i}=await V.loadUrl(a);e({type:S,playlist:t,next:i})}},pe=e=>async t=>{await J.get("recent",e.id)||(t({type:A,song:e}),J.save("playlist",e))},je=e=>(t,i)=>{let a=i().playlist.user.filter(t=>t.id!==e.id);t({type:T,playlist:a}),J.delete("playlist",e.id)},he=()=>async e=>{const t=await J.getStore("recent");e({type:C,recent:t})},Ne=()=>async e=>{await J.init();const t=await J.getStore("playlist");e(ue("house")),e({type:w,playlist:t})},be=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Le(){if("serviceWorker"in navigator){if(new URL("/YASCC",window.location).origin!==window.location.origin)return;const e="/YASCC/service-worker.js";be?xe(e):De(e)}}function De(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=(()=>{const t=e.installing;t.onstatechange=(()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})})}).catch(e=>{console.error("Error during service worker registration:",e)})}function xe(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):De(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}var me=i(1),Ae=i(34),Te=i(38),Oe=i(21);const ve=me["a"].form`
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
`;class Ce extends a.a{constructor(...e){super(...e),this.state={value:""},this.handleChange=(e=>{this.setState({value:e.target.value})}),this.handleSubmit=(e=>{e.preventDefault(),this.props.searchSongs(this.state.value),this.props.history.push("/search")})}render(e,{value:t}){return Object(a.c)(ve,{onSubmit:this.handleSubmit},Object(a.c)(Se,{placeholder:"Search...",value:t,onChange:this.handleChange}))}}const we={searchSongs:ye};var ze=Object(n.b)(null,we)(Object(Oe.a)(Ce));const fe=me["a"].img.attrs({alt:"",width:e=>e.size,height:e=>e.size})`
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

  min-width: 50px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  @media screen and (max-width: 640px) {
    ${e=>e.noMobile&&"display: none"};
  }

  @media screen and (min-width: 640px) {
    ${e=>e.noDesktop&&"display: none"};
  }
`,Pe=i(41),Ye=i.n(Pe),Ue=i(42),Ze=i.n(Ue);const Qe=me["a"].div`
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
`,He=({toggleSidebar:e,toggleDarkMode:t,online:i,darkMode:n})=>Object(a.c)(Qe,{online:i},Object(a.c)(ke,{link:!0,noDesktop:!0,onClick:e},Object(a.c)(fe,{size:24,src:Ye.a})),Object(a.c)(ze,null),Object(a.c)(ke,{link:!0,onClick:t,title:"Toggle dark mode"},Object(a.c)(Ee,{size:24,active:n},Object(a.c)("path",{d:"M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31A7.98 7.98 0 0 0 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"}))),Object(a.c)(ke,{noMobile:!0,href:"https://github.com/carlosqsilva/yascc",target:"_blank",rel:"noopener noreferrer"},Object(a.c)(fe,{size:24,src:Ze.a}))),Ge=({root:e})=>({online:e.online,darkMode:e.darkMode}),Re={toggleSidebar:F,toggleDarkMode:ne};var We=Object(n.b)(Ge,Re)(He),Be=i(43);const Ve=[{value:"",label:"Default"},{value:"last_hour",label:"Last Hour"},{value:"last_week",label:"Last Week"},{value:"last_month",label:"Last Month"},{value:"last_year",label:"Last Year"}],Je=[{value:"chill%20house",label:"#Chill"},{value:"deep%20house",label:"#Deep"},{value:"lofi%20hip%20hop",label:"#Lofi"},{value:"progressive%20house",label:"#Progressive"},{value:"relax",label:"#Relax"},{value:"study",label:"#Study"},{value:"sleep",label:"#Sleep"},{value:"tech%20house",label:"#Tech"},{value:"trance",label:"#Trance"},{value:"tropical%20house",label:"#Tropical"},{value:"workout",label:"#Workout"}],_e=[{value:"alternative",label:"Alternative Rock"},{value:"ambient",label:"Ambient"},{value:"classical",label:"Classical"},{value:"country",label:"Country"},{value:"danceedm",label:"Dance & EDM"},{value:"dancehall",label:"Dancehall"},{value:"deephouse",label:"Deep House"},{value:"disco",label:"Disco"},{value:"drumbass",label:"Drum & Bass"},{value:"dubstep",label:"Dubstep"},{value:"eletronic",label:"Electronic"},{value:"hiphoprap",label:"Hip-hop & Rap"},{value:"house",label:"House"},{value:"indie",label:"Indie"},{value:"jazzblues",label:"Jazz & Blues"},{value:"metal",label:"Metal"},{value:"piano",label:"Piano"},{value:"pop",label:"Pop"},{value:"rbsoul",label:"R&B & Soul"},{value:"reggae",label:"Reggae"},{value:"reggaeton",label:"Reggaeton"},{value:"rock",label:"Rock"},{value:"soundtracks",label:"Soundtrack"},{value:"techno",label:"Techno"},{value:"trance",label:"Trance"},{value:"trap",label:"Trap"},{value:"triphop",label:"Triphop"},{value:"world",label:"World"}];var Xe=i(45);function Fe(e,t){if(null==e)return{};var i,a,n=$e(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}function $e(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}const Ke=me["a"].select`
  appearance: none;
  background: transparent url(${i.n(Xe).a}) no-repeat 82% 50%;
  color: var(--light);
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  align-self: center;
  margin-left: 20px;
  flex: 1;
  outline: 0;
  border: 0;
`,qe=me["a"].option`
  color: var(--light);
  background: var(--lightDark);
`;var et=e=>{let{options:t}=e,i=Fe(e,["options"]);return Object(a.c)(Ke,i,t.map((e,t)=>Object(a.c)(qe,{key:t,value:e.value},e.label)))},tt=i(46),it=i.n(tt),at=i(47),nt=i.n(at),ot=i(48),rt=i.n(ot);function lt(){return(lt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}const st=me["a"].div`
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
  transform: ${e=>e.visible?"translateX(0)":"translateX(-100%)"};

  @media screen and (min-width: 640px) {
    transform: translateX(0);
  }
`,ct=me["a"].div`
  display: flex;
  text-decoration: none;
  flex-direction: ${e=>e.horizontal?"row":"column"};
  padding: 0.7rem 0 0.7rem 1rem;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
`,ut=Object(me["a"])(Be["a"])`
  display: flex;
  text-decoration: none;
  padding: 0.7rem 0 0.7rem 1rem;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`,gt=me["a"].strong`
  flex: 1;
  align-self: center;
  margin-left: 20px;
  font-size: 1.1em;
  color: var(--light);
`,dt=me["a"].strong`
  color: var(--light);
  margin-bottom: 3px;
  font-size: 1em;
`,Mt=me["a"].span`
  background-color: whitesmoke;
  color: #111;
  border-radius: 5px;
  margin-right: 20px;
  font-size: 0.8em;
  padding: 0 0.5rem;
  align-self: center;
`,yt=me["a"].a`
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
`;class It extends a.a{constructor(...e){super(...e),this.state={active:""},this.changeRoute=(e=>{this.props.history.push(e)}),this.active=(e=>{this.setState({active:e},()=>{this.changeRoute("/")})}),this.onChange=(e=>{this.props.setFilter(e.target.value)}),this.onTag=(({target:{name:e}})=>{this.props.setTag(e),this.active(e)}),this.onGenre=(({target:{name:e}})=>{this.props.setGenre(e),this.active(e)})}render({sidebarVisible:e,qtd:t,InnerProps:i},{active:n}){return Object(a.c)(st,lt({visible:e},i),Object(a.c)(ut,{to:"/recent"},Object(a.c)(fe,{size:20,src:nt.a}),Object(a.c)(gt,null,"Recent Played")),Object(a.c)(ut,{to:"/playlist"},Object(a.c)(fe,{size:20,src:it.a}),Object(a.c)(gt,null,"Playlist"),Object(a.c)(Mt,null,t)),Object(a.c)(ct,{horizontal:!0},Object(a.c)(fe,{size:20,src:rt.a}),Object(a.c)(et,{options:Ve,onChange:this.onChange})),Object(a.c)(ct,null,Object(a.c)(dt,null,"Popular Tags"),Je.map((e,t)=>Object(a.c)(yt,{key:t,name:e.value,active:n===e.value,onClick:this.onTag},e.label))),Object(a.c)(ct,null,Object(a.c)(dt,null,"Music Genres"),_e.map((e,t)=>Object(a.c)(yt,{key:t,name:e.value,active:n===e.value,onClick:this.onGenre},e.label))))}}const pt=({root:{sidebarVisible:e},playlist:{qtd:t}})=>({sidebarVisible:e,qtd:t}),jt={setFilter:de,setGenre:ue,setTag:ge};var ht=Object(Oe.a)(Object(n.b)(pt,jt)(It));function Nt(){return(Nt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}function bt(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},a=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),a.forEach(function(t){Lt(e,t,i[t])})}return e}function Lt(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class Dt extends a.a{constructor(...e){super(...e),this.open=!1,this.startX=0,this.startY=0,this.backdrop=0,this.translation=0,this.handleTouchEnd=(()=>{if(this.translation=this.translation<-50?-100:0,this.drawer.style.transition="transform 100ms ease-in-out",this.drawer.style.transform=`translate(${this.translation}%, 0)`,-100===this.translation)return this.overlay.style.backgroundColor="rgba(0,0,0,0)",this.overlay.style.width="20px",void(this.open=!1);this.open=!0}),this.handleTouchStart=(e=>{const{clientX:t,clientY:i}=e.targetTouches[0];this.startX=t,this.startY=i,this.drawer.style.transition=""}),this.handleTouchMove=(e=>{const{clientX:t,clientY:i}=e.targetTouches[0];if(Math.abs(t-this.startX)>Math.abs(i-this.startY)){const e=t/window.innerWidth;this.translation=Math.min(100*-(1-e),0),this.backdrop=Math.min(e,.5),this.overlay.style.width="100%",this.drawer.style.transform=`translateX(${this.translation}%)`,this.overlay.style.backgroundColor=`rgba(0,0,0,${this.backdrop})`}}),this.handleDrawer=(e=>{this.drawer=e}),this.handleOverlay=(e=>{this.overlay=e}),this.toggleDrawer=(e=>{this.drawer.style.transition="transform 200ms",this.open?(this.drawer.style.transform="translateX(-100%)",this.overlay.style.backgroundColor="rgba(0,0,0,0)",this.overlay.style.width="20px",this.open=!1):(this.drawer.style.transform="translateX(0)",this.overlay.style.backgroundColor="rgba(0,0,0,0.5)",this.overlay.style.width="100%",this.open=!0)})}componentDidUpdate(e){e.sidebarVisible!==this.props.sidebarVisible&&this.toggleDrawer()}render(){const e={onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd};return Object(a.c)("aside",null,Object(a.c)(ht,{InnerProps:bt({innerRef:this.handleDrawer},e)}),Object(a.c)(xt,Nt({onClick:this.toggleDrawer,innerRef:this.handleOverlay},e)))}}const xt=me["a"].div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 20px;
  height: 100%;
  z-index: 50;
  display: var(--overlay);
`,mt=({root:{sidebarVisible:e}})=>({sidebarVisible:e});var At=Object(n.b)(mt)(Dt),Tt=i(49),Ot=i.n(Tt),vt=i(50),St=i.n(vt),Ct=i(51),wt=i.n(Ct),zt=i(52),ft=i.n(zt),Et=i(53),kt=i.n(Et);const Pt=me["a"].div`
  display: flex;
  justify-content: center;
  background: var(--primary);
`,Yt=({isPlaying:e,playNext:t,playPrev:i,toggleLoop:n,toggleShuffle:o,shuffle:r,loading:l,toggle:s,loop:c})=>Object(a.c)(Pt,null,Object(a.c)(ke,{noMobile:!0,onClick:o},Object(a.c)(Ee,{size:20,active:r},Object(a.c)("path",{d:"M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"}))),Object(a.c)(ke,{noMobile:!0,onClick:i},Object(a.c)(fe,{src:wt.a,size:40})),Object(a.c)(ke,{onClick:s},l?Object(a.c)(fe,{src:Ot.a,size:40}):Object(a.c)(fe,{src:e?kt.a:St.a,size:40})),Object(a.c)(ke,{noMobile:!0,onClick:t},Object(a.c)(fe,{src:ft.a,size:40})),Object(a.c)(ke,{noMobile:!0,onClick:n},Object(a.c)(Ee,{size:20,active:c},Object(a.c)("path",{d:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"})))),Ut=({player:{isPlaying:e,loading:t,loop:i,shuffle:a}})=>({isPlaying:e,loading:t,loop:i,shuffle:a}),Zt={playNext:se,playPrev:ce,toggleShuffle:te};var Qt=Object(n.b)(Ut,Zt)(Yt);var Ht=me["a"].input.attrs({type:"range",value:"0"})`
  appearance: none;
  margin: 0.5rem 0;
  outline: none;
  width: 100%;
  height: 6px;
  align-self: center;
  background-color: var(--rangerTrack);
  background-image: linear-gradient(var(--info), var(--info));
  background-size: ${e=>e.full?"100% 100%":"0% 100%"};
  background-repeat: no-repeat;
  border-radius: 10px;
  cursor: pointer;

  &::-webkit-slider-runnable-track {
    box-shadow: none;
    border: none;
    background: transparent;
    -webkit-appearance: none;
  }

  &::-moz-range-track {
    box-shadow: none;
    border: none;
    background: transparent;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    width: 14px;
    height: 14px;
    border: 0;
    background: #fff;
    border-radius: 100%;
    box-shadow: 0 0 1px 0px rgba(0, 0, 0, 0.1);
    -webkit-appearance: none;
  }

  &::-moz-range-thumb {
    width: 14px;
    height: 14px;
    border: 0;
    background: #fff;
    border-radius: 100%;
    box-shadow: 0 0 1px 0px rgba(0, 0, 0, 0.1);
  }
`,Gt=i(54),Rt=i.n(Gt),Wt=i(55),Bt=i.n(Wt);function Vt(){return(Vt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a])}return e}).apply(this,arguments)}function Jt(e,t){if(null==e)return{};var i,a,n=_t(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}function _t(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}const Xt=me["a"].div`
  padding: 0 0.5rem;
  display: flex;
  width: 10rem;
  /* align-items: center; */

  @media screen and (max-width: 600px) {
    display: none;
  }
`,Ft=e=>{let{toggleMute:t,muted:i}=e,n=Jt(e,["toggleMute","muted"]);return Object(a.c)(Xt,null,Object(a.c)(ke,{onClick:t},Object(a.c)(fe,{src:i?Rt.a:Bt.a,size:20})),Object(a.c)(Ht,Vt({full:!0,step:"0.05",value:"1",max:"1"},n)))},$t=({player:{muted:e}})=>({muted:e});var Kt=Object(n.b)($t)(Ft);function qt(e,t){if(null==e)return{};var i,a,n=ei(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}function ei(e,t){if(null==e)return{};var i,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)i=o[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}const ti=me["a"].div`
  flex: 1;
  display: flex;
  padding: 0 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`,ii=me["a"].div`
  display: flex;
  justify-content: space-between;
`;var ai=e=>{let{title:t,duration:i}=e,n=qt(e,["title","duration"]);return Object(a.c)(ti,null,Object(a.c)(ii,null,Object(a.c)("span",null,t),Object(a.c)("span",null,i)),Object(a.c)(Ht,n))};const ni=me["a"].div`
  padding-left: var(--sidebarSpace);
  background: var(--primary);
  backface-visibility: hidden;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 60px;
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
`;class oi extends a.a{constructor(...e){super(...e),this.keyboardKey=(({code:e})=>{const{playPrev:t,playNext:i}=this.props;if("MediaPlayPause"===e)this.togglePlay();else if("MediaTrackNext"===e)i();else{if("MediaTrackPrevious"!==e)return;t()}}),this.onLoadedMetadata=(()=>{this.props.loadedMetadata(),this.audio.play()}),this.onTimeUpdate=(()=>{const e=100/this.audio.duration*this.audio.currentTime;this.timer.style.backgroundSize=`${e}% 100%`,this.timer.value=e||0}),this.togglePlay=(()=>{this.audio.paused?this.audio.play():this.audio.pause()}),this.toggleMute=(()=>{const e=!this.audio.muted;this.props.toggleMute(e),this.audio.muted=e}),this.toggleLoop=(()=>{const e=!this.audio.loop;this.props.toggleLoop(e),this.audio.loop=e}),this.timerChange=(()=>{if(this.props.audioUrl){const e=this.audio.duration*(this.timer.value/100);this.audio.currentTime=e}}),this.volumeChange=(()=>{const e=this.volume.value;this.volume.style.backgroundSize=`${100*e}% 100%`,this.audio.volume=e}),this.onMouseDown=(()=>{this.audio.pause()}),this.onMouseUP=(()=>{this.props.audioUrl&&this.audio.play()}),this.audioRef=(e=>{this.audio=e}),this.timerRef=(e=>{this.timer=e}),this.volumeRef=(e=>{this.volume=e})}componentDidMount(){const{playNext:e,playPrev:t}=this.props;"mediaSession"in navigator?(navigator.mediaSession.playbackState="paused",navigator.mediaSession.setActionHandler("previoustrack",t),navigator.mediaSession.setActionHandler("play",this.togglePlay),navigator.mediaSession.setActionHandler("pause",this.togglePlay),navigator.mediaSession.setActionHandler("nexttrack",e)):window.addEventListener("keyup",this.keyboardKey,!1)}componentWillUnmount(){window.removeEventListener("keyup",this.keyboardKey,!1)}componentWillReceiveProps(e){if("mediaSession"in navigator){const{title:t,user:i,artworkOriginal:a}=e.song;navigator.mediaSession.metadata=new MediaMetadata({title:t,artist:i,artwork:[{src:a.replace("large","t500x500"),sizes:"500x500",type:"image/jpg"}]})}}render({audioUrl:e,playNext:t,onPause:i,onPlay:n,onLoadStart:o,song:r}){return Object(a.c)(ni,{visible:null!==e},Object(a.c)(Qt,{toggle:this.togglePlay,toggleLoop:this.toggleLoop}),Object(a.c)(ai,{title:r?r.title:"Title",duration:r?r.duration:"00:00",innerRef:this.timerRef,onChange:this.timerChange,onTouchStart:this.onMouseDown,onTouchEnd:this.onMouseUP,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUP,step:"0.1"}),Object(a.c)(Kt,{innerRef:this.volumeRef,onChange:this.volumeChange,toggleMute:this.toggleMute}),Object(a.c)("audio",{crossOrigin:"anonymous",onTimeUpdate:this.onTimeUpdate,onLoadedMetadata:this.onLoadedMetadata,onLoadStart:o,onEnded:t,onPause:i,onPlay:n,src:e,ref:this.audioRef}))}}const ri=({player:{song:e,audioUrl:t,volume:i}})=>({audioUrl:t,volume:i,song:e}),li={onPlay:K,onPause:q,playPrev:ce,playNext:se,onLoadStart:$,loadedMetadata:ie,toggleMute:ae,toggleLoop:ee};var si=Object(n.b)(ri,li)(oi),ci=i(56);const ui=me["a"].div`
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
`,gi=me["a"].button`
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
`;class di extends a.a{componentDidMount(){this.observer=new IntersectionObserver(this.props.loadMore),this.observer.observe(this.target)}componentWillUnmount(){this.observer.unobserve(this.target)}render({loadMore:e,isLoading:t}){return Object(a.c)(gi,{onClick:e,innerRef:e=>this.target=e},t?Object(a.c)(ui,null):Object(a.c)("strong",null,"Load More..."))}}var Mi=di,yi=i(57),Ii=i.n(yi),pi=i(58),ji=i.n(pi),hi=i(59),Ni=i.n(hi),bi=i(60),Li=i.n(bi),Di=i(61),xi=i.n(Di);const mi=fe.extend`
  opacity: 0;
  margin: auto;
  display: block;
`,Ai=me["a"].img`
  position: absolute;
  top: 2px;
  right: 2px;
  z-index: 10;
  will-change: transform;
  transform: translateX(115%);
  transition: transform 200ms;
`,Ti=me["a"].div`
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
`,Oi=me["a"].div`
  background-size: cover;
  background-position: center;
  display: flex;
  width: 67px;
  height: 67px;
`,vi=me["a"].div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  overflow: hidden;
  flex: 1;
`,Si=me["a"].p`
  color: var(--textGray);
  font-size: 0.8rem;
`,Ci=me["a"].p`
  color: var(--secondary);
  font-size: 0.9rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,wi=me["a"].div`
  display: flex;
  align-items: center;
  margin-top: auto;
`,zi=me["a"].span`
  flex: ${e=>e.flex?1:0};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  color: var(--textGray);

  &:not(:first-child) {
    font-size: 0.8rem;
    margin-left: 0.2rem;
  }
`,fi=me["a"].div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;

  @media screen and (min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, 290px);
    grid-gap: 15px;
  }
`,Ei=e=>{const t=e?Li.a:xi.a,i=e?"Remove from Playlist":"Add to Playlist";return({song:e,play:n,playlistAction:o,active:r})=>Object(a.c)(Ti,{onClick:n,active:r},Object(a.c)(Ai,{onClick:o,title:i,src:t,id:"action",size:24}),Object(a.c)(Oi,{style:{background:`url(${e.artwork})`}},Object(a.c)(mi,{src:r?Ni.a:Ii.a,id:"play",size:40})),Object(a.c)(vi,null,Object(a.c)(Si,null,e.user),Object(a.c)(Ci,{title:e.title},e.title),Object(a.c)(wi,null,Object(a.c)(zi,{flex:!0},e.duration),Object(a.c)(fe,{src:ji.a,size:12}),Object(a.c)(zi,{title:`${e.likesCount} likes`},e.likesCountMin))))},ki=me["a"].div`
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  transform: translateZ(0);

  @media screen and (min-width: 500px) {
    padding: 15px;
  }
`,Pi=({InnerComponent:e,infinite:t,fromPlaylist:i})=>{const n=Ei(i);return class extends a.a{constructor(...e){super(...e),this.playSong=(e=>()=>{this.props.playSong(e,this.props.location.pathname)}),this.playlistAction=(e=>t=>{t||(t=window.event),t.stopPropagation&&t.stopPropagation(),this.props.playlistAction(e)})}componentDidMount(){const{onMounted:e,ready:t}=this.props;e&&t&&e()}render({loadMore:i,playlist:o,loading:r,active:l,ready:s,location:c}){return"/"===c.pathname||s?Object(a.c)(ki,null,e&&Object(a.c)(e,null),Object(a.c)(fi,null,o.map((e,t)=>Object(a.c)(n,{song:e,active:l===e.id,playlistAction:this.playlistAction(e),play:this.playSong(t),key:e.id}))),t&&Object(a.c)(Mi,{isLoading:r,loadMore:i})):Object(a.c)(ci.a,{to:"/"})}}},Yi=Pi({infinite:!0}),Ui=({player:{active:e},playlist:{playlist:t,loading:i}})=>({playlist:t,active:e,loading:i}),Zi={loadMore:Me,playSong:re,playlistAction:pe};var Qi=Object(n.b)(Ui,Zi)(Yi);const Hi=Pi({}),Gi=({playlist:{recent:e},player:{active:t},root:{ready:i}})=>({playlist:e,active:t,ready:i}),Ri={playSong:re,playlistAction:pe,onMounted:he};var Wi=Object(n.b)(Gi,Ri)(Hi);const Bi=Pi({infinite:!0}),Vi=({playlist:{search:e,loading:t},player:{active:i},root:{ready:a}})=>({active:i,playlist:e,loading:t,ready:a}),Ji={loadMore:Ie,playSong:re,playlistAction:pe};var _i=Object(n.b)(Vi,Ji)(Bi);const Xi=Pi({fromPlaylist:!0}),Fi=({playlist:{user:e},player:{active:t},root:{ready:i}})=>({playlist:e,active:t,ready:i}),$i={playSong:re,playlistAction:je};var Ki=Object(n.b)(Fi,$i)(Xi);const qi=me["a"].div`
  height: 100vh;
  max-width: 100vw;
  padding-top: 50px;
  overflow: hidden;
  background: linear-gradient(to right bottom, var(--light2), var(--primary));
  transition: all 250ms ease;
  margin-left: var(--sidebarSpace);
`;var ea=()=>Object(a.c)(Te.a,{basename:"/YASCC"},Object(a.c)(qi,null,Object(a.c)(At,null),Object(a.c)(We,null),Object(a.c)(si,null),Object(a.c)(Ae.a,{exact:!0,path:"/",component:Qi}),Object(a.c)(Ae.a,{path:"/search",component:_i}),Object(a.c)(Ae.a,{path:"/recent",component:Wi}),Object(a.c)(Ae.a,{path:"/playlist",component:Ki})));Object(a.e)(Object(a.c)(n.a,{store:Q},Object(a.c)(ea,null)),document.body),window.addEventListener("online",()=>{Q.dispatch(_())}),window.addEventListener("offline",()=>{Q.dispatch(X())}),window.addEventListener("load",()=>{Q.dispatch(Ne()).then(()=>Le()),console.log("%c hello there...","font-size: 30px; color: red")})},41:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTAgMWgxNnYzSDBWMXptMCA1aDE2djNIMFY2em0wIDVoMTZ2M0gwdi0zeiIvPjwvc3ZnPg=="},42:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNDM4LjU0OSA0MzguNTQ5Ij48cGF0aCBkPSJNNDA5LjEzMiAxMTQuNTczYy0xOS42MDgtMzMuNTk2LTQ2LjIwNS02MC4xOTQtNzkuNzk4LTc5LjgtMzMuNTk4LTE5LjYwNy03MC4yNzctMjkuNDA4LTExMC4wNjMtMjkuNDA4LTM5Ljc4MSAwLTc2LjQ3MiA5LjgwNC0xMTAuMDYzIDI5LjQwOC0zMy41OTYgMTkuNjA1LTYwLjE5MiA0Ni4yMDQtNzkuOCA3OS44QzkuODAzIDE0OC4xNjggMCAxODQuODU0IDAgMjI0LjYzYzAgNDcuNzggMTMuOTQgOTAuNzQ1IDQxLjgyNyAxMjguOTA2IDI3Ljg4NCAzOC4xNjQgNjMuOTA2IDY0LjU3MiAxMDguMDYzIDc5LjIyNyA1LjE0Ljk1NCA4Ljk0NS4yODMgMTEuNDE5LTEuOTk2IDIuNDc1LTIuMjgyIDMuNzExLTUuMTQgMy43MTEtOC41NjIgMC0uNTcxLS4wNDktNS43MDgtLjE0NC0xNS40MTdhMjU0OS44MSAyNTQ5LjgxIDAgMCAxLS4xNDQtMjUuNDA2bC02LjU2NyAxLjEzNmMtNC4xODcuNzY3LTkuNDY5IDEuMDkyLTE1Ljg0NiAxLTYuMzc0LS4wODktMTIuOTkxLS43NTctMTkuODQyLTEuOTk5LTYuODU0LTEuMjMxLTEzLjIyOS00LjA4Ni0xOS4xMy04LjU1OS01Ljg5OC00LjQ3My0xMC4wODUtMTAuMzI4LTEyLjU2LTE3LjU1NmwtMi44NTUtNi41N2MtMS45MDMtNC4zNzQtNC44OTktOS4yMzMtOC45OTItMTQuNTU5LTQuMDkzLTUuMzMxLTguMjMyLTguOTQ1LTEyLjQxOS0xMC44NDhsLTEuOTk5LTEuNDMxYy0xLjMzMi0uOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5LTEuMTQyLTEuMzMxLTEuOTk3LTIuNjYzLTIuNTY4LTMuOTk3LS41NzItMS4zMzUtLjA5OC0yLjQzIDEuNDI3LTMuMjg5IDEuNTI1LS44NTkgNC4yODEtMS4yNzYgOC4yOC0xLjI3Nmw1LjcwOC44NTNjMy44MDcuNzYzIDguNTE2IDMuMDQyIDE0LjEzMyA2Ljg1MSA1LjYxNCAzLjgwNiAxMC4yMjkgOC43NTQgMTMuODQ2IDE0Ljg0MiA0LjM4IDcuODA2IDkuNjU3IDEzLjc1NCAxNS44NDYgMTcuODQ3IDYuMTg0IDQuMDkzIDEyLjQxOSA2LjEzNiAxOC42OTkgNi4xMzYgNi4yOCAwIDExLjcwNC0uNDc2IDE2LjI3NC0xLjQyMyA0LjU2NS0uOTUyIDguODQ4LTIuMzgzIDEyLjg0Ny00LjI4NSAxLjcxMy0xMi43NTggNi4zNzctMjIuNTU5IDEzLjk4OC0yOS40MS0xMC44NDgtMS4xNC0yMC42MDEtMi44NTctMjkuMjY0LTUuMTQtOC42NTgtMi4yODYtMTcuNjA1LTUuOTk2LTI2LjgzNS0xMS4xNC05LjIzNS01LjEzNy0xNi44OTYtMTEuNTE2LTIyLjk4NS0xOS4xMjYtNi4wOS03LjYxNC0xMS4wODgtMTcuNjEtMTQuOTg3LTI5Ljk3OS0zLjkwMS0xMi4zNzQtNS44NTItMjYuNjQ4LTUuODUyLTQyLjgyNiAwLTIzLjAzNSA3LjUyLTQyLjYzNyAyMi41NTctNTguODE3LTcuMDQ0LTE3LjMxOC02LjM3OS0zNi43MzIgMS45OTctNTguMjQgNS41Mi0xLjcxNSAxMy43MDYtLjQyOCAyNC41NTQgMy44NTMgMTAuODUgNC4yODMgMTguNzk0IDcuOTUyIDIzLjg0IDEwLjk5NCA1LjA0NiAzLjA0MSA5LjA4OSA1LjYxOCAxMi4xMzUgNy43MDggMTcuNzA1LTQuOTQ3IDM1Ljk3Ni03LjQyMSA1NC44MTgtNy40MjFzMzcuMTE3IDIuNDc0IDU0LjgyMyA3LjQyMWwxMC44NDktNi44NDljNy40MTktNC41NyAxNi4xOC04Ljc1OCAyNi4yNjItMTIuNTY1IDEwLjA4OC0zLjgwNSAxNy44MDItNC44NTMgMjMuMTM0LTMuMTM4IDguNTYyIDIxLjUwOSA5LjMyNSA0MC45MjIgMi4yNzkgNTguMjQgMTUuMDM2IDE2LjE4IDIyLjU1OSAzNS43ODcgMjIuNTU5IDU4LjgxNyAwIDE2LjE3OC0xLjk1OCAzMC40OTctNS44NTMgNDIuOTY2LTMuOSAxMi40NzEtOC45NDEgMjIuNDU3LTE1LjEyNSAyOS45NzktNi4xOTEgNy41MjEtMTMuOTAxIDEzLjg1LTIzLjEzMSAxOC45ODYtOS4yMzIgNS4xNC0xOC4xODIgOC44NS0yNi44NCAxMS4xMzYtOC42NjIgMi4yODYtMTguNDE1IDQuMDA0LTI5LjI2MyA1LjE0NiA5Ljg5NCA4LjU2MiAxNC44NDIgMjIuMDc3IDE0Ljg0MiA0MC41Mzl2NjAuMjM3YzAgMy40MjIgMS4xOSA2LjI3OSAzLjU3MiA4LjU2MiAyLjM3OSAyLjI3OSA2LjEzNiAyLjk1IDExLjI3NiAxLjk5NSA0NC4xNjMtMTQuNjUzIDgwLjE4NS00MS4wNjIgMTA4LjA2OC03OS4yMjYgMjcuODgtMzguMTYxIDQxLjgyNS04MS4xMjYgNDEuODI1LTEyOC45MDYtLjAxLTM5Ljc3MS05LjgxOC03Ni40NTQtMjkuNDE0LTExMC4wNDl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBmaWxsPSIjNDQ0Ii8+PC9zdmc+"},45:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDQ5MC42NTYgNDkwLjY1NiI+PHBhdGggZD0iTTQ4Ny41MzYgMTIwLjQ0NWMtNC4xNi00LjE2LTEwLjkyMy00LjE2LTE1LjA4MyAwTDI0NS4zMTcgMzQ3LjU4MSAxOC4yMDMgMTIwLjQ0NWMtNC4xNi00LjE2LTEwLjkyMy00LjE2LTE1LjA4MyAwcy00LjE2IDEwLjkyMyAwIDE1LjA4M2wyMzQuNjY3IDIzNC42NjdjMi4wNjkgMi4wOTEgNC44IDMuMTM2IDcuNTMxIDMuMTM2czUuNDYxLTEuMDQ1IDcuNTUyLTMuMTE1bDIzNC42NjctMjM0LjY2N2ExMC43IDEwLjcgMCAwIDAtLjAwMS0xNS4xMDR6IiBmaWxsPSIjZjVmNWY1Ii8+PC9zdmc+"},46:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNC4yNjkgMjQuMjY5IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGcgZmlsbD0iI2UwZTBlMCI+PHBhdGggZD0iTTcuMDI4IDEuMjQydjMuMDAzYTkuNDcyIDkuNDcyIDAgMCAxIDEuMzU4LS4xMDljMS43MjggMCAzLjM0NC40NyA0LjczOCAxLjI3OWgxMS4xNDVWMS4yNDJINy4wMjh6bTEwLjUxIDkuOTY2aDYuNzNWNy4wMzNoLTkuMDcyYTkuNDUgOS40NSAwIDAgMSAyLjM0MiA0LjE3NXptLjMxOCAyLjM5OWE5LjQ4IDkuNDggMCAwIDEtLjY3OCAzLjUxaDcuMDl2LTQuMTc0aC02LjQ0NWMuMDE1LjIyLjAzMy40NC4wMzMuNjY0em0tOC40ODIgOS40MjFoMTQuODk1di00LjE3NEgxNi4yN2E5LjQ3IDkuNDcgMCAwIDEtNi44OTYgNC4xNzR6Ii8+PHBhdGggZD0iTTE2Ljc3IDEzLjQ0N2E4LjM4MyA4LjM4MyAwIDAgMC04LjM4NC04LjM4MyA4LjM4NSA4LjM4NSAwIDEgMCAwIDE2Ljc2OCA4LjM4MyA4LjM4MyAwIDAgMCA4LjM4NC04LjM4NXpNNS40MzkgMTguMzE1Yy0uMjEtLjg0OS41MTItMS43NjQgMS42MTctMi4wMzguNS0uMTIzLjk4Ni0uMSAxLjM5NS4wNDZWNi45NDJzLjA1Ni0uNDEyLjU5OS0uNDc5YzAgMC0uMDA4LjQ3MSAyLjg0MSAyLjQ2IDEuNDU5IDEuMTI1IDEuNDU0IDIuNjYxIDEuNDU0IDIuNjYxLTEuODk3LTIuOTc3LTMuODM3LTIuODcxLTMuODM3LTIuODcxbC0uMDI1IDguOTA2SDkuNDhjLS4wMDUuNzUxLS42ODMgMS40ODYtMS42NTUgMS43MjktMS4xMDUuMjc3LTIuMjYzLS4yNDktMi4zODYtMS4wMzN6Ii8+PC9nPjwvc3ZnPg=="},47:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNlMGUwZTAiIGQ9Ik0xOSA4bC00IDRoM2MwIDMuMzEtMi42OSA2LTYgNi0xLjAxIDAtMS45Ny0uMjUtMi44LS43bC0xLjQ2IDEuNDZDOC45NyAxOS41NCAxMC40MyAyMCAxMiAyMGM0LjQyIDAgOC0zLjU4IDgtOGgzbC00LTR6TTYgMTJjMC0zLjMxIDIuNjktNiA2LTYgMS4wMSAwIDEuOTcuMjUgMi44LjdsMS40Ni0xLjQ2QzE1LjAzIDQuNDYgMTMuNTcgNCAxMiA0Yy00LjQyIDAtOCAzLjU4LTggOEgxbDQgNCA0LTRINnoiLz4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg=="},48:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgOTcxLjk4NiA5NzEuOTg2Ij48cGF0aCBkPSJNMzcwLjIxNiA0NTkuM2MxMC4yIDExLjEgMTUuOCAyNS42IDE1LjggNDAuNnY0NDJjMCAyNi42MDEgMzIuMSA0MC4xMDEgNTEuMSAyMS40bDEyMy4zLTE0MS4zYzE2LjUtMTkuOCAyNS42LTI5LjYwMSAyNS42LTQ5LjJWNTAwYzAtMTUgNS43LTI5LjUgMTUuOC00MC42MDFMOTU1LjYxNSA3NS41YzI2LjUtMjguOCA2LjEwMS03NS41LTMzLjEtNzUuNWgtODczYy0zOS4yIDAtNTkuNyA0Ni42LTMzLjEgNzUuNWwzNTMuODAxIDM4My44eiIgZmlsbD0iI2UwZTBlMCIvPjwvc3ZnPg=="},49:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggb3BhY2l0eT0iLjIiIGQ9Ik0yMC4yMDEgNS4xNjljLTguMjU0IDAtMTQuOTQ2IDYuNjkyLTE0Ljk0NiAxNC45NDYgMCA4LjI1NSA2LjY5MiAxNC45NDYgMTQuOTQ2IDE0Ljk0NnMxNC45NDYtNi42OTEgMTQuOTQ2LTE0Ljk0NmMtLjAwMS04LjI1NC02LjY5Mi0xNC45NDYtMTQuOTQ2LTE0Ljk0NnptMCAyNi41OGMtNi40MjUgMC0xMS42MzQtNS4yMDgtMTEuNjM0LTExLjYzNCAwLTYuNDI1IDUuMjA5LTExLjYzNCAxMS42MzQtMTEuNjM0IDYuNDI1IDAgMTEuNjMzIDUuMjA5IDExLjYzMyAxMS42MzQgMCA2LjQyNi01LjIwOCAxMS42MzQtMTEuNjMzIDExLjYzNHoiLz48cGF0aCBkPSJNMjYuMDEzIDEwLjA0N2wxLjY1NC0yLjg2NmExNC44NTUgMTQuODU1IDAgMCAwLTcuNDY2LTIuMDEydjMuMzEyYzIuMTE5IDAgNC4xLjU3NiA1LjgxMiAxLjU2NnoiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZVR5cGU9InhtbCIgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgMjAgMjAiIHRvPSIzNjAgMjAgMjAiIGR1cj0iMC41cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PC9zdmc+"},50:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTggNXYxNGwxMS03eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="},51:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTYgNmgydjEySDZ6bTMuNSA2bDguNSA2VjZ6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=="},52:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTYgMThsOC41LTZMNiA2djEyek0xNiA2djEyaDJWNmgtMnoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+"},53:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTYgMTloNFY1SDZ2MTR6bTgtMTR2MTRoNFY1aC00eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="},54:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTE2LjUgMTJBNC41IDQuNSAwIDAgMCAxNCA3Ljk3djIuMjFsMi40NSAyLjQ1Yy4wMy0uMi4wNS0uNDEuMDUtLjYzem0yLjUgMGMwIC45NC0uMiAxLjgyLS41NCAyLjY0bDEuNTEgMS41MUE4Ljc5NiA4Ljc5NiAwIDAgMCAyMSAxMmMwLTQuMjgtMi45OS03Ljg2LTctOC43N3YyLjA2YzIuODkuODYgNSAzLjU0IDUgNi43MXpNNC4yNyAzTDMgNC4yNyA3LjczIDlIM3Y2aDRsNSA1di02LjczbDQuMjUgNC4yNWMtLjY3LjUyLTEuNDIuOTMtMi4yNSAxLjE4djIuMDZhOC45OSA4Ljk5IDAgMCAwIDMuNjktMS44MUwxOS43MyAyMSAyMSAxOS43M2wtOS05TDQuMjcgM3pNMTIgNEw5LjkxIDYuMDkgMTIgOC4xOFY0eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="},55:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTMgOXY2aDRsNSA1VjRMNyA5SDN6bTEzLjUgM0E0LjUgNC41IDAgMCAwIDE0IDcuOTd2OC4wNWMxLjQ4LS43MyAyLjUtMi4yNSAyLjUtNC4wMnpNMTQgMy4yM3YyLjA2YzIuODkuODYgNSAzLjU0IDUgNi43MXMtMi4xMSA1Ljg1LTUgNi43MXYyLjA2YzQuMDEtLjkxIDctNC40OSA3LTguNzdzLTIuOTktNy44Ni03LTguNzd6Ii8+PC9zdmc+"},57:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgMTI0LjUxMiAxMjQuNTEyIj48cGF0aCBkPSJNMTEzLjk1NiA1Ny4wMDZsLTk3LjQtNTYuMmMtNC0yLjMtOSAuNi05IDUuMnYxMTIuNWMwIDQuNiA1IDcuNSA5IDUuMmw5Ny40LTU2LjJjNC0yLjQwMSA0LTguMiAwLTEwLjV6IiBmaWxsPSIjOTFEQzVBIi8+PC9zdmc+"},58:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzk5OSIgZD0iTTEyIDIxLjM1bC0xLjQ1LTEuMzJDNS40IDE1LjM2IDIgMTIuMjggMiA4LjUgMiA1LjQyIDQuNDIgMyA3LjUgM2MxLjc0IDAgMy40MS44MSA0LjUgMi4wOUMxMy4wOSAzLjgxIDE0Ljc2IDMgMTYuNSAzIDE5LjU4IDMgMjIgNS40MiAyMiA4LjVjMCAzLjc4LTMuNCA2Ljg2LTguNTUgMTEuNTRMMTIgMjEuMzV6Ii8+PC9zdmc+"},59:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKICAgICB3aWR0aD0iMjRweCIgaGVpZ2h0PSIzMHB4IiB2aWV3Qm94PSIwIDAgMjQgMzAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwIDUwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CiAgICA8cmVjdCB4PSIwIiB5PSIxMyIgd2lkdGg9IjQiIGhlaWdodD0iNSIgZmlsbD0iIzMzMyI+CiAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9ImhlaWdodCIgYXR0cmlidXRlVHlwZT0iWE1MIgogICAgICAgIHZhbHVlcz0iNTsyMTs1IiAKICAgICAgICBiZWdpbj0iMHMiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9InkiIGF0dHJpYnV0ZVR5cGU9IlhNTCIKICAgICAgICB2YWx1ZXM9IjEzOyA1OyAxMyIKICAgICAgICBiZWdpbj0iMHMiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICA8L3JlY3Q+CiAgICA8cmVjdCB4PSIxMCIgeT0iMTMiIHdpZHRoPSI0IiBoZWlnaHQ9IjUiIGZpbGw9IiMzMzMiPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJoZWlnaHQiIGF0dHJpYnV0ZVR5cGU9IlhNTCIKICAgICAgICB2YWx1ZXM9IjU7MjE7NSIgCiAgICAgICAgYmVnaW49IjAuMTVzIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJ5IiBhdHRyaWJ1dGVUeXBlPSJYTUwiCiAgICAgICAgdmFsdWVzPSIxMzsgNTsgMTMiCiAgICAgICAgYmVnaW49IjAuMTVzIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgPC9yZWN0PgogICAgPHJlY3QgeD0iMjAiIHk9IjEzIiB3aWR0aD0iNCIgaGVpZ2h0PSI1IiBmaWxsPSIjMzMzIj4KICAgICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0iaGVpZ2h0IiBhdHRyaWJ1dGVUeXBlPSJYTUwiCiAgICAgICAgdmFsdWVzPSI1OzIxOzUiIAogICAgICAgIGJlZ2luPSIwLjNzIiBkdXI9IjAuNnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiAvPgogICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJ5IiBhdHRyaWJ1dGVUeXBlPSJYTUwiCiAgICAgICAgdmFsdWVzPSIxMzsgNTsgMTMiCiAgICAgICAgYmVnaW49IjAuM3MiIGR1cj0iMC42cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIC8+CiAgICA8L3JlY3Q+CiAgPC9zdmc+"},60:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTE1IDE2aDR2MmgtNHptMC04aDd2MmgtN3ptMCA0aDZ2MmgtNnpNMyAxOGMwIDEuMS45IDIgMiAyaDZjMS4xIDAgMi0uOSAyLTJWOEgzdjEwek0xNCA1aC0zbC0xLTFINkw1IDVIMnYyaDEyeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="},61:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTE0IDEwSDJ2MmgxMnYtMnptMC00SDJ2MmgxMlY2em00IDh2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6TTIgMTZoOHYtMkgydjJ6Ii8+PC9zdmc+"}},[22]);
//# sourceMappingURL=main.72a8.js.map