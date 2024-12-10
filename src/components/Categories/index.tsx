"use client";

import { useState } from "react";
import { useFirebaseHobbies } from "@/context/hobbiesContext";
import Filter from "../Filter";
import Cards from "../Cards";

export default function Categories() {
  const { hobbies } = useFirebaseHobbies();
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const sortedHobbies = hobbies
    .filter((hobbie) => hobbie.createdAt)
    .sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);

  const categories = [
    ...sortedHobbies
      .map((hobbie) => hobbie.category)
      .filter((category, index, self) => self.indexOf(category) === index)
      .sort((a, b) => b.localeCompare(a)),
  ];

  const handleFilter = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredHobbies =
  selectedCategory === "Tous"
    ? sortedHobbies
    : sortedHobbies.filter((hobbie) => hobbie.category === selectedCategory);


  return (
    <div className="reveal container-hobbies">
      <h2 className="title-hobbies">Ensemble de mes réalisations :</h2>
      <Filter categories={categories} handleFilter={handleFilter} />
      <Cards
        params={filteredHobbies}
      />
    </div>
  );
}
