import{_ as u}from"./AuthenticatedLayout-21265a77.js";import{p as m,o as r,c as _,w as d,b as e,a as n,d as c,u as l,j as g,f as o,k as x,F as y,g as h,t as a}from"./app-de6af253.js";import{_ as f}from"./Pagination-49e8385b.js";import"./ApplicationLogo-a6733997.js";import"./_plugin-vue_export-helper-c27b6911.js";const b={class:"flex justify-between"},k=e("h2",{class:"font-semibold text-xl text-gray-800 leading-tight"},"Categories",-1),w={class:"py-12"},v={class:"max-w-7xl mx-auto sm:px-6 lg:px-8 relative overflow-x-auto"},N={class:"min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700"},$={class:"bg-gray-100 dark:bg-gray-700"},j=e("th",{scope:"col",class:"p-4"},[e("div",{class:"flex items-center"},[e("input",{id:"checkbox-all",type:"checkbox",class:"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),e("label",{for:"checkbox-all",class:"sr-only"},"checkbox")])],-1),B=["innerHTML"],C={class:"bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"},E=e("td",{class:"p-4 w-4"},[e("div",{class:"flex items-center"},[e("input",{id:"checkbox-table-1",type:"checkbox",class:"w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"}),e("label",{for:"checkbox-table-1",class:"sr-only"},"checkbox")])],-1),I={class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"},T={class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"},V={class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"},H={class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"},L={class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"},S={class:"py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white"},A={class:"py-4 px-6 text-sm font-medium text-right whitespace-nowrap"},F={key:0},M=e("td",{colspan:"7",class:"py-4 px-6 text-sm font-medium whitespace-nowrap text-center"},"No data available... ",-1),q=[M],D={class:"flex justify-center"},Q={__name:"Index",props:{categories:{type:Array},eventId:{type:Number,required:!0}},setup(s){m("dateTime");const p=[{title:"Name",type:null},{title:"Start age",type:null},{title:"End age",type:null},{title:"Entries",type:null},{title:"Weight",type:null},{title:"Gender",type:null}];return(G,W)=>(r(),_(u,null,{header:d(()=>[e("div",b,[k,n(l(g),{href:`/events/${s.eventId}/categories/add`,class:"inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"},{default:d(()=>[c(" Add Category ")]),_:1},8,["href"])])]),default:d(()=>[e("div",w,[e("div",v,[e("table",N,[e("thead",$,[e("tr",null,[j,(r(),o(y,null,x(p,(t,i)=>e("th",{scope:"col",key:i,class:"py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"},[t.type?(r(),o("template",{key:0,innerHTML:t.type},null,8,B)):h("",!0),c(" "+a(t.title),1)])),64))])]),e("tbody",C,[(r(!0),o(y,null,x(s.categories.data,(t,i)=>(r(),o("tr",{class:"hover:bg-gray-100 dark:hover:bg-gray-700",key:i},[E,e("td",I,a(t.name),1),e("td",T,a(t.start_age),1),e("td",V,a(t.end_age),1),e("td",H,a(t.entries),1),e("td",L,a(t.weight),1),e("td",S,a(t.genderString),1),e("td",A,[n(l(g),{href:`/events/${s.eventId}/categories/edit/${t.id}`,class:"text-blue-600 dark:text-blue-500 hover:underline"},{default:d(()=>[c("Edit")]),_:2},1032,["href"])])]))),128)),s.categories.data.length==0?(r(),o("tr",F,q)):h("",!0)])])]),e("div",D,[n(f,{items:s.categories},null,8,["items"])])])]),_:1}))}};export{Q as default};
