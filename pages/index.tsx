import { products } from '@/utils/data';
import Layout from '@/components/Layout';
import Product from '@/components/product';

export default function Home() {
    return (
        <>
            <Layout title="">
                <ul className="w-full px-4 pt-8 md:px-8 flex flex-col md:flex-row flex-wrap justify-around">
                    {products.map((prod, i) => {
                        return (
                            <li key={i} className="w-full md:w-[45%] mb-8">
                                <Product {...prod} />
                            </li>
                        );
                    })}
                </ul>
            </Layout>
        </>
    );
}
