(function(t){typeof define=="function"&&define.amd?define(t):t()})(function(){"use strict";var t=document.createElement("style");t.textContent=`*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:Inter,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.fixed{position:fixed}.inset-x-0{left:0;right:0}.mx-auto{margin-left:auto;margin-right:auto}.flex{display:flex}.h-12{height:3rem}.h-full{height:100%}.max-w-7xl{max-width:80rem}.flex-1{flex:1 1 0%}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes enter{0%{opacity:0;filter:blur(12px);transform:translateY(1.25rem)}to{opacity:1;filter:blur(0);transform:translateY(0)}}.animate-enter{animation:enter .5s ease-in-out .8s forwards}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.overflow-hidden{overflow:hidden}.bg-dracula-darker{--tw-bg-opacity: 1;background-color:hsl(231 15% 18% / var(--tw-bg-opacity))}.px-4{padding-left:1rem;padding-right:1rem}.text-dracula-light{--tw-text-opacity: 1;color:hsl(60 30% 96% / var(--tw-text-opacity))}.opacity-0{opacity:0}@media (min-width: 640px){.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}}@media (min-width: 1024px){.lg\\:px-8{padding-left:2rem;padding-right:2rem}}:root{--dracula-darker: hsl(231 15% 18%);--dracula-dark: hsl(232 14% 31%);--dracula-light: hsl(60 30% 96%);--dracula-blue: hsl(225 27% 51%);--dracula-cyan: hsl(191 97% 77%);--dracula-green: hsl(135 94% 65%);--dracula-orange: hsl(31 100% 71%);--dracula-pink: hsl(326 100% 74%);--dracula-purple: hsl(265 89% 78%);--dracula-red: hsl(0 100% 67%);--dracula-yellow: hsl(65 92% 76%)}.clock{position:relative;width:280px;height:280px;display:flex;justify-content:center;align-items:center;flex-shrink:0;border-radius:50%}@media (min-width: 640px){.clock{scale:1.5}}@media (min-width: 1024px){.clock{scale:2}}.clock:before{content:"";position:absolute;width:8px;height:8px;background:var(--dracula-darker);border:1px solid var(--dracula-light);z-index:20;border-radius:50%}#time{position:relative;width:250px;height:250px;display:flex;justify-content:center;align-items:center}#time .circle{position:absolute;display:flex;justify-content:center;align-items:center}#time .circle svg{position:relative;transform:rotate(270deg)}#time .circle svg circle{width:100%;height:100%;fill:transparent;stroke-width:5;stroke:var(--stroke);transform:translate(5px,5px);opacity:.25}#time .circle.seconds svg{width:250px;height:250px}#time .circle.minutes svg{width:210px;height:210px}#time .circle.hours svg{width:170px;height:170px}#time .circle.seconds svg circle{stroke-dasharray:754;stroke-dashoffset:754}#time .circle.minutes svg circle{stroke-dasharray:629;stroke-dashoffset:629}#time .circle.hours svg circle{stroke-dasharray:503;stroke-dashoffset:503}.dots{position:absolute;width:100%;height:100%;display:flex;justify-content:center;align-items:flex-start;z-index:10}.dots:before{content:"";position:absolute;top:-3px;width:15px;height:15px;background:var(--stroke);border-radius:50%;box-shadow:0 0 20px var(--stroke),0 0 40px var(--stroke),0 0 60px var(--stroke),0 0 80px var(--stroke)}.hands{position:absolute;width:200px;height:200px;border-radius:50%;display:flex;justify-content:center;align-items:flex-start}.hands i{position:absolute;width:2px;background:var(--line);transform-origin:bottom;opacity:.75;border-radius:.5rem}#h_s{z-index:10}#h_m{z-index:9}#h_h{z-index:8}#h_s i{height:55%;top:-10px}#h_m i{height:45%;top:10px;width:2.5px}#h_h i{height:35%;top:30px;width:3px}#time span{position:absolute;top:55px;right:55px;bottom:55px;left:55px;text-align:center;color:var(--dracula-light);font-family:Fira Code,Courier New,Courier,monospace;transform:rotate(calc(30deg * var(--i)))}#time span b{font-size:.75rem;font-weight:500;display:inline-block;transform:rotate(calc(-30deg * var(--i)))}
`,document.head.appendChild(t);const l=document.getElementById("hh"),c=document.getElementById("mm"),d=document.getElementById("ss"),p=document.querySelector(".dots.hours"),h=document.querySelector(".dots.minutes"),f=document.querySelector(".dots.seconds"),u=document.getElementById("h_h"),w=document.getElementById("h_m"),g=document.getElementById("h_s");function n(){const e=new Date,r=e.getHours(),o=e.getMinutes(),i=e.getSeconds();l.style.strokeDashoffset=503-503*r/12,c.style.strokeDashoffset=629-629*o/60,d.style.strokeDashoffset=754-754*i/60,p.style.transform=`rotateZ(${r*30}deg)`,h.style.transform=`rotateZ(${o*6}deg)`,f.style.transform=`rotateZ(${i*6}deg)`,u.style.transform=`rotateZ(${r*30}deg)`,w.style.transform=`rotateZ(${o*6}deg)`,g.style.transform=`rotateZ(${i*6}deg)`}n(),setInterval(n,1e3)});
