import Head from "next/head";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const contacto = () => {
  const [color, setColor] = useState(false);

  const [images, setImages] = useState([
    "/imagenes/cartaRecomendacion1.png",
    "/imagenes/cartaRecomendacion2.png",
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 500) {
        setColor(true);
      } else {
        setColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Contacto | Luis Romero</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fotoperfil.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;0,400;1,200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="contactoContainer">
        <div className="navbarScroll">
          <Fade direction="left">
            <Link href="/">
              <div className="briefCaseIcon">
                <img src="/imagenes/briefcase.png" width={60} height={60} />
              </div>
            </Link>
          </Fade>
          <Fade direction="right">
            <div className="navbarlist">
              <a href="/">Inicio</a>
              <a href="/contacto">Contacto</a>
            </div>
          </Fade>
        </div>
        <div className="contactoInfo">
          <Fade direction="left">
            <h2>Contacto</h2>
          </Fade>
          <Fade direction="left">
            <p>Celular: +506 7129-3487</p>
          </Fade>
          <Fade direction="left">
            {" "}
            <p>Correo electrónico: eespinal288@gmail.com</p>
          </Fade>
          <Fade direction="left">
            <p>
              Dirección: : Norte de Enertec CR, Avenida 24, entre calles 17 y
              19A, San José, Costa Rica.
            </p>
          </Fade>
        </div>
        <>
          <div id="galeriaContacto">
            <Fade direction="left">
              <h2 id="galeriaContactoTitulo">Cartas de recomendación</h2>
            </Fade>
            <Slider {...settings} className="sliderImageContacto">
              {images.map((image, index) => (
                <div key={index} className="carousel-contacto-image">
                  <img
                    src={image}
                    className="imageTituloContacto"
                    alt={`Imagen ${index + 1}`}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </>
        <div id="footer">
          <Fade direction="left">
            <p>Diseñado por: Luis Ernesto Romero</p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default contacto;
