import React, { useState } from 'react';

import { Button } from './Button';
import { OptionCard } from './OptionCard';
import { Question } from '@battle-time/common';
import { atDotCss } from '@iyio/at-dot-css';

// Assuming interfaces are stored in a separate file

interface QuestionScreenProps {
    question: Question;
    questionIndex: number;
    totalQuestions: number;
    onNext: (selectedOptionId: string) => void;
    onBack: () => void;
}

function ProgressIndicator({ currentIndex, total }: { currentIndex: number; total: number }) {
    console.log('ProgressIndicator', currentIndex, total);
    return (
        <div className={style.progressContainer()}>
            {Array.from({ length: total }).map((_, index) => (
                <div
                    key={index}
                    className={`${style.progressDot()} ${index === (currentIndex) ? style.activeDot() : ''}`}
                />
            ))}
        </div>
    );
}

export function QuestionScreen({ question, questionIndex, totalQuestions, onNext, onBack }: QuestionScreenProps) {
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

    const handleSelectOption = (optionId: string) => {
        setSelectedOptionId(optionId);
    };

    const handleNext = () => {
        if (selectedOptionId) {
            onNext(selectedOptionId);
        }
    };

    return (
        <div className={style.container()}>
            <img src={question.imageUrl} alt="Question Image" className={style.image()} />
            <div className={style.content()}>
                <h2 className={style.title()}>{question.title}</h2>
                <p className={style.description()}>{question.description}</p>
                <div className={style.optionsContainer()}>
                    {question.options.map(option => (
                        <OptionCard
                            key={option.id}
                            option={option}
                            selected={option.id === selectedOptionId}
                            onSelect={() => handleSelectOption(option.id)}
                        />
                    ))}
                </div>
                <div className={style.actions()}>
                    <ProgressIndicator currentIndex={questionIndex} total={totalQuestions} />
                    <div className={style.actionsButton()}>
                        <Button variant='secondary' onClick={onBack}>Back</Button>
                        <Button
                            disabled={!selectedOptionId}
                            onClick={handleNext}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const style = atDotCss({
    name: 'QuestionComponent', css: `
    @.container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 40px;
        color: #ffffff;
        height: 80vh;
    }

    @.image {
        width: 30%;
    }

    @.content {
        max-width: 65%;
    }

    @.title {
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 20px;
    }

    @.description {
        font-size: 1.25rem;
        margin-bottom: 40px;
    }

    @.optionsContainer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    @.actions {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-top: 20px;
    }
    @.actionsButton {
        display: flex;
        gap: 20px;
    }

    @.progressContainer {
        display: flex;
        gap: 10px;
    }

    @.progressDot {
        width: 20px;
        height: 6px;
        border-radius: 6px;
        background-color: #6c757d;
    }

    @.activeDot {
        width: 38px;
        height: 6px;
        background-color: #007bff;
    }

    @.button {
        background-color: #007bff;
        color: #ffffff;
        padding: 12px 20px;
        font-size: 1rem;
        border-radius: 8px;
        text-decoration: none;
        border: none;
        cursor: pointer;
        margin-left: 20px; /* Add space between progress indicator and buttons */
    }

    @.button:disabled {
        background-color: #6c757d;
        cursor: not-allowed;
    }
`});
