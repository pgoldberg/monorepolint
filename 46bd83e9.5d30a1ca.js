(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{116:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(6),i=(t(0),t(133)),o={title:":require-dependency"},c={id:"rules/require-dependency",title:":require-dependency",description:"Require all packages to declare dependencies with specified versions.",source:"@site/docs/rules/require-dependency.md",permalink:"/docs/rules/require-dependency",editUrl:"https://github.com/monorepolint/monorepolint/edit/master/packages/docs/docs/rules/require-dependency.md",sidebar:"docs",previous:{title:":package-script",permalink:"/docs/rules/package-script"},next:{title:":standard-tsconfig",permalink:"/docs/rules/standard-tsconfig"}},p=[{value:"Options",id:"options",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:p};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Require all packages to declare dependencies with specified versions."),Object(i.b)("p",null,"Often useful when using a third party tool like webpack or babel that expects a\nlocal entry."),Object(i.b)("h3",{id:"options"},"Options"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"dependencies")," (Optional)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Map of dependency name to version"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"devDependencies")," (Optional)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Map of dependency name to version"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"peerDependencies")," (Optional)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Map of dependency name to version"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"optionalDependencies")," (Optional)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Map of dependency name to version")))),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),'module.exports = {\n  rules: {\n    ":require-dependency": {\n      options: {\n        devDependencies: {\n          typescript: "^3.8.3",\n        },\n      },\n    },\n  },\n};\n')),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/monorepolint/monorepolint/blob/master/packages/rules/src/requireDependency.ts"}),"rule source")))}u.isMDXComponent=!0},133:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(t),b=r,m=s["".concat(o,".").concat(b)]||s[b]||d[b]||i;return t?a.a.createElement(m,c(c({ref:n},l),{},{components:t})):a.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=b;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);