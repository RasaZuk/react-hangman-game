import { Hangman } from "./components/hangman/Hangman";
import { Stat } from "./components/stat/Stat";
import { Capitals } from "./components/capitals/Capitals";
import { Keyboardbutton } from "./components/keyboard/Keyboardbutton";

import { city } from "./components/data/city";



function App() {
  

  
  
  return (
    <>
    <main>
      <h1>Hangman</h1>
      <div>
        <Stat />
      </div>
      <div>
        <Hangman />
      </div> 
      <div className="LetterChoise">
        <Capitals data={city} />
      </div>
      <div className="allButtons">
        <Keyboardbutton/>
      </div>
      
      
      
     
    </main>
    </>
    
  );
}

export default App
