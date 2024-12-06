function Button({
  children,
  backgroundColor,
  textColor,
  borderColor = "border-transparent",
  className,
}) {
  return (
    <button
      className={`${backgroundColor} ${textColor} ${borderColor} ${className} h-12 w-[137px] rounded-[28px] border text-center font-ubuntu text-base font-bold leading-none`}
    >
      {children}
    </button>
  );
}
export default Button;
