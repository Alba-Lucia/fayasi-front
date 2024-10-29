"use client"; // Marca el componente como Client Component

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Producto2 = () => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      const response = await fetch(
        "https://fayasi-backend.onrender.com/api/productos/?populate=*"
      );
      const data = await response.json();
      setProductos(data.data);
      setCargando(false);
    };

    fetchProductos();
  }, []);

  return (
    <div>
      <h1>Lista de Productos</h1>
      {cargando ? (
        <p>Cargando...</p>
      ) : (
        <ul>
          {productos.length > 0 ? (
            productos.map((producto) => (
              <li key={producto.id}>
                <h2>{producto.nombre}</h2>
                {producto.image && producto.image.length > 0 && (
                  <Image
                    src={`https://fayasi-backend.onrender.com${producto.image[0].url}`}
                    alt={producto.nombre}
                    width={100}
                    height={100}
                    layout="responsive" // Mantiene la relación de aspecto

                  />
                )}
              </li>
            ))
          ) : (
            <li>No hay productos disponibles.</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Producto2;
