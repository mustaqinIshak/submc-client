(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[413],{6979:function(e,t,r){"use strict";var n=r(9222);let a=n.Z.create({baseURL:"http://127.0.0.1:8000/api"});t.Z=a},722:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return m}});var n=r(7437);r(4931);var a=r(2265),s=r(9046),l=r(3002),o=r(1833),i=r(6691),c=r.n(i),d=r(6979);async function u(e){let t=e.username,r=e.password;try{let e=await (0,d.Z)({method:"post",url:"/login",headers:{"Access-Control-Allow-Origin":"*"},data:{username:t,password:r}});return e.data.token}catch(e){throw e}}var g=r(4033);function m(){let e=(0,g.useRouter)(),[t,r]=(0,a.useState)(""),[i,d]=(0,a.useState)(""),[m,h]=(0,a.useState)(!1),[f,b]=(0,a.useState)(""),[x,p]=(0,a.useState)(!1);(0,a.useEffect)(()=>{localStorage.getItem("token")?e.replace("/dashboard"):e.replace("/login")},[]);let y=async r=>{r.preventDefault(),p(!0),b("");try{let r=await u({username:t,password:i});r&&(localStorage.setItem("token",r),e.replace("/")),p(!1)}catch(e){console.log(e.response.data),b("Username atau password anda salah"),p(!1)}};return(0,n.jsx)("div",{className:"center-login",children:(0,n.jsxs)("div",{className:"p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700",children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(c(),{alt:"cmm apparel",src:"/logo/logoblack.png",width:100,height:100}),(0,n.jsx)("span",{className:"font-semibold",children:"Portal CMS"})]}),f&&(0,n.jsxs)("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",role:"alert",children:[(0,n.jsx)("span",{className:"font-medium",children:"Peringatan!"})," ",f]}),(0,n.jsxs)("form",{onSubmit:y,children:[(0,n.jsx)(l.y,{name:"Username",id:"username",isRequire:!0,placeholder:"username",value:t,setValue:r}),(0,n.jsx)(o.y,{name:"Password",id:"password",placeholder:"password123456",isRequire:!0,value:i,setValue:d,isShowPassword:m,setisShowPassword:h}),(0,n.jsx)(s.D,{isLoading:x,name:"Login",width:"w-full"})]})]})})}r(3801)},4931:function(e,t,r){"use strict";var n=r(7437);t.Z=function(e){let{name:t="button",action:r=()=>{console.log("no function in button allert")},width:a="w-auto"}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("button",{type:"button",className:"\n                focus:outline-none \n                text-white \n                bg-red-700 \n                hover:bg-red-800 \n                focus:ring-4 \n                focus:ring-red-300 \n                font-medium \n                rounded-lg \n                text-sm \n                px-5 \n                py-2.5 \n                mr-2 \n                mb-2 \n                dark:bg-red-600 \n                dark:hover:bg-red-700 \n                dark:focus:ring-red-900\n                ".concat(a,"                      \n                "),onClick:r,children:t})})}},9046:function(e,t,r){"use strict";r.d(t,{D:function(){return s}});var n=r(7437),a=r(6847);let s=e=>{let{type:t,name:r="button",action:s,width:l="w-auto",isLoading:o}=e;return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("button",{type:t,className:"\n                text-white \n                bg-gray-800 \n                hover:bg-gray-900 \n                focus:outline-none \n                focus:ring-4 \n                focus:ring-gray-300 \n                font-medium \n                rounded-lg \n                text-sm \n                px-5 \n                py-2.5 \n                mr-2 \n                mb-2 \n                dark:bg-gray-800 \n                dark:hover:bg-gray-700 \n                dark:focus:ring-gray-700 \n                dark:border-gray-700\n                ".concat(l,"                      \n                "),onClick:s,disabled:!!o,children:o?(0,n.jsx)(a.Z,{}):r})})}},1833:function(e,t,r){"use strict";r.d(t,{y:function(){return s}});var n=r(7437),a=r(5391);let s=e=>{let{name:t="field password",id:r="field password",placeholder:s="placeholder",isRequire:l=!0,value:o,setValue:i,isShowPassword:c=!1,setisShowPassword:d,isError:u,keterangan:g}=e;return(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("label",{htmlFor:r,className:" block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:t}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("input",{type:c?"text":"password",id:r,className:"   bg-gray-50    border    border-gray-300    text-gray-900    text-sm    rounded-lg    focus:ring-blue-500    focus:border-blue-500    block w-full p-2.5    dark:bg-gray-700    dark:border-gray-600    dark:placeholder-gray-400    dark:text-white    dark:focus:ring-blue-500    dark:focus:border-blue-500",placeholder:s,value:o,onChange:e=>i(e.target.value),required:!!l}),(0,n.jsx)("div",{className:"   absolute    right-2.5   bottom-2.5   flex    items-center    pl-3   cursor-pointer   ",onClick:()=>d(!c),children:c?(0,n.jsx)(a.VhL,{className:"text-black dark:text-white"}):(0,n.jsx)(a.nO8,{className:" text-black dark:text-white"})})]}),u&&(0,n.jsx)("p",{className:"mt-2 text-sm text-red-500",children:g})]})}},3002:function(e,t,r){"use strict";r.d(t,{y:function(){return a}});var n=r(7437);let a=e=>{let{name:t="field text",id:r="field text",placeholder:a="placeholder",isRequire:s=!0,value:l,setValue:o,isError:i,keterangan:c}=e;return(0,n.jsxs)("div",{className:"mb-6",children:[(0,n.jsx)("label",{htmlFor:r,className:" block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:t}),(0,n.jsx)("input",{type:"text",id:r,className:"   bg-gray-50    border    border-gray-300    text-gray-900    text-sm    rounded-lg    focus:ring-blue-500    focus:border-blue-500    block w-full p-2.5    dark:bg-gray-700    dark:border-gray-600    dark:placeholder-gray-400    dark:text-white    dark:focus:ring-blue-500    dark:focus:border-blue-500",placeholder:a,value:l,onChange:e=>o(e.target.value),required:!!s}),i&&(0,n.jsx)("p",{className:"mt-2 text-sm text-red-500",children:c})]})}},6847:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(7437);function a(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("svg",{"aria-hidden":"true",className:"inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,n.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,n.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),(0,n.jsx)("span",{className:"sr-only",children:"Loading..."})]})}},3801:function(){},1172:function(e,t,r){"use strict";r.d(t,{w_:function(){return i}});var n=r(2265),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(a),l=function(){return(l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)0>t.indexOf(n[a])&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]]);return r};function i(e){return function(t){return n.createElement(c,l({attr:l({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,l({key:r},t.attr),e(t.child))})}(e.child))}}function c(e){var t=function(t){var r,a=e.attr,s=e.size,i=e.title,c=o(e,["attr","size","title"]),d=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,c,{className:r,style:l(l({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==s?n.createElement(s.Consumer,null,function(e){return t(e)}):t(a)}}}]);