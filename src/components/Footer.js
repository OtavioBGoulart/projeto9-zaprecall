import { useState } from "react";
import styled from "styled-components";

export default function Footer(props) {

    const {desabilitaBotoes, conclusao, setConclusao, setDesabilitaBotoes, setDesabilitaCards, indexCardAtual} = props;
    const [cardsConcluidos, setCardsConcluidos] = useState(0)

    function naoLembra() {
        setDesabilitaBotoes(true)
        setDesabilitaCards(false)
        let atualizaConcluidos = (cardsConcluidos) + 1
        setCardsConcluidos(atualizaConcluidos)
    }

    function quaseLembra() {
        setDesabilitaBotoes(true)
        setDesabilitaCards(false)
        let atualizaConcluidos = cardsConcluidos + 1
        setCardsConcluidos(atualizaConcluidos)
    }

    function zap() {
        setDesabilitaBotoes(true)
        setDesabilitaCards(false)
        let atualizaConcluidos = cardsConcluidos + 1
        setCardsConcluidos(atualizaConcluidos)
    }


    return (
        <ContainerConcluidos>
            <ContainerBotoes>
                <button disabled={desabilitaBotoes} onClick={naoLembra} style={{ backgroundColor: "red" }}>Não lembrei</button>
                <button disabled={desabilitaBotoes} onClick={quaseLembra} style={{ backgroundColor: "#FF922E" }}>Quase não lembrei</button>
                <button disabled={desabilitaBotoes} onClick={zap} style={{ backgroundColor: "#2FBE34" }}>Zap</button>
            </ContainerBotoes>
            <Concluidos>
                {cardsConcluidos}/8 CONCLUÍDOS
            </Concluidos>
        </ContainerConcluidos>
    )
}

const ContainerConcluidos = styled.div`
   width: 100%;
   min-height: 50px;
   background-color: #FFFFFF;
   position: fixed;
   bottom: 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-family: 'Recursive';
   font-weight: 400;
   font-size: 18px;
   color: #333333;
   padding: 10px;
`

const ContainerBotoes = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    margin: 20px;
        button {
        width: 90px;
        font-family: 'Recursive';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #FFFFFF;
        background: blue;
        border-radius: 5px;
        border: none;
        padding: 5px;
        }
`

const Concluidos = styled.div`
font-family: 'Recursive';
font-size: 20px;
`
