(this["webpackJsonpmy-create-react-app"]=this["webpackJsonpmy-create-react-app"]||[]).push([[66],{560:function(e,t,n){"use strict";n.r(t);var r,o=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},i=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},a=function(){function e(e,t){var n=this;this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((function(){return n._stopWorker()})),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((function(){return n._updateExtraLibs()}))}return e.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},e.prototype.dispose=function(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},e.prototype._updateExtraLibs=function(){return o(this,void 0,void 0,(function(){var e,t;return i(this,(function(n){switch(n.label){case 0:return this._worker?(e=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return t=n.sent(),this._updateExtraLibsToken!==e?[2]:(t.updateExtraLibs(this._defaults.getExtraLibs()),[2])}}))}))},e.prototype._getClient=function(){var e=this;if(!this._client){this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs()}});var t=this._worker.getProxy();this._defaults.getEagerModelSync()&&(t=t.then((function(t){return e._worker?e._worker.withSyncedResources(monaco.editor.getModels().filter((function(t){return t.getModeId()===e._modeId})).map((function(e){return e.uri}))):t}))),this._client=t}return this._client},e.prototype.getLanguageServiceWorker=function(){for(var e,t=this,n=[],r=0;r<arguments.length;r++)n[r]=arguments[r];return this._getClient().then((function(t){e=t})).then((function(e){if(t._worker)return t._worker.withSyncedResources(n)})).then((function(t){return e}))},e}(),s=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),u=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}u((r=r.apply(e,t||[])).next())}))},c=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},l=monaco.Uri,p=monaco.Range;function f(e,t,n){if(void 0===n&&(n=0),"string"===typeof e)return e;if(void 0===e)return"";var r="";if(n){r+=t;for(var o=0;o<n;o++)r+="  "}if(r+=e.messageText,n++,e.next)for(var i=0,a=e.next;i<a.length;i++){r+=f(a[i],t,n)}return r}function g(e){return e?e.map((function(e){return e.text})).join(""):""}!function(e){e[e.None=0]="None",e[e.Block=1]="Block",e[e.Smart=2]="Smart"}(r||(r={}));var m,d=function(){function e(e){this._worker=e}return e.prototype._textSpanToRange=function(e,t){var n=e.getPositionAt(t.start),r=e.getPositionAt(t.start+t.length);return{startLineNumber:n.lineNumber,startColumn:n.column,endLineNumber:r.lineNumber,endColumn:r.column}},e}();!function(e){e[e.Warning=0]="Warning",e[e.Error=1]="Error",e[e.Suggestion=2]="Suggestion",e[e.Message=3]="Message"}(m||(m={}));var h=function(e){function t(t,n,r){var o=e.call(this,r)||this;o._defaults=t,o._selector=n,o._disposables=[],o._listener=Object.create(null);var i=function(e){if(e.getModeId()===n){var t,r=e.onDidChangeContent((function(){clearTimeout(t),t=setTimeout((function(){return o._doValidate(e)}),500)}));o._listener[e.uri.toString()]={dispose:function(){r.dispose(),clearTimeout(t)}},o._doValidate(e)}},a=function(e){monaco.editor.setModelMarkers(e,o._selector,[]);var t=e.uri.toString();o._listener[t]&&(o._listener[t].dispose(),delete o._listener[t])};o._disposables.push(monaco.editor.onDidCreateModel(i)),o._disposables.push(monaco.editor.onWillDisposeModel(a)),o._disposables.push(monaco.editor.onDidChangeModelLanguage((function(e){a(e.model),i(e.model)}))),o._disposables.push({dispose:function(){for(var e=0,t=monaco.editor.getModels();e<t.length;e++){var n=t[e];a(n)}}});var s=function(){for(var e=0,t=monaco.editor.getModels();e<t.length;e++){var n=t[e];a(n),i(n)}};return o._disposables.push(o._defaults.onDidChange(s)),o._disposables.push(o._defaults.onDidExtraLibsChange(s)),monaco.editor.getModels().forEach(i),o}return s(t,e),t.prototype.dispose=function(){this._disposables.forEach((function(e){return e&&e.dispose()})),this._disposables=[]},t.prototype._doValidate=function(e){return u(this,void 0,void 0,(function(){var t,n,r,o,i,a,s,u,l=this;return c(this,(function(c){switch(c.label){case 0:return[4,this._worker(e.uri)];case 1:return t=c.sent(),e.isDisposed()?[2]:(n=[],r=this._defaults.getDiagnosticsOptions(),o=r.noSyntaxValidation,i=r.noSemanticValidation,a=r.noSuggestionDiagnostics,o||n.push(t.getSyntacticDiagnostics(e.uri.toString())),i||n.push(t.getSemanticDiagnostics(e.uri.toString())),a||n.push(t.getSuggestionDiagnostics(e.uri.toString())),[4,Promise.all(n)]);case 2:return!(s=c.sent())||e.isDisposed()||(u=s.reduce((function(e,t){return t.concat(e)}),[]).filter((function(e){return-1===(l._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code)})).map((function(t){return l._convertDiagnostics(e,t)})),monaco.editor.setModelMarkers(e,this._selector,u)),[2]}}))}))},t.prototype._convertDiagnostics=function(e,t){var n=t.start||0,r=t.length||1,o=e.getPositionAt(n),i=o.lineNumber,a=o.column,s=e.getPositionAt(n+r),u=s.lineNumber,c=s.column;return{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:i,startColumn:a,endLineNumber:u,endColumn:c,message:f(t.messageText,"\n"),code:t.code.toString(),tags:t.reportsUnnecessary?[monaco.MarkerTag.Unnecessary]:[],relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}},t.prototype._convertRelatedInformation=function(e,t){if(t){var n=[];return t.forEach((function(t){var r=e;if(t.file){var o=monaco.Uri.parse(t.file.fileName);r=monaco.editor.getModel(o)}if(r){var i=t.start||0,a=t.length||1,s=r.getPositionAt(i),u=s.lineNumber,c=s.column,l=r.getPositionAt(i+a),p=l.lineNumber,g=l.column;n.push({resource:r.uri,startLineNumber:u,startColumn:c,endLineNumber:p,endColumn:g,message:f(t.messageText,"\n")})}})),n}},t.prototype._tsDiagnosticCategoryToMarkerSeverity=function(e){switch(e){case m.Error:return monaco.MarkerSeverity.Error;case m.Message:return monaco.MarkerSeverity.Info;case m.Warning:return monaco.MarkerSeverity.Warning;case m.Suggestion:return monaco.MarkerSeverity.Hint}return monaco.MarkerSeverity.Info},t}(d),v=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),Object.defineProperty(t.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!0,configurable:!0}),t.prototype.provideCompletionItems=function(e,n,r,o){return u(this,void 0,void 0,(function(){var r,o,i,a,s;return c(this,(function(u){switch(u.label){case 0:return r=e.getWordUntilPosition(n),o=new p(n.lineNumber,r.startColumn,n.lineNumber,r.endColumn),i=e.uri,a=e.getOffsetAt(n),[4,this._worker(i)];case 1:return[4,u.sent().getCompletionsAtPosition(i.toString(),a)];case 2:return!(s=u.sent())||e.isDisposed()?[2]:[2,{suggestions:s.entries.map((function(r){var a=o;if(r.replacementSpan){var s=e.getPositionAt(r.replacementSpan.start),u=e.getPositionAt(r.replacementSpan.start+r.replacementSpan.length);a=new p(s.lineNumber,s.column,u.lineNumber,u.column)}return{uri:i,position:n,range:a,label:r.name,insertText:r.name,sortText:r.sortText,kind:t.convertKind(r.kind)}}))}]}}))}))},t.prototype.resolveCompletionItem=function(e,n,r,o){return u(this,void 0,void 0,(function(){var n,o,i,a,s;return c(this,(function(u){switch(u.label){case 0:return o=(n=r).uri,i=n.position,a=e.getOffsetAt(i),[4,this._worker(o)];case 1:return[4,u.sent().getCompletionEntryDetails(o.toString(),a,n.label)];case 2:return!(s=u.sent())||e.isDisposed()?[2,n]:[2,{uri:o,position:i,label:s.name,kind:t.convertKind(s.kind),detail:g(s.displayParts),documentation:{value:g(s.documentation)}}]}}))}))},t.convertKind=function(e){switch(e){case x.primitiveType:case x.keyword:return monaco.languages.CompletionItemKind.Keyword;case x.variable:case x.localVariable:return monaco.languages.CompletionItemKind.Variable;case x.memberVariable:case x.memberGetAccessor:case x.memberSetAccessor:return monaco.languages.CompletionItemKind.Field;case x.function:case x.memberFunction:case x.constructSignature:case x.callSignature:case x.indexSignature:return monaco.languages.CompletionItemKind.Function;case x.enum:return monaco.languages.CompletionItemKind.Enum;case x.module:return monaco.languages.CompletionItemKind.Module;case x.class:return monaco.languages.CompletionItemKind.Class;case x.interface:return monaco.languages.CompletionItemKind.Interface;case x.warning:return monaco.languages.CompletionItemKind.File}return monaco.languages.CompletionItemKind.Property},t}(d),b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.signatureHelpTriggerCharacters=["(",","],t}return s(t,e),t.prototype.provideSignatureHelp=function(e,t,n){return u(this,void 0,void 0,(function(){var n,r,o,i;return c(this,(function(a){switch(a.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,a.sent().getSignatureHelpItems(n.toString(),r)];case 2:return!(o=a.sent())||e.isDisposed()?[2]:(i={activeSignature:o.selectedItemIndex,activeParameter:o.argumentIndex,signatures:[]},o.items.forEach((function(e){var t={label:"",parameters:[]};t.documentation=g(e.documentation),t.label+=g(e.prefixDisplayParts),e.parameters.forEach((function(n,r,o){var i=g(n.displayParts),a={label:i,documentation:g(n.documentation)};t.label+=i,t.parameters.push(a),r<o.length-1&&(t.label+=g(e.separatorDisplayParts))})),t.label+=g(e.suffixDisplayParts),i.signatures.push(t)})),[2,{value:i,dispose:function(){}}])}}))}))},t}(d),y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.provideHover=function(e,t,n){return u(this,void 0,void 0,(function(){var n,r,o,i,a,s;return c(this,(function(u){switch(u.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,u.sent().getQuickInfoAtPosition(n.toString(),r)];case 2:return!(o=u.sent())||e.isDisposed()?[2]:(i=g(o.documentation),a=o.tags?o.tags.map((function(e){var t="*@"+e.name+"*";return e.text?t+(e.text.match(/\r\n|\n/g)?" \n"+e.text:" - "+e.text):t})).join("  \n\n"):"",s=g(o.displayParts),[2,{range:this._textSpanToRange(e,o.textSpan),contents:[{value:"```js\n"+s+"\n```\n"},{value:i+(a?"\n\n"+a:"")}]}])}}))}))},t}(d),S=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.provideDocumentHighlights=function(e,t,n){return u(this,void 0,void 0,(function(){var n,r,o,i=this;return c(this,(function(a){switch(a.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,a.sent().getOccurrencesAtPosition(n.toString(),r)];case 2:return!(o=a.sent())||e.isDisposed()?[2]:[2,o.map((function(t){return{range:i._textSpanToRange(e,t.textSpan),kind:t.isWriteAccess?monaco.languages.DocumentHighlightKind.Write:monaco.languages.DocumentHighlightKind.Text}}))]}}))}))},t}(d),_=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.provideDefinition=function(e,t,n){return u(this,void 0,void 0,(function(){var n,r,o,i,a,s,u,p,f;return c(this,(function(c){switch(c.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,c.sent().getDefinitionAtPosition(n.toString(),r)];case 2:if(!(o=c.sent())||e.isDisposed())return[2];for(i=[],a=0,s=o;a<s.length;a++)u=s[a],p=l.parse(u.fileName),(f=monaco.editor.getModel(p))&&i.push({uri:p,range:this._textSpanToRange(f,u.textSpan)});return[2,i]}}))}))},t}(d),w=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.provideReferences=function(e,t,n,r){return u(this,void 0,void 0,(function(){var n,r,o,i,a,s,u,p,f;return c(this,(function(c){switch(c.label){case 0:return n=e.uri,r=e.getOffsetAt(t),[4,this._worker(n)];case 1:return[4,c.sent().getReferencesAtPosition(n.toString(),r)];case 2:if(!(o=c.sent())||e.isDisposed())return[2];for(i=[],a=0,s=o;a<s.length;a++)u=s[a],p=l.parse(u.fileName),(f=monaco.editor.getModel(p))&&i.push({uri:p,range:this._textSpanToRange(f,u.textSpan)});return[2,i]}}))}))},t}(d),k=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.provideDocumentSymbols=function(e,t){return u(this,void 0,void 0,(function(){var t,n,r,o,i=this;return c(this,(function(a){switch(a.label){case 0:return t=e.uri,[4,this._worker(t)];case 1:return[4,a.sent().getNavigationBarItems(t.toString())];case 2:return!(n=a.sent())||e.isDisposed()?[2]:(r=function(t,n,o){var a={name:n.text,detail:"",kind:C[n.kind]||monaco.languages.SymbolKind.Variable,range:i._textSpanToRange(e,n.spans[0]),selectionRange:i._textSpanToRange(e,n.spans[0]),tags:[],containerName:o};if(n.childItems&&n.childItems.length>0)for(var s=0,u=n.childItems;s<u.length;s++){var c=u[s];r(t,c,a.name)}t.push(a)},o=[],n.forEach((function(e){return r(o,e)})),[2,o])}}))}))},t}(d),x=function(){function e(){}return e.unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e}(),C=Object.create(null);C[x.module]=monaco.languages.SymbolKind.Module,C[x.class]=monaco.languages.SymbolKind.Class,C[x.enum]=monaco.languages.SymbolKind.Enum,C[x.interface]=monaco.languages.SymbolKind.Interface,C[x.memberFunction]=monaco.languages.SymbolKind.Method,C[x.memberVariable]=monaco.languages.SymbolKind.Property,C[x.memberGetAccessor]=monaco.languages.SymbolKind.Property,C[x.memberSetAccessor]=monaco.languages.SymbolKind.Property,C[x.variable]=monaco.languages.SymbolKind.Variable,C[x.const]=monaco.languages.SymbolKind.Variable,C[x.localVariable]=monaco.languages.SymbolKind.Variable,C[x.variable]=monaco.languages.SymbolKind.Variable,C[x.function]=monaco.languages.SymbolKind.Function,C[x.localFunction]=monaco.languages.SymbolKind.Function;var A,I,P=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t._convertOptions=function(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:r.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},t.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},t}(d),T=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){return u(this,void 0,void 0,(function(){var r,o,i,a,s=this;return c(this,(function(u){switch(u.label){case 0:return r=e.uri,o=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),i=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),[4,this._worker(r)];case 1:return[4,u.sent().getFormattingEditsForRange(r.toString(),o,i,P._convertOptions(n))];case 2:return!(a=u.sent())||e.isDisposed()?[2]:[2,a.map((function(t){return s._convertTextChanges(e,t)}))]}}))}))},t}(P),D=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),Object.defineProperty(t.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!0,configurable:!0}),t.prototype.provideOnTypeFormattingEdits=function(e,t,n,r,o){return u(this,void 0,void 0,(function(){var o,i,a,s=this;return c(this,(function(u){switch(u.label){case 0:return o=e.uri,i=e.getOffsetAt(t),[4,this._worker(o)];case 1:return[4,u.sent().getFormattingEditsAfterKeystroke(o.toString(),i,n,P._convertOptions(r))];case 2:return!(a=u.sent())||e.isDisposed()?[2]:[2,a.map((function(t){return s._convertTextChanges(e,t)}))]}}))}))},t}(P),O=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.provideCodeActions=function(e,t,n,r){return u(this,void 0,void 0,(function(){var r,o,i,a,s,u,l=this;return c(this,(function(c){switch(c.label){case 0:return r=e.uri,o=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),i=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),a=P._convertOptions(e.getOptions()),s=n.markers.filter((function(e){return e.code})).map((function(e){return e.code})).map(Number),[4,this._worker(r)];case 1:return[4,c.sent().getCodeFixesAtPosition(r.toString(),o,i,s,a)];case 2:return!(u=c.sent())||e.isDisposed()?[2]:[2,{actions:u.filter((function(e){return 0===e.changes.filter((function(e){return e.isNewFile})).length})).map((function(t){return l._tsCodeFixActionToMonacoCodeAction(e,n,t)})),dispose:function(){}}]}}))}))},t.prototype._tsCodeFixActionToMonacoCodeAction=function(e,t,n){for(var r=[],o=0,i=n.changes;o<i.length;o++)for(var a=0,s=i[o].textChanges;a<s.length;a++){var u=s[a];r.push({resource:e.uri,edit:{range:this._textSpanToRange(e,u.span),text:u.newText}})}return{title:n.description,edit:{edits:r},diagnostics:t.markers,kind:"quickfix"}},t}(P),N=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return s(t,e),t.prototype.provideRenameEdits=function(e,t,n,r){return u(this,void 0,void 0,(function(){var r,o,i,a,s,u,l,p,f,g;return c(this,(function(c){switch(c.label){case 0:return r=e.uri,o=r.toString(),i=e.getOffsetAt(t),[4,this._worker(r)];case 1:return[4,(a=c.sent()).getRenameInfo(o,i,{allowRenameOfImportPath:!1})];case 2:if(!1===(s=c.sent()).canRename)return[2,{edits:[],rejectReason:s.localizedErrorMessage}];if(void 0!==s.fileToRename)throw new Error("Renaming files is not supported.");return[4,a.findRenameLocations(o,i,!1,!1,!1)];case 3:if(!(u=c.sent())||e.isDisposed())return[2];for(l=[],p=0,f=u;p<f.length;p++)g=f[p],l.push({resource:monaco.Uri.parse(g.fileName),edit:{range:this._textSpanToRange(e,g.textSpan),text:n}});return[2,{edits:l}]}}))}))},t}(d);function E(e){I=R(e,"typescript")}function M(e){A=R(e,"javascript")}function K(){return new Promise((function(e,t){if(!A)return t("JavaScript not registered!");e(A)}))}function L(){return new Promise((function(e,t){if(!I)return t("TypeScript not registered!");e(I)}))}function R(e,t){var n=new a(t,e),r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.getLanguageServiceWorker.apply(n,e)};return monaco.languages.registerCompletionItemProvider(t,new v(r)),monaco.languages.registerSignatureHelpProvider(t,new b(r)),monaco.languages.registerHoverProvider(t,new y(r)),monaco.languages.registerDocumentHighlightProvider(t,new S(r)),monaco.languages.registerDefinitionProvider(t,new _(r)),monaco.languages.registerReferenceProvider(t,new w(r)),monaco.languages.registerDocumentSymbolProvider(t,new k(r)),monaco.languages.registerDocumentRangeFormattingEditProvider(t,new T(r)),monaco.languages.registerOnTypeFormattingEditProvider(t,new D(r)),monaco.languages.registerCodeActionProvider(t,new O(r)),monaco.languages.registerRenameProvider(t,new N(r)),new h(e,t,r),r}n.d(t,"setupTypeScript",(function(){return E})),n.d(t,"setupJavaScript",(function(){return M})),n.d(t,"getJavaScriptWorker",(function(){return K})),n.d(t,"getTypeScriptWorker",(function(){return L}))}}]);
//# sourceMappingURL=66.7f6b6a34.chunk.js.map