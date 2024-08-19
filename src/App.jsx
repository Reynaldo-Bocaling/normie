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
        className="relative z-50 w-full min-h-screen bg-black  pb-12"
      >
        <div className="max-w-[512px] w-full mx-auto flex flex-col items-center pt-9 px-6">
          <img src={logo} alt="logo" className="w-32" />
          <AnimationComponent />
          <div className=" swap-buy flex flex-col md:flex-row">
            <Button
              title="DEXSCREENER"
              url="https://dexscreener.com/base/0xe8c28bdf6b63713bd3b162f5a8f5bb0422b5be59"
            />
            <Button
              title="SUNPUMP"
              url="https://www.basejump.pro/viewpresale?tokenAddress=0xF8c700552B67D64362Af3F2D48B098E5AC9b9870"
            />
          </div>
          <p className="text-2xl tracking-wider">
            The Tron people's coin. Reaching out to all normies on Tron with the
            ultimate goal of sending it to the sun.
          </p>

          <SicialMedia />
          <Footer />
          <Test />
        </div>
      </section>
    </>
  );
};

export default App;
