import{_ as r,L as t,N as u}from"./C1AjPlrG.js";const i=r("auth",{state:()=>({logged:!1,users:{name:null,password:null},tokens:null}),getters:{getUser:s=>s.user,getToken:s=>s.token},actions:{async login(s,e){if(s=="admin"&&e=="1234"){this.users.name=s,this.users.password=e,this.tokens=1234;const o=t("users",this.users),n=t("tokens",this.tokens);o.value=this.users,n.value=this.tokens,u().push({path:"/"})}},async logout(){this.users.name=null,this.users.password=null,this.tokens=null;const s=t("users",this.users),e=t("tokens",this.tokens);s.value="",e.value="",u().push({path:"/login"})}}});export{i as u};
