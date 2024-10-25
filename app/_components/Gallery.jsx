import React from "react";
import Image from "next/image"; // Asegúrate de importar el componente Image aquí

const Gallery = ({ gallery }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 justify-center text-center">
      {gallery.map((item, index) => (
        <div key={index}>
          <div className="flex flex-col items-center">
            <Image
              src={
                item.imagen && item.imagen[0]?.url
                  ? process.env.NEXT_PUBLIC_BACKEND_BASE_URL + item.imagen[0].url
                  : "/default-icon.svg"
              }
              unoptimized={true}
              alt="icon"
              width={1000}
              height={100}
              className='w-ful object-cover rounded-sm'
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
