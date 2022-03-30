import{o as n,c as e,a as o,d as t,j as s,w as i,t as r,x as c,v as a,J as l,F as u,e as d,r as k}from"./vendor.423f565e.js";import{u as p,I as m,a as w,b as h,c as g,d as v,e as f,f as x,g as b,h as M,m as j,_ as y}from"./app.79847e97.js";const C={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},_=o("g",{fill:"none"},[o("rect",{x:"2",y:"4",width:"20",height:"18",rx:"4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),o("path",{d:"M8 2v4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),o("path",{d:"M16 2v4",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),o("path",{d:"M2 10h20",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var H={render:function(o,t){return n(),e("svg",C,[_])}};const L={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},A=o("g",{fill:"none"},[o("circle",{cx:"12",cy:"10",r:"3",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}),o("path",{d:"M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var B={render:function(o,t){return n(),e("svg",L,[A])}};const R=[{name:"blogger",icon:m,link:"https://blog.coscup.org/"},{name:"facebook",icon:w,link:"https://www.facebook.com/coscup/"},{name:"flickr",icon:h,link:"https://www.flickr.com/photos/coscup/"},{name:"plurk",icon:g,link:"https://www.plurk.com/coscup"},{name:"twitter",icon:v,link:"https://twitter.com/coscup"},{name:"youtube",icon:f,link:"https://www.youtube.com/user/thecoscup"},{name:"telegram",icon:x,link:"https://t.me/coscupchat"},{name:"channel",icon:b,link:"https://t.me/coscup"},{name:"medium",icon:M,link:"https://coscup.medium.com"}];var T=t({name:"Home",setup(){const{t:n,locale:e}=p(),o=s({name:"about",title:"",content:""});return i(e,(async()=>{o.value={name:"about",title:n("landing.about.title"),content:j(n("landing.about.content"))}}),{immediate:!0}),{t:n,section:o,communityMedia:R}}});const Y={id:"landing",class:"page-container"},$={class:"info-block"},z=o("div",{class:"logo-container"},null,-1),F={class:"info"},I={class:"row"},J={class:"icon"},q=o("span",null,"2022/07/30 ~ 2022/07/31",-1),D={class:"row"},E={class:"icon"},G={class:"links"},K={href:"https://volunteer.coscup.org/",target:"_blank",rel:"noopener noreferrer"},N={class:"media-links"},O=o("img",{class:"prefix-icon",src:y},null,-1),P={class:"section-title"};T.render=function(t,s,i,p,m,w){const h=H,g=B,v=r("router-link");return n(),e("main",Y,[o("section",$,[z,o("div",F,[o("div",I,[o("div",J,[o(h)]),q]),o("div",D,[o("div",E,[o(g)]),o("span",null,c(t.t("landing.info.location")),1)])])]),o("section",G,[o("a",K,c(t.t("landing.links.volunteer")),1),o(v,{to:"sponsorship"},{default:a((()=>[l(c(t.t("landing.links.sponsor")),1)])),_:1})]),o("section",N,[(n(!0),e(u,null,d(t.communityMedia,(o=>(n(),e("a",{href:o.link,key:`media-${o.name}`,class:"media-link",target:"_blank",rel:"noopener"},[(n(),e(k(o.icon)))],8,["href"])))),128))]),(n(),e("section",{key:`section-${t.section.name}`,class:"section-block"},[O,o("h2",P,c(t.section.title),1),o("article",{class:"section-content notice markdown",innerHTML:t.section.content},null,8,["innerHTML"])]))])};export default T;
