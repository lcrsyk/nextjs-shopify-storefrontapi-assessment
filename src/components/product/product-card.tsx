import Image from "next/image";
import Price from "../price";
import { Product } from "@/lib/shopify/types";
import Button from "../button";
import placeholderUrl from "@/app/assets/placeholder.webp";
import { AddToCart } from "../cart/add-to-cart";
import { ProductProvider } from "./product-context";

type ProductCardProps = {
  product: Product;
};
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <>
      <div className="flex flex-col gap-3 rounded-3xl p-4 shadow-custom">
        <Image
          className={`object-cover w-auto h-[255px]`}
          src={product.featuredImage?.url || placeholderUrl.src}
          width={195}
          height={255}
          alt={product.featuredImage?.altText || "Shopify Headless"}
        />
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Price
            className="flex-none"
            amount={product.priceRange.maxVariantPrice.amount}
            currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            currencyCodeClassName="hidden @[275px]/label:inline"
          />
          <AddToCart product={product} />
          {/* <Button
            variant="primary"
            
            onClick={() => {

            }}
          >
            <span className="text-shadow">Buy Now</span>
          </Button> */}
        </div>
      </div>
    </>
  );
}
