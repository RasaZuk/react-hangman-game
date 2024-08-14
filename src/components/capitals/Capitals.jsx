import { city } from "../data/city.jsx";


export function Capitals() {
    return (
        city[Math.floor(Math.random() * city.length)]
    )};


