import { Button } from "../ui";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useState, useEffect } from "react";

const Navigation = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  const navLinks = [
    { link: "Wishlist", route: "/wishlist" },
    { link: "Download Program", route: "#" },
  ];

  const [mblNavOpen, setMblNavOpen] = useState<boolean>(false);

  const openMblNav = () => {
    setMblNavOpen((prev) => !prev); // Toggle menu
  };

  const closeMblNav = () => {
    setMblNavOpen(false); // Close menu
  };

  return (
    <nav className="flex justify-between items-center px-24 py-4 mlg:px-14 mxs:px-10">
      <p className="font-averta font-normal text-pastor-blue">
        <Link to="/">#Ifeoma&Tochi</Link>
      </p>
      {!isSmallDevice ? (
        <div className="flex items-center justify-center gap-4">
          {navLinks.map((navLink, index) => (
            <Link
              to={navLink.route}
              key={index}
              className="block font-normal hover:text-blue-700 transition-colors duration-300"
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
      {/* Overlay for closing menu when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50"
          onClick={closeNav}
        ></div>
      )}

      <div
        className={`mobile-nav fixed top-0 left-0 h-full w-2/3 bg-white shadow-lg z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="w-full h-14 bg-lcc-yellow flex justify-between items-center px-6">
          <p className="font-playwrite font-normal text-pastor-blue mxxxs:text-sm">
            #Ifeoma&Tochi
          </p>
          <button
            onClick={closeNav}
            className="relative w-6 h-6 flex flex-col justify-center items-center mxxxs:w-2 mxxxs:h-2"
          >
            <span className="absolute w-6 h-0.5 bg-pastor-blue transform rotate-45"></span>
            <span className="absolute w-6 h-0.5 bg-pastor-blue transform -rotate-45"></span>
          </button>
        </div>
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((navLink, index) => (
            <Link
              to={navLink.route}
              key={index}
              className="text-pastor-blue "
              onClick={closeNav} // Close the menu when a link is clicked
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
