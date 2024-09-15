'use client';

import { removeItem } from '@/components/cart/actions';
import type { CartItem } from '@/lib/shopify/types';
import { useFormState } from 'react-dom';
import { UpdateType } from './cart-context';

export function DeleteItemButton({
  item,
  optimisticUpdate
}: {
  item: CartItem;
  optimisticUpdate: (merchandiseId: string, updateType: UpdateType) => void;
}) {
  const [message, formAction] = useFormState(removeItem, null);
  const merchandiseId = item.merchandise.id;
  const actionWithVariant = formAction.bind(null, merchandiseId);

  return (
    <form
      action={async () => {
        optimisticUpdate(merchandiseId, 'delete');
        await actionWithVariant();
      }}
    >
      <button
        type="submit"
        aria-label="Remove cart item"
        className="text-red-800 cursor-pointer"
      >
        Remove
      </button>
    </form>
  );
}
