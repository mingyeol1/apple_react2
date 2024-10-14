import { useState } from "react";
import data from "./data";

function Shoes(props){

    

    return (

          <div className="col-md-4">
            <img src={`https://codingapple1.github.io/shop/shoes${(props.i)+1}.jpg`} width="80%"/>
            <h4>{props.shoes[props.i].title}</h4>
            <p>{props.shoes[props.i].content}</p>
          </div>

    )
}

export default Shoes;