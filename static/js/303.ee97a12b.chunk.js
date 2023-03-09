"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[303],{3640:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(2791),o=t(184),s=function(e){var n=e.productId,t=e.addGoods;return(0,o.jsx)("button",{className:"btn_add-to-cart",onClick:function(){t(n)},children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,o.jsx)("path",{d:"M11 9H13V6H16V4H13V1H11V4H8V6H11M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18M7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8Z"})})})},i=r.memo(s)},9544:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(2791),o=t(1087),s=t(6591),i=t(8293),c=t(3640),a=t(184),d=function(e){var n=e.data,t=e.addGoods;return(0,a.jsxs)("div",{className:"good-card",children:[(0,a.jsx)(o.rU,{to:"/shop/".concat(n.id),className:"good-card_photo-link",children:(0,a.jsx)("img",{src:"/devShop"+n.src,alt:n.name,className:"good-card_icon"})}),(0,a.jsxs)("div",{className:"good-card_info",children:[(0,a.jsx)("div",{className:"product-name",children:(0,a.jsx)(o.rU,{to:"/shop/".concat(n.id),children:n.name.length>50?n.name.slice(0,47)+"...":n.name})}),(0,a.jsx)("div",{className:"product-rating",children:(0,a.jsx)(o.rU,{to:"/shop/".concat(n.id,"/reviews"),children:(0,a.jsx)(i.Z,{rating:(0,s.Y8)(n.reviews,(function(e){return e.rating})),number:Object.getOwnPropertyNames(n.reviews).length})})}),(0,a.jsxs)("div",{className:"product-prices",children:[void 0!==n.previousPrice&&(0,a.jsx)("div",{className:"product-price_previous",children:"".concat(n.previousPrice).concat(n.currency)}),(0,a.jsx)("div",{className:"product-price",children:"".concat(n.price).concat(n.currency)})]}),(0,a.jsx)(c.Z,{productId:n.id,addGoods:t})]})]})},l=r.memo(d)},8303:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(2791),o=t(6907),s=t(4942);function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var a=t(9439),d=t(6591),l=t(9544),u=t(184);function m(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}var h=function(e){var n,t=e.name,o=e.goods,s=e.addGoods,i=(0,r.useRef)(),h=(0,r.useState)({position:0,scrollX:0,clientX:0,isMoving:!1,lastScrollX:0}),p=(0,a.Z)(h,2),v=p[0],g=p[1],f=(0,r.useMemo)((function(){return(0,d.hX)(o,(function(e){return e.special.has(t.toLowerCase())}))}),[o,t]),j=function(e){return window.matchMedia("(max-width: 600px)").matches?155*e:window.matchMedia("(max-width: 850px)").matches?0===e?-10:262*e-10:window.matchMedia("(max-width: 1250px)").matches?262*e:0!==e&&e===Object.getOwnPropertyNames(f).length-4?262*(e-1)+130:262*e},x=function(e){v.isMoving&&(g(c(c({},v),{},{isMoving:!1})),e.stopPropagation(),e.preventDefault())};return(0,r.useEffect)((function(){return document.addEventListener("mouseup",x),function(){document.removeEventListener("mouseup",x)}})),(0,u.jsxs)("div",{className:"theme-goods",children:[(0,u.jsx)("div",{className:"theme-goods_name",children:(0,u.jsx)("h3",{children:t})}),(0,u.jsx)("ul",{className:"theme-goods_list list",ref:i,onMouseUp:x,onMouseDown:function(e){i&&i.current&&i.current===e.target&&!v.isMoving&&g(c(c({},v),{},{clientX:e.clientX,isMoving:!0}))},onMouseMove:function(e){if(m()&&i&&i.current&&i.current.contains(e.target)&&v.isMoving){var n=v.scrollX,t=v.clientX,r=n-e.clientX+t;i.current.scrollLeft=r,g(c(c({},v),{},{scrollX:r,clientX:e.clientX})),e.preventDefault()}},children:(0,d.UI)(f,(function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(l.Z,{data:e,addGoods:s})},e.id)}))}),!m()&&v.position>0&&(0,u.jsx)("div",{className:"mover mover_left",children:(0,u.jsx)("button",{onClick:function(){i.current.scrollTo({left:j(v.position-1),behavior:"smooth"}),g(c(c({},v),{},{scrollX:j(v.position-1),position:v.position-1}))},className:"btn_mover",children:(0,u.jsx)("img",{src:"/devShop/resources/images/mover-left.png",alt:"move to the left"})})}),!m()&&(n=v.position,window.matchMedia("(max-width: 850px)").matches?Object.getOwnPropertyNames(f).length-2>n:window.matchMedia("(max-width: 1250px)").matches?Object.getOwnPropertyNames(f).length-3>n:Object.getOwnPropertyNames(f).length-4>n)&&(0,u.jsx)("div",{className:"mover mover_right",children:(0,u.jsx)("button",{onClick:function(){i.current.scrollTo({left:j(v.position+1),behavior:"smooth"}),g(c(c({},v),{},{scrollX:j(v.position+1),position:v.position+1}))},className:"btn_mover",children:(0,u.jsx)("img",{src:"/devShop/resources/images/mover-right.png",alt:"move to the right"})})})]})},p=r.memo(h),v=function(e){var n=e.addGoods,t=e.goods;return(0,u.jsxs)(o.B6,{children:[(0,u.jsx)(o.ql,{children:(0,u.jsx)("title",{children:"devShop \u2013 Home"})}),(0,u.jsxs)("div",{className:"home",children:[(0,u.jsxs)("div",{className:"homepage-intro",children:[(0,u.jsx)("h2",{children:"Welcome to devShop"}),(0,u.jsx)("div",{className:"homepage-intro_description",children:"Here you can buy computer parts and accessories. We have a wide range and low prices."})]}),(0,u.jsx)(p,{name:"New",goods:t,addGoods:n}),(0,u.jsx)(p,{name:"Sale",goods:t,addGoods:n})]})]})},g=r.memo(v)},8293:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(2791),o=t(184),s=function(e){var n=e.rating,t=e.number,r=e.needNumber,s=function(e){return e>=1?(0,o.jsx)("img",{src:"/devShop/resources/images/star.png",alt:"one star"}):e>=.5?(0,o.jsx)("img",{src:"/devShop/resources/images/half-star.png",alt:"half star"}):(0,o.jsx)("img",{src:"/devShop/resources/images/unfilled-star.png",alt:"no star"})};return(0,o.jsxs)("div",{className:"rating",children:[(0,o.jsxs)("div",{className:"rating_stars",children:[s(n),s(n-1),s(n-2),s(n-3),s(n-4)]}),r&&(0,o.jsx)("div",{className:"reviews_number",children:"".concat(t)})]})};s.defaultProps={number:1,rating:0,needNumber:!0};var i=r.memo(s)},6591:function(e,n,t){t.d(n,{UI:function(){return s},Y8:function(){return i},hX:function(){return o}});var r=t(9439),o=function(e,n){for(var t={},o=0,s=Object.entries(e);o<s.length;o++){var i=(0,r.Z)(s[o],2),c=i[0],a=i[1];n(a)&&(t[c]=a)}return t},s=function(e,n){for(var t=[],o=0,s=Object.entries(e);o<s.length;o++){var i=(0,r.Z)(s[o],2),c=i[0],a=i[1];t.push(n(a,c))}return t},i=function(e,n){for(var t=0,o=0,s=0,i=Object.entries(e);s<i.length;s++){t+=1,o+=n((0,r.Z)(i[s],2)[1])}return o/t}}}]);
//# sourceMappingURL=303.ee97a12b.chunk.js.map