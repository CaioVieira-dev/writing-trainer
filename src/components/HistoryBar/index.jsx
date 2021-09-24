//imports
import "./styles.css"
import mockHe from "../../assets/hiragana/he.png"

function Header(){
    return <header className="history-bar-header">
        <h2>Ultimos treinos</h2>
    </header>
}

function PastSnapshot(){
    
    return <div className="past-snapshot">
        <img src={mockHe} alt="he"/>
        <p>He</p>
    </div>
}
function History(){

    return <div className="history">
        <PastSnapshot />
        <PastSnapshot />
        <PastSnapshot />
        <PastSnapshot />
    </div>
}

//Component that shows the past drawings in a vertical list
export function HistoryBar(){

return <section className="history-bar">
    <Header />
    <History />
</section>
}