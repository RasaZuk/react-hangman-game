import style from './Capitals.module.css';

export function Capitals() {
    const city = "Vilnius";

    return (
        <div 
        style={{
            display: "flex",
            gap: "40em",
            fontSize: "bold",
            textTransform: "uppercase",

        }}
        >
            {city.split(" ").map((letter, index) => (
                <p key={index}>{letter}</p>
            ))}
        </div>
    );
          
}

