import { useState } from "react";
import {getRolls, sum} from './utils';
import Dice from './Dice'
import './Lucky7.css'
function Lucky7({numDice =2, goal = 7}){
    const [dice, setDice] = useState(getRolls(numDice));
    const won = sum(dice) === goal;

    function roll(){
        setDice(getRolls(numDice));
    }

    return(
        <main className="Lucky7">
            <h1>Lucky{goal} {won && "You won!"}</h1>
            <Dice dice={dice}/>
            <button onClick={roll}>Roll Again!</button>
        </main>
    )
}

export default Lucky7;