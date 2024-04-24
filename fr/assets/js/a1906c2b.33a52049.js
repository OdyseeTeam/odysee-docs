"use strict";(self.webpackChunkodysee_docs=self.webpackChunkodysee_docs||[]).push([[4497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=s,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,a=new Array(i);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7462),s=(n(7294),n(3905));const i={sidebar_position:2,description:"Comment personnaliser votre t\xe9l\xe9chargement de fichiers sur Odysee.",sidebar_custom_props:{faIcon:"fa-circle-play",cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:4,thumbnailLocation:"top",tileColor:"blue"},keywords:["odysee","personnaliser les t\xe9l\xe9chargements","param\xe8tres vid\xe9o","comment utiliser une vignette sur odysee","utiliser des balises sur odysee","comment t\xe9l\xe9charger une vignette","comment d\xe9finir des balises sur odysee","comment d\xe9finir un titre sur odysee"],tags:["Odysee","Content"]},a="Param\xe8tres et personnalisation",o={unversionedId:"category-uploading/category-fileuploads/settings",id:"category-uploading/category-fileuploads/settings",title:"Param\xe8tres et personnalisation",description:"Comment personnaliser votre t\xe9l\xe9chargement de fichiers sur Odysee.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/category-uploading/category-fileuploads/settings.mdx",sourceDirName:"category-uploading/category-fileuploads",slug:"/category-uploading/category-fileuploads/settings",permalink:"/fr/category-uploading/category-fileuploads/settings",draft:!1,editUrl:"https://github.com/OdyseeTeam/odysee-docs/edit/main/i18n/fr/docusaurus-plugin-content-docs/current/category-uploading/category-fileuploads/settings.mdx",tags:[{label:"Odysee",permalink:"/fr/tags/odysee"},{label:"Content",permalink:"/fr/tags/content"}],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Comment personnaliser votre t\xe9l\xe9chargement de fichiers sur Odysee.",sidebar_custom_props:{faIcon:"fa-circle-play",cardThumbnail:"/img/g_1200x600_Transparent_Placeholder.png",cardSize:4,thumbnailLocation:"top",tileColor:"blue"},keywords:["odysee","personnaliser les t\xe9l\xe9chargements","param\xe8tres vid\xe9o","comment utiliser une vignette sur odysee","utiliser des balises sur odysee","comment t\xe9l\xe9charger une vignette","comment d\xe9finir des balises sur odysee","comment d\xe9finir un titre sur odysee"],tags:["Odysee","Content"]},sidebar:"helphub",previous:{title:"T\xe9l\xe9chargement et s\xe9lection de fichiers",permalink:"/fr/category-uploading/category-fileuploads/fileselection"},next:{title:"Encodage des vid\xe9os",permalink:"/fr/category-uploading/category-fileuploads/encoding"}},l={},u=[{value:"Titre, URL et description",id:"titre-url-et-description",level:2},{value:"Miniatures",id:"miniatures",level:2},{value:"Visibilit\xe9",id:"visibilit\xe9",level:2},{value:"\xc9tiquettes",id:"\xe9tiquettes",level:2},{value:"Control Tags",id:"control-tags",level:2},{value:"D\xe9sactivez les r\xe9actions sur les vid\xe9os et les commentaires.",id:"d\xe9sactivez-les-r\xe9actions-sur-les-vid\xe9os-et-les-commentaires",level:3},{value:"Options suppl\xe9mentaires",id:"options-suppl\xe9mentaires",level:2},{value:"D\xe9p\xf4t de Cr\xe9dit",id:"d\xe9p\xf4t-de-cr\xe9dit",level:2},{value:"S\xe9lectionnez la cha\xeene",id:"s\xe9lectionnez-la-cha\xeene",level:2}],c={toc:u};function p(e){let{components:t,...i}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"param\xe8tres-et-personnalisation"},"Param\xe8tres et personnalisation"),(0,s.kt)("h2",{id:"titre-url-et-description"},"Titre, URL et description"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(7945).Z,width:"1242",height:"530"})),(0,s.kt)("p",null,"Une fois votre fichier s\xe9lectionn\xe9, le premier champ obligatoire est ",(0,s.kt)("strong",{parentName:"p"},"Titre"),". Nous recommandons des titres qui informent avec pr\xe9cision les utilisateurs du contenu, mais qui sont int\xe9ressants et efficaces pour inciter les utilisateurs \xe0 cliquer."),(0,s.kt)("p",null,"Vient ensuite l'",(0,s.kt)("strong",{parentName:"p"},"URL")," du fichier. Ceci est distinct du titre. Le titre est ce qui s'affiche sur le t\xe9l\xe9chargement lui-m\xeame, c'est simplement ce qui appara\xeet dans l'URL de la vid\xe9o."),(0,s.kt)("p",null,"Par exemple, notre r\xe9sum\xe9 des fonctionnalit\xe9s de f\xe9vrier sur la cha\xeene Odysee a l'URL ",(0,s.kt)("em",{parentName:"p"},"februaryroundup")," qui appara\xeet dans l'URL, mais le titre r\xe9el de la publication qui s'affiche aux utilisateurs est \xab Nouvelle ann\xe9e, nouveau nous : r\xe9sum\xe9 des fonctionnalit\xe9s Odysee \xbb."),(0,s.kt)("p",null,"Apr\xe8s l'URL, nous demandons une ",(0,s.kt)("strong",{parentName:"p"},"Description"),". Le spam de mots-cl\xe9s dans la description n'a aucun effet sur la recherche, nous vous recommandons donc d'utiliser simplement ce champ pour expliquer votre vid\xe9o en aussi peu ou autant de mots que n\xe9cessaire."),(0,s.kt)("h2",{id:"miniatures"},"Miniatures"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(1).Z,width:"1196",height:"351"})),(0,s.kt)("p",null,"Apr\xe8s la description, il vous sera demand\xe9 d'ajouter une ",(0,s.kt)("strong",{parentName:"p"},"Vignette"),"."),(0,s.kt)("p",null,"Pour les miniatures, nous recommandons 1280 x 720 pixels. Vous pouvez s\xe9lectionner un fichier sur votre ordinateur ou coller un lien d'image. Lors du t\xe9l\xe9chargement de vid\xe9os, vous pouvez s\xe9lectionner une image miniature de votre vid\xe9o \xe0 l'aide de notre outil de t\xe9l\xe9chargement de miniatures."),(0,s.kt)("h2",{id:"visibilit\xe9"},"Visibilit\xe9"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://thumbs.odycdn.com/f739a1fc812fdbac6911b18807bf90ce.webp",alt:null})),(0,s.kt)("p",null,"Ensuite, vous pouvez d\xe9finir la visibilit\xe9 de votre contenu."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Public")," signifie que tout le monde peut trouver et consulter votre t\xe9l\xe9chargement."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Non r\xe9pertori\xe9")," signifie que n'importe qui peut voir votre t\xe9l\xe9chargement s'il dispose du lien."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Programm\xe9")," signifie que votre contenu est actuellement masqu\xe9, mais qu'il sera rendu public \xe0 la date et \xe0 l'heure d\xe9finies."),(0,s.kt)("h2",{id:"\xe9tiquettes"},"\xc9tiquettes"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(8261).Z,width:"1223",height:"481"})),(0,s.kt)("p",null,"Ensuite, il vous sera demand\xe9 d'ajouter des ",(0,s.kt)("strong",{parentName:"p"},"\xc9tiquettes"),"."),(0,s.kt)("p",null,"Les balises am\xe9liorent la d\xe9couvrabilit\xe9 du contenu. Nous recommandons des onglets plus simples relatifs au genre de votre contenu, par ex. Art, jeux, com\xe9die, etc."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Si votre t\xe9l\xe9chargement contient du contenu pornographique NSFW, vous devez le marquer avec \xab\xa0Mature\xa0\xbb.")),(0,s.kt)("p",null,"Pour le moment, chaque vid\xe9o (et cha\xeene) ne peut comporter que cinq balises maximum."),(0,s.kt)("h2",{id:"control-tags"},"Control Tags"),(0,s.kt)("h3",{id:"d\xe9sactivez-les-r\xe9actions-sur-les-vid\xe9os-et-les-commentaires"},"D\xe9sactivez les r\xe9actions sur les vid\xe9os et les commentaires."),(0,s.kt)("p",null,"Les cr\xe9ateurs et les propri\xe9taires de cha\xeenes peuvent d\xe9sactiver les r\xe9actions (feu et slime) \xe0 partir du formulaire de publication dans les options ",(0,s.kt)("strong",{parentName:"p"}," Balises de contr\xf4le "),". Vous pouvez d\xe9sactiver les r\xe9actions pour le ",(0,s.kt)("strong",{parentName:"p"},"contenu"),", les ",(0,s.kt)("strong",{parentName:"p"},"commentaires")," ou les ",(0,s.kt)("strong",{parentName:"p"},"publications en g\xe9n\xe9ral"),"."),(0,s.kt)("p",null,"Cette fonctionnalit\xe9 est facultative et n'est pas activ\xe9e par d\xe9faut dans le contenu. Les propri\xe9taires de cha\xeene doivent activer les contr\xf4les de balises \xe0 partir du formulaire de publication, de la modification du contenu ou des param\xe8tres de la cha\xeene."),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://thumbs.odycdn.com/b5b44b315c4e3edb5395317c520b321a.webp",alt:null})),(0,s.kt)("h2",{id:"options-suppl\xe9mentaires"},"Options suppl\xe9mentaires"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(6639).Z,width:"1598",height:"800"})),(0,s.kt)("p",null,"Sous cet onglet, vous disposez de quelques options."),(0,s.kt)("p",null,"Le premier est la ",(0,s.kt)("strong",{parentName:"p"},"Date de sortie"),". Pour le moment, vous ne pouvez pas d\xe9finir de vid\xe9os pour des dates futures, mais vous pouvez les d\xe9finir pour des dates pass\xe9es. Ceci est diff\xe9rent des vid\xe9os programm\xe9es. Cela signifie que vous ne pouvez pas modifier la date de publication d'une vid\xe9o pour des dates futures, uniquement pour la date de publication de la vid\xe9o."),(0,s.kt)("p",null,"Ceci est utile lors du t\xe9l\xe9chargement de vid\xe9os plus anciennes. Vous pouvez les d\xe9finir comme date correcte et ils s'afficheront dans le bon ordre chronologique sur votre cha\xeene."),(0,s.kt)("p",null,"L'option suivante est ",(0,s.kt)("strong",{parentName:"p"},"Langue"),". La langue s\xe9lectionn\xe9e est par d\xe9faut."),(0,s.kt)("p",null,"La troisi\xe8me option est ",(0,s.kt)("strong",{parentName:"p"},"Licence"),". Ceci sert \xe0 sp\xe9cifier la licence de droit d'auteur."),(0,s.kt)("p",null,'La valeur par d\xe9faut est "Aucun". Si aucune licence n\'est s\xe9lectionn\xe9e, le fichier sera prot\xe9g\xe9 par copyright par d\xe9faut. Les autres licences sont :'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Les licences ",(0,s.kt)("strong",{parentName:"li"},"Domaine public")," permettent une r\xe9utilisation sans restrictions"),(0,s.kt)("li",{parentName:"ul"},"Les licences ",(0,s.kt)("strong",{parentName:"li"},"Creative Commons")," permettent la r\xe9utilisation avec attribution au cr\xe9ateur original"),(0,s.kt)("li",{parentName:"ul"},"Vous pouvez \xe9galement d\xe9finir la licence simplement comme ",(0,s.kt)("strong",{parentName:"li"},"Copyright"))),(0,s.kt)("p",null,"Vient ensuite ",(0,s.kt)("strong",{parentName:"p"},"Prix"),". Il s\u2019agirait du montant que les t\xe9l\xe9spectateurs devraient payer pour visionner le contenu."),(0,s.kt)("p",null,"Vous pouvez d\xe9finir ce montant en LBC ou USD. Dans les deux cas, les t\xe9l\xe9spectateurs paieraient en LBC. Si le prix est fix\xe9 en LBC, ce serait le montant de LBC pay\xe9. Si le prix est fix\xe9 en USD, les t\xe9l\xe9spectateurs paieront l'\xe9quivalent LBC."),(0,s.kt)("h2",{id:"d\xe9p\xf4t-de-cr\xe9dit"},"D\xe9p\xf4t de Cr\xe9dit"),(0,s.kt)("p",null,"Le dernier param\xe8tre sous Options suppl\xe9mentaires est ",(0,s.kt)("strong",{parentName:"p"},"D\xe9p\xf4t"),"."),(0,s.kt)("p",null,"La valeur par d\xe9faut est 0,01 LBC. Il peut \xeatre abaiss\xe9 jusqu'\xe0 0,0001 LBC. Si votre fichier a le montant le plus \xe9lev\xe9 de tous les t\xe9l\xe9chargements avec l'URL s\xe9lectionn\xe9e, il appara\xeetra en premier lors de la recherche de cette URL."),(0,s.kt)("p",null,"Par exemple, si deux fichiers Odysee ont l'URL \xab cat \xbb, le fichier avec l'enjeu LBC le plus \xe9lev\xe9 appara\xeetra en premier dans les r\xe9sultats de recherche et sera li\xe9 \xe0 partir de odysee.com/cat."),(0,s.kt)("p",null,"Tout cela est li\xe9 \xe0 l\u2019aspect blockchain d\u2019Odysee. Nous avons une section d\xe9taill\xe9e retra\xe7ant les tenants et les aboutissants de ce syst\xe8me ",(0,s.kt)("a",{parentName:"p",href:"https://help.odysee.tv/category-blockchain/category-staking/naming"},"ici"),"."),(0,s.kt)("p",null,"Il est important de noter qu\u2019une fois que vous d\xe9posez du LBC, celui-ci ne dispara\xeet pas pour toujours. Il sera toujours dans votre portefeuille et sous votre contr\xf4le, mais il sera li\xe9 au canal sur lequel vous effectuez le d\xe9p\xf4t jusqu'\xe0 ce que le montant du d\xe9p\xf4t soit r\xe9duit ou que le canal soit supprim\xe9. Pour plus d'informations \xe0 ce sujet, consultez notre rubrique sur le wallet et les transactions ",(0,s.kt)("a",{parentName:"p",href:"https://help.odysee.tv/category-wallet/"},"ici"),"."),(0,s.kt)("h2",{id:"s\xe9lectionnez-la-cha\xeene"},"S\xe9lectionnez la cha\xeene"),(0,s.kt)("p",null,(0,s.kt)("img",{src:n(8291).Z,width:"850",height:"177"})),(0,s.kt)("p",null,"La derni\xe8re option est votre ",(0,s.kt)("strong",{parentName:"p"},"S\xe9lection de cha\xeene"),". Si vous disposez de plusieurs cha\xeenes, c'est ici que vous s\xe9lectionnerez la cha\xeene vers laquelle le t\xe9l\xe9chargement sera effectu\xe9."),(0,s.kt)("p",null,"Si tous les param\xe8tres semblent corrects, cliquez sur ",(0,s.kt)("strong",{parentName:"p"},"T\xe9l\xe9charger")," et ",(0,s.kt)("strong",{parentName:"p"},"Confirmer"),"."),(0,s.kt)("p",null,"La fin du t\xe9l\xe9chargement de votre fichier et sa confirmation peuvent prendre quelques minutes, mais c'est la fin du processus de t\xe9l\xe9chargement."),(0,s.kt)("admonition",{title:"Note",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Si vous avez mis en ligne une vid\xe9o ou un \xe9l\xe9ment de contenu et que vous n'\xeates pas sur la bonne cha\xeene, vous pouvez modifier la publication et changer la vid\xe9o de la cha\xeene \xe0 partir de l'onglet de s\xe9lection de la cha\xeene.")))}p.isMDXComponent=!0},7945:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/category-uploading4-6b53428010d2cd04c1f041534ae74987.png"},1:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/category-uploading5-a64d531acf317801436d1175fc835db2.png"},8261:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/category-uploading6-c1cee2427f40652f362e736d714c1c7d.png"},6639:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/category-uploading7-a0e699a500b49cfb6d8315e5ef907c32.png"},8291:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/category-uploading8-62a65e3c3978c57a3e434ccfa1522e63.png"}}]);