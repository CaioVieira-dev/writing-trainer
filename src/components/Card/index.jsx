//imports
import './styles.css';
import { FrontFace } from '../FrontFace';
import {BackFace} from '../BackFace';
//card
//wraps front and back faces
export function Card(){
    return <div className="card">
        <FrontFace/>
        <BackFace/>
    </div>
}