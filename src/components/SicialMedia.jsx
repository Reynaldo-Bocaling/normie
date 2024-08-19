import React from "react";
import { socialMedia } from "../utils";

const SicialMedia = () => {
  return (
    <div
      id="socialMedia"
      className="w-full grid grid-cols-2  justify-between mt-16 gap-y-8"
    >
      {socialMedia.map((item, index) => {
        return (
          <a
            href={item.url}
            key={index}
            className="flexCenter gap-3 md:gap-12 "
          >
            <img src={item.img} alt="img" className={item.variant} />
            <p className="text-[1.7rem]">{item.title}</p>
          </a>
        );
      })}
    </div>
  );
};

export default SicialMedia;
