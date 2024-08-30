import { NextJsApp } from '@iyio/nextjs-common';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyles } from '../components/GlobalStyles';

export default function App({env,...props}:AppProps&{env:Record<string,string>}){
    return (
        <NextJsApp
            appProps={props as any}
            GlobalStyle={GlobalStyles}
        >
            <Head>
                <title>Battle Time 🥳</title>
            </Head>
        </NextJsApp>
    );
}
