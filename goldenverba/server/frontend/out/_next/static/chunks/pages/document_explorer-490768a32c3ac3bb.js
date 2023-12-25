(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[306],{98404:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/document_explorer",function(){return n(78006)}])},78006:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var o=n(85893),a=n(67294),s=n(17038),l=n(26246),c=n(29853),r=n(26771),d=n(25414),i=n(89583),u=n(36267);let m=(0,c.getApiHost)();function p(){let[e,t]=(0,a.useState)(""),[n,c]=(0,a.useState)([]),[p,h]=(0,a.useState)("All types"),[x,b]=(0,a.useState)(!1),[g,f]=(0,a.useState)(!1),[y,j]=(0,a.useState)(!1),[w,N]=(0,a.useState)(""),[v,_]=(0,a.useState)(""),[S,k]=(0,a.useState)("Documentation"),[C,D]=(0,a.useState)("#"),[T,A]=(0,a.useState)([]),[E,O]=(0,a.useState)(!1),[P,F]=(0,a.useState)(null),[I,H]=(0,a.useState)("");(0,a.useEffect)(()=>{let e=async()=>{try{let e=await fetch(m+"/api/get_production",{method:"GET",headers:{"Content-Type":"application/json"}}),t=await e.json();!0==t.production?console.log("In Production Mode"):console.log("In Normal Mode"),O(t.production)}catch(e){console.error("Failed to fetch document:",e)}};e()},[]);let B=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{let t=e?"".concat(m,"/api/search_documents"):"".concat(m,"/api/get_all_documents"),n=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e,doc_type:"All types"==p?"":p})}),o=await n.json();A(o.documents),H(o.current_embedder),o.doc_types&&c(o.doc_types)}catch(e){console.error("Failed to fetch documents: ".concat(e))}};(0,a.useEffect)(()=>{B()},[]),(0,a.useEffect)(()=>{let e=async()=>{if(P&&P._additional.id)try{let e=await fetch(m+"/api/get_document",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({document_id:P._additional.id})}),t=await e.json();N(t.document.properties.doc_name),_(t.document.properties.text),k(t.document.properties.doc_type),D(t.document.properties.doc_link)}catch(e){console.error("Failed to fetch document:",e)}};e()},[P]);let J=async()=>{try{j(!0);let e=await fetch("".concat(m,"/api/delete_document"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({document_id:null==P?void 0:P._additional.id})}),t=await e.json();console.log(t),f(!1),j(!1),F(null),N(""),_(""),B()}catch(e){console.error("Failed to delete document: ".concat(e))}},Z=async e=>{e.preventDefault();let t=e.currentTarget,n=new FormData(t),o=n.get("searchInput");B(o)};return(0,o.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-10 text-gray-900",children:[x&&(0,o.jsx)(r.Z,{onClose:()=>b(!1),apiHost:m}),(0,o.jsxs)("div",{className:"flex flex-col w-full items-start",children:[(0,o.jsx)("div",{className:"mb-2 bg-gray-200 rounded-lg p-2",children:(0,o.jsxs)("div",{className:"flex justify-between items-center w-full",children:[" ",(0,o.jsx)("div",{className:"flex-none",children:(0,o.jsx)("div",{className:"bg-blue-300 border-2 border-gray-800 rounded-lg shadow-lg animate-pop-in hover-container mr-4 ",children:(0,o.jsx)("img",{src:"".concat("static/","verba.png"),alt:"agent artificial Logo",className:" w-24 h-24 shadow-lg"})})}),(0,o.jsxs)("div",{className:"flex-1",children:[(0,o.jsx)("h1",{className:"text-6xl text-black font-bold",children:"Agent"}),(0,o.jsx)("br",{}),(0,o.jsx)("h1",{className:"text-6xl text-black font-bold",children:"Artificial"}),(0,o.jsxs)("div",{className:"flex text-blue-500 text-bold text-lg",children:[(0,o.jsx)("span",{className:"bg-opacity-0 rounded px-2 py-1 hover-container animate-pop-in",children:"The"}),(0,o.jsx)("span",{className:"bg-opacity-0 rounded font-bold px-2 py-1 hover-container animate-pop-in-late",children:"Knowledge"}),(0,o.jsx)("span",{className:"bg-orange-500 text-bold text-black rounded px-2 py-1 hover-container animate-pop-more-late",children:"Base"})]})]}),(0,o.jsxs)("div",{className:"flex justify-between items-center mx-auto p-4 ml-10",children:[(0,o.jsxs)("button",{className:"flex items-center animate-pop-in space-x-2 mr-8 bg-gray-200 text-black p-3  rounded-lg  hover:bg-green-400 border-2 border-black hover:border-white hover-container shadow-md",onClick:()=>b(!0),children:[(0,o.jsx)(i.wEH,{}),(0,o.jsx)("span",{children:"Add Documents"})]}),(0,o.jsx)(d.Z,{component:"embedders",apiHost:m,onGeneratorSelect:e=>{console.log("Set Streamable")},production:E})]})]})}),(0,o.jsxs)("div",{className:"flex w-full space-x-4 mt-28",children:[(0,o.jsxs)("div",{className:"flex-1 bg-white border-2 overflow-y-auto border-black bg-opacity-20 rounded-lg shadow-md backdrop-filter min-h-[50vh] backdrop-blur-md p-4 w-1/3 animate-pop-in",children:[(0,o.jsxs)("div",{className:"p-2",children:[(0,o.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[" ",(0,o.jsx)("h2",{className:"text-lg font-bold mb-4",children:"\uD83D\uDCDA Documents"}),P&&(0,o.jsxs)("button",{className:"text-xs bg-gray-400 text-white hover:bg-red-400 hover-container px-3 py-2 rounded-lg truncate",onClick:()=>f(!0),children:["❌ Delete ",P.doc_name]})]}),(0,o.jsxs)("p",{className:"text-xs font-bold mb-4 text-gray-600",children:["Search through all your ",T.length," imported documents embedded by ",I]}),(0,o.jsxs)("div",{className:"rounded-lg flex justify- between items-center",children:[(0,o.jsx)("form",{className:"rounded-b-xl p-2 w-full",onSubmit:Z,children:(0,o.jsx)("input",{type:"text",name:"searchInput",placeholder:"Search for documents",className:"w-full p-2 rounded-md bg-white text-gray-900 placeholder-gray-400"})}),(0,o.jsxs)("select",{value:p,onChange:e=>h(e.target.value),className:"mr-2 bg-white text-gray-900 p-2 rounded-md",children:[(0,o.jsx)("option",{value:"All types",children:"All types"}),n.map(e=>(0,o.jsx)("option",{value:e,children:e},e))]})]}),(0,o.jsx)("hr",{})]}),T.length>0&&(0,o.jsx)(l.OO,{style:{width:"100%",height:"66%"},totalCount:T.length,itemContent:e=>(0,o.jsx)(u.Z,{main:T[e].doc_name,clipboard:!0,sub:T[e].doc_type,subBgColor:"yellow",mainBgColor:"green",isActive:(null==P?void 0:P.doc_name)==T[e].doc_name,onClick:()=>F(T[e]),title:T[e].doc_name},T[e].doc_name)})]}),(0,o.jsx)("div",{className:"w-2/3 space-y-4",children:(0,o.jsx)(s.I,{title:w,text:v,extract:"",docLink:C,type:S})})]})]}),g&&(0,o.jsx)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:(0,o.jsxs)("div",{className:"bg-white p-6 rounded-lg shadow-lg border-2 border-black animate-pop-in",children:[(0,o.jsx)("h3",{className:"font-bold mb-4",children:"⚠️ Warning"}),(0,o.jsxs)("p",{children:["Do you want to remove ",null==P?void 0:P.doc_name]}),(0,o.jsxs)("div",{className:"flex justify-end mt-4",children:[(0,o.jsx)("button",{onClick:()=>f(!1),className:"mr-2 px-4 py-2 bg-gray-300 hover:bg-gray-200 rounded",children:"No"}),(0,o.jsxs)("button",{onClick:J,className:"px-4 py-2 bg-red-500 hover:bg-red-400 text-white rounded",children:[y?"Deleting...":"Yes"," "]})]})]})})]})}}},function(e){e.O(0,[246,774,888,179],function(){return e(e.s=98404)}),_N_E=e.O()}]);