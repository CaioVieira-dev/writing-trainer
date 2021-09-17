import './styles.css'
import {Romaji} from '../Romaji'
import placeholder from '../../ex.png'

function Character(){
    return <img className="character" src={placeholder} alt=""/>
}

export function BackFace(){
    return <div className="BackFace">
        <Character />
        <Romaji>He</Romaji>
    </div>
}