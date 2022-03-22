(function(){"use strict";var e={717:function(e,r,n){var t=n(9242),a=n(3396);const o={class:"container"};function s(e,r,n,t,s,u){const l=(0,a.up)("AddUserForm"),i=(0,a.up)("UsersTable");return(0,a.wg)(),(0,a.iD)("div",o,[(0,a.Wm)(l,{onAddUser:u.handleAddUser},null,8,["onAddUser"]),(0,a.Wm)(i,{onDeleteUser:e.handleDeleteUser,users:s.users},null,8,["onDeleteUser","users"])])}const u={class:"buttonsBlock"},l=(0,a.Uk)(" Add user "),i=(0,a.Uk)("Reload"),d=(0,a.Uk)(" Just for testing "),m=(0,a.Uk)(" Save ");function c(e,r,n,o,s,c){const f=(0,a.up)("n-button"),p=(0,a.up)("n-tooltip"),h=(0,a.up)("n-input"),v=(0,a.up)("n-form-item"),g=(0,a.up)("n-select"),w=(0,a.up)("n-form"),b=(0,a.up)("n-card"),U=(0,a.up)("n-modal");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a._)("div",u,[(0,a.Wm)(f,{size:"medium",type:"info",class:"addBtn",onClick:r[0]||(r[0]=e=>s.showModal=!0)},{default:(0,a.w5)((()=>[l])),_:1}),(0,a.Wm)(p,{placement:"bottom-end",trigger:"hover"},{trigger:(0,a.w5)((()=>[(0,a.Wm)(f,{ghost:"",size:"medium",type:"info",onClick:c.reload},{default:(0,a.w5)((()=>[i])),_:1},8,["onClick"])])),default:(0,a.w5)((()=>[d])),_:1})]),(0,a.Wm)(U,{show:s.showModal,"onUpdate:show":r[7]||(r[7]=e=>s.showModal=e),bordered:!1},{default:(0,a.w5)((()=>[(0,a.Wm)(b,{title:"Add User",closable:"",onClose:r[6]||(r[6]=e=>s.showModal=!1)},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{model:s.formData,rules:s.rules},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{path:"user.name",label:"Name"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{value:s.formData.user.name,"onUpdate:value":r[1]||(r[1]=e=>s.formData.user.name=e),onKeydown:r[2]||(r[2]=(0,t.D2)((0,t.iM)((()=>{}),["prevent"]),["enter"])),placeholder:"User Name"},null,8,["value"])])),_:1}),(0,a.Wm)(v,{path:"user.phone",label:"Phone Number"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{value:s.formData.user.phone,"onUpdate:value":r[3]||(r[3]=e=>s.formData.user.phone=e),onKeydown:r[4]||(r[4]=(0,t.D2)((0,t.iM)((()=>{}),["prevent"]),["enter"])),placeholder:"User Phone Number"},null,8,["value"])])),_:1}),(0,a.Wm)(v,{path:"user.manager",label:"Manager"},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{value:s.formData.user.manager,"onUpdate:value":r[5]||(r[5]=e=>s.formData.user.manager=e),options:s.options},null,8,["value","options"])])),_:1}),(0,a.Wm)(f,{type:"primary",onClick:c.handleSubmit},{default:(0,a.w5)((()=>[m])),_:1},8,["onClick"])])),_:1},8,["model","rules"])])),_:1})])),_:1},8,["show"])],64)}n(1703);const f=JSON.parse(localStorage.getItem("users"))||[],p=f.map((e=>({label:e.name,value:e.name})));var h={name:"AddUserForm",data(){return{showModal:!1,options:p,formData:{user:{name:"",phone:"",manager:""}},rules:{user:{name:{required:!0,message:"Please enter user name",trigger:"blur"},phone:{required:!0,validator(e,r){return r?!!/^\d*$/.test(r)||new Error("Phone number should be an integer"):new Error("Please enter user phone number")},trigger:["input","blur"]},manager:{required:!1,trigger:"blur"}}}}},methods:{handleSubmit(e){e.preventDefault();const r={id:Math.floor(1e3*Math.random()),name:this.formData.user.name,phone:this.formData.user.phone,manager:this.formData.user.manager};this.formData.user.name&&this.formData.user.phone?(this.$emit("addUser",r),this.showModal=!1):alert("Please fill all the required fields"),this.formData.user.name="",this.formData.user.phone=""},reload(){window.location.reload()}},emits:["addUser"]},v=n(89);const g=(0,v.Z)(h,[["render",c],["__scopeId","data-v-92c94c16"]]);var w=g;function b(e,r,n,t,o,s){const u=(0,a.up)("n-data-table");return(0,a.wg)(),(0,a.j4)(u,{columns:o.columns,data:o.data},null,8,["columns","data"])}const U=()=>[{title:"Name",key:"name",sorter:"default"},{title:"Phone",key:"phone",sorter:(e,r)=>e.phone-r.phone}],D=JSON.parse(localStorage.getItem("users"))||[],y=D.map((e=>({name:e.name,phone:e.phone})));var k={name:"UsersTable",data(){return{users:Array,data:y,columns:U()}}};const _=(0,v.Z)(k,[["render",b]]);var O=_,W={components:{AddUserForm:w,UsersTable:O},data(){return{users:[]}},methods:{handleAddUser(e){this.users=[...this.users,e]}},watch:{users:{handler(){localStorage.setItem("users",JSON.stringify(this.users))},deep:!0}},mounted(){this.users=JSON.parse(localStorage.getItem("users"))||[]}};const Z=(0,v.Z)(W,[["render",s]]);var M=Z,P=n(6542),S=n(6447),A=n(9522),N=n(7739),C=n(3273),j=n(7762),I=n(6914),J=n(1284),T=n(1267),q=n(4786),x=n(3645);const F=(0,P.Z)({components:[S.Z,A.ZP,N.Z,C.Z,j.ZP,I.Z,J.Z,T.Z,q.g,x.Z]});(0,t.ri)(M).use(F).mount("#app")}},r={};function n(t){var a=r[t];if(void 0!==a)return a.exports;var o=r[t]={exports:{}};return e[t](o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(r,t,a,o){if(!t){var s=1/0;for(d=0;d<e.length;d++){t=e[d][0],a=e[d][1],o=e[d][2];for(var u=!0,l=0;l<t.length;l++)(!1&o||s>=o)&&Object.keys(n.O).every((function(e){return n.O[e](t[l])}))?t.splice(l--,1):(u=!1,o<s&&(s=o));if(u){e.splice(d--,1);var i=a();void 0!==i&&(r=i)}}return r}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[t,a,o]}}(),function(){n.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(r,{a:r}),r}}(),function(){n.d=function(e,r){for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)}}(),function(){var e={143:0};n.O.j=function(r){return 0===e[r]};var r=function(r,t){var a,o,s=t[0],u=t[1],l=t[2],i=0;if(s.some((function(r){return 0!==e[r]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(l)var d=l(n)}for(r&&r(t);i<s.length;i++)o=s[i],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},t=self["webpackChunkvue_test"]=self["webpackChunkvue_test"]||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(717)}));t=n.O(t)})();
//# sourceMappingURL=app.ee8cd403.js.map