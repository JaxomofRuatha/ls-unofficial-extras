(window.webpackJsonp=window.webpackJsonp||[]).push([[23,24],{103:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,o,r]=t;if(n&&r){n=parseInt(n),r=parseInt(r);const e=n<r?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(r+=e);for(let t=n;t!==r;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},105:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=a(99),l=a(3),c=a(97),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},i={Prism:a(23).a,theme:s};function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var u=/\r\n|\r|\n/,h=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},y=function(e,t){var a=e.plain,n=Object.create(null),o=e.styles.reduce((function(e,a){var n=a.languages,o=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=p({},e[t],o);e[t]=a})),e}),n);return o.root=a,o.plain=p({},a,{backgroundColor:null}),o};function g(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var b=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),d(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?y(e.theme,e.language):void 0;return t.themeDict=a})),d(this,"getLineProps",(function(e){var a=e.key,n=e.className,o=e.style,r=p({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(r.style=l.plain),void 0!==o&&(r.style=void 0!==r.style?p({},r.style,o):o),void 0!==a&&(r.key=a),n&&(r.className+=" "+n),r})),d(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,o=a.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===o&&!n)return r[a[0]];var l=n?{display:"inline-block"}:{},c=a.map((function(e){return r[e]}));return Object.assign.apply(Object,[l].concat(c))}})),d(this,"getTokenProps",(function(e){var a=e.key,n=e.className,o=e.style,r=e.token,l=p({},g(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(l.style=void 0!==l.style?p({},l.style,o):o),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),d(this,"tokenize",(function(e,t,a,n){var o={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",o);var r=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),r}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,o=e.children,r=this.getThemeDict(this.props),l=t.languages[a];return o({tokens:function(e){for(var t=[[]],a=[e],n=[0],o=[e.length],r=0,l=0,c=[],s=[c];l>-1;){for(;(r=n[l]++)<o[l];){var i=void 0,d=t[l],p=a[l][r];if("string"==typeof p?(d=l>0?d:["plain"],i=p):(d=m(d,p.type),p.alias&&(d=m(d,p.alias)),i=p.content),"string"==typeof i){var y=i.split(u),g=y.length;c.push({types:d,content:y[0]});for(var b=1;b<g;b++)h(c),s.push(c=[]),c.push({types:d,content:y[b]})}else l++,t.push(d),a.push(i),n.push(0),o.push(i.length)}l--,t.pop(),a.pop(),n.pop(),o.pop()}return h(c),s}(void 0!==l?this.tokenize(t,n,l,a):[n]),className:"prism-code language-"+a,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component);var f=a(103),v=a.n(f),k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=a(106),E=a(96);var O=()=>{const{prism:e}=Object(E.useThemeConfig)(),{isDarkTheme:t}=Object(j.a)(),a=e.theme||k,n=e.darkTheme||a;return t?n:a},N=a(98),T=a(56),C=a.n(T);const x=/{([\d,-]+)}/,w=(e=["js","jsBlock","jsx","python","html"])=>{const t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((e=>`(?:${t[e].start}\\s*(${a})\\s*${t[e].end})`)).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)};function S({children:e,className:t,metastring:a,title:r}){const{prism:s}=Object(E.useThemeConfig)(),[d,p]=Object(n.useState)(!1),[u,h]=Object(n.useState)(!1);Object(n.useEffect)((()=>{h(!0)}),[]);const m=Object(E.parseCodeBlockTitle)(a)||r,y=Object(n.useRef)(null);let g=[];const f=O(),k=Array.isArray(e)?e.join(""):e;if(a&&x.test(a)){const e=a.match(x)[1];g=v()(e).filter((e=>e>0))}let j=t&&t.replace(/language-/,"");!j&&s.defaultLanguage&&(j=s.defaultLanguage);let T=k.replace(/\n$/,"");if(0===g.length&&void 0!==j){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return w(["js","jsBlock"]);case"jsx":case"tsx":return w(["js","jsBlock","jsx"]);case"html":return w(["js","jsBlock","html"]);case"python":case"py":return w(["python"]);default:return w()}})(j),a=k.replace(/\n$/,"").split("\n");let n;for(let o=0;o<a.length;){const r=o+1,l=a[o].match(t);if(null!==l){switch(l.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=`${r},`;break;case"highlight-start":n=r;break;case"highlight-end":e+=`${n}-${r-1},`}a.splice(o,1)}else o+=1}g=v()(e),T=a.join("\n")}const S=()=>{!function(e,{target:t=document.body}={}){const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const o=document.getSelection();let r=!1;o.rangeCount>0&&(r=o.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}a.remove(),r&&(o.removeAllRanges(),o.addRange(r)),n&&n.focus()}(T),p(!0),setTimeout((()=>p(!1)),2e3)};return o.a.createElement(b,Object(l.a)({},i,{key:String(u),theme:f,code:T,language:j}),(({className:e,style:t,tokens:a,getLineProps:n,getTokenProps:r})=>o.a.createElement("div",{className:C.a.codeBlockContainer},m&&o.a.createElement("div",{style:t,className:C.a.codeBlockTitle},m),o.a.createElement("div",{className:Object(c.a)(C.a.codeBlockContent,j)},o.a.createElement("div",{tabIndex:0,className:Object(c.a)(e,C.a.codeBlock,"thin-scrollbar",{[C.a.codeBlockWithTitle]:m})},o.a.createElement("div",{className:C.a.codeBlockLines,style:t},a.map(((e,t)=>{1===e.length&&""===e[0].content&&(e[0].content="\n");const a=n({line:e,key:t});return g.includes(t+1)&&(a.className=`${a.className} docusaurus-highlight-code-line`),o.a.createElement("div",Object(l.a)({key:t},a),e.map(((e,t)=>o.a.createElement("span",Object(l.a)({key:t},r({token:e,key:t}))))))})))),o.a.createElement("button",{ref:y,type:"button","aria-label":Object(N.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(c.a)(C.a.copyButton),onClick:S},d?o.a.createElement(N.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.a.createElement(N.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))))}a(57);var B=a(58),P=a.n(B);var L=e=>function({id:t,...a}){const{navbar:{hideOnScroll:n}}=Object(E.useThemeConfig)();return t?o.a.createElement(e,a,o.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(c.a)("anchor",{[P.a.enhancedAnchor]:!n}),id:t}),a.children,o.a.createElement("a",{className:"hash-link",href:`#${t}`,title:Object(N.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):o.a.createElement(e,a)};const A={code:e=>{const{children:t}=e;return Object(n.isValidElement)(t)?t:t.includes("\n")?o.a.createElement(S,e):o.a.createElement("code",e)},a:e=>o.a.createElement(r.a,e),pre:e=>{var t;const{children:a}=e;return Object(n.isValidElement)(null==a||null===(t=a.props)||void 0===t?void 0:t.children)?null==a?void 0:a.props.children:o.a.createElement(S,Object(n.isValidElement)(a)?null==a?void 0:a.props:{children:a})},h1:L("h1"),h2:L("h2"),h3:L("h3"),h4:L("h4"),h5:L("h5"),h6:L("h6")};t.a=A},115:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(104),l=a(98);t.default=function(){return o.a.createElement(r.a,{title:"Page Not Found"},o.a.createElement("main",{className:"container margin-vert--xl"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col--6 col--offset-3"},o.a.createElement("h1",{className:"hero__title"},o.a.createElement(l.a,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),o.a.createElement("p",null,o.a.createElement(l.a,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),o.a.createElement("p",null,o.a.createElement(l.a,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},129:function(e,t,a){"use strict";var n=a(3),o=a(0),r=a.n(o);t.a=e=>r.a.createElement("svg",Object(n.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},75:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(100),l=a(16),c=a(27),s=a(104),i=a(146),d=a(105),p=a(115),u=a(129),h=a(24),m=a(98),y=a(97),g=a(77),b=a.n(g),f=a(96);function v({currentDocRoute:e,versionMetadata:t,children:a}){var c,p;const{siteConfig:h,isClient:g}=Object(l.default)(),{pluginId:v,permalinkToSidebar:k,docsSidebars:j,version:E}=t,O=k[e.path],N=j[O],[T,C]=Object(n.useState)(!1),[x,w]=Object(n.useState)(!1),S=Object(n.useCallback)((()=>{x&&w(!1),C(!T)}),[x]);return o.a.createElement(s.a,{key:g,wrapperClassName:f.ThemeClassNames.wrapper.docPages,pageClassName:f.ThemeClassNames.page.docPage,searchMetadatas:{version:E,tag:Object(f.docVersionSearchTag)(v,E)}},o.a.createElement("div",{className:b.a.docPage},N&&o.a.createElement("div",{className:Object(y.a)(b.a.docSidebarContainer,{[b.a.docSidebarContainerHidden]:T}),onTransitionEnd:e=>{e.currentTarget.classList.contains(b.a.docSidebarContainer)&&T&&w(!0)},role:"complementary"},o.a.createElement(i.a,{key:O,sidebar:N,path:e.path,sidebarCollapsible:null===(c=null===(p=h.themeConfig)||void 0===p?void 0:p.sidebarCollapsible)||void 0===c||c,onCollapse:S,isHidden:x}),x&&o.a.createElement("div",{className:b.a.collapsedDocSidebar,title:Object(m.b)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":Object(m.b)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:S,onClick:S},o.a.createElement(u.a,{className:b.a.expandSidebarButtonIcon}))),o.a.createElement("main",{className:Object(y.a)(b.a.docMainContainer,{[b.a.docMainContainerEnhanced]:T||!N})},o.a.createElement("div",{className:Object(y.a)("container padding-vert--lg",b.a.docItemWrapper,{[b.a.docItemWrapperEnhanced]:T})},o.a.createElement(r.a,{components:d.a},a)))))}t.default=function(e){const{route:{routes:t},versionMetadata:a,location:n}=e,r=t.find((e=>Object(h.matchPath)(n.pathname,e)));return r?o.a.createElement(v,{currentDocRoute:r,versionMetadata:a},Object(c.a)(t)):o.a.createElement(p.default,e)}}}]);