import{h as n}from"./npm~moment-fbc5633a.js";import{c as h,e as f}from"./components-845ec4ed.js";import{b as l,a as x}from"./bootstrap-08ba1d91.js";import{_ as d,n as y}from"./currency-ab26e44d.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";import{ak as D,ac as p,A as c,D as t,c as u,F as g,ai as k}from"./npm~@vue~runtime-core_-ff0546fa.js";import{U as r}from"./npm~@vue~shared_-3ce114fe.js";import"./ns-alert-popup-b14f8b15.js";import"./npm~numeral-85b533a7.js";import"./npm~@ckeditor~ckeditor5-build-classic_-27365139.js";import"./npm~currency.js-57f74176.js";import"./npm~@vue~reactivity_-547540a3.js";import"./ns-avatar-image-c7eda85f.js";import"./npm~@dicebear~avatars_-e718895d.js";import"./npm~pure-color-7e91fe3a.js";import"./npm~svgson-b28014ad.js";import"./npm~deep-rename-keys-b2342f4f.js";import"./npm~kind-of-f578382b.js";import"./npm~is-buffer-793dba8c.js";import"./npm~rename-keys-392f1d0e.js";import"./npm~xml-reader-442daf8d.js";import"./npm~eventemitter3-3e95be7d.js";import"./npm~xml-lexer-4446ceee.js";import"./npm~@dicebear~avatars-avataaars-sprites_-c793f8f6.js";import"./npm~@vue~runtime-dom_-aa3a306b.js";import"./ns-prompt-popup-b097095e.js";import"./npm~@ckeditor~ckeditor5-vue_-be5de702.js";import"./npm~vue-4c913503.js";import"./npm~@vue~compiler-dom_-85e36bcf.js";import"./npm~@vue~compiler-core_-be14e06b.js";import"./npm~vue2-daterange-picker-ccd86bea.js";import"./npm~vuedraggable-4b4454f2.js";import"./npm~sortablejs-314556ad.js";import"./npm~vue-upload-component-6f0f62ed.js";import"./npm~lodash-9a4afe3d.js";import"./npm~rxjs-eeb06f17.js";import"./npm~tslib-8dbab242.js";import"./npm~laravel-echo-198fd56d.js";import"./npm~pusher-js-a179ff58.js";import"./npm~axios-28bc18a3.js";import"./npm~chart.js-3fed1729.js";import"./npm~rx-da74c705.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-d162420d.js";import"./npm~@babel~runtime_-57eb5ba4.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-2f8f27d8.js";import"./npm~fraction.js-704ae1f4.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-4e17e537.js";import"./npm~javascript-natural-sort-82d7d2c3.js";import"./npm~escape-latex-6c71499e.js";const w={name:"ns-payment-types-report",props:["storeName","storeLogo"],data(){return{startDateField:{type:"datetimepicker",value:n(ns.date.current).startOf("day").format("YYYY-MM-DD HH:mm:ss")},endDateField:{type:"datetimepicker",value:n(ns.date.current).endOf("day").format("YYYY-MM-DD HH:mm:ss")},report:[],ns:window.ns,field:{type:"datetimepicker",value:"2021-02-07",name:"date"}}},components:{nsDatepicker:h,nsDateTimePicker:f},computed:{},mounted(){},methods:{__:d,nsCurrency:y,printSaleReport(){this.$htmlToPaper("sale-report")},loadReport(){if(this.startDateField.value===null||this.endDateField.value===null)return l.error(d("Unable to proceed. Select a correct time range.")).subscribe();const m=n(this.startDateField.value);if(n(this.endDateField.value).isBefore(m))return l.error(d("Unable to proceed. The current time range is not valid.")).subscribe();x.post("/api/reports/payment-types",{startDate:this.startDateField.value,endDate:this.endDateField.value}).subscribe({next:s=>{this.report=s},error:s=>{l.error(s.message).subscribe()}})}}},F={id:"report-section",class:"px-4"},Y={class:"flex -mx-2"},C={class:"px-2"},M={class:"px-2"},T={class:"px-2"},B=t("i",{class:"las la-sync-alt text-xl"},null,-1),S={class:"pl-2"},H={class:"px-2"},P=t("i",{class:"las la-print text-xl"},null,-1),R={class:"pl-2"},L={id:"sale-report",class:"anim-duration-500 fade-in-entrance"},N={class:"flex w-full"},j={class:"my-4 flex justify-between w-full"},U={class:"text-secondary"},O={class:"pb-1 border-b border-dashed"},V={class:"pb-1 border-b border-dashed"},A={class:"pb-1 border-b border-dashed"},E=["src","alt"],q={class:"bg-box-background shadow rounded my-4"},z={class:"border-b border-box-edge"},G={class:"table ns-table w-full"},I={class:"text-primary"},J={class:"text-primary border p-2 text-left"},K={width:"150",class:"text-primary border p-2 text-right"},Q={class:"text-primary"},W={class:"p-2 border border-box-edge"},X={class:"p-2 border text-right"},Z={class:"text-primary font-semibold"},$={class:"p-2 border border-box-edge text-primary"},tt={class:"p-2 border text-right"};function et(m,i,s,rt,o,e){const _=D("ns-field");return p(),c("div",F,[t("div",Y,[t("div",C,[u(_,{field:o.startDateField},null,8,["field"])]),t("div",M,[u(_,{field:o.endDateField},null,8,["field"])]),t("div",T,[t("button",{onClick:i[0]||(i[0]=a=>e.loadReport()),class:"rounded flex justify-between bg-input-button shadow py-1 items-center text-primary px-2"},[B,t("span",S,r(e.__("Load")),1)])]),t("div",H,[t("button",{onClick:i[1]||(i[1]=a=>e.printSaleReport()),class:"rounded flex justify-between bg-input-button shadow py-1 items-center text-primary px-2"},[P,t("span",R,r(e.__("Print")),1)])])]),t("div",L,[t("div",N,[t("div",j,[t("div",U,[t("ul",null,[t("li",O,r(e.__("Date : {date}").replace("{date}",o.ns.date.current)),1),t("li",V,r(e.__("Document : Payment Type")),1),t("li",A,r(e.__("By : {user}").replace("{user}",o.ns.user.username)),1)])]),t("div",null,[t("img",{class:"w-24",src:s.storeLogo,alt:s.storeName},null,8,E)])])]),t("div",q,[t("div",z,[t("table",G,[t("thead",I,[t("tr",null,[t("th",J,r(e.__("Summary")),1),t("th",K,r(e.__("Total")),1)])]),t("tbody",Q,[(p(!0),c(g,null,k(o.report.summary,(a,b)=>(p(),c("tr",{key:b,class:"font-semibold"},[t("td",W,r(a.label),1),t("td",X,r(e.nsCurrency(a.total)),1)]))),128))]),t("tfoot",Z,[t("tr",null,[t("td",$,r(e.__("Total")),1),t("td",tt,r(e.nsCurrency(o.report.total)),1)])])])])])])])}const ee=v(w,[["render",et]]);export{ee as default};
