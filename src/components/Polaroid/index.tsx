import Image from "next/image";
import { PicturesProjectProps } from "@/types/types";
import "./style.scss";

const Polaroid: React.FC<PicturesProjectProps> = ({ pictures, title }) => {
  return (
    <div className="wrapper">
      {pictures.map((picture, index) => (
        <div className="item" key={index}>
          <div className="polaroid">
            <Image
              src={picture}
              width={800}
              height={800}
              alt={`image du projet ${title} ${index + 1}`}
            className="polaroid-img"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Polaroid;
