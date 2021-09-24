import './styles.css'
import {useState} from 'react'
import {Romaji} from '../Romaji'
import placeholder from '../../ex.png'


function Character({char}){
    const [charSrc,setCharSrc] = useState('')
    if(char){
        import(`../../assets/hiragana/${char}.png`)
            .catch((err) => {
                console.error(err)
            return})
             .then((res)=>{setCharSrc(res.default);});
    }
    return <img className="character" src={charSrc!==''?charSrc:placeholder} alt=""/>
}

export function BackFace(props){
    return <div className="BackFace">
        <Character char={props.character}/>
        <Romaji>{props.romaji?props.romaji:"Placeholder..."}</Romaji>
    </div>
}