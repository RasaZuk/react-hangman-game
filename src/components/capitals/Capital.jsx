const capital = [
    {
        word: 'Vilnius,'
    },
    {
        word: 'Riga,'
    },
    {
        word: 'Tallin,'
    },
];

export function RandomCapital() {

    return (
        capital.Math.floor(Math.random() * capital.length)
    ); 
}
