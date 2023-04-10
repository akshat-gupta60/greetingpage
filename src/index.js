import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
let date =new Date();
var cur=date.getHours();
const cssStyle={
    
}
let greet="hello";
if(cur>=1&&cur<12){
    greet="Good Morning";
    cssStyle.color='green';
}
else if(cur>=12&&cur<19){
    greet="Good Afternoon";
    cssStyle.color='orange';
}
else{
    greet="Good Night";
    cssStyle.color='black';
}
ReactDOM.render(
  <>
  <div>
    <h1> Hello Sir <span style={cssStyle
    }>{greet}</span></h1>
   </div> 
  </>,
  document.getElementById('root')
);