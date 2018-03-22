webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(108);
const API=new __WEBPACK_IMPORTED_MODULE_1__api__["a" /* api */](35);const is_online=()=>({type:__WEBPACK_IMPORTED_MODULE_0__constants__["g" /* ONLINE */]});
/* harmony export (immutable) */ __webpack_exports__["c"] = is_online;
const is_offline=()=>({type:__WEBPACK_IMPORTED_MODULE_0__constants__["f" /* OFFLINE */]});
/* harmony export (immutable) */ __webpack_exports__["b"] = is_offline;
const toggle_sidebar=()=>({type:__WEBPACK_IMPORTED_MODULE_0__constants__["o" /* TOGGLE_SIDEBAR */]});
/* harmony export (immutable) */ __webpack_exports__["q"] = toggle_sidebar;
const on_play=()=>({type:__WEBPACK_IMPORTED_MODULE_0__constants__["i" /* ON_PLAY */]});
/* harmony export (immutable) */ __webpack_exports__["h"] = on_play;
const on_pause=()=>({type:__WEBPACK_IMPORTED_MODULE_0__constants__["h" /* ON_PAUSE */]});
/* harmony export (immutable) */ __webpack_exports__["g"] = on_pause;
const play_song=(songIndex,song)=>dispatch=>{API.audioStream(song.stream).then(audioUrl=>dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["m" /* PLAY_SONG */],songIndex,song,audioUrl}));};
/* unused harmony export play_song */
const play_song_from_btn=(index,route)=>(dispatch,getState)=>{const{playlist,location}=getState().playlist;let newPlaylist;switch(route){case"/":newPlaylist=getState().root.playlist;break;case"/search":newPlaylist=getState().search.results;break;case"/playlist":newPlaylist=getState().userPlaylist.playlist;break;default:return[];}dispatch(play_song(index,newPlaylist[index]));if(playlist.length!==newPlaylist.length||location!==route){dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* ACTIVE_PLAYLIST */],currentPlaylist:newPlaylist,location:route});}};
/* harmony export (immutable) */ __webpack_exports__["k"] = play_song_from_btn;
const play_next=()=>(dispatch,getState)=>{const{playlist,songIndex}=getState().playlist;const nextSong=songIndex!==playlist.length-1?songIndex+1:0;dispatch(play_song(nextSong,playlist[nextSong]));};
/* harmony export (immutable) */ __webpack_exports__["i"] = play_next;
const play_prev=()=>(dispatch,getState)=>{const{playlist,songIndex}=getState().playlist;const prevSong=songIndex!==0?songIndex-1:playlist.length-1;dispatch(play_song(prevSong,playlist[prevSong]));};
/* harmony export (immutable) */ __webpack_exports__["j"] = play_prev;
const load_playlist=genre=>dispatch=>{dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["k" /* PLAYLIST_LOADING */]});return API.load(genre).then(playlist=>dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["j" /* PLAYLIST_LOADED */],playlist}));};
/* harmony export (immutable) */ __webpack_exports__["e"] = load_playlist;
const set_genre=genre=>dispatch=>{dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["k" /* PLAYLIST_LOADING */]});API.setGenre(genre).then(playlist=>dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["j" /* PLAYLIST_LOADED */],playlist}));};
/* harmony export (immutable) */ __webpack_exports__["o"] = set_genre;
const set_tag=tag=>dispatch=>{dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["k" /* PLAYLIST_LOADING */]});API.setTag(tag).then(playlist=>dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["j" /* PLAYLIST_LOADED */],playlist}));};
/* harmony export (immutable) */ __webpack_exports__["p"] = set_tag;
const set_filter=filter=>dispatch=>{dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["k" /* PLAYLIST_LOADING */]});API.setFilter(filter).then(playlist=>dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["j" /* PLAYLIST_LOADED */],playlist}));};
/* harmony export (immutable) */ __webpack_exports__["n"] = set_filter;
const load_playlist_next=()=>(dispatch,getState)=>{const{loadingPlaylist}=getState().root;if(!loadingPlaylist){dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["l" /* PLAYLIST_LOADING_NEXT */]});API.loadNext().then(playlist=>dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["j" /* PLAYLIST_LOADED */],playlist}));}};
/* harmony export (immutable) */ __webpack_exports__["f"] = load_playlist_next;
const search_songs=q=>dispatch=>{dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["d" /* LOADING_SEARCH */]});API.search(q).then(playlist=>dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* LOADED_SEARCH */],playlist}));};
/* harmony export (immutable) */ __webpack_exports__["m"] = search_songs;
const load_next_results=()=>(dispatch,getState)=>{const{loadingSearch}=getState().search;if(!loadingSearch){dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* LOADING_SEARCH_NEXT */]});API.loadNext().then(playlist=>dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* LOADED_SEARCH */],playlist}));}};
/* harmony export (immutable) */ __webpack_exports__["d"] = load_next_results;
const add_to_playlist=song=>(dispatch,getState)=>{const playlist=getState().userPlaylist.playlist;const repeated=playlist.filter(track=>track.id===song.id);if(repeated.length===0){dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* ADD_TO_PLAYLIST */],song});}};
/* harmony export (immutable) */ __webpack_exports__["a"] = add_to_playlist;
const remove_from_playlist=song=>(dispatch,getState)=>{let playlist=getState().userPlaylist.playlist.filter(track=>track.id!==song.id);dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["n" /* REMOVE_FROM_PLAYLIST */],playlist});};
/* harmony export (immutable) */ __webpack_exports__["l"] = remove_from_playlist;


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
const Container=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div`
  display: inline-flex;
  align-items: center;
  position: relative;
  align-self: center;

  &:hover {
    > span {
      opacity: 1;
    }
  }
`;const Tooltip=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].span`
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
`;const Icon=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].img.attrs({alt:"",width:props=>props.size,height:props=>props.size})`
  align-self: center;
`;
/* harmony export (immutable) */ __webpack_exports__["a"] = Icon;
const WithTooltip=({children,tooltip})=>Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Container,null,children,Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Tooltip,null,tooltip));
/* harmony export (immutable) */ __webpack_exports__["b"] = WithTooltip;
/* harmony default export */ __webpack_exports__["c"] = (Icon);

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Components_Loading_Loading__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_SongCard_SongCard__ = __webpack_require__(128);
const Wrapper=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div`
  width: 100%;
  height: 100%;
  position: relative;
  padding-bottom: 65px;
  margin-bottom: 60px;
`;const WithActions=(InnerComponent,infinite=false,fromPlaylist=false)=>{const Card=Object(__WEBPACK_IMPORTED_MODULE_3__Components_SongCard_SongCard__["b" /* SongCard */])(fromPlaylist);return class OuterComponent extends __WEBPACK_IMPORTED_MODULE_0_preact__["a" /* Component */]{constructor(...args){var _temp;return _temp=super(...args),this.playSong=index=>{this.props.playSong(index,this.props.location.pathname);},this.playlistAction=e=>song=>{if(!e)e=window.event;if(e.stopPropagation)e.stopPropagation();this.props.playlistAction(song);},_temp;}render({loadMore,playlist,loading,active}){return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Wrapper,null,InnerComponent&&Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(InnerComponent,null),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_3__Components_SongCard_SongCard__["a" /* CardContainer */],null,playlist.map((song,index)=>Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Card,{song:song,index:index,active:active===song.id,playlistAction:this.playlistAction,play:this.playSong,key:song.id}))),infinite&&Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_2__Components_Loading_Loading__["a" /* default */],{isLoading:loading,loadMore:loadMore}));}};};
/* harmony export (immutable) */ __webpack_exports__["a"] = WithActions;


/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ONLINE="ONLINE";
/* harmony export (immutable) */ __webpack_exports__["g"] = ONLINE;
const OFFLINE="OFFLINE";
/* harmony export (immutable) */ __webpack_exports__["f"] = OFFLINE;
const TOGGLE_SIDEBAR="TOGGLE_SIDEBAR";
/* harmony export (immutable) */ __webpack_exports__["o"] = TOGGLE_SIDEBAR;
const HIDE_SIDEBAR="HIDE_SIDEBAR";
/* unused harmony export HIDE_SIDEBAR */
const PLAYLIST_LOADING="PLAYLIST_LOADING";
/* harmony export (immutable) */ __webpack_exports__["k"] = PLAYLIST_LOADING;
const PLAYLIST_LOADING_NEXT="PLAYLIST_LOADING_NEXT";
/* harmony export (immutable) */ __webpack_exports__["l"] = PLAYLIST_LOADING_NEXT;
const PLAYLIST_LOADED="PLAYLIST_LOADED";
/* harmony export (immutable) */ __webpack_exports__["j"] = PLAYLIST_LOADED;
const PLAY_SONG="PLAY_SONG";
/* harmony export (immutable) */ __webpack_exports__["m"] = PLAY_SONG;
const ON_PLAY="ON_PLAY";
/* harmony export (immutable) */ __webpack_exports__["i"] = ON_PLAY;
const ON_PAUSE="ON_PAUSE";
/* harmony export (immutable) */ __webpack_exports__["h"] = ON_PAUSE;
const ON_TIME_UPDATE="ON_TIME_UPDATE";
/* unused harmony export ON_TIME_UPDATE */
const ON_LOAD_START="ON_LOAD_START";
/* unused harmony export ON_LOAD_START */
const ON_LOADED_METADATA="ON_LOADED_METADATA";
/* unused harmony export ON_LOADED_METADATA */
const ACTIVE_PLAYLIST="ACTIVE_PLAYLIST";
/* harmony export (immutable) */ __webpack_exports__["a"] = ACTIVE_PLAYLIST;
const ADD_TO_PLAYLIST="ADD_TO_PLAYLIST";
/* harmony export (immutable) */ __webpack_exports__["b"] = ADD_TO_PLAYLIST;
const REMOVE_FROM_PLAYLIST="REMOVE_FROM_PLAYLIST";
/* harmony export (immutable) */ __webpack_exports__["n"] = REMOVE_FROM_PLAYLIST;
const LOADING_SEARCH="LOADING_SEARCH";
/* harmony export (immutable) */ __webpack_exports__["d"] = LOADING_SEARCH;
const LOADING_SEARCH_NEXT="LOADING_SEARCH_NEXT";
/* harmony export (immutable) */ __webpack_exports__["e"] = LOADING_SEARCH_NEXT;
const LOADED_SEARCH="LOADED_SEARCH";
/* harmony export (immutable) */ __webpack_exports__["c"] = LOADED_SEARCH;


/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(1);
const Item=__WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].a`
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
    ${props=>props.noMobile&&"display: none"};
  }

  @media screen and (min-width: 500px) {
    ${props=>props.noDesktop&&"display: none"};
  }
`;/* harmony default export */ __webpack_exports__["a"] = (Item);

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registerServiceWorker__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_persist_es_integration_react__ = __webpack_require__(136);
// const store = simpleStore()
const{persistor,store}=Object(__WEBPACK_IMPORTED_MODULE_2__store__["a" /* configStore */])();Object(__WEBPACK_IMPORTED_MODULE_0_preact__["e" /* render */])(Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* Provider */],{store:store},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_5_redux_persist_es_integration_react__["a" /* PersistGate */],{persistor:persistor},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */],null))),document.body);Object(__WEBPACK_IMPORTED_MODULE_4__registerServiceWorker__["a" /* default */])();if(false){require("preact/devtools");}else{console.log("hello there...");}

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_persist__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_persist_lib_storage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_persist_lib_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_persist_lib_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducer__ = __webpack_require__(85);
const config={key:"root",storage: __WEBPACK_IMPORTED_MODULE_2_redux_persist_lib_storage___default.a,blacklist:["playlist","root","search"]};const reducer=Object(__WEBPACK_IMPORTED_MODULE_1_redux_persist__["a" /* persistCombineReducers */])(config,__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */]);const configStore=()=>{let store=Object(__WEBPACK_IMPORTED_MODULE_0_redux__["d" /* createStore */])(reducer,Object(__WEBPACK_IMPORTED_MODULE_0_redux__["a" /* applyMiddleware */])(__WEBPACK_IMPORTED_MODULE_3_redux_thunk___default.a));let persistor=Object(__WEBPACK_IMPORTED_MODULE_1_redux_persist__["b" /* persistStore */])(store);return{persistor,store};};
/* harmony export (immutable) */ __webpack_exports__["a"] = configStore;
// export const simpleStore = () => {
//   const store = createStore(rootReducer, applyMiddleware(thunk))
//   return store
// }

/***/ }),
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(28);
const rootInitialState={sidebarVisible:false,loadingPlaylist:true,isPlaying:false,playlist:[],online:true};const rootReducer=(state=rootInitialState,action)=>{switch(action.type){case __WEBPACK_IMPORTED_MODULE_0__constants__["o" /* TOGGLE_SIDEBAR */]:return Object.assign({},state,{sidebarVisible:!state.sidebarVisible});case __WEBPACK_IMPORTED_MODULE_0__constants__["k" /* PLAYLIST_LOADING */]:return Object.assign({},state,{loadingPlaylist:true,playlist:[]});case __WEBPACK_IMPORTED_MODULE_0__constants__["l" /* PLAYLIST_LOADING_NEXT */]:return Object.assign({},state,{loadingPlaylist:true});case __WEBPACK_IMPORTED_MODULE_0__constants__["j" /* PLAYLIST_LOADED */]:return Object.assign({},state,{loadingPlaylist:false,playlist:[...state.playlist,...action.playlist]});case __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* ONLINE */]:return Object.assign({},state,{online:true});case __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* OFFLINE */]:return Object.assign({},state,{online:false});default:return state;}};const playlistInitialState={playlist:[],songIndex:null,audioUrl:null,currentSong:null,isPlaying:false,location:""};const playlistReducer=(state=playlistInitialState,action)=>{switch(action.type){case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* ACTIVE_PLAYLIST */]:return Object.assign({},state,{playlist:action.currentPlaylist,location:action.location});case __WEBPACK_IMPORTED_MODULE_0__constants__["m" /* PLAY_SONG */]:return Object.assign({},state,{songIndex:action.songIndex,audioUrl:action.audioUrl,currentSong:action.song});case __WEBPACK_IMPORTED_MODULE_0__constants__["i" /* ON_PLAY */]:return Object.assign({},state,{isPlaying:true});case __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* ON_PAUSE */]:return Object.assign({},state,{isPlaying:false});default:return state;}};const searchInitialState={loadingSearch:false,results:[]};const searchReducer=(state=searchInitialState,action)=>{switch(action.type){case __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* LOADING_SEARCH */]:return Object.assign({},state,{loadingSearch:true,results:[]});case __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* LOADING_SEARCH_NEXT */]:return Object.assign({},state,{loadingSearch:true});case __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* LOADED_SEARCH */]:return Object.assign({},state,{loadingSearch:false,results:[...state.results,...action.playlist]});default:return state;}};const userPlaylistReducer=(state={playlist:[]},action)=>{switch(action.type){case __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* ADD_TO_PLAYLIST */]:return{playlist:[...state.playlist,action.song]};case __WEBPACK_IMPORTED_MODULE_0__constants__["n" /* REMOVE_FROM_PLAYLIST */]:return{playlist:action.playlist};default:return state;}};
/* unused harmony export userPlaylistReducer */
/* harmony default export */ __webpack_exports__["a"] = ({root:rootReducer,search:searchReducer,playlist:playlistReducer,userPlaylist:userPlaylistReducer});

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom_es_Route__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom_es_HashRouter__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Routes_Home__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Routes_Search__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Routes_Playlist__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__store_actions__ = __webpack_require__(5);
const Container=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div`
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
`;class App extends __WEBPACK_IMPORTED_MODULE_0_preact__["a" /* Component */]{componentDidMount(){this.props.loadPlaylist().then(()=>{const ele=document.getElementById("loader");if(ele){setTimeout(()=>{ele.classList.add("ready");setTimeout(()=>{ele.outerHTML="";},600);},1000);}});window.addEventListener("online",this.props.isOnline);window.addEventListener("offline",this.props.isOffline);}render(){return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_3_react_router_dom_es_HashRouter__["a" /* default */],null,Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Container,null,Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_5__Components__["c" /* Sidebar */],null),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_2_react_router_dom_es_Route__["a" /* default */],{exact:true,path:"/",component:__WEBPACK_IMPORTED_MODULE_6__Routes_Home__["a" /* default */]}),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_2_react_router_dom_es_Route__["a" /* default */],{path:"/search",component:__WEBPACK_IMPORTED_MODULE_7__Routes_Search__["a" /* default */]}),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_2_react_router_dom_es_Route__["a" /* default */],{path:"/playlist",component:__WEBPACK_IMPORTED_MODULE_8__Routes_Playlist__["a" /* default */]}),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_5__Components__["a" /* Header */],null),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_5__Components__["b" /* Player */],null)));}}const actions={loadPlaylist:__WEBPACK_IMPORTED_MODULE_9__store_actions__["e" /* load_playlist */],isOnline:__WEBPACK_IMPORTED_MODULE_9__store_actions__["c" /* is_online */],isOffline:__WEBPACK_IMPORTED_MODULE_9__store_actions__["b" /* is_offline */]};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(null,actions)(App));

/***/ }),
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Header_Header__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Sidebar_Sidebar__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Player_Player__ = __webpack_require__(120);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__Player_Player__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__Sidebar_Sidebar__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Header_Header__["a"]; });


/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SearchInput_searchInput__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Utils_Icon__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Utils_Item__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_svg__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__menu_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__menu_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__github_svg__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__github_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__github_svg__);
const Wrapper=__WEBPACK_IMPORTED_MODULE_3_styled_components__["a" /* default */].div`
  background: ${props=>props.online?"#fff":"#ef5350"};
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
`;const Header=({toggleSidebar,online})=>Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Wrapper,{online:online},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_6__Utils_Item__["a" /* default */],{link:true,noDesktop:true,onClick:toggleSidebar},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_5__Utils_Icon__["c" /* default */],{size:24,src:__WEBPACK_IMPORTED_MODULE_7__menu_svg___default.a})),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_4__SearchInput_searchInput__["a" /* default */],null),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_6__Utils_Item__["a" /* default */],{link:true,noMobile:true,href:"https://github.com/carlosqsilva/yascc",target:"_blank",rel:"noopener noreferrer"},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_5__Utils_Icon__["c" /* default */],{size:24,src:__WEBPACK_IMPORTED_MODULE_8__github_svg___default.a})));const state=({root})=>({online:root.online});const actions={toggleSidebar:__WEBPACK_IMPORTED_MODULE_2__store_actions__["q" /* toggle_sidebar */]};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(state,actions)(Header));

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// const key = [
//   "client_id=a7Ucuq0KY8Ksn8WzBG6wj4x6pcId6BpU",
//   "client_id=JAgPhXap7XK0g8dUOtklbE7UnF05W8AH",
//   "client_id=x3d1i5dxXwTtUNJAy8djMDh7yYdxSZX0"
// ]
const padZero=(num,size)=>{let s=String(num);while(s.length<size){s=`0${s}`;}return s;};const secToTime=duration=>{const num=parseInt(duration/1000,10);const minutes=padZero(Math.floor(num/60),2);const seconds=padZero(num%60,2);return`${minutes}:${seconds}`;};const formatSongTitle=str=>{if(!str)return"";return str.replace("–","-").split("-").pop();};const formatNumber=likes=>{if(likes<1000)return likes;if(!likes)return 0;const str=likes.toString();const num=str.length;const qtd=num%3===0?3:num%3;return`${str.substring(0,qtd)}${num>=7?"M":"K"}`;};class api{constructor(limit){this.key="client_id=JAgPhXap7XK0g8dUOtklbE7UnF05W8AH";this.tracks=`https://api.soundcloud.com/tracks?linked_partitioning=1&limit=${limit}&${this.key}`;this.created_at=null;this.genre="genres=house";this.tag=null;this.next="";}load(){const url=[this.tracks,this.genre,this.tag,this.created_at].filter(_=>_!==null).join("&");return this.getSongs(url);}setGenre(genre){this.genre=`genres=${genre}`;this.tag=null;return this.load();}setTag(tag){this.tag=`tags=${tag}`;this.genre=null;return this.load();}setFilter(filter){if(!filter)this.created_at=null;this.created_at=`created_at=${filter}`.toLowerCase().split(" ").join("_");return this.load();}loadNext(){return this.getSongs(this.next);}audioStream(url){return Promise.resolve(`${url}?${this.key}`);}search(q){if(!q.trim())return Promise.resolve([]);const query=q.split(" ").filter(str=>str.length>0).join("%20");return this.getSongs(`${this.tracks}&q=${query}`);}getSongs(url){return fetch(url).then(res=>res.json()).then(obj=>{this.next=obj.next_href;const playlist=obj.collection.filter(track=>track.artwork_url!==null&&track.duration!==30000).map(track=>({id:track.id,title:formatSongTitle(track.title),duration:secToTime(track.duration),stream:track.stream_url,artwork:track.artwork_url,user:track.user.username,likesCount:track.likes_count,likesCountMin:formatNumber(track.likes_count)}));return playlist;});}}
/* harmony export (immutable) */ __webpack_exports__["a"] = api;


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom_es_withRouter__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_actions__ = __webpack_require__(5);
const Form=__WEBPACK_IMPORTED_MODULE_2_styled_components__["a" /* default */].form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  flex: 1;
`;const Input=__WEBPACK_IMPORTED_MODULE_2_styled_components__["a" /* default */].input`
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
`;class SearchInput extends __WEBPACK_IMPORTED_MODULE_0_preact__["a" /* Component */]{constructor(...args){var _temp;return _temp=super(...args),this.state={value:""},this.handleChange=e=>{this.setState({value:e.target.value});},this.handleSubmit=e=>{e.preventDefault();this.props.searchSongs(this.state.value);this.props.history.push("/search");},_temp;}render(){const{value}=this.state;return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Form,{onSubmit:this.handleSubmit},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Input,{placeholder:"Search...",value:value,onChange:this.handleChange}));}}const actions={searchSongs:__WEBPACK_IMPORTED_MODULE_4__store_actions__["m" /* search_songs */]};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null,actions)(Object(__WEBPACK_IMPORTED_MODULE_3_react_router_dom_es_withRouter__["a" /* default */])(SearchInput)));

/***/ }),
/* 110 */,
/* 111 */,
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/menu.5096e131.svg";

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/github.26816b67.svg";

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom_es_withRouter__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__options__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Utils_Icon__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SelectInput__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__playlist_svg__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__playlist_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__playlist_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filter_svg__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filter_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__filter_svg__);
const Container=__WEBPACK_IMPORTED_MODULE_4_styled_components__["a" /* default */].div`
  background: linear-gradient(to right, #232526, #414345);
  transition: all 250ms ease;
  position: fixed;
  bottom: 0px;
  left: 0px;
  top: 0px;
  width: 220px;
  z-index: 100;
  overflow-y: scroll;
  transform: ${props=>props.visible?"translateX(0)":"translateX(-100%)"};

  @media screen and (min-width: 500px) {
    transform: translateX(0);
  }
`;const Overlay=__WEBPACK_IMPORTED_MODULE_4_styled_components__["a" /* default */].div`
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
`;const Segment=__WEBPACK_IMPORTED_MODULE_4_styled_components__["a" /* default */].div`
  display: flex;
  text-decoration: none;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: ${props=>props.horizontal?"row":"column"};
  padding: 0.7rem 0 0.7rem 1rem;
  color: rgba(255, 255, 255, 0.9);

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }
`;const LinkSegment=Segment.extend`
  cursor: pointer;
`;const Label=__WEBPACK_IMPORTED_MODULE_4_styled_components__["a" /* default */].strong`
  flex: 1;
  align-self: center;
  margin-left: 20px;
  font-size: 1.1rem;
`;const Header=__WEBPACK_IMPORTED_MODULE_4_styled_components__["a" /* default */].strong`
  color: #fafafa;
  margin-bottom: 3px;
`;const Tag=__WEBPACK_IMPORTED_MODULE_4_styled_components__["a" /* default */].span`
  background-color: whitesmoke;
  color: #111;
  border-radius: 5px;
  margin-right: 20px;
  font-size: 0.8rem;
  padding: 0 0.5rem;
  align-self: center;
`;const Option=__WEBPACK_IMPORTED_MODULE_4_styled_components__["a" /* default */].a`
  flex: 1;
  cursor: pointer;
  font-weight: 500;
  text-decoration: none;
  padding: 3px 0;
  transition: all 250ms ease;
  color: ${props=>props.active?"white":"#999"};

  &:hover {
    color: white;
  }
`;class Sidebar extends __WEBPACK_IMPORTED_MODULE_0_preact__["a" /* Component */]{constructor(...args){var _temp;return _temp=super(...args),this.state={activeItem:""},this.changeRoute=route=>{if(this.props.location.pathname!==route){this.props.history.push(route);}},this.active=name=>{this.setState({activeItem:name});this.changeRoute("/");},this.onChange=e=>{this.props.setFilter(e.target.value);},this.onTag=e=>{const{name}=e.target;this.props.setTag(name);this.active(name);},this.onGenre=e=>{const{name}=e.target;this.props.setGenre(name);this.active(name);},_temp;}render({sidebarVisible,qtd},{activeItem}){return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])("div",null,Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Container,{visible:sidebarVisible},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(LinkSegment,{horizontal:true,onClick:()=>this.changeRoute("/playlist")},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_6__Utils_Icon__["a" /* Icon */],{size:20,src:__WEBPACK_IMPORTED_MODULE_8__playlist_svg___default.a}),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Label,null,"Playlist"),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Tag,null,qtd)),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Segment,{horizontal:true},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_6__Utils_Icon__["a" /* Icon */],{size:20,src:__WEBPACK_IMPORTED_MODULE_9__filter_svg___default.a}),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_7__SelectInput__["a" /* default */],{options:__WEBPACK_IMPORTED_MODULE_5__options__["a" /* filter */],onChange:this.onChange})),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Segment,null,Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Header,null,"Popular Tags"),__WEBPACK_IMPORTED_MODULE_5__options__["c" /* tags */].map((_,i)=>Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Option,{key:i,name:_.value,active:activeItem===_.value,onClick:this.onTag},_.label))),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Segment,null,Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Header,null,"Music Genres"),__WEBPACK_IMPORTED_MODULE_5__options__["b" /* genre */].map((_,i)=>Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Option,{key:i,name:_.value,active:activeItem===_.value,onClick:this.onGenre},_.label)))),sidebarVisible&&Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Overlay,{onClick:this.props.toggleSidebar}));}}const state=({root,userPlaylist})=>({sidebarVisible:root.sidebarVisible,qtd:userPlaylist.playlist.length});const actions={setFilter:__WEBPACK_IMPORTED_MODULE_3__store_actions__["n" /* set_filter */],setGenre:__WEBPACK_IMPORTED_MODULE_3__store_actions__["o" /* set_genre */],setTag:__WEBPACK_IMPORTED_MODULE_3__store_actions__["p" /* set_tag */],toggleSidebar:__WEBPACK_IMPORTED_MODULE_3__store_actions__["q" /* toggle_sidebar */]};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_router_dom_es_withRouter__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(state,actions)(Sidebar)));

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const filter=[{value:"",label:"Default"},{value:"last_hour",label:"Last Hour"},{value:"last_week",label:"Last Week"},{value:"last_month",label:"Last Month"},{value:"last_year",label:"Last Year"}];
/* harmony export (immutable) */ __webpack_exports__["a"] = filter;
const tags=[{value:"chill%20house",label:"#Chill"},{value:"deep%20house",label:"#Deep"},{value:"lofi%20hip%20hop",label:"#Lofi"},{value:"progressive%20house",label:"#Progressive"},{value:"relax",label:"#Relax"},{value:"study",label:"#Study"},{value:"sleep",label:"#Sleep"},{value:"tech%20house",label:"#Tech"},{value:"trance",label:"#Trance"},{value:"tropical%20house",label:"#Tropical"},{value:"workout",label:"#Workout"}];
/* harmony export (immutable) */ __webpack_exports__["c"] = tags;
const genre=[{value:"alternative",label:"Alternative Rock"},{value:"ambient",label:"Ambient"},{value:"classical",label:"Classical"},{value:"country",label:"Country"},{value:"danceedm",label:"Dance & EDM"},{value:"dancehall",label:"Dancehall"},{value:"deephouse",label:"Deep House"},{value:"disco",label:"Disco"},{value:"drumbass",label:"Drum & Bass"},{value:"dubstep",label:"Dubstep"},{value:"eletronic",label:"Electronic"},{value:"hiphoprap",label:"Hip-hop & Rap"},{value:"house",label:"House"},{value:"indie",label:"Indie"},{value:"jazzblues",label:"Jazz & Blues"},{value:"metal",label:"Metal"},{value:"piano",label:"Piano"},{value:"pop",label:"Pop"},{value:"rbsoul",label:"R&B & Soul"},{value:"reggae",label:"Reggae"},{value:"reggaeton",label:"Reggaeton"},{value:"rock",label:"Rock"},{value:"soundtracks",label:"Soundtrack"},{value:"techno",label:"Techno"},{value:"trance",label:"Trance"},{value:"trap",label:"Trap"},{value:"triphop",label:"Triphop"},{value:"world",label:"World"}];
/* harmony export (immutable) */ __webpack_exports__["b"] = genre;


/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__arrow_svg__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__arrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__arrow_svg__);
function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}const Select=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].select`
  appearance: none;
  background: transparent url(${__WEBPACK_IMPORTED_MODULE_2__arrow_svg___default.a}) no-repeat 82% 50%;
  color: whitesmoke;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  align-self: center;
  margin-left: 20px;
  flex: 1;
  outline: 0;
  border: 0;
`;const Option=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].option`
  color: whitesmoke;
  background: #242526;
`;const SelectInput=(_ref)=>{let{options}=_ref,props=_objectWithoutProperties(_ref,["options"]);return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Select,props,options.map((_,i)=>Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Option,{key:i,value:_.value},_.label)));};/* harmony default export */ __webpack_exports__["a"] = (SelectInput);

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/arrow.6cc57b39.svg";

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/playlist.8a2fb585.svg";

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/filter.8397c26e.svg";

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Utils_Item__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Utils_Icon__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Slider_Slider__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__play_svg__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__play_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__play_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__back_svg__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__back_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__back_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__next_svg__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__next_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__next_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pause_svg__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pause_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__pause_svg__);
var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};const Wrapper=__WEBPACK_IMPORTED_MODULE_2_styled_components__["a" /* default */].div`
  background: ${props=>props.online?"#fff":"#ef5350"};
  padding-top: 6px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 40px;
  display: flex;
  transform: ${props=>props.visible?"translateX(0)":"translateX(-100%)"};
  transition: transform 500ms ease;

  @media screen and (min-width: 500px) {
    margin-left: 220px;
    width: calc(100% - 220px);
  }
`;const Controls=__WEBPACK_IMPORTED_MODULE_2_styled_components__["a" /* default */].div`
  display: flex;
  justify-content: center;
`;const Song=__WEBPACK_IMPORTED_MODULE_2_styled_components__["a" /* default */].div`
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
`;class Player extends __WEBPACK_IMPORTED_MODULE_0_preact__["a" /* Component */]{constructor(...args){var _temp;return _temp=super(...args),this.state={duration:0,currentTime:0},this.onLoadedMetadata=()=>{this.setState({duration:this.audioElement.duration});this.audioElement.play();document.title=this.props.currentSong.title;},this.onTimeUpdate=()=>{this.setState({currentTime:this.audioElement.currentTime});},this.changeCurrentTime=currentTime=>{this.audioElement.currentTime=currentTime;},this.togglePlay=()=>{if(this.audioElement.paused){this.audioElement.play();}else{this.audioElement.pause();}},_temp;}componentDidMount(){if("mediaSession"in navigator){navigator.mediaSession.playbackState="paused";navigator.mediaSession.setActionHandler("previoustrack",this.props.playPrev);navigator.mediaSession.setActionHandler("play",this.togglePlay);navigator.mediaSession.setActionHandler("pause",this.togglePlay);navigator.mediaSession.setActionHandler("nexttrack",this.props.playNext);}}componentWillReceiveProps(nextProps){if("mediaSession"in navigator){/* eslint-disable */navigator.mediaSession.metadata=new MediaMetadata({title:nextProps.currentSong.title,artist:nextProps.currentSong.user,artwork:[{src:nextProps.currentSong.artwork.replace("large","t500x500"),sizes:"500x500",type:"image/jpg"}]});/* eslint-enable */}}render({currentSong,isPlaying,audioUrl,playNext,playPrev,onPause,onPlay,online}){return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Wrapper,{visible:currentSong!==null,online:online},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_5__Slider_Slider__["a" /* default */],_extends({onChange:this.changeCurrentTime},this.state)),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Controls,null,Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_3__Utils_Item__["a" /* default */],{link:true,noMobile:true,onClick:playPrev},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_4__Utils_Icon__["a" /* Icon */],{src:__WEBPACK_IMPORTED_MODULE_8__back_svg___default.a,size:25})),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_3__Utils_Item__["a" /* default */],{link:true,onClick:this.togglePlay},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_4__Utils_Icon__["a" /* Icon */],{src:isPlaying?__WEBPACK_IMPORTED_MODULE_10__pause_svg___default.a:__WEBPACK_IMPORTED_MODULE_7__play_svg___default.a,size:25})),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_3__Utils_Item__["a" /* default */],{link:true,noMobile:true,onClick:playNext},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_4__Utils_Icon__["a" /* Icon */],{src:__WEBPACK_IMPORTED_MODULE_9__next_svg___default.a,size:25}))),currentSong&&Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Song,null,Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])("p",null,currentSong.title),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])("p",null,currentSong.user)),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])("audio",{crossOrigin:"anonymous",src:audioUrl,onEnded:playNext,onLoadedMetadata:this.onLoadedMetadata,onPause:onPause,onPlay:onPlay,onTimeUpdate:this.onTimeUpdate,ref:element=>this.audioElement=element}));}}const state=({playlist,root})=>({currentSong:playlist.currentSong,audioUrl:playlist.audioUrl,isPlaying:playlist.isPlaying,online:root.online});const actions={playNext:__WEBPACK_IMPORTED_MODULE_6__store_actions__["i" /* play_next */],playPrev:__WEBPACK_IMPORTED_MODULE_6__store_actions__["j" /* play_prev */],onPause:__WEBPACK_IMPORTED_MODULE_6__store_actions__["g" /* on_pause */],onPlay:__WEBPACK_IMPORTED_MODULE_6__store_actions__["h" /* on_play */]};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(state,actions)(Player));

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
const SliderDuration=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div`
  background-color: rgba(0, 0, 0, 0.03);
  cursor: pointer;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 6px;
`;const SliderFill=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div`
  background-color: #21d4fd;
  border-radius: 0 3px 3px 0;
  height: 6px;
  width: 100%;
  transform: translateX(-100%);
  /* will-change: width; */
`;const offsetLeft=element=>{let el=element;let x=el.offsetLeft;while(el.offsetParent){x+=el.offsetParent.offsetLeft;el=el.offsetParent;}return x;};class Slider extends __WEBPACK_IMPORTED_MODULE_0_preact__["a" /* Component */]{constructor(...args){var _temp;return _temp=super(...args),this.onClick=e=>{const{duration,onChange}=this.props;const percent=(e.clientX-offsetLeft(e.currentTarget))/e.currentTarget.offsetWidth;onChange(percent*duration);},_temp;}render({currentTime,duration}){const transform=`translateX(-${100-currentTime/duration*100}%)`;return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(SliderDuration,{onClick:this.onClick},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(SliderFill,{style:{transform}}));}}/* harmony default export */ __webpack_exports__["a"] = (Slider);

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/play.73faf2c4.svg";

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/back.8ce1c030.svg";

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/next.74ab42e1.svg";

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/pause.2437f28e.svg";

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store_actions__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Container__ = __webpack_require__(14);
const Home=Object(__WEBPACK_IMPORTED_MODULE_2__Container__["a" /* WithActions */])(null,true);const state=({root,playlist},ownProps)=>{if(playlist.location===ownProps.location.pathname){if(playlist.currentSong!==null){return{playlist:root.playlist,loading:root.loadingPlaylist,active:playlist.currentSong.id};}}return{playlist:root.playlist,loading:root.loadingPlaylist,active:null};};const actions={loadMore:__WEBPACK_IMPORTED_MODULE_1__store_actions__["f" /* load_playlist_next */],playSong:__WEBPACK_IMPORTED_MODULE_1__store_actions__["k" /* play_song_from_btn */],playlistAction:__WEBPACK_IMPORTED_MODULE_1__store_actions__["a" /* add_to_playlist */]};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */])(state,actions)(Home));

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
const spin=__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* keyframes */]`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;const LoadingSpin=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div`
  margin: 0 auto;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  border: 0.2rem solid #dedede;
  border-top-color: #444;
  animation: ${spin} 1s infinite linear;
`;const LoadMore=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].a`
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
`;class Loading extends __WEBPACK_IMPORTED_MODULE_0_preact__["a" /* Component */]{componentDidMount(){this.observer=new IntersectionObserver(this.props.loadMore);this.observer.observe(this.target);}componentWillUnmount(){this.observer.unobserve(this.target);}render({loadMore,isLoading}){return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(LoadMore,{onClick:loadMore,innerRef:e=>this.target=e},isLoading?Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(LoadingSpin,null):"Load More...");}}/* harmony default export */ __webpack_exports__["a"] = (Loading);

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Utils_Icon__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__play_svg__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__play_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__play_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_svg__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__add_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__like_svg__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__like_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__like_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__remove_svg__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__remove_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__remove_svg__);
const PlayIcon=__WEBPACK_IMPORTED_MODULE_2__Utils_Icon__["a" /* Icon */].extend`
  display: none;

  @media screen and (min-width: 500px) {
    opacity: 0;
    transition: transform 200ms ease;
    margin: auto;
    display: block;
    transform: scale(0.1);
  }
`;const Card=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div`
  background: ${props=>props.active?"transparent":"white"};
  position: relative;
  cursor: pointer;
  padding: 8px;
  display: flex;

  @media screen and (min-width: 500px) {
    border-radius: 4px;
  }

  &:hover {
    ${PlayIcon} {
      opacity: 1;
      transform: scale(1);
    }
  }
`;const Artwork=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div`
  background-size: cover;
  background-position: center;
  display: flex;
  min-width: 60px;
  min-height: 60px;
`;const Container=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div`
  position: relative;
  margin: 0 0 0 5px;
  overflow: hidden;
  flex: 1;

  @media screen and (min-width: 500px) {
    overflow: initial;
  }
`;const Artist=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].p`
  color: #777;
  font-size: 0.8rem;
`;const Music=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].p`
  color: #444;
  font-size: 0.85rem;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  @media screen and (min-width: 500px) {
    width: 180px;
  }
`;const Wrapper=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
`;const Info=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].span`
  margin: 0 10px 0 3px;
  font-size: 0.7rem;
  color: #666;
`;const Duration=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].span`
  font-size: 0.8rem;
  color: #666;
  flex: 1;
`;const CardContainer=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div`
  position: relative;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));

  @media screen and (min-width: 500px) {
    grid-template-columns: repeat(auto-fit, 260px);
    grid-gap: 15px;
  }
`;
/* harmony export (immutable) */ __webpack_exports__["a"] = CardContainer;
const SongCard=fromPlaylist=>{const option=fromPlaylist?__WEBPACK_IMPORTED_MODULE_6__remove_svg___default.a:__WEBPACK_IMPORTED_MODULE_4__add_svg___default.a;const message=fromPlaylist?"Remove from Playlist":"Add to Playlist";return({song,index,play,playlistAction,active})=>Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Card,{onClick:()=>play(index),active:active},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Artwork,{style:{backgroundImage:`url(${song.artwork})`}},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(PlayIcon,{src:__WEBPACK_IMPORTED_MODULE_3__play_svg___default.a,size:30})),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Container,null,Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Music,{title:song.title},song.title),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Artist,null,song.user),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Wrapper,null,Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Duration,null,song.duration),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_2__Utils_Icon__["b" /* WithTooltip */],{tooltip:`${song.likesCount} likes`},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_2__Utils_Icon__["a" /* Icon */],{src:__WEBPACK_IMPORTED_MODULE_5__like_svg___default.a,size:9,alt:""}),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Info,null,song.likesCountMin)),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_2__Utils_Icon__["b" /* WithTooltip */],{tooltip:message},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_2__Utils_Icon__["a" /* Icon */],{onClick:e=>playlistAction(e)(song),src:option,style:{marginTop:"1px"},size:16})))));};
/* harmony export (immutable) */ __webpack_exports__["b"] = SongCard;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/play.213768f4.svg";

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/add.61292292.svg";

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/like.1517cac4.svg";

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/remove.3e562134.svg";

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Container__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_actions__ = __webpack_require__(5);
const Search=Object(__WEBPACK_IMPORTED_MODULE_1__Container__["a" /* WithActions */])(null,true);const state=({search,playlist},ownProps)=>{if(playlist.location===ownProps.location.pathname){if(playlist.currentSong!==null){return{playlist:search.results,loading:search.loadingSearch,active:playlist.currentSong.id};}}return{playlist:search.results,loading:search.loadingSearch,active:null};};const actions={loadMore:__WEBPACK_IMPORTED_MODULE_2__store_actions__["d" /* load_next_results */],playSong:__WEBPACK_IMPORTED_MODULE_2__store_actions__["k" /* play_song_from_btn */],playlistAction:__WEBPACK_IMPORTED_MODULE_2__store_actions__["a" /* add_to_playlist */]};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */])(state,actions)(Search));

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Container__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_actions__ = __webpack_require__(5);
const Playlist=Object(__WEBPACK_IMPORTED_MODULE_1__Container__["a" /* WithActions */])(null,false,true);const state=({userPlaylist,playlist},ownProps)=>{if(playlist.location===ownProps.location.pathname){if(playlist.currentSong!==null){return{playlist:userPlaylist.playlist,active:playlist.currentSong.id};}}return{playlist:userPlaylist.playlist,active:null};};const actions={playSong:__WEBPACK_IMPORTED_MODULE_2__store_actions__["k" /* play_song_from_btn */],playlistAction:__WEBPACK_IMPORTED_MODULE_2__store_actions__["l" /* remove_from_playlist */]};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */])(state,actions)(Playlist));

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = register;
/* unused harmony export unregister */
// In production, we register a service worker to serve assets from local cache.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.
// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.
const isLocalhost=Boolean(window.location.hostname==='localhost'||// [::1] is the IPv6 localhost address.
window.location.hostname==='[::1]'||// 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function register(){if("production"==='production'&&'serviceWorker'in navigator){// The URL constructor is available in all browsers that support SW.
const publicUrl=new URL("/YASCC",window.location);if(publicUrl.origin!==window.location.origin){// Our service worker won't work if PUBLIC_URL is on a different origin
// from what our page is served on. This might happen if a CDN is used to
// serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
return;}window.addEventListener('load',()=>{const swUrl=`${"/YASCC"}/service-worker.js`;if(isLocalhost){// This is running on localhost. Lets check if a service worker still exists or not.
checkValidServiceWorker(swUrl);}else{// Is not local host. Just register service worker
registerValidSW(swUrl);}});}}function registerValidSW(swUrl){navigator.serviceWorker.register(swUrl).then(registration=>{registration.onupdatefound=()=>{const installingWorker=registration.installing;installingWorker.onstatechange=()=>{if(installingWorker.state==='installed'){if(navigator.serviceWorker.controller){// At this point, the old content will have been purged and
// the fresh content will have been added to the cache.
// It's the perfect time to display a "New content is
// available; please refresh." message in your web app.
console.log('New content is available; please refresh.');}else{// At this point, everything has been precached.
// It's the perfect time to display a
// "Content is cached for offline use." message.
console.log('Content is cached for offline use.');}}};};}).catch(error=>{console.error('Error during service worker registration:',error);});}function checkValidServiceWorker(swUrl){// Check if the service worker can be found. If it can't reload the page.
fetch(swUrl).then(response=>{// Ensure service worker exists, and that we really are getting a JS file.
if(response.status===404||response.headers.get('content-type').indexOf('javascript')===-1){// No service worker found. Probably a different app. Reload the page.
navigator.serviceWorker.ready.then(registration=>{registration.unregister().then(()=>{window.location.reload();});});}else{// Service worker found. Proceed as normal.
registerValidSW(swUrl);}}).catch(()=>{console.log('No internet connection found. App is running in offline mode.');});}function unregister(){if('serviceWorker'in navigator){navigator.serviceWorker.ready.then(registration=>{registration.unregister();});}}

/***/ })
],[33]);
//# sourceMappingURL=main.be502ae2.js.map