"use client";
import { useState } from "react";
import Image from "next/image";
import Navy from "../../../public/navy.png";
import Mint from "../../../public/mint.png";
import Ocean from "../../../public/ocean.png";

const Watches = () => {
  // State til at gemme det valgte billede
  const [selectedWatch, setSelectedWatch] = useState(Navy);

  // Funktion der opdaterer state, når man klikker på et ur
  const handleWatchClick = (watch) => {
    setSelectedWatch(watch);
  };
  return (
    <div className="galleri">
      <Image className="navyur" src={selectedWatch} alt="valgt ur" width={450} height={450} />
      <div className="watches">
        <div className="boks nb" onClick={() => handleWatchClick(Navy)} style={{ cursor: "pointer" }}>
          <Image className="watch" src={Navy} alt="Navy ur" width={100} height={100} />
        </div>

        <div className="boks mb" onClick={() => handleWatchClick(Mint)} style={{ cursor: "pointer" }}>
          <Image className="watch" src={Mint} alt="Mint ur" width={100} height={100} />
        </div>

        <div className="boks ob" onClick={() => handleWatchClick(Ocean)} style={{ cursor: "pointer" }}>
          <Image className="watch" src={Ocean} alt="Ocean ur" width={100} height={100} />
        </div>
      </div>
    </div>
  );
};

export default Watches;
