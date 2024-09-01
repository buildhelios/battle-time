import { Question, apiBaseUrl } from "@battle-time/common";
import React, { useEffect } from "react";

import { BattleEnd } from "./BattleEnd";
import { QuestionScreen } from "./Question";

interface Answer {
    questionId: string;
    answerId: string;
}

export function Battle() {
    const [questions, setQuestions] = React.useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [question, setQuestion] = React.useState<Question | undefined>(undefined);
    const [answers, setAnswers] = React.useState<Answer[]>([]);
    const [completed, setCompleted] = React.useState(false);

    useEffect(() => {
        let m = true;
        (async () => {
            const response = await fetch(`${apiBaseUrl}questions`);
            if (!m) { return; }

            const questions: Question[] = await response.json();
            if (!m) { return; }

            console.log('Questions', questions);
            setQuestions(questions);
            setQuestion(questions[currentQuestionIndex]);
        })();
        return () => {
            m = false;
        }
    }, []);

    const onNext = (selectedOptionId: string) => {
        if (!question) return

        setAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            const existingAnswerIndex = newAnswers.findIndex(a => a.questionId === question.id);

            if (existingAnswerIndex !== -1) {
                newAnswers[existingAnswerIndex] = { questionId: question.id, answerId: selectedOptionId };
            } else {
                newAnswers.push({ questionId: question.id, answerId: selectedOptionId });
            }

            return newAnswers;
        });

        const nextIndex = currentQuestionIndex + 1;
        if (nextIndex < questions.length) {
            setCurrentQuestionIndex(nextIndex);
            setQuestion(questions[nextIndex]);
        }else{
            setCompleted(true);
        }
    };

    const onBack = () => {
        const prevIndex = currentQuestionIndex - 1;
        if (prevIndex >= 0) {
            setCurrentQuestionIndex(prevIndex);
            setQuestion(questions[prevIndex]);
        }
    };

    return (
        <div>
            {!completed && questions.length > 0 && (
                <QuestionScreen
                    totalQuestions={questions.length}
                    questionIndex={currentQuestionIndex}
                    key={question?.id}
                    question={question}
                    onNext={onNext}
                    onBack={onBack}
                />
            )}
            {
                completed && <BattleEnd onBack={() => setCompleted(false)} />
            }
        </div>
    );
}
