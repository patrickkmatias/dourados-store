import { PlusSmallIcon, PlusIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import { products } from '@/utils/data';
import Layout from '@/components/Layout';
import Image from 'next/image';

export default function ProductDetail() {
    const { slug } = useRouter().query;
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return <div>Produt Not Found</div>;
    }

    return (
        <>
            <Layout title={product.name} start>
                <section className="h-full w-full py-8 px-4">
                    <div className="h-full w-fit my-0 mx-auto flex flex-col md:flex-row items-center bg-gray-800 rounded-3xl overflow-hidden">
                        <div className="h-2/4 md:h-full w-[80vw] bg-gray-700 relative rounded-3xl shadow-inner">
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
                            <button className="w-full h-12 mt-auto pl-6 p-1 md:py-8 inline-flex items-center text-sm font-medium bg-[#0ca7a590] shadow focus:bg-[#0ca7a5] hover:shadow-md hover:bg-[#0ca7a599] transition-all">
                                <PlusIcon className="w-6 h-6 hidden md:block" />
                                <PlusSmallIcon className="w-6 h-6 block md:hidden" />
                                <h3 className="ml-2 mr-1 md:ml-4 md:text-base">
                                    Add to cart
                                </h3>
                            </button>
                        </article>
                    </div>
                </section>
            </Layout>
        </>
    );
}
