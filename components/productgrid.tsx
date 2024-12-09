"use client";
import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  code: string;
  price: string;
  image: string;
}

const ProductGrid: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const products: Product[] = [
    { id: 1, name: "Cantilever chair", code: "Y523201", price: "$42.00", image: "chair1.png" },
    { id: 2, name: "Cantilever chair", code: "Y523202", price: "$42.00", image: "chair3.png" },
    { id: 3, name: "Cantilever chair", code: "Y523203", price: "$42.00", image: "chair1.png" },
    { id: 4, name: "Cantilever chair", code: "Y523204", price: "$42.00", image: "chair3.png" },
  ];

  const handleClick = (id: number) => {
    setSelectedCard(selectedCard === id ? null : id);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center mt-10">
      {products.map((product) => (
        <div
          key={product.id}
          className={`w-[270px] rounded-lg shadow-md text-center ${
            selectedCard === product.id ? "h-[400px]" : "h-[361px]"
          } transition-all duration-300`}
        >
          <div onClick={() => handleClick(product.id)} className="cursor-pointer">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-2/3 object-contain"
            />
          </div>
          {selectedCard === product.id ? (
            <div className="bg-blue-700 text-white p-4">
              <button className="bg-green-500 text-white px-4 py-1 rounded-md mb-2">
                View Details
              </button>
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p>
                Code - <span className="text-gray-300">{product.code}</span>
              </p>
              <p className="text-white mt-1">{product.price}</p>
            </div>
          ) : (
            <div className="p-2">
              <h3 className="text-pink-600 font-bold">{product.name}</h3>
              <p className="text-gray-500">
                Code - <span className="text-blue-700 font-medium">{product.code}</span>
              </p>
              <p className="text-gray-800 mt-1">{product.price}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
