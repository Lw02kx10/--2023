import{n as e,o as t,c as n,w as o,i as s,l as i,b as a,d as l,g as c}from"./index-b7ccc41f.js";import{a as r}from"./js.cookie.8253c38e.js";import{_ as d}from"./_plugin-vue_export-helper.1b428a4d.js";const u=d({data:()=>({isAnimationDone:!1}),methods:{next(t){if(!this.isAnimationDone){let e=document.querySelector(".first-line"),t=document.querySelector(".second-line"),n=document.querySelector(".third-line");return e.style.transition="none",t.style.transition="none",n.style.transition="none",e.style.opacity=1,t.style.opacity=1,n.style.opacity=1,void(this.isAnimationDone=!0)}r.set("talentImgIdx",t),e({url:"/pages/scene6/scene6"})}},mounted(){let e=document.querySelector(".person_box"),t=e.clientWidth;e.style.height=1.24*t+"px";let n=document.querySelector(".first-line"),o=document.querySelector(".second-line"),s=document.querySelector(".third-line");setTimeout((()=>{n.style.opacity=1}),200),setTimeout((()=>{o.style.opacity=1}),1400),setTimeout((()=>{s.style.opacity=1}),2600),setTimeout((()=>{this.isAnimationDone=!0}),3800)}},[["render",function(e,r,d,u,m,_){const y=c,p=s;return t(),n(p,{class:"wrapper animate__animated animate__fadeIn"},{default:o((()=>[i("div",{class:"text-box"},[i("div",{class:"first-line"},[a(y,null,{default:o((()=>[l("亲爱的小巫师，你终于来到了这里(๑•̀ㅂ•́)و✧")])),_:1})]),i("div",{class:"second-line"},[a(y,null,{default:o((()=>[l("请从神秘的水晶球里捕捉中意的小精灵")])),_:1})]),i("div",{class:"third-line"},[a(y,null,{default:o((()=>[l("作为自己的专属天赋标志叭~")])),_:1})])]),i("div",{class:"one item"},[i("div",{class:"person_box"})]),i("div",{class:"two item"},[i("div",{class:"buttom_wrapper"},[i("div",{class:"character_box no_one",onClick:r[0]||(r[0]=e=>_.next(0))}),i("div",{class:"character_box no_two",onClick:r[1]||(r[1]=e=>_.next(1))}),i("div",{class:"character_box no_three",onClick:r[2]||(r[2]=e=>_.next(2))}),i("div",{class:"character_box no_four",onClick:r[3]||(r[3]=e=>_.next(3))})])])])),_:1})}],["__scopeId","data-v-440a8081"]]);export{u as default};