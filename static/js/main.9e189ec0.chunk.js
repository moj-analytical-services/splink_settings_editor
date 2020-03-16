(this["webpackJsonpmy-create-react-app"]=this["webpackJsonpmy-create-react-app"]||[]).push([[1],{326:function(e,t,n){e.exports=n(494)},331:function(e,t,n){},332:function(e,t,n){},490:function(e,t,n){var a={"./id_1.md":[555,67],"./id_2.md":[556,68],"./id_3.md":[557,69],"./id_4.md":[558,70],"./id_5.md":[559,71],"./id_6.md":[560,72]};function o(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],o=t[0];return n.e(t[1]).then((function(){return n.t(o,7)}))}o.keys=function(){return Object.keys(a)},o.id=490,e.exports=o},494:function(e,t,n){"use strict";n.r(t);var a=n(22),o=n.n(a),r=n(153),i=n.n(r),s=(n(331),n(122)),l=n(123),c=n(126),u=n(124),m=n(190),p=n(127),_=(n(332),n(203)),d=function(e){return o.a.createElement("div",{id:"editor-container",style:{width:"700px"}})},h=function(e){return 0===e.errors.length?o.a.createElement("div",{style:{background:"#bcfbb8"}},"The above settings object is VALID"):o.a.createElement("div",{style:{background:"#fbb8b8"}},"The above settings object contains the following errors:",e.errors.map((function(e){return o.a.createElement("li",null,e)})))},f=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={errors:[]},n.prevHeight=0,n.updateEditorHeight=function(){var e,t=n.editor.getDomNode();if(t){var a=n.editor.getOption(_.editor.EditorOption.lineHeight),o=(null===(e=n.editor.getModel())||void 0===e?void 0:e.getLineCount())||1,r=n.editor.getTopForLineNumber(o+1)+a;n.prevHeight!==r&&(n.prevHeight=r,t.style.height="".concat(r,"px"),n.editor.layout())}},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t="https://raw.githubusercontent.com/moj-analytical-services/splink/master/splink/files/settings_jsonschema.json";fetch(t).then((function(e){return e.json()})).then((function(n){var a=n,o=e.props.editor_contents_string;e.monaco=_;var r=e.monaco.Uri.parse("a://b/foo.json"),i=e.monaco.editor.createModel(o,"json",r);e.monaco.languages.json.jsonDefaults.setDiagnosticsOptions({validate:!0,schemas:[{uri:t,fileMatch:[r.toString()],schema:a}]}),e.editor=e.monaco.editor.create(document.getElementById("editor-container"),{value:o,automaticLayout:!1,language:"json",model:i,scrollbar:{vertical:"hidden",handleMouseWheel:!1},scrollBeyondLastLine:!1,minimap:{enabled:!1},theme:"vs-dark",insertSpaces:!0}),e.model=i,e.editor.onDidChangeModelDecorations((function(){var t=e.editor.getModel();e.updateEditorHeight();var n=t.getModeId(),a=_.editor.getModelMarkers({owner:n}),o=[];a.forEach((function(e){var t=e.message,n=e.startLineNumber;t="Error: ".concat(t," at line ").concat(n),o.push(t)})),e.setState({errors:o})}))}))}},{key:"componentDidUpdate",value:function(e){e.option_selection!==this.props.option_selection&&this.editor.setValue(this.props.editor_contents_string)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("p",null,"You can use ctrl+space to autocomplete fields, and ctrl+shift+f to format the document"),o.a.createElement("p",null,"Hover over fields to get a description of their purpose"),o.a.createElement(d,{className:"monaco-window"}),o.a.createElement(h,{errors:this.state.errors}))}}]),t}(o.a.Component),v=n(202),g=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"renderOption",value:function(e,t){var n=t[e].example_name;return o.a.createElement("option",{key:e,value:e},n)}},{key:"render",value:function(){var e=this.props.all_example_settings,t=Object.keys(this.props.all_example_settings).map((function(t){return{value:t,label:e[t].example_name}})),n=this.props.selected_option,a={value:n,label:e[n].example_name};return o.a.createElement("div",null,o.a.createElement(v.a,{options:t,onChange:this.props.onChange,value:a}))}}]),t}(a.Component),b=n(187),y=n.n(b),E=n(308),j=n(201),k=n.n(j),x={id_2:{settings_id:"id_2",example_name:"Example 2: Forename/surname invesrion",settings_dictionary:{comparison_columns:[{num_levels:4,case_expression:"CASE \nWHEN forename_l is null or forename_r is null then -1\nWHEN jaro_winkler(forename_l, forename_r) < 0.94 then 3\nWHEN jaro_winkler(forename_l, forename_r) < 0.88 then 2\nWHEN jaro_winkler(surname_l, forename_r) < 0.94 or jaro_winkler(surname_r, forename_l) < 0.94 then 1\nELSE 0\nEND ",custom_columns_used:["forename","surname"],custom_name:"name_inversion_forname"},{num_levels:4,case_expression:"CASE \nWHEN surname_l is null or surname_r is null then -1\nWHEN jaro_winkler(surname_l, surname_r) < 0.94 then 3\nWHEN jaro_winkler(surname_l, surname_r) < 0.88 then 2\nWHEN jaro_winkler(forename_l, surname_r) < 0.94 or jaro_winkler(surname_r, forename_l) < 0.94 then 1\nELSE 0\nEND ",custom_columns_used:["forename","surname"],custom_name:"name_inversion_surname"},{col_name:"other_columns"}],link_type:"dedupe_only"}},id_3:{settings_id:"id_3",example_name:"Example 3: Starting parameters",settings_dictionary:{proportion_of_matches:.2,blocking_rules:["l.surname = r.surname"],link_type:"dedupe_only",comparison_columns:[{num_levels:3,m_probabilities:[.05,.2,.75],col_name:"first_name",u_probabilities:[.9,.08,.02]},{m_probabilities:[.02,.98],col_name:"social_security_number",u_probabilities:[.99,.01]}]}},id_1:{settings_id:"id_1",example_name:"Example 1: Basic dedupe template",settings_dictionary:{comparison_columns:[{num_levels:3,term_frequency_adjustments:!0,col_name:"first_name"},{num_levels:3,term_frequency_adjustments:!0,col_name:"surname"},{col_name:"dob"},{col_name:"city"},{col_name:"email"}],blocking_rules:["l.first_name = r.first_name","l.surname = r.surname","l.dob = r.dob"],link_type:"dedupe_only",additional_columns_to_retain:["group"]}},id_6:{settings_id:"id_6",example_name:"Example 5: Custom comparison on a single column",settings_dictionary:{comparison_columns:[{num_levels:3,term_frequency_adjustments:!0,col_name:"first_name"},{num_levels:3,term_frequency_adjustments:!0,col_name:"surname"},{num_levels:3,case_expression:"case when fulladdress_l is null or fulladdress_r is null then -1 when (1- cosine_distance(QgramTokeniser(fulladdress_l), QgramTokeniser(fulladdress_r))) > 0.84 then 2 when (1-cosine_distance(QgramTokeniser(fulladdress_l), QgramTokeniser(fulladdress_r))) > 0.70 then 1 else 0 end  as gamma_fulladdress",col_name:"fulladdress"}],link_type:"dedupe_only"}},id_4:{settings_id:"id_4",example_name:"Example 4: Manually computing match probabilities with no iterations",settings_dictionary:{proportion_of_matches:.2,blocking_rules:["l.surname = r.surname"],comparison_columns:[{num_levels:2,m_probabilities:[.05,.2,.75],col_name:"first_name",u_probabilities:[.9,.08,.02]},{m_probabilities:[.02,.98],col_name:"social_security_number",u_probabilities:[.99,.01]}],link_type:"dedupe_only",max_iterations:0}},id_5:{settings_id:"id_5",example_name:"Example 5: Controlling convergence and the number of iterations",settings_dictionary:{comparison_columns:[{col_name:"first_name"},{col_name:"surname"}],blocking_rules:["l.surname = r.surname"],em_convergence:1e-4,link_type:"dedupe_only",max_iterations:100}}},O=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={md:null},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(E.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._loadAsyncData(this.props.select_id);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(E.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===this.state.md&&this._loadAsyncData(this.props.select_id);case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h2",null,x[this.props.select_id].example_name),o.a.createElement(k.a,{source:this.state.md}))}},{key:"_loadAsyncData",value:function(e){var t=this;this._asyncRequest=n(490)("./".concat(e,".md")).then((function(e){return fetch(e.default)})).then((function(e){return e.text()})).then((function(e){t._asyncRequest=null,t.setState({md:e})}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.select_id!==t.prev_select_id?{md:null,prev_select_id:e.select_id}:null}}]),t}(o.a.Component);var w=function(e){return o.a.createElement("div",null,o.a.createElement("h1",null,"splink settings examples and editor"),o.a.createElement("p",null,"Use the editor below to create a ",o.a.createElement("code",null,"splink")," settings dictionary or load one of our examples:"))},S=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={schema:null,selected_option:null},n.handleChange=function(e){var t=n.state.schema;n.setState({schema:t,selected_option:e})},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/moj-analytical-services/splink/master/splink/files/settings_jsonschema.json").then((function(e){return e.json()})).then((function(t){e.schema=t,e.setState({selected_option:null})}))}},{key:"schemaToOptions",value:function(){if(!this.schema)return[];var e=Object.keys(this.schema.properties),t=(e=(e=e.filter((function(e){return"$schema"!==e}))).filter((function(e){return"$id"!==e}))).map((function(e){return{label:e,value:e,is_comparison_col:!1}})),n=(e=(e=(e=Object.keys(this.schema.properties.comparison_columns.items.properties)).filter((function(e){return"$schema"!==e}))).filter((function(e){return"$id"!==e}))).map((function(e){return{label:e,value:e,is_comparison_col:!0}}));return t.concat(n)}},{key:"optionToSchemaSection",value:function(){if(!this.schema)return{};var e=this.state.selected_option;return e.is_comparison_col?this.schema.properties.comparison_columns.items.properties[e.value]:this.schema.properties[e.value]}},{key:"markdownFromSchemaSection",value:function(e){var t=this.state.selected_option.is_comparison_col,n=this.state.selected_option.value,a=[];if("title"in e&&a.push("**Summary**: ".concat(e.title)),"description"in e&&a.push("**Description**: ".concat(e.description)),"default"in e&&a.push("**Default value if not provided**: ".concat(e.default)),"type"in e&&a.push("**Data type**: ".concat(e.type)),"enum"in e){var o=e.enum.join(", ");a.push("**Takes one of the following values**: ".concat(o))}if("examples"in e){var r="";"string"===e.type&&(r='"');var i=[];t?(i.push("settings = {"),i.push('    "comparison_columns": ['),i.push("        {"),i.push('    "'.concat(n,'": ').concat(r).concat(e.examples[0]).concat(r)),i.push("        }"),i.push("    ]"),i.push("}"),i=i.join("\n")):(i.push("settings = {"),i.push('    "'.concat(n,'": ').concat(r).concat(e.examples[0]).concat(r)),i.push("}"),i=i.join("\n")),a.push("**Example**: \n  ```` \n ".concat(i,"  \n ```` "))}return a.join("\n\n")}},{key:"render",value:function(){var e=this.schemaToOptions(),t="";if(this.state.selected_option){var n=this.optionToSchemaSection();t=this.markdownFromSchemaSection(n)}return o.a.createElement("div",null,o.a.createElement("h2",null,"Setting dictionary key explorer"),o.a.createElement("p",null,"Select a key from the box below for further details about what it does"),o.a.createElement(v.a,{options:e,value:this.state.selected_option,onChange:this.handleChange}),o.a.createElement("br",null),o.a.createElement(k.a,{source:t}))}}]),t}(o.a.Component),C=n(322),D=n.n(C),N=n(323),H=n.n(N),T=n(324),M=H.a,A=new D.a(M);A.injectStyles(),Object(T.a)(A);var L=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={option_selection:"id_1"},n.handleChange=function(e){var t=e.value;n.setState({option_selection:t})},n.handleChange=n.handleChange.bind(Object(m.a)(n)),n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getTextFromId",value:function(e){var t=x[e].settings_dictionary;return JSON.stringify(t,null,4)}},{key:"render",value:function(){var e=this.getTextFromId(this.state.option_selection);return o.a.createElement("div",{className:"App-main-div"},o.a.createElement(w,null),o.a.createElement(g,{onChange:this.handleChange,all_example_settings:x,selected_option:this.state.option_selection}),o.a.createElement("div",{className:"App-flex-container"},o.a.createElement("div",{className:"App-flex-item"},o.a.createElement("h2",null,"Code editor"),o.a.createElement(f,{editor_contents_string:e,option_selection:this.state.option_selection})),o.a.createElement("div",{className:"App-flex-item"},o.a.createElement(O,{select_id:this.state.option_selection}))),o.a.createElement(S,null))}}]),t}(o.a.Component);i.a.render(o.a.createElement(L,null),document.getElementById("root"))}},[[326,2,3]]]);
//# sourceMappingURL=main.9e189ec0.chunk.js.map