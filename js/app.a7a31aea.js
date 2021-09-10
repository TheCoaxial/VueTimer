(function(t){function e(e){for(var n,s,o=e[0],c=e[1],l=e[2],m=0,f=[];m<o.length;m++)s=o[m],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&f.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,o=1;o<r.length;o++){var c=r[o];0!==i[c]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},i={app:0},a=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/VueTimer/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"3a8d":function(t,e,r){},"4d0c":function(t,e,r){"use strict";r("3a8d")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"flex"},[r("Timer",{attrs:{"time-left":t.timeLeft}}),r("Timer",{attrs:{"time-left":t.timeLeft}}),r("Timer",{attrs:{"time-left":t.timeLeft}})],1),r("div",{staticClass:"space"}),r("div",{staticClass:"flex"},[r("Timer",{attrs:{"time-left":t.timeLeft}}),r("Timer",{attrs:{"time-left":t.timeLeft}}),r("Timer",{attrs:{"time-left":t.timeLeft}})],1)])},a=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"base-timer"},[r("svg",{staticClass:"base-timer__svg",attrs:{viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg"}},[r("g",{staticClass:"base-timer__circle"},[r("circle",{staticClass:"base-timer__path-elapsed",attrs:{cx:"50",cy:"50",r:"45"}}),r("path",{staticClass:"base-timer__path-remaining",class:t.remainingPathColor,attrs:{"stroke-dasharray":t.circleDasharray,d:"\n          M 50, 50\n          m -45, 0\n          a 45,45 0 1,0 90,0\n          a 45,45 0 1,0 -90,0\n        "}})])]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{placeholder:"Enter Name"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),r("p",[t._v("Name: "+t._s(t.message))]),r("span",{staticClass:"base-timer__label"},[t._v(t._s(t.formattedTimeLeft))]),r("span",{},[t._v(t._s(t.formattedTimePassed))]),r("span",{},[t._v(" Attempts:"+t._s(t.numberOfAttempts)+" ")]),r("div"),r("div",[r("div",[r("button",{staticClass:"button",on:{click:t.startTimer}},[t._v(" Start Timer ")]),r("button",{staticClass:"button",on:{click:t.pauseTimer}},[t._v(" Pause Timer ")])]),r("div",[r("button",{staticClass:"button",on:{click:t.resetTime}},[t._v(" RESET ")]),r("button",{staticClass:"button",on:{click:t.endTimer}},[t._v(" End Timer ")])])])])},o=[],c=(r("b680"),r("99af"),283),l=60,u=15,m=new Audio(r("df74")),f={info:{color:"green"},warning:{color:"orange",threshold:l},alert:{color:"red",threshold:u}},p=300,d=1800,h=0,v={data:function(){return{timePassed:0,halfHourTimerInterval:null,timerInterval:null,halfHourTimer:0,numberOfAttempts:0,message:""}},computed:{circleDasharray:function(){return"".concat((this.timeFraction*c).toFixed(0)," 283")},formattedTimeLeft:function(){var t=this.timeLeft,e=Math.floor(t/60),r=t%60;return r<10&&(r="0".concat(r)),"".concat(e,":").concat(r)},formattedTimePassed:function(){var t=this.halfHourClock,e=Math.floor(t/60),r=t%60;return r<10&&(r="0".concat(r)),"".concat(e,":").concat(r)},timeLeft:function(){return p-this.timePassed},halfHourClock:function(){return d-this.halfHourTimer},timeFraction:function(){var t=this.timeLeft/p;return t-1/p*(1-t)},remainingPathColor:function(){var t=f.alert,e=f.warning,r=f.info;return this.timeLeft<=t.threshold?t.color:this.timeLeft<=e.threshold?e.color:r.color}},watch:{timeLeft:function(t){0===t&&this.onTimesUp()}},methods:{onTimesUp:function(){clearInterval(this.timerInterval),m.play()},startTimer:function(){var t=this;0===h&&(this.timerInterval=setInterval((function(){return t.timePassed+=1}),1e3),this.halfHourTimerInterval=setInterval((function(){return t.halfHourTimer+=1}),1e3),h=1)},resetTime:function(){this.numberOfAttempts+=1,this.timePassed=0},endTimer:function(){confirm("Sure you want to end the timer?")&&(clearInterval(this.timerInterval),clearInterval(this.halfHourTimerInterval),this.timePassed=0,this.halfHourTimer=0,this.numberOfAttempts=0,m.pause(),m.currentTime=0,h=0)},pauseTimer:function(){clearInterval(this.timerInterval),clearInterval(this.halfHourTimerInterval),h=0}}},b=v,T=(r("4d0c"),r("2877")),g=Object(T["a"])(b,s,o,!1,null,"222115ed",null),_=g.exports,y={name:"App",components:{Timer:_}},w=y,C=(r("034f"),Object(T["a"])(w,i,a,!1,null,null,null)),P=C.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(P)}}).$mount("#app")},"85ec":function(t,e,r){},df74:function(t,e,r){t.exports=r.p+"media/Creepy-clock-chiming.67b94d51.mp3"}});
//# sourceMappingURL=app.a7a31aea.js.map