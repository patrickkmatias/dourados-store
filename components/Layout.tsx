import { ReactNode } from 'react';
import Head from 'next/head';
import NavBar from '@/components/navbar';

interface LayoutProps {
    start?: boolean;
    title: string;
    children: ReactNode;
}

export default function Layout({ start, title, children }: LayoutProps) {
    return (
        <>
            <Head>
                {start ? (
                    <title>{title ? `${title} | ` : ''}Dourado's Store</title>
                ) : (
                    <title>Dourado's Store{title ? ` | ${title}` : ''}</title>
                )}
                <meta
                    name="description"
                    content={`Dourados Store ${title ? title : ''}`}
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <NavBar />
            <main className="h-full">{children}</main>
        </>
    );
}
