import Header from "./Header"
import Cards from "./Cards"
import deck from "../deck"
import Footer from "./Footer"


export default function App() {

    return (
        <div className="screen-container">
            <Header />
            {deck.map((card, index) => <Cards key={index} numPerg={index} card={card} />)}
            <Footer />
        </div>
    )
}