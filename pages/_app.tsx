import '@/styles/globals.css';
import '@/styles/animated-logo.css';
import '@/styles/animated-loading-text.css';

import type { AppProps } from 'next/app';
import { StoreProvider } from '@/contexts/StoreContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <StoreProvider>
                <Component {...pageProps} />
            </StoreProvider>
        </QueryClientProvider>
    );
}
