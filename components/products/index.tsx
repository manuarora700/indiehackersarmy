import { products } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container } from "@/components/container";

export const Products = () => {
  return (
    <Container className="max-w-5xl pb-20">
      <h2 className="text-white font-medium text-base">Community Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-8">
        {products.map((product) => (
          <Link
            href={product.href}
            target="_blank"
            className="p-4 rounded-xl bg-neutral-950 border border-neutral-900"
            key={product.title}
          >
            {/* <div className="h-10">
              <Image
                src={product.logo}
                alt={product.title}
                width={32}
                height={32}
                className="object-cover"
              />
            </div> */}
            <h3 className="text-white font-medium text-base">
              {product.title}
            </h3>
            <p className="text-neutral-400 mt-2">{product.description}</p>
          </Link>
        ))}
      </div>
    </Container>
  );
};
