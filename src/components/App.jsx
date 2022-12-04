import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
      {emojipedia.map((info) => {
        return (
          <Emoji 
            emoji = {info.emoji}
            name = {info.name}
            maining = {info.meaning}
          />
        );
      })}
      </dl>
      
    </div>
  );
}

export default App;
