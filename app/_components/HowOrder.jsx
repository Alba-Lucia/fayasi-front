import Image from "next/image";
import React from "react";
import Title from "./Title/Titles";
const HowOrder = ({ howorder }) => {
  // Ordena los elementos del array 'howorder' según la propiedad 'order' antes de mapearlos
  const sortedHoworder = [...howorder].sort((a, b) => a.order - b.order);

  return (
    <>
      <Title text="¿Cómo ordenar en nuestra tienda?"></Title>
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-3 justify-center text-center">
          {sortedHoworder.map((item, index) => (
            <div key={index}>
              <div className="flex flex-col items-center">
                <Image
                  src={
                    item.icon && item.icon[0]?.url
                      ? process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                        item.icon[0].url
                      : "/default-icon.svg"
                  }
                  unoptimized={true}
                  alt="icon"
                  width={100}
                  height={100}
                />
                <h1 className="font-bold">{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
    </>
  );
};

export default HowOrder;
