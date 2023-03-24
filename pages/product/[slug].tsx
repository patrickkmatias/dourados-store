import { PlusSmallIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import { StoreContext } from '@/contexts/StoreContext';
import { useContext } from 'react';
import { products } from '@/utils/data';
import Layout from '@/components/Layout';
import Image from 'next/image';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function ProductDetail() {
    const { state, dispatch } = useContext(StoreContext);
    const { slug } = useRouter().query;
    const product = products.find((p) => p.slug === slug);
    const added = state.cart.cartItems.find((p) => p.slug === slug);

    if (!product) {
        return <div>Product Not Found</div>;
    }

    function addProductHandler() {
        dispatch({ type: 'CART_ADD_ITEM', payload: product! });
    }

    return (
        <>
            <Layout title={product.name} start>
                <section className="h-full w-full py-8 px-4">
                    <div className="h-full w-[80vw] my-0 mx-auto flex flex-col md:flex-row items-center bg-gray-800 rounded-3xl overflow-hidden">
                        <div className="h-2/4 md:h-full w-full bg-gray-700 relative rounded-3xl shadow-inner">
                            <div className="h-full w-full absolute z-10 shadow-inner shadow-black rounded-tl-3xl rounded-tr-3xl md:rounded-tr-none md:rounded-bl-3xl"></div>
                            <Image
                                className="absolute top-0 left-0 z-0 object-cover"
                                fill
                                sizes="
                            (min-width: 768px) 1024px,
                            512px
                            "
                                src={product.imageUrl}
                                alt="Product Image"
                            />
                        </div>
                        <article className="h-full w-full flex flex-col justify-between">
                            <div className="w-full py-3 md:py-6 flex flex-col items-center bg-black">
                                <h1 className="text-xl md:text-2xl font-sans font-bold">
                                    {product.name}
                                </h1>
                                <h2 className="mt-1 md:text-lg font-medium opacity-80">
                                    $ {product.price}
                                </h2>
                            </div>
                            <button
                                onClick={addProductHandler}
                                className={`w-full h-12 mt-auto pl-6 p-1 md:py-8 inline-flex items-center text-sm font-medium shadow hover:shadow-md transition-all ${added ? `bg-green-500 hover:bg-green-600 focus:bg-green-600` : `bg-[#0ca7a590] hover:bg-[#0ca7a599] focus:bg-[#0ca7a5] `}`}
                            >
                                <h3 className="max-w-fit inline-flex items-center mr-1 md:ml-4 md:text-base">
                                    {added ? (
                                        <>
                                            <CheckCircleIcon className="w-6 mr-2" />{' '}
                                            Product added successfully!
                                        </>
                                    ) : (
                                        <>
                                            <PlusIcon className="w-6 mr-2 hidden md:block" />
                                            <PlusSmallIcon className="w-6 mr-2 block md:hidden" />
                                            Add to cart
                                        </>
                                    )}
                                </h3>
                            </button>
                        </article>
                    </div>
                </section>
            </Layout>
        </>
    );
}
