import './styles.css'
import { useRef, useEffect } from 'react'
import {Romaji} from '../Romaji'

function Canvas({curCharacter}){
    const canvasRef = useRef(null)
    const isDrawing = useRef(false)
    console.log(curCharacter)
    useEffect(()=>{
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        
        
        ctx.canvas.width = 460;
        ctx.canvas.height = 460;
        ctx.clearRect(0, 0, 460,460)
        
        ctx.lineWidth = 15;
        ctx.lineJoin = 'round';
        ctx.lineCap = "round"

        function startEvent(event){
            isDrawing.current = true;
            ctx.moveTo(event.layerX, event.layerY);
            ctx.beginPath();
            
        }
        function dragEvent(event){
            if(isDrawing.current){
                ctx.lineTo(event.layerX,event.layerY);
                ctx.closePath();
                ctx.stroke();
                ctx.moveTo(event.layerX,event.layerY);
            }
        }
        function endEvent(event){
            isDrawing.current = false;
        }

        canvas.addEventListener('mousedown', startEvent,false)
        canvas.addEventListener('mousemove', dragEvent,false)
        canvas.addEventListener('mouseup', endEvent,false)
        canvas.addEventListener('mouseout', endEvent,false)
        return()=>{
            canvas.removeEventListener('mousedown', startEvent,false)
            canvas.removeEventListener('mousemove', dragEvent,false)
            canvas.removeEventListener('mouseup', endEvent,false)
            canvas.removeEventListener('mouseout', endEvent,false)
            
            }
    },[isDrawing,curCharacter])

    return <canvas ref={canvasRef} className="canvas"/>
}


export function FrontFace({romaji}){

    return <div className="front-face">
        <Canvas curCharacter={romaji}/>
        <Romaji >{romaji}</Romaji>
        </div>  
}