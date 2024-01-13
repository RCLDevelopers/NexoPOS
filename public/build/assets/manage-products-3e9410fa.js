import{P as E,b as g,a as k,F as D}from"./bootstrap-ece284e4.js";import{n as S,b as M}from"./ns-prompt-popup-4291c6fc.js";import{_ as p,n as N}from"./currency-ab26e44d.js";import{m as q,l as R}from"./npm~@vue~runtime-dom_-aa3a306b.js";import{_ as G}from"./_plugin-vue_export-helper-c27b6911.js";import{ac as n,A as l,D as r,aG as U,F as b,ai as v,z as h,ak as C,c as w,aE as O,I as P,aj as L,y as $}from"./npm~@vue~runtime-core_-ff0546fa.js";import{U as u,z as V}from"./npm~@vue~shared_-3ce114fe.js";import"./npm~lodash-9a4afe3d.js";import"./npm~@ckeditor~ckeditor5-build-classic_-27365139.js";import"./npm~laravel-echo-198fd56d.js";import"./npm~pusher-js-a179ff58.js";import"./npm~axios-28bc18a3.js";import"./npm~chart.js-3fed1729.js";import"./npm~rxjs-eeb06f17.js";import"./npm~tslib-8dbab242.js";import"./npm~moment-fbc5633a.js";import"./npm~vue-4c913503.js";import"./npm~@vue~compiler-dom_-85e36bcf.js";import"./npm~@vue~compiler-core_-be14e06b.js";import"./npm~@vue~reactivity_-547540a3.js";import"./npm~rx-da74c705.js";import"./npm~@wordpress~hooks_-bd0b7221.js";import"./npm~mathjs-d162420d.js";import"./npm~@babel~runtime_-57eb5ba4.js";import"./npm~decimal.js-d133ee8e.js";import"./npm~complex.js-2f8f27d8.js";import"./npm~fraction.js-704ae1f4.js";import"./npm~typed-function-de33f2d8.js";import"./npm~seedrandom-4e17e537.js";import"./npm~javascript-natural-sort-82d7d2c3.js";import"./npm~escape-latex-6c71499e.js";import"./npm~@ckeditor~ckeditor5-vue_-be5de702.js";import"./npm~numeral-85b533a7.js";import"./npm~currency.js-57f74176.js";const Q={name:"ns-product-group",props:["fields"],watch:{searchValue(){clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchProducts(this.searchValue)},1e3)},products:{deep:!0,handler(){this.$forceUpdate()}}},computed:{totalProducts(){return this.products.length>0?(this.$emit("update",this.products),this.products.map(e=>parseFloat(e.sale_price)*parseFloat(e.quantity)).reduce((e,t)=>e+t)):0}},mounted(){const e=this.fields.filter(t=>t.name==="product_subitems");e.length>0&&e[0].value!==void 0&&e[0].value.length>0&&(this.products=e[0].value)},data(){return{searchValue:"",searchTimeout:null,results:[],products:[]}},methods:{__:p,nsCurrency:N,setSalePrice(){this.$emit("updateSalePrice",this.totalProducts)},removeProduct(e){E.show(S,{title:p("Delete Sub item"),message:p("Would you like to delete this sub item?"),onAction:t=>{t&&this.products.splice(e,1)}})},toggleUnitField(e){e._unit_toggled||(e._unit_toggled=!e._unit_toggled),setTimeout(()=>{e._unit_toggled&&this.$refs.unitField[0].addEventListener("blur",()=>{e._unit_toggled=!1,this.$forceUpdate()})},200)},toggleQuantityField(e){e._quantity_toggled=!e._quantity_toggled,setTimeout(()=>{e._quantity_toggled&&(this.$refs.quantityField[0].select(),this.$refs.quantityField[0].addEventListener("blur",()=>{this.toggleQuantityField(e),this.$forceUpdate()}))},200)},togglePriceField(e){e._price_toggled=!e._price_toggled,setTimeout(()=>{e._price_toggled&&(this.$refs.priceField[0].select(),this.$refs.priceField[0].addEventListener("blur",()=>{this.togglePriceField(e),this.$forceUpdate()}))},200)},redefineUnit(e){const t=e.unit_quantities.filter(o=>o.id===e.unit_quantity_id);t.length>0&&(e.unit_quantity=t[0],e.unit_id=t[0].unit.id,e.unit=t[0].unit,e.sale_price=t[0].sale_price)},async addResult(e){if(this.searchValue="",e.type==="grouped")return g.error(p("Unable to add a grouped product.")).subscribe();try{const t=await new Promise((d,i)=>{E.show(M,{label:p("Choose The Unit"),options:e.unit_quantities.map(s=>({label:s.unit.name,value:s.id})),resolve:d,reject:i})}),o=e.unit_quantities.filter(d=>parseInt(d.id)===parseInt(t[0].value));this.products.push({name:e.name,unit_quantity_id:t[0].value,unit_quantity:o[0],unit_id:o[0].unit.id,unit:o[0].unit,product_id:o[0].product_id,quantity:1,_price_toggled:!1,_quantity_toggled:!1,_unit_toggled:!1,unit_quantities:e.unit_quantities,sale_price:o[0].sale_price}),this.$emit("update",this.products)}catch(t){console.log(t)}},searchProducts(e){k.post("/api/products/search",{search:e,arguments:{type:{comparison:"<>",value:"grouped"},searchable:{comparison:"in",value:[0,1]}}}).subscribe({next:t=>{this.results=t},error:t=>{g.error(t.message||p("An unexpected error occurred"),p("Ok"),{duration:3e3}).subscribe()}})}}},B={class:"flex flex-col px-4 w-full"},J={class:"md:-mx-4 flex flex-col md:flex-row"},K={class:"md:px-4 w-full"},W={class:"input-group border-2 rounded info flex w-full"},z=["placeholder"],H={key:0,class:"h-0 relative"},Y={class:"ns-vertical-menu absolute w-full"},X=["onClick"],Z={class:"my-2"},ee={class:"ns-table"},te={colspan:"2",class:"border"},se={colspan:"2",class:"border p-2"},re={class:"flex justify-between"},ie={class:"font-bold"},oe=["onClick"],ne=["onClick"],le={class:"input-group"},ae=["onChange","onUpdate:modelValue"],de=["value"],ue=["onClick"],ce={key:0,class:"cursor-pointer border-b border-dashed border-info-secondary"},fe=["onUpdate:modelValue"],me=["onClick"],he={key:0,class:"cursor-pointer border-b border-dashed border-info-secondary"},pe=["onUpdate:modelValue"],be={key:0},_e={colspan:"2",class:"border p-2 text-center"},ge={key:0},ve={class:"w-1/2 border p-2 text-left"},ye={class:"w-1/2 border p-2 text-right"};function xe(e,t,o,d,i,s){return n(),l("div",B,[r("div",J,[r("div",K,[r("div",W,[U(r("input",{placeholder:s.__("Search products..."),"onUpdate:modelValue":t[0]||(t[0]=a=>i.searchValue=a),type:"text",class:"flex-auto p-2 outline-none"},null,8,z),[[q,i.searchValue]]),r("button",{onClick:t[1]||(t[1]=a=>s.setSalePrice()),class:"px-2"},u(s.__("Set Sale Price")),1)]),i.results.length>0&&i.searchValue.length>0?(n(),l("div",H,[r("ul",Y,[(n(!0),l(b,null,v(i.results,a=>(n(),l("li",{key:a.id,onClick:_=>s.addResult(a),class:"p-2 border-b cursor-pointer"},u(a.name),9,X))),128))])])):h("",!0),r("div",Z,[r("table",ee,[r("thead",null,[r("tr",null,[r("th",te,u(s.__("Products")),1)])]),r("tbody",null,[(n(!0),l(b,null,v(i.products,(a,_)=>(n(),l("tr",{key:_},[r("td",se,[r("div",re,[r("h3",ie,u(a.name),1),r("span",{onClick:c=>s.removeProduct(_),class:"hover:underline text-error-secondary cursor-pointer"},u(s.__("Remove")),9,oe)]),r("ul",null,[r("li",{onClick:c=>s.toggleUnitField(a),class:"flex justify-between p-1 hover:bg-box-elevation-hover"},[r("span",null,u(s.__("Unit"))+":",1),r("div",le,[U(r("select",{onChange:c=>s.redefineUnit(a),ref_for:!0,ref:"unitField",type:"text","onUpdate:modelValue":c=>a.unit_quantity_id=c},[(n(!0),l(b,null,v(a.unit_quantities,c=>(n(),l("option",{key:c.id,value:c.id},u(c.unit.name)+" ("+u(c.quantity)+")",9,de))),128))],40,ae),[[R,a.unit_quantity_id]])])],8,ne),r("li",{onClick:c=>s.toggleQuantityField(a),class:"flex justify-between p-1 hover:bg-box-elevation-hover"},[r("span",null,u(s.__("Quantity"))+":",1),a._quantity_toggled?h("",!0):(n(),l("span",ce,u(a.quantity),1)),a._quantity_toggled?U((n(),l("input",{key:1,ref_for:!0,ref:"quantityField",type:"text","onUpdate:modelValue":c=>a.quantity=c},null,8,fe)),[[q,a.quantity]]):h("",!0)],8,ue),r("li",{onClick:c=>s.togglePriceField(a),class:"flex justify-between p-1 hover:bg-box-elevation-hover"},[r("span",null,u(s.__("Price"))+":",1),a._price_toggled?h("",!0):(n(),l("span",he,u(s.nsCurrency(a.sale_price)),1)),a._price_toggled?U((n(),l("input",{key:1,ref_for:!0,ref:"priceField",type:"text","onUpdate:modelValue":c=>a.sale_price=c},null,8,pe)),[[q,a.sale_price]]):h("",!0)],8,me)])])]))),128)),i.products.length===0?(n(),l("tr",be,[r("td",_e,u(s.__("No product are added to this group.")),1)])):h("",!0)]),i.products.length>0?(n(),l("tfoot",ge,[r("tr",null,[r("td",ve,u(s.__("Total")),1),r("td",ye,u(s.nsCurrency(s.totalProducts)),1)])])):h("",!0)])])])])])}const we=G(Q,[["render",xe]]),ke={components:{nsProductGroup:we},data:()=>({formValidation:new D,nsSnackBar:g,nsHttpClient:k,_sampleVariation:null,unitLoaded:!1,unitLoadError:!1,form:"",hasLoaded:!1,hasError:!1}),watch:{form:{deep:!0,handler(e){this.form.variations.forEach(t=>{if(this.formValidation.extractFields(t.tabs.identification.fields).type==="grouped"){for(let d in t.tabs)["identification","groups","taxes","units"].includes(d)||(t.tabs[d].visible=!1);t.tabs.groups&&(t.tabs.groups.visible=!0)}else{for(let d in t.tabs)["identification","groups","taxes","units"].includes(d)||(t.tabs[d].visible=!0);t.tabs.groups&&(t.tabs.groups.visible=!1)}})}}},computed:{defaultVariation(){const e=new Object;for(let t in this._sampleVariation.tabs)e[t]=new Object,e[t].label=this._sampleVariation.tabs[t].label,e[t].active=this._sampleVariation.tabs[t].active,e[t].fields=this._sampleVariation.tabs[t].fields.filter(o=>!["category_id","product_type","stock_management","expires"].includes(o.name)).map(o=>((typeof o.value=="string"&&o.value.length===0||o.value===null)&&(o.value=""),o));return{id:"",tabs:e}}},props:["submitMethod","submitUrl","returnUrl","src","units-url"],methods:{__:p,nsCurrency:N,async handleSaved(e,t,o,d){e.data.entry&&(await this.loadForm()).form.variations[o].tabs[t].fields.forEach(s=>{s.name===d.name&&(s.value=e.data.entry.id)})},getGroupProducts(e){if(e.groups){const t=e.groups.fields.filter(o=>o.name==="products_subitems");if(t.length>0)return t[0].value}return[]},setProducts(e,t){t.groups.fields.forEach(o=>{o.name==="product_subitems"&&(o.value=e)})},triggerRecompute(e){},getUnitQuantity(e){const t=e.filter(o=>o.name==="quantity").map(o=>o.value);return t.length>0?t[0]:0},removeUnitPriceGroup(e,t){const o=e.filter(d=>d.name==="id"&&d.value!==void 0);Popup.show(S,{title:p("Confirm Your Action"),message:p("Would you like to delete this group ?"),onAction:d=>{if(d)if(o.length>0)this.confirmUnitQuantityDeletion({group_fields:e,group:t});else{const i=t.indexOf(e);t.splice(i,1)}}})},confirmUnitQuantityDeletion({group_fields:e,group:t}){Popup.show(S,{title:p("Your Attention Is Required"),size:"w-3/4-screen h-2/5-screen",message:p("The current unit you're about to delete has a reference on the database and it might have already procured stock. Deleting that reference will remove procured stock. Would you proceed ?"),onAction:o=>{if(o){const d=e.filter(i=>i.name==="id").map(i=>i.value)[0];k.delete(`/api/products/units/quantity/${d}`).subscribe(i=>{const s=t.indexOf(e);t.splice(s,1),g.success(i.message).subscribe()},i=>{nsSnackbar.error(i.message).subscribe()})}}})},addUnitGroup(e){if(e.options.length===0)return g.error(p("Please select at least one unit group before you proceed.")).subscribe();e.options.length>e.groups.length?e.groups.push(JSON.parse(JSON.stringify(e.fields))):g.error(p("There shoulnd't be more option than there are units.")).subscribe()},loadAvailableUnits(e){this.unitLoaded=!1,this.unitLoadError=!1;const t=e.fields.filter(o=>o.name==="unit_group")[0].value;k.get(this.unitsUrl.replace("{id}",t)).subscribe({next:o=>{e.fields.forEach(d=>{d.type==="group"&&(d.options=o,d.fields.forEach(i=>{["unit_id","convert_unit_id"].includes(i.name)&&(i.options=o.map(s=>({label:s.name,value:s.id})))}))}),this.unitLoaded=!0,this.$forceUpdate()},error:o=>{this.unitLoadError=!0}})},submit(){if(this.formValidation.validateFields([this.form.main]),this.form.variations.map(i=>this.formValidation.validateForm(i)).filter(i=>i.length>0).length>0||Object.values(this.form.main.errors).length>0)return g.error(p("Unable to proceed the form is not valid.")).subscribe();const t=this.form.variations.map((i,s)=>i.tabs.images.groups.filter(a=>a.filter(_=>_.name==="featured"&&_.value===1).length>0));if(t[0]&&t[0].length>1)return g.error(p("Unable to proceed, more than one product is set as featured")).subscribe();const o=[];if(this.form.variations.map((i,s)=>i.tabs.units.fields.filter(a=>a.type==="group").forEach(a=>{a.groups.forEach(_=>{o.push(this.formValidation.validateFields(_))})})),o.length===0)return g.error(p("Either Selling or Purchase unit isn't defined. Unable to proceed.")).subscribe();if(o.filter(i=>i===!1).length>0)return this.$forceUpdate(),g.error(p("Unable to proceed as one of the unit group field is invalid")).subscribe();const d={...this.formValidation.extractForm(this.form),variations:this.form.variations.map((i,s)=>{const a=this.formValidation.extractForm(i);s===0&&(a.$primary=!0),a.images=i.tabs.images.groups.map(c=>this.formValidation.extractFields(c));const _=new Object;return i.tabs.units.fields.filter(c=>c.type==="group").forEach(c=>{_[c.name]=c.groups.map(A=>this.formValidation.extractFields(A))}),a.units={...a.units,..._},a})};this.formValidation.disableForm(this.form),k[this.submitMethod?this.submitMethod.toLowerCase():"post"](this.submitUrl,d).subscribe(i=>{if(i.status==="success"){if(this.submitMethod==="POST"&&this.returnUrl!==!1)return document.location=i.data.editUrl||this.returnUrl;g.info(i.message,p("Okay"),{duration:3e3}).subscribe(),this.$emit("saved")}this.formValidation.enableForm(this.form)},i=>{g.error(i.message,void 0,{duration:5e3}).subscribe(),this.formValidation.enableForm(this.form),i.response&&this.formValidation.triggerError(this.form,i.response.data)})},deleteVariation(e){confirm(p("Would you like to delete this variation ?"))&&this.form.variations.splice(e,1)},setTabActive(e,t){for(let o in t)o!==e&&(t[o].active=!1);t[e].active=!0,e==="units"&&this.loadAvailableUnits(t[e])},duplicate(e){this.form.variations.push(Object.assign({},e))},newVariation(){this.form.variations.push(this.defaultVariation)},getActiveTab(e){for(let t in e)if(e[t].active)return e[t];return!1},getActiveTabKey(e){for(let t in e)if(e[t].active)return t;return!1},parseForm(e){return e.main.value=e.main.value===void 0?"":e.main.value,e.main=this.formValidation.createFields([e.main])[0],e.variations.forEach((t,o)=>{let d=0;for(let i in t.tabs)d===0&&t.tabs[i].active===void 0?(t.tabs[i].active=!0,this._sampleVariation=JSON.parse(JSON.stringify(t)),t.tabs[i].fields&&(t.tabs[i].fields=this.formValidation.createFields(t.tabs[i].fields.filter(s=>s.name!=="name")))):t.tabs[i].fields&&(t.tabs[i].fields=this.formValidation.createFields(t.tabs[i].fields)),t.tabs[i].active=t.tabs[i].active===void 0?!1:t.tabs[i].active,t.tabs[i].visible=t.tabs[i].visible===void 0?!0:t.tabs[i].visible,d++}),e},loadForm(){return new Promise((e,t)=>{const o=k.get(`${this.src}`);this.hasLoaded=!1,this.hasError=!1,o.subscribe({next:d=>{e(d),this.hasLoaded=!0,this.form=this.parseForm(d.form)},error:d=>{t(d),this.hasError=!0}})})},addImage(e){e.tabs.images.groups.push(this.formValidation.createFields(JSON.parse(JSON.stringify(e.tabs.images.fields))))},removeImage(e,t){const o=e.tabs.images.groups.indexOf(t);e.tabs.images.groups.splice(o,1)}},async mounted(){await this.loadForm()},name:"ns-manage-products"},Ve={class:"form flex-auto",id:"crud-form"},Ue={key:0,class:"flex items-center h-full justify-center flex-auto"},Fe={key:1},Ce={class:"flex flex-col"},Pe={class:"flex justify-between items-center"},qe={for:"title",class:"font-bold my-2 text-primary"},Ae={for:"title",class:"text-sm my-2 text-primary"},Te=["href"],Se=["disabled"],je=["disabled"],Ee={key:0,class:"text-xs text-primary py-1"},Oe={id:"form-container",class:"-mx-4 flex flex-wrap mt-4"},Le={class:"px-4 w-full"},$e={id:"card-header",class:"flex flex-wrap justify-between ns-tab ml-4"},Ne={class:"flex flex-wrap"},Ge=["onClick"],Ie={key:0,class:"rounded-full bg-error-secondary text-white h-6 w-6 flex font-semibold items-center justify-center"},De=r("div",{class:"flex items-center justify-center -mx-1"},null,-1),Me={class:"card-body ns-tab-item"},Re={class:"rounded shadow p-2"},Qe={key:0,class:"-mx-4 flex flex-wrap"},Be={key:1,class:"-mx-4 flex flex-wrap text-primary"},Je={class:"flex flex-col px-4 w-full md:w-1/2 lg:w-1/3"},Ke={class:"rounded border border-box-elevation-edge bg-box-elevation-background flex justify-between p-2 items-center"},We=["onClick"],ze=r("i",{class:"las la-plus-circle"},null,-1),He=[ze],Ye={class:"rounded border border-box-elevation-edge flex flex-col overflow-hidden"},Xe={class:"p-2"},Ze=["onClick"],et={key:2,class:"-mx-4 flex flex-wrap text-primary"},tt={key:3,class:"-mx-4 flex flex-wrap"},st={class:"px-4 w-full md:w-1/2 lg:w-1/3"},rt={class:"mb-2"},it={class:"font-medium text-primary"},ot={class:"py-1 text-sm text-primary"},nt={class:"mb-2"},lt=["onClick"],at=r("span",{class:"rounded-full border-2 ns-inset-button info h-8 w-8 flex items-center justify-center"},[r("i",{class:"las la-plus-circle"})],-1),dt={class:"-mx-4 flex flex-wrap"},ut={class:"shadow rounded overflow-hidden bg-box-elevation-background text-primary"},ct={class:"border-b text-sm p-2 flex justify-between text-primary border-box-elevation-edge"},ft={class:"p-2 mb-2"},mt=["onClick"],ht={key:1,class:"px-4 w-full lg:w-2/3 flex justify-center items-center"},pt={key:2,class:"px-4 w-full md:w-1/2 lg:w-2/3 flex flex-col justify-center items-center"},bt=r("i",{class:"las la-frown text-7xl"},null,-1),_t={class:"w-full md:w-1/3 py-3 text-center text-sm text-primary"};function gt(e,t,o,d,i,s){const a=C("ns-spinner"),_=C("ns-notice"),c=C("ns-field"),A=C("ns-product-group");return n(),l("div",Ve,[Object.values(e.form).length===0&&e.hasLoaded?(n(),l("div",Ue,[w(a)])):h("",!0),Object.values(e.form).length===0&&e.hasError?(n(),l("div",Fe,[w(_,{color:"error"},{title:O(()=>[P(u(s.__("An Error Has Occured")),1)]),description:O(()=>[P(u(s.__("An unexpected error has occured while loading the form. Please check the log or contact the support.")),1)]),_:1})])):h("",!0),Object.values(e.form).length>0?(n(),l(b,{key:2},[r("div",Ce,[r("div",Pe,[r("label",qe,u(e.form.main.label),1),r("div",Ae,[o.returnUrl?(n(),l("a",{key:0,href:o.returnUrl,class:"rounded-full border ns-inset-button error hover:bg-error-tertiary px-2 py-1"},u(s.__("Return")),9,Te)):h("",!0)])]),r("div",{class:V([e.form.main.disabled?"":e.form.main.errors.length>0?"border-error-tertiary":"","input-group info flex border-2 rounded overflow-hidden"])},[U(r("input",{"onUpdate:modelValue":t[0]||(t[0]=m=>e.form.main.value=m),onBlur:t[1]||(t[1]=m=>e.formValidation.checkField(e.form.main)),onChange:t[2]||(t[2]=m=>e.formValidation.checkField(e.form.main)),disabled:e.form.main.disabled,type:"text",class:V([(e.form.main.disabled,""),"flex-auto text-primary outline-none h-10 px-2"])},null,42,Se),[[q,e.form.main.value]]),r("button",{disabled:e.form.main.disabled,class:V([e.form.main.disabled?"":e.form.main.errors.length>0?"bg-error-tertiary":"","outline-none px-4 h-10 rounded-none"]),onClick:t[3]||(t[3]=m=>s.submit())},[L(e.$slots,"save",{},()=>[P(u(s.__("Save")),1)])],10,je)],2),e.form.main.description&&e.form.main.errors.length===0?(n(),l("p",Ee,u(e.form.main.description),1)):h("",!0),(n(!0),l(b,null,v(e.form.main.errors,(m,F)=>(n(),l("p",{class:"text-xs py-1 text-error-tertiary",key:F},[r("span",null,[L(e.$slots,"error-required",{},()=>[P(u(m.identifier),1)])])]))),128))]),r("div",Oe,[r("div",Le,[(n(!0),l(b,null,v(e.form.variations,(m,F)=>(n(),l("div",{id:"tabbed-card",class:"mb-8",key:F},[r("div",$e,[r("div",Ne,[(n(!0),l(b,null,v(m.tabs,(f,x)=>(n(),l(b,null,[f.visible?(n(),l("div",{onClick:y=>s.setTabActive(x,m.tabs),class:V([f.active?"active":"inactive","tab cursor-pointer text-primary px-4 py-2 rounded-tl-lg rounded-tr-lg flex justify-between"]),key:x},[r("span",{class:V(["block",f.errors&&f.errors.length>0?"mr-2":""])},u(f.label),3),f.errors&&f.errors.length>0?(n(),l("span",Ie,u(f.errors.length),1)):h("",!0)],10,Ge)):h("",!0)],64))),256))]),De]),r("div",Me,[r("div",Re,[["images","units","groups"].includes(s.getActiveTabKey(m.tabs))?h("",!0):(n(),l("div",Qe,[(n(!0),l(b,null,v(s.getActiveTab(m.tabs).fields,(f,x)=>(n(),l("div",{key:x,class:"flex flex-col px-4 w-full md:w-1/2 lg:w-1/3"},[w(c,{onSaved:y=>s.handleSaved(y,s.getActiveTabKey(m.tabs),F,f),field:f},null,8,["onSaved","field"])]))),128))])),s.getActiveTabKey(m.tabs)==="images"?(n(),l("div",Be,[r("div",Je,[r("div",Ke,[r("span",null,u(s.__("Add Images")),1),r("button",{onClick:f=>s.addImage(m),class:"outline-none rounded-full border flex items-center justify-center w-8 h-8 ns-inset-button info"},He,8,We)])]),(n(!0),l(b,null,v(s.getActiveTab(m.tabs).groups,(f,x)=>(n(),l("div",{key:x,class:"flex flex-col px-4 w-full md:w-1/2 lg:w-1/3 mb-4"},[r("div",Ye,[r("div",Xe,[(n(!0),l(b,null,v(f,(y,T)=>(n(),$(c,{key:T,field:y},null,8,["field"]))),128))]),r("div",{onClick:y=>s.removeImage(m,f),class:"text-center py-2 border-t border-box-elevation-edge text-sm cursor-pointer"},u(s.__("Remove Image")),9,Ze)])]))),128))])):h("",!0),s.getActiveTabKey(m.tabs)==="groups"?(n(),l("div",et,[w(A,{onUpdate:f=>s.setProducts(f,m.tabs),onUpdateSalePrice:f=>s.triggerRecompute(f,m.tabs),fields:s.getActiveTab(m.tabs).fields},null,8,["onUpdate","onUpdateSalePrice","fields"])])):h("",!0),s.getActiveTabKey(m.tabs)==="units"?(n(),l("div",tt,[r("div",st,[w(c,{onChange:f=>s.loadAvailableUnits(s.getActiveTab(m.tabs)),field:s.getActiveTab(m.tabs).fields[0]},null,8,["onChange","field"]),w(c,{onChange:f=>s.loadAvailableUnits(s.getActiveTab(m.tabs)),field:s.getActiveTab(m.tabs).fields[1]},null,8,["onChange","field"])]),e.unitLoaded?(n(!0),l(b,{key:0},v(s.getActiveTab(m.tabs).fields,(f,x)=>(n(),l(b,null,[f.type==="group"?(n(),l("div",{class:"px-4 w-full lg:w-2/3",key:x},[r("div",rt,[r("label",it,u(f.label),1),r("p",ot,u(f.description),1)]),r("div",nt,[r("div",{onClick:y=>s.addUnitGroup(f),class:"border-dashed border-2 p-1 bg-box-elevation-background border-box-elevation-edge flex justify-between items-center text-primary cursor-pointer rounded-lg"},[at,r("span",null,u(s.__("New Group")),1)],8,lt)]),r("div",dt,[(n(!0),l(b,null,v(f.groups,(y,T)=>(n(),l("div",{class:"px-4 w-full md:w-1/2 mb-4",key:T},[r("div",ut,[r("div",ct,[r("span",null,u(s.__("Available Quantity")),1),r("span",null,u(s.getUnitQuantity(y)),1)]),r("div",ft,[(n(!0),l(b,null,v(y,(j,I)=>(n(),$(c,{field:j,key:I},null,8,["field"]))),128))]),r("div",{onClick:j=>s.removeUnitPriceGroup(y,f.groups),class:"p-1 hover:bg-error-primary border-t border-box-elevation-edge flex items-center justify-center cursor-pointer font-medium"},u(s.__("Delete")),9,mt)])]))),128))])])):h("",!0)],64))),256)):h("",!0),!e.unitLoaded&&!e.unitLoadError?(n(),l("div",ht,[w(a)])):h("",!0),e.unitLoadError&&!e.unitLoaded?(n(),l("div",pt,[bt,r("p",_t,u(s.__("We were not able to load the units. Make sure there are units attached on the unit group selected.")),1)])):h("",!0)])):h("",!0)])])]))),128))])])],64)):h("",!0)])}const Zt=G(ke,[["render",gt]]);export{Zt as default};