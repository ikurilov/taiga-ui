(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{uDUp:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiCopyProcessorModule",(function(){return O}));var o=n("An66"),i=n("3kIJ"),c=n("1VvW"),r=n("SVIu"),a=n("D57K"),l=n("FTac"),s=n("n+W0"),p=n("5E2i"),d=n("kZht");let u=(()=>{class e{constructor(e){this.windowRef=e,this.tuiCopyProcessor=p.a}onCopy(e){var t;const n=this.windowRef.getSelection();n&&(null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",this.tuiCopyProcessor(String(n))))}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](l.i))},e.\u0275dir=d["\u0275\u0275defineDirective"]({type:e,selectors:[["","tuiCopyProcessor",""]],hostBindings:function(e,t){1&e&&d["\u0275\u0275listener"]("copy.prevent",(function(e){return t.onCopy(e)}))},inputs:{tuiCopyProcessor:"tuiCopyProcessor"}}),Object(a.b)([Object(s.a)()],e.prototype,"tuiCopyProcessor",void 0),e})(),m=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)}}),e})();var f=n("dvRg"),y=n("OZlg"),h=n("e0eB"),b=n("iyc4"),g=n("Qq0t"),v=n("YjIA"),C=n("xCPM");let S=(()=>{class e{constructor(e,t){this.format=e,this.notificationsService=t,this.value=12345.67,this.processor=e=>e.replace(this.format.decimalSeparator,".").replace(new RegExp(this.format.thousandSeparator,"g"),"")}onCopy(e){var t,n;this.notificationsService.show(null!==(n=null===(t=e.clipboardData)||void 0===t?void 0:t.getData("text/plain"))&&void 0!==n?n:"").subscribe()}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](g.TUI_NUMBER_FORMAT),d["\u0275\u0275directiveInject"](g.TuiNotificationsService))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-copy-processor-example-1"]],hostBindings:function(e,t){1&e&&d["\u0275\u0275listener"]("copy",(function(e){return t.onCopy(e)}))},decls:2,vars:2,consts:[[3,"tuiCopyProcessor","ngModel","ngModelChange"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-input-number",0),d["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),d["\u0275\u0275text"](1," Copy this\n"),d["\u0275\u0275elementEnd"]()),2&e&&d["\u0275\u0275property"]("tuiCopyProcessor",t.processor)("ngModel",t.value)},directives:[v.a,C.a,u,i.NgControlStatus,i.NgModel],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0}),e})();var x=n("u8jZ");const w=["header",$localize`:␟37561c7adb608b3f1dd2646ff27670a6a18c7ab0␟4194549152426589533:CopyProcessor`],E=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var M;M=$localize`:␟a0aef0f19512c3fb91ea516052bce537ce0f7ece␟8034929292308673999:Directive is used to processed text when coping`;const T=["heading",$localize`:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`];function D(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275i18n"](1,M),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-doc-example",3),d["\u0275\u0275i18nAttributes"](3,T),d["\u0275\u0275element"](4,"tui-copy-processor-example-1"),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("content",e.example1)}}var P,j;function I(e,t){if(1&e&&(d["\u0275\u0275elementStart"](0,"ol",4),d["\u0275\u0275elementStart"](1,"li"),d["\u0275\u0275elementStart"](2,"p"),d["\u0275\u0275i18nStart"](3,P),d["\u0275\u0275element"](4,"code"),d["\u0275\u0275i18nEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](5,"tui-doc-code",5),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](6,"li"),d["\u0275\u0275elementStart"](7,"p"),d["\u0275\u0275i18n"](8,j),d["\u0275\u0275elementEnd"](),d["\u0275\u0275element"](9,"tui-doc-code",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("code",e.exampleModule),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("code",e.exampleHtml)}}P=$localize`:␟415953669748407dbf44a8cbc7e8ef893a56fec9␟6368157042718938776: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiCopyProcessorModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,j=$localize`:␟856efa24b2b203ad1c001649937b5c5738e38f97␟8042412267862615798:Add to the template:`;let A=(()=>{class e{constructor(){this.example1={TypeScript:n.e(631).then(n.bind(null,"BVtx")),HTML:n.e(630).then(n.bind(null,"Ezi6"))},this.exampleModule=n.e(632).then(n.bind(null,"lsht")),this.exampleHtml=n.e(633).then(n.bind(null,"HgWS"))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-copy-processor"]],decls:5,vars:0,consts:[["package","CDK","type","directives",6,"header"],["pageTab",""],[6,"pageTab"],["id","usage",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275i18nAttributes"](1,w),d["\u0275\u0275template"](2,D,5,1,"ng-template",1),d["\u0275\u0275template"](3,I,10,2,"ng-template",2),d["\u0275\u0275i18nAttributes"](4,E),d["\u0275\u0275elementEnd"]())},directives:[y.a,h.a,b.a,S,x.a],encapsulation:2,changeDetection:0}),e})(),O=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.c,i.FormsModule,f.TuiInputNumberModule,m,r.i,c.f.forChild(Object(r.p)(A))]]}),e})()}}]);