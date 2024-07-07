import{i as L,U as Ue,f as w,o as a,c as v,x as y,v as E,j as p,h as be,V as ie,a as Y,g as se,l as N,B as P,z as C,m as qe,q as ze,r as b,D as G,k as ae,H as Me,W as xe,w as k,X as Xe,Y as x,Z as X,b as D,_ as he,$ as J,d as Z,t as Q,a0 as Be,n as Je}from"./entry.76f4046b.js";const de=Symbol("ArcoConfigProvider");var Ze=Object.defineProperty,Qe=Object.defineProperties,et=Object.getOwnPropertyDescriptors,ge=Object.getOwnPropertySymbols,tt=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable,Oe=(e,t,n)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ot=(e,t)=>{for(var n in t||(t={}))tt.call(t,n)&&Oe(e,n,t[n]);if(ge)for(var n of ge(t))nt.call(t,n)&&Oe(e,n,t[n]);return e},ut=(e,t)=>Qe(e,et(t));const rt="A",lt="arco",le="$arco",Re=e=>{var t;return(t=e==null?void 0:e.componentPrefix)!=null?t:rt},je=(e,t)=>{var n;t&&t.classPrefix&&(e.config.globalProperties[le]=ut(ot({},(n=e.config.globalProperties[le])!=null?n:{}),{classPrefix:t.classPrefix}))},S=e=>{var t,n,r;const u=Ue(),o=L(de,void 0),l=(r=(n=o==null?void 0:o.prefixCls)!=null?n:(t=u==null?void 0:u.appContext.config.globalProperties[le])==null?void 0:t.classPrefix)!=null?r:lt;return e?`${l}-${e}`:l};var _=(e,t)=>{for(const[n,r]of t)e[n]=r;return e};const it=w({name:"IconHover",props:{prefix:{type:String},size:{type:String,default:"medium"},disabled:{type:Boolean,default:!1}},setup(){return{prefixCls:S("icon-hover")}}});function st(e,t,n,r,u,o){return a(),v("span",{class:E([e.prefixCls,{[`${e.prefix}-icon-hover`]:e.prefix,[`${e.prefixCls}-size-${e.size}`]:e.size!=="medium",[`${e.prefixCls}-disabled`]:e.disabled}])},[y(e.$slots,"default")],2)}var at=_(it,[["render",st]]);const F=Object.prototype.toString;function vn(e){return F.call(e)==="[object Null]"}function we(e){return F.call(e)==="[object Boolean]"}const ke=e=>F.call(e)==="[object Promise]";function ce(e){return F.call(e)==="[object String]"}function V(e){return F.call(e)==="[object Number]"&&e===e}function mn(e){return e===void 0}function $(e){return typeof e=="function"}const dt=Symbol("ArcoFormItemContext"),ct=({size:e,disabled:t,error:n,uninject:r}={})=>{const u=r?{}:L(dt,{}),o=p(()=>{var f;return(f=e==null?void 0:e.value)!=null?f:u.size}),l=p(()=>(t==null?void 0:t.value)||u.disabled),i=p(()=>(n==null?void 0:n.value)||u.error),c=be(u,"feedback"),s=be(u,"eventHandlers");return{formItemCtx:u,mergedSize:o,mergedDisabled:l,mergedError:i,feedback:c,eventHandlers:s}},ft=w({name:"IconLoading",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const n=S("icon"),r=p(()=>[n,`${n}-loading`,{[`${n}-spin`]:e.spin}]),u=p(()=>{const l={};return e.size&&(l.fontSize=V(e.size)?`${e.size}px`:e.size),e.rotate&&(l.transform=`rotate(${e.rotate}deg)`),l});return{cls:r,innerStyle:u,onClick:l=>{t("click",l)}}}}),pt=["stroke-width","stroke-linecap","stroke-linejoin"],Et=Y("path",{d:"M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6"},null,-1),vt=[Et];function mt(e,t,n,r,u,o){return a(),v("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:E(e.cls),style:ie(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...l)=>e.onClick&&e.onClick(...l))},vt,14,pt)}var ee=_(ft,[["render",mt]]);const yt=Object.assign(ee,{install:(e,t)=>{var n;const r=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(r+ee.name,ee)}}),Ct=(e,{defaultValue:t="medium"}={})=>{const n=L(de,void 0);return{mergedSize:p(()=>{var u,o;return(o=(u=e==null?void 0:e.value)!=null?u:n==null?void 0:n.size)!=null?o:t})}},He=Symbol("ArcoButtonGroup"),bt=w({name:"Button",components:{IconLoading:yt},props:{type:{type:String},shape:{type:String},status:{type:String},size:{type:String},long:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean},htmlType:{type:String,default:"button"},href:String},emits:{click:e=>!0},setup(e,{emit:t}){const{size:n,disabled:r}=se(e),u=S("btn"),o=L(He,void 0),l=p(()=>{var m;return(m=n.value)!=null?m:o==null?void 0:o.size}),i=p(()=>!!(r.value||o!=null&&o.disabled)),{mergedSize:c,mergedDisabled:s}=ct({size:l,disabled:i}),{mergedSize:f}=Ct(c),h=p(()=>{var m,A,T,I,z,M;return[u,`${u}-${(A=(m=e.type)!=null?m:o==null?void 0:o.type)!=null?A:"secondary"}`,`${u}-shape-${(I=(T=e.shape)!=null?T:o==null?void 0:o.shape)!=null?I:"square"}`,`${u}-size-${f.value}`,`${u}-status-${(M=(z=e.status)!=null?z:o==null?void 0:o.status)!=null?M:"normal"}`,{[`${u}-long`]:e.long,[`${u}-loading`]:e.loading,[`${u}-disabled`]:s.value,[`${u}-link`]:ce(e.href)}]});return{prefixCls:u,cls:h,mergedDisabled:s,handleClick:m=>{if(e.disabled||e.loading){m.preventDefault();return}t("click",m)}}}}),ht=["href"],Bt=["type","disabled"];function gt(e,t,n,r,u,o){const l=N("icon-loading");return e.href?(a(),v("a",{key:0,class:E([e.cls,{[`${e.prefixCls}-only-icon`]:e.$slots.icon&&!e.$slots.default}]),href:e.mergedDisabled||e.loading?void 0:e.href,onClick:t[0]||(t[0]=(...i)=>e.handleClick&&e.handleClick(...i))},[e.loading||e.$slots.icon?(a(),v("span",{key:0,class:E(`${e.prefixCls}-icon`)},[e.loading?(a(),P(l,{key:0,spin:"true"})):y(e.$slots,"icon",{key:1})],2)):C("v-if",!0),y(e.$slots,"default")],10,ht)):(a(),v("button",{key:1,class:E([e.cls,{[`${e.prefixCls}-only-icon`]:e.$slots.icon&&!e.$slots.default}]),type:e.htmlType,disabled:e.mergedDisabled,onClick:t[1]||(t[1]=(...i)=>e.handleClick&&e.handleClick(...i))},[e.loading||e.$slots.icon?(a(),v("span",{key:0,class:E(`${e.prefixCls}-icon`)},[e.loading?(a(),P(l,{key:0,spin:!0})):y(e.$slots,"icon",{key:1})],2)):C("v-if",!0),y(e.$slots,"default")],10,Bt))}var te=_(bt,[["render",gt]]);const Ot=w({name:"ButtonGroup",props:{type:{type:String},status:{type:String},shape:{type:String},size:{type:String},disabled:{type:Boolean}},setup(e){const{type:t,size:n,status:r,disabled:u,shape:o}=se(e),l=S("btn-group");return qe(He,ze({type:t,size:n,shape:o,status:r,disabled:u})),{prefixCls:l}}});function wt(e,t,n,r,u,o){return a(),v("div",{class:E(e.prefixCls)},[y(e.$slots,"default")],2)}var ne=_(Ot,[["render",wt]]);const kt=Object.assign(te,{Group:ne,install:(e,t)=>{je(e,t);const n=Re(t);e.component(n+te.name,te),e.component(n+ne.name,ne)}}),fe=()=>{},Dt=()=>{const{body:e}=document,t=document.documentElement;let n;try{n=(window.top||window.self||window).document.body}catch{}return{height:Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight,(n==null?void 0:n.scrollHeight)||0,(n==null?void 0:n.clientHeight)||0),width:Math.max(e.scrollWidth,e.offsetWidth,t.clientWidth,t.scrollWidth,t.offsetWidth,(n==null?void 0:n.scrollWidth)||0,(n==null?void 0:n.clientWidth)||0)}},pe=(()=>{try{return!(typeof window<"u"&&document!==void 0)}catch{return!0}})(),$t=(()=>pe?fe:(e,t,n,r=!1)=>{e.addEventListener(t,n,r)})(),St=(()=>pe?fe:(e,t,n,r=!1)=>{e.removeEventListener(t,n,r)})(),_t=e=>{const t=document.createElement("div");return t.setAttribute("class",`arco-overlay arco-overlay-${e}`),t},At=(e,t)=>{var n;return pe?fe():(n=(t??document).querySelector(e))!=null?n:void 0},De=(e,t)=>{if(ce(e)){const n=e[0]==="#"?`[id='${e.slice(1)}']`:e;return At(n,t)}return e},Tt=e=>e.tagName==="BODY"?document.documentElement.scrollHeight>window.innerHeight:e.scrollHeight>e.offsetHeight,Nt=e=>e.tagName==="BODY"?window.innerWidth-Dt().width:e.offsetWidth-e.clientWidth;var Pt=Object.defineProperty,$e=Object.getOwnPropertySymbols,Lt=Object.prototype.hasOwnProperty,Ft=Object.prototype.propertyIsEnumerable,Se=(e,t,n)=>t in e?Pt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,It=(e,t)=>{for(var n in t||(t={}))Lt.call(t,n)&&Se(e,n,t[n]);if($e)for(var n of $e(t))Ft.call(t,n)&&Se(e,n,t[n]);return e};const zt=(e,t)=>{const n=It({},e);for(const r of t)r in n&&delete n[r];return n};var _e;(function(e){e[e.ELEMENT=1]="ELEMENT",e[e.FUNCTIONAL_COMPONENT=2]="FUNCTIONAL_COMPONENT",e[e.STATEFUL_COMPONENT=4]="STATEFUL_COMPONENT",e[e.COMPONENT=6]="COMPONENT",e[e.TEXT_CHILDREN=8]="TEXT_CHILDREN",e[e.ARRAY_CHILDREN=16]="ARRAY_CHILDREN",e[e.SLOTS_CHILDREN=32]="SLOTS_CHILDREN",e[e.TELEPORT=64]="TELEPORT",e[e.SUSPENSE=128]="SUSPENSE",e[e.COMPONENT_SHOULD_KEEP_ALIVE=256]="COMPONENT_SHOULD_KEEP_ALIVE",e[e.COMPONENT_KEPT_ALIVE=512]="COMPONENT_KEPT_ALIVE"})(_e||(_e={}));var Ae;(function(e){e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.DEV_ROOT_FRAGMENT=2048]="DEV_ROOT_FRAGMENT",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL"})(Ae||(Ae={}));const j=e=>{if(e)return $(e)?e:()=>e};var Mt=w({name:"ClientOnly",setup(e,{slots:t}){const n=b(!1);return G(()=>n.value=!0),()=>{var r;return n.value?(r=t.default)==null?void 0:r.call(t):null}}});const Rt=w({name:"IconClose",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const n=S("icon"),r=p(()=>[n,`${n}-close`,{[`${n}-spin`]:e.spin}]),u=p(()=>{const l={};return e.size&&(l.fontSize=V(e.size)?`${e.size}px`:e.size),e.rotate&&(l.transform=`rotate(${e.rotate}deg)`),l});return{cls:r,innerStyle:u,onClick:l=>{t("click",l)}}}}),jt=["stroke-width","stroke-linecap","stroke-linejoin"],Ht=Y("path",{d:"M9.857 9.858 24 24m0 0 14.142 14.142M24 24 38.142 9.858M24 24 9.857 38.142"},null,-1),Wt=[Ht];function Yt(e,t,n,r,u,o){return a(),v("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:E(e.cls),style:ie(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...l)=>e.onClick&&e.onClick(...l))},Wt,14,jt)}var oe=_(Rt,[["render",Yt]]);const Vt=Object.assign(oe,{install:(e,t)=>{var n;const r=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(r+oe.name,oe)}}),H={formatYear:"YYYY 年",formatMonth:"YYYY 年 MM 月",today:"今天",view:{month:"月",year:"年",week:"周",day:"日"},month:{long:{January:"一月",February:"二月",March:"三月",April:"四月",May:"五月",June:"六月",July:"七月",August:"八月",September:"九月",October:"十月",November:"十一月",December:"十二月"},short:{January:"一月",February:"二月",March:"三月",April:"四月",May:"五月",June:"六月",July:"七月",August:"八月",September:"九月",October:"十月",November:"十一月",December:"十二月"}},week:{long:{self:"周",monday:"周一",tuesday:"周二",wednesday:"周三",thursday:"周四",friday:"周五",saturday:"周六",sunday:"周日"},short:{self:"周",monday:"一",tuesday:"二",wednesday:"三",thursday:"四",friday:"五",saturday:"六",sunday:"日"}}},Gt={locale:"zh-CN",empty:{description:"暂无数据"},drawer:{okText:"确定",cancelText:"取消"},popconfirm:{okText:"确定",cancelText:"取消"},modal:{okText:"确定",cancelText:"取消"},pagination:{goto:"前往",page:"页",countPerPage:"条/页",total:"共 {0} 条"},table:{okText:"确定",resetText:"重置"},upload:{start:"开始",cancel:"取消",delete:"删除",retry:"点击重试",buttonText:"点击上传",preview:"预览",drag:"点击或拖拽文件到此处上传",dragHover:"释放文件并开始上传",error:"上传失败"},calendar:H,datePicker:{view:H.view,month:H.month,week:H.week,placeholder:{date:"请选择日期",week:"请选择周",month:"请选择月份",year:"请选择年份",quarter:"请选择季度",time:"请选择时间"},rangePlaceholder:{date:["开始日期","结束日期"],week:["开始周","结束周"],month:["开始月份","结束月份"],year:["开始年份","结束年份"],quarter:["开始季度","结束季度"],time:["开始时间","结束时间"]},selectTime:"选择时间",today:"今天",now:"此刻",ok:"确定"},image:{loading:"加载中"},imagePreview:{fullScreen:"全屏",rotateRight:"向右旋转",rotateLeft:"向左旋转",zoomIn:"放大",zoomOut:"缩小",originalSize:"原始尺寸"},typography:{copied:"已复制",copy:"复制",expand:"展开",collapse:"折叠",edit:"编辑"},form:{validateMessages:{required:"#{field} 是必填项",type:{string:"#{field} 不是合法的文本类型",number:"#{field} 不是合法的数字类型",boolean:"#{field} 不是合法的布尔类型",array:"#{field} 不是合法的数组类型",object:"#{field} 不是合法的对象类型",url:"#{field} 不是合法的 url 地址",email:"#{field} 不是合法的邮箱地址",ip:"#{field} 不是合法的 IP 地址"},number:{min:"`#{value}` 小于最小值 `#{min}`",max:"`#{value}` 大于最大值 `#{max}`",equal:"`#{value}` 不等于 `#{equal}`",range:"`#{value}` 不在 `#{min} ~ #{max}` 范围内",positive:"`#{value}` 不是正数",negative:"`#{value}` 不是负数"},array:{length:"`#{field}` 个数不等于 #{length}",minLength:"`#{field}` 个数最少为 #{minLength}",maxLength:"`#{field}` 个数最多为 #{maxLength}",includes:"#{field} 不包含 #{includes}",deepEqual:"#{field} 不等于 #{deepEqual}",empty:"`#{field}` 不是空数组"},string:{minLength:"字符数最少为 #{minLength}",maxLength:"字符数最多为 #{maxLength}",length:"字符数必须是 #{length}",match:"`#{value}` 不符合模式 #{pattern}",uppercase:"`#{value}` 必须全大写",lowercase:"`#{value}` 必须全小写"},object:{deepEqual:"`#{field}` 不等于期望值",hasKeys:"`#{field}` 不包含必须字段",empty:"`#{field}` 不是对象"},boolean:{true:"期望是 `true`",false:"期望是 `false`"}}}},Kt=b("zh-CN"),Ut=ze({"zh-CN":Gt}),qt=()=>{const e=L(de,void 0),t=p(()=>{var u;return(u=e==null?void 0:e.locale)!=null?u:Ut[Kt.value]}),n=p(()=>t.value.locale);return{i18nMessage:t,locale:n,t:(u,...o)=>{const l=u.split(".");let i=t.value;for(const c of l){if(!i[c])return u;i=i[c]}return ce(i)&&o.length>0?i.replace(/{(\d+)}/g,(c,s)=>{var f;return(f=o[s])!=null?f:c}):i}}},xt=e=>{const t=b(!1),n={overflow:"",width:"",boxSizing:""};return{setOverflowHidden:()=>{if(e.value){const o=e.value;if(!t.value&&o.style.overflow!=="hidden"){const l=Nt(o);(l>0||Tt(o))&&(n.overflow=o.style.overflow,n.width=o.style.width,n.boxSizing=o.style.boxSizing,o.style.overflow="hidden",o.style.width=`${o.offsetWidth-l}px`,o.style.boxSizing="border-box",t.value=!0)}}},resetOverflow:()=>{if(e.value&&t.value){const o=e.value;o.style.overflow=n.overflow,o.style.width=n.width,o.style.boxSizing=n.boxSizing,t.value=!1}}}},Xt=1e3,Jt=5e3,Zt=1;class Qt{constructor(){this.popupStack={popup:new Set,dialog:new Set,message:new Set},this.getNextZIndex=t=>(t==="message"?Array.from(this.popupStack.message).pop()||Jt:Array.from(this.popupStack.popup).pop()||Xt)+Zt,this.add=t=>{const n=this.getNextZIndex(t);return this.popupStack[t].add(n),t==="dialog"&&this.popupStack.popup.add(n),n},this.delete=(t,n)=>{this.popupStack[n].delete(t),n==="dialog"&&this.popupStack.popup.delete(t)},this.isLastDialog=t=>this.popupStack.dialog.size>1?t===Array.from(this.popupStack.dialog).pop():!0}}const ue=new Qt;function en(e,{visible:t,runOnMounted:n}={}){const r=b(0),u=()=>{r.value=ue.add(e)},o=()=>{ue.delete(r.value,e)},l=()=>e==="dialog"?ue.isLastDialog(r.value):!1;return ae(()=>t==null?void 0:t.value,i=>{i?u():o()},{immediate:!0}),n&&(G(()=>{u()}),Me(()=>{o()})),{zIndex:xe(r),open:u,close:o,isLastDialog:l}}const tn={ENTER:"Enter",ESC:"Escape",BACKSPACE:"Backspace",TAB:"Tab",SPACE:" ",ARROW_UP:"ArrowUp",ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight"},nn=({popupContainer:e,visible:t,defaultContainer:n="body",documentContainer:r})=>{const u=b(e.value),o=b(),l=()=>{const i=De(e.value),c=i?e.value:n,s=i??(r?document.documentElement:De(n));c!==u.value&&(u.value=c),s!==o.value&&(o.value=s)};return G(()=>l()),ae(t,i=>{u.value!==e.value&&i&&l()}),{teleportContainer:u,containerRef:o}};var on=Object.defineProperty,Te=Object.getOwnPropertySymbols,un=Object.prototype.hasOwnProperty,rn=Object.prototype.propertyIsEnumerable,Ne=(e,t,n)=>t in e?on(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ln=(e,t)=>{for(var n in t||(t={}))un.call(t,n)&&Ne(e,n,t[n]);if(Te)for(var n of Te(t))rn.call(t,n)&&Ne(e,n,t[n]);return e};const sn=["top","right","bottom","left"],an=w({name:"Drawer",components:{ClientOnly:Mt,ArcoButton:kt,IconHover:at,IconClose:Vt},inheritAttrs:!1,props:{visible:{type:Boolean,default:!1},defaultVisible:{type:Boolean,default:!1},placement:{type:String,default:"right",validator:e=>sn.includes(e)},title:String,mask:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},closable:{type:Boolean,default:!0},okText:String,cancelText:String,okLoading:{type:Boolean,default:!1},okButtonProps:{type:Object},cancelButtonProps:{type:Object},unmountOnClose:Boolean,width:{type:[Number,String],default:250},height:{type:[Number,String],default:250},popupContainer:{type:[String,Object],default:"body"},drawerStyle:{type:Object},onBeforeOk:{type:Function},onBeforeCancel:{type:Function},escToClose:{type:Boolean,default:!0},renderToBody:{type:Boolean,default:!0},header:{type:Boolean,default:!0},footer:{type:Boolean,default:!0},hideCancel:{type:Boolean,default:!1}},emits:{"update:visible":e=>!0,ok:e=>!0,cancel:e=>!0,open:()=>!0,close:()=>!0,beforeOpen:()=>!0,beforeClose:()=>!0},setup(e,{emit:t}){const{popupContainer:n}=se(e),r=S("drawer"),{t:u}=qt(),o=b(e.defaultVisible),l=p(()=>{var d;return(d=e.visible)!=null?d:o.value}),i=b(!1),c=p(()=>e.okLoading||i.value),{teleportContainer:s,containerRef:f}=nn({popupContainer:n,visible:l}),h=b(l.value);let O=!1;const m=d=>{e.escToClose&&d.key===tn.ESC&&z()&&U(d)},A=()=>{e.escToClose&&!O&&(O=!0,$t(document.documentElement,"keydown",m))},T=()=>{O&&(O=!1,St(document.documentElement,"keydown",m))},{zIndex:I,isLastDialog:z}=en("dialog",{visible:l}),M=p(()=>(f==null?void 0:f.value)===document.body);let K=0;const Ee=()=>{K++,i.value&&(i.value=!1),o.value=!1,t("update:visible",!1)},We=async d=>{const B=K,R=await new Promise(async q=>{var ye;if($(e.onBeforeOk)){let g=e.onBeforeOk((Ce=!0)=>q(Ce));if((ke(g)||!we(g))&&(i.value=!0),ke(g))try{g=(ye=await g)!=null?ye:!0}catch{g=!1}we(g)&&q(g)}else q(!0)});B===K&&(R?(t("ok",d),Ee()):i.value&&(i.value=!1))},U=d=>{var B;let R=!0;$(e.onBeforeCancel)&&(R=(B=e.onBeforeCancel())!=null?B:!1),R&&(t("cancel",d),Ee())},Ye=d=>{e.maskClosable&&U(d)},Ve=()=>{l.value&&t("open")},Ge=()=>{l.value||(h.value=!1,me(),t("close"))},{setOverflowHidden:ve,resetOverflow:me}=xt(f);G(()=>{l.value&&(h.value=!0,ve(),A())}),Me(()=>{me(),T()}),ae(l,d=>{o.value!==d&&(o.value=d),d?(t("beforeOpen"),h.value=!0,ve(),A()):(t("beforeClose"),T())});const Ke=p(()=>{var d;const B=ln({[e.placement]:0},(d=e.drawerStyle)!=null?d:{});return["right","left"].includes(e.placement)?B.width=V(e.width)?`${e.width}px`:e.width:B.height=V(e.height)?`${e.height}px`:e.height,B});return{prefixCls:r,style:Ke,t:u,mounted:h,computedVisible:l,mergedOkLoading:c,zIndex:I,handleOk:We,handleCancel:U,handleOpen:Ve,handleClose:Ge,handleMask:Ye,isFixed:M,teleportContainer:s}}});function dn(e,t,n,r,u,o){const l=N("icon-close"),i=N("icon-hover"),c=N("arco-button"),s=N("client-only");return a(),P(s,null,{default:k(()=>[(a(),P(Xe,{to:e.teleportContainer,disabled:!e.renderToBody},[!e.unmountOnClose||e.computedVisible||e.mounted?x((a(),v("div",X({key:0,class:`${e.prefixCls}-container`,style:e.isFixed?{zIndex:e.zIndex}:{zIndex:"inherit",position:"absolute"}},e.$attrs),[D(he,{name:"fade-drawer",appear:""},{default:k(()=>[e.mask?x((a(),v("div",{key:0,class:E(`${e.prefixCls}-mask`),onClick:t[0]||(t[0]=(...f)=>e.handleMask&&e.handleMask(...f))},null,2)),[[J,e.computedVisible]]):C("v-if",!0)]),_:1}),D(he,{name:`slide-${e.placement}-drawer`,appear:"",onAfterEnter:e.handleOpen,onAfterLeave:e.handleClose},{default:k(()=>[x(Y("div",{class:E(e.prefixCls),style:ie(e.style)},[e.header?(a(),v("div",{key:0,class:E(`${e.prefixCls}-header`)},[y(e.$slots,"header",{},()=>[e.$slots.title||e.title?(a(),v("div",{key:0,class:E(`${e.prefixCls}-title`)},[y(e.$slots,"title",{},()=>[Z(Q(e.title),1)])],2)):C("v-if",!0),e.closable?(a(),v("div",{key:1,tabindex:"-1",role:"button","aria-label":"Close",class:E(`${e.prefixCls}-close-btn`),onClick:t[1]||(t[1]=(...f)=>e.handleCancel&&e.handleCancel(...f))},[D(i,null,{default:k(()=>[D(l)]),_:1})],2)):C("v-if",!0)])],2)):C("v-if",!0),Y("div",{class:E(`${e.prefixCls}-body`)},[y(e.$slots,"default")],2),e.footer?(a(),v("div",{key:1,class:E(`${e.prefixCls}-footer`)},[y(e.$slots,"footer",{},()=>[e.hideCancel?C("v-if",!0):(a(),P(c,X({key:0},e.cancelButtonProps,{onClick:e.handleCancel}),{default:k(()=>[Z(Q(e.cancelText||e.t("drawer.cancelText")),1)]),_:1},16,["onClick"])),D(c,X({type:"primary",loading:e.mergedOkLoading},e.okButtonProps,{onClick:e.handleOk}),{default:k(()=>[Z(Q(e.okText||e.t("drawer.okText")),1)]),_:1},16,["loading","onClick"])])],2)):C("v-if",!0)],6),[[J,e.computedVisible]])]),_:3},8,["name","onAfterEnter","onAfterLeave"])],16)),[[J,e.computedVisible||e.mounted]]):C("v-if",!0)],8,["to","disabled"]))]),_:3})}var W=_(an,[["render",dn]]),cn=Object.defineProperty,Pe=Object.getOwnPropertySymbols,fn=Object.prototype.hasOwnProperty,pn=Object.prototype.propertyIsEnumerable,Le=(e,t,n)=>t in e?cn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,re=(e,t)=>{for(var n in t||(t={}))fn.call(t,n)&&Le(e,n,t[n]);if(Pe)for(var n of Pe(t))pn.call(t,n)&&Le(e,n,t[n]);return e};const Fe=(e,t)=>{let n=_t("drawer");const r=()=>{s.component&&(s.component.props.visible=!1),$(e.onOk)&&e.onOk()},u=()=>{s.component&&(s.component.props.visible=!1),$(e.onCancel)&&e.onCancel()},o=async()=>{await Je(),n&&(Be(null,n),document.body.removeChild(n)),n=null,$(e.onClose)&&e.onClose()},l=()=>{s.component&&(s.component.props.visible=!1)},i=f=>{s.component&&Object.entries(f).forEach(([h,O])=>{s.component.props[h]=O})},s=D(W,re(re(re({},{visible:!0,renderToBody:!1,unmountOnClose:!0,onOk:r,onCancel:u,onClose:o}),zt(e,["content","title","footer","visible","unmountOnClose","onOk","onCancel","onClose"])),{header:typeof e.header=="boolean"?e.header:void 0,footer:typeof e.footer=="boolean"?e.footer:void 0}),{default:j(e.content),header:typeof e.header!="boolean"?j(e.header):void 0,title:j(e.title),footer:typeof e.footer!="boolean"?j(e.footer):void 0});return(t??Ie._context)&&(s.appContext=t??Ie._context),Be(s,n),document.body.appendChild(n),{close:l,update:i}},Ie=Object.assign(W,{open:Fe,install:(e,t)=>{je(e,t);const n=Re(t);e.component(n+W.name,W);const r={open:(u,o=e._context)=>Fe(u,o)};e.config.globalProperties.$drawer=r},_context:null});export{kt as B,Ie as D,at as I,vn as a,$ as b,ce as c,V as d,Re as e,S as g,mn as i,je as s,ct as u};
