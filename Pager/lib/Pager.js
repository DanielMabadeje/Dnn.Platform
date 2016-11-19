!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("dnn-dropdown"),require("dnn-svg-icons"),require("react")):"function"==typeof define&&define.amd?define(["dnn-dropdown","dnn-svg-icons","react"],t):"object"==typeof exports?exports.Pager=t(require("dnn-dropdown"),require("dnn-svg-icons"),require("react")):e.Pager=t(e["dnn-dropdown"],e["dnn-svg-icons"],e.react)}(this,function(e,t,n){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=n(7),l=r(p),c=n(6),g=n(5),u=r(g);n(4);var d=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={currentPage:0,pageSize:e.pageSize,totalPages:0,startIndex:0,endIndex:void 0!==e.numericCounters?e.numericCounters:0},n.calculateTotalPages(e),n}return i(t,e),s(t,[{key:"componentWillReceiveProps",value:function(e){this.calculateTotalPages(e)}},{key:"calculateTotalPages",value:function(e){var t=this.state;if(t.pageSize>=e.totalRecords||0===e.totalRecords)t.totalPages=1;else{var n=parseInt(e.totalRecords/t.pageSize);e.totalRecords%t.pageSize!==0&&n++,t.totalPages=n;var r=t.endIndex;r>n&&(t.endIndex=n)}this.setState({state:t})}},{key:"format",value:function n(){var n=arguments[0],e=arguments;return n.replace(/{(\d+)}/gi,function(t,n){var r=parseInt(n)+1;return e[r]})}},{key:"onPageSizeSelected",value:function(e){var t=this.state;t.pageSize!==e.value&&(t.pageSize=e.value,this.setState({state:t}),this.calculateTotalPages(this.props),this.onPageChanged(0))}},{key:"onPageChanged",value:function(e){var t=this.state.currentPage,n=this.state;switch(e){case">":t++;break;case"<":t--;break;case">>":t=n.totalPages-1;break;case"<<":t=0;break;default:t=e}var r=n.startIndex,o=n.endIndex;if(this.props.numericCounters>0){var a=parseInt(this.props.numericCounters/2);t<r&&t<n.totalPages&&t>0?(r=r-a<0?0:r-a,o=r>0?o-a:o):t>=o-1&&t<n.totalPages-1&&t>0?(o=o+a>n.totalPages?n.totalPages:o+a,r=o<n.totalPages?r+a:o-this.props.numericCounters>0?o-this.props.numericCounters:0):t>=n.totalPages-1?(o=n.totalPages,r=o-this.props.numericCounters>0?o-this.props.numericCounters:0):t<=0&&(r=0,o=r+this.props.numericCounters>n.totalPages-1?n.totalPages:r+this.props.numericCounters)}this.setState({currentPage:t,startIndex:r,endIndex:o}),this.props.onPageChanged(t,n.pageSize)}},{key:"getPageSummary",value:function(){if(this.props.showSummary){var e=this.props,t=this.state;if(e.totalRecords<=0)return null;var n=t.currentPage*t.pageSize+1,r=n+t.pageSize-1;return r>e.totalRecords&&(r=e.totalRecords),this.format(this.props.summaryText,n,r,e.totalRecords)}return"&nbsp;"}},{key:"getPagingBoxes",value:function(){var e=this.state,t=e.currentPage,n=e.startIndex,r=e.endIndex,o=[];if(this.props.numericCounters>1)for(var a=n;a<r;a++){var i=a+1;o=a!==t?o.concat(l["default"].createElement("li",{className:"pages do-not-close",onClick:this.onPageChanged.bind(this,a)},i)):o.concat(l["default"].createElement("li",{className:"pages current do-not-close"}," ",a+1))}else 1===this.props.numericCounters&&(o=o.concat(l["default"].createElement("li",{className:"pages current do-not-close"}," ",t+1)));return o}},{key:"getPageSizeDropDown",value:function(){var e=this,t=[];return this.props.totalRecords>=10&&t.push({value:10,label:this.format(this.props.pageSizeOptionText,10)}),this.props.totalRecords>=25&&t.push({value:25,label:this.format(this.props.pageSizeOptionText,25)}),this.props.totalRecords>=50&&t.push({value:50,label:this.format(this.props.pageSizeOptionText,50)}),this.props.totalRecords>=100&&t.push({value:100,label:this.format(this.props.pageSizeOptionText,100)}),this.props.totalRecords>=250&&t.push({value:250,label:this.format(this.props.pageSizeOptionText,250)}),t.some(function(t){return t.value===e.props.pageSize})||(t=t.concat({value:this.props.pageSize,label:this.format(this.props.pageSizeOptionText,this.props.pageSize)}),t=t.sort(function(e,t){var n=e.value,r=t.value;return n<r?-1:n>r?1:0})),l["default"].createElement(u["default"],{options:t,value:this.props.pageSize,onSelect:this.onPageSizeSelected.bind(this),withBorder:!this.props.pageSizeDropDownWithoutBorder})}},{key:"renderIcon",value:function(e,t,n){return n?l["default"].createElement("li",{className:"do-not-close pages prev disabled"},l["default"].createElement("span",{className:"icon-flat",dangerouslySetInnerHTML:{__html:t}})):l["default"].createElement("li",{className:"do-not-close pages prev",onClick:e.bind(this)},l["default"].createElement("span",{className:"icon-button",dangerouslySetInnerHTML:{__html:t}}))}},{key:"render",value:function(){var e=this.state,t=this.props;return(e.totalPages>1||t.totalRecords>=10&&1===e.totalPages&&this.props.showPageSizeOptions)&&l["default"].createElement("div",{className:"dnn-pager do-not-close",style:t.style},l["default"].createElement("div",{className:"dnn-pager-summary-box"},this.getPageSummary()),l["default"].createElement("div",{className:"dnn-pager-control"},l["default"].createElement("div",{className:"dnn-pager-paging-box"},l["default"].createElement("ul",null,this.props.showStartEndButtons&&this.renderIcon(this.onPageChanged.bind(this,"<<"),c.ArrowEndLeftIcon,e.currentPage<1),this.renderIcon(this.onPageChanged.bind(this,"<"),c.ArrowLeftIcon,e.currentPage<1),this.getPagingBoxes(),this.renderIcon(this.onPageChanged.bind(this,">"),c.ArrowRightIcon,e.totalPages<=e.currentPage+1),this.props.showStartEndButtons&&this.renderIcon(this.onPageChanged.bind(this,">>"),c.ArrowEndRightIcon,e.totalPages<=e.currentPage+1))),this.props.showPageInfo&&!this.props.showPageSizeOptions&&l["default"].createElement("div",{className:"dnn-pager-options-info-box"},this.format(this.props.pageInfoText,e.currentPage+1,e.totalPages)),this.props.showPageSizeOptions&&l["default"].createElement("div",{className:"dnn-pager-pageSize-box"},this.getPageSizeDropDown())))}}]),t}(p.Component);d.propTypes={showStartEndButtons:p.PropTypes.bool,showPageSizeOptions:p.PropTypes.bool,pageSizeDropDownWithoutBorder:p.PropTypes.bool,showSummary:p.PropTypes.bool,showPageInfo:p.PropTypes.bool,summaryText:p.PropTypes.string,pageInfoText:p.PropTypes.string,numericCounters:p.PropTypes.number,pageSizeOptionText:p.PropTypes.string,pageSize:p.PropTypes.number,style:p.PropTypes.object,totalRecords:p.PropTypes.number.isRequired,onPageChanged:p.PropTypes.func.isRequired},d.defaultProps={showStartEndButtons:!0,showPageSizeOptions:!0,pageSizeDropDownWithoutBorder:!1,numericCounters:1,showSummary:!0,showPageInfo:!1,summaryText:"Showing {0}-{1} of {2}",pageInfoText:"Page {0} of {1}",pageSizeOptionText:"{0} per page",pageSize:10},t["default"]=d},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,"svg{fill:#c8c8c8}svg:hover{fill:#6f7273}svg:active{fill:#1e88c3}.dnn-pager{width:100%;box-sizing:border-box;margin:0}.dnn-pager .dnn-pager-summary-box{float:left;width:35%;margin-top:9px}.dnn-pager .dnn-pager-control{float:left;width:65%}.dnn-pager .dnn-pager-control .dnn-pager-options-info-box{float:right;width:auto;max-width:40%;margin-right:20px;margin-top:9px}.dnn-pager .dnn-pager-control .dnn-pager-pageSize-box{float:right;width:auto;max-width:40%;margin-right:20px}.dnn-pager .dnn-pager-control .dnn-pager-pageSize-box .collapsible-label{box-sizing:border-box}.dnn-pager .dnn-pager-control .dnn-pager-pageSize-box .collapsible-content.open{margin-bottom:20px}.dnn-pager .dnn-pager-control .dnn-pager-paging-box{width:auto;max-width:60%;float:right}.dnn-pager .dnn-pager-control .dnn-pager-paging-box ul{margin:0;padding:0;list-style:none;line-height:32px}.dnn-pager .dnn-pager-control .dnn-pager-paging-box ul li.pages{width:32px;height:32px;border:1px solid #c8c8c8;float:left;margin-left:-1px;cursor:pointer;position:relative;text-align:center}.dnn-pager .dnn-pager-control .dnn-pager-paging-box ul li.pages:not(.disabled):hover{color:#4b4e4f}.dnn-pager .dnn-pager-control .dnn-pager-paging-box ul li.pages:not(.disabled):hover svg{fill:#4b4e4f}.dnn-pager .dnn-pager-control .dnn-pager-paging-box ul li.next,.dnn-pager .dnn-pager-control .dnn-pager-paging-box ul li.prev{text-align:center}.dnn-pager .dnn-pager-control .dnn-pager-paging-box ul li.next span,.dnn-pager .dnn-pager-control .dnn-pager-paging-box ul li.prev span{vertical-align:middle;width:16px;padding-top:8px}.dnn-pager .dnn-pager-control .dnn-pager-paging-box ul li.current{color:#1e88c3;cursor:auto;font-weight:700}.dnn-pager .dnn-pager-control .dnn-pager-paging-box ul li.disabled span{opacity:.5}.dnn-pager .dnn-pager-control .dnn-pager-paging-box ul .text{color:#c8c8c8}.dnn-pager .dnn-pager-control .dnn-pager-paging-box ul .text:hover{color:#4b4e4f}.dnn-pager .dnn-pager-control .dnn-pager-paging-box ul .text:active{color:#1e88c3}.dnn-pager .dnn-pager-control .dnn-pager-paging-box ul .icon-button{display:inline-block}.dnn-pager .dnn-pager-control .dnn-pager-paging-box ul .icon-button svg{vertical-align:top;fill:#c8c8c8}.dnn-pager .dnn-pager-control .dnn-pager-paging-box ul .icon-button:hover svg{fill:#4b4e4f}.dnn-pager .dnn-pager-control .dnn-pager-paging-box ul .icon-button.activated svg,.dnn-pager .dnn-pager-control .dnn-pager-paging-box ul .icon-button:active svg{fill:#1e88c3}.dnn-pager .dnn-pager-control .dnn-pager-paging-box ul .icon-flat{display:inline-block}.dnn-pager .dnn-pager-control .dnn-pager-paging-box ul .icon-flat svg{vertical-align:top;fill:#c8c8c8}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(l(r.parts[a],t))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(l(r.parts[a],t));d[r.id]={id:r.id,refs:1,parts:i}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],a=o[0],i=o[1],s=o[2],p=o[3],l={css:i,media:s,sourceMap:p};n[a]?n[a].parts.push(l):t.push(n[a]={id:a,parts:[l]})}return t}function a(e,t){var n=v(),r=x[x.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),x.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=x.indexOf(e);t>=0&&x.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function p(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function l(e,t){var n,r,o;if(t.singleton){var a=m++;n=b||(b=s(t)),r=c.bind(null,n,a,!1),o=c.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=p(t),r=u.bind(null,n),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(t),r=g.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function c(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function g(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function u(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var d={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},h=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=f(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,m=0,x=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=h()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var s=n[i],p=d[s.id];p.refs--,a.push(p)}if(e){var l=o(e);r(l,t)}for(var i=0;i<a.length;i++){var p=a[i];if(0===p.refs){for(var c=0;c<p.parts.length;c++)p.parts[c]();delete d[p.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(1);"string"==typeof r&&(r=[[e.id,r,""]]);n(3)(r,{});r.locals&&(e.exports=r.locals)},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n}])});