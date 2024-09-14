"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { Menu } from "../../../lib/shopify/types";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import CartModal from "@/components/cart/cart-modal";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const menu: Menu[] = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Item 1",
      path: "/item1",
    },
    {
      title: "Item 2",
      path: "/item2",
    },
    {
      title: "Item 3",
      path: "/item3",
    },
    {
      title: "Item 4",
      path: "/item4",
    },
    {
      title: "Item 5",
      path: "/item5",
    },
  ];

  return (
    <nav className="relative flex items-center justify-between bg-white">
      <ul className="hidden md:flex md:w-full h-full md:h-auto bg-white justify-center md:gap-[37px] uppercase pt-9 pb-[13px]">
        {menu.map((item, index) => (
          <Link
            key={index}
            className={`text-primary ${
              isActive(item.path)
                ? "font-bold after:top-1 after:bg-primary after:block after:w-[140%] after:h-1 after:left-[-20%] after:relative"
                : null
            } px-2 `}
            href={item.path}
          >
            {item.title}
          </Link>
        ))}
      </ul>
      <div className="bg-white px-6 py-8">
        <AiOutlineMenu
          className="md:hidden"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
        {menuOpen ? (
          <ul className="absolute w-[150px] h-[300px] z-50 flex flex-col gap-4 bg-white py-3">
            {menu.map((item, index) => (
              <Link
                key={index}
                className={`text-primary ${
                  isActive(item.path)
                    ? "font-bold after:top-1 after:bg-primary after:block after:w-[80%] md:after:w-[140%] after:h-1 after:left-[0%] md:after:left-[-20%] after:relative"
                    : null
                } px-2 `}
                href={item.path}
              >
                {item.title}
              </Link>
            ))}
          </ul>
        ) : null}
      </div>
      <CartModal />
    </nav>
  );
}
