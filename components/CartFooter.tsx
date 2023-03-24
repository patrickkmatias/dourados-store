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
        <footer className="w-full p-8 pt-0 md:pt-8 flex flex-col md:flex-row fixed bottom-0 left-0 z-50 bg-black rounded-tl-3xl rounded-tr-3xl border-t-4 border-t-dourados-golden shadow-xl">
            <div className="flex-grow-[2]">
                <table className="w-1/3 my-4">
                    <tbody>
                        <tr>
                            <td className="text-gray-200">Subtotal:</td>
                            <td>${sumPrices(cartItems)}.00</td>
                        </tr>
                        <tr>
                            <td className="text-gray-200">Items quantity:</td>
                            <td>{itemsQuantity}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button className="flex-1 p-2 md:px-4 inline-flex justify-between items-center text-sm font-medium bg-[#0ca7a590] rounded-xl md:rounded-2xl shadow focus:bg-[#0ca7a5] hover:shadow-md hover:bg-[#0ca7a599] transition-all">
                <span className="flex items-center">
                    <CreditCardIcon className="w-6 h-6" />
                    <h3 className="ml-2 md:ml-3 md:text-base">Checkout</h3>
                </span>
                <ChevronRightIcon className="w-5 md:w-6" />
            </button>
        </footer>
    );
}
