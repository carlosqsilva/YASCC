webpackJsonp([1],[,,,,,,,,,,,,,function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(0),i=a(2),o=a(7),l=a(19),r=a(20),s=a.n(r),c=a(23),p=a.n(c);const d={sidebarVisible:!1,loadingPlaylist:!0,isPlaying:!1,playlist:[],online:!0},u={playlist:[],songIndex:null,audioUrl:null,currentSong:null,isPlaying:!1,loading:!1,location:"",duration:0,time:0},g={loadingSearch:!1,results:[]};var b={root:(e=d,t)=>{switch(t.type){case"TOGGLE_SIDEBAR":return Object.assign({},e,{sidebarVisible:!e.sidebarVisible});case"PLAYLIST_LOADING":return Object.assign({},e,{loadingPlaylist:!0,playlist:[]});case"PLAYLIST_LOADING_NEXT":return Object.assign({},e,{loadingPlaylist:!0});case"PLAYLIST_LOADED":return Object.assign({},e,{loadingPlaylist:!1,playlist:[...e.playlist,...t.playlist]});case"ONLINE":return Object.assign({},e,{online:!0});case"OFFLINE":return Object.assign({},e,{online:!1});default:return e}},search:(e=g,t)=>{switch(t.type){case"LOADING_SEARCH":return Object.assign({},e,{loadingSearch:!0,results:[]});case"LOADING_SEARCH_NEXT":return Object.assign({},e,{loadingSearch:!0});case"LOADED_SEARCH":return Object.assign({},e,{loadingSearch:!1,results:[...e.results,...t.playlist]});default:return e}},playlist:(e=u,t)=>{switch(t.type){case"ACTIVE_PLAYLIST":return Object.assign({},e,{playlist:t.currentPlaylist,location:t.location});case"PLAY_SONG":return Object.assign({},e,{songIndex:t.songIndex,audioUrl:t.audioUrl,currentSong:t.song});case"ON_LOAD_START":return Object.assign({},e,{loading:!0});case"ON_PLAY":return Object.assign({},e,{isPlaying:!0});case"ON_PAUSE":return Object.assign({},e,{isPlaying:!1});case"ON_TIME_UPDATE":return Object.assign({},e,{time:t.time});case"ON_LOADED_METADATA":return Object.assign({},e,{loading:!1,duration:t.duration});default:return e}},userPlaylist:(e={playlist:[]},t)=>{switch(t.type){case"ADD_TO_PLAYLIST":return{playlist:[...e.playlist,t.song]};case"REMOVE_FROM_PLAYLIST":return{playlist:t.playlist};default:return e}}};const h={key:"root",storage:s.a,blacklist:["playlist","root","search"]},v=Object(l.a)(h,b);var m=a(1),y=a(36),f=a(39);const x=e=>{const t=parseInt(e/1e3,10);return`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`},O=e=>e?e.replace("\u2013","-").split("-").pop():"",j=e=>{if(e<1e3)return e;if(!e)return 0;const t=e.toString(),a=t.length,n=a%3===0?3:a%3;return`${t.substring(0,n)}${a>=7?"M":"K"}`};const k=new class{constructor(e){this.key="client_id=JAgPhXap7XK0g8dUOtklbE7UnF05W8AH",this.tracks=`https://api.soundcloud.com/tracks?linked_partitioning=1&limit=${e}&${this.key}`,this.created_at=null,this.genre="genres=house",this.tag=null,this.next=""}load(){const e=[this.tracks,this.genre,this.tag,this.created_at].filter(e=>null!==e).join("&");return this.getSongs(e)}setGenre(e){return this.genre=`genres=${e}`,this.tag=null,this.load()}setTag(e){return this.tag=`tags=${e}`,this.genre=null,this.load()}setFilter(e){return this.created_at=e?`created_at=${e}`:null,this.load()}loadNext(){return this.getSongs(this.next)}audioStream(e){return Promise.resolve(`${e}?${this.key}`)}search(e){if(!e.trim())return Promise.resolve([]);const t=e.split(" ").filter(e=>e.length>0).join("%20");return this.getSongs(`${this.tracks}&q=${t}`)}getSongs(e){return fetch(e).then(e=>e.json()).then(e=>(this.next=e.next_href,e.collection.filter(e=>null!==e.artwork_url&&3e4!==e.duration).map(e=>({id:e.id,title:O(e.title),duration:x(e.duration),stream:e.stream_url,artworkOriginal:e.artwork_url,artwork:e.artwork_url.replace("large","t67x67"),waveform:e.waveform_url,user:e.user.username,likesCount:e.likes_count,likesCountMin:j(e.likes_count)}))))}}(35),w=()=>({type:"TOGGLE_SIDEBAR"}),S=(e,t)=>a=>{k.audioStream(t.stream).then(n=>a({type:"PLAY_SONG",songIndex:e,song:t,audioUrl:n}))},L=(e,t)=>(a,n)=>{let i;switch(t){case"/":i=n().root.playlist;break;case"/search":i=n().search.results;break;case"/playlist":i=n().userPlaylist.playlist;break;default:return[]}a(S(e,i[e])),a({type:"ACTIVE_PLAYLIST",currentPlaylist:i,location:t})},A=()=>(e,t)=>{const{playlist:a,songIndex:n}=t().playlist,i=n!==a.length-1?n+1:0;e(S(i,a[i]))},P=()=>(e,t)=>{const{playlist:a,songIndex:n}=t().playlist,i=0!==n?n-1:a.length-1;e(S(i,a[i]))},_=e=>(t,a)=>{0===a().userPlaylist.playlist.filter(t=>t.id===e.id).length&&t({type:"ADD_TO_PLAYLIST",song:e})};var T=a(12);const D=m["b"].form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  flex: 1;
`,E=m["b"].input`
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
`;const I={searchSongs:e=>t=>{t({type:"LOADING_SEARCH"}),k.search(e).then(e=>t({type:"LOADED_SEARCH",playlist:e}))}};var N=Object(i.b)(null,I)(Object(T.a)(class extends n.a{constructor(...e){var t;return t=super(...e),this.state={value:""},this.handleChange=(e=>{this.setState({value:e.target.value})}),this.handleSubmit=(e=>{e.preventDefault(),this.props.searchSongs(this.state.value),this.props.history.push("/search")}),t}render(e,{value:t}){return Object(n.c)(D,{onSubmit:this.handleSubmit},Object(n.c)(E,{placeholder:"Search...",value:t,onChange:this.handleChange}))}}));const C=m["b"].img.attrs({alt:"",width:e=>e.size,height:e=>e.size})`
  align-self: center;
`;var z=C;var M=m["b"].a`
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
`,$=a(47),R=a.n($),Y=a(48),G=a.n(Y);const U=m["b"].div`
  background: ${e=>e.online?"#fff":"#ef5350"};
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 50px;
  display: flex;
  z-index: 10;

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
`,H={toggleSidebar:w};var X=Object(i.b)(({root:e})=>({online:e.online}),H)(({toggleSidebar:e,online:t})=>Object(n.c)(U,{online:t},Object(n.c)(M,{link:!0,noDesktop:!0,onClick:e},Object(n.c)(z,{size:24,src:R.a})),Object(n.c)(N,null),Object(n.c)(M,{link:!0,noMobile:!0,href:"https://github.com/carlosqsilva/yascc",target:"_blank",rel:"noopener noreferrer"},Object(n.c)(z,{size:24,src:G.a}))));const W=[{value:"",label:"Default"},{value:"last_hour",label:"Last Hour"},{value:"last_week",label:"Last Week"},{value:"last_month",label:"Last Month"},{value:"last_year",label:"Last Year"}],F=[{value:"chill%20house",label:"#Chill"},{value:"deep%20house",label:"#Deep"},{value:"lofi%20hip%20hop",label:"#Lofi"},{value:"progressive%20house",label:"#Progressive"},{value:"relax",label:"#Relax"},{value:"study",label:"#Study"},{value:"sleep",label:"#Sleep"},{value:"tech%20house",label:"#Tech"},{value:"trance",label:"#Trance"},{value:"tropical%20house",label:"#Tropical"},{value:"workout",label:"#Workout"}],V=[{value:"alternative",label:"Alternative Rock"},{value:"ambient",label:"Ambient"},{value:"classical",label:"Classical"},{value:"country",label:"Country"},{value:"danceedm",label:"Dance & EDM"},{value:"dancehall",label:"Dancehall"},{value:"deephouse",label:"Deep House"},{value:"disco",label:"Disco"},{value:"drumbass",label:"Drum & Bass"},{value:"dubstep",label:"Dubstep"},{value:"eletronic",label:"Electronic"},{value:"hiphoprap",label:"Hip-hop & Rap"},{value:"house",label:"House"},{value:"indie",label:"Indie"},{value:"jazzblues",label:"Jazz & Blues"},{value:"metal",label:"Metal"},{value:"piano",label:"Piano"},{value:"pop",label:"Pop"},{value:"rbsoul",label:"R&B & Soul"},{value:"reggae",label:"Reggae"},{value:"reggaeton",label:"Reggaeton"},{value:"rock",label:"Rock"},{value:"soundtracks",label:"Soundtrack"},{value:"techno",label:"Techno"},{value:"trance",label:"Trance"},{value:"trap",label:"Trap"},{value:"triphop",label:"Triphop"},{value:"world",label:"World"}];var B=a(49);const K=m["b"].select`
  appearance: none;
  background: transparent url(${a.n(B).a}) no-repeat 82% 50%;
  color: whitesmoke;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  align-self: center;
  margin-left: 20px;
  flex: 1;
  outline: 0;
  border: 0;
`,q=m["b"].option`
  color: whitesmoke;
  background: #242526;
`;var J=e=>{let{options:t}=e,a=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["options"]);return Object(n.c)(K,a,t.map((e,t)=>Object(n.c)(q,{key:t,value:e.value},e.label)))},Q=a(50),Z=a.n(Q),ee=a(51),te=a.n(ee);const ae=m["b"].div`
  background: linear-gradient(to right, #232526, #414345);
  transition: transform 0.2s;
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
`,ne=m["b"].div`
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
`,ie=m["b"].div`
  display: flex;
  text-decoration: none;
  flex-direction: ${e=>e.horizontal?"row":"column"};
  padding: 0.7rem 0 0.7rem 1rem;
  color: rgba(255, 255, 255, 0.9);

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
`,oe=ie.extend`
  cursor: pointer;
`,le=m["b"].strong`
  flex: 1;
  align-self: center;
  margin-left: 20px;
  font-size: 1.1rem;
`,re=m["b"].strong`
  color: #fafafa;
  margin-bottom: 3px;
`,se=m["b"].span`
  background-color: whitesmoke;
  color: #111;
  border-radius: 5px;
  margin-right: 20px;
  font-size: 0.8rem;
  padding: 0 0.5rem;
  align-self: center;
`,ce=m["b"].a`
  flex: 1;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  padding: 4px 0;
  color: ${e=>e.active?"white":"#999"};

  &:hover {
    color: white;
  }
`;const pe={setFilter:e=>t=>{t({type:"PLAYLIST_LOADING"}),k.setFilter(e).then(e=>t({type:"PLAYLIST_LOADED",playlist:e}))},setGenre:e=>t=>{t({type:"PLAYLIST_LOADING"}),k.setGenre(e).then(e=>t({type:"PLAYLIST_LOADED",playlist:e}))},setTag:e=>t=>{t({type:"PLAYLIST_LOADING"}),k.setTag(e).then(e=>t({type:"PLAYLIST_LOADED",playlist:e}))},toggleSidebar:w};var de=Object(T.a)(Object(i.b)(({root:e,userPlaylist:t})=>({sidebarVisible:e.sidebarVisible,qtd:t.playlist.length}),pe)(class extends n.a{constructor(...e){var t;return t=super(...e),this.state={activeItem:""},this.changeRoute=(e=>{this.props.location.pathname!==e&&this.props.history.push(e)}),this.active=(e=>{this.setState({activeItem:e}),this.changeRoute("/")}),this.onChange=(e=>{this.props.setFilter(e.target.value)}),this.onTag=(e=>{const{name:t}=e.target;this.props.setTag(t),this.active(t)}),this.onGenre=(e=>{const{name:t}=e.target;this.props.setGenre(t),this.active(t)}),t}render({sidebarVisible:e,qtd:t},{activeItem:a}){return Object(n.c)("div",null,Object(n.c)(ae,{visible:e},Object(n.c)(oe,{horizontal:!0,onClick:()=>this.changeRoute("/playlist")},Object(n.c)(C,{size:20,src:Z.a}),Object(n.c)(le,null,"Playlist"),Object(n.c)(se,null,t)),Object(n.c)(ie,{horizontal:!0},Object(n.c)(C,{size:20,src:te.a}),Object(n.c)(J,{options:W,onChange:this.onChange})),Object(n.c)(ie,null,Object(n.c)(re,null,"Popular Tags"),F.map((e,t)=>Object(n.c)(ce,{key:t,name:e.value,active:a===e.value,onClick:this.onTag},e.label))),Object(n.c)(ie,null,Object(n.c)(re,null,"Music Genres"),V.map((e,t)=>Object(n.c)(ce,{key:t,name:e.value,active:a===e.value,onClick:this.onGenre},e.label)))),e&&Object(n.c)(ne,{onClick:this.props.toggleSidebar}))}})),ue=a(52),ge=a.n(ue);const be=m["b"].div`
  flex: 1;
  position: relative;
  background-image: url(${e=>e.image});
  background-size: 100% 100%;
  background-repeat: no-repeat;

  position: relative;
  cursor: pointer;
  overflow: hidden;
`,he=m["b"].div`
  transform: translateX(-100%);
  background-color: #21d4fd;
  position: absolute;
  bottom: 0px;
  left: 0px;
  top: 0px;
  width: 100%;
  z-index: -10;
`,ve=m["b"].p`
  color: #222;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:last-child {
    font-size: 0.9rem;
  }
`,me=e=>{let t=e,a=t.offsetLeft;for(;t.offsetParent;)a+=t.offsetParent.offsetLeft,t=t.offsetParent;return a};var ye=Object(i.b)(({playlist:e})=>({song:e.currentSong,time:e.time,duration:e.duration}))(class extends n.a{constructor(...e){var t;return t=super(...e),this.onClick=(e=>{const{duration:t,onChange:a}=this.props;a((e.clientX-me(e.currentTarget))/e.currentTarget.offsetWidth*t)}),t}render({time:e,duration:t,song:a,children:i}){const o=`translateX(-${100-e/t*100}%)`;return Object(n.c)(be,{onClick:this.onClick,image:a.waveform},Object(n.c)(he,{style:{transform:o}}),Object(n.c)(ve,null,a.title),Object(n.c)(ve,null,a.user))}}),fe=a(53),xe=a.n(fe),Oe=a(54),je=a.n(Oe),ke=a(55),we=a.n(ke),Se=a(56),Le=a.n(Se),Ae=a(57),Pe=a.n(Ae);const _e=m["b"].div`
  display: flex;
  justify-content: center;
  background: #fff;
`,Te={playNext:A,playPrev:P};var De=Object(i.b)(({playlist:e})=>({playing:e.isPlaying,loading:e.loading}),Te)(({playing:e,playNext:t,playPrev:a,loading:i,toggle:o})=>Object(n.c)(_e,null,Object(n.c)(M,{link:!0,noMobile:!0,onClick:a},Object(n.c)(C,{src:we.a,size:30})),Object(n.c)(M,{link:!0,onClick:o},i?Object(n.c)(C,{src:xe.a,size:30}):Object(n.c)(C,{src:e?Pe.a:je.a,size:30})),Object(n.c)(M,{link:!0,noMobile:!0,onClick:t},Object(n.c)(C,{src:Le.a,size:30}))));const Ee=m["b"].div`
  background: ${e=>e.online?"#fff":"#ef5350"};
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 45px;
  display: flex;
  transform: ${e=>e.visible?"translateY(0)":"translateY(100%)"};
  transition: transform 500ms ease;
  z-index: 10;

  @media screen and (min-width: 500px) {
    padding-left: 220px;
  }
`;const Ie={onPlay:()=>({type:"ON_PLAY"}),onPause:()=>({type:"ON_PAUSE"}),playPrev:P,playNext:A,changeTime:e=>({type:"ON_TIME_UPDATE",time:e}),onLoadStart:()=>({type:"ON_LOAD_START"}),changeDuration:e=>({type:"ON_LOADED_METADATA",duration:e})};var Ne=Object(i.b)(({playlist:e,root:t})=>({song:e.currentSong,audioUrl:e.audioUrl,online:t.online}),Ie)(class extends n.a{constructor(...e){var t;return t=super(...e),this.keyboardKey=(({code:e})=>{const{playPrev:t,playNext:a}=this.props;"MediaPlayPause"===e&&this.togglePlay(),"MediaTrackNext"===e&&a(),"MediaTrackPrevious"===e&&t()}),this.onLoadedMetadata=(()=>{this.props.changeDuration(this.audio.duration),this.audio.play()}),this.onTimeUpdate=(()=>{this.props.changeTime(this.audio.currentTime)}),this.changeTime=(e=>{this.audio.currentTime=e}),this.togglePlay=(()=>{this.audio.paused?this.audio.play():this.audio.pause()}),t}componentDidMount(){const{playNext:e,playPrev:t}=this.props;"mediaSession"in navigator?(navigator.mediaSession.playbackState="paused",navigator.mediaSession.setActionHandler("previoustrack",t),navigator.mediaSession.setActionHandler("play",this.togglePlay),navigator.mediaSession.setActionHandler("pause",this.togglePlay),navigator.mediaSession.setActionHandler("nexttrack",e)):window.addEventListener("keyup",this.keyboardKey,!1)}componentWillUnmount(){window.removeEventListener("keyup",this.keyboardKey,!1)}componentWillReceiveProps(e){if("mediaSession"in navigator){const{title:t,user:a,artworkOriginal:n}=e.song;navigator.mediaSession.metadata=new MediaMetadata({title:t,artist:a,artwork:[{src:n.replace("large","t500x500"),sizes:"500x500",type:"image/jpg"}]})}}render({audioUrl:e,playNext:t,onPause:a,onPlay:i,onLoadStart:o,online:l},{playing:r}){return Object(n.c)(Ee,{online:l,visible:null!==e},Object(n.c)(De,{toggle:this.togglePlay}),e&&Object(n.c)(ye,{onChange:this.changeTime}),Object(n.c)("audio",{crossOrigin:"anonymous",onTimeUpdate:ge()(this.onTimeUpdate,1e3,{leading:!1}),onLoadedMetadata:this.onLoadedMetadata,onLoadStart:o,onEnded:t,onPause:a,onPlay:i,src:e,ref:e=>this.audio=e}))}});const Ce=m["b"].div`
  margin: 0 auto;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 0.2rem solid #dedede;
  border-top-color: #444;
  animation: ${m["c"]`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`} 1s infinite linear;
`,ze=m["b"].a`
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  cursor: pointer;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.3);
  color: #fff;
  padding: 10px 15px;
  border-radius: 2px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;var Me=class extends n.a{componentDidMount(){this.observer=new IntersectionObserver(this.props.loadMore),this.observer.observe(this.target)}componentWillUnmount(){this.observer.unobserve(this.target)}render({loadMore:e,isLoading:t}){return Object(n.c)(ze,{onClick:e,innerRef:e=>this.target=e},t?Object(n.c)(Ce,null):Object(n.c)("strong",null,"Load More..."))}},$e=a(58),Re=a.n($e),Ye=a(59),Ge=a.n(Ye),Ue=a(60),He=a.n(Ue),Xe=a(61),We=a.n(Xe),Fe=a(62),Ve=a.n(Fe);const Be=C.extend`
  opacity: 0;
  transition: transform 200ms ease;
  margin: auto;
  display: block;
  transform: scale(0.1);
`,Ke=C.extend`
  opacity: 0;
  position: absolute;
  top: 2px;
  right: 2px;
  z-index: 5;
  transition: transform 200ms ease-in-out, opacity 200ms;
  transform: translateX(100%);
  &:hover {
    border: 1px solid transparent;
  }
`,qe=m["a"]`
  ${Be} {
    opacity: 1;
    transform: scale(1);
  }
  ${Ke} {
    opacity: 1;
    transform: translateX(0);
  }
`,Je=m["b"].div`
  position: relative;
  overflow: hidden;
  cursor: pointer;
  padding: 6px;
  display: flex;
  background: #fff;

  ${e=>e.active&&qe};

  @media screen and (max-width: 499px) {
    ${Ke} {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media screen and (min-width: 500px) {
    border-radius: 4px;
    &:hover {
      ${qe};
    }
  }
`,Qe=m["b"].div`
  background-size: cover;
  background-position: center;
  display: flex;
  width: 67px;
  height: 67px;
`,Ze=m["b"].div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  overflow: hidden;
  flex: 1;
`,et=m["b"].p`
  color: #777;
  font-size: 0.8rem;
`,tt=m["b"].p`
  color: #444;
  font-size: 0.85rem;
  @media screen and (min-width: 500px) {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`,at=m["b"].div`
  display: flex;
  align-items: center;
  margin-top: auto;
`,nt=m["b"].span`
  align-self: center;
  margin-left: 5px;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  color: #666;
`,it=nt.extend`
  flex: 1;
`,ot=m["b"].div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, 290px);
    grid-gap: 15px;
  }
`,lt=m["b"].div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 65px;
  margin-bottom: 60px;
`,rt=(e,t=!1,a=!1)=>{const i=(e=>{const t=e?We.a:Ve.a,a=e?"Remove from Playlist":"Add to Playlist";return({song:e,index:i,play:o,playlistAction:l,active:r})=>Object(n.c)(Je,{onClick:()=>o(i),active:r},Object(n.c)(Ke,{onClick:t=>l(t)(e),title:a,src:t,size:24}),Object(n.c)(Qe,{style:{backgroundImage:`url(${e.artwork})`}},Object(n.c)(Be,{src:r?He.a:Re.a,size:40})),Object(n.c)(Ze,null,Object(n.c)(et,null,e.user),Object(n.c)(tt,{title:e.title},e.title),Object(n.c)(at,null,Object(n.c)(it,null,e.duration),Object(n.c)(C,{src:Ge.a,size:12}),Object(n.c)(nt,{title:`${e.likesCount} likes`},e.likesCountMin))))})(a);return class extends n.a{constructor(...e){var t;return t=super(...e),this.playSong=(e=>{this.props.playSong(e,this.props.location.pathname)}),this.playlistAction=(e=>t=>{e||(e=window.event),e.stopPropagation&&e.stopPropagation(),this.props.playlistAction(t)}),t}render({loadMore:a,playlist:o,loading:l,active:r}){return Object(n.c)(lt,null,e&&Object(n.c)(e,null),Object(n.c)(ot,null,o.map((e,t)=>Object(n.c)(i,{song:e,index:t,active:r===e.id,playlistAction:this.playlistAction,play:this.playSong,key:e.id}))),t&&Object(n.c)(Me,{isLoading:l,loadMore:a}))}}},st=rt(null,!0),ct={loadMore:()=>(e,t)=>{const{loadingPlaylist:a}=t().root;a||(e({type:"PLAYLIST_LOADING_NEXT"}),k.loadNext().then(t=>e({type:"PLAYLIST_LOADED",playlist:t})))},playSong:L,playlistAction:_};var pt=Object(i.b)(({root:e,playlist:t},a)=>{let n=null;return t.location===a.location.pathname&&null!==t.currentSong&&(n=t.currentSong.id),{playlist:e.playlist,loading:e.loadingPlaylist,active:n}},ct)(st);const dt=rt(null,!0),ut={loadMore:()=>(e,t)=>{const{loadingSearch:a}=t().search;a||(e({type:"LOADING_SEARCH_NEXT"}),k.loadNext().then(t=>e({type:"LOADED_SEARCH",playlist:t})))},playSong:L,playlistAction:_};var gt=Object(i.b)(({search:e,playlist:t},a)=>{let n=null;return t.location===a.location.pathname&&null!==t.currentSong&&(n=t.currentSong.id),{playlist:e.results,loading:e.loadingSearch,active:n}},ut)(dt);const bt=rt(null,!1,!0),ht={playSong:L,playlistAction:e=>(t,a)=>{t({type:"REMOVE_FROM_PLAYLIST",playlist:a().userPlaylist.playlist.filter(t=>t.id!==e.id)})}};var vt=Object(i.b)(({userPlaylist:e,playlist:t},a)=>{let n=null;return t.location===a.location.pathname&&null!==t.currentSong&&(n=t.currentSong.id),{playlist:e.playlist,active:n}},ht)(bt);const mt=m["b"].div`
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
`;const yt={loadPlaylist:e=>t=>(t({type:"PLAYLIST_LOADING"}),k.load(e).then(e=>t({type:"PLAYLIST_LOADED",playlist:e}))),isOnline:()=>({type:"ONLINE"}),isOffline:()=>({type:"OFFLINE"})};var ft=Object(i.b)(null,yt)(class extends n.a{componentDidMount(){this.props.loadPlaylist().then(()=>{const e=document.getElementById("loader");e&&setTimeout(()=>{e.classList.add("ready"),setTimeout(()=>{e.outerHTML=""},500)},500)}),window.addEventListener("online",this.props.isOnline),window.addEventListener("offline",this.props.isOffline)}render(){return Object(n.c)(f.a,null,Object(n.c)(mt,null,Object(n.c)(de,null),Object(n.c)(y.a,{exact:!0,path:"/",component:pt}),Object(n.c)(y.a,{path:"/search",component:gt}),Object(n.c)(y.a,{path:"/playlist",component:vt}),Object(n.c)(X,null),Object(n.c)(Ne,null)))}});const xt=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ot(e){navigator.serviceWorker.register(e).then(e=>{e.onupdatefound=(()=>{const t=e.installing;t.onstatechange=(()=>{"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})})}).catch(e=>{console.error("Error during service worker registration:",e)})}var jt=a(63);const{persistor:kt,store:wt}=(()=>{let e=Object(o.d)(v,Object(o.a)(p.a));return{persistor:Object(l.b)(e),store:e}})();Object(n.e)(Object(n.c)(i.a,{store:wt},Object(n.c)(jt.a,{persistor:kt},Object(n.c)(ft,null))),document.body),function(){if("serviceWorker"in navigator){if(new URL("/YASCC",window.location).origin!==window.location.origin)return;window.addEventListener("load",()=>{const e="/YASCC/service-worker.js";xt?(e=e,fetch(e).then(t=>{404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(e=>{e.unregister().then(()=>{window.location.reload()})}):Ot(e)}).catch(()=>{console.log("No internet connection found. App is running in offline mode.")})):Ot(e)})}var e}(),console.log("%c hello there...","font-size: 30px; color: red")},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/menu.5096e131.svg"},function(e,t,a){e.exports=a.p+"static/media/github.26816b67.svg"},function(e,t,a){e.exports=a.p+"static/media/arrow.6cc57b39.svg"},function(e,t,a){e.exports=a.p+"static/media/playlist.8a2fb585.svg"},function(e,t,a){e.exports=a.p+"static/media/filter.8397c26e.svg"},,function(e,t,a){e.exports=a.p+"static/media/loading.bf0bf613.svg"},function(e,t,a){e.exports=a.p+"static/media/play.ec93cc3c.svg"},function(e,t,a){e.exports=a.p+"static/media/back.c2d85263.svg"},function(e,t,a){e.exports=a.p+"static/media/next.bbf2ffff.svg"},function(e,t,a){e.exports=a.p+"static/media/pause.0e632588.svg"},function(e,t,a){e.exports=a.p+"static/media/play.213768f4.svg"},function(e,t,a){e.exports=a.p+"static/media/like.4f23f695.svg"},function(e,t,a){e.exports=a.p+"static/media/playing.ccf4160a.svg"},function(e,t,a){e.exports=a.p+"static/media/remove.27b909f7.svg"},function(e,t,a){e.exports=a.p+"static/media/add.9daa822b.svg"}],[13]);
//# sourceMappingURL=main.e567ed36.js.map