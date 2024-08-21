import React from "react";
import Button from "./components/Button";
import SicialMedia from "./components/SicialMedia";
import Footer from "./components/Footer";
import AnimationComponent from "./components/TitleAnimation";
import Test from "./Test";
import logo from "/img/logo.png";

const App = () => {
  return (
    <>
      <section
        id="heroa"
        className="relative z-50 w-full min-h-screen bg-red-500  pb-12"
      >
        <div className="max-w-[512px] w-full mx-auto flex flex-col items-center pt-9 px-6">
          <img src={logo} alt="logo" className="w-32" />
          <AnimationComponent />
          <div className=" swap-buy flex flex-col md:flex-row">
            <Button title="SUNSWAP" url="" />
            <Button
              title="SUNPUMP"
              url="https://sunpump.meme/token/TPcAkZ8iysU3Yf4rbthgaqEZAukHvvEyKC"
            />
          </div>
          <p className="text-2xl tracking-wider">
            The Tron people's coin. Reaching out to all normies on Tron with the
            ultimate goal of sending it to the sun.
          </p>

          <SicialMedia />
          {/* <Footer /> */}
          <Test />
        </div>
      </section>
    </>
  );
};

export default App;
