function Content({ title1, title2, content1, content2 }) {
  return (
    <div className="mx-auto max-w-[540px] px-6 text-center font-overpass lg:mx-0 lg:text-left xl:px-0">
      <div className="mb-10 lg:mb-16">
        <h3 className="mb-4 px-4 text-[28px] font-semibold leading-8 lg:mb-8 lg:px-0">
          {title1}
        </h3>
        <p className="leading-7 tracking-[0.5px] text-very-dark-grayish-blue-(body-copy)">
          {content1}
        </p>
      </div>
      <div>
        <h3 className="mb-4 px-4 text-[28px] font-semibold leading-8 lg:mb-8 lg:px-0">
          {title2}
        </h3>
        <p className="leading-7 tracking-[0.5px] text-very-dark-grayish-blue-(body-copy)">
          {content2}
        </p>
      </div>
    </div>
  );
}
export default Content;
