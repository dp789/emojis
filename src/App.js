import React, { useState } from 'react';

import './App.css';


function App() {
  const headingText = "Cool";
  
  var [emoji,setEmoji] = useState("");
  var [text,setText] = useState("meaning");



  

  const emodict = {
    "😂" : "Face with Tears of Joy",
    "😍" : "Smiling face with heart eyes",
    "😒" : "unamused face",
    "🤔" : "Thinking face",
    "🤣" : "Rolling on the floor laugh",
    "🙈" : "See no evil monkey",
    "💯" : "Hundred Points",
    "👏" : "Clapping hands",
    "🎿" : "Skis",
    "🧣" : "Scarf",
    "🌂" : "Closed Umbrella",
    "☔" : "Umbrella with Rain Drops",
    "🧥" : "Coat",
  }
  
  const emoarr = Object.keys(emodict);

  const inputHandler = (e) =>{
    const inputEmoji = e.target.value;
    setEmoji(inputEmoji)

    if(inputEmoji in emodict){
      setText(emodict[inputEmoji]);    
    }else{
      setText("")
    }
    
  }

  const emojiHandler = (inputText) =>{
    setText(emodict[inputText]);
    setEmoji(inputText)
  }
  
  return (
    <div className="App" >
      <div className="container"> 
        <h1> <span style={{backgroundColor:"lightblue",color:"black"}}>{headingText}</span> Emojis</h1>
        <br />
        <h1>Know the meaning</h1>
        
        <div className="container container-center">
          <input placeholder="Emoji" onChange={inputHandler} />
        
          
          <h1 style={{size:"4rem"}}>
          {
            emoarr.map((emoji) => (
              <span id="emo" onClick={()=>emojiHandler(emoji)}>
                  {emoji}
              </span>
            ))
          }
          </h1>
          

          <div className="output">
            <h2>{emoji} : {text}</h2>
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default App;