import { ChevronRightIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import { ProductModel } from '@/models';
import getStripe from '@/utils/get-stripe';
import axios from 'axios';

export default function CheckoutButton(props: ProductModel[]) {
    const cartItems = Object.values(props);
    const stripeCart = cartItems.map((item: ProductModel) => {
        return {
            price: item.price_id,
            quantity: 1,
        };
    });

    async function handleSubmit() {
        // Create a Checkout Session.
        const checkoutSession = await axios.post(
            '/api/checkout_sessions',
            stripeCart
        );

        console.log('itworked');

        if ((checkoutSession as any).statusCode === 500) {
            console.error((checkoutSession as any).message);
            return;
        }

        // Redirect to Checkout.
        const stripe = await getStripe();
        const { error } = await stripe!.redirectToCheckout({
            sessionId: checkoutSession.data.id,
        });
        console.warn(error.message);
    }

    return (
        <button
            onClick={handleSubmit}
            className="flex-1 p-2 md:px-4 inline-flex justify-between items-center text-sm font-medium bg-[#0ca7a590] rounded-xl md:rounded-2xl shadow focus:bg-[#0ca7a5] hover:shadow-md hover:bg-[#0ca7a599] transition-all"
        >
            <span className="flex items-center">
                <CreditCardIcon className="w-6 h-6" />
                <h3 className="ml-2 md:ml-3 md:text-base">Checkout</h3>
            </span>
            <ChevronRightIcon className="w-5 md:w-6" />
        </button>
    );
}
