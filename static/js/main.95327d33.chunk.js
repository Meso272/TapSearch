(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{33:function(e,t,a){e.exports=a(62)},38:function(e,t,a){},39:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(30),o=a.n(r),l=(a(38),a(39),a(4)),s=a(5),u=a(7),i=a(6),d=a(8),p=a(13),h=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={color:"#fff",textDecoration:"none"};return c.a.createElement("header",{style:{background:"#333",color:"#fff",textAlign:"center",padding:"10px"}},c.a.createElement("h1",null,"TapSearch"),c.a.createElement(p.b,{style:e,to:"/index"},"Index")," ","|"," ",c.a.createElement(p.b,{style:e,to:"/search"},"Search")," ","|"," ",c.a.createElement(p.b,{style:e,to:"/"},"All Documents")," ","|"," ",c.a.createElement(p.b,{style:e,to:"/clear"},"Clear"))}}]),t}(n.Component),m=a(12),f=a(16),b=a(10),v=a.n(b),y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={word:"",references:[]},a.onSearch=function(e){e.preventDefault();var t={word:a.state.word};v.a.post("https://tapsearchbackend.herokuapp.com/api/search",t).then((function(e){0!==e.data.docs.length?(a.setState({word:""}),a.setState({references:e.data.docs})):(a.setState({word:""}),a.setState({references:[]}),alert("Error. Given word is not present in any document.")),console.log(a.state.references)}))},a.onChange=function(e){return a.setState(Object(f.a)({},e.target.name,e.target.value))},a.getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted"}},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.onSearch,style:{display:"flex"}},c.a.createElement("input",{type:"text",name:"word",style:{flex:"10",padding:"5px"},placeholder:"Search the documents...",value:this.state.word,onChange:this.onChange}),c.a.createElement("input",{type:"submit",value:"Search",className:"btn",style:{flex:"1"}})),this.state.references.map((function(t){return c.a.createElement("div",{style:e.getStyle()},c.a.createElement("p",null,"No of Occurences: ",t[0],c.a.createElement("br",null),"DocumentID: ",t[1],c.a.createElement("br",null),c.a.createElement("form",{action:"/document/"+t[1]},c.a.createElement("input",{type:"submit",value:"See the Document"}))))})))}}]),t}(n.Component),g=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={docs:""},a.onIndex=function(e){e.preventDefault();var t={data:a.state.docs};v.a.post("https://tapsearchbackend.herokuapp.com/api/index",t).then((function(e){1===e.data.status?(alert("Sucessfully indexed."),a.setState({docs:""})):alert("Error. Index it again.")}))},a.onChange=function(e){return a.setState(Object(f.a)({},e.target.name,e.target.value))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.onIndex,style:{display:"flex"}},c.a.createElement("textarea",{type:"text",name:"docs",style:{flex:"10",padding:"5px",height:"610px"},placeholder:"Index the documents.",value:this.state.docs,onChange:this.onChange}),c.a.createElement("input",{type:"submit",value:"IndexIt",className:"btn",style:{flex:"1",height:"20px"}})))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={docs:[]},a.getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted"}},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;v.a.get("https://tapsearchbackend.herokuapp.com/api/getall").then((function(t){e.setState({docs:t.data.docs}),console.log(t.data.docs)}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,this.state.docs.map((function(t){return c.a.createElement("div",{style:e.getStyle()},c.a.createElement("p",null,"DocumentID: ",t[0],c.a.createElement("br",null),"Document: ",t[1],c.a.createElement("br",null),c.a.createElement("form",{action:"/document/"+t[0]},c.a.createElement("input",{type:"submit",value:"See the Document"}))))})))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={id:a.props.match.params.id,text:""},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;v.a.get("https://tapsearchbackend.herokuapp.com/api/document/"+this.state.id).then((function(t){0===t.data.text.length?alert("No such document!"):e.setState({text:t.data.text}),console.log(t)}))}},{key:"render",value:function(){return c.a.createElement("div",null,this.state.text)}}]),t}(n.Component),O=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){v.a.get("https://tapsearchbackend.herokuapp.com/api/clear")}},{key:"render",value:function(){return c.a.createElement("div",null,"All the indexes and documents are cleared.")}}]),t}(n.Component);var j=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(p.a,null,c.a.createElement(h,null),c.a.createElement(m.a,{exact:!0,path:"/search",component:y}),c.a.createElement(m.a,{exact:!0,path:"/index",component:g}),c.a.createElement(m.a,{exact:!0,path:"/",component:x}),c.a.createElement(m.a,{exact:!0,path:"/document/:id",component:E}),c.a.createElement(m.a,{exact:!0,path:"/clear",component:O})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.95327d33.chunk.js.map