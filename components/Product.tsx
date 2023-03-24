import { StoreContext } from '@/contexts/StoreContext';
import { ProductModel } from '@/models/ProductModel';
import {
    PlusSmallIcon,
    EllipsisHorizontalIcon,
    MinusCircleIcon,
    CheckCircleIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';

export default function Product(
    product: ProductModel & { cartItemView?: boolean }
) {
    const { state, dispatch } = useContext(StoreContext);
    const added = state.cart.cartItems.find((p) => p.slug === product.slug);

    function addProductHandler() {
        dispatch({ type: 'CART_ADD_ITEM', payload: product! });
    }

    function removeProductHandler() {
        dispatch({ type: 'CART_ADD_ITEM', payload: product! });
    }

    return (
        <section className="h-32 md:h-48 w-full flex rounded-3xl overflow-hidden shadow-lg">
            <div className="h-full w-32 md:w-48 bg-gray-700 relative overflow-hidden">
                <div className="h-full w-full absolute z-10 shadow-inner shadow-black rounded-tl-3xl rounded-bl-3xl"></div>
                <Image
                    className="absolute top-0 left-0 z-0 object-cover"
                    fill
                    sizes="
                    (min-width: 768px) 192px,
                    128px
                    "
                    src={product.imageUrl}
                    alt="Product Image"
                />
            </div>
            <article className="p-4 flex-1 flex flex-col bg-gray-800">
                <h1 className="text-xl font-sans font-bold">{product.name}</h1>
                <h2 className="text-sm font-medium opacity-80">
                    $ {product.price}
                </h2>
                <div className="mt-auto">
                    {/* Change buttons according view */}
                    {product.cartItemView ? (
                        <button
                            onClick={removeProductHandler}
                            className="w-fit p-1 md:p-2 inline-flex items-center text-sm font-medium bg-red-700 rounded-lg shadow focus:bg-red-600 hover:shadow-md hover:bg-red-600 transition-all"
                        >
                            <MinusCircleIcon className="w-6 h-6" />
                            <h3 className="ml-2 mr-1">Remove</h3>
                        </button>
                    ) : (
                        <>
                            <button
                                onClick={addProductHandler}
                                className={`w-fit p-1 md:p-2 inline-flex items-center text-sm font-medium rounded-lg shadow hover:shadow-md transition-all ${
                                    added
                                        ? `bg-green-500 hover:bg-green-600 focus:bg-green-600`
                                        : `bg-[#0ca7a590] hover:bg-[#0ca7a599] focus:bg-[#0ca7a5] `
                                }`}
                            >
                                {added ? (
                                    <>
                                        <CheckCircleIcon className="w-6 h-6" />
                                        <h3 className="hidden md:inline ml-2 mr-1">
                                            Added!
                                        </h3>
                                    </>
                                ) : (
                                    <>
                                        <PlusSmallIcon className="w-6 h-6" />
                                        <h3 className="hidden md:inline ml-2 mr-1">
                                            Add to cart
                                        </h3>
                                    </>
                                )}
                            </button>
                        </>
                    )}
                    <Link
                        href={`/product/${product.slug}`}
                        className="w-fit ml-2 md:ml-4 p-1 md:p-2 inline-flex items-center text-sm font-medium bg-[#0ca7a590] rounded-lg shadow focus:bg-[#0ca7a5] hover:shadow-md hover:bg-[#0ca7a599] transition-all"
                    >
                        <EllipsisHorizontalIcon className="w-6 h-6" />
                        <h3 className="hidden md:inline ml-2 mr-1">
                            See details
                        </h3>
                    </Link>
                </div>
            </article>
        </section>
    );
}
