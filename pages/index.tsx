import { products } from '@/utils/data';
import Head from 'next/head';
import Product from '@/components/product';
import NavBar from '@/components/navbar';

export default function Home() {
    return (
        <>
            <Head>
                <title>Dourado's Store</title>
                <meta name="description" content="Dourados Store" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <NavBar />
            <main>
                <ul className="w-full px-4 pt-8 md:px-8 flex flex-col md:flex-row flex-wrap justify-around">
                    {products.map((prod, i) => {
                        return (
                            <li key={i} className="w-full md:w-[45%] mb-8">
                                <Product {...prod} />
                            </li>
                        );
                    })}
                </ul>
            </main>
        </>
    );
}
