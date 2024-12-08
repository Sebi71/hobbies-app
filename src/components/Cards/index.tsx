import { Card } from "@/components/ui/card";
import Loader from "../Loader/Loader";
import Link from "next/link";
import Image from "next/image";
import { HobbiePageProps } from "@/types/types";
import { useState, useEffect } from "react";


import "./style.scss";

const Cards: React.FC<HobbiePageProps> = ({ params }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.length > 0) {
      setLoading(false);
    }
  }, [params]);

  const getRandomImage = (images: string[]) => {
    if (images.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  return (
    <>
    {loading ? (
      <Loader />
    ) : (
 <>
      {params ? (
        <div className="container-card">
          {params.map((hobbie, index) => {
            const randomImage = getRandomImage(hobbie.pictures);
            return (
              <Link
                href={`/${hobbie.category}/${hobbie.title}`}
                key={hobbie.id}
              >
                <Card className="card">
                  <div className="container-image">
                    {randomImage ? (
                      <Image
                        src={randomImage}
                        alt={`Illustration du hobbie ${hobbie.title}, Image ${
                          index + 1
                        }`}
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
      ) : (
        <p className="no-hobbie">Pas de réalisations disponible</p>
      )}
      </>
    )}
    </>
  );
};

export default Cards;
