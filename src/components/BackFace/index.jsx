import './styles.css'
import {Romaji} from '../Romaji'

function Character(){
    return <img className="character" src="#" alt=""/>
}

export function BackFace(){
    return <div className="BackFace">
        <Character />
        <Romaji>He</Romaji>
    </div>
}