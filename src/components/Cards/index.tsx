import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { HobbiePageProps } from "@/types/types";

import "./style.scss";

const Cards: React.FC<HobbiePageProps> = ({ params, title }) => {
  const getRandomImage = (images: string[]) => {
    if (images.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  return (
    <div className="reveal container-hobbies">
      <h2 className="title-hobbies">{title}</h2>
      <div className="container-card">
        {params.map((hobbie) => {
          const randomImage = getRandomImage(hobbie.pictures);
          return (
            <Link href={`/${hobbie.category}/${hobbie.title}`} key={hobbie.id}>
              <Card className="card">
                <div className="container-image">
                  {randomImage ? (
                    <Image
                      src={randomImage}
                      alt={`photo du hobbie ${hobbie.title}`}
                      width={1024}
                      height={460}
                      className="card-image"
                      priority
                    />
                  ) : (
                    <div className="placeholder">Pas d'image disponible</div>
                  )}
                </div>
                <h3 className="image-title">{hobbie.title}</h3>
                <h4 className="image-subtitle">{hobbie.category}</h4>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
