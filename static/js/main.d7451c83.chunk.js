(this["webpackJsonpmy-create-react-app"]=this["webpackJsonpmy-create-react-app"]||[]).push([[1],{326:function(e,t,n){e.exports=n(494)},331:function(e,t,n){},332:function(e,t,n){},490:function(e,t,n){var a={"./id_1.md":[555,67],"./id_2.md":[556,68]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,7)}))}r.keys=function(){return Object.keys(a)},r.id=490,e.exports=r},494:function(e,t,n){"use strict";n.r(t);var a=n(23),r=n.n(a),o=n(153),i=n.n(o),s=(n(331),n(137)),l=n(138),c=n(145),u=n(139),d=n(190),p=n(146),m=(n(332),n(201)),h=function(e){return r.a.createElement("div",{id:"editor-container",style:{width:"700px"}})},f=function(e){return 0===e.errors.length?r.a.createElement("div",{style:{background:"#bcfbb8"}},"The above settings object is VALID"):r.a.createElement("div",{style:{background:"#fbb8b8"}},"The above settings object contains the following errors:",e.errors.map((function(e){return r.a.createElement("li",null,e)})))},_=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={errors:[]},n.prevHeight=0,n.updateEditorHeight=function(){var e,t=n.editor.getDomNode();if(t){var a=n.editor.getOption(m.editor.EditorOption.lineHeight),r=(null===(e=n.editor.getModel())||void 0===e?void 0:e.getLineCount())||1,o=n.editor.getTopForLineNumber(r+1)+a;n.prevHeight!==o&&(n.prevHeight=o,t.style.height="".concat(o,"px"),n.editor.layout())}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://raw.githubusercontent.com/moj-analytical-services/splink/master/splink/files/settings_jsonschema.json";fetch(t).then((function(e){return e.json()})).then((function(n){var a=n,r=e.props.editor_contents_string;e.monaco=m;var o=e.monaco.Uri.parse("a://b/foo.json"),i=e.monaco.editor.createModel(r,"json",o);e.monaco.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,schemas:[{uri:t,fileMatch:[o.toString()],schema:a}]}),e.editor=e.monaco.editor.create(document.getElementById("editor-container"),{value:r,automaticLayout:!1,language:"json",model:i,scrollbar:{vertical:"hidden",handleMouseWheel:!1},scrollBeyondLastLine:!1,minimap:{enabled:!1},theme:"vs-dark",insertSpaces:!0}),e.model=i,e.editor.onDidChangeModelDecorations((function(){var t=e.editor.getModel();e.updateEditorHeight();var n=t.getModeId(),a=m.editor.getModelMarkers({owner:n}),r=[];a.forEach((function(e){var t=e.message,n=e.startLineNumber;t="Error: ".concat(t," at line ").concat(n),r.push(t)})),e.setState({errors:r})}))}))}},{key:"componentDidUpdate",value:function(e){e.option_selection!==this.props.option_selection&&this.editor.setValue(this.props.editor_contents_string)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("p",null,"You can use ctrl+space to autocomplete fields, and ctrl+shift+f to format the document"),r.a.createElement("p",null,"Hover over fields to get a description of their purpose"),r.a.createElement(h,{className:"monaco-window"}),r.a.createElement(f,{errors:this.state.errors}))}}]),t}(r.a.Component),v=n(324),g=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"renderOption",value:function(e,t){var n=t[e].example_name;return r.a.createElement("option",{key:e,value:e},n)}},{key:"render",value:function(){var e=this.props.all_example_settings,t=Object.keys(this.props.all_example_settings).map((function(t){return{value:t,label:e[t].example_name}})),n=this.props.selected_option,a={value:n,label:e[n].example_name};return r.a.createElement("div",null,r.a.createElement(v.a,{options:t,onChange:this.props.onChange,value:a}))}}]),t}(a.Component),b=n(187),y=n.n(b),E=n(306),j=n(320),k=n.n(j),O={id_2:{settings_id:"id_2",example_name:"example 2",settings_dictionary:{link_type:"link_only"}},id_1:{settings_id:"id_1",example_name:"Example 1: Basic dedupe template",settings_dictionary:{comparison_columns:[{num_levels:3,term_frequency_adjustments:!0,col_name:"first_name"},{num_levels:3,term_frequency_adjustments:!0,col_name:"surname"},{col_name:"dob"},{col_name:"city"},{col_name:"email"}],blocking_rules:["l.first_name = r.first_name","l.surname = r.surname","l.dob = r.dob"],link_type:"dedupe_only",additional_columns_to_retain:["group"]}}},x=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={md:null},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._loadAsyncData(this.props.select_id);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(E.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===this.state.md&&this._loadAsyncData(this.props.select_id);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,O[this.props.select_id].example_name),r.a.createElement(k.a,{source:this.state.md}),r.a.createElement("p",null,"Notes:"),r.a.createElement("p",null,"Where the user does not explicitly provide settings, splink will fall back on sensible default values."))}},{key:"_loadAsyncData",value:function(e){var t=this;this._asyncRequest=n(490)("./".concat(e,".md")).then((function(e){return fetch(e.default)})).then((function(e){return e.text()})).then((function(e){t._asyncRequest=null,t.setState({md:e})}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.select_id!==t.prev_select_id?{md:null,prev_select_id:e.select_id}:null}}]),t}(r.a.Component);var w=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"splink settings examples and editor"),r.a.createElement("p",null,"Use the editor below to create a ",r.a.createElement("code",null,"splink")," settings dictionary, or load one of our examples:"))},D=n(321),C=n.n(D),M=n(322),N=n.n(M),A=n(323),L=N.a,S=new C.a(L);S.injectStyles(),Object(A.a)(S);var H=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={option_selection:"id_1"},n.handleChange=function(e){var t=e.value;n.setState({option_selection:t})},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getTextFromId",value:function(e){var t=O[e].settings_dictionary;return JSON.stringify(t,null,4)}},{key:"render",value:function(){var e=this.getTextFromId(this.state.option_selection);return r.a.createElement("div",{className:"App-main-div"},r.a.createElement(w,null),r.a.createElement(g,{onChange:this.handleChange,all_example_settings:O,selected_option:this.state.option_selection}),r.a.createElement("div",{className:"App-flex-container"},r.a.createElement("div",{className:"App-flex-item"},r.a.createElement("h2",null,"Code editor"),r.a.createElement(_,{editor_contents_string:e,option_selection:this.state.option_selection})),r.a.createElement("div",{className:"App-flex-item"},r.a.createElement(x,{select_id:this.state.option_selection}))))}}]),t}(r.a.Component);i.a.render(r.a.createElement(H,null),document.getElementById("root"))}},[[326,2,3]]]);
//# sourceMappingURL=main.d7451c83.chunk.js.map