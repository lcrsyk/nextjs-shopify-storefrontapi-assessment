
import { useCart } from './cart-context';
import CartIcon from '@/app/assets/cart.svg';
import CartEmptyIcon from '@/app/assets/cart-empty.svg';


export default function CartButton({}) {
    const { cart } = useCart();
    const isCartEmpty = cart?.totalQuantity === 0;
    console.log(isCartEmpty)
    return (
        !isCartEmpty ? <CartIcon className="absolute right-16 cursor-pointer" /> : <CartEmptyIcon className="absolute right-16 cursor-pointer"/>
    )
}