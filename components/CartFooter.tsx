import { ChevronRightIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import { ProductModel } from '@/models';

export default function CartFooter(cartItems: ProductModel[]) {
    const itemsQuantity = Object.keys(cartItems).length;

    function sumPrices(items: ProductModel[]): number {
        let total = 0;

        for (let i in items) {
            total += items[i].price;
        }

        return total;
    }

    return (
        <footer className="w-full p-8 pt-0 flex flex-col fixed bottom-0 left-0 z-50 bg-black border-t-4 border-t-dourados-golden">
            <table className="my-4">
                <tbody>
                    <tr>
                        <td>Subtotal:</td>
                        <td>${sumPrices(cartItems)}.00</td>
                    </tr>
                    <tr>
                        <td>Items quantity:</td>
                        <td>{itemsQuantity}</td>
                    </tr>
                </tbody>
            </table>
            <button className="w-full p-2 md:p-2 inline-flex justify-between items-center text-sm font-medium bg-[#0ca7a590] rounded-lg shadow focus:bg-[#0ca7a5] hover:shadow-md hover:bg-[#0ca7a599] transition-all">
                <span className="flex items-center">
                    <CreditCardIcon className="w-6 h-6" />
                    <h3 className="ml-2">Checkout</h3>
                </span>
                <ChevronRightIcon className="w-5 h-5" />
            </button>
        </footer>
    );
}
