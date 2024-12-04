"use client"

import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { useFirebaseHobbies } from "@/context/hobbiesContext";
import { GiChemicalArrow } from "react-icons/gi";

import "./style.scss";

export default function LastHobbies() {
    const { hobbies } = useFirebaseHobbies();

    const latestHobbies = hobbies
    .filter((hobbie) => hobbie.createdAt) 
    .sort((a, b) => b.createdAt.seconds - a.createdAt.seconds)
    .slice(0, 4);


  return (
    <div className="reveal container-last-hobbies">
        <h2 className="title-last-hobbies">Dernières réalisations :</h2>
        <div className="container-card">
        {latestHobbies.map((hobbie) => (
          <Link href={`/categories/${hobbie.category}/${hobbie.id}`} key={hobbie.id}>
            <Card className="card">
              <div className="container-image">
                <Image
                  src={hobbie.pictures[hobbie.pictures.length - 1]}
                  alt={`photo de la réalisation ${hobbie.title}`}
                  width={1024}
                  height={460}
                  className="card-image"
                  priority
                />
              </div>
              <h3 className="image-title">{hobbie.title}</h3>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}