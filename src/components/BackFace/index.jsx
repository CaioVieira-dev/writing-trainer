import './styles.css'
import {Romaji} from '../Romaji'
import placeholder from '../../ex.png'
import he from '../../assets/hiragana/he.png'

function Character(){
    return <img className="character" src={he?he:placeholder} alt=""/>
}

export function BackFace(){
    return <div className="BackFace">
        <Character />
        <Romaji>He</Romaji>
    </div>
}