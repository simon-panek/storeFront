(this["webpackJsonpstore-front"]=this["webpackJsonpstore-front"]||[]).push([[0],{92:function(t,e,c){},94:function(t,e,c){"use strict";c.r(e);var r=c(2),n=c(0),a=c.n(n),o=c(19),i=c.n(o),s=c(15),u=c(22),d=c(51),l=c(52),p=c(7),j={categories:[{name:"tools",displayName:"Tools"},{name:"materials",displayName:"Materials"},{name:"safetyGear",displayName:"Personal Protective Equipment"}],products:[],activeCategory:""},b=function(t){return{type:"SELECTCATEGORY",payload:t}},O=function(t){return{type:"INCREMENTSTOCK",payload:t}},m=function(t){return{type:"DECREMENTSTOCK",payload:t}},h=function(){return{type:"RESET"}},f=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0,c=e.type,r=e.payload;switch(c){case"SELECTCATEGORY":return Object(p.a)(Object(p.a)({},t),{},{activeCategory:r});case"INCREMENTSTOCK":var n,a=t.products;return a.map((function(t,e){return t.name===r.name&&(n=e),n})),a[n].inStock=a[n].inStock+1,Object(p.a)(Object(p.a)({},t),{},{products:a});case"DECREMENTSTOCK":var o,i=t.products;return i.map((function(t,e){return t.name===r.name&&(o=e),o})),i[o].inStock=i[o].inStock-1,Object(p.a)(Object(p.a)({},t),{},{products:i});case"RESET":return j;case"UPDATE-PRODUCTS":return console.log("CATEGORY REDUCER categoryReducer: ",{payload:r}),Object(p.a)(Object(p.a)({},t),{},{products:r});default:return t}},x=c(57),y={cart:[],cartCount:0},v=function(t){return{type:"ADDITEM",payload:t}},C=function(t){return{type:"REMOVE",payload:t}},g=function(){return{type:"RESET"}},E=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0,c=e.type,r=e.payload;switch(c){case"ADDITEM":return r=Object(p.a)(Object(p.a)({},r),{},{quantityInCart:r.quantityInCart+1}),Object(p.a)(Object(p.a)({},t),{},{cart:[].concat(Object(x.a)(t.cart),[r]),cartCount:t.cartCount+1});case"REMOVE":var n,a=t.cart;return a.map((function(t,e){return t.name===r.name?n=e:n})),a.splice(n,1),Object(p.a)(Object(p.a)({},t),{},{cart:a,cartCount:t.cartCount-1});case"RESET":return y;default:return t}},S=c(32),k=c.n(S),A={results:[]},R=function(){return function(t){return k.a.get("https://simonpanek-auth-api.herokuapp.com/api/v1/store").then((function(e){t(P(e.body))}))}},T=function(t,e){return function(c){console.log("API REDUCER putApi: ",{product:t});var r,n=t._id;switch(e){case"decrementStock":r=Object(p.a)(Object(p.a)({},t),{},{inStock:t.inStock-1,quantityInCart:t.quantityInCart+1});break;case"incrementStock":r=Object(p.a)(Object(p.a)({},t),{},{inStock:t.inStock+1,quantityInCart:t.quantityInCart-1})}return console.log("API REDUCER putApi: ",{updatedProduct:r}),k.a.put("https://simonpanek-auth-api.herokuapp.com/api/v1/store/".concat(n)).send(r).then((function(t){console.log("API REDUCER putApi: response.body ",t.body)}))}},P=function(t){return{type:"GET",payload:t}},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,e=arguments.length>1?arguments[1]:void 0,c=e.type,r=e.payload;switch(c){case"GET":return console.log("API REDUCER apiSwitchboard: ",{payload:r}),Object(p.a)(Object(p.a)({},t),{},{results:r});case"POST":case"PUT":case"DELETE":return r;default:return t}},D=Object(u.combineReducers)({categories:f,cart:E,api:I}),w=Object(u.createStore)(D,Object(d.composeWithDevTools)(Object(u.applyMiddleware)(l.a))),G=c(125),M=c(113),N=c(115),U=c(116),B=c(118),q=c(119),L=c(117),z=c(56),K=c.n(z),Y=c(30),H=Object(M.a)((function(t){return{root:{flexGrow:1},menuButton:{marginRight:t.spacing(2)},title:{flexGrow:1}}}));var W={getApi:R,updateProducts:function(t){return console.log("CATEGORY REDUCER updateProducts: ",{products:t}),{type:"UPDATE-PRODUCTS",payload:t}}},J=Object(s.b)((function(t){return{state:t,cartCount:t.cart.cartCount,apiProducts:t.api.results}}),W)((function(t){var e=H();return Object(n.useEffect)((function(){t.getApi(),console.log("HEADER useEffect: props.state",t.state)}),[]),Object(n.useEffect)((function(){console.log("HEADER useEffect: props.apiProducts",t.apiProducts),t.updateProducts(t.apiProducts)}),[t.apiProducts]),Object(r.jsx)("div",{id:"header",children:Object(r.jsx)(N.a,{position:"static",color:"gray",children:Object(r.jsxs)(U.a,{children:[Object(r.jsx)(L.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(r.jsx)(K.a,{})}),Object(r.jsx)(B.a,{variant:"h6",className:e.title,children:Object(r.jsx)(Y.b,{to:"/",children:"Binary Brick and Mortar"})}),Object(r.jsx)(q.a,{color:"inherit",children:Object(r.jsxs)(Y.b,{to:"/store",children:["Cart (",t.cartCount,")"]})})]})})})}));var V=function(){return Object(r.jsx)("div",{id:"header",children:Object(r.jsx)("p",{children:"\xa9 2021 SP"})})},$=c(20),F=c.n($),X=c(31),_=c(120),Q=c(121),Z=c(124),tt=c(123),et=c(122),ct=Object(M.a)({root:{maxWidth:345},media:{height:140}}),rt={selectCategory:b,reset:h,decrementStock:m,addItem:v,clearCart:g,putApi:T,getApi:R};var nt=Object(s.b)((function(t){return{state:t,activeCategory:t.categories.activeCategory,products:t.categories.products}}),rt)((function(t){console.log("PROPS on Products Page: ","props.state ",t.state,"Active Category: ",t.activeCategory,"Products: ",t.products);var e=ct(),c=function(){var e=Object(X.a)(F.a.mark((function e(c){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Adding to cart:A ",c),t.decrementStock(c),t.addItem(c),e.next=5,t.putApi(c,"decrementStock");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{id:"productDetail",children:t.products.map((function(n,a){return n.category!==t.activeCategory?"":Object(r.jsx)("section",{children:Object(r.jsxs)(_.a,{className:e.root,children:[Object(r.jsxs)(Q.a,{children:[Object(r.jsx)(et.a,{className:e.media,image:n.image,title:n.name}),Object(r.jsxs)(tt.a,{children:[Object(r.jsx)(B.a,{gutterBottom:!0,variant:"h5",component:"h2",children:n.name}),Object(r.jsx)(B.a,{variant:"body2",color:"textSecondary",component:"p",children:n.description}),Object(r.jsxs)(B.a,{variant:"body2",color:"textSecondary",component:"p",children:["Only $",n.price,"!"]}),Object(r.jsxs)(B.a,{variant:"body2",color:"textSecondary",component:"p",children:[n.inStock," Currently in stock!"]})]})]}),Object(r.jsxs)(Z.a,{children:[Object(r.jsx)(q.a,{id:a+"button",size:"small",color:"primary",onClick:function(){return c(n)},children:"Add to Cart"}),Object(r.jsx)(q.a,{size:"small",color:"primary",children:"Impulse Buy!"})]})]})},a)}))})})),at={selectCategory:b,reset:h};var ot=Object(s.b)((function(t){return{categories:t.categories.categories,active:t.categories.activeCategory}}),at)((function(t){var e=function(e){console.log("show category: ",e),t.selectCategory(e)};return console.log("CATEGORIES Active: ",t.active,"Categories: ",t.categories),Object(n.useEffect)((function(){console.log("CATEGORIES useEffect: props.state.categories.products ",t.state)})),Object(r.jsxs)("div",{children:[Object(r.jsxs)("section",{id:"categories",children:[Object(r.jsx)(B.a,{variant:"h5",children:"Browse Our Categories"}),Object(r.jsx)(B.a,{variant:"h7",id:"tools",onClick:function(){t.reset()},children:"Home"}),"tools"===t.active||""===t.active?Object(r.jsx)("div",{children:Object(r.jsx)(B.a,{variant:"h7",id:"tools",onClick:function(){return e("tools")},children:"Tools"})}):"","materials"===t.active||""===t.active?Object(r.jsxs)("div",{children:[Object(r.jsx)(B.a,{variant:"h7",id:"materials",onClick:function(){return e("materials")},children:"Materials"})," "]}):"","safetyGear"===t.active||""===t.active?Object(r.jsx)(B.a,{variant:"h7",id:"safetyGear",onClick:function(){return e("safetyGear")},children:"Personal Protective Equipment"}):""]}),Object(r.jsx)("section",{id:"products",children:Object(r.jsx)(nt,{})})]})})),it=(c(92),{removeItem:C,clearCart:g,incrementStock:O,putApi:T});var st=Object(s.b)((function(t){return{state:t,products:t.cart.cart,count:t.cartCount}}),it)((function(t){return Object(r.jsx)("section",{id:"simpleCart",children:Object(r.jsx)("div",{children:t.products.map((function(e,c){return Object(r.jsxs)("section",{children:[Object(r.jsx)("p",{children:e.name}),Object(r.jsx)("button",{id:c+"button",onClick:function(){return function(e){t.removeItem(e),t.incrementStock(e),t.putApi(e,"incrementStock")}(e)},children:"X"})]},c)}))})})})),ut=Object(M.a)({root:{maxWidth:345},media:{height:140}}),dt={removeItem:C,clearCart:g,incrementStock:O,addItem:v,decrementStock:m,putApi:T};var lt=Object(s.b)((function(t){return{state:t,products:t.cart.cart,count:t.cartCount}}),dt)((function(t){var e=ut();console.log("SIMPLE CART props.state ",t.state),console.log("SIMPLE CART props.products ",t.products);var c=function(){var e=Object(X.a)(F.a.mark((function e(c){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("CART PAGE removeFromCart product: ",c),t.removeItem(c),t.incrementStock(c),e.next=5,t.putApi(c,"incrementStock");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n=function(){var e=Object(X.a)(F.a.mark((function e(c){return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Adding to cart: ",c),t.decrementStock(c),t.addItem(c),e.next=5,t.putApi(c,"decrementStock");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return console.log("Products ",t.products),Object(r.jsx)("section",{children:Object(r.jsx)("div",{id:"productDetail",children:t.products.map((function(t,a){return Object(r.jsx)("section",{children:Object(r.jsxs)(_.a,{className:e.root,children:[Object(r.jsxs)(Q.a,{children:[Object(r.jsx)(et.a,{className:e.media,image:t.image,title:t.name}),Object(r.jsxs)(tt.a,{children:[Object(r.jsx)(B.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.name}),Object(r.jsx)(B.a,{variant:"body2",color:"textSecondary",component:"p",children:t.description}),Object(r.jsxs)(B.a,{variant:"body2",color:"textSecondary",component:"p",children:["Only $",t.price,"!"]}),Object(r.jsxs)(B.a,{variant:"body2",color:"textSecondary",component:"p",children:[t.inStock," Currently in stock!"]})]})]}),Object(r.jsxs)(Z.a,{children:[Object(r.jsx)(q.a,{id:a+"button",size:"small",color:"primary",onClick:function(){return n(t)},children:"+"}),Object(r.jsx)(q.a,{id:a+"button2",size:"small",color:"primary",onClick:function(){return c(t)},children:"-"})]})]})},a)}))})})})),pt=c(8);var jt=function(){return Object(r.jsxs)(Y.a,{children:[Object(r.jsx)(J,{}),Object(r.jsxs)(pt.a,{exact:!0,path:"/",children:[Object(r.jsx)(st,{}),Object(r.jsx)(ot,{})]}),Object(r.jsx)(pt.a,{exact:!0,path:"/store",children:Object(r.jsx)(lt,{})}),Object(r.jsx)(V,{})]})};i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsxs)(s.a,{store:w,children:[Object(r.jsx)(G.a,{}),Object(r.jsx)(jt,{})]})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.83cafd1c.chunk.js.map