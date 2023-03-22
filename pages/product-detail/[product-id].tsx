import { ProductModel } from '@/models/product';
import { PlusSmallIcon } from '@heroicons/react/24/solid';
import NavBar from '@/components/navbar';
import Head from 'next/head';
import Image from 'next/image';

const ProductDetail: React.FC<ProductModel> = (product) => {
    return (
        <>
            <Head>
                <title>Dourado's Store | {product.name}</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <NavBar />
            <section className="h-full w-full py-8 px-4">
                <div className="h-full w-fit my-0 mx-auto flex flex-col items-center bg-gray-800 rounded-3xl overflow-hidden">
                    <div className="h-2/4 w-[80vw] bg-gray-700 relative rounded-3xl shadow-inner">
                        <div className="h-full w-full absolute z-10 shadow-inner shadow-black rounded-tl-3xl rounded-tr-3xl"></div>
                        <Image
                            className="absolute top-0 left-0 z-0 object-cover"
                            fill
                            sizes="
                        (min-width: 768px) 1024px,
                        512px
                        "
                            src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=80"
                            alt="Product Image"
                        />
                    </div>
                    <div className="w-full py-3 flex flex-col justify-center items-center bg-black">
                        <h1 className="text-xl font-sans font-bold">
                            Hair mask
                        </h1>
                        <h2 className="mt-1 font-medium opacity-80">$ 60</h2>
                    </div>
                    <button className="w-full h-12 mt-auto pl-6 p-1 md:p-2 inline-flex items-center text-sm font-medium bg-[#0ca7a590] shadow focus:bg-[#0ca7a5] hover:shadow-md hover:bg-[#0ca7a599] transition-all">
                        <PlusSmallIcon className="w-6 h-6" />
                        <h3 className="ml-2 mr-1">Add to cart</h3>
                    </button>
                </div>
            </section>
        </>
    );
};

export default ProductDetail;
