(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(4),o=n.n(s),r=(n(9),n(2)),l=n(0);function i(e){return Object(l.jsx)("div",{children:Object(l.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(l.jsxs)("div",{className:"container-fluid",children:[Object(l.jsx)("a",{className:"navbar-brand",href:"#",children:e.tittle}),Object(l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(l.jsx)("span",{className:"navbar-toggler-icon"})}),Object(l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(l.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(l.jsx)("input",{type:"color",name:"",id:"inputColour",onChange:e.myfunc}),Object(l.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(l.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,id:"flexSwitchCheckDefault"}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable dark mode"})]})]})]})})})}i.defaultProps={tittle:"Set Tittle here",aboutText:"About Text here"};n(11);function b(e){var t=Object(a.useState)(""),n=Object(r.a)(t,2),c=n[0],s=n[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"#060b3e":"white"},children:[Object(l.jsx)("h1",{children:e.heading}),Object(l.jsxs)("div",{className:"mb-3",children:[Object(l.jsx)("textarea",{className:"form-control",value:c,onChange:function(e){s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"gray":"white",color:"light"===e.mode?"#060b3e":"white"},id:"mybox",rows:"8"}),Object(l.jsx)("button",{className:"btn btn-primary my-3 mx-1",onClick:function(){var t=c.toUpperCase();s(t),e.showAlert("Converted to UpperCase","success")},children:"Convert to Uppercase"}),Object(l.jsx)("button",{className:"btn btn-primary my-3 mx-1",onClick:function(){var t=c.toLowerCase();s(t),e.showAlert("Converted to LowerCase","success")},children:"Convert to Lowercase"}),Object(l.jsx)("button",{className:"btn btn-primary my-3 mx-1",onClick:function(){s(""),e.showAlert("Text Cleared","success")},children:"Clear Text"}),Object(l.jsx)("button",{className:"btn btn-primary my-3 mx-1",onClick:function(){var t=document.getElementById("mybox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to Clipboard","success")},children:"Copy Text"}),Object(l.jsx)("button",{className:"btn btn-primary my-3 mx-1",onClick:function(){var t=c.split(/[ ]+/);s(t.join(" ")),e.showAlert("Extra Spaces Removed","success")},children:"Remove whitespaces"})]})]}),Object(l.jsxs)("div",{className:"container ",style:{color:"light"===e.mode?"#060b3e":"white"},children:[Object(l.jsx)("h2",{children:"Your Text Summary"}),Object(l.jsxs)("p",{children:["Contains ",c.split(" ").length," words and ",c.length," characters."]}),Object(l.jsxs)("p",{children:["Can be read in ",.008*c.split(" ").length," minutes."]}),Object(l.jsx)("h2",{children:"Preview"}),Object(l.jsx)("p",{children:c.length>0?c:"Enter the text above to preview"})]})]})}function d(e){return e.alert&&Object(l.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(l.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)})," : ",e.alert.msg]})}var h=function(){var e=Object(a.useState)("light"),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),o=Object(r.a)(s,2),h=o[0],m=o[1],u=function(e,t){m({msg:e,type:t}),setTimeout((function(){m(null)}),2e3)};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i,{tittle:"TextUtils",aboutText:"About TextUtils",mode:n,toggleMode:function(){"light"===n?(c("dark"),document.body.style.backgroundColor="#060b3e",u("Dark mode has been enabled","success")):(c("light"),document.body.style.backgroundColor="white",u("Light mode has been enabled","success"))},myfunc:function(){console.log("Onchange was called");var e=document.getElementById("inputColour").value;console.log(e),document.body.style.backgroundColor=e}}),Object(l.jsx)(d,{alert:h}),Object(l.jsx)("div",{className:"container my-4",children:Object(l.jsx)(b,{heading:"Enter the text below to analyze",mode:n,showAlert:u})})]})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),m()},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.1550edfe.chunk.js.map