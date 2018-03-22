webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return is_online; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return is_offline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return toggle_sidebar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return on_play; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return on_pause; });
/* unused harmony export play_song */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return play_song_from_btn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return play_next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return play_prev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return load_playlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return set_genre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return set_tag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return set_filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return load_playlist_next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return search_songs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return load_next_results; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return add_to_playlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return remove_from_playlist; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api__ = __webpack_require__(108);
var API=new __WEBPACK_IMPORTED_MODULE_1__api__["a" /* api */](35);var is_online=function is_online(){return{type:__WEBPACK_IMPORTED_MODULE_0__constants__["g" /* ONLINE */]};};var is_offline=function is_offline(){return{type:__WEBPACK_IMPORTED_MODULE_0__constants__["f" /* OFFLINE */]};};var toggle_sidebar=function toggle_sidebar(){return{type:__WEBPACK_IMPORTED_MODULE_0__constants__["o" /* TOGGLE_SIDEBAR */]};};var on_play=function on_play(){return{type:__WEBPACK_IMPORTED_MODULE_0__constants__["i" /* ON_PLAY */]};};var on_pause=function on_pause(){return{type:__WEBPACK_IMPORTED_MODULE_0__constants__["h" /* ON_PAUSE */]};};var play_song=function play_song(songIndex,song){return function(dispatch){API.audioStream(song.stream).then(function(audioUrl){return dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["m" /* PLAY_SONG */],songIndex:songIndex,song:song,audioUrl:audioUrl});});};};var play_song_from_btn=function play_song_from_btn(index,route){return function(dispatch,getState){var _getState$playlist=getState().playlist,playlist=_getState$playlist.playlist,location=_getState$playlist.location;var newPlaylist=void 0;switch(route){case"/":newPlaylist=getState().root.playlist;break;case"/search":newPlaylist=getState().search.results;break;case"/playlist":newPlaylist=getState().userPlaylist.playlist;break;default:return[];}dispatch(play_song(index,newPlaylist[index]));if(playlist.length!==newPlaylist.length||location!==route){dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["a" /* ACTIVE_PLAYLIST */],currentPlaylist:newPlaylist,location:route});}};};var play_next=function play_next(){return function(dispatch,getState){var _getState$playlist2=getState().playlist,playlist=_getState$playlist2.playlist,songIndex=_getState$playlist2.songIndex;var nextSong=songIndex!==playlist.length-1?songIndex+1:0;dispatch(play_song(nextSong,playlist[nextSong]));};};var play_prev=function play_prev(){return function(dispatch,getState){var _getState$playlist3=getState().playlist,playlist=_getState$playlist3.playlist,songIndex=_getState$playlist3.songIndex;var prevSong=songIndex!==0?songIndex-1:playlist.length-1;dispatch(play_song(prevSong,playlist[prevSong]));};};var load_playlist=function load_playlist(genre){return function(dispatch){dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["k" /* PLAYLIST_LOADING */]});return API.load(genre).then(function(playlist){return dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["j" /* PLAYLIST_LOADED */],playlist:playlist});});};};var set_genre=function set_genre(genre){return function(dispatch){dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["k" /* PLAYLIST_LOADING */]});API.setGenre(genre).then(function(playlist){return dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["j" /* PLAYLIST_LOADED */],playlist:playlist});});};};var set_tag=function set_tag(tag){return function(dispatch){dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["k" /* PLAYLIST_LOADING */]});API.setTag(tag).then(function(playlist){return dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["j" /* PLAYLIST_LOADED */],playlist:playlist});});};};var set_filter=function set_filter(filter){return function(dispatch){dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["k" /* PLAYLIST_LOADING */]});API.setFilter(filter).then(function(playlist){return dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["j" /* PLAYLIST_LOADED */],playlist:playlist});});};};var load_playlist_next=function load_playlist_next(){return function(dispatch,getState){var loadingPlaylist=getState().root.loadingPlaylist;if(!loadingPlaylist){dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["l" /* PLAYLIST_LOADING_NEXT */]});API.loadNext().then(function(playlist){return dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["j" /* PLAYLIST_LOADED */],playlist:playlist});});}};};var search_songs=function search_songs(q){return function(dispatch){dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["d" /* LOADING_SEARCH */]});API.search(q).then(function(playlist){return dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* LOADED_SEARCH */],playlist:playlist});});};};var load_next_results=function load_next_results(){return function(dispatch,getState){var loadingSearch=getState().search.loadingSearch;if(!loadingSearch){dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["e" /* LOADING_SEARCH_NEXT */]});API.loadNext().then(function(playlist){return dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["c" /* LOADED_SEARCH */],playlist:playlist});});}};};var add_to_playlist=function add_to_playlist(song){return function(dispatch,getState){var playlist=getState().userPlaylist.playlist;var repeated=playlist.filter(function(track){return track.id===song.id;});if(repeated.length===0){dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["b" /* ADD_TO_PLAYLIST */],song:song});}};};var remove_from_playlist=function remove_from_playlist(song){return function(dispatch,getState){var playlist=getState().userPlaylist.playlist.filter(function(track){return track.id!==song.id;});dispatch({type:__WEBPACK_IMPORTED_MODULE_0__constants__["n" /* REMOVE_FROM_PLAYLIST */],playlist:playlist});};};

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WithTooltip; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
var _templateObject=_taggedTemplateLiteral(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  align-self: center;\n\n  &:hover {\n    > span {\n      opacity: 1;\n    }\n  }\n"],["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  align-self: center;\n\n  &:hover {\n    > span {\n      opacity: 1;\n    }\n  }\n"]),_templateObject2=_taggedTemplateLiteral(["\n  display: none;\n  @media screen and (min-width: 500px) {\n    opacity: 0;\n    display: inline-block;\n    pointer-events: none;\n    background: #000;\n    color: #fff;\n    font-size: 0.8rem;\n    padding: 5px 8px;\n    border-radius: 6px;\n    white-space: nowrap;\n    position: absolute;\n    top: 180%;\n    left: 50%;\n    transform: translateX(-85%);\n    z-index: 999;\n\n    &::after {\n      content: \"\";\n      position: absolute;\n      bottom: 100%;\n      right: 10%;\n      margin-left: -5px;\n      border-width: 5px;\n      border-style: solid;\n      border-color: transparent transparent black transparent;\n    }\n  }\n"],["\n  display: none;\n  @media screen and (min-width: 500px) {\n    opacity: 0;\n    display: inline-block;\n    pointer-events: none;\n    background: #000;\n    color: #fff;\n    font-size: 0.8rem;\n    padding: 5px 8px;\n    border-radius: 6px;\n    white-space: nowrap;\n    position: absolute;\n    top: 180%;\n    left: 50%;\n    transform: translateX(-85%);\n    z-index: 999;\n\n    &::after {\n      content: \"\";\n      position: absolute;\n      bottom: 100%;\n      right: 10%;\n      margin-left: -5px;\n      border-width: 5px;\n      border-style: solid;\n      border-color: transparent transparent black transparent;\n    }\n  }\n"]),_templateObject3=_taggedTemplateLiteral(["\n  align-self: center;\n"],["\n  align-self: center;\n"]);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Container=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject);var Tooltip=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].span(_templateObject2);var Icon=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].img.attrs({alt:"",width:function width(props){return props.size;},height:function height(props){return props.size;}})(_templateObject3);var WithTooltip=function WithTooltip(_ref){var children=_ref.children,tooltip=_ref.tooltip;return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Container,null,children,Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Tooltip,null,tooltip));};/* harmony default export */ __webpack_exports__["c"] = (Icon);

/***/ }),
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WithActions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Components_Loading_Loading__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Components_SongCard_SongCard__ = __webpack_require__(128);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  padding-bottom: 65px;\n  margin-bottom: 60px;\n"],["\n  width: 100%;\n  height: 100%;\n  position: relative;\n  padding-bottom: 65px;\n  margin-bottom: 60px;\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Wrapper=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject);var WithActions=function WithActions(InnerComponent){var infinite=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var fromPlaylist=arguments.length>2&&arguments[2]!==undefined?arguments[2]:false;var Card=Object(__WEBPACK_IMPORTED_MODULE_3__Components_SongCard_SongCard__["b" /* SongCard */])(fromPlaylist);return function(_Component){_inherits(OuterComponent,_Component);function OuterComponent(){var _ref;var _temp,_this,_ret;_classCallCheck(this,OuterComponent);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=OuterComponent.__proto__||Object.getPrototypeOf(OuterComponent)).call.apply(_ref,[this].concat(args))),_this),_this.playSong=function(index){_this.props.playSong(index,_this.props.location.pathname);},_this.playlistAction=function(e){return function(song){if(!e)e=window.event;if(e.stopPropagation)e.stopPropagation();_this.props.playlistAction(song);};},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(OuterComponent,[{key:"render",value:function render(_ref2){var _this2=this;var loadMore=_ref2.loadMore,playlist=_ref2.playlist,loading=_ref2.loading,active=_ref2.active;return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Wrapper,null,InnerComponent&&Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(InnerComponent,null),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_3__Components_SongCard_SongCard__["a" /* CardContainer */],null,playlist.map(function(song,index){return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Card,{song:song,index:index,active:active===song.id,playlistAction:_this2.playlistAction,play:_this2.playSong,key:song.id});})),infinite&&Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_2__Components_Loading_Loading__["a" /* default */],{isLoading:loading,loadMore:loadMore}));}}]);return OuterComponent;}(__WEBPACK_IMPORTED_MODULE_0_preact__["a" /* Component */]);};

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ONLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return OFFLINE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return TOGGLE_SIDEBAR; });
/* unused harmony export HIDE_SIDEBAR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return PLAYLIST_LOADING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return PLAYLIST_LOADING_NEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return PLAYLIST_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return PLAY_SONG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return ON_PLAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return ON_PAUSE; });
/* unused harmony export ON_TIME_UPDATE */
/* unused harmony export ON_LOAD_START */
/* unused harmony export ON_LOADED_METADATA */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTIVE_PLAYLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_TO_PLAYLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return REMOVE_FROM_PLAYLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LOADING_SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LOADING_SEARCH_NEXT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LOADED_SEARCH; });
var ONLINE="ONLINE";var OFFLINE="OFFLINE";var TOGGLE_SIDEBAR="TOGGLE_SIDEBAR";var HIDE_SIDEBAR="HIDE_SIDEBAR";var PLAYLIST_LOADING="PLAYLIST_LOADING";var PLAYLIST_LOADING_NEXT="PLAYLIST_LOADING_NEXT";var PLAYLIST_LOADED="PLAYLIST_LOADED";var PLAY_SONG="PLAY_SONG";var ON_PLAY="ON_PLAY";var ON_PAUSE="ON_PAUSE";var ON_TIME_UPDATE="ON_TIME_UPDATE";var ON_LOAD_START="ON_LOAD_START";var ON_LOADED_METADATA="ON_LOADED_METADATA";var ACTIVE_PLAYLIST="ACTIVE_PLAYLIST";var ADD_TO_PLAYLIST="ADD_TO_PLAYLIST";var REMOVE_FROM_PLAYLIST="REMOVE_FROM_PLAYLIST";var LOADING_SEARCH="LOADING_SEARCH";var LOADING_SEARCH_NEXT="LOADING_SEARCH_NEXT";var LOADED_SEARCH="LOADED_SEARCH";

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_components__ = __webpack_require__(1);
var _templateObject=_taggedTemplateLiteral(["\n  cursor: pointer;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  text-decoration: none;\n  font-size: 0.9rem;\n\n  min-width: 60px;\n  padding: 0 10px;\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.03);\n  }\n\n  @media screen and (max-width: 500px) {\n    ",";\n  }\n\n  @media screen and (min-width: 500px) {\n    ",";\n  }\n"],["\n  cursor: pointer;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  text-decoration: none;\n  font-size: 0.9rem;\n\n  min-width: 60px;\n  padding: 0 10px;\n\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.03);\n  }\n\n  @media screen and (max-width: 500px) {\n    ",";\n  }\n\n  @media screen and (min-width: 500px) {\n    ",";\n  }\n"]);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Item=__WEBPACK_IMPORTED_MODULE_0_styled_components__["a" /* default */].a(_templateObject,function(props){return props.noMobile&&"display: none";},function(props){return props.noDesktop&&"display: none";});/* harmony default export */ __webpack_exports__["a"] = (Item);

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
var _configStore=Object(__WEBPACK_IMPORTED_MODULE_2__store__["a" /* configStore */])(),persistor=_configStore.persistor,store=_configStore.store;Object(__WEBPACK_IMPORTED_MODULE_0_preact__["e" /* render */])(Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* Provider */],{store:store},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_5_redux_persist_es_integration_react__["a" /* PersistGate */],{persistor:persistor},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */],null))),document.body);Object(__WEBPACK_IMPORTED_MODULE_4__registerServiceWorker__["a" /* default */])();if(false){require("preact/devtools");}else{console.log("hello there...");}

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return configStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_persist__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_persist_lib_storage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_persist_lib_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_persist_lib_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducer__ = __webpack_require__(85);
var config={key:"root",storage:__WEBPACK_IMPORTED_MODULE_2_redux_persist_lib_storage___default.a,blacklist:["playlist","root","search"]};var reducer=Object(__WEBPACK_IMPORTED_MODULE_1_redux_persist__["a" /* persistCombineReducers */])(config,__WEBPACK_IMPORTED_MODULE_4__reducer__["a" /* default */]);var configStore=function configStore(){var store=Object(__WEBPACK_IMPORTED_MODULE_0_redux__["d" /* createStore */])(reducer,Object(__WEBPACK_IMPORTED_MODULE_0_redux__["a" /* applyMiddleware */])(__WEBPACK_IMPORTED_MODULE_3_redux_thunk___default.a));var persistor=Object(__WEBPACK_IMPORTED_MODULE_1_redux_persist__["b" /* persistStore */])(store);return{persistor:persistor,store:store};};// export const simpleStore = () => {
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
/* unused harmony export userPlaylistReducer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constants__ = __webpack_require__(28);
function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++){arr2[i]=arr[i];}return arr2;}else{return Array.from(arr);}}var rootInitialState={sidebarVisible:false,loadingPlaylist:true,isPlaying:false,playlist:[],online:true};var rootReducer=function rootReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:rootInitialState;var action=arguments[1];switch(action.type){case __WEBPACK_IMPORTED_MODULE_0__constants__["o" /* TOGGLE_SIDEBAR */]:return Object.assign({},state,{sidebarVisible:!state.sidebarVisible});case __WEBPACK_IMPORTED_MODULE_0__constants__["k" /* PLAYLIST_LOADING */]:return Object.assign({},state,{loadingPlaylist:true,playlist:[]});case __WEBPACK_IMPORTED_MODULE_0__constants__["l" /* PLAYLIST_LOADING_NEXT */]:return Object.assign({},state,{loadingPlaylist:true});case __WEBPACK_IMPORTED_MODULE_0__constants__["j" /* PLAYLIST_LOADED */]:return Object.assign({},state,{loadingPlaylist:false,playlist:[].concat(_toConsumableArray(state.playlist),_toConsumableArray(action.playlist))});case __WEBPACK_IMPORTED_MODULE_0__constants__["g" /* ONLINE */]:return Object.assign({},state,{online:true});case __WEBPACK_IMPORTED_MODULE_0__constants__["f" /* OFFLINE */]:return Object.assign({},state,{online:false});default:return state;}};var playlistInitialState={playlist:[],songIndex:null,audioUrl:null,currentSong:null,isPlaying:false,location:""};var playlistReducer=function playlistReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:playlistInitialState;var action=arguments[1];switch(action.type){case __WEBPACK_IMPORTED_MODULE_0__constants__["a" /* ACTIVE_PLAYLIST */]:return Object.assign({},state,{playlist:action.currentPlaylist,location:action.location});case __WEBPACK_IMPORTED_MODULE_0__constants__["m" /* PLAY_SONG */]:return Object.assign({},state,{songIndex:action.songIndex,audioUrl:action.audioUrl,currentSong:action.song});case __WEBPACK_IMPORTED_MODULE_0__constants__["i" /* ON_PLAY */]:return Object.assign({},state,{isPlaying:true});case __WEBPACK_IMPORTED_MODULE_0__constants__["h" /* ON_PAUSE */]:return Object.assign({},state,{isPlaying:false});default:return state;}};var searchInitialState={loadingSearch:false,results:[]};var searchReducer=function searchReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:searchInitialState;var action=arguments[1];switch(action.type){case __WEBPACK_IMPORTED_MODULE_0__constants__["d" /* LOADING_SEARCH */]:return Object.assign({},state,{loadingSearch:true,results:[]});case __WEBPACK_IMPORTED_MODULE_0__constants__["e" /* LOADING_SEARCH_NEXT */]:return Object.assign({},state,{loadingSearch:true});case __WEBPACK_IMPORTED_MODULE_0__constants__["c" /* LOADED_SEARCH */]:return Object.assign({},state,{loadingSearch:false,results:[].concat(_toConsumableArray(state.results),_toConsumableArray(action.playlist))});default:return state;}};var userPlaylistReducer=function userPlaylistReducer(){var state=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{playlist:[]};var action=arguments[1];switch(action.type){case __WEBPACK_IMPORTED_MODULE_0__constants__["b" /* ADD_TO_PLAYLIST */]:return{playlist:[].concat(_toConsumableArray(state.playlist),[action.song])};case __WEBPACK_IMPORTED_MODULE_0__constants__["n" /* REMOVE_FROM_PLAYLIST */]:return{playlist:action.playlist};default:return state;}};/* harmony default export */ __webpack_exports__["a"] = ({root:rootReducer,search:searchReducer,playlist:playlistReducer,userPlaylist:userPlaylistReducer});

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
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n  position: relative;\n  min-height: 100vh;\n  max-width: 100%;\n  margin-top: 50px;\n  padding: 10px;\n  transition: all 250ms ease;\n\n  @media screen and (min-width: 500px) {\n    margin-left: 220px;\n    padding: 15px;\n  }\n"],["\n  position: relative;\n  min-height: 100vh;\n  max-width: 100%;\n  margin-top: 50px;\n  padding: 10px;\n  transition: all 250ms ease;\n\n  @media screen and (min-width: 500px) {\n    margin-left: 220px;\n    padding: 15px;\n  }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Container=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject);var App=function(_Component){_inherits(App,_Component);function App(){_classCallCheck(this,App);return _possibleConstructorReturn(this,(App.__proto__||Object.getPrototypeOf(App)).apply(this,arguments));}_createClass(App,[{key:"componentDidMount",value:function componentDidMount(){this.props.loadPlaylist().then(function(){var ele=document.getElementById("loader");if(ele){setTimeout(function(){ele.classList.add("ready");setTimeout(function(){ele.outerHTML="";},600);},1000);}});window.addEventListener("online",this.props.isOnline);window.addEventListener("offline",this.props.isOffline);}},{key:"render",value:function render(){return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_3_react_router_dom_es_HashRouter__["a" /* default */],null,Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Container,null,Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_5__Components__["c" /* Sidebar */],null),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_2_react_router_dom_es_Route__["a" /* default */],{exact:true,path:"/",component:__WEBPACK_IMPORTED_MODULE_6__Routes_Home__["a" /* default */]}),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_2_react_router_dom_es_Route__["a" /* default */],{path:"/search",component:__WEBPACK_IMPORTED_MODULE_7__Routes_Search__["a" /* default */]}),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_2_react_router_dom_es_Route__["a" /* default */],{path:"/playlist",component:__WEBPACK_IMPORTED_MODULE_8__Routes_Playlist__["a" /* default */]}),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_5__Components__["a" /* Header */],null),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_5__Components__["b" /* Player */],null)));}}]);return App;}(__WEBPACK_IMPORTED_MODULE_0_preact__["a" /* Component */]);var actions={loadPlaylist:__WEBPACK_IMPORTED_MODULE_9__store_actions__["e" /* load_playlist */],isOnline:__WEBPACK_IMPORTED_MODULE_9__store_actions__["c" /* is_online */],isOffline:__WEBPACK_IMPORTED_MODULE_9__store_actions__["b" /* is_offline */]};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_redux__["b" /* connect */])(null,actions)(App));

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
var _templateObject=_taggedTemplateLiteral(["\n  background: ",";\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 50px;\n  display: flex;\n\n  @media screen and (min-width: 500px) {\n    padding-left: 220px;\n  }\n\n  &::after {\n    box-shadow: inset 0px 4px 8px -3px rgba(17, 17, 17, 0.06);\n    position: absolute;\n    bottom: -5px;\n    width: 100%;\n    height: 5px;\n    content: \"\";\n  }\n"],["\n  background: ",";\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 50px;\n  display: flex;\n\n  @media screen and (min-width: 500px) {\n    padding-left: 220px;\n  }\n\n  &::after {\n    box-shadow: inset 0px 4px 8px -3px rgba(17, 17, 17, 0.06);\n    position: absolute;\n    bottom: -5px;\n    width: 100%;\n    height: 5px;\n    content: \"\";\n  }\n"]);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Wrapper=__WEBPACK_IMPORTED_MODULE_3_styled_components__["a" /* default */].div(_templateObject,function(props){return props.online?"#fff":"#ef5350";});var Header=function Header(_ref){var toggleSidebar=_ref.toggleSidebar,online=_ref.online;return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Wrapper,{online:online},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_6__Utils_Item__["a" /* default */],{link:true,noDesktop:true,onClick:toggleSidebar},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_5__Utils_Icon__["c" /* default */],{size:24,src:__WEBPACK_IMPORTED_MODULE_7__menu_svg___default.a})),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_4__SearchInput_searchInput__["a" /* default */],null),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_6__Utils_Item__["a" /* default */],{link:true,noMobile:true,href:"https://github.com/carlosqsilva/yascc",target:"_blank",rel:"noopener noreferrer"},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_5__Utils_Icon__["c" /* default */],{size:24,src:__WEBPACK_IMPORTED_MODULE_8__github_svg___default.a})));};var state=function state(_ref2){var root=_ref2.root;return{online:root.online};};var actions={toggleSidebar:__WEBPACK_IMPORTED_MODULE_2__store_actions__["q" /* toggle_sidebar */]};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(state,actions)(Header));

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return api; });
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}// const key = [
//   "client_id=a7Ucuq0KY8Ksn8WzBG6wj4x6pcId6BpU",
//   "client_id=JAgPhXap7XK0g8dUOtklbE7UnF05W8AH",
//   "client_id=x3d1i5dxXwTtUNJAy8djMDh7yYdxSZX0"
// ]
var padZero=function padZero(num,size){var s=String(num);while(s.length<size){s="0"+s;}return s;};var secToTime=function secToTime(duration){var num=parseInt(duration/1000,10);var minutes=padZero(Math.floor(num/60),2);var seconds=padZero(num%60,2);return minutes+":"+seconds;};var formatSongTitle=function formatSongTitle(str){if(!str)return"";return str.replace("–","-").split("-").pop();};var formatNumber=function formatNumber(likes){if(likes<1000)return likes;if(!likes)return 0;var str=likes.toString();var num=str.length;var qtd=num%3===0?3:num%3;return""+str.substring(0,qtd)+(num>=7?"M":"K");};var api=function(){function api(limit){_classCallCheck(this,api);this.key="client_id=JAgPhXap7XK0g8dUOtklbE7UnF05W8AH";this.tracks="https://api.soundcloud.com/tracks?linked_partitioning=1&limit="+limit+"&"+this.key;this.created_at=null;this.genre="genres=house";this.tag=null;this.next="";}_createClass(api,[{key:"load",value:function load(){var url=[this.tracks,this.genre,this.tag,this.created_at].filter(function(_){return _!==null;}).join("&");return this.getSongs(url);}},{key:"setGenre",value:function setGenre(genre){this.genre="genres="+genre;this.tag=null;return this.load();}},{key:"setTag",value:function setTag(tag){this.tag="tags="+tag;this.genre=null;return this.load();}},{key:"setFilter",value:function setFilter(filter){if(!filter)this.created_at=null;this.created_at=("created_at="+filter).toLowerCase().split(" ").join("_");return this.load();}},{key:"loadNext",value:function loadNext(){return this.getSongs(this.next);}},{key:"audioStream",value:function audioStream(url){return Promise.resolve(url+"?"+this.key);}},{key:"search",value:function search(q){if(!q.trim())return Promise.resolve([]);var query=q.split(" ").filter(function(str){return str.length>0;}).join("%20");return this.getSongs(this.tracks+"&q="+query);}},{key:"getSongs",value:function getSongs(url){var _this=this;return fetch(url).then(function(res){return res.json();}).then(function(obj){_this.next=obj.next_href;var playlist=obj.collection.filter(function(track){return track.artwork_url!==null&&track.duration!==30000;}).map(function(track){return{id:track.id,title:formatSongTitle(track.title),duration:secToTime(track.duration),stream:track.stream_url,artwork:track.artwork_url,user:track.user.username,likesCount:track.likes_count,likesCountMin:formatNumber(track.likes_count)};});return playlist;});}}]);return api;}();

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_dom_es_withRouter__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_actions__ = __webpack_require__(5);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  flex: 1;\n"],["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0 10px;\n  flex: 1;\n"]),_templateObject2=_taggedTemplateLiteral(["\n  background: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n  border-radius: 4px;\n  appearance: none;\n  border: none;\n  outline: 0;\n  font-size: 1rem;\n  line-height: 2;\n  padding: 0 1em;\n  width: 100%;\n"],["\n  background: #fafafa;\n  color: rgba(0, 0, 0, 0.87);\n  border-radius: 4px;\n  appearance: none;\n  border: none;\n  outline: 0;\n  font-size: 1rem;\n  line-height: 2;\n  padding: 0 1em;\n  width: 100%;\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Form=__WEBPACK_IMPORTED_MODULE_2_styled_components__["a" /* default */].form(_templateObject);var Input=__WEBPACK_IMPORTED_MODULE_2_styled_components__["a" /* default */].input(_templateObject2);var SearchInput=function(_Component){_inherits(SearchInput,_Component);function SearchInput(){var _ref;var _temp,_this,_ret;_classCallCheck(this,SearchInput);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=SearchInput.__proto__||Object.getPrototypeOf(SearchInput)).call.apply(_ref,[this].concat(args))),_this),_this.state={value:""},_this.handleChange=function(e){_this.setState({value:e.target.value});},_this.handleSubmit=function(e){e.preventDefault();_this.props.searchSongs(_this.state.value);_this.props.history.push("/search");},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(SearchInput,[{key:"render",value:function render(){var value=this.state.value;return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Form,{onSubmit:this.handleSubmit},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Input,{placeholder:"Search...",value:value,onChange:this.handleChange}));}}]);return SearchInput;}(__WEBPACK_IMPORTED_MODULE_0_preact__["a" /* Component */]);var actions={searchSongs:__WEBPACK_IMPORTED_MODULE_4__store_actions__["m" /* search_songs */]};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(null,actions)(Object(__WEBPACK_IMPORTED_MODULE_3_react_router_dom_es_withRouter__["a" /* default */])(SearchInput)));

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
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n  background: linear-gradient(to right, #232526, #414345);\n  transition: all 250ms ease;\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  top: 0px;\n  width: 220px;\n  z-index: 100;\n  overflow-y: scroll;\n  transform: ",";\n\n  @media screen and (min-width: 500px) {\n    transform: translateX(0);\n  }\n"],["\n  background: linear-gradient(to right, #232526, #414345);\n  transition: all 250ms ease;\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  top: 0px;\n  width: 220px;\n  z-index: 100;\n  overflow-y: scroll;\n  transform: ",";\n\n  @media screen and (min-width: 500px) {\n    transform: translateX(0);\n  }\n"]),_templateObject2=_taggedTemplateLiteral(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 50;\n  background: rgba(0, 0, 0, 0.5);\n\n  @media screen and (min-width: 500px) {\n    display: none;\n  }\n"],["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  z-index: 50;\n  background: rgba(0, 0, 0, 0.5);\n\n  @media screen and (min-width: 500px) {\n    display: none;\n  }\n"]),_templateObject3=_taggedTemplateLiteral(["\n  display: flex;\n  text-decoration: none;\n  align-items: stretch;\n  justify-content: flex-start;\n  flex-direction: ",";\n  padding: 0.7rem 0 0.7rem 1rem;\n  color: rgba(255, 255, 255, 0.9);\n\n  &:not(:last-child) {\n    border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  }\n"],["\n  display: flex;\n  text-decoration: none;\n  align-items: stretch;\n  justify-content: flex-start;\n  flex-direction: ",";\n  padding: 0.7rem 0 0.7rem 1rem;\n  color: rgba(255, 255, 255, 0.9);\n\n  &:not(:last-child) {\n    border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  }\n"]),_templateObject4=_taggedTemplateLiteral(["\n  cursor: pointer;\n"],["\n  cursor: pointer;\n"]),_templateObject5=_taggedTemplateLiteral(["\n  flex: 1;\n  align-self: center;\n  margin-left: 20px;\n  font-size: 1.1rem;\n"],["\n  flex: 1;\n  align-self: center;\n  margin-left: 20px;\n  font-size: 1.1rem;\n"]),_templateObject6=_taggedTemplateLiteral(["\n  color: #fafafa;\n  margin-bottom: 3px;\n"],["\n  color: #fafafa;\n  margin-bottom: 3px;\n"]),_templateObject7=_taggedTemplateLiteral(["\n  background-color: whitesmoke;\n  color: #111;\n  border-radius: 5px;\n  margin-right: 20px;\n  font-size: 0.8rem;\n  padding: 0 0.5rem;\n  align-self: center;\n"],["\n  background-color: whitesmoke;\n  color: #111;\n  border-radius: 5px;\n  margin-right: 20px;\n  font-size: 0.8rem;\n  padding: 0 0.5rem;\n  align-self: center;\n"]),_templateObject8=_taggedTemplateLiteral(["\n  flex: 1;\n  cursor: pointer;\n  font-weight: 500;\n  text-decoration: none;\n  padding: 3px 0;\n  transition: all 250ms ease;\n  color: ",";\n\n  &:hover {\n    color: white;\n  }\n"],["\n  flex: 1;\n  cursor: pointer;\n  font-weight: 500;\n  text-decoration: none;\n  padding: 3px 0;\n  transition: all 250ms ease;\n  color: ",";\n\n  &:hover {\n    color: white;\n  }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Container=__WEBPACK_IMPORTED_MODULE_4_styled_components__["a" /* default */].div(_templateObject,function(props){return props.visible?"translateX(0)":"translateX(-100%)";});var Overlay=__WEBPACK_IMPORTED_MODULE_4_styled_components__["a" /* default */].div(_templateObject2);var Segment=__WEBPACK_IMPORTED_MODULE_4_styled_components__["a" /* default */].div(_templateObject3,function(props){return props.horizontal?"row":"column";});var LinkSegment=Segment.extend(_templateObject4);var Label=__WEBPACK_IMPORTED_MODULE_4_styled_components__["a" /* default */].strong(_templateObject5);var Header=__WEBPACK_IMPORTED_MODULE_4_styled_components__["a" /* default */].strong(_templateObject6);var Tag=__WEBPACK_IMPORTED_MODULE_4_styled_components__["a" /* default */].span(_templateObject7);var Option=__WEBPACK_IMPORTED_MODULE_4_styled_components__["a" /* default */].a(_templateObject8,function(props){return props.active?"white":"#999";});var Sidebar=function(_Component){_inherits(Sidebar,_Component);function Sidebar(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Sidebar);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Sidebar.__proto__||Object.getPrototypeOf(Sidebar)).call.apply(_ref,[this].concat(args))),_this),_this.state={activeItem:""},_this.changeRoute=function(route){if(_this.props.location.pathname!==route){_this.props.history.push(route);}},_this.active=function(name){_this.setState({activeItem:name});_this.changeRoute("/");},_this.onChange=function(e){_this.props.setFilter(e.target.value);},_this.onTag=function(e){var name=e.target.name;_this.props.setTag(name);_this.active(name);},_this.onGenre=function(e){var name=e.target.name;_this.props.setGenre(name);_this.active(name);},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Sidebar,[{key:"render",value:function render(_ref2,_ref3){var _this2=this;var sidebarVisible=_ref2.sidebarVisible,qtd=_ref2.qtd;var activeItem=_ref3.activeItem;return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])("div",null,Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Container,{visible:sidebarVisible},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(LinkSegment,{horizontal:true,onClick:function onClick(){return _this2.changeRoute("/playlist");}},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_6__Utils_Icon__["a" /* Icon */],{size:20,src:__WEBPACK_IMPORTED_MODULE_8__playlist_svg___default.a}),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Label,null,"Playlist"),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Tag,null,qtd)),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Segment,{horizontal:true},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_6__Utils_Icon__["a" /* Icon */],{size:20,src:__WEBPACK_IMPORTED_MODULE_9__filter_svg___default.a}),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_7__SelectInput__["a" /* default */],{options:__WEBPACK_IMPORTED_MODULE_5__options__["a" /* filter */],onChange:this.onChange})),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Segment,null,Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Header,null,"Popular Tags"),__WEBPACK_IMPORTED_MODULE_5__options__["c" /* tags */].map(function(_,i){return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Option,{key:i,name:_.value,active:activeItem===_.value,onClick:_this2.onTag},_.label);})),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Segment,null,Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Header,null,"Music Genres"),__WEBPACK_IMPORTED_MODULE_5__options__["b" /* genre */].map(function(_,i){return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Option,{key:i,name:_.value,active:activeItem===_.value,onClick:_this2.onGenre},_.label);}))),sidebarVisible&&Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Overlay,{onClick:this.props.toggleSidebar}));}}]);return Sidebar;}(__WEBPACK_IMPORTED_MODULE_0_preact__["a" /* Component */]);var state=function state(_ref4){var root=_ref4.root,userPlaylist=_ref4.userPlaylist;return{sidebarVisible:root.sidebarVisible,qtd:userPlaylist.playlist.length};};var actions={setFilter:__WEBPACK_IMPORTED_MODULE_3__store_actions__["n" /* set_filter */],setGenre:__WEBPACK_IMPORTED_MODULE_3__store_actions__["o" /* set_genre */],setTag:__WEBPACK_IMPORTED_MODULE_3__store_actions__["p" /* set_tag */],toggleSidebar:__WEBPACK_IMPORTED_MODULE_3__store_actions__["q" /* toggle_sidebar */]};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2_react_router_dom_es_withRouter__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(state,actions)(Sidebar)));

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return filter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return tags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return genre; });
var filter=[{value:"",label:"Default"},{value:"last_hour",label:"Last Hour"},{value:"last_week",label:"Last Week"},{value:"last_month",label:"Last Month"},{value:"last_year",label:"Last Year"}];var tags=[{value:"chill%20house",label:"#Chill"},{value:"deep%20house",label:"#Deep"},{value:"lofi%20hip%20hop",label:"#Lofi"},{value:"progressive%20house",label:"#Progressive"},{value:"relax",label:"#Relax"},{value:"study",label:"#Study"},{value:"sleep",label:"#Sleep"},{value:"tech%20house",label:"#Tech"},{value:"trance",label:"#Trance"},{value:"tropical%20house",label:"#Tropical"},{value:"workout",label:"#Workout"}];var genre=[{value:"alternative",label:"Alternative Rock"},{value:"ambient",label:"Ambient"},{value:"classical",label:"Classical"},{value:"country",label:"Country"},{value:"danceedm",label:"Dance & EDM"},{value:"dancehall",label:"Dancehall"},{value:"deephouse",label:"Deep House"},{value:"disco",label:"Disco"},{value:"drumbass",label:"Drum & Bass"},{value:"dubstep",label:"Dubstep"},{value:"eletronic",label:"Electronic"},{value:"hiphoprap",label:"Hip-hop & Rap"},{value:"house",label:"House"},{value:"indie",label:"Indie"},{value:"jazzblues",label:"Jazz & Blues"},{value:"metal",label:"Metal"},{value:"piano",label:"Piano"},{value:"pop",label:"Pop"},{value:"rbsoul",label:"R&B & Soul"},{value:"reggae",label:"Reggae"},{value:"reggaeton",label:"Reggaeton"},{value:"rock",label:"Rock"},{value:"soundtracks",label:"Soundtrack"},{value:"techno",label:"Techno"},{value:"trance",label:"Trance"},{value:"trap",label:"Trap"},{value:"triphop",label:"Triphop"},{value:"world",label:"World"}];

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__arrow_svg__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__arrow_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__arrow_svg__);
var _templateObject=_taggedTemplateLiteral(["\n  appearance: none;\n  background: transparent url(",") no-repeat 82% 50%;\n  color: whitesmoke;\n  font-size: 1.1rem;\n  font-weight: 700;\n  cursor: pointer;\n  align-self: center;\n  margin-left: 20px;\n  flex: 1;\n  outline: 0;\n  border: 0;\n"],["\n  appearance: none;\n  background: transparent url(",") no-repeat 82% 50%;\n  color: whitesmoke;\n  font-size: 1.1rem;\n  font-weight: 700;\n  cursor: pointer;\n  align-self: center;\n  margin-left: 20px;\n  flex: 1;\n  outline: 0;\n  border: 0;\n"]),_templateObject2=_taggedTemplateLiteral(["\n  color: whitesmoke;\n  background: #242526;\n"],["\n  color: whitesmoke;\n  background: #242526;\n"]);function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Select=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].select(_templateObject,__WEBPACK_IMPORTED_MODULE_2__arrow_svg___default.a);var Option=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].option(_templateObject2);var SelectInput=function SelectInput(_ref){var options=_ref.options,props=_objectWithoutProperties(_ref,["options"]);return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Select,props,options.map(function(_,i){return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Option,{key:i,value:_.value},_.label);}));};/* harmony default export */ __webpack_exports__["a"] = (SelectInput);

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
var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n  background: ",";\n  padding-top: 6px;\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 40px;\n  display: flex;\n  transform: ",";\n  transition: transform 500ms ease;\n\n  @media screen and (min-width: 500px) {\n    margin-left: 220px;\n    width: calc(100% - 220px);\n  }\n"],["\n  background: ",";\n  padding-top: 6px;\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 40px;\n  display: flex;\n  transform: ",";\n  transition: transform 500ms ease;\n\n  @media screen and (min-width: 500px) {\n    margin-left: 220px;\n    width: calc(100% - 220px);\n  }\n"]),_templateObject2=_taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n"],["\n  display: flex;\n  justify-content: center;\n"]),_templateObject3=_taggedTemplateLiteral(["\n  flex: 1;\n  > p {\n    color: #444;\n    overflow: hidden;\n    display: block;\n    text-decoration: none;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 0.7rem;\n\n    &:first-child {\n      font-size: 0.8rem;\n    }\n  }\n"],["\n  flex: 1;\n  > p {\n    color: #444;\n    overflow: hidden;\n    display: block;\n    text-decoration: none;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 0.7rem;\n\n    &:first-child {\n      font-size: 0.8rem;\n    }\n  }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var Wrapper=__WEBPACK_IMPORTED_MODULE_2_styled_components__["a" /* default */].div(_templateObject,function(props){return props.online?"#fff":"#ef5350";},function(props){return props.visible?"translateX(0)":"translateX(-100%)";});var Controls=__WEBPACK_IMPORTED_MODULE_2_styled_components__["a" /* default */].div(_templateObject2);var Song=__WEBPACK_IMPORTED_MODULE_2_styled_components__["a" /* default */].div(_templateObject3);var Player=function(_Component){_inherits(Player,_Component);function Player(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Player);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Player.__proto__||Object.getPrototypeOf(Player)).call.apply(_ref,[this].concat(args))),_this),_this.state={duration:0,currentTime:0},_this.onLoadedMetadata=function(){_this.setState({duration:_this.audioElement.duration});_this.audioElement.play();document.title=_this.props.currentSong.title;},_this.onTimeUpdate=function(){_this.setState({currentTime:_this.audioElement.currentTime});},_this.changeCurrentTime=function(currentTime){_this.audioElement.currentTime=currentTime;},_this.togglePlay=function(){if(_this.audioElement.paused){_this.audioElement.play();}else{_this.audioElement.pause();}},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Player,[{key:"componentDidMount",value:function componentDidMount(){if("mediaSession"in navigator){navigator.mediaSession.playbackState="paused";navigator.mediaSession.setActionHandler("previoustrack",this.props.playPrev);navigator.mediaSession.setActionHandler("play",this.togglePlay);navigator.mediaSession.setActionHandler("pause",this.togglePlay);navigator.mediaSession.setActionHandler("nexttrack",this.props.playNext);}}},{key:"componentWillReceiveProps",value:function componentWillReceiveProps(nextProps){if("mediaSession"in navigator){/* eslint-disable */navigator.mediaSession.metadata=new MediaMetadata({title:nextProps.currentSong.title,artist:nextProps.currentSong.user,artwork:[{src:nextProps.currentSong.artwork.replace("large","t500x500"),sizes:"500x500",type:"image/jpg"}]});/* eslint-enable */}}},{key:"render",value:function render(_ref2){var _this2=this;var currentSong=_ref2.currentSong,isPlaying=_ref2.isPlaying,audioUrl=_ref2.audioUrl,playNext=_ref2.playNext,playPrev=_ref2.playPrev,onPause=_ref2.onPause,onPlay=_ref2.onPlay,online=_ref2.online;return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Wrapper,{visible:currentSong!==null,online:online},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_5__Slider_Slider__["a" /* default */],_extends({onChange:this.changeCurrentTime},this.state)),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Controls,null,Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_3__Utils_Item__["a" /* default */],{link:true,noMobile:true,onClick:playPrev},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_4__Utils_Icon__["a" /* Icon */],{src:__WEBPACK_IMPORTED_MODULE_8__back_svg___default.a,size:25})),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_3__Utils_Item__["a" /* default */],{link:true,onClick:this.togglePlay},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_4__Utils_Icon__["a" /* Icon */],{src:isPlaying?__WEBPACK_IMPORTED_MODULE_10__pause_svg___default.a:__WEBPACK_IMPORTED_MODULE_7__play_svg___default.a,size:25})),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_3__Utils_Item__["a" /* default */],{link:true,noMobile:true,onClick:playNext},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_4__Utils_Icon__["a" /* Icon */],{src:__WEBPACK_IMPORTED_MODULE_9__next_svg___default.a,size:25}))),currentSong&&Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Song,null,Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])("p",null,currentSong.title),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])("p",null,currentSong.user)),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])("audio",{crossOrigin:"anonymous",src:audioUrl,onEnded:playNext,onLoadedMetadata:this.onLoadedMetadata,onPause:onPause,onPlay:onPlay,onTimeUpdate:this.onTimeUpdate,ref:function ref(element){return _this2.audioElement=element;}}));}}]);return Player;}(__WEBPACK_IMPORTED_MODULE_0_preact__["a" /* Component */]);var state=function state(_ref3){var playlist=_ref3.playlist,root=_ref3.root;return{currentSong:playlist.currentSong,audioUrl:playlist.audioUrl,isPlaying:playlist.isPlaying,online:root.online};};var actions={playNext:__WEBPACK_IMPORTED_MODULE_6__store_actions__["i" /* play_next */],playPrev:__WEBPACK_IMPORTED_MODULE_6__store_actions__["j" /* play_prev */],onPause:__WEBPACK_IMPORTED_MODULE_6__store_actions__["g" /* on_pause */],onPlay:__WEBPACK_IMPORTED_MODULE_6__store_actions__["h" /* on_play */]};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(state,actions)(Player));

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n  background-color: rgba(0, 0, 0, 0.03);\n  cursor: pointer;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 6px;\n"],["\n  background-color: rgba(0, 0, 0, 0.03);\n  cursor: pointer;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 6px;\n"]),_templateObject2=_taggedTemplateLiteral(["\n  background-color: #21d4fd;\n  border-radius: 0 3px 3px 0;\n  height: 6px;\n  width: 100%;\n  transform: translateX(-100%);\n  /* will-change: width; */\n"],["\n  background-color: #21d4fd;\n  border-radius: 0 3px 3px 0;\n  height: 6px;\n  width: 100%;\n  transform: translateX(-100%);\n  /* will-change: width; */\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var SliderDuration=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject);var SliderFill=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject2);var offsetLeft=function offsetLeft(element){var el=element;var x=el.offsetLeft;while(el.offsetParent){x+=el.offsetParent.offsetLeft;el=el.offsetParent;}return x;};var Slider=function(_Component){_inherits(Slider,_Component);function Slider(){var _ref;var _temp,_this,_ret;_classCallCheck(this,Slider);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=Slider.__proto__||Object.getPrototypeOf(Slider)).call.apply(_ref,[this].concat(args))),_this),_this.onClick=function(e){var _this$props=_this.props,duration=_this$props.duration,onChange=_this$props.onChange;var percent=(e.clientX-offsetLeft(e.currentTarget))/e.currentTarget.offsetWidth;onChange(percent*duration);},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(Slider,[{key:"render",value:function render(_ref2){var currentTime=_ref2.currentTime,duration=_ref2.duration;var transform="translateX(-"+(100-currentTime/duration*100)+"%)";return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(SliderDuration,{onClick:this.onClick},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(SliderFill,{style:{transform:transform}}));}}]);return Slider;}(__WEBPACK_IMPORTED_MODULE_0_preact__["a" /* Component */]);/* harmony default export */ __webpack_exports__["a"] = (Slider);

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
var Home=Object(__WEBPACK_IMPORTED_MODULE_2__Container__["a" /* WithActions */])(null,true);var state=function state(_ref,ownProps){var root=_ref.root,playlist=_ref.playlist;if(playlist.location===ownProps.location.pathname){if(playlist.currentSong!==null){return{playlist:root.playlist,loading:root.loadingPlaylist,active:playlist.currentSong.id};}}return{playlist:root.playlist,loading:root.loadingPlaylist,active:null};};var actions={loadMore:__WEBPACK_IMPORTED_MODULE_1__store_actions__["f" /* load_playlist_next */],playSong:__WEBPACK_IMPORTED_MODULE_1__store_actions__["k" /* play_song_from_btn */],playlistAction:__WEBPACK_IMPORTED_MODULE_1__store_actions__["a" /* add_to_playlist */]};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */])(state,actions)(Home));

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_preact__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _templateObject=_taggedTemplateLiteral(["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"],["\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n"]),_templateObject2=_taggedTemplateLiteral(["\n  margin: 0 auto;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  border: 0.2rem solid #dedede;\n  border-top-color: #444;\n  animation: "," 1s infinite linear;\n"],["\n  margin: 0 auto;\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  border: 0.2rem solid #dedede;\n  border-top-color: #444;\n  animation: "," 1s infinite linear;\n"]),_templateObject3=_taggedTemplateLiteral(["\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  cursor: pointer;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.3);\n  color: #fff;\n  font-weight: 500;\n  padding: 10px 15px;\n  border-radius: 2px;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.4);\n  }\n"],["\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  cursor: pointer;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.3);\n  color: #fff;\n  font-weight: 500;\n  padding: 10px 15px;\n  border-radius: 2px;\n  &:hover {\n    background-color: rgba(0, 0, 0, 0.4);\n  }\n"]);function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var spin=Object(__WEBPACK_IMPORTED_MODULE_1_styled_components__["b" /* keyframes */])(_templateObject);var LoadingSpin=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject2,spin);var LoadMore=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].a(_templateObject3);var Loading=function(_Component){_inherits(Loading,_Component);function Loading(){_classCallCheck(this,Loading);return _possibleConstructorReturn(this,(Loading.__proto__||Object.getPrototypeOf(Loading)).apply(this,arguments));}_createClass(Loading,[{key:"componentDidMount",value:function componentDidMount(){this.observer=new IntersectionObserver(this.props.loadMore);this.observer.observe(this.target);}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.observer.unobserve(this.target);}},{key:"render",value:function render(_ref){var _this2=this;var loadMore=_ref.loadMore,isLoading=_ref.isLoading;return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(LoadMore,{onClick:loadMore,innerRef:function innerRef(e){return _this2.target=e;}},isLoading?Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(LoadingSpin,null):"Load More...");}}]);return Loading;}(__WEBPACK_IMPORTED_MODULE_0_preact__["a" /* Component */]);/* harmony default export */ __webpack_exports__["a"] = (Loading);

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SongCard; });
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
var _templateObject=_taggedTemplateLiteral(["\n  display: none;\n\n  @media screen and (min-width: 500px) {\n    opacity: 0;\n    transition: transform 200ms ease;\n    margin: auto;\n    display: block;\n    transform: scale(0.1);\n  }\n"],["\n  display: none;\n\n  @media screen and (min-width: 500px) {\n    opacity: 0;\n    transition: transform 200ms ease;\n    margin: auto;\n    display: block;\n    transform: scale(0.1);\n  }\n"]),_templateObject2=_taggedTemplateLiteral(["\n  background: ",";\n  position: relative;\n  cursor: pointer;\n  padding: 8px;\n  display: flex;\n\n  @media screen and (min-width: 500px) {\n    border-radius: 4px;\n  }\n\n  &:hover {\n    "," {\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n"],["\n  background: ",";\n  position: relative;\n  cursor: pointer;\n  padding: 8px;\n  display: flex;\n\n  @media screen and (min-width: 500px) {\n    border-radius: 4px;\n  }\n\n  &:hover {\n    "," {\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n"]),_templateObject3=_taggedTemplateLiteral(["\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  min-width: 60px;\n  min-height: 60px;\n"],["\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  min-width: 60px;\n  min-height: 60px;\n"]),_templateObject4=_taggedTemplateLiteral(["\n  position: relative;\n  margin: 0 0 0 5px;\n  overflow: hidden;\n  flex: 1;\n\n  @media screen and (min-width: 500px) {\n    overflow: initial;\n  }\n"],["\n  position: relative;\n  margin: 0 0 0 5px;\n  overflow: hidden;\n  flex: 1;\n\n  @media screen and (min-width: 500px) {\n    overflow: initial;\n  }\n"]),_templateObject5=_taggedTemplateLiteral(["\n  color: #777;\n  font-size: 0.8rem;\n"],["\n  color: #777;\n  font-size: 0.8rem;\n"]),_templateObject6=_taggedTemplateLiteral(["\n  color: #444;\n  font-size: 0.85rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  @media screen and (min-width: 500px) {\n    width: 180px;\n  }\n"],["\n  color: #444;\n  font-size: 0.85rem;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  @media screen and (min-width: 500px) {\n    width: 180px;\n  }\n"]),_templateObject7=_taggedTemplateLiteral(["\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n"],["\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n"]),_templateObject8=_taggedTemplateLiteral(["\n  margin: 0 10px 0 3px;\n  font-size: 0.7rem;\n  color: #666;\n"],["\n  margin: 0 10px 0 3px;\n  font-size: 0.7rem;\n  color: #666;\n"]),_templateObject9=_taggedTemplateLiteral(["\n  font-size: 0.8rem;\n  color: #666;\n  flex: 1;\n"],["\n  font-size: 0.8rem;\n  color: #666;\n  flex: 1;\n"]),_templateObject10=_taggedTemplateLiteral(["\n  position: relative;\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n\n  @media screen and (min-width: 500px) {\n    grid-template-columns: repeat(auto-fit, 260px);\n    grid-gap: 15px;\n  }\n"],["\n  position: relative;\n  display: grid;\n  grid-gap: 10px;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n\n  @media screen and (min-width: 500px) {\n    grid-template-columns: repeat(auto-fit, 260px);\n    grid-gap: 15px;\n  }\n"]);function _taggedTemplateLiteral(strings,raw){return Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}));}var PlayIcon=__WEBPACK_IMPORTED_MODULE_2__Utils_Icon__["a" /* Icon */].extend(_templateObject);var Card=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject2,function(props){return props.active?"transparent":"white";},PlayIcon);var Artwork=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject3);var Container=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject4);var Artist=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].p(_templateObject5);var Music=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].p(_templateObject6);var Wrapper=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject7);var Info=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].span(_templateObject8);var Duration=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].span(_templateObject9);var CardContainer=__WEBPACK_IMPORTED_MODULE_1_styled_components__["a" /* default */].div(_templateObject10);var SongCard=function SongCard(fromPlaylist){var option=fromPlaylist?__WEBPACK_IMPORTED_MODULE_6__remove_svg___default.a:__WEBPACK_IMPORTED_MODULE_4__add_svg___default.a;var message=fromPlaylist?"Remove from Playlist":"Add to Playlist";return function(_ref){var song=_ref.song,index=_ref.index,play=_ref.play,playlistAction=_ref.playlistAction,active=_ref.active;return Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Card,{onClick:function onClick(){return play(index);},active:active},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Artwork,{style:{backgroundImage:"url("+song.artwork+")"}},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(PlayIcon,{src:__WEBPACK_IMPORTED_MODULE_3__play_svg___default.a,size:30})),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Container,null,Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Music,{title:song.title},song.title),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Artist,null,song.user),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Wrapper,null,Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Duration,null,song.duration),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_2__Utils_Icon__["b" /* WithTooltip */],{tooltip:song.likesCount+" likes"},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_2__Utils_Icon__["a" /* Icon */],{src:__WEBPACK_IMPORTED_MODULE_5__like_svg___default.a,size:9,alt:""}),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(Info,null,song.likesCountMin)),Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_2__Utils_Icon__["b" /* WithTooltip */],{tooltip:message},Object(__WEBPACK_IMPORTED_MODULE_0_preact__["c" /* h */])(__WEBPACK_IMPORTED_MODULE_2__Utils_Icon__["a" /* Icon */],{onClick:function onClick(e){return playlistAction(e)(song);},src:option,style:{marginTop:"1px"},size:16})))));};};

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
var Search=Object(__WEBPACK_IMPORTED_MODULE_1__Container__["a" /* WithActions */])(null,true);var state=function state(_ref,ownProps){var search=_ref.search,playlist=_ref.playlist;if(playlist.location===ownProps.location.pathname){if(playlist.currentSong!==null){return{playlist:search.results,loading:search.loadingSearch,active:playlist.currentSong.id};}}return{playlist:search.results,loading:search.loadingSearch,active:null};};var actions={loadMore:__WEBPACK_IMPORTED_MODULE_2__store_actions__["d" /* load_next_results */],playSong:__WEBPACK_IMPORTED_MODULE_2__store_actions__["k" /* play_song_from_btn */],playlistAction:__WEBPACK_IMPORTED_MODULE_2__store_actions__["a" /* add_to_playlist */]};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */])(state,actions)(Search));

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Container__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_actions__ = __webpack_require__(5);
var Playlist=Object(__WEBPACK_IMPORTED_MODULE_1__Container__["a" /* WithActions */])(null,false,true);var state=function state(_ref,ownProps){var userPlaylist=_ref.userPlaylist,playlist=_ref.playlist;if(playlist.location===ownProps.location.pathname){if(playlist.currentSong!==null){return{playlist:userPlaylist.playlist,active:playlist.currentSong.id};}}return{playlist:userPlaylist.playlist,active:null};};var actions={playSong:__WEBPACK_IMPORTED_MODULE_2__store_actions__["k" /* play_song_from_btn */],playlistAction:__WEBPACK_IMPORTED_MODULE_2__store_actions__["l" /* remove_from_playlist */]};/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_react_redux__["b" /* connect */])(state,actions)(Playlist));

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
var isLocalhost=Boolean(window.location.hostname==='localhost'||// [::1] is the IPv6 localhost address.
window.location.hostname==='[::1]'||// 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function register(){if("production"==='production'&&'serviceWorker'in navigator){// The URL constructor is available in all browsers that support SW.
var publicUrl=new URL("/YASCC",window.location);if(publicUrl.origin!==window.location.origin){// Our service worker won't work if PUBLIC_URL is on a different origin
// from what our page is served on. This might happen if a CDN is used to
// serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
return;}window.addEventListener('load',function(){var swUrl="/YASCC"+'/service-worker.js';if(isLocalhost){// This is running on localhost. Lets check if a service worker still exists or not.
checkValidServiceWorker(swUrl);}else{// Is not local host. Just register service worker
registerValidSW(swUrl);}});}}function registerValidSW(swUrl){navigator.serviceWorker.register(swUrl).then(function(registration){registration.onupdatefound=function(){var installingWorker=registration.installing;installingWorker.onstatechange=function(){if(installingWorker.state==='installed'){if(navigator.serviceWorker.controller){// At this point, the old content will have been purged and
// the fresh content will have been added to the cache.
// It's the perfect time to display a "New content is
// available; please refresh." message in your web app.
console.log('New content is available; please refresh.');}else{// At this point, everything has been precached.
// It's the perfect time to display a
// "Content is cached for offline use." message.
console.log('Content is cached for offline use.');}}};};}).catch(function(error){console.error('Error during service worker registration:',error);});}function checkValidServiceWorker(swUrl){// Check if the service worker can be found. If it can't reload the page.
fetch(swUrl).then(function(response){// Ensure service worker exists, and that we really are getting a JS file.
if(response.status===404||response.headers.get('content-type').indexOf('javascript')===-1){// No service worker found. Probably a different app. Reload the page.
navigator.serviceWorker.ready.then(function(registration){registration.unregister().then(function(){window.location.reload();});});}else{// Service worker found. Proceed as normal.
registerValidSW(swUrl);}}).catch(function(){console.log('No internet connection found. App is running in offline mode.');});}function unregister(){if('serviceWorker'in navigator){navigator.serviceWorker.ready.then(function(registration){registration.unregister();});}}

/***/ })
],[33]);
//# sourceMappingURL=main.aa10ab86.js.map