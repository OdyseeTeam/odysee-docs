// clientModules are still evaluated server-side, this is a workaround:
if (typeof window !== 'undefined') {
	/*!function(){let e=document.createElement("script"),t=document.head||document.getElementsByTagName("head")[0];e.src="https://cdn.jsdelivr.net/npm/rasa-webchat@1.x.x/lib/index.js",e.async=!0,e.onload=(()=>{window.WebChat.default({customData:{},socketUrl:"http://88.214.58.132:5005"}, null)}),t.insertBefore(e,t.firstChild)}();*/
}
