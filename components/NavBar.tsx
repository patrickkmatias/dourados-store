import { ShoppingCartIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { StoreContext } from '@/contexts/StoreContext';
import Link from 'next/link';

export default function NavBar() {
    const { state } = useContext(StoreContext);
    const [loading, setLoading] = useState(false);
    const {
        cart: { cartItems },
    } = state;

    const router = useRouter();
    const isRootPath = router.asPath === '/';
    const itemsQuantity = Object.keys(cartItems).length;

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleComplete = () => setLoading(false);
    
        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);
    
        return () => {
          router.events.off('routeChangeStart', handleStart);
          router.events.off('routeChangeComplete', handleComplete);
          router.events.off('routeChangeError', handleComplete);
        };
      }, [router]);

    return (
        <nav className={`p-4 w-full fixed z-50 top-0 left-0 rounded-bl-3xl rounded-br-3xl border-b-4 border-b-dourados-golden flex justify-between bg-black shadow-xl ${loading ? 'loading-nav' : ''}`}>
            <h1 className="inline-flex items-center px-3 text-2xl font-sans font-extrabold tracking-wide rounded-md">
                Store
            </h1>
            <div className="flex flex-row-reverse">
                <Link
                    href="/cart"
                    className="p-3 mx-3 inline-flex bg-gray-800 rounded-2xl focus:bg-gray-700 transition-colors"
                >
                    <ShoppingCartIcon className="w-6 h-6" />
                    {itemsQuantity ? (
                        <span className="w-6 h-6 ml-3 px-1 flex justify-center items-center text-sm rounded-3xl bg-dourados-golden bg-opacity-95 shadow">
                            {itemsQuantity}
                        </span>
                    ) : (
                        <></>
                    )}
                    <p className="ml-3 hidden md:block">See your cart</p>
                </Link>
                {!isRootPath ? (
                    <>
                        <Link
                            href={isRootPath ? '/cart' : '/'}
                            className="p-3 inline-flex bg-gray-800 rounded-2xl focus:bg-gray-700 transition-colors"
                        >
                            <ArrowLeftIcon className="w-6 h-6" />
                            <p className="ml-3 hidden md:block">
                                Return to shop
                            </p>
                        </Link>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </nav>
    );
}
