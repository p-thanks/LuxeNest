import Banner from "../components/Banner/Banner";
import Newsletter from "../components/Newsletter/Newsletter";
import Testimonial from "../components/Testimonial/Testimonial";

const About = () => {
  return (
    <main className="overflow-x-hidden">
      <Banner />
      <Testimonial />
      <Newsletter />
    </main>
  );
};

export default About;
