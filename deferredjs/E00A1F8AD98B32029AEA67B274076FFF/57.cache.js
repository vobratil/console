$wnd.hal.runAsyncCallback57("sGc(1633,1,{1:1});_.MB=function lZc(a,b){a.my(b)};function eZh(){eZh=uGc;dZh=ghl('/{selected.profile}/subsystem=transactions')}\nvar dZh;function M$h(){M$h=uGc}\nvar U1b=Yfd('org.jboss.hal.client.configuration.subsystem.transaction','TransactionPresenter/MyView');function fZh(){fZh=uGc;B1e();LFk()}\nfunction hZh(a){fZh();D1e.call(this,a);this.qRb()}\nfunction iZh(a){fZh();return new pZh(a)}\nfunction jZh(a){fZh();a.iF(false)}\nsGc(3935,106,{1:1,24:1,13:1,944:1,35:1});_.qRb=function gZh(){};_.m7=function lZh(a){this.rRb(n5(a,441))};_.rRb=function kZh(a){vGc(106).m7.call(this,a);this.g.fS().gd(new j_h);this.c.YR(a.GRb());this.g.YR(a.IRb());this.d.YR(a.HRb())};_.ibb=function mZh(a){this.c.view(a);this.g.view(a);this.i.view(a);this.f.view(a);this.d.view(a)};var b2b=Wfd('org.jboss.hal.client.configuration.subsystem.transaction','TransactionView',3935,Rtc);function nZh(){nZh=uGc;fZh()}\nfunction pZh(a){nZh();var b,d,e,g,h,i,j,k,l,m,n,o,p,q;hZh.call(this,a);this.sRb();e=ghl('/{selected.profile}/subsystem=transactions');this.b=a.Wwc().SJc(e);this.a=new wzd;this.c=(new Duk('tx-attributes-form',this.b)).iyc('default-timeout',O3(A3(Pib,1),{4:1,1:1,5:1,6:1},2,6,['enable-tsm-status','journal-store-enable-async-io','jts','node-identifier','statistics-enabled','use-journal-store'])).unsorted().lyc(new CZh(this,e,a)).nyc(new FZh(this,e,a)).build();this.g=(new Duk('tx-process-form',this.b)).iyc('process-id-uuid',O3(A3(Pib,1),{4:1,1:1,5:1,6:1},2,6,['process-id-socket-binding','process-id-socket-max-ports'])).unsorted().lyc(new IZh(this)).nyc(new LZh(this)).build();this.g.eS('process-id-socket-binding').bT(new B4d(a.Vwc(),a.hic(),ghl('/socket-binding-group=*/socket-binding=*')));this.i=(new Duk('tx-recovery-form',this.b)).iyc('socket-binding',O3(A3(Pib,1),{4:1,1:1,5:1,6:1},2,6,['status-socket-binding','recovery-listener'])).unsorted().lyc(new OZh(this,e,a)).nyc(new RZh(this,e,a)).build();this.i.eS('socket-binding').bT(new B4d(a.Vwc(),a.hic(),ghl('/socket-binding-group=*/socket-binding=*')));this.i.eS('status-socket-binding').bT(new B4d(a.Vwc(),a.hic(),ghl('/socket-binding-group=*/socket-binding=*')));this.f=(new Duk('tx-path-form',this.b)).iyc('object-store-path',O3(A3(Pib,1),{4:1,1:1,5:1,6:1},2,6,['object-store-relative-to'])).unsorted().lyc(new UZh(this,e,a)).nyc(new XZh(this,e,a)).build();this.f.eS('object-store-relative-to').bT(new t5e);this.d=(new Duk('tx-jdbc-form',this.b)).iyc('use-jdbc-store',O3(A3(Pib,1),{4:1,1:1,5:1,6:1},2,6,['jdbc-action-store-drop-table','jdbc-action-store-table-prefix','jdbc-communication-store-drop-table','jdbc-communication-store-table-prefix','jdbc-state-store-drop-table','jdbc-state-store-table-prefix','jdbc-store-datasource'])).unsorted().lyc(new $Zh(this,e,a)).nyc(new b$h(this,e,a)).build();b=zsd(O3(A3(OCc,1),{4:1,1:1,5:1},43,0,[ghl('/{selected.profile}/subsystem=datasources/data-source=*'),ghl('/{selected.profile}/subsystem=datasources/xa-data-source=*')]));this.d.eS('jdbc-store-datasource').bT(new A4d(a.Vwc(),a.hic(),b));this.e=new $1d;h=n5(n5(n5(n5(n5(n5(n5((new KSd).oN(),3).ZM(),3).fN(JKc('<h1>Transaction Manager<\\/h1><p>{{metadata172.getDescription().getDescription()}}<\\/p>')),3).nN('html503'),3).aN(),3).NM(this.c),3).aN(),3);i=h.TM();this.a.put('html503',h.mN('html503'));this.e.WP('tx-attributes-config-item','Configuration','pficon pficon-settings',i);n=n5(n5(n5(n5(n5(n5(n5((new KSd).oN(),3).ZM(),3).fN(JKc('<h1>Process ID<\\/h1><p>{{metadata172.getDescription().getDescription()}}<\\/p>')),3).nN('html505'),3).aN(),3).NM(this.g),3).aN(),3);o=n.TM();this.a.put('html505',n.mN('html505'));this.e.WP('tx-process-item','Process','pficon pficon-service',o);p=n5(n5(n5(n5(n5(n5(n5((new KSd).oN(),3).ZM(),3).fN(JKc('<h1>Recovery<\\/h1><p>{{metadata172.getDescription().getDescription()}}<\\/p>')),3).nN('html507'),3).aN(),3).NM(this.i),3).aN(),3);q=p.TM();this.a.put('html507',p.mN('html507'));this.e.WP('tx-recovery-config-item','Recovery','fa fa-repeat',q);l=n5(n5(n5(n5(n5(n5(n5((new KSd).oN(),3).ZM(),3).fN(JKc('<h1>Path<\\/h1><p>{{metadata172.getDescription().getDescription()}}<\\/p>')),3).nN('html509'),3).aN(),3).NM(this.f),3).aN(),3);m=l.TM();this.a.put('html509',l.mN('html509'));this.e.WP('tx-path-config-item','Path','fa fa-folder-open',m);j=n5(n5(n5(n5(n5(n5(n5((new KSd).oN(),3).ZM(),3).fN(JKc('<h1>JDBC<\\/h1><p>{{metadata172.getDescription().getDescription()}}<\\/p>')),3).nN('html511'),3).aN(),3).NM(this.d),3).aN(),3);k=j.TM();this.a.put('html511',j.mN('html511'));this.e.WP('tx-jdbc-config-item','JDBC','fa fa-database',k);d=n5(n5(n5((new $_d).mP().iP().PM(this.e.gQ()),11).aN(),11).aN(),11);this.fR(this.e,O3(A3(oob,1),{4:1,1:1,5:1},8,0,[]));this.fR(this.c,O3(A3(oob,1),{4:1,1:1,5:1},8,0,[]));this.fR(this.g,O3(A3(oob,1),{4:1,1:1,5:1},8,0,[]));this.fR(this.i,O3(A3(oob,1),{4:1,1:1,5:1},8,0,[]));this.fR(this.f,O3(A3(oob,1),{4:1,1:1,5:1},8,0,[]));this.fR(this.d,O3(A3(oob,1),{4:1,1:1,5:1},8,0,[]));g=d.TM();this.qZ(g)}\nsGc(4536,3935,{1:1,24:1,13:1,944:1,35:1},pZh);_.sRb=function oZh(){};_.tRb=function rZh(a,b,d,e){nZh();this.k7('Transaction Manager',a.resolve(b.hic()),e,this.b)};_.uRb=function sZh(a,b,d){nZh();this.i7('Transaction Manager',a.resolve(b.hic()),d,this.b)};_.vRb=function tZh(a,b){nZh();n5(this.ob,441).MRb(a,b)};_.wRb=function uZh(a){nZh();n5(this.ob,441).LRb(a)};_.xRb=function vZh(a,b,d,e){nZh();this.k7('Recovery',a.resolve(b.hic()),e,this.b)};_.yRb=function wZh(a,b,d){nZh();this.i7('Recovery',a.resolve(b.hic()),d,this.b)};_.zRb=function xZh(a,b,d,e){nZh();this.k7('Path',a.resolve(b.hic()),e,this.b)};_.ARb=function yZh(a,b,d){nZh();this.i7('Path',a.resolve(b.hic()),d,this.b)};_.BRb=function zZh(a,b,d,e){nZh();this.k7('JDBC',a.resolve(b.hic()),e,this.b)};_.CRb=function AZh(a,b,d){nZh();this.i7('JDBC',a.resolve(b.hic()),d,this.b)};_.BO=function qZh(){vGc(54).BO.call(this);DXd(v5(this.a.get('html503')),'{{metadata172.getDescription().getDescription()}}',Zkd(this.b.description.description));DXd(v5(this.a.get('html505')),'{{metadata172.getDescription().getDescription()}}',Zkd(this.b.description.description));DXd(v5(this.a.get('html507')),'{{metadata172.getDescription().getDescription()}}',Zkd(this.b.description.description));DXd(v5(this.a.get('html509')),'{{metadata172.getDescription().getDescription()}}',Zkd(this.b.description.description));DXd(v5(this.a.get('html511')),'{{metadata172.getDescription().getDescription()}}',Zkd(this.b.description.description))};var Q1b=Wfd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView',4536,b2b);function BZh(){BZh=uGc}\nfunction CZh(a,b,d){BZh();this.a=a;this.c=b;this.b=d}\nsGc(4537,1,{1:1},CZh);_.OU=function DZh(a,b){this.a.tRb(this.c,this.b,a,b)};var F1b=Wfd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView/lambda$0$Type',4537,Iib);function EZh(){EZh=uGc}\nfunction FZh(a,b,d){EZh();this.a=a;this.c=b;this.b=d}\nsGc(4538,1,{1:1},FZh);_.NU=function GZh(a){this.a.uRb(this.c,this.b,a)};var G1b=Wfd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView/lambda$1$Type',4538,Iib);function HZh(){HZh=uGc}\nfunction IZh(a){HZh();this.a=a}\nsGc(4539,1,{1:1},IZh);_.OU=function JZh(a,b){this.a.vRb(a,b)};var H1b=Wfd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView/lambda$2$Type',4539,Iib);function KZh(){KZh=uGc}\nfunction LZh(a){KZh();this.a=a}\nsGc(4540,1,{1:1},LZh);_.NU=function MZh(a){this.a.wRb(a)};var I1b=Wfd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView/lambda$3$Type',4540,Iib);function NZh(){NZh=uGc}\nfunction OZh(a,b,d){NZh();this.a=a;this.c=b;this.b=d}\nsGc(4541,1,{1:1},OZh);_.OU=function PZh(a,b){this.a.xRb(this.c,this.b,a,b)};var J1b=Wfd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView/lambda$4$Type',4541,Iib);function QZh(){QZh=uGc}\nfunction RZh(a,b,d){QZh();this.a=a;this.c=b;this.b=d}\nsGc(4542,1,{1:1},RZh);_.NU=function SZh(a){this.a.yRb(this.c,this.b,a)};var K1b=Wfd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView/lambda$5$Type',4542,Iib);function TZh(){TZh=uGc}\nfunction UZh(a,b,d){TZh();this.a=a;this.c=b;this.b=d}\nsGc(4543,1,{1:1},UZh);_.OU=function VZh(a,b){this.a.zRb(this.c,this.b,a,b)};var L1b=Wfd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView/lambda$6$Type',4543,Iib);function WZh(){WZh=uGc}\nfunction XZh(a,b,d){WZh();this.a=a;this.c=b;this.b=d}\nsGc(4544,1,{1:1},XZh);_.NU=function YZh(a){this.a.ARb(this.c,this.b,a)};var M1b=Wfd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView/lambda$7$Type',4544,Iib);function ZZh(){ZZh=uGc}\nfunction $Zh(a,b,d){ZZh();this.a=a;this.c=b;this.b=d}\nsGc(4545,1,{1:1},$Zh);_.OU=function _Zh(a,b){this.a.BRb(this.c,this.b,a,b)};var N1b=Wfd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView/lambda$8$Type',4545,Iib);function a$h(){a$h=uGc}\nfunction b$h(a,b,d){a$h();this.a=a;this.c=b;this.b=d}\nsGc(4546,1,{1:1},b$h);_.NU=function c$h(a){this.a.CRb(this.c,this.b,a)};var O1b=Wfd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView/lambda$9$Type',4546,Iib);function d$h(){d$h=uGc;nb()}\nfunction f$h(a){d$h();ub.call(this);this.DRb();this.a=a}\nsGc(3934,1,{1:1,71:1},f$h);_.DRb=function e$h(){};_.Nb=function g$h(){return this.ERb()};_.ERb=function h$h(){return iZh(this.a)};var P1b=Wfd('org.jboss.hal.client.configuration.subsystem.transaction','Mbui_TransactionView_Provider',3934,Iib);function j$h(){j$h=uGc;n0e();i$h=Zne('Validation error, see error messages below.')}\nfunction l$h(a,b,d,e,g,h,i,j,k,l){j$h();p0e.call(this,a,b,d,e);this.FRb();this.b=g;this.d=h;this.j=i;this.c=j;this.f=k;this.i=l}\nfunction q$h(a){j$h();var b,d,e,g,h;{d=a.eS('journal-store-enable-async-io');g=a.eS('use-journal-store');h=(Vne(),Une);if(Q5(d)){b=T5(d.Mf(),null)&&zed(q5(d.Mf()));e=Q5(g)&&T5(g.Mf(),null)&&zed(q5(g.Mf()));if(b&&!e){g.kT('Journal store needs to be enabled before enabling asynchronous IO.');h=i$h}}return h}}\nfunction r$h(a){j$h();var b,d,e,g,h,i,j;{j=(Vne(),Une);i=a.eS('process-id-uuid');d=a.eS('process-id-socket-binding');g=a.eS('process-id-socket-max-ports');if(Q5(i)&&Q5(d)){h=T5(i.Mf(),null)&&zed(q5(i.Mf()));b=Kk(x5(d.Mf()));if(h&&T5(b,null)||!h&&S5(b,null)){d.kT('Please set either UUID or socket binding');j=Zne('Validation error, see error messages below.')}}if(Q5(d)&&Q5(g)){b=Kk(x5(d.Mf()));e=n5(g.Mf(),130);if(S5(b,null)&&T5(e,null)&&g.gS()){g.kT(\"Can't be set if socket binding is not set\");j=i$h}}return j}}\nfunction s$h(a){j$h();var b,d,e;{e=(Vne(),Une);d=a.eS('use-jdbc-store');b=a.eS('jdbc-store-datasource');if(Q5(d)&&zed(q5(d.Mf()))){if(R5(b)||S5(b.Mf(),null)||skd(x5(b.Mf()))){b.kT('Please provide datasource JNDI name if using jdbc store.');e=i$h}}return e}}\nsGc(441,56,{51:1,39:1,1:1,24:1,13:1,441:1,56:1,90:1,75:1},l$h);_.FRb=function k$h(){this.a=new O$h;this.g=new R$h;this.e=new U$h};_.JRb=function t$h(a){j$h();n5(this.Hy(),944).ibb(a)};_.KRb=function u$h(a){j$h();{if(a.failure){sUl(this.Pw(),GTl(this.i.g_c().aYc(),a.failureDescription))}else{sUl(this.Pw(),VTl(this.i.g_c().rVc('Process')));this.jF()}}};_.xZ=function m$h(){return this.d.Fuc('transactions')};_.GRb=function n$h(){return this.a};_.HRb=function o$h(){return this.e};_.IRb=function p$h(){return this.g};_.ny=function v$h(){vGc(68).ny.call(this);n5(this.Hy(),944).l7(this)};_.jF=function w$h(){this.b.Ipc((eZh(),dZh),1,wGc(X$h.prototype.V6,X$h,[this]))};_.LRb=function x$h(a){var b,d;d=this.f.SJc((eZh(),dZh));b=(eZh(),dZh).resolve(this.j);this.b.bqc('Process',b,a,d,new E$h(this,a))};_.R6=function y$h(){return (eZh(),dZh).resolve(this.j)};_.MRb=function z$h(a,b){var d,e,g,h;if(!b.isEmpty()){if(b.containsKey('process-id-uuid')){h=q5(q5(b.get('process-id-uuid')))}else{h=Jed(n5(a.model,16).get('process-id-uuid').asBoolean())}if(b.containsKey('process-id-socket-binding')){e=x5(x5(b.get('process-id-socket-binding')))}else{e=n5(a.model,16).get('process-id-socket-binding').defined?n5(a.model,16).get('process-id-socket-binding').asString():null}if(b.containsKey('process-id-socket-max-ports')){d=n5(n5(b.get('process-id-socket-max-ports'),131),131)}else{d=n5(a.model,16).get('process-id-socket-max-ports').defined?Bhd(n5(a.model,16).get('process-id-socket-max-ports').asInt()):null}g=S5(e,null)||Akd(Ukd(e))==0;if(T5(h,null)&&g){this.ORb()}else if(!g&&(S5(h,null)||!zed(h))){this.NRb(e,d)}else{sUl(this.Pw(),FTl(this.i.g_c()._Xc()))}}};_.NRb=function A$h(a,b){var d,e,g,h,i;d=(eZh(),dZh).resolve(this.j);i=(new x5k(d,'write-attribute')).RGc('name','process-id-socket-binding').RGc('value',a).build();g=(new x5k(d,'undefine-attribute')).RGc('name','process-id-uuid').build();if(Q5(b)){h=(new x5k(d,'write-attribute')).RGc('name','process-id-socket-max-ports').QGc('value',b.UF()).build();e=new Q0k(g,O3(A3(ZAc,1),{4:1,1:1,5:1,163:1},96,0,[i,h]))}else{e=new Q0k(g,O3(A3(ZAc,1),{4:1,1:1,5:1,163:1},96,0,[i]))}this.c.iHc(e,new I$h(this,i))};_.ORb=function B$h(){var a,b;a=(eZh(),dZh).resolve(this.j);b=(new x5k(a,'write-attribute')).RGc('name','process-id-uuid').TGc('value',true).build();this.c.mHc(b,new $$h(this))};var i$h;var _1b=Wfd('org.jboss.hal.client.configuration.subsystem.transaction','TransactionPresenter',441,Ltc);function C$h(){C$h=uGc;sge()}\nfunction E$h(a,b){C$h();this.a=a;uge.call(this,b);this.PRb()}\nsGc(2102,74,{1:1,12:1},E$h);_.PRb=function D$h(){};_.KU=function F$h(a){this.a.jF()};var R1b=Wfd('org.jboss.hal.client.configuration.subsystem.transaction','TransactionPresenter/1',2102,crb);function G$h(){G$h=uGc;nb()}\nfunction I$h(a,b){G$h();this.a=a;this.b=b;ub.call(this);this.QRb()}\nsGc(2104,1,{1:1,79:1},I$h);_.QRb=function H$h(){};_.Fj=function J$h(a){this.RRb(n5(a,357))};_.RRb=function K$h(a){var b,d,e,g;g=a._Fc(0);e=a._Fc(1);d=g.failure||e.failure;if(d){b=this.b.failure?this.b.failureDescription:e.failureDescription;sUl(this.a.Pw(),GTl(this.a.i.g_c().aYc(),b))}else{sUl(this.a.Pw(),VTl(this.a.i.g_c().rVc('Process')));this.a.jF()}};var S1b=Wfd('org.jboss.hal.client.configuration.subsystem.transaction','TransactionPresenter/2',2104,Iib);function N$h(){N$h=uGc}\nfunction O$h(){N$h()}\nsGc(2099,1,{1:1,403:1},O$h);_.WU=function P$h(a){return q$h(a)};var V1b=Wfd('org.jboss.hal.client.configuration.subsystem.transaction','TransactionPresenter/lambda$0$Type',2099,Iib);function Q$h(){Q$h=uGc}\nfunction R$h(){Q$h()}\nsGc(2100,1,{1:1,403:1},R$h);_.WU=function S$h(a){return r$h(a)};var W1b=Wfd('org.jboss.hal.client.configuration.subsystem.transaction','TransactionPresenter/lambda$1$Type',2100,Iib);function T$h(){T$h=uGc}\nfunction U$h(){T$h()}\nsGc(2101,1,{1:1,403:1},U$h);_.WU=function V$h(a){return s$h(a)};var X1b=Wfd('org.jboss.hal.client.configuration.subsystem.transaction','TransactionPresenter/lambda$2$Type',2101,Iib);function W$h(){W$h=uGc}\nfunction X$h(a){W$h();this.a=a}\nsGc(6139,$wnd.Function,{1:1},X$h);_.V6=function Y$h(a){this.a.JRb(a)};function Z$h(){Z$h=uGc}\nfunction $$h(a){Z$h();this.a=a}\nsGc(2103,1,{1:1,33:1},$$h);_.Fj=function _$h(a){this.a.KRb(a)};var Y1b=Wfd('org.jboss.hal.client.configuration.subsystem.transaction','TransactionPresenter/lambda$4$Type',2103,Iib);function i_h(){i_h=uGc}\nfunction j_h(){i_h()}\nsGc(3936,1,{1:1,21:1},j_h);_.oK=function k_h(a){jZh(a)};var a2b=Wfd('org.jboss.hal.client.configuration.subsystem.transaction','TransactionView/lambda$0$Type',3936,Iib);sGc(1781,1,{1:1});_.WRb=function p_h(){var a;a=this.bSb(this.a.zA().axc());this.$Rb(a);return a};_.YRb=function r_h(){var a;if(R5(this.c)){a=this.WRb().ERb();this.c=a}return this.c};_.ZRb=function s_h(){var a;if(R5(this.d)){a=this.cSb(this.a.uz().ww(),this.YRb(),this.XRb(),this.a.yA().pwc(),this.a.uA().rrc(),this.a.yA().qwc(),this.a.KA().mKc(),this.a.IA().vIc(),this.a.KA().lKc(),this.a.QA().t_c());this.aSb(a);this.d=a}return this.d};_.$Rb=function u_h(a){};_.aSb=function w_h(a){this.a.xz().MB(a,this.a.xz().oC())};_.bSb=function x_h(a){return new f$h(a)};_.cSb=function y_h(a,b,d,e,g,h,i,j,k,l){return new l$h(a,b,d,e,g,h,i,j,k,l)};sGc(1783,1,{45:1,1:1});_.ek=function H_h(){this.b.Fj(this.a.a.ZRb())};function esk(a,b){Krk();return ow(a,b.fS())}\nsGc(3703,1,{1:1,13:1,8:1,140:1});_.fS=function Xrk(){var a;a=new Trd;this.b.gd(new ttk(a));return a};function stk(){stk=uGc}\nfunction ttk(a){stk();this.a=a}\nsGc(3713,1,{1:1,21:1},ttk);_.oK=function utk(a){esk(this.a,a)};var yuc=Wfd('org.jboss.hal.core.mbui.form','GroupedForm/lambda$6$Type',3713,Iib);sGc(261,1,{1:1,297:1});_._Xc=function GLl(){return (new lKc).ku('Please set either Process Id Uuid or Process Id Socket Binding').lu()};_.aYc=function HLl(){return (new lKc).ku('Unable to switch process id').lu()};_Vl(zJ)(57);\n//# sourceURL=hal-57.js\n")