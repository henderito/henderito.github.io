(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[261],{4100:(e,t,r)=>{let s,a,l;var o=Object.create,n=Object.defineProperty,i=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyNames,p=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let a of u(t))h.call(e,a)||a===r||n(e,a,{get:()=>t[a],enumerable:!(s=i(t,a))||s.enumerable});return e},c=(e,t,r)=>(d(e,"symbol"!=typeof t?t+"":t,r),r),m={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(m,{default:()=>g}),e.exports=y(n({},"__esModule",{value:!0}),m);var f=(l=null!=(s=r(2265))?o(p(s)):{},y(!a&&s&&s.__esModule?l:n(l,"default",{value:s,enumerable:!0}),s)),P=r(2975),b=r(4170);class g extends f.Component{constructor(){super(...arguments),c(this,"callPlayer",P.callPlayer),c(this,"duration",null),c(this,"currentTime",null),c(this,"secondsLoaded",null),c(this,"mute",()=>{this.callPlayer("mute")}),c(this,"unmute",()=>{this.callPlayer("unmute")}),c(this,"ref",e=>{this.iframe=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){(0,P.getSDK)("https://cdn.embed.ly/player-0.1.0.min.js","playerjs").then(e=>{this.iframe&&(this.player=new e.Player(this.iframe),this.player.on("ready",()=>{setTimeout(()=>{this.player.isReady=!0,this.player.setLoop(this.props.loop),this.props.muted&&this.player.mute(),this.addListeners(this.player,this.props),this.props.onReady()},500)}))},this.props.onError)}addListeners(e,t){e.on("play",t.onPlay),e.on("pause",t.onPause),e.on("ended",t.onEnded),e.on("error",t.onError),e.on("timeupdate",({duration:e,seconds:t})=>{this.duration=e,this.currentTime=t})}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("setCurrentTime",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.secondsLoaded}render(){return f.default.createElement("iframe",{ref:this.ref,src:this.props.url,frameBorder:"0",scrolling:"no",style:{width:"100%",height:"100%"},allow:"encrypted-media; autoplay; fullscreen;",referrerPolicy:"no-referrer-when-downgrade"})}}c(g,"displayName","Kaltura"),c(g,"canPlay",b.canPlay.kaltura)}}]);