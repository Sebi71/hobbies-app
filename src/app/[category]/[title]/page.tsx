"use client";

import { useParams } from "next/navigation";
import { useFirebaseHobbies } from "@/context/hobbiesContext";
import Loader from "@/components/Loader/Loader";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { HobbieFormData } from "@/types/types";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

import "./style.scss";

export default function ProjectPage() {
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
        {project ? (
          <>
            <h1 className="title-category-project">{project.title}</h1>
            <p className="resum-project">{project.resum}</p>
          </>
        ) : (
          <div className="no-projects-container">
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
