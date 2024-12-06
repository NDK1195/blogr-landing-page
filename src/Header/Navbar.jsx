import { useState } from "react";
import iconClose from "../images/icon-close.svg";
import iconHamburger from "../images/icon-hamburger.svg";
import logo from "../images/logo.svg";
import iconArrowDark from "../images/icon-arrow-dark.svg";
import iconArrowLight from "../images/icon-arrow-light.svg";
import Button from "../components/Button";

const menu = [
  {
    title: "Product",
    links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
  },
  {
    title: "Company",
    links: ["About", "Team", "Blog", "Careers"],
  },
  {
    title: "Connect",
    links: ["Contact", "Newsletter", "LinkedIn"],
  },
];
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submenuIndex, setSubmenuIndex] = useState(null);

  function handleSubmenuOpen(index) {
    setSubmenuIndex((prevState) => {
      if (prevState === index) {
        return null;
      } else {
        return index;
      }
    });
  }

  function handleMenuOpen() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  }

  return (
    <nav className="relative z-10 mx-auto max-w-[1110px] px-6 pb-[108px] pt-14 lg:pb-[120px] lg:pt-16 xl:px-0">
      <div className="flex items-center justify-between lg:justify-normal lg:gap-16">
        {/* logo */}
        <img src={logo} alt="logo" className="w-[82px] lg:w-[101px]" />
        {/* logo */}

        {/* menu mobile */}
        <img
          src={isMenuOpen ? iconClose : iconHamburger}
          alt="icon menu"
          className="cursor-pointer lg:hidden"
          onClick={handleMenuOpen}
        />
        {isMenuOpen && (
          <div className="absolute left-0 top-[125px] w-full px-6 font-overpass">
            <div className="shadow-box rounded-[5px] bg-white p-6 pb-8">
              <ul className="flex flex-col items-center gap-6">
                {menu.map((item, index) => (
                  <li
                    className="flex w-full cursor-pointer flex-col items-center gap-6"
                    key={item.title}
                    onClick={() => handleSubmenuOpen(index)}
                  >
                    <div className="flex items-center gap-2">
                      <p className="text-very-dark-blue-(headings) text-lg font-semibold leading-7">
                        {item.title}
                      </p>
                      <img
                        src={iconArrowDark}
                        alt="icon arrow"
                        className={`${submenuIndex === index ? "rotate-180" : ""}`}
                      />
                    </div>
                    {/* submenu */}
                    {submenuIndex === index && (
                      <div className="flex w-full flex-col items-center gap-3 rounded-[5px] bg-[#2D2E40] bg-opacity-[0.08] p-6 text-base font-semibold leading-7 opacity-75">
                        {item.links.map((link) => (
                          <a href="#" key={link}>
                            {link}
                          </a>
                        ))}
                      </div>
                    )}
                    {/* submenu */}
                  </li>
                ))}
              </ul>

              <div className="my-6 h-[1px] w-full bg-[#e8e4e4]" />
              <div className="flex flex-col items-center gap-6">
                <a
                  href="#"
                  className="text-very-dark-blue-(headings) text-lg font-semibold leading-7"
                >
                  Login
                </a>
                <Button
                  textColor="text-white"
                  className="hover:from-very-light-red-(cta-hover-bg) hover:to-very-light-red-(cta-hover-bg) to bg-gradient-to-br from-[#FF8F71] to-[#FF3E55] transition-colors"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
        {/* menu mobile */}

        {/* menu desktop */}
        <div className="hidden lg:block">
          <ul className=""></ul>
          <div className=""></div>
        </div>
        {/* menu desktop */}
      </div>
    </nav>
  );
}
export default Navbar;
