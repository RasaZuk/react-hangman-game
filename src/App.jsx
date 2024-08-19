import { Keyboardbutton } from "./components/keyboard/Keyboardbutton";
import { RandamWord } from "./components/word/RandomWord";


function App() {

  const {wrongAns, images} = WrongGuess.defaultProps;
  const maxWrong = 6;
  const [guessed, setGuessed] = useState();
  const [answer, setAnswer] = useState(RandamWord());

  const guessedWord = () => {
    return answer.split('').map(letter => (guessed.includes(letter) ? letter : "_"))
  }


  return (  
    <main>
      <h1>Hangman</h1>
      <div className="picture"></div> 
      <div className="letterChoise">
        <span>
          <RandamWord />
        </span>
      </div>
      <div className="allButtons">
        <div>
          <Keyboardbutton />
        </div>
      </div>
    </main>       
  );
}

export default App;
