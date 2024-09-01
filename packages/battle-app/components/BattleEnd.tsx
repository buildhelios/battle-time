import { Button } from './Button';
import React from 'react';
import { atDotCss } from '@iyio/at-dot-css';

export function BattleEnd({ onBack }: { onBack: () => void }) {
    return (
        <div className={style.container()}>
            <div className={style.textContainer()}>
                <h1 className={style.title()}>You're battle ready!</h1>
                <p className={style.description()}>
                    Review your selections and get ready to hit the battlefield. To the victor goes the spoils!
                </p>
                <div className={style.actions()}>
                    <Button variant='secondary' onClick={onBack} >Back</Button>
                    <Button
                    >
                        Let's rock n' roll
                    </Button>
                </div>
            </div>
            <div className={style.imageContainer()}>
                <img src="/images/image-6.png" alt="Astronauts" className={style.astronauts()} />
            </div>
        </div>
    );
}

const style = atDotCss({
    name: 'BattleEnd', css: `
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

        @.actions {
        display: flex;
        justify-content: start;
        align-items: start;
        width: 100%;
        margin-top: 20px;
        gap: 20px;
    }
`});
