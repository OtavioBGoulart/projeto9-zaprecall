export default function Footer () {
    return (
        <div className="footer-concluidos"> 
            <div className="container-botoes">
                <button style={{backgroundColor: "red"}}>Não lembrei</button>
                <button style={{backgroundColor: "#FF922E"}}>Quase não lembrei</button>
                <button style={{backgroundColor: "#2FBE34"}}>Zap</button>
            </div>
            <div className="concluidos">
                0/8 CONCLUÍDOS
            </div>
        </div>
    )
}