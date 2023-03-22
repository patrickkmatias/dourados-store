import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const NavBar = () => {
    return (
        <nav className="p-4 w-full border-b-4 border-b-dourados-golden flex justify-between bg-black shadow-lg">
            <h1 className="inline-flex items-center px-3 text-2xl font-sans font-extrabold tracking-wide rounded-md">
                Store
            </h1>
            <Link
                href="/cart"
                className="p-3 inline-flex bg-gray-800 rounded-md focus:bg-gray-700 transition-colors"
            >
                <ShoppingCartIcon className="w-6 h-6" />
                <p className="ml-3 hidden md:block">See your cart</p>
            </Link>
        </nav>
    );
};

export default NavBar;
