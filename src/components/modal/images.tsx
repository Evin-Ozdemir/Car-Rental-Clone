import { FC } from "react";
import { Car } from "../../types";
import generateImage from "../../utils/generateImage";

interface Props {
  car: Car;
}

const Images: FC<Props> = ({ car }) => {
  return (
    <div className="flex-1 flex flex-col gap-3">
      <div className="w-full h-40">
        <img
          src={generateImage(car, undefined, true)}
          className="w-full h-full max-auto object-cover rounded-md"
        />
      </div>

      <div className="flex-1 my-3 gap-3">
        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            src={generateImage(car, "29")}
            className="max-auto object-contain min-w-[140px]"
          />
        </div>
        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            src={generateImage(car, "33")}
            className="max-auto object-contain min-w-[140px]"
          />
        </div>
        <div className="rounded flex-1 flex relative h-24 bg-primary-blue-100">
          <img
            src={generateImage(car, "13")}
            className="max-auto object-contain min-w-[140px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
