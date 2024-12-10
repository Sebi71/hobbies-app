import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import mail from "@/assets/icons/outlook.svg";
import linkedin from "@/assets/icons/linkedin.svg";
import github from "@/assets/icons/github-light.svg";
import logo from "@/assets/images/logo.webp";
import linktree from "@/assets/icons/linktree.svg";

import "./style.scss";

export default function contactPage() {
  return (
    <>
      <NavBar />
      <div className="contact-container">
        <h1 className="contact-title">Me contacter :</h1>
        <p className="contact-text">
          Pour entrer en contact avec moi, rien de plus simple :
        </p>
        <div className="contact-content">
          <Link href="mailto:seb.juillet@outlook.fr" className="link">
            <Image
              src={mail}
              alt="icone d'outlook"
              width={30}
              height={30}
              className="icon"
            />
            <span>seb.juillet@outlook.fr</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/sébastien-juillet-327a17a7"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <Image
              src={linkedin}
              alt="icone de linkedin"
              width={30}
              height={30}
              className="icon"
            />
            <span>Mon profil Linkedin</span>
          </Link>
          <Link
            href="https://github.com/Sebi71"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <Image
              src={github}
              alt="icone de github"
              width={30}
              height={30}
              className="icon"
            />
            <span>Mon profil Github</span>
          </Link>
        </div>
        <div>
          <p className="contact-text">
            Retrouvez mes autres réalisations sur :
          </p>
          <div className="contact-content">
          <Link
              href="https://sebastienj-dev-portfolio.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <Image
                src={logo}
                alt="icone de linkedin"
                width={30}
                height={30}
                className="icon"
              />
              <span>Mon portfolio</span>
            </Link>
            <Link
              href="https://linktr.ee/sebastienj"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              <Image
                src={linktree}
                alt="icone de linkedin"
                width={30}
                height={30}
                className="icon"
              />
              <span>Mon Lintree</span>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
