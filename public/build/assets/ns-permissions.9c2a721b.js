import{b as m,n as g,f as x}from"./bootstrap.673b86ff.js";import{_ as y}from"./lang.2d0006f0.js";import{v}from"./runtime-dom.esm-bundler.68a12c3b.js";import{_ as k}from"./plugin-vue_export-helper.21dcd24c.js";import{b1 as i,aA as o,aB as n,bt as w,ao as f,az as d,L as h,b6 as p,b8 as P,al as T,y as _}from"./runtime-core.esm-bundler.aa7a54f6.js";const j=(e,s)=>e?(e=e.toString(),e.length>s?e.substring(0,s)+"...":e):"",C={name:"ns-permissions",filters:[j],data(){return{permissions:[],toggled:!1,roles:[],searchText:""}},computed:{filteredPermissions(){return this.searchText.length!==0?this.permissions.filter(e=>{const s=new RegExp(this.searchText,"i");return s.test(e.name)||s.test(e.namespace)}):this.permissions}},mounted(){this.loadPermissionsAndRoles(),nsHotPress.create("ns-permissions").whenPressed("shift+/",e=>{this.$refs.search.focus(),setTimeout(()=>{this.searchText=""},5)}).whenPressed("/",e=>{this.$refs.search.focus(),setTimeout(()=>{this.searchText=""},5)})},methods:{__:y,selectAllPermissions(e){const s=new Object;if(s[e.namespace]=new Object,!e.locked||e.locked&&confirm(this.$slots["bulk-edit-system-role"]?this.$slots["bulk-edit-system-role"][0].text:'No message has been provided for "bulk-edit-system-role"')){for(let l in e.fields)e.fields[l].value=e.field.value,s[e.namespace][l]=e.field.value;m.put("/api/users/roles",s).subscribe(l=>{g.success(l.message,null,{duration:3e3}).subscribe()})}else e.field.value=!e.field.value},submitPermissions(e,s){const l=new Object;l[e.namespace]=new Object,l[e.namespace][s.name]=s.value,m.put("/api/users/roles",l).subscribe(u=>{g.success(u.message,null,{duration:3e3}).subscribe()})},loadPermissionsAndRoles(){return x([m.get("/api/users/roles"),m.get("/api/users/permissions")]).subscribe(e=>{this.permissions=e[1],this.roles=e[0].map(s=>(s.fields={},s.field={type:"checkbox",name:s.namespace,value:!1},this.permissions.forEach(l=>{s.fields[l.namespace]={type:"checkbox",value:s.permissions.filter(u=>u.namespace===l.namespace).length>0,name:l.namespace,label:null}}),s))})}}},A={id:"permission-wrapper"},B={class:"my-2"},N=["placeholder"],O={class:"rounded shadow ns-box flex"},V={id:"permissions",class:"w- bg-gray-800 flex-shrink-0"},E={class:"h-24 py-4 px-2 border-b border-gray-700 text-gray-100 flex justify-between items-center"},R={key:0},S=n("i",{class:"las la-expand"},null,-1),z=[S],D=n("i",{class:"las la-compress"},null,-1),H=[D],L=["title"],F={key:0},J={key:1},M={class:"flex flex-auto overflow-hidden"},U={class:"overflow-y-auto"},q={class:"text-gray-700 flex"},G={class:"mx-1"},I={class:"mx-1"};function K(e,s,l,u,r,a){const b=P("ns-checkbox");return i(),o("div",A,[n("div",B,[w(n("input",{ref:"search","onUpdate:modelValue":s[0]||(s[0]=t=>r.searchText=t),type:"text",placeholder:a.__('Press "/" to search permissions'),class:"border-2 p-2 w-full outline-none bg-input-background border-input-edge text-primary"},null,8,N),[[v,r.searchText]])]),n("div",O,[n("div",V,[n("div",E,[r.toggled?d("",!0):(i(),o("span",R,f(a.__("Permissions")),1)),n("div",null,[r.toggled?d("",!0):(i(),o("button",{key:0,onClick:s[1]||(s[1]=t=>r.toggled=!r.toggled),class:"rounded-full bg-white text-gray-700 h-6 w-6 flex items-center justify-center"},z)),r.toggled?(i(),o("button",{key:1,onClick:s[2]||(s[2]=t=>r.toggled=!r.toggled),class:"rounded-full bg-white text-gray-700 h-6 w-6 flex items-center justify-center"},H)):d("",!0)])]),(i(!0),o(h,null,p(a.filteredPermissions,t=>(i(),o("div",{key:t.id,class:T([r.toggled?"w-24":"w-54","p-2 border-b border-gray-700 text-gray-100"])},[n("a",{href:"javascript:void(0)",title:t.namespace},[r.toggled?d("",!0):(i(),o("span",F,f(t.name),1)),r.toggled?(i(),o("span",J,f(t.name),1)):d("",!0)],8,L)],2))),128))]),n("div",M,[n("div",U,[n("div",q,[(i(!0),o(h,null,p(r.roles,t=>(i(),o("div",{key:t.id,class:"h-24 py-4 px-2 w-56 items-center border-b justify-center flex role flex-shrink-0 border-r border-table-th-edge"},[n("p",G,[n("span",null,f(t.name),1)]),n("span",I,[_(b,{onChange:c=>a.selectAllPermissions(t),field:t.field},null,8,["onChange","field"])])]))),128))]),(i(!0),o(h,null,p(a.filteredPermissions,t=>(i(),o("div",{key:t.id,class:"permission flex"},[(i(!0),o(h,null,p(r.roles,c=>(i(),o("div",{key:c.id,class:"border-b border-table-th-edge w-56 flex-shrink-0 p-2 flex items-center justify-center border-r"},[_(b,{onChange:Q=>a.submitPermissions(c,c.fields[t.namespace]),field:c.fields[t.namespace]},null,8,["onChange","field"])]))),128))]))),128))])])])])}var ee=k(C,[["render",K]]);export{ee as default};