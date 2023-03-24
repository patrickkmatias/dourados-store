import { useContext } from 'react';
import { StoreContext } from '@/contexts/StoreContext';
import Layout from '@/components/Layout';
import Product from '@/components/Product';
import CartFooter from '@/components/CartFooter';
import Link from 'next/link';

export default function Cart() {
    const { state } = useContext(StoreContext);
    const {
        cart: { cartItems },
    } = state;

    const hasItems = cartItems.length > 0 ? true : false;

    return (
        <Layout title="Cart">
            <section
                className={`w-full flex flex-col items-center text-center ${
                    hasItems ? `h-fit justify-start` : `h-full justify-between`
                }`}
            >
                <h1 className="mt-8 my-0 mx-auto text-3xl font-sans font-bold tracking-wide rounded-md">
                    Shopping Cart
                </h1>
                {hasItems ? (
                    <ul className="w-full h-fit px-4 pt-8 md:px-8 flex flex-col md:flex-row flex-wrap md:justify-around text-start">
                        {cartItems.map((prod) => (
                            <li
                                key={prod.slug}
                                className="w-full h-fit md:w-[45%] mb-8"
                            >
                                <Product {...prod} cartItem />
                            </li>
                        ))}
                    </ul>
                ) : (
                    <>
                        <h2 className="text-xl mb-4">Your cart is empty.</h2>
                        <h3 className="px-8 mb-8 font-light text-sm text-gray-300">
                            Give a look at{' '}
                            <Link href={'/'} className="text-dourados-golden">
                                our products
                            </Link>{' '}
                            and put them in your cart before buying =)
                        </h3>
                    </>
                )}
            </section>
            {hasItems ? (
                <>
                    <CartFooter {...cartItems}></CartFooter>
                    <div className="h-[160px] w-full"></div>
                </>
            ) : (
                <></>
            )}
        </Layout>
    );
}
