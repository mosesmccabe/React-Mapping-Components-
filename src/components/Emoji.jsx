import React from "react";
import Name_Symbol from "./Name_Symbol";
import Definition from "./Definition";

function Emoji(props){
    return (
     
        <div className="term">
        <Name_Symbol 
            sym = {props.emoji}
            name = {props.name}
        />
        <Definition 
            def = {props.maining}
        />
        </div>
      
  );

}

export default Emoji;