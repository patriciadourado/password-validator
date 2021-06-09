(this["webpackJsonppassword-validator"]=this["webpackJsonppassword-validator"]||[]).push([[0],{35:function(n,e,t){"use strict";t.r(e);var o,r,a,c,i,l,s,d,m,b,u,h=t(0),p=t.n(h),g=t(19),x=t.n(g),f=t(4),j=t(5),w=Object(j.a)(o||(o=Object(f.a)(["\n  :root {\n  --color-red: #f91c24;\n  --color-primary-medium: #ee3f3f;\n  --color-fiery-rose: #f25a70;\n  --color-orange: #ff8c2a;\n  --color-yellow: #ffba05;\n  --color-very-green: #009b14;\n  --color-cane: #9cd33b;\n  --color-cyan-blue: #1167b1;  \n  --color-blue-baby: #6bd1ff;\n  --color-pomp-and-power: #7c5e99;\n  --color-news: #6b5be2;\n  --color-gray-light: #f5f5f5;\n  --color-white: #ffffff;\n  --color-input: #f1f1f1;\n  --color-black-dark: #3a4042;\n  --color-black-medium: rgba(0, 0, 0, 0.6);\n  --color-black: #000000;\n}\n"]))),v=Object(j.a)(r||(r=Object(f.a)(['\n  /* http://meyerweb.com/eric/tools/css/reset/ \n  v2.0 | 20110126\n  License: none (public domain)\n*/\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n  font-family: "Roboto", sans-serif;\n  background-color: var(--color-white);\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nhtml,\nbody {\n  font-size: 1px;\n  min-width: 320px;\n  height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n\n#root {\n  min-height: calc(100vh - var(--bodyPaddingTop));\n  display: flex;\n  flex-direction: column;\n}\n\n* {\n  box-sizing: border-box;\n}\n']))),y=t(23),O=t(2),C=t(10),K="data:image/png;base64,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",k=t.p+"static/media/eye.d3b88b3a.ico",S=j.c.img(a||(a=Object(f.a)(["\n  display: flex;\n  margin-top: 5px;\n  justify-content: space-between;\n  align-items: center;\n  width: 150px;\n  height: 150px;\n  background-image: ",";\n  background-position: center;\n"])),(function(n){var e=n.logo;return"url(".concat(e,")")})),U=j.c.button(c||(c=Object(f.a)(["\n  position: relative;\n  margin-top: 15rem;\n  padding: 12rem 30rem;\n  background-color: var(--color-pomp-and-power);\n  color: var(--color-white);\n  border: 1px solid var(--color-white);\n  border-radius: 4px;\n  font-size: 20rem;\n  cursor: pointer;\n  text-decoration: none;\n  overflow: hidden;\n\n"]))),A=j.c.form(i||(i=Object(f.a)(["\n  padding: 36rem 10rem;\n  background-color: white;\n\n  & ","{\n   width: 300rem;\n   margin: 1rem 0 1rem 25rem;\n  }\n  & ","{\n    justify-content: center;\n    display: flex;\n    margin: auto;\n  }\n  @media(max-width: 800px){\n    justify-content: center;\n    & ","{\n      font-size: 20rem;  \n    }\n  }\n"])),U,S,U),q=j.c.div(l||(l=Object(f.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 14px;\n\n"]))),Y=j.c.i(s||(s=Object(f.a)(["\n  position: absolute;\n  top: 29px;\n  right: 12%;\n  width: 22px;\n  height: 22px;\n  background-image: ",";\n  display:inline-block;\n  \n  &:hover { \n    opacity: 0.5;\n    cursor: pointer;\n  }\n"])),(function(n){var e=n.eye;return"url(".concat(e,")")})),X=j.c.section(d||(d=Object(f.a)(["\n  justify-content: center;\n  width: 350rem;\n  height: 300rem;\n  margin: 30rem auto;\n  align-items: center;\n  padding-top: 25rem;\n  box-shadow: 0rem 13rem 40rem -13rem rgba(0,0,0,0.75);\n"]))),H=j.c.span(m||(m=Object(f.a)(["\n  font-size: 18rem;\n  margin: 20rem 0 1rem 25rem;\n  color: var(--color-black-dark);\n  font-weight: 20px;\n  text-align: justify;\n  text-justify: center;\n\n  @media(max-width: 800px){\n    font-size: 12px;  \n  }\n\n  ",";\n\n"])),(function(n){return n.small&&Object(j.b)(b||(b=Object(f.a)(["\n    margin: 2rem 0 1rem 25rem;\n    font-size: 12rem;\n    color: var(--color-red);\n    font-weight: 11px;\n    text-align: justify;\n    text-justify: center;\n  "])))})),E=j.c.input(u||(u=Object(f.a)(["\n  width: 300rem;\n  padding: 15rem;\n  margin: 15rem 0 15rem 25rem;\n  display: inline-block;\n  border: none;\n  background: var(--color-input);\n"]))),Q=t(1);var F=function(){var n=Object(h.useState)(!1),e=Object(C.a)(n,2),t=e[0],o=e[1],r=Object(h.useState)(""),a=Object(C.a)(r,2),c=a[0],i=a[1],l=Object(h.useState)(!1),s=Object(C.a)(l,2),d=s[0],m=s[1],b=Object(h.useState)(""),u=Object(C.a)(b,2),p=u[0],g=u[1],x=Object(h.useState)(""),f=Object(C.a)(x,2),j=f[0],w=f[1];return Object(Q.jsxs)(A,{children:[Object(Q.jsx)(S,{logo:K,src:K,alt:"Home",title:"Home"}),Object(Q.jsxs)(X,{children:[Object(Q.jsx)(H,{children:"Username"}),Object(Q.jsx)(E,{type:"text",placeholder:"Username",onChange:function(n){g(n.target.value)},value:p,required:!0}),Object(Q.jsx)(H,{children:"Password"}),Object(Q.jsxs)(q,{children:[Object(Q.jsx)(E,{type:t?"text":"password",placeholder:"Password",onChange:function(n){w(n.target.value)},value:j,required:!0}),Object(Q.jsx)(Y,{onClick:function(){o(!t)},eye:k}),d&&Object(Q.jsx)(H,{small:!0,children:c})]}),Object(Q.jsx)(U,{type:"submit",onClick:function(n){n.preventDefault(),(j.length<8?(i("The password must have at least 8 characters!"),0):j.length>30?(i("The password must have maximum of 30 characters!"),0):j.match(/[a-z]/)?j.match(/[A-Z]/)?j.match(/[0-9]/)?j.match(/[!@#$%^&?*]/)||(i("The password must have at least 1 special character!"),0):(i("The password must have at least 1 numberic character!"),0):(i("The password must have at least 1 uppercase character!"),0):(i("The password must have at least 1 lowcase character!"),0))?m(!1):m(!0)},children:"Login"})]})]})};var P=function(){return Object(Q.jsx)(y.a,{basename:"/",children:Object(Q.jsx)(O.a,{path:"/",component:F})})};x.a.render(Object(Q.jsxs)(p.a.StrictMode,{children:[Object(Q.jsx)(w,{}),Object(Q.jsx)(v,{}),Object(Q.jsx)(P,{})]}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.8e69bb2a.chunk.js.map