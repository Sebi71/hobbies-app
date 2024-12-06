import Image from "next/image";
import background from "@/assets/images/font.jpeg";

import "./style.scss";

export default function Hero() {
  return (
    <div className="hero-container">
      <h1 className="hero-title">Retrouvez ici mes différentes réalisations</h1>
      <Image src={background} alt="background" className="bg-image"></Image> 
      {/* changer l'image */}
    </div>
  );
}
