(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{135:function(e,t,a){},142:function(e,t,a){e.exports=a(349)},147:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},173:function(e,t,a){},252:function(e,t,a){},347:function(e,t,a){},348:function(e,t,a){},349:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(69),o=a.n(c),l=a(31),i=(a(147),a(5)),s=a.n(i),u=a(9),m=a(4),d=a(7),v=a(54),f=a.n(v),p=a(10),b=a.n(p),h=Object(n.createContext)();function E(e){var t=Object(d.f)(),a=Object(n.useState)(!1),c=Object(m.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)(!1),v=Object(m.a)(i,2),p=v[0],E=v[1],g=Object(n.useState)({}),j=Object(m.a)(g,2),w=j[0],N=j[1],y=Object(n.useState)(""),O=Object(m.a)(y,2),k=O[0],S=O[1],x=Object(n.useState)([]),C=Object(m.a)(x,2),I=C[0],T=C[1],J=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;f.a.set("token",e),L(!0),_(t.user),F(t.user.coverLetter),T(t.user.jobs),P(a)};Object(n.useEffect)((function(){E(!0);var e=f.a.get("token");e?function(){var t=Object(u.a)(s.a.mark((function t(){var a,n,r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a={method:"POST",url:"http://localhost:1337/api/v1/auth/sign-in/token",headers:{"Content-Type":"application/json"},data:{token:e}},t.next=4,b()(a);case 4:n=t.sent,r=n.data,J(e,r),E(!1),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(){return t.apply(this,arguments)}}()():E(!1)}),[]);var L=function(e){l(e)},_=function(e){N(e)},F=function(e){S(e)},P=function(e){t.push(e)};return r.a.createElement(h.Provider,{value:{loggedIn:o,user:w,coverLetter:k,loading:p,favoriteJobs:I,setCoverLetter:F,setFavoriteJobs:T,signUserIn:J,signUserOut:function(){f.a.set("token",""),L(!1),_(""),F(""),T([]),P("/")}}},e.children)}a(82),a(56);var g=function(){var e=Object(n.useContext)(h);e.loggedIn,e.signUserOut;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(l.b,{className:"navbar-brand",to:"/"},r.a.createElement("img",{className:"logo",src:"/Ninja-9to5_logo_H.png",alt:"logo"})))},j=(a(170),a(171),a(40)),w=a.n(j);a(137),a(138),a(53),a(173),a(96),a(252),a(139),a(32),a(140),a(141),a(135),a(347);function N(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],o=a[1],l=r.a.useRef();Object(n.useLayoutEffect)((function(){var e=new IntersectionObserver((function(e){e.forEach((function(e){return e.isIntersecting&&o(!0)}))}));return e.observe(l.current),function(){return e.unobserve(l.current)}}),[]);var i=e.direction;return r.a.createElement("div",{ref:l,className:"fade-in-section ".concat(i," ").concat(c?"is-visible":"")},e.children)}a(348);var y=function(){var e=Object(n.useState)(""),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(0),l=Object(m.a)(o,2),i=l[0],d=l[1],v=function(){var e=Object(u.a)(s.a.mark((function e(t){var n,r,c,o,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!w.a.isEmail(a)){e.next=17;break}return(n=new Headers).append("Content-Type","application/json"),r=JSON.stringify({email:a}),c={method:"POST",headers:n,body:r,redirect:"follow"},e.next=8,fetch("http://localhost:1337/api/v1/email",c);case 8:return o=e.sent,e.next=11,o.json();case 11:l=e.sent,console.log(l),f(),p(l.length),e.next=18;break;case 17:console.log("Not working");case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){c("")},p=function(e){d(100-e)};return r.a.createElement("div",{className:"SqueezePage"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row mb-5"},r.a.createElement("div",{className:"col-sm-6 p-3"},r.a.createElement(N,{direction:"right"},r.a.createElement("div",{className:"ninja-logo"},r.a.createElement("img",{src:"/Ninja-9to5_logo_Stacked copy.png"})))),r.a.createElement("div",{className:"col-sm-6 p-3"},r.a.createElement(N,{direction:"left"},r.a.createElement("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/aI7jRGMGzEU",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6 ninja-text"},r.a.createElement(N,{direction:"right"},r.a.createElement("div",{className:"header-text"},"The only site built by a coder to help other coders go from job seeking to hired - ",r.a.createElement("span",{style:{color:"red"}},"FAST!")),r.a.createElement("ul",{className:"feature-list"},r.a.createElement("li",null,"Search multiple job sites like Ziprecruiter, Monster, and Indeed all at once!"),r.a.createElement("li",null,"Create cover letter templates that generate a new cover letter for every job you're interested in to save you time."),r.a.createElement("li",null,"9to5Ninja is"," ",r.a.createElement("strong",{style:{color:"red"}},"invite only"),"! This is a private tool to help our ninjas cut through job market competition, and only the worthy may enter!")))),r.a.createElement("div",{className:"col-sm-6 p-3"},r.a.createElement(N,{direction:"left"},r.a.createElement("div",{className:"newsletter"},r.a.createElement("div",{className:"header"},"Join Our Newsletter"),r.a.createElement("p",null,"The first 100 newsletter susbcribers will receive:"),r.a.createElement("ul",{className:"newsletter-bullets"},r.a.createElement("li",null,"An invitation to join 9to5Ninja"),r.a.createElement("li",null,"Information on when the site is live"),r.a.createElement("li",null,"Curated content for how to ace your interviews and get the job"),r.a.createElement("li",null,"Random coding challenges to keep your mind sharp like a katana")),r.a.createElement("div",{className:"number-container"},r.a.createElement("strong",null,"Spots Left:"),r.a.createElement("span",{className:"big-money"},i)),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group row px-3"},r.a.createElement("div",{className:"col-8"},r.a.createElement("input",{type:"email",class:"form-control",id:"newsletterEmail","aria-describedby":"emailHelp",placeholder:"kakashi@hiddenleaf.com",value:a,onChange:function(e){c(e.target.value)}})),r.a.createElement("div",{className:"col-4"},r.a.createElement("button",{className:"btn btn-primary",onClick:v},"Join Newsletter"))))))))))},O=function(){var e=Object(n.useContext)(h).loading;return r.a.createElement(r.a.Fragment,null,e?r.a.createElement("div",{className:"loading-screen"},r.a.createElement("img",{src:"/Ninja-9to5_logo_Stacked.png",alt:"Logo Stacked"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",render:function(){return r.a.createElement(y,null)}}))))},k=function(){return r.a.createElement(E,null,r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(l.a,null,r.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},56:function(e,t,a){},82:function(e,t,a){}},[[142,1,2]]]);
//# sourceMappingURL=main.a9076b2a.chunk.js.map