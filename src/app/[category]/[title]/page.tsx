"use client";

import { useParams } from "next/navigation";
import { useFirebaseHobbies } from "@/context/hobbiesContext";
import Loader from "@/components/Loader/Loader";
import NavBar from "@/components/NavBar";
import Polaroid from "@/components/Polaroid";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { HobbieFormData } from "@/types/types";
import Link from "next/link";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import noProject from "@/assets/images/no-project.webp";

import "./style.scss";
// style in global.css

export default function ProjectPage() {
  // Effect to scroll to the top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { hobbies } = useFirebaseHobbies();
  const params = useParams();
  const titleProject =
    typeof params.title === "string" ? decodeURIComponent(params.title) : "";

  const [project, setProject] = useState<HobbieFormData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (hobbies.length > 0) {
      const foundProject = hobbies.find(
        (hobbie) => hobbie.title === titleProject
      );
      setProject(foundProject || null);
      setLoading(false);
    }
  }, [hobbies, titleProject]);

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
        <Link href={`/${params.category}`}>
          <GiReturnArrow
            className="icon-return"
            aria-label="retour à la page catégorie"
          />
        </Link>
        {project ? (
          <>
            <h1 className="title-category-project">{project.title}</h1>
            <p className="resum-project">{project.resum}</p>
            <Polaroid pictures={project.pictures} title={project.title} />
          </>
        ) : (
          <div className="no-projects-container">
            <Image
              src={noProject}
              alt="image représenntant l'absence de projet"
              width={250}
              height={250}
              className="no-project-img"
            />
            <p className="no-projects">
              Le projet demandé n'existe pas encore.
            </p>
            <Link href="/" className="link-home">
              <p>Retourner vers la page d'accueil</p>
              <FaHome className="icon-home" />
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
