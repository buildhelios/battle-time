import { atDotCss } from "@iyio/at-dot-css";

export function Footer() {
    return (
        <footer className={style.footer()}>
            <p>
                {new Date().getFullYear()} &copy; Impactive
            </p>
            <p>We make dope shit.</p>
        </footer>
    )
}

const style = atDotCss({
    name: 'Footer', css: `
    @.footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        color: grey;
    }
` });
