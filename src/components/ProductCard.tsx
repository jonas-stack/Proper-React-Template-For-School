import React from "react";

interface ProductCardProps {
    image: string;
    title: string;
    description: string;
    onBuy: () => void;
}

export default function ProductCard({ image, title, description, onBuy }: ProductCardProps) {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={image} alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={onBuy}>Buy Now</button>
                </div>
            </div>
        </div>
    );
}