import Die from './Die';
import './Dice.css'

export default function Dice({dice}){
    return (
        <section className="dice">
            {dice.map((value, index) => {
               return <Die key={index} value={value}/>
            })}
        </section>
    )
}