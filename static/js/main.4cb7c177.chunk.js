(window["webpackJsonpnew-clicky"]=window["webpackJsonpnew-clicky"]||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),c=r(2),a=r.n(c),s=(r(13),r(3)),i=r(4),l=r(6),u=r(5),p=r(7),d=function(e){function t(){var e,r;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(r=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={scoreBoard:0,topScore:0,currentScore:0,picsArray:[{id:1,url:"https://i.pinimg.com/564x/b7/34/7f/b7347f3ab888c0df00096f4956b934d9.jpg"},{id:2,url:"https://i.pinimg.com/564x/a9/71/63/a971636819153ba259739550f8016718.jpg"},{id:3,url:"https://i.pinimg.com/564x/78/bf/1c/78bf1c26d54e6c5b363f419321fe2b5f.jpg"}],guessesSoFar:[]},r.handleClick=function(e){if(console.log("you\xb4ve been clicked!"),console.log("includes test",r.state.guessesSoFar.includes(e)),r.state.guessesSoFar.includes(e))alert("you lose!"),r.setState({guessesSoFar:[],currentScore:0});else{console.log("keep on trying!");var t=function(e){var t,r,n;for(n=e.length-1;n>0;n--)t=Math.floor(Math.random()*(n+1)),r=e[n],e[n]=e[t],e[t]=r;return e}(r.state.picsArray),n=r.state.guessesSoFar.concat(e),o=r.state.topScore;o<=r.state.currentScore+1&&(o=r.state.currentScore+1),r.setState({picsArray:t,guessesSoFar:n,topScore:o,currentScore:r.state.currentScore+1})}},r.didYouWin=function(){r.state.guessesSoFar.length===r.state.picsArray.length&&(alert("You Win!"),r.setState({guessesSoFar:[],currentScore:0}))},r}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){this.didYouWin(),console.log(this.state);var e={picStyle:{height:"300px"}},t=this;return o.a.createElement("div",null,o.a.createElement("h1",null,"Current Score: ",this.state.currentScore," - Top Score:"," ",this.state.topScore),this.state.picsArray.map(function(r){return o.a.createElement("img",{src:r.url,style:e.picStyle,onClick:function(){t.handleClick(r.id)}})}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,r){e.exports=r(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.4cb7c177.chunk.js.map