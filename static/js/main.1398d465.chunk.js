(this.webpackJsonpdisney_clone=this.webpackJsonpdisney_clone||[]).push([[0],{53:function(n,e,i){},80:function(n,e,i){},81:function(n,e,i){"use strict";i.r(e);var t,r,a,c,o,s,p,d,l,x,b,j,g,h,m,u=i(3),O=i.n(u),f=i(32),v=i.n(f),w=(i(53),i(18)),y=i(12),k=i(5),z=i(6),I=i(2),S=z.a.section(t||(t=Object(k.a)(["\noverflow:hidden;\ndisplay:flex;\nflex-direction:column;\ntext-align:center;\nheight:100vh;\n"]))),E=z.a.div(r||(r=Object(k.a)(["\nmargin-bottom:10px;\nwidth:100%;\nposition:relative;\nmin-height:100vh;\ndisplay:flex;\njustify-content:center;\nalign-items:center;\nflex-direction:column;\npadding:80px 40px;\nheight:100%100vh;\n"]))),D=z.a.div(a||(a=Object(k.a)(["\nheight:100%;\nbackground-position:top;\nbackground-size:cover;\nbackground-repeat:no-repeat;\nbackground-image:url('/images/login-background.jpg');\nposition:absolute;\ntop:0;\nleft:0;\nright:0;\nz-index:-1;\n"]))),A=z.a.div(c||(c=Object(k.a)(["\nmargin-bottom:2px;\nmax-width:650px;\nflex-wrap:wrap;\ndisplay:flex;\nflex-direction:columnn;\njustify-content:center;\nmargin-top:0;\nalign-items:center;\nmargin-right:auto;\nmargin-left:auto;\ntransition-timing-function:ease-out;\ntransition:opacity 0.2s;\nwidth:100%;\n"]))),L=z.a.img(o||(o=Object(k.a)(["\nmargin-bottom:12px;\nmax-width:600px;\nmin-height:1px;\ndisplay:block;\nwidth:100%;\n"]))),M=z.a.a(s||(s=Object(k.a)(["\nfont-weight:bold;\nbackground-color:#0063e5;\nmargin-bottom:12px;\nwidth:100%;\nletter-spacing:1.5px;\nfont-size:18px;\npadding:16.5px 0;\nborder:1px solid transparent;\nborder-radius:4px;\n\n&:hover {\n    background-color: #0483ee;\n  }\n\n"]))),T=z.a.p(p||(p=Object(k.a)(["\n  color: hsla(0, 0%, 95.3%, 1);\n  font-size: 12px;\n  margin: 0 0 24px;\n  line-height: 1.5;\n  letter-spacing: 1.5px;\n"]))),H=z.a.img(d||(d=Object(k.a)(["\nmax-width:600px;\nmargin-bottom: 20px;\ndisplay: inline-block;\nvertical-align: bottom;\nwidth: 100%;\n"]))),P=function(){return Object(I.jsx)(S,{children:Object(I.jsxs)(E,{children:[Object(I.jsxs)(A,{children:[Object(I.jsx)(L,{src:"/images/cta-logo-one.svg",alt:"logo"}),Object(I.jsx)(M,{children:"GET ALL THERE"}),Object(I.jsx)(T,{children:"Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1."}),Object(I.jsx)(H,{src:"/images/cta-logo-two.png",alt:"logo"})]}),Object(I.jsx)(D,{})]})})},C=i(37),R=i.n(C),B=i(45),G=i(13),N=i(24),J=Object(N.b)({name:"user",initialState:{name:"",email:"",photo:""},reducers:{setUserLoginDetails:function(n,e){n.name=e.payload.name,n.email=e.payload.email,n.photo=e.payload.photo},setSignOutState:function(n){n.name=null,n.email=null,n.photo=null}}}),F=J.actions,U=F.setUserLoginDetails,X=F.setSignOutState,_=function(n){return n.user.name},W=function(n){return n.user.email},K=function(n){return n.user.photo},V=J.reducer,Y=i(29),$=Y.a.initializeApp({apiKey:"AIzaSyBEyB-_A6al7LzFF73IDSbk6BfuJpTeSD0",authDomain:"disney-clone-2f5d7.firebaseapp.com",projectId:"disney-clone-2f5d7",storageBucket:"disney-clone-2f5d7.appspot.com",messagingSenderId:"57086352091",appId:"1:57086352091:web:cd7075591f391958608afe",measurementId:"G-LLSJN92CD2"}).firestore(),q=Y.a.auth(),Q=new Y.a.auth.GoogleAuthProvider,Z=(Y.a.storage(),$);var nn,en,tn,rn,an,cn=z.a.nav(l||(l=Object(k.a)(["\nposition:fixed;\ntop:0;\nleft:0;\nright:0;\nheight:70px;\nbackground-color:black;\ndisplay:flex;\njustify-content:space-between;\nalign-items:center;\npadding:0 12px;\nletter-spacing:16px;\nz-index:3;\n"]))),on=z.a.a(x||(x=Object(k.a)(["\npadding:0;\nwidth:80px;\nmargin-top:4px;\nmax-height:70px;\nfont-size:0;\ndisplay:inline-block;\n"]))),sn=z.a.div(b||(b=Object(k.a)(['\nalign-items:center;\ndisplay:flex;\nflex-flow:row nowrap;\nheight:100%;\njustify-content:flex-end;\nmargin:0px;\nposition:relative;\nmargin-right:auto;\nmargin-left:25px;\n\na {\n    display: flex;\n    align-items: center;\n    padding: 0 12px;\n    img {\n      height: 20px;\n      min-width: 20px;\n      width: 20px;\n      z-index: auto;\n    }\n    span {\n      color: rgb(249, 249, 249);\n      font-size: 13px;\n      letter-spacing: 1.42px;\n      line-height: 1.08;\n      padding: 2px 0px;\n      white-space: nowrap;\n      position: relative;\n      \n      &:before {\n        cursor:pointer;\n        background-color: rgb(249, 249, 249);\n        border-radius: 0px 0px 4px 4px;\n        bottom: -6px;\n        content: "";\n        height: 2px;\n        left: 0px;\n        opacity: 0;\n        position: absolute;\n        right: 0px;\n        transform-origin: left center;\n        transform: scaleX(0);\n        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n        visibility: hidden;\n        width: auto;\n      }\n    }\n    &:hover {\n      span:before {\n        transform: scaleX(1);\n        visibility: visible;\n        opacity: 1 !important;\n        cursor:pointer;\n      }\n    }\n  }\n\n\n/* @media(max-width:768px){\n    display:none; \n} */\n']))),pn=z.a.a(j||(j=Object(k.a)(["\nbackground-color:rgba(0,0,0,0.6);\npadding:8px 16px;\ntext-transform:uppercase;\nborder:1px solid #f9f9f9;\nletter-spacing:1.1px;\nborder-radius:4px;\ntransition:all 0.2s ease 0s;\n\n&:hover{\n  background-color: #f9f9f9;\n    color: #000;\n    border-color: transparent;\n}\n"]))),dn=z.a.img(g||(g=Object(k.a)(["\nheight:20%;\n/* border-radius:50%; */\n"]))),ln=z.a.div(h||(h=Object(k.a)(["\nposition:absolute;\ntop:40px;\nright:0px;\nbackground-color:rgb(19,19,19);\nborder:1px solid rgba(151,151,151,0.34);\nborder-radius:4px;\nbox-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;\n  padding: 10px;\n  font-size: 13px;\n  letter-spacing: 3px;\n  width: 100px;\n  opacity: 0;\n"]))),xn=z.a.div(m||(m=Object(k.a)(["\n position: relative;\n  height: 48px;\n  width: 48px;\n  display: flex;\n  cursor: pointer;\n  align-items: center;\n  justify-content: center;\n\n  "," {\n    border-radius: 50%;\n    width: 100%;\n    height: 100%;\n  }\n\n  &:hover {\n    "," {\n      opacity: 1;\n      transition-duration: 1s;\n    }\n  }\n\n"])),dn,ln),bn=function(){var n=Object(G.b)(),e=Object(y.f)(),i=Object(G.c)(_),t=(Object(G.c)(W),Object(G.c)(K)),r=function(){i?i&&q.signOut().then((function(){n(X()),e.push("/")})).catch((function(n){return alert(n.message)})):q.signInWithPopup(Q).then((function(n){console.log(n),a(n.user)})).catch((function(n){alert(n.message)}))},a=function(e){n(U({name:e.displayName,email:e.email,photo:e.photoURL}))};return Object(u.useEffect)((function(){q.onAuthStateChanged(function(){var n=Object(B.a)(R.a.mark((function n(i){return R.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i&&(a(i),e.push("/home"));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}())}),[i]),Object(I.jsxs)(cn,{children:[Object(I.jsx)(on,{children:Object(I.jsx)("img",{src:"/images/logo.svg"})}),i?Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(sn,{children:[Object(I.jsxs)("a",{href:"/home",children:[Object(I.jsx)("img",{src:"/images/home-icon.svg",alt:"HOME"}),Object(I.jsx)("span",{children:"HOME"})]}),Object(I.jsxs)("a",{href:"/home",children:[Object(I.jsx)("img",{src:"/images/search-icon.svg",alt:"HOME"}),Object(I.jsx)("span",{children:"SEARCH"})]}),Object(I.jsxs)("a",{href:"/home",children:[Object(I.jsx)("img",{src:"/images/watchlist-icon.svg",alt:"HOME"}),Object(I.jsx)("span",{children:"WATCHLIST"})]}),Object(I.jsxs)("a",{href:"/home",children:[Object(I.jsx)("img",{src:"/images/original-icon.svg",alt:"HOME"}),Object(I.jsx)("span",{children:"ORIGINALS"})]}),Object(I.jsxs)("a",{href:"/home",children:[Object(I.jsx)("img",{src:"/images/movie-icon.svg",alt:"HOME"}),Object(I.jsx)("span",{children:"MOVIES"})]}),Object(I.jsxs)("a",{href:"/home",children:[Object(I.jsx)("img",{src:"/images/series-icon.svg",alt:"HOME"}),Object(I.jsx)("span",{children:"SERIES"})]})]}),Object(I.jsxs)(xn,{children:[Object(I.jsx)(dn,{src:t,alt:i}),Object(I.jsx)(ln,{children:Object(I.jsx)("span",{onClick:r,children:"Sign Out"})})]})]}):Object(I.jsx)(pn,{onClick:r,children:"Login"})]})},jn=i(22),gn=i(30),hn=(i(63),i(64),i(47)),mn=i.n(hn),un=Object(z.a)(mn.a)(nn||(nn=Object(k.a)(["\nmargin-top:20px;\n\n\n& > button {\n    opacity:0;\n    height:100%;\n    width:5vw;\n    z-index:1;\n\n\n    &:hover{\n        opacity:1;\n        transition: opacity 0.4s ease 0s;\n    }\n}\n\nul li button {\n    &:before {\n      font-size: 10px;\n      color: rgb(150, 158, 171);\n    }\n  }\n\nli.slick-active button:before {\n    color: white;\n  }\n\n.slick-list {\n    overflow: initial;\n  }\n.slick-prev {\n    left: -75px;\n  }\n.slick-next {\n    right: -75px;\n  }\n"]))),On=z.a.div(en||(en=Object(k.a)(["\nborder-radius: 4px;\ncursor: pointer;\nposition: relative;\n\n\na{\n    border-radius: 4px;\n    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n      rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n    cursor: pointer;\n    display: block;\n    position: relative;\n    padding: 4px;\n    img {\n      width: 100%;\n      height: 100%;\n    }\n    &:hover {\n      padding: 0;\n      border: 4px solid rgba(249, 249, 249, 0.8);\n      transition-duration: 300ms;\n    }\n   \n}\n"]))),fn=function(){return Object(I.jsx)("div",{children:Object(I.jsxs)(un,Object(jn.a)(Object(jn.a)({},{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1,autoplay:1}),{},{children:[Object(I.jsx)(On,{children:Object(I.jsx)("a",{children:Object(I.jsx)("img",{src:"/images/slider-badging.jpg"})})}),Object(I.jsx)(On,{children:Object(I.jsx)("a",{children:Object(I.jsx)("img",{src:"/images/slider-scale.jpg"})})}),Object(I.jsx)(On,{children:Object(I.jsx)("a",{children:Object(I.jsx)("img",{src:"/images/slider-badag.jpg"})})}),Object(I.jsx)(On,{children:Object(I.jsx)("a",{children:Object(I.jsx)("img",{src:"/images/slider-scales.jpg"})})})]}))})},vn=Object(N.b)({name:"movie",initialState:{recommend:null,newDisney:null,original:null,trending:null},reducers:{setMovies:function(n,e){n.recommend=e.payload.recommend,n.newDisney=e.payload.newDisney,n.original=e.payload.original,n.trending=e.payload.trending}}}),wn=vn.actions.setMovies,yn=function(n){return n.movie.recommend},kn=function(n){return n.movie.newDisney},zn=function(n){return n.movie.original},In=function(n){return n.movie.trending},Sn=vn.reducer;var En,Dn,An,Ln=z.a.div(tn||(tn=Object(k.a)(["\npadding:0 0 26px;\n"]))),Mn=z.a.div(rn||(rn=Object(k.a)(["\ndisplay:grid;\ngrid-gap:25px;\ngrid-template-columns:repeat(4, minmax(0,1fr));\n\n@media(max-width:768px){\ngrid-template-columns:repeat(2, minmax(0,1fr));\n}\n"]))),Tn=z.a.div(an||(an=Object(k.a)(["\npadding-top:56.25%;\nborder-radius: 10px;\nbox-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\ncursor: pointer;\noverflow:hidden;\nposition:relative;\ntransition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\nborder: 3px solid rgba(249, 249, 249, 0.1);\n\nimg{\n    inset:0px;\n    display:block;\n    height:100%;\n    object-fit:cover;\n    position:absolute;\n    transition:opacity 500ms ease-in-out 0s;\n    width:100%;\n    z-index:1;\n}\n\n&:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),Hn=function(){var n=Object(G.c)(kn);return Object(I.jsxs)(Ln,{children:[Object(I.jsx)("h4",{children:"New to Disney+"}),Object(I.jsx)(Mn,{children:n&&n.map((function(n,e){return Object(I.jsxs)(Tn,{children:[n.id,Object(I.jsx)(w.b,{to:"/detail/"+n.id,children:Object(I.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})};var Pn,Cn,Rn,Bn=z.a.div(En||(En=Object(k.a)(["\npadding:0 0 26px;\n"]))),Gn=z.a.div(Dn||(Dn=Object(k.a)(["\ndisplay:grid;\ngrid-gap:25px;\ngrid-template-columns:repeat(4, minmax(0,1fr));\n\n@media(max-width:768px){\ngrid-template-columns:repeat(2, minmax(0,1fr));\n}\n"]))),Nn=z.a.div(An||(An=Object(k.a)(["\npadding-top:56.25%;\nborder-radius: 10px;\nbox-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\ncursor: pointer;\noverflow:hidden;\nposition:relative;\ntransition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\nborder: 3px solid rgba(249, 249, 249, 0.1);\n\nimg{\n    inset:0px;\n    display:block;\n    height:100%;\n    object-fit:cover;\n    position:absolute;\n    transition:opacity 500ms ease-in-out 0s;\n    width:100%;\n    z-index:1;\n}\n\n&:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),Jn=function(){var n=Object(G.c)(zn);return Object(I.jsxs)(Bn,{children:[Object(I.jsx)("h4",{children:"Originals"}),Object(I.jsx)(Gn,{children:n&&n.map((function(n,e){return Object(I.jsxs)(Nn,{children:[n.id,Object(I.jsx)(w.b,{to:"/detail/"+n.id,children:Object(I.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})};var Fn,Un,Xn,_n=z.a.div(Pn||(Pn=Object(k.a)(["\npadding:0 0 26px;\n"]))),Wn=z.a.div(Cn||(Cn=Object(k.a)(["\ndisplay:grid;\ngrid-gap:25px;\ngrid-template-columns:repeat(4, minmax(0,1fr));\n\n@media(max-width:768px){\ngrid-template-columns:repeat(2, minmax(0,1fr));\n}\n"]))),Kn=z.a.div(Rn||(Rn=Object(k.a)(["\npadding-top:56.25%;\nborder-radius: 10px;\nbox-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\ncursor: pointer;\noverflow:hidden;\nposition:relative;\ntransition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\nborder: 3px solid rgba(249, 249, 249, 0.1);\n\nimg{\n    inset:0px;\n    display:block;\n    height:100%;\n    object-fit:cover;\n    position:absolute;\n    transition:opacity 500ms ease-in-out 0s;\n    width:100%;\n    z-index:1;\n}\n\n&:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),Vn=function(){var n=Object(G.c)(yn);return Object(I.jsxs)(_n,{children:[Object(I.jsx)("h4",{children:"Recommended for You"}),Object(I.jsx)(Wn,{children:n&&n.map((function(n,e){return Object(I.jsxs)(Kn,{children:[n.id,Object(I.jsx)(w.b,{to:"/detail/"+n.id,children:Object(I.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})};var Yn,$n,qn,Qn,Zn,ne,ee,ie,te,re,ae,ce,oe,se,pe=z.a.div(Fn||(Fn=Object(k.a)(["\npadding:0 0 26px;\n"]))),de=z.a.div(Un||(Un=Object(k.a)(["\ndisplay:grid;\ngrid-gap:25px;\ngrid-template-columns:repeat(4, minmax(0,1fr));\n\n@media(max-width:768px){\ngrid-template-columns:repeat(2, minmax(0,1fr));\n}\n"]))),le=z.a.div(Xn||(Xn=Object(k.a)(["\npadding-top:56.25%;\nborder-radius: 10px;\nbox-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\ncursor: pointer;\noverflow:hidden;\nposition:relative;\ntransition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\nborder: 3px solid rgba(249, 249, 249, 0.1);\n\nimg{\n    inset:0px;\n    display:block;\n    height:100%;\n    object-fit:cover;\n    position:absolute;\n    transition:opacity 500ms ease-in-out 0s;\n    width:100%;\n    z-index:1;\n}\n\n&:hover {\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n      rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n  }\n"]))),xe=function(){var n=Object(G.c)(In);return Object(I.jsxs)(pe,{children:[Object(I.jsx)("h4",{children:"Trending"}),Object(I.jsx)(de,{children:n&&n.map((function(n,e){return Object(I.jsxs)(le,{children:[n.id,Object(I.jsx)(w.b,{to:"/detail/"+n.id,children:Object(I.jsx)("img",{src:n.cardImg,alt:n.title})})]},e)}))})]})},be=z.a.div(Yn||(Yn=Object(k.a)(["\nmargin-top:30px;\npadding:30px 0px 25px;\ndisplay:grid;\ngrid-gap:25px;\ngrid-template-columns:repeat(5,minmax(0,1fr));\n\n@media(max-width: 768px){\n    grid-template-columns:repeat(1,minmax(0,1fr));\n}\n"]))),je=z.a.div($n||($n=Object(k.a)(["\npadding-top: 56.25%;\nborder-radius:10px;\nbox-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,\n    rgb(0 0 0 / 73%) 0px 16px 10px -10px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;\n  border: 3px solid rgba(249, 249, 249, 0.1);\n\nimg{\n    inset:0px;\n    display:block;\n    height:100%;\n    object-fit:cover;\n    opacity:1;\n    position:absolute;\n    transition:opacity 500ms ease-in-out 0s;\n    width:100%;\n}\n\nvideo{\n    width:100%;\n    height:100%;\n    position:absolute;\n    top:0px;\n    opacity:0;\n    z-index:0;\n}\n\n&:hover{\n    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,\n    rgb(0 0 0 / 72%) 0px 30px 22px -10px;\n    transform: scale(1.05);\n    border-color: rgba(249, 249, 249, 0.8);\n\n    video {\n      opacity: 1;\n    }\n}\n"]))),ge=function(){return Object(I.jsxs)(be,{children:[Object(I.jsxs)(je,{children:[Object(I.jsx)("img",{src:"/images/viewers-disney.png"}),Object(I.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(I.jsx)("source",{src:"/videos/1564674844-disney.mp4"})})]}),Object(I.jsxs)(je,{children:[Object(I.jsx)("img",{src:"/images/viewers-marvel.png"}),Object(I.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(I.jsx)("source",{src:"/videos/1564676115-marvel.mp4"})})]}),Object(I.jsxs)(je,{children:[Object(I.jsx)("img",{src:"/images/viewers-pixar.png"}),Object(I.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(I.jsx)("source",{src:"/videos/1564676714-pixar.mp4"})})]}),Object(I.jsxs)(je,{children:[Object(I.jsx)("img",{src:"/images/viewers-starwars.png"}),Object(I.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(I.jsx)("source",{src:"/videos/1608229455-star-wars.mp4"})})]}),Object(I.jsxs)(je,{children:[Object(I.jsx)("img",{src:"/images/viewers-national.png"}),Object(I.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,children:Object(I.jsx)("source",{src:"/videos/1564676296-national-geographic.mp4"})})]})]})},he=z.a.main(qn||(qn=Object(k.a)(["\nposition:relative;\nmin-height:calc(100vh-250px);\nheight:200vh;\noverflow:hidden;\ndisplay:block;\ntop:72px;\npadding:0 calc(3.5vw + 5px);\n\n&:after{\nbackground:url('/images/home-background.png') center center / cover;\ncontent:'';\nposition:absolute;\ninset:0px;\n\nopacity:1;\nz-index:-1;\n\n}\n\n\n"]))),me=function(){var n=Object(G.b)(),e=Object(G.c)(_),i=[],t=[],r=[],a=[];return Object(u.useEffect)((function(){Z.collection("movies").onSnapshot((function(e){e.docs.map((function(n){switch(n.data().type){case"recommend":i=[].concat(Object(gn.a)(i),[Object(jn.a)({id:n.id},n.data())]);break;case"new":t=[].concat(Object(gn.a)(t),[Object(jn.a)({id:n.id},n.data())]);break;case"original":r=[].concat(Object(gn.a)(r),[Object(jn.a)({id:n.id},n.data())]);break;case"trending":a=[].concat(Object(gn.a)(a),[Object(jn.a)({id:n.id},n.data())])}})),n(wn({recommend:i,newDisney:t,original:r,trending:a}))}))}),[e]),Object(I.jsxs)(he,{children:[Object(I.jsx)(fn,{}),Object(I.jsx)(ge,{}),Object(I.jsx)(Vn,{}),Object(I.jsx)(Hn,{}),Object(I.jsx)(Jn,{}),Object(I.jsx)(xe,{})]})},ue=i(48);var Oe=z.a.div(Qn||(Qn=Object(k.a)(["\nposition:relative;\nmin-height:calc(100vh-250px);\noverflow-x:hidden;\ndisplay:block;\ntop:72px;\npadding: 0 calc(3.5vw + 5px); \n"]))),fe=z.a.div(Zn||(Zn=Object(k.a)(["\nleft:0px;\nopacity:0.8;\nposition:fixed;\nright:0px;\ntop:0px;\nz-index:-1;\n\nimg{\n    width:100vw;\n    height:100vh;\n\n@media (max-width: 768px){\n    width:initial;\n}\n}\n"]))),ve=z.a.div(ne||(ne=Object(k.a)(["\nalign-items: flex-end;\n  display: flex;\n  -webkit-box-pack: start;\n  justify-content: flex-start;\n  margin: 0px auto;\n  height: 30vw;\n  min-height: 170px;\n  padding-bottom: 24px;\n  width: 100%;\n  img {\n    max-width: 600px;\n    min-width: 200px;\n    width: 35vw;\n  }\n\n"]))),we=z.a.div(ee||(ee=Object(k.a)(["\nmax-width:874px;\n"]))),ye=z.a.div(ie||(ie=Object(k.a)(["\nalign-items:center;\ndisplay:flex;\nflex-flow:row nowrap;\nmargin:24px 0px;\nmin-height:56px;\n"]))),ke=z.a.button(te||(te=Object(k.a)(["\n  font-size: 15px;\n  margin: 0px 22px 0px 0px;\n  padding: 0px 24px;\n  height: 56px;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  letter-spacing: 1.8px;\n  text-align: center;\n  text-transform: uppercase;\n  background: rgb (249, 249, 249);\n  border: none;\n  color: rgb(0, 0, 0);\n  img {\n    width: 32px;\n  }\n  &:hover {\n    background: rgb(198, 198, 198);\n  }\n  @media (max-width: 768px) {\n    height: 45px;\n    padding: 0px 12px;\n    font-size: 12px;\n    margin: 0px 10px 0px 0px;\n    img {\n      width: 25px;\n    }\n  }\n"]))),ze=Object(z.a)(ke)(re||(re=Object(k.a)(["\n  background: rgba(0, 0, 0, 0.3);\n  border: 1px solid rgb(249, 249, 249);\n  color: rgb(249, 249, 249);\n"]))),Ie=z.a.div(ae||(ae=Object(k.a)(["\nmargin-right: 16px;\n  height: 44px;\n  width: 44px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  border: 2px solid white;\n  cursor: pointer;\n\n  span {\n    background-color: rgb(249, 249, 249);\n    display: inline-block;\n    &:first-child {\n      height: 2px;\n      transform: translate(1px, 0px) rotate(0deg);\n      width: 16px;\n    }\n    &:nth-child(2) {\n      height: 16px;\n      transform: translateX(-8px) rotate(0deg);\n      width: 2px;\n    }\n  }\n"]))),Se=z.a.div(ce||(ce=Object(k.a)(["\nheight:44px;\nwidth:44px;\ndisplay:flex;\nborder-radius:50%;\nalign-items:center;\njustify-content:center;\ncursor:pointer;\nbackground:white;\n\ndiv{\n  height:40px;\n  width:40px;\n  background:rgb(0,0,0);\n  border-radius:50%;\n\n  img{\n    width:100%;\n  }\n}\n"]))),Ee=z.a.div(oe||(oe=Object(k.a)(["\ncolor:rgb(249,249,249);\nfont-size:15px;\nmin-height:20px;\n\n@media(max-width:768px){\n  font-size:12px;\n}\n"]))),De=z.a.div(se||(se=Object(k.a)(["\nline-height:1.4;\nfont-size:20px;\npadding: 16px 0px;\ncolor: rgb(249, 249, 249);\n\n@media (max-width: 768px) {\n  font-size: 14px;\n  }\n"]))),Ae=function(){var n=Object(y.g)().id,e=Object(u.useState)({}),i=Object(ue.a)(e,2),t=i[0],r=i[1];return Object(u.useEffect)((function(){Z.collection("movies").doc(n).get().then((function(n){n.exists?r(n.data()):console.log("no such document in firebase")})).catch((function(n){console.log("Error getting document",n)}))}),[n]),Object(I.jsxs)(Oe,{children:[Object(I.jsx)(fe,{children:Object(I.jsx)("img",{src:t.backgroundImg,alt:t.title})}),Object(I.jsx)(ve,{children:Object(I.jsx)("img",{src:t.titleImg,alt:t.title})}),Object(I.jsxs)(we,{children:[Object(I.jsxs)(ye,{children:[Object(I.jsxs)(ke,{children:[Object(I.jsx)("img",{src:"/images/play-icon-black.png",alt:"play"}),Object(I.jsx)("span",{children:"Play"})]}),Object(I.jsxs)(ze,{children:[Object(I.jsx)("img",{src:"/images/play-icon-white.png",alt:"trailer"}),Object(I.jsx)("span",{children:"Trailer"})]}),Object(I.jsxs)(Ie,{children:[Object(I.jsx)("span",{}),Object(I.jsx)("span",{})]}),Object(I.jsx)(Se,{children:Object(I.jsx)("div",{children:Object(I.jsx)("img",{src:"/images/group-icon.png",alt:"group"})})})]}),Object(I.jsx)(Ee,{children:t.subTitle}),Object(I.jsx)(De,{children:t.description})]})]})};i(80);var Le=function(){return Object(I.jsx)("div",{className:"App",children:Object(I.jsxs)(w.a,{children:[Object(I.jsx)(bn,{}),Object(I.jsxs)(y.c,{children:[Object(I.jsx)(y.a,{exact:!0,path:"/",children:Object(I.jsx)(P,{})}),Object(I.jsx)(y.a,{path:"/home",children:Object(I.jsx)(me,{})}),Object(I.jsx)(y.a,{path:"/detail/:id",children:Object(I.jsx)(Ae,{})})]})]})})},Me=Object(N.a)({reducer:{user:V,movie:Sn},middleware:Object(N.c)({serializableCheck:!1})});v.a.render(Object(I.jsx)(O.a.StrictMode,{children:Object(I.jsx)(G.a,{store:Me,children:Object(I.jsx)(Le,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.1398d465.chunk.js.map