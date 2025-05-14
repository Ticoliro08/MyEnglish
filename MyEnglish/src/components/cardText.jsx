import React, { useState, useEffect } from "react";

import Img1 from "../assets/cardText/img1.jpg";
import Img2 from "../assets/cardText/img2.jfif";
import Img3 from "../assets/cardText/img3.png";
import Img4 from "../assets/cardText/img4.jpg";

import "./cardText.css";

const CardComNav = () => {
  const imagens = [Img1, Img2, Img3, Img4];
  const [index, setIndex] = useState(0);

  const anuncios = [
    "https://via.placeholder.com/250x130?text=Flashcard+Premium",
    "https://via.placeholder.com/250x130?text=Curso+Gratuito",
    "https://via.placeholder.com/250x130?text=Dicas+de+Vocabulário",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      {/* Navegação lateral */}
      <nav className="side-nav">
        <h3>Destaques de Estudo</h3>
        <img
          src={imagens[index]}
          alt={`Imagem de estudo ${index + 1}`}
          className="carousel-img"
        />

        <h3>Recomendações</h3>
        {anuncios.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Anúncio ${index + 1}`}
            className="anuncio-img"
          />
        ))}
      </nav>

      {/* Card principal */}
      <nav className="main-nav">
        <div className="card">
          <img src={Img1} alt="Imagem fixa" className="static-img" />
          <div className="card-content">
            <h2>Desbloqueie seu Inglês com Facilidade</h2>
            <p>
              Aprender inglês pode ser simples e prático. Com nosso sistema de
              flashcards personalizados, você estuda vocabulário com exemplos
              reais e traduzidos, facilitando a memorização e a aplicação no dia
              a dia. Seja você iniciante ou avançado, desenvolva suas
              habilidades no seu ritmo, com conteúdos adaptados para você.
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default CardComNav;
