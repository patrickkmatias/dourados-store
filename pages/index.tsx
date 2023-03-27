import { StoreContext } from '@/contexts/StoreContext';
import { useContext } from 'react';
import { ProductModel } from '@/models';
import { get } from '@/services/api';
import Layout from '@/components/Layout';
import Product from '@/components/Product';
import AnimatedLogo from '@/components/AnimatedLogo';
import AnimatedLoadingText from '@/components/AnimatedLoadingText';

export default function Home() {
    const { state } = useContext(StoreContext);
    const {
        cart: { cartItems },
    } = state;

    const {
        data: products,
        isLoading,
        isError,
    } = get<ProductModel[]>('products');

    if (isLoading) return (
        <div className="w-full h-full md:w-3/5 mx-auto flex flex-col justify-around items-center">
            <AnimatedLogo />
            <span className="w-3/5">
                <AnimatedLoadingText />
            </span>
        </div>
    );

    if (isError) return <div>Oh snap! We had an error!</div>;

    const hasProducts = cartItems.length === products!.length ? false : true;

    return (
        <>
            <Layout title="">
                <ul className="w-full px-4 pt-8 md:px-8 flex flex-col md:flex-row flex-wrap md:justify-around">
                    {products!.map((prod, i) => {
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
