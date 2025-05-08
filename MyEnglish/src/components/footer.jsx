import "./footer.css"
import logoinstagram from "../assets/instagram.png"
import logofacebook from "../assets/facebook.png"
import logo from "../assets/logo.png"
import ImgGitHub from "../assets/github.png"


function Footer () {
    return (
        <>
        <section className="bodyFooter">
            <section className="infoContatos">

                <section className="redes">

                    <section className="info"> {/*classe para deixar o nome do lado da logo */}
                        <img className="imgRedes" src={logoinstagram} />
                        <p> @guih.sdl</p>
                    </section>

                    <section className="info"> 
                        <img className="imgRedes" src={logofacebook} />
                        <p> guih.sdl</p>
                    </section>

                </section>

                <section className="contato"> 
                    <p> 📞 Contado para Vendas: (19) 9975-56147</p>
                    <p> 📩 Email para Contato: ggsantana18@gmail.com</p>
                </section>

            </section>

            <section className="informacoes"> 

               

                <section className="listas"> 
                    <h4> Influenciadores e Criadores de Conteúdo</h4>
                  <ul>
                    <li>Style Makers (coletivo de influenciadores de moda)</li>

                    <li>Hype Creators (rede de criadores de conteúdo streetwear)</li>

                    <li>Trend Setters (parceiros que ditam tendências)</li>
                  </ul>
                </section>

                <section className="listas"> 
                    <h4>  Marcas Complementares </h4>
                        <ul>
                            <li>Urban Vibes (loja de acessórios descolados)</li>
                           <li>Drip Kicks (sneaker store especializada em tênis exclusivos)</li>

                           <li>Shine & Style (marca de joias minimalistas)</li>
                        </ul>
                </section>

                <section className="sobreNos"> 
                    <p> <h4> Sobre a Empresa  </h4> A Free Style é mais do que uma loja de roupas—é um 
                    conceito de liberdade e autenticidade na moda. Aqui, acreditamos que o estilo deve ser
                     uma expressão da sua personalidade, sem regras ou limites.
Nossa coleção combina tendências urbanas, conforto e atitude, oferecendo peças versáteis
 para quem quer se vestir com originalidade e confiança. Se você busca roupas que refletem 
 sua essência e acompanham seu ritmo, a Free Style é o seu destino.</p>
                </section>

              

            </section>
<nav className="logos">


            <img className="imgLogo" src={logo}/>
            <a href="https://github.com/Ticoliro08" target="_blank" >
            <img className="imgGithub" src={ImgGitHub}/>
            </a>

            </nav>
            <hr/>

            <section className="integrantes"> 
                <section> 
                    <h4> Guilherme Gabriel Santana </h4>
                  
                </section>

                
            </section>
        </section>
        </>
    )
}

export default Footer