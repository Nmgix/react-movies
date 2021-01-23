(this["webpackJsonpmovie-project"]=this["webpackJsonpmovie-project"]||[]).push([[0],{14:function(e,c,t){},15:function(e,c,t){"use strict";t.r(c);var a=t(0),s=t(1),i=t.n(s),r=t(7),n=t.n(r);t(14);function l(){return Object(a.jsx)("div",{children:Object(a.jsx)("nav",{className:"grey darken-3",children:Object(a.jsxs)("div",{className:"nav-wrapper",children:[Object(a.jsx)("a",{href:"#",className:"brand-logo",children:"React Movies"}),Object(a.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"!#",children:"Repo"})})})]})})})}var j=t(2),o=t(3),h=t(5),d=t(4),b=t(8);function v(e){var c=e.Title,t=e.Year,s=(e.imdbID,e.Type),i=e.Poster;return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===i?Object(a.jsx)("img",{className:"activator",src:"https://via.placeholder.com/250x360?text="+c}):Object(a.jsx)("img",{className:"activator",src:i})}),Object(a.jsxs)("div",{className:"card-content",children:[Object(a.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:c}),Object(a.jsxs)("span",{children:[s," "]}),Object(a.jsx)("span",{children:t})]})]})}function p(e){var c=e.movies,t=void 0===c?[]:c;return Object(a.jsx)("div",{className:"movies",children:t.length?t.map((function(e){return Object(a.jsx)(v,Object(b.a)({},e),e.imdbID)})):Object(a.jsx)("h4",{children:"Nothing found..."})})}function m(){return Object(a.jsxs)("div",{className:"preloader-wrapper big active",children:[Object(a.jsxs)("div",{className:"spinner-layer spinner-blue",children:[Object(a.jsx)("div",{className:"circle-clipper left",children:Object(a.jsx)("div",{className:"circle"})}),Object(a.jsx)("div",{className:"gap-patch",children:Object(a.jsx)("div",{className:"circle"})}),Object(a.jsx)("div",{className:"circle-clipper right",children:Object(a.jsx)("div",{className:"circle"})})]}),Object(a.jsxs)("div",{className:"spinner-layer spinner-red",children:[Object(a.jsx)("div",{className:"circle-clipper left",children:Object(a.jsx)("div",{className:"circle"})}),Object(a.jsx)("div",{className:"gap-patch",children:Object(a.jsx)("div",{className:"circle"})}),Object(a.jsx)("div",{className:"circle-clipper right",children:Object(a.jsx)("div",{className:"circle"})})]}),Object(a.jsxs)("div",{className:"spinner-layer spinner-yellow",children:[Object(a.jsx)("div",{className:"circle-clipper left",children:Object(a.jsx)("div",{className:"circle"})}),Object(a.jsx)("div",{className:"gap-patch",children:Object(a.jsx)("div",{className:"circle"})}),Object(a.jsx)("div",{className:"circle-clipper right",children:Object(a.jsx)("div",{className:"circle"})})]}),Object(a.jsxs)("div",{className:"spinner-layer spinner-green",children:[Object(a.jsx)("div",{className:"circle-clipper left",children:Object(a.jsx)("div",{className:"circle"})}),Object(a.jsx)("div",{className:"gap-patch",children:Object(a.jsx)("div",{className:"circle"})}),Object(a.jsx)("div",{className:"circle-clipper right",children:Object(a.jsx)("div",{className:"circle"})})]})]})}var O=function(e){Object(h.a)(t,e);var c=Object(d.a)(t);function t(){var e;Object(j.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=c.call.apply(c,[this].concat(s))).state={search:""},e.handleSearch=function(c){"Enter"===c.key&&e.props.movieSearch(e.state.search)},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"col s12",children:Object(a.jsxs)("div",{className:"input-field",children:[Object(a.jsx)("input",{placeholder:"Search",type:"search",className:"validate",value:this.state.search,onChange:function(c){return e.setState({search:c.target.value})},onKeyDown:this.handleSearch}),Object(a.jsx)("button",{className:"btn grey darken-1 search-btn",onClick:function(){return e.props.movieSearch(e.state.search)},children:"Search"})]})})})}}]),t}(i.a.Component),u=function(e){Object(h.a)(t,e);var c=Object(d.a)(t);function t(){var e;Object(j.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=c.call.apply(c,[this].concat(s))).state={filtering:""},e.handleChoose=function(c){e.setState({filtering:c.target.value}),e.props.filterCheck(c.target.value)},e}return Object(o.a)(t,[{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{name:"categories",type:"radio",value:"All",onChange:this.handleChoose}),Object(a.jsx)("span",{children:"All"})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{name:"categories",type:"radio",value:"Movies",onChange:this.handleChoose}),Object(a.jsx)("span",{children:"Movies"})]}),Object(a.jsxs)("label",{children:[Object(a.jsx)("input",{name:"categories",type:"radio",value:"Series",onChange:this.handleChoose}),Object(a.jsx)("span",{children:"Series"})]})]})}}]),t}(i.a.Component),x="e5d6c648",f=function(e){Object(h.a)(t,e);var c=Object(d.a)(t);function t(){var e;Object(j.a)(this,t);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=c.call.apply(c,[this].concat(s))).state={movies:[],filter:"",loading:!0},e.filterCheck=function(c){e.setState({filter:c})},e.movieSearch=function(c){e.setState({loading:!0});var t=e.state.filter;if("All"===t){if(""===c)return;fetch("http://www.omdbapi.com/?i=tt3896198&apikey=".concat(x,"&s=").concat(c)).then((function(e){return e.json()})).then((function(c){return e.setState({movies:c.Search,loading:!1})}))}else if("Movies"===t){if(""===c)return;fetch("http://www.omdbapi.com/?i=tt3896198&apikey=".concat(x,"&type=movie&s=").concat(c)).then((function(e){return e.json()})).then((function(c){return e.setState({movies:c.Search,loading:!1})}))}else{if(""===c)return;fetch("http://www.omdbapi.com/?i=tt3896198&apikey=".concat(x,"&type=series&s=").concat(c)).then((function(e){return e.json()})).then((function(c){return e.setState({movies:c.Search,loading:!1})}))}},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://www.omdbapi.com/?i=tt3896198&apikey=".concat(x,"&s=matrix")).then((function(e){return e.json()})).then((function(c){return e.setState({movies:c.Search,loading:!1})}))}},{key:"render",value:function(){var e=this.state,c=e.movies,t=e.loading;return Object(a.jsxs)("main",{className:"container content",children:[Object(a.jsx)(O,{movieSearch:this.movieSearch}),Object(a.jsx)(u,{filterCheck:this.filterCheck}),t?Object(a.jsx)(m,{}):Object(a.jsx)(p,{movies:c})]})}}]),t}(i.a.Component);function g(){return Object(a.jsx)("div",{children:Object(a.jsx)("footer",{className:"page-footer grey darken-2",children:Object(a.jsx)("div",{className:"footer-copyright grey darken-3",children:Object(a.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(a.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://vk.com/danyanepali",children:"VK"})]})})})})}var N=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l,{}),Object(a.jsx)(f,{}),Object(a.jsx)(g,{})]})};n.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3234b48d.chunk.js.map