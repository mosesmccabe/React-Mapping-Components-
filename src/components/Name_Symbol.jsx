import React from "react";

function Name_Symbol(props){
    return (
   
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">{props.sym}</span>
        <span>{props.name}</span>
      </dt>
   
  );

}

export default Name_Symbol;