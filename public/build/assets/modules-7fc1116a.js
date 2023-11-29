import{P as w,n as p,a as d}from"./bootstrap-6c2910d2.js";import{_ as h}from"./currency-d0508508.js";import M from"./ns-alert-popup-d36e6542.js";import"./npm~@dicebear~avatars_-d0087f50.js";import"./npm~@dicebear~avatars-avataaars-sprites_-0d53c542.js";import{m as k}from"./npm~@vue~runtime-dom_-3cadedeb.js";import{_ as C}from"./_plugin-vue_export-helper-c27b6911.js";import"./npm~moment-fbc5633a.js";import"./ns-prompt-popup-ffce8cb2.js";import"./npm~vue2-daterange-picker-d62cf46d.js";import"./npm~vuedraggable-c50c1d8b.js";import"./npm~vue-upload-component-9a419aa9.js";import"./npm~lodash-f5508214.js";import{m as T}from"./npm~rxjs-a7e91008.js";import{ae as P,a6 as c,z as u,A as e,az as E,y as _,F as N,ac as B,H as b,x as v,ax as f,c as g}from"./npm~@vue~runtime-core_-c1400cf1.js";import{U as n}from"./npm~@vue~shared_-82b01912.js";import"./npm~laravel-echo-8b7e2b1d.js";import"./npm~pusher-js-244b366d.js";import"./npm~@ckeditor~ckeditor5-build-classic_-5cff4652.js";import"./npm~axios-4a70c6fc.js";import"./npm~chart.js-3fed1729.js";import"./npm~vue-d815d99e.js";import"./npm~@vue~compiler-dom_-04241bb4.js";import"./npm~@vue~compiler-core_-2a2ce8c7.js";import"./npm~@vue~reactivity_-46d78a21.js";import"./npm~rx-812d4a49.js";import"./npm~@wordpress~hooks_-18172e20.js";import"./npm~mathjs-eae2cf2e.js";import"./npm~@babel~runtime_-57eb5ba4.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-3f247aa1.js";import"./npm~fraction.js-324b3911.js";import"./npm~typed-function-4896e4f1.js";import"./npm~seedrandom-852a687d.js";import"./npm~javascript-natural-sort-2161c071.js";import"./npm~escape-latex-137e2782.js";import"./npm~numeral-b19ffe25.js";import"./npm~currency.js-57f74176.js";import"./npm~pure-color-c66021e6.js";import"./npm~svgson-5849f5d2.js";import"./npm~omit-deep-622ad2a7.js";import"./npm~is-plain-object-01248184.js";import"./npm~isobject-2e03973b.js";import"./npm~isarray-980812a4.js";import"./npm~unset-value-cf896816.js";import"./npm~has-value-859045a0.js";import"./npm~has-values-79b61d1f.js";import"./npm~get-value-efae0488.js";import"./npm~deep-rename-keys-87135736.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-392f1d0e.js";import"./npm~xml-reader-cf246a09.js";import"./npm~eventemitter3-15d04946.js";import"./npm~xml-lexer-0debe984.js";import"./npm~@ckeditor~ckeditor5-vue_-1322dee8.js";import"./npm~sortablejs-b86fd812.js";import"./npm~tslib-f3101d7c.js";const D={name:"ns-modules",props:["url","upload"],data(){return{rawModules:[],searchPlaceholder:h('Press "/" to search modules'),total_enabled:0,total_disabled:0,searchText:"",searchTimeOut:null}},mounted(){this.loadModules().subscribe(),document.addEventListener("keypress",s=>{s.key==="/"&&this.$refs.searchField!==null&&setTimeout(()=>{this.$refs.searchField.select()},1)})},watch:{},computed:{noModules(){return Object.values(this.modules).length===0},modules(){if(this.searchText.length>0){const s=Object.values(this.rawModules).filter(r=>{const l=new RegExp(this.searchText,"gi"),a=r.name.match(l);return a!==null?a.length>0:!1}),o=new Object;for(let r=0;r<s.length;r++)o[s[r].namespace]=s[r];return o}return this.rawModules},noModuleMessage(){return h("No module has been uploaded yet.")}},methods:{__:h,openPopupDetails(s){w.show(M,{title:h("{module}").replace("{module}",s.name),message:s.description})},download(s){document.location="/dashboard/modules/download/"+s.namespace},performMigration:async(s,o)=>{const r=async(l,a)=>new Promise((t,m)=>{p.post(`/api/modules/${s.namespace}/migrate`,{file:l,version:a}).subscribe({next:i=>{t(!0)},error:i=>d.error(i.message,null,{duration:4e3}).subscribe()})});if(o=o||s.migrations,o){s.migrating=!0;for(let l in o)for(let a=0;a<o[l].length;a++){const t=o[l][a];await r(t,l)}s.migrating=!1,s.migrated=!0}},truncateText(s,o,r="..."){let l=s.split(" ");return l.length>o&&(l=l.slice(0,o),l.push(r)),l.join(" ")},countWords(s){return s.split(" ").length},refreshModules(){this.loadModules().subscribe()},enableModule(s){const o=`${this.url}/${s.namespace}/enable`;p.put(o).subscribe({next:async r=>{d.success(r.message).subscribe(),this.loadModules().subscribe({next:l=>{document.location.reload()},error:l=>{d.error(l.message).subscribe()}})},error:r=>{d.error(r.message).subscribe()}})},disableModule(s){const o=`${this.url}/${s.namespace}/disable`;p.put(o).subscribe({next:r=>{d.success(r.message).subscribe(),this.loadModules().subscribe({next:l=>{document.location.reload()},error:l=>{d.error(l.message).subscribe()}})},error:r=>{d.error(r.message).subscribe()}})},loadModules(){return p.get(this.url).pipe(T(s=>(this.rawModules=s.modules,this.total_enabled=s.total_enabled,this.total_disabled=s.total_disabled,s)))},removeModule(s){if(confirm(h('Would you like to delete "{module}"? All data created by the module might also be deleted.').replace("{module}",s.name))){const o=`${this.url}/${s.namespace}/delete`;p.delete(o).subscribe({next:r=>{this.loadModules().subscribe({next:l=>{document.location.reload()}})},error:r=>{d.error(r.message,null,{duration:5e3}).subscribe()}})}}}},F={id:"module-wrapper",class:"flex-auto flex flex-col pb-4"},V={class:"flex flex-col md:flex-row md:justify-between md:items-center"},R={class:"flex flex-col md:flex-row md:justify-between md:items-center -mx-2"},j={class:"px-2"},A={class:"ns-button mb-2"},U=e("i",{class:"las la-sync"},null,-1),W={class:"mx-2"},z={class:"px-2"},H={class:"ns-button mb-2"},S=["href"],L=e("i",{class:"las la-angle-right"},null,-1),q={class:"px-2 w-auto"},G={class:"input-group mb-2 shadow border-2 info rounded overflow-hidden"},I=["placeholder"],J={class:"header-tabs flex -mx-4 flex-wrap"},K={class:"px-4 text-xs text-blue-500 font-semibold hover:underline"},Q={href:"#"},X={class:"px-4 text-xs text-blue-500 font-semibold hover:underline"},Y={href:"#"},Z={class:"module-section flex-auto flex flex-wrap -mx-4"},O={key:0,class:"p-4 flex-auto flex"},$={class:"flex h-full flex-auto border-dashed border-2 border-box-edge bg-surface justify-center items-center"},ee={class:"font-bold text-xl text-primary text-center"},se={key:1,class:"p-4 flex-auto flex"},te={class:"flex h-full flex-auto border-dashed border-2 border-box-edge bg-surface justify-center items-center"},oe={class:"font-bold text-xl text-primary text-center"},re={class:"ns-modules rounded shadow overflow-hidden ns-box"},le={class:"module-head h-32 p-2"},ie={class:"font-semibold text-lg"},ae={class:"text-xs flex justify-between"},ne={class:"py-2 text-sm"},de=["onClick"],ce={class:"ns-box-footer border-t p-2 flex justify-between"},ue={class:"flex -mx-1"},me={class:"px-1 flex -mx-1"},pe={class:"px-1 flex"},he=e("i",{class:"las la-archive"},null,-1),_e={class:"px-1 flex"},xe=e("i",{class:"las la-trash"},null,-1);function fe(s,o,r,l,a,t){const m=P("ns-button");return c(),u("div",F,[e("div",V,[e("div",R,[e("span",j,[e("div",A,[e("a",{onClick:o[0]||(o[0]=i=>t.refreshModules()),class:"items-center justify-center rounded cursor-pointer shadow flex px-3 py-1"},[U,e("span",W,n(t.__("Refresh")),1)])])]),e("span",z,[e("div",H,[e("a",{href:r.upload,class:"flex items-center justify-center rounded cursor-pointer shadow px-3 py-1"},[e("span",null,n(t.__("Upload")),1),L],8,S)])]),e("div",q,[e("div",G,[E(e("input",{ref:"searchField",placeholder:a.searchPlaceholder,"onUpdate:modelValue":o[1]||(o[1]=i=>a.searchText=i),type:"text",class:"w-full md:w-60 outline-none py-1 px-2"},null,8,I),[[k,a.searchText]])])])]),e("div",J,[e("div",K,[e("a",Q,n(t.__("Enabled"))+"("+n(a.total_enabled)+")",1)]),e("div",X,[e("a",Y,n(t.__("Disabled"))+" ("+n(a.total_disabled)+")",1)])])]),e("div",Z,[t.noModules&&a.searchText.length===0?(c(),u("div",O,[e("div",$,[e("h2",ee,n(t.noModuleMessage),1)])])):_("",!0),t.noModules&&a.searchText.length>0?(c(),u("div",se,[e("div",te,[e("h2",oe,n(t.__("No modules matches your search term.")),1)])])):_("",!0),(c(!0),u(N,null,B(t.modules,(i,y)=>(c(),u("div",{class:"px-4 w-full md:w-1/2 lg:w-1/3 xl:1/4 py-4",key:y},[e("div",re,[e("div",le,[e("h3",ie,n(i.name),1),e("p",ae,[e("span",null,n(i.author),1),e("strong",null,"v"+n(i.version),1)]),e("p",ne,[b(n(t.truncateText(i.description,20,"..."))+" ",1),t.countWords(i.description)>20?(c(),u("a",{key:0,class:"text-xs text-info-tertiary hover:underline",onClick:x=>t.openPopupDetails(i),href:"javascript:void(0)"},"["+n(t.__("Read More"))+"]",9,de)):_("",!0)])]),e("div",ce,[i.enabled?_("",!0):(c(),v(m,{key:0,onClick:x=>t.enableModule(i),type:"info"},{default:f(()=>[b(n(t.__("Enable")),1)]),_:2},1032,["onClick"])),i.enabled?(c(),v(m,{key:1,onClick:x=>t.disableModule(i),type:"success"},{default:f(()=>[b(n(t.__("Disable")),1)]),_:2},1032,["onClick"])):_("",!0),e("div",ue,[e("div",me,[e("div",pe,[g(m,{onClick:x=>t.download(i),type:"info"},{default:f(()=>[he]),_:2},1032,["onClick"])]),e("div",_e,[g(m,{onClick:x=>t.removeModule(i),type:"error"},{default:f(()=>[xe]),_:2},1032,["onClick"])])])])])])]))),128))])])}const ws=C(D,[["render",fe]]);export{ws as default};