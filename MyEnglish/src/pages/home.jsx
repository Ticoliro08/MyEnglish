// Style
import "./Home.css"
//.

// Componentes
    import Header from "../components/header"
    import Navbar from "../components/navBar"
    import Footer from "../components/footer"
    import CardText from "../components/cardText"
//.



function Home(){
    
    return(
        <>
            <Header />
            <section className="banner">

                {/* Marquee: É uma tag html para animar o letreiro, movimentando ele pela página; 
                    Behavior: Define a forma que o letreiro movimentará;
                    Direction: Define para que lado o letreiro vai;
                    Scrollamount: Define a velocidade da animação, baseado em pixels;
                    Scrolldelay: Define o tempo que o letreiro aparecerá novamente.
                */}
               
            </section>

            <section className="TituloDosPacotes">
            </section>

            <br /><br /><br /><br /><br /><br />
<CardText />
           
            <Footer />
        </>
    )
}

export default Home