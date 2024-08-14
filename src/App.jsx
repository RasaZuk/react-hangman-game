import { Capitals } from "./components/capitals/Capitals";

import { Hangman } from "./components/hangman/Hangman";
import { Stat } from "./components/stat/Stat";



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
        <Capitals />
      </div>
      
      
      
     
    </main>
    </>
    
  );
}

export default App
