!function(){function a(){var a=!1;a&&j("keydown",e),s.keyboardSupport&&!a&&i("keydown",e)}function b(){if(document.body){var b=document.body,c=document.documentElement,d=window.innerHeight,e=b.scrollHeight;if(x=document.compatMode.indexOf("CSS")>=0?c:b,q=b,a(),w=!0,top!=self)u=!0;else if(e>d&&(b.offsetHeight<=d||c.offsetHeight<=d)&&(c.style.height="auto",x.offsetHeight<=d)){var f=document.createElement("div");f.style.clear="both",b.appendChild(f)}s.fixedBackground||t||(b.style.backgroundAttachment="scroll",c.style.backgroundAttachment="scroll")}}function c(a,b,c,d){if(d||(d=1e3),l(b,c),1!=s.accelerationMax){var e=+new Date,f=e-C;if(f<s.accelerationDelta){var g=(1+30/f)/2;g>1&&(g=Math.min(g,s.accelerationMax),b*=g,c*=g)}C=+new Date}if(A.push({x:b,y:c,lastX:0>b?.99:-.99,lastY:0>c?.99:-.99,start:+new Date}),!B){var h=a===document.body,i=function(e){for(var f=+new Date,g=0,j=0,k=0;k<A.length;k++){var l=A[k],m=f-l.start,n=m>=s.animationTime,o=n?1:m/s.animationTime;s.pulseAlgorithm&&(o=p(o));var q=l.x*o-l.lastX>>0,r=l.y*o-l.lastY>>0;g+=q,j+=r,l.lastX+=q,l.lastY+=r,n&&(A.splice(k,1),k--)}h?window.scrollBy(g,j):(g&&(a.scrollLeft+=g),j&&(a.scrollTop+=j)),b||c||(A=[]),A.length?G(i,a,d/s.frameRate+1):B=!1};G(i,a,0),B=!0}}function d(a){w||b();var d=a.target,e=h(d);if(!e||a.defaultPrevented||k(q,"embed")||k(d,"embed")&&/\.pdf/i.test(d.src))return!0;var f=a.wheelDeltaX||0,g=a.wheelDeltaY||0;return f||g||(g=a.wheelDelta||0),!s.touchpadSupport&&m(g)?!0:(Math.abs(f)>1.2&&(f*=s.stepSize/120),Math.abs(g)>1.2&&(g*=s.stepSize/120),c(e,-f,-g),void a.preventDefault())}function e(a){var b=a.target,d=a.ctrlKey||a.altKey||a.metaKey||a.shiftKey&&a.keyCode!==z.spacebar;if(/input|textarea|select|embed/i.test(b.nodeName)||b.isContentEditable||a.defaultPrevented||d)return!0;if(k(b,"button")&&a.keyCode===z.spacebar)return!0;var e,f=0,g=0,i=h(q),j=i.clientHeight;switch(i==document.body&&(j=window.innerHeight),a.keyCode){case z.up:g=-s.arrowScroll;break;case z.down:g=s.arrowScroll;break;case z.spacebar:e=a.shiftKey?1:-1,g=-e*j*.9;break;case z.pageup:g=.9*-j;break;case z.pagedown:g=.9*j;break;case z.home:g=-i.scrollTop;break;case z.end:var l=i.scrollHeight-i.scrollTop-j;g=l>0?l+10:0;break;case z.left:f=-s.arrowScroll;break;case z.right:f=s.arrowScroll;break;default:return!0}c(i,f,g),a.preventDefault()}function f(a){q=a.target}function g(a,b){for(var c=a.length;c--;)D[F(a[c])]=b;return b}function h(a){var b=[],c=x.scrollHeight;do{var d=D[F(a)];if(d)return g(b,d);if(b.push(a),c===a.scrollHeight){if(!u||x.clientHeight+10<c)return g(b,document.body)}else if(a.clientHeight+10<a.scrollHeight&&(overflow=getComputedStyle(a,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return g(b,a)}while(a=a.parentNode)}function i(a,b,c){window.addEventListener(a,b,c||!1)}function j(a,b,c){window.removeEventListener(a,b,c||!1)}function k(a,b){return(a.nodeName||"").toLowerCase()===b.toLowerCase()}function l(a,b){a=a>0?1:-1,b=b>0?1:-1,(v.x!==a||v.y!==b)&&(v.x=a,v.y=b,A=[],C=0)}function m(a){if(a){a=Math.abs(a),y.push(a),y.shift(),clearTimeout(E);var b=y[0]==y[1]&&y[1]==y[2],c=n(y[0],120)&&n(y[1],120)&&n(y[2],120);return!(b||c)}}function n(a,b){return Math.floor(a/b)==a/b}function o(a){var b,c,d;return a*=s.pulseScale,1>a?b=a-(1-Math.exp(-a)):(c=Math.exp(-1),a-=1,d=1-Math.exp(-a),b=c+d*(1-c)),b*s.pulseNormalize}function p(a){return a>=1?1:0>=a?0:(1==s.pulseNormalize&&(s.pulseNormalize/=o(1)),o(a))}var q,r={frameRate:150,animationTime:400,stepSize:120,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},s=r,t=!1,u=!1,v={x:0,y:0},w=!1,x=document.documentElement,y=[120,120,120],z={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},s=r,A=[],B=!1,C=+new Date,D={};setInterval(function(){D={}},1e4);var E,F=function(){var a=0;return function(b){return b.uniqueID||(b.uniqueID=a++)}}(),G=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(a,b,c){window.setTimeout(a,c||1e3/60)}}(),H=/chrome/i.test(window.navigator.userAgent),I="onmousewheel"in document;I&&H&&(i("mousedown",f),i("mousewheel",d),i("load",b))}(),function(){$(document).ready(function(){var a;return $("nav a").on("click",function(a){return a.preventDefault(),$.smoothScroll({scrollTarget:$(this).attr("href")}),!1}),$(".experience .jobs, .skills .tree").mCustomScrollbar({mouseWheel:!1,horizontalScroll:!0,theme:"dark-thick",scrollButtons:{enable:!0}}),a=$(".skills .tree .mCSB_container").width()-$("section.skills").width(),a>0&&$(".skills .tree").mCustomScrollbar("scrollTo",a/2),$(".skills a").popover({animation:0,trigger:"click hover",container:".skills .tree .mCSB_container"}),$(".showcase .carousel").each(function(){return $(this).find(".item .fullsize").colorbox({rel:this.id,maxWidth:"80%",close:"",next:"",previous:""})}),FastClick.attach(document.body)})}.call(this);