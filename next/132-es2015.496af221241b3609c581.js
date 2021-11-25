(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{UBpl:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiLazyLoadingModule",(function(){return C}));var a=n("An66"),o=n("1VvW"),i=n("SVIu"),l=n("ctQn"),r=n("kZht"),c=n("OZlg"),d=n("e0eB"),m=n("iyc4"),p=n("uY/b");function s(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275element"](1,"img",1),r["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("src",e,r["\u0275\u0275sanitizeUrl"])}}let u=(()=>{class e{constructor(){this.array=Array.from({length:100},(e,t)=>"https://picsum.photos/"+(250+t)+"/200")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["tui-lazy-loading-example-1"]],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["height","200","width","300","loading","lazy","alt","Random image",3,"src"]],template:function(e,t){1&e&&r["\u0275\u0275template"](0,s,2,1,"p",0),2&e&&r["\u0275\u0275property"]("ngForOf",t.array)},directives:[a.s,p.a],encapsulation:2,changeDetection:0}),e})();var f=n("u8jZ");const g=["header",$localize`:␟4727a3a4fb6a8fce0cb812e9a92b5abec4560374␟3645814477080407331:LazyLoading`],y=["pageTab",$localize`:␟ff3774138bffaf62a4b812046dfbb9939c42657e␟6492831808763156510:Setup`];var h;h=$localize`:␟ee0549f297efca2ad6925c188a6663569ba9b631␟4969273440499420724: Directive can be used for image lazy loading. It is the same as ${"\ufffd#2\ufffd"}:START_TAG_CODE:loading="lazy"${"\ufffd/#2\ufffd"}:CLOSE_TAG_CODE: but supports also old browsers `;const b=["heading",$localize`:␟45f210b96a2a6e91f52f153a4f8dc30662629f8e␟142654590491855672:Usage`];function T(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275i18nStart"](1,h),r["\u0275\u0275element"](2,"code"),r["\u0275\u0275i18nEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"tui-doc-example",3),r["\u0275\u0275i18nAttributes"](4,b),r["\u0275\u0275element"](5,"tui-lazy-loading-example-1"),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("content",e.example1)}}var z,E;function S(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"ol",4),r["\u0275\u0275elementStart"](1,"li"),r["\u0275\u0275elementStart"](2,"p"),r["\u0275\u0275i18nStart"](3,z),r["\u0275\u0275element"](4,"code"),r["\u0275\u0275i18nEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](5,"tui-doc-code",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"li"),r["\u0275\u0275elementStart"](7,"p"),r["\u0275\u0275i18nStart"](8,E),r["\u0275\u0275element"](9,"code"),r["\u0275\u0275i18nEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](10,"tui-doc-code",6),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){const e=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("code",e.exampleImportModule),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("code",e.exampleInsertTemplate)}}z=$localize`:␟da7842be9999dd0b75dd18ff949170e98e905fb6␟6992622872536485913: Import ${"\ufffd#4\ufffd"}:START_TAG_CODE:TuiLazyLoadingModule${"\ufffd/#4\ufffd"}:CLOSE_TAG_CODE: into a module where you want to use our component `,E=$localize`:␟734b34a878966d6000f0b021e4fc34b8faf470d7␟8462337245784242323: Add ${"\ufffd#9\ufffd"}:START_TAG_CODE:loading="lazy"${"\ufffd/#9\ufffd"}:CLOSE_TAG_CODE: for your elements: `;let x=(()=>{class e{constructor(){this.example1={TypeScript:"import {Component} from '@angular/core';\n\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-lazy-loading-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLazyLoadingExample1 {\n    readonly array = Array.from(\n        {length: 100},\n        (_, i) => 'https://picsum.photos/' + (250 + i) + '/200',\n    );\n}\n",HTML:'<p *ngFor="let src of array">\n    <img\n        height="200"\n        width="300"\n        loading="lazy"\n        alt="Random image"\n        [src]="src"\n    />\n</p>\n'},this.exampleImportModule="import {TuiLazyLoadingModule} from '@taiga-ui/kit/directives/lazyLoading';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiLazyLoadingModule,\n    ],\n...\n",this.exampleInsertTemplate='<img src="myImage.jpg" height="200" width="300" loading="lazy" />\n'}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["example-tui-lazy-loading"]],decls:5,vars:0,consts:[["package","KIT","type","directives",6,"header"],["pageTab",""],[6,"pageTab"],["id","usage",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"tui-doc-page",0),r["\u0275\u0275i18nAttributes"](1,g),r["\u0275\u0275template"](2,T,6,1,"ng-template",1),r["\u0275\u0275template"](3,S,11,2,"ng-template",2),r["\u0275\u0275i18nAttributes"](4,y),r["\u0275\u0275elementEnd"]())},directives:[c.a,d.a,m.a,u,f.a],encapsulation:2,changeDetection:0}),e})(),C=(()=>{class e{}return e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[a.c,l.a,i.h,o.f.forChild(Object(i.o)(x))]]}),e})()}}]);