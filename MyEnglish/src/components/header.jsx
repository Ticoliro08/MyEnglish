

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Style
import "./header.css";



function Header() {
    const [temaEscuro, setTemaEscuro] = useState(() => {
        const temaSalvo = localStorage.getItem('temaEscuro');
        return temaSalvo === 'true'; // Retorna true se o valor for 'true', caso contrário, false
    });

    const [menuAberto, setMenuAberto] = useState(false); // Estado para controlar a visibilidade do menu

    useEffect(() => {
        // Atualiza o estilo do corpo com base no tema
        document.body.style.backgroundColor = temaEscuro ? 'black' : 'white';

        // Armazena a preferência no localStorage
        localStorage.setItem('temaEscuro', temaEscuro);
    }, [temaEscuro]);

    const MouseEnter = () => {
        setMenuAberto(true); // Abre o menu ao passar o mouse
    };

    const MouseLeave = () => {
        setMenuAberto(false); // Fecha o menu ao sair com o mouse
    };

    return (
        <>
            <header className="headerBox">
                <h1><Link to='/'>ENGLISH</Link></h1>
              

                <button 
                    className="menuButton" 
                    onMouseEnter={MouseEnter} 
                    onMouseLeave={MouseLeave}
                >
                    <i className='bx bx-menu'></i>
                </button>
            </header>
            
            {menuAberto && (
                <nav className="menu" onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
                   
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/favoritos'>Vocabulary</Link></li>
                        <li><Link to='/carrinho'>Phrasal Verb</Link></li>
                    </ul>
                </nav>
            )}
        </>
    );
}

export default Header;