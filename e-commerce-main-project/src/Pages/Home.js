import { Carousel } from "../Components/Carousel";
import bathAndBody from "../Images/bath-category1.jpg";
import oliveCandle from "../Images/oliveCandle.jpg";
import skinCare from "../Images/3.jpg";
import a4 from "../Images/4.jpg";
import hair from "../Images/hairCategory.jpg";
export const Home = () => {
  return (
    <>
      <Carousel />
      <section className="categories">
        <h1 className="heading">Categories</h1>
        <div className="category-photos">
          <div className="photos">
            <img alt="Bath and Body" src={bathAndBody} />
            <p className="name">Bath & Body</p>
          </div>
          <div className="photos">
            <img alt="Skin Care" src={skinCare} />
            <p className="name">Skin Care</p>
          </div>
          <div className="photos">
            <img alt="Hair Care" src={hair} />
            <p className="name">Hair Care</p>
          </div>
          {/* <img alt="Hair Care"  src={a4} /> */}
          <div className="photos">
            <img alt="Home Decor" src={oliveCandle} />
            <p className="name">Home</p>
          </div>
        </div>
      </section>
    </>
  );
};
