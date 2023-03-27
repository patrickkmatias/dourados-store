import { ProductModel } from '@/models';
import CheckoutButton from './CheckoutButton';

export default function CartFooter(props: ProductModel[]) {
    function sumPrices(items: ProductModel[]): number {
        let total = 0;
        items.forEach((i) => (total += i.price));
        return total;
    }

    const cartItems = Object.values(props);
    const itemsQuantity = cartItems.length;
    const total = sumPrices(cartItems);

    return (
        <footer className="w-full max-w-screen-xl p-8 pt-0 md:pt-8 flex flex-col md:flex-row fixed bottom-0 left-0 z-50 bg-black rounded-tl-3xl rounded-tr-3xl border-t-4 border-t-dourados-golden shadow-xl translate-center-x">
            <div className="flex-grow-[2]">
                <table className="w-full md:w-1/3 my-4">
                    <tbody>
                        <tr>
                            <td className="text-gray-200">Subtotal:</td>
                            <td>${total}.00</td>
                        </tr>
                        <tr>
                            <td className="text-gray-200">Items quantity:</td>
                            <td>{itemsQuantity}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <CheckoutButton {...props} />
        </footer>
    );
}
