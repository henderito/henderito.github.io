(()=>{var e={};e.id=892,e.ids=[892],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},2781:e=>{"use strict";e.exports=require("stream")},6159:(e,i,t)=>{"use strict";t.r(i),t.d(i,{GlobalError:()=>o.a,__next_app__:()=>h,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d}),t(2493),t(221),t(5866);var r=t(3191),n=t(8716),a=t(7922),o=t.n(a),s=t(5231),l={};for(let e in s)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);t.d(i,l);let d=["",{children:["[locale]",{children:["novedades",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,2493)),"/Users/henderito/code/henderito.github.io/src/app/[locale]/novedades/page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,221)),"/Users/henderito/code/henderito.github.io/src/app/[locale]/layout.tsx"]}]},{"not-found":[()=>Promise.resolve().then(t.t.bind(t,5866,23)),"next/dist/client/components/not-found-error"]}],c=["/Users/henderito/code/henderito.github.io/src/app/[locale]/novedades/page.tsx"],u="/[locale]/novedades/page",h={require:t,loadChunk:()=>Promise.resolve()},p=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/[locale]/novedades/page",pathname:"/[locale]/novedades",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9677:(e,i,t)=>{Promise.resolve().then(t.bind(t,6456))},2818:(e,i,t)=>{"use strict";t.d(i,{Footer:()=>b});var r=t(326);t(7577);var n=t(7457),a=t(6226),o=t(575),s=t(434),l=t(1337);let d=(0,n.ZP)(s.default)`
    color: ${l.DM.primary};
    background-color: transparent;
    font-weight: 400;
`,c=n.ZP.div`
    position: relative;
    display: inline-block;
    padding-bottom: 0.3rem;
    transition: all .3s ease;

    &:hover {
        transform: scale(1.5);
    }
`,u=({href:e,children:i})=>r.jsx(c,{children:r.jsx(d,{href:e,children:i})});var h=t(4367),p=t(3844),m=t(2104);let x=n.zo.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 0 ${l.WS}rem 1rem;
    gap: 1rem;
`,f=n.zo.div`
    width: 100%;
    height: 2px;
    background-color: ${l.DM.gray};
`,g=n.zo.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`,v=n.zo.div`
    display: flex;
    gap: 1rem;
    align-items: center;
`,b=()=>{let e=(0,p.useTranslations)("Home.Footer");return(0,r.jsxs)(x,{children:[r.jsx(f,{}),(0,r.jsxs)(g,{children:[r.jsx(h.x,{label:e("Title"),size:"sm",variant:"description"}),r.jsx(a.default,{src:m.B2,alt:"Uniqueer logo",width:45,height:45}),(0,r.jsxs)(v,{children:[r.jsx(u,{href:m.q3,children:r.jsx(o.s1,{height:25,width:25})}),r.jsx(u,{href:m.dw,children:r.jsx(o.mr,{height:25,width:25})}),r.jsx(u,{href:m.BB,children:r.jsx(o._F,{height:25,width:25})}),r.jsx(u,{href:m.HF,children:r.jsx(o.tL,{height:25,width:25})}),r.jsx(u,{href:m.oC,children:r.jsx(o.n6,{height:25,width:25})})]})]})]})}},6456:(e,i,t)=>{"use strict";t.d(i,{NewsContainer:()=>v});var r=t(326);t(7577);var n=t(2818),a=t(5706),o=t(7457),s=t(4367),l=t(3412),d=t(1337);let c=o.ZP.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    padding: 2rem;
    gap: 2rem;
    width: 100%;
    box-shadow: 0px 6px 16px rgba(0,0,0,0.2);
    transition: all .7s ease;
    margin: 1rem 0;
    background-color: ${d.DM.white};
    border-radius: ${d.El}px;
    opacity: 0.9;

    &:hover {
        grid-template-columns: 1fr 3fr;
        background-color: ${d.DM.white};
        opacity: 1;

        img {
            width: 340px;
        }
    }
`,u=o.ZP.img`
    height: auto;
    width: 250px;
    transition: all .7s ease;
    border-radius: ${d.El}px;
`,h=o.ZP.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
`,p=({title:e,description:i,imageUrl:t,newsId:n})=>(0,r.jsxs)(c,{children:[r.jsx(u,{src:t}),(0,r.jsxs)(h,{children:[r.jsx(s.x,{label:e,size:"2xl",variant:"alternatePink"}),r.jsx(s.x,{label:i,size:"md",variant:"description"}),r.jsx(l.Z,{href:`/novedades/${n}`,label:"Leer m\xe1s"})]})]});var m=t(2104),x=t(3844);let f=o.ZP.div`
  padding: ${d.ZP}rem ${d.WS}rem;
  min-height: 100vh;
  background-color: ${d.DM.gray};
`,g=o.ZP.div`
  padding: 2rem 0;
`,v=()=>{let e=(0,x.useTranslations)("News");return(0,r.jsxs)("main",{children:[r.jsx(a.Header,{}),(0,r.jsxs)(f,{children:[r.jsx(g,{children:r.jsx(s.x,{label:e("Title"),size:"3xl",variant:"alternatePink"})}),r.jsx(p,{description:"As a bet on the future and a call to action, Uniqueer presented “Uniquer Tour 2024”, an initiative to make the LGBTIQ+ community visible and promote its full inclusion in the workplace, key elements for building a more fair and equitable society. . The official launch of “Uniquer Tour” took place last […]",newsId:"123",title:"NOTICIA",imageUrl:m.I$}),r.jsx(p,{description:"As a bet on the future and a call to action, Uniqueer presented “Uniquer Tour 2024”, an initiative to make the LGBTIQ+ community visible and promote its full inclusion in the workplace, key elements for building a more fair and equitable society. . The official launch of “Uniquer Tour” took place last […]",newsId:"123",title:"NOTICIA",imageUrl:m.IF}),r.jsx(p,{description:"As a bet on the future and a call to action, Uniqueer presented “Uniquer Tour 2024”, an initiative to make the LGBTIQ+ community visible and promote its full inclusion in the workplace, key elements for building a more fair and equitable society. . The official launch of “Uniquer Tour” took place last […]",newsId:"123",title:"NOTICIA",imageUrl:m.Wj}),r.jsx(p,{description:"As a bet on the future and a call to action, Uniqueer presented “Uniquer Tour 2024”, an initiative to make the LGBTIQ+ community visible and promote its full inclusion in the workplace, key elements for building a more fair and equitable society. . The official launch of “Uniquer Tour” took place last […]",newsId:"123",title:"NOTICIA",imageUrl:m.mc}),r.jsx(p,{description:"As a bet on the future and a call to action, Uniqueer presented “Uniquer Tour 2024”, an initiative to make the LGBTIQ+ community visible and promote its full inclusion in the workplace, key elements for building a more fair and equitable society. . The official launch of “Uniquer Tour” took place last […]",newsId:"123",title:"NOTICIA",imageUrl:m.I$}),r.jsx(p,{description:"As a bet on the future and a call to action, Uniqueer presented “Uniquer Tour 2024”, an initiative to make the LGBTIQ+ community visible and promote its full inclusion in the workplace, key elements for building a more fair and equitable society. . The official launch of “Uniquer Tour” took place last […]",newsId:"123",title:"NOTICIA",imageUrl:m.I$})]}),r.jsx(n.Footer,{})]})}},4367:(e,i,t)=>{"use strict";t.d(i,{x:()=>s});var r=t(326);t(7577);var n=t(7457),a=t(1337);let o=n.ZP.div`
    text-align: ${e=>e.alignment};
    color: var(--color);
    background-color: var(--backgroundColor);
    font-weight: var(--fontWeight);
    font-size: var(--fontSize);
    font-style: var(--fontStyle);
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`,s=({label:e,variant:i,size:t,align:n="start",...s})=>{let l=a.H3[t],d=a.Ye[i];return r.jsx(o,{style:{...l,...d},alignment:n,...s,children:e})}},2493:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>c});var r=t(9510);t(1159);var n=t(8052),a=t(8570);let o=(0,a.createProxy)(String.raw`/Users/henderito/code/henderito.github.io/src/components/NovedadesContainer/index.tsx`),{__esModule:s,$$typeof:l}=o;o.default;let d=(0,a.createProxy)(String.raw`/Users/henderito/code/henderito.github.io/src/components/NovedadesContainer/index.tsx#NewsContainer`);function c({params:{locale:e}}){return(0,n.k)(e),r.jsx("main",{children:r.jsx(d,{})})}}};var i=require("../../../webpack-runtime.js");i.C(e);var t=e=>i(i.s=e),r=i.X(0,[937,641,639,869],()=>t(6159));module.exports=r})();