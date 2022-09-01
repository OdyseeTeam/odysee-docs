// clientModules are still evaluated server-side, this is a workaround:
if (typeof window !== 'undefined') {
!function(){let e=document.createElement("script"),t=document.head||document.getElementsByTagName("head")[0];e.src="https://cdn.jsdelivr.net/npm/rasa-webchat@1.x.x/lib/index.js",e.async=!0,e.onload=(()=>{window.WebChat.default({customData:{},socketUrl:"http://88.214.58.132:5005"}, null)}),t.insertBefore(e,t.firstChild)}();
    /*window.__be = window.__be || {};
    window.__be.id = "630f6c1176ebdd00076d70a6";
    (function() {
        var be = document.createElement('script'); be.type = 'text/javascript'; be.async = true;
        be.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'cdn.chatbot.com/widget/plugin.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(be, s);
    })();*/
}
