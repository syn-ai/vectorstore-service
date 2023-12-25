"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{79123:function(e,t,n){n.d(t,{I:function(){return d}});var s=n(85893),a=n(67294),l=n(55299),o=n(52677),r=n(84283),c=n(19954);let i=a.memo(o.Z);function d(e){let{title:t,text:n,type:o="Documentation",extract:d,docLink:u}=e,m=(0,a.useRef)(null);(0,a.useEffect)(()=>{if(m.current){let e=m.current;e.scrollIntoView({behavior:"smooth",block:"center"})}},[n,d]);let h=a.memo(function(e){let{text:t}=e;return(0,s.jsx)(l.D,{components:{code(e){let{node:t,inline:n,className:a,children:l,...o}=e,c=/language-(\w+)/.exec(a||"");return!n&&c?(0,s.jsx)(i,{...o,style:r.Yn,language:c[1],PreTag:"div",children:String(l).replace(/\n$/,"")}):(0,s.jsx)("code",{...o,className:a,children:l})}},children:t})});if(!t)return(0,s.jsx)("div",{className:""});let p=d?n.indexOf(d):-1,x=d?p+d.length:-1;return(0,s.jsxs)("div",{className:"border-2 border-gray-900 shadow-lg rounded-xl bg-gray-100 p-2 animate-pop-in overflow-y-auto max-h-[498px] document-container",children:[(0,s.jsx)("div",{className:"".concat(c.DOC_TYPE_COLORS[o]," text-black p-4 rounded-t-xl w-full sticky top-0 z-10 shadow-md"),children:(0,s.jsx)("a",{href:u||"#",target:"_blank",rel:"noopener noreferrer",children:t||"Placeholder Title"})}),(0,s.jsxs)("div",{className:"p-4 my-markdown-styles text-sm font-mono",children:[-1!==p&&(0,s.jsx)(h,{text:n.slice(0,p)}),d&&(0,s.jsx)("div",{ref:m,className:"".concat(c.DOC_TYPE_COLORS[o]," rounded-lg p-3 shadow-lg extract text-sm"),children:(0,s.jsx)(h,{text:n.slice(p,x)})}),-1!==p?(0,s.jsx)("div",{className:"pt-3",children:(0,s.jsx)(h,{text:n.slice(x)})}):(0,s.jsx)(h,{text:n})]})]})}},19954:function(e,t,n){n.r(t),n.d(t,{DOC_TYPE_COLORS:function(){return f},DOC_TYPE_COLOR_HOVER:function(){return g},apiHost:function(){return x},default:function(){return y},getApiHost:function(){return p}});var s=n(85893),a=n(67294),l=n(5459),o=n.n(l),r=n(52677),c=n(84283),i=n(92105),d=n.n(i);function u(e){let{onUserMessageSubmit:t,isFetching:n}=e,[l,i]=(0,a.useState)([]),u=(0,a.useRef)(null),m=e=>{let t=[],n=0;return e.replace(/```(.*?)\n([\s\S]*?)```/g,(s,a,l,o)=>(o>n&&t.push({type:"text",content:e.slice(n,o)}),t.push({type:"code",language:a.trim(),content:l.trim()}),n=o+s.length,s)),n<e.length&&t.push({type:"text",content:e.slice(n)}),t};return(0,a.useEffect)(()=>{if(t.length&&(0===l.length||t[t.length-1].content!==l[l.length-1].content)){let e=t[t.length-1];i(t=>[...t,e])}},[t]),(0,a.useEffect)(()=>{if(u.current){let e=l[l.length-1];if("system"===e.type){let t=25*e.content.length;setTimeout(()=>{var e;null===(e=u.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},t)}else u.current.scrollIntoView({behavior:"smooth"})}},[l]),(0,s.jsxs)("div",{className:"bg-gray-100 p-4 overflow-y-auto h-[350px]",children:[l.map((e,t)=>(0,s.jsx)("div",{ref:t===l.length-1?u:null,className:"mb-4 ".concat("user"===e.type?"text-right":""),children:(0,s.jsx)("span",{className:"inline-block p-3 rounded-xl animate-press-in shadow-md font-mono text-sm ".concat("user"===e.type?"bg-yellow-200":"bg-white"),children:"system"===e.type?m(e.content).map((e,t)=>"text"===e.type?(0,s.jsx)(o(),{onInit:t=>{t.typeString(e.content||"N/A").start()},options:{delay:15}},t):"code"===e.type?(0,s.jsx)(r.Z,{language:e.language,style:c.Yn,className:"rounded p-2",children:e.content},t):null):e.content})},t)),n&&(0,s.jsx)("div",{className:"flex items-center pl-4 mb-4",children:(0,s.jsx)(d(),{color:"#292929",loading:!0,size:10,speedMultiplier:.75})})]})}var m=n(79123),h=n(17857);let p=()=>"",x=p(),f={Documentation:"bg-green-300",Blog:"bg-yellow-200"},g={Documentation:"hover:bg-green-400",Blog:"hover:bg-yellow-300"};function y(){let e;let[t,n]=(0,a.useState)([]),[l,o]=(0,a.useState)(""),[r,c]=(0,a.useState)(""),[i,d]=(0,a.useState)(""),[p,y]=(0,a.useState)("#"),[j,b]=(0,a.useState)([]),[v,w]=(0,a.useState)("Offline"),[N,_]=(0,a.useState)(null),[O,S]=(0,a.useState)([]),[C,T]=(0,a.useState)(!1),k=(0,a.useCallback)(async()=>{try{let e=await fetch(x+"/api/health");200===e.status?w("Online"):w("Offline")}catch(e){w("Offline")}},[]);(0,a.useEffect)(()=>{k()},[k]);let E=async(e,t)=>{null==e||e.preventDefault();let s=t||l;if(s.trim()){S(e=>[...e,{type:"user",content:s}]),n([]),o(""),T(!0);try{k();let e=await fetch(x+"/api/query",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:s})}),t=await e.json();k(),b([]),b(t.documents),n([]),t.system&&S(e=>[...e,{type:"system",content:t.system}])}catch(e){k(),console.error("Failed to fetch from API:",e)}finally{T(!1)}}};(0,a.useEffect)(()=>{j&&j.length>0&&_(j[0])},[j]),(0,a.useEffect)(()=>{let e=async()=>{if(N&&N.doc_uuid)try{let e=await fetch(x+"/api/get_document",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({document_id:N.doc_uuid})}),t=await e.json();c(t.document.properties.doc_name),d(t.document.properties.text),y(t.document.properties.doc_link)}catch(e){console.error("Failed to fetch document:",e)}};e()},[N]);let P=async e=>{try{let t=await fetch(x+"/api/suggestions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:e})}),s=await t.json();n(s.suggestions)}catch(e){console.error("Failed to fetch suggestions:",e)}},D=(e=null,function(){for(var t=arguments.length,n=Array(t),s=0;s<t;s++)n[s]=arguments[s];null!==e&&clearTimeout(e),e=window.setTimeout(()=>{null!==e&&clearTimeout(e),P(...n)},200)}),R=async e=>{o(e),E(void 0,e)},L=e=>e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),I=(e,t)=>{let n=L(t),a=e.split(RegExp("(".concat(n,")"),"gi"));return(0,s.jsx)("span",{children:a.map((e,n)=>(0,s.jsx)("span",{className:e.toLowerCase()===t.toLowerCase()?"font-bold text-sm":"",children:e},n))})};return(0,s.jsx)("main",{className:"flex min-h-screen flex-col items-center justify-between p-10 text-gray-900",children:(0,s.jsxs)("div",{className:"flex flex-col w-full items-start",children:[(0,s.jsx)("div",{className:"mb-2",children:(0,s.jsxs)("div",{className:"flex justify-between items-center w-full",children:[" ",(0,s.jsx)("div",{className:"flex-none",children:(0,s.jsx)("div",{className:"bg-yellow-200 border-2 border-gray-800 rounded-lg shadow-lg animate-pop-in hover-container mr-4 ",children:(0,s.jsx)("img",{src:"".concat("static/","verba.png"),alt:"Verba Logo",className:" w-24 h-24 shadow-lg"})})}),(0,s.jsxs)("div",{className:"flex-1",children:[(0,s.jsx)("h1",{className:" text-6xl font-bold",children:"Verba"}),(0,s.jsxs)("div",{className:"flex text-lg",children:[(0,s.jsx)("span",{className:"bg-opacity-0 rounded px-2 py-1 hover-container animate-pop-in",children:"The"}),(0,s.jsx)("span",{className:"bg-opacity-0 rounded font-bold px-2 py-1 hover-container animate-pop-in-late",children:"Golden"}),(0,s.jsx)("span",{className:"bg-yellow-200 rounded px-2 py-1 hover-container animate-pop-more-late",children:"RAGtriever"})]})]})]})}),(0,s.jsx)("div",{className:"p-1 flex overflow-x-auto justify-center h-32 w-full mb-2",children:j.map((e,t)=>(0,s.jsx)("button",{onClick:()=>_(e),children:(0,s.jsxs)("div",{className:"bg-none\n                  } rounded-lg text-xs hover-container mx-1 h-28 w-48 p-1 animate-pop-in",children:[(0,s.jsx)("div",{className:"text-xs mb-1 ".concat(N===e?"":"fade-in-out"," ").concat(f[e.doc_type]," p-2 rounded-lg w-full"),children:e.doc_type}),(0,s.jsx)("div",{className:"flex space-x-2 mt-1",children:(0,s.jsxs)("div",{className:"flex items-center rounded-md bg-gray-200 p-2 truncate h-16 border-2 shadow-md hover:border-white border-black ".concat(N===e?f[e.doc_type]:g[e.doc_type]),children:[(0,s.jsxs)("div",{className:"text-sm font-bold ".concat(f[e.doc_type]," p-2 rounded-lg"),children:[" ",(0,s.jsx)(h.ZP,{end:Math.round(1e4*e._additional.score)})]}),(0,s.jsx)("p",{className:"font-bold ml-1",children:e.doc_name})]})})]})},e.doc_name+t))}),(0,s.jsxs)("div",{className:"flex w-full space-x-4",children:[(0,s.jsxs)("div",{className:"w-1/2 p-2 border-2 shadow-lg h-2/3 border-gray-900 rounded-xl animate-pop-in",children:[(0,s.jsxs)("div",{className:"rounded-t-xl bg-yellow-200 p-4 flex justify-between items-center",children:["Verba Chat",(0,s.jsxs)("div",{className:"text-xs text-white font-mono flex justify-center",children:[(0,s.jsxs)("span",{className:"rounded-indicator hover-container text-white p-2 ".concat("Online"===v?"bg-green-500":"bg-red-500"),children:["Demo ",v]}),(0,s.jsx)("span",{className:"rounded-indicator text-white bg-green-500 ml-2 p-2 hover-container",children:"Powered by Weaviate ❤️"})]})]}),(0,s.jsx)(u,{onUserMessageSubmit:O,isFetching:C}),(0,s.jsx)("form",{className:"rounded-b-xl bg-gray-800 p-4 relative",onSubmit:E,children:(0,s.jsx)("input",{type:"text",value:l,onChange:e=>{o(e.target.value),D(e.target.value)},placeholder:"What is a vector database?",className:"w-full p-2 rounded-md bg-white text-gray-900 placeholder-gray-400"})}),(0,s.jsx)("div",{className:"absolute mt-2 p-2 z-10 w-1/2 left-5 text-center justify-center",children:t.map((e,t)=>(0,s.jsx)("div",{className:"p-2 hover:bg-green-300 bg-gray-200 cursor-pointer shadow-md rounded-md text-xs animate-press-in mt-2 hover-container",onClick:()=>R(e),children:I(e,l)},t+e))})]}),(0,s.jsx)("div",{className:"w-1/2 space-y-4",children:(0,s.jsx)(m.I,{title:r,text:i,extract:null==N?void 0:N.text,docLink:p,type:null==N?void 0:N.doc_type})})]})]})})}}}]);