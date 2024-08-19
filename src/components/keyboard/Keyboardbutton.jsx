export function Keyboardbutton() {
 
    return 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('').map(letter => (
        <button onClick={handleGuess} key={letter} value={letter}>{letter}</button>
    ));
}
