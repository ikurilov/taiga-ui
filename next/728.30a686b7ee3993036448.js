(window.webpackJsonp=window.webpackJsonp||[]).push([[728],{"ir+3":function(t,n,i){"use strict";i.r(n),n.default='<table tuiTable class="table" [columns]="columns">\n    <thead>\n        <tr tuiThGroup>\n            <th tuiTh [resizable]="true">Name</th>\n            <th tuiTh>Price</th>\n        </tr>\n    </thead>\n    <tbody tuiTbody [data]="data">\n        <tr *tuiRow="let item of data; let i = index" tuiTr>\n            <td *tuiCell="\'name\'" tuiTd>{{ item.name }}</td>\n            <td *tuiCell="\'price\'" tuiTd>\n                <tui-input-number\n                    tuiHintDirection="right"\n                    [postfix]="\'UGX\' | tuiCurrency"\n                    [formControl]="controls[i]"\n                    [tuiHint]="[] | tuiFieldErrorContent"\n                >\n                    Price\n                </tui-input-number>\n            </td>\n        </tr>\n    </tbody>\n</table>\n'}}]);