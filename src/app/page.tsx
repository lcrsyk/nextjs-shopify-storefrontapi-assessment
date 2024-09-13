import FeaturedCollection from "@/components/collection/featured-collection";
import { ProductProvider } from "@/components/product/product-context";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <ProductProvider>
      <Hero />
      <FeaturedCollection />
    </ProductProvider>
  );
}
