"use strict";(self.webpackChunkdevshop=self.webpackChunkdevshop||[]).push([[721],{3640:function(e,r,a){a.d(r,{Z:function(){return s}});var t=a(2791),n=a(9434),i=a(4512),c=a(184),o=function(e){var r=e.productId,a=(0,n.I0)();return(0,c.jsx)("button",{className:"btn_add-to-cart",onClick:function(){return a((0,i.jX)(r))},children:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,c.jsx)("path",{d:"M11 9H13V6H16V4H13V1H11V4H8V6H11M7 18C5.9 18 5 18.9 5 20S5.9 22 7 22 9 21.1 9 20 8.1 18 7 18M17 18C15.9 18 15 18.9 15 20S15.9 22 17 22 19 21.1 19 20 18.1 18 17 18M7.2 14.8V14.7L8.1 13H15.5C16.2 13 16.9 12.6 17.2 12L21.1 5L19.4 4L15.5 11H8.5L4.3 2H1V4H3L6.6 11.6L5.2 14C5.1 14.3 5 14.6 5 15C5 16.1 5.9 17 7 17H19V15H7.4C7.3 15 7.2 14.9 7.2 14.8Z"})})})},s=t.memo(o)},9544:function(e,r,a){a.d(r,{Z:function(){return d}});var t=a(2791),n=a(1087),i=a(6591),c=a(8293),o=a(3640),s=a(184),u=function(e){var r=e.data;return(0,s.jsxs)("div",{className:"good-card",children:[(0,s.jsx)(n.rU,{to:"/shop/".concat(r.id),className:"good-card_photo-link",children:(0,s.jsx)("img",{src:"/devShop"+r.src,alt:r.name,className:"good-card_icon"})}),(0,s.jsxs)("div",{className:"good-card_info",children:[(0,s.jsx)("div",{className:"product-name",children:(0,s.jsx)(n.rU,{to:"/shop/".concat(r.id),children:r.name.length>50?r.name.slice(0,47)+"...":r.name})}),(0,s.jsx)("div",{className:"product-rating",children:(0,s.jsx)(n.rU,{to:"/shop/".concat(r.id,"/reviews"),children:(0,s.jsx)(c.Z,{rating:(0,i.Y8)(r.reviews,(function(e){return e.rating})),number:Object.getOwnPropertyNames(r.reviews).length})})}),(0,s.jsxs)("div",{className:"product-prices",children:[void 0!==r.previousPrice&&(0,s.jsx)("div",{className:"product-price_previous",children:"".concat(r.previousPrice).concat(r.currency)}),(0,s.jsx)("div",{className:"product-price",children:"".concat(r.price).concat(r.currency)})]}),(0,s.jsx)(o.Z,{productId:r.id})]})]})},d=t.memo(u)},7721:function(e,r,a){a.r(r),a.d(r,{default:function(){return f}});var t=a(2791),n=a(6907),i=a(8683),c=a(9439),o=a(4011),s=a(6591),u=a(9544),d=a(184);function l(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}var m=function(e){var r,a=e.name,n=(0,t.useRef)(),m=(0,t.useState)({position:0,scrollX:0,clientX:0,isMoving:!1,lastScrollX:0}),p=(0,c.Z)(m,2),h=p[0],f=p[1],v=(0,t.useMemo)((function(){return(0,s.hX)(o.Z,(function(e){return e.special.has(a.toLowerCase())}))}),[a]),g=function(e){return window.matchMedia("(max-width: 600px)").matches?155*e:window.matchMedia("(max-width: 850px)").matches?0===e?-10:262*e-10:window.matchMedia("(max-width: 1250px)").matches?262*e:0!==e&&e===Object.getOwnPropertyNames(v).length-4?262*(e-1)+130:262*e},b=function(e){h.isMoving&&(f((0,i.Z)((0,i.Z)({},h),{},{isMoving:!1})),e.stopPropagation(),e.preventDefault())};return(0,t.useEffect)((function(){return document.addEventListener("mouseup",b),function(){document.removeEventListener("mouseup",b)}})),(0,d.jsxs)("div",{className:"theme-goods",children:[(0,d.jsx)("div",{className:"theme-goods_name",children:(0,d.jsx)("h3",{children:a})}),(0,d.jsx)("ul",{className:"theme-goods_list list",ref:n,onMouseUp:b,onMouseDown:function(e){n&&n.current&&n.current===e.target&&!h.isMoving&&f((0,i.Z)((0,i.Z)({},h),{},{clientX:e.clientX,isMoving:!0}))},onMouseMove:function(e){if(l()&&n&&n.current&&n.current.contains(e.target)&&h.isMoving){var r=h.scrollX,a=h.clientX,t=r-e.clientX+a;n.current.scrollLeft=t,f((0,i.Z)((0,i.Z)({},h),{},{scrollX:t,clientX:e.clientX})),e.preventDefault()}},children:(0,s.UI)(v,(function(e){return(0,d.jsx)("li",{children:(0,d.jsx)(u.Z,{data:e})},e.id)}))}),!l()&&h.position>0&&(0,d.jsx)("div",{className:"mover mover_left",children:(0,d.jsx)("button",{onClick:function(){n.current.scrollTo({left:g(h.position-1),behavior:"smooth"}),f((0,i.Z)((0,i.Z)({},h),{},{scrollX:g(h.position-1),position:h.position-1}))},className:"btn_mover",children:(0,d.jsx)("img",{src:"/devShop/resources/images/mover-left.png",alt:"move to the left"})})}),!l()&&(r=h.position,window.matchMedia("(max-width: 850px)").matches?Object.getOwnPropertyNames(v).length-2>r:window.matchMedia("(max-width: 1250px)").matches?Object.getOwnPropertyNames(v).length-3>r:Object.getOwnPropertyNames(v).length-4>r)&&(0,d.jsx)("div",{className:"mover mover_right",children:(0,d.jsx)("button",{onClick:function(){n.current.scrollTo({left:g(h.position+1),behavior:"smooth"}),f((0,i.Z)((0,i.Z)({},h),{},{scrollX:g(h.position+1),position:h.position+1}))},className:"btn_mover",children:(0,d.jsx)("img",{src:"/devShop/resources/images/mover-right.png",alt:"move to the right"})})})]})},p=t.memo(m),h=function(){return(0,d.jsxs)(n.B6,{children:[(0,d.jsx)(n.ql,{children:(0,d.jsx)("title",{children:"devShop \u2013 Home"})}),(0,d.jsxs)("div",{className:"home",children:[(0,d.jsxs)("div",{className:"homepage-intro",children:[(0,d.jsx)("h2",{children:"Welcome to devShop"}),(0,d.jsx)("div",{className:"homepage-intro_description",children:"Here you can buy computer parts and accessories. We have a wide range and low prices."})]}),(0,d.jsx)(p,{name:"New"}),(0,d.jsx)(p,{name:"Sale"})]})]})},f=t.memo(h)},8293:function(e,r,a){a.d(r,{Z:function(){return c}});var t=a(2791),n=a(184),i=function(e){var r=e.rating,a=e.number,t=e.needNumber,i=function(e){return e>=1?(0,n.jsx)("img",{src:"/devShop/resources/images/star.png",alt:"one star"}):e>=.5?(0,n.jsx)("img",{src:"/devShop/resources/images/half-star.png",alt:"half star"}):(0,n.jsx)("img",{src:"/devShop/resources/images/unfilled-star.png",alt:"no star"})};return(0,n.jsxs)("div",{className:"rating",children:[(0,n.jsxs)("div",{className:"rating_stars",children:[i(r),i(r-1),i(r-2),i(r-3),i(r-4)]}),t&&(0,n.jsx)("div",{className:"reviews_number",children:"".concat(a)})]})};i.defaultProps={number:1,rating:0,needNumber:!0};var c=t.memo(i)},4011:function(e,r){var a={"152ed03e955f4f9188e925d96b8ceb21":{id:"152ed03e955f4f9188e925d96b8ceb21",name:"MSI Nvidia GeForce RTX 4090",characteristics:{main:{title:"Main characteristics",chars:{type:{name:"Product type",value:"Component"},element:{name:"Type of component",value:"Graphics card"},manufacturer:{name:"Manufacturer",value:"MSI"},release:{name:"Release date",value:"2022"}}},gpu:{title:"GPU characteristics",chars:{chipManufacturer:{name:"GPU manufacturer",value:"Nvidia"},series:{name:"GPU series",value:"RTX 40"},model:{name:"GPU model",value:"RTX 4090"}}}},type:"Component",element:"Graphics card",chipManufacturer:"Nvidia",series:"RTX 40",model:"RTX 4090",special:new Set(["new","sale"]),date:"2022-12-06",manufacturer:"MSI",description:"The NVIDIA GeForce RTX 4090 is the ultimate GeForce GPU. It brings an enormous leap in performance, efficiency, and AI-powered graphics. Experience ultra-high performance gaming, incredibly detailed virtual worlds with ray tracing, unprecedented productivity, and new ways to create. It\u2019s powered by the NVIDIA Ada Lovelace architecture and comes with 24 GB of G6X memory to deliver the ultimate experience for gamers and creators.",price:2200,previousPrice:2300,currency:"$",release:"2022",src:"/resources/images/products/msi-nvidia-geforce-rtx-4090.png",number:10,reviews:{aae57e5d1bb742028af240e84b5b1e65:{id:"aae57e5d1bb742028af240e84b5b1e65",title:"The Best GPU",author:"Marry",pros:"Powerful, good design",cons:"No",description:"Very good video card, although expensive.",rating:5}}},f758d6358c6b4551ad926bc25a24a3dc:{id:"f758d6358c6b4551ad926bc25a24a3dc",name:"Gigabyte Nvidia GeForce RTX 3070 Ti",characteristics:{main:{title:"Main characteristics",chars:{type:{name:"Product type",value:"Component"},element:{name:"Type of component",value:"Graphics card"},manufacturer:{name:"Manufacturer",value:"Gigabyte"},release:{name:"Release date",value:"2021"}}},gpu:{title:"GPU characteristics",chars:{chipManufacturer:{name:"GPU manufacturer",value:"Nvidia"},series:{name:"GPU series",value:"RTX 30"},model:{name:"GPU model",value:"RTX 3070 Ti"}}}},type:"Component",element:"Graphics card",chipManufacturer:"Nvidia",series:"RTX",generation:"RTX 30",model:"3070 Ti",special:new Set(["new"]),date:"2022-10-17",manufacturer:"Gigabyte",description:"NVIDIA Ampere Streaming Multiprocessors 2nd Generation RT Cores 3rd Generation Tensor Cores Powered by GeForce RTX 3070 Ti Integrated with 8GB GDDR6X 256-bit memory interface WINDFORCE 3X Cooling System with alternate spinning fans RGB Fusion 2.0 Protection metal back plate 2x HDMI 2.1, 2x DisplayPort 1.4 Core Clock: 1830 MHz. Get the ultimate gaming performance with AORUS RTX 3070 Ti Graphics Cards.",price:1e3,currency:"$",release:"2021",src:"/resources/images/products/gigabyte-nvidia-geforce-rtx-3070-ti.jpg",number:5,reviews:{"1603fd45fa1a457792da577a7f1e19e6":{id:"1603fd45fa1a457792da577a7f1e19e6",title:"Normal Card",author:"Ivan",pros:"Low price",cons:"Bad quality",description:"The fan is rattling",rating:4}}},"4449ef5138c04b9fbfd54003ca987423":{id:"4449ef5138c04b9fbfd54003ca987423",name:"AMD Ryzen 5 5600X BOX",characteristics:{main:{title:"Main characteristics",chars:{type:{name:"Product type",value:"Component"},element:{name:"Type of component",value:"Processor"},manufacturer:{name:"Manufacturer",value:"AMD"},release:{name:"Release date",value:"2020"}}},cpu:{title:"CPU characteristics",chars:{series:{name:"CPU series",value:"Ryzen 5000"},model:{name:"CPU model",value:"Ryzen 5 5600X"}}}},type:"Component",element:"Processor",series:"Ryzen",generation:"Ryzen 5000",model:"5600X",special:new Set(["new"]),date:"2020-12-07",manufacturer:"AMD",description:"Be unstoppable with the unprecedented speed of the world\u2019s best desktop processors. AMD Ryzen 5000 Series processors deliver the ultimate in high performance, whether you\u2019re playing the latest games, designing the next skyscraper or crunching scientific data. With AMD Ryzen, you\u2019re always in the lead.",price:230,currency:"$",release:"2020",src:"/resources/images/products/amd-ryzen-5-5600x-box.png",number:7,reviews:{ea36269cc5ad4124a906396e9e93232f:{id:"ea36269cc5ad4124a906396e9e93232f",title:"The Best CPU",author:"Mike",pros:"Good performance",cons:"No",description:"I think this is the best investment I have ever made in my computer. FPS increased by 1.5 times, and rendering by 2.",rating:5},c3245c7533ea493e9a864eb811f31654:{id:"c3245c7533ea493e9a864eb811f31654",date:"2022-01-20",title:"Great solution for PC",author:"Don",pros:"Cheap, good quality",cons:"No",description:"I took this processor with a great discount, it has been working for a year, no problems",rating:5}}},"945041436362491ab408b164fafa7a5d":{id:"945041436362491ab408b164fafa7a5d",name:"be quiet! Dark Power Pro 12 1500W",characteristics:{main:{title:"Main characteristics",chars:{type:{name:"Product type",value:"Component"},element:{name:"Type of component",value:"Power Supply"},manufacturer:{name:"Manufacturer",value:"be quiet!"},release:{name:"Release date",value:"2022"}}},powerSupply:{title:"Power supply characteristics",chars:{series:{name:"Power supply series",value:"Dark Power Pro 12"},model:{name:"Power supply model",value:"Dark Power Pro 12 1500W"},certificate:{name:"Certificate",value:"80 PLUS Titanium"}}}},type:"Component",element:"Power supply",series:"Dark Power Pro 12",certificate:"80 PLUS Titanium",special:new Set(["new"]),date:"2021-09-05",manufacturer:"be quiet!",description:"The be quiet! Dark Power Pro 12 1500W offers 80 PLUS Titanium efficiency and world class performance due to fully digital control and frameless fan concept. The most technologically-advanced PSU be quiet! has ever built.",price:380,currency:"$",release:"2022",src:"/resources/images/products/be-quiet-dark-power-pro-12-1500w.png",number:10,reviews:{"0c5437d1fb094d6094ac4c60e8c63b5e":{id:"0c5437d1fb094d6094ac4c60e8c63b5e",title:"Perfect Power supply",author:"Mike",pros:"Powerful, cheap.",cons:"",description:"Good, quiet power supply< suitable for powerful builds",rating:5}}},"34376c67997a4cbca94d0a89f4f9a33a":{id:"34376c67997a4cbca94d0a89f4f9a33a",name:"PowerColor AMD Radeon RX 6600",characteristics:{main:{title:"Main characteristics",chars:{type:{name:"Product type",value:"Component"},element:{name:"Type of component",value:"Graphics card"},manufacturer:{name:"Manufacturer",value:"PowerColor"},release:{name:"Release date",value:"2021"}}},gpu:{title:"GPU characteristics",chars:{chipManufacturer:{name:"GPU manufacturer",value:"AMD"},series:{name:"GPU series",value:"RX 6000"},model:{name:"GPU model",value:"RX 6600"}}}},type:"Component",element:"Graphics card",chipManufacturer:"AMD",series:"Radeon RX",generation:"RX 6000",model:"RX 6600",special:new Set(["new","sale"]),manufacturer:"PowerColor",description:"Powercolor Fighter Amd Radeon Rx 6600 Graphics Card With 8Gb Gddr6 Memory.",price:310,previousPrice:330,currency:"$",release:"2021",src:"/resources/images/products/powercolor-amd-radeon-rx-6600.png",number:2,reviews:{a9345f6bfc6c4443eb5873175d8536be9:{id:"a9345f6bfc6c4443eb5873175d8536be9",title:"Good video card",author:"Jake",pros:"Performance",cons:"Unstable",description:"Good performance except for some freezes",rating:5}}},"22b9c3ac926240a48fc8435cc8b702b0":{id:"22b9c3ac926240a48fc8435cc8b702b0",name:"ASUS AMD Radeon RX 6800 XT",characteristics:{main:{title:"Main characteristics",chars:{type:{name:"Product type",value:"Component"},element:{name:"Type of component",value:"Graphics card"},manufacturer:{name:"Manufacturer",value:"ASUS"},release:{name:"Release date",value:"2020"}}},gpu:{title:"GPU characteristics",chars:{chipManufacturer:{name:"GPU manufacturer",value:"AMD"},series:{name:"GPU series",value:"RX 6000"},model:{name:"GPU model",value:"RX 6800 XT"}}}},type:"Component",element:"Graphics card",chipManufacturer:"AMD",series:"Radeon RX",generation:"RX 6000",model:"RX 6800 XT",special:new Set(["new"]),manufacturer:"ASUS",description:"The TUF GAMING Radeon\u2122 RX 6800 XT is a tenacious beast with a tough metal exterior, super-efficient cooling, and components that offer enhanced endurance.",price:1e3,currency:"$",release:"2020",src:"/resources/images/products/asus-amd-radeon-rx-6800-xt.png",number:4,reviews:{a9345f6bfc6c4443eb5873175d8536be9:{id:"a9345f6bfc6c4443eb5873175d8536be9",title:"Answer for Nvidia's videos cards",author:"Jake",pros:"Price, performance, design",cons:"No",description:"Great graphics card that outperforms nvidia graphics cards.",rating:5}}}};r.Z=a},6591:function(e,r,a){a.d(r,{UI:function(){return i},Y8:function(){return c},hX:function(){return n}});var t=a(9439),n=function(e,r){for(var a={},n=0,i=Object.entries(e);n<i.length;n++){var c=(0,t.Z)(i[n],2),o=c[0],s=c[1];r(s)&&(a[o]=s)}return a},i=function(e,r){for(var a=[],n=0,i=Object.entries(e);n<i.length;n++){var c=(0,t.Z)(i[n],2),o=c[0],s=c[1];a.push(r(s,o))}return a},c=function(e,r){for(var a=0,n=0,i=0,c=Object.entries(e);i<c.length;i++){a+=1,n+=r((0,t.Z)(c[i],2)[1])}return n/a}}}]);
//# sourceMappingURL=721.45680b19.chunk.js.map