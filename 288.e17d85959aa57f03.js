"use strict";(self.webpackChunkvictor_fortman=self.webpackChunkvictor_fortman||[]).push([[288],{288:(H,v,u)=>{u.r(v),u.d(v,{ProjectsGalleryModule:()=>z});var c=u(177),d=u(6954),t=u(4438);let h=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-software-engineering"]],standalone:!0,features:[t.aNF],decls:2,vars:0,consts:[[1,"wrapper"]],template:function(o,s){1&o&&(t.j41(0,"div",0),t.EFF(1," Software Catalogue Works\n"),t.k0s())}})}return e})();var p=u(467),w=u(3696),m=u(4300);let P=(()=>{class e{constructor(n,o){this.util=n,this.config=o}getProjects(){var n=this;return(0,p.A)(function*(){if(!n.projects){const s=(yield n.config.getConfig()).url.projects,a=yield n.util.fetchCached(s);n.projects=a}return n.projects})()}getProjectsByAnyCategories(n){var o=this;return(0,p.A)(function*(){return(yield o.getProjects()).filter(a=>a.categories.find(r=>n.includes(r)))})()}getProjectsByAllCategories(n){var o=this;return(0,p.A)(function*(){return(yield o.getProjects()).filter(a=>n.every(r=>a.categories.includes(r)))})()}static#t=this.\u0275fac=function(o){return new(o||e)(t.KVO(m.Q),t.KVO(w.w))};static#e=this.\u0275prov=t.jDH({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function O(e,i){if(1&e&&(t.j41(0,"a",11)(1,"button",14),t.EFF(2),t.k0s()()),2&e){const n=t.XpG().$implicit;t.Y8G("href",n.action2URI,t.B4B),t.R7$(2),t.JRh(n.action2Name)}}function x(e,i){if(1&e&&(t.j41(0,"article",3)(1,"div",4),t.nrm(2,"img",5),t.j41(3,"div",6)(4,"h3",7),t.EFF(5),t.k0s()(),t.j41(6,"div",8)(7,"h3",7),t.EFF(8),t.k0s(),t.j41(9,"p",9),t.EFF(10),t.k0s()()(),t.j41(11,"div",10)(12,"a",11)(13,"button",12),t.EFF(14),t.k0s()(),t.DNE(15,O,3,2,"a",13),t.k0s()()),2&e){const n=i.$implicit;t.R7$(2),t.Y8G("alt",n.name)("title",n.name)("src",n.image,t.B4B),t.R7$(3),t.JRh(n.name),t.R7$(3),t.JRh(n.name),t.R7$(2),t.SpI(" ",n.description," "),t.R7$(2),t.Y8G("href",n.action1URI,t.B4B),t.R7$(2),t.JRh(n.action1Name),t.R7$(),t.Y8G("ngIf",n.action2URI)}}let g=(()=>{class e{constructor(n,o){this.projectsService=n,this.activatedRoute=o,this.projects=[]}ngOnInit(){var n=this;this.activatedRoute.data.subscribe(function(){var o=(0,p.A)(function*({categories:s}){n.projects=yield n.projectsService.getProjectsByAllCategories(s)});return function(s){return o.apply(this,arguments)}}())}static#t=this.\u0275fac=function(o){return new(o||e)(t.rXU(P),t.rXU(d.nX))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-art-catalogue"]],standalone:!0,features:[t.aNF],decls:4,vars:1,consts:[[1,"container-fluid"],[1,"row","justify-content-around"],["class","col art-card shadow d-flex flex-column justify-content-end p-0",4,"ngFor","ngForOf"],[1,"col","art-card","shadow","d-flex","flex-column","justify-content-end","p-0"],[1,"h-100","position-relative"],[1,"w-100","h-100","bg-black-dark-1","bg-blue-bright-1","d-block",3,"alt","title","src"],[1,"position-absolute","p-4","h-100","w-100","art-card-title","text-always-white","text-on-glass"],[1,"py-2"],[1,"position-absolute","p-4","h-100","w-100","bg-black-dark-1","bg-blue-bright-2","art-card-hover-overlay","text-always-white"],[1,"lead"],[1,"w-100","p-3","bg-blue-bright-1","bg-blue-dark-3","text-on-glass"],["target","_blank",3,"href"],[1,"btn","btn-tacked","w-100","my-2","btn-primary"],["target","_blank",3,"href",4,"ngIf"],[1,"btn","btn-tacked","w-100","my-2","btn-light"]],template:function(o,s){1&o&&(t.j41(0,"div")(1,"div",0)(2,"div",1),t.DNE(3,x,16,9,"article",2),t.k0s()()()),2&o&&(t.R7$(3),t.Y8G("ngForOf",s.projects))},dependencies:[c.MD,c.Sq,c.bT],styles:[".art-card[_ngcontent-%COMP%]{min-width:300px;max-width:350px;height:500px;transition:all .5s ease;margin:1rem}.art-card-title[_ngcontent-%COMP%]{top:0;background:radial-gradient(circle,#0000002f,#0000006f);display:flex;justify-content:center;align-items:center}.art-card-hover-overlay[_ngcontent-%COMP%]{top:0;opacity:0;transition:opacity .3s ease}.art-card-hover-overlay[_ngcontent-%COMP%]:hover{opacity:1}@media only screen and (max-width : 481px){.art-card[_ngcontent-%COMP%]{margin:.25rem;margin-left:-15px;margin-bottom:1rem}}"]})}return e})(),_=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-showcase-catalogue"]],standalone:!0,features:[t.aNF],decls:2,vars:0,template:function(o,s){1&o&&(t.j41(0,"p"),t.EFF(1,"showcase-catalogue works!"),t.k0s())}})}return e})();const F=[{path:"miscellaneous",icon:"fa fa-folder-open",label:"Miscellaneous"}];var l=function(e){return e[e.State=0]="State",e[e.Transition=1]="Transition",e[e.Sequence=2]="Sequence",e[e.Group=3]="Group",e[e.Animate=4]="Animate",e[e.Keyframes=5]="Keyframes",e[e.Style=6]="Style",e[e.Trigger=7]="Trigger",e[e.Reference=8]="Reference",e[e.AnimateChild=9]="AnimateChild",e[e.AnimateRef=10]="AnimateRef",e[e.Query=11]="Query",e[e.Stagger=12]="Stagger",e}(l||{});function S(e,i){return{type:l.Trigger,name:e,definitions:i,options:{}}}function b(e,i=null){return{type:l.Animate,styles:i,timings:e}}function f(e){return{type:l.Style,styles:e,offset:null}}function y(e,i,n){return{type:l.State,name:e,styles:i,options:n}}function C(e,i,n=null){return{type:l.Transition,expr:e,animation:i,options:n}}const D=()=>({exact:!0});function T(e,i){if(1&e&&(t.j41(0,"span",6),t.EFF(1),t.k0s()),2&e){const n=t.XpG().$implicit;t.R7$(),t.JRh(n.label)}}function B(e,i){if(1&e&&t.nrm(0,"app-submenu-nav",7),2&e){const n=t.XpG().$implicit,o=t.XpG();t.Y8G("data",n)("collapsed",o.collapsed)}}function G(e,i){if(1&e){const n=t.RV6();t.j41(0,"li",2)(1,"div")(2,"a",3),t.bIt("click",function(){const s=t.eBV(n).$implicit,a=t.XpG();return t.Njj(a.pullNode(s))})("tap",function(s){t.eBV(n);const a=t.XpG();return t.Njj(a.clickTarget(s))}),t.DNE(3,T,2,1,"span",4),t.k0s(),t.DNE(4,B,1,2,"app-submenu-nav",5),t.k0s()()}if(2&e){const n=i.$implicit,o=t.XpG();t.Y8G("title",n.label),t.R7$(2),t.AVh("pulled",n.pulled&&o.collapsed),t.Y8G("routerLink",n.path)("routerLinkActiveOptions",t.lJ4(7,D)),t.R7$(),t.Y8G("ngIf",o.collapsed),t.R7$(),t.Y8G("ngIf",n.children)}}let E=(()=>{class e{constructor(n){this.util=n,this.navRoot={path:"",icon:"",label:"",children:[]}}pullNode(n){n.pulled=!n.pulled}clickTarget(n){n.preventDefault(),this.util.click(n.target)}static#t=this.\u0275fac=function(o){return new(o||e)(t.rXU(m.Q))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-submenu-nav"]],inputs:{collapsed:"collapsed",navRoot:"navRoot"},standalone:!0,features:[t.aNF],decls:3,vars:1,consts:[[1,"submenu-nav"],["class","submenu-nav-item",3,"title",4,"ngFor","ngForOf"],[1,"submenu-nav-item",3,"title"],["routerLinkActive","active-sub-level",1,"submenu-nav-link","text-always-white",3,"click","tap","routerLink","routerLinkActiveOptions"],["class","submenu-link-text",4,"ngIf"],[3,"data","collapsed",4,"ngIf"],[1,"submenu-link-text"],[3,"data","collapsed"]],template:function(o,s){1&o&&(t.j41(0,"div")(1,"ul",0),t.DNE(2,G,5,8,"li",1),t.k0s()()),2&o&&(t.R7$(2),t.Y8G("ngForOf",s.navRoot.children))},dependencies:[e,c.MD,c.Sq,c.bT,d.iI,d.Wk,d.wQ],styles:[".sidenav[_ngcontent-%COMP%]{transition:all .5s ease;position:fixed;z-index:1;top:0;width:5rem;height:100vh;box-shadow:.063rem 0 1.25rem #303030;padding-top:75px}.logo-container[_ngcontent-%COMP%], .exit-container[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.938rem;width:100%}.logo[_ngcontent-%COMP%]{background-color:#fff;text-align:center;width:3rem;min-width:3rem;border-radius:.313rem;padding:.313rem;font-size:24px;font-weight:900;cursor:pointer;border:none}.logo-text[_ngcontent-%COMP%]{margin-left:1.5rem;font-size:24px;font-weight:700}.btn-close[_ngcontent-%COMP%]{margin-left:auto;cursor:pointer;width:2rem;height:2rem;border-radius:50%;background-color:#dcdce666;border:none;color:#28283266}.btn-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:24px}.sidenav-collapsed[_ngcontent-%COMP%]{width:16.562rem}.sidenav-nav[_ngcontent-%COMP%]{list-style:none;padding:.938rem;margin:0;display:flex;flex-direction:column;align-items:center;height:calc(100% - 8.4rem);overflow-y:auto}.sidenav-nav[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.sidenav-nav-item[_ngcontent-%COMP%]{width:100%;margin-bottom:.625rem}.sidenav-nav-link[_ngcontent-%COMP%]{cursor:pointer}.sidenav-nav-item[_ngcontent-%COMP%]   .sidenav-nav-link[_ngcontent-%COMP%]{display:flex;align-items:center;height:3rem;text-decoration:none;transition:color .3s ease}.sidenav-nav-item[_ngcontent-%COMP%]:hover   .sidenav-nav-link[_ngcontent-%COMP%]{background-color:#dcdce633}.sidenav-link-icon[_ngcontent-%COMP%]{font-size:22px;width:2rem;min-width:2rem;margin:0 .5rem;text-align:center}.sidenav-link-text[_ngcontent-%COMP%]{margin-left:1.2rem}.sidenav-nav-link.active-top-level[_ngcontent-%COMP%]{background-color:#dcdce680}.sidenav-nav-link.active-top-level.pulled[_ngcontent-%COMP%]:hover{background-color:#c8c8d266}.sidenav-nav-link[_ngcontent-%COMP%] + app-submenu-nav[_ngcontent-%COMP%]{display:block;overflow:hidden;max-height:0vh;transition:max-height .5s ease}.sidenav-nav-link.active-top-level[_ngcontent-%COMP%] + app-submenu-nav[_ngcontent-%COMP%]{background-color:#9696a033}.sidenav-nav-link.active-top-level.pulled[_ngcontent-%COMP%] + app-submenu-nav[_ngcontent-%COMP%]{max-height:100vh}.exit-container[_ngcontent-%COMP%]{justify-content:center}",".submenu-nav[_ngcontent-%COMP%]{list-style:none;padding:.938rem;margin:0;display:flex;flex-direction:column;align-items:center;height:calc(100% - 3.65rem)}.submenu-nav-item[_ngcontent-%COMP%]{width:100%}.submenu-nav-link[_ngcontent-%COMP%]{cursor:pointer}.submenu-nav-item[_ngcontent-%COMP%]   .submenu-nav-link[_ngcontent-%COMP%]{display:flex;align-items:center;height:3rem;text-decoration:none;transition:color .3s ease}.submenu-nav-item[_ngcontent-%COMP%]:hover   .submenu-nav-link[_ngcontent-%COMP%]{background-color:#dcdce633}.submenu-link-icon[_ngcontent-%COMP%]{font-size:22px;width:2rem;min-width:2rem;margin:0 .5rem;text-align:center}.submenu-link-text[_ngcontent-%COMP%]{margin-left:1.5rem}.submenu-nav-link.active-sub-level[_ngcontent-%COMP%]{background-color:#dcdce64d}.submenu-nav-link.active-sub-level[_ngcontent-%COMP%] + app-submenu-nav[_ngcontent-%COMP%]{color:inherit}.submenu-nav-link.active-sub-level.pulled[_ngcontent-%COMP%] + app-submenu-nav[_ngcontent-%COMP%]{color:inherit}"],data:{animation:[S("submenu",[y("hidden",f({height:"0",overflow:"hidden"})),y("visible",f({height:"*"})),C("visible <=> hidden",[f({overflow:"hidden"}),b("{{transitionParams}}")]),C("void => *",b(0))])]}})}return e})();function I(e,i){1&e&&(t.j41(0,"div",11),t.EFF(1,"Projects"),t.k0s())}function A(e,i){if(1&e){const n=t.RV6();t.j41(0,"button",12),t.bIt("click",function(){t.eBV(n);const s=t.XpG();return t.Njj(s.closeSideNav())})("tap",function(s){t.eBV(n);const a=t.XpG();return t.Njj(a.clickTarget(s))}),t.nrm(1,"i",13),t.k0s()}}function $(e,i){if(1&e&&(t.j41(0,"span",18),t.EFF(1),t.k0s()),2&e){const n=t.XpG().$implicit;t.R7$(),t.JRh(n.label)}}function Y(e,i){if(1&e&&t.nrm(0,"app-submenu-nav",19),2&e){const n=t.XpG().$implicit,o=t.XpG();t.Y8G("navRoot",n)("collapsed",o.collapsed)}}function V(e,i){if(1&e){const n=t.RV6();t.j41(0,"li",14)(1,"div")(2,"a",15),t.bIt("click",function(){const s=t.eBV(n).$implicit,a=t.XpG();return t.Njj(a.pullNode(s))})("tap",function(s){t.eBV(n);const a=t.XpG();return t.Njj(a.clickTarget(s))}),t.nrm(3,"i",16),t.DNE(4,$,2,1,"span",10),t.k0s(),t.DNE(5,Y,1,2,"app-submenu-nav",17),t.k0s()()}if(2&e){const n=i.$implicit,o=t.XpG();t.Y8G("title",n.label),t.R7$(2),t.AVh("pulled",n.pulled&&o.collapsed),t.Y8G("routerLink",n.path),t.R7$(),t.HbH(n.icon),t.R7$(),t.Y8G("ngIf",o.collapsed),t.R7$(),t.Y8G("ngIf",n.children)}}function X(e,i){1&e&&(t.j41(0,"span",18),t.EFF(1,"Return to Home"),t.k0s())}let k=(()=>{class e{constructor(n,o){this.router=n,this.util=o,this.onToggleSideNav=new t.bkB,this.collapsed=!1,this.togglingCollapsed=null,this.stubLink=this.router.url.substring(0),this.screenWidth=0,this.navTree=F}onResize(n){this.screenWidth=window.innerWidth,this.screenWidth<=768&&(this.collapsed=!1,this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth}))}ngOnInit(){this.screenWidth=window.innerWidth}toggleCollapsed(){null===this.togglingCollapsed&&(this.togglingCollapsed=setTimeout(()=>{this.setSideNavCollapsed(!this.collapsed),this.togglingCollapsed=null},0))}closeSideNav(){this.setSideNavCollapsed(!1)}setSideNavCollapsed(n){this.collapsed=n,this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth})}pullNode(n){n.pulled=!0}clickTarget(n){n.preventDefault(),this.util.click(n.target)}static#t=this.\u0275fac=function(o){return new(o||e)(t.rXU(d.Ix),t.rXU(m.Q))};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["sidebar-nav"]],hostBindings:function(o,s){1&o&&t.bIt("resize",function(r){return s.onResize(r)},!1,t.tSv)},outputs:{onToggleSideNav:"onToggleSideNav"},standalone:!0,features:[t.aNF],decls:12,vars:5,consts:[[1,"sidenav","bg-black-dark-1","bg-blue-bright-3",3,"ngClass"],[1,"logo-container","text-always-white"],[1,"logo",3,"click","tap"],["class","logo-text",4,"ngIf"],["class","btn-close","title","Close Navigation",3,"click","tap",4,"ngIf"],[1,"sidenav-nav"],["class","sidenav-nav-item",3,"title",4,"ngFor","ngForOf"],[1,"exit-container","text-always-white","sidenav-nav-item"],["routerLink","/home","routerLinkActive","active-top-level","title","Back to Home",1,"sidenav-nav-link","text-always-white","w-100",3,"tap"],[1,"sidenav-link-icon","fa","fa-sign-out"],["class","sidenav-link-text",4,"ngIf"],[1,"logo-text"],["title","Close Navigation",1,"btn-close",3,"click","tap"],[1,"fa","fa-times","close-icon"],[1,"sidenav-nav-item",3,"title"],["routerLinkActive","active-top-level",1,"sidenav-nav-link","text-always-white",3,"click","tap","routerLink"],[1,"sidenav-link-icon"],[3,"navRoot","collapsed",4,"ngIf"],[1,"sidenav-link-text"],[3,"navRoot","collapsed"]],template:function(o,s){1&o&&(t.j41(0,"div",0)(1,"div",1)(2,"button",2),t.bIt("click",function(){return s.toggleCollapsed()})("tap",function(r){return s.clickTarget(r)}),t.EFF(3,"P"),t.k0s(),t.DNE(4,I,2,0,"div",3)(5,A,2,0,"button",4),t.k0s(),t.j41(6,"ul",5),t.DNE(7,V,6,8,"li",6),t.k0s(),t.j41(8,"div",7)(9,"a",8),t.bIt("tap",function(r){return s.clickTarget(r)}),t.nrm(10,"i",9),t.DNE(11,X,2,0,"span",10),t.k0s()()()),2&o&&(t.Y8G("ngClass",s.collapsed?"sidenav-collapsed":""),t.R7$(4),t.Y8G("ngIf",s.collapsed),t.R7$(),t.Y8G("ngIf",s.collapsed),t.R7$(2),t.Y8G("ngForOf",s.navTree),t.R7$(4),t.Y8G("ngIf",s.collapsed))},dependencies:[c.MD,c.YU,c.Sq,c.bT,d.iI,d.Wk,d.wQ,E],styles:[".sidenav[_ngcontent-%COMP%]{transition:all .5s ease;position:fixed;z-index:1;top:0;width:5rem;height:100vh;box-shadow:.063rem 0 1.25rem #303030;padding-top:75px}.logo-container[_ngcontent-%COMP%], .exit-container[_ngcontent-%COMP%]{display:flex;align-items:center;padding:.938rem;width:100%}.logo[_ngcontent-%COMP%]{background-color:#fff;text-align:center;width:3rem;min-width:3rem;border-radius:.313rem;padding:.313rem;font-size:24px;font-weight:900;cursor:pointer;border:none}.logo-text[_ngcontent-%COMP%]{margin-left:1.5rem;font-size:24px;font-weight:700}.btn-close[_ngcontent-%COMP%]{margin-left:auto;cursor:pointer;width:2rem;height:2rem;border-radius:50%;background-color:#dcdce666;border:none;color:#28283266}.btn-close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:24px}.sidenav-collapsed[_ngcontent-%COMP%]{width:16.562rem}.sidenav-nav[_ngcontent-%COMP%]{list-style:none;padding:.938rem;margin:0;display:flex;flex-direction:column;align-items:center;height:calc(100% - 8.4rem);overflow-y:auto}.sidenav-nav[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.sidenav-nav-item[_ngcontent-%COMP%]{width:100%;margin-bottom:.625rem}.sidenav-nav-link[_ngcontent-%COMP%]{cursor:pointer}.sidenav-nav-item[_ngcontent-%COMP%]   .sidenav-nav-link[_ngcontent-%COMP%]{display:flex;align-items:center;height:3rem;text-decoration:none;transition:color .3s ease}.sidenav-nav-item[_ngcontent-%COMP%]:hover   .sidenav-nav-link[_ngcontent-%COMP%]{background-color:#dcdce633}.sidenav-link-icon[_ngcontent-%COMP%]{font-size:22px;width:2rem;min-width:2rem;margin:0 .5rem;text-align:center}.sidenav-link-text[_ngcontent-%COMP%]{margin-left:1.2rem}.sidenav-nav-link.active-top-level[_ngcontent-%COMP%]{background-color:#dcdce680}.sidenav-nav-link.active-top-level.pulled[_ngcontent-%COMP%]:hover{background-color:#c8c8d266}.sidenav-nav-link[_ngcontent-%COMP%] + app-submenu-nav[_ngcontent-%COMP%]{display:block;overflow:hidden;max-height:0vh;transition:max-height .5s ease}.sidenav-nav-link.active-top-level[_ngcontent-%COMP%] + app-submenu-nav[_ngcontent-%COMP%]{background-color:#9696a033}.sidenav-nav-link.active-top-level.pulled[_ngcontent-%COMP%] + app-submenu-nav[_ngcontent-%COMP%]{max-height:100vh}.exit-container[_ngcontent-%COMP%]{justify-content:center}"]})}return e})();const U=[{path:"",component:(()=>{class e{constructor(){this.sideNavCollapsed=!1,this.screenWidth=0}ngOnInit(){return(0,p.A)(function*(){})()}onToggleSideNav(n){this.screenWidth=n.screenWidth,this.sideNavCollapsed=n.collapsed}static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275cmp=t.VBU({type:e,selectors:[["app-projects-gallery"]],decls:5,vars:4,consts:[[1,"wrapper"],["id","sidebar"],[3,"onToggleSideNav"],["id","content-body"]],template:function(o,s){1&o&&(t.j41(0,"div",0)(1,"aside",1)(2,"sidebar-nav",2),t.bIt("onToggleSideNav",function(r){return s.onToggleSideNav(r)}),t.k0s()(),t.j41(3,"div",3),t.nrm(4,"router-outlet"),t.k0s()()),2&o&&(t.R7$(3),t.AVh("body-trimmed",s.sideNavCollapsed&&s.screenWidth>768)("body-md-screen",s.sideNavCollapsed&&s.screenWidth<=768&&s.screenWidth>0))},dependencies:[k,d.n3],styles:[".wrapper[_ngcontent-%COMP%]{padding-top:5px;position:relative;height:calc(100vh - 50px)}#content-body[_ngcontent-%COMP%]{width:calc(100% - 5rem);height:calc(100vh - 55px);margin-left:5rem;z-index:0;position:relative;top:0;transition:all .5s ease;padding:3rem;padding-top:50px;overflow-y:auto}#content-body.body-trimmed[_ngcontent-%COMP%]{width:calc(100% - 16.52625rem);margin-left:16.52625rem}#content-body.body-md-screen[_ngcontent-%COMP%]{width:calc(100% - 5rem);margin-left:5rem}"]})}return e})(),children:[{path:"",redirectTo:"miscellaneous",pathMatch:"full"},{path:"software-engineering",component:h,children:[{path:"mobile",component:h,data:{categories:["mobile"]}},{path:"web",component:h,data:{categories:["web"]}},{path:"desktop",component:h,data:{categories:["desktop"]}},{path:"games",component:h,data:{categories:["games"]}}],data:{categories:["software-engineering"]}},{path:"hardware-design",component:_,data:{categories:["hardware-design"]}},{path:"data-analytics",component:_,data:{categories:["data-analytics"]}},{path:"graphics-design",component:g,children:[{path:"printable-wall-art",component:g,data:{categories:["printable-wall-art"]}}],data:{categories:["graphics-design"]}},{path:"rpa-development",component:_,data:{categories:["rpa-development"]}},{path:"miscellaneous",component:g,data:{categories:["miscellaneous"]}}]}];let W=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.$C({type:e});static#n=this.\u0275inj=t.G2t({imports:[d.iI.forChild(U),d.iI]})}return e})(),z=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.$C({type:e});static#n=this.\u0275inj=t.G2t({imports:[c.MD,k,W]})}return e})()}}]);