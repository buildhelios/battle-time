import { Button } from './Button';
import React from 'react';
import { atDotCss } from '@iyio/at-dot-css';

export function BattlePrep({ onStart }: { onStart: () => void }) {
    return (
        <div className={style.container()}>
            <div className={style.textContainer()}>
                <h1 className={style.title()}>Prepare for battle.</h1>
                <p className={style.description()}>
                    Take a moment to make a few selections and get ready to play!
                </p>
                <Button variant='secondary' onClick={onStart}>Let's get ready</Button>
                <a href="#" className={style.link()}>System requirements</a>
            </div>
            <div className={style.imageContainer()}>
                <img src="/images/image-1.png" alt="Astronauts" className={style.astronauts()} />
            </div>
        </div>
    );
}

const style = atDotCss({
    name: 'BattlePrep', css: `
    @.container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px;
        color: #ffffff;
        height: 80vh;
    }

    @.textContainer {
        max-width: 40%;
    }

    @.title {
        font-size: 3rem;
        font-weight: bold;
        margin-bottom: 20px;
    }

    @.description {
        font-size: 1.25rem;
        margin-bottom: 40px;
    }

    @.link {
        display: block;
        color: #6c757d;
        text-decoration: underline;
        font-size: 1rem;
    }

    @.imageContainer {
        max-width: 50%;
    }

    @.astronauts {
        width: 100%;
        height: auto;
    }

    @media (max-width: 768px) {
        @.container {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        @.textContainer {
            max-width: 100%;
            margin-bottom: 20px;
        }

        @.imageContainer {
            max-width: 80%;
        }
    }
`});
