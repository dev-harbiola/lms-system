(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[847],{3503:function(e,r,t){Promise.resolve().then(t.t.bind(t,6685,23)),Promise.resolve().then(t.bind(t,7903))},7903:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return c}});var n=t(7437),l=t(3378),s=t(6357),i=t(2265),o=e=>{let[r,t]=(0,i.useState)(0),[n,l]=(0,i.useState)(0),[s,o]=(0,i.useState)(0),[a,c]=(0,i.useState)(!1),[u,d]=(0,i.useState)([]),[f,m]=(0,i.useState)(()=>e.questions?e.questions:[]);return(0,i.useEffect)(()=>{m(e.questions)},[]),{score:r,showScore:a,currentIndex:n,percentage:s,selectedAnswer:u,questions:f,handlePrevious:e=>{e.preventDefault();let r=n-1;r>=0&&l(r)},handleNext:e=>{e.preventDefault();let r=n+1;r<f.length&&l(r)},formatQuestion:function(e){return(null==e?void 0:e.answer)||""},selectedOption:function(e,r){var t;if(console.log(),(null===(t=u[r])||void 0===t?void 0:t.index)===r){d(t=>{let n=t.filter(t=>{t.index===r&&(t.answer=e.answer,t.isCorrect=e.isCorrect)});return n});return}let n={index:r,answer:e.answer,isCorrect:e.isCorrect};d(e=>[...e,n])},handleSubmitButton:e=>{e.preventDefault();let r=0,n=5*f.length;for(let e=0;e<f.length;e++)f[e].options.map(t=>{if(t.isCorrect){var n;t.isCorrect===(null===(n=u[e])||void 0===n?void 0:n.isCorrect)&&(r+=5)}});t(r),console.log(r),c(!0),o(r/n*100)}}};let a={option:"flex items-center py-2 text-base hover:bg-primary hover:text-primary-foreground dark:hover:bg-specail-800 cursor-pointer dark:bg-special-700 border-special-600 font-semibold border-2 border-solid px-5 rounded-full",selected:"bg-primary text-primary-foreground"};var c=e=>{let{assessment:r}=e,{score:t,currentIndex:c,formatQuestion:u,handleNext:d,handlePrevious:f,percentage:m,questions:v,selectedAnswer:x,selectedOption:p,handleSubmitButton:g,showScore:h}=o(r);return(0,n.jsxs)(s.Zb,{className:"max-w-6xl mx-auto mt-10 dark:bg-special-600 border-special-600",children:[h?(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)(s.Ol,{children:(0,n.jsx)(s.ll,{children:"Score"})}),(0,n.jsxs)(s.aY,{children:[(0,n.jsxs)(s.SZ,{children:["Total Score: ",t]}),(0,n.jsxs)(s.SZ,{children:["Total Percentage: ",m]})]})]}):null,h?null:(0,n.jsxs)(i.Fragment,{children:[(0,n.jsxs)(s.Ol,{children:[(0,n.jsx)(s.ll,{className:"text-center",children:v[c].question}),(0,n.jsxs)("div",{className:"flex items-center justify-center space-x-2",children:[(0,n.jsxs)("span",{className:"rounded-full flex items-center justify-center h-8 w-8 p-1 text-primary-foreground bg-primary",children:[c+1," "]}),(0,n.jsx)("span",{children:"of"}),(0,n.jsx)("span",{children:v.length})]})]}),(0,n.jsx)(s.aY,{className:"grid grid-cols-1 md:grid-cols-2 gap-5 my-5",children:v[c].options.map((e,r)=>{var t;return(0,n.jsx)(s.SZ,{onClick:()=>p(e,c),className:"".concat(a.option," ").concat((null===(t=x[c])||void 0===t?void 0:t.answer)==u(e)?a.selected:""),children:null!==e&&u(e)},r)})}),(0,n.jsxs)(s.eW,{className:"flex justify-end gap-5",children:[(0,n.jsx)(l.z,{onClick:f,children:"Prev"}),c+1!==v.length?(0,n.jsx)(l.z,{onClick:d,children:"Next"}):null,c+1===v.length?(0,n.jsx)(l.z,{onClick:g,children:"Submit"}):null]})]})]})}},3378:function(e,r,t){"use strict";t.d(r,{z:function(){return c}});var n=t(7437),l=t(2265),s=t(7256),i=t(6061),o=t(2703);let a=(0,i.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline",regular:"bg-blue-500 text-blue-50 hover:bg-blue-500/90"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),c=l.forwardRef((e,r)=>{let{className:t,variant:l,size:i,asChild:c=!1,...u}=e,d=c?s.g7:"button";return(0,n.jsx)(d,{className:(0,o.cn)(a({variant:l,size:i,className:t})),ref:r,...u})});c.displayName="Button"},6357:function(e,r,t){"use strict";t.d(r,{Ol:function(){return o},SZ:function(){return c},Zb:function(){return i},aY:function(){return u},eW:function(){return d},ll:function(){return a}});var n=t(7437),l=t(2265),s=t(2703);let i=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...l})});i.displayName="Card";let o=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",t),...l})});o.displayName="CardHeader";let a=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)("h3",{ref:r,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",t),...l})});a.displayName="CardTitle";let c=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)("p",{ref:r,className:(0,s.cn)("text-sm text-muted-foreground",t),...l})});c.displayName="CardDescription";let u=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("p-6 pt-0",t),...l})});u.displayName="CardContent";let d=l.forwardRef((e,r)=>{let{className:t,...l}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("flex items-center p-6 pt-0",t),...l})});d.displayName="CardFooter"},2703:function(e,r,t){"use strict";t.d(r,{cn:function(){return s}});var n=t(7042),l=t(3986);function s(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,l.m)((0,n.W)(r))}},6061:function(e,r,t){"use strict";t.d(r,{j:function(){return i}});var n=t(7042);let l=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,s=n.W,i=(e,r)=>t=>{var n;if((null==r?void 0:r.variants)==null)return s(e,null==t?void 0:t.class,null==t?void 0:t.className);let{variants:i,defaultVariants:o}=r,a=Object.keys(i).map(e=>{let r=null==t?void 0:t[e],n=null==o?void 0:o[e];if(null===r)return null;let s=l(r)||l(n);return i[e][s]}),c=t&&Object.entries(t).reduce((e,r)=>{let[t,n]=r;return void 0===n||(e[t]=n),e},{}),u=null==r?void 0:null===(n=r.compoundVariants)||void 0===n?void 0:n.reduce((e,r)=>{let{class:t,className:n,...l}=r;return Object.entries(l).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...o,...c}[r]):({...o,...c})[r]===t})?[...e,t,n]:e},[]);return s(e,a,u,null==t?void 0:t.class,null==t?void 0:t.className)}}},function(e){e.O(0,[350,685,478,596,744],function(){return e(e.s=3503)}),_N_E=e.O()}]);