"use client";
import { useState, useRef, useEffect } from "react";
import { createCartAndSetCookie } from "./actions";
import Button from "../button";
import Price from "../price";
import { useCart } from "./cart-context";
import { DeleteItemButton } from "./delete-item-button";
import CartButton from "./cart-button";

type CartModalProps = {
  isOpen: boolean;
};
export default function CartModal() {
  const { cart, updateCartItem } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  useEffect(() => {
    if (!cart) {
      createCartAndSetCookie();
    }
  }, [cart]);

  useEffect(() => {
    if (
      cart?.totalQuantity &&
      cart?.totalQuantity !== quantityRef.current &&
      cart?.totalQuantity > 0
    ) {
      if (!isOpen) {
        setIsOpen(true);
      }
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef]);
  return (
    <>
      <CartButton onClick={openCart} />
      <div
        className={`flex fixed inset-0 bg-black bg-opacity-50 z-50 items-center justify-center ${
          !isOpen ? "hidden" : null
        }`}
      >
        <div className="flex flex-col md:w-[500px] h-auto bg-white rounded-lg p-4 gap-2">
          <h4 className="font-bold">Tu Carrito</h4>
          <div className="flex flex-col">
            {cart?.lines.map((item) => (
              <div className="flex justify-between">
                <span className="flex">
                  {item.merchandise.product.title} -
                  <Price
                    className="flex-none"
                    amount={(
                      parseFloat(item.cost.totalAmount.amount) / item.quantity
                    ).toString()}
                    currencyCode={item.cost.totalAmount.currencyCode}
                    currencyCodeClassName="hidden @[275px]/label:inline"
                  />{" "}
                  * {item.quantity}
                </span>
                <DeleteItemButton
                  item={item}
                  optimisticUpdate={updateCartItem}
                />
              </div>
            ))}
          </div>
          <span className="flex w-full justify-center">
            Total
            <Price
              className="flex-none"
              amount={cart?.cost.totalAmount.amount as string}
              currencyCode={cart?.cost.totalAmount.currencyCode as string}
              currencyCodeClassName="hidden @[275px]/label:inline"
            />
          </span>
          <Button
            className="bg-red-800 w-[100px] px-4 py-2 rounded-lg"
            variant="danger"
            onClick={closeCart}
          >
            Cerrar
          </Button>
        </div>
      </div>
    </>
  );
}
