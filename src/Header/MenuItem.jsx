function MenuItem({
  title,
  links,
  onClick,
  submenuIndex,
  index,
  iconArrow,
  isMobile = true,
}) {
  return (
    <li
      className={`${isMobile ? "flex w-full flex-col items-center gap-6" : "relative"} cursor-pointer font-ubuntu`}
      key={title}
      onClick={() => onClick(index)}
    >
      <div
        className={`${isMobile ? "" : "opacity-75 transition-opacity hover:opacity-100"} ${submenuIndex === index ? "opacity-100" : ""} flex items-center gap-2`}
      >
        <p
          className={`${isMobile ? "text-lg font-semibold leading-7 text-very-dark-blue-(headings)" : "text-base font-bold leading-none text-white hover:underline"} ${submenuIndex === index ? "underline" : ""}`}
        >
          {title}
        </p>
        <img
          src={iconArrow}
          alt="icon arrow"
          className={`${submenuIndex === index ? "rotate-180" : ""}`}
        />
      </div>
      {/* submenu */}
      {submenuIndex === index && (
        <div
          className={`${isMobile ? "w-full items-center bg-[#2D2E40] bg-opacity-[0.08] text-base font-semibold leading-7 opacity-75" : "absolute -left-6 top-7 w-fit items-start bg-white text-[15px] leading-[33px]"} flex flex-col gap-3 rounded-[5px] p-6`}
        >
          {links.map((link) => (
            <a
              href="#"
              key={link}
              className={`${isMobile ? "" : "hover:font-bold"}`}
            >
              {link}
            </a>
          ))}
        </div>
      )}
      {/* submenu */}
    </li>
  );
}
export default MenuItem;
