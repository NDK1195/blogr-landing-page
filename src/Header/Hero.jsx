import Button from "../components/Button";

function Hero() {
  return (
    <div className="relative z-20 mx-auto max-w-[920px]">
      <div className="px-6 text-center font-overpass leading-none text-white">
        <h1 className="mb-1 px-3 text-4xl font-semibold leading-normal tracking-[-1.08px] lg:mb-3 lg:text-[64px] lg:tracking-[-1.92px]">
          A modern publishing platform
        </h1>
        <p className="mb-[38px] text-lg lg:mb-11 lg:text-xl">
          Grow your audience and build your online brand
        </p>
        <div className="flex items-center justify-center gap-4 lg:gap-6">
          <Button
            textColor="text-light-red-(cta-text)"
            backgroundColor="bg-white"
            className="transition-colors hover:bg-very-light-red-(cta-hover-bg) hover:text-white"
          >
            Start for Free
          </Button>
          <Button
            textColor="text-white"
            backgroundColor="bg-transparent"
            borderColor="border-white"
            className="transition-colors hover:bg-white hover:text-very-light-red-(cta-hover-bg)"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
