"use client"; // Agrega esta línea al principio del archivo

import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@radix-ui/react-dropdown-menu";
import { SearchCheck, ShoppingCart } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react"; // Importa useEffect y useState directamente desde React
import GlobalApi from "../_utils/GlobalApi";

function Header() {
  // const [categoryList, setCategoryList] = useState([]);

  // useEffect(() => {
  //   getCategoryList();
  // }, []);

  // const getCategoryList = () => {
  //   GlobalApi.getCategory().then((resp) => {
  //     setCategoryList(resp.data.data);
  //   });
  // };

  return (
    <div className="p-1 px-8 shadow-sm flex items-center justify-between ">
      <div className="flex items-center gap-8">
        <Image src="/logo.svg" alt="logo" width={90} height={90} />

        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <h2 className="flex gap-2 items-center border rounded-full p-1 px-10 bg-slate-200">
              <LayoutGrid />
              Categoria
            </h2>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Buscar categoria</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {categoryList.map((category, index) => (
              <DropdownMenuItem className="flex items-center" key={index}>
                <Image
                  src={
                    process.env.NEXT_PUBLIC_BACKEND_BASE_URL +
                    category.icon[0].url
                  }
                  unoptmized={true}
                  alt={category.Nombre}
                  width={25}
                  height={25}
                />
                <h2>{category?.Nombre}</h2>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu> */}

        <div className="flex gap-3 items-center  px-5 border rounded-md p-2">
          <SearchCheck />
          <input type="text" placeholder="Buscar..." className="outline-none" />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <h2 className="flex gap-2 items-center text-lg">
          <ShoppingCart />0
        </h2>
        <Button>Contactanos</Button>
      </div>
    </div>
  );
}

export default Header;
