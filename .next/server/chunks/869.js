exports.id=869,exports.ids=[869],exports.modules={7713:(e,r,t)=>{var o={"./en.json":[9316,316],"./es.json":[5671,671],"./fr.json":[7913,913],"./it.json":[1880,880],"./pt.json":[9022,22]};function i(e){if(!t.o(o,e))return Promise.resolve().then(()=>{var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r});var r=o[e],i=r[0];return t.e(r[1]).then(()=>t.t(i,19))}i.keys=()=>Object.keys(o),i.id=7713,e.exports=i},1302:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,2994,23)),Promise.resolve().then(t.t.bind(t,6114,23)),Promise.resolve().then(t.t.bind(t,9727,23)),Promise.resolve().then(t.t.bind(t,9671,23)),Promise.resolve().then(t.t.bind(t,1868,23)),Promise.resolve().then(t.t.bind(t,4759,23))},9042:(e,r,t)=>{Promise.resolve().then(t.bind(t,3170)),Promise.resolve().then(t.bind(t,4145)),Promise.resolve().then(t.bind(t,4150))},4621:(e,r,t)=>{"use strict";t.d(r,{Z:()=>d});var o=t(326);t(7577);var i=t(7457),n=t(1337),a=t(7803);let s=i.ZP.button`
  font-size: var(--fontSize);
  font-family: "Roboto", sans-serif;
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: var(--border);
  color: var(--color);
  background-color: var(--backgroundColor);
  cursor: pointer;
  width: var(--width);
  height: var(--height);
  font-weight: ${e=>e.fontWeight};

  display: flex;
  align-items: center;

  background-image: var(--backgroundFill);
  background-size: 0 100%;
  background-repeat: no-repeat;
  transition: .5s;

  &:focus {
    outline-color: var(--focusOutline);
    outline-offset: 4px;
  }

  &:hover {
    /* background-color: var(--hoverBackground); */
    color: var(--hoverColor);
    outline-color: var(--hoverOutline);
    border: var(--hoverBorder);
    background-size: 100% 100%;
    justify-content: space-between;
  }
`,l=i.ZP.div`
  padding-left: 2rem;
`,d=({variant:e,size:r,children:t,onClick:i,disabled:d,fill:c,hasIcon:h=!1,fontWeight:g=400,...p})=>{let u=n.Gt[r],b=n.xw[e];return(0,o.jsxs)(s,{style:{...u,...b},onClick:i,"aria-disabled":d,fontWeight:g,...p,children:[t,h&&o.jsx(l,{children:o.jsx(a._,{fill:c||n.DM.white,height:20,width:20})})]})}},4145:(e,r,t)=>{"use strict";t.d(r,{default:()=>s});var o=t(326),i=t(7577),n=t(5047),a=t(7457);function s({children:e}){let[r]=(0,i.useState)(()=>new a.qH);return(0,n.useServerInsertedHTML)(()=>{let e=r.getStyleElement();return r.instance.clearTag(),o.jsx(o.Fragment,{children:e})}),o.jsx(a.LC,{sheet:r.instance,children:e})}},1312:(e,r,t)=>{"use strict";t.d(r,{g:()=>h});var o=t(326);t(7577);var i=t(3844),n=t(2104),a=t(1337),s=t(7457),l=t(575);let d=s.ZP.a`
    background-color: ${a.DM.primary};
    color: ${a.DM.white};
    border: 2px solid ${a.DM.primary};
    background-image: linear-gradient(90deg, hsl(198, 76%, 53%) 0%, hsl(198, 76%, 53%) 56%);
    background-size: 0 100%;
    background-repeat: no-repeat;
    transition: .5s;
    cursor: pointer;
    padding: 8px 24px;
    border-radius: ${a.n_}px;
    display: flex;
    align-items: center;
    font-weight: bold !important;

    &:hover {
        background-color: ${a.DM.blue};
        border: 2px solid ${a.DM.blue};
        background-size: 100% 100%; 
    }
`,c=s.ZP.div`
    padding-left: 2rem;
`,h=()=>{let e=(0,i.useTranslations)("Home.Contact");return(0,o.jsxs)(d,{href:n.I2,target:"__blank",children:[e("DonateCTA"),o.jsx(c,{children:o.jsx(l._Q,{fill:a.DM.white,height:20,width:20})})]})}},5706:(e,r,t)=>{"use strict";t.d(r,{Header:()=>C});var o=t(326),i=t(7577),n=t(7457);let a=[{itemId:"header-item-news",labelKey:"News",path:"/novedades"},{itemId:"header-item-shop",labelKey:"BuyASculpture",path:"/unicornios"}];var s=t(3844),l=t(3412);let d=({labelKey:e,path:r,locale:t,...i})=>{let n=(0,s.useTranslations)("Home.Header");return o.jsx(l.Z,{href:`${t}/${r}`,label:n(e),...i})};var c=t(4621),h=t(6226),g=t(1337),p=t(5047);let u=n.ZP.div`
    text-align: left;
    width: fit-content;
    height: auto;
    color: #bfc5cd;
    font-size: 16px;
    font-weight: 300;
    position: fixed;
    left: 15px;
    top: 0;
    margin: 1em 0;
    transition: all .6s ease;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 400px) {
        max-width: 300px;
    }

    svg {
        fill: #798697;
    transition: all .6s ease;
    }

    ul {
        border: 2px solid ${g.DM.white};
        /* display: ${e=>e.active?"flex":"none"}; */
        flex-direction: column;
        gap: 1rem;
        height: auto;
        align-items: center;
        justify-content: center;
        width: fit-content;
        padding: 0.5rem;
        border-radius: 8px;
        margin-top: 8px;
        box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.1);
        background-color: rgba(211,211,211,0.4);
        transition: all .6s ease;
    }

    ${e=>e.active?`
        svg {
            transform: rotate(180deg);
        }
    `:""}
`,b=n.ZP.div`
    display: inline-block;
    color: grey;
    border: 1px solid green;
    /* background: transparent; */
    background-color: rgba(211,211,211,0.4);
    box-shadow: 0px 0px 8px 1px rgba(0,0,0,0.1);
    cursor: pointer;
    vertical-align: middle;
    max-width: 100px;
    padding: 10px 10px;
    font-size: 12px;
    text-align: center;
    height: 100%;
    transition: all .3s ease;
    border: 2px solid ${g.DM.white};
    border-radius: 50px;

    &:focus {
        outline: none;
    }
`,m=n.ZP.div`
    background-image: url(${e=>e.image});
    background-size: cover;
    background-position: center;
    height: 15px;
    width: 18px;
    transition: all .5s ease;
`,x=n.ZP.div`
    color: #798697;
    background: transparent;
    gap: 1rem;
    display: flex;
    height: 100%;
    cursor: pointer;
    user-select: none;
    transition: all .25s ease;

    &:hover, &.selected { 
        background: #F7F7F7;
        color: #4A4A4A;
    }
`,f=({options:e})=>{let r=(0,p.useRouter)(),t=(0,p.useParams)(),n=(0,p.useSelectedLayoutSegments)(),[a,s]=(0,i.useState)(!1),[l,d]=(0,i.useState)(null);(0,i.useEffect)(()=>{d(e.filter(e=>e.locale==t.locale)[0])});let c=e=>{d(e),console.log(e),s(!a),r.push(`/${e.locale}/${n.join("/")}`)};return(0,o.jsxs)(u,{active:a,children:[o.jsx(b,{onClick:e=>{e.preventDefault(),s(!a)},children:o.jsx(m,{image:l?.flagUrl})}),o.jsx("ul",{style:a?{display:"flex"}:{display:"none",listStyleType:"none"},children:e?.map(e=>o.jsx(x,{onClick:()=>c(e),children:o.jsx(m,{image:e.flagUrl})},e.flagDescription.toString()))})]})},v=[{flagUrl:"/assets/flags/argentina.svg",flagDescription:"argentina",locale:"es"},{flagUrl:"/assets/flags/england.svg",flagDescription:"england",locale:"en"},{flagUrl:"/assets/flags/italy.svg",flagDescription:"italy",locale:"it"},{flagUrl:"/assets/flags/france.svg",flagDescription:"france",locale:"fr"},{flagUrl:"/assets/flags/portugal.svg",flagDescription:"portugal",locale:"pt"}];var k=t(2104),w=t(1312);let y=n.ZP.div`
    min-width: 100%;
    display: flex;
    height: ${g.Mz}rem;
    position: absolute;
    top: 0;
    z-index: 50;
    background: ${e=>e.background?g.DM.gray:"transparent"};
    justify-content: space-between; 
    align-items: center;
    padding: 2rem ${g.WS-10}rem 2rem ${g.WS}rem;
    top: 0;
`,j=n.ZP.div`
    display: flex;
    gap: 2rem;
    justify-content: space-between; 
    align-items: center; 
`,C=({hasBackground:e=!1})=>{let r=(0,s.useTranslations)("Home.Header"),t=p.useParams()?.locale;return(0,o.jsxs)(y,{background:e,children:[o.jsx(h.default,{src:k.dg,alt:"Uniqueer logo",width:180,height:60}),(0,o.jsxs)(j,{children:[a.map(e=>(0,i.createElement)(d,{...e,key:e.itemId,locale:t})),o.jsx(c.Z,{size:"base",variant:"alternateOutlined",fontWeight:700,children:r("ContactUs")}),o.jsx(w.g,{})]}),o.jsx(f,{flagDefault:v[0],options:v})]})}},7803:(e,r,t)=>{"use strict";t.d(r,{_:()=>i});var o=t(326);t(7577);let i=({fill:e,height:r=16,width:t=16})=>o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:t,height:r,fill:e,viewBox:"0 0 16 16",children:o.jsx("path",{fillRule:"evenodd",d:"M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"})})},575:(e,r,t)=>{"use strict";t.d(r,{_Q:()=>o._,s1:()=>a,mr:()=>s,n6:()=>l,tL:()=>d,_F:()=>c});var o=t(7803),i=t(326),n=t(1337);t(7577);let a=({fill:e=n.DM.black,height:r=16,width:t=16})=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:t,height:r,children:[i.jsx("path",{fill:"none",stroke:e,strokeWidth:2,strokeLinecap:"round",strokeMiterlimit:10,d:"M26,45V29h-3v-5h3v-3c0-4,2-7,6-7c2.903,0,5,1,5,1v4h-2c-2.145,0-3,0.504-3,2v3h5l-1,5h-4v16"}),i.jsx("path",{fill:"none",stroke:e,strokeWidth:2,strokeLinecap:"round",strokeMiterlimit:10,strokeLinejoin:"round",d:"M9,45h32c2.209,0,4-1.791,4-4V9c0-2.209-1.791-4-4-4H9C6.791,5,5,6.791,5,9v32C5,43.209,6.791,45,9,45z"})]}),s=({fill:e=n.DM.black,height:r=16,width:t=16})=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 26 26",width:t,height:r,children:[i.jsx("path",{fill:"none",stroke:e,strokeWidth:2,strokeMiterlimit:10,d:"M7.546,25h10.909C22.07,25,25,22.07,25,18.454V7.545C25,3.93,22.07,1,18.454,1H7.545C3.93,1,1,3.93,1,7.546v10.909C1,22.07,3.93,25,7.546,25z"}),i.jsx("circle",{fill:"none",stroke:e,strokeWidth:2,strokeMiterlimit:10,cx:"13",cy:"13",r:"6"}),i.jsx("circle",{cx:"20.5",cy:"5.5",r:"1.5"})]}),l=({fill:e=n.DM.black,height:r=16,width:t=16})=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:t,height:r,children:[i.jsx("path",{fill:"none",stroke:e,strokeWidth:2,strokeLinecap:"round",strokeMiterlimit:10,strokeLinejoin:"round",d:"M9,45h32c2.209,0,4-1.791,4-4V9c0-2.209-1.791-4-4-4H9C6.791,5,5,6.791,5,9v32C5,43.209,6.791,45,9,45z"}),i.jsx("polygon",{fill:"none",stroke:e,strokeWidth:2,strokeLinecap:"round",strokeMiterlimit:10,strokeLinejoin:"round",points:"11,20 17,20 17,33.135 17,39 11,39 "}),i.jsx("path",{fill:"none",stroke:e,strokeWidth:2,strokeLinecap:"round",strokeMiterlimit:10,strokeLinejoin:"round",d:"M14,17L14,17c-1.8,0-3-1.133-3-2.533S12.2,12,14,12s2.925,1.067,3,2.467C17,15.867,15.875,17,14,17z"}),i.jsx("path",{fill:"none",stroke:e,strokeWidth:2,strokeLinecap:"round",strokeMiterlimit:10,strokeLinejoin:"round",d:"M39,39h-6c0,0,0-9.257,0-10c0-2-1-4-3.5-4.043C27.022,24.913,26,27,26,29c0,0.909,0,10,0,10h-6V20h6v2.561c0,0,1.93-2.561,5.813-2.561C35.778,20,39,22.726,39,28.261V39z"})]}),d=({fill:e=n.DM.black,height:r=16,width:t=16})=>i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:t,height:r,children:i.jsx("path",{fill:"none",stroke:e,strokeWidth:"2","stroke-linecap":"round","stroke-linejoin":"round",strokeMiterlimit:"10",d:"M49,11.096c-1.768,0.784-3.664,1.311-5.658,1.552c2.035-1.22,3.597-3.151,4.332-5.448c-1.903,1.127-4.013,1.947-6.255,2.388c-1.795-1.916-4.354-3.11-7.186-3.11c-5.44,0-9.849,4.409-9.849,9.847c0,0.771,0.088,1.522,0.257,2.244c-8.184-0.412-15.441-4.332-20.299-10.29c-0.848,1.458-1.332,3.149-1.332,4.953c0,3.416,1.735,6.429,4.38,8.197c-1.616-0.051-3.132-0.495-4.46-1.233c0,0.042,0,0.082,0,0.125c0,4.773,3.394,8.748,7.896,9.657c-0.824,0.227-1.694,0.346-2.592,0.346c-0.636,0-1.253-0.062-1.856-0.178c1.257,3.909,4.892,6.761,9.201,6.84c-3.368,2.641-7.614,4.213-12.23,4.213c-0.797,0-1.579-0.044-2.348-0.137c4.356,2.795,9.534,4.425,15.095,4.425c18.114,0,28.022-15.007,28.022-28.016c0-0.429-0.011-0.856-0.029-1.275C46.012,14.807,47.681,13.071,49,11.096z"})}),c=({fill:e=n.DM.black,height:r=16,width:t=16})=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:t,height:r,children:[i.jsx("g",{children:i.jsx("path",{d:"M24.4,11c7.2,0,13,0.6,15.8,1.1c1.5,0.4,2.7,1.4,2.9,2.7c0.6,3.2,1,6.6,1,10.1c-0.1,4.3-0.6,7.8-1,10.3c-0.3,1.9-2.3,2.5-2.9,2.7c-3.6,0.7-9.6,1.2-15.6,1.2s-12.1-0.4-15.6-1.2c-1.5-0.4-2.7-1.4-2.9-2.7C5.3,32.4,5,28.7,5,25c0-4.6,0.4-8,0.8-10.1c0.3-1.9,2.4-2.5,2.9-2.7C12,11.5,18.1,11,24.4,11 M24.4,9c-6.6,0-12.8,0.5-16.1,1.2c-2.2,0.5-4.1,2-4.5,4.3C3.4,16.9,3,20.5,3,25S3.4,33,3.9,35.5c0.4,2.2,2.3,3.8,4.5,4.3c3.5,0.7,9.5,1.2,16.1,1.2c6.6,0,12.6-0.5,16.1-1.2c2.2-0.5,4.1-2,4.5-4.3c0.4-2.5,0.9-6.1,1-10.6c0-4.5-0.5-8.1-1-10.6c-0.4-2.2-2.3-3.8-4.5-4.3C37.1,9.5,31,9,24.4,9L24.4,9z"})}),i.jsx("path",{d:"M21,20.4l8,4.6l-8,4.6V20.4 M19,17v16l14-8L19,17L19,17z"})]})},3412:(e,r,t)=>{"use strict";t.d(r,{Z:()=>d});var o=t(326);t(7577);var i=t(434),n=t(7457),a=t(1337);let s=(0,n.ZP)(i.default)`
    color: ${a.DM.primary};
    background-color: transparent;
    font-weight: bold;

    &:active {
        color: ${a.DM.black};
    }

    &:hover {
        /* font-weight: 700; */
    }
`,l=n.ZP.div`
    position: relative;
    display: inline-block;
    padding-bottom: 0.3rem;

    &::after {
        border-bottom: 1px solid ${a.DM.primary};
        position: absolute;
        left: 50%;
        content: ' ';
        transform: translateX(-50%);
        transition: width 0.2s linear;
        width: 0;
        height: 0;
        bottom: 0;
    }

    &:hover::after {
        width: 80%;
    }
`,d=({href:e,label:r})=>o.jsx(l,{children:o.jsx(s,{href:e,children:r})})},2104:(e,r,t)=>{"use strict";t.d(r,{B2:()=>k,BB:()=>o,HF:()=>a,HL:()=>$,I$:()=>f,I2:()=>M,IF:()=>j,O1:()=>w,P1:()=>m,Wj:()=>C,_R:()=>p,bX:()=>u,dg:()=>y,dw:()=>n,gR:()=>b,hz:()=>h,mc:()=>v,nW:()=>S,oC:()=>s,q3:()=>i,rU:()=>d,s6:()=>g,tJ:()=>c,tR:()=>x,vp:()=>l});let o="https://www.youtube.com/@uniqueer",i="",n="",a="",s="",l="/assets/equipo/1.png",d="/assets/equipo/2.jpg",c="/assets/equipo/3.jpg",h="/assets/equipo/ani.jpeg",g="/assets/equipo/euge.jpg",p="/assets/equipo/feda.jpg",u="/assets/equipo/gonza.jpg",b="/assets/equipo/lucas.jpeg",m="/assets/equipo/valen.jpeg",x="/assets/fondos/gray-peak-bg.png",f="/assets/fondos/unicorn-bg.png",v="/assets/unicornios/3d-unicorn.png",k="/assets/unicornios/unicornio-uniqueer.png",w="/assets/unicornios/sado-unicorn.png",y="/assets/unicornios/logo.png",j="/assets/unicornios/unicornio-wedo.png",C="/assets/unicornios/uniqueer-contacto.png",M="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848b95ad95018ba4cefa00075e&utm_source=email_marketing&utm_admin=160454&utm_medium=email&utm_campaign=Gracias_por_ser_parte_de_una_noche_mgica_con_Uniqueer",$="/assets/galeria/",S="/assets/galeria/misc"},4150:(e,r,t)=>{"use strict";t.d(r,{default:()=>n});var o=t(7457),i=t(1337);let n=(0,o.vJ)`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    line-height: calc(1em + 0.5rem);
  }

  html, body, #__next, main {
    min-height: 100%;

    // Adding this var for mobile devices -- minimum recommended tap surface is 44px-44px
    @media (pointer: coarse) {
      html {
        --min-tap-height: 44px;
      }
    }
  }

  main {
    background-color: ${i.DM.white};
  }

  body {
    ${""}
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }
`},1337:(e,r,t)=>{"use strict";t.d(r,{DM:()=>d,El:()=>s,Gt:()=>g,H3:()=>c,Mz:()=>o,WS:()=>n,Ye:()=>h,ZP:()=>i,n_:()=>a,xw:()=>p});let o=6,i=7,n=12,a=48,s=16,l={tabletMin:550,laptopMin:1100,desktopMin:1500};l.tabletMin,l.laptopMin,l.desktopMin;let d={primary:"hsl(327, 85%, 48%)",secondary:"",yellow:"#EEB81D",blue:"#2BABE2",primaryLight:"hsl(235 100% 62%)",white:"hsl(0, 0%, 100%)",offwhite:"hsl(0, 0%, 86%)",gray:"#DCDCDC",black:"hsl(0 0% 0%)",transparent:"rgba(0,0,0,0)",grayGradient:"linear-gradient(to bottom, rgba(0,0,0, 0.3) 80%, rgba(0,0,0,0) 100%)",overlay:"linear-gradient(90deg, rgba(0,0,0, 0.6) 0%, rgba(0,0,0,0.1) 70%)"},c={xs:{"--fontSize":"0.7rem"},sm:{"--fontSize":"1rem"},md:{"--fontSize":"1.2rem"},lg:{"--fontSize":"1.5rem"},xl:{"--fontSize":"1.8rem"},"2xl":{"--fontSize":"2.4rem"},"3xl":{"--fontSize":"3.2rem"},"4xl":{"--fontSize":"4.4rem"}},h={banner:{"--backgroundColor":d.transparent,"--color":d.white,"--fontStyle":"normal","--fontWeight":"400"},title:{"--backgroundColor":d.transparent,"--color":d.white,"--fontStyle":"normal","--fontWeight":"700"},description:{"--backgroundColor":d.transparent,"--color":d.black,"--fontStyle":"normal","--fontWeight":"400"},black:{"--backgroundColor":d.transparent,"--color":d.black,"--fontStyle":"normal","--fontWeight":"700"},alternateDescription:{"--backgroundColor":d.transparent,"--color":d.white,"--fontStyle":"italic","--fontWeight":"400"},comment:{"--backgroundColor":d.transparent,"--color":d.primary,"--fontStyle":"italic","--fontWeight":"400"},alternatePink:{"--backgroundColor":d.transparent,"--color":d.primary,"--fontStyle":"normal","--fontWeight":"400"}},g={base:{"--fontSize":"1rem","--padding":"8px 24px","--width":"auto","--height":"40px"},small:{"--fontSize":"1rem","--padding":"8px 24px","--width":"240px","--height":"50px"},medium:{"--fontSize":"1.125rem","--padding":"14px 20px","--width":"320px","--height":"60px"},large:{"--fontSize":21/16+"rem","--padding":"18px 32px","--width":"320px","--height":"80px"}},p={base:{"--backgroundColor":d.white,"--color":d.black,"--focusOutline":d.white,"--hoverBackground":d.primary,"--hoverColor":d.white,"--hoverOutline":d.white,"--border":`2px solid ${d.white}`,"--borderRadius":`${a}px`,"--hoverBorder":`2px solid ${d.primary}`,"--backgroundFill":"none"},filled:{"--backgroundColor":d.primary,"--color":d.white,"--focusOutline":d.white,"--hoverBackground":d.blue,"--hoverColor":d.white,"--hoverOutline":d.blue,"--border":`2px solid ${d.primary}`,"--borderRadius":`${a}px`,"--hoverBorder":`2px solid ${d.blue}`,"--backgroundFill":"linear-gradient(90deg, hsl(198, 76%, 53%) 0%, hsl(198, 76%, 53%) 56%)"},alternateFilled:{"--backgroundColor":d.white,"--color":d.black,"--focusOutline":d.white,"--hoverBackground":d.primary,"--hoverColor":d.white,"--hoverOutline":d.white,"--border":`2px solid ${d.primary}`,"--borderRadius":`${a}px`,"--hoverBorder":`2px solid ${d.primary}`,"--backgroundFill":"none"},ghost:{"--backgroundColor":d.transparent,"--color":d.white,"--focusOutline":d.white,"--hoverBackground":d.white,"--hoverColor":d.black,"--hoverOutline":d.white,"--border":`2px solid ${d.white}`,"--borderRadius":`${a}px`,"--hoverBorder":`2px solid ${d.white}`,"--backgroundFill":"linear-gradient(90deg, rgba(228,18,134,0.8) 0%, rgba(228,18,134,0.8) 56%)"},alternateGhost:{"--backgroundColor":d.white,"--color":d.black,"--focusOutline":d.white,"--hoverBackground":d.primary,"--hoverColor":d.white,"--hoverOutline":d.white,"--border":"none","--borderRadius":"","--hoverBorder":"none","--backgroundFill":"none"},outlined:{"--backgroundColor":d.transparent,"--color":d.black,"--focusOutline":d.black,"--hoverBackground":d.black,"--hoverColor":d.white,"--hoverOutline":d.white,"--border":`2px solid ${d.black}`,"--borderRadius":`${a}px`,"--hoverBorder":`2px solid ${d.black}`,"--backgroundFill":"linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.8) 56%)"},alternateOutlined:{"--backgroundColor":d.transparent,"--color":d.white,"--focusOutline":d.white,"--hoverBackground":d.primary,"--hoverColor":d.white,"--hoverOutline":d.white,"--border":`2px solid ${d.white}`,"--borderRadius":`${a}px`,"--hoverBorder":`2px solid ${d.primary}`,"--backgroundFill":"linear-gradient(90deg, rgba(228,18,134,0.8) 0%, rgba(228,18,134,0.8) 56%)"}}},221:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>w,generateStaticParams:()=>k,metadata:()=>f});var o=t(9510),i=t(2021),n=t.n(i),a=t(8570);let s=(0,a.createProxy)(String.raw`/Users/henderito/code/henderito.github.io/src/global/globalStyles.js`),{__esModule:l,$$typeof:d}=s;s.default;let c=(0,a.createProxy)(String.raw`/Users/henderito/code/henderito.github.io/src/global/globalStyles.js#default`);var h=t(3186),g=t(5031);t(2421);let p=(0,a.createProxy)(String.raw`/Users/henderito/code/henderito.github.io/src/components/ComponentRegistrty/register.tsx`),{__esModule:u,$$typeof:b}=p;p.default;let m=(0,a.createProxy)(String.raw`/Users/henderito/code/henderito.github.io/src/components/ComponentRegistrty/register.tsx#default`);var x=t(1160);let f={title:"Uniqueer",description:"Uniqueer"},v=["en","es","fr","it","pt"];function k(){return v.map(e=>({locale:e}))}async function w({children:e,params:{locale:r}}){let t=await (0,g.Z)();return(0,x.k)(r),o.jsx("html",{lang:r||"es",className:n().className,children:o.jsx("body",{children:(0,o.jsxs)(m,{children:[o.jsx(h.Z,{messages:t,children:e}),o.jsx(c,{})]})})})}},2421:(e,r,t)=>{"use strict";t.d(r,{Z:()=>a});var o=t(8585),i=t(107);let n=["es","en","it","fr","pt"],a=(0,i.Z)(async({locale:e})=>(n.includes(e)||(0,o.notFound)(),{locale:"es",messages:(await t(7713)(`./${e}.json`)).default}))}};