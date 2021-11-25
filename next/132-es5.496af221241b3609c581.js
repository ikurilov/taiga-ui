function _templateObject6(){var e=_taggedTemplateLiteral([":\u241f734b34a878966d6000f0b021e4fc34b8faf470d7\u241f8462337245784242323: Add ",':START_TAG_CODE:loading="lazy"',":CLOSE_TAG_CODE: for your elements: "]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241fda7842be9999dd0b75dd18ff949170e98e905fb6\u241f6992622872536485913: Import ",":START_TAG_CODE:TuiLazyLoadingModule",":CLOSE_TAG_CODE: into a module where you want to use our component "]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f45f210b96a2a6e91f52f153a4f8dc30662629f8e\u241f142654590491855672:Usage"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241fee0549f297efca2ad6925c188a6663569ba9b631\u241f4969273440499420724: Directive can be used for image lazy loading. It is the same as ",':START_TAG_CODE:loading="lazy"',":CLOSE_TAG_CODE: but supports also old browsers "]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241fff3774138bffaf62a4b812046dfbb9939c42657e\u241f6492831808763156510:Setup"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241f4727a3a4fb6a8fce0cb812e9a92b5abec4560374\u241f3645814477080407331:LazyLoading"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{UBpl:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiLazyLoadingModule",(function(){return L}));var a=n("An66"),l=n("1VvW"),i=n("SVIu"),o=n("ctQn"),r=n("kZht"),c=n("OZlg"),m=n("e0eB"),p=n("iyc4"),d=n("uY/b");function u(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275element"](1,"img",1),r["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;r["\u0275\u0275advance"](1),r["\u0275\u0275property"]("src",n,r["\u0275\u0275sanitizeUrl"])}}var s,f,g=((s=function e(){_classCallCheck(this,e),this.array=Array.from({length:100},(function(e,t){return"https://picsum.photos/"+(250+t)+"/200"}))}).\u0275fac=function(e){return new(e||s)},s.\u0275cmp=r["\u0275\u0275defineComponent"]({type:s,selectors:[["tui-lazy-loading-example-1"]],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],["height","200","width","300","loading","lazy","alt","Random image",3,"src"]],template:function(e,t){1&e&&r["\u0275\u0275template"](0,u,2,1,"p",0),2&e&&r["\u0275\u0275property"]("ngForOf",t.array)},directives:[a.s,d.a],encapsulation:2,changeDetection:0}),s),b=n("u8jZ"),h=["header",$localize(_templateObject())],y=["pageTab",$localize(_templateObject2())];f=$localize(_templateObject3(),"\ufffd#2\ufffd","\ufffd/#2\ufffd");var _,O,T=["heading",$localize(_templateObject4())];function v(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"p"),r["\u0275\u0275i18nStart"](1,f),r["\u0275\u0275element"](2,"code"),r["\u0275\u0275i18nEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](3,"tui-doc-example",3),r["\u0275\u0275i18nAttributes"](4,T),r["\u0275\u0275element"](5,"tui-lazy-loading-example-1"),r["\u0275\u0275elementEnd"]()),2&e){var n=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("content",n.example1)}}function C(e,t){if(1&e&&(r["\u0275\u0275elementStart"](0,"ol",4),r["\u0275\u0275elementStart"](1,"li"),r["\u0275\u0275elementStart"](2,"p"),r["\u0275\u0275i18nStart"](3,_),r["\u0275\u0275element"](4,"code"),r["\u0275\u0275i18nEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](5,"tui-doc-code",5),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementStart"](6,"li"),r["\u0275\u0275elementStart"](7,"p"),r["\u0275\u0275i18nStart"](8,O),r["\u0275\u0275element"](9,"code"),r["\u0275\u0275i18nEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275element"](10,"tui-doc-code",6),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"]()),2&e){var n=r["\u0275\u0275nextContext"]();r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("code",n.exampleImportModule),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}_=$localize(_templateObject5(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),O=$localize(_templateObject6(),"\ufffd#9\ufffd","\ufffd/#9\ufffd");var j,z,E=((z=function e(){_classCallCheck(this,e),this.example1={TypeScript:"import {Component} from '@angular/core';\n\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-lazy-loading-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiLazyLoadingExample1 {\n    readonly array = Array.from(\n        {length: 100},\n        (_, i) => 'https://picsum.photos/' + (250 + i) + '/200',\n    );\n}\n",HTML:'<p *ngFor="let src of array">\n    <img\n        height="200"\n        width="300"\n        loading="lazy"\n        alt="Random image"\n        [src]="src"\n    />\n</p>\n'},this.exampleImportModule="import {TuiLazyLoadingModule} from '@taiga-ui/kit/directives/lazyLoading';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiLazyLoadingModule,\n    ],\n...\n",this.exampleInsertTemplate='<img src="myImage.jpg" height="200" width="300" loading="lazy" />\n'}).\u0275fac=function(e){return new(e||z)},z.\u0275cmp=r["\u0275\u0275defineComponent"]({type:z,selectors:[["example-tui-lazy-loading"]],decls:5,vars:0,consts:[["package","KIT","type","directives",6,"header"],["pageTab",""],[6,"pageTab"],["id","usage",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"tui-doc-page",0),r["\u0275\u0275i18nAttributes"](1,h),r["\u0275\u0275template"](2,v,6,1,"ng-template",1),r["\u0275\u0275template"](3,C,11,2,"ng-template",2),r["\u0275\u0275i18nAttributes"](4,y),r["\u0275\u0275elementEnd"]())},directives:[c.a,m.a,p.a,g,b.a],encapsulation:2,changeDetection:0}),z),L=((j=function e(){_classCallCheck(this,e)}).\u0275mod=r["\u0275\u0275defineNgModule"]({type:j}),j.\u0275inj=r["\u0275\u0275defineInjector"]({factory:function(e){return new(e||j)},imports:[[a.c,o.a,i.h,l.f.forChild(Object(i.o)(E))]]}),j)}}]);