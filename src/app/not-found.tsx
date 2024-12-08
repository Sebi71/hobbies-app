import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

import lostImg from "@/assets/images/lost.webp";
import homeImg from "@/assets/images/404smiley.webp";

export default function NotFound() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center mx-6 my-20">
        <Image
          src={lostImg}
          alt="personne perdu avec une carte"
          width={300}
          height={300}
          className="w-[150px] md:w-[300px]"
        />
        <h1 className="text-center text-slate-900 md:text-3xl text-2xl my-6 ">
          Oups ! On dirait que cette page a pris un raccourci... et s'est perdue
          !
        </h1>
        <p className="text-center md:text-2xl text-xl">
          Pas de panique, on va vous remettre sur le droit
          chemin :
        </p>
        <Link href="/" className="flex flex-col items-center mt-4">
          <p className="md:text-2xl text-xl">Retour à la maison !</p>
          <Image
            src={homeImg}
            alt="petit maison pour retour à l'accueil"
            width={150}
            height={150}
            className="rounded-full w-[75px] md:w-[150px] mt-4"
          />
        </Link>
      </div>
      <Footer />
    </>
  );
}
