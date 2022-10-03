import Header from "./Header"
import Cards from "./Cards"
import deck from "../deck"
import Footer from "./Footer"
import styled from "styled-components"


export default function App() {

    return (
        <Screencontainer>
            <Header />
            {deck.map((card, index) => <Cards key={index} numPerg={index} card={card} />)}
            <Footer />
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