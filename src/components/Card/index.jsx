//imports
import './styles.css';
import { FrontFace } from '../FrontFace';
import {BackFace} from '../BackFace';
//card
//wraps front and back faces
export function Card(props){
    return <div className={props.isFlipped?"card flipped":"card"}>
        <FrontFace/>
        <BackFace/>
    </div>
}