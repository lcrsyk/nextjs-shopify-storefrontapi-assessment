import { getProducts } from "@/lib/shopify";
import ProductGridCarousel from "./product-grid-carousel";

export default async function FeaturedCollection() {
  const products = await getProducts({});
  const gridProducts = [...products, ...products.reverse()].slice(0, 15);
  return (
    <>
      <div>
        <h2 className="font-bold text-xl text-center text-primary opacity-60 pt-20 pb-6">Featured Collection</h2>
        <div>
          <ProductGridCarousel rows={2} cols={4} products={gridProducts}/>
        </div>
      </div>
    </>
  );
}
