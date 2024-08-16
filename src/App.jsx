import display from './assets/display.png';
import wrong1 from './assets/wrong1.png';
import wrong2 from './assets/wrong2.png';
import wrong3 from './assets/wrong3.png';
import wrong4 from './assets/wrong4.png';
import wrong5 from './assets/wrong5.png';
import wrong6 from './assets/wrong6.png';


import { Stat } from "./components/stat/Stat";
import { Keyboardbutton } from "./components/keyboard/Keyboardbutton";


function App() {


  
  return (
    <>
    <main>
      <h1>Hangman</h1>
      <div>
        <Stat />
      </div>
      <div className="picture">
        <img src={display} alt="mainPicture" />
        <img src={wrong1} alt="firstwrong" />
        <img src={wrong2} alt="secongwrong" />
        <img src={wrong3} alt="thirdwrong" />
        <img src={wrong4} alt="fouthwrong" />
        <img src={wrong5} alt="fithwrong" />
        <img src={wrong6} alt="sixthwrong" />
      </div> 
      <div className="letterChoise">
        <p>zodis</p>
        
      
      </div>
      <div className="allButtons">
        <Keyboardbutton/>
      </div>
    </main>
    </>
    
  );
}

export default App
