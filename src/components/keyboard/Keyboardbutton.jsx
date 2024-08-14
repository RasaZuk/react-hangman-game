import style from './Keyboard.module.css';

export function Keyboardbutton() {
 
    return 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('').map(letter => (
        <button key={letter}>{letter}</button>
    ));
}
    