"use client";

import clsx from "clsx";
import { addItem } from "@/components/cart/actions";
import { useProduct } from "@/components/product/product-context";
import { Product, ProductVariant } from "@/lib/shopify/types";
import { useFormState } from "react-dom";
import { useCart } from "./cart-context";
import Button from "../button";

function SubmitButton({
  availableForSale,
  selectedVariantId,
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
}) {
  const buttonClasses =
    "relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white";
  const disabledClasses = "cursor-not-allowed opacity-60 hover:opacity-60";

  if (!availableForSale) {
    return (
      <Button
        className={clsx("rounded-full px-3 py-1 uppercase", disabledClasses)}
        variant="primary"
        onClick={() => {}}
      >
        <span className="text-shadow">Out of Stock</span>
      </Button>
    );
  }

  if (!selectedVariantId) {
    return (
      <Button
        className={clsx("rounded-full px-3 py-1 uppercase")}
        variant="primary"
        onClick={() => {}}
      >
        <span className="text-shadow">Buy Now</span>
      </Button>
    );
  }

  return (
    <Button
      className={clsx("rounded-full px-3 py-1 uppercase")}
      variant="primary"
      onClick={() => {}}
    >
      <span className="text-shadow">Buy Now</span>
    </Button>
  );
}

export function AddToCart({ product }: { product: Product }) {
  const { variants, availableForSale } = product;
  const { addCartItem, cart } = useCart();

  const { state } = useProduct();

  const [message, formAction] = useFormState(addItem, null);

  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === state[option.name.toLowerCase()]
    )
  );
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = variant?.id || defaultVariantId;
  const actionWithVariant = formAction.bind(null, selectedVariantId);
  const finalVariant = variants.find(
    (variant) => variant.id === selectedVariantId
  )!;

  return (
    <form
      action={async () => {
        addCartItem(finalVariant, product);
        await actionWithVariant();
      }}
    >
      <SubmitButton
        availableForSale={availableForSale}
        selectedVariantId={selectedVariantId}
      />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
