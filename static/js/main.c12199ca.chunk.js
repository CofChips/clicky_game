(this.webpackJsonpclicky_game=this.webpackJsonpclicky_game||[]).push([[0],[,,function(e){e.exports=JSON.parse('[{"id":1,"name":"Johnny Cueto","image":"https://securea.mlb.com/mlb/images/players/head_shot/456501.jpg","clicked":true},{"id":2,"name":"Brandon Crawford","image":"https://securea.mlb.com/mlb/images/players/head_shot/543063.jpg","clicked":false},{"id":3,"name":"Evan Longoria","image":"https://securea.mlb.com/mlb/images/players/head_shot/446334.jpg","clicked":false},{"id":4,"name":"Pablo Sandoval","image":"https://securea.mlb.com/mlb/images/players/head_shot/467055.jpg","clicked":false},{"id":5,"name":"Donovan Solano","image":"https://securea.mlb.com/mlb/images/players/head_shot/456781.jpg","clicked":false},{"id":6,"name":"Alex Dickerson","image":"https://securea.mlb.com/mlb/images/players/head_shot/543105.jpg","clicked":false},{"id":7,"name":"Hunter Pence","image":"https://securea.mlb.com/mlb/images/players/head_shot/452254.jpg","clicked":false},{"id":8,"name":"Austin Slater","image":"https://securea.mlb.com/mlb/images/players/head_shot/596103.jpg","clicked":false},{"id":9,"name":"Mike Yastrzemski","image":"https://securea.mlb.com/mlb/images/players/head_shot/573262.jpg","clicked":false},{"id":10,"name":"Tyler Rogers","image":"https://securea.mlb.com/mlb/images/players/head_shot/643511.jpg","clicked":false},{"id":11,"name":"Tyler Heineman","image":"https://securea.mlb.com/mlb/images/players/head_shot/623168.jpg","clicked":false},{"id":12,"name":"Wilmer Flores","image":"https://securea.mlb.com/mlb/images/players/head_shot/527038.jpg","clicked":false}]')},,,,,,,function(e,a,t){e.exports=t(19)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(4),l=t.n(r),s=t(5),i=t(6),m=t(1),o=t(8),d=t(7);t(14);var h=function(e){return c.a.createElement("nav",{className:"navbar background fixed-top"},c.a.createElement("ul",{className:"w-100 m-0 p-0"},c.a.createElement("li",{className:"list text-left"},c.a.createElement("a",{className:"navbar-brand brand",href:"/"},"SF Giants Clicky Game!")),c.a.createElement("li",{className:"list text-center"},c.a.createElement("span",{className:e.style},e.banner)),c.a.createElement("li",{className:"list text-right"},c.a.createElement("span",{className:"navbar-text scores"},"Score: ",e.current," | High Score: ",e.high))))};t(15);var u=function(){return c.a.createElement("div",{className:"jumbotron jumbotron-fluid jumbo align-middle"},c.a.createElement("div",{className:"container-fluid text-center wrap"},c.a.createElement("h1",{className:"display-4 clickytitle"},"Clicky Game!"),c.a.createElement("p",{className:"lead subhead"},"Click on an image to earn points, but don't click on any more than once!")))},g=t(2);t(16);var p=function(e){return c.a.createElement("div",{className:"card mx-md-5"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image,id:e.id,onClick:function(a){return e.handleIncrement(a.target.id)}})))};t(17);var b=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)};t(18);var f=function(){return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"container-fluid text-center height"}))},y=function(e){Object(o.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=a.call.apply(a,[this].concat(c))).state={currentScore:0,highScore:0,Images:g,Clicked:[],banner:"",style:"navbar-text title"},e.handleIncrement=function(a){console.log("This is: ",Object(m.a)(e)),console.log("This id: ",a),e.state.Clicked.includes(a)?(e.setState({currentScore:0}),e.setState({Clicked:[]}),e.handleIncorrect()):(e.setState({currentScore:e.state.currentScore+1}),e.setState({value:!0}),e.handleHighScore(),e.handleRandom(),e.handleState(a),e.handleCorrect())},e.handleHighScore=function(){e.state.highScore<=e.state.currentScore&&e.state.highScore<12&&e.setState({highScore:e.state.highScore+1})},e.handleRandom=function(){for(var a=e.state.Images,t=a.length-1;t>0;t--){var n=Math.floor(Math.random()*t),c=a[t];a[t]=a[n],a[n]=c}e.setState({Images:a})},e.handleState=function(a){var t=e.state.Clicked;t.push(a),e.setState({Clicked:t})},e.handleCorrect=function(){e.setState({banner:"You guessed correctly!"}),e.setState({style:"navbar-text correct"})},e.handleIncorrect=function(){e.setState({banner:"You guessed incorrectly!"}),e.setState({style:"navbar-text incorrect"})},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({banner:"Click an image to begin!"})}},{key:"render",value:function(){var e=this,a=g.map((function(a){return c.a.createElement(p,{key:a.id.toString(),name:a.name,image:a.image,id:a.id,handleIncrement:e.handleIncrement})}));return c.a.createElement("div",null,c.a.createElement(h,{style:this.state.style,current:this.state.currentScore,high:this.state.highScore,banner:this.state.banner}),c.a.createElement(u,null),c.a.createElement(b,null,a),c.a.createElement(f,null))}}]),t}(c.a.Component);l.a.render(c.a.createElement(y,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.c12199ca.chunk.js.map