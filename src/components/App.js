import Header from "./Header"
import Cards from "./Cards"
import deck from "../deck"
import Footer from "./Footer"
import styled from "styled-components"

import { useState } from "react"


export default function App() {
    const cardsConcluidos = deck.map(() => "");

    const [indexCardAtual, setIndexCardAtual] = useState("");
    const [desabilitaCards, setDesabilitaCards] = useState(false);
    const [desabilitaBotoes, setDesabilitaBotoes] = useState(true);
    const [conclusao, setConclusao] = useState(cardsConcluidos);

    return (
        <Screencontainer>
            <Header />
            {deck.map((card, index) => <Cards key={index} numPerg={index} card={card} 
            desabilitaCards={desabilitaCards} setDesabilitaCards={setDesabilitaCards} setDesabilitaBotoes={setDesabilitaBotoes}
            conclusao={conclusao} setConclusao={setConclusao} indexCardAtual={indexCardAtual} setIndexCardAtual={setIndexCardAtual}
            />)}
            <Footer desabilitaBotoes={desabilitaBotoes} setDesabilitaBotoes={setDesabilitaBotoes} conclusao={conclusao} setConclusao={setConclusao} setDesabilitaCards={setDesabilitaCards}
            indexCardAtual={indexCardAtual}
            />
        </Screencontainer>
    )
}

const Screencontainer = styled.div`
    background-color: #FB6B6B;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0px;
    padding: 0px;
    padding-bottom: 200px;
`