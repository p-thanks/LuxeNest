import Banner from "../components/Banner/Banner";
import Banner2 from "../components/Banner/Banner2";
import Brands from "../components/Brands/Brands";
import Hero from "../components/Hero/Hero";
import Newsletter from "../components/Newsletter/Newsletter";
import Services from "../components/Services/Services";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Services />
      <Banner />
      <Banner2 />
      <Testimonial />
      <Newsletter />
    </>
  );
};

export default Home;
