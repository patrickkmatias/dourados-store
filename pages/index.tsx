import { StoreContext } from '@/contexts/StoreContext';
import { useContext } from 'react';
import { products } from '@/utils/data';
import Layout from '@/components/Layout';
import Product from '@/components/Product';

export default function Home() {
    const { state } = useContext(StoreContext);
    const {
        cart: { cartItems },
    } = state;

    // MUST be changed when receiving external data,
    // preferably with greater than '>'
    const hasProducts = cartItems.length === 3 ? false : true;

    return (
        <>
            <Layout title="">
                <ul className="w-full px-4 pt-8 md:px-8 flex flex-col md:flex-row flex-wrap md:justify-around">
                    {products.map((prod, i) => {
                        return (
                            <li key={i} className="w-full md:w-[45%] mb-8">
                                <Product {...prod} />
                            </li>
                        );
                    })}
                    {/* No more products UI feedback */}
                    {!hasProducts ? (
                        <>
                            <h2 className="text-xl mb-4 text-center">
                                Whoa! There are no more products in the store
                                for you!
                            </h2>
                            <h3 className="px-8 mb-8 font-light text-sm text-center text-gray-300">
                                You're in the right way!
                            </h3>
                        </>
                    ) : (
                        <></>
                    )}
                </ul>
            </Layout>
        </>
    );
}
