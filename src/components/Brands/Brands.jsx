import Brand1 from "../../assets/brand/1.png";
import Brand2 from "../../assets/brand/2.png";
import Brand3 from "../../assets/brand/3.png";
import Brand4 from "../../assets/brand/4.png";
import Brand5 from "../../assets/brand/5.png";
import { motion } from "framer-motion";
import { SlideLeft } from "../../animation/animate";

const Brands = () => {
  return (
    <section className="container py-14">
      {/* Heading */}
      <div className="text-center mb-10">
        <h3 className="text-2xl md:text-3xl font-bold mb-3">
          Trusted by Industry-Leading Brands
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We collaborate with forward-thinking brands to deliver refined interior
          solutions that combine elegance, functionality, and lasting value.
        </p>
      </div>

      {/* Brand Logos */}
      <div className="flex flex-wrap justify-center lg:justify-between gap-6">
        <motion.img
          variants={SlideLeft(0.2)}
          initial="initial"
          whileInView="animate"
          src={Brand1}
          alt="Brand partner"
          className="w-[110px] md:w-[200px]"
        />
        <motion.img
          variants={SlideLeft(0.4)}
          initial="initial"
          whileInView="animate"
          src={Brand2}
          alt="Brand partner"
          className="w-[110px] md:w-[200px]"
        />
        <motion.img
          variants={SlideLeft(0.6)}
          initial="initial"
          whileInView="animate"
          src={Brand3}
          alt="Brand partner"
          className="w-[110px] md:w-[200px]"
        />
        <motion.img
          variants={SlideLeft(0.8)}
          initial="initial"
          whileInView="animate"
          src={Brand4}
          alt="Brand partner"
          className="w-[110px] md:w-[200px]"
        />
        <motion.img
          variants={SlideLeft(1.0)}
          initial="initial"
          whileInView="animate"
          src={Brand5}
          alt="Brand partner"
          className="w-[110px] md:w-[200px]"
        />
      </div>
    </section>
  );
};

export default Brands;
