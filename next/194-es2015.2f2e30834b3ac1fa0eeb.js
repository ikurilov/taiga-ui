(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{AXTI:function(e,n,t){"use strict";t.r(n),t.d(n,"Underline",(function(){return d}));var r=t("jgtz");const d=r.Mark.create({name:"underline",defaultOptions:{HTMLAttributes:{}},parseHTML:()=>[{tag:"u"},{style:"text-decoration",consuming:!1,getAttrs:e=>!!e.includes("underline")&&{}}],renderHTML({HTMLAttributes:e}){return["u",Object(r.mergeAttributes)(this.options.HTMLAttributes,e),0]},addCommands:()=>({setUnderline:()=>({commands:e})=>e.setMark("underline"),toggleUnderline:()=>({commands:e})=>e.toggleMark("underline"),unsetUnderline:()=>({commands:e})=>e.unsetMark("underline")}),addKeyboardShortcuts(){return{"Mod-u":()=>this.editor.commands.toggleUnderline()}}});n.default=d}}]);