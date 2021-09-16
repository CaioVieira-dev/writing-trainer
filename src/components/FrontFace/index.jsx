import './styles.css'

function Canvas(){
    return <canvas className="canvas"/>
}
function Romaji(props){
    return <h3 className="romaji">{props.children}</h3>
}

export function FrontFace(){

    return <div className="front-face">
        <Canvas/>
        <Romaji >He</Romaji>
        </div>  
}