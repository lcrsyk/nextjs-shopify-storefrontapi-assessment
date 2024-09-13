import Image from "next/image";
import Price from "../price";
import { Product } from "@/lib/shopify/types";
import Button from "../button";
import placeholderUrl from "@/app/assets/placeholder.webp";

type ProductCardProps = {
  product: Product;
};
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <>
      <div className="flex flex-col gap-3 rounded-3xl p-4 shadow-custom">
        <Image
          className={`object-cover w-full h-[255px]`}
          src={product.featuredImage?.url || placeholderUrl.src}
          width={195}
          height={255}
          alt={product.featuredImage?.altText}
        />
        <div className="flex justify-between items-center">
          <Price
            className="flex-none"
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            currencyCodeClassName="hidden @[275px]/label:inline"
          />
          <Button
            variant="primary"
            className="rounded-full px-3 py-1 uppercase "
          >
            <span className="text-shadow">Buy Now</span>
          </Button>
        </div>
      </div>
    </>
  );
}
