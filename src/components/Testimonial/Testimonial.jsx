import { motion } from "framer-motion";
import { SlideLeft, SlideUp } from "../../animation/animate";
import { Star } from "lucide-react";

const TestimonialData = [
  {
    id: 1,
    name: "Jonathan Reed",
    designation: "Homeowner",
    rating: 5,
    img: "https://i.pravatar.cc/300?img=1",
    text: "LuxeNest transformed our space into something truly elegant and functional. Every detail was thoughtfully executed, exceeding our expectations from concept to completion.",
    delay: 0.2,
  },
  {
    id: 2,
    name: "Alex Morgan",
    designation: "Real Estate Developer",
    rating: 3,
    img: "https://i.pravatar.cc/300?img=2",
    text: "Working with LuxeNest added real value to our properties. Their modern design approach and attention to detail consistently elevate every project.",
    delay: 0.4,
  },
  {
    id: 3,
    name: "George Williams",
    designation: "Commercial Client",
    rating: 4,
    img: "https://i.pravatar.cc/300?img=3",
    text: "Professional, creative, and reliable. LuxeNest delivered a refined interior that perfectly aligns with our brand identity and business goals.",
    delay: 0.6,
  },
  {
    id: 4,
    name: "Sophia Bennett",
    designation: "Luxury Apartment Owner",
    rating: 5,
    img: "https://i.pravatar.cc/300?img=4",
    text: "From layout planning to material selection, LuxeNest handled everything with precision. The final result feels both timeless and modern.",
    delay: 0.8,
  },
  {
    id: 5,
    name: "Michael Carter",
    designation: "Property Consultant",
    rating: 3,
    img: "https://i.pravatar.cc/300?img=5",
    text: "LuxeNest understands how design impacts value. Their interiors consistently attract premium clients and close deals faster.",
    delay: 1.0,
  },
  {
    id: 6,
    name: "Emily Harper",
    designation: "Interior Styling Client",
    rating: 5,
    img: "https://i.pravatar.cc/300?img=6",
    text: "The team perfectly balanced aesthetics and comfort. Our home now feels sophisticated, warm, and truly personalized.",
    delay: 1.2,
  },
  {
    id: 7,
    name: "Daniel Okoye",
    designation: "Office Space Client",
    rating: 4,
    img: "https://i.pravatar.cc/300?img=7",
    text: "LuxeNest delivered a clean, modern workspace that improved both productivity and brand perception. Exceptional execution.",
    delay: 1.4,
  },
  {
    id: 8,
    name: "Isabella Rossi",
    designation: "Hospitality Client",
    rating: 5,
    img: "https://i.pravatar.cc/300?img=8",
    text: "Their attention to detail and understanding of spatial flow created an atmosphere our guests truly appreciate. LuxeNest sets a high standard.",
    delay: 1.6,
  },
];

const Testimonial = () => {
  return (
    <div className="py-14">
      {/* heading title */}
      <div className="space-y-4 text-center max-w-[550px] mx-auto mb-8">
        <motion.h1
          variants={SlideUp(0.2)}
          initial="initial"
          whileInView="animate"
          className="text-4xl font-bold font-serif"
        >
          Words from our coustomers
        </motion.h1>
        <motion.p
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-gray-500 text-sm max-w-[350px] mx-auto"
        >
          Bring your dream home to life with one-on-one design help & hand
          picked products
        </motion.p>
      </div>
      {/* tesitomonial cards */}
      <div className="bg-black p-12">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-6">
          {TestimonialData.map((card) => {
            return (
              <motion.div
                variants={SlideLeft(card.delay)}
                initial="initial"
                whileInView="animate"
                key={card.id}
                className="border-[1px] border-gray-500 px-5 py-10 text-white group hover:bg-white duration-300"
              >
                {/* Upper section */}
                <div className="flex flex-row items-center gap-3 ">
                  <img
                    src={card.img}
                    alt=""
                    className="w-[60px] rounded-full"
                  />
                  <div>
                    <p className="text-sm font-bold group-hover:text-black">
                      {card.name}
                    </p>
                    <p className="text-gray-400 text-xs group-hover:text-black">
                      {card.designation}
                    </p>
                    <div className="flex gap-1 mt-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={`${
                            i < card.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-500 group-hover:text-gray-400"
                          } transition`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                {/* Bottom section */}
                <div className="mt-5 border-t-2 border-gray-500/40 pt-5">
                  <p className="text-sm text-gray-300 group-hover:text-black duration-300">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
