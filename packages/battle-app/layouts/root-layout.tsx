import { Footer } from "../components/Footer";
import Header from "../components/Header";
import { atDotCss } from "@iyio/at-dot-css";

interface RootLayoutProps {
    children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <div className={style.root_layout()}>
            <Header />
            <main className={style.main()}>
                {children}
            </main>
            <Footer />
        </div>
    )
}

const style = atDotCss({
    name: 'RootLayout', css: `
    @.root_layout {
        display: flex;
        flex-direction: column;
        height: 100vh;
        padding: 20px 25px;
    }

    @.main {
        flex: 1;
    }
` });
