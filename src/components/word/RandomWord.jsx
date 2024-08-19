import capital from './components/capitals/Capital';

export function RandamWord() {
    return (
        capital.split("").map((letter, index) => (
            <span className="word" key={index}>{letter}</span>
    )));
}