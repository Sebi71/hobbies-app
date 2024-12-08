"use client";

import { useParams } from "next/navigation";
import { useFirebaseHobbies } from "@/context/hobbiesContext";
import { FocusCards } from "@/components/ui/focus-cards";
import Link from "next/link";
import Loader from "@/components/Loader/Loader";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { GiReturnArrow } from "react-icons/gi";
import { FaHome } from "react-icons/fa";
import Image from "next/image";
import noProject from "@/assets/images/no-project.webp";

// style in global.css

export default function CategoryPage() {
  const { hobbies } = useFirebaseHobbies();
  const params = useParams();
  const category = params.category;

  const [filteredHobbies, setFilteredHobbies] = useState<
    { title: string; src: string }[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (hobbies.length > 0) {
      const filteredHobbies = hobbies
        .filter((hobbie) => hobbie.category === category)
        .sort((a, b) => b.createdAt.seconds - a.createdAt.seconds)
        .map((hobbie) => ({
          title: hobbie.title,
          src: hobbie.pictures[hobbie.pictures.length - 1] || "",
        }));

      setFilteredHobbies(filteredHobbies);
    }
    setLoading(false);
  }, [hobbies, category]);

  if (loading) {
    return (
      <>
        <NavBar />
        <Loader />
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <div className="container-category-project">
      <Link href={"/"}>
          <GiReturnArrow className="icon-return" />
        </Link>
        {filteredHobbies.length === 0 ? (
          <div className="no-projects-container">
            <Image
              src={noProject}
              alt="image représenntant l'absence de projet"
              width={250}
              height={250}
              className="no-project-img"
            />
            <p className="no-projects">
              Aucun projet trouvé dans cette catégorie.
            </p>
            <Link href="/" className="link-home">
              <p>Retourner vers la page d'accueil</p>
              <FaHome className="icon-home" />
            </Link>
          </div>
        ) : (
          <>
            <h1 className="title-category-project">
              Projets de la catégorie : {category}
            </h1>
            <Link href={`/${category}/${filteredHobbies[0].title}`}>
              <FocusCards cards={filteredHobbies} />
            </Link>
          </>
        )}
      </div>
      <Footer />
    </>
  );
}
