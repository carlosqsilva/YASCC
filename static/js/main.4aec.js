webpackJsonp([1],{22:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(0),n=a(2),o=a(7),r=a(25);const l="ONLINE",s="OFFLINE",c="TOGGLE_SIDEBAR",u="TOGGLE_DARK_MODE",g="PLAYLIST_LOADING",d="PLAYLIST_LOADING_NEXT",M="PLAYLIST_LOADED",y="PLAY_SONG",p="ON_PLAY",j="ON_PAUSE",N="TOGGLE_MUTE",h="TOGGLE_LOOP",L="TOGGLE_SHUFFLE",I="NEXT_SHUFFLE",b="ON_VOLUME_CHANGE",D="ON_LOAD_START",x="ON_LOADED_METADATA",T="ACTIVE_PLAYLIST",O="ADD_TO_PLAYLIST",m="REMOVE_FROM_PLAYLIST",v="LOADING_SEARCH",A="LOADING_SEARCH_NEXT",S="LOADED_SEARCH",w="LOAD_RECENT_PLAYED",z="INITIAL_LOAD";function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},i=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),i.forEach(function(t){C(e,t,a[t])})}return e}function C(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const E={sidebarVisible:!1,darkMode:!1,online:!0,ready:!1},k=(e=E,t)=>{switch(t.type){case z:return f({},e,{ready:!0});case c:return f({},e,{sidebarVisible:!e.sidebarVisible});case u:return f({},e,{darkMode:!e.darkMode});case l:return f({},e,{online:!0});case s:return f({},e,{online:!1});default:return e}},P={playlist:[],repeated:[],isPlaying:!1,loading:!1,audioUrl:null,active:null,index:null,song:null,loop:!1,muted:!1,shuffle:!1},Y=(e=P,t)=>{switch(t.type){case T:return f({},e,{playlist:t.playlist});case y:return f({},e,{index:t.index,audioUrl:t.audioUrl,song:t.song,active:t.song.id});case D:return f({},e,{loading:!0});case p:return f({},e,{isPlaying:!0});case j:return f({},e,{isPlaying:!1});case I:return f({},e,{repeated:[...e.repeated,t.index]});case L:const a=!e.shuffle;return f({},e,{shuffle:a,repeated:a?[e.index]:[]});case N:return f({},e,{muted:t.mute});case h:return f({},e,{loop:t.loop});case b:return f({},e,{volume:t.volume,muted:"0"===t.volume});case x:return f({},e,{loading:!1});default:return e}},Q=(e={loading:!0,nextSearch:"",nextPlaylist:"",playlist:[],search:[],recent:[],user:[],qtd:0},t)=>{switch(t.type){case z:return t.playlist?f({},e,{user:t.playlist,qtd:t.playlist.length}):e;case w:return f({},e,{recent:t.recent});case O:const a=[...e.user,t.song];return f({},e,{qtd:a.length,user:a});case m:return f({},e,{user:t.playlist,qtd:t.playlist.length});case g:return f({},e,{loading:!0,playlist:[]});case d:case A:return f({},e,{loading:!0});case M:return f({},e,{loading:!1,playlist:[...e.playlist,...t.playlist],nextPlaylist:t.next});case v:return f({},e,{loading:!0,search:[]});case S:return f({},e,{loading:!1,search:[...e.search,...t.playlist],nextSearch:t.next});default:return e}};var U=Object(o.c)({root:k,playlist:Q,player:Y});var Z=Object(o.d)(U,Object(o.a)(r.a));const H=e=>{const t=parseInt(e/1e3,10);return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`},R=e=>e?e.replace("\u2013","-").split("-").pop():"",G=e=>{if(!e)return 0;if(e<1e3)return e;const t=e.toString(),a=t.length,i=a%3===0?3:a%3;return`${t.substring(0,i)}${a>=7?"M":"K"}`};class B{constructor(e){this.key="client_id=wQF3qEmVErE295tmLg8c1xxt5Y5kLda2",this.tracks=`https://api.soundcloud.com/tracks?linked_partitioning=1&limit=${e}&${this.key}`,this.created_at=null,this.genre=null,this.tag=null}setGenre(e){return this.genre=`genres=${e}`,this.tag=null,this._load()}setTag(e){return this.tag=`tags=${e}`,this.genre=null,this._load()}setFilter(e){return this.created_at=e?`created_at=${e}`:null,this._load()}loadUrl(e){return this._getSongs(e)}async audioStream(e){return`${e}?${this.key}`}async search(e){if(!e.trim())return[];const t=e.split(" ").filter(e=>e.length>0).join("%20");return this._getSongs(`${this.tracks}&q=${t}`)}_load(){const e=[this.tracks,this.genre,this.tag,this.created_at].filter(e=>null!==e).join("&");return this._getSongs(e)}async _getSongs(e){try{const t=await fetch(e).then(e=>e.json()),a=t.next_href;return{playlist:t.collection.filter(e=>null!==e.artwork_url&&3e4!==e.duration).map(e=>({id:e.id,title:R(e.title),duration:H(e.duration),stream:e.stream_url,artworkOriginal:e.artwork_url,artwork:e.artwork_url.replace("large","t67x67"),waveform:e.waveform_url,user:e.user.username,likesCount:e.likes_count,likesCountMin:G(e.likes_count)})),next:a}}catch(e){return console.log(e),{}}}}class W{constructor(e){this.init=(()=>new Promise((e,t)=>{const a=indexedDB.open(this.DB_NAME,this.VERSION);a.onerror=(()=>t(a.error)),a.onsuccess=(t=>{this.DB=a.result,e(t)}),a.onupgradeneeded=(e=>{const t=e.target.result,a=t.objectStoreNames;for(const i of this.DB_STORE)a.contains(i.name)||t.createObjectStore(i.name,{keyPath:i.key})})})),this.save=((e,t)=>new Promise((a,i)=>{const n=this.DB.transaction(e,"readwrite"),o=n.objectStore(e);n.oncomplete=(e=>a(e)),n.onabort=(e=>i(e)),Array.isArray(t)?t.forEach(e=>{o.add(e)}):o.add(t)})),this.delete=((e,t)=>new Promise((a,i)=>{const n=this.DB.transaction(e,"readwrite"),o=n.objectStore(e);n.oncomplete=(e=>a(e)),n.onabort=(e=>i(e)),Array.isArray(t)?t.forEach(e=>{o.delete(e)}):o.delete(t)})),this.update=((e,t)=>new Promise((a,i)=>{const n=this.DB.transaction(e,"readwrite").objectStore(e).put(t);n.onsuccess=(e=>a(e)),n.onerror=(e=>i(e))})),this.getStore=(e=>new Promise((t,a)=>{const i=this.DB.transaction(e).objectStore(e).getAll();i.onsuccess=(({target:e})=>t(e.result)),i.onerror=(e=>a(e))})),this.get=((e,t)=>new Promise((a,i)=>{const n=this.DB.transaction(e).objectStore(e).get(t);n.onsuccess=(({target:e})=>a(e.result)),n.onerror=(e=>i(e))})),this.DB_NAME=e.name,this.DB_STORE=e.store,this.VERSION=e.version||1,this.DB=null}}const _=new B(35),V=new W({version:4,name:"yascc",store:[{name:"playlist",key:"id"},{name:"recent",key:"id"}]}),X=()=>({type:l}),J=()=>({type:s}),F=()=>({type:c}),$=()=>({type:D}),q=()=>({type:p}),K=()=>({type:j}),ee=e=>({type:h,loop:e}),te=()=>({type:L}),ae=()=>({type:x}),ie=e=>({type:N,mute:e}),ne=()=>(e,t)=>{const{darkMode:a}=t().root;a?document.documentElement.setAttribute("data-theme","light"):document.documentElement.setAttribute("data-theme","dark"),e({type:u})},oe=(e,t)=>async a=>{const i=await _.audioStream(t.stream);a({type:y,index:e,song:t,audioUrl:i}),await V.get("recent",t.id)||V.save("recent",t)},re=(e,t)=>(a,i)=>{let n;"/"===t?n=i().playlist.playlist:"/search"===t?n=i().playlist.search:"/playlist"===t?n=i().playlist.user:"/recent"===t&&(n=i().playlist.recent),a(oe(e,n[e])),a({type:T,playlist:n})};function le(e,t){const a=Math.floor(e.length*Math.random());return t.includes(a)?le():a}const se=()=>(e,t)=>{const{playlist:a,index:i,shuffle:n,repeated:o}=t().player;let r;n?(r=le(a,o),e({type:I,index:r})):r=i!==a.length-1?i+1:0,e(oe(r,a[r]))},ce=()=>(e,t)=>{const{playlist:a,index:i}=t().player,n=0!==i?i-1:a.length-1;e(oe(n,a[n]))},ue=e=>async t=>{t({type:g});const{playlist:a,next:i}=await _.setGenre(e);t({type:M,playlist:a,next:i})},ge=e=>async t=>{t({type:g});const{playlist:a,next:i}=await _.setTag(e);t({type:M,playlist:a,next:i})},de=e=>async t=>{t({type:g});const{playlist:a,next:i}=await _.setFilter(e);t({type:M,playlist:a,next:i})},Me=()=>async(e,t)=>{const{loading:a,nextPlaylist:i}=t().playlist;if(!a){e({type:d});const{playlist:t,next:a}=await _.loadUrl(i);e({type:M,playlist:t,next:a})}},ye=e=>async t=>{t({type:v});const{playlist:a,next:i}=await _.search(e);t({type:S,playlist:a,next:i})},pe=()=>async(e,t)=>{const{loading:a,nextSearch:i}=t().playlist;if(!a){e({type:A});const{playlist:t,next:a}=await _.loadUrl(i);e({type:S,playlist:t,next:a})}},je=e=>async t=>{await V.get("recent",e.id)||(t({type:O,song:e}),V.save("playlist",e))},Ne=e=>(t,a)=>{let i=a().playlist.user.filter(t=>t.id!==e.id);t({type:m,playlist:i}),V.delete("playlist",e.id)},he=()=>async e=>{const t=await V.getStore("recent");e({type:w,recent:t})},Le=()=>async e=>{await V.init();const t=await V.getStore("playlist");e(ue("house")),e({type:z,playlist:t})},Ie=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(){if("serviceWorker"in navigator){if(new URL("/YASCC",window.location).origin!==window.location.origin)return;const e="/YASCC/service-worker.js";Ie?xe(e):De(e)}}function De(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=(()=>{const t=e.installing;t.onstatechange=(()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})})}).catch(e=>{console.error("Error during service worker registration:",e)})}function xe(e){fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):De(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})}var Te=a(1),Oe=a(34),me=a(38),ve=a(21);const Ae=Te["a"].form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  flex: 1;
`,Se=Te["a"].input`
  background: var(--light);
  color: var(--secondary);
  border-radius: 4px;
  border: none;
  outline: 0;
  font-size: 1rem;
  line-height: 2;
  padding: 0 1em;
  width: 100%;
`;class we extends i.a{constructor(...e){super(...e),this.state={value:""},this.handleChange=(e=>{this.setState({value:e.target.value})}),this.handleSubmit=(e=>{e.preventDefault(),this.props.searchSongs(this.state.value),this.props.history.push("/search")})}render(e,{value:t}){return Object(i.c)(Ae,{onSubmit:this.handleSubmit},Object(i.c)(Se,{placeholder:"Search...",value:t,onChange:this.handleChange}))}}const ze={searchSongs:ye};var fe=Object(n.b)(null,ze)(Object(ve.a)(we));const Ce=Te["a"].img.attrs({alt:"",width:e=>e.size,height:e=>e.size})`
  align-self: center;
`,Ee=Te["a"].svg.attrs({width:e=>e.size,height:e=>e.size,viewBox:"0 0 24 24"})`
  fill: ${e=>e.active?"#21d4fd":"#444"};
`;var ke=Te["a"].a`
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
`,Pe=a(41),Ye=a.n(Pe),Qe=a(42),Ue=a.n(Qe);const Ze=Te["a"].div`
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
`,He=({toggleSidebar:e,toggleDarkMode:t,online:a,darkMode:n})=>Object(i.c)(Ze,{online:a},Object(i.c)(ke,{link:!0,noDesktop:!0,onClick:e},Object(i.c)(Ce,{size:24,src:Ye.a})),Object(i.c)(fe,null),Object(i.c)(ke,{link:!0,onClick:t,title:"Toggle dark mode"},Object(i.c)(Ee,{size:24,active:n},Object(i.c)("path",{d:"M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31A7.98 7.98 0 0 0 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"}))),Object(i.c)(ke,{noMobile:!0,href:"https://github.com/carlosqsilva/yascc",target:"_blank",rel:"noopener noreferrer"},Object(i.c)(Ce,{size:24,src:Ue.a}))),Re=({root:e})=>({online:e.online,darkMode:e.darkMode}),Ge={toggleSidebar:F,toggleDarkMode:ne};var Be=Object(n.b)(Re,Ge)(He),We=a(43);const _e=[{value:"",label:"Default"},{value:"last_hour",label:"Last Hour"},{value:"last_week",label:"Last Week"},{value:"last_month",label:"Last Month"},{value:"last_year",label:"Last Year"}],Ve=[{value:"chill%20house",label:"#Chill"},{value:"deep%20house",label:"#Deep"},{value:"lofi%20hip%20hop",label:"#Lofi"},{value:"progressive%20house",label:"#Progressive"},{value:"relax",label:"#Relax"},{value:"study",label:"#Study"},{value:"sleep",label:"#Sleep"},{value:"tech%20house",label:"#Tech"},{value:"trance",label:"#Trance"},{value:"tropical%20house",label:"#Tropical"},{value:"workout",label:"#Workout"}],Xe=[{value:"alternative",label:"Alternative Rock"},{value:"ambient",label:"Ambient"},{value:"classical",label:"Classical"},{value:"country",label:"Country"},{value:"danceedm",label:"Dance & EDM"},{value:"dancehall",label:"Dancehall"},{value:"deephouse",label:"Deep House"},{value:"disco",label:"Disco"},{value:"drumbass",label:"Drum & Bass"},{value:"dubstep",label:"Dubstep"},{value:"eletronic",label:"Electronic"},{value:"hiphoprap",label:"Hip-hop & Rap"},{value:"house",label:"House"},{value:"indie",label:"Indie"},{value:"jazzblues",label:"Jazz & Blues"},{value:"metal",label:"Metal"},{value:"piano",label:"Piano"},{value:"pop",label:"Pop"},{value:"rbsoul",label:"R&B & Soul"},{value:"reggae",label:"Reggae"},{value:"reggaeton",label:"Reggaeton"},{value:"rock",label:"Rock"},{value:"soundtracks",label:"Soundtrack"},{value:"techno",label:"Techno"},{value:"trance",label:"Trance"},{value:"trap",label:"Trap"},{value:"triphop",label:"Triphop"},{value:"world",label:"World"}];var Je=a(45);function Fe(e,t){if(null==e)return{};var a,i,n=$e(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function $e(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}const qe=Te["a"].select`
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
`,Ke=Te["a"].option`
  color: var(--light);
  background: var(--lightDark);
`;var et=e=>{let{options:t}=e,a=Fe(e,["options"]);return Object(i.c)(qe,a,t.map((e,t)=>Object(i.c)(Ke,{key:t,value:e.value},e.label)))},tt=a(46),at=a.n(tt),it=a(47),nt=a.n(it),ot=a(48),rt=a.n(ot);function lt(){return(lt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}const st=Te["a"].div`
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
  transform: translateX(-100%);
  transition: transform 200ms ease-in-out;

  &.active {
    transform: translateX(0);
  }

  @media screen and (min-width: 640px) {
    transform: translateX(0);
  }
`,ct=Te["a"].div`
  display: flex;
  text-decoration: none;
  flex-direction: ${e=>e.horizontal?"row":"column"};
  padding: 0.7rem 0 0.7rem 1rem;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
`,ut=Object(Te["a"])(We["a"])`
  display: flex;
  text-decoration: none;
  padding: 0.7rem 0 0.7rem 1rem;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
`,gt=Te["a"].strong`
  flex: 1;
  align-self: center;
  margin-left: 20px;
  font-size: 1.1em;
  color: var(--light);
`,dt=Te["a"].strong`
  color: var(--light);
  margin-bottom: 3px;
  font-size: 1em;
`,Mt=Te["a"].span`
  background-color: whitesmoke;
  color: #111;
  border-radius: 5px;
  margin-right: 20px;
  font-size: 0.8em;
  padding: 0 0.5rem;
  align-self: center;
`,yt=Te["a"].a`
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
`;class pt extends i.a{constructor(...e){super(...e),this.state={active:""},this.changeRoute=(e=>{this.props.history.push(e)}),this.active=(e=>{this.setState({active:e},()=>{this.changeRoute("/")})}),this.onChange=(e=>{this.props.setFilter(e.target.value)}),this.onTag=(({target:{name:e}})=>{this.props.setTag(e),this.active(e)}),this.onGenre=(({target:{name:e}})=>{this.props.setGenre(e),this.active(e)})}render({sidebarVisible:e,qtd:t,innerRef:a,config:n},{active:o}){return Object(i.c)(st,lt({visible:e,innerRef:a},n),Object(i.c)(ut,{to:"/recent"},Object(i.c)(Ce,{size:20,src:nt.a}),Object(i.c)(gt,null,"Recent Played")),Object(i.c)(ut,{to:"/playlist"},Object(i.c)(Ce,{size:20,src:at.a}),Object(i.c)(gt,null,"Playlist"),Object(i.c)(Mt,null,t)),Object(i.c)(ct,{horizontal:!0},Object(i.c)(Ce,{size:20,src:rt.a}),Object(i.c)(et,{options:_e,onChange:this.onChange})),Object(i.c)(ct,null,Object(i.c)(dt,null,"Popular Tags"),Ve.map((e,t)=>Object(i.c)(yt,{key:t,name:e.value,active:o===e.value,onClick:this.onTag},e.label))),Object(i.c)(ct,null,Object(i.c)(dt,null,"Music Genres"),Xe.map((e,t)=>Object(i.c)(yt,{key:t,name:e.value,active:o===e.value,onClick:this.onGenre},e.label))))}}const jt=({root:{sidebarVisible:e},playlist:{qtd:t}})=>({sidebarVisible:e,qtd:t}),Nt={setFilter:de,setGenre:ue,setTag:ge};var ht=Object(ve.a)(Object(n.b)(jt,Nt)(pt));function Lt(){return(Lt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}class It extends i.a{constructor(...e){super(...e),this.startX=0,this.diffX=0,this.state={open:!1},this.handleTouchEnd=(()=>{this.diffX>.3*window.innerWidth&&(this.toggleDrawer(),this.diffX=0)}),this.handleTouchStart=(e=>{this.startX=e.targetTouches[0].clientX}),this.handleTouchMove=(e=>{this.diffX=Math.abs(e.targetTouches[0].clientX-this.startX)}),this.toggleDrawer=(()=>{this.setState(e=>({open:!e.open}))})}componentDidUpdate(e){e.sidebarVisible!==this.props.sidebarVisible&&this.toggleDrawer()}render(){const e={onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,className:this.state.open?"active":""};return Object(i.c)("aside",null,Object(i.c)(ht,{config:e}),Object(i.c)(bt,Lt({onClick:this.toggleDrawer},e)))}}const bt=Te["a"].div`
  transition: background-color 300ms ease;
  display: var(--overlay);
  position: fixed;
  height: 100%;
  width: 20px;
  z-index: 5;
  left: 0px;
  top: 0px;

  &.active {
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 50;
    width: 100%;
  }
`,Dt=({root:{sidebarVisible:e}})=>({sidebarVisible:e});var xt=Object(n.b)(Dt)(It),Tt=a(49),Ot=a.n(Tt),mt=a(50),vt=a.n(mt),At=a(51),St=a.n(At),wt=a(52),zt=a.n(wt),ft=a(53),Ct=a.n(ft);const Et=Te["a"].div`
  display: flex;
  justify-content: center;
  background: var(--primary);
`,kt=({isPlaying:e,playNext:t,playPrev:a,toggleLoop:n,toggleShuffle:o,shuffle:r,loading:l,toggle:s,loop:c})=>Object(i.c)(Et,null,Object(i.c)(ke,{noMobile:!0,onClick:o},Object(i.c)(Ee,{size:20,active:r},Object(i.c)("path",{d:"M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"}))),Object(i.c)(ke,{noMobile:!0,onClick:a},Object(i.c)(Ce,{src:St.a,size:40})),Object(i.c)(ke,{onClick:s},l?Object(i.c)(Ce,{src:Ot.a,size:40}):Object(i.c)(Ce,{src:e?Ct.a:vt.a,size:40})),Object(i.c)(ke,{noMobile:!0,onClick:t},Object(i.c)(Ce,{src:zt.a,size:40})),Object(i.c)(ke,{noMobile:!0,onClick:n},Object(i.c)(Ee,{size:20,active:c},Object(i.c)("path",{d:"M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"})))),Pt=({player:{isPlaying:e,loading:t,loop:a,shuffle:i}})=>({isPlaying:e,loading:t,loop:a,shuffle:i}),Yt={playNext:se,playPrev:ce,toggleShuffle:te};var Qt=Object(n.b)(Pt,Yt)(kt);var Ut=Te["a"].input.attrs({type:"range",value:"0"})`
  appearance: none;
  margin: 0.5rem 0;
  outline: none;
  width: 100%;
  height: 6px;
  align-self: center;
  background-color: var(--rangerTrack);
  background-image: linear-gradient(var(--info), var(--info)),
    linear-gradient(var(--textGray), var(--textGray));
  background-size: ${e=>e.full?"100%":"0%"};
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
`,Zt=a(54),Ht=a.n(Zt),Rt=a(55),Gt=a.n(Rt);function Bt(){return(Bt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function Wt(e,t){if(null==e)return{};var a,i,n=_t(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function _t(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}const Vt=Te["a"].div`
  padding: 0 0.5rem;
  display: flex;
  width: 10rem;
  /* align-items: center; */

  @media screen and (max-width: 600px) {
    display: none;
  }
`,Xt=e=>{let{toggleMute:t,muted:a}=e,n=Wt(e,["toggleMute","muted"]);return Object(i.c)(Vt,null,Object(i.c)(ke,{onClick:t},Object(i.c)(Ce,{src:a?Ht.a:Gt.a,size:20})),Object(i.c)(Ut,Bt({full:!0,step:"0.05",value:"1",max:"1"},n)))},Jt=({player:{muted:e}})=>({muted:e});var Ft=Object(n.b)(Jt)(Xt);function $t(){return($t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}function qt(e,t){if(null==e)return{};var a,i,n=Kt(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function Kt(e,t){if(null==e)return{};var a,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)a=o[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}const ea=Te["a"].div`
  flex: 1;
  display: flex;
  padding: 0 0.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`,ta=Te["a"].div`
  display: flex;
  justify-content: space-between;
`;var aa=e=>{let{title:t,duration:a}=e,n=qt(e,["title","duration"]);return Object(i.c)(ea,null,Object(i.c)(ta,null,Object(i.c)("span",null,t),Object(i.c)("span",null,a)),Object(i.c)(Ut,$t({step:"0.1"},n)))};const ia=Te["a"].div`
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
`;class na extends i.a{constructor(...e){super(...e),this.buffer=0,this.keyboardKey=(({code:e})=>{const{playPrev:t,playNext:a}=this.props;if("MediaPlayPause"===e)this.togglePlay();else if("MediaTrackNext"===e)a();else{if("MediaTrackPrevious"!==e)return;t()}}),this.onLoadedMetadata=(()=>{this.props.loadedMetadata(),this.audio.play()}),this.toPercentage=((e,t)=>e/t*100),this.onTimeUpdate=(()=>window.requestAnimationFrame(()=>{const e=this.toPercentage(this.audio.currentTime,this.audio.duration);this.buffer||this.onProgress(),this.timer.style.backgroundSize=`${e}%, ${this.buffer}%`,this.timer.value=e||0})),this.onLoadStart=(()=>{this.buffer=0,this.props.onLoadStart()}),this.onProgress=(()=>{this.audio.duration>0&&this.audio.buffered.length&&(this.buffer=this.toPercentage(this.audio.buffered.end(this.audio.buffered.length-1),this.audio.duration))}),this.togglePlay=(()=>{this.audio.paused?this.audio.play():this.audio.pause()}),this.toggleMute=(()=>{const e=!this.audio.muted;this.props.toggleMute(e),this.audio.muted=e}),this.toggleLoop=(()=>{const e=!this.audio.loop;this.props.toggleLoop(e),this.audio.loop=e}),this.timerChange=(()=>{if(this.props.audioUrl){const e=this.audio.duration*(this.timer.value/100);this.audio.currentTime=e}}),this.volumeChange=(()=>{const e=this.volume.value;this.volume.style.backgroundSize=`${100*e}%`,this.audio.volume=e}),this.onMouseDown=(()=>{this.audio.pause()}),this.onMouseUP=(()=>{this.props.audioUrl&&this.audio.play()}),this.audioRef=(e=>{this.audio=e}),this.timerRef=(e=>{this.timer=e}),this.volumeRef=(e=>{this.volume=e})}componentDidMount(){const{playNext:e,playPrev:t}=this.props;"mediaSession"in navigator?(navigator.mediaSession.playbackState="paused",navigator.mediaSession.setActionHandler("previoustrack",t),navigator.mediaSession.setActionHandler("play",this.togglePlay),navigator.mediaSession.setActionHandler("pause",this.togglePlay),navigator.mediaSession.setActionHandler("nexttrack",e)):window.addEventListener("keyup",this.keyboardKey,!1)}componentWillUnmount(){window.removeEventListener("keyup",this.keyboardKey,!1)}componentWillReceiveProps(e){if("mediaSession"in navigator){const{title:t,user:a,artworkOriginal:i}=e.song;navigator.mediaSession.metadata=new MediaMetadata({title:t,artist:a,artwork:[{src:i.replace("large","t500x500"),sizes:"500x500",type:"image/jpg"}]})}}render({audioUrl:e,playNext:t,onPause:a,onPlay:n,song:o}){return Object(i.c)(ia,{visible:null!==e},Object(i.c)(Qt,{toggle:this.togglePlay,toggleLoop:this.toggleLoop}),Object(i.c)(aa,{title:o?o.title:"Title",duration:o?o.duration:"00:00",innerRef:this.timerRef,onChange:this.timerChange,onTouchStart:this.onMouseDown,onTouchEnd:this.onMouseUP,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUP}),Object(i.c)(Ft,{innerRef:this.volumeRef,onChange:this.volumeChange,toggleMute:this.toggleMute}),Object(i.c)("audio",{crossOrigin:"anonymous",onProgress:this.onProgress,onTimeUpdate:this.onTimeUpdate,onLoadedMetadata:this.onLoadedMetadata,onLoadStart:this.onLoadStart,onEnded:t,onPause:a,onPlay:n,src:e,ref:this.audioRef}))}}const oa=({player:{song:e,audioUrl:t}})=>({audioUrl:t,song:e}),ra={onPlay:q,onPause:K,playPrev:ce,playNext:se,onLoadStart:$,loadedMetadata:ae,toggleMute:ie,toggleLoop:ee};var la=Object(n.b)(oa,ra)(na),sa=a(56);const ca=Te["a"].div`
  margin: 0 auto;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 0.2rem solid #dedede;
  border-top-color: #444;
  animation: ${Te["b"]`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`} 1s infinite linear;
`,ua=Te["a"].button`
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
`;class ga extends i.a{componentDidMount(){this.observer=new IntersectionObserver(this.props.loadMore),this.observer.observe(this.target)}componentWillUnmount(){this.observer.unobserve(this.target)}render({loadMore:e,isLoading:t}){return Object(i.c)(ua,{onClick:e,innerRef:e=>this.target=e},t?Object(i.c)(ca,null):Object(i.c)("strong",null,"Load More..."))}}var da=ga,Ma=a(57),ya=a.n(Ma),pa=a(58),ja=a.n(pa),Na=a(59),ha=a.n(Na),La=a(60),Ia=a.n(La);const ba=Object(Te["a"])(Ce)`
  opacity: 0;
  margin: auto;
  display: block;
`,Da=Te["a"].img`
  transform: translateX(115%);
  transition: transform 200ms;
  will-change: transform;
  position: absolute;
  z-index: 10;
  right: 2px;
  top: 2px;
`,xa=Te["a"].div`
  background: var(--primary);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  padding: 6px;
  display: flex;

  &.active,
  &:hover {
    #action {
      transform: translateX(0);
    }
    #play {
      opacity: 1;
    }
  }

  @media screen and (min-width: 500px) {
    border-radius: 4px;
  }
`,Ta=Te["a"].div`
  background-size: cover;
  background-position: center;
  display: flex;
  width: 67px;
  height: 67px;
`,Oa=Te["a"].div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  overflow: hidden;
  flex: 1;
`,ma=Te["a"].p`
  color: var(--textGray);
  font-size: 0.8rem;
`,va=Te["a"].p`
  color: var(--secondary);
  font-size: 0.9rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`,Aa=Te["a"].div`
  display: flex;
  align-items: center;
  margin-top: auto;
`,Sa=Te["a"].span`
  flex: ${e=>e.flex?1:0};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  color: var(--textGray);

  &:not(:first-child) {
    font-size: 0.8rem;
    margin-left: 0.2rem;
  }
`,wa=Te["a"].div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;

  @media screen and (min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, 290px);
    grid-gap: 15px;
  }
`,za=e=>{const t=e?ha.a:Ia.a,a=e?"Remove from Playlist":"Add to Playlist";return({song:e,play:n,playlistAction:o,active:r})=>Object(i.c)(xa,{onClick:n,className:r?"active":""},Object(i.c)(Da,{onClick:o,title:a,src:t,id:"action",size:24}),Object(i.c)(Ta,{style:{background:`url(${e.artwork})`}},Object(i.c)(ba,{src:ya.a,id:"play",size:40})),Object(i.c)(Oa,null,Object(i.c)(ma,null,e.user),Object(i.c)(va,{title:e.title},e.title),Object(i.c)(Aa,null,Object(i.c)(Sa,{flex:!0},e.duration),Object(i.c)(Ce,{src:ja.a,size:12}),Object(i.c)(Sa,{title:`${e.likesCount} likes`},e.likesCountMin))))},fa=Te["a"].div`
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow-y: scroll;
  transform: translateZ(0);

  @media screen and (min-width: 500px) {
    padding: 15px;
  }
`,Ca=({InnerComponent:e,infinite:t,fromPlaylist:a})=>{const n=za(a);return class extends i.a{constructor(...e){super(...e),this.playSong=(e=>()=>{this.props.playSong(e,this.props.location.pathname)}),this.playlistAction=(e=>t=>{t||(t=window.event),t.stopPropagation&&t.stopPropagation(),this.props.playlistAction(e)})}componentDidMount(){const{onMounted:e,ready:t}=this.props;e&&t&&e()}render({loadMore:a,playlist:o,loading:r,active:l,ready:s,location:c}){return"/"===c.pathname||s?Object(i.c)(fa,null,e&&Object(i.c)(e,null),Object(i.c)(wa,null,o.map((e,t)=>Object(i.c)(n,{song:e,active:l===e.id,playlistAction:this.playlistAction(e),play:this.playSong(t),key:e.id}))),t&&Object(i.c)(da,{isLoading:r,loadMore:a})):Object(i.c)(sa.a,{to:"/"})}}},Ea=Ca({infinite:!0}),ka=({player:{active:e},playlist:{playlist:t,loading:a}})=>({playlist:t,active:e,loading:a}),Pa={loadMore:Me,playSong:re,playlistAction:je};var Ya=Object(n.b)(ka,Pa)(Ea);const Qa=Ca({}),Ua=({playlist:{recent:e},player:{active:t},root:{ready:a}})=>({playlist:e,active:t,ready:a}),Za={playSong:re,playlistAction:je,onMounted:he};var Ha=Object(n.b)(Ua,Za)(Qa);const Ra=Ca({infinite:!0}),Ga=({playlist:{search:e,loading:t},player:{active:a},root:{ready:i}})=>({playlist:e,active:a,loading:t,ready:i}),Ba={loadMore:pe,playSong:re,playlistAction:je};var Wa=Object(n.b)(Ga,Ba)(Ra);const _a=Ca({fromPlaylist:!0}),Va=({playlist:{user:e},player:{active:t},root:{ready:a}})=>({playlist:e,active:t,ready:a}),Xa={playSong:re,playlistAction:Ne};var Ja=Object(n.b)(Va,Xa)(_a);const Fa=Te["a"].div`
  height: 100vh;
  max-width: 100vw;
  padding-top: 50px;
  overflow: hidden;
  background: linear-gradient(to right bottom, var(--light2), var(--primary));
  transition: all 250ms ease;
  margin-left: var(--sidebarSpace);
`;var $a=()=>Object(i.c)(me.a,{basename:"/YASCC"},Object(i.c)(Fa,null,Object(i.c)(xt,null),Object(i.c)(Be,null),Object(i.c)(la,null),Object(i.c)(Oe.a,{exact:!0,path:"/",component:Ya}),Object(i.c)(Oe.a,{path:"/search",component:Wa}),Object(i.c)(Oe.a,{path:"/recent",component:Ha}),Object(i.c)(Oe.a,{path:"/playlist",component:Ja})));Object(i.e)(Object(i.c)(n.a,{store:Z},Object(i.c)($a,null)),document.body),window.addEventListener("online",()=>{Z.dispatch(X())}),window.addEventListener("offline",()=>{Z.dispatch(J())}),window.addEventListener("load",()=>{Z.dispatch(Le()).then(()=>be()),console.log("%c hello there...","font-size: 30px; color: red")})},41:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTAgMWgxNnYzSDBWMXptMCA1aDE2djNIMFY2em0wIDVoMTZ2M0gwdi0zeiIvPjwvc3ZnPg=="},42:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgNDM4LjU0OSA0MzguNTQ5Ij48cGF0aCBkPSJNNDA5LjEzMiAxMTQuNTczYy0xOS42MDgtMzMuNTk2LTQ2LjIwNS02MC4xOTQtNzkuNzk4LTc5LjgtMzMuNTk4LTE5LjYwNy03MC4yNzctMjkuNDA4LTExMC4wNjMtMjkuNDA4LTM5Ljc4MSAwLTc2LjQ3MiA5LjgwNC0xMTAuMDYzIDI5LjQwOC0zMy41OTYgMTkuNjA1LTYwLjE5MiA0Ni4yMDQtNzkuOCA3OS44QzkuODAzIDE0OC4xNjggMCAxODQuODU0IDAgMjI0LjYzYzAgNDcuNzggMTMuOTQgOTAuNzQ1IDQxLjgyNyAxMjguOTA2IDI3Ljg4NCAzOC4xNjQgNjMuOTA2IDY0LjU3MiAxMDguMDYzIDc5LjIyNyA1LjE0Ljk1NCA4Ljk0NS4yODMgMTEuNDE5LTEuOTk2IDIuNDc1LTIuMjgyIDMuNzExLTUuMTQgMy43MTEtOC41NjIgMC0uNTcxLS4wNDktNS43MDgtLjE0NC0xNS40MTdhMjU0OS44MSAyNTQ5LjgxIDAgMCAxLS4xNDQtMjUuNDA2bC02LjU2NyAxLjEzNmMtNC4xODcuNzY3LTkuNDY5IDEuMDkyLTE1Ljg0NiAxLTYuMzc0LS4wODktMTIuOTkxLS43NTctMTkuODQyLTEuOTk5LTYuODU0LTEuMjMxLTEzLjIyOS00LjA4Ni0xOS4xMy04LjU1OS01Ljg5OC00LjQ3My0xMC4wODUtMTAuMzI4LTEyLjU2LTE3LjU1NmwtMi44NTUtNi41N2MtMS45MDMtNC4zNzQtNC44OTktOS4yMzMtOC45OTItMTQuNTU5LTQuMDkzLTUuMzMxLTguMjMyLTguOTQ1LTEyLjQxOS0xMC44NDhsLTEuOTk5LTEuNDMxYy0xLjMzMi0uOTUxLTIuNTY4LTIuMDk4LTMuNzExLTMuNDI5LTEuMTQyLTEuMzMxLTEuOTk3LTIuNjYzLTIuNTY4LTMuOTk3LS41NzItMS4zMzUtLjA5OC0yLjQzIDEuNDI3LTMuMjg5IDEuNTI1LS44NTkgNC4yODEtMS4yNzYgOC4yOC0xLjI3Nmw1LjcwOC44NTNjMy44MDcuNzYzIDguNTE2IDMuMDQyIDE0LjEzMyA2Ljg1MSA1LjYxNCAzLjgwNiAxMC4yMjkgOC43NTQgMTMuODQ2IDE0Ljg0MiA0LjM4IDcuODA2IDkuNjU3IDEzLjc1NCAxNS44NDYgMTcuODQ3IDYuMTg0IDQuMDkzIDEyLjQxOSA2LjEzNiAxOC42OTkgNi4xMzYgNi4yOCAwIDExLjcwNC0uNDc2IDE2LjI3NC0xLjQyMyA0LjU2NS0uOTUyIDguODQ4LTIuMzgzIDEyLjg0Ny00LjI4NSAxLjcxMy0xMi43NTggNi4zNzctMjIuNTU5IDEzLjk4OC0yOS40MS0xMC44NDgtMS4xNC0yMC42MDEtMi44NTctMjkuMjY0LTUuMTQtOC42NTgtMi4yODYtMTcuNjA1LTUuOTk2LTI2LjgzNS0xMS4xNC05LjIzNS01LjEzNy0xNi44OTYtMTEuNTE2LTIyLjk4NS0xOS4xMjYtNi4wOS03LjYxNC0xMS4wODgtMTcuNjEtMTQuOTg3LTI5Ljk3OS0zLjkwMS0xMi4zNzQtNS44NTItMjYuNjQ4LTUuODUyLTQyLjgyNiAwLTIzLjAzNSA3LjUyLTQyLjYzNyAyMi41NTctNTguODE3LTcuMDQ0LTE3LjMxOC02LjM3OS0zNi43MzIgMS45OTctNTguMjQgNS41Mi0xLjcxNSAxMy43MDYtLjQyOCAyNC41NTQgMy44NTMgMTAuODUgNC4yODMgMTguNzk0IDcuOTUyIDIzLjg0IDEwLjk5NCA1LjA0NiAzLjA0MSA5LjA4OSA1LjYxOCAxMi4xMzUgNy43MDggMTcuNzA1LTQuOTQ3IDM1Ljk3Ni03LjQyMSA1NC44MTgtNy40MjFzMzcuMTE3IDIuNDc0IDU0LjgyMyA3LjQyMWwxMC44NDktNi44NDljNy40MTktNC41NyAxNi4xOC04Ljc1OCAyNi4yNjItMTIuNTY1IDEwLjA4OC0zLjgwNSAxNy44MDItNC44NTMgMjMuMTM0LTMuMTM4IDguNTYyIDIxLjUwOSA5LjMyNSA0MC45MjIgMi4yNzkgNTguMjQgMTUuMDM2IDE2LjE4IDIyLjU1OSAzNS43ODcgMjIuNTU5IDU4LjgxNyAwIDE2LjE3OC0xLjk1OCAzMC40OTctNS44NTMgNDIuOTY2LTMuOSAxMi40NzEtOC45NDEgMjIuNDU3LTE1LjEyNSAyOS45NzktNi4xOTEgNy41MjEtMTMuOTAxIDEzLjg1LTIzLjEzMSAxOC45ODYtOS4yMzIgNS4xNC0xOC4xODIgOC44NS0yNi44NCAxMS4xMzYtOC42NjIgMi4yODYtMTguNDE1IDQuMDA0LTI5LjI2MyA1LjE0NiA5Ljg5NCA4LjU2MiAxNC44NDIgMjIuMDc3IDE0Ljg0MiA0MC41Mzl2NjAuMjM3YzAgMy40MjIgMS4xOSA2LjI3OSAzLjU3MiA4LjU2MiAyLjM3OSAyLjI3OSA2LjEzNiAyLjk1IDExLjI3NiAxLjk5NSA0NC4xNjMtMTQuNjUzIDgwLjE4NS00MS4wNjIgMTA4LjA2OC03OS4yMjYgMjcuODgtMzguMTYxIDQxLjgyNS04MS4xMjYgNDEuODI1LTEyOC45MDYtLjAxLTM5Ljc3MS05LjgxOC03Ni40NTQtMjkuNDE0LTExMC4wNDl6IiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBmaWxsPSIjNDQ0Ii8+PC9zdmc+"},45:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDQ5MC42NTYgNDkwLjY1NiI+PHBhdGggZD0iTTQ4Ny41MzYgMTIwLjQ0NWMtNC4xNi00LjE2LTEwLjkyMy00LjE2LTE1LjA4MyAwTDI0NS4zMTcgMzQ3LjU4MSAxOC4yMDMgMTIwLjQ0NWMtNC4xNi00LjE2LTEwLjkyMy00LjE2LTE1LjA4MyAwcy00LjE2IDEwLjkyMyAwIDE1LjA4M2wyMzQuNjY3IDIzNC42NjdjMi4wNjkgMi4wOTEgNC44IDMuMTM2IDcuNTMxIDMuMTM2czUuNDYxLTEuMDQ1IDcuNTUyLTMuMTE1bDIzNC42NjctMjM0LjY2N2ExMC43IDEwLjcgMCAwIDAtLjAwMS0xNS4xMDR6IiBmaWxsPSIjZjVmNWY1Ii8+PC9zdmc+"},46:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNC4yNjkgMjQuMjY5IiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiI+PGcgZmlsbD0iI2UwZTBlMCI+PHBhdGggZD0iTTcuMDI4IDEuMjQydjMuMDAzYTkuNDcyIDkuNDcyIDAgMCAxIDEuMzU4LS4xMDljMS43MjggMCAzLjM0NC40NyA0LjczOCAxLjI3OWgxMS4xNDVWMS4yNDJINy4wMjh6bTEwLjUxIDkuOTY2aDYuNzNWNy4wMzNoLTkuMDcyYTkuNDUgOS40NSAwIDAgMSAyLjM0MiA0LjE3NXptLjMxOCAyLjM5OWE5LjQ4IDkuNDggMCAwIDEtLjY3OCAzLjUxaDcuMDl2LTQuMTc0aC02LjQ0NWMuMDE1LjIyLjAzMy40NC4wMzMuNjY0em0tOC40ODIgOS40MjFoMTQuODk1di00LjE3NEgxNi4yN2E5LjQ3IDkuNDcgMCAwIDEtNi44OTYgNC4xNzR6Ii8+PHBhdGggZD0iTTE2Ljc3IDEzLjQ0N2E4LjM4MyA4LjM4MyAwIDAgMC04LjM4NC04LjM4MyA4LjM4NSA4LjM4NSAwIDEgMCAwIDE2Ljc2OCA4LjM4MyA4LjM4MyAwIDAgMCA4LjM4NC04LjM4NXpNNS40MzkgMTguMzE1Yy0uMjEtLjg0OS41MTItMS43NjQgMS42MTctMi4wMzguNS0uMTIzLjk4Ni0uMSAxLjM5NS4wNDZWNi45NDJzLjA1Ni0uNDEyLjU5OS0uNDc5YzAgMC0uMDA4LjQ3MSAyLjg0MSAyLjQ2IDEuNDU5IDEuMTI1IDEuNDU0IDIuNjYxIDEuNDU0IDIuNjYxLTEuODk3LTIuOTc3LTMuODM3LTIuODcxLTMuODM3LTIuODcxbC0uMDI1IDguOTA2SDkuNDhjLS4wMDUuNzUxLS42ODMgMS40ODYtMS42NTUgMS43MjktMS4xMDUuMjc3LTIuMjYzLS4yNDktMi4zODYtMS4wMzN6Ii8+PC9nPjwvc3ZnPg=="},47:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiNlMGUwZTAiIGQ9Ik0xOSA4bC00IDRoM2MwIDMuMzEtMi42OSA2LTYgNi0xLjAxIDAtMS45Ny0uMjUtMi44LS43bC0xLjQ2IDEuNDZDOC45NyAxOS41NCAxMC40MyAyMCAxMiAyMGM0LjQyIDAgOC0zLjU4IDgtOGgzbC00LTR6TTYgMTJjMC0zLjMxIDIuNjktNiA2LTYgMS4wMSAwIDEuOTcuMjUgMi44LjdsMS40Ni0xLjQ2QzE1LjAzIDQuNDYgMTMuNTcgNCAxMiA0Yy00LjQyIDAtOCAzLjU4LTggOEgxbDQgNCA0LTRINnoiLz4KICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz4KPC9zdmc+Cg=="},48:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgOTcxLjk4NiA5NzEuOTg2Ij48cGF0aCBkPSJNMzcwLjIxNiA0NTkuM2MxMC4yIDExLjEgMTUuOCAyNS42IDE1LjggNDAuNnY0NDJjMCAyNi42MDEgMzIuMSA0MC4xMDEgNTEuMSAyMS40bDEyMy4zLTE0MS4zYzE2LjUtMTkuOCAyNS42LTI5LjYwMSAyNS42LTQ5LjJWNTAwYzAtMTUgNS43LTI5LjUgMTUuOC00MC42MDFMOTU1LjYxNSA3NS41YzI2LjUtMjguOCA2LjEwMS03NS41LTMzLjEtNzUuNWgtODczYy0zOS4yIDAtNTkuNyA0Ni42LTMzLjEgNzUuNWwzNTMuODAxIDM4My44eiIgZmlsbD0iI2UwZTBlMCIvPjwvc3ZnPg=="},49:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PHBhdGggb3BhY2l0eT0iLjIiIGQ9Ik0yMC4yMDEgNS4xNjljLTguMjU0IDAtMTQuOTQ2IDYuNjkyLTE0Ljk0NiAxNC45NDYgMCA4LjI1NSA2LjY5MiAxNC45NDYgMTQuOTQ2IDE0Ljk0NnMxNC45NDYtNi42OTEgMTQuOTQ2LTE0Ljk0NmMtLjAwMS04LjI1NC02LjY5Mi0xNC45NDYtMTQuOTQ2LTE0Ljk0NnptMCAyNi41OGMtNi40MjUgMC0xMS42MzQtNS4yMDgtMTEuNjM0LTExLjYzNCAwLTYuNDI1IDUuMjA5LTExLjYzNCAxMS42MzQtMTEuNjM0IDYuNDI1IDAgMTEuNjMzIDUuMjA5IDExLjYzMyAxMS42MzQgMCA2LjQyNi01LjIwOCAxMS42MzQtMTEuNjMzIDExLjYzNHoiLz48cGF0aCBkPSJNMjYuMDEzIDEwLjA0N2wxLjY1NC0yLjg2NmExNC44NTUgMTQuODU1IDAgMCAwLTcuNDY2LTIuMDEydjMuMzEyYzIuMTE5IDAgNC4xLjU3NiA1LjgxMiAxLjU2NnoiPjxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZVR5cGU9InhtbCIgYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgMjAgMjAiIHRvPSIzNjAgMjAgMjAiIGR1cj0iMC41cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiLz48L3BhdGg+PC9zdmc+"},50:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTggNXYxNGwxMS03eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="},51:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTYgNmgydjEySDZ6bTMuNSA2bDguNSA2VjZ6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=="},52:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTYgMThsOC41LTZMNiA2djEyek0xNiA2djEyaDJWNmgtMnoiLz48cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+"},53:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTYgMTloNFY1SDZ2MTR6bTgtMTR2MTRoNFY1aC00eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="},54:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTE2LjUgMTJBNC41IDQuNSAwIDAgMCAxNCA3Ljk3djIuMjFsMi40NSAyLjQ1Yy4wMy0uMi4wNS0uNDEuMDUtLjYzem0yLjUgMGMwIC45NC0uMiAxLjgyLS41NCAyLjY0bDEuNTEgMS41MUE4Ljc5NiA4Ljc5NiAwIDAgMCAyMSAxMmMwLTQuMjgtMi45OS03Ljg2LTctOC43N3YyLjA2YzIuODkuODYgNSAzLjU0IDUgNi43MXpNNC4yNyAzTDMgNC4yNyA3LjczIDlIM3Y2aDRsNSA1di02LjczbDQuMjUgNC4yNWMtLjY3LjUyLTEuNDIuOTMtMi4yNSAxLjE4djIuMDZhOC45OSA4Ljk5IDAgMCAwIDMuNjktMS44MUwxOS43MyAyMSAyMSAxOS43M2wtOS05TDQuMjcgM3pNMTIgNEw5LjkxIDYuMDkgMTIgOC4xOFY0eiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="},55:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTMgOXY2aDRsNSA1VjRMNyA5SDN6bTEzLjUgM0E0LjUgNC41IDAgMCAwIDE0IDcuOTd2OC4wNWMxLjQ4LS43MyAyLjUtMi4yNSAyLjUtNC4wMnpNMTQgMy4yM3YyLjA2YzIuODkuODYgNSAzLjU0IDUgNi43MXMtMi4xMSA1Ljg1LTUgNi43MXYyLjA2YzQuMDEtLjkxIDctNC40OSA3LTguNzdzLTIuOTktNy44Ni03LTguNzd6Ii8+PC9zdmc+"},57:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgMTI0LjUxMiAxMjQuNTEyIj48cGF0aCBkPSJNMTEzLjk1NiA1Ny4wMDZsLTk3LjQtNTYuMmMtNC0yLjMtOSAuNi05IDUuMnYxMTIuNWMwIDQuNiA1IDcuNSA5IDUuMmw5Ny40LTU2LjJjNC0yLjQwMSA0LTguMiAwLTEwLjV6IiBmaWxsPSIjOTFEQzVBIi8+PC9zdmc+"},58:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzk5OSIgZD0iTTEyIDIxLjM1bC0xLjQ1LTEuMzJDNS40IDE1LjM2IDIgMTIuMjggMiA4LjUgMiA1LjQyIDQuNDIgMyA3LjUgM2MxLjc0IDAgMy40MS44MSA0LjUgMi4wOUMxMy4wOSAzLjgxIDE0Ljc2IDMgMTYuNSAzIDE5LjU4IDMgMjIgNS40MiAyMiA4LjVjMCAzLjc4LTMuNCA2Ljg2LTguNTUgMTEuNTRMMTIgMjEuMzV6Ii8+PC9zdmc+"},59:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTE1IDE2aDR2MmgtNHptMC04aDd2MmgtN3ptMCA0aDZ2MmgtNnpNMyAxOGMwIDEuMS45IDIgMiAyaDZjMS4xIDAgMi0uOSAyLTJWOEgzdjEwek0xNCA1aC0zbC0xLTFINkw1IDVIMnYyaDEyeiIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4="},60:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI0IiB3aWR0aD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iIzQ0NCIgZD0iTTE0IDEwSDJ2MmgxMnYtMnptMC00SDJ2MmgxMlY2em00IDh2LTRoLTJ2NGgtNHYyaDR2NGgydi00aDR2LTJoLTR6TTIgMTZoOHYtMkgydjJ6Ii8+PC9zdmc+"}},[22]);
//# sourceMappingURL=main.4aec.js.map