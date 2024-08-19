import React from "react";
import Typical from "react-typical";
const AnimationLoading = () => {
  const steps = [
    "A",
    "L",
    "LZ",
    "LO",
    "LOC",
    "LOB",
    "LOA",
    "LOAG",
    "LOAD",
    "LOADJ",
    "LOADI",
    "LOADIA",
    "LOADIB",
    "LOADIN",
    "LOADINK",
    "LOADINZ",
    "LOADING",
  ];

  return (
    <h1 className="text-[5rem] font-medium flexCenter gap-4">
      <Typical
        steps={steps}
        loop={1}
        wrapper="span"
        options={{
          loop: 1,
          deleteSpeed: 50,
          delay: 5000,
          insert: [
            "R",
            "Y",
            "X",
            "Q",
            "J",
            "V",
            "W",
            "U",
            "I",
            "O",
            "P",
            "L",
            "M",
            "N",
          ],
        }}
      />
    </h1>
  );
};

export default AnimationLoading;
