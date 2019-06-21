(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{231:function(e,t,n){e.exports=n(575)},236:function(e,t,n){},238:function(e,t,n){},575:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(17),s=n.n(i),o=(n(236),n(8)),l=n(9),c=n(12),u=n(11),p=n(13),h=(n(237),n(238),n(225)),m=n.n(h),d=n(61),f=n.n(d),g=n(18),y=n.n(g),v=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="",t="",n="inherit",a="featureCell-default";!0===this.props.value?(e="glyphicon glyphicon-ok",t="available",n="green",a="featureCell-green"):!1===this.props.value?(e="glyphicon glyphicon-remove",t="unavailable",n="#c00000",a="featureCell-red"):"checking"===this.props.value?(e="glyphicon glyphicon-hourglass",t="fetching..."):"maybe"===this.props.value&&(e="glyphicon glyphicon-search",t="Not reachable via CORS, click to check via JSONP",a="featureCell-yellow");var i=r.a.createElement("span",{className:e,"sr-only":t,style:{color:n}}),s=i;return this.props.onClick&&"maybe"===this.props.value&&(s=r.a.createElement(y.a,{onClick:this.props.onClick,bsStyle:"warning",bsSize:"xsmall",title:"Check with JSONP"},i)),r.a.createElement("td",{className:"featureCell "+a},s)}}]),t}(r.a.Component),E=n(32),b=n.n(E),k=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).checkJsonp=function(){e.setState({reacheableJSONP:"checking"}),b()(e.props.endpoint).then(function(e){return e.json()}).then(function(t){return e.setState({manifest:t,reacheableJSONP:!0})}).catch(function(t){return e.setState({reacheableJSONP:!1})})},e.triggerOnSelect=function(){e.props.onSelect&&e.props.onSelect(e.props.endpoint,e.state.manifest)},e.state={reacheableCORS:"checking",reacheableJSONP:"maybe",manifest:{}},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.props.endpoint,{timeout:5e3}).then(function(e){return e.json()}).then(function(t){return e.setState({manifest:t,reacheableCORS:!0})}).catch(function(t){e.setState({reacheableCORS:!1})}),this.props.jsonp&&this.checkJsonp()}},{key:"suggestSettings",value:function(){return this.state.manifest.suggest||{}}},{key:"hasView",value:function(){return this.isReacheable?"url"in(this.state.manifest.view||{}):null}},{key:"hasSuggestEntity",value:function(){return this.isReacheable?"entity"in this.suggestSettings():null}},{key:"hasSuggestProperty",value:function(){return this.isReacheable?"property"in this.suggestSettings():null}},{key:"hasSuggestType",value:function(){return this.isReacheable?"type"in this.suggestSettings():null}},{key:"hasPreview",value:function(){return this.isReacheable?"preview"in this.state.manifest:null}},{key:"hasExtend",value:function(){return this.isReacheable?"extend"in this.state.manifest:null}},{key:"nameCell",value:function(){var e=[r.a.createElement("span",{key:"name"},this.props.name)];return this.props.documentation&&!this.props.source_url&&e.push(r.a.createElement("span",{key:"docs"}," (",r.a.createElement("a",{href:this.props.documentation,target:"_blank",rel:"noopener noreferrer",title:"Read endpoint documentation"},"docs"),")")),this.props.documentation&&this.props.source_url&&e.push(r.a.createElement("span",{key:"docs"}," (",r.a.createElement("a",{href:this.props.documentation,target:"_blank",rel:"noopener noreferrer",title:"Read endpoint documentation"},"docs"),", ",r.a.createElement("a",{href:this.props.source_url,target:"_blank",rel:"noopener noreferrer",title:"View endpoint source code"},"source"),")")),!this.props.documentation&&this.props.source_url&&e.push(r.a.createElement("span",{key:"docs"}," (",r.a.createElement("a",{href:this.props.source_url,target:"_blank",rel:"noopener noreferrer",title:"View endpoint source code"},"source"),")")),this.props.wd_uri&&e.push(r.a.createElement("span",{key:"wd",style:{float:"right"}},r.a.createElement("a",{href:this.props.wd_uri+"#P6269",target:"_blank",rel:"noopener noreferrer",title:"Edit on Wikidata"},r.a.createElement("span",{className:"glyphicon glyphicon-pencil"})))),e}},{key:"render",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,this.nameCell()),r.a.createElement("td",null,r.a.createElement(y.a,{bsStyle:"primary",bsSize:"xsmall",onClick:this.triggerOnSelect,title:"Use in test bench",disabled:!this.isReacheable},r.a.createElement("span",{className:"glyphicon glyphicon-play"}))," ",r.a.createElement("a",{href:this.props.endpoint,target:"_blank",rel:"noopener noreferrer"},this.props.endpoint)),r.a.createElement(v,{value:this.state.reacheableCORS}),r.a.createElement(v,{value:this.state.reacheableJSONP,onClick:this.checkJsonp}),r.a.createElement(v,{value:this.hasView()}),r.a.createElement(v,{value:this.hasSuggestEntity()}),r.a.createElement(v,{value:this.hasSuggestType()}),r.a.createElement(v,{value:this.hasSuggestProperty()}),r.a.createElement(v,{value:this.hasPreview()}),r.a.createElement(v,{value:this.hasExtend()}))}},{key:"isReacheable",get:function(){return!0===this.state.reacheableCORS||!0===this.state.reacheableJSONP}}]),t}(r.a.Component),S=function(){function e(t,n,a,r,i){Object(o.a)(this,e),this.endpoint=t,this.name=n,this.documentation=a,this.source_url=r,this.wd_uri=i,this.jsonp=!1}return Object(l.a)(e,[{key:"useJsonp",value:function(){this.jsonp=!0}}]),e}(),w=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).refreshServicesFromWD=function(t){e.setState({refreshing:!0});var n=new URL("https://query.wikidata.org/sparql"),a={query:e.sparql_query,format:"json"},r=null;if("GET"===t)Object.keys(a).forEach(function(e){return n.searchParams.append(e,a[e])}),r=fetch(n);else{var i=new URLSearchParams;Object.keys(a).forEach(function(e){return i.append(e,a[e])}),r=fetch(n,{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:i})}r.then(function(e){return e.json()}).then(function(t){return e.setState({services:t.results.bindings.map(function(e){return new S(e.endpoint.value,e.serviceLabel.value,"documentation"in e?e.documentation.value:void 0,"source"in e?e.source.value:void 0,e.service.value)}),refreshing:!1})}).catch(function(t){console.log(t),e.setState({refreshing:!1})})},e.loadAllJsonp=function(){e.setState({services:e.state.services.map(function(e){return e.useJsonp(),e})})},e.openAddServiceDialog=function(){e.setState({showAddServiceDialog:!0})},e.closeAddServiceDialog=function(){e.setState({showAddServiceDialog:!1})},e.state={services:[],showAddServiceDialog:!1,refreshing:!1},e.sparql_query='SELECT ?service ?serviceLabel ?endpoint ?documentation ?source WHERE {\n  ?service p:P6269 ?statement.\n  ?statement ps:P6269 ?endpoint ;\n     pq:P2700 wd:Q64490175.\n  OPTIONAL { ?statement (pq:P973 | pq:P2078) ?documentation }\n  OPTIONAL { ?statement pq:P1324 ?source }\n  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }\n}\n',e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.refreshServicesFromWD("GET")}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Due to ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/JSONP#Security_concerns"},"a security risk inherent to JSONP"),", only endpoints supporting ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/Cross-origin_resource_sharing"},"CORS")," are loaded by default. You can click the"," ",r.a.createElement("span",{className:"glyphicon glyphicon-search"})," button in each row to attempt to load the service via ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/JSONP"},"JSONP"),". Note that a malicious endpoint could use JSONP to execute arbitrary JavaScript code in this page. If you trust all the reconciliation services listed here, you can also ",r.a.createElement(y.a,{onClick:this.loadAllJsonp,bsSize:"xsmall"},"load all endpoints via JSONP"),"."),r.a.createElement(m.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Name"),r.a.createElement("td",null,"Endpoint"),r.a.createElement("td",null,"CORS"),r.a.createElement("td",null,"JSONP"),r.a.createElement("td",null,"View entities"),r.a.createElement("td",null,"Suggest entities"),r.a.createElement("td",null,"Suggest types"),r.a.createElement("td",null,"Suggest properties"),r.a.createElement("td",null,"Preview entities"),r.a.createElement("td",null,"Extend data"))),r.a.createElement("tbody",null,this.state.services.map(function(t){return r.a.createElement(k,{endpoint:t.endpoint,name:t.name,documentation:t.documentation,source_url:t.source_url,wd_uri:t.wd_uri,jsonp:t.jsonp,onSelect:e.props.onSelect,key:t.endpoint+(t.jsonp?" jsonp":" cors")})}))),r.a.createElement(y.a,{onClick:this.openAddServiceDialog},r.a.createElement("span",{className:"glyphicon glyphicon-plus"})," Add a service"),"\xa0\xa0\xa0",r.a.createElement(y.a,{onClick:function(){return e.refreshServicesFromWD("POST")},disabled:this.state.refreshing},r.a.createElement("span",{className:"glyphicon glyphicon-refresh"})," ",this.state.refreshing?"Refreshing\u2026":"Refresh table"),r.a.createElement(f.a,{show:this.state.showAddServiceDialog,onHide:this.closeAddServiceDialog},r.a.createElement(f.a.Header,{closeButton:!0},r.a.createElement(f.a.Title,null,"How to add a service to this list")),r.a.createElement(f.a.Body,null,r.a.createElement("p",null,"This list is generated by ",r.a.createElement("a",{href:this.sparqlQueryUrl},"a SPARQL query on Wikidata"),". To add your service to it, follow these steps:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Make sure your service is publicly accessible - local endpoints (such as those with ",r.a.createElement("code",null,"localhost")," or ",r.a.createElement("code",null,"127.0.0.1")," in their address) should not be added to this table."),r.a.createElement("li",null,"Find out if there is already a Wikidata item about your service, your database or your identifier. You can use ",r.a.createElement("a",{href:"https://www.wikidata.org/wiki/Special:Search?ns0=1"},"Wikidata's search interface")," for that. If there is not, you can ",r.a.createElement("a",{href:"https://www.wikidata.org/wiki/Special:NewItem"},"create a new one"),"."),r.a.createElement("li",null,"Add a statement on that item, using the ",r.a.createElement("a",{href:"https://www.wikidata.org/wiki/Property:P6269"},"API endpoint (P6269)")," property, adding the ",r.a.createElement("a",{href:"https://www.wikidata.org/wiki/Q64490175"},"OpenRefine reconciliation service API (Q64490175)")," as ",r.a.createElement("a",{href:"https://www.wikidata.org/wiki/Property:P2700"},"protocol (P2700)")," in a qualifier. You can also add a link to the documentation for the endpoint by adding a ",r.a.createElement("a",{href:"https://www.wikidata.org/wiki/Property:P973"},"described at URL (P973)")," qualifier. See ",r.a.createElement("a",{href:"https://www.wikidata.org/wiki/Q922063#P6269"},"this example for how it is done"),"."),r.a.createElement("li",null,"Refresh this table - it might take a few minutes before your service appears in the table.")))))}},{key:"sparqlQueryUrl",get:function(){return"https://query.wikidata.org/#"+encodeURIComponent(this.sparql_query)}}]),t}(r.a.Component),C=n(87),O=n.n(C),P=n(33),R=n.n(P),j=n(60),T=n.n(j),N=n(27),_=n.n(N),A=n(44),q=n.n(A),I=n(28),J=n.n(I),L=n(226),Q=n.n(L),x=n(10),U=n.n(x),D=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={endpoint:n.props.initialEndpoint,manifest:n.props.initialManifest},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.timer=null}},{key:"setService",value:function(e,t){this.setState({endpoint:e,manifest:t})}},{key:"handleChange",value:function(e){var t=this;clearTimeout(this.timer),this.setState({endpoint:e.target.value,error:void 0}),this.timer=setTimeout(function(){return t.validateEndpoint()},1e3)}},{key:"validateEndpoint",value:function(){var e=this,t=this.state.endpoint;b()(t).then(function(e){return e.json()}).then(function(n){return e._setManifest(t,n)}).catch(function(n){return e._setError(t,n)})}},{key:"_setManifest",value:function(e,t){this.state.endpoint===e&&(this.setState({endpoint:e,manifest:t}),void 0!==this.props.onChange&&this.props.onChange(e,t))}},{key:"_setError",value:function(e,t){this.state.endpoint===e&&(this.setState({manifest:void 0,error:t}),void 0!==this.props.onChange&&this.props.onChange(void 0,void 0))}},{key:"getValidationState",value:function(){return void 0!==this.state.manifest?"success":void 0!==this.state.error?"error":null}},{key:"getMessage",value:function(){if("error"===this.getValidationState())return"The endpoint must return a JSONP document describing the service."}},{key:"render",value:function(){var e=this;return r.a.createElement(T.a,{horizontal:!0},r.a.createElement(_.a,{controlId:"endpointField",validationState:this.getValidationState()},r.a.createElement(U.a,{componentClass:J.a,sm:1},"Endpoint:"),r.a.createElement(U.a,{sm:10},r.a.createElement(q.a,{type:"text",value:this.state.endpoint,placeholder:"URL of the reconciliation service endpoint",onChange:function(t){return e.handleChange(t)}}),r.a.createElement(q.a.Feedback,null),r.a.createElement(Q.a,null,this.getMessage()))))}}]),t}(r.a.Component),M=n(138),V=n.n(M),B=n(88),W=n.n(B),F=n(230),K=n.n(F),z=n(227),G=function(e,t){var n=new URL(e);return Object.keys(t).forEach(function(e){return n.searchParams.append(e,t[e])}),b()(n.toString(),{timeout:2e4})},H=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).onSuggestionsFetchRequested=function(t){var n=e.getUrl(),a={prefix:t};null!==n&&(e.setState({isLoading:!0}),G(n,a).then(function(e){return e.json()}).then(function(t){e.setState({suggestions:t.result,isLoading:!1})}).catch(function(t){console.log(t),e.setState({isLoading:!1})}))},e.onSuggestionsClearRequested=function(){e.setState({suggestions:[]})},e.onChange=function(t){void 0===e.props.onChange?e.setState({value:t[0]}):e.props.onChange(t[0])},e.state={value:void 0,suggestions:[],isLoading:!1},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"getValue",value:function(){return void 0!==this.props.onChange?this.props.value:this.state.value}},{key:"getUrl",value:function(){if(!this.props.manifest||!this.props.manifest.suggest)return null;var e=this.props.manifest.suggest[this.props.entityClass];return e?e.service_url+e.service_path:null}},{key:"render",value:function(){return r.a.createElement(z.AsyncTypeahead,{id:this.props.id,disabled:null===this.getUrl(),isLoading:this.state.isLoading,onSearch:this.onSuggestionsFetchRequested,options:this.state.suggestions,labelKey:"name",filterBy:function(e,t){return!0},selected:this.getValue()?[this.getValue()]:[],onChange:this.onChange,renderMenuItemChildren:function(e,t,n){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"suggestItemId"},e.id),r.a.createElement("span",{className:"suggestItemLabel"},e.name),r.a.createElement("br",null),r.a.createElement("span",{className:"suggestItemDescription"},e.description))}})}}]),t}(r.a.Component),Y=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).newMapping=function(){n.emitChange(n.props.value.concat([{property:void 0,value:""}]))},n.deleteMapping=function(e){var t=n.props.value.slice();t.splice(e,1),n.emitChange(t)},n.onValueChange=function(e,t){var a=n.props.value.slice(),r=a[e].property;a[e]={property:r,value:t.currentTarget.value},n.emitChange(a)},n.onPropertyChange=function(e,t){console.log("new property value"),console.log(e),console.log(t);var a=n.props.value.slice(),r=a[e].value;a[e]={property:t,value:r},console.log(a),n.emitChange(a)},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"emitChange",value:function(e){this.props.onChange&&this.props.onChange(e)}},{key:"renderMappings",value:function(){var e=this;return this.props.value.map(function(t,n){return r.a.createElement("div",{style:{display:"inline-block",marginBottom:"5px"},key:n},r.a.createElement("div",{style:{display:"inline-block",width:"45%"}},r.a.createElement(H,{manifest:e.props.manifest,entityClass:"property",id:"mapping-property-"+n,value:t.property,onChange:function(t){return e.onPropertyChange(n,t)}})),r.a.createElement("div",{style:{display:"inline-block",width:"45%"}},r.a.createElement(q.a,{type:"text",placeholder:"Type a value",value:t.value||"",onChange:function(t){return e.onValueChange(n,t)}})),r.a.createElement(y.a,{bsStyle:"primary",bsSize:"xsmall",onClick:function(){return e.deleteMapping(n)},title:"delete property"},r.a.createElement("span",{className:"glyphicon glyphicon-trash"})))})}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderMappings(),r.a.createElement("br",null),r.a.createElement(y.a,{onClick:this.newMapping},"Add property"))}}]),t}(r.a.Component),$=n(228),X=n.n($),Z=n(137),ee=n.n(Z),te=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.candidate;return r.a.createElement(ee.a,{key:e.id,header:e.name,active:e.match},r.a.createElement("a",{href:this.url},e.id),r.a.createElement(X.a,{style:{float:"right"}},this.props.candidate.score))}},{key:"url",get:function(){var e=null;return"view"in this.props.manifest&&"url"in this.props.manifest.view&&"id"in this.props.candidate&&(e=this.props.manifest.view.url.replace("{{id}}",this.props.candidate.id)),e}}]),t}(r.a.Component),ne=n(229),ae=n.n(ne),re=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).onReconQueryChange=function(t){e.setState({reconQuery:t.currentTarget.value})},e.onReconTypeChange=function(t){e.setState({reconType:t.currentTarget.value})},e.onCustomTypeChange=function(t){e.setState({reconCustomType:t})},e.onReconPropertiesChange=function(t){e.setState({reconProperties:t})},e.onSubmitReconciliation=function(t){t.preventDefault(),e.props.endpoint&&(e.setState({reconResults:"fetching"}),b()(e.formulateQueryUrl(),{timeout:2e4}).then(function(e){return e.json()}).then(function(t){return e.setState({reconResults:t.q0.result})}).catch(function(t){e.setState({reconError:t.message,reconResults:"failed"})}))},e.state={reconQuery:"",reconType:"no-type",reconCustomType:void 0,reconProperties:[]},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"renderQueryResults",value:function(){var e=this;return"fetching"===this.state.reconResults?r.a.createElement("div",{className:"resultsPlaceholder"},"Querying the service..."):"failed"===this.state.reconResults?r.a.createElement("div",{className:"resultsPlaceholder"},"Error: ",this.state.reconError):void 0===this.state.reconResults?r.a.createElement("div",null):0===this.state.reconResults.length?r.a.createElement("span",{className:"noResults"},"No results"):r.a.createElement(K.a,null,this.state.reconResults.map(function(t){return r.a.createElement(te,{candidate:t,manifest:e.props.manifest})}))}},{key:"formulateReconQuery",value:function(){var e={query:this.state.reconQuery};return"custom-type"===this.state.reconType&&void 0!==this.state.reconCustomType&&(e.type=this.state.reconCustomType.id),this.state.reconProperties.length>0&&(e.properties=this.state.reconProperties.filter(function(e){return void 0!==e&&e.property&&e.value}).map(function(e){return{pid:e.property.id,v:e.value}})),e}},{key:"formulateQueryUrl",value:function(){var e=this.props.endpoint;if(!e)return"#";var t={queries:JSON.stringify({q0:this.formulateReconQuery()})},n=new URL(e);return Object.keys(t).forEach(function(e){return n.searchParams.append(e,t[e])}),n.toString()}},{key:"renderTypeChoices",value:function(){var e=this,t=this.state.reconType,n=this.defaultTypes.map(function(n){return r.a.createElement(W.a,{name:"reconcileType",key:"default-"+n.id,value:"default-"+n.id,checked:t==="default-"+n.id,onChange:e.onReconTypeChange},n.name,r.a.createElement("br",null),r.a.createElement("span",{className:"reconTypeId"},n.id))});return this.hasTypeSuggest&&n.push(r.a.createElement(W.a,{name:"reconcileType",key:"custom-type",value:"custom-type",checked:"custom-type"===t,onChange:this.onReconTypeChange},"Custom:",r.a.createElement("div",{style:{display:"inline-block"}}," ",r.a.createElement(H,{manifest:this.props.manifest,entityClass:"type",id:"recon-custom-type-suggest",value:this.state.reconCustomType,onChange:this.onCustomTypeChange})))),n.push(r.a.createElement(W.a,{name:"reconcileType",key:"no-type",value:"no-type",checked:"no-type"===t,onChange:this.onReconTypeChange},"Reconcile against no particular type")),n}},{key:"render",value:function(){return r.a.createElement(O.a,{defaultActiveKey:"reconcile",animation:!1,id:"test-bench-tabs"},r.a.createElement(R.a,{eventKey:"reconcile",title:"Reconcile"},r.a.createElement("div",{className:"tabContent"},r.a.createElement(U.a,{sm:3},r.a.createElement(T.a,{horizontal:!0},r.a.createElement(_.a,{controlId:"reconcileName"},r.a.createElement(U.a,{componentClass:J.a,sm:2},"Name:"),r.a.createElement(U.a,{sm:8},r.a.createElement(V.a,null,r.a.createElement(q.a,{type:"text",placeholder:"Entity to reconcile",value:this.state.reconQuery,onChange:this.onReconQueryChange}),r.a.createElement(V.a.Button,null,r.a.createElement(y.a,{onClick:this.onSubmitReconciliation,type:"submit",bsStyle:"primary",disabled:!this.props.endpoint},"Reconcile"))))),r.a.createElement(_.a,{controlId:"reconcileType"},r.a.createElement(U.a,{componentClass:J.a,sm:2},"Type:"),r.a.createElement(U.a,{sm:8},this.renderTypeChoices())),this.hasPropertySuggest?r.a.createElement(_.a,{controlId:"reconcileProperties"},r.a.createElement(U.a,{componentClass:J.a,sm:2},"Properties:"),r.a.createElement(U.a,{sm:8},r.a.createElement(Y,{manifest:this.props.manifest,value:this.state.reconProperties,onChange:this.onReconPropertiesChange}))):r.a.createElement("div",null))),r.a.createElement(U.a,{sm:2},r.a.createElement(ae.a,{theme:{scheme:"monokai",author:"wimer hazenberg (http://www.monokai.nl)",base00:"#000000",base01:"#383830",base02:"#49483e",base03:"#75715e",base04:"#a59f85",base05:"#00ff00",base06:"#f5f4f1",base07:"#f9f8f5",base08:"#f92672",base09:"#fd971f",base0A:"#f4bf75",base0B:"#a6e22e",base0C:"#a1efe4",base0D:"#66d9ef",base0E:"#ae81ff",base0F:"#cc6633"},data:this.formulateReconQuery(),getItemString:function(e,t,n,a){return""},shouldExpandNode:function(e,t,n){return!0},hideRoot:!0}),r.a.createElement("br",null),r.a.createElement("a",{href:this.formulateQueryUrl(),title:"See query results on the service",target:"_blank",rel:"noopener noreferrer"},"View query results on the service")),r.a.createElement(U.a,{sm:2},this.renderQueryResults()))),r.a.createElement(R.a,{eventKey:"suggest",title:"Suggest"},r.a.createElement("div",{className:"tabContent"},r.a.createElement(T.a,{horizontal:!0},r.a.createElement(_.a,{controlId:"suggestEntityTestBench"},r.a.createElement(U.a,{componentClass:J.a,sm:1},"Entity:"),r.a.createElement(U.a,{sm:3},r.a.createElement(H,{manifest:this.props.manifest,entityClass:"entity",id:"entity-suggest-test"}))),r.a.createElement(_.a,{controlId:"suggestTypeTestBench"},r.a.createElement(U.a,{componentClass:J.a,sm:1},"Type:"),r.a.createElement(U.a,{sm:3},r.a.createElement(H,{manifest:this.props.manifest,entityClass:"type",id:"type-suggest-test"}))),r.a.createElement(_.a,{controlId:"suggestPropertyTestBench"},r.a.createElement(U.a,{componentClass:J.a,sm:1},"Property:"),r.a.createElement(U.a,{sm:3},r.a.createElement(H,{manifest:this.props.manifest,entityClass:"property",id:"property-suggest-test"})))))),r.a.createElement(R.a,{eventKey:"preview",title:"Preview"},r.a.createElement("div",{className:"tabContent"},r.a.createElement("p",null,"Coming soon"))),r.a.createElement(R.a,{eventKey:"extend",title:"Extend"},r.a.createElement("div",{className:"tabContent"},r.a.createElement("p",null,"Coming soon"))))}},{key:"defaultTypes",get:function(){return this.props.manifest&&this.props.manifest.defaultTypes||[]}},{key:"hasTypeSuggest",get:function(){return this.props.manifest&&this.props.manifest.suggest&&this.props.manifest.suggest.type}},{key:"hasPropertySuggest",get:function(){return this.props.manifest&&this.props.manifest.suggest&&this.props.manifest.suggest.property}}]),t}(r.a.Component),ie=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).onEndpointSelect=function(t,n){e.setState({endpoint:t,selectedEndpoint:t,manifest:n,openTab:"testBench"})},e.onEndpointChange=function(t,n){e.setState({endpoint:t,manifest:n})},e.handleTabSelect=function(t){e.setState({openTab:t})},e.state={endpoint:"",selectedEndpoint:"",openTab:"servicesList"},e}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=r.a.createElement("div",null);return this.state.endpoint&&(e=r.a.createElement(re,{endpoint:this.state.endpoint,manifest:this.state.manifest})),r.a.createElement("div",{className:"App",style:{margin:"20px"}},r.a.createElement("h1",null,"Reconciliation service test bench"),r.a.createElement(O.a,{activeKey:this.state.openTab,onSelect:this.handleTabSelect,animation:!1,id:"main-tabs"},r.a.createElement(R.a,{eventKey:"servicesList",title:"Services"},r.a.createElement("div",{className:"tabContent"},r.a.createElement("p",null,"This table lists reconciliation services known to ",r.a.createElement("a",{href:"https://www.wikidata.org/"},"Wikidata")," and indicates which features of the ",r.a.createElement("a",{href:"https://github.com/OpenRefine/OpenRefine/wiki/Reconciliation-Service-API"},"reconciliation API")," they support."),r.a.createElement(w,{onSelect:this.onEndpointSelect},r.a.createElement(k,{name:"OpenCorporates",endpoint:"https://opencorporates.com/reconcile",documentation:"https://api.opencorporates.com/documentation/Open-Refine-Reconciliation-API"})))),r.a.createElement(R.a,{eventKey:"testBench",title:"Test bench"},r.a.createElement("div",{className:"tabContent"},r.a.createElement("p",null,"This form lets you test a reconciliation endpoint interactively."),r.a.createElement(D,{onChange:this.onEndpointChange,initialEndpoint:this.state.selectedEndpoint,initialManifest:this.state.manifest,key:this.state.selectedEndpoint}),e))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[231,1,2]]]);
//# sourceMappingURL=main.7b897ff0.chunk.js.map