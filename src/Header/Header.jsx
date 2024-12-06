import Hero from "./Hero";
import Navbar from "./Navbar";

function Header() {
  return (
    <>
      <header className="relative h-[600px] rounded-bl-[100px] bg-intro">
        {/* background pattern */}
        <div className="absolute left-0 top-0 h-[600px] w-full overflow-hidden rounded-bl-[100px]">
          <div className="absolute -left-[335px] -top-[250px] lg:-left-[470px] lg:-top-[2700px]">
            {/* pattern mobile */}
            <svg
              width="1324"
              height="1323"
              viewBox="0 0 1324 1323"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  x1=".695%"
                  y1="0%"
                  x2="99.305%"
                  y2="100%"
                  id="a"
                >
                  <stop stopColor="#FF8F71" offset="0%" />
                  <stop stopColor="#FF3E55" offset="100%" />
                </linearGradient>
              </defs>
              <path
                d="M821.895188,497.739327 L821.895188,825.739327 L493.895188,825.739327 L493.895188,597.739327 C493.895188,542.510852 538.666713,497.739327 593.895188,497.739327 L821.895188,497.739327 Z M276.655938,496.460979 C367.230637,496.460979 440.655938,569.88628 440.655938,660.460979 C440.655938,751.035678 367.230637,824.460979 276.655938,824.460979 C186.081239,824.460979 112.655938,751.035678 112.655938,660.460979 C112.655938,569.88628 186.081239,496.460979 276.655938,496.460979 Z M822.227687,111.489551 L822.227687,439.489551 L594.227687,439.489551 C538.999212,439.489551 494.227687,394.718026 494.227687,339.489551 L494.227687,339.489551 L494.227687,111.489551 L822.227687,111.489551 Z M440.061253,110.58581 L440.061253,338.58581 C440.061253,393.814285 395.289728,438.58581 340.061253,438.58581 L112.061253,438.58581 L112.061253,110.58581 L440.061253,110.58581 Z"
                transform="rotate(22 67.652 1066.199)"
                fill="url(#a)"
                fillRule="evenodd"
              />
            </svg>
            {/* pattern mobile */}

            {/* pattern desktop */}
            <svg xmlns="http://www.w3.org/2000/svg" width="3175" height="3174">
              <defs>
                <linearGradient
                  id="a"
                  x1=".639%"
                  x2="99.361%"
                  y1="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#FF8F71" />
                  <stop offset="100%" stopColor="#FF3E55" />
                </linearGradient>
              </defs>
              <path
                fill="url(#a)"
                fillRule="evenodd"
                d="M1973.15 1193.185v788.41h-786.766v-688.41c0-55.228 44.772-100 100-100h686.767zm-1310.445-1.171c217.26 0 393.383 176.124 393.383 393.383v1.645c0 217.26-176.123 393.383-393.383 393.383S269.322 1804.3 269.322 1587.042v-1.645c0-217.26 176.124-393.383 393.383-393.383zm392.212-926.418v688.41c0 55.23-44.771 100-100 100H268.151v-788.41h786.766zm918.234 0v788.41h-686.767c-55.228 0-100-44.771-100-100v-688.41h786.767z"
                transform="rotate(22 162.072 2556.164)"
              />
            </svg>
            {/* pattern desktop */}
          </div>
        </div>
        {/* background pattern */}
        <Navbar />
        <Hero />
      </header>
    </>
  );
}
export default Header;
