import{o as a,f as t,b as e,a as s,w as l,d as o,u as n,j as i,F as h,k as x,t as m,n as u}from"./app-de6af253.js";const g={class:"flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700","aria-label":"Breadcrumb"},_={class:"inline-flex items-center space-x-1 md:space-x-3"},v={class:"inline-flex items-center"},f=e("svg",{"aria-hidden":"true",class:"w-4 h-4 mr-2",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{d:"M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"})],-1),p={class:"flex items-center"},w=e("svg",{"aria-hidden":"true",class:"w-6 h-6 text-gray-400",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},[e("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),B={__name:"Breadcrumb",props:{breadCrumbData:Array},setup(d){return(b,y)=>(a(),t("nav",g,[e("ol",_,[e("li",v,[s(n(i),{href:"/","preserve-scroll":"",class:"inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"},{default:l(()=>[f,o(" Home ")]),_:1})]),(a(!0),t(h,null,x(d.breadCrumbData,(r,c)=>(a(),t("li",{key:c},[e("div",p,[w,s(n(i),{"preserve-scroll":"",href:r.link,class:u([{"pointer-events-none":!r.link},"ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"])},{default:l(()=>[o(m(r.title),1)]),_:2},1032,["href","class"])])]))),128))])]))}};export{B as _};