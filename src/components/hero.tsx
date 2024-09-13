import { getProducts } from '@/lib/shopify';
import HeroCarousel from './hero-carousel';
import heroBgUrl from '@/app/assets/hero-bg.png';


export async function Hero() {
  
  const products = await getProducts({});

  const carouselProducts = products.slice(0, 4); 
      
  return (
 
    <div className={`flex justify-center items-center w-full min-h-[653px] py-16 bg-cover bg-center`} style={{ backgroundImage: `url('${heroBgUrl.src}')`}}>
       <HeroCarousel items={carouselProducts} />
    </div>
    
    
  );
}
