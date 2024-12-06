import { useState } from "react";
import iconClose from "../images/icon-close.svg";
import iconHamburger from "../images/icon-hamburger.svg";
import logo from "../images/logo.svg";
import iconArrowDark from "../images/icon-arrow-dark.svg";
import iconArrowLight from "../images/icon-arrow-light.svg";
import Button from "../components/Button";
import MenuItem from "./MenuItem";

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
    <nav className="relative z-30 mx-auto max-w-[1110px] px-6 pb-[108px] pt-14 lg:pb-[120px] lg:pt-16 xl:px-0">
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
          <div className="absolute left-0 top-[125px] w-full px-6 lg:hidden">
            <div className="rounded-[5px] bg-white p-6 pb-8 shadow-box">
              <ul className="flex flex-col items-center gap-6">
                {menu.map((item, index) => (
                  <MenuItem
                    key={item.title}
                    title={item.title}
                    links={item.links}
                    index={index}
                    submenuIndex={submenuIndex}
                    onClick={handleSubmenuOpen}
                    iconArrow={iconArrowDark}
                  />
                ))}
              </ul>

              <div className="my-6 h-[1px] w-full bg-[#e8e4e4]" />
              <div className="flex flex-col items-center gap-6">
                <a
                  href="#"
                  className="font-ubuntu text-lg font-semibold leading-7 text-very-dark-blue-(headings)"
                >
                  Login
                </a>
                <Button
                  textColor="text-white"
                  className="bg-gradient-to-br from-[#FF8F71] to-[#FF3E55] transition-colors hover:from-very-light-red-(cta-hover-bg) hover:to-very-light-red-(cta-hover-bg)"
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
        {/* menu mobile */}

        {/* menu desktop */}
        <div className="hidden w-full lg:flex lg:items-center lg:justify-between">
          <ul className="flex items-center gap-8">
            {menu.map((item, index) => (
              <MenuItem
                key={item.title}
                title={item.title}
                links={item.links}
                index={index}
                submenuIndex={submenuIndex}
                onClick={handleSubmenuOpen}
                iconArrow={iconArrowLight}
                isMobile={false}
              />
            ))}
          </ul>
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="font-ubuntu text-base font-bold leading-none text-white opacity-75 transition-opacity hover:opacity-100"
            >
              Login
            </a>
            <Button
              textColor="text-light-red-(cta-text)"
              backgroundColor="bg-white"
              className="transition-colors hover:bg-very-light-red-(cta-hover-bg) hover:text-white"
            >
              Sign Up
            </Button>
          </div>
        </div>
        {/* menu desktop */}
      </div>
    </nav>
  );
}
export default Navbar;
