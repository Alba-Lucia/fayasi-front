import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import ProductItemDetails from "./ProductItemDetails";

const ProductItem = ({ product }) => {
  return (
    <div className="overflow-hidden">
      <div className="text-center w-full border hover:scale-105 hover:shadow-md transition-all ease-in-out">
        <div className="background__start flex items-center">
          <Image
            src={
              product.image && product.image[0]?.url
                ? `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}${product.image[0].url}`
                : "/default-icon.svg"
            }
            alt="icon"
            width={300}
            height={200}
            className="w-[100%]  h-[200px] object-contain rounded-sm"
          />
        </div>
        <div className="p-4">
          <h2 className="font-bold">{product.nombre}</h2>
          <p>{product.sellingPrice}</p>
          <ProductItemDetails product={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
