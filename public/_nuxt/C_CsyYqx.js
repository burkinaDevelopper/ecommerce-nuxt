import{g as c,c as m,a as s,d as a,h as p,i as l,v as r,f as n,o as _}from"./C1AjPlrG.js";import{u}from"./D3L091K3.js";const f={class:"page-wrapper"},v={class:"page-body"},b={class:"container-xl"},h={class:"row justify-content-center"},w={class:"col-lg-10 col-xl-9"},x={class:"card card-lg"},g={class:"card-body markdown"},y=s("span",null,[a("user= "),s("em",null,"admin")],-1),C=s("span",null,[a("password= "),s("em",null,"1234")],-1),F={class:"mb-3"},I=s("label",{for:"exampleFormControlInput1",class:"form-label"},"user",-1),V={class:"mb-3"},k=s("label",{for:"exampleFormControlInput2",class:"form-label"},"password",-1),B=s("div",{class:"mb-3"},[s("button",{type:"submit",class:"btn btn-primary"},"Connexion")],-1),U={__name:"login",setup(M){const d=u(),o=c({name:"",password:""}),i=()=>{d.login(o.name,o.password)};return(N,t)=>(_(),m("div",f,[s("div",v,[s("div",b,[s("div",h,[s("div",w,[s("div",x,[s("div",g,[y,a("   "),C,s("form",{onSubmit:t[2]||(t[2]=p(e=>i(),["prevent"]))},[s("div",F,[I,l(s("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>n(o).name=e),type:"text",class:"form-control",id:"exampleFormControlInput1"},null,512),[[r,n(o).name]])]),s("div",V,[k,l(s("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>n(o).password=e),type:"password",class:"form-control",id:"exampleFormControlInput2"},null,512),[[r,n(o).password]])]),B],32)])])])])])])]))}};export{U as default};
