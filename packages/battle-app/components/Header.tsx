import { BarsIcon } from './BarsIcon';
import { Logo } from './Logo';
import { QuestionIcon } from './QuestionIcon';
import React from 'react';
import { atDotCss } from '@iyio/at-dot-css';

function Header() {
    return (
        <header className={style.header()}>
            <BarsIcon size="20px" />
            <Logo />
            <QuestionIcon size="20px" />
        </header>
    );
}

export default Header;


const style = atDotCss({
    name: 'Header', css: `
    @.header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }
` });


