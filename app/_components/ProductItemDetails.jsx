"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingBasket } from "lucide-react";

const ProductItemDetails = ({ product }) => {
  const [productTotalPrice, setproductTotalPrice] = useState(
    product.sellingPrice ? product.sellingPrice : product.mrp
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <Dialog>
        <DialogTrigger>Ver producto</DialogTrigger>
        <DialogContent>
          <DialogHeader className="grid grid-cols-1 md:grid-cols-2 gap-3 p-7 bg-white text-black">
            <Image
              src={
                product.image && product.image[0]?.url
                  ? `https://fayasi-backend.onrender.com${product.image[0].url}`
                  : "/default-icon.svg"
              }
              alt="icon"
              width={300}
              height={200}
              className="bg-slate-200 h-[300px] w-[300px] object-cover rounded-sm"
            />
            <div className="flex flex-col gap-3">
              <DialogTitle className="text-2xl font-bold">
                {product.nombre}
              </DialogTitle>
              <p className="font-bold text-2xl mb-2">
                  ${product.sellingPrice}
                </p>
              <DialogDescription>{product.descripcion}</DialogDescription>
              <div>
                
                {/* <p>Quantity ({product.itemQuantityType})</p> */}
                <div className="flex flex-col items-baseline gap-3">
                  <div className="flex gap-3 items-center">
                    <div className="p-2 border flex gap-6 items-center px-5">
                      <button disabled={quantity==1} onClick={()=>setQuantity(quantity-1)}>-</button>
                      <p>{quantity}</p>
                      <button onClick={()=>setQuantity(quantity+1)}>+</button>
                    </div>
                    <p className="flex">= {(quantity*productTotalPrice).toFixed(0)}</p>
                  </div>
                  <Button className="flex gap-3">
                    <ShoppingBasket />
                    Add to cart
                  </Button>
                </div>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductItemDetails;
