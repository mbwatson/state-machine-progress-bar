(this.webpackJsonpstatemachine=this.webpackJsonpstatemachine||[]).push([[0],{15:function(n,t,e){n.exports=e(26)},20:function(n,t,e){},26:function(n,t,e){"use strict";e.r(t);var a=e(0),o=e.n(a),c=e(7),r=e.n(c),i=(e(20),e(1)),l=(i.b.div((function(n){var t=n.theme;return"\n        height: 10px;\n        width: 100%;\n        border-bottom: 1px solid ".concat(t.palette.silver,";\n        margin: ").concat(t.spacing," auto;\n    ")})),i.b.footer((function(n){var t=n.theme;return"\n        background-color: ".concat(t.palette.iron,";\n        color: ").concat(t.palette.moss,";\n        padding: ").concat(t.spacing,";\n    ")}))),s=i.b.footer((function(n){var t=n.theme;return"\n        background-color: ".concat(t.palette.iron,";\n        color: ").concat(t.palette.moss,";\n        padding: ").concat(t.spacing,";\n    ")})),u=i.b.main((function(n){var t=n.theme;return"\n        background-color: ".concat(t.palette.snow,";\n        color: ").concat(t.palette.iron,";\n        padding: ").concat(t.spacing,";\n        flex: 1;\n    ")})),p=e(10);function m(){var n=Object(p.a)(["\n    // & * { border: 1px solid #f99; }\n    min-height: 100vh;\n    display: flex;\n    flex-direction: column;\n"]);return m=function(){return n},n}var d=i.b.div(m()),f={palette:{iron:"#48494b",moss:"#8a9a5b",snow:"#fffafa",silver:"#d0d0d9",cardinal:"#a31f34",carmine:"#960018"},spacing:"2rem",borderRadius:"5px"},b=e(2),h=e(11),v=e(12),g=i.b.div((function(n){var t=n.theme,e=n.percentage;n.width;return"\n        border-bottom: 1px solid ".concat(t.palette.moss,";\n        position: relative;\n        height: ").concat(t.spacing,';\n        &::before {\n            content: "').concat(e,'%";\n            position: absolute;\n            top: calc(100% + 10px);\n            left: 50%;\n            transform: translateX(-50%);\n            color: ').concat(t.palette.silver,';\n        }\n        &::after {\n            content: "";\n            position: absolute;\n            left: 0;\n            top: 0;\n            height: 100%;\n            width: ').concat(e,"%;\n            background-color: ").concat(t.palette.moss,";\n        }\n    ")})),w=function(n){var t=n.percentage;return o.a.createElement(g,{percentage:t})};w.defaultProps={percentage:0};i.b.h3((function(n){var t=n.theme;return"\n        color: ".concat(t.palette.silver,";\n    ")}));var x=i.b.div((function(n){n.theme;return"\n        width: 100%;\n        margin: auto;\n    "})),E=i.b.div((function(n){var t=n.theme;return"\n        text-transform: uppercase;\n        letter-spacing: 2px;\n        color: ".concat(t.palette.moss,";\n        font-size: 80%;\n        background-color: ").concat(t.palette.snow,";\n        padding: calc(").concat(t.spacing," / 4);\n        border-top: 1px solid ").concat(t.palette.moss,";\n        border-bottom: 1px solid ").concat(t.palette.moss,";\n    ")})),k=i.b.div((function(n){var t=n.theme;return"\n        display: flex;\n        flex-direction: column;\n        min-height: ".concat(t.spacing,";\n        @media (min-width: 768px) {\n            flex-direction: row;\n        }\n        justify-content: center;\n    ")})),j=i.b.span((function(n){var t=n.theme,e=n.active;return"\n        text-align: center;\n        padding: calc(".concat(t.spacing," / 4);\n        color: ").concat(t.palette.moss,";\n        font-size: 80%;\n        letter-spacing: 2px;\n        flex: 1;\n        transition: background-color 250ms;\n        background-color: ").concat(t.palette.silver,"22;\n        ").concat(e?"\n            background-color: ".concat(t.palette.moss,";\n            color: ").concat(t.palette.snow,";\n            transition: opacity 200ms;\n            opacity: ").concat(e?1:0,';\n            content: " *";\n        '):void 0,"\n    ")})),y=function(n){var t=n.children;return o.a.createElement(x,null,o.a.createElement(E,null,"STATE"),o.a.createElement(k,null,t))},O=i.b.div((function(n){var t=n.theme;return"\n        display: flex;\n        min-height: 200px;\n        flex-direction: column;\n        justify-content: center;\n        margin: calc(".concat(t.spacing," * 2) calc(").concat(t.spacing,") calc(").concat(t.spacing,") calc(").concat(t.spacing,");\n        align-items: stretch;\n        @media (min-width: 768px) {\n            margin: calc(").concat(t.spacing," / 4);\n            flex-direction: row;\n            align-items: center;\n        }\n    ")})),S=i.b.button((function(n){n.theme;return"\n        margin: 0.5rem 0.5rem;\n        padding: 0.25rem 0.5rem;\n        cursor: pointer;\n        &:disabled {\n            cursor: default;\n        }\n    "}));Array.prototype.removeDuplicates=function(){return Array.from(new Set(this))};var T=i.b.div((function(n){var t=n.theme;return"\n        // & * {border: 1px solid ".concat(t.palette.moss,";}\n        border: 1px solid ").concat(t.palette.moss,";\n        border-radius: ").concat(t.borderRadius,";\n        text-align: center;\n        width: 90%;\n        max-width: 768px;\n        margin: auto;\n        // padding: ").concat(t.spacing,";\n    ")})),z=function(){function n(t,e){Object(h.a)(this,n),this.state=t,this.flow=e,this.states=Object.entries(this.flow).map((function(n){var t=Object(b.a)(n,2),e=t[0];t[1];return e})).removeDuplicates(),this.actions=Object.values(this.flow).reduce((function(n,t){return n.concat(Object.entries(t.on).map((function(n){var t=Object(b.a)(n,2),e=t[0];t[1];return e}))).removeDuplicates()}),[])}return Object(v.a)(n,[{key:"availableStates",value:function(n){return Object.entries(this.flow[n].on).map((function(n){var t=Object(b.a)(n,2);t[0];return t[1]})).removeDuplicates()}},{key:"availableActions",value:function(n){return Object.entries(this.flow[n].on).map((function(n){var t=Object(b.a)(n,2),e=t[0];t[1];return e})).removeDuplicates()}},{key:"transition",value:function(n,t){return this.availableStates!==[]&&this.flow[n].hasOwnProperty("on")&&this.flow[n].on.hasOwnProperty(t)?(console.log("transition: ".concat(n," -> ").concat(this.flow[n].on[t])),this.flow[n].on[t]):n}}]),n}(),A=function(n){var t=new z("zero",{zero:{on:{START:"running"}},running:{on:{PAUSE:"paused",RESET:"zero",END:"complete"}},paused:{on:{START:"running",RESET:"zero"}},complete:{on:{RESET:"zero"}}}),e=Object(a.useState)(t.state),c=Object(b.a)(e,2),r=c[0],i=c[1],l=Object(a.useState)(0),s=Object(b.a)(l,2),u=s[0],p=s[1];Object(a.useEffect)((function(){switch(r){case"zero":p(0);break;case"running":if(100===u)return void i(t.transition(r,"END"));var n=setInterval((function(){p(u+1)}),25);return function(){return clearInterval(n)};case"complete":p(100);break;default:return}}),[r,u]);var m=function(n){return function(e){return i(t.transition(r,n))}};return o.a.createElement(T,null,o.a.createElement(w,{percentage:u}),o.a.createElement(O,null,t.actions.map((function(n){return o.a.createElement(S,{key:n,onClick:m(n),disabled:!t.availableActions(r).includes(n)},n)}))),o.a.createElement(y,null,Object.keys(t.flow).map((function(n){return o.a.createElement(j,{key:n,active:r===n},n)}))))};var D=function(){return o.a.createElement(i.a,{theme:f},o.a.createElement(d,null,o.a.createElement(s,null,"..."),o.a.createElement(u,null,o.a.createElement(A,null)),o.a.createElement(l,null,"...")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.211ac315.chunk.js.map