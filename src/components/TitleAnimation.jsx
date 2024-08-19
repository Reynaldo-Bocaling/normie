import React from "react";
import Typical from "react-typical";
const TitleComponent = () => {
  const steps = [
    "Z",
    "R",
    "N",
    "NP",
    "NS",
    "NO",
    "NON",
    "NOD",
    "NOR",
    "NORA",
    "NORC",
    "NORD",
    "NORM",
    "NORMP",
    "NORMI",
    "NORMIJ",
    "NORMIX",
    "NORMIE",
  ];

  return (
    <h1 className="text-[3rem] font-medium flexCenter gap-4">
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

export default TitleComponent;
