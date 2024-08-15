import { city } from '../data/city';


export function Capitals() {
   
    return (
       city[Math.floor(Math.random() * city.length)]
    );
          
}


