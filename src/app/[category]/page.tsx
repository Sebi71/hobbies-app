"use client";

import { useParams } from "next/navigation";
import { useFirebaseHobbies } from "@/context/hobbiesContext";
import { FocusCards } from "@/components/ui/focus-cards";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

import "./style.scss";
import Loader from "@/components/Loader/Loader";

const CategoryPage: React.FC = () => {
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

  return (
    <>
      <NavBar />
      <div className="container-category">
        {loading ? (
          <Loader />
        ) : filteredHobbies.length === 0 ? (
          <p className="no-projects">
            Aucun projet trouvé dans cette catégorie.
          </p>
        ) : (
          <>
            <h1 className="title-category">
              Projets de la catégorie : {category}
            </h1>
            <FocusCards cards={filteredHobbies} />
          </>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CategoryPage;
