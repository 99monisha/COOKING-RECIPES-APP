import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import "./index.css";
import Sdata from "./Sdata";
ReactDOM.render(
  <>
<h1 className="heading">COOKS CHICKEN RECIPE EASYLY</h1>

{Sdata.map((allarrayvalue,index) => {
 return(
<Card
   imgsrc={allarrayvalue.imgsrc}
    tittle={allarrayvalue.tittle}
    sname={allarrayvalue.sname}
    link={allarrayvalue.link}
  />
    );})}
</>,
document.getElementById('root')
);