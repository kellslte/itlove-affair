import { Button } from "../ui";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState, useEffect } from "react";
import {motion} from "framer-motion"

const Navigation = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  const navLinks = [
    { link: "Wishlist", route: "/wishlist" },
    { link: "View Program", route: "/program" },
  ];

  const [mblNavOpen, setMblNavOpen] = useState<boolean>(false);

  const openMblNav = () => {
    setMblNavOpen((prev) => !prev); 
  };

  const closeMblNav = () => {
    setMblNavOpen(false); 
  };

  return (
    <nav className="bg-transparent flex justify-between items-center px-24 py-4 mlg:px-14 mxs:px-10">
      <motion.p 
        className="font-averta text-2xl font-normal text-pastor-blue"
        initial = {{opacity: 0, y: -250}}
        animate = {{opacity: 1, y: 0}}
        >
        <Link to="/" className="relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-pastor-blue after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center">#ITloveaffair24</Link>
      </motion.p>
      {!isSmallDevice ? (
        <div className="flex items-center justify-center gap-4">
          {navLinks.map((navLink, index) => (
            <Link
              to={navLink.route}
              key={index}
              className="block text-lg font-normal hover:text-blue-800 transition-colors duration-300"
            >
              {navLink.link}
            </Link>
          ))}
          <Button text="Reserve an Invite" />
        </div>
      ) : (
        <>
          <button
            className="flex flex-col gap-1 border-none bg-transparent"
            onClick={openMblNav}
          >
            <span className="w-6 h-0.5 bg-pastor-blue"></span>
            <span className="w-6 h-0.5 bg-pastor-blue"></span>
            <span className="w-6 h-0.5 bg-pastor-blue"></span>
          </button>
          <MobileNavigation
            isOpen={mblNavOpen}
            navLinks={navLinks}
            closeNav={closeMblNav}
          />
        </>
      )}
    </nav>
  );
};

export { Navigation };

interface MobileNavProps {
  isOpen: boolean;
  navLinks: { link: string; route: string }[];
  closeNav: () => void;
}

export const MobileNavigation: React.FC<MobileNavProps> = ({
  isOpen,
  navLinks,
  closeNav,
}) => {
  // Close the menu when clicking outside the menu area
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const navElement = document.querySelector(".mobile-nav");
      if (navElement && !navElement.contains(event.target as Node)) {
        closeNav();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, closeNav]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-[80] bg-black bg-opacity-50"
          onClick={closeNav}
        ></div>
      )}

      <div
        className={`mobile-nav fixed top-0 left-0 w-2/3 bg-white shadow-lg z-[100] transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="w-full h-16 bg-lcc-yellow flex justify-between items-center px-6">
          <Link to ="/" className="font-playwrite font-normal text-pastor-blue mxxxs:text-sm">
            #ITLoveaffair24
          </Link>
          <button
            onClick={closeNav}
            className="relative w-6 h-6 flex flex-col justify-center items-center mxxxs:w-2 mxxxs:h-2"
          >
            <span className="absolute w-6 h-0.5 bg-pastor-blue transform rotate-45"></span>
            <span className="absolute w-6 h-0.5 bg-pastor-blue transform -rotate-45"></span>
          </button>
        </div>
        <div className="flex flex-col p-6 space-y-4 bg-white h-[100vh]">
          {navLinks.map((navLink, index) => (
            <Link
              to={navLink.route}
              key={index}
              className="text-pastor-blue "
              onClick={closeNav} 
            >
              {navLink.link}
            </Link>
          ))}
          <Button text="Reserve an Invite" onClick={closeNav} />
        </div>
      </div>
    </>
  );
};
