(window.webpackJsonp=window.webpackJsonp||[]).push([[496],{HL60:function(e,n,i){"use strict";i.r(n),n.default="constructor(\n    @Inject(TuiPdfViewerService) private readonly pdfService: TuiPdfViewerService,\n) {}\n\nshow(actions: PolymorpheusContent<TuiPdfViewerOptions>) {\n    this.pdfService\n        .open('/assets/taiga.pdf', {\n            label: 'Taiga UI',\n            actions,\n        })\n        .subscribe();\n}\n"}}]);