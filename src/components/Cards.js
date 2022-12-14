import { useState } from "react"
import play from "../assets/img/seta_play.png"
import virar from "../assets/img/seta_virar.png"
import erro from "../assets/img/icone_erro.png"
import quase from "../assets/img/icone_quase.png"
import zap from "../assets/img/icone_certo.png"
//import ConteudoCard from "./ConteudoCard"
import styled from "styled-components";
import deck from "../deck";

export default function Cards(props) {

    const { numPerg, desabilitaCards, setDesabilitaCards, setDesabilitaBotoes, conclusao, setIndexCardAtual } = props;
    const [estadoCard, setEstadoCard] = useState("fechada");

    function verificaCard() {

        if (!desabilitaCards) {
            setEstadoCard("pergunta");
            setDesabilitaCards("true")
            setIndexCardAtual(numPerg);
        } else {
            return
        }
    }

    function habilitaResposta() {
        setEstadoCard("resposta")
        setDesabilitaBotoes(false);
    }

    if (conclusao[numPerg] !== "") {

        if (conclusao[numPerg] === "esqueci") {

            return (
                <PerguntaFechada>
                    <p style={{ color: "red", textDecoration: "line-through" }}>Pergunta  {numPerg + 1}</p>
                    <img data-identifier="flashcard-status" src={erro} alt="" />
                </PerguntaFechada>
            )
        } else if (conclusao[numPerg] === "quase") {

            return (
                <PerguntaFechada>
                    <p style={{ color: "orange", textDecoration: "line-through" }}>Pergunta  {numPerg + 1}</p>
                    <img data-identifier="flashcard-status" src={quase} alt="" />
                </PerguntaFechada>
            )
        } else if (conclusao[numPerg] === "zap") {

            return (
                <PerguntaFechada>
                    <p style={{ color: "green", textDecoration: "line-through" }}>Pergunta  {numPerg + 1}</p>
                    <img data-identifier="flashcard-status" src={zap} alt="" />
                </PerguntaFechada>
            )
        }
    }

    if (estadoCard === "fechada") {

        return (
            <PerguntaFechada data-identifier="flashcard-index-item">
                <p>Pergunta  {numPerg + 1}</p>
                <img data-identifier="flashcard-show-btn" src={play} alt="" onClick={verificaCard} />
            </PerguntaFechada>
        )
    }

    else if (estadoCard === "pergunta") {

        return (
            <PerguntaAberta data-identifier="flashcard-question">
                <p>{deck[numPerg].question}</p>
                <img data-identifier="flashcard-turn-btn" src={virar} alt="" onClick={habilitaResposta} />
            </PerguntaAberta>
        )
    }

    else {
        return (
            <PerguntaAberta data-identifier="flashcard-answer">
                <p>{deck[numPerg].answer}</p>
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