import{c as K}from"./_commonjsHelpers.4e997714.js";var B={exports:{}};(function(H,T){(function(x,g){H.exports=g()})(K,function(){var x=1e3,g=6e4,F=36e5,N="millisecond",S="second",w="minute",O="hour",M="day",C="week",l="month",z="quarter",y="year",Y="date",V="Invalid Date",E=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,G=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,P={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},U=function(u,e,t){var r=String(u);return!r||r.length>=e?u:""+Array(e+1-r.length).join(t)+u},Q={s:U,z:function(u){var e=-u.utcOffset(),t=Math.abs(e),r=Math.floor(t/60),n=t%60;return(e<=0?"+":"-")+U(r,2,"0")+":"+U(n,2,"0")},m:function u(e,t){if(e.date()<t.date())return-u(t,e);var r=12*(t.year()-e.year())+(t.month()-e.month()),n=e.clone().add(r,l),s=t-n<0,i=e.clone().add(r+(s?-1:1),l);return+(-(r+(t-n)/(s?n-i:i-n))||0)},a:function(u){return u<0?Math.ceil(u)||0:Math.floor(u)},p:function(u){return{M:l,y,w:C,d:M,D:Y,h:O,m:w,s:S,ms:N,Q:z}[u]||String(u||"").toLowerCase().replace(/s$/,"")},u:function(u){return u===void 0}},b="en",p={};p[b]=P;var J=function(u){return u instanceof j},A=function u(e,t,r){var n;if(!e)return b;if(typeof e=="string"){var s=e.toLowerCase();p[s]&&(n=s),t&&(p[s]=t,n=s);var i=e.split("-");if(!n&&i.length>1)return u(i[0])}else{var a=e.name;p[a]=e,n=a}return!r&&n&&(b=n),n||!r&&b},c=function(u,e){if(J(u))return u.clone();var t=typeof e=="object"?e:{};return t.date=u,t.args=arguments,new j(t)},o=Q;o.l=A,o.i=J,o.w=function(u,e){return c(u,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var j=function(){function u(t){this.$L=A(t.locale,null,!0),this.parse(t)}var e=u.prototype;return e.parse=function(t){this.$d=function(r){var n=r.date,s=r.utc;if(n===null)return new Date(NaN);if(o.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var i=n.match(E);if(i){var a=i[2]-1||0,h=(i[7]||"0").substring(0,3);return s?new Date(Date.UTC(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,h)):new Date(i[1],a,i[3]||1,i[4]||0,i[5]||0,i[6]||0,h)}}return new Date(n)}(t),this.$x=t.x||{},this.init()},e.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},e.$utils=function(){return o},e.isValid=function(){return this.$d.toString()!==V},e.isSame=function(t,r){var n=c(t);return this.startOf(r)<=n&&n<=this.endOf(r)},e.isAfter=function(t,r){return c(t)<this.startOf(r)},e.isBefore=function(t,r){return this.endOf(r)<c(t)},e.$g=function(t,r,n){return o.u(t)?this[r]:this.set(n,t)},e.unix=function(){return Math.floor(this.valueOf()/1e3)},e.valueOf=function(){return this.$d.getTime()},e.startOf=function(t,r){var n=this,s=!!o.u(r)||r,i=o.p(t),a=function(_,$){var v=o.w(n.$u?Date.UTC(n.$y,$,_):new Date(n.$y,$,_),n);return s?v:v.endOf(M)},h=function(_,$){return o.w(n.toDate()[_].apply(n.toDate("s"),(s?[0,0,0,0]:[23,59,59,999]).slice($)),n)},f=this.$W,d=this.$M,D=this.$D,m="set"+(this.$u?"UTC":"");switch(i){case y:return s?a(1,0):a(31,11);case l:return s?a(1,d):a(0,d+1);case C:var L=this.$locale().weekStart||0,W=(f<L?f+7:f)-L;return a(s?D-W:D+(6-W),d);case M:case Y:return h(m+"Hours",0);case O:return h(m+"Minutes",1);case w:return h(m+"Seconds",2);case S:return h(m+"Milliseconds",3);default:return this.clone()}},e.endOf=function(t){return this.startOf(t,!1)},e.$set=function(t,r){var n,s=o.p(t),i="set"+(this.$u?"UTC":""),a=(n={},n[M]=i+"Date",n[Y]=i+"Date",n[l]=i+"Month",n[y]=i+"FullYear",n[O]=i+"Hours",n[w]=i+"Minutes",n[S]=i+"Seconds",n[N]=i+"Milliseconds",n)[s],h=s===M?this.$D+(r-this.$W):r;if(s===l||s===y){var f=this.clone().set(Y,1);f.$d[a](h),f.init(),this.$d=f.set(Y,Math.min(this.$D,f.daysInMonth())).$d}else a&&this.$d[a](h);return this.init(),this},e.set=function(t,r){return this.clone().$set(t,r)},e.get=function(t){return this[o.p(t)]()},e.add=function(t,r){var n,s=this;t=Number(t);var i=o.p(r),a=function(d){var D=c(s);return o.w(D.date(D.date()+Math.round(d*t)),s)};if(i===l)return this.set(l,this.$M+t);if(i===y)return this.set(y,this.$y+t);if(i===M)return a(1);if(i===C)return a(7);var h=(n={},n[w]=g,n[O]=F,n[S]=x,n)[i]||1,f=this.$d.getTime()+t*h;return o.w(f,this)},e.subtract=function(t,r){return this.add(-1*t,r)},e.format=function(t){var r=this,n=this.$locale();if(!this.isValid())return n.invalidDate||V;var s=t||"YYYY-MM-DDTHH:mm:ssZ",i=o.z(this),a=this.$H,h=this.$m,f=this.$M,d=n.weekdays,D=n.months,m=function($,v,Z,k){return $&&($[v]||$(r,s))||Z[v].slice(0,k)},L=function($){return o.s(a%12||12,$,"0")},W=n.meridiem||function($,v,Z){var k=$<12?"AM":"PM";return Z?k.toLowerCase():k},_={YY:String(this.$y).slice(-2),YYYY:this.$y,M:f+1,MM:o.s(f+1,2,"0"),MMM:m(n.monthsShort,f,D,3),MMMM:m(D,f),D:this.$D,DD:o.s(this.$D,2,"0"),d:String(this.$W),dd:m(n.weekdaysMin,this.$W,d,2),ddd:m(n.weekdaysShort,this.$W,d,3),dddd:d[this.$W],H:String(a),HH:o.s(a,2,"0"),h:L(1),hh:L(2),a:W(a,h,!0),A:W(a,h,!1),m:String(h),mm:o.s(h,2,"0"),s:String(this.$s),ss:o.s(this.$s,2,"0"),SSS:o.s(this.$ms,3,"0"),Z:i};return s.replace(G,function($,v){return v||_[$]||i.replace(":","")})},e.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},e.diff=function(t,r,n){var s,i=o.p(r),a=c(t),h=(a.utcOffset()-this.utcOffset())*g,f=this-a,d=o.m(this,a);return d=(s={},s[y]=d/12,s[l]=d,s[z]=d/3,s[C]=(f-h)/6048e5,s[M]=(f-h)/864e5,s[O]=f/F,s[w]=f/g,s[S]=f/x,s)[i]||f,n?d:o.a(d)},e.daysInMonth=function(){return this.endOf(l).$D},e.$locale=function(){return p[this.$L]},e.locale=function(t,r){if(!t)return this.$L;var n=this.clone(),s=A(t,r,!0);return s&&(n.$L=s),n},e.clone=function(){return o.w(this.$d,this)},e.toDate=function(){return new Date(this.valueOf())},e.toJSON=function(){return this.isValid()?this.toISOString():null},e.toISOString=function(){return this.$d.toISOString()},e.toString=function(){return this.$d.toUTCString()},u}(),q=j.prototype;return c.prototype=q,[["$ms",N],["$s",S],["$m",w],["$H",O],["$W",M],["$M",l],["$y",y],["$D",Y]].forEach(function(u){q[u[1]]=function(e){return this.$g(e,u[0],u[1])}}),c.extend=function(u,e){return u.$i||(u(e,j,c),u.$i=!0),c},c.locale=A,c.isDayjs=J,c.unix=function(u){return c(1e3*u)},c.en=p[b],c.Ls=p,c.p={},c})})(B);var I=B.exports;const X=(H,T="YYYY/MM/DD HH:mm")=>I(H).format(T),tt=(H,T="YYYY-MM-DD")=>{const x=I(H).format(T),g=I().format(T);return I(x).diff(g,"day")};export{tt as a,X as d};