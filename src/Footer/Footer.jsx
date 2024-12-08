import { menu } from "../data/menu";
import logo from "../images/logo.svg";
function Footer() {
  return (
    <footer className="rounded-tr-[100px] bg-very-dark-black-blue-(footer-background) py-[75px] lg:py-[70px]">
      <div className="mx-auto flex max-w-[1110px] flex-col items-center gap-[72px] px-6 font-ubuntu text-white lg:flex-row lg:items-start lg:gap-[184px] xl:px-0">
        {/* logo */}
        <img src={logo} alt="logo" />
        {/* logo */}

        {/* menu */}
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-[30px]">
          {menu.map((item) => (
            <div
              className="flex w-full flex-col items-center gap-5 lg:items-start"
              key={item.title}
            >
              <h4 className="text-lg leading-[33px] lg:text-[15px]">
                {item.title}
              </h4>
              <ul className="flex flex-col items-center gap-2 lg:items-start">
                {item.links.map((link) => (
                  <li
                    className="cursor-pointer text-lg leading-[33px] opacity-75 hover:underline lg:text-[15px]"
                    key={link}
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* menu */}
      </div>
    </footer>
  );
}
export default Footer;
