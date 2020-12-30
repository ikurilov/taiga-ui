function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _templateObject9(){var e=_taggedTemplateLiteral([":\u241f331439c9b8ee5b975fc037bbc742a75012cb302f\u241f5059560669993049040:Import into component and use:"]);return _templateObject9=function(){return e},e}function _templateObject8(){var e=_taggedTemplateLiteral([":\u241fb945a41118e9fa647ee7e77517ecf6f5b69643d2\u241f1504114262974304913:Formats a phone number with separators"]);return _templateObject8=function(){return e},e}function _templateObject7(){var e=_taggedTemplateLiteral([":\u241f08b8bd768a1f3b92b5342f011fc4194c36252dca\u241f1815937469662675044:Capitalizes every work in a string"]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral([":\u241ff58552f0761b83792b2492e1439aa12357c39d15\u241f7442713877787930163:Returns a currency symbol from its three letter code or ISO 4217"]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241f7d1831d06991cb25671ca5b74e6c0327bbf87280\u241f1473019084371139706:Adds a fillter to a string"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f8603e981f7ca02a7bf59688e4767351180b4250d\u241f5245623836371299072:Adds 'px' to a number"]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f1da832a39ea4c0c3bd7976d78c971ebce6435c13\u241f1341457636714080363:A set of format utils"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241fff3774138bffaf62a4b812046dfbb9939c42657e\u241f6492831808763156510:Setup"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241f8b68cb0e9623325effd2712982bfc6c2ddc96d58\u241f5358165867706649494:Format utils"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{eg8U:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleFormatModule",(function(){return J}));var r,a,o=n("2kYt"),i=n("nIj0"),m=n("sEIs"),l=n("SVIu"),p=n("Qq0t"),c=n("dvRg"),u=n("EM62"),s=n("OZlg"),d=n("e0eB"),f=n("iyc4"),g=n("l4xa"),y=n("YjIA"),C=((r=function(){function e(){_classCallCheck(this,e),this.parametersForm=new i.FormGroup({value:new i.FormControl(11)})}return _createClass(e,[{key:"px",get:function(){var e=this.parametersForm.value.value;return Object(g.px)(e)}}]),e}()).\u0275fac=function(e){return new(e||r)},r.\u0275cmp=u["\u0275\u0275defineComponent"]({type:r,selectors:[["tui-format-example-1"]],decls:5,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"]],template:function(e,t){1&e&&(u["\u0275\u0275text"](0),u["\u0275\u0275elementStart"](1,"form",0),u["\u0275\u0275elementStart"](2,"div",1),u["\u0275\u0275elementStart"](3,"tui-input-number",2),u["\u0275\u0275text"](4," value "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275textInterpolate1"]("'",t.px,"' = px(value); "),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[i["\u0275angular_packages_forms_forms_y"],i.NgControlStatusGroup,i.FormGroupDirective,y.a,i.NgControlStatus,i.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),r),h=n("GdrL"),v=((a=function(){function e(){_classCallCheck(this,e),this.parametersForm=new i.FormGroup({sourceString:new i.FormControl("Friend!"),minResultLength:new i.FormControl(21),padString:new i.FormControl("Hey, ")})}return _createClass(e,[{key:"paddedStart",get:function(){var e=this.parametersForm.value,t=e.sourceString,n=e.minResultLength,r=e.padString;return Object(g.padStart)(t||"",n||0,r||" ")}}]),e}()).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=u["\u0275\u0275defineComponent"]({type:a,selectors:[["tui-format-example-2"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","sourceString",1,"tui-space_top-2"],["formControlName","minResultLength",1,"tui-space_top-2"],["formControlName","padString",1,"tui-space_top-2"]],template:function(e,t){1&e&&(u["\u0275\u0275text"](0),u["\u0275\u0275elementStart"](1,"form",0),u["\u0275\u0275elementStart"](2,"div",1),u["\u0275\u0275elementStart"](3,"tui-input",2),u["\u0275\u0275text"](4," sourceString "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-input-number",3),u["\u0275\u0275text"](6," minResultLength "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"tui-input",4),u["\u0275\u0275text"](8," padString "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275textInterpolate1"]("",t.paddedStart," = padStart(sourceString, minResultLength, padString); "),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[i["\u0275angular_packages_forms_forms_y"],i.NgControlStatusGroup,i.FormGroupDirective,h.a,i.NgControlStatus,i.FormControlName,y.a],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),a),b=n("T8fS"),x=n("TjIJ"),_=n("fP8s"),S=n("OWJi");function F(e,t){if(1&e&&u["\u0275\u0275element"](0,"tui-data-list-wrapper",4),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275property"]("items",n.items)}}var w,O,E,j,T=((E=function(){function e(){_classCallCheck(this,e),this.items=["USD","RUB","643","KZT","051","KRW","CHF"],this.parametersForm=new i.FormGroup({currency:new i.FormControl(null)})}return _createClass(e,[{key:"currency",get:function(){var e=this.parametersForm.value.currency;return Object(b.getCurrencySymbol)(e)}}]),e}()).\u0275fac=function(e){return new(e||E)},E.\u0275cmp=u["\u0275\u0275defineComponent"]({type:E,selectors:[["tui-format-example-3"]],decls:6,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","currency",1,"tui-space_top-2"],[3,"items",4,"tuiDataList"],[3,"items"]],template:function(e,t){1&e&&(u["\u0275\u0275text"](0),u["\u0275\u0275elementStart"](1,"form",0),u["\u0275\u0275elementStart"](2,"div",1),u["\u0275\u0275elementStart"](3,"tui-select",2),u["\u0275\u0275text"](4," currency "),u["\u0275\u0275template"](5,F,1,1,"tui-data-list-wrapper",3),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275textInterpolate1"]("",t.currency," = getCurrencySymbol(currency); "),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[i["\u0275angular_packages_forms_forms_y"],i.NgControlStatusGroup,i.FormGroupDirective,x.a,i.NgControlStatus,i.FormControlName,_.a,S.a],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),E),k=((O=function(){function e(){_classCallCheck(this,e),this.parametersForm=new i.FormGroup({value:new i.FormControl("roman sEdOv")})}return _createClass(e,[{key:"capitalized",get:function(){var e=this.parametersForm.value.value;return Object(p.capitalize)(e)}}]),e}()).\u0275fac=function(e){return new(e||O)},O.\u0275cmp=u["\u0275\u0275defineComponent"]({type:O,selectors:[["tui-format-example-4"]],decls:5,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"]],template:function(e,t){1&e&&(u["\u0275\u0275text"](0),u["\u0275\u0275elementStart"](1,"form",0),u["\u0275\u0275elementStart"](2,"div",1),u["\u0275\u0275elementStart"](3,"tui-input",2),u["\u0275\u0275text"](4," value "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275textInterpolate1"]("'",t.capitalized,"' = capitalize(value); "),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[i["\u0275angular_packages_forms_forms_y"],i.NgControlStatusGroup,i.FormGroupDirective,h.a,i.NgControlStatus,i.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),O),G=((w=function(){function e(){_classCallCheck(this,e),this.parametersForm=new i.FormGroup({value:new i.FormControl("+79991234567"),countryCode:new i.FormControl("+7"),phoneMask:new i.FormControl("### ###-##-##")})}return _createClass(e,[{key:"formattedPhone",get:function(){var e=this.parametersForm.value,t=e.value,n=e.countryCode,r=e.phoneMask;return Object(p.formatPhone)(t,n,r)}}]),e}()).\u0275fac=function(e){return new(e||w)},w.\u0275cmp=u["\u0275\u0275defineComponent"]({type:w,selectors:[["tui-format-example-5"]],decls:9,vars:2,consts:[[3,"formGroup"],[1,"parameters"],["formControlName","value",1,"tui-space_top-2"],["formControlName","countryCode",1,"tui-space_top-2"],["formControlName","phoneMask",1,"tui-space_top-2"]],template:function(e,t){1&e&&(u["\u0275\u0275text"](0),u["\u0275\u0275elementStart"](1,"form",0),u["\u0275\u0275elementStart"](2,"div",1),u["\u0275\u0275elementStart"](3,"tui-input",2),u["\u0275\u0275text"](4," value "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-input",3),u["\u0275\u0275text"](6," countryCode "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"tui-input",4),u["\u0275\u0275text"](8," phoneMask "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275textInterpolate1"]("'",t.formattedPhone,"' = formatPhone(value, countryCode, phoneMask); "),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("formGroup",t.parametersForm))},directives:[i["\u0275angular_packages_forms_forms_y"],i.NgControlStatusGroup,i.FormGroupDirective,h.a,i.NgControlStatus,i.FormControlName],styles:[".parameters[_ngcontent-%COMP%]{margin-top:12px;width:220px}"],changeDetection:0}),w),L=n("u8jZ"),N=["header",$localize(_templateObject())],M=["pageTab",$localize(_templateObject2())];j=$localize(_templateObject3());var A,D=["description",$localize(_templateObject4())],z=["description",$localize(_templateObject5())],I=["description",$localize(_templateObject6())],P=["description",$localize(_templateObject7())],R=["description",$localize(_templateObject8())];function U(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"p"),u["\u0275\u0275i18n"](1,j),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](2,"tui-doc-example",3),u["\u0275\u0275i18nAttributes"](3,D),u["\u0275\u0275element"](4,"tui-format-example-1"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"tui-doc-example",4),u["\u0275\u0275i18nAttributes"](6,z),u["\u0275\u0275element"](7,"tui-format-example-2"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](8,"tui-doc-example",5),u["\u0275\u0275i18nAttributes"](9,I),u["\u0275\u0275element"](10,"tui-format-example-3"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](11,"tui-doc-example",6),u["\u0275\u0275i18nAttributes"](12,P),u["\u0275\u0275element"](13,"tui-format-example-4"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](14,"tui-doc-example",7),u["\u0275\u0275i18nAttributes"](15,R),u["\u0275\u0275element"](16,"tui-format-example-5"),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("content",n.example1),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",n.example2),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",n.example3),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",n.example4),u["\u0275\u0275advance"](3),u["\u0275\u0275property"]("content",n.example5)}}function H(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"ol",8),u["\u0275\u0275elementStart"](1,"li"),u["\u0275\u0275elementStart"](2,"p"),u["\u0275\u0275i18n"](3,A),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](4,"tui-doc-code",9),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){var n=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("code",n.importComponentExample)}}A=$localize(_templateObject9());var $,W,K=((W=function e(){_classCallCheck(this,e),this.importComponentExample="import {getCurrencySymbol} from '@taiga-ui/kit';\n\n...\n    currency = getCurrencySymbol(currency);\n...\n",this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {px} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-format-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample1 {\n    parametersForm = new FormGroup({\n        value: new FormControl(11),\n    });\n\n    get px(): string {\n        const {value} = this.parametersForm.value;\n\n        return px(value);\n    }\n}\n",HTML:'\'{{ px }}\' = px(value);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input-number formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input-number>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example2={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {padStart} from '@taiga-ui/cdk';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-format-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample2 {\n    parametersForm = new FormGroup({\n        sourceString: new FormControl('Friend!'),\n        minResultLength: new FormControl(21),\n        padString: new FormControl('Hey, '),\n    });\n\n    get paddedStart(): string {\n        const {sourceString, minResultLength, padString} = this.parametersForm.value;\n\n        return padStart(sourceString || '', minResultLength || 0, padString || ' ');\n    }\n}\n",HTML:'{{ paddedStart }} = padStart(sourceString, minResultLength, padString);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input formControlName="sourceString" class="tui-space_top-2">\n            sourceString\n        </tui-input>\n        <tui-input-number\n            formControlName="minResultLength"\n            class="tui-space_top-2"\n        >\n            minResultLength\n        </tui-input-number>\n        <tui-input formControlName="padString" class="tui-space_top-2">\n            padString\n        </tui-input>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example3={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {getCurrencySymbol} from '@taiga-ui/addon-commerce';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-format-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample3 {\n    readonly items = ['USD', 'RUB', '643', 'KZT', '051', 'KRW', 'CHF'];\n\n    parametersForm = new FormGroup({\n        currency: new FormControl(null),\n    });\n\n    get currency(): string | null {\n        const {currency} = this.parametersForm.value;\n\n        return getCurrencySymbol(currency);\n    }\n}\n",HTML:'{{ currency }} = getCurrencySymbol(currency);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-select formControlName="currency" class="tui-space_top-2">\n            currency\n            <tui-data-list-wrapper\n                *tuiDataList\n                [items]="items"\n            ></tui-data-list-wrapper>\n        </tui-select>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example4={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {capitalize} from '@taiga-ui/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-format-example-4',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample4 {\n    parametersForm = new FormGroup({\n        value: new FormControl('roman sEdOv'),\n    });\n\n    get capitalized(): string {\n        const {value} = this.parametersForm.value;\n\n        return capitalize(value);\n    }\n}\n",HTML:'\'{{ capitalized }}\' = capitalize(value);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"},this.example5={TypeScript:"import {Component} from '@angular/core';\nimport {FormControl, FormGroup} from '@angular/forms';\nimport {formatPhone} from '@taiga-ui/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-format-example-5',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiFormatExample5 {\n    parametersForm = new FormGroup({\n        value: new FormControl('+79991234567'),\n        countryCode: new FormControl('+7'),\n        phoneMask: new FormControl('### ###-##-##'),\n    });\n\n    get formattedPhone(): string {\n        const {value, countryCode, phoneMask} = this.parametersForm.value;\n\n        return formatPhone(value, countryCode, phoneMask);\n    }\n}\n",HTML:'\'{{ formattedPhone }}\' = formatPhone(value, countryCode, phoneMask);\n\n<form [formGroup]="parametersForm">\n    <div class="parameters">\n        <tui-input formControlName="value" class="tui-space_top-2">\n            value\n        </tui-input>\n        <tui-input formControlName="countryCode" class="tui-space_top-2">\n            countryCode\n        </tui-input>\n        <tui-input formControlName="phoneMask" class="tui-space_top-2">\n            phoneMask\n        </tui-input>\n    </div>\n</form>\n',LESS:".parameters {\n    margin-top: 12px;\n    width: 220px;\n}\n"}}).\u0275fac=function(e){return new(e||W)},W.\u0275cmp=u["\u0275\u0275defineComponent"]({type:W,selectors:[["example-format"]],decls:5,vars:0,consts:[["package","CDK / CORE",6,"header"],["pageTab",""],[6,"pageTab"],["id","px","heading","px",3,"content",6,"description"],["id","padStart","heading","padStart",3,"content",6,"description"],["id","getCurrencySymbol","heading","getCurrencySymbol",3,"content",6,"description"],["id","capitalize","heading","capitalize",3,"content",6,"description"],["id","formatPhone","heading","formatPhone",3,"content",6,"description"],[1,"b-demo-steps"],["filename","myComponent.component.ts",3,"code"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"tui-doc-page",0),u["\u0275\u0275i18nAttributes"](1,N),u["\u0275\u0275template"](2,U,17,5,"ng-template",1),u["\u0275\u0275template"](3,H,5,1,"ng-template",2),u["\u0275\u0275i18nAttributes"](4,M),u["\u0275\u0275elementEnd"]())},directives:[s.a,d.a,f.a,C,v,T,k,G,L.a],encapsulation:2,changeDetection:0}),W),J=(($=function e(){_classCallCheck(this,e)}).\u0275mod=u["\u0275\u0275defineNgModule"]({type:$}),$.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(e){return new(e||$)},imports:[[o.c,c.TuiInputNumberModule,i.FormsModule,i.ReactiveFormsModule,c.TuiInputModule,c.TuiSelectModule,p.TuiDataListModule,c.TuiDataListWrapperModule].concat(_toConsumableArray(l.e),[m.f.forChild(Object(l.n)(K))])]}),$)}}]);