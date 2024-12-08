import Image from "next/image";
import { PicturesProjectProps } from "@/types/types";
import "./style.scss";

const Polaroid: React.FC<PicturesProjectProps> = ({ pictures }) => {
  return (
    <div className="wrapper">
      {pictures.map((picture, index) => (
        <div className="item" key={index}>
          <div className="polaroid">
            <Image
              src={picture}
              width={800}
              height={800}
              alt="1"
            //   changer alt
            className="polaroid-img"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Polaroid;
