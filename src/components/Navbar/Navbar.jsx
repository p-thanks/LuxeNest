import { useState } from "react";
import Logo from "../../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NavLinks = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "/about" },
  { id: 3, title: "Services", link: "/services" },
  { id: 4, title: "Projects", link: "/projects" },
  { id: 5, title: "Contact", link: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="container py-6"
      >
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <a href="/" className="flex items-center gap-3">
            <img src={Logo} alt="logo" className="w-10" />
            <span className="text-2xl font-bold">LuxeNest</span>
          </a>

          {/* Desktop Link section */}
          <div className="hidden md:block space-x-12">
            {NavLinks.map((link) => {
              return (
                <a
                  key={link.id}
                  href={link.link}
                  className="inline-block mx-4 text-lg font-semibold"
                >
                  {link.title}
                </a>
              );
            })}
          </div>

          {/* Desktop Button section */}
          <div className="hidden md:block">
            <button className="primary-btn">Try For Free</button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 pt-6">
                {NavLinks.map((link) => {
                  return (
                    <a
                      key={link.id}
                      href={link.link}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-semibold"
                    >
                      {link.title}
                    </a>
                  );
                })}
                <div>
                  <button className="primary-btn">Try For Free</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default Navbar;