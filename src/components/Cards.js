import { useState } from "react"
import play from "../assets/img/seta_play.png"
import virar from "../assets/img/seta_virar.png"
//import ConteudoCard from "./ConteudoCard"
import styled from "styled-components";
import deck from "../deck";

export default function Cards(props) {

    const [estadoCard, setEstadoCard] = useState("fechada");

    if (estadoCard === "fechada") {

        return (
            <PerguntaFechada>
                 <p>Pergunta  {props.numPerg + 1}</p>
                <img src={play} alt="" onClick={() => setEstadoCard("pergunta")}/>
            </PerguntaFechada>
        )
    }

    else if (estadoCard === "pergunta") {

        return (
            <PerguntaAberta>
                <p>{deck[props.numPerg].question}</p>
                <img src={virar} alt="" onClick={() => setEstadoCard("resposta")}/>
            </PerguntaAberta>
        )
    }  

    else {
        return (
            <PerguntaAberta>
                <p>{deck[props.numPerg].answer}</p>
            </PerguntaAberta>
        )
    }
}

const PerguntaFechada = styled.div`
    width: 300px;
    height: 48px;
    background-color: #FFFFFF;
    margin: 12px;
    padding: 15px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
`

const PerguntaAberta = styled.div`
    width: 300px;
    margin: 12px;
    padding: 15px;
    min-height: 100px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    color: #333333;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    p {
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
    img {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`