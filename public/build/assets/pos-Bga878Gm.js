function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./ns-pos-DIkbRFyE.js","./ns-pos-cart-B1DG0DPl.js","./bootstrap-GRvt9xka.js","./currency-lOMYG1Wf.js","./runtime-core.esm-bundler-RT2b-_3S.js","./pos-section-switch-DmfccXVX.js","./ns-pos-order-type-popup-n_Hz9hxm.js","./ns-prompt-popup-DaG9d9dX.js","./_plugin-vue_export-helper-DlAUqK2U.js","./ns-prompt-popup-CVxzoclS.css","./ns-orders-preview-popup-D9DGZuPF.js","./index.es-Br67aBEV.js","./ns-pos-shipping-popup-D5x_rsU7.js","./ns-pos-grid-DrBswEj8.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as m}from"./preload-helper-BQ24v_F8.js";import"./time-DBUOqYnL.js";import{b as t}from"./components-C544Tc4T.js";import{c as n}from"./bootstrap-GRvt9xka.js";import{N as i}from"./ns-hotpress-B_9sUEWO.js";import{d as p}from"./runtime-core.esm-bundler-RT2b-_3S.js";import"./ns-alert-popup-SVrn5Xft.js";import"./currency-lOMYG1Wf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./ns-avatar-image-CAD6xUGA.js";import"./index.es-Br67aBEV.js";import"./ns-prompt-popup-DaG9d9dX.js";window.nsComponents={...t};window.nsHotPress=new i;const o=n({mounted(){}});o.component("nsPos",p(()=>m(()=>import("./ns-pos-DIkbRFyE.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13]),import.meta.url)));o.component("nsPosCart",p(()=>m(()=>import("./ns-pos-cart-B1DG0DPl.js"),__vite__mapDeps([1,2,3,4,5,6,7,8,9,10,11,12]),import.meta.url)));o.component("nsPosGrid",p(()=>m(()=>import("./ns-pos-grid-DrBswEj8.js"),__vite__mapDeps([13,2,3,4,5,7,8,9]),import.meta.url)));for(let r in t)o.component(r,t[r]);o.mount("#pos-app");window.posApp=o;