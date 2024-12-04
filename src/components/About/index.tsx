import Image from "next/image";
import background from "@/assets/images/font.jpeg";

import "./style.scss";

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">Retrouvez ici mes différentes réalisations</h1>
      <Image src={background} alt="background" className="bg-image"></Image> 
      {/* changer l'image */}
    </div>
  );
}
