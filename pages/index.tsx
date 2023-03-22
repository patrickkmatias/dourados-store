import Head from 'next/head';
import { ProductModel } from '@/models/product';
import Product from '@/components/product';
import NavBar from '@/components/navbar';

const prods: ProductModel[] = [
    {
        id: 1,
        name: 'Hair clipper',
        price: 90,
        imageUrl:
            'https://images.unsplash.com/photo-1621607512022-6aecc4fed814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    },
    {
        id: 2,
        name: 'Razor blade',
        price: 30,
        imageUrl:
            'https://images.unsplash.com/photo-1634484144875-b5ef32d2fe92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
        id: 3,
        name: 'Hair mask',
        price: 60,
        imageUrl:
            'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=80',
    },
    {
        id: 1,
        name: 'Hair clipper',
        price: 90,
        imageUrl:
            'https://images.unsplash.com/photo-1621607512022-6aecc4fed814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    },
    {
        id: 2,
        name: 'Razor blade',
        price: 30,
        imageUrl:
            'https://images.unsplash.com/photo-1634484144875-b5ef32d2fe92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
    },
    {
        id: 3,
        name: 'Hair mask',
        price: 60,
        imageUrl:
            'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=753&q=80',
    },
];

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
                    {prods.map((prod, i) => {
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
