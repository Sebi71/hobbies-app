"use client";

import { useFirebaseHobbies } from "@/context/hobbiesContext";
import Cards from "../Cards";

export default function LastHobbies() {
  const { hobbies } = useFirebaseHobbies();

  const latestHobbies = hobbies
    .filter((hobbie) => hobbie.createdAt)
    .sort((a, b) => b.createdAt.seconds - a.createdAt.seconds)
    .slice(0, 4);

  return (
    <div className="reveal container-hobbies">
      <h2 className="title-hobbies">Dernières réalisations :</h2>
      <Cards params={latestHobbies} />
    </div>
  );
}
