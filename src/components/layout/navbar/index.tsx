'use client'
import { usePathname } from 'next/navigation'; 

import { Menu } from '../../../lib/shopify/types';
import Link from 'next/link';
import CartButton from '@/components/cart/cart-button';

export async function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const menu: Menu[] = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Item 1",
      path: "/item1"
    },
    {
      title: "Item 2",
      path: "/item2"
    },
    {
      title: "Item 3",
      path: "/item3"
    },
    {
      title: "Item 4",
      path: "/item4"
    },
    {
      title: "Item 5",
      path: "/item5"
    }
  ];

  return (
    <nav className="relative flex items-center justify-between bg-white">
      <ul className="w-full bg-white flex justify-center gap-[37px] uppercase pt-9 pb-[13px]">
        {menu.map((item, index) => (
          <Link key={index} className={`text-primary ${isActive(item.path) ? "font-bold after:top-1 after:bg-primary after:block after:w-[140%] after:h-1 after:left-[-20%] after:relative" : null } px-2 `} href={item.path}>{item.title}</Link>
        ))}
      </ul>
      <CartButton />
    </nav>
  );
}
