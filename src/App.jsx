import { Hangman } from "./components/hangman/Hangman";
import { Stat } from "./components/stat/Stat";



function App() {
  
  return (
    <>
    <main>
      <h1>Hangman</h1>
    
      <Stat />
      <Hangman />
     
    
    </main>
    </>
    
  );
}

export default App
