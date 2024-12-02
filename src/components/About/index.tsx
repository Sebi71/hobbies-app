import Image from "next/image"
import background from "@/assets/images/font.jpeg"

import "./style.scss"

export default function About() {
  return (
    <div className="about-container">
        <Image src={background} alt="background"  className="bg-image"></Image>
    </div>
  )
}