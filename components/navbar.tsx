import { ShoppingCartIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import Link from 'next/link';

const NavBar = () => {
    const router = useRouter();
    const isRootPath = router.asPath === '/';

    return (
        <nav className="p-4 w-full fixed z-50 top-0 left-0 border-b-4 border-b-dourados-golden flex justify-between bg-black shadow-lg">
            <h1 className="inline-flex items-center px-3 text-2xl font-sans font-extrabold tracking-wide rounded-md">
                Store
            </h1>
            <Link
                href={isRootPath ? '/cart' : '/'}
                className="p-3 inline-flex bg-gray-800 rounded-md focus:bg-gray-700 transition-colors"
            >
                {isRootPath ? (
                    <>
                        <ShoppingCartIcon className="w-6 h-6" />
                        <p className="ml-3 hidden md:block">See your cart</p>
                    </>
                ) : (
                    <>
                        <ArrowLeftIcon className="w-6 h-6" />
                        <p className="ml-3 hidden md:block">Return to shop</p>
                    </>
                )}
            </Link>
        </nav>
    );
};

export default NavBar;
