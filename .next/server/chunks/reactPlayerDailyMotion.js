exports.id=596,exports.ids=[596],exports.modules={6499:(e,t,r)=>{let a,s,i;var o=Object.create,n=Object.defineProperty,l=Object.getOwnPropertyDescriptor,p=Object.getOwnPropertyNames,u=Object.getPrototypeOf,h=Object.prototype.hasOwnProperty,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t,r,a)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let s of p(t))h.call(e,s)||s===r||n(e,s,{get:()=>t[s],enumerable:!(a=l(t,s))||a.enumerable});return e},c=(e,t,r)=>(d(e,"symbol"!=typeof t?t+"":t,r),r),m={};((e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})})(m,{default:()=>b}),e.exports=y(n({},"__esModule",{value:!0}),m);var f=(i=null!=(a=r(7577))?o(u(a)):{},y(!s&&a&&a.__esModule?i:n(i,"default",{value:a,enumerable:!0}),a)),g=r(3948),P=r(8613);class b extends f.Component{constructor(){super(...arguments),c(this,"callPlayer",g.callPlayer),c(this,"onDurationChange",()=>{let e=this.getDuration();this.props.onDuration(e)}),c(this,"mute",()=>{this.callPlayer("setMuted",!0)}),c(this,"unmute",()=>{this.callPlayer("setMuted",!1)}),c(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e){let{controls:t,config:r,onError:a,playing:s}=this.props,[,i]=e.match(P.MATCH_URL_DAILYMOTION);if(this.player){this.player.load(i,{start:(0,g.parseStartTime)(e),autoplay:s});return}(0,g.getSDK)("https://api.dmcdn.net/all.js","DM","dmAsyncInit",e=>e.player).then(s=>{if(!this.container)return;let o=s.player;this.player=new o(this.container,{width:"100%",height:"100%",video:i,params:{controls:t,autoplay:this.props.playing,mute:this.props.muted,start:(0,g.parseStartTime)(e),origin:window.location.origin,...r.params},events:{apiready:this.props.onReady,seeked:()=>this.props.onSeek(this.player.currentTime),video_end:this.props.onEnded,durationchange:this.onDurationChange,pause:this.props.onPause,playing:this.props.onPlay,waiting:this.props.onBuffer,error:e=>a(e)}})},a)}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e,t=!0){this.callPlayer("seek",e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",e)}getDuration(){return this.player.duration||null}getCurrentTime(){return this.player.currentTime}getSecondsLoaded(){return this.player.bufferedTime}render(){let{display:e}=this.props;return f.default.createElement("div",{style:{width:"100%",height:"100%",display:e}},f.default.createElement("div",{ref:this.ref}))}}c(b,"displayName","DailyMotion"),c(b,"canPlay",P.canPlay.dailymotion),c(b,"loopOnEnded",!0)}};