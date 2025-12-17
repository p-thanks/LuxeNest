import { 
  VectorSquare, 
  PenTool, 
  DollarSign, 
  Layout, 
  Leaf, 
  Settings, 
  Cpu, 
  UserCheck 
} from "lucide-react";
import { motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const ServiceCard = [
  {
    id: 1,
    title: "Luxury Facilities",
    description:
      "Experience bespoke interiors with our curated luxury facilities, designed to elevate every corner of your home with elegance and sophistication.",
    icon: <VectorSquare size={24} />,
    link: "#",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Quality Products",
    description:
      "We handpick premium materials and furniture to ensure your space not only looks exquisite but also stands the test of time.",
    icon: <PenTool size={24} />,
    link: "#",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Affordable Price",
    description:
      "Enjoy world-class interior design solutions without compromise — luxurious spaces crafted to fit your budget seamlessly.",
    icon: <DollarSign size={24} />,
    link: "#",
    delay: 0.6,
  },
  {
    id: 4,
    title: "Personalized Design",
    description:
      "Our design experts create spaces tailored to your lifestyle, blending aesthetics and functionality for a home that truly reflects you.",
    icon: <Layout size={24} />,
    link: "#",
    delay: 0.8,
  },
  {
    id: 5,
    title: "Sustainable Solutions",
    description:
      "We prioritize eco-friendly materials and sustainable practices, ensuring your home is both beautiful and responsible.",
    icon: <Leaf size={24} />,
    link: "#",
    delay: 1.0,
  },
  {
    id: 6,
    title: "Project Management",
    description:
      "From concept to completion, our team handles every detail, guaranteeing a seamless experience and flawless execution.",
    icon: <Settings size={24} />,
    link: "#",
    delay: 1.2,
  },
  {
    id: 7,
    title: "Smart Home Integration",
    description:
      "Seamlessly integrate technology into your home with smart solutions that enhance convenience, comfort, and modern luxury.",
    icon: <Cpu size={24} />,
    link: "#",
    delay: 1.4,
  },
  {
    id: 8,
    title: "Exclusive Consultations",
    description:
      "Work one-on-one with our design specialists to craft spaces that reflect your personal taste and lifestyle, with expert guidance every step of the way.",
    icon: <UserCheck size={24} />,
    link: "#",
    delay: 1.6,
  },
];

const Services = () => {
  return (
    <div>
      <div className="container py-20">
        {/* Heading title */}
        <div className="space-y-2 text-center max-w-[400px] mx-auto mb-12">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-3xl md:text-4xl font-bold font-serif"
          >
            What We Provide
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-gray-500 text-sm md:text-base"
          >
            Bring your dream home to life with one-on-one design help and hand-picked products.
          </motion.p>
        </div>

        {/* Card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ServiceCard.map((card) => (
            <motion.div
              variants={SlideUp(card.delay)}
              initial="initial"
              whileInView="animate"
              key={card.id}
              className="space-y-4 border-[1px] border-black/30 px-6 py-12 rounded-md hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] transition-all duration-300"
            >
              <span className="inline-block text-xl border-[1px] border-black rounded-full p-3">
                {card.icon}
              </span>
              <p className="text-2xl font-bold font-serif">{card.title}</p>
              <p className="text-gray-400 text-sm">{card.description}</p>
              <a
                href={card.link}
                className="inline-block border-b border-black hover:border-white transition-colors duration-300"
              >
                Learn More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
