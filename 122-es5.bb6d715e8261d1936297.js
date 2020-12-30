function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f970fa85798adb6af3c0bc18358ad25824d85b68e\u241f1602403460750469241: Import an Angular module for forms and ",":START_TAG_CODE:TuiValidatorModule",":CLOSE_TAG_CODE: in the same module where you want to use our directive: "]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f380ab580741bec31346978e7cab8062d6970408d\u241f8643289769990675407:Basic"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241f36475ee31466274b416a292578db4ed13c84b90c\u241f6035718283714911277:",":START_TAG_CODE:tuiValidator",":CLOSE_TAG_CODE: allows set validators for form control on the fly "]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241fe9989acc7c8ce4e53c98e725c4ccddb26500a12c\u241f676188202391799015:Validator"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{"8bCa":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiValidatorModule",(function(){return D}));var a=n("2kYt"),o=n("nIj0"),r=n("sEIs"),i=n("SVIu"),l=n("l4xa"),m=n("Qq0t"),c=n("dvRg"),p=n("EM62"),u=n("OZlg"),d=n("e0eB"),s=n("iyc4"),f=n("GdrL"),g=n("TjIJ"),y=n("fP8s"),b=n("OWJi"),C=n("EmN8"),h=n("bYz0");function _(e,t){if(1&e&&p["\u0275\u0275element"](0,"tui-data-list-wrapper",6),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("items",n.items)}}function v(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"tui-input",7),p["\u0275\u0275text"](1," Contact "),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275property"]("tuiValidator",n.validator)}}function T(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-input-phone",8),p["\u0275\u0275text"](1," Contact "),p["\u0275\u0275elementEnd"]())}var E,S,O=((E=function e(){_classCallCheck(this,e),this.items=["Email","Phone"],this.options={standalone:!0},this.type=this.items[0],this.group=new o.FormGroup({name:new o.FormControl("",o.Validators.required),contact:new o.FormControl("",o.Validators.required)}),this.validator=o.Validators.email}).\u0275fac=function(e){return new(e||E)},E.\u0275cmp=p["\u0275\u0275defineComponent"]({type:E,selectors:[["tui-validator-example-1"]],decls:12,vars:5,consts:[[3,"formGroup"],["formControlName","name"],[3,"ngModelOptions","ngModel","ngModelChange"],[3,"items",4,"tuiDataList"],["formControlName","contact",3,"tuiValidator",4,"ngIf","ngIfElse"],["phone",""],[3,"items"],["formControlName","contact",3,"tuiValidator"],["formControlName","contact"]],template:function(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"form",0),p["\u0275\u0275elementStart"](1,"p"),p["\u0275\u0275elementStart"](2,"tui-input",1),p["\u0275\u0275text"](3,"Name"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](4,"p"),p["\u0275\u0275elementStart"](5,"tui-select",2),p["\u0275\u0275listener"]("ngModelChange",(function(e){return t.type=e})),p["\u0275\u0275text"](6," Connection "),p["\u0275\u0275template"](7,_,1,1,"tui-data-list-wrapper",3),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](8,"p"),p["\u0275\u0275template"](9,v,2,1,"tui-input",4),p["\u0275\u0275template"](10,T,2,0,"ng-template",null,5,p["\u0275\u0275templateRefExtractor"]),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275reference"](11);p["\u0275\u0275property"]("formGroup",t.group),p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("ngModelOptions",t.options)("ngModel",t.type),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("ngIf",t.type===t.items[0])("ngIfElse",n)}},directives:[o["\u0275angular_packages_forms_forms_y"],o.NgControlStatusGroup,o.FormGroupDirective,f.a,o.NgControlStatus,o.FormControlName,g.a,o.NgModel,y.a,a.t,b.a,C.a,h.a],encapsulation:2,changeDetection:0}),E),w=n("u8jZ"),x=["header",$localize(_templateObject())];S=$localize(_templateObject2(),"\ufffd#2\ufffd","\ufffd/#2\ufffd");var j,M,A=["heading",$localize(_templateObject3())];function I(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"p"),p["\u0275\u0275i18nStart"](1,S),p["\u0275\u0275element"](2,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"tui-doc-example",2),p["\u0275\u0275i18nAttributes"](4,A),p["\u0275\u0275element"](5,"tui-validator-example-1"),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("content",n.example1)}}function V(e,t){if(1&e&&(p["\u0275\u0275elementStart"](0,"ol",3),p["\u0275\u0275elementStart"](1,"li"),p["\u0275\u0275elementStart"](2,"p"),p["\u0275\u0275i18nStart"](3,j),p["\u0275\u0275element"](4,"code"),p["\u0275\u0275i18nEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"tui-doc-code",4),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](6,"li"),p["\u0275\u0275elementStart"](7,"p"),p["\u0275\u0275i18n"](8,M),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](9,"tui-doc-code",5),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&e){var n=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](5),p["\u0275\u0275property"]("code",n.exampleImportModule),p["\u0275\u0275advance"](4),p["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}j=$localize(_templateObject4(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),M=$localize(_templateObject5());var L,N,k=((N=function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiValidatorModule} from '@taiga-ui/cdk';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiValidatorModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-input\n    formControlName="control"\n    [tuiValidator]="validator"\n></tui-input>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup, Validators} from '@angular/forms';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-validator-example-1',\n    templateUrl: './index.html',\n    changeDetection,\n    encapsulation,\n})\nexport class TuiValidatorExample1 {\n    readonly items = ['Email', 'Phone'];\n\n    readonly options = {standalone: true};\n\n    type = this.items[0];\n\n    readonly group = new FormGroup({\n        name: new FormControl('', Validators.required),\n        contact: new FormControl('', Validators.required),\n    });\n\n    readonly validator = Validators.email;\n}\n",HTML:'<form [formGroup]="group">\n    <p>\n        <tui-input formControlName="name">Name</tui-input>\n    </p>\n    <p>\n        <tui-select [ngModelOptions]="options" [(ngModel)]="type">\n            Connection\n            <tui-data-list-wrapper\n                *tuiDataList\n                [items]="items"\n            ></tui-data-list-wrapper>\n        </tui-select>\n    </p>\n    <p>\n        <tui-input\n            *ngIf="type === items[0]; else phone"\n            formControlName="contact"\n            [tuiValidator]="validator"\n        >\n            Contact\n        </tui-input>\n        <ng-template #phone>\n            <tui-input-phone formControlName="contact">\n                Contact\n            </tui-input-phone>\n        </ng-template>\n    </p>\n</form>\n'}}).\u0275fac=function(e){return new(e||N)},N.\u0275cmp=p["\u0275\u0275defineComponent"]({type:N,selectors:[["example-tui-validator"]],decls:4,vars:0,consts:[["package","CDK",6,"header"],["pageTab",""],["id","base",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(p["\u0275\u0275elementStart"](0,"tui-doc-page",0),p["\u0275\u0275i18nAttributes"](1,x),p["\u0275\u0275template"](2,I,6,1,"ng-template",1),p["\u0275\u0275template"](3,V,10,2,"ng-template",1),p["\u0275\u0275elementEnd"]())},directives:[u.a,d.a,s.a,O,w.a],encapsulation:2,changeDetection:0}),N),D=((L=function e(){_classCallCheck(this,e)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:L}),L.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(e){return new(e||L)},imports:[[a.c,o.FormsModule,o.ReactiveFormsModule,c.TuiInputModule,c.TuiSelectModule,l.TuiValidatorModule,c.TuiInputPhoneModule,m.TuiDataListModule,c.TuiDataListWrapperModule].concat(_toConsumableArray(i.e),[r.f.forChild(Object(i.n)(k))])]}),L)}}]);