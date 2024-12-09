import logo from "@/assets/images/logo.webp";
import Link from "next/link";
import Image from "next/image";
import { IoIosMail } from "react-icons/io";
import { GiInjustice } from "react-icons/gi";
import { VscGistSecret } from "react-icons/vsc";
import { FaFileLines } from "react-icons/fa6";

import "./style.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-head">
        <Image
          src={logo}
          width={100}
          height={100}
          alt="logo du site"
          className="logo-site"
        />
        <div className="content-link-footer">
          <Link className="link-contact" href="/contact">
            <IoIosMail />
            <span>Contact</span>
          </Link>
          <Link className="link-contact" href="/mentions-legales">
            <GiInjustice />
            Mentions l&eacute;gales
          </Link>
          <Link className="link-contact" href="/politique-de-confidentialite">
            <VscGistSecret />
            Politique de confidentialité
          </Link>
          <Link className="link-contact" href="/conditions-generales-d'utilisation">
            <FaFileLines />
            Conditions Générales d&apos;Utilisation
          </Link>
        </div>
      </div>
      <span className="copyright">
        © 2024 Tous droits réservés - Sébastien Juillet
      </span>
    </footer>
  );
}
