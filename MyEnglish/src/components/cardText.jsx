import React, { useState, useEffect } from "react";

import Img1 from "../assets/cardText/img1.jpg";
import Img2 from "../assets/cardText/img2.jfif";
import Img3 from "../assets/cardText/img3.png";
import Img4 from "../assets/cardText/img4.jpg";

const CardComNav = () => {
  const imagens = [Img1, Img2, Img3, Img4];
  const [index, setIndex] = useState(0);

  const anuncios = [
    "https://via.placeholder.com/200x130?text=Anuncio+1",
    "https://via.placeholder.com/200x130?text=Anuncio+2",
    "https://via.placeholder.com/200x130?text=Anuncio+3",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [imagens.length]);

  return (
    <>
      <style>{`
        .container {
          display: flex;
          min-height: 100vh;
          background-color: #f3f4f6;
          font-family: sans-serif;
        }

        .side-nav {
          width: 250px;
          background-color: white;
          padding: 16px;
          border-right: 1px solid #e5e7eb;
          box-shadow: 2px 0 6px rgba(0, 0, 0, 0.05);
        }

        .side-nav h3 {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .carousel-img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 12px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
          transition: opacity 0.5s ease-in-out;
        }

        .anuncio-img {
          width: 100%;
          height: 130px;
          object-fit: cover;
          border-radius: 8px;
          margin-bottom: 12px;
        }

        .main-nav {
          flex: 1;
          padding: 24px;
        }

        .card {
          display: flex;
          max-width: 960px;
          margin: 0 auto;
          background-color: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          flex-direction: row;
        }

        .card img.static-img {
          width: 50%;
          height: auto;
          object-fit: cover;
        }

        .card-content {
          width: 50%;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .card-content h2 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 16px;
        }

        .card-content p {
          color: #4b5563;
          line-height: 1.5;
        }

        @media (max-width: 767px) {
          .container {
            flex-direction: column;
          }

          .side-nav {
            width: 100%;
            display: flex;
            flex-direction: column;
          }

          .main-nav {
            width: 100%;
          }

          .card {
            flex-direction: column;
          }

          .card img.static-img,
          .card-content {
            width: 100%;
          }
        }
      `}</style>

      <div className="container">
        <nav className="side-nav">
          <h3>Galeria</h3>
          <img
            src={imagens[index]}
            alt={`Imagem ${index + 1}`}
            className="carousel-img"
          />
          <h3>Anúncios</h3>
          {anuncios.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Anúncio ${index + 1}`}
              className="anuncio-img"
            />
          ))}
        </nav>

        <nav className="main-nav">
          <div className="card">
            <img src={Img1} alt="Imagem fixa" className="static-img" />
            <div className="card-content">
              <h2>Exemplo de Título</h2>
              <p>
                Este é um texto de exemplo dentro do card. Aqui você pode
                colocar a descrição do conteúdo relacionado ao tema histórico,
                com uma imagem fixa ao lado.
              </p>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default CardComNav;
