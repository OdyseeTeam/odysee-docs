"use strict";(self.webpackChunkodysee_docs=self.webpackChunkodysee_docs||[]).push([[2644],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(g,l(l({ref:t},c),{},{components:n})):a.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),o=n(7294),r=n(6010),l=n(2389),i=n(7392),s=n(7094),d=n(2466);const c="tabList__CuJ",u="tabItem_LNqP";function p(e){var t;const{lazy:n,block:l,defaultValue:p,values:m,groupId:g,className:b}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,i.l)(y,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:w}=(0,s.U)(),[x,T]=(0,o.useState)(v),O=[],{blockElementScrollPositionUntilNextRender:_}=(0,d.o5)();if(null!=g){const e=k[g];null!=e&&e!==x&&y.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=O.indexOf(t),a=y[n].value;a!==x&&(_(t),T(a),null!=g&&w(g,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},b)},y.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>O.push(e),onKeyDown:I,onFocus:E,onClick:E},l,{className:(0,r.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,o.cloneElement)(h.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,l.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}},5439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>y,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var a=n(7462),o=(n(7294),n(3905)),r=n(5488),l=n(5162);const i={sidebar_position:1,description:"Wo kann man auf Odysee einen Blogbeitrag erstellen? Hier zeigen wir dir, wo du das Men\xfc findest.",sidebar_custom_props:{faIcon:"fa-circle-play",cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:12,thumbnailLocation:"left",tileColor:"blue"},keywords:["odysee","artikel auf odysee schreiben","wo kann man auf odysee bloggen","wo finde ich die blog funktion auf odysee","wo findet man das upload men\xfc","wo kann ich etwas hochladen","hochladen von inhalten auf odysee","hochladen button auf odysee finden","wo l\xe4dt man was auf odysee hoch"],tags:["Odysee","Inhalte","Hochladen"]},s="Wie kann ich einen Textbeitrag hochladen?",d={unversionedId:"category-uploading/category-textuploads/uploading",id:"category-uploading/category-textuploads/uploading",title:"Wie kann ich einen Textbeitrag hochladen?",description:"Wo kann man auf Odysee einen Blogbeitrag erstellen? Hier zeigen wir dir, wo du das Men\xfc findest.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/category-uploading/category-textuploads/uploading.mdx",sourceDirName:"category-uploading/category-textuploads",slug:"/category-uploading/category-textuploads/uploading",permalink:"/de/category-uploading/category-textuploads/uploading",draft:!1,editUrl:"https://github.com/OdyseeTeam/odysee-docs/edit/main/i18n/de/docusaurus-plugin-content-docs/current/category-uploading/category-textuploads/uploading.mdx",tags:[{label:"Odysee",permalink:"/de/tags/odysee"},{label:"Inhalte",permalink:"/de/tags/inhalte"},{label:"Hochladen",permalink:"/de/tags/hochladen"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Wo kann man auf Odysee einen Blogbeitrag erstellen? Hier zeigen wir dir, wo du das Men\xfc findest.",sidebar_custom_props:{faIcon:"fa-circle-play",cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:12,thumbnailLocation:"left",tileColor:"blue"},keywords:["odysee","artikel auf odysee schreiben","wo kann man auf odysee bloggen","wo finde ich die blog funktion auf odysee","wo findet man das upload men\xfc","wo kann ich etwas hochladen","hochladen von inhalten auf odysee","hochladen button auf odysee finden","wo l\xe4dt man was auf odysee hoch"],tags:["Odysee","Inhalte","Hochladen"]},sidebar:"helphub",previous:{title:"Blogbeitr\xe4ge schreiben",permalink:"/de/category-uploading/category-textuploads/"},next:{title:"Einstellungen und Personalisierung",permalink:"/de/category-uploading/category-textuploads/settings"}},c={},u=[],p=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},m=p("OdyseeButtonRound"),g=p("OdyseeIcon"),b=p("Image"),h={toc:u};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wie-kann-ich-einen-textbeitrag-hochladen"},"Wie kann ich einen Textbeitrag hochladen?"),(0,o.kt)(r.Z,{groupId:"device",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"web",label:"Web",default:!0,mdxType:"TabItem"},"Um einen Textbeitrag hochzuladen, klicke auf das Federsymbol neben der Suchleiste. Wenn du Bilder in deinen Text hinzuf\xfcgen m\xf6chtest, ziehe die Bilddatei einfach in die entsprechende Stelle. ",(0,o.kt)(m,{url:"https://odysee.com/$/post",mdxType:"OdyseeButtonRound"},(0,o.kt)(g,{type:"Post",mdxType:"OdyseeIcon"})),(0,o.kt)(b,{img:"/img/de/locale_blog_link_desktop_dark.png",class:"dark-image",mdxType:"Image"}),(0,o.kt)(b,{img:"/img/de/locale_blog_link_desktop_light.png",class:"light-image",mdxType:"Image"})),(0,o.kt)(l.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},"Auf mobilen Ger\xe4ten befindet sich die Schaltfl\xe4che ",(0,o.kt)("a",{href:"https://odysee.com/$/post"},(0,o.kt)(g,{type:"Post",mdxType:"OdyseeIcon"})," Blogbeitrag")," am unteren Rand der erweiterten Seitenleiste.",(0,o.kt)(b,{img:"/img/de/locale_blog_link_mobile_dark.png",class:"dark-image",mdxType:"Image"}),(0,o.kt)(b,{img:"/img/de/locale_blog_link_mobile_light.png",class:"light-image",mdxType:"Image"}))))}y.isMDXComponent=!0}}]);