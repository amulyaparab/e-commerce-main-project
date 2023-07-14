import { BestSellers, Carousel, Categories, PreFooter } from "../../Components";
import { love, nature } from "../../Assests";

export const Home = () => {
  return (
    <>
      <div className="flex">
        <Carousel />
        <Categories />
        <section className="naturally-made">
          <div className="nature-para">
            <h1>Natural Products</h1>
            <p>
              Our skin care range includes skincare infused with botanical
              extracts, nourishing oils, and plant-based ingredients for gentle
              and effective care. We also offer handcrafted pottery made with
              natural clay, showcasing earthy aesthetics. Choose our naturally
              made products to take care of yourself and contribute to a greener
              world.
            </p>
          </div>
          <img className="nature" src={nature} alt="Naturally Made Products" />
        </section>
        <BestSellers />
        <section className="naturally-made">
          <img className="nature" src={love} alt="Love Yourself" />
          <div className="nature-para second">
            <h1>Love Yourself</h1>
            <p>
              Love yourself fiercely, with compassion and kindness. Embrace
              self-care, prioritize your well-being, and choose actions that
              nourish your mind, body, and spirit. Let your home too be a
              reflection of your inner beauty, a place where you can find solace
              and inspiration. Cherish yourself and curate a space that speaks
              to your soul.
            </p>
          </div>
        </section>
        <PreFooter />
      </div>
    </>
  );
};
