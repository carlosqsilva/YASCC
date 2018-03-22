webpackJsonp([1],[,,,,,function(e,t,a){"use strict";var n=a(28);const i=new(a(108).a)(35);t.c=(()=>({type:n.g}));t.b=(()=>({type:n.f}));t.q=(()=>({type:n.o}));t.h=(()=>({type:n.i}));t.g=(()=>({type:n.h}));const o=(e,t)=>a=>{i.audioStream(t.stream).then(i=>a({type:n.m,songIndex:e,song:t,audioUrl:i}))};t.k=((e,t)=>(a,i)=>{const{playlist:l,location:s}=i().playlist;let r;switch(t){case"/":r=i().root.playlist;break;case"/search":r=i().search.results;break;case"/playlist":r=i().userPlaylist.playlist;break;default:return[]}a(o(e,r[e])),l.length===r.length&&s===t||a({type:n.a,currentPlaylist:r,location:t})});t.i=(()=>(e,t)=>{const{playlist:a,songIndex:n}=t().playlist,i=n!==a.length-1?n+1:0;e(o(i,a[i]))});t.j=(()=>(e,t)=>{const{playlist:a,songIndex:n}=t().playlist,i=0!==n?n-1:a.length-1;e(o(i,a[i]))});t.e=(e=>t=>(t({type:n.k}),i.load(e).then(e=>t({type:n.j,playlist:e}))));t.o=(e=>t=>{t({type:n.k}),i.setGenre(e).then(e=>t({type:n.j,playlist:e}))});t.p=(e=>t=>{t({type:n.k}),i.setTag(e).then(e=>t({type:n.j,playlist:e}))});t.n=(e=>t=>{t({type:n.k}),i.setFilter(e).then(e=>t({type:n.j,playlist:e}))});t.f=(()=>(e,t)=>{const{loadingPlaylist:a}=t().root;a||(e({type:n.l}),i.loadNext().then(t=>e({type:n.j,playlist:t})))});t.m=(e=>t=>{t({type:n.d}),i.search(e).then(e=>t({type:n.c,playlist:e}))});t.d=(()=>(e,t)=>{const{loadingSearch:a}=t().search;a||(e({type:n.e}),i.loadNext().then(t=>e({type:n.c,playlist:t})))});t.a=(e=>(t,a)=>{0===a().userPlaylist.playlist.filter(t=>t.id===e.id).length&&t({type:n.b,song:e})});t.l=(e=>(t,a)=>{let i=a().userPlaylist.playlist.filter(t=>t.id!==e.id);t({type:n.n,playlist:i})})},,,,,function(e,t,a){"use strict";var n=a(0),i=a(1);const o=i["a"].div`
  display: inline-flex;
  align-items: center;
  position: relative;
  align-self: center;

  &:hover {
    > span {
      opacity: 1;
    }
  }
`,l=i["a"].span`
  display: none;
  @media screen and (min-width: 500px) {
    opacity: 0;
    display: inline-block;
    pointer-events: none;
    background: #000;
    color: #fff;
    font-size: 0.8rem;
    padding: 5px 8px;
    border-radius: 6px;
    white-space: nowrap;
    position: absolute;
    top: 180%;
    left: 50%;
    transform: translateX(-85%);
    z-index: 999;

    &::after {
      content: "";
      position: absolute;
      bottom: 100%;
      right: 10%;
      margin-left: -5px;
      border-width: 5px;
      border-style: solid;
      border-color: transparent transparent black transparent;
    }
  }
`,s=i["a"].img.attrs({alt:"",width:e=>e.size,height:e=>e.size})`
  align-self: center;
`;t.a=s;t.b=(({children:e,tooltip:t})=>Object(n.c)(o,null,e,Object(n.c)(l,null,t))),t.c=s},,,,function(e,t,a){"use strict";var n=a(0),i=a(1),o=a(127),l=a(128);const s=i["a"].div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 65px;
  margin-bottom: 60px;
`;t.a=((e,t=!1,a=!1)=>{const i=Object(l.b)(a);return class extends n.a{constructor(...e){var t;return t=super(...e),this.playSong=(e=>{this.props.playSong(e,this.props.location.pathname)}),this.playlistAction=(e=>t=>{e||(e=window.event),e.stopPropagation&&e.stopPropagation(),this.props.playlistAction(t)}),t}render({loadMore:a,playlist:r,loading:c,active:p}){return Object(n.c)(s,null,e&&Object(n.c)(e,null),Object(n.c)(l.a,null,r.map((e,t)=>Object(n.c)(i,{song:e,index:t,active:p===e.id,playlistAction:this.playlistAction,play:this.playSong,key:e.id}))),t&&Object(n.c)(o.a,{isLoading:c,loadMore:a}))}}})},,,,,,,,,,,,,,function(e,t,a){"use strict";t.g="ONLINE";t.f="OFFLINE";t.o="TOGGLE_SIDEBAR";t.k="PLAYLIST_LOADING";t.l="PLAYLIST_LOADING_NEXT";t.j="PLAYLIST_LOADED";t.m="PLAY_SONG";t.i="ON_PLAY";t.h="ON_PAUSE";t.a="ACTIVE_PLAYLIST";t.b="ADD_TO_PLAYLIST";t.n="REMOVE_FROM_PLAYLIST";t.d="LOADING_SEARCH";t.e="LOADING_SEARCH_NEXT";t.c="LOADED_SEARCH"},,,,function(e,t,a){"use strict";var n=a(1);const i=n["a"].a`
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
`;t.a=i},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),i=a(2),o=a(73),l=a(86),s=a(135),r=a(136);const{persistor:c,store:p}=Object(o.a)();Object(n.e)(Object(n.c)(i.a,{store:p},Object(n.c)(r.a,{persistor:c},Object(n.c)(l.a,null))),document.body),Object(s.a)(),console.log("hello there...")},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";var n=a(9),i=a(74),o=a(81),l=a.n(o),s=a(84),r=a.n(s),c=a(85);const p={key:"root",storage:l.a,blacklist:["playlist","root","search"]},u=Object(i.a)(p,c.a);t.a=(()=>{let e=Object(n.d)(u,Object(n.a)(r.a));return{persistor:Object(i.b)(e),store:e}})},,,,,,,,,,,,function(e,t,a){"use strict";var n=a(28);const i={sidebarVisible:!1,loadingPlaylist:!0,isPlaying:!1,playlist:[],online:!0},o={playlist:[],songIndex:null,audioUrl:null,currentSong:null,isPlaying:!1,location:""},l={loadingSearch:!1,results:[]};t.a={root:(e=i,t)=>{switch(t.type){case n.o:return Object.assign({},e,{sidebarVisible:!e.sidebarVisible});case n.k:return Object.assign({},e,{loadingPlaylist:!0,playlist:[]});case n.l:return Object.assign({},e,{loadingPlaylist:!0});case n.j:return Object.assign({},e,{loadingPlaylist:!1,playlist:[...e.playlist,...t.playlist]});case n.g:return Object.assign({},e,{online:!0});case n.f:return Object.assign({},e,{online:!1});default:return e}},search:(e=l,t)=>{switch(t.type){case n.d:return Object.assign({},e,{loadingSearch:!0,results:[]});case n.e:return Object.assign({},e,{loadingSearch:!0});case n.c:return Object.assign({},e,{loadingSearch:!1,results:[...e.results,...t.playlist]});default:return e}},playlist:(e=o,t)=>{switch(t.type){case n.a:return Object.assign({},e,{playlist:t.currentPlaylist,location:t.location});case n.m:return Object.assign({},e,{songIndex:t.songIndex,audioUrl:t.audioUrl,currentSong:t.song});case n.i:return Object.assign({},e,{isPlaying:!0});case n.h:return Object.assign({},e,{isPlaying:!1});default:return e}},userPlaylist:(e={playlist:[]},t)=>{switch(t.type){case n.b:return{playlist:[...e.playlist,t.song]};case n.n:return{playlist:t.playlist};default:return e}}}},function(e,t,a){"use strict";var n=a(0),i=a(1),o=a(93),l=a(97),s=a(2),r=a(106),c=a(126),p=a(133),u=a(134),d=a(5);const h=i["a"].div`
  position: relative;
  min-height: 100vh;
  max-width: 100%;
  margin-top: 50px;
  padding: 10px;
  transition: all 250ms ease;

  @media screen and (min-width: 500px) {
    margin-left: 220px;
    padding: 15px;
  }
`;const g={loadPlaylist:d.e,isOnline:d.c,isOffline:d.b};t.a=Object(s.b)(null,g)(class extends n.a{componentDidMount(){this.props.loadPlaylist().then(()=>{const e=document.getElementById("loader");e&&setTimeout(()=>{e.classList.add("ready"),setTimeout(()=>{e.outerHTML=""},600)},1e3)}),window.addEventListener("online",this.props.isOnline),window.addEventListener("offline",this.props.isOffline)}render(){return Object(n.c)(l.a,null,Object(n.c)(h,null,Object(n.c)(r.c,null),Object(n.c)(o.a,{exact:!0,path:"/",component:c.a}),Object(n.c)(o.a,{path:"/search",component:p.a}),Object(n.c)(o.a,{path:"/playlist",component:u.a}),Object(n.c)(r.a,null),Object(n.c)(r.b,null)))}})},,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";var n=a(107),i=a(114),o=a(120);a.d(t,"b",function(){return o.a}),a.d(t,"c",function(){return i.a}),a.d(t,"a",function(){return n.a})},function(e,t,a){"use strict";var n=a(0),i=a(2),o=a(5),l=a(1),s=a(109),r=a(10),c=a(32),p=a(112),u=a.n(p),d=a(113),h=a.n(d);const g=l["a"].div`
  background: ${e=>e.online?"#fff":"#ef5350"};
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  display: flex;

  @media screen and (min-width: 500px) {
    padding-left: 220px;
  }

  &::after {
    box-shadow: inset 0px 4px 8px -3px rgba(17, 17, 17, 0.06);
    position: absolute;
    bottom: -5px;
    width: 100%;
    height: 5px;
    content: "";
  }
`,b={toggleSidebar:o.q};t.a=Object(i.b)(({root:e})=>({online:e.online}),b)(({toggleSidebar:e,online:t})=>Object(n.c)(g,{online:t},Object(n.c)(c.a,{link:!0,noDesktop:!0,onClick:e},Object(n.c)(r.c,{size:24,src:u.a})),Object(n.c)(s.a,null),Object(n.c)(c.a,{link:!0,noMobile:!0,href:"https://github.com/carlosqsilva/yascc",target:"_blank",rel:"noopener noreferrer"},Object(n.c)(r.c,{size:24,src:h.a}))))},function(e,t,a){"use strict";const n=(e,t)=>{let a=String(e);for(;a.length<t;)a=`0${a}`;return a},i=e=>{const t=parseInt(e/1e3,10);return`${n(Math.floor(t/60),2)}:${n(t%60,2)}`},o=e=>e?e.replace("–","-").split("-").pop():"",l=e=>{if(e<1e3)return e;if(!e)return 0;const t=e.toString(),a=t.length,n=a%3==0?3:a%3;return`${t.substring(0,n)}${a>=7?"M":"K"}`};t.a=class{constructor(e){this.key="client_id=JAgPhXap7XK0g8dUOtklbE7UnF05W8AH",this.tracks=`https://api.soundcloud.com/tracks?linked_partitioning=1&limit=${e}&${this.key}`,this.created_at=null,this.genre="genres=house",this.tag=null,this.next=""}load(){const e=[this.tracks,this.genre,this.tag,this.created_at].filter(e=>null!==e).join("&");return this.getSongs(e)}setGenre(e){return this.genre=`genres=${e}`,this.tag=null,this.load()}setTag(e){return this.tag=`tags=${e}`,this.genre=null,this.load()}setFilter(e){return e||(this.created_at=null),this.created_at=`created_at=${e}`.toLowerCase().split(" ").join("_"),this.load()}loadNext(){return this.getSongs(this.next)}audioStream(e){return Promise.resolve(`${e}?${this.key}`)}search(e){if(!e.trim())return Promise.resolve([]);const t=e.split(" ").filter(e=>e.length>0).join("%20");return this.getSongs(`${this.tracks}&q=${t}`)}getSongs(e){return fetch(e).then(e=>e.json()).then(e=>(this.next=e.next_href,e.collection.filter(e=>null!==e.artwork_url&&3e4!==e.duration).map(e=>({id:e.id,title:o(e.title),duration:i(e.duration),stream:e.stream_url,artwork:e.artwork_url,user:e.user.username,likesCount:e.likes_count,likesCountMin:l(e.likes_count)}))))}}},function(e,t,a){"use strict";var n=a(0),i=a(2),o=a(1),l=a(31),s=a(5);const r=o["a"].form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  flex: 1;
`,c=o["a"].input`
  background: #fafafa;
  color: rgba(0, 0, 0, 0.87);
  border-radius: 4px;
  appearance: none;
  border: none;
  outline: 0;
  font-size: 1rem;
  line-height: 2;
  padding: 0 1em;
  width: 100%;
`;const p={searchSongs:s.m};t.a=Object(i.b)(null,p)(Object(l.a)(class extends n.a{constructor(...e){var t;return t=super(...e),this.state={value:""},this.handleChange=(e=>{this.setState({value:e.target.value})}),this.handleSubmit=(e=>{e.preventDefault(),this.props.searchSongs(this.state.value),this.props.history.push("/search")}),t}render(){const{value:e}=this.state;return Object(n.c)(r,{onSubmit:this.handleSubmit},Object(n.c)(c,{placeholder:"Search...",value:e,onChange:this.handleChange}))}}))},,,function(e,t,a){e.exports=a.p+"static/media/menu.5096e131.svg"},function(e,t,a){e.exports=a.p+"static/media/github.26816b67.svg"},function(e,t,a){"use strict";var n=a(0),i=a(2),o=a(31),l=a(5),s=a(1),r=a(115),c=a(10),p=a(116),u=a(118),d=a.n(u),h=a(119),g=a.n(h);const b=s["a"].div`
  background: linear-gradient(to right, #232526, #414345);
  transition: all 250ms ease;
  position: fixed;
  bottom: 0px;
  left: 0px;
  top: 0px;
  width: 220px;
  z-index: 100;
  overflow-y: scroll;
  transform: ${e=>e.visible?"translateX(0)":"translateX(-100%)"};

  @media screen and (min-width: 500px) {
    transform: translateX(0);
  }
`,f=s["a"].div`
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
`,m=s["a"].div`
  display: flex;
  text-decoration: none;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: ${e=>e.horizontal?"row":"column"};
  padding: 0.7rem 0 0.7rem 1rem;
  color: rgba(255, 255, 255, 0.9);

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
`,v=m.extend`
  cursor: pointer;
`,y=s["a"].strong`
  flex: 1;
  align-self: center;
  margin-left: 20px;
  font-size: 1.1rem;
`,x=s["a"].strong`
  color: #fafafa;
  margin-bottom: 3px;
`,O=s["a"].span`
  background-color: whitesmoke;
  color: #111;
  border-radius: 5px;
  margin-right: 20px;
  font-size: 0.8rem;
  padding: 0 0.5rem;
  align-self: center;
`,j=s["a"].a`
  flex: 1;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  padding: 3px 0;
  transition: all 250ms ease;
  color: ${e=>e.active?"white":"#999"};

  &:hover {
    color: white;
  }
`;const k={setFilter:l.n,setGenre:l.o,setTag:l.p,toggleSidebar:l.q};t.a=Object(o.a)(Object(i.b)(({root:e,userPlaylist:t})=>({sidebarVisible:e.sidebarVisible,qtd:t.playlist.length}),k)(class extends n.a{constructor(...e){var t;return t=super(...e),this.state={activeItem:""},this.changeRoute=(e=>{this.props.location.pathname!==e&&this.props.history.push(e)}),this.active=(e=>{this.setState({activeItem:e}),this.changeRoute("/")}),this.onChange=(e=>{this.props.setFilter(e.target.value)}),this.onTag=(e=>{const{name:t}=e.target;this.props.setTag(t),this.active(t)}),this.onGenre=(e=>{const{name:t}=e.target;this.props.setGenre(t),this.active(t)}),t}render({sidebarVisible:e,qtd:t},{activeItem:a}){return Object(n.c)("div",null,Object(n.c)(b,{visible:e},Object(n.c)(v,{horizontal:!0,onClick:()=>this.changeRoute("/playlist")},Object(n.c)(c.a,{size:20,src:d.a}),Object(n.c)(y,null,"Playlist"),Object(n.c)(O,null,t)),Object(n.c)(m,{horizontal:!0},Object(n.c)(c.a,{size:20,src:g.a}),Object(n.c)(p.a,{options:r.a,onChange:this.onChange})),Object(n.c)(m,null,Object(n.c)(x,null,"Popular Tags"),r.c.map((e,t)=>Object(n.c)(j,{key:t,name:e.value,active:a===e.value,onClick:this.onTag},e.label))),Object(n.c)(m,null,Object(n.c)(x,null,"Music Genres"),r.b.map((e,t)=>Object(n.c)(j,{key:t,name:e.value,active:a===e.value,onClick:this.onGenre},e.label)))),e&&Object(n.c)(f,{onClick:this.props.toggleSidebar}))}}))},function(e,t,a){"use strict";t.a=[{value:"",label:"Default"},{value:"last_hour",label:"Last Hour"},{value:"last_week",label:"Last Week"},{value:"last_month",label:"Last Month"},{value:"last_year",label:"Last Year"}];t.c=[{value:"chill%20house",label:"#Chill"},{value:"deep%20house",label:"#Deep"},{value:"lofi%20hip%20hop",label:"#Lofi"},{value:"progressive%20house",label:"#Progressive"},{value:"relax",label:"#Relax"},{value:"study",label:"#Study"},{value:"sleep",label:"#Sleep"},{value:"tech%20house",label:"#Tech"},{value:"trance",label:"#Trance"},{value:"tropical%20house",label:"#Tropical"},{value:"workout",label:"#Workout"}];t.b=[{value:"alternative",label:"Alternative Rock"},{value:"ambient",label:"Ambient"},{value:"classical",label:"Classical"},{value:"country",label:"Country"},{value:"danceedm",label:"Dance & EDM"},{value:"dancehall",label:"Dancehall"},{value:"deephouse",label:"Deep House"},{value:"disco",label:"Disco"},{value:"drumbass",label:"Drum & Bass"},{value:"dubstep",label:"Dubstep"},{value:"eletronic",label:"Electronic"},{value:"hiphoprap",label:"Hip-hop & Rap"},{value:"house",label:"House"},{value:"indie",label:"Indie"},{value:"jazzblues",label:"Jazz & Blues"},{value:"metal",label:"Metal"},{value:"piano",label:"Piano"},{value:"pop",label:"Pop"},{value:"rbsoul",label:"R&B & Soul"},{value:"reggae",label:"Reggae"},{value:"reggaeton",label:"Reggaeton"},{value:"rock",label:"Rock"},{value:"soundtracks",label:"Soundtrack"},{value:"techno",label:"Techno"},{value:"trance",label:"Trance"},{value:"trap",label:"Trap"},{value:"triphop",label:"Triphop"},{value:"world",label:"World"}]},function(e,t,a){"use strict";var n=a(0),i=a(1),o=a(117);const l=i["a"].select`
  appearance: none;
  background: transparent url(${a.n(o).a}) no-repeat 82% 50%;
  color: whitesmoke;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  align-self: center;
  margin-left: 20px;
  flex: 1;
  outline: 0;
  border: 0;
`,s=i["a"].option`
  color: whitesmoke;
  background: #242526;
`;t.a=(e=>{let{options:t}=e,a=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["options"]);return Object(n.c)(l,a,t.map((e,t)=>Object(n.c)(s,{key:t,value:e.value},e.label)))})},function(e,t,a){e.exports=a.p+"static/media/arrow.6cc57b39.svg"},function(e,t,a){e.exports=a.p+"static/media/playlist.8a2fb585.svg"},function(e,t,a){e.exports=a.p+"static/media/filter.8397c26e.svg"},function(e,t,a){"use strict";var n=a(0),i=a(2),o=a(1),l=a(32),s=a(10),r=a(121),c=a(5),p=a(122),u=a.n(p),d=a(123),h=a.n(d),g=a(124),b=a.n(g),f=a(125),m=a.n(f),v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};const y=o["a"].div`
  background: ${e=>e.online?"#fff":"#ef5350"};
  padding-top: 6px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 40px;
  display: flex;
  transform: ${e=>e.visible?"translateX(0)":"translateX(-100%)"};
  transition: transform 500ms ease;

  @media screen and (min-width: 500px) {
    margin-left: 220px;
    width: calc(100% - 220px);
  }
`,x=o["a"].div`
  display: flex;
  justify-content: center;
`,O=o["a"].div`
  flex: 1;
  > p {
    color: #444;
    overflow: hidden;
    display: block;
    text-decoration: none;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 0.7rem;

    &:first-child {
      font-size: 0.8rem;
    }
  }
`;const j={playNext:c.i,playPrev:c.j,onPause:c.g,onPlay:c.h};t.a=Object(i.b)(({playlist:e,root:t})=>({currentSong:e.currentSong,audioUrl:e.audioUrl,isPlaying:e.isPlaying,online:t.online}),j)(class extends n.a{constructor(...e){var t;return t=super(...e),this.state={duration:0,currentTime:0},this.onLoadedMetadata=(()=>{this.setState({duration:this.audioElement.duration}),this.audioElement.play(),document.title=this.props.currentSong.title}),this.onTimeUpdate=(()=>{this.setState({currentTime:this.audioElement.currentTime})}),this.changeCurrentTime=(e=>{this.audioElement.currentTime=e}),this.togglePlay=(()=>{this.audioElement.paused?this.audioElement.play():this.audioElement.pause()}),t}componentDidMount(){"mediaSession"in navigator&&(navigator.mediaSession.playbackState="paused",navigator.mediaSession.setActionHandler("previoustrack",this.props.playPrev),navigator.mediaSession.setActionHandler("play",this.togglePlay),navigator.mediaSession.setActionHandler("pause",this.togglePlay),navigator.mediaSession.setActionHandler("nexttrack",this.props.playNext))}componentWillReceiveProps(e){"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:e.currentSong.title,artist:e.currentSong.user,artwork:[{src:e.currentSong.artwork.replace("large","t500x500"),sizes:"500x500",type:"image/jpg"}]}))}render({currentSong:e,isPlaying:t,audioUrl:a,playNext:i,playPrev:o,onPause:c,onPlay:p,online:d}){return Object(n.c)(y,{visible:null!==e,online:d},Object(n.c)(r.a,v({onChange:this.changeCurrentTime},this.state)),Object(n.c)(x,null,Object(n.c)(l.a,{link:!0,noMobile:!0,onClick:o},Object(n.c)(s.a,{src:h.a,size:25})),Object(n.c)(l.a,{link:!0,onClick:this.togglePlay},Object(n.c)(s.a,{src:t?m.a:u.a,size:25})),Object(n.c)(l.a,{link:!0,noMobile:!0,onClick:i},Object(n.c)(s.a,{src:b.a,size:25}))),e&&Object(n.c)(O,null,Object(n.c)("p",null,e.title),Object(n.c)("p",null,e.user)),Object(n.c)("audio",{crossOrigin:"anonymous",src:a,onEnded:i,onLoadedMetadata:this.onLoadedMetadata,onPause:c,onPlay:p,onTimeUpdate:this.onTimeUpdate,ref:e=>this.audioElement=e}))}})},function(e,t,a){"use strict";var n=a(0),i=a(1);const o=i["a"].div`
  background-color: rgba(0, 0, 0, 0.03);
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 6px;
`,l=i["a"].div`
  background-color: #21d4fd;
  border-radius: 0 3px 3px 0;
  height: 6px;
  width: 100%;
  transform: translateX(-100%);
  /* will-change: width; */
`,s=e=>{let t=e,a=t.offsetLeft;for(;t.offsetParent;)a+=t.offsetParent.offsetLeft,t=t.offsetParent;return a};t.a=class extends n.a{constructor(...e){var t;return t=super(...e),this.onClick=(e=>{const{duration:t,onChange:a}=this.props;a((e.clientX-s(e.currentTarget))/e.currentTarget.offsetWidth*t)}),t}render({currentTime:e,duration:t}){const a=`translateX(-${100-e/t*100}%)`;return Object(n.c)(o,{onClick:this.onClick},Object(n.c)(l,{style:{transform:a}}))}}},function(e,t,a){e.exports=a.p+"static/media/play.73faf2c4.svg"},function(e,t,a){e.exports=a.p+"static/media/back.8ce1c030.svg"},function(e,t,a){e.exports=a.p+"static/media/next.74ab42e1.svg"},function(e,t,a){e.exports=a.p+"static/media/pause.2437f28e.svg"},function(e,t,a){"use strict";var n=a(2),i=a(5),o=a(14);const l=Object(o.a)(null,!0),s={loadMore:i.f,playSong:i.k,playlistAction:i.a};t.a=Object(n.b)(({root:e,playlist:t},a)=>t.location===a.location.pathname&&null!==t.currentSong?{playlist:e.playlist,loading:e.loadingPlaylist,active:t.currentSong.id}:{playlist:e.playlist,loading:e.loadingPlaylist,active:null},s)(l)},function(e,t,a){"use strict";var n=a(0),i=a(1);const o=i["a"].div`
  margin: 0 auto;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 0.2rem solid #dedede;
  border-top-color: #444;
  animation: ${i["b"]`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`} 1s infinite linear;
`,l=i["a"].a`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  cursor: pointer;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 2px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;t.a=class extends n.a{componentDidMount(){this.observer=new IntersectionObserver(this.props.loadMore),this.observer.observe(this.target)}componentWillUnmount(){this.observer.unobserve(this.target)}render({loadMore:e,isLoading:t}){return Object(n.c)(l,{onClick:e,innerRef:e=>this.target=e},t?Object(n.c)(o,null):"Load More...")}}},function(e,t,a){"use strict";var n=a(0),i=a(1),o=a(10),l=a(129),s=a.n(l),r=a(130),c=a.n(r),p=a(131),u=a.n(p),d=a(132),h=a.n(d);const g=o["a"].extend`
  display: none;

  @media screen and (min-width: 500px) {
    opacity: 0;
    transition: transform 200ms ease;
    margin: auto;
    display: block;
    transform: scale(0.1);
  }
`,b=i["a"].div`
  background: ${e=>e.active?"transparent":"white"};
  position: relative;
  cursor: pointer;
  padding: 8px;
  display: flex;

  @media screen and (min-width: 500px) {
    border-radius: 4px;
  }

  &:hover {
    ${g} {
      opacity: 1;
      transform: scale(1);
    }
  }
`,f=i["a"].div`
  background-size: cover;
  background-position: center;
  display: flex;
  min-width: 60px;
  min-height: 60px;
`,m=i["a"].div`
  position: relative;
  margin: 0 0 0 5px;
  overflow: hidden;
  flex: 1;

  @media screen and (min-width: 500px) {
    overflow: initial;
  }
`,v=i["a"].p`
  color: #777;
  font-size: 0.8rem;
`,y=i["a"].p`
  color: #444;
  font-size: 0.85rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media screen and (min-width: 500px) {
    width: 180px;
  }
`,x=i["a"].div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
`,O=i["a"].span`
  margin: 0 10px 0 3px;
  font-size: 0.7rem;
  color: #666;
`,j=i["a"].span`
  font-size: 0.8rem;
  color: #666;
  flex: 1;
`,k=i["a"].div`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, 260px);
    grid-gap: 15px;
  }
`;t.a=k;t.b=(e=>{const t=e?h.a:c.a,a=e?"Remove from Playlist":"Add to Playlist";return({song:e,index:i,play:l,playlistAction:r,active:c})=>Object(n.c)(b,{onClick:()=>l(i),active:c},Object(n.c)(f,{style:{backgroundImage:`url(${e.artwork})`}},Object(n.c)(g,{src:s.a,size:30})),Object(n.c)(m,null,Object(n.c)(y,{title:e.title},e.title),Object(n.c)(v,null,e.user),Object(n.c)(x,null,Object(n.c)(j,null,e.duration),Object(n.c)(o.b,{tooltip:`${e.likesCount} likes`},Object(n.c)(o.a,{src:u.a,size:9,alt:""}),Object(n.c)(O,null,e.likesCountMin)),Object(n.c)(o.b,{tooltip:a},Object(n.c)(o.a,{onClick:t=>r(t)(e),src:t,style:{marginTop:"1px"},size:16})))))})},function(e,t,a){e.exports=a.p+"static/media/play.213768f4.svg"},function(e,t,a){e.exports=a.p+"static/media/add.61292292.svg"},function(e,t,a){e.exports=a.p+"static/media/like.1517cac4.svg"},function(e,t,a){e.exports=a.p+"static/media/remove.3e562134.svg"},function(e,t,a){"use strict";var n=a(2),i=a(14),o=a(5);const l=Object(i.a)(null,!0),s={loadMore:o.d,playSong:o.k,playlistAction:o.a};t.a=Object(n.b)(({search:e,playlist:t},a)=>t.location===a.location.pathname&&null!==t.currentSong?{playlist:e.results,loading:e.loadingSearch,active:t.currentSong.id}:{playlist:e.results,loading:e.loadingSearch,active:null},s)(l)},function(e,t,a){"use strict";var n=a(2),i=a(14),o=a(5);const l=Object(i.a)(null,!1,!0),s={playSong:o.k,playlistAction:o.l};t.a=Object(n.b)(({userPlaylist:e,playlist:t},a)=>t.location===a.location.pathname&&null!==t.currentSong?{playlist:e.playlist,active:t.currentSong.id}:{playlist:e.playlist,active:null},s)(l)},function(e,t,a){"use strict";t.a=function(){if("serviceWorker"in navigator){const e=new URL("/YASCC",window.location);if(e.origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="/YASCC/service-worker.js";n?(e=e,fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):i(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})):i(e)})}var e};const n=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function i(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=(()=>{const t=e.installing;t.onstatechange=(()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})})}).catch(e=>{console.error("Error during service worker registration:",e)})}}],[33]);
//# sourceMappingURL=main.be502ae2.js.map