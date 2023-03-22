import { Html, Head, Main, NextScript } from 'next/document';
import NavBar from '@/components/navbar';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Yellowtail&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <NavBar />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
