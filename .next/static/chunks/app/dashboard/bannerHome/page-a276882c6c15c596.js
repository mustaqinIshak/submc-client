(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[121],{8715:function(e,t,a){Promise.resolve().then(a.bind(a,7314))},9050:function(e,t,a){"use strict";var r=a(6979);async function s(e){try{let t=await (0,r.Z)({method:"post",url:"/getSelectedAksesMenu",headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(localStorage.getItem("token"))},data:{id_menu:e}});if(t.data.status)return t.data.data;throw t.data.message}catch(e){throw e}}t.Z={getSelectedAksesMenu:s}},6979:function(e,t,a){"use strict";var r=a(9222);let s=r.Z.create({baseURL:"http://127.0.0.1:8000/api"});t.Z=s},7314:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return C}});var r=a(7437),s=a(2265),n=a(9046),l=a(4931),i=a(7846);function o(e){let{item:t,deleteItem:a}=e;return(0,r.jsx)("div",{class:"grid grid-cols-2 md:grid-cols-3 gap-4",children:t&&t.map((e,t)=>(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{onClick:()=>a(e.id),className:"cursor-pointer absolute z-30 text-4xl text-red-700",children:(0,r.jsx)(i.bqj,{})}),(0,r.jsx)("img",{className:"h-auto max-w-full",src:e.gambar,alt:""})]},t))})}var c=a(3002),d=a(4418),u=a(6847);function m(e){let{item:t,loading:a}=e;return(0,r.jsx)(r.Fragment,{children:t?(0,r.jsx)("div",{id:"default-carousel",className:"h-56 md:h-96","data-carousel":"slide",children:a?(0,r.jsx)(u.Z,{}):(0,r.jsx)(d.lr,{slide:!1,children:t.map((e,t)=>(0,r.jsx)("img",{alt:"...",src:e.gambar},t))})}):(0,r.jsx)("div",{id:"default-carousel",class:"relative h-56 md:h-96","data-carousel":"slide",children:(0,r.jsxs)(d.lr,{slide:!1,children:[(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("img",{alt:"...",src:"https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/9/27/c20e55c5-3024-4676-b593-c5f903403143.jpg.webp?ect=4g"}),(0,r.jsx)("span",{children:"takin"})]}),(0,r.jsx)("img",{alt:"...",src:"https://flowbite.com/docs/images/carousel/carousel-2.svg"}),(0,r.jsx)("img",{alt:"...",src:"https://flowbite.com/docs/images/carousel/carousel-3.svg"}),(0,r.jsx)("img",{alt:"...",src:"https://flowbite.com/docs/images/carousel/carousel-4.svg"}),(0,r.jsx)("img",{alt:"...",src:"https://flowbite.com/docs/images/carousel/carousel-5.svg"})]})})})}var g=a(9050),h=a(6979);async function x(e){try{let e=await (0,h.Z)({method:"post",url:"/getBannerHome",headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(localStorage.getItem("token"))}});return e.data}catch(a){let e=[];a.response.data.gambar&&a.response.data.gambar.map(t=>{e.push(t)}),a.response.data.message&&e.push(a.response.data.message);let t=e.join("");throw t}}async function f(e){try{let t=await (0,h.Z)({method:"post",url:"/createBannerHome",headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(localStorage.getItem("token"))},data:e});return t.data}catch(a){let e=[];a.response.data.gambar&&a.response.data.gambar.map(t=>{e.push(t)}),a.response.data.message&&e.push(a.response.data.message);let t=e.join("");throw t}}async function p(e){try{let t=await (0,h.Z)({method:"post",url:"/deleteBannerHome",headers:{"Access-Control-Allow-Origin":"*",Authorization:"Bearer ".concat(localStorage.getItem("token"))},data:{id:e}});return t.data}catch(a){let e=[];a.response.data.id&&a.response.data.id.map(t=>{e.push(t)}),a.response.data.message&&e.push(a.response.data.message);let t=e.join("");throw t}}var b=a(4280);function j(e){let{handleImageChange:t,imagePreview:a}=e;return(0,r.jsx)("div",{className:"flex items-center justify-center w-full",children:(0,r.jsxs)("label",{htmlFor:"dropzone-file",className:"flex flex-col items-center justify-center w-full h-56 md:h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",children:[a?(0,r.jsx)("div",{id:"default-carousel",className:"w-full","data-carousel":"slide",children:(0,r.jsx)("div",{className:"relative h-56 overflow-hidden rounded-lg md:h-96",children:(0,r.jsx)("div",{className:"","data-carousel-item":!0,children:(0,r.jsx)("img",{className:"absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ",src:a,alt:"Selected Image"})})})}):(0,r.jsxs)("div",{className:"flex flex-col items-center justify-center pt-5 pb-6",children:[(0,r.jsx)("svg",{className:"w-8 h-8 mb-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 16",children:(0,r.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"})}),(0,r.jsxs)("p",{className:"mb-2 text-sm text-gray-500 dark:text-gray-400",children:[(0,r.jsx)("span",{className:"font-semibold",children:"Click to upload"})," or drag and drop"]}),(0,r.jsx)("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"SVG, PNG, JPG or GIF (MAX. 1208x302px)"})]}),(0,r.jsx)("input",{onChange:t,id:"dropzone-file",type:"file",className:"hidden",accept:"image/*"})]})})}var y=a(6820),w=a.n(y),v=a(7342),k=a.n(v);function C(){let e=k()(w()),[t,a]=(0,s.useState)(!1),[i,d]=(0,s.useState)({}),[h,y]=(0,s.useState)(!1),[v,C]=(0,s.useState)([]),[N,A]=(0,s.useState)(!1),[S,Z]=(0,s.useState)(null),[B,F]=(0,s.useState)(""),[I,M]=(0,s.useState)(null),[_,H]=(0,s.useState)(!1),L=async()=>{try{A(!0);let e=JSON.parse(localStorage.getItem("menu")),t=e.find(e=>"Banner Home"===e.name),a=await g.Z.getSelectedAksesMenu(t.id);if(console.log(a),a){d({...a});let e=await x();C([...e.data])}A(!1)}catch(e){A(!1),console.log(e)}},z=async()=>{y(!0);try{let e=await x();C([...e.data]),y(!1)}catch(t){A(!1),e.fire({icon:"error",title:t})}},D=async r=>{r.preventDefault(),console.log(S);let s=new FormData;s.append("image",S),H(!0);try{let r=await f(s);r&&(e.fire({icon:"success",title:"Berhasil Menambahkan Banner Home"}),Z(null)),Z(null),a(!t),H(!1)}catch(t){H(!1),e.fire({icon:"error",title:t})}};return(0,s.useEffect)(()=>{L()},[]),(0,s.useEffect)(()=>{z()},[t]),(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)(b.Z,{title:"Banner Home"}),N?(0,r.jsx)("div",{className:"flex w-full h-full items-center justify-center",children:(0,r.jsx)(u.Z,{})}):i&&1===i.act_read?(0,r.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,r.jsx)(m,{item:v}),i&&1===i.act_create&&(0,r.jsx)("div",{className:"w-full flex flex-col justify-start mb-6 ",children:(0,r.jsxs)("form",{className:"flex flex-col gap-8",encType:"multipart/form-data",onSubmit:D,children:[(0,r.jsx)(j,{handleImageChange:e=>{let t=e.target.files[0];Z(e.target.files[0]);let a=new FileReader;a.onloadend=()=>{M(a.result)},a.readAsDataURL(t)},imagePreview:I}),(0,r.jsx)("div",{className:"max-w-md",children:(0,r.jsx)(c.y,{setValue:F,value:B,isRequire:!1,name:"Link",placeholder:"www.subcmmapparel.com/kategori/namaproduk"})}),(0,r.jsxs)("div",{className:"flex w-full",children:[(0,r.jsx)(n.D,{width:"",name:"Upload",type:"submit",isLoading:_}),(0,r.jsx)(l.Z,{width:"",name:"Remove",action:()=>{Z(null),M(null)}})]})]})}),(0,r.jsx)(o,{item:v,deleteItem:r=>{e.fire({title:'Apakah anda yakin ingin menghapus Banner Home ini "'.concat(r,'" ?'),text:"Anda tidak bisa mengembalikan data ini!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Ya, Hapus!"}).then(s=>{s.isConfirmed&&p(r).then(()=>{a(!t),e.fire("Deleted!","Data berhasil di hapus","success")},r=>{a(!t),e.fire({icon:"error",title:r})})})}})]}):(0,r.jsx)("div",{className:"flex items-center justify-center",children:(0,r.jsx)("span",{children:"Anda tidak memiliki akses"})})]})}},4931:function(e,t,a){"use strict";var r=a(7437);t.Z=function(e){let{name:t="button",action:a=()=>{console.log("no function in button allert")},width:s="w-auto"}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("button",{type:"button",className:"\n                focus:outline-none \n                text-white \n                bg-red-700 \n                hover:bg-red-800 \n                focus:ring-4 \n                focus:ring-red-300 \n                font-medium \n                rounded-lg \n                text-sm \n                px-5 \n                py-2.5 \n                mr-2 \n                mb-2 \n                dark:bg-red-600 \n                dark:hover:bg-red-700 \n                dark:focus:ring-red-900\n                ".concat(s,"                      \n                "),onClick:a,children:t})})}},9046:function(e,t,a){"use strict";a.d(t,{D:function(){return n}});var r=a(7437),s=a(6847);let n=e=>{let{type:t,name:a="button",action:n,width:l="w-auto",isLoading:i}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("button",{type:t,className:"\n                text-white \n                bg-gray-800 \n                hover:bg-gray-900 \n                focus:outline-none \n                focus:ring-4 \n                focus:ring-gray-300 \n                font-medium \n                rounded-lg \n                text-sm \n                px-5 \n                py-2.5 \n                mr-2 \n                mb-2 \n                dark:bg-gray-800 \n                dark:hover:bg-gray-700 \n                dark:focus:ring-gray-700 \n                dark:border-gray-700\n                ".concat(l,"                      \n                "),onClick:n,disabled:!!i,children:i?(0,r.jsx)(s.Z,{}):a})})}},3002:function(e,t,a){"use strict";a.d(t,{y:function(){return s}});var r=a(7437);let s=e=>{let{name:t="field text",id:a="field text",placeholder:s="placeholder",isRequire:n=!0,value:l,setValue:i,isError:o,keterangan:c}=e;return(0,r.jsxs)("div",{className:"mb-6",children:[(0,r.jsx)("label",{htmlFor:a,className:" block mb-2 text-sm font-medium text-gray-900 dark:text-white",children:t}),(0,r.jsx)("input",{type:"text",id:a,className:"   bg-gray-50    border    border-gray-300    text-gray-900    text-sm    rounded-lg    focus:ring-blue-500    focus:border-blue-500    block w-full p-2.5    dark:bg-gray-700    dark:border-gray-600    dark:placeholder-gray-400    dark:text-white    dark:focus:ring-blue-500    dark:focus:border-blue-500",placeholder:s,value:l,onChange:e=>i(e.target.value),required:!!n}),o&&(0,r.jsx)("p",{className:"mt-2 text-sm text-red-500",children:c})]})}},6847:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(7437);function s(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("svg",{"aria-hidden":"true",className:"inline w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),(0,r.jsx)("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),(0,r.jsx)("span",{className:"sr-only",children:"Loading..."})]})}},4280:function(e,t,a){"use strict";a.d(t,{Z:function(){return s}});var r=a(7437);function s(e){let{title:t="Untitle"}=e;return(0,r.jsx)("div",{className:"text-3xl md:text-5xl font-bold mb-12",children:(0,r.jsx)("span",{children:t})})}}},function(e){e.O(0,[420,982,370,750,698,401,37,971,596,744],function(){return e(e.s=8715)}),_N_E=e.O()}]);