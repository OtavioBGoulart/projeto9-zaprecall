import play from "../assets/img/seta_play.png"

export default function Cards (props) {

    return (
        <div className="pergunta-fechada">
            <p>Pergunta  {props.numPerg + 1}</p>
            <img src={play} alt="" />
        </div>
    ) 
}