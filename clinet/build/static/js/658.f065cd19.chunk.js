"use strict";(self.webpackChunkclinet=self.webpackChunkclinet||[]).push([[658],{5910:(n,e,t)=>{t.d(e,{Fr:()=>s,Pv:()=>a,RJ:()=>o});const a="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png",o="https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png",s={inbox:{heading:"Your inbox is empty",subHeading:"Mails that don't appear in other tabs will be shown here."},drafts:{heading:"You don't have any saved drafts.",subHeading:"Saving a draft allows you to keep a message you aren't ready to send yet."},starred:{heading:"No starred messages",subHeading:"Stars let you give messages a special status to make them easier to find. To star a message, click on the star outline beside any message or conversation."},sent:{heading:"No sent messages!",subHeading:"Send one now!"},bin:{heading:"No conversations in Bin.",subHeading:""}}},4373:(n,e,t)=>{t.d(e,{Z:()=>i});var a=t(2791),o=t(5294);const s=async(n,e,t)=>await(0,o.Z)({method:n.method,url:"".concat("","/").concat(n.endpoint,"/").concat(t),data:e}),i=n=>{const[e,t]=(0,a.useState)(null),[o,i]=(0,a.useState)(""),[r,l]=(0,a.useState)(!1);return{call:async function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";t(null),i(""),l(!0);try{let o=await s(n,e,a);t(o.data)}catch(o){i(o.message)}finally{l(!1)}},response:e,Error:o,loader:r}}},3658:(n,e,t)=>{t.r(e),t.d(e,{default:()=>gn});var a,o,s,i=t(2791),r=t(168),l=t(7630),d=t(4395),c=t(697),p=t(4663),m=t(6098),x=t(7607),g=t(2167),u=t(4035),h=t(4371),f=t(2155),Z=t(3512),b=t(5652),j=t(5910),w=t(184);const y=(0,l.ZP)(d.Z)(a||(a=(0,r.Z)(["\n  background: #f5f5f5;\n  box-shadow: none;\n"]))),v=(0,l.ZP)(c.Z)(o||(o=(0,r.Z)(["\n  background: #eaf1fb;\n  margin-left: 80px;\n  border-radius: 8px;\n  min-width: 690px;\n  max-width: 720px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0 20px;\n  & > div {\n    width: 100%;\n  }\n"]))),k=(0,l.ZP)(c.Z)(s||(s=(0,r.Z)(["\n  width: 100%;\n  display: flex;\n  justify-content: end;\n  & > svg {\n    margin-left: 20px;\n  }\n"])));function P(n){let{toggleDrawer:e}=n;return(0,w.jsx)(y,{position:"static",children:(0,w.jsxs)(p.Z,{children:[(0,w.jsx)(x.Z,{color:"action",onClick:e}),(0,w.jsx)("img",{src:j.Pv,alt:"logo",style:{width:110,marginLeft:15}}),(0,w.jsxs)(v,{children:[(0,w.jsx)(g.Z,{color:"action"}),(0,w.jsx)(m.ZP,{}),(0,w.jsx)(u.Z,{color:"action"})]}),(0,w.jsxs)(k,{children:[(0,w.jsx)(h.Z,{color:"action"}),(0,w.jsx)(f.Z,{color:"action"}),(0,w.jsx)(Z.Z,{color:"action"}),(0,w.jsx)(b.Z,{color:"action"})]})]})})}var S=t(9953),C=t(4294),D=t(493),E=t(4852),T=t(4287),B=t(3026),M=t(2192),O=t(3513),F=t(9825),H=t(8265);const R=[{name:"inbox",title:"Inbox",icon:T.Z},{name:"starred",title:"Starred",icon:B.Z},{name:"sent",title:"Sent",icon:M.Z},{name:"drafts",title:"Drafts",icon:O.Z},{name:"bin",title:"Bin",icon:F.Z},{name:"allmail",title:"All Mail",icon:H.Z}];var _,N,z,A,Y=t(5905),L=t(9818),U=t(890),I=t(539),G=t(6739),J=t(4220),W=t(4373),q=t(3643);const K={height:"90%",width:"80%",maxWidth:"100%",maxHeight:"100%",boxShadow:"none",borderRadius:"10px 10px 0 0"},Q=(0,l.ZP)(c.Z)(_||(_=(0,r.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 15px;\n  background: #f2f6fc;\n  & > p {\n    font-size: 14px;\n    font-weight: 500;\n  }\n  & > svg {\n    cursor: pointer;\n  }\n"]))),V=(0,l.ZP)(c.Z)(N||(N=(0,r.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0 15px;\n  & > div {\n    font-size: 14px;\n    border-bottom: 1px solid #f5f5f5;\n    margin-top: 10px;\n  }\n"]))),X=(0,l.ZP)(c.Z)(z||(z=(0,r.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 10px 15px;\n  align-items: center;\n"]))),$=(0,l.ZP)(C.Z)(A||(A=(0,r.Z)(["\n  background: #0b57d0;\n  color: #fff;\n  font-weight: 500;\n  text-transform: none;\n  border-radius: 18px;\n  width: 100px;\n"])));function nn(n){let{openBTN:e,CloseBtn:t}=n;const[a,o]=(0,i.useState)({}),s=(0,W.Z)(q.Y.saveSentEmail),r=(0,W.Z)(q.Y.saveDraftEmails),l={Host:"smtp.elasticemail.com",Username:"umiar123@yopmail.com",Password:"CD4B60DAB97767DA15FA9780CD3CACDCC033",Port:2525},d=n=>{o({...a,[n.target.name]:n.target.value})};return(0,w.jsxs)(L.Z,{open:e,PaperProps:{sx:K},children:[(0,w.jsxs)(Q,{children:[(0,w.jsx)(U.Z,{children:"New Message"}),(0,w.jsx)(G.Z,{fontSize:"small",onClick:n=>(n=>{n.preventDefault();const e={to:a.to,from:"u03076699182@gmail.com",subject:a.subject,body:a.body,date:new Date,image:"",name:"Umiar Malik",starred:!1,type:"drafts"};r.call(e),r.Error||(t(!1),o({})),t(!1)})(n)})]}),(0,w.jsxs)(V,{children:[(0,w.jsx)(m.ZP,{placeholder:"Recipients",name:"to",onChange:n=>d(n)}),(0,w.jsx)(m.ZP,{placeholder:"Subject",name:"subject",onChange:n=>d(n)})]}),(0,w.jsx)(I.Z,{multiline:!0,rows:15.5,sx:{"& .MuiOutlinedInput-notchedOutline":{border:"none"}},name:"body",onChange:n=>d(n)}),(0,w.jsxs)(X,{children:[(0,w.jsx)($,{onClick:n=>(n=>{n.preventDefault(),window.Email&&window.Email.send({...l,To:a.to,From:"u03076699182@gmail.com",Subject:a.subject,Body:a.body}).then((n=>alert(n)));const e={to:a.to,from:"u03076699182@gmail.com",subject:a.subject,body:a.body,date:new Date,image:"",name:"Umiar Malik",starred:!1,type:"sent"};s.call(e),s.Error||(t(!1),o({})),t(!1)})(n),children:"Send"}),(0,w.jsx)(J.Z,{onClick:()=>t(!1)})]})]})}var en,tn,an=t(7689),on=t(1087),sn=t(5806);const rn=(0,l.ZP)(c.Z)(en||(en=(0,r.Z)(["\n  padding: 8px;\n  & > ul {\n    padding: 10px 0 0 5px;\n    font-size: 14px;\n    font-weight: 500;\n    cursor: pointer;\n    & > a {\n      text-decoration: none;\n      color: inherit;\n    }\n    & > a > li > svg {\n      margin-right: 20px;\n    }\n  }\n"]))),ln=(0,l.ZP)(C.Z)(tn||(tn=(0,r.Z)(["\n  background: #c2e7ff;\n  color: #001d35;\n  border-radius: 16px;\n  padding: 15px;\n  min-width: 140px;\n  text-transform: none;\n"])));function dn(){const{type:n}=(0,an.UO)(),[e,t]=(0,i.useState)(!1);return(0,w.jsxs)(rn,{children:[(0,w.jsxs)(ln,{onClick:()=>{t(!0)},children:[(0,w.jsx)(Y.Z,{style:{marginRight:10}}),"Compose"]}),(0,w.jsx)(D.Z,{children:R.map((e=>(0,w.jsx)(on.OL,{to:"".concat(sn._.emails.path,"/").concat(e.name),children:(0,w.jsxs)(E.ZP,{style:n===e.name.toLowerCase()?{background:"#d3e3fd",borderRadius:"0 16px 16px 0"}:{},children:[(0,w.jsx)(e.icon,{fontSize:"small",style:{marginRight:22}}),e.title]})},e.name)))}),(0,w.jsx)(nn,{openBTN:e,CloseBtn:t})]})}var cn;const pn=(0,l.ZP)(S.ZP)(cn||(cn=(0,r.Z)(["\n  // margin-top: 54px;\n"])));function mn(n){let{openDrawer:e,toggleDrawer:t}=n;return(0,w.jsx)(pn,{anchor:"left",open:e,onClose:t,hideBackdrop:!0,ModalProps:{keepMounted:!0},variant:"persistent",sx:{"& .MuiDrawer-paper":{width:250,borderRight:"none",background:"#f5F5F5",marginTop:"64px",height:"calc(100vh - 64px)"}},children:(0,w.jsx)(dn,{})})}var xn=t(2247);function gn(){const[n,e]=(0,i.useState)(!0),t=()=>{e((n=>!n))};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(P,{toggleDrawer:t}),(0,w.jsx)(mn,{openDrawer:n,toggleDrawer:t}),(0,w.jsx)(i.Suspense,{fallback:(0,w.jsx)(xn.Z,{}),children:(0,w.jsx)(an.j3,{context:{openDrawer:n}})})]})}},3643:(n,e,t)=>{t.d(e,{Y:()=>a});const a={saveSentEmail:{endpoint:"save",method:"POST"},getEmailFromType:{endpoint:"emails",method:"GET"},saveDraftEmails:{endpoint:"save-draft",method:"POST"},moveEmailToBin:{endpoint:"bin",method:"POST"},toggleStarredEmail:{endpoint:"starred",method:"POST"},deleteEmails:{endpoint:"delete",method:"DELETE"}}}}]);
//# sourceMappingURL=658.f065cd19.chunk.js.map