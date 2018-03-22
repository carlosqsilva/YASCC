webpackJsonp([1],[,,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.remove_from_playlist=t.add_to_playlist=t.load_next_results=t.search_songs=t.load_playlist_next=t.set_filter=t.set_tag=t.set_genre=t.load_playlist=t.play_prev=t.play_next=t.play_song_from_btn=t.play_song=t.on_pause=t.on_play=t.toggle_sidebar=t.is_offline=t.is_online=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(28));const l=new(a(108).api)(35),i=(t.is_online=(()=>({type:n.ONLINE})),t.is_offline=(()=>({type:n.OFFLINE})),t.toggle_sidebar=(()=>({type:n.TOGGLE_SIDEBAR})),t.on_play=(()=>({type:n.ON_PLAY})),t.on_pause=(()=>({type:n.ON_PAUSE})),t.play_song=((e,t)=>a=>{l.audioStream(t.stream).then(l=>a({type:n.PLAY_SONG,songIndex:e,song:t,audioUrl:l}))}));t.play_song_from_btn=((e,t)=>(a,l)=>{const{playlist:o,location:r}=l().playlist;let s;switch(t){case"/":s=l().root.playlist;break;case"/search":s=l().search.results;break;case"/playlist":s=l().userPlaylist.playlist;break;default:return[]}a(i(e,s[e])),o.length===s.length&&r===t||a({type:n.ACTIVE_PLAYLIST,currentPlaylist:s,location:t})}),t.play_next=(()=>(e,t)=>{const{playlist:a,songIndex:n}=t().playlist,l=n!==a.length-1?n+1:0;e(i(l,a[l]))}),t.play_prev=(()=>(e,t)=>{const{playlist:a,songIndex:n}=t().playlist,l=0!==n?n-1:a.length-1;e(i(l,a[l]))}),t.load_playlist=(e=>t=>(t({type:n.PLAYLIST_LOADING}),l.load(e).then(e=>t({type:n.PLAYLIST_LOADED,playlist:e})))),t.set_genre=(e=>t=>{t({type:n.PLAYLIST_LOADING}),l.setGenre(e).then(e=>t({type:n.PLAYLIST_LOADED,playlist:e}))}),t.set_tag=(e=>t=>{t({type:n.PLAYLIST_LOADING}),l.setTag(e).then(e=>t({type:n.PLAYLIST_LOADED,playlist:e}))}),t.set_filter=(e=>t=>{t({type:n.PLAYLIST_LOADING}),l.setFilter(e).then(e=>t({type:n.PLAYLIST_LOADED,playlist:e}))}),t.load_playlist_next=(()=>(e,t)=>{const{loadingPlaylist:a}=t().root;a||(e({type:n.PLAYLIST_LOADING_NEXT}),l.loadNext().then(t=>e({type:n.PLAYLIST_LOADED,playlist:t})))}),t.search_songs=(e=>t=>{t({type:n.LOADING_SEARCH}),l.search(e).then(e=>t({type:n.LOADED_SEARCH,playlist:e}))}),t.load_next_results=(()=>(e,t)=>{const{loadingSearch:a}=t().search;a||(e({type:n.LOADING_SEARCH_NEXT}),l.loadNext().then(t=>e({type:n.LOADED_SEARCH,playlist:t})))}),t.add_to_playlist=(e=>(t,a)=>{0===a().userPlaylist.playlist.filter(t=>t.id===e.id).length&&t({type:n.ADD_TO_PLAYLIST,song:e})}),t.remove_from_playlist=(e=>(t,a)=>{let l=a().userPlaylist.playlist.filter(t=>t.id!==e.id);t({type:n.REMOVE_FROM_PLAYLIST,playlist:l})})},,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WithTooltip=t.Icon=void 0;var n,l=a(0),i=a(1),o=(n=i)&&n.__esModule?n:{default:n};const r=o.default.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  align-self: center;

  &:hover {
    > span {
      opacity: 1;
    }
  }
`,s=o.default.span`
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
`,u=t.Icon=o.default.img.attrs({alt:"",width:e=>e.size,height:e=>e.size})`
  align-self: center;
`;t.WithTooltip=(({children:e,tooltip:t})=>(0,l.h)(r,null,e,(0,l.h)(s,null,t)));t.default=u},,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WithActions=void 0;var n=a(0),l=r(a(1)),i=r(a(127)),o=a(128);function r(e){return e&&e.__esModule?e:{default:e}}const s=l.default.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 65px;
  margin-bottom: 60px;
`;t.WithActions=((e,t=!1,a=!1)=>{const l=(0,o.SongCard)(a);return class extends n.Component{constructor(...e){var t;return t=super(...e),this.playSong=(e=>{this.props.playSong(e,this.props.location.pathname)}),this.playlistAction=(e=>t=>{e||(e=window.event),e.stopPropagation&&e.stopPropagation(),this.props.playlistAction(t)}),t}render({loadMore:a,playlist:r,loading:u,active:d}){return(0,n.h)(s,null,e&&(0,n.h)(e,null),(0,n.h)(o.CardContainer,null,r.map((e,t)=>(0,n.h)(l,{song:e,index:t,active:d===e.id,playlistAction:this.playlistAction,play:this.playSong,key:e.id}))),t&&(0,n.h)(i.default,{isLoading:u,loadMore:a}))}}})},,,,,,,,,,,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ONLINE="ONLINE",t.OFFLINE="OFFLINE",t.TOGGLE_SIDEBAR="TOGGLE_SIDEBAR",t.HIDE_SIDEBAR="HIDE_SIDEBAR",t.PLAYLIST_LOADING="PLAYLIST_LOADING",t.PLAYLIST_LOADING_NEXT="PLAYLIST_LOADING_NEXT",t.PLAYLIST_LOADED="PLAYLIST_LOADED",t.PLAY_SONG="PLAY_SONG",t.ON_PLAY="ON_PLAY",t.ON_PAUSE="ON_PAUSE",t.ON_TIME_UPDATE="ON_TIME_UPDATE",t.ON_LOAD_START="ON_LOAD_START",t.ON_LOADED_METADATA="ON_LOADED_METADATA",t.ACTIVE_PLAYLIST="ACTIVE_PLAYLIST",t.ADD_TO_PLAYLIST="ADD_TO_PLAYLIST",t.REMOVE_FROM_PLAYLIST="REMOVE_FROM_PLAYLIST",t.LOADING_SEARCH="LOADING_SEARCH",t.LOADING_SEARCH_NEXT="LOADING_SEARCH_NEXT",t.LOADED_SEARCH="LOADED_SEARCH"},,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=a(1),i=(n=l)&&n.__esModule?n:{default:n};const o=i.default.a`
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
`;t.default=o},function(e,t,a){"use strict";var n=a(0),l=a(2),i=a(73),o=u(a(86)),r=u(a(135)),s=a(136);function u(e){return e&&e.__esModule?e:{default:e}}const{persistor:d,store:c}=(0,i.configStore)();(0,n.render)((0,n.h)(l.Provider,{store:c},(0,n.h)(s.PersistGate,{persistor:d},(0,n.h)(o.default,null))),document.body),(0,r.default)(),console.log("hello there...")},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.configStore=void 0;var n=a(9),l=a(74),i=s(a(81)),o=s(a(84)),r=s(a(85));function s(e){return e&&e.__esModule?e:{default:e}}const u={key:"root",storage:i.default,blacklist:["playlist","root","search"]},d=(0,l.persistCombineReducers)(u,r.default);t.configStore=(()=>{let e=(0,n.createStore)(d,(0,n.applyMiddleware)(o.default));return{persistor:(0,l.persistStore)(e),store:e}})},,,,,,,,,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.userPlaylistReducer=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(28));const l={sidebarVisible:!1,loadingPlaylist:!0,isPlaying:!1,playlist:[],online:!0},i={playlist:[],songIndex:null,audioUrl:null,currentSong:null,isPlaying:!1,location:""},o={loadingSearch:!1,results:[]},r=t.userPlaylistReducer=((e={playlist:[]},t)=>{switch(t.type){case n.ADD_TO_PLAYLIST:return{playlist:[...e.playlist,t.song]};case n.REMOVE_FROM_PLAYLIST:return{playlist:t.playlist};default:return e}});t.default={root:(e=l,t)=>{switch(t.type){case n.TOGGLE_SIDEBAR:return Object.assign({},e,{sidebarVisible:!e.sidebarVisible});case n.PLAYLIST_LOADING:return Object.assign({},e,{loadingPlaylist:!0,playlist:[]});case n.PLAYLIST_LOADING_NEXT:return Object.assign({},e,{loadingPlaylist:!0});case n.PLAYLIST_LOADED:return Object.assign({},e,{loadingPlaylist:!1,playlist:[...e.playlist,...t.playlist]});case n.ONLINE:return Object.assign({},e,{online:!0});case n.OFFLINE:return Object.assign({},e,{online:!1});default:return e}},search:(e=o,t)=>{switch(t.type){case n.LOADING_SEARCH:return Object.assign({},e,{loadingSearch:!0,results:[]});case n.LOADING_SEARCH_NEXT:return Object.assign({},e,{loadingSearch:!0});case n.LOADED_SEARCH:return Object.assign({},e,{loadingSearch:!1,results:[...e.results,...t.playlist]});default:return e}},playlist:(e=i,t)=>{switch(t.type){case n.ACTIVE_PLAYLIST:return Object.assign({},e,{playlist:t.currentPlaylist,location:t.location});case n.PLAY_SONG:return Object.assign({},e,{songIndex:t.songIndex,audioUrl:t.audioUrl,currentSong:t.song});case n.ON_PLAY:return Object.assign({},e,{isPlaying:!0});case n.ON_PAUSE:return Object.assign({},e,{isPlaying:!1});default:return e}},userPlaylist:r}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),l=h(a(1)),i=h(a(93)),o=h(a(97)),r=a(2),s=a(106),u=h(a(126)),d=h(a(133)),c=h(a(134)),p=a(5);function h(e){return e&&e.__esModule?e:{default:e}}const f=l.default.div`
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
`;const g={loadPlaylist:p.load_playlist,isOnline:p.is_online,isOffline:p.is_offline};t.default=(0,r.connect)(null,g)(class extends n.Component{componentDidMount(){this.props.loadPlaylist().then(()=>{const e=document.getElementById("loader");e&&setTimeout(()=>{e.classList.add("ready"),setTimeout(()=>{e.outerHTML=""},600)},1e3)}),window.addEventListener("online",this.props.isOnline),window.addEventListener("offline",this.props.isOffline)}render(){return(0,n.h)(o.default,null,(0,n.h)(f,null,(0,n.h)(s.Sidebar,null),(0,n.h)(i.default,{exact:!0,path:"/",component:u.default}),(0,n.h)(i.default,{path:"/search",component:d.default}),(0,n.h)(i.default,{path:"/playlist",component:c.default}),(0,n.h)(s.Header,null),(0,n.h)(s.Player,null)))}})},,,,,,,,,,,,,,,,,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Header=t.Sidebar=t.Player=void 0;var n=o(a(107)),l=o(a(114)),i=o(a(120));function o(e){return e&&e.__esModule?e:{default:e}}t.Player=i.default,t.Sidebar=l.default,t.Header=n.default},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),l=a(2),i=a(5),o=p(a(1)),r=p(a(109)),s=p(a(10)),u=p(a(32)),d=p(a(112)),c=p(a(113));function p(e){return e&&e.__esModule?e:{default:e}}const h=o.default.div`
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
`,f={toggleSidebar:i.toggle_sidebar};t.default=(0,l.connect)(({root:e})=>({online:e.online}),f)(({toggleSidebar:e,online:t})=>(0,n.h)(h,{online:t},(0,n.h)(u.default,{link:!0,noDesktop:!0,onClick:e},(0,n.h)(s.default,{size:24,src:d.default})),(0,n.h)(r.default,null),(0,n.h)(u.default,{link:!0,noMobile:!0,href:"https://github.com/carlosqsilva/yascc",target:"_blank",rel:"noopener noreferrer"},(0,n.h)(s.default,{size:24,src:c.default}))))},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=(e,t)=>{let a=String(e);for(;a.length<t;)a=`0${a}`;return a},l=e=>{const t=parseInt(e/1e3,10);return`${n(Math.floor(t/60),2)}:${n(t%60,2)}`},i=e=>e?e.replace("\u2013","-").split("-").pop():"",o=e=>{if(e<1e3)return e;if(!e)return 0;const t=e.toString(),a=t.length,n=a%3===0?3:a%3;return`${t.substring(0,n)}${a>=7?"M":"K"}`};t.api=class{constructor(e){this.key="client_id=JAgPhXap7XK0g8dUOtklbE7UnF05W8AH",this.tracks=`https://api.soundcloud.com/tracks?linked_partitioning=1&limit=${e}&${this.key}`,this.created_at=null,this.genre="genres=house",this.tag=null,this.next=""}load(){const e=[this.tracks,this.genre,this.tag,this.created_at].filter(e=>null!==e).join("&");return this.getSongs(e)}setGenre(e){return this.genre=`genres=${e}`,this.tag=null,this.load()}setTag(e){return this.tag=`tags=${e}`,this.genre=null,this.load()}setFilter(e){return e||(this.created_at=null),this.created_at=`created_at=${e}`.toLowerCase().split(" ").join("_"),this.load()}loadNext(){return this.getSongs(this.next)}audioStream(e){return Promise.resolve(`${e}?${this.key}`)}search(e){if(!e.trim())return Promise.resolve([]);const t=e.split(" ").filter(e=>e.length>0).join("%20");return this.getSongs(`${this.tracks}&q=${t}`)}getSongs(e){return fetch(e).then(e=>e.json()).then(e=>(this.next=e.next_href,e.collection.filter(e=>null!==e.artwork_url&&3e4!==e.duration).map(e=>({id:e.id,title:i(e.title),duration:l(e.duration),stream:e.stream_url,artwork:e.artwork_url,user:e.user.username,likesCount:e.likes_count,likesCountMin:o(e.likes_count)}))))}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),l=a(2),i=s(a(1)),o=s(a(31)),r=a(5);function s(e){return e&&e.__esModule?e:{default:e}}const u=i.default.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  flex: 1;
`,d=i.default.input`
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
`;const c={searchSongs:r.search_songs};t.default=(0,l.connect)(null,c)((0,o.default)(class extends n.Component{constructor(...e){var t;return t=super(...e),this.state={value:""},this.handleChange=(e=>{this.setState({value:e.target.value})}),this.handleSubmit=(e=>{e.preventDefault(),this.props.searchSongs(this.state.value),this.props.history.push("/search")}),t}render(){const{value:e}=this.state;return(0,n.h)(u,{onSubmit:this.handleSubmit},(0,n.h)(d,{placeholder:"Search...",value:e,onChange:this.handleChange}))}}))},,,function(e,t,a){e.exports=a.p+"static/media/menu.5096e131.svg"},function(e,t,a){e.exports=a.p+"static/media/github.26816b67.svg"},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),l=a(2),i=h(a(31)),o=a(5),r=h(a(1)),s=a(115),u=a(10),d=h(a(116)),c=h(a(118)),p=h(a(119));function h(e){return e&&e.__esModule?e:{default:e}}const f=r.default.div`
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
`,g=r.default.div`
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
`,_=r.default.div`
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
`,y=_.extend`
  cursor: pointer;
`,v=r.default.strong`
  flex: 1;
  align-self: center;
  margin-left: 20px;
  font-size: 1.1rem;
`,m=r.default.strong`
  color: #fafafa;
  margin-bottom: 3px;
`,b=r.default.span`
  background-color: whitesmoke;
  color: #111;
  border-radius: 5px;
  margin-right: 20px;
  font-size: 0.8rem;
  padding: 0 0.5rem;
  align-self: center;
`,x=r.default.a`
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
`;const A={setFilter:o.set_filter,setGenre:o.set_genre,setTag:o.set_tag,toggleSidebar:o.toggle_sidebar};t.default=(0,i.default)((0,l.connect)(({root:e,userPlaylist:t})=>({sidebarVisible:e.sidebarVisible,qtd:t.playlist.length}),A)(class extends n.Component{constructor(...e){var t;return t=super(...e),this.state={activeItem:""},this.changeRoute=(e=>{this.props.location.pathname!==e&&this.props.history.push(e)}),this.active=(e=>{this.setState({activeItem:e}),this.changeRoute("/")}),this.onChange=(e=>{this.props.setFilter(e.target.value)}),this.onTag=(e=>{const{name:t}=e.target;this.props.setTag(t),this.active(t)}),this.onGenre=(e=>{const{name:t}=e.target;this.props.setGenre(t),this.active(t)}),t}render({sidebarVisible:e,qtd:t},{activeItem:a}){return(0,n.h)("div",null,(0,n.h)(f,{visible:e},(0,n.h)(y,{horizontal:!0,onClick:()=>this.changeRoute("/playlist")},(0,n.h)(u.Icon,{size:20,src:c.default}),(0,n.h)(v,null,"Playlist"),(0,n.h)(b,null,t)),(0,n.h)(_,{horizontal:!0},(0,n.h)(u.Icon,{size:20,src:p.default}),(0,n.h)(d.default,{options:s.filter,onChange:this.onChange})),(0,n.h)(_,null,(0,n.h)(m,null,"Popular Tags"),s.tags.map((e,t)=>(0,n.h)(x,{key:t,name:e.value,active:a===e.value,onClick:this.onTag},e.label))),(0,n.h)(_,null,(0,n.h)(m,null,"Music Genres"),s.genre.map((e,t)=>(0,n.h)(x,{key:t,name:e.value,active:a===e.value,onClick:this.onGenre},e.label)))),e&&(0,n.h)(g,{onClick:this.props.toggleSidebar}))}}))},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.filter=[{value:"",label:"Default"},{value:"last_hour",label:"Last Hour"},{value:"last_week",label:"Last Week"},{value:"last_month",label:"Last Month"},{value:"last_year",label:"Last Year"}],t.tags=[{value:"chill%20house",label:"#Chill"},{value:"deep%20house",label:"#Deep"},{value:"lofi%20hip%20hop",label:"#Lofi"},{value:"progressive%20house",label:"#Progressive"},{value:"relax",label:"#Relax"},{value:"study",label:"#Study"},{value:"sleep",label:"#Sleep"},{value:"tech%20house",label:"#Tech"},{value:"trance",label:"#Trance"},{value:"tropical%20house",label:"#Tropical"},{value:"workout",label:"#Workout"}],t.genre=[{value:"alternative",label:"Alternative Rock"},{value:"ambient",label:"Ambient"},{value:"classical",label:"Classical"},{value:"country",label:"Country"},{value:"danceedm",label:"Dance & EDM"},{value:"dancehall",label:"Dancehall"},{value:"deephouse",label:"Deep House"},{value:"disco",label:"Disco"},{value:"drumbass",label:"Drum & Bass"},{value:"dubstep",label:"Dubstep"},{value:"eletronic",label:"Electronic"},{value:"hiphoprap",label:"Hip-hop & Rap"},{value:"house",label:"House"},{value:"indie",label:"Indie"},{value:"jazzblues",label:"Jazz & Blues"},{value:"metal",label:"Metal"},{value:"piano",label:"Piano"},{value:"pop",label:"Pop"},{value:"rbsoul",label:"R&B & Soul"},{value:"reggae",label:"Reggae"},{value:"reggaeton",label:"Reggaeton"},{value:"rock",label:"Rock"},{value:"soundtracks",label:"Soundtrack"},{value:"techno",label:"Techno"},{value:"trance",label:"Trance"},{value:"trap",label:"Trap"},{value:"triphop",label:"Triphop"},{value:"world",label:"World"}]},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),l=i(a(1));function i(e){return e&&e.__esModule?e:{default:e}}const o=l.default.select`
  appearance: none;
  background: transparent url(${i(a(117)).default}) no-repeat 82% 50%;
  color: whitesmoke;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  align-self: center;
  margin-left: 20px;
  flex: 1;
  outline: 0;
  border: 0;
`,r=l.default.option`
  color: whitesmoke;
  background: #242526;
`;t.default=(e=>{let{options:t}=e,a=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["options"]);return(0,n.h)(o,a,t.map((e,t)=>(0,n.h)(r,{key:t,value:e.value},e.label)))})},function(e,t,a){e.exports=a.p+"static/media/arrow.6cc57b39.svg"},function(e,t,a){e.exports=a.p+"static/media/playlist.8a2fb585.svg"},function(e,t,a){e.exports=a.p+"static/media/filter.8397c26e.svg"},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=a(0),i=a(2),o=g(a(1)),r=g(a(32)),s=a(10),u=g(a(121)),d=a(5),c=g(a(122)),p=g(a(123)),h=g(a(124)),f=g(a(125));function g(e){return e&&e.__esModule?e:{default:e}}const _=o.default.div`
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
`,y=o.default.div`
  display: flex;
  justify-content: center;
`,v=o.default.div`
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
`;const m={playNext:d.play_next,playPrev:d.play_prev,onPause:d.on_pause,onPlay:d.on_play};t.default=(0,i.connect)(({playlist:e,root:t})=>({currentSong:e.currentSong,audioUrl:e.audioUrl,isPlaying:e.isPlaying,online:t.online}),m)(class extends l.Component{constructor(...e){var t;return t=super(...e),this.state={duration:0,currentTime:0},this.onLoadedMetadata=(()=>{this.setState({duration:this.audioElement.duration}),this.audioElement.play(),document.title=this.props.currentSong.title}),this.onTimeUpdate=(()=>{this.setState({currentTime:this.audioElement.currentTime})}),this.changeCurrentTime=(e=>{this.audioElement.currentTime=e}),this.togglePlay=(()=>{this.audioElement.paused?this.audioElement.play():this.audioElement.pause()}),t}componentDidMount(){"mediaSession"in navigator&&(navigator.mediaSession.playbackState="paused",navigator.mediaSession.setActionHandler("previoustrack",this.props.playPrev),navigator.mediaSession.setActionHandler("play",this.togglePlay),navigator.mediaSession.setActionHandler("pause",this.togglePlay),navigator.mediaSession.setActionHandler("nexttrack",this.props.playNext))}componentWillReceiveProps(e){"mediaSession"in navigator&&(navigator.mediaSession.metadata=new MediaMetadata({title:e.currentSong.title,artist:e.currentSong.user,artwork:[{src:e.currentSong.artwork.replace("large","t500x500"),sizes:"500x500",type:"image/jpg"}]}))}render({currentSong:e,isPlaying:t,audioUrl:a,playNext:i,playPrev:o,onPause:d,onPlay:g,online:m}){return(0,l.h)(_,{visible:null!==e,online:m},(0,l.h)(u.default,n({onChange:this.changeCurrentTime},this.state)),(0,l.h)(y,null,(0,l.h)(r.default,{link:!0,noMobile:!0,onClick:o},(0,l.h)(s.Icon,{src:p.default,size:25})),(0,l.h)(r.default,{link:!0,onClick:this.togglePlay},(0,l.h)(s.Icon,{src:t?f.default:c.default,size:25})),(0,l.h)(r.default,{link:!0,noMobile:!0,onClick:i},(0,l.h)(s.Icon,{src:h.default,size:25}))),e&&(0,l.h)(v,null,(0,l.h)("p",null,e.title),(0,l.h)("p",null,e.user)),(0,l.h)("audio",{crossOrigin:"anonymous",src:a,onEnded:i,onLoadedMetadata:this.onLoadedMetadata,onPause:d,onPlay:g,onTimeUpdate:this.onTimeUpdate,ref:e=>this.audioElement=e}))}})},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=a(0),i=a(1),o=(n=i)&&n.__esModule?n:{default:n};const r=o.default.div`
  background-color: rgba(0, 0, 0, 0.03);
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 6px;
`,s=o.default.div`
  background-color: #21d4fd;
  border-radius: 0 3px 3px 0;
  height: 6px;
  width: 100%;
  transform: translateX(-100%);
  /* will-change: width; */
`,u=e=>{let t=e,a=t.offsetLeft;for(;t.offsetParent;)a+=t.offsetParent.offsetLeft,t=t.offsetParent;return a};t.default=class extends l.Component{constructor(...e){var t;return t=super(...e),this.onClick=(e=>{const{duration:t,onChange:a}=this.props;a((e.clientX-u(e.currentTarget))/e.currentTarget.offsetWidth*t)}),t}render({currentTime:e,duration:t}){const a=`translateX(-${100-e/t*100}%)`;return(0,l.h)(r,{onClick:this.onClick},(0,l.h)(s,{style:{transform:a}}))}}},function(e,t,a){e.exports=a.p+"static/media/play.73faf2c4.svg"},function(e,t,a){e.exports=a.p+"static/media/back.8ce1c030.svg"},function(e,t,a){e.exports=a.p+"static/media/next.74ab42e1.svg"},function(e,t,a){e.exports=a.p+"static/media/pause.2437f28e.svg"},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),l=a(5);const i=(0,a(14).WithActions)(null,!0),o={loadMore:l.load_playlist_next,playSong:l.play_song_from_btn,playlistAction:l.add_to_playlist};t.default=(0,n.connect)(({root:e,playlist:t},a)=>t.location===a.location.pathname&&null!==t.currentSong?{playlist:e.playlist,loading:e.loadingPlaylist,active:t.currentSong.id}:{playlist:e.playlist,loading:e.loadingPlaylist,active:null},o)(i)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,l=a(0),i=a(1),o=(n=i)&&n.__esModule?n:{default:n};const r=o.default.div`
  margin: 0 auto;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 0.2rem solid #dedede;
  border-top-color: #444;
  animation: ${i.keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`} 1s infinite linear;
`,s=o.default.a`
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
`;t.default=class extends l.Component{componentDidMount(){this.observer=new IntersectionObserver(this.props.loadMore),this.observer.observe(this.target)}componentWillUnmount(){this.observer.unobserve(this.target)}render({loadMore:e,isLoading:t}){return(0,l.h)(s,{onClick:e,innerRef:e=>this.target=e},t?(0,l.h)(r,null):"Load More...")}}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SongCard=t.CardContainer=void 0;var n=a(0),l=d(a(1)),i=a(10),o=d(a(129)),r=d(a(130)),s=d(a(131)),u=d(a(132));function d(e){return e&&e.__esModule?e:{default:e}}const c=i.Icon.extend`
  display: none;

  @media screen and (min-width: 500px) {
    opacity: 0;
    transition: transform 200ms ease;
    margin: auto;
    display: block;
    transform: scale(0.1);
  }
`,p=l.default.div`
  background: ${e=>e.active?"transparent":"white"};
  position: relative;
  cursor: pointer;
  padding: 8px;
  display: flex;

  @media screen and (min-width: 500px) {
    border-radius: 4px;
  }

  &:hover {
    ${c} {
      opacity: 1;
      transform: scale(1);
    }
  }
`,h=l.default.div`
  background-size: cover;
  background-position: center;
  display: flex;
  min-width: 60px;
  min-height: 60px;
`,f=l.default.div`
  position: relative;
  margin: 0 0 0 5px;
  overflow: hidden;
  flex: 1;

  @media screen and (min-width: 500px) {
    overflow: initial;
  }
`,g=l.default.p`
  color: #777;
  font-size: 0.8rem;
`,_=l.default.p`
  color: #444;
  font-size: 0.85rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media screen and (min-width: 500px) {
    width: 180px;
  }
`,y=l.default.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
`,v=l.default.span`
  margin: 0 10px 0 3px;
  font-size: 0.7rem;
  color: #666;
`,m=l.default.span`
  font-size: 0.8rem;
  color: #666;
  flex: 1;
`;t.CardContainer=l.default.div`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, 260px);
    grid-gap: 15px;
  }
`,t.SongCard=(e=>{const t=e?u.default:r.default,a=e?"Remove from Playlist":"Add to Playlist";return({song:e,index:l,play:r,playlistAction:u,active:d})=>(0,n.h)(p,{onClick:()=>r(l),active:d},(0,n.h)(h,{style:{backgroundImage:`url(${e.artwork})`}},(0,n.h)(c,{src:o.default,size:30})),(0,n.h)(f,null,(0,n.h)(_,{title:e.title},e.title),(0,n.h)(g,null,e.user),(0,n.h)(y,null,(0,n.h)(m,null,e.duration),(0,n.h)(i.WithTooltip,{tooltip:`${e.likesCount} likes`},(0,n.h)(i.Icon,{src:s.default,size:9,alt:""}),(0,n.h)(v,null,e.likesCountMin)),(0,n.h)(i.WithTooltip,{tooltip:a},(0,n.h)(i.Icon,{onClick:t=>u(t)(e),src:t,style:{marginTop:"1px"},size:16})))))})},function(e,t,a){e.exports=a.p+"static/media/play.213768f4.svg"},function(e,t,a){e.exports=a.p+"static/media/add.61292292.svg"},function(e,t,a){e.exports=a.p+"static/media/like.1517cac4.svg"},function(e,t,a){e.exports=a.p+"static/media/remove.3e562134.svg"},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),l=a(14),i=a(5);const o=(0,l.WithActions)(null,!0),r={loadMore:i.load_next_results,playSong:i.play_song_from_btn,playlistAction:i.add_to_playlist};t.default=(0,n.connect)(({search:e,playlist:t},a)=>t.location===a.location.pathname&&null!==t.currentSong?{playlist:e.results,loading:e.loadingSearch,active:t.currentSong.id}:{playlist:e.results,loading:e.loadingSearch,active:null},r)(o)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(2),l=a(14),i=a(5);const o=(0,l.WithActions)(null,!1,!0),r={playSong:i.play_song_from_btn,playlistAction:i.remove_from_playlist};t.default=(0,n.connect)(({userPlaylist:e,playlist:t},a)=>t.location===a.location.pathname&&null!==t.currentSong?{playlist:e.playlist,active:t.currentSong.id}:{playlist:e.playlist,active:null},r)(o)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if("serviceWorker"in navigator){const e=new URL("/YASCC",window.location);if(e.origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="/YASCC/service-worker.js";n?(e=e,fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):l(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})):l(e)})}var e},t.unregister=function(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()})};const n=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function l(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=(()=>{const t=e.installing;t.onstatechange=(()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})})}).catch(e=>{console.error("Error during service worker registration:",e)})}}],[33]);
//# sourceMappingURL=main.0f825f27.js.map