(this["webpackJsonpmy-create-react-app"]=this["webpackJsonpmy-create-react-app"]||[]).push([[1],{326:function(e,t,n){e.exports=n(494)},331:function(e,t,n){},332:function(e,t,n){},490:function(e,t,n){var a={"./id_1.md":[555,67],"./id_2.md":[556,68]};function o(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return n.e(t[1]).then((function(){return n.t(o,7)}))}o.keys=function(){return Object.keys(a)},o.id=490,e.exports=o},494:function(e,t,n){"use strict";n.r(t);var a=n(23),o=n.n(a),r=n(153),i=n.n(r),s=(n(331),n(137)),l=n(138),c=n(145),u=n(139),d=n(190),p=n(146),m=(n(332),n(201)),h=function(e){return o.a.createElement("div",{id:"editor-container",style:{width:"700px"}})},f=function(e){return 0===e.errors.length?o.a.createElement("div",{style:{background:"#bcfbb8"}},"The above settings object is VALID"):o.a.createElement("div",{style:{background:"#fbb8b8"}},"The above settings object contains the following errors:",e.errors.map((function(e){return o.a.createElement("li",null,e)})))},v=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={errors:[]},n.prevHeight=0,n.updateEditorHeight=function(){var e,t=n.editor.getDomNode();if(t){var a=n.editor.getOption(m.editor.EditorOption.lineHeight),o=(null===(e=n.editor.getModel())||void 0===e?void 0:e.getLineCount())||1,r=n.editor.getTopForLineNumber(o+1)+a;n.prevHeight!==r&&(n.prevHeight=r,t.style.height="".concat(r,"px"),n.editor.layout())}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://raw.githubusercontent.com/moj-analytical-services/splink/master/splink/files/settings_jsonschema.json";fetch(t).then((function(e){return e.json()})).then((function(n){var a=n,o=e.props.editor_contents_string;e.monaco=m;var r=e.monaco.Uri.parse("a://b/foo.json"),i=e.monaco.editor.createModel(o,"json",r);e.monaco.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,schemas:[{uri:t,fileMatch:[r.toString()],schema:a}]}),e.editor=e.monaco.editor.create(document.getElementById("editor-container"),{value:o,automaticLayout:!1,language:"json",model:i,scrollbar:{vertical:"hidden",handleMouseWheel:!1},scrollBeyondLastLine:!1,minimap:{enabled:!1},theme:"vs-dark",insertSpaces:!0}),e.model=i,e.editor.onDidChangeModelDecorations((function(){var t=e.editor.getModel();e.updateEditorHeight();var n=t.getModeId(),a=m.editor.getModelMarkers({owner:n}),o=[];a.forEach((function(e){var t=e.message,n=e.startLineNumber;t="Error: ".concat(t," at line ").concat(n),o.push(t)})),e.setState({errors:o})}))}))}},{key:"componentDidUpdate",value:function(e){e.option_selection!==this.props.option_selection&&this.editor.setValue(this.props.editor_contents_string)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null,"You can use ctrl+space to autocomplete fields, and ctrl+shift+f to format the document"),o.a.createElement("p",null,"Hover over fields to get a description of their purpose"),o.a.createElement(h,{className:"monaco-window"}),o.a.createElement(f,{errors:this.state.errors}))}}]),t}(o.a.Component),_=n(324),g=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"renderOption",value:function(e,t){var n=t[e].example_name;return o.a.createElement("option",{key:e,value:e},n)}},{key:"render",value:function(){var e=this.props.all_example_settings,t=Object.keys(this.props.all_example_settings).map((function(t){return{value:t,label:e[t].example_name}})),n=this.props.selected_option,a={value:n,label:e[n].example_name};return o.a.createElement("div",null,o.a.createElement(_.a,{options:t,onChange:this.props.onChange,value:a}))}}]),t}(a.Component),b=n(187),y=n.n(b),j=n(306),E=n(320),k=n.n(E),O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={md:null},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(j.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._loadAsyncData(this.props.select_id);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(j.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===this.state.md&&this._loadAsyncData(this.props.select_id);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(k.a,{source:this.state.md}),o.a.createElement("p",null,"Notes:"),o.a.createElement("p",null,"Where the user does not explicitly provide settings, splink will fall back on sensible default values."))}},{key:"_loadAsyncData",value:function(e){var t=this;this._asyncRequest=n(490)("./".concat(e,".md")).then((function(e){return fetch(e.default)})).then((function(e){return e.text()})).then((function(e){t._asyncRequest=null,t.setState({md:e})}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.select_id!==t.prev_select_id?{md:null,prev_select_id:e.select_id}:null}}]),t}(o.a.Component);var x=function(e){return o.a.createElement("div",null,o.a.createElement("h1",null,"splink settings examples and editor"),o.a.createElement("p",null,"Use the editor below to create a ",o.a.createElement("code",null,"splink")," settings dictionary, or load one of our examples:"))},w={id_2:{settings_id:"id_2",example_name:"example 2",settings_dictionary:{link_type:"link_only"}},id_1:{settings_id:"id_1",example_name:"Example 1: Basic dedupe template",settings_dictionary:{comparison_columns:[{num_levels:3,term_frequency_adjustments:!0,col_name:"first_name"},{num_levels:3,term_frequency_adjustments:!0,col_name:"surname"},{col_name:"dob"},{col_name:"city"},{col_name:"email"}],blocking_rules:["l.first_name = r.first_name","l.surname = r.surname","l.dob = r.dob"],link_type:"dedupe_only",additional_columns_to_retain:["group"]}}},D=n(321),C=n.n(D),M=n(322),N=n.n(M),A=n(323),L=N.a,S=new C.a(L);S.injectStyles(),Object(A.a)(S);var H=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={option_selection:"id_1"},n.handleChange=function(e){var t=e.value;n.setState({option_selection:t})},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getTextFromId",value:function(e){var t=w[e].settings_dictionary;return JSON.stringify(t,null,4)}},{key:"render",value:function(){var e=this.getTextFromId(this.state.option_selection);return o.a.createElement("div",{className:"App-main-div"},o.a.createElement(x,null),o.a.createElement(g,{onChange:this.handleChange,all_example_settings:w,selected_option:this.state.option_selection}),o.a.createElement("div",{className:"App-flex-container"},o.a.createElement("div",{className:"App-flex-item"},o.a.createElement("h2",null,"Code editor"),o.a.createElement(v,{editor_contents_string:e,option_selection:this.state.option_selection})),o.a.createElement("div",{className:"App-flex-item"},o.a.createElement(O,{select_id:this.state.option_selection}))))}}]),t}(o.a.Component);i.a.render(o.a.createElement(H,null),document.getElementById("root"))}},[[326,2,3]]]);
//# sourceMappingURL=main.1431c964.chunk.js.map