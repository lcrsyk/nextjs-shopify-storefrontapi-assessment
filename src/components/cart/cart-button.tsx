
import { useCart } from './cart-context';
import CartIcon from '@/app/assets/cart.svg';
import CartEmptyIcon from '@/app/assets/cart-empty.svg';


export default function CartButton({onClick}: {onClick: () => void}) {
    const { cart } = useCart();
    const isCartEmpty = cart?.totalQuantity === 0;
    return (
        !isCartEmpty ? <button onClick={() => { onClick()}}><CartIcon className="absolute right-16 cursor-pointer" /></button> : <button onClick={() => { onClick()}}><CartEmptyIcon className="absolute right-16 cursor-pointer"/></button>
    )
}