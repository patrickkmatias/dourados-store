import { StoreContext } from '@/contexts/StoreContext';
import { useContext } from 'react';
import { ProductModel } from '@/models';
import { get } from '@/services/api';
import Layout from '@/components/Layout';
import Product from '@/components/Product';
import AnimatedLogo from '@/components/AnimatedLogo';
import AnimatedLoadingText from '@/components/AnimatedLoadingText';
import Head from 'next/head';

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

    const hasProducts = products? cartItems.length === products!.length ? false : true : true;

    return (
        <>
            {/* SEO Meta Tags - Now outside of the loading conditional */}
            <Head>
                <title>Dourados Store - Shop Premium Products</title>
                <meta name="description" content="Discover a curated selection of high-quality products at Dourados Store. Shop now and experience the difference." />
                <meta name="keywords" content="Dourados, store, shop, products, premium, high-quality, online shopping, ecommerce" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Dourados Store - Shop Premium Products" />
                <meta property="og:description" content="Discover a curated selection of high-quality products at Dourados Store. Shop now and experience the difference." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://dourados-store.vercel.app/" />
            </Head>

            <Layout title="">
              {isLoading ? (
                  <div className="w-full h-full md:w-3/5 mx-auto flex flex-col justify-around items-center">
                      <AnimatedLogo />
                      <span className="w-3/5">
                          <AnimatedLoadingText />
                      </span>
                  </div>
              ) : isError ? (
                <div>Oh snap! We had an error!</div>
            ):(
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
              )}
            </Layout>
        </>
    );
}
