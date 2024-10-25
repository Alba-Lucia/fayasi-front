import { Image } from 'lucide-react'; // Asegúrate de que este sea el componente correcto
import React from 'react';

const CategoryList = ({ categoryList }) => {
  return (
    <div className="mt-5">
      <h2 className="font-bold">Comprar por categoría</h2>
      <div className="flex flex-wrap">
        {categoryList.map((category, index) => {
          const iconUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
          category.icon[0].url;
          console.log("Icon URL:", iconUrl); // Verifica la URL de la imagen

          return (
            <div key={index} className="flex items-center m-2">
              <Image
                  src={iconUrl

                  }
                  alt="icon"
                  width={25}
                  height={25}
                />
            </div>
          );
        })}
      </div>
      <h1 className="pt-6 text-red-50">categorias de cadenas</h1>

    </div>
  );
};

export default CategoryList;
