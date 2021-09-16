//imports
import './styles.css';
import { FrontFace } from '../FrontFace';
//card
//wraps front and back faces
export function Card(){
    return <div className="card">
        <FrontFace/>
    </div>
}