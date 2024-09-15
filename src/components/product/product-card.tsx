import Image from "next/image";
import Price from "../price";
import { Product } from "@/lib/shopify/types";
import placeholderUrl from "@/app/assets/placeholder.webp";
import { AddToCart } from "../cart/add-to-cart";

type ProductCardProps = {
  product: Product;
};
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <>
      <div className="flex flex-col flex-wrap gap-3 rounded-3xl p-4 shadow-custom">
        <div className={`relative w-full h-0 pt-[128%] overflow-hidden`}>
        <Image
          className={`object-cover w-auto h-[255px]`}
          src={product.featuredImage?.url || placeholderUrl.src}
          alt={product.featuredImage?.altText || "Shopify Headless"}
          layout="fill"
          objectFit="cover"
        />
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center">
          <Price
            className="flex-none"
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode as string}
            currencyCodeClassName="hidden @[275px]/label:inline"
          />
          <AddToCart product={product} />
        </div>
      </div>
    </>
  );
}
