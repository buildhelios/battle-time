import React from 'react';
import { atDotCss } from '@iyio/at-dot-css';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
    onClick?: () => void;
}

export function Button({ children, variant = 'primary', disabled, onClick }: ButtonProps) {
    const buttonClass = disabled
        ? style.disabled()
        : variant === 'secondary'
            ? style.secondary()
            : style.primary();

    return (
        <button
            disabled={disabled}
            className={buttonClass}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

const style = atDotCss({
    name: 'Button', css: `
    @.primary {
        display: inline-block;
        padding: 12px 20px;
        font-size: 1rem;
        border-radius: 8px;
        text-decoration: none;
        border: none;
        cursor: pointer;
        margin-bottom: 20px;
        transition: background-color 0.3s ease;
        background-color: #007bff;
        color: #ffffff;
    }
    @.primary:hover {
        background-color: #0056b3;
    }

    @.secondary {
        display: inline-block;
        padding: 12px 20px;
        font-size: 1rem;
        border-radius: 8px;
        text-decoration: none;
        border: none;
        cursor: pointer;
        margin-bottom: 20px;
        transition: background-color 0.3s ease;
        background-color: transparent;
        color: #ffffff;
        border: 2px solid #6c757d;
    }
    @.secondary:hover {
        background-color: #6c757d;
    }

    @.disabled {
        display: inline-block;
        padding: 12px 20px;
        font-size: 1rem;
        border-radius: 8px;
        text-decoration: none;
        border: none;
        cursor: pointer;
        margin-bottom: 20px;
        transition: background-color 0.3s ease;
        background-color: grey;
        color: #ffffff;
        cursor: not-allowed;
    }
`});
