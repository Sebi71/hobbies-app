import Image from "next/image";
import background from "@/assets/images/font.webp";
import wave from "@/assets/images/vague.svg";

import "./style.scss";

export default function Hero() {
  return (
    <div className="hero-container">
      <h1 className="hero-title">Retrouvez ici mes différentes réalisations</h1>
      <Image src={background} alt="background" className="bg-image" priority></Image> 
        <Image
          src={wave}
          alt="Vague"
          className="wave-container"
          priority
        />
    </div>
  );
}
