import React, { useState } from 'react';

import { Option } from '@battle-time/common';
import { atDotCss } from '@iyio/at-dot-css';

interface OptionCardProps {
    option: Option;
    selected?: boolean;
    onSelect: () => void;
}

export function OptionCard({ selected = false, onSelect, option }: OptionCardProps) {
    const cardClass = selected ? style.cardSelected() : style.cardDefault();
    return (
        <div className={cardClass} onClick={onSelect}>
            <h3 className={style.title()}>{option.title}</h3>
            <p className={style.description()}>{option.description}</p>
            {selected && <div className={style.checkIcon()}>✓</div>}
        </div>
    );
}

const style = atDotCss({
    name: 'OptionCard', css: `
    @.cardDefault {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: rgba(255, 255, 255, 0.15);
        color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        border: 2px solid grey;
        transition: border-color 0.3s ease;
        cursor: pointer;
        position: relative;
    }
    @.cardSelected {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: rgba(255, 255, 255, 0.2);
        color: #ffffff;
        padding: 20px;
        border-radius: 12px;
        border: 2px solid #007bff;
        transition: border-color 0.3s ease;
        cursor: pointer;
        position: relative;
    }


    @.title {
        font-size: 1.5rem;
        margin-bottom: 10px;
    }

    @.description {
        font-size: 1rem;
        color: #b5b5b5;
    }

    @.checkIcon {
        position: absolute;
        top: 10px;
        right: 10px;
        width: 30px;
        height: 30px;
        background-color: #007bff;
        color: white;
        border-radius: 50%;
        padding: 5px;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`});
