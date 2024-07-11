import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import '../app/globals.css';

export default function MyApp({ Component, pageProps, router }: AppProps) {
    return (
        <div className='main'>
            <AnimatePresence mode='wait'>
                <Component key={router.route} {...pageProps} />
            </AnimatePresence>
        </div>
    );
}