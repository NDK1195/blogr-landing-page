import Content from "./Content";
import illustrationEditorDesktop from "../images/illustration-editor-desktop.svg";
import illustrationEditorMobile from "../images/illustration-editor-mobile.svg";
import illustrationLaptopDesktop from "../images/illustration-laptop-desktop.svg";
import illustrationLaptopMobile from "../images/illustration-laptop-mobile.svg";
import bgPatternCircles from "../images/bg-pattern-circles.svg";
import illustrationPhones from "../images/illustration-phones.svg";

function Body() {
  return (
    <main className="overflow-hidden bg-[#fafafa] pb-[100px] pt-[100px] lg:pb-[308px] lg:pt-[150px]">
      <h2 className="mb-[38px] text-center font-overpass text-[28px] font-semibold leading-none tracking-[-0.84px] text-very-dark-blue-(headings) lg:mb-[93px] lg:text-[40px] lg:tracking-[-1.2px]">
        Designed for the future
      </h2>

      <section className="mb-[273px] lg:mb-[262px]">
        <div className="relative mx-auto max-w-[1110px]">
          <div className="mb-[46px] lg:absolute lg:-top-[223px] lg:left-[655px] lg:mb-0 lg:min-w-[880px]">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={illustrationEditorDesktop}
              />
              <img
                src={illustrationEditorMobile}
                alt="illustration editor"
                className="mx-auto"
              />
            </picture>
          </div>

          <Content
            title1="Introducing an extensible editor"
            title2="Robust content management"
            content1="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog."
            content2="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
          />
        </div>
      </section>

      <section className="relative mb-20 rounded-bl-[100px] rounded-tr-[100px] bg-body lg:mb-[301px]">
        {/* bg pattern */}
        <div className="absolute h-full w-full overflow-hidden rounded-bl-[100px] rounded-tr-[100px]">
          <div className="absolute -top-[237px] left-1/2 w-full min-w-[602px] max-w-[1014px] -translate-x-1/2 lg:-left-[213px] lg:-top-[509px] lg:translate-x-0">
            <img
              src={bgPatternCircles}
              alt="background pattern circles"
              className="w-full"
            />
          </div>
        </div>
        {/* bg pattern */}

        <div className="relative mx-auto max-w-[1110px] lg:flex lg:flex-row-reverse">
          {/* iilustration phones */}
          <div className="absolute -top-[180px] left-1/2 z-20 w-full max-w-[328px] -translate-x-1/2 lg:-left-10 lg:-top-16 lg:max-w-full lg:translate-x-0">
            <img src={illustrationPhones} alt="illustration phones" />
          </div>
          {/* iilustration phones */}
          <div className="mx-auto max-w-[540px] px-6 pb-[93px] pt-[221px] text-center font-overpass text-white lg:mx-0 lg:px-0 lg:py-[111px] lg:text-left">
            <h2 className="mb-[10px] text-[40px] font-semibold tracking-[-1.2px] lg:mb-[5px]">
              State of the Art Infrastructure
            </h2>
            <p className="leading-7 tracking-[0.5px]">
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="relative mx-auto max-w-[1110px] lg:flex lg:flex-row-reverse">
          <div className="mb-[46px] lg:absolute lg:-left-[445px] lg:-top-[185px] lg:mb-0 lg:min-w-[880px]">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={illustrationLaptopDesktop}
              />
              <img
                src={illustrationLaptopMobile}
                alt="illustration laptop"
                className="mx-auto"
              />
            </picture>
          </div>

          <Content
            title1="Free, open, simple"
            title2="Powerful tooling"
            content1="Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
            content2="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites."
          />
        </div>
      </section>
    </main>
  );
}
export default Body;
