import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from '../components/GlobalStyles';

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Battle Time 🥳</title>
            </Head>
            <main className="app">
                <Component {...pageProps} />
            </main>
            <GlobalStyles/>
        </>
    );
}

export default CustomApp;
