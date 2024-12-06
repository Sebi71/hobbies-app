"use client";

import { useFirebaseHobbies } from "@/context/hobbiesContext";
import Cards from "../Cards";


export default function Categories() {
  const { hobbies } = useFirebaseHobbies();

  const sortedHobbies = hobbies
    .filter((hobbie) => hobbie.createdAt)
    .sort((a, b) => b.createdAt.seconds - a.createdAt.seconds);

  return (
    <>
      <Cards params={sortedHobbies} title={"Ensemble de mes réalisations :"} />
    </>
  );
}
