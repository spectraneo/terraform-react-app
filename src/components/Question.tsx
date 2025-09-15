import type { QuizQuestion } from '../data/quizData';

interface QuestionProps {
    question: QuizQuestion;
    selectedAnswer: number | null;
    onAnswerSelect: (answerIndex: number) => void;
    showResult: boolean;
}

export function Question({ question, selectedAnswer, onAnswerSelect, showResult }: QuestionProps) {
    const getOptionClassName = (optionIndex: number) => {
        if (!showResult) {
            return selectedAnswer === optionIndex ? 'option selected' : 'option';
        }

        if (optionIndex === question.correctAnswer) {
            return 'option correct';
        }

        if (selectedAnswer === optionIndex && optionIndex !== question.correctAnswer) {
            return 'option incorrect';
        }

        return 'option';
    };

    return (
        <div className="question-container">
            <h2 className="question-text">{question.question}</h2>
            <div className="options-container">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className={getOptionClassName(index)}
                        onClick={() => !showResult && onAnswerSelect(index)}
                        disabled={showResult}
                    >
                        {option}
                    </button>
                ))}
            </div>
            {showResult && (
                <div className="explanation">
                    <p><strong>Explanation:</strong> {question.explanation}</p>
                </div>
            )}
        </div>
    );
}