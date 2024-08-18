import React from "react";
import { useAtom } from "jotai";
import { ProductsAtom } from "../atoms/ProductsAtom.tsx";
import ProductCard from "./ProductCard.tsx";

export default function ProductsList() {
    const [products] = useAtom(ProductsAtom);

    const handleBuy = (productId: number) => {
        // Implement the buy functionality here
        console.log(`Buying product with id: ${productId}`);
    };

    return (
        <div className="flex flex-wrap gap-4">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    image={product.thumbnail}
                    title={product.title}
                    description={product.description}
                    onBuy={() => handleBuy(product.id)}
                />
            ))}
        </div>
    );
}