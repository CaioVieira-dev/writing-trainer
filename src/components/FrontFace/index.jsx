import './styles.css'
import {Romaji} from '../Romaji'

function Canvas(){
    return <canvas className="canvas"/>
}


export function FrontFace(){

    return <div className="front-face">
        <Canvas/>
        <Romaji >He</Romaji>
        </div>  
}