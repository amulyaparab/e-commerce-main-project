import Bath from "../../Images/bath.png";
import Skin from "../../Images/skin.png";
import HomeDecor from "../../Images/homeDecor.png";
import Hair from "../../Images/hair.png";
import { useState } from "react";

export const Carousel = () => {
  const [selectedSlide, setSelectedSlide] = useState(1);

  const slides = [
    { id: 1, url: Bath, title: "Bath and Body" },
    { id: 2, url: Skin, title: "Skin Care" },
    { id: 3, url: Hair, title: "Hair Care" },
    { id: 4, url: HomeDecor, title: "Home" },
  ];

  return (
    <section className="carousel">
      <div className="carousel-slide">
        {slides.map(({ url, title, id }) =>
          id === selectedSlide ? <img src={url} alt={title} key={id} /> : null
        )}
      </div>
      <button
        className="carousel-btn"
        onClick={() =>
          setSelectedSlide(
            selectedSlide === 1 ? slides.length : selectedSlide - 1
          )
        }
      >
        &#8249;
      </button>
      <button
        className="carousel-btn next"
        onClick={() =>
          setSelectedSlide(
            selectedSlide === slides.length ? 1 : selectedSlide + 1
          )
        }
      >
        &#8250;
      </button>
    </section>
  );
};
