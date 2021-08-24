(this["webpackJsonpmovie-finder"]=this["webpackJsonpmovie-finder"]||[]).push([[0],{21:function(e,i,t){},30:function(e,i,t){"use strict";t.r(i);var c=t(1),n=t.n(c),r=t(9),o=t.n(r),a=(t(21),t(22),t(6)),d=t(7),s=t(4),l="POPULATE_MOVIE_LIST",j="ADD_MOVIE_ID",u="CARD_NUMBER",b="PLAY_FINDER",m="DARK_MODE",v=t(0);var O={toggleDarkMode:function(){return{type:m}}},h=Object(s.b)((function(e){return{darkMode:e.movies.darkMode}}),O)((function(e){return Object(v.jsx)(v.Fragment,{children:e.darkMode?Object(v.jsxs)("div",{className:"row align-items-center dark",id:"header-row",children:[Object(v.jsxs)("div",{className:"col-9",id:"header-col",children:[Object(v.jsx)(a.a,{icon:d.a,id:"header-icon"}),"Movie Finder"]}),Object(v.jsxs)("div",{className:"col-3",children:[Object(v.jsx)("div",{id:"dark-mode-title",children:"Dark Mode"}),Object(v.jsxs)("label",{className:"switch",children:[Object(v.jsx)("input",{type:"checkbox",onClick:function(){return e.toggleDarkMode()}}),Object(v.jsx)("span",{className:"slider round"})]})]})]}):Object(v.jsxs)("div",{className:"row align-items-center",id:"header-row",children:[Object(v.jsxs)("div",{className:"col-9",id:"header-col",children:[Object(v.jsx)(a.a,{icon:d.a,id:"header-icon"}),"Movie Finder"]}),Object(v.jsxs)("div",{className:"col-3",children:[Object(v.jsx)("div",{id:"dark-mode-title",children:"Dark Mode"}),Object(v.jsxs)("label",{className:"switch",children:[Object(v.jsx)("input",{type:"checkbox",onClick:function(){return e.toggleDarkMode()}}),Object(v.jsx)("span",{className:"slider round"})]})]})]})})})),p=t(10),f=t(15),x=t.n(f),N=t.p+"static/media/imdb_top_1000.e12a5ba6.csv",y=Object(s.b)((function(e){return{darkMode:e.movies.darkMode}}))((function(e){var i=Object(c.useState)("movie-tile-description-hidden"),t=Object(p.a)(i,2),n=t[0],r=t[1];return Object(v.jsx)(v.Fragment,{children:e.darkMode?Object(v.jsxs)("div",{className:"movie-tile ",children:[Object(v.jsx)(a.a,{icon:d.b,className:"movietile-info",onMouseEnter:function(){return r("movie-tile-description-shown")},onMouseLeave:function(){return r("movie-tile-description-hidden")}}),Object(v.jsx)("p",{className:n,children:e.movie[4]}),Object(v.jsx)("img",{onClick:function(){return e.increaseCardNumber()},src:e.movie[0],alt:e.movie[1],className:"movie-tile-img dark-tile-img"}),Object(v.jsx)("div",{children:e.movie[1]})]}):Object(v.jsxs)("div",{className:"movie-tile",children:[Object(v.jsx)(a.a,{icon:d.b,className:"movietile-info",onMouseEnter:function(){return r("movie-tile-description-shown")},onMouseLeave:function(){return r("movie-tile-description-hidden")}}),Object(v.jsx)("p",{className:n,children:e.movie[4]}),Object(v.jsx)("img",{onClick:function(){return e.increaseCardNumber()},src:e.movie[0],alt:e.movie[1],className:"movie-tile-img"}),Object(v.jsx)("div",{children:e.movie[1]})]})})})),k=function(e,i){var t=function(e){for(var i=[],t=[],c=null;i.length<=2;){var n=Math.floor(1e3*Math.random());i.includes(n)||i.push(n)}for(var r=function(){var i=a[o];c=e.find((function(e){return e[5]===i.toString()})),t.push(c)},o=0,a=i;o<a.length;o++)r();return t}(e);return Object(v.jsx)(v.Fragment,{children:t.map((function(e){return Object(v.jsx)("div",{className:"col movie-tile-col",children:Object(v.jsx)(y,{movie:e,increaseCardNumber:i})},e[5])}))})},M={populateMovieList:function(e){return{type:l,payload:e}},playFinderFunction:function(){return{type:b}},increaseCardNumber:function(){return{type:u}}},g=Object(s.b)((function(e){return{pickedMovieList:e.movies.pickedMovieList,movieList:e.movies.movieList,playFinder:e.movies.playFinder,cardNumber:e.movies.cardNumber,darkMode:e.movies.darkMode}}),M)((function(e){Object(c.useEffect)((function(){null===e.movieList&&function(e){x.a.parse(N,{download:!0,complete:function(i){i.data.shift(),e.populateMovieList(i.data)}})}(e)}));var i=Object(c.useState)(""),t=Object(p.a)(i,2),n=t[0],r=t[1],o=function(){e.playFinder||e.playFinderFunction(),r(k(e.movieList,e.increaseCardNumber))};return Object(c.useEffect)((function(){e.cardNumber>0&&o()}),[e.cardNumber]),Object(v.jsx)(v.Fragment,{children:e.darkMode?Object(v.jsx)("div",{className:"row justify-content-center dark-body",id:"card-row",children:e.playFinder?Object(v.jsxs)("div",{className:"col dark-card",id:"card-col",children:[Object(v.jsx)("h2",{id:"card-title",children:"Choose your favorite Movie!"}),Object(v.jsx)("div",{className:"row",children:n})]}):Object(v.jsxs)("div",{className:"col dark-card",id:"card-col",children:[Object(v.jsx)("h5",{id:"card-title",children:"Movie Finder lets you discover new movies to watch by evaluating your favorite movies. Simply pick your favorite movies from each selection and let A.I. do the rest!"}),Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"col",children:Object(v.jsx)("button",{type:"button",className:"btn btn-primary",id:"play-button",onClick:function(){return o()},children:"Play"})})})]})}):Object(v.jsx)("div",{className:"row justify-content-center",id:"card-row",children:e.playFinder?Object(v.jsxs)("div",{className:"col",id:"card-col",children:[Object(v.jsx)("h2",{id:"card-title",children:"Choose your favorite Movie!"}),Object(v.jsx)("div",{className:"row",children:n})]}):Object(v.jsxs)("div",{className:"col",id:"card-col",children:[Object(v.jsx)("h5",{id:"card-title",children:"Movie Finder lets you discover new movies to watch by evaluating your favorite movies. Simply pick your favorite movies from each selection and let A.I. do the rest!"}),Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"col",children:Object(v.jsx)("button",{type:"button",className:"btn btn-primary",id:"play-button",onClick:function(){return o()},children:"Play"})})})]})})})}));var w=Object(s.b)((function(e){return{darkMode:e.movies.darkMode}}))((function(e){return Object(v.jsx)(v.Fragment,{children:e.darkMode?Object(v.jsxs)("div",{className:"container-fluid dark-body",id:"app-container",children:[Object(v.jsx)(h,{}),Object(v.jsx)(g,{})]}):Object(v.jsxs)("div",{className:"container-fluid",id:"app-container",children:[Object(v.jsx)(h,{}),Object(v.jsx)(g,{})]})})})),_=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,31)).then((function(i){var t=i.getCLS,c=i.getFID,n=i.getFCP,r=i.getLCP,o=i.getTTFB;t(e),c(e),n(e),r(e),o(e)}))},E=t(5),F=t(16),L=t(3),D={movieList:null,pickedMovieList:["Fwe","Feggdeg","Vieo","Kiko"],playFinder:!1,cardNumber:0,darkMode:!1},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,i=arguments.length>1?arguments[1]:void 0;switch(i.type){case j:return Object(L.a)(Object(L.a)({},e),{},{pickedMovieList:i.payload});case l:return Object(L.a)(Object(L.a)({},e),{},{movieList:i.payload});case b:return Object(L.a)(Object(L.a)({},e),{},{playFinder:!0});case u:return Object(L.a)(Object(L.a)({},e),{},{cardNumber:e.cardNumber+1});case m:return Object(L.a)(Object(L.a)({},e),{},{darkMode:!e.darkMode});default:return e}},S=Object(E.b)({movies:C}),I=[F.a],T=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()?Object(E.d)(S,Object(E.c)(E.a.apply(void 0,I),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())):Object(E.d)(S,Object(E.c)(E.a.apply(void 0,I)));o.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(s.a,{store:T,children:Object(v.jsx)(w,{})})}),document.getElementById("root")),_()}},[[30,1,2]]]);
//# sourceMappingURL=main.573bd281.chunk.js.map